var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  // '/',
  '/article.amp.html',
  '/base.js',
  '/base.css',
  '/amp_favicon.png',
  '/blocky-mountains-1.jpg',
  // '/icons/home.png',
  // '/icons/Icon',
  '/images/ecoteki_icon-128x128.png',
  '/images/ecoteki_icon-144x144.png',
  '/images/ecoteki_icon-152x152.png',
  '/images/ecoteki_icon-192x192.png',
  '/mountains_2x.jpg',
  '/mountains-1.jpg',
  '/mountains-2.jpg',
  '/mountains-3.jpg',
  '/mountains.jpg',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        // return cache.addAll(urlsToCache);
        // return urlsToCache.forEach(function (url) { cache.add(url).catch(function (e){ console.log("ERROR! : " + url); })});
        return urlsToCache.forEach(function (url) { cache.add(url)});
      })
  );
});
