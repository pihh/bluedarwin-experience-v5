self.addEventListener('install', (event) => {
  // wait until promise resolved/rejected
  event.waitUntil(
    // use cache store called v1
    caches.open(cacheVersion.static).then((cache) => {
      // Cache all these urls
      return cache.addAll([
        '/',
        '/index.html',
        // '/css/index.css',
        // '/js/index.js',
        // '/img/image.png',
      ]);
    })
  );
});
