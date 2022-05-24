"use strict";var Ni=Object.defineProperty,Bi=Object.defineProperties;var Ri=Object.getOwnPropertyDescriptors;var St=Object.getOwnPropertySymbols;var Oi=Object.prototype.hasOwnProperty,Hi=Object.prototype.propertyIsEnumerable;var Mt=(A,x,y)=>x in A?Ni(A,x,{enumerable:!0,configurable:!0,writable:!0,value:y}):A[x]=y,Pe=(A,x)=>{for(var y in x||(x={}))Oi.call(x,y)&&Mt(A,y,x[y]);if(St)for(var y of St(x))Hi.call(x,y)&&Mt(A,y,x[y]);return A},Ne=(A,x)=>Bi(A,Ri(x));var kt=(A,x,y)=>new Promise((N,X)=>{var K=M=>{try{U(y.next(M))}catch(J){X(J)}},q=M=>{try{U(y.throw(M))}catch(J){X(J)}},U=M=>M.done?N(M.value):Promise.resolve(M.value).then(K,q);U((y=y.apply(A,x)).next())});(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[190],{78190:(A,x,y)=>{y.r(x),y.d(x,{Figspec:()=>xt,default:()=>Ti});var N=y(921),X=y.t(N,2);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),U=new Map;class M{constructor(i,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i}get styleSheet(){let i=U.get(this.cssText);return K&&i===void 0&&(U.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const J=n=>new M(typeof n=="string"?n:n+"",q),R=(n,...i)=>{const s=n.length===1?n[0]:i.reduce((r,a,l)=>r+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+n[l+1],n[0]);return new M(s,q)},Tt=(n,i)=>{K?n.adoptedStyleSheets=i.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):i.forEach(s=>{const r=document.createElement("style"),a=window.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=s.cssText,n.appendChild(r)})},Be=K?n=>n:n=>n instanceof CSSStyleSheet?(i=>{let s="";for(const r of i.cssRules)s+=r.cssText;return J(s)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe;const Re=window.trustedTypes,Pt=Re?Re.emptyScript:"",Oe=window.reactiveElementPolyfillSupport,ge={toAttribute(n,i){switch(i){case Boolean:n=n?Pt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,i){let s=n;switch(i){case Boolean:s=n!==null;break;case Number:s=n===null?null:Number(n);break;case Object:case Array:try{s=JSON.parse(n)}catch(r){s=null}}return s}},He=(n,i)=>i!==n&&(i==i||n==n),ve={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:He};class F extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(i){var s;(s=this.l)!==null&&s!==void 0||(this.l=[]),this.l.push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((s,r)=>{const a=this._$Eh(r,s);a!==void 0&&(this._$Eu.set(a,r),i.push(a))}),i}static createProperty(i,s=ve){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(i,s),!s.noAccessor&&!this.prototype.hasOwnProperty(i)){const r=typeof i=="symbol"?Symbol():"__"+i,a=this.getPropertyDescriptor(i,r,s);a!==void 0&&Object.defineProperty(this.prototype,i,a)}}static getPropertyDescriptor(i,s,r){return{get(){return this[s]},set(a){const l=this[i];this[s]=a,this.requestUpdate(i,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||ve}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),this.elementProperties=new Map(i.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const s=this.properties,r=[...Object.getOwnPropertyNames(s),...Object.getOwnPropertySymbols(s)];for(const a of r)this.createProperty(a,s[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const r=new Set(i.flat(1/0).reverse());for(const a of r)s.unshift(Be(a))}else i!==void 0&&s.push(Be(i));return s}static _$Eh(i,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof i=="string"?i.toLowerCase():void 0}o(){var i;this._$Ep=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$Em(),this.requestUpdate(),(i=this.constructor.l)===null||i===void 0||i.forEach(s=>s(this))}addController(i){var s,r;((s=this._$Eg)!==null&&s!==void 0?s:this._$Eg=[]).push(i),this.renderRoot!==void 0&&this.isConnected&&((r=i.hostConnected)===null||r===void 0||r.call(i))}removeController(i){var s;(s=this._$Eg)===null||s===void 0||s.splice(this._$Eg.indexOf(i)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((i,s)=>{this.hasOwnProperty(s)&&(this._$Et.set(s,this[s]),delete this[s])})}createRenderRoot(){var i;const s=(i=this.shadowRoot)!==null&&i!==void 0?i:this.attachShadow(this.constructor.shadowRootOptions);return Tt(s,this.constructor.elementStyles),s}connectedCallback(){var i;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$Eg)===null||i===void 0||i.forEach(s=>{var r;return(r=s.hostConnected)===null||r===void 0?void 0:r.call(s)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$Eg)===null||i===void 0||i.forEach(s=>{var r;return(r=s.hostDisconnected)===null||r===void 0?void 0:r.call(s)})}attributeChangedCallback(i,s,r){this._$AK(i,r)}_$ES(i,s,r=ve){var a,l;const c=this.constructor._$Eh(i,r);if(c!==void 0&&r.reflect===!0){const p=((l=(a=r.converter)===null||a===void 0?void 0:a.toAttribute)!==null&&l!==void 0?l:ge.toAttribute)(s,r.type);this._$Ei=i,p==null?this.removeAttribute(c):this.setAttribute(c,p),this._$Ei=null}}_$AK(i,s){var r,a,l;const c=this.constructor,p=c._$Eu.get(i);if(p!==void 0&&this._$Ei!==p){const d=c.getPropertyOptions(p),h=d.converter,u=(l=(a=(r=h)===null||r===void 0?void 0:r.fromAttribute)!==null&&a!==void 0?a:typeof h=="function"?h:null)!==null&&l!==void 0?l:ge.fromAttribute;this._$Ei=p,this[p]=u(s,d.type),this._$Ei=null}}requestUpdate(i,s,r){let a=!0;i!==void 0&&(((r=r||this.constructor.getPropertyOptions(i)).hasChanged||He)(this[i],s)?(this._$AL.has(i)||this._$AL.set(i,s),r.reflect===!0&&this._$Ei!==i&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(i,r))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$E_())}_$E_(){return kt(this,null,function*(){this.isUpdatePending=!0;try{yield this._$Ep}catch(s){Promise.reject(s)}const i=this.scheduleUpdate();return i!=null&&(yield i),!this.isUpdatePending})}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((a,l)=>this[l]=a),this._$Et=void 0);let s=!1;const r=this._$AL;try{s=this.shouldUpdate(r),s?(this.willUpdate(r),(i=this._$Eg)===null||i===void 0||i.forEach(a=>{var l;return(l=a.hostUpdate)===null||l===void 0?void 0:l.call(a)}),this.update(r)):this._$EU()}catch(a){throw s=!1,this._$EU(),a}s&&this._$AE(r)}willUpdate(i){}_$AE(i){var s;(s=this._$Eg)===null||s===void 0||s.forEach(r=>{var a;return(a=r.hostUpdated)===null||a===void 0?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(i){return!0}update(i){this._$EC!==void 0&&(this._$EC.forEach((s,r)=>this._$ES(r,this[r],s)),this._$EC=void 0),this._$EU()}updated(i){}firstUpdated(i){}}F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Oe==null||Oe({ReactiveElement:F}),((fe=globalThis.reactiveElementVersions)!==null&&fe!==void 0?fe:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me;const I=globalThis.trustedTypes,Le=I?I.createPolicy("lit-html",{createHTML:n=>n}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+T,Nt=`<${ye}>`,V=document,Q=(n="")=>V.createComment(n),ee=n=>n===null||typeof n!="object"&&typeof n!="function",je=Array.isArray,ze=n=>{var i;return je(n)||typeof((i=n)===null||i===void 0?void 0:i[Symbol.iterator])=="function"},te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Fe=/>/g,O=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ie=/'/g,Ve=/"/g,De=/^(?:script|style|textarea|title)$/i,We=n=>(i,...s)=>({_$litType$:n,strings:i,values:s}),_=We(1),S=We(2),H=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Ye=new WeakMap,Bt=(n,i,s)=>{var r,a;const l=(r=s==null?void 0:s.renderBefore)!==null&&r!==void 0?r:i;let c=l._$litPart$;if(c===void 0){const p=(a=s==null?void 0:s.renderBefore)!==null&&a!==void 0?a:null;l._$litPart$=c=new W(i.insertBefore(Q(),p),p,void 0,s!=null?s:{})}return c._$AI(n),c},D=V.createTreeWalker(V,129,null,!1),Ze=(n,i)=>{const s=n.length-1,r=[];let a,l=i===2?"<svg>":"",c=te;for(let d=0;d<s;d++){const h=n[d];let u,f,g=-1,v=0;for(;v<h.length&&(c.lastIndex=v,f=c.exec(h),f!==null);)v=c.lastIndex,c===te?f[1]==="!--"?c=Ue:f[1]!==void 0?c=Fe:f[2]!==void 0?(De.test(f[2])&&(a=RegExp("</"+f[2],"g")),c=O):f[3]!==void 0&&(c=O):c===O?f[0]===">"?(c=a!=null?a:te,g=-1):f[1]===void 0?g=-2:(g=c.lastIndex-f[2].length,u=f[1],c=f[3]===void 0?O:f[3]==='"'?Ve:Ie):c===Ve||c===Ie?c=O:c===Ue||c===Fe?c=te:(c=O,a=void 0);const m=c===O&&n[d+1].startsWith("/>")?" ":"";l+=c===te?h+Nt:g>=0?(r.push(u),h.slice(0,g)+"$lit$"+h.slice(g)+T+m):h+T+(g===-2?(r.push(void 0),d):m)}const p=l+(n[s]||"<?>")+(i===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Le!==void 0?Le.createHTML(p):p,r]};class ie{constructor({strings:i,_$litType$:s},r){let a;this.parts=[];let l=0,c=0;const p=i.length-1,d=this.parts,[h,u]=Ze(i,s);if(this.el=ie.createElement(h,r),D.currentNode=this.el.content,s===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(a=D.nextNode())!==null&&d.length<p;){if(a.nodeType===1){if(a.hasAttributes()){const f=[];for(const g of a.getAttributeNames())if(g.endsWith("$lit$")||g.startsWith(T)){const v=u[c++];if(f.push(g),v!==void 0){const m=a.getAttribute(v.toLowerCase()+"$lit$").split(T),b=/([.?@])?(.*)/.exec(v);d.push({type:1,index:l,name:b[2],strings:m,ctor:b[1]==="."?Xe:b[1]==="?"?Ke:b[1]==="@"?qe:se})}else d.push({type:6,index:l})}for(const g of f)a.removeAttribute(g)}if(De.test(a.tagName)){const f=a.textContent.split(T),g=f.length-1;if(g>0){a.textContent=I?I.emptyScript:"";for(let v=0;v<g;v++)a.append(f[v],Q()),D.nextNode(),d.push({type:2,index:++l});a.append(f[g],Q())}}}else if(a.nodeType===8)if(a.data===ye)d.push({type:2,index:l});else{let f=-1;for(;(f=a.data.indexOf(T,f+1))!==-1;)d.push({type:7,index:l}),f+=T.length-1}l++}}static createElement(i,s){const r=V.createElement("template");return r.innerHTML=i,r}}function L(n,i,s=n,r){var a,l,c,p;if(i===H)return i;let d=r!==void 0?(a=s._$Cl)===null||a===void 0?void 0:a[r]:s._$Cu;const h=ee(i)?void 0:i._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((l=d==null?void 0:d._$AO)===null||l===void 0||l.call(d,!1),h===void 0?d=void 0:(d=new h(n),d._$AT(n,s,r)),r!==void 0?((c=(p=s)._$Cl)!==null&&c!==void 0?c:p._$Cl=[])[r]=d:s._$Cu=d),d!==void 0&&(i=L(n,d._$AS(n,i.values),d,r)),i}class Ge{constructor(i,s){this.v=[],this._$AN=void 0,this._$AD=i,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(i){var s;const{el:{content:r},parts:a}=this._$AD,l=((s=i==null?void 0:i.creationScope)!==null&&s!==void 0?s:V).importNode(r,!0);D.currentNode=l;let c=D.nextNode(),p=0,d=0,h=a[0];for(;h!==void 0;){if(p===h.index){let u;h.type===2?u=new W(c,c.nextSibling,this,i):h.type===1?u=new h.ctor(c,h.name,h.strings,this,i):h.type===6&&(u=new Je(c,this,i)),this.v.push(u),h=a[++d]}p!==(h==null?void 0:h.index)&&(c=D.nextNode(),p++)}return l}m(i){let s=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(i,r,s),s+=r.strings.length-2):r._$AI(i[s])),s++}}class W{constructor(i,s,r,a){var l;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=i,this._$AB=s,this._$AM=r,this.options=a,this._$Cg=(l=a==null?void 0:a.isConnected)===null||l===void 0||l}get _$AU(){var i,s;return(s=(i=this._$AM)===null||i===void 0?void 0:i._$AU)!==null&&s!==void 0?s:this._$Cg}get parentNode(){let i=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&i.nodeType===11&&(i=s.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,s=this){i=L(this,i,s),ee(i)?i===$||i==null||i===""?(this._$AH!==$&&this._$AR(),this._$AH=$):i!==this._$AH&&i!==H&&this.$(i):i._$litType$!==void 0?this.T(i):i.nodeType!==void 0?this.k(i):ze(i)?this.S(i):this.$(i)}M(i,s=this._$AB){return this._$AA.parentNode.insertBefore(i,s)}k(i){this._$AH!==i&&(this._$AR(),this._$AH=this.M(i))}$(i){this._$AH!==$&&ee(this._$AH)?this._$AA.nextSibling.data=i:this.k(V.createTextNode(i)),this._$AH=i}T(i){var s;const{values:r,_$litType$:a}=i,l=typeof a=="number"?this._$AC(i):(a.el===void 0&&(a.el=ie.createElement(a.h,this.options)),a);if(((s=this._$AH)===null||s===void 0?void 0:s._$AD)===l)this._$AH.m(r);else{const c=new Ge(l,this),p=c.p(this.options);c.m(r),this.k(p),this._$AH=c}}_$AC(i){let s=Ye.get(i.strings);return s===void 0&&Ye.set(i.strings,s=new ie(i)),s}S(i){je(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,a=0;for(const l of i)a===s.length?s.push(r=new W(this.M(Q()),this.M(Q()),this,this.options)):r=s[a],r._$AI(l),a++;a<s.length&&(this._$AR(r&&r._$AB.nextSibling,a),s.length=a)}_$AR(i=this._$AA.nextSibling,s){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,s);i&&i!==this._$AB;){const a=i.nextSibling;i.remove(),i=a}}setConnected(i){var s;this._$AM===void 0&&(this._$Cg=i,(s=this._$AP)===null||s===void 0||s.call(this,i))}}class se{constructor(i,s,r,a,l){this.type=1,this._$AH=$,this._$AN=void 0,this.element=i,this.name=s,this._$AM=a,this.options=l,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,s=this,r,a){const l=this.strings;let c=!1;if(l===void 0)i=L(this,i,s,0),c=!ee(i)||i!==this._$AH&&i!==H,c&&(this._$AH=i);else{const p=i;let d,h;for(i=l[0],d=0;d<l.length-1;d++)h=L(this,p[r+d],s,d),h===H&&(h=this._$AH[d]),c||(c=!ee(h)||h!==this._$AH[d]),h===$?i=$:i!==$&&(i+=(h!=null?h:"")+l[d+1]),this._$AH[d]=h}c&&!a&&this.C(i)}C(i){i===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i!=null?i:"")}}class Xe extends se{constructor(){super(...arguments),this.type=3}C(i){this.element[this.name]=i===$?void 0:i}}const Rt=I?I.emptyScript:"";class Ke extends se{constructor(){super(...arguments),this.type=4}C(i){i&&i!==$?this.element.setAttribute(this.name,Rt):this.element.removeAttribute(this.name)}}class qe extends se{constructor(i,s,r,a,l){super(i,s,r,a,l),this.type=5}_$AI(i,s=this){var r;if((i=(r=L(this,i,s,0))!==null&&r!==void 0?r:$)===H)return;const a=this._$AH,l=i===$&&a!==$||i.capture!==a.capture||i.once!==a.once||i.passive!==a.passive,c=i!==$&&(a===$||l);l&&this.element.removeEventListener(this.name,this,a),c&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var s,r;typeof this._$AH=="function"?this._$AH.call((r=(s=this.options)===null||s===void 0?void 0:s.host)!==null&&r!==void 0?r:this.element,i):this._$AH.handleEvent(i)}}class Je{constructor(i,s,r){this.element=i,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(i){L(this,i)}}const Li={L:"$lit$",P:T,V:ye,I:1,N:Ze,R:Ge,j:ze,D:L,H:W,F:se,O:Ke,W:qe,B:Xe,Z:Je},Qe=window.litHtmlPolyfillSupport;Qe==null||Qe(ie,W),((me=globalThis.litHtmlVersions)!==null&&me!==void 0?me:globalThis.litHtmlVersions=[]).push("2.2.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var be,_e;const ji=null;class Y extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var i,s;const r=super.createRenderRoot();return(i=(s=this.renderOptions).renderBefore)!==null&&i!==void 0||(s.renderBefore=r.firstChild),r}update(i){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Dt=Bt(s,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Dt)===null||i===void 0||i.setConnected(!1)}render(){return H}}Y.finalized=!0,Y._$litElement$=!0,(be=globalThis.litElementHydrateSupport)===null||be===void 0||be.call(globalThis,{LitElement:Y});const et=globalThis.litElementPolyfillSupport;et==null||et({LitElement:Y});const zi={_$AK:(n,i,s)=>{n._$AK(i,s)},_$AL:n=>n._$AL};((_e=globalThis.litElementVersions)!==null&&_e!==void 0?_e:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(n,i)=>i.kind==="method"&&i.descriptor&&!("value"in i.descriptor)?Ne(Pe({},i),{finisher(s){s.createProperty(i.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){typeof i.initializer=="function"&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,n)}};function E(n){return(i,s)=>s!==void 0?((r,a,l)=>{a.constructor.createProperty(l,r)})(n,i,s):Ot(n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e;const Ht=(($e=window.HTMLSlotElement)===null||$e===void 0?void 0:$e.prototype.assignedElements)!=null?(n,i)=>n.assignedElements(i):(n,i)=>n.assignedNodes(i).filter(s=>s.nodeType===Node.ELEMENT_NODE);function Ui(n){const{slot:i,selector:s}=n!=null?n:{};return o({descriptor:r=>({get(){var a;const l="slot"+(i?`[name=${i}]`:":not([name])"),c=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(l),p=c!=null?Ht(c,n):[];return s?p.filter(d=>d.matches(s)):p},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fi(n,i,s){let r,a=n;return typeof n=="object"?(a=n.slot,r=n):r={flatten:i},s?t({slot:a,flatten:i,selector:s}):e({descriptor:l=>({get(){var c,p;const d="slot"+(a?`[name=${a}]`:":not([name])"),h=(c=this.renderRoot)===null||c===void 0?void 0:c.querySelector(d);return(p=h==null?void 0:h.assignedNodes(r))!==null&&p!==void 0?p:[]},enumerable:!0,configurable:!0})})}const Z=({title:n,children:i})=>_`
  <div class="error-background">
    <div class="error-container">
      <span class="error-title"
        ><span class="error-badge">Error</span>${n}</span
      >
      <span class="error-description">${i}</span>
    </div>
  </div>
`,Lt=R`
  .error-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: var(--error-bg);
    color: var(--error-fg);
  }

  .error-container {
    max-width: 800px;
    margin: auto;
    padding: 1em;
  }

  .error-badge {
    display: inline-block;
    font-size: 0.8em;
    padding: 0.2em 0.5em;
    margin-inline-end: 0.5em;

    background: var(--error-color);
    border-radius: 2px;
    color: var(--error-bg);
    text-transform: uppercase;
  }

  .error-title {
    display: block;
    font-size: 1.2em;

    font-weight: bold;
    text-transform: capitalize;
  }

  .error-description {
    display: block;
    margin-block-start: 1em;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=n=>(...i)=>({_$litDirective$:n,values:i});class Ut{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,s,r){this._$Ct=i,this._$AM=s,this._$Ci=r}_$AS(i,s){return this.update(i,s)}update(i,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=zt(class extends Ut{constructor(n){var i;if(super(n),n.type!==jt.ATTRIBUTE||n.name!=="style"||((i=n.strings)===null||i===void 0?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((i,s)=>{const r=n[s];return r==null?i:i+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[i]){const{style:s}=n.element;if(this.ct===void 0){this.ct=new Set;for(const r in i)this.ct.add(r);return this.render(i)}this.ct.forEach(r=>{i[r]==null&&(this.ct.delete(r),r.includes("-")?s.removeProperty(r):s[r]="")});for(const r in i){const a=i[r];a!=null&&(this.ct.add(r),r.includes("-")?s.setProperty(r,a):s[r]=a)}return H}});function tt(n){return{top:n.y,right:n.x+n.width,bottom:n.y+n.height,left:n.x}}function Ft(n,i){const s=tt(n),r=tt(i),a=!(s.top>r.bottom||s.bottom<r.top),l=!(s.left>r.right||s.right<r.left);if(l&&a){const u={x:(Math.max(s.left,r.left)+Math.min(s.right,r.right))/2,y:(Math.max(s.top,r.top)+Math.min(s.bottom,r.bottom))/2};return[{points:[{x:s.left,y:u.y},{x:r.left,y:u.y}]},{points:[{x:s.right,y:u.y},{x:r.right,y:u.y}]},{points:[{y:s.top,x:u.x},{y:r.top,x:u.x}]},{points:[{y:s.bottom,x:u.x},{y:r.bottom,x:u.x}]}]}const c=s.left>r.right,p=s.top>r.bottom,d={x:n.x+n.width/2,y:n.y+n.height/2};return[l?null:{points:[{x:c?s.left:s.right,y:d.y},{x:c?r.right:r.left,y:d.y}],bisector:a?void 0:[{x:c?r.right:r.left,y:d.y},{x:c?r.right:r.left,y:p?r.bottom:r.top}]},a?null:{points:[{y:p?s.top:s.bottom,x:d.x},{y:p?r.bottom:r.top,x:d.x}],bisector:l?void 0:[{y:p?r.bottom:r.top,x:d.x},{y:p?r.bottom:r.top,x:c?r.right:r.left}]}].filter(u=>!!u)}function xe(n){return Math.round(n*100)/100}function it(n,i){return[...st(n),...st(i)]}function st(n){return n?n instanceof Array?n:[n]:[]}var It=function(n,i,s,r){var a=arguments.length,l=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,s,r);else for(var p=n.length-1;p>=0;p--)(c=n[p])&&(l=(a<3?c(l):a>3?c(i,s,l):c(i,s))||l);return a>3&&l&&Object.defineProperty(i,s,l),l};const Vt=n=>{class i extends n{constructor(...r){super(...r),this.selectedNode=null}updated(r){super.updated(r),r.has("selectedNode")&&this.dispatchEvent(new CustomEvent("nodeselect",{detail:{selectedNode:this.selectedNode}}))}}return It([E({attribute:!1})],i.prototype,"selectedNode",void 0),i};function ae(n){return n.touches.length===0||n.touches.length>2}function Dt(n,i){return Math.sqrt(Math.pow(n.x-i.x,2)+Math.pow(n.y-i.y,2))}const Wt=n=>class extends n{constructor(...s){super(...s),this.previousTouches=null,this.addEventListener("touchstart",r=>{ae(r)||(r.preventDefault(),this.previousTouches=r.touches)}),this.addEventListener("touchend",r=>{ae(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchcancel",r=>{ae(r)||(r.preventDefault(),this.previousTouches=null)}),this.addEventListener("touchmove",r=>{if(ae(r))return;const a=Array.from(this.previousTouches||[]),l=Array.from(r.touches);if(this.previousTouches=r.touches,!(l.length!==a.length||!l.every(c=>a.some(p=>p.identifier===c.identifier)))){if(l.length===1){this.onTouchPan({x:l[0].pageX-a[0].pageX,y:l[0].pageY-a[0].pageY});return}this.onTouchPinch(Dt({x:l[0].pageX,y:l[0].pageY},{x:a[0].pageX,y:a[0].pageY}))}})}get isTouching(){return!!(this.previousTouches&&this.previousTouches.length>0)}onTouchPan(s){}onTouchPinch(s){}};var oe=function(n,i,s,r){var a=arguments.length,l=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,s,r);else for(var p=n.length-1;p>=0;p--)(c=n[p])&&(l=(a<3?c(l):a>3?c(i,s,l):c(i,s))||l);return a>3&&l&&Object.defineProperty(i,s,l),l},k=function(n,i){if(!i.has(n))throw new TypeError("attempted to get private field on non-instance");return i.get(n)},ot=function(n,i,s){if(!i.has(n))throw new TypeError("attempted to set private field on non-instance");return i.set(n,s),s};const Yt=n=>{var i,s,r,a,l;class c extends Wt(n){constructor(...d){super(...d),this.panX=0,this.panY=0,this.scale=1,this.zoomSpeed=500,this.panSpeed=500,i.set(this,!1),s.set(this,(u,f)=>{this.panX+=u/this.scale/window.devicePixelRatio,this.panY+=f/this.scale/window.devicePixelRatio}),r.set(this,u=>{u.code==="Space"&&!k(this,i)&&(ot(this,i,!0),document.body.style.cursor="grab")}),a.set(this,u=>{u.code==="Space"&&k(this,i)&&(ot(this,i,!1),document.body.style.cursor="auto")}),l.set(this,()=>{document.addEventListener("keyup",k(this,a)),document.addEventListener("keydown",k(this,r))}),this.addEventListener("wheel",u=>{if(!!this.isMovable)if(u.preventDefault(),u.ctrlKey){let{deltaY:f}=u;u.deltaMode===1&&(f*=15);const g=this.scale;this.scale*=1-f/((1e3-this.zoomSpeed)*.5);const v=u.offsetX-this.offsetWidth/2,m=u.offsetY-this.offsetHeight/2;this.panX+=v/this.scale-v/g,this.panY+=m/this.scale-m/g}else{const f=this.panSpeed*.002;this.panX-=u.deltaX*f/this.scale,this.panY-=u.deltaY*f/this.scale}},{passive:!1});let h=1;this.addEventListener("gesturestart",u=>{u.preventDefault(),h=this.scale}),this.addEventListener("gesturechange",u=>{const f=u;f.preventDefault(),this.scale=h*f.scale}),this.addEventListener("pointermove",u=>{!(u.buttons&4)||(u.preventDefault(),k(this,s).call(this,u.movementX,u.movementY))}),k(this,l).call(this),this.onmousedown=()=>{k(this,i)&&(document.body.style.cursor="grabbing",this.onmousemove=({movementX:u,movementY:f})=>{k(this,s).call(this,u,f)},this.onmouseup=()=>{document.body.style.cursor="grab",this.onmousemove=null,this.onmouseup=null})}}get isMovable(){return!0}get canvasTransform(){return[`scale(${this.scale})`,`translate(${this.panX}px, ${this.panY}px)`]}disconnectedCallback(){document.removeEventListener("keyup",k(this,a)),document.removeEventListener("keydown",k(this,r)),super.disconnectedCallback()}updated(d){super.updated(d),d.has("scale")&&this.dispatchEvent(new CustomEvent("scalechange",{detail:{scale:this.scale}})),(d.has("panX")||d.has("panY"))&&this.dispatchEvent(new CustomEvent("positionchange",{detail:{x:this.panX,y:this.panY}}))}onTouchPan(d){this.panX+=d.x/this.scale,this.panY+=d.y/this.scale}onTouchPinch(d){this.scale*=1-d/1e3}}return i=new WeakMap,s=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,oe([E({attribute:!1})],c.prototype,"panX",void 0),oe([E({attribute:!1})],c.prototype,"panY",void 0),oe([E({attribute:!1})],c.prototype,"scale",void 0),oe([E({type:Number,attribute:"zoom-speed"})],c.prototype,"zoomSpeed",void 0),oe([E({type:Number,attribute:"pan-speed"})],c.prototype,"panSpeed",void 0),c},Zt=({guide:n,reverseScale:i})=>{const s=Math.abs(n.points[0].x-n.points[1].x),r=Math.abs(n.points[0].y-n.points[1].y);return s===0&&r===0?null:S`
    <line
      class="distance-line"
      x1=${n.points[0].x}
      y1=${n.points[0].y}
      x2=${n.points[1].x}
      y2=${n.points[1].y}
    />

    ${n.bisector&&S`
        <line
          class="distance-line"
          x1=${n.bisector[0].x}
          y1=${n.bisector[0].y}
          x2=${n.bisector[1].x}
          y2=${n.bisector[1].y}
          style=${re({strokeDasharray:`${4*i}`})}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `},Gt=({guide:n,reverseScale:i,fontSize:s})=>{const r=Math.abs(n.points[0].x-n.points[1].x),a=Math.abs(n.points[0].y-n.points[1].y);if(r===0&&a===0)return null;const l=xe(Math.max(r,a)).toString(10),c=l.length*s*.5,p=s*.25,d=s*.25,h=s*.5,u=r>a?(n.points[0].x+n.points[1].x)/2-c/2:n.points[0].x,f=r>a?n.points[0].y:(n.points[0].y+n.points[1].y)/2-s/2,g=[`scale(${i})`,r>a?`translate(0, ${p+d})`:`translate(${p+h}, 0)`].join(" "),v=u+c/2,m=f+s/2,b=r>a?`${v} ${f}`:`${u} ${m}`;return S`
    <g class="distance-tooltip">
      <rect
        x=${u-h}
        y=${f-d}
        rx="2"
        width=${c+h*2}
        height=${s+d*2}
        transform=${g}
        transform-origin=${b}
        stroke="none"
      />

      <text
        x=${v}
        y=${f+s-d/2}
        text-anchor="middle"
        transform=${g}
        transform-origin=${b}
        stroke="none"
        fill="white"
        style="font-size: ${s}px"
      >
        ${l}
      </text>
    </g>
  `},nt=new Map,Xt=({node:n,distanceTo:i,reverseScale:s,fontSize:r})=>{const a=n.id+`
`+i.id;let l=nt.get(a);return l||(l=Ft(n.absoluteBoundingBox,i.absoluteBoundingBox),nt.set(a,l)),[...l.map(c=>Zt({guide:c,reverseScale:s})),...l.map(c=>Gt({guide:c,reverseScale:s,fontSize:r}))]},Kt=R`
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`,qt=({onClick:n=()=>{}})=>S`
  <svg @click=${n} title="close icon" width="14" height="14" viewBox="0 0 20 20" fill="none">
    <path d="M1 19L19 1M19 19L1 1" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,rt=({onClick:n=()=>{}})=>S`
  <svg @click=${n} title="copy icon" width="14" height="14" viewBox="0 0 30 30" fill="none">
  <path d="M21 25.5C21 24.9477 20.5523 24.5 20 24.5C19.4477 24.5 19 24.9477 19 25.5H21ZM13 2H25V0H13V2ZM28 5V21H30V5H28ZM25 24H13V26H25V24ZM10 21V5H8V21H10ZM13 24C11.3431 24 10 22.6569 10 21H8C8 23.7614 10.2386 26 13 26V24ZM28 21C28 22.6569 26.6569 24 25 24V26C27.7614 26 30 23.7614 30 21H28ZM25 2C26.6569 2 28 3.34315 28 5H30C30 2.23858 27.7614 0 25 0V2ZM13 0C10.2386 0 8 2.23858 8 5H10C10 3.34315 11.3431 2 13 2V0ZM16.5 28H5V30H16.5V28ZM2 25V10H0V25H2ZM5 28C3.34315 28 2 26.6569 2 25H0C0 27.7614 2.23858 30 5 30V28ZM5 7H8V5H5V7ZM2 10C2 8.34315 3.34315 7 5 7V5C2.23858 5 0 7.23858 0 10H2ZM16.5 30C18.9853 30 21 27.9853 21 25.5H19C19 26.8807 17.8807 28 16.5 28V30Z" fill="#B3B3B3"/>
</svg>
`,Jt=()=>S`
  <svg title="horizontal padding" width="14" height="14" viewBox="0 0 29 28" fill="none">
    <rect x="7" y="8" width="14" height="14" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M27 1V28" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 0V28" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,Qt=()=>S`
  <svg title="vertical padding" width="14" height="14" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="21" width="14" height="14" transform="rotate(-90 8 21)" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M1 1L28 0.999999" stroke="#B3B3B3" stroke-width="2"/>
    <path d="M0 27L28 27" stroke="#B3B3B3" stroke-width="2"/>
  </svg>
`,ei=()=>S`
  <svg title="figma logo" width="11" height="16" viewBox="0 0 12 17" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 1.5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm-5 2c0 1.043.533 1.963 1.341 2.5C1.033 6.537.5 7.457.5 8.5c0 1.043.533 1.963 1.341 2.5C1.033 11.537.5 12.457.5 13.5c0 1.657 1.343 3 3 3 1.657 0 3-1.343 3-3V10.736c.53.475 1.232.764 2 .764 1.657 0 3-1.343 3-3 0-1.043-.533-1.963-1.341-2.5.808-.537 1.341-1.457 1.341-2.5 0-1.657-1.343-3-3-3h-5c-1.657 0-3 1.343-3 3zm1 5c0-1.105.895-2 2-2h2v4h-2c-1.105 0-2-.895-2-2zm0 5c0-1.105.895-2 2-2h2v2c0 1.105-.895 2-2 2-1.105 0-2-.895-2-2zm7-3c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2 1.105 0 2 .895 2 2 0 1.105-.895 2-2 2zm0-5h-2v-4h2c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2z"
      fill-rule="evenodd"
      fill-opacity="1"
      fill="#000"
      stroke="none"
    ></path>
  </svg>
`,G=n=>n.a===0?"transparent":n.a<1?`rgba(${at(n).join(", ")}, ${n.a.toFixed(2)})`:oi(n),ti=n=>new ii(n).cssColor;class ii{constructor(i){this.gradientHandles={start:i.gradientHandlePositions[0],end:i.gradientHandlePositions[1]},this.colors=i.gradientStops,this.colorObjects=this.createColorObjects(this.colors),this.angle=this.calculateAngle(this.gradientHandles.start,this.gradientHandles.end)}get cssGradientArray(){return this.colorObjects.map((i,s)=>{const r=this.floatToPercent(this.colors[s].position);return i+" "+r})}get cssColor(){const i=this.cssGradientArray;return i.unshift(this.angle+"deg"),`linear-gradient(${i.join(", ")})`}createColorObjects(i){return i.map(({color:s})=>G(s))}floatToPercent(i){return(i*=100).toFixed(0)+"%"}calculateAngle(i,s){const r=Math.atan(this.calculateGradient(i,s));return parseInt(this.radToDeg(r).toFixed(1))}calculateGradient(i,s){return(s.y-i.y)/(s.x-i.x)*-1}radToDeg(i){return 180*i/Math.PI}}class si{constructor(i){var s,r,a;if(this.hasPadding=!1,this.height=`${Math.trunc(i.absoluteBoundingBox.height)}px`,this.width=`${Math.trunc(i.absoluteBoundingBox.width)}px`,(i.horizontalPadding||i.verticalPadding)&&(this.hasPadding=!0,this.horizontalPadding=`${i.horizontalPadding}px`,this.verticalPadding=`${i.verticalPadding}px`),i.style&&(this.fontFamily=i.style.fontFamily,this.fontPostScriptName=(s=i.style.fontPostScriptName)===null||s===void 0?void 0:s.replace("-"," "),this.fontWeight=i.style.fontWeight,this.fontSize=`${Math.ceil(i.style.fontSize)}px`,this.lineHeight=`${Math.trunc(i.style.lineHeightPx)}px`),i.rectangleCornerRadii&&(this.borderRadius=i.rectangleCornerRadii.filter(c=>c===i.cornerRadius).length<4?`${i.rectangleCornerRadii.join("px ")}px`:`${i.cornerRadius}px`),i.backgroundColor||i.backgroundColor){const c=i.backgroundColor||((r=i.background)===null||r===void 0?void 0:r[0].color);this.background=G(c)}const l=(a=i.fills)===null||a===void 0?void 0:a[0];if(l&&l.visible!==!1&&(i.type==="TEXT"?this.color=G(l.color):l.type.includes("GRADIENT")?this.backgroundImage=ti(l):l.type==="SOLID"&&(this.background=G(l.color))),i.strokes&&i.strokes.length>0&&(this.borderColor=G(i.strokes[0].color),this.border=`${i.strokeWeight}px solid ${this.borderColor}`),i.effects&&i.effects.length>0){const{offset:c,radius:p,color:d}=i.effects[0];this.boxShadowColor=G(d),this.boxShadow=`${(c==null?void 0:c.x)||0}px ${(c==null?void 0:c.y)||0}px 0 ${p} ${this.boxShadowColor}`}}getStyles(){return[this.height&&{property:"height",value:this.height},this.width&&{property:"width",value:this.width},this.fontFamily&&{property:"font-family",value:this.fontFamily},this.fontSize&&{property:"font-size",value:this.fontSize},this.fontWeight&&{property:"font-weight",value:this.fontWeight},this.lineHeight&&{property:"line-height",value:this.lineHeight},this.borderRadius&&{property:"border-radius",value:this.borderRadius},this.backgroundImage&&{property:"background-image",value:this.backgroundImage},this.boxShadow&&{property:"box-shadow",value:this.boxShadow,color:this.boxShadowColor},this.border&&{property:"border",value:this.border,color:this.borderColor},this.background&&{property:"background",value:this.background,color:this.background},this.color&&{property:"color",value:this.color,color:this.color}].filter(Boolean)}getStyleSheet(){return this.getStyles().map(lt).join(`
`)}}const at=n=>[Math.trunc(255*n.r),Math.trunc(255*n.g),Math.trunc(255*n.b)],oi=n=>{const[i,s,r]=at(n);return"#"+((1<<24)+(i<<16)+(s<<8)+r).toString(16).slice(1)},lt=({property:n,value:i})=>`${n}: ${i};`;var ni=function(n,i,s,r){function a(l){return l instanceof s?l:new s(function(c){c(l)})}return new(s||(s=Promise))(function(l,c){function p(u){try{h(r.next(u))}catch(f){c(f)}}function d(u){try{h(r.throw(u))}catch(f){c(f)}}function h(u){u.done?l(u.value):a(u.value).then(p,d)}h((r=r.apply(n,i||[])).next())})};const we=n=>ni(void 0,void 0,void 0,function*(){yield navigator.clipboard.writeText(n)}),ri=({node:n,onClose:i})=>{if(!n)return null;const s=new si(n),r=a=>a.stopPropagation();return _`
    <div
      class="inspector-view"
      @click=${r}
      @wheel=${r}
      @keydown=${r}
      @keyup=${r}
      @pointermove=${r}
    >
      <div class="inspector-section selectable-content">
        <div class="title-section">
          <h4>${n.name}</h4>
          ${qt({onClick:i})}
        </div>
        <div class="properties-overview">
          <div class="title-section">
            <p class="inspector-property">
              <span>W: </span>${s.width}
            </p>
            <p class="inspector-property" style="margin-left: 16px;">
              <span>H: </span>${s.height}
            </p>
          </div>
          ${s.fontPostScriptName?_`<p class="inspector-property">
                <span>Font:</span>
                ${s.fontPostScriptName}
              </p>`:null}
        </div>
      </div>
      ${s.hasPadding?_`<div class="inspector-section">
            <h4>Layout</h4>
            ${s.horizontalPadding&&_`<p class="inspector-property">
              ${Jt()} ${s.horizontalPadding}
            </p>`}
            ${s.verticalPadding&&_`<p class="inspector-property">
              ${Qt()} ${s.verticalPadding}
            </p>`}
          </div>`:null}
      ${n.characters?_`<div class="inspector-section">
            <div class="title-section">
              <h4>Content</h4>
              ${rt({onClick:()=>we(n.characters)})}
            </div>
            <p class="node-content code-section selectable-content">
              ${n.characters}
            </p>
          </div>`:null}
      ${ai(s)}
    </div>
  `},ai=n=>{const i=()=>we(n.getStyleSheet()),s=n.getStyles();return _`<div class="inspector-section">
    <div class="title-section style-section">
      <h4>CSS</h4>
      ${rt({onClick:i})}
    </div>
    <div class="code-section selectable-content">
      ${s.map(li)}
    </div>
  </div>`},li=n=>{const{property:i,value:s,color:r}=n;let a=null;switch(i){case"background":case"fill":case"border":case"box-shadow":case"color":a=_`<span
        class="color-preview"
        style="background-color: ${r}"
      ></span>`;break;case"background-image":a=_`<span
        class="color-preview"
        style="background-image: ${s}"
      ></span>`;break}return _`<div class="css-property" @click=${()=>we(lt(n))}>
    <span>${i}:</span>${a}<span class="css-value">${s}</span>;</span>
  </div>`},ci=R`
  .inspector-view {
    height: 100%;
    width: 300px;
    position: absolute;
    right: 0;
    background: white;
    border-left: 1px solid #ccc;
    overflow-y: auto;
    z-index: calc(var(--z-index) + 2);
  }

  .inspector-view h4 {
    font-size: 16px;
    margin: 0;
  }

  .style-section {
    margin-bottom: 12px;
  }

  .title-section {
    display: flex;
    align-items: center;
  }

  .code-section {
    padding: 8px;
    background: #f3f3f3;
    font-family: monospace;
  }

  .title-section svg {
    cursor: pointer;
    margin-left: auto;
  }

  .inspector-section {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }

  .properties-overview {
    font-family: monospace;
    color: #518785;
  }

  .properties-overview p span {
    color: #121212;
  }

  .inspector-property {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }

  .inspector-property span {
    color: #b3b3b3;
    margin-right: 4px;
  }

  .inspector-property svg {
    margin-right: 8px;
  }

  .css-property {
    margin: 8px;
    transition: background-color ease-in-out 100ms;
  }

  .css-property:hover {
    cursor: pointer;
    background-color: #e8e8e8;
  }

  .css-value {
    color: #518785;
    margin-left: 4px;
  }

  .color-preview {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    margin-left: 4px;
    vertical-align: middle;
  }

  .selectable-content {
    cursor: text;
    user-select: text;
  }
`,ct=({node:n,selected:i=!1,computedThickness:s,onClick:r})=>{const{x:a,y:l,width:c,height:p}=n.absoluteBoundingBox,d="cornerRadius"in n&&n.cornerRadius?{topLeft:n.cornerRadius,topRight:n.cornerRadius,bottomRight:n.cornerRadius,bottomLeft:n.cornerRadius}:"rectangleCornerRadii"in n&&n.rectangleCornerRadii?{topLeft:n.rectangleCornerRadii[0],topRight:n.rectangleCornerRadii[1],bottomRight:n.rectangleCornerRadii[2],bottomLeft:n.rectangleCornerRadii[3]}:{topLeft:0,topRight:0,bottomRight:0,bottomLeft:0},h=s/2,u=(m,b)=>`M${m},${b}`,f=(m,b)=>`L${m},${b}`,g=(m,b,w)=>`A${m},${m} 0 0 1 ${b},${w}`,v=[u(d.topLeft+h,h),f(c-d.topRight,h),g(d.topRight-h,c-h,d.topRight),f(c-h,p-d.bottomRight),g(d.bottomRight-h,c-d.bottomRight,p-h),f(d.bottomLeft,p-h),g(d.bottomLeft-h,h,p-d.bottomLeft),f(h,d.topLeft),g(d.topLeft-h,d.topLeft,h),"Z"].join(" ");return S`
    <path
      class="guide"
      d=${v}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${a}, ${l})"
      ?data-selected=${i}
      @click=${r}
    />
  `},di=({nodeSize:{x:n,y:i,width:s,height:r},offsetX:a,offsetY:l,reverseScale:c})=>{const p={top:`${l+i+r}px`,left:`${a+n+s/2}px`,transform:`translateX(-50%) scale(${c}) translateY(0.25em)`};return _`
    <div class="tooltip" style="${re(p)}">
      ${xe(s)} x ${xe(r)}
    </div>
  `},hi=R`
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`,Ae=1e3,Ee=60*Ae,Ce=60*Ee,ne=24*Ce,dt=7*ne,ht=30*ne,ut=365*ne,ui=[{gte:ut,divisor:ut,unit:"year"},{gte:ht,divisor:ht,unit:"month"},{gte:dt,divisor:dt,unit:"week"},{gte:ne,divisor:ne,unit:"day"},{gte:Ce,divisor:Ce,unit:"hour"},{gte:Ee,divisor:Ee,unit:"minute"},{gte:30*Ae,divisor:Ae,unit:"seconds"},{gte:0,divisor:1,text:"just now"}],pt=n=>(typeof n=="object"?n:new Date(n)).getTime(),pi=(n,i=Date.now(),s=new Intl.RelativeTimeFormat(void 0,{numeric:"auto"}))=>{const a=pt(i)-pt(n),l=Math.abs(a);for(const c of ui)if(l>=c.gte){const p=Math.round(Math.abs(a)/c.divisor),d=a<0,h=c.unit;return h?s.format(d?p:-p,h):c.text}},fi=R`
  .figma-footer {
    flex: 0;
    z-index: calc(var(--z-index) + 1);
    border-top: 1px solid #ccc;
    min-height: 48px;
    padding: 0 16px;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #fff;
    overflow-x: auto;
    cursor: pointer;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
  }

  .figma-footer--icon {
    margin-right: 12px;
  }

  .figma-footer--title {
    font-weight: 600;
    margin-right: 4px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .figma-footer--timestamp {
    white-space: nowrap;
    overflow: hidden;
  }
`,gi=n=>{if(!n||!n.link||n.link===void 0||n.link==="undefined")return null;const{link:i,timestamp:s,fileName:r}=n;return _`<a
    class="figma-footer"
    target="_blank"
    rel="noopener"
    title="Open in Figma"
    href="${i}"
  >
    <span class="figma-footer--icon"> ${ei()} </span>
    <span class="figma-footer--title"> ${r} </span>
    <span
      title="Last time edited: ${new Date(s).toUTCString()}"
      class="figma-footer--timestamp"
    >
      Edited ${pi(s)}
    </span>
  </a>`};var ft=function(n,i,s,r){var a=arguments.length,l=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,s,r);else for(var p=n.length-1;p>=0;p--)(c=n[p])&&(l=(a<3?c(l):a>3?c(i,s,l):c(i,s))||l);return a>3&&l&&Object.defineProperty(i,s,l),l},C=function(n,i){if(!i.has(n))throw new TypeError("attempted to get private field on non-instance");return i.get(n)},Se=function(n,i,s){if(!i.has(n))throw new TypeError("attempted to set private field on non-instance");return i.set(n,s),s};const gt=n=>{var i,s,r,a,l;class c extends Vt(Yt(n)){constructor(...d){super(...d),this.zoomMargin=50,this.link="",i.set(this,void 0),s.set(this,void 0),r.set(this,void 0),a.set(this,h=>u=>{u.preventDefault(),u.stopPropagation(),this.selectedNode=h}),l.set(this,h=>{var u,f;return(f=(u=C(this,r))===null||u===void 0?void 0:u.find(g=>g.id===h))!==null&&f!==void 0?f:null})}static get styles(){const d=super.styles;return it(d,[R`
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,hi,Lt,Kt,ci,fi])}get __images(){return{}}deselectNode(){this.selectedNode=null}get error(){return!C(this,i)||!C(this,r)?Z({title:"Error",children:"Please call `__updateTree/1` method with a valid parameter."}):null}render(){if(this.error)return this.error instanceof Error?Z({title:this.error.name||"Error",children:this.error.message}):typeof this.error=="string"?Z({title:"Error",children:this.error}):this.error;const d=C(this,i),h=1/this.scale,u=`calc(var(--guide-thickness) * ${h})`,f=parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness")),g=parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));return _`
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${d.width}px;
          height: ${d.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([v,m])=>{var b;const w=C(this,l).call(this,v);if(!w||!("absoluteBoundingBox"in w)||!(!((b=C(this,s))===null||b===void 0)&&b[w.id]))return null;const P=C(this,s)[w.id];return _`
                <img class="rendered-image" src="${m}"
                style=${re({top:`${w.absoluteBoundingBox.y-d.y}px`,left:`${w.absoluteBoundingBox.x-d.x}px`,marginTop:`${-P.top}px`,marginLeft:`${-P.left}px`,width:w.absoluteBoundingBox.width+P.left+P.right+"px",height:w.absoluteBoundingBox.height+P.top+P.bottom+"px"})}"
                " />
              `})}
            ${this.selectedNode&&di({nodeSize:this.selectedNode.absoluteBoundingBox,offsetX:-d.x,offsetY:-d.y,reverseScale:h})}
            ${S`
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${re({left:`${-d.x}px`,top:`${-d.y}px`,strokeWidth:u})}
            >
              ${this.selectedNode&&ct({node:this.selectedNode,selected:!0,computedThickness:f*h})}

              ${C(this,r).map(v=>{var m;return v.id===((m=this.selectedNode)===null||m===void 0?void 0:m.id)?null:S`
                  <g>
                    ${ct({node:v,computedThickness:f*h,onClick:C(this,a).call(this,v)})}
                    ${this.selectedNode&&Xt({node:v,distanceTo:this.selectedNode,reverseScale:h,fontSize:g})}
                  </g>
                `})}
            </svg>
          `}
          </div>
          ${ri({node:this.selectedNode,onClose:this.deselectNode})}
          ${gi(this.getMetadata())}
        </div>
      `}getMetadata(){}connectedCallback(){super.connectedCallback(),this.resetZoom()}updated(d){super.updated(d)}__updateTree(d){if(!(d.type==="CANVAS"||d.type==="FRAME"||d.type==="COMPONENT"||d.type==="COMPONENT_SET"))throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");Se(this,i,d.type==="CANVAS"?vi(d):d.absoluteBoundingBox),Se(this,r,le(d)),this.requestUpdate()}__updateEffectMargins(){if(!this.__images)return;const d=Object.keys(this.__images).map(C(this,l)).filter(h=>!!h);Se(this,s,d.reduce((h,u)=>"absoluteBoundingBox"in u?Object.assign(Object.assign({},h),{[u.id]:mi(u,le(u))}):h,{})),this.requestUpdate()}resetZoom(){if(C(this,i)){const{width:d,height:h}=C(this,i),{width:u,height:f}=this.getBoundingClientRect(),g=u/(d+this.zoomMargin*2),v=f/(h+this.zoomMargin*2);this.scale=Math.min(g,v,1)}}}return i=new WeakMap,s=new WeakMap,r=new WeakMap,a=new WeakMap,l=new WeakMap,ft([E({type:Number,attribute:"zoom-margin"})],c.prototype,"zoomMargin",void 0),ft([E({type:String,attribute:"link"})],c.prototype,"link",void 0),c};function vi(n){const i=[],s=[],r=[],a=[];for(const p of n.children){if(p.type!=="FRAME"&&p.type!=="COMPONENT")continue;const{x:d,y:h,width:u,height:f}=p.absoluteBoundingBox;i.push(d),s.push(d+u),r.push(h),a.push(h+f)}const l=Math.min(...i),c=Math.min(...r);return{x:l,y:c,width:Math.abs(Math.max(...s)-l),height:Math.abs(Math.min(...a)-c)}}function mi(n,i){const s=i.map(a=>{if(!("effects"in a))return{top:a.absoluteBoundingBox.y,right:a.absoluteBoundingBox.x+a.absoluteBoundingBox.width,bottom:a.absoluteBoundingBox.y+a.absoluteBoundingBox.height,left:a.absoluteBoundingBox.x};const l=a.effects.filter(d=>d.visible&&d.type==="LAYER_BLUR").map(d=>d.radius),c=a.effects.filter(d=>d.visible&&d.type==="DROP_SHADOW"&&!!d.offset).map(d=>({left:d.radius-d.offset.x,top:d.radius-d.offset.y,right:d.radius+d.offset.x,bottom:d.radius+d.offset.y})),p={top:Math.max(0,...l,...c.map(d=>d.top)),right:Math.max(0,...l,...c.map(d=>d.right)),bottom:Math.max(0,...l,...c.map(d=>d.bottom)),left:Math.max(0,...l,...c.map(d=>d.left))};return{top:a.absoluteBoundingBox.y-p.top,right:a.absoluteBoundingBox.x+a.absoluteBoundingBox.width+p.right,bottom:a.absoluteBoundingBox.y+a.absoluteBoundingBox.height+p.bottom,left:a.absoluteBoundingBox.x-p.left}}),r={top:Math.min(...s.map(a=>a.top)),right:Math.max(...s.map(a=>a.right)),bottom:Math.max(...s.map(a=>a.bottom)),left:Math.min(...s.map(a=>a.left))};return{top:n.absoluteBoundingBox.y-r.top,right:r.right-n.absoluteBoundingBox.x-n.absoluteBoundingBox.width,bottom:r.bottom-n.absoluteBoundingBox.y-n.absoluteBoundingBox.height,left:n.absoluteBoundingBox.x-r.left}}function le(n,i=0){return"absoluteBoundingBox"in n?!("children"in n)||n.children.length===0?[Object.assign(Object.assign({},n),{depth:i})]:[Object.assign(Object.assign({},n),{depth:i}),...n.children.map(s=>le(s,i+1)).flat()]:n.children.map(s=>le(s,i+1)).flat()}var vt=function(n,i,s,r){var a=arguments.length,l=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,s,r);else for(var p=n.length-1;p>=0;p--)(c=n[p])&&(l=(a<3?c(l):a>3?c(i,s,l):c(i,s))||l);return a>3&&l&&Object.defineProperty(i,s,l),l};class ce extends gt(Y){constructor(){super(...arguments),this.nodes=null,this.renderedImage=null}get isMovable(){return!!(this.nodes&&this.renderedImage&&this.documentNode)}get documentNode(){if(!this.nodes)return null;const i=Object.values(this.nodes.nodes)[0];return!i||!("absoluteBoundingBox"in i.document)?null:i.document}get __images(){return!this.documentNode||!this.renderedImage?{}:{[this.documentNode.id]:this.renderedImage}}get error(){if(!this.nodes||!this.renderedImage)return Z({title:"Parameter error",children:_`<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`});if(!this.documentNode)return Z({title:"Parameter Error",children:_`
          <span> Document node is empty or does not have size. </span>
        `});if(super.error)return super.error}getMetadata(){return{fileName:this.nodes.name,timestamp:this.nodes.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(this.__updateTree(this.documentNode),this.__updateEffectMargins(),this.resetZoom())}updated(i){if(super.updated(i),i.has("nodes")){if(!this.documentNode)return;this.__updateTree(this.documentNode),this.resetZoom()}i.has("renderedImage")&&this.__updateEffectMargins()}}vt([E({type:Object})],ce.prototype,"nodes",void 0),vt([E({type:String,attribute:"rendered-image"})],ce.prototype,"renderedImage",void 0);var mt=function(n,i,s,r){var a=arguments.length,l=a<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,s):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,i,s,r);else for(var p=n.length-1;p>=0;p--)(c=n[p])&&(l=(a<3?c(l):a>3?c(i,s,l):c(i,s))||l);return a>3&&l&&Object.defineProperty(i,s,l),l},Me=function(n,i){if(!i.has(n))throw new TypeError("attempted to get private field on non-instance");return i.get(n)},de,ke;class he extends gt(Y){constructor(){super(...arguments),this.documentNode=null,this.renderedImages=null,this.selectedPage=null,de.set(this,()=>{var i;if(!this.documentNode){this.selectedPage=null;return}this.selectedPage=(i=this.documentNode.document.children.filter(s=>s.type==="CANVAS")[0])!==null&&i!==void 0?i:null}),ke.set(this,i=>{var s,r;const a=i.currentTarget;this.selectedPage=(r=(s=this.documentNode)===null||s===void 0?void 0:s.document.children.find(l=>l.id===a.value))!==null&&r!==void 0?r:null,this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom(),this.__updateEffectMargins(),this.panX=0,this.panY=0)})}get isMovable(){return!!(this.renderedImages&&this.documentNode)}get __images(){return this.renderedImages||{}}get error(){if(!this.documentNode||!this.renderedImages)return Z({title:"Parameter error",children:_`<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`});if(super.error)return super.error}static get styles(){return it(super.styles,[R`
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `])}render(){var i;return _`
      <div class="controls">
        <select @change=${Me(this,ke)}>
          ${(i=this.documentNode)===null||i===void 0?void 0:i.document.children.map(s=>_`<option value=${s.id}>${s.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `}getMetadata(){return{fileName:this.documentNode.name,timestamp:this.documentNode.lastModified,link:this.link}}connectedCallback(){super.connectedCallback(),this.documentNode&&(Me(this,de).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom()))}updated(i){super.updated(i),i.has("documentNode")&&(Me(this,de).call(this),this.selectedPage&&(this.__updateTree(this.selectedPage),this.resetZoom())),i.has("renderedImages")&&this.__updateEffectMargins()}}de=new WeakMap,ke=new WeakMap,mt([E({type:Object,attribute:"document-node"})],he.prototype,"documentNode",void 0),mt([E({type:Object,attribute:"rendered-images"})],he.prototype,"renderedImages",void 0),customElements.get("figspec-file-viewer")||customElements.define("figspec-file-viewer",he),customElements.get("figspec-frame-viewer")||customElements.define("figspec-frame-viewer",ce);var yi=y(40585);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=new Set(["children","localName","ref","style","className"]),yt=new WeakMap,_i=(n,i,s,r,a)=>{const l=a==null?void 0:a[i];l!==void 0?s!==r&&((c,p,d)=>{let h=yt.get(c);h===void 0&&yt.set(c,h=new Map);let u=h.get(p);d!==void 0?u===void 0?(h.set(p,u={handleEvent:d}),c.addEventListener(p,u)):u.handleEvent=d:u!==void 0&&(h.delete(p),c.removeEventListener(p,u))})(n,l,s):n[i]=s},bt=(n,i,s,r,a)=>{const l=n.Component,c=n.createElement,p=new Set(Object.keys(r!=null?r:{}));for(const u in s.prototype)u in HTMLElement.prototype||(bi.has(u)?yi.warn(`${i} contains property ${u} which is a React reserved property. It will be used by React and not set on the element.`):p.add(u));class d extends l{constructor(){super(...arguments),this.t=null}o(f){if(this.t!==null)for(const g in this.i)_i(this.t,g,this.props[g],f?f[g]:void 0,r)}componentDidMount(){this.o()}componentDidUpdate(f){this.o(f)}render(){const f=this.props.l;this.h!==void 0&&this.u===f||(this.h=v=>{this.t===null&&(this.t=v),f!==null&&((m,b)=>{typeof m=="function"?m(b):m.current=b})(f,v),this.u=f});const g={ref:this.h};this.i={};for(const[v,m]of Object.entries(this.props))v!=="__forwardedRef"&&(p.has(v)?this.i[v]=m:g[v==="className"?"class":v]=m);return c(i,g)}}d.displayName=a!=null?a:s.name;const h=n.forwardRef((u,f)=>c(d,Ne(Pe({},u),{l:f}),u==null?void 0:u.children));return h.displayName=d.displayName,h},$i=bt(X,"figspec-frame-viewer",ce,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"}),xi=bt(X,"figspec-file-viewer",he,{onNodeSelect:"nodeselect",onPositionChange:"positionchange",onScaleChange:"scalechange"});var _t=y(70221),B=y(2913),wi=y(92249),Ai=y(12695),Ei=y(40585),Ci=function(n,i){return Object.defineProperty?Object.defineProperty(n,"raw",{value:i}):n.raw=i,n},ue=function(){return ue=Object.assign||function(n){for(var i,s=1,r=arguments.length;s<r;s++){i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=i[a])}return n},ue.apply(this,arguments)},Si=function(n,i,s,r){function a(l){return l instanceof s?l:new s(function(c){c(l)})}return new(s||(s=Promise))(function(l,c){function p(u){try{h(r.next(u))}catch(f){c(f)}}function d(u){try{h(r.throw(u))}catch(f){c(f)}}function h(u){u.done?l(u.value):a(u.value).then(p,d)}h((r=r.apply(n,i||[])).next())})},Mi=function(n,i){var s={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},r,a,l,c;return c={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function p(h){return function(u){return d([h,u])}}function d(h){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,a&&(l=h[0]&2?a.return:h[0]?a.throw||((l=a.return)&&l.call(a),0):a.next)&&!(l=l.call(a,h[1])).done)return l;switch(a=0,l&&(h=[h[0]&2,l.value]),h[0]){case 0:case 1:l=h;break;case 4:return s.label++,{value:h[1],done:!1};case 5:s.label++,a=h[1],h=[0];continue;case 7:h=s.ops.pop(),s.trys.pop();continue;default:if(l=s.trys,!(l=l.length>0&&l[l.length-1])&&(h[0]===6||h[0]===2)){s=0;continue}if(h[0]===3&&(!l||h[1]>l[0]&&h[1]<l[3])){s.label=h[1];break}if(h[0]===6&&s.label<l[1]){s.label=l[1],l=h;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(h);break}l[2]&&s.ops.pop(),s.trys.pop();continue}h=i.call(n,s)}catch(u){h=[6,u],a=0}finally{r=l=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}},$t=(0,B.css)(At||(At=Ci([`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`],[`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`])));function pe(n){return n.status!==200?Promise.reject(n.statusText):n.json()}function ki(n){var i;if(n.accessToken)return n.accessToken;try{return(i=Ai.env.STORYBOOK_FIGMA_ACCESS_TOKEN)!==null&&i!==void 0?i:null}catch(s){return null}}var xt=function(n){var i=n.config,s=(0,N.useState)({state:"loading"}),r=s[0],a=s[1],l=function(c){return Si(void 0,void 0,void 0,function(){var p,d,h,u,f,g,v,m,b,w,P,Te,Et,Ct,j;return Mi(this,function(z){switch(z.label){case 0:a({state:"loading"}),z.label=1;case 1:if(z.trys.push([1,6,,7]),p=i.url.match(wi.sC),!p)throw new Error(i.url+" is not a valid Figma URL.");if(d=p[3],h=new URL(i.url),u=h.searchParams.get("node-id"),f=ki(i),!f)throw new Error("Personal Access Token is required.");return g={"X-FIGMA-TOKEN":f},v=new URL("https://api.figma.com/v1/files/"+d),m=new URL("https://api.figma.com/v1/images/"+d),m.searchParams.set("format","svg"),u?[3,4]:[4,fetch(v.href,{headers:g,signal:c}).then(pe)];case 2:return b=z.sent(),w=wt(b.document),m.searchParams.set("ids",w.map(function(Pi){return Pi.id}).join(",")),[4,fetch(m.href,{headers:g,signal:c}).then(pe)];case 3:return P=z.sent(),a({state:"fetched",value:{type:"file",props:{documentNode:b,renderedImages:P.images,link:i.url}}}),[2];case 4:return v.pathname+="/nodes",v.searchParams.set("ids",u),m.searchParams.set("ids",u),[4,Promise.all([fetch(v.href,{headers:g,signal:c}).then(pe),fetch(m.href,{headers:g,signal:c}).then(pe)])];case 5:return Te=z.sent(),Et=Te[0],Ct=Te[1],a({state:"fetched",value:{type:"frame",props:{nodes:Et,renderedImage:Object.values(Ct.images)[0],link:i.url}}}),[3,7];case 6:return j=z.sent(),j instanceof DOMException&&j.code===DOMException.ABORT_ERR?[2]:(Ei.error(j),a({state:"failed",error:j instanceof Error?j.message:String(j)}),[3,7]);case 7:return[2]}})})};switch((0,N.useEffect)(function(){var c=!1,p=function(){c=!0},d=new AbortController;return l(d.signal).then(p,p),function(){c||d.abort()}},[i.url]),r.state){case"loading":return(0,B.jsx)(_t.a8,null,(0,B.jsx)(N.Fragment,null,"Loading Figma file..."));case"failed":return(0,B.jsx)(_t.a8,null,(0,B.jsx)(N.Fragment,null,"Failed to load Figma file"),(0,B.jsx)(N.Fragment,null,r.error));case"fetched":return r.value.type==="file"?(0,B.jsx)(xi,ue({css:$t},r.value.props)):(0,B.jsx)($i,ue({css:$t},r.value.props))}};const Ti=xt;function wt(n){return"absoluteBoundingBox"in n?[n]:!n.children||n.children.length===0?[]:n.children.map(wt).flat()}var At}}]);
