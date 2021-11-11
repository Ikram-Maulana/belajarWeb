import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const {
  assets,
} = global.serviceWorkerOption;

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', (event) => {
  console.log(event.request);

  if (!(event.request.url.indexOf('http') === 0)) return; // skip the request. if request is not made with http protocol

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
