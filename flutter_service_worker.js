'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bb77460f4cbee3a9ef441e54d213fbea",
".git/config": "6c0d6cecd488637cc325f6604843c3a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "736f796090da528dcda131dcc5eca798",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44c7356d6396153c3af1f3c3f04bcbb2",
".git/logs/refs/heads/master": "2ba089d1806bd0c80699f43904dbd37b",
".git/logs/refs/remotes/origin/master": "d11267fe9de04d75a29726b6c94f236d",
".git/objects/09/ba429d9b47f8528612c4ab891859f2f7195616": "c3e3d2446567a3986d0e791a0b4200fb",
".git/objects/17/aa4bfc88532cc0ad7c9ecbafd84c4b81afe308": "7c7ba37aefc46c0efb07c5ddc6ab8fbc",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/ce92952d34bd7fb0f9e0e3971d129ad7f5b278": "6d8e3da0683bce816097326b0915ff26",
".git/objects/34/68a9f59105ae36f1d2b55a0842e1c94a08dc34": "bc6f3fa270df662db9a028b0d9915475",
".git/objects/38/7e63a676ec7b7437777df40e156d6338b0707b": "2324b70d9f6637cd50cf06272b6afd04",
".git/objects/39/9a392ce80ee9325a19f324b85c29bfbaf0028d": "4767682bab6845e8a17258befe6f0d73",
".git/objects/3b/31cb9d797ad509e13f6b47b39dd6ad7841f6e0": "5b4efc7bd7ef79ed159e3f6dc543b08e",
".git/objects/3e/458a7369a6e85a162d3fafa200e0fe2959921c": "34d9327a5b3098a9312f24926bc49ff1",
".git/objects/40/46c78e4ef8869f5f51fad23d4a6bb16bea2c39": "b2c325af57782c244e3b37cb0b0b9922",
".git/objects/42/c65dabae619bcc39094c4e6e757eb8f734a68d": "c4003dc212d9d76c9e18bd9e0635e181",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/42bd4514b1ac39f3d58e2009ebf8c53bcd218c": "7587c887416b63bd3012e76d24c33476",
".git/objects/51/59e6c30efb64609d85ebea490c8bd3af64cc73": "842f8c37be524cba4451a7a01fcdd476",
".git/objects/52/58ae2f4761b7394499df26de762fe512d37db4": "45597ab1941687b1d750cef1c4414095",
".git/objects/52/f4075bd94cc2a2e1b6bc0d00943d48e80c135b": "d3caeed603c7024b95e9374d38cfa45c",
".git/objects/58/1680955f8b5b26b4272c792c23d8347ce49847": "6c6f3f62c05986a7a603b65735d0a5c9",
".git/objects/66/6121aca8484c2c544eaf551777b9258e0c8343": "191cdf4c2a816573e1658b8b034071a2",
".git/objects/67/25805e9685560643055f22caa11ee156fb7238": "43dec92ecffe425dfb50dec646d6dbc4",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6e/082b4fefb13823897be4c72a021fcc632ebaae": "e3a8cdeae3f3b900091927ff4b76db57",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/91/48ede65ffea1a5098bd1e09d1c365266f48ca4": "507ec88b2d37635634793bb5c62548b9",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/aeca86909969b6b04a9b6375625028598d1b9c": "4c1b5c9152071f9d658f1c96786d8ac8",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/master": "65147bfd5ab1364c483e78cbab51aae8",
".git/refs/remotes/origin/master": "65147bfd5ab1364c483e78cbab51aae8",
"assets/AssetManifest.json": "1725296b3f3170dabe34b509981779b6",
"assets/assets/avatar.jpg": "072fa4a6a0890eef822d734670760563",
"assets/assets/background.jpg": "0dd2ca69fd44507aaab2d40037240329",
"assets/assets/coachapp.PNG": "a6f9726fb473349bdba64d38cdae6fd2",
"assets/assets/duit.JPEG": "7e3d21e84fc19d6a1df1a0cc2f4c7a1c",
"assets/assets/profile.png": "a4f75d939b73b52c906c2b09cbc76e8a",
"assets/assets/profile_color.png": "e61066d6b2d66bc8688d92502f402f3f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "971f6b57a915d440f4f386ca3f5fb781",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.ico": "b9b38a85ce29d10d2862c1998760f6a2",
"icons/Icon-192.png": "6640838dc07401fa32482604cade9707",
"icons/Icon-512.png": "aad1308e8d3d91981f672c0fde168e9a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c6e099103e0f45cbb5e51e33ce09e019",
"/": "c6e099103e0f45cbb5e51e33ce09e019",
"main.dart.js": "03afd697c1230a2ca287c41c9f0bd5e1",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
