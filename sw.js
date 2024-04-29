// 'use strict';
// importScripts('sw-toolbox.js');
// toolbox.precache(['index.html','style/style.css']);
// toolbox.router.get('/images/*', toolbox.cacheFirst);
// toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});

self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.message,
        icon: 'icons/android-icon-72x72.png',
        vibrate: [100, 50, 100],
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});