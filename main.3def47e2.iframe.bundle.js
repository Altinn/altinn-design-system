(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs/intro.stories.mdx":(d,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>G,__page:()=>r,default:()=>I});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.keys.js"),n=e.n(t),s=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.index-of.js"),a=e.n(s),i=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.js"),S=e.n(i),T=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.bind.js"),B=e.n(T),h=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),L=e.n(h),E=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),l=e("./.yarn/__virtual__/@mdx-js-react-virtual-0d5029ce33/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"),k=e("./.yarn/__virtual__/@storybook-addon-docs-virtual-7c1b1be7f9/0/cache/@storybook-addon-docs-npm-6.5.7-87b9b2ff05-768700e8f4.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"),W=["components"];function M(){return M=Object.assign?Object.assign.bind():function(c){for(var m=1;m<arguments.length;m++){var v=arguments[m];for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}return c},M.apply(this,arguments)}function w(c,m){if(c==null)return{};var v=R(c,m),g,P;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(c);for(P=0;P<x.length;P++)g=x[P],!(m.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,g)||(v[g]=c[g]))}return v}function R(c,m){if(c==null)return{};var v={},g=Object.keys(c),P,x;for(x=0;x<g.length;x++)P=g[x],!(m.indexOf(P)>=0)&&(v[P]=c[P]);return v}var z={},O="wrapper";function u(c){var m=c.components,v=w(c,W);return(0,l.kt)(O,M({},z,v,{components:m,mdxType:"MDXLayout"}),(0,l.kt)(k.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,l.kt)("h1",null,"Altinn Design System (v2)"),(0,l.kt)("h2",null,"Viktig informasjon om komponentbiblioteket"),(0,l.kt)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,l.kt)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,l.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,l.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,l.kt)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,l.kt)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,l.kt)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,l.kt)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,l.kt)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,l.kt)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,l.kt)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,l.kt)("h2",null,"Hvordan bruke Storybook"),(0,l.kt)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,l.kt)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,l.kt)("inlineCode",{parentName:"p"},"Docs"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}u.displayName="MDXContent",u.isMDXComponent=!0;var r=function(){throw new Error("Docs-only story")};r.parameters={docsOnly:!0};var _={title:"Introduksjon",includeStories:["__page"]},p={};_.parameters=_.parameters||{},_.parameters.docs=Object.assign({},_.parameters.docs||{},{page:function(){return(0,l.kt)(k.aT,{mdxStoryNameToKey:p,mdxComponentAnnotations:_},(0,l.kt)(u,null))}});const I=_;var G=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(d,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>G,__page:()=>r,default:()=>I});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.keys.js"),n=e.n(t),s=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.index-of.js"),a=e.n(s),i=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.js"),S=e.n(i),T=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.bind.js"),B=e.n(T),h=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),L=e.n(h),E=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),l=e("./.yarn/__virtual__/@mdx-js-react-virtual-0d5029ce33/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"),k=e("./.yarn/__virtual__/@storybook-addon-docs-virtual-7c1b1be7f9/0/cache/@storybook-addon-docs-npm-6.5.7-87b9b2ff05-768700e8f4.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"),W=["components"];function M(){return M=Object.assign?Object.assign.bind():function(c){for(var m=1;m<arguments.length;m++){var v=arguments[m];for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}return c},M.apply(this,arguments)}function w(c,m){if(c==null)return{};var v=R(c,m),g,P;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(c);for(P=0;P<x.length;P++)g=x[P],!(m.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,g)||(v[g]=c[g]))}return v}function R(c,m){if(c==null)return{};var v={},g=Object.keys(c),P,x;for(x=0;x<g.length;x++)P=g[x],!(m.indexOf(P)>=0)&&(v[P]=c[P]);return v}var z={},O="wrapper";function u(c){var m=c.components,v=w(c,W);return(0,l.kt)(O,M({},z,v,{components:m,mdxType:"MDXLayout"}),(0,l.kt)(k.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,l.kt)("h1",null,"AppWrapper"),(0,l.kt)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,l.kt)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,l.kt)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}u.displayName="MDXContent",u.isMDXComponent=!0;var r=function(){throw new Error("Docs-only story")};r.parameters={docsOnly:!0};var _={title:"Components/AppWrapper",includeStories:["__page"]},p={};_.parameters=_.parameters||{},_.parameters.docs=Object.assign({},_.parameters.docs||{},{page:function(){return(0,l.kt)(k.aT,{mdxStoryNameToKey:p,mdxComponentAnnotations:_},(0,l.kt)(u,null))}});const I=_;var G=["__page"]},"./.storybook/StoryPage.tsx":(d,o,e)=>{"use strict";e.d(o,{Y:()=>h});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.js"),n=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.description.js"),s=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),a=e("./.yarn/__virtual__/@storybook-addon-docs-virtual-7c1b1be7f9/0/cache/@storybook-addon-docs-npm-6.5.7-87b9b2ff05-768700e8f4.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"),i=e("./.yarn/cache/@altinn-figma-design-tokens-npm-0.0.28-5a4a7b97e1-f95493447d.zip/node_modules/@altinn/figma-design-tokens/dist/tokens.css"),S=e("./src/components/AppWrapper/AppWrapper.module.css"),T=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/jsx-runtime.js"),B=function(l){var k=l.children;return(0,T.jsx)("div",{children:k})};B.displayName="AppWrapper";try{B.displayName="AppWrapper",B.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:B.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(E){}var h=function(l){var k=l.description;return(0,T.jsxs)(B,{children:[(0,T.jsx)(a.Dx,{}),(0,T.jsx)(a.dk,{children:k}),(0,T.jsx)(a.fQ,{includePrimary:!0}),(0,T.jsx)(a.X6,{children:"Props"}),(0,T.jsx)(a.$4,{story:a.Uh})]})};h.displayName="StoryPage";var L=null;try{h.displayName="StoryPage",h.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:h.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(E){}},"./.storybook/preview.js-generated-config-entry.js":(d,o,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>M,parameters:()=>W});var n=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.keys.js"),s=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.js"),a=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.filter.js"),i=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),S=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.for-each.js"),T=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/web.dom-collections.for-each.js"),B=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),h=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.define-properties.js"),L=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.define-property.js"),E=e("./.yarn/__virtual__/@storybook-client-api-virtual-6001684355/0/cache/@storybook-client-api-npm-6.5.7-69587c556c-30ba0b3618.zip/node_modules/@storybook/client-api/dist/esm/ClientApi.js"),l=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),k=e("./.yarn/__virtual__/@storybook-theming-virtual-5311580b38/0/cache/@storybook-theming-npm-6.5.7-5ac5472a92-2739a994a1.zip/node_modules/@storybook/theming/dist/esm/index.js"),W={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},k.np.dark),light:Object.assign({},k.np.normal)}},M=["parameters"],w=e("./.yarn/cache/console-browserify-npm-1.2.0-5619eeb6ff-226591eeff.zip/node_modules/console-browserify/index.js");function R(u,r){var _=Object.keys(u);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(u);r&&(p=p.filter(function(I){return Object.getOwnPropertyDescriptor(u,I).enumerable})),_.push.apply(_,p)}return _}function z(u){for(var r=1;r<arguments.length;r++){var _=arguments[r]!=null?arguments[r]:{};r%2?R(Object(_),!0).forEach(function(p){O(u,p,_[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(_)):R(Object(_)).forEach(function(p){Object.defineProperty(u,p,Object.getOwnPropertyDescriptor(_,p))})}return u}function O(u,r,_){return r in u?Object.defineProperty(u,r,{value:_,enumerable:!0,configurable:!0,writable:!0}):u[r]=_,u}Object.keys(t).forEach(function(u){var r=t[u];switch(u){case"args":return(0,E.uc)(r);case"argTypes":return(0,E.v9)(r);case"decorators":return r.forEach(function(p){return(0,E.$9)(p,!1)});case"loaders":return r.forEach(function(p){return(0,E.HZ)(p,!1)});case"parameters":return(0,E.h1)(z({},r),!1);case"argTypesEnhancers":return r.forEach(function(p){return(0,E.My)(p)});case"argsEnhancers":return r.forEach(function(p){return(0,E._C)(p)});case"render":return(0,E.$P)(r);case"globals":case"globalTypes":{var _={};return _[u]=r,(0,E.h1)(_,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return w.log(u+" was not supported :( !")}})},"./src/components/CircularProgress/CircularProgress.stories.tsx":(d,o,e)=>{"use strict";e.r(o),e.d(o,{SimpleExample:()=>R,__namedExportsOrder:()=>z,default:()=>M});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),n=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.bind.js"),s=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),a=e("./.yarn/cache/storybook-addon-designs-npm-6.2.1-1900398b7a-0ea3ef4d1b.zip/node_modules/storybook-addon-designs/esm/index.js"),i=e("./.storybook/StoryPage.tsx"),S=e("./src/DesignTokens/index.ts"),T=e("./src/components/CircularProgress/CircularProgress.module.css"),B=e.n(T),h=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/jsx-runtime.js"),L=function(u){var r=u.value,_=u.width,p=_===void 0?70:_,I=u.strokeWidth,G=I===void 0?2.5:I,c=u.ariaLabel,m=u.label,v=u.id,g=v+"-label",P=!c&&m?g:void 0;return(0,h.jsxs)("div",{id:v,className:B().container,style:{width:p+"px"},"aria-valuenow":r,role:"progressbar","aria-labelledby":P,"aria-label":c,children:[m&&(0,h.jsx)("div",{id:g,className:B().label,children:m}),(0,h.jsxs)("svg",{className:B().svg,viewBox:"0 0 35.8 35.8",children:[(0,h.jsx)(E,{stroke:S.T.ColorsBlue200,strokeWidth:G}),(0,h.jsx)(E,{strokeWidth:G,stroke:S.T.ColorsBlue900,strokeDashoffset:100-r,strokeDasharray:"100 100",className:B().circleTransition})]})]})};L.displayName="CircularProgress";var E=function(u){return(0,h.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},u))};E.displayName="Circle";try{L.displayName="CircularProgress",L.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:L.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(O){}var l=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { CircularProgress } from './CircularProgress';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460';

export default {
  title: \`Components/CircularProgress\`,
  component: CircularProgress,
  parameters: {
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => (
        <StoryPage
          description={\`TODO: Add a description (supports markdown)\`}
        />
      ),
    },
  },
} as ComponentMeta<typeof CircularProgress>;

const CircularTemplate: ComponentStory<typeof CircularProgress> = (args) => (
  <CircularProgress {...args} />
);

export const SimpleExample = CircularTemplate.bind({});
SimpleExample.args = {
  width: 100,
  value: 60,
  label: '3/5',
  id: 'progress',
};
`,k={SimpleExample:{startLoc:{col:66,line:35},endLoc:{col:1,line:37},startBody:{col:66,line:35},endBody:{col:1,line:37}}},W="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const M={title:"Components/CircularProgress",component:L,parameters:{design:(0,a.vc)([{type:"figma",url:W},{type:"link",url:W}]),docs:{page:function(){return(0,h.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var w=function(u){return(0,h.jsx)(L,Object.assign({},u))};w.displayName="CircularTemplate";var R=w.bind({});R.args={width:100,value:60,label:"3/5",id:"progress"},R.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},R.parameters);var z=["SimpleExample"]},"./src/components/Panel/Panel.stories.tsx":(d,o,e)=>{"use strict";e.r(o),e.d(o,{Info:()=>$,Success:()=>Z,Warning:()=>Y,__namedExportsOrder:()=>Q,default:()=>P});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),n=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.bind.js"),s=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),a=e("./.yarn/cache/storybook-addon-designs-npm-6.2.1-1900398b7a-0ea3ef4d1b.zip/node_modules/storybook-addon-designs/esm/index.js"),i=e("./.storybook/StoryPage.tsx"),S=e("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"),T=e.n(S),B=e("./.yarn/__virtual__/@react-hookz-web-virtual-73eadd39e9/0/cache/@react-hookz-web-npm-14.2.2-f8e2e17f7f-b85f3bdb64.zip/node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),h=e("./src/DesignTokens/index.ts"),L,E,l;function k(){return k=Object.assign||function(A){for(var f=1;f<arguments.length;f++){var C=arguments[f];for(var D in C)Object.prototype.hasOwnProperty.call(C,D)&&(A[D]=C[D])}return A},k.apply(this,arguments)}var W=function(f){return s.createElement("svg",k({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},f),L||(L=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),E||(E=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},M,w,R;function z(){return z=Object.assign||function(A){for(var f=1;f<arguments.length;f++){var C=arguments[f];for(var D in C)Object.prototype.hasOwnProperty.call(C,D)&&(A[D]=C[D])}return A},z.apply(this,arguments)}var O=function(f){return s.createElement("svg",z({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},f),M||(M=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),w||(w=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),R||(R=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},u=e("./src/components/Panel/Panel.module.css"),r=e.n(u),_=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/jsx-runtime.js"),p;(function(A){A.Info="info",A.Warning="warning",A.Success="success"})(p||(p={}));var I=function(f){var C=f.size,D=f.variant;switch(D){case p.Info:case p.Warning:return(0,_.jsx)(W,{style:{width:C,height:C},"data-testid":"panel-icon-info"});case p.Success:return(0,_.jsx)(O,{style:{width:C,height:C},"data-testid":"panel-icon-success"})}},G=function(f){var C=f.forceMobileLayout,D=(0,B.a)("(max-width: "+h.T.BreakpointsSm+")");return C?!0:D},c=function(f){var C,D=f.renderIcon,H=D===void 0?I:D,y=f.title,j=f.children,b=f.variant,K=b===void 0?p.Info:b,N=f.showPointer,U=N===void 0?!1:N,X=f.showIcon,V=X===void 0?!0:X,F=f.forceMobileLayout,J=F===void 0?!1:F,q=G({forceMobileLayout:J}),ee=q?h.T.ComponentPanelSizeIconXs:h.T.ComponentPanelSizeIconMd;return(0,_.jsxs)("div",{className:T()(r().panel,(C={},C[r()["panel--has-pointer"]]=U,C[r()["panel--mobile-layout"]]=q,C)),children:[U&&(0,_.jsx)("div",{"data-testid":"panel-pointer",className:T()(r().panel__pointer,r()["panel__pointer--"+K])}),(0,_.jsxs)("div",{className:T()(r()["panel__content-wrapper"],r()["panel__content-wrapper--"+K]),children:[V&&(0,_.jsx)("div",{"data-testid":"panel-icon-wrapper",className:r()["panel__icon-wrapper"],children:H({size:ee,variant:K})}),(0,_.jsxs)("div",{className:r().panel__content,children:[(0,_.jsx)("h3",{className:r().panel__header,children:y}),(0,_.jsx)("div",{className:r().panel__body,children:j})]})]})]})};c.displayName="Panel";try{c.displayName="Panel",c.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
  switch (variant) {
    case PanelVariant.Info:
    case PanelVariant.Warning:
      return (
        <InfoIcon
          style={{ width: size, height: size }}
          data-testid='panel-icon-info'
        />
      );
    case PanelVariant.Success:
      return (
        <SuccessIcon
          style={{ width: size, height: size }}
          data-testid='panel-icon-success'
        />
      );
  }
}`},description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},showPointer:{defaultValue:{value:"false"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:c.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(A){}var m=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import { Panel, PanelVariant } from './Panel';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514';
export default {
  title: \`Components/Panel\`,
  component: Panel,
  parameters: {
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => (
        <StoryPage
          description={\`TODO: Add a description (supports markdown)\`}
        />
      ),
    },
  },
  args: {
    title: 'Panel tittel',
    children: <div>Her kommer litt informasjon</div>,
  },
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Info = Template.bind({});
Info.parameters = {
  docs: {
    description: {
      story: 'Info beskrivelse',
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  variant: PanelVariant.Warning,
};
Warning.parameters = {
  docs: {
    description: {
      story: 'Warning beskrivelse',
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  variant: PanelVariant.Success,
};
Success.parameters = {
  docs: {
    description: {
      story: 'Success beskrivelse',
    },
  },
};
`,v={Info:{startLoc:{col:47,line:38},endLoc:{col:76,line:38},startBody:{col:47,line:38},endBody:{col:76,line:38}},Warning:{startLoc:{col:47,line:38},endLoc:{col:76,line:38},startBody:{col:47,line:38},endBody:{col:76,line:38}},Success:{startLoc:{col:47,line:38},endLoc:{col:76,line:38},startBody:{col:47,line:38},endBody:{col:76,line:38}}},g="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const P={title:"Components/Panel",component:c,parameters:{design:(0,a.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,_.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,_.jsx)("div",{children:"Her kommer litt informasjon"})}};var x=function(f){return(0,_.jsx)(c,Object.assign({},f))};x.displayName="Template";var $=x.bind({});$.parameters={docs:{description:{story:"Info beskrivelse"}}};var Y=x.bind({});Y.args={variant:p.Warning},Y.parameters={docs:{description:{story:"Warning beskrivelse"}}};var Z=x.bind({});Z.args={variant:p.Success},Z.parameters={docs:{description:{story:"Success beskrivelse"}}},$.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},$.parameters),Y.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},Y.parameters),Z.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},Z.parameters);var Q=["Info","Warning","Success"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(d,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>D,__namedExportsOrder:()=>H,default:()=>f});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.bind.js"),n=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.assign.js"),s=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.is-array.js"),a=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.js"),i=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.description.js"),S=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.object.to-string.js"),T=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.symbol.iterator.js"),B=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.string.iterator.js"),h=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.iterator.js"),L=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/web.dom-collections.iterator.js"),E=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.slice.js"),l=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.function.name.js"),k=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.array.from.js"),W=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/index.js"),M=e("./.yarn/cache/storybook-addon-designs-npm-6.2.1-1900398b7a-0ea3ef4d1b.zip/node_modules/storybook-addon-designs/esm/index.js"),w=e("./.storybook/StoryPage.tsx"),R=e("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"),z=e.n(R),O=(0,W.createContext)(void 0),u=function(){var j=(0,W.useContext)(O);if(j===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return j},r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),_=e.n(r),p=e("./.yarn/cache/react-npm-18.1.0-d66a868dc8-5bb296b561.zip/node_modules/react/jsx-runtime.js"),I=function(j){var b=j.children,K=j.onChange,N=j.selectedValue,U=function(V){var F=V.selectedValue;K({selectedValue:F})};return(0,p.jsx)(O.Provider,{value:{onChange:U,selectedValue:N},children:(0,p.jsx)("div",{className:z()(_()["toggle-button-group"]),"data-testid":"toggle-button-group",children:b})})};I.displayName="ToggleButtonGroup";try{I.displayName="ToggleButtonGroup",I.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:I.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(y){}var G=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),c=e.n(G),m=function(j){var b,K=j.children,N=j.value,U=u(),X=U.onChange,V=U.selectedValue,F=function(){X({selectedValue:N})};return(0,p.jsx)("button",{"data-testid":"toggle-button",className:z()(c()["toggle-button"],(b={},b[c()["toggle-button--selected"]]=N===V,b)),onClick:F,type:"button","aria-pressed":N==V,children:K})};m.displayName="ToggleButton";try{m.displayName="ToggleButton",m.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:m.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(y){}function v(y,j){return Y(y)||$(y,j)||P(y,j)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(y,j){if(!!y){if(typeof y=="string")return x(y,j);var b=Object.prototype.toString.call(y).slice(8,-1);if(b==="Object"&&y.constructor&&(b=y.constructor.name),b==="Map"||b==="Set")return Array.from(y);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return x(y,j)}}function x(y,j){(j==null||j>y.length)&&(j=y.length);for(var b=0,K=new Array(j);b<j;b++)K[b]=y[b];return K}function $(y,j){var b=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(b!=null){var K=[],N=!0,U=!1,X,V;try{for(b=b.call(y);!(N=(X=b.next()).done)&&(K.push(X.value),!(j&&K.length===j));N=!0);}catch(F){U=!0,V=F}finally{try{!N&&b.return!=null&&b.return()}finally{if(U)throw V}}return K}}function Y(y){if(Array.isArray(y))return y}var Z=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { StoryPage } from '@sb/StoryPage';

import type { ChangeProps } from './Context';
import { ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Toggle button group\`,
  component: ToggleButtonGroup,
  parameters: {
    design: config([
      {
        type: 'figma',
        url: figmaLink,
      },
      {
        type: 'link',
        url: figmaLink,
      },
    ]),
    docs: {
      page: () => (
        <StoryPage
          description={\`TODO: Add a description (supports markdown)\`}
        />
      ),
    },
  },
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = () => {
  const [selected, setSelected] = useState('left');

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };

  return (
    <ToggleButtonGroup
      onChange={handleChange}
      selectedValue={selected}
    >
      <ToggleButton value='left'>Venstre valg</ToggleButton>
      <ToggleButton value='right'>H\xF8yre valg</ToggleButton>
    </ToggleButtonGroup>
  );
};
export const Example = Template.bind({});
Example.args = {};
Example.parameters = {
  docs: {
    description: {},
  },
};
`,Q={Example:{startLoc:{col:59,line:36},endLoc:{col:1,line:52},startBody:{col:59,line:36},endBody:{col:1,line:52}}},A="";const f={title:"Components/Toggle button group",component:I,parameters:{design:(0,M.vc)([{type:"figma",url:A},{type:"link",url:A}]),docs:{page:function(){return(0,p.jsx)(w.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var C=function(){var j=(0,W.useState)("left"),b=v(j,2),K=b[0],N=b[1],U=function(V){var F=V.selectedValue;N(F)};return(0,p.jsxs)(I,{onChange:U,selectedValue:K,children:[(0,p.jsx)(m,{value:"left",children:"Venstre valg"}),(0,p.jsx)(m,{value:"right",children:"H\xF8yre valg"})]})};C.displayName="Template";var D=C.bind({});D.args={},D.parameters={docs:{description:{}}},D.parameters=Object.assign({storySource:{source:`() => {
  const [selected, setSelected] = useState('left');

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };

  return (
    <ToggleButtonGroup
      onChange={handleChange}
      selectedValue={selected}
    >
      <ToggleButton value='left'>Venstre valg</ToggleButton>
      <ToggleButton value='right'>H\xF8yre valg</ToggleButton>
    </ToggleButtonGroup>
  );
}`}},D.parameters);var H=["Example"]},"./src/DesignTokens/index.ts":(d,o,e)=>{"use strict";e.d(o,{T:()=>w});var t=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.number.epsilon.js"),n=e.n(t),s=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.number.constructor.js"),a=e.n(s),i=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.string.replace.js"),S=e.n(i),T=e("./.yarn/unplugged/core-js-npm-3.21.1-4b064616b4/node_modules/core-js/modules/es.regexp.exec.js"),B=e.n(T),h=e("./.yarn/cache/@altinn-figma-design-tokens-npm-0.0.28-5a4a7b97e1-f95493447d.zip/node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),L=e("./.yarn/cache/@altinn-figma-design-tokens-npm-0.0.28-5a4a7b97e1-f95493447d.zip/node_modules/@altinn/figma-design-tokens/dist/tokens.json"),E=1.6,l=/(\d*\.?\d+)rem(?=\W|$)/gim,k=function(O){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,r=Math.pow(10,u);return Math.round((O+Number.EPSILON)*r)/r},W=function(O){return typeof O=="string"?O.replace(l,function(u,r){var _=k(r*E);return _+"rem"}):O},M={get:function(O,u){if(u in O){var r=O[u];return typeof r=="object"?new Proxy(r,M):W(r)}}},w=new Proxy(h,M),R=new Proxy(L,M)},"./storybook-init-framework-entry.js":(d,o,e)=>{"use strict";var t=e("./.yarn/__virtual__/@storybook-react-virtual-df34f77fc1/0/cache/@storybook-react-npm-6.5.7-0380fbbe8e-93e517313b.zip/node_modules/@storybook/react/dist/esm/client/index.js")},"./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(d,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>S});var t=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),s=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),i=a()(n());i.push([d.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),i.push([d.id,`html {
  font-family: var(--font-family-default), sans-serif;
}

/* old design system dependency rules */
/* these rules should be removed when we are rid of the old design system dependency, ref https://github.com/Altinn/altinn-design-system/issues/15 */
html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}
/* old design system dependency rules end*/
`,""]),i.locals={};const S=i},"./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(d,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>S});var t=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),s=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),i=a()(n());i.push([d.id,`.svg---cRnN3 {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.circleTransition---HmeNt {
  transition: stroke-dashoffset 1s ease-in-out;
}

.container---Qm66B {
  position: relative;
}

.label---jSBSk {
  font-size: var(--font-size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]),i.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const S=i},"./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(d,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>S});var t=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),s=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),i=a()(n());i.push([d.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .panel---Cn6JI {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-padding-gap-horizontal-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font-size: var(--component-panel-font-size-body-xs);
    --panel-header-font-size: var(--component-panel-font-size-header-xs);
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-padding-gap-horizontal-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font-size: var(--component-panel-font-size-body-lg);
    --panel-header-font-size: var(--component-panel-font-size-header-lg);
  }
}

.panel---Cn6JI {
  position: relative;
  width: 100%;
  padding-top: 0;
}

.panel--has-pointer---MPH_N {
  padding-top: var(--panel-pointer-height);
}

.panel__pointer---bc7XJ {
  position: absolute;
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  top: 1px; /* slight offset to avoid mini gap between component and pointer */
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.panel__content-wrapper--info---r4V2M,
.panel__pointer--info---AmxSN {
  background-color: var(--component-panel-color-background-default);
}

.panel__content-wrapper--success---rjkPt,
.panel__pointer--success---elN2A {
  background-color: var(--component-panel-color-background-success);
}

.panel__content-wrapper--warning---DvYFB,
.panel__pointer--warning---Y__Z1 {
  background-color: var(--component-panel-color-background-warning);
}

.panel__content-wrapper---SWZ1M {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.panel__icon-wrapper---VF3Vn {
  display: flex;
  flex: none;
}

.panel__content---BfiKu {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text-area-gap-vertical-xs);
}

.panel__header---kehDh {
  margin: 0;
  font-size: var(--panel-header-font-size);
}

.panel__body---NWoqK {
  font-size: var(--panel-body-font-size);
}
`,""]),i.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj","panel--has-pointer":"panel--has-pointer---MPH_N",panel__pointer:"panel__pointer---bc7XJ","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const S=i},"./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(d,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>S});var t=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),s=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),i=a()(n());i.push([d.id,`.toggle-button---VbrSe {
  border-radius: 0;
  border: none;
  min-width: var(--component-button-size-min-width);
  padding-top: var(--component-button-space-padding-top);
  padding-bottom: var(--component-button-space-padding-bottom);
  padding-left: var(--component-button-space-padding-y);
  padding-right: var(--component-button-space-padding-y);
  font-family: inherit;
  background-color: var(--colors-neutral-000);
  color: var(--colors-neutral-700);
  font-size: var(--font-size-300);
}

.toggle-button--selected---eDtcc {
  background-color: var(--component-button-primary-color-background-default);
  color: var(--component-button-primary-color-text-default);
}
.toggle-button---VbrSe:not(.toggle-button--selected---eDtcc):hover {
  background-color: var(--colors-blue-300);
}
`,""]),i.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const S=i},"./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(d,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>S});var t=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=e.n(t),s=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/runtime/api.js"),a=e.n(s),i=a()(n());i.push([d.id,`.toggle-button-group---xdsvq {
  border-color: var(--component-button-secondary-color-border-default);
  border-width: var(--border-width-standard);
  border-style: solid;
}
`,""]),i.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const S=i},"./src/components/AppWrapper/AppWrapper.module.css":(d,o,e)=>{var t=e("./.yarn/__virtual__/style-loader-virtual-6fbe5297c7/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");n=n.__esModule?n.default:n,typeof n=="string"&&(n=[[d.id,n,""]]);var s={};s.insert="head",s.singleton=!1;var a=t(n,s);d.exports=n.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(d,o,e)=>{var t=e("./.yarn/__virtual__/style-loader-virtual-6fbe5297c7/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");n=n.__esModule?n.default:n,typeof n=="string"&&(n=[[d.id,n,""]]);var s={};s.insert="head",s.singleton=!1;var a=t(n,s);d.exports=n.locals||{}},"./src/components/Panel/Panel.module.css":(d,o,e)=>{var t=e("./.yarn/__virtual__/style-loader-virtual-6fbe5297c7/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");n=n.__esModule?n.default:n,typeof n=="string"&&(n=[[d.id,n,""]]);var s={};s.insert="head",s.singleton=!1;var a=t(n,s);d.exports=n.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(d,o,e)=>{var t=e("./.yarn/__virtual__/style-loader-virtual-6fbe5297c7/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");n=n.__esModule?n.default:n,typeof n=="string"&&(n=[[d.id,n,""]]);var s={};s.insert="head",s.singleton=!1;var a=t(n,s);d.exports=n.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(d,o,e)=>{var t=e("./.yarn/__virtual__/style-loader-virtual-6fbe5297c7/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e("./.yarn/__virtual__/css-loader-virtual-a9433b4661/0/cache/css-loader-npm-6.7.1-b93a2de0d4-170fdbc630.zip/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./.yarn/__virtual__/postcss-loader-virtual-256e885c38/0/cache/postcss-loader-npm-4.3.0-3e7af086e3-b8ba29789d.zip/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");n=n.__esModule?n.default:n,typeof n=="string"&&(n=[[d.id,n,""]]);var s={};s.insert="head",s.singleton=!1;var a=t(n,s);d.exports=n.locals||{}},"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(d,o,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function n(a){var i=s(a);return e(i)}function s(a){if(!e.o(t,a)){var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}return t[a]}n.keys=function(){return Object.keys(t)},n.resolve=s,d.exports=n,n.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(d,o,e)=>{var t={"./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function n(a){var i=s(a);return e(i)}function s(a){if(!e.o(t,a)){var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}return t[a]}n.keys=function(){return Object.keys(t)},n.resolve=s,d.exports=n,n.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(d,o,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function n(a){var i=s(a);return e(i)}function s(a){if(!e.o(t,a)){var i=new Error("Cannot find module '"+a+"'");throw i.code="MODULE_NOT_FOUND",i}return t[a]}n.keys=function(){return Object.keys(t)},n.resolve=s,d.exports=n,n.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?72cb":()=>{},"?57de":()=>{},"?715e":()=>{},"./generated-stories-entry.cjs":(d,o,e)=>{"use strict";d=e.nmd(d);var t=e("./.yarn/__virtual__/@storybook-react-virtual-df34f77fc1/0/cache/@storybook-react-npm-6.5.7-0380fbbe8e-93e517313b.zip/node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],d,!1)}},d=>{var o=t=>d(d.s=t);d.O(0,[79],()=>(o("./.yarn/__virtual__/@storybook-core-client-virtual-4bbb5cde5b/0/cache/@storybook-core-client-npm-6.5.7-e8984f2516-8568d3e146.zip/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),o("./.yarn/__virtual__/@storybook-core-client-virtual-4bbb5cde5b/0/cache/@storybook-core-client-npm-6.5.7-e8984f2516-8568d3e146.zip/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),o("./storybook-init-framework-entry.js"),o("./.yarn/__virtual__/@storybook-react-virtual-df34f77fc1/0/cache/@storybook-react-npm-6.5.7-0380fbbe8e-93e517313b.zip/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-react-virtual-df34f77fc1/0/cache/@storybook-react-npm-6.5.7-0380fbbe8e-93e517313b.zip/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-links-virtual-c23b71d1a3/0/cache/@storybook-addon-links-npm-6.5.7-a0728fa3b8-9ab7983005.zip/node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-docs-virtual-7c1b1be7f9/0/cache/@storybook-addon-docs-npm-6.5.7-87b9b2ff05-768700e8f4.zip/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-actions-virtual-04c4f463aa/0/cache/@storybook-addon-actions-npm-6.5.7-48dfc65943-0761d82c61.zip/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-backgrounds-virtual-a89e25e6fd/0/cache/@storybook-addon-backgrounds-npm-6.5.7-bcabb2f175-816969357d.zip/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-measure-virtual-4656ef9bd9/0/cache/@storybook-addon-measure-npm-6.5.7-13376a682f-ca6896122d.zip/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-outline-virtual-01233a3661/0/cache/@storybook-addon-outline-npm-6.5.7-416e4d05ae-eaccf8ee04.zip/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-interactions-virtual-8d702fab3b/0/cache/@storybook-addon-interactions-npm-6.5.7-1d368d9d0b-d6b241f681.zip/node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),o("./.yarn/__virtual__/@storybook-addon-a11y-virtual-3753c558ea/0/cache/@storybook-addon-a11y-npm-6.5.7-77e42a7c6f-017aa8443d.zip/node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),o("./.storybook/preview.js-generated-config-entry.js"),o("./generated-stories-entry.cjs")));var e=d.O()}]);
