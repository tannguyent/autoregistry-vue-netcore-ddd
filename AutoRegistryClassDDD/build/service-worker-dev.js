// This service worker file is effectively a 'no-op' that will reset any
// previous service worker registered for the same host:port combination.
// In the production build, this file is replaced with an actual service worker
// file that will precache your site's local assets.
// See https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432

self.addEventListener('install', (event) => self.skipWaiting());

self.addEventListener('activate', (event) => {
    console.log('service worker is activating....')

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );

    self.clients.matchAll({
        type: 'window'
    }).then(windowClients => {
        for (let windowClient of windowClients) {
            // Force open pages to refresh, so that they have a chance to load the
            // fresh navigation response from the local dev server.
            windowClient.navigate(windowClient.url);
        }
    });
});


// listen for outgoing network request
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            // Cache hit - return response
            if (response) {
                console.log('response exit in cache', response)
                return response;
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200) {
                        console.log('response error', response)
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open('vue-serviceworker')
                        .then(function (cache) {
                            console.log('push data to cache', event.request)
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});

self.addEventListener('message', function (event) {
    console.log('recevied message');
    if (event.data.command == 'clearCaches') {
        console.log('recevied message: clear caches');
        caches.open('vue-serviceworker')
            .then(function (cache) {
                cache.keys()
                    .then(function (keys) {
                        keys.map(function (cacheName) {
                            return cache.delete(cacheName);
                        })
                    });
            });
    }
});