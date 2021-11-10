// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
