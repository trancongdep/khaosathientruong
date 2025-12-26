// sw.js - Service Worker đơn giản
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // Thêm các file css, js hoặc hình ảnh khác nếu cần
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
