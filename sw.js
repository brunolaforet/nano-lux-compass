const CACHE_NAME = 'lux-compass-v1.0';
const ASSETS = [
  '/nano-lux-compass/',
  '/nano-lux-compass/index.html',
  '/nano-lux-compass/manifest.json',
    '/nano-lux-compass/icon.svg'
];

// Installation : mise en cache + skipWaiting chaîné correctement
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(ASSETS.map(url =>
        cache.add(url).catch(err => console.log("Fichier non bloquant manquant :", url))
      ));
    }).then(() => self.skipWaiting())
  );
});

// Activation : nettoyage des anciennes versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null)
    )).then(() => self.clients.claim())
  );
});

// Stratégie : CACHE-FIRST (priorité absolue au local — mode avion OK)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(res => {
      return res || fetch(e.request).catch(() => {
        if (e.request.mode === 'navigate') return caches.match('/nano-lux-compass/index.html');
      });
    })
  );
});
