self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
