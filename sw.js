const CACHE_NAME = 'tool-app-cache-v1';
const urlsToCache = [
  '/compress.html',
  '/converter.html',
  '/editor.html',
  '/profile.html',
  '/qr.html',
  '/sw.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
