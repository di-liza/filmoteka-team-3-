var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),o("6mrnU");const c=new(0,o("31u3U").LocalStorage),n="background-color: #b92f2c; color: #ffffff; box-shadow: 0px 0px 7px rgba(27, 27, 27, 0.15); border: solid 1px #f4d03f;",u=document.querySelector(".movie-collection"),l={watched:document.querySelector(".btn__library-watch"),queue:document.querySelector(".btn__library-queue")};function a(){s("watched")}function s(e){let t;"queue"===e?(t=c.isLibraryQueue(),l.watched.style.cssText="",l.queue.style.cssText=n):(t=c.isLibraryWatched(),l.queue.style.cssText="",l.watched.style.cssText=n);const r=localStorage.getItem(e);t?(c.results=JSON.parse(r),c.selectedArray=e,c.createMarkupCards(),u.style.pointerEvents="auto"):c.markupPlug()}a(),l.watched.style.cssText=n,l.watched.addEventListener("click",a),l.queue.addEventListener("click",(function(){s("queue")})),o("ae8GP"),o("5OC5t");
//# sourceMappingURL=my-library.d3b4856c.js.map
