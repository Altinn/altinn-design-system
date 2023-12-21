"use strict";(()=>{var g=Object.defineProperty,y=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var p=(d,s,t)=>s in d?g(d,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[s]=t,h=(d,s)=>{for(var t in s||(s={}))D.call(s,t)&&p(d,t,s[t]);if(f)for(var t of f(s))E.call(s,t)&&p(d,t,s[t]);return d},b=(d,s)=>y(d,v(s));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[538],{"./node_modules/@mdx-js/react/lib/index.js":(d,s,t)=>{t.d(s,{NF:()=>_,Zo:()=>m,ah:()=>c,pC:()=>e});var i=t("./node_modules/react/index.js");const e=i.createContext({});function _(r){return o;function o(n){const a=c(n.components);return i.createElement(r,b(h({},n),{allComponents:a}))}}function c(r){const o=i.useContext(e);return i.useMemo(()=>typeof r=="function"?r(o):h(h({},o),r),[o,r])}const u={};function m({components:r,children:o,disableParentContext:n}){let a;return n?a=typeof r=="function"?r({}):r||u:a=c(r),i.createElement(e.Provider,{value:a},o)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(d,s,t)=>{t.d(s,{$4:()=>e.$4,Dx:()=>e.Dx,Uh:()=>e.Uh,X6:()=>e.X6,dk:()=>e.dk,fQ:()=>e.fQ,h_:()=>e.h_});var i=t("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),e=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./docs/intro.mdx":(d,s,t)=>{t.r(s),t.d(s,{default:()=>r});var i=t("./node_modules/react/index.js"),e=t("./node_modules/react/jsx-runtime.js"),_=t("./node_modules/@mdx-js/react/lib/index.js"),c=t("./node_modules/@storybook/addon-docs/dist/index.mjs");function u(o){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li"},(0,_.ah)(),o.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(c.h_,{title:"Introduksjon"}),`
`,(0,e.jsx)(n.h1,{id:"altinns-interne-komponentbibliotek",children:"Altinns interne komponentbibliotek"}),`
`,(0,e.jsxs)(n.p,{children:["Dette er et internt komponentbibliotek med komponenter unike for Altinn sine l\xF8sninger. Disse komponentene er ikke tenkt \xE5 tas i bruk av andre utenfor Altinn. P\xE5 ",(0,e.jsx)(n.a,{href:"https://www.designsystemet.no",target:"_blank",rel:"nofollow noopener noreferrer",children:"Felles Designsystem"})," kan du finne gjenbrukbare komponenter p\xE5 tvers."]}),`
`,(0,e.jsx)(n.h2,{id:"felles-designsystem",children:"Felles Designsystem"}),`
`,(0,e.jsxs)(n.p,{children:["Vi anbefaler \xE5 ta i bruk ",(0,e.jsx)(n.a,{href:"https://www.designsystemet.no",target:"_blank",rel:"nofollow noopener noreferrer",children:"Felles Designsystem"})," som best\xE5r av grunnleggende designelementer, komponenter og m\xF8nstre du kan bruke n\xE5r du utvikler tjenester."]}),`
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
`]})]})}function m(o={}){const{wrapper:n}=Object.assign({},(0,_.ah)(),o.components);return n?(0,e.jsx)(n,Object.assign({},o,{children:(0,e.jsx)(u,o)})):u(o)}const r=m},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(d,s,t)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=t("./node_modules/react/index.js"),e=Symbol.for("react.element"),_=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function r(o,n,a){var l,j={},k=null,x=null;a!==void 0&&(k=""+a),n.key!==void 0&&(k=""+n.key),n.ref!==void 0&&(x=n.ref);for(l in n)c.call(n,l)&&!m.hasOwnProperty(l)&&(j[l]=n[l]);if(o&&o.defaultProps)for(l in n=o.defaultProps,n)j[l]===void 0&&(j[l]=n[l]);return{$$typeof:e,type:o,key:k,ref:x,props:j,_owner:u.current}}s.Fragment=_,s.jsx=r,s.jsxs=r},"./node_modules/react/jsx-runtime.js":(d,s,t)=>{d.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);})();
