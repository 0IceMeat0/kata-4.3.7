(()=>{"use strict";var e={838:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),s=n.n(a),c=n(667),i=n.n(c),u=new URL(n(78),n.b),l=s()(o()),d=i()(u);l.push([e.id,`.body{background-color:#C4C4C4}.search-block{background-color:#E3E3E3;width:504px;margin:auto}.search-block__none{border:1px solid black;height:30px;font-size:25px}.search-block__result{border:1px solid black;height:30px;font-size:25px}.search-block__result:hover{background-color:aquamarine;cursor:pointer}.saved__result{display:flex;background-color:pink;width:504px;margin:auto;border:1px solid black}.saved__result:first-child{margin-top:25px}.saved__button{width:50px;height:50px;border:0;border-radius:50%;background-color:#E3E3E3;margin-left:auto;position:relative;top:20px;right:25px;cursor:pointer;background-image:url(${d});background-repeat:no-repeat;background-position:center}.saved__button:hover{opacity:80%}.saved__info{font-size:20px;margin-left:15px;padding:5px}.saved__info p{margin:5px}\n`,""]);const p=l},20:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,".wrapper{display:flex;justify-content:center;align-items:center}.wrapper-input{border:none;font-size:40px;height:50px;width:504px}\n",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],u=r.base?i[0]+r.base:i[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var i=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},78:(e,t,n)=>{e.exports=n.p+"7afdf716695eb55d2710.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),c=n(565),i=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),f=n(838),m={};m.styleTagTransform=p(),m.setAttributes=i(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=n(20),v={};v.styleTagTransform=p(),v.setAttributes=i(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const g=document.querySelector("input"),b=document.querySelector(".search-block"),y=document.querySelector(".saved"),x=((e,t)=>{let n;return function(){clearTimeout(n),n=setTimeout((()=>e.apply(this,arguments)),300)}})((async function(){const e=new URL("https://api.github.com/search/repositories"),t=g.value;if(""!==t){e.searchParams.append("q",t);try{const t=await fetch(e);if(!t.ok)return;{const e=await t.json();0===e.items.length?(_(),b.innerHTML="Таких репозиториев нет"):(_(),function(e){_();for(let t=0;t<5;t++){const{name:n,owner:r,stargazers_count:o}=e.items[t],a=document.createElement("div");a.innerHTML=`${n}`,a.classList.add("search-block__result"),a.dataset.owner=`${r.login}`,a.dataset.stars=`${o}`,b.append(a)}}(e))}}catch(e){return null}}else _()}));function _(){b.innerHTML=""}g.addEventListener("input",x),b.addEventListener("click",(function(e){e.target.classList.contains("search-block__result")&&(function(e){const t=e.textContent,n=e.dataset.owner,r=e.dataset.stars,o=document.createElement("div");o.classList.add("saved__result");const a=document.createElement("div");a.classList.add("saved__info");const s=document.createElement("p");s.innerHTML=`Name: ${t}`,a.append(s);const c=document.createElement("p");c.innerHTML=`Owner: ${n}`,a.append(c);const i=document.createElement("p");i.innerHTML=`Stars: ${r}`,a.append(i),o.append(a);const u=document.createElement("button");u.classList.add("saved__button"),o.append(u),y.append(o)}(e.target),g.value="",_())})),y.addEventListener("click",(function(e){e.target.classList.contains("saved__button")&&e.target.parentElement.remove()}))})()})();