// Polaris service worker: keeps the app opening with no network.
const CACHE = "polaris-v7";
const SHELL = ["./", "index.html", "app.js", "config.js", "manifest.webmanifest", "pro.mp3", "icons/icon-192.png", "icons/icon-512.png"];
const CDN = ["cdnjs.cloudflare.com", "cdn.jsdelivr.net", "fonts.googleapis.com", "fonts.gstatic.com"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  const own = url.origin === self.location.origin, cdn = CDN.includes(url.hostname);
  if (!own && !cdn) return; // never touch database or sign-in requests
  if (own) { // newest version first, saved copy when offline
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  } else { // libraries and fonts: saved copy first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; })));
  }
});
