"use strict";(()=>{var j=Object.defineProperty,E=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var x=(r,o,n)=>o in r?j(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,c=(r,o)=>{for(var n in o||(o={}))D.call(o,n)&&x(r,n,o[n]);if(u)for(var n of u(o))C.call(o,n)&&x(r,n,o[n]);return r},h=(r,o)=>E(r,f(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[627],{"./node_modules/@mdx-js/react/lib/index.js":(r,o,n)=>{n.d(o,{NF:()=>l,Zo:()=>i,ah:()=>p,pC:()=>e});var _=n("./node_modules/react/index.js");const e=_.createContext({});function l(t){return a;function a(d){const s=p(d.components);return _.createElement(t,h(c({},d),{allComponents:s}))}}function p(t){const a=_.useContext(e);return _.useMemo(()=>typeof t=="function"?t(a):c(c({},a),t),[a,t])}const m={};function i({components:t,children:a,disableParentContext:d}){let s;return d?s=typeof t=="function"?t({}):t||m:s=p(t),_.createElement(e.Provider,{value:s},a)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,o,n)=>{n.d(o,{$4:()=>e.$4,Dx:()=>e.Dx,Uh:()=>e.Uh,X6:()=>e.X6,dk:()=>e.dk,fQ:()=>e.fQ,h_:()=>e.h_});var _=n("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),e=n("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/AppWrapper/AppWrapper.mdx":(r,o,n)=>{n.r(o),n.d(o,{default:()=>a});var _=n("./node_modules/react/index.js"),e=n("./node_modules/react/jsx-runtime.js"),l=n("./node_modules/@mdx-js/react/lib/index.js"),p=n("./node_modules/@storybook/addon-docs/dist/index.mjs"),m=n("./src/components/AppWrapper/AppWrapper.stories.tsx");function i(d){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,l.ah)(),d.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.h_,{of:m}),`
`,(0,e.jsx)(s.h1,{id:"appwrapper",children:"AppWrapper"}),`
`,(0,e.jsx)(s.p,{children:`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks. CSS-variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks. font-family).`}),`
`,(0,e.jsx)(s.p,{children:"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."}),`
`,(0,e.jsx)(s.p,{children:"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React-treet som mulig."}),`
`,(0,e.jsx)(s.pre,{children:(0,e.jsx)(s.code,{className:"language-jsx",children:`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`})})]})}function t(d={}){const{wrapper:s}=Object.assign({},(0,l.ah)(),d.components);return s?(0,e.jsx)(s,Object.assign({},d,{children:(0,e.jsx)(i,d)})):i(d)}const a=t}}]);})();
