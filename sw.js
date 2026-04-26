const CACHE = 'hamal-v1.1.4';
const ASSETS = [
  '/Hamal/',
  '/Hamal/index.html',
  '/Hamal/app.html',
  '/Hamal/manifest.json',
  '/Hamal/icon-192.png',
  '/Hamal/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('firebase') || e.request.url.includes('googleapis')) return;
  // Network first — always fetch fresh, fall back to cache offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
