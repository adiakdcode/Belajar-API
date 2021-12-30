const CACHE_NAME = "AFRental";
var urlsToCache = [
  "/",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
  "https://kit.fontawesome.com/a8b8bd3e57.js",
  "/manifest.json",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/data.html",
  "/pages/diagnosa.html",
  "/pages/store.html",
  "/css/animate.css",
  "/css/petek-style.css",
  "/css/petek-bootstrap.css",
  "/css/sweetalert2.min.css",
  "/js/popper.min.js",
  "/js/petek-script.js",
  "/js/bootstrap.js",
  "/js/jquery-3.5.1.min.js",
  "/js/sweetalert2.all.min.js",
  "/image/icon.png",
  "/service-worker.js"
];
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Mengunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
  );
});
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            console.log("ServiceWorker: cache " + cacheName + " dihapus");
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
  