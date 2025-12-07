// This service worker immediately unregisters itself and clears all caches
// Used to clean up after removing PWA functionality

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', async () => {
  // Clear all caches
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map(cacheName => {
      console.log('Deleting cache:', cacheName);
      return caches.delete(cacheName);
    })
  );
  
  // Unregister this service worker
  self.registration.unregister().then(() => {
    console.log('Service worker unregistered');
  });
  
  // Take control of all clients immediately
  await self.clients.claim();
  
  // Reload all open tabs
  const clients = await self.clients.matchAll({ type: 'window' });
  clients.forEach(client => client.navigate(client.url));
});

