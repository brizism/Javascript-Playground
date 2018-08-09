const cacheName = 'v1';

// add files individuallly in array
const cacheAssets = [
  '/serviceWorkers/index.html',
  '/serviceWorkers/about.html',
  '/serviceWorkers/js/main.js'
]


// Call install event
self.addEventListener('install', e => {
  console.log('Service worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
})

// Call activate event
self.addEventListener('activate', e => {
  console.log('Service worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if(cache !== cacheName){
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      )
    })
  )
})

// Call fetch event
self.addEventListener('fetch', e => {
  console.log('Service worker: Fetching');
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
})