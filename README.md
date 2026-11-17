# Polaris Deni

Daftari la deni na vitabu vya duka, bila malipo. A free debt book and daily shop books for Kenyan shops.

- `index.html`, `app.js`: the app. No build step.
- `manifest.webmanifest`, `sw.js`, `icons/`: make it installable and usable offline (PWA).
- `config.js`: Supabase project URL and public anon key. Empty means records stay on the phone only.
- `schema.sql`: run once in the Supabase SQL editor. Creates the `shops` and `pages` tables with row-level security.

## Switching on accounts

1. Create a free project at supabase.com.
2. SQL Editor: paste `schema.sql` and run it.
3. Authentication > Sign In / Providers > Email: turn **Confirm email** off.
4. Settings > API: copy the project URL and the anon (publishable) key into `config.js`.

Shops then sign in with their phone number and a 6-digit PIN. No Google sign-in and no SMS.
