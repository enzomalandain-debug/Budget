/* Paie & Budget : fonctionne sans réseau.
   L'application est gardée sur le téléphone ; à chaque connexion, la dernière version est récupérée. */
const VERSION = "paie-budget-1.4";
const APP = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== "polices" && k !== "lecture").map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  /* Police Manrope : gardée au premier lancement avec réseau */
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("polices").then(c => c.match(req).then(r => r || fetch(req).then(res => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }))).catch(() => new Response("", { status: 504 })));
    return;
  }
  /* Module de lecture des captures (Tesseract) : téléchargé à la première lecture, puis gardé */
  if (url.hostname === "cdn.jsdelivr.net" || url.hostname === "tessdata.projectnaptha.com") {
    e.respondWith(caches.open("lecture").then(c => c.match(req).then(r => r || fetch(req).then(res => { if (res.ok || res.type === "opaque") c.put(req, res.clone()); return res; }))).catch(() => new Response("", { status: 504 })));
    return;
  }
  if (url.origin !== location.origin) return;
  /* Page de l'application : la version du téléphone tout de suite, mise à jour en arrière-plan si le réseau répond */
  e.respondWith(caches.open(VERSION).then(c => {
    const key = req.mode === "navigate" ? "./index.html" : req;
    return c.match(key, { ignoreSearch: true }).then(hit => {
      const net = fetch(req).then(res => { if (res.ok) c.put(key, res.clone()); return res; }).catch(() => null);
      return hit || net.then(r => r || new Response("Hors ligne", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }));
    });
  }));
});
