"use strict";var precacheConfig=[["/index.html","f60b73ab4099d45e33c7f6cc86421e37"],["/static/css/main.6cd085ba.css","bc344f11873df1bd093932561be2aaf7"],["/static/js/main.e1394c38.js","02b9bd2c14e122b22908f9800378c869"],["/static/media/angular.ea3d6618.png","ea3d66188c6bdade187c4eebebaffd2d"],["/static/media/cloud.6ca70e8e.png","6ca70e8e7091f4c18ad1e53b27090b3b"],["/static/media/discrete-math.53bd5096.png","53bd5096030c1824d0acc745d3f4b8de"],["/static/media/docker.a21b761d.png","a21b761d1656ef8d93b69bc011caff83"],["/static/media/dog.fe70d5a6.png","fe70d5a65c202043b07a2b238a1a5047"],["/static/media/dogAndI.7bd8f443.png","7bd8f4439342a9e235eea6d108255d34"],["/static/media/dolphinPic.d79e8d6a.JPG","d79e8d6a1689a2edefdacacf342ad265"],["/static/media/equifax.623056af.png","623056afe6429b69a2fbab77ced478e6"],["/static/media/logo-white.ede52406.png","ede52406ddafc2ea2f823a2b863e3fac"],["/static/media/node.71ca89d4.png","71ca89d476a4e44bd58fee9813482d1f"],["/static/media/postgresql.47ac5075.png","47ac507549e379f5daa0ff9e80478b91"],["/static/media/project-background.467a57ba.png","467a57ba16072029f08d5de9ffec5389"],["/static/media/quinn.ee687af7.png","ee687af75b0bcd2b2bf3789e61707d5a"],["/static/media/rails.8666cbbb.png","8666cbbb1a23589f3de57a7cbc1434c3"],["/static/media/react.d081cd09.png","d081cd09b3a6e46cc243a8959f0c6e4f"],["/static/media/resume.cdd8570c.png","cdd8570c65c80efb740895284086fdca"],["/static/media/ruby.8c3644e0.png","8c3644e00d7cd7bb0ac44b7de562021a"],["/static/media/safetynet.c741172a.png","c741172ad51a8b2d22be775a2fb2ab7d"],["/static/media/screenshot.e137b5b1.png","e137b5b183942876295531ae2a8c2302"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});