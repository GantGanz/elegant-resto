!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=2)}([function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var p=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(f)):a.push({identifier:u,updater:g(f,r),references:1}),e.push(u)}return e}function l(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,p=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function f(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function d(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,m=0;function g(n,r){var t,e,o;if(r.singleton){var i=m++;t=h||(h=l(r)),e=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=l(r),e=d.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=s(n,r),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n,r,t){"use strict";t.r(r);t(3),t(5),t(7);var e=document.querySelector("#menu"),o=document.querySelector(".hero"),i=document.querySelector("main"),a=document.querySelector("#drawer");e.addEventListener("click",(function(n){a.classList.toggle("open"),n.stopPropagation()})),o.addEventListener("click",(function(){a.classList.remove("open")})),i.addEventListener("click",(function(){a.classList.remove("open")}))},function(n,r,t){(function(n){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var t=function(n){"use strict";var t=Object.prototype,e=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(n,r,t){return Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),n[r]}try{s({},"")}catch(n){s=function(n,r,t){return n[r]=t}}function l(n,r,t,e){var o=r&&r.prototype instanceof f?r:f,i=Object.create(o.prototype),a=new k(e||[]);return i._invoke=function(n,r,t){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return j()}for(t.method=o,t.arg=i;;){var a=t.delegate;if(a){var c=w(a,t);if(c){if(c===p)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===e)throw e="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);e="executing";var s=u(n,r,t);if("normal"===s.type){if(e=t.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:t.done}}"throw"===s.type&&(e="completed",t.method="throw",t.arg=s.arg)}}}(n,t,a),i}function u(n,r,t){try{return{type:"normal",arg:n.call(r,t)}}catch(n){return{type:"throw",arg:n}}}n.wrap=l;var p={};function f(){}function d(){}function h(){}var m={};m[i]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(E([])));x&&x!==t&&e.call(x,i)&&(m=x);var y=h.prototype=f.prototype=Object.create(m);function v(n){["next","throw","return"].forEach((function(r){s(n,r,(function(n){return this._invoke(r,n)}))}))}function b(n,t){var o;this._invoke=function(i,a){function c(){return new t((function(o,c){!function o(i,a,c,s){var l=u(n[i],n,a);if("throw"!==l.type){var p=l.arg,f=p.value;return f&&"object"===r(f)&&e.call(f,"__await")?t.resolve(f.__await).then((function(n){o("next",n,c,s)}),(function(n){o("throw",n,c,s)})):t.resolve(f).then((function(n){p.value=n,c(p)}),(function(n){return o("throw",n,c,s)}))}s(l.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(n,r){var t=n.iterator[r.method];if(void 0===t){if(r.delegate=null,"throw"===r.method){if(n.iterator.return&&(r.method="return",r.arg=void 0,w(n,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var e=u(t,n.iterator,r.arg);if("throw"===e.type)return r.method="throw",r.arg=e.arg,r.delegate=null,p;var o=e.arg;return o?o.done?(r[n.resultName]=o.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(n){var r={tryLoc:n[0]};1 in n&&(r.catchLoc=n[1]),2 in n&&(r.finallyLoc=n[2],r.afterLoc=n[3]),this.tryEntries.push(r)}function L(n){var r=n.completion||{};r.type="normal",delete r.arg,n.completion=r}function k(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(_,this),this.reset(!0)}function E(n){if(n){var r=n[i];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var t=-1,o=function r(){for(;++t<n.length;)if(e.call(n,t))return r.value=n[t],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=s(h,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var r="function"==typeof n&&n.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,h):(n.__proto__=h,s(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},v(b.prototype),b.prototype[a]=function(){return this},n.AsyncIterator=b,n.async=function(r,t,e,o,i){void 0===i&&(i=Promise);var a=new b(l(r,t,e,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},v(y),s(y,c,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(n){var r=[];for(var t in n)r.push(t);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=E,k.prototype={constructor:k,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return a.type="throw",a.arg=n,r.next=t,e&&(r.method="next",r.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(n,r){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(n,r){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&r&&(this.next=r),p},finish:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===n)return this.complete(t.completion,t.afterLoc),L(t),p}},catch:function(n){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===n){var e=t.completion;if("throw"===e.type){var o=e.arg;L(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,t){return this.delegate={iterator:E(n),resultName:r,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},n}("object"===r(n)?n.exports:{});try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}).call(this,t(4)(n))},function(n,r){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,r,t){var e=t(0),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){(r=t(1)(!1)).push([n.i,"img {\r\n    display: block;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody,\r\nhtml {\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    font-family: \"Roboto\", sans-serif;\r\n    font-size: 12px;\r\n    color: #424242;\r\n    background-color: #eeeeee;\r\n}\r\n\r\nbutton,\r\na {\r\n    box-sizing: border-box;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n}\r\n\r\n\r\n/* Skip to content */\r\n.skip-link {\r\n    position: absolute;\r\n    top: -44px;\r\n    left: 0;\r\n    background-color: #bf1722;\r\n    color: white;\r\n    padding: 8px;\r\n    z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n    top: 0;\r\n}\r\n\r\n/*\r\n * Header\r\n *\r\n */\r\n\r\n.header {\r\n    min-height: 56px;\r\n    transition: min-height 0.3s;\r\n}\r\n\r\n.header__inner {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.header__title {\r\n    font-weight: 300;\r\n    font-size: 4em;\r\n    margin: 0.5em 0.25em;\r\n    display: inline-block;\r\n    color: #212121;\r\n}\r\n\r\n.header__menu {\r\n    font-size: 32px;\r\n    margin: 5px auto;\r\n    display: block;\r\n    width: 30px;\r\n}\r\n\r\n/*\r\n * Top level navigation\r\n */\r\n\r\n.nav {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n}\r\n\r\n.nav__list {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\n.nav__item {\r\n    box-sizing: border-box;\r\n    display: inline-block;\r\n    width: 24%;\r\n    text-align: center;\r\n    line-height: 24px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.nav a {\r\n    display: inline-block;\r\n    padding: 1.3em;\r\n    text-decoration: none;\r\n    color: #616161;\r\n}\r\n\r\n.nav a:hover {\r\n    text-decoration: underline;\r\n    color: #000;\r\n}\r\n\r\n\r\n/*\r\n * Jumbotron\r\n */\r\n\r\n.hero {\r\n    display: flex;\r\n    align-items: center;\r\n    min-height: 380px;\r\n    width: 100%;\r\n    text-align: center;\r\n    background-image: url('./images/heros/hero-image_4.jpg');\r\n    background-position: center;\r\n    background-color: green;\r\n}\r\n\r\n.hero__inner {\r\n    margin: 0 auto;\r\n    max-width: 800px;\r\n}\r\n\r\n.hero__title {\r\n    color: #fff;\r\n    font-weight: 500;\r\n    font-size: 36px;\r\n    text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333;\r\n}\r\n\r\n.hero__tagline {\r\n    color: #fff;\r\n    margin-top: 16px;\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n    text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333;\r\n}\r\n\r\n\r\n/*\r\n * main\r\n */\r\n\r\nmain {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/*\r\n * content\r\n */\r\n\r\n.content {\r\n    padding: 32px;\r\n}\r\n\r\n/*\r\n * headline\r\n */\r\n\r\n.headline__figure {\r\n    width: 100%;\r\n}\r\n\r\n.headline__figure img {\r\n    width: 100%;\r\n}\r\n\r\n.headline__figure figcaption {\r\n    text-align: center;\r\n    color: #666666;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    margin-top: 8px;\r\n}\r\n\r\n.headline__content {\r\n    width: 100%;\r\n    padding: 16px 0;\r\n}\r\n\r\n.headline__title {\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n}\r\n\r\n.headline__description {\r\n    font-size: 12px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.headline__button {\r\n    font-family: \"Roboto\", sans-serif;\r\n    text-transform: uppercase;\r\n    margin-top: 24px;\r\n    cursor: pointer;\r\n    padding: 8px 16px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    background-color: #2c3e50;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n.headline__button:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/*\r\n * latest\r\n */\r\n\r\n.latest {\r\n    width: 100%;\r\n    margin: 20px auto;\r\n    text-align: center;\r\n}\r\n\r\n.latest__label {\r\n    font-size: 32px;\r\n    font-weight: lighter;\r\n}\r\n\r\n.latest__label::after {\r\n    content: '';\r\n    margin-top: 16px;\r\n    display: block;\r\n    border-bottom: 1px solid #eeeeee;\r\n}\r\n\r\n/*\r\n * post\r\n */\r\n\r\n.posts {\r\n    margin: 32px auto auto;\r\n    text-align: left;\r\n}\r\n\r\n/*\r\n * post item\r\n */\r\n\r\n.post-item {\r\n    background-color: #fff;\r\n    margin: 16px 0;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.post-item__content {\r\n    padding: 16px;\r\n}\r\n\r\n.post-item__thumbnail {\r\n    width: 100%;\r\n    min-height: 230px;\r\n    max-height: 230px;\r\n}\r\n\r\n.post-item__rate {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.post-item__title {\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    margin-top: 5px;\r\n    transition: 0.3s opacity;\r\n}\r\n\r\n.post-item__city {\r\n    font-weight: 300;\r\n    font-size: 13px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.post-item__title a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.post-item__description {\r\n    margin-top: 16px;\r\n    font-size: 12px;\r\n    line-height: 1.5em;\r\n}\r\n\r\n/*\r\n * footer\r\n */\r\n\r\nfooter {\r\n    background-color: #2c3e50;\r\n    padding: 1em;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\nfooter p {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    padding: 1em;\r\n    text-decoration: none;\r\n    color: #fff\r\n}\r\n",""]),n.exports=r},function(n,r,t){var e=t(0),o=t(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){(r=t(1)(!1)).push([n.i,".posts {\n    display: grid;\n    grid-row-gap: 16px;\n}\n\n@media screen and (max-width: 499px) {\n    .nav {\n        z-index: 10;\n        background-color: #fff;\n        width: 100%;\n        position: absolute;\n\n        /* This trasform moves the drawer off canvas. */\n        -webkit-transform: translate(-100%, 0);\n        transform: translate(-100%, 0);\n\n        /* Optionally, we animate the drawer. */\n        transition: transform 0.3s ease;\n    }\n\n    .open {\n        -webkit-transform: translate(0, 0);\n        transform: translate(0, 0);\n    }\n\n    .nav__item {\n        display: list-item;\n        border-bottom: 1px solid #E0E0E0;\n        width: 100%;\n        text-align: left;\n    }\n}\n\n@media screen and (min-width: 455px) {\n    .headline__content {\n        padding: 16px 16px;\n    }\n\n    .headline__title {\n        font-size: 28px;\n    }\n\n    .headline__description {\n        font-size: 16px;\n    }\n}\n\n@media screen and (min-width: 500px) {\n    .header__menu {\n        display: none;\n    }\n}\n\n@media screen and (min-width: 650px) {\n    .headline__content {\n        margin: 0 auto;\n        max-width: 650px;\n    }\n\n    .post-item__content {\n        padding: 16px 32px 32px 32px;\n    }\n\n    .post-item__title {\n        font-size: 18px;\n    }\n\n    .post-item__rate {\n        font-size: 16px;\n    }\n\n    .post-item__description {\n        font-size: 14px;\n    }\n}\n\n@media screen and (min-width: 700px) {\n    .posts {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-column-gap: 10px;\n        grid-row-gap: 16px;\n    }\n\n    .headline__content {\n        padding: 16px 32px;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    .nav__list {\n        max-width: 800px;\n        margin: 0 auto;\n    }\n}\n\n@media screen and (min-width: 900px) {\n    .headline {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .posts {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    main {\n        max-width: 1200px;\n    }\n}\n",""]),n.exports=r}]);