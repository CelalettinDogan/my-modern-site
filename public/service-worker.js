const CACHE_NAME = "bankokupon-pro-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/offline.html", // Çevrimdışı sayfası (bunu da oluşturalım)
  "/static/js/bundle.js", // React bundle'ı
  "/static/css/main.css", // CSS dosyaları
];

// Service Worker kurulumu ve önbelleğe alma
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Çevrimdışı modda cache'lenmiş dosyaları kullan
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match("/offline.html");
      });
    })
  );
});

// Eski cache'leri temizleme
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
