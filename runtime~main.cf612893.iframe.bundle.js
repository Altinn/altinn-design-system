(()=>{"use strict";var _={},g={};function r(e){var o=g[e];if(o!==void 0)return o.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return _[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=_,(()=>{var e=[];r.O=(o,t,a,f)=>{if(t){f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,a,f];return}for(var n=1/0,i=0;i<e.length;i++){for(var[t,a,f]=e[i],c=!0,s=0;s<t.length;s++)(f&!1||n>=f)&&Object.keys(r.O).every(b=>r.O[b](t[s]))?t.splice(s--,1):(c=!1,f<n&&(n=f));if(c){e.splice(i--,1);var d=a();d!==void 0&&(o=d)}}return o}})(),r.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return r.d(o,{a:o}),o},(()=>{var e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,o;r.t=function(t,a){if(a&1&&(t=this(t)),a&8||typeof t=="object"&&t&&(a&4&&t.__esModule||a&16&&typeof t.then=="function"))return t;var f=Object.create(null);r.r(f);var i={};o=o||[null,e({}),e([]),e(e)];for(var n=a&2&&t;typeof n=="object"&&!~o.indexOf(n);n=e(n))Object.getOwnPropertyNames(n).forEach(c=>i[c]=()=>t[c]);return i.default=()=>t,r.d(f,i),f}})(),r.d=(e,o)=>{for(var t in o)r.o(o,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((o,t)=>(r.f[t](e,o),o),[])),r.u=e=>""+e+"."+{"32":"8ffb2c92","115":"2eb9ecda","142":"8c842c02","272":"e8bf195b","551":"6487eaca","566":"e76bd853","701":"f61d9172","725":"a82923e2","745":"089d79b7"}[e]+".iframe.bundle.js",r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={},o="@altinn/altinn-design-system:";r.l=(t,a,f,i)=>{if(e[t]){e[t].push(a);return}var n,c;if(f!==void 0)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==o+f){n=l;break}}n||(c=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,r.nc&&n.setAttribute("nonce",r.nc),n.setAttribute("data-webpack",o+f),n.src=t),e[t]=[a];var u=(h,b)=>{n.onerror=n.onload=null,clearTimeout(p);var v=e[t];if(delete e[t],n.parentNode&&n.parentNode.removeChild(n),v&&v.forEach(y=>y(b)),h)return h(b)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=u.bind(null,n.onerror),n.onload=u.bind(null,n.onload),c&&document.head.appendChild(n)}})(),r.r=e=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="",(()=>{var e={303:0};r.f.j=(a,f)=>{var i=r.o(e,a)?e[a]:void 0;if(i!==0)if(i)f.push(i[2]);else if(a!=303){var n=new Promise((l,u)=>i=e[a]=[l,u]);f.push(i[2]=n);var c=r.p+r.u(a),s=new Error,d=l=>{if(r.o(e,a)&&(i=e[a],i!==0&&(e[a]=void 0),i)){var u=l&&(l.type==="load"?"missing":l.type),p=l&&l.target&&l.target.src;s.message="Loading chunk "+a+` failed.
(`+u+": "+p+")",s.name="ChunkLoadError",s.type=u,s.request=p,i[1](s)}};r.l(c,d,"chunk-"+a,a)}else e[a]=0},r.O.j=a=>e[a]===0;var o=(a,f)=>{var[i,n,c]=f,s,d,l=0;if(i.some(p=>e[p]!==0)){for(s in n)r.o(n,s)&&(r.m[s]=n[s]);if(c)var u=c(r)}for(a&&a(f);l<i.length;l++)d=i[l],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(u)},t=self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})()})();
