'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "70180c0b98f724f75cce6a8d67db746b",
"version.json": "059d0efaa68a64495697fba0fdc8dc93",
"index.html": "e397456dd3c8b74b40ffb066b38de228",
"/": "e397456dd3c8b74b40ffb066b38de228",
"vajione_admin.zip": "bea4a85a603bc8d9c1fca21d6995f722",
"firebase-messaging-sw.js": "3287ce05ec72b76399977cdfc322c7d9",
"main.dart.js": "53e70789371245ede7df12c053a6dc49",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "eef5014f651781809e24fcc69ffbfe65",
"firebase/firebase-app-compat.js": "adb12ab913d861d0e76ef806d2c3aaa2",
"firebase/firebase-messaging-compat.js": "0541b823dfaf39162ef84cf075c9951b",
"icons/Icon-192.png": "626b57e622ab7a6ada0e43d0e367440f",
"icons/Icon-maskable-192.png": "626b57e622ab7a6ada0e43d0e367440f",
"icons/Icon-72.png": "027c8bdec40d6686b64f6bec4f0e14a9",
"icons/Icon-maskable-512.png": "a91ed2f54c62cd86631b69abe1cd73d4",
"icons/Icon-512.png": "a91ed2f54c62cd86631b69abe1cd73d4",
"manifest.json": "fd4f98db6cbc176191f900f9d5f04147",
"assets/AssetManifest.json": "9328dc78a2ba057668b36f242cf4067c",
"assets/NOTICES": "142fea02ad78bc6d119bb695afdce366",
"assets/FontManifest.json": "83e1cbba363184c77f5a8e6564c27583",
"assets/AssetManifest.bin.json": "fc5238b76178343b9d377c375d277271",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ec7dc181504e0d49a23b140c02364b6d",
"assets/fonts/MaterialIcons-Regular.otf": "fe31b12af21d47c1f9123a5b04695ef7",
"assets/assets/images/movies.png": "5270b1efedb28153f2f86afb48036462",
"assets/assets/images/news.png": "51d97e61a1957e66f418b801c1469aae",
"assets/assets/images/telangana.png": "da47d12884f30646f4c5d0f0ad2b5fc1",
"assets/assets/images/img_1.png": "28b214506e131c7486c123f5f8dcaec8",
"assets/assets/images/seeall.png": "cdb1954955e1eaa2cd5133428186aa2e",
"assets/assets/images/ap.png": "f43bf69b2aa58e02d6b8054a492ca023",
"assets/assets/images/img_2.png": "98d6967141f5156eac8817eacbcabd23",
"assets/assets/images/edu.png": "426411b24a97251f54cf926d562fc291",
"assets/assets/images/img_3.png": "1d3db2c35a569dec684358eeafb34daa",
"assets/assets/images/webbg.jpg": "8cba45e01c7c9d81f6daff44c7853eb5",
"assets/assets/images/profile_icon.png": "40d8f888931ae44407f575c826fc17b5",
"assets/assets/images/img_4.png": "85458d0d1e681983b6dab47eeefb5591",
"assets/assets/images/sectionbg.png": "7d33c2cc8960cde4475eab62e5dec565",
"assets/assets/images/indiamap.png": "bc28a8422d05cf082429b3835b2f29e4",
"assets/assets/images/health.png": "8d4e124bcf8b0fb1590ae57105e3a60b",
"assets/assets/images/img_5.png": "0e9e75ab28601b505fc97da9a017c513",
"assets/assets/images/pawan.jpg": "1125680cce7ca26ba5f5dadae84e5c42",
"assets/assets/images/news3.jpeg": "db163016f61d984c42afad27d258ab6f",
"assets/assets/images/userexample.jpg": "ca9f8182b9175124969ad84abb9bc32f",
"assets/assets/images/iphoneimg.png": "71c138a00702f487cd8826968facebd6",
"assets/assets/images/runnlogo.png": "00d7471d22dfd108546471cd88b82217",
"assets/assets/images/leftuser.png": "e6e44b8d4403bb5f3b58b42f6b5a88ed",
"assets/assets/images/interface.png": "59f1a4a3b1733e2e7673de225c600ff2",
"assets/assets/images/tag.png": "5806e388ba137f7078224a1411860c51",
"assets/assets/images/arrow_back.png": "8dfbe633b5ec1457c5811dd7d0f17400",
"assets/assets/images/cancel.png": "f21d35f0fdca053d9f7aa72c4291215c",
"assets/assets/images/devotional.png": "4051aea75ca0f12bcd84eef969ad2d24",
"assets/assets/images/rightuser.png": "85c04d9b1897ea9aa2750e04fcf37dfc",
"assets/assets/images/otp.png": "fab5ca8dd0bdfca0d7a5f3eebe9e9270",
"assets/assets/images/subcribers.png": "fa79e5020ad3340aeebeafb11a1ad821",
"assets/assets/images/readmore.png": "9a051f42e4b244089d1d904c2ddc7879",
"assets/assets/images/agriculture.png": "c9eb7cd13a3de20264674857a5b35877",
"assets/assets/images/img.png": "a47ce0abb89a828f0b37a5fc2f50ee5b",
"assets/assets/images/unread.png": "6d735223c1bcad33a0f96c4da4ae8344",
"assets/assets/images/serching.png": "6a99d0fcce2b313cbb318d6690e70cf8",
"assets/assets/images/namstey.png": "e33e997acf32494fff1f3fe376ab29f2",
"assets/assets/images/newsblack.png": "bca6c667b82efdb99b71a2bf24dd5d35",
"assets/assets/images/sports.png": "fff473d128a6a5e7f060e8b040ba6635",
"assets/assets/images/like.png": "3244ba466a52521a8a70e8c79d630c67",
"assets/assets/images/news2.jpeg": "f62716fc454f12b324e7d59e42c42923",
"assets/assets/images/totalreporters.png": "69ffcb4890075ea5926a67a587a89515",
"assets/assets/images/adminsample.jpg": "c91c7ffdae543437e48e132679d25b3f",
"assets/assets/images/newsleft.png": "bfa6a31abe04f794619556bde7d0d522",
"assets/assets/images/logo_new.png": "a91ed2f54c62cd86631b69abe1cd73d4",
"assets/assets/images/classifiedsred.png": "662bab5485ea578c03a3a1ded0170f4e",
"assets/assets/images/news1.jpeg": "679829dd44aa736cc6ecf6c8d22a95e9",
"assets/assets/images/menu.png": "e631532e79348b3e0d1844398e51ad05",
"assets/assets/images/food.png": "41354671e161ebfd5a46e85f844c31b5",
"assets/assets/images/totalrevenue.png": "8ed07604338dd95b68608a25adc07e35",
"assets/assets/images/logo.png": "fbaeab818e1b4d7173927e5cba20b8b3",
"assets/assets/images/rasiphalalu.png": "23df5ee8eb5ede4ef44453edeb2e8ab2",
"assets/assets/images/addicon.png": "010581b44ced4e1b5811bc354e94aa19",
"assets/assets/images/business.png": "e26b310848fbfb1b6567cf4f291c2203",
"assets/assets/images/whiteround.png": "0594d838adeef32ebeb7b35cb4bd2eaa",
"assets/assets/images/profile.png": "231acb53e47decc77aacae6cc5383c2e",
"assets/assets/images/news4.png": "d953befce58ca0e5d9f15f32c6af770d",
"assets/assets/images/mobile.png": "8219743f8860859fb160c79700158014",
"assets/assets/images/phone.png": "392a09b8f462ede4a51ae329966557a8",
"assets/assets/images/dashboardsample.jpg": "5879a4cf68a698709b52bccf33d1398d",
"assets/assets/images/blueroundbg.png": "74fe09c3360ea4bd58caae5e4577a4be",
"assets/assets/images/bye.png": "9058a6dc8e125bd7e26f32d7c7abded8",
"assets/assets/images/political.png": "c04cbd385cab48292109a49666fb2062",
"assets/assets/images/classifiedsbg.png": "eff865d824def1793ebe099faac3025e",
"assets/assets/images/tajavartallu.png": "cd2fddafded6c8fed4751e12d6e29539",
"assets/assets/images/india.png": "737d10f87eb8d380688e5504564baee5",
"assets/assets/images/more.png": "ff6bf2c9a2d5662b4cbf8d19452c059a",
"assets/assets/images/shaperoundc.png": "a1342543beb14f33d39d69e59f23fe5a",
"assets/assets/images/whatsapp.png": "c1724e22ddbdb6222ea44797a9963d5c",
"assets/assets/images/shaperound.png": "d6287b1f3c7ae490b05f0d12f4c87da8",
"assets/assets/images/image1.png": "f5a97c5429fd42135ea9aa14352a0776",
"assets/assets/images/reloaad.png": "10866a2fc2ab7207fa5f948b20b55b27",
"assets/assets/images/weeknews.png": "bcd9d91c209ae1c0aea155c5b1c784c3",
"assets/assets/images/totalnews.png": "1f3b6c1a5b80be566d2227eb818eb6d5",
"assets/assets/images/international.png": "585a844a00c92ecd2fa01b57b7752164",
"assets/assets/images/classifieds.png": "1d625a572aba59194060668093b436c3",
"assets/assets/images/newspreviewsample.jpg": "72809aed40ffc5d3d32e57a7b7667ff6",
"assets/assets/images/bg.png": "d3613b3d6f22c53439fa803f8d375d1d",
"assets/assets/images/crime.png": "143eacbcf89f55ae6f061176f3d07f6c",
"assets/assets/videos/splash.gif": "a97934d5994712af6aa3132897fb36df",
"assets/assets/videos/logo.mp4": "fd8fe535cf82603b7251f3c6ab19190b",
"assets/assets/videos/video.mp4": "9788affb8e9e1dfb559e4200e0820f7c",
"assets/assets/font/twcenmt.ttf": "9b62dc86f936227b3f7b367bd0b6c05e",
"assets/assets/font/sfpro.ttf": "12d8580f658f54bd0a4c4fc5a5983a94",
"assets/assets/font/mallanna_regular.ttf": "d645f4f5a747316b8c4244e85084255a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
