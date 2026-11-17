-- Polaris database. Paste this once into Supabase > SQL Editor > Run.

-- 1. SHOPS: the sign-up register. One row per shop that creates an account. Kept permanently.
create table if not exists public.shops (
  user_id        uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  shop_name      text not null default '',
  phone          text not null default '',
  area           text not null default '',
  lang           text not null default 'sw',
  chama_interest text not null default '',          -- yes / maybe / no, from the chama question
  chama_want     text not null default '',          -- bulk / refer / save / train
  chama_fee      text not null default '',          -- monthly fee they called fair: 200 / 500 / 1000 / 0
  invited_by     text not null default '',          -- phone (0xxxxxxxxx) of the shop that invited them, if any
  created_at     timestamptz not null default now(), -- when they signed up
  updated_at     timestamptz not null default now(), -- last time their details changed
  last_active    timestamptz not null default now()  -- last day they used Polaris while signed in
);

-- 2. PAGES: each shop's private records. One "meta" page (shop, customers, settings)
--    plus one page per month of sales, debts, payments and closed days. Nothing expires.
create table if not exists public.pages (
  user_id    uuid not null default auth.uid() references auth.users(id) on delete cascade,
  page       text not null,                          -- 'meta' or a month such as '2026-11'
  data       jsonb not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, page)
);

-- Row-level security: every request is checked, and a signed-in shop only ever reaches its own rows.
alter table public.shops enable row level security;
alter table public.pages enable row level security;

create policy "read own shop"   on public.shops for select using (auth.uid() = user_id);
create policy "create own shop" on public.shops for insert with check (auth.uid() = user_id);
create policy "change own shop" on public.shops for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- no delete policy on shops: a sign-up stays on the register.

create policy "read own pages"   on public.pages for select using (auth.uid() = user_id);
create policy "create own pages" on public.pages for insert with check (auth.uid() = user_id);
create policy "change own pages" on public.pages for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own pages" on public.pages for delete using (auth.uid() = user_id);

-- 3. INVITES: how many shops a signed-in shop has brought in. A shop never sees other shops'
--    rows (row-level security forbids it), so this runs as a trusted function that only returns a count.
create or replace function public.my_invites()
returns integer
language sql
security definer
set search_path = public
as $$
  select count(*)::int
  from public.shops
  where invited_by <> ''
    and invited_by = (select phone from public.shops where user_id = auth.uid());
$$;
grant execute on function public.my_invites() to authenticated;

-- For you, in the dashboard (Table Editor > shops), or as queries in the SQL editor:
--   select invited_by, count(*) from public.shops where invited_by <> '' group by 1 order by 2 desc; -- who brought in the most shops
--   select count(*) from public.shops;                                                    -- shops signed up, ever
--   select count(*) from public.shops where last_active > now() - interval '7 days';       -- shops active this week
--   select shop_name, phone, area, created_at, last_active from public.shops order by created_at desc;
--   select chama_interest, chama_fee, count(*) from public.shops group by 1, 2;            -- chama answers
