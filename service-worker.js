
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('workout-tracker').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './week2.html',
        './week3.html',
        './manifest.json',
        './icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
