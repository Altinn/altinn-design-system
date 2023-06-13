"use strict";(()=>{var v=Object.defineProperty,y=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var p=(r,t,o)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,h=(r,t)=>{for(var o in t||(t={}))C.call(t,o)&&p(r,o,t[o]);if(f)for(var o of f(t))D.call(t,o)&&p(r,o,t[o]);return r},E=(r,t)=>y(r,b(t));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[538],{"./node_modules/@mdx-js/react/lib/index.js":(r,t,o)=>{o.d(t,{NF:()=>a,Zo:()=>m,ah:()=>c,pC:()=>e});var i=o("./node_modules/react/index.js");const e=i.createContext({});function a(d){return s;function s(n){const _=c(n.components);return i.createElement(d,E(h({},n),{allComponents:_}))}}function c(d){const s=i.useContext(e);return i.useMemo(()=>typeof d=="function"?d(s):h(h({},s),d),[s,d])}const u={};function m({components:d,children:s,disableParentContext:n}){let _;return n?_=typeof d=="function"?d({}):d||u:_=c(d),i.createElement(e.Provider,{value:_},s)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,t,o)=>{o.d(t,{$4:()=>e.$4,Dx:()=>e.Dx,Uh:()=>e.Uh,X6:()=>e.X6,dk:()=>e.dk,fQ:()=>e.fQ,h_:()=>e.h_});var i=o("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),e=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/intro.mdx":(r,t,o)=>{o.r(t),o.d(t,{default:()=>d});var i=o("./node_modules/react/index.js"),e=o("./node_modules/react/jsx-runtime.js"),a=o("./node_modules/@mdx-js/react/lib/index.js"),c=o("./node_modules/@storybook/addon-docs/dist/index.mjs");function u(s){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,a.ah)(),s.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.h_,{title:"Introduksjon"}),`
`,(0,e.jsx)(n.h1,{id:"altinns-interne-komponentbibliotek",children:"Altinns interne komponentbibliotek"}),`
`,(0,e.jsx)(n.h2,{id:"hvordan-installere",children:"Hvordan installere"}),`
`,(0,e.jsxs)(n.p,{children:["For \xE5 legge til komponentbiblioteket i ditt prosjekt, naviger til mappen hvor ",(0,e.jsx)(n.code,{children:"package.json"}),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"]}),`
`,(0,e.jsx)(n.h3,{id:"npm",children:"NPM"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:`npm install @altinn/altinn-design-system
`})}),`
`,(0,e.jsx)(n.h3,{id:"yarn",children:"Yarn"}),`
`,(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{children:`yarn add @altinn/altinn-design-system
`})}),`
`,(0,e.jsx)(n.h2,{id:"hvordan-bruke-storybook",children:"Hvordan bruke Storybook"}),`
`,(0,e.jsxs)(n.p,{children:["P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,e.jsx)(n.code,{children:"Canvas"})," og ",(0,e.jsx)(n.code,{children:"Docs"}),"."]}),`
`,(0,e.jsxs)(n.ul,{children:[`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Canvas"}),": Viser den spesifikke varianten av komponenten som er valgt."]}),`
`,(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.code,{children:"Docs"}),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5."]}),`
`]})]})}function m(s={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),s.components);return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(u,s)})):u(s)}const d=m},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(r,t,o)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=o("./node_modules/react/index.js"),e=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function d(s,n,_){var l,j={},x=null,k=null;_!==void 0&&(x=""+_),n.key!==void 0&&(x=""+n.key),n.ref!==void 0&&(k=n.ref);for(l in n)c.call(n,l)&&!m.hasOwnProperty(l)&&(j[l]=n[l]);if(s&&s.defaultProps)for(l in n=s.defaultProps,n)j[l]===void 0&&(j[l]=n[l]);return{$$typeof:e,type:s,key:x,ref:k,props:j,_owner:u.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(r,t,o)=>{r.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);})();
