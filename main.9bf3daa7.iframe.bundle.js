(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>x,__page:()=>c,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),U=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),L=e("./node_modules/react/index.js"),C=e("./node_modules/@mdx-js/react/index.js"),A=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=["components"];function P(){return P=Object.assign?Object.assign.bind():function(g){for(var M=1;M<arguments.length;M++){var B=arguments[M];for(var I in B)Object.prototype.hasOwnProperty.call(B,I)&&(g[I]=B[I])}return g},P.apply(this,arguments)}function p(g,M){if(g==null)return{};var B=S(g,M),I,z;if(Object.getOwnPropertySymbols){var oe=Object.getOwnPropertySymbols(g);for(z=0;z<oe.length;z++)I=oe[z],!(M.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,I)||(B[I]=g[I]))}return B}function S(g,M){if(g==null)return{};var B={},I=Object.keys(g),z,oe;for(oe=0;oe<I.length;oe++)z=I[oe],!(M.indexOf(z)>=0)&&(B[z]=g[z]);return B}var E={},u="wrapper";function i(g){var M=g.components,B=p(g,y);return(0,C.mdx)(u,P({},E,B,{components:M,mdxType:"MDXLayout"}),(0,C.mdx)(A.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,C.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,C.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,C.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,C.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,C.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,C.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,C.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,C.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,C.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,C.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,C.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,C.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,C.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,C.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,C.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,C.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,C.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,C.mdx)("ul",null,(0,C.mdx)("li",{parentName:"ul"},(0,C.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,C.mdx)("li",{parentName:"ul"},(0,C.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}i.displayName="MDXContent",i.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var O={title:"Introduksjon",includeStories:["__page"]},h={};O.parameters=O.parameters||{},O.parameters.docs=Object.assign({},O.parameters.docs||{},{page:function(){return(0,C.mdx)(A.aT,{mdxStoryNameToKey:h,mdxComponentAnnotations:O},(0,C.mdx)(i,null))}});const D=O;var x=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>x,__page:()=>c,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),U=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),L=e("./node_modules/react/index.js"),C=e("./node_modules/@mdx-js/react/index.js"),A=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=["components"];function P(){return P=Object.assign?Object.assign.bind():function(g){for(var M=1;M<arguments.length;M++){var B=arguments[M];for(var I in B)Object.prototype.hasOwnProperty.call(B,I)&&(g[I]=B[I])}return g},P.apply(this,arguments)}function p(g,M){if(g==null)return{};var B=S(g,M),I,z;if(Object.getOwnPropertySymbols){var oe=Object.getOwnPropertySymbols(g);for(z=0;z<oe.length;z++)I=oe[z],!(M.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,I)||(B[I]=g[I]))}return B}function S(g,M){if(g==null)return{};var B={},I=Object.keys(g),z,oe;for(oe=0;oe<I.length;oe++)z=I[oe],!(M.indexOf(z)>=0)&&(B[z]=g[z]);return B}var E={},u="wrapper";function i(g){var M=g.components,B=p(g,y);return(0,C.mdx)(u,P({},E,B,{components:M,mdxType:"MDXLayout"}),(0,C.mdx)(A.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,C.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,C.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,C.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,C.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,C.mdx)("pre",null,(0,C.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}i.displayName="MDXContent",i.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var O={title:"Components/AppWrapper",includeStories:["__page"]},h={};O.parameters=O.parameters||{},O.parameters.docs=Object.assign({},O.parameters.docs||{},{page:function(){return(0,C.mdx)(A.aT,{mdxStoryNameToKey:h,mdxComponentAnnotations:O},(0,C.mdx)(i,null))}});const D=O;var x=["__page"]},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),_=e("./src/components/AppWrapper/AppWrapper.module.css"),V=e("./node_modules/react/jsx-runtime.js"),U=function(C){var A=C.children;return(0,V.jsx)("div",{children:A})};U.displayName="AppWrapper";try{U.displayName="AppWrapper",U.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:U.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(L){}var j=function(C){var A=C.description;return(0,V.jsxs)(U,{children:[(0,V.jsx)(l.Dx,{}),(0,V.jsx)(l.dk,{children:A}),(0,V.jsx)(l.fQ,{includePrimary:!0}),(0,V.jsx)(l.X6,{children:"Props"}),(0,V.jsx)(l.$4,{story:l.Uh})]})};j.displayName="StoryPage";var w=null;try{j.displayName="StoryPage",j.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:j.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(L){}},"./.storybook/preview.js-generated-config-entry.js":(r,t,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>P,parameters:()=>y});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),L=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),A=e("./node_modules/@storybook/theming/dist/esm/index.js"),y={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},A.np.dark),light:Object.assign({},A.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},P=["parameters"],p=e("./node_modules/console-browserify/index.js");function S(i,c){var O=Object.keys(i);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(i);c&&(h=h.filter(function(D){return Object.getOwnPropertyDescriptor(i,D).enumerable})),O.push.apply(O,h)}return O}function E(i){for(var c=1;c<arguments.length;c++){var O=arguments[c]!=null?arguments[c]:{};c%2?S(Object(O),!0).forEach(function(h){u(i,h,O[h])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(O)):S(Object(O)).forEach(function(h){Object.defineProperty(i,h,Object.getOwnPropertyDescriptor(O,h))})}return i}function u(i,c,O){return c in i?Object.defineProperty(i,c,{value:O,enumerable:!0,configurable:!0,writable:!0}):i[c]=O,i}Object.keys(s).forEach(function(i){var c=s[i];switch(i){case"args":return(0,L.uc)(c);case"argTypes":return(0,L.v9)(c);case"decorators":return c.forEach(function(h){return(0,L.$9)(h,!1)});case"loaders":return c.forEach(function(h){return(0,L.HZ)(h,!1)});case"parameters":return(0,L.h1)(E({},c),!1);case"argTypesEnhancers":return c.forEach(function(h){return(0,L.My)(h)});case"argsEnhancers":return c.forEach(function(h){return(0,L._C)(h)});case"render":return(0,L.$P)(c);case"globals":case"globalTypes":{var O={};return O[i]=c,(0,L.h1)(O,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return p.log(i+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>re,__namedExportsOrder:()=>ue,default:()=>pe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),S=e("./node_modules/classnames/index.js"),E=e.n(S),u=e("./.storybook/StoryPage.tsx"),i=e("./src/components/Button/index.ts"),c;(function(K){K.Primary="primary",K.Secondary="secondary"})(c||(c={}));var O=(0,y.createContext)(void 0),h=function(){var X=(0,y.useContext)(O);if(X===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return X},D=e("./src/components/Accordion/Accordion.module.css"),x=e.n(D),g=e("./node_modules/react/jsx-runtime.js"),M=function(X){var le=X.children,de=X.open,ve=X.onClick,je=X.iconVariant,be=je===void 0?c.Primary:je,Ee=(0,y.useId)(),Pe=(0,y.useId)();return(0,g.jsx)("div",{className:x().accordion,children:(0,g.jsx)(O.Provider,{value:{onClick:ve,open:de,headerId:Ee,contentId:Pe,iconVariant:be},children:le})})};M.displayName="Accordion";const B=null;try{M.displayName="Accordion",M.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:M.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(K){}var I=e("./src/components/Accordion/AccordionHeader.module.css"),z=e.n(I),oe=e("./src/components/Accordion/AccordionIcon.module.css"),Q=e.n(oe),ae;function N(){return N=Object.assign?Object.assign.bind():function(K){for(var X=1;X<arguments.length;X++){var le=arguments[X];for(var de in le)Object.prototype.hasOwnProperty.call(le,de)&&(K[de]=le[de])}return K},N.apply(this,arguments)}var ye=function(X){return y.createElement("svg",N({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X),ae||(ae=y.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},me;function ie(){return ie=Object.assign?Object.assign.bind():function(K){for(var X=1;X<arguments.length;X++){var le=arguments[X];for(var de in le)Object.prototype.hasOwnProperty.call(le,de)&&(K[de]=le[de])}return K},ie.apply(this,arguments)}var _e=function(X){return y.createElement("svg",ie({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X),me||(me=y.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},ne=function(){var X,le,de=h(),ve=de.onClick,je=de.open,be=de.iconVariant,Ee=[Q()["accordion-icon"],(X={},X[Q()["accordion-icon--opened"]]=je,X)],Pe=(le={height:20,width:20,className:E()(Ee)},le["data-testid"]=be,le.onClick=ve,le);switch(be){case c.Primary:return(0,g.jsx)(ye,Object.assign({},Pe));case c.Secondary:return(0,g.jsx)(_e,Object.assign({},Pe))}};const q=null;var b=function(X){var le,de=X.children,ve=X.actions,je=X.subtitle,be=h(),Ee=be.onClick,Pe=be.open,ge=be.headerId,fe=be.contentId;return(0,g.jsxs)("div",{className:E()(z()["accordion-header"],(le={},le[z()["accordion-header--subtitle"]]=je,le)),children:[(0,g.jsx)(ne,{}),(0,g.jsxs)("button",{className:E()(z()["accordion-header__title"]),"aria-expanded":Pe,type:"button",onClick:Ee,id:ge,"aria-controls":fe,children:[de,(je==null?void 0:je.length)&&(0,g.jsx)("div",{"data-testid":"accordion-header-subtitle",className:E()(z()["accordion-header__subtitle"]),children:je})]}),(0,g.jsx)("div",{className:E()(z()["accordion-header__actions"]),children:ve})]})};b.displayName="AccordionHeader";try{b.displayName="AccordionHeader",b.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:b.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(K){}var k=function(X){var le=X.children,de=h(),ve=de.open,je=de.contentId,be=de.headerId;return(0,g.jsx)("div",{children:ve&&(0,g.jsx)("div",{"aria-expanded":ve,id:je,"aria-labelledby":be,children:le})})};k.displayName="AccordionContent";const v=null;try{k.displayName="AccordionContent",k.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:k.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(K){}var T=e("./src/components/Accordion/Accordion.stories.module.css"),m=e.n(T);function d(K,X){return G(K)||Z(K,X)||R(K,X)||f()}function f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(K,X){if(!!K){if(typeof K=="string")return H(K,X);var le=Object.prototype.toString.call(K).slice(8,-1);if(le==="Object"&&K.constructor&&(le=K.constructor.name),le==="Map"||le==="Set")return Array.from(K);if(le==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le))return H(K,X)}}function H(K,X){(X==null||X>K.length)&&(X=K.length);for(var le=0,de=new Array(X);le<X;le++)de[le]=K[le];return de}function Z(K,X){var le=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(le!=null){var de=[],ve=!0,je=!1,be,Ee;try{for(le=le.call(K);!(ve=(be=le.next()).done)&&(de.push(be.value),!(X&&de.length===X));ve=!0);}catch(Pe){je=!0,Ee=Pe}finally{try{!ve&&le.return!=null&&le.return()}finally{if(je)throw Ee}}return de}}function G(K){if(Array.isArray(K))return K}var $=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useArgs } from '@storybook/client-api';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor, ButtonSize } from '../Button';

import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';
import classes from './Accordion.stories.module.css';
import { AccordionIconVariant } from './Context';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Accordion\`,
  component: Accordion,
  subcomponents: { AccordionHeader, AccordionContent },
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
    variant: AccordionIconVariant.Primary,
    useActions: true,
    subtitle: 'Subtitle',
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const AccordionExampleContent =
    'Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling';

  const [{ useActions }] = useArgs();
  const [{ subtitle }] = useArgs();

  const ActionDiv = useActions ? (
    <>
      <div>Example setup</div>
      <Button
        variant={ButtonVariant.Filled}
        color={ButtonColor.Primary}
        size={ButtonSize.Small}
      >
        Separat knapp 1
      </Button>
      <Button
        variant={ButtonVariant.Outline}
        color={ButtonColor.Primary}
        size={ButtonSize.Small}
      >
        Separat knapp 2
      </Button>
    </>
  ) : undefined;

  const SubtitleText = subtitle.length > 0 ? subtitle : undefined;

  return (
    <div className={cn(classes['container'])}>
      <Accordion
        onClick={handleClick1}
        open={open1}
        iconVariant={args.iconVariant}
      >
        <AccordionHeader
          actions={ActionDiv}
          subtitle={SubtitleText}
        >
          Accordion 1
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onClick={handleClick2}
        open={open2}
        iconVariant={args.iconVariant}
      >
        <AccordionHeader
          actions={ActionDiv}
          subtitle={SubtitleText}
        >
          Accordion 2
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  iconVariant: AccordionIconVariant.Primary,
  open: false,
};

Example.argTypes = {
  open: {
    control: false,
  },
  onClick: {
    control: false,
  },
};

Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,se={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},Y="";const pe={title:"Components/Accordion",component:M,subcomponents:{AccordionHeader:b,AccordionContent:k},parameters:{design:(0,P.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,g.jsx)(u.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:c.Primary,useActions:!0,subtitle:"Subtitle"}};var he=function(X){var le=(0,y.useState)(!1),de=d(le,2),ve=de[0],je=de[1],be=(0,y.useState)(!1),Ee=d(be,2),Pe=Ee[0],ge=Ee[1],fe=function(){je(!ve)},Oe=function(){ge(!Pe)},De="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",Me=(0,p.D8)(),Be=d(Me,1),Je=Be[0].useActions,$e=(0,p.D8)(),qe=d($e,1),Ge=qe[0].subtitle,Ue=Je?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Example setup"}),(0,g.jsx)(i.zx,{variant:i.Wu.Filled,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 1"}),(0,g.jsx)(i.zx,{variant:i.Wu.Outline,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 2"})]}):void 0,eo=Ge.length>0?Ge:void 0;return(0,g.jsxs)("div",{className:E()(m().container),children:[(0,g.jsxs)(M,{onClick:fe,open:ve,iconVariant:X.iconVariant,children:[(0,g.jsx)(b,{actions:Ue,subtitle:eo,children:"Accordion 1"}),(0,g.jsx)(k,{children:De})]}),(0,g.jsxs)(M,{onClick:Oe,open:Pe,iconVariant:X.iconVariant,children:[(0,g.jsx)(b,{actions:Ue,subtitle:eo,children:"Accordion 2"}),(0,g.jsx)(k,{children:De})]})]})};he.displayName="Template";var re=he.bind({});re.args={iconVariant:c.Primary,open:!1},re.argTypes={open:{control:!1},onClick:{control:!1}},re.parameters={docs:{description:{story:""}}},re.parameters=Object.assign({storySource:{source:`(args) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const AccordionExampleContent =
    'Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling';

  const [{ useActions }] = useArgs();
  const [{ subtitle }] = useArgs();

  const ActionDiv = useActions ? (
    <>
      <div>Example setup</div>
      <Button
        variant={ButtonVariant.Filled}
        color={ButtonColor.Primary}
        size={ButtonSize.Small}
      >
        Separat knapp 1
      </Button>
      <Button
        variant={ButtonVariant.Outline}
        color={ButtonColor.Primary}
        size={ButtonSize.Small}
      >
        Separat knapp 2
      </Button>
    </>
  ) : undefined;

  const SubtitleText = subtitle.length > 0 ? subtitle : undefined;

  return (
    <div className={cn(classes['container'])}>
      <Accordion
        onClick={handleClick1}
        open={open1}
        iconVariant={args.iconVariant}
      >
        <AccordionHeader
          actions={ActionDiv}
          subtitle={SubtitleText}
        >
          Accordion 1
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onClick={handleClick2}
        open={open2}
        iconVariant={args.iconVariant}
      >
        <AccordionHeader
          actions={ActionDiv}
          subtitle={SubtitleText}
        >
          Accordion 2
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
  );
}`}},re.parameters);var ue=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidth:()=>x,Primary:()=>E,Secondary:()=>u,SecondaryWithIconNoText:()=>D,Success:()=>i,SuccessWithCustomIcon:()=>h,SuccessWithIcon:()=>O,__namedExportsOrder:()=>M,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),U=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),C=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { Success as SuccessIcon } from '@navikt/ds-icons';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor } from '..';

import { ReactComponent as SuccessIconCustom } from './success.svg';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098';

export default {
  title: \`Components/Button/Filled\`,
  component: Button,
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
    variant: ButtonVariant.Filled,
    onClick: (params) => {
      alert(\`\${JSON.stringify((params.target as Element).innerHTML)} clicked!\`);
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const WithinContainerTemplate: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: ButtonColor.Primary,
  children: \`Primary button\`,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: ButtonColor.Secondary,
  children: \`Secondary button\`,
};
Secondary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: ButtonColor.Success,
  children: \`Success button\`,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  color: ButtonColor.Danger,
  children: \`Danger button\`,
};
Danger.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithIcon = Template.bind({});
SuccessWithIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIcon />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithCustomIcon = Template.bind({});
SuccessWithCustomIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIconCustom />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithCustomIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SecondaryWithIconNoText = Template.bind({});
SecondaryWithIconNoText.args = {
  color: ButtonColor.Secondary,
  icon: <SuccessIcon />,
};
SecondaryWithIconNoText.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const FullWidth = WithinContainerTemplate.bind({});
FullWidth.args = {
  color: ButtonColor.Primary,
  icon: <SuccessIcon />,
  fullWidth: true,
  children: \`Secondary button\`,
};
FullWidth.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: \`Disabled button\`,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,A={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const P={title:"Components/Button/Filled",component:j.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,L.jsx)(U.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Filled,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var p=function(I){return(0,L.jsx)(j.zx,Object.assign({},I))};p.displayName="Template";var S=function(I){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(j.zx,Object.assign({},I))})};S.displayName="WithinContainerTemplate";var E=p.bind({});E.args={color:j.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var u=p.bind({});u.args={color:j.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var i=p.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=p.bind({});c.args={color:j.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var O=p.bind({});O.args={color:j.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},O.parameters={docs:{description:{story:""}}};var h=p.bind({});h.args={color:j.rp.Success,icon:(0,L.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},h.parameters={docs:{description:{story:""}}};var D=p.bind({});D.args={color:j.rp.Secondary,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var x=S.bind({});x.args={color:j.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button"},x.parameters={docs:{description:{story:""}}};var g=p.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
)`}},x.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidthAndDashedBorder:()=>x,Primary:()=>E,Secondary:()=>u,SecondaryWithIconNoText:()=>D,Success:()=>i,SuccessWithCustomIcon:()=>h,SuccessWithIcon:()=>O,__namedExportsOrder:()=>M,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),U=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),C=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { Success as SuccessIcon } from '@navikt/ds-icons';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor } from '..';

import { ReactComponent as SuccessIconCustom } from './success.svg';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487';

export default {
  title: \`Components/Button/Outline\`,
  component: Button,
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
    variant: ButtonVariant.Outline,
    onClick: (params) => {
      alert(\`\${JSON.stringify((params.target as Element).innerHTML)} clicked!\`);
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const WithinContainerTemplate: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: ButtonColor.Primary,
  children: \`Primary button\`,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: ButtonColor.Secondary,
  children: \`Secondary button\`,
};
Secondary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: ButtonColor.Success,
  children: \`Success button\`,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  color: ButtonColor.Danger,
  children: \`Danger button\`,
};
Danger.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithIcon = Template.bind({});
SuccessWithIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIcon />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithCustomIcon = Template.bind({});
SuccessWithCustomIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIconCustom />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithCustomIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SecondaryWithIconNoText = Template.bind({});
SecondaryWithIconNoText.args = {
  color: ButtonColor.Secondary,
  icon: <SuccessIcon />,
};
SecondaryWithIconNoText.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const FullWidthAndDashedBorder = WithinContainerTemplate.bind({});
FullWidthAndDashedBorder.args = {
  color: ButtonColor.Primary,
  icon: <SuccessIcon />,
  fullWidth: true,
  dashedBorder: true,
  children: \`Secondary button\`,
};
FullWidthAndDashedBorder.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: \`Disabled button\`,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,A={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const P={title:"Components/Button/Outline",component:j.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,L.jsx)(U.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Outline,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var p=function(I){return(0,L.jsx)(j.zx,Object.assign({},I))};p.displayName="Template";var S=function(I){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(j.zx,Object.assign({},I))})};S.displayName="WithinContainerTemplate";var E=p.bind({});E.args={color:j.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var u=p.bind({});u.args={color:j.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var i=p.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=p.bind({});c.args={color:j.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var O=p.bind({});O.args={color:j.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},O.parameters={docs:{description:{story:""}}};var h=p.bind({});h.args={color:j.rp.Success,icon:(0,L.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},h.parameters={docs:{description:{story:""}}};var D=p.bind({});D.args={color:j.rp.Secondary,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var x=S.bind({});x.args={color:j.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},x.parameters={docs:{description:{story:""}}};var g=p.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
)`}},x.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidth:()=>x,Primary:()=>E,Secondary:()=>u,Success:()=>i,SuccessWithCustomIcon:()=>h,SuccessWithIcon:()=>O,SuccessWithIconNoText:()=>D,__namedExportsOrder:()=>M,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),U=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),C=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { Success as SuccessIcon } from '@navikt/ds-icons';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor, ButtonSize } from '..';

import { ReactComponent as SuccessIconCustom } from './success.svg';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509';

export default {
  title: \`Components/Button/Quiet\`,
  component: Button,
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
    variant: ButtonVariant.Quiet,
    size: ButtonSize.Small,
    onClick: (params) => {
      alert(\`\${JSON.stringify((params.target as Element).innerHTML)} clicked!\`);
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const WithinContainerTemplate: ComponentStory<typeof Button> = (args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  color: ButtonColor.Primary,
  children: \`Primary button\`,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: ButtonColor.Secondary,
  children: \`Secondary button\`,
};
Secondary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: ButtonColor.Success,
  children: \`Success button\`,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Danger = Template.bind({});
Danger.args = {
  color: ButtonColor.Danger,
  children: \`Danger button\`,
};
Danger.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithIcon = Template.bind({});
SuccessWithIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIcon />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithCustomIcon = Template.bind({});
SuccessWithCustomIcon.args = {
  color: ButtonColor.Success,
  icon: <SuccessIconCustom />,
  iconPlacement: 'left',
  children: 'Button',
};
SuccessWithCustomIcon.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SuccessWithIconNoText = Template.bind({});
SuccessWithIconNoText.args = {
  color: ButtonColor.Success,
  icon: <SuccessIcon />,
};
SuccessWithIconNoText.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const FullWidth = WithinContainerTemplate.bind({});
FullWidth.args = {
  color: ButtonColor.Primary,
  icon: <SuccessIcon />,
  fullWidth: true,
  children: \`Secondary button\`,
  iconPlacement: 'left',
};
FullWidth.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: \`Disabled button\`,
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,A={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const P={title:"Components/Button/Quiet",component:j.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,L.jsx)(U.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Quiet,size:j.qE.Small,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var p=function(I){return(0,L.jsx)(j.zx,Object.assign({},I))};p.displayName="Template";var S=function(I){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(j.zx,Object.assign({},I))})};S.displayName="WithinContainerTemplate";var E=p.bind({});E.args={color:j.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var u=p.bind({});u.args={color:j.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var i=p.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=p.bind({});c.args={color:j.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var O=p.bind({});O.args={color:j.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},O.parameters={docs:{description:{story:""}}};var h=p.bind({});h.args={color:j.rp.Success,icon:(0,L.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},h.parameters={docs:{description:{story:""}}};var D=p.bind({});D.args={color:j.rp.Success,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var x=S.bind({});x.args={color:j.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},x.parameters={docs:{description:{story:""}}};var g=p.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '300px',
      border: 'red solid 5px',
    }}
  >
    <Button {...args} />
  </div>
)`}},x.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>p,Compact:()=>E,Disabled:()=>u,Error:()=>S,LongText:()=>O,Normal:()=>P,ReadOnly:()=>i,WithDescription:()=>c,WithHiddenLabel:()=>h,__namedExportsOrder:()=>D,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/Checkbox/Checkbox.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Checkbox } from './Checkbox';

const figmaLink =
  'https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783';

export default {
  title: \`Components/Checkbox\`,
  component: Checkbox,
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
          description={\`Checkbox for boolean or multiple choice values in forms.
                        The component relies on being controlled, which means that it expects the consumer to set its \\\`checked\\\` state.
                        That is why the demonstration in Storybook does not change when clicking.
                        The \\\`onChange\\\` property must be set to trigger this change.\`}
        />
      ),
    },
  },
  args: {
    checked: false,
    compact: false,
    error: false,
    label: 'Tekst',
    readOnly: false,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  docs: {
    description: {
      story: 'This is the default checkbox.',
    },
  },
};

export const Checked = Template.bind({});
Checked.args = { checked: true };
Checked.parameters = {
  docs: {
    description: {
      story: 'This is a checked checkbox.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: true };
Error.parameters = {
  docs: {
    description: {
      story:
        'This checkbox is supposed to be used when there is a user input error related to it.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = { compact: true };
Compact.parameters = {
  docs: {
    description: {
      story: 'This is the compact checkbox.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed.',
    },
  },
};

export const ReadOnly = Template.bind({});
ReadOnly.args = { readOnly: true };
ReadOnly.parameters = {
  docs: {
    description: {
      story: 'This is the read-only checkbox.',
    },
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = { description: 'Lorem ipsum dolor sit amet.' };
WithDescription.parameters = {
  docs: {
    description: {
      story: 'This is a checkbox with description.',
    },
  },
};

export const LongText = Template.bind({});
LongText.args = {
  label:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.',
  description:
    'Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus.',
};
LongText.parameters = {
  docs: {
    description: {
      story: 'This is how it looks with long texts.',
    },
  },
};

export const WithHiddenLabel = Template.bind({});
WithHiddenLabel.args = { hideLabel: true };
WithHiddenLabel.parameters = {
  docs: {
    description: {
      story:
        "This is a checkbox with the \`hiddenLabel\` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the \`label\` property is set in this case, it will be made available for accessibility tools through the HTML component's \`aria-label\` attribute.",
    },
  },
};
`,L={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},C="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const A={title:"Components/Checkbox",component:U.X,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var y=function(g){return(0,j.jsx)(U.X,Object.assign({},g))};y.displayName="Template";var P=y.bind({});P.args={},P.parameters={docs:{description:{story:"This is the default checkbox."}}};var p=y.bind({});p.args={checked:!0},p.parameters={docs:{description:{story:"This is a checked checkbox."}}};var S=y.bind({});S.args={error:!0},S.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var E=y.bind({});E.args={compact:!0},E.parameters={docs:{description:{story:"This is the compact checkbox."}}};var u=y.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var i=y.bind({});i.args={readOnly:!0},i.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var c=y.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a checkbox with description."}}};var O=y.bind({});O.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},O.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var h=y.bind({});h.args={hideLabel:!0},h.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},p.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},S.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},O.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},h.parameters);var D=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>R,Disabled:()=>Z,Error:()=>H,Horizontal:()=>f,Vertical:()=>d,__namedExportsOrder:()=>G,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e("./node_modules/classnames/index.js"),h=e.n(O),D=e("./src/components/Checkbox/Checkbox.tsx"),x=e("./src/components/FieldSet/index.ts"),g=e("./src/utils/arrayUtils.ts"),M=e("./src/hooks/index.ts"),B=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),I=e.n(B),z=e("./node_modules/react/jsx-runtime.js");function oe($,se){return me($)||ye($,se)||ae($,se)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae($,se){if(!!$){if(typeof $=="string")return N($,se);var Y=Object.prototype.toString.call($).slice(8,-1);if(Y==="Object"&&$.constructor&&(Y=$.constructor.name),Y==="Map"||Y==="Set")return Array.from($);if(Y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))return N($,se)}}function N($,se){(se==null||se>$.length)&&(se=$.length);for(var Y=0,pe=new Array(se);Y<se;Y++)pe[Y]=$[Y];return pe}function ye($,se){var Y=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(Y!=null){var pe=[],he=!0,re=!1,ue,K;try{for(Y=Y.call($);!(he=(ue=Y.next()).done)&&(pe.push(ue.value),!(se&&pe.length===se));he=!0);}catch(X){re=!0,K=X}finally{try{!he&&Y.return!=null&&Y.return()}finally{if(re)throw K}}return pe}}function me($){if(Array.isArray($))return $}var ie;(function($){$.Vertical="vertical",$.Horizontal="horizontal"})(ie||(ie={}));var _e=function(se,Y){switch(Y.type){case"check":return se.concat([Y.name]);case"uncheck":return se.filter(function(pe){return pe!==Y.name});case"reset":return Y.state}},ne=function(se){return se.filter(function(Y){var pe=Y.checked;return pe}).map(function(Y){var pe=Y.name;return pe})},q=function(se){var Y=se.compact,pe=se.description,he=se.disabled,re=se.error,ue=se.items,K=se.legend,X=se.onChange,le=se.variant,de=le===void 0?ie.Vertical:le;if(!(0,g.zb)(ue.map(function(ge){return ge.name})))throw Error("Each name in the checkbox group must be unique.");var ve=(0,n.useReducer)(_e,ne(ue)),je=oe(ve,2),be=je[0],Ee=je[1];(0,n.useEffect)(function(){return Ee({type:"reset",state:ne(ue)})},[ue]);var Pe=(0,M.D9)(be);return(0,M.PQ)(function(){X&&!he&&!(0,g.cO)(Pe,be)&&X(be)},[be,X,he]),(0,z.jsx)(x.C,{description:pe,disabled:he,error:re,legend:K,size:Y?x.w.Xsmall:x.w.Small,children:(0,z.jsx)("div",{className:h()(I()["checkbox-group"],I()["checkbox-group--"+de],Y&&I()["checkbox-group--compact"]),children:ue.map(function(ge){return(0,z.jsx)(D.X,{checkboxId:ge.checkboxId,checked:be.includes(ge.name),compact:Y,description:ge.description,disabled:he||ge.disabled,error:!!re,label:ge.label,name:ge.name,onChange:function(Oe){Ee({type:Oe.target.checked?"check":"uncheck",name:ge.name})}},ge.name)})})})};q.displayName="CheckboxGroup";try{q.displayName="CheckboxGroup",q.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:q.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch($){}var b=`import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { CheckboxGroup, CheckboxGroupVariant } from './CheckboxGroup';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455';

export default {
  title: \`Components/CheckboxGroup\`,
  component: CheckboxGroup,
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
          description={
            'Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. ' +
            "Its \`onChange\` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."
          }
        />
      ),
    },
  },
  args: {
    compact: false,
    description: 'Velg \xE9n eller flere planeter fra listen.',
    disabled: false,
    items: [
      { checked: false, label: 'Merkur', name: 'planet1' },
      { checked: false, label: 'Venus', name: 'planet2' },
      { checked: false, label: 'Jorden', name: 'planet3' },
      { checked: false, label: 'Mars', name: 'planet4' },
      { checked: false, label: 'Jupiter', name: 'planet5' },
      { checked: false, label: 'Saturn', name: 'planet6' },
      { checked: false, label: 'Uranus', name: 'planet7' },
      { checked: false, label: 'Neptun', name: 'planet8' },
    ],
    legend: 'Velg planeter',
    variant: CheckboxGroupVariant.Vertical,
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const Vertical = Template.bind({});
Vertical.args = {
  variant: CheckboxGroupVariant.Vertical,
};
Vertical.parameters = {
  docs: {
    description: {
      story: 'This is the default setting.',
    },
  },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: CheckboxGroupVariant.Horizontal,
};
Horizontal.parameters = {
  docs: {
    description: {
      story: 'Use this if there is sufficient horizontal space.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = {
  compact: true,
};
Compact.parameters = {
  docs: {
    description: {
      story:
        'Use this if there are space limitations or if the content is less important.',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: 'Du m\xE5 velge minst ett av alternativene over.',
};
Error.parameters = {
  docs: {
    description: {
      story:
        'The checkbox group gets this state if the \`error\` property is set. Use it to tell the user that there is an input error related to this group.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed.',
    },
  },
};
`,k={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},v="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const T={title:"Components/CheckboxGroup",component:q,parameters:{design:(0,l.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,z.jsx)(a.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:ie.Vertical}};var m=function(se){return(0,z.jsx)(q,Object.assign({},se))};m.displayName="Template";var d=m.bind({});d.args={variant:ie.Vertical},d.parameters={docs:{description:{story:"This is the default setting."}}};var f=m.bind({});f.args={variant:ie.Horizontal},f.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var R=m.bind({});R.args={compact:!0},R.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var H=m.bind({});H.args={error:"Du m\xE5 velge minst ett av alternativene over."},H.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var Z=m.bind({});Z.args={disabled:!0},Z.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},d.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},d.parameters),f.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},f.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},R.parameters),H.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},H.parameters),Z.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},Z.parameters);var G=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{SimpleExample:()=>S,__namedExportsOrder:()=>E,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/DesignTokens/index.ts"),V=e("./src/components/CircularProgress/CircularProgress.module.css"),U=e.n(V),j=e("./node_modules/react/jsx-runtime.js"),w=function(i){var c=i.value,O=i.width,h=O===void 0?70:O,D=i.strokeWidth,x=D===void 0?2.5:D,g=i.ariaLabel,M=i.label,B=i.id,I=B+"-label",z=!g&&M?I:void 0;return(0,j.jsxs)("div",{id:B,className:U().container,style:{width:h+"px"},role:"progressbar","aria-labelledby":z,"aria-label":g,children:[M&&(0,j.jsx)("div",{id:I,className:U().label,children:M}),(0,j.jsxs)("svg",{className:U().svg,viewBox:"0 0 35.8 35.8",children:[(0,j.jsx)(L,{stroke:_.T.ColorsBlue200,strokeWidth:x}),(0,j.jsx)(L,{strokeWidth:x,stroke:_.T.ColorsBlue900,strokeDashoffset:100-c,strokeDasharray:"100 100",className:U().circleTransition})]})]})};w.displayName="CircularProgress";var L=function(i){return(0,j.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},i))};L.displayName="Circle";try{w.displayName="CircularProgress",w.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:w.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(u){}var C=`import React from 'react';
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
`,A={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},y="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const P={title:"Components/CircularProgress",component:w,parameters:{design:(0,l.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,j.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var p=function(i){return(0,j.jsx)(w,Object.assign({},i))};p.displayName="CircularTemplate";var S=p.bind({});S.args={width:100,value:60,label:"3/5",id:"progress"},S.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},S.parameters);var E=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>P,__namedExportsOrder:()=>p,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/ErrorMessage/ErrorMessage.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ErrorMessage } from './ErrorMessage';

const figmaLink =
  'https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396';

export default {
  title: \`Components/ErrorMessage\`,
  component: ErrorMessage,
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
          description={
            'Simple error-message suitable to be shown in table views'
          }
        />
      ),
    },
  },
  args: {
    id: 'error-message-story',
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
);

export const Example = Template.bind({});
Example.args = {};
Example.parameters = {
  docs: {
    description: {
      story: '',
    },
  },
};
`,L={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},C="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const A={title:"Components/ErrorMessage",component:U.B,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var y=function(E){return(0,j.jsx)(U.B,Object.assign({},E,{children:"This is an error message"}))};y.displayName="Template";var P=y.bind({});P.args={},P.parameters={docs:{description:{story:""}}},P.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},P.parameters);var p=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>p,Disabled:()=>u,Error:()=>E,Normal:()=>P,WithDescription:()=>S,__namedExportsOrder:()=>i,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/FieldSet/FieldSet.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { FieldSet, FieldSetSize } from './FieldSet';

const figmaLink = '';

export default {
  title: \`Components/FieldSet\`,
  component: FieldSet,
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
          description={\`Field set component to use as a wrapper for groups of form elements.\`}
        />
      ),
    },
  },
  args: {
    children: 'Her er det noe innhold.',
    legend: 'Lorem ipsum',
    size: FieldSetSize.Small,
  },
} as ComponentMeta<typeof FieldSet>;

const Template: ComponentStory<typeof FieldSet> = (args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  docs: {
    description: {
      story: 'This is a normal field set.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = { size: FieldSetSize.Xsmall };
Compact.parameters = {
  docs: {
    description: {
      story: 'This is a compact field set.',
    },
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  description:
    'Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula.',
};
WithDescription.parameters = {
  docs: {
    description: {
      story: 'This is a field set with a description.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: 'Her er det en beskrivende feilmelding.' };
Error.parameters = {
  docs: {
    description: {
      story:
        'This is a field set with an error message related to the content.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled field set. All input components inside become disabled.',
    },
  },
};
`,L={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},C="";const A={title:"Components/FieldSet",component:U.C,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:U.w.Small}};var y=function(O){return(0,j.jsx)(U.C,Object.assign({},O,{children:O.children}))};y.displayName="Template";var P=y.bind({});P.args={},P.parameters={docs:{description:{story:"This is a normal field set."}}};var p=y.bind({});p.args={size:U.w.Xsmall},p.parameters={docs:{description:{story:"This is a compact field set."}}};var S=y.bind({});S.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},S.parameters={docs:{description:{story:"This is a field set with a description."}}};var E=y.bind({});E.args={error:"Her er det en beskrivende feilmelding."},E.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var u=y.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},P.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},P.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},p.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},S.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},u.parameters);var i=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Dashed:()=>g,Solid:()=>x,__namedExportsOrder:()=>M,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/classnames/index.js"),V=e.n(_),U=e("./src/components/List/List.module.css"),j=e.n(U),w;(function(B){B.Solid="solid",B.Dashed="dashed"})(w||(w={}));var L=(0,n.createContext)({borderStyle:w.Solid}),C=function(){var I=(0,n.useContext)(L);if(I===void 0)throw new Error("useListContext must be used within a ListContext");return I},A=e("./node_modules/react/jsx-runtime.js"),y=function(I){var z=I.children,oe=I.borderStyle,Q=oe===void 0?w.Solid:oe;return(0,A.jsx)("ul",{className:V()(j().list,j()["list--"+Q]),children:(0,A.jsx)(L.Provider,{value:{borderStyle:Q},children:z})})};y.displayName="List";try{y.displayName="List",y.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:y.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(B){}var P=e("./src/components/List/ListItem.module.css"),p=e.n(P),S=function(I){var z=I.children,oe=C(),Q=oe.borderStyle;return(0,A.jsx)("li",{className:V()(p()["list-item"],p()["list-item--"+Q]),children:z})};S.displayName="ListItem";try{S.displayName="ListItem",S.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:S.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(B){}var E=e("./src/components/List/List.stories.modules.css"),u=e.n(E),i=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { List } from './List';
import { ListItem } from './ListItem';
import { BorderStyle } from './Context';
import classes from './List.stories.modules.css';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/List\`,
  component: List,
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
    //TODO: Add default args
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
};

export const Solid = Template.bind({});
Solid.args = {
  borderStyle: BorderStyle.Solid,
};
Solid.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Dashed = Template.bind({});
Dashed.args = {
  borderStyle: BorderStyle.Dashed,
};
Dashed.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,c={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},O="";const h={title:"Components/List",component:y,parameters:{design:(0,l.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,A.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var D=function(I){return(0,A.jsx)("div",{className:u().container,children:(0,A.jsxs)(y,{borderStyle:I.borderStyle,children:[(0,A.jsx)(S,{children:"List Item 1"}),(0,A.jsx)(S,{children:"List Item 2"}),(0,A.jsx)(S,{children:"List Item 3"})]})})};D.displayName="Template";var x=D.bind({});x.args={borderStyle:w.Solid},x.parameters={docs:{description:{story:""}}};var g=D.bind({});g.args={borderStyle:w.Dashed},g.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},x.parameters),g.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},g.parameters);var M=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>Z,GoogleMaps:()=>pe,KartverketSea:()=>Y,KartverketTerrain:()=>se,MapWithMarkerZoomAndCenter:()=>G,OpenStreetMap:()=>$,__namedExportsOrder:()=>he,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./.storybook/StoryPage.tsx"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),E=e("./node_modules/leaflet/dist/images/marker-icon.png"),u=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),i=e("./node_modules/leaflet/dist/images/marker-shadow.png"),c=e("./node_modules/leaflet/dist/leaflet-src.js"),O=e("./node_modules/react-leaflet/lib/MapContainer.js"),h=e("./node_modules/react-leaflet/lib/TileLayer.js"),D=e("./node_modules/react-leaflet/lib/AttributionControl.js"),x=e("./node_modules/react-leaflet/lib/Marker.js"),g=e("./node_modules/react-leaflet/lib/hooks.js"),M=e("./src/components/Map/Map.module.css"),B=e.n(M),I=e("./node_modules/leaflet/dist/leaflet.css"),z=e("./node_modules/react/jsx-runtime.js"),oe={latitude:64.888996,longitude:12.8186054},Q=4,ae=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],N=function(ue){var K=ue.readOnly,X=K===void 0?!1:K,le=ue.layers,de=le===void 0?ae:le,ve=ue.centerLocation,je=ve===void 0?oe:ve,be=ue.zoom,Ee=be===void 0?Q:be,Pe=ue.markerLocation,ge=ue.onClick;return(0,z.jsxs)(O.h,{className:B().map,center:me(je),zoom:Ee,zoomControl:!X,dragging:!X,touchZoom:!X,doubleClickZoom:!X,scrollWheelZoom:!X,attributionControl:!1,children:[de.map(function(fe,Oe){return(0,z.jsx)(h.I,{url:fe.url,attribution:fe.attribution,subdomains:fe.subdomains?fe.subdomains:[],opacity:X?.5:1},Oe)}),(0,z.jsx)(D.z,{prefix:!1}),(0,z.jsx)(ye,{markerLocation:Pe}),(0,z.jsx)(ie,{readOnly:X,onClick:ge})]})};N.displayName="Map";function ye(re){var ue=re.markerLocation,K=(0,c.icon)({iconUrl:E,iconRetinaUrl:u,shadowUrl:i,iconSize:[25,41],iconAnchor:[12,41]});return ue?(0,z.jsx)(x.J,{position:me(ue),icon:K}):null}function me(re){return[re.latitude,re.longitude]}var ie=function(ue){var K=ue.onClick,X=ue.readOnly;return(0,g.zV)({click:function(de){K&&!X&&K({latitude:de.latlng.lat,longitude:de.latlng.lng})}}),null};try{N.displayName="Map",N.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}',
    attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
  },
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}',
    attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
  },
]`},description:"",name:"layers",required:!1,type:{name:"MapLayer[]"}},centerLocation:{defaultValue:{value:`{
  latitude: 64.888996,
  longitude: 12.8186054,
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:N.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(re){}var _e=e("./node_modules/console-browserify/index.js");function ne(re,ue){return T(re)||v(re,ue)||b(re,ue)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(re,ue){if(!!re){if(typeof re=="string")return k(re,ue);var K=Object.prototype.toString.call(re).slice(8,-1);if(K==="Object"&&re.constructor&&(K=re.constructor.name),K==="Map"||K==="Set")return Array.from(re);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return k(re,ue)}}function k(re,ue){(ue==null||ue>re.length)&&(ue=re.length);for(var K=0,X=new Array(ue);K<ue;K++)X[K]=re[K];return X}function v(re,ue){var K=re==null?null:typeof Symbol!="undefined"&&re[Symbol.iterator]||re["@@iterator"];if(K!=null){var X=[],le=!0,de=!1,ve,je;try{for(K=K.call(re);!(le=(ve=K.next()).done)&&(X.push(ve.value),!(ue&&X.length===ue));le=!0);}catch(be){de=!0,je=be}finally{try{!le&&K.return!=null&&K.return()}finally{if(de)throw je}}return X}}function T(re){if(Array.isArray(re))return re}var m=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { Location } from './Map';
import { Map } from './Map';

const figmaLink = '';

export default {
  title: \`Components/Map\`,
  component: Map,
  parameters: {
    layout: 'fullscreen',
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
      page: () => <StoryPage description={\`Map component\`} />,
    },
  },
  args: {
    //
  },
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story:
        'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"',
    },
  },
};

export const MapWithMarkerZoomAndCenter = Template.bind({});
MapWithMarkerZoomAndCenter.args = {
  markerLocation: {
    latitude: 59.2641592,
    longitude: 10.4036248,
  },
  zoom: 16,
  centerLocation: {
    latitude: 59.2641592,
    longitude: 10.4036248,
  },
};
MapWithMarkerZoomAndCenter.parameters = {
  docs: {
    description: {
      story: 'Default map with marker location and center location set',
    },
  },
};

export const OpenStreetMap = Template.bind({});
OpenStreetMap.args = {
  layers: [
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ['a', 'b', 'c'],
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    },
  ],
};
OpenStreetMap.parameters = {
  docs: {
    description: {
      story: 'OpenStreetMap',
    },
  },
};

export const KartverketTerrain = Template.bind({});
KartverketTerrain.args = {
  layers: [
    {
      url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}',
      attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  ],
};
KartverketTerrain.parameters = {
  docs: {
    description: {
      story: 'Kartverket terrain map',
    },
  },
};

export const KartverketSea = Template.bind({});
KartverketSea.args = {
  layers: [
    {
      url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}',
      attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
    },
  ],
};
KartverketSea.parameters = {
  docs: {
    description: {
      story: 'Kartverket sea map',
    },
  },
};

export const GoogleMaps = Template.bind({});
GoogleMaps.args = {
  layers: [
    {
      url: 'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '\xA9 Google Maps',
    },
  ],
};
GoogleMaps.parameters = {
  docs: {
    description: {
      story: 'Google Maps',
    },
  },
};
`,d={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},f="";const R={title:"Components/Map",component:N,parameters:{layout:"fullscreen",design:(0,P.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,z.jsx)(p.Y,{description:"Map component"})}}},args:{}};var H=function(ue){var K=(0,y.useState)(ue.markerLocation),X=ne(K,2),le=X[0],de=X[1],ve=function(be){de(be),_e.log("Map clicked at ["+be.latitude+","+be.longitude+"]")};return(0,z.jsx)(N,Object.assign({},ue,{markerLocation:le,onClick:ve}))};H.displayName="Template";var Z=H.bind({});Z.args={},Z.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var G=H.bind({});G.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},G.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var $=H.bind({});$.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},$.parameters={docs:{description:{story:"OpenStreetMap"}}};var se=H.bind({});se.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},se.parameters={docs:{description:{story:"Kartverket terrain map"}}};var Y=H.bind({});Y.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},Y.parameters={docs:{description:{story:"Kartverket sea map"}}};var pe=H.bind({});pe.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},pe.parameters={docs:{description:{story:"Google Maps"}}},Z.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},Z.parameters),G.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},G.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},$.parameters),se.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},se.parameters),Y.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},Y.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => {
  const [markerLocation, setMarkerLocation] = useState<Location | undefined>(
    args.markerLocation,
  );

  const mapClicked = (location: Location) => {
    setMarkerLocation(location);
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerLocation={markerLocation}
      onClick={mapClicked}
    />
  );
}`}},pe.parameters);var he=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Primary:()=>ae,Success:()=>N,__namedExportsOrder:()=>ye,default:()=>oe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_;(function(me){me.Primary="primary",me.Success="success"})(_||(_={}));var V=(0,n.createContext)({color:_.Primary}),U=function(){var ie=(0,n.useContext)(V);if(ie===void 0)throw new Error("usePageContext must be used within a PageContext");return ie},j=e("./node_modules/classnames/index.js"),w=e.n(j),L=e("./src/components/Page/PageContent.module.css"),C=e.n(L),A=e("./node_modules/react/jsx-runtime.js"),y=function(ie){var _e=ie.children;return(0,A.jsx)("div",{className:w()(C()["page-content"]),children:_e})};y.displayName="PageContent";try{y.displayName="PageContent",y.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:y.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(me){}var P=e("./src/components/Page/PageHeader.module.css"),p=e.n(P),S=e("./src/components/Page/PageIcon.module.css"),E=e.n(S),u=function(ie){var _e=ie.icon,ne={className:w()(E()["page-icon__element"])};return(0,A.jsx)("div",{className:E()["page-icon"],children:(0,n.cloneElement)(_e,Object.assign({},ne))})};u.displayName="PageIcon";try{u.displayName="PageIcon",u.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:u.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(me){}var i=function(ie){var _e=ie.children,ne=ie.icon,q=U(),b=q.color;return(0,A.jsxs)("header",{className:w()(p()["page-header"],p()["page-header--"+b]),"data-testid":"page-header",children:[ne&&(0,A.jsx)(u,{icon:ne}),(0,A.jsx)("span",{children:_e})]})};i.displayName="PageHeader";try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:i.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(me){}var c=e("./src/components/Page/Page.module.css"),O=e.n(c),h=function(ie){var _e=ie.children,ne=ie.color,q=ne===void 0?_.Primary:ne;return(0,A.jsx)("div",{className:O().page,children:(0,A.jsx)(V.Provider,{value:{color:q},children:_e})})};h.displayName="Page";try{h.displayName="Page",h.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:h.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(me){}var D,x;function g(){return g=Object.assign?Object.assign.bind():function(me){for(var ie=1;ie<arguments.length;ie++){var _e=arguments[ie];for(var ne in _e)Object.prototype.hasOwnProperty.call(_e,ne)&&(me[ne]=_e[ne])}return me},g.apply(this,arguments)}var M=function(ie){return n.createElement("svg",g({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},ie),D||(D=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),x||(x=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},B=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { PageColor } from './Context';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { Page } from './Page';
import { ReactComponent as ClientBold } from './ClientBold.svg';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Page\`,
  component: Page,
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
    //TODO: Add default args
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: PageColor.Primary,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Success = Template.bind({});
Success.args = {
  color: PageColor.Success,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,I={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},z="";const oe={title:"Components/Page",component:h,parameters:{design:(0,l.vc)([{type:"figma",url:z},{type:"link",url:z}]),docs:{page:function(){return(0,A.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Q=function(ie){return(0,A.jsxs)(h,{color:ie.color,children:[(0,A.jsx)(i,{icon:(0,A.jsx)(M,{}),children:"PageHeader"}),(0,A.jsx)(y,{children:"PageContent"})]})};Q.displayName="Template";var ae=Q.bind({});ae.args={color:_.Primary},ae.parameters={docs:{description:{story:""}}};var N=Q.bind({});N.args={color:_.Success},N.parameters={docs:{description:{story:""}}},ae.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},ae.parameters),N.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},N.parameters);var ye=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>d,__namedExportsOrder:()=>f,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),U=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e.n(j),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),C=e.n(L),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(A),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),p=e.n(P),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(S),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e.n(c),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),D=e.n(h),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(x),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),B=e.n(M),I=e("./node_modules/react/index.js"),z=e("./node_modules/storybook-addon-designs/esm/index.js"),oe=e("./.storybook/StoryPage.tsx"),Q=e("./src/components/Pagination/Pagination.tsx"),ae=e("./node_modules/react/jsx-runtime.js");function N(R,H){return ne(R)||_e(R,H)||me(R,H)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(R,H){if(!!R){if(typeof R=="string")return ie(R,H);var Z=Object.prototype.toString.call(R).slice(8,-1);if(Z==="Object"&&R.constructor&&(Z=R.constructor.name),Z==="Map"||Z==="Set")return Array.from(R);if(Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z))return ie(R,H)}}function ie(R,H){(H==null||H>R.length)&&(H=R.length);for(var Z=0,G=new Array(H);Z<H;Z++)G[Z]=R[Z];return G}function _e(R,H){var Z=R==null?null:typeof Symbol!="undefined"&&R[Symbol.iterator]||R["@@iterator"];if(Z!=null){var G=[],$=!0,se=!1,Y,pe;try{for(Z=Z.call(R);!($=(Y=Z.next()).done)&&(G.push(Y.value),!(H&&G.length===H));$=!0);}catch(he){se=!0,pe=he}finally{try{!$&&Z.return!=null&&Z.return()}finally{if(se)throw pe}}return G}}function ne(R){if(Array.isArray(R))return R}var q=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Pagination } from './Pagination';

const figmaLink = ''; // TODO: Add figma link
const descriptionText = {
  rowsPerPage: 'Rader per side',
  of: 'av',
  navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
  previousPage: 'Forrige side i tabell',
  nextPage: 'Neste side i tabell',
  navigateLastPage: 'Naviger til siste side i tabell',
};

export default {
  title: \`Components/Pagination\`,
  component: Pagination,
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
    //TODO: Add default args
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Pagination
      {...args}
      rowsPerPage={rowsPerPage}
      currentPage={page}
      setCurrentPage={setPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      descriptionTexts={descriptionText}
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  numberOfRows: 200,
  rowsPerPageOptions: [5, 10, 15, 20],
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,b={Example:{startLoc:{col:52,line:46},endLoc:{col:1,line:67},startBody:{col:52,line:46},endBody:{col:1,line:67}}},k="",v={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const T={title:"Components/Pagination",component:Q.t,parameters:{design:(0,z.vc)([{type:"figma",url:k},{type:"link",url:k}]),docs:{page:function(){return(0,ae.jsx)(oe.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var m=function(H){var Z=(0,I.useState)(5),G=N(Z,2),$=G[0],se=G[1],Y=(0,I.useState)(0),pe=N(Y,2),he=pe[0],re=pe[1],ue=function(X){se(parseInt(X.target.value,10)),re(0)};return(0,ae.jsx)(Q.t,Object.assign({},H,{rowsPerPage:$,currentPage:he,setCurrentPage:re,onRowsPerPageChange:ue,descriptionTexts:v}))};m.displayName="Template";var d=m.bind({});d.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},d.parameters={docs:{description:{story:""}}},d.parameters=Object.assign({storySource:{source:`(args) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Pagination
      {...args}
      rowsPerPage={rowsPerPage}
      currentPage={page}
      setCurrentPage={setPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      descriptionTexts={descriptionText}
    />
  );
}`}},d.parameters);var f=["Example"]},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>E,Info:()=>p,Success:()=>P,Warning:()=>S,__namedExportsOrder:()=>u,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/Panel/Panel.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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

export const Error = Template.bind({});
Error.args = {
  variant: PanelVariant.Error,
};
Error.parameters = {
  docs: {
    description: {
      story: 'Error beskrivelse',
    },
  },
};
`,L={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},C="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const A={title:"Components/Panel",component:U.s,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,j.jsx)("div",{children:"Her kommer litt informasjon"})}};var y=function(c){return(0,j.jsx)(U.s,Object.assign({},c))};y.displayName="Template";var P=y.bind({});P.args={variant:U.c.Success},P.parameters={docs:{description:{story:"Success beskrivelse"}}};var p=y.bind({});p.parameters={docs:{description:{story:"Info beskrivelse"}}};var S=y.bind({});S.args={variant:U.c.Warning},S.parameters={docs:{description:{story:"Warning beskrivelse"}}};var E=y.bind({});E.args={variant:U.c.Error},E.parameters={docs:{description:{story:"Error beskrivelse"}}},P.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},P.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},p.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},S.parameters),E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters);var u=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>v,Info:()=>b,Success:()=>q,Warning:()=>k,__namedExportsOrder:()=>T,default:()=>_e});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),S=e("./.storybook/StoryPage.tsx"),E=e("./src/components/Button/index.ts"),u=e("./src/components/Panel/Panel.tsx"),i=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),c=e("./node_modules/classnames/index.js"),O=e.n(c),h=e("./src/components/Panel/PopoverPanel.module.css"),D=e.n(h),x=e("./node_modules/react/jsx-runtime.js"),g=function(d){var f=d.children;return(0,x.jsx)(i.Eh,{className:O()(D()["popover-panel__arrow"]),asChild:!0,children:f})};g.displayName="renderArrow";var M=function(d){var f=d.children,R=d.variant,H=R===void 0?u.c.Warning:R,Z=d.trigger,G=d.side,$=G===void 0?"top":G,se=d.title,Y=d.showIcon,pe=d.forceMobileLayout,he=d.showPointer,re=he===void 0?!0:he,ue=d.onOpenChange,K=d.open,X=K===void 0?!1:K;return(0,x.jsxs)(i.fC,{open:X,onOpenChange:ue,children:[(0,x.jsx)(i.xz,{asChild:!0,role:"button",children:Z}),(0,x.jsx)(i.VY,{side:$,className:D()["popover-panel"],children:(0,x.jsx)(u.s,{title:se,showIcon:Y,forceMobileLayout:pe,showPointer:re,variant:H,renderArrow:g,children:f})})]})};M.displayName="PopoverPanel";const B=null;try{M.displayName="PopoverPanel",M.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:M.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(m){}function I(m,d){return N(m)||ae(m,d)||oe(m,d)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(m,d){if(!!m){if(typeof m=="string")return Q(m,d);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return Q(m,d)}}function Q(m,d){(d==null||d>m.length)&&(d=m.length);for(var f=0,R=new Array(d);f<d;f++)R[f]=m[f];return R}function ae(m,d){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var R=[],H=!0,Z=!1,G,$;try{for(f=f.call(m);!(H=(G=f.next()).done)&&(R.push(G.value),!(d&&R.length===d));H=!0);}catch(se){Z=!0,$=se}finally{try{!H&&f.return!=null&&f.return()}finally{if(Z)throw $}}return R}}function N(m){if(Array.isArray(m))return m}var ye=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useState } from '@storybook/addons';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor, ButtonSize } from '../Button';

import { PanelVariant } from './Panel';
import { PopoverPanel } from './PopoverPanel';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Panel/PopoverPanel\`,
  component: PopoverPanel,
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
    title: 'Tittel',
    variant: PanelVariant.Warning,
    trigger: <button>\xC5pne</button>,
    side: 'top',
  },
} as ComponentMeta<typeof PopoverPanel>;

const Template: ComponentStory<typeof PopoverPanel> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOnOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <PopoverPanel
        variant={args.variant}
        side={args.side}
        title={args.title}
        open={open}
        trigger={
          <Button
            variant={ButtonVariant.Filled}
            color={ButtonColor.Primary}
          >
            \xC5pne
          </Button>
        }
        onOpenChange={setOpen}
        showPointer={args.showPointer}
        showIcon={args.showIcon}
        forceMobileLayout={args.forceMobileLayout}
      >
        <div>Her kommer litt informasjon</div>
        <Button
          variant={ButtonVariant.Filled}
          color={ButtonColor.Primary}
          size={ButtonSize.Small}
          onClick={handleOnOpenChange}
        >
          Lukk
        </Button>
      </PopoverPanel>
    </div>
  );
};
export const Success = Template.bind({});
Success.args = {
  variant: PanelVariant.Success,
  side: 'top',
  showPointer: false,
  showIcon: false,
  forceMobileLayout: false,
  title: 'Tittel',
};
Success.argTypes = {
  trigger: {
    control: false,
  },
};

Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Info = Template.bind({});
Info.args = {
  variant: PanelVariant.Info,
  side: 'top',
  showPointer: false,
  showIcon: false,
  forceMobileLayout: false,
  title: 'Tittel',
};
Info.argTypes = {
  trigger: {
    control: false,
  },
};
Info.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Warning = Template.bind({});
Warning.args = {
  variant: PanelVariant.Warning,
  side: 'top',
  showPointer: false,
  showIcon: false,
  forceMobileLayout: false,
  title: 'Tittel',
};
Warning.argTypes = {
  trigger: {
    control: false,
  },
};
Warning.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  variant: PanelVariant.Error,
  side: 'top',
  showPointer: false,
  showIcon: false,
  forceMobileLayout: false,
  title: 'Tittel',
};
Error.argTypes = {
  trigger: {
    control: false,
  },
};
Error.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,me={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},ie="";const _e={title:"Components/Panel/PopoverPanel",component:M,parameters:{design:(0,P.vc)([{type:"figma",url:ie},{type:"link",url:ie}]),docs:{page:function(){return(0,x.jsx)(S.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:u.c.Warning,trigger:(0,x.jsx)("button",{children:"\xC5pne"}),side:"top"}};var ne=function(d){var f=(0,p.eJ)(!1),R=I(f,2),H=R[0],Z=R[1],G=function(){Z(!H)};return(0,x.jsx)("div",{children:(0,x.jsxs)(M,{variant:d.variant,side:d.side,title:d.title,open:H,trigger:(0,x.jsx)(E.zx,{variant:E.Wu.Filled,color:E.rp.Primary,children:"\xC5pne"}),onOpenChange:Z,showPointer:d.showPointer,showIcon:d.showIcon,forceMobileLayout:d.forceMobileLayout,children:[(0,x.jsx)("div",{children:"Her kommer litt informasjon"}),(0,x.jsx)(E.zx,{variant:E.Wu.Filled,color:E.rp.Primary,size:E.qE.Small,onClick:G,children:"Lukk"})]})})};ne.displayName="Template";var q=ne.bind({});q.args={variant:u.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},q.argTypes={trigger:{control:!1}},q.parameters={docs:{description:{story:""}}};var b=ne.bind({});b.args={variant:u.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},b.argTypes={trigger:{control:!1}},b.parameters={docs:{description:{story:""}}};var k=ne.bind({});k.args={variant:u.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},k.argTypes={trigger:{control:!1}},k.parameters={docs:{description:{story:""}}};var v=ne.bind({});v.args={variant:u.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},v.argTypes={trigger:{control:!1}},v.parameters={docs:{description:{story:""}}},q.parameters=Object.assign({storySource:{source:`(args) => {
  const [open, setOpen] = useState(false);

  const handleOnOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <PopoverPanel
        variant={args.variant}
        side={args.side}
        title={args.title}
        open={open}
        trigger={
          <Button
            variant={ButtonVariant.Filled}
            color={ButtonColor.Primary}
          >
            \xC5pne
          </Button>
        }
        onOpenChange={setOpen}
        showPointer={args.showPointer}
        showIcon={args.showIcon}
        forceMobileLayout={args.forceMobileLayout}
      >
        <div>Her kommer litt informasjon</div>
        <Button
          variant={ButtonVariant.Filled}
          color={ButtonColor.Primary}
          size={ButtonSize.Small}
          onClick={handleOnOpenChange}
        >
          Lukk
        </Button>
      </PopoverPanel>
    </div>
  );
}`}},q.parameters),b.parameters=Object.assign({storySource:{source:`(args) => {
  const [open, setOpen] = useState(false);

  const handleOnOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <PopoverPanel
        variant={args.variant}
        side={args.side}
        title={args.title}
        open={open}
        trigger={
          <Button
            variant={ButtonVariant.Filled}
            color={ButtonColor.Primary}
          >
            \xC5pne
          </Button>
        }
        onOpenChange={setOpen}
        showPointer={args.showPointer}
        showIcon={args.showIcon}
        forceMobileLayout={args.forceMobileLayout}
      >
        <div>Her kommer litt informasjon</div>
        <Button
          variant={ButtonVariant.Filled}
          color={ButtonColor.Primary}
          size={ButtonSize.Small}
          onClick={handleOnOpenChange}
        >
          Lukk
        </Button>
      </PopoverPanel>
    </div>
  );
}`}},b.parameters),k.parameters=Object.assign({storySource:{source:`(args) => {
  const [open, setOpen] = useState(false);

  const handleOnOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <PopoverPanel
        variant={args.variant}
        side={args.side}
        title={args.title}
        open={open}
        trigger={
          <Button
            variant={ButtonVariant.Filled}
            color={ButtonColor.Primary}
          >
            \xC5pne
          </Button>
        }
        onOpenChange={setOpen}
        showPointer={args.showPointer}
        showIcon={args.showIcon}
        forceMobileLayout={args.forceMobileLayout}
      >
        <div>Her kommer litt informasjon</div>
        <Button
          variant={ButtonVariant.Filled}
          color={ButtonColor.Primary}
          size={ButtonSize.Small}
          onClick={handleOnOpenChange}
        >
          Lukk
        </Button>
      </PopoverPanel>
    </div>
  );
}`}},k.parameters),v.parameters=Object.assign({storySource:{source:`(args) => {
  const [open, setOpen] = useState(false);

  const handleOnOpenChange = () => {
    setOpen(!open);
  };

  return (
    <div>
      <PopoverPanel
        variant={args.variant}
        side={args.side}
        title={args.title}
        open={open}
        trigger={
          <Button
            variant={ButtonVariant.Filled}
            color={ButtonColor.Primary}
          >
            \xC5pne
          </Button>
        }
        onOpenChange={setOpen}
        showPointer={args.showPointer}
        showIcon={args.showIcon}
        forceMobileLayout={args.forceMobileLayout}
      >
        <div>Her kommer litt informasjon</div>
        <Button
          variant={ButtonVariant.Filled}
          color={ButtonColor.Primary}
          size={ButtonSize.Small}
          onClick={handleOnOpenChange}
        >
          Lukk
        </Button>
      </PopoverPanel>
    </div>
  );
}`}},v.parameters);var T=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>p,Compact:()=>E,Default:()=>P,Disabled:()=>u,Error:()=>S,LongText:()=>c,WithDescription:()=>i,WithHiddenLabel:()=>O,__namedExportsOrder:()=>h,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/RadioButton/RadioButton.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { RadioButton, RadioButtonSize } from './RadioButton';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0';

export default {
  title: \`Components/RadioButton\`,
  component: RadioButton,
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
          description={\`This is a radio button. Use it together with other radio buttons with the same name.
                        The component relies on being controlled, which means that it expects the consumer to set its \\\`checked\\\` state.
                        The \\\`onChange\\\` property must be set to trigger this change.
                        We recommend using our \\\`RadioGroup\\\` component if you need radio buttons,
                        but this standalone component might be useful if \\\`RadioGroup\\\` doesn't match the layout criteria of your use case.
                        If that is the case, you may also consider contributing to the design system \u{1F642}\`}
        />
      ),
    },
  },
  args: {
    label: 'Label',
    name: 'label',
    value: 'label',
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Default radio button.',
    },
  },
};

export const Checked = Template.bind({});
Checked.args = { checked: true };
Checked.parameters = {
  docs: {
    description: {
      story: 'Checked radio button.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: true };
Error.parameters = {
  docs: {
    description: {
      story:
        'This radio button is supposed to be used when there is a user input error related to it.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = { size: RadioButtonSize.Xsmall };
Compact.parameters = {
  docs: {
    description: {
      story: 'This is the compact radio button.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled.',
    },
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = { description: 'Lorem ipsum dolor sit amet.' };
WithDescription.parameters = {
  docs: {
    description: {
      story: 'This is a radio button with description.',
    },
  },
};

export const LongText = Template.bind({});
LongText.args = {
  label:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.',
  description:
    'Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus.',
};
LongText.parameters = {
  docs: {
    description: {
      story: 'This is how it looks with long texts.',
    },
  },
};

export const WithHiddenLabel = Template.bind({});
WithHiddenLabel.args = { hideLabel: true };
WithHiddenLabel.parameters = {
  docs: {
    description: {
      story:
        "This is a radio button with the \`hiddenLabel\` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the \`label\` property is set in this case, it will be made available for accessibility tools through the HTML component's \`aria-label\` attribute.",
    },
  },
};
`,L={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},C="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const A={title:"Components/RadioButton",component:U.E,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var y=function(x){return(0,j.jsx)(U.E,Object.assign({},x))};y.displayName="Template";var P=y.bind({});P.args={},P.parameters={docs:{description:{story:"Default radio button."}}};var p=y.bind({});p.args={checked:!0},p.parameters={docs:{description:{story:"Checked radio button."}}};var S=y.bind({});S.args={error:!0},S.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var E=y.bind({});E.args={size:U.j.Xsmall},E.parameters={docs:{description:{story:"This is the compact radio button."}}};var u=y.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var i=y.bind({});i.args={description:"Lorem ipsum dolor sit amet."},i.parameters={docs:{description:{story:"This is a radio button with description."}}};var c=y.bind({});c.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},c.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var O=y.bind({});O.args={hideLabel:!0},O.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},P.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},p.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},S.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},u.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},c.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},O.parameters);var h=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>k,Disabled:()=>T,Error:()=>v,Horizontal:()=>b,Vertical:()=>q,__namedExportsOrder:()=>m,default:()=>_e});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),u=e("./src/components/RadioButton/index.ts"),i=e("./src/components/FieldSet/index.ts"),c=e("./src/hooks/index.ts"),O=e("./src/utils/arrayUtils.ts"),h=e("./src/components/RadioGroup/RadioGroup.module.css"),D=e.n(h),x=e("./node_modules/react/jsx-runtime.js");function g(d,f){return oe(d)||z(d,f)||B(d,f)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(d,f){if(!!d){if(typeof d=="string")return I(d,f);var R=Object.prototype.toString.call(d).slice(8,-1);if(R==="Object"&&d.constructor&&(R=d.constructor.name),R==="Map"||R==="Set")return Array.from(d);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return I(d,f)}}function I(d,f){(f==null||f>d.length)&&(f=d.length);for(var R=0,H=new Array(f);R<f;R++)H[R]=d[R];return H}function z(d,f){var R=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(R!=null){var H=[],Z=!0,G=!1,$,se;try{for(R=R.call(d);!(Z=($=R.next()).done)&&(H.push($.value),!(f&&H.length===f));Z=!0);}catch(Y){G=!0,se=Y}finally{try{!Z&&R.return!=null&&R.return()}finally{if(G)throw se}}return H}}function oe(d){if(Array.isArray(d))return d}var Q;(function(d){d.Xsmall="xsmall",d.Small="small"})(Q||(Q={}));var ae;(function(d){d.Vertical="vertical",d.Horizontal="horizontal"})(ae||(ae={}));var N=function(f){var R=f.description,H=f.disabled,Z=f.error,G=f.items,$=f.legend,se=f.name,Y=f.onChange,pe=f.size,he=pe===void 0?Q.Small:pe,re=f.value,ue=f.variant,K=ue===void 0?ae.Vertical:ue;if(!(0,O.zb)(G.map(function(Oe){return Oe.value})))throw Error("Each value in the radio group must be unique.");var X=(0,n.useState)(re),le=g(X,2),de=le[0],ve=le[1];(0,n.useEffect)(function(){ve(re)},[re]);var je=(0,c.D9)(de);(0,c.PQ)(function(){Y&&!H&&je!==de&&Y(de)},[de,H,Y]);var be=function(De){return function(Me){return Me.target.checked&&ve(De)}},Ee=he===Q.Xsmall?[i.w.Xsmall,u.j.Xsmall]:[i.w.Small,u.j.Small],Pe=g(Ee,2),ge=Pe[0],fe=Pe[1];return(0,x.jsx)(i.C,{description:R,disabled:H,error:Z,legend:$,size:ge,children:(0,x.jsx)("div",{className:[D()["radio-group"],D()["radio-group--"+K],D()["radio-group--"+he]].join(" "),role:"radiogroup",children:G.map(function(Oe){return(0,n.createElement)(u.E,Object.assign({},Oe,{checked:Oe.value===de,disabled:H||Oe.disabled,error:!!Z,key:Oe.value,name:se,onChange:be(Oe.value),size:fe}))})})})};N.displayName="RadioGroup";try{N.displayName="RadioGroup",N.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:N.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(d){}var ye=`import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { RadioGroup, RadioGroupSize, RadioGroupVariant } from './RadioGroup';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0';

export default {
  title: \`Components/RadioGroup\`,
  component: RadioGroup,
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
          description={\`Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.
                        It behaves similarly to channel presets on radios, hence its name.
                        Its \\\`onChange\\\` property can be set to a function that will be called with the checked value each time it changes.\`}
        />
      ),
    },
  },
  args: {
    legend: 'Hvilken iskremsmak er best?',
    description: 'Velg din favorittsmak blant alternativene.',
    items: [
      { label: 'Vanilje', value: 'vanilje' },
      { label: 'Jordb\xE6r', value: 'jordb\xE6r' },
      { label: 'Sjokolade', value: 'sjokolade' },
      { label: 'Jeg spiser ikke iskrem', value: 'spiser-ikke-is' },
    ],
    name: 'favorittiskrem',
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Vertical = Template.bind({});
Vertical.args = {
  variant: RadioGroupVariant.Vertical,
};
Vertical.parameters = {
  docs: {
    description: {
      story: 'This is the default setting.',
    },
  },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  variant: RadioGroupVariant.Horizontal,
};
Horizontal.parameters = {
  docs: {
    description: {
      story: 'Use this if there is sufficient horizontal space.',
    },
  },
};

export const Compact = Template.bind({});
Compact.args = {
  size: RadioGroupSize.Xsmall,
};
Compact.parameters = {
  docs: {
    description: {
      story:
        'Use this if there are space limitations or if the content is less important.',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: 'Du m\xE5 velge et av alternativene over.',
};
Error.parameters = {
  docs: {
    description: {
      story:
        'The radio group gets this state if the \`error\` property is set. Use it to tell the user that there is an input error related to this group.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    description: {
      story:
        'Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed.',
    },
  },
};
`,me={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},ie="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const _e={title:"Components/RadioGroup",component:N,parameters:{design:(0,l.vc)([{type:"figma",url:ie},{type:"link",url:ie}]),docs:{page:function(){return(0,x.jsx)(a.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var ne=function(f){return(0,x.jsx)(N,Object.assign({},f))};ne.displayName="Template";var q=ne.bind({});q.args={variant:ae.Vertical},q.parameters={docs:{description:{story:"This is the default setting."}}};var b=ne.bind({});b.args={variant:ae.Horizontal},b.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var k=ne.bind({});k.args={size:Q.Xsmall},k.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var v=ne.bind({});v.args={error:"Du m\xE5 velge et av alternativene over."},v.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var T=ne.bind({});T.args={disabled:!0},T.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},q.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},b.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},k.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},v.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},T.parameters);var m=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ne,__namedExportsOrder:()=>q,default:()=>ie});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),S=e("./.storybook/StoryPage.tsx"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e("./node_modules/classnames/index.js"),c=e.n(i),O=e("./src/components/_InputWrapper/index.ts"),h=e("./node_modules/react/jsx-runtime.js"),D=["id","onChange","disabled","label"];function x(b,k){if(b==null)return{};var v=g(b,k),T,m;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(b);for(m=0;m<d.length;m++)T=d[m],!(k.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,T)||(v[T]=b[T]))}return v}function g(b,k){if(b==null)return{};var v={},T=Object.keys(b),m,d;for(d=0;d<T.length;d++)m=T[d],!(k.indexOf(m)>=0)&&(v[m]=b[m]);return v}var M=function(k){var v=k.id,T=k.onChange,m=k.disabled,d=m===void 0?!1:m,f=k.label,R=x(k,D);return(0,h.jsx)(O.SP,{disabled:d,isSearch:!0,label:f,inputRenderer:function(Z){var G=Z.className,$=Z.variant,se={id:v,disabled:d,className:c()(G)};return(0,h.jsx)("input",Object.assign({},se,R,{"data-testid":v+"-"+$,onChange:T}))}})};M.displayName="SearchField";try{M.displayName="SearchField",M.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:M.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(b){}function B(b,k){return ae(b)||Q(b,k)||z(b,k)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(b,k){if(!!b){if(typeof b=="string")return oe(b,k);var v=Object.prototype.toString.call(b).slice(8,-1);if(v==="Object"&&b.constructor&&(v=b.constructor.name),v==="Map"||v==="Set")return Array.from(b);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return oe(b,k)}}function oe(b,k){(k==null||k>b.length)&&(k=b.length);for(var v=0,T=new Array(k);v<k;v++)T[v]=b[v];return T}function Q(b,k){var v=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(v!=null){var T=[],m=!0,d=!1,f,R;try{for(v=v.call(b);!(m=(f=v.next()).done)&&(T.push(f.value),!(k&&T.length===k));m=!0);}catch(H){d=!0,R=H}finally{try{!m&&v.return!=null&&v.return()}finally{if(d)throw R}}return T}}function ae(b){if(Array.isArray(b))return b}var N=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useArgs } from '@storybook/client-api';

import { StoryPage } from '@sb/StoryPage';

import { SearchField } from './SearchField';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723';

export default {
  title: \`Components/SearchField\`,
  component: SearchField,
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
    id: 'searchfield-story',
    disabled: false,
    label: 'Label',
  },
  argTypes: {
    onChange: { action: 'Value changed, perform search' },
  },
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = (args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
};

export const Example = Template.bind({});
Example.args = {};

Example.parameters = {
  docs: {
    description: {
      story: 'Search field.',
    },
  },
};
`,ye={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},me="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const ie={title:"Components/SearchField",component:M,parameters:{design:(0,P.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,h.jsx)(S.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var _e=function(k){var v=(0,p.D8)(),T=B(v,1),m=T[0].disabled;return(0,h.jsx)(M,Object.assign({disabled:m},k))};_e.displayName="Template";var ne=_e.bind({});ne.args={},ne.parameters={docs:{description:{story:"Search field."}}},ne.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},ne.parameters);var q=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Disabled:()=>i,Error:()=>c,Multiple:()=>u,__namedExportsOrder:()=>O,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(a),V=e("./node_modules/react/index.js"),U=e("./node_modules/storybook-addon-designs/esm/index.js"),j=e("./.storybook/StoryPage.tsx"),w=e("./src/components/Select/Select.tsx"),L=e("./node_modules/react/jsx-runtime.js"),C=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { MultiSelectOption, SingleSelectOption } from '../Select';
import { Select } from '../Select';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627';

const defaultOptions: SingleSelectOption[] = [
  { label: 'Agder', value: 'Agd' },
  { label: 'Innlandet', value: 'Inn' },
  { label: 'M\xF8re og Romsdal', value: 'MoR' },
  { label: 'Nordland', value: 'Nor' },
  { label: 'Oslo', value: 'Osl' },
  { label: 'Rogaland', value: 'Rog' },
  { label: 'Vestfold og Telemark', value: 'VoT' },
  { label: 'Troms og Finnmark', value: 'ToF' },
  { label: 'Tr\xF8ndelag', value: 'Tr\xF8' },
  { label: 'Vestland', value: 'Ves' },
  { label: 'Viken', value: 'Vik' },
];

const multipleSelectOptions: MultiSelectOption[] = defaultOptions.map(
  (option) => ({ ...option, deleteButtonLabel: 'Slett ' + option.label }),
);

export default {
  title: \`Components/Select/Multiple\`,
  component: Select,
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
          description={\`This is a select box with the possibility to choose multiple values, like \\\`<select multiple>\\\` in html. It has an \\\`onChange\\\` property hat accepts a function which will receive a list of the selected values each time it is changed.'\`}
        />
      ),
    },
  },
  args: {
    deleteButtonLabel: 'Fjern alle',
    label: 'Velg ett eller flere fylker',
    multiple: true,
    options: multipleSelectOptions,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
);

export const Multiple = Template.bind({});
Multiple.args = {};
Multiple.parameters = {
  docs: {
    description: {
      story: 'This is the default multiple select box.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: true };
Error.parameters = {
  docs: {
    description: {
      story:
        'This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};
`,A={Multiple:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Disabled:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Error:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",P=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],p=P.map(function(h){return Object.assign({},h,{deleteButtonLabel:"Slett "+h.label})});const S={title:"Components/Select/Multiple",component:w.P,parameters:{design:(0,U.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,L.jsx)(j.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'"})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:p}};var E=function(D){return(0,L.jsx)("div",{style:{width:"440px"},children:(0,L.jsx)(w.P,Object.assign({},D))})};E.displayName="Template";var u=E.bind({});u.args={},u.parameters={docs:{description:{story:"This is the default multiple select box."}}};var i=E.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var c=E.bind({});c.args={error:!0},c.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},u.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters);var O=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>P,Disabled:()=>p,Error:()=>S,__namedExportsOrder:()=>E,default:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),U=e("./src/components/Select/Select.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Select } from '../Select';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627';

export default {
  title: \`Components/Select/Single\`,
  component: Select,
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
          description={\`This is a select box. It only allows one option to be selected, like \\\`<select>\\\` in html. It has an \\\`onChange\\\` property hat accepts a function which will receive the selected value each time it is changed.\`}
        />
      ),
    },
  },
  args: {
    label: 'Velg et fylke',
    multiple: false,
    options: [
      { label: 'Agder', value: 'Agd' },
      { label: 'Innlandet', value: 'Inn' },
      { label: 'M\xF8re og Romsdal', value: 'MoR' },
      { label: 'Nordland', value: 'Nor' },
      { label: 'Oslo', value: 'Osl' },
      { label: 'Rogaland', value: 'Rog' },
      { label: 'Vestfold og Telemark', value: 'VoT' },
      { label: 'Troms og Finnmark', value: 'ToF' },
      { label: 'Tr\xF8ndelag', value: 'Tr\xF8' },
      { label: 'Vestland', value: 'Ves' },
      { label: 'Viken', value: 'Vik' },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'This is the default select box.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, single select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const Error = Template.bind({});
Error.args = { error: true };
Error.parameters = {
  docs: {
    description: {
      story:
        'This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};
`,L={Default:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Disabled:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Error:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}},C="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const A={title:"Components/Select/Single",component:U.P,parameters:{design:(0,_.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var y=function(i){return(0,j.jsx)("div",{style:{width:"440px"},children:(0,j.jsx)(U.P,Object.assign({},i))})};y.displayName="Template";var P=y.bind({});P.args={},P.parameters={docs:{description:{story:"This is the default select box."}}};var p=y.bind({});p.args={disabled:!0},p.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var S=y.bind({});S.args={error:!0},S.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},P.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},P.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},S.parameters);var E=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{IconFromNavIconLibrary:()=>u,ImportedCustomIcon:()=>i,__namedExportsOrder:()=>c,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./node_modules/@navikt/ds-icons/esm/Success.js"),_=e("./.storybook/StoryPage.tsx"),V=e("./src/components/SvgIcon/index.ts"),U,j,w;function L(){return L=Object.assign?Object.assign.bind():function(O){for(var h=1;h<arguments.length;h++){var D=arguments[h];for(var x in D)Object.prototype.hasOwnProperty.call(D,x)&&(O[x]=D[x])}return O},L.apply(this,arguments)}var C=function(h){return n.createElement("svg",L({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},h),U||(U=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),w||(w=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},A=e("./node_modules/react/jsx-runtime.js"),y=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { Success as SuccessIconNAV } from '@navikt/ds-icons';

import { StoryPage } from '@sb/StoryPage';

import { SvgIcon } from '..';

import { ReactComponent as SuccessIcon } from './success.svg';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/SvgIcon\`,
  component: SvgIcon,
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
  args: {},
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => (
  <SvgIcon {...args} />
);

export const IconFromNavIconLibrary = Template.bind({});
IconFromNavIconLibrary.args = {
  svgIconComponent: <SuccessIconNAV />,
};
IconFromNavIconLibrary.parameters = {
  docs: {
    description: {
      story: '\`<SvgIcon svgIconComponent: <SuccessIconNAV />\`',
    },
  },
};

export const ImportedCustomIcon = Template.bind({});
ImportedCustomIcon.args = {
  svgIconComponent: (
    <SuccessIcon
      height='2rem'
      width='2rem'
    />
  ),
};
ImportedCustomIcon.parameters = {
  docs: {
    description: {
      story:
        'Import a single SVG file as a react component and pass the component to the \`svgIconComponent\` prop.' +
        "\`import { ReactComponent as SuccessIcon } from './success.svg';\`  " +
        "\`<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />\`",
    },
  },
};
`,P={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},p="";const S={title:"Components/SvgIcon",component:V.l,parameters:{design:(0,l.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,A.jsx)(_.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var E=function(h){return(0,A.jsx)(V.l,Object.assign({},h))};E.displayName="Template";var u=E.bind({});u.args={svgIconComponent:(0,A.jsx)(a.Z,{})},u.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var i=E.bind({});i.args={svgIconComponent:(0,A.jsx)(C,{height:"2rem",width:"2rem"})},i.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},i.parameters);var c=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{BasicTable:()=>Le,SelectRows:()=>Ye,__namedExportsOrder:()=>co,default:()=>xe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),p=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),E=e("./node_modules/classnames/index.js"),u=e.n(E),i=e("./.storybook/StoryPage.tsx"),c=e("./src/components/Pagination/Pagination.tsx"),O=e("./src/components/RadioButton/index.ts"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),x=e("./src/components/Table/Table.module.css"),g=e.n(x),M;(function(W){W.Header="header",W.Body="body",W.Footer="footer"})(M||(M={}));var B=(0,p.createContext)(void 0),I=function(){var F=(0,p.useContext)(B);if(F===void 0)throw new Error("useTableContext must be used within a TableContext");return F},z=(0,p.createContext)(void 0),oe=function(){var F=useContext(z);if(F===void 0)throw new Error("useTableContext must be used within a TableContext");return F},Q=(0,p.createContext)({variantStandard:M.Body}),ae=function(){var F=(0,p.useContext)(Q);if(F===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return F},N=e("./node_modules/react/jsx-runtime.js"),ye=["children","selectRows","onChange","selectedValue","className"];function me(W,F){if(W==null)return{};var te=ie(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function ie(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var _e=function(F){var te=F.children,ee=F.selectRows,J=ee===void 0?!1:ee,ce=F.onChange,We=F.selectedValue,Ce=F.className,Ie=me(F,ye);return(0,N.jsx)("table",Object.assign({},Ie,{className:u()(g().Table,Ce),children:(0,N.jsx)(B.Provider,{value:{selectRows:J,onChange:ce,selectedValue:We},children:te})}))};_e.displayName="Table";const ne=null;try{_e.displayName="Table",_e.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:_e.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(W){}var q=e("./src/components/Table/TableHeader.module.css"),b=e.n(q),k=["children","className"];function v(W,F){if(W==null)return{};var te=T(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function T(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var m=function(F){var te=F.children,ee=F.className,J=v(F,k),ce=M.Header;return(0,N.jsx)(Q.Provider,{value:{variantStandard:ce},children:(0,N.jsx)("thead",Object.assign({},J,{className:u()(b()["table-header"],ee),children:te}))})};m.displayName="TableHeader";try{m.displayName="TableHeader",m.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:m.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(W){}var d=e("./src/components/Table/TableCell.module.css"),f=e.n(d),R;function H(){return H=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var te=arguments[F];for(var ee in te)Object.prototype.hasOwnProperty.call(te,ee)&&(W[ee]=te[ee])}return W},H.apply(this,arguments)}var Z=function(F){return p.createElement("svg",H({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},F),R||(R=p.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},G=["children","variant","onChange","sortDirecton","sortKey","className","radiobutton"];function $(W,F){if(W==null)return{};var te=se(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function se(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var Y;(function(W){W.Descending="desc",W.Ascending="asc",W.NotSortable="notSortable",W.NotActive="notActive"})(Y||(Y={}));var pe=function(F){var te,ee=F.children,J=F.variant,ce=F.onChange,We=F.sortDirecton,Ce=We===void 0?Y.NotSortable:We,Ie=F.sortKey,Ne=F.className,Ze=F.radiobutton,ze=Ze===void 0?!1:Ze,Ke=$(F,G),no=ae(),Xe=no.variantStandard,Qe=function(){ce!=null&&Ie!=null&&Ce!=null&&ce({sortedColumn:Ie,previousSortDirection:Ce})};return(0,N.jsxs)(N.Fragment,{children:[(J==null?Xe===M.Header:J==="header")&&(0,N.jsx)("th",Object.assign({},Ke,{className:ze?u()(f()["header-table-cell-radiobutton"],Ne):u()(f()["header-table-cell"],Ne),children:(0,N.jsxs)("div",{className:Ce!=Y.NotSortable?u()(f()["container-sortable"]):u()(f().container),onClick:function(){return Qe()},onKeyUp:function(oo){(oo.key==="Enter"||oo.key===" ")&&Qe()},role:Ce!=Y.NotSortable?"button":void 0,tabIndex:Ce!=Y.NotSortable?0:void 0,children:[(0,N.jsx)("div",{className:u()(f().input),children:ee}),Ce!=Y.NotSortable&&(0,N.jsx)(Z,{"aria-label":"Sortering","data-testid":"sort-icon",className:u()(f().icon,(te={},te[f()["icon-asc"]]=Ce===Y.Ascending,te[f()["icon-desc"]]=Ce===Y.Descending,te))})]})})),(J==null?Xe===M.Body:J==="body")&&(0,N.jsx)("td",Object.assign({},Ke,{className:ze?u()(f()["body-table-cell-radiobutton"],Ne):u()(f()["body-table-cell"],Ne),children:(0,N.jsx)("div",{className:ze?u()(f()["radio-button"]):u()(f().input),children:ee})})),Xe===M.Footer&&(0,N.jsx)("td",Object.assign({},Ke,{className:u()(Ne),children:(0,N.jsx)("div",{className:u()(f().input),children:ee})}))]})};const he=null;try{pe.displayName="TableCell",pe.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:pe.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(W){}var re=e("./src/components/Table/TableRow.module.css"),ue=e.n(re),K=["children","rowData","selectSort","className"];function X(W,F){if(W==null)return{};var te=le(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function le(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var de=function(F){var te,ee=F.children,J=F.rowData,ce=F.selectSort,We=ce===void 0?"":ce,Ce=F.className,Ie=X(F,K),Ne=ae(),Ze=Ne.variantStandard,ze=I(),Ke=ze.onChange,no=ze.selectedValue,Xe=ze.selectRows,Qe=function(){Ke!=null&&Xe&&Ze===M.Body&&J&&Ke({selectedValue:J})},He=JSON.stringify(J)===JSON.stringify(no);return(0,N.jsx)(z.Provider,{value:{selectSort:We},children:(0,N.jsx)("tr",Object.assign({},Ie,{className:u()(ue().TableRow,(te={},te[ue()["table-row--selected"]]=He,te[ue()["table-row--body"]]=Ze===M.Body&&Xe&&!He,te),Ce),onClick:Qe,children:ee}))})};de.displayName="TableRow";const ve=null;try{de.displayName="TableRow",de.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:de.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(W){}var je=e("./src/components/Table/TableBody.module.css"),be=e.n(je),Ee=["children","className"];function Pe(W,F){if(W==null)return{};var te=ge(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function ge(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var fe=function(F){var te=F.children,ee=F.className,J=Pe(F,Ee),ce=M.Body;return(0,N.jsx)(Q.Provider,{value:{variantStandard:ce},children:(0,N.jsx)("tbody",Object.assign({},J,{className:u()(be().TableBody,ee),children:te}))})};fe.displayName="TableBody";const Oe=null;try{fe.displayName="TableBody",fe.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:fe.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(W){}var De=e("./src/components/Table/Table.stories.module.css"),Me=e.n(De),Be=e("./src/components/Table/TableFooter.module.css"),Je=e.n(Be),$e=["children","className"];function qe(W,F){if(W==null)return{};var te=Ge(W,F),ee,J;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(J=0;J<ce.length;J++)ee=ce[J],!(F.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,ee)||(te[ee]=W[ee]))}return te}function Ge(W,F){if(W==null)return{};var te={},ee=Object.keys(W),J,ce;for(ce=0;ce<ee.length;ce++)J=ee[ce],!(F.indexOf(J)>=0)&&(te[J]=W[J]);return te}var Ue=function(F){var te=F.children,ee=F.className,J=qe(F,$e),ce=M.Footer;return(0,N.jsx)(Q.Provider,{value:{variantStandard:ce},children:(0,N.jsx)("tfoot",Object.assign({},J,{className:u()(Je()["table-footer"],ee),children:te}))})};Ue.displayName="TableFooter";const eo=null;try{Ue.displayName="TableFooter",Ue.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Ue.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(W){}function Fe(W,F){return ro(W)||so(W,F)||lo(W,F)||ao()}function ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(W,F){if(!!W){if(typeof W=="string")return to(W,F);var te=Object.prototype.toString.call(W).slice(8,-1);if(te==="Object"&&W.constructor&&(te=W.constructor.name),te==="Map"||te==="Set")return Array.from(W);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return to(W,F)}}function to(W,F){(F==null||F>W.length)&&(F=W.length);for(var te=0,ee=new Array(F);te<F;te++)ee[te]=W[te];return ee}function so(W,F){var te=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(te!=null){var ee=[],J=!0,ce=!1,We,Ce;try{for(te=te.call(W);!(J=(We=te.next()).done)&&(ee.push(We.value),!(F&&ee.length===F));J=!0);}catch(Ie){ce=!0,Ce=Ie}finally{try{!J&&te.return!=null&&te.return()}finally{if(ce)throw Ce}}return ee}}function ro(W){if(Array.isArray(W))return W}var io=`import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';

import { Pagination } from '../Pagination';
import { RadioButton } from '../RadioButton';
import type { DescriptionText } from '../Pagination/Pagination';

import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { SortDirection, TableCell } from './TableCell';
import type { RowData } from './TableRow';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import type { ChangeProps, SortProps } from './Context';
import classes from './Table.stories.module.css';
import { TableFooter } from './TableFooter';
const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Table\`,
  component: Table,
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
    //TODO: Add default args
  },
} as ComponentMeta<typeof Table>;

function createData(
  applicationNr: string,
  product: string,
  status: string,
  imageSrc: string,
  imageAlt: string,
) {
  return {
    applicationNr,
    product,
    status,
    imageSrc,
    imageAlt,
  };
}

const rows = [
  createData(
    '20220873',
    'Embalasje for snacksprodukter',
    'Under behandling',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png',
    'chipspose',
  ),
  createData(
    '20220590',
    'Apparat for rengj\xF8ring av sveises\xF8m',
    'Registert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg',
    'apparat for rengj\xF8ring av sveises\xF8m',
  ),
  createData(
    '20220827',
    'Logo',
    'Besluttet gjeldene',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG',
    'logo',
  ),
  createData(
    '20220582',
    'Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe',
    'Registrert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg',
    'bilde av handikaprampe',
  ),
  createData(
    '20220408',
    'Bil',
    'Registert',
    'https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg',
    'Bil',
  ),
  createData(
    '200208507',
    'Vippesykkel',
    'Besluttet gjeldende',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg',
    'vippesykkel',
  ),
  createData(
    '200812696',
    'SHELL',
    'Besluttet gjeldende',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg',
    'shell',
  ),
  createData(
    '201106591',
    'DNB',
    'Registrert',
    'https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg',
    'dnb',
  ),
];

const Template: ComponentStory<typeof Table> = (args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const description: DescriptionText = {
    rowsPerPage: 'Rader per side',
    of: 'av',
    navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
    previousPage: 'Forrige side i tabell',
    nextPage: 'Neste side i tabell',
    navigateLastPage: 'Naviger til siste side i tabell',
  };

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({
    sortedColumn,
    previousSortDirection,
  }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeInCurrentPage = (newPage: number) => {
    setPage(newPage);
  };
  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    const value: RowData = { applicationNr: event.target.value };
    setSelected(value);
  };
  const checkSelectedValue = (row: RowData) => {
    const value: RowData = { applicationNr: row.applicationNr };
    if (JSON.stringify(selected) == JSON.stringify(value)) {
      return true;
    }
    return false;
  };

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={handleSortChange}
            sortKey={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.sortedColumn === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            sortKey={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.sortedColumn === 'Produkt'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow
              key={row.applicationNr}
              rowData={{ applicationNr: row.applicationNr }}
            >
              {args.selectRows && (
                <TableCell radiobutton={true}>
                  <RadioButton
                    name={row.applicationNr}
                    onChange={(event) => handleRadioButton(event)}
                    value={row.applicationNr}
                    checked={checkSelectedValue(row)}
                    label={row.applicationNr}
                    hideLabel={true}
                  ></RadioButton>
                </TableCell>
              )}
              <TableCell>{row.applicationNr}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <img
                  className={cn(classes['checkmark'])}
                  src={row.imageSrc}
                  alt={row.imageAlt}
                ></img>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              descriptionTexts={description}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export const BasicTable = Template.bind({});
BasicTable.args = {
  selectRows: false,
};
BasicTable.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};

export const SelectRows = Template.bind({});
SelectRows.args = {
  selectRows: true,
};
SelectRows.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,uo={BasicTable:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}},SelectRows:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}}},Se="";const xe={title:"Components/Table",component:_e,parameters:{design:(0,S.vc)([{type:"figma",url:Se},{type:"link",url:Se}]),docs:{page:function(){return(0,N.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function Te(W,F,te,ee,J){return{applicationNr:W,product:F,status:te,imageSrc:ee,imageAlt:J}}var Ve=[Te("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),Te("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),Te("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),Te("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),Te("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),Te("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),Te("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),Te("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],Ae=function(F){var te=(0,p.useState)({}),ee=Fe(te,2),J=ee[0],ce=ee[1],We=(0,p.useState)({sortedColumn:"",sortDirection:Y.NotActive}),Ce=Fe(We,2),Ie=Ce[0],Ne=Ce[1],Ze=(0,p.useState)(5),ze=Fe(Ze,2),Ke=ze[0],no=ze[1],Xe=(0,p.useState)(0),Qe=Fe(Xe,2),He=Qe[0],oo=Qe[1],_o={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},go=function(Re){var we=Re.selectedValue;ce(we)},mo=function(Re){var we=Re.sortedColumn,po=Re.previousSortDirection;po===Y.Ascending?Ne({sortedColumn:we,sortDirection:Y.Descending}):po===Y.Descending?Ne({sortedColumn:we,sortDirection:Y.Ascending}):Ne({sortedColumn:we,sortDirection:Y.Descending})},yo=function(Re){no(parseInt(Re.target.value,10)),oo(0)},fo=function(Re){oo(Re)},vo=function(Re){var we={applicationNr:Re.target.value};ce(we)},bo=function(Re){var we={applicationNr:Re.applicationNr};return JSON.stringify(J)==JSON.stringify(we)};return(0,N.jsxs)(_e,{selectRows:F.selectRows,onChange:go,selectedValue:J,children:[(0,N.jsx)(m,{children:(0,N.jsxs)(de,{children:[F.selectRows&&(0,N.jsx)(pe,{radiobutton:!0}),(0,N.jsx)(pe,{onChange:mo,sortKey:"S\xF8knadsnr.",sortDirecton:Ie.sortedColumn==="S\xF8knadsnr."?Ie.sortDirection:Y.NotActive,children:"S\xF8knadsnr."}),(0,N.jsx)(pe,{sortKey:"Produkt",onChange:mo,sortDirecton:Ie.sortedColumn==="Produkt"?Ie.sortDirection:Y.NotActive,children:"Produkt"}),(0,N.jsx)(pe,{children:"Status"}),(0,N.jsx)(pe,{children:"Bilde"})]})}),(0,N.jsx)(fe,{children:Ve.slice(He*Ke,He*Ke+Ke).map(function(ke){return(0,N.jsxs)(de,{rowData:{applicationNr:ke.applicationNr},children:[F.selectRows&&(0,N.jsx)(pe,{radiobutton:!0,children:(0,N.jsx)(O.E,{name:ke.applicationNr,onChange:function(we){return vo(we)},value:ke.applicationNr,checked:bo(ke),label:ke.applicationNr,hideLabel:!0})}),(0,N.jsx)(pe,{children:ke.applicationNr}),(0,N.jsx)(pe,{children:ke.product}),(0,N.jsx)(pe,{children:ke.status}),(0,N.jsx)(pe,{children:(0,N.jsx)("img",{className:u()(Me().checkmark),src:ke.imageSrc,alt:ke.imageAlt})})]},ke.applicationNr)})}),(0,N.jsx)(Ue,{children:(0,N.jsx)(de,{children:(0,N.jsx)(pe,{colSpan:5,children:(0,N.jsx)(c.t,{numberOfRows:Ve.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ke,onRowsPerPageChange:yo,currentPage:He,setCurrentPage:fo,descriptionTexts:_o})})})})]})};Ae.displayName="Template";var Le=Ae.bind({});Le.args={selectRows:!1},Le.parameters={docs:{description:{story:""}}};var Ye=Ae.bind({});Ye.args={selectRows:!0},Ye.parameters={docs:{description:{story:""}}},Le.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const description: DescriptionText = {
    rowsPerPage: 'Rader per side',
    of: 'av',
    navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
    previousPage: 'Forrige side i tabell',
    nextPage: 'Neste side i tabell',
    navigateLastPage: 'Naviger til siste side i tabell',
  };

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({
    sortedColumn,
    previousSortDirection,
  }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeInCurrentPage = (newPage: number) => {
    setPage(newPage);
  };
  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    const value: RowData = { applicationNr: event.target.value };
    setSelected(value);
  };
  const checkSelectedValue = (row: RowData) => {
    const value: RowData = { applicationNr: row.applicationNr };
    if (JSON.stringify(selected) == JSON.stringify(value)) {
      return true;
    }
    return false;
  };

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={handleSortChange}
            sortKey={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.sortedColumn === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            sortKey={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.sortedColumn === 'Produkt'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow
              key={row.applicationNr}
              rowData={{ applicationNr: row.applicationNr }}
            >
              {args.selectRows && (
                <TableCell radiobutton={true}>
                  <RadioButton
                    name={row.applicationNr}
                    onChange={(event) => handleRadioButton(event)}
                    value={row.applicationNr}
                    checked={checkSelectedValue(row)}
                    label={row.applicationNr}
                    hideLabel={true}
                  ></RadioButton>
                </TableCell>
              )}
              <TableCell>{row.applicationNr}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <img
                  className={cn(classes['checkmark'])}
                  src={row.imageSrc}
                  alt={row.imageAlt}
                ></img>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              descriptionTexts={description}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},Le.parameters),Ye.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const description: DescriptionText = {
    rowsPerPage: 'Rader per side',
    of: 'av',
    navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
    previousPage: 'Forrige side i tabell',
    nextPage: 'Neste side i tabell',
    navigateLastPage: 'Naviger til siste side i tabell',
  };

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({
    sortedColumn,
    previousSortDirection,
  }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        sortedColumn: sortedColumn,
        sortDirection: SortDirection.Descending,
      });
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeInCurrentPage = (newPage: number) => {
    setPage(newPage);
  };
  const handleRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    const value: RowData = { applicationNr: event.target.value };
    setSelected(value);
  };
  const checkSelectedValue = (row: RowData) => {
    const value: RowData = { applicationNr: row.applicationNr };
    if (JSON.stringify(selected) == JSON.stringify(value)) {
      return true;
    }
    return false;
  };

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={handleSortChange}
            sortKey={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.sortedColumn === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            sortKey={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.sortedColumn === 'Produkt'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => (
            <TableRow
              key={row.applicationNr}
              rowData={{ applicationNr: row.applicationNr }}
            >
              {args.selectRows && (
                <TableCell radiobutton={true}>
                  <RadioButton
                    name={row.applicationNr}
                    onChange={(event) => handleRadioButton(event)}
                    value={row.applicationNr}
                    checked={checkSelectedValue(row)}
                    label={row.applicationNr}
                    hideLabel={true}
                  ></RadioButton>
                </TableCell>
              )}
              <TableCell>{row.applicationNr}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                <img
                  className={cn(classes['checkmark'])}
                  src={row.imageSrc}
                  alt={row.imageAlt}
                ></img>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              descriptionTexts={description}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},Ye.parameters);var co=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>k,__namedExportsOrder:()=>v,default:()=>q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.map.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/classnames/index.js"),D=e.n(h),x=e("./src/utils/arrayUtils.ts"),g=e("./src/hooks/index.ts"),M=e("./src/components/Tabs/Tabs.module.css"),B=e.n(M),I=e("./node_modules/react/jsx-runtime.js");function z(T,m){return ye(T)||N(T,m)||Q(T,m)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(T,m){if(!!T){if(typeof T=="string")return ae(T,m);var d=Object.prototype.toString.call(T).slice(8,-1);if(d==="Object"&&T.constructor&&(d=T.constructor.name),d==="Map"||d==="Set")return Array.from(T);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ae(T,m)}}function ae(T,m){(m==null||m>T.length)&&(m=T.length);for(var d=0,f=new Array(m);d<m;d++)f[d]=T[d];return f}function N(T,m){var d=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(d!=null){var f=[],R=!0,H=!1,Z,G;try{for(d=d.call(T);!(R=(Z=d.next()).done)&&(f.push(Z.value),!(m&&f.length===m));R=!0);}catch($){H=!0,G=$}finally{try{!R&&d.return!=null&&d.return()}finally{if(H)throw G}}return f}}function ye(T){if(Array.isArray(T))return T}var me=function(m){var d=m.activeTab,f=m.items,R=m.onChange;if(!(0,x.zb)(f.map(function(ge){var fe=ge.name;return fe})))throw Error("Each tab name must be unique.");if(d!==void 0&&!f.some(function(ge){var fe=ge.name;return fe===d}))throw Error("The given active tab name must exist in the list of items.");var H=function(fe){return f.findIndex(function(Oe){return Oe.name===fe})},Z=d!=null?d:f[0].name,G=(0,n.useState)(Z),$=z(G,2),se=$[0],Y=$[1],pe=(0,n.useState)(H(Z)),he=z(pe,2),re=he[0],ue=he[1];(0,n.useEffect)(function(){return Y(Z)},[Z]);var K=(0,n.useRef)(null),X=(0,n.useId)(),le=f.length-1;(0,g.PQ)(function(){var ge;(ge=K.current)===null||ge===void 0||ge.querySelectorAll('[role="tab"]')[re].focus()},[re]);var de=function(fe){se!==fe&&R&&R(fe),Y(fe),ue(H(fe))},ve=function(){return re!==void 0&&ue(re===le?0:re+1)},je=function(){return re!==void 0&&ue(re===0?le:re-1)},be=function(fe){return function(Oe){switch(Oe.key){case"ArrowRight":ve();break;case"ArrowLeft":je();break;case"Space":de(fe)}}},Ee=function(fe){return fe.replace(/\s/,"_")},Pe=new Map(f.map(function(ge){var fe,Oe;return[ge.name,{panelId:(fe=ge.panelId)!==null&&fe!==void 0?fe:X+"-panel-"+Ee(ge.name),tabId:(Oe=ge.tabId)!==null&&Oe!==void 0?Oe:X+"-tab-"+Ee(ge.name)}]}));return(0,I.jsxs)("div",{className:B().tabs,children:[(0,I.jsx)("div",{className:B().tabs__tablist,ref:K,role:"tablist",children:f.map(function(ge,fe){var Oe=ge.name===se,De=Pe.get(ge.name),Me=D()(B().tabs__tablist__tab,Oe&&B()["tabs__tablist__tab--selected"]);return(0,I.jsx)("button",{"aria-controls":De==null?void 0:De.panelId,"aria-selected":Oe,className:Me,id:De==null?void 0:De.tabId,onClick:function(){return de(ge.name)},onKeyDown:be(ge.name),role:"tab",tabIndex:re===fe?0:-1,children:ge.name},ge.name)})}),(0,I.jsx)("hr",{className:B().tabs__divider}),f.map(function(ge){var fe=Pe.get(ge.name);return(0,I.jsx)("div",{className:B().tabs__tabpanel,"aria-labelledby":fe==null?void 0:fe.tabId,hidden:ge.name!==se,id:fe==null?void 0:fe.panelId,role:"tabpanel",children:ge.content},fe==null?void 0:fe.panelId)})]})};me.displayName="Tabs";try{me.displayName="Tabs",me.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:me.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(T){}var ie=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Tabs } from './Tabs';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0';

export default {
  title: \`Components/Tabs\`,
  component: Tabs,
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
          description={\`This component allows the user to tab between several panels.
                        It is useful to give a structured view of elements that do not have to be visible all at the same time.
                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.
                        The component accepts a list of \\\`TabItem\\\`s (\\\`item\\\` property) consisting of a tab name and some tab panel content.
                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).
                        The \\\`activeTab\\\` property can be used to define which tab should be selected by default. It defaults to the first tab.
                        The \\\`onChange\\\` property optional and can be used to trigger some function the user switches to another tab. It is called with the tab name as a parameter.\`}
        />
      ),
    },
  },
  args: {
    items: [
      {
        name: 'Ild',
        content: (
          <p>
            Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in,
            egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis.
            Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl
            nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed
            egestas nulla lobortis sapien scelerisque, at venenatis risus
            elementum. Aliquam eleifend, metus non molestie viverra, erat sem
            ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat
            sapien arcu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit
            amet faucibus. Sed interdum condimentum interdum. Praesent volutpat
            turpis mattis purus venenatis egestas. In iaculis condimentum
            fringilla. Duis dignissim turpis mattis tristique vulputate.
          </p>
        ),
      },
      {
        name: 'Jord',
        content: (
          <p>
            Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis
            dolor. Proin scelerisque tellus sit amet consectetur condimentum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
            dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante
            in elit semper pellentesque. Donec cursus eros non diam condimentum
            viverra. Pellentesque at odio lorem. Aenean ac enim et risus
            bibendum scelerisque et a purus. Donec ultricies, ex et ornare
            fringilla, turpis ex consectetur ante, ut porta libero metus quis
            magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula
            tellus, et elementum orci convallis sit amet. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra
            ultrices nulla.
          </p>
        ),
      },
      {
        name: 'Luft',
        content: (
          <p>
            Integer dictum lacus vitae urna lobortis, scelerisque varius metus
            maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur
            ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum
            aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu
            aliquam dui pharetra. Praesent eu libero consectetur, varius urna
            quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar.
            Curabitur risus lorem, placerat sit amet mollis venenatis, placerat
            sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies
            aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque
            porttitor sapien quis risus placerat, in facilisis augue molestie.
          </p>
        ),
      },
      {
        name: 'Vann',
        content: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec
            mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem,
            a congue nulla dictum vel. Donec augue eros, cursus ut porta eu,
            mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed
            facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at,
            vulputate hendrerit quam. Suspendisse condimentum pellentesque
            varius. Nullam molestie dictum pellentesque. Nunc felis sem,
            elementum a sapien a, consectetur ullamcorper tellus. Nullam porta
            tempus nisl, in vehicula quam congue eget.
          </p>
        ),
      },
    ],
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Example = Template.bind({});
Example.args = {};
Example.parameters = {
  docs: {
    description: {
      story: 'This is how the component might look like.',
    },
  },
};
`,_e={Example:{startLoc:{col:46,line:120},endLoc:{col:74,line:120},startBody:{col:46,line:120},endBody:{col:74,line:120}}},ne="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const q={title:"Components/Tabs",component:me,parameters:{design:(0,l.vc)([{type:"figma",url:ne},{type:"link",url:ne}]),docs:{page:function(){return(0,I.jsx)(a.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property optional and can be used to trigger some function the user switches to another tab. It is called with the tab name as a parameter."})}}},args:{items:[{name:"Ild",content:(0,I.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,I.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,I.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,I.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var b=function(m){return(0,I.jsx)(me,Object.assign({},m))};b.displayName="Template";var k=b.bind({});k.args={},k.parameters={docs:{description:{story:"This is how the component might look like."}}},k.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},k.parameters);var v=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>D,Disabled:()=>B,Error:()=>x,ReadOnlyConfirm:()=>M,ReadOnlyInfo:()=>g,__namedExportsOrder:()=>I,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/classnames/index.js"),L=e.n(w),C=e("./src/components/TextArea/TextArea.module.css"),A=e.n(C),y=e("./node_modules/react/jsx-runtime.js"),P=["isValid","disabled","readOnly","resize","label"];function p(z,oe){if(z==null)return{};var Q=S(z,oe),ae,N;if(Object.getOwnPropertySymbols){var ye=Object.getOwnPropertySymbols(z);for(N=0;N<ye.length;N++)ae=ye[N],!(oe.indexOf(ae)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,ae)||(Q[ae]=z[ae]))}return Q}function S(z,oe){if(z==null)return{};var Q={},ae=Object.keys(z),N,ye;for(ye=0;ye<ae.length;ye++)N=ae[ye],!(oe.indexOf(N)>=0)&&(Q[N]=z[N]);return Q}var E=function(oe){var Q=oe.isValid,ae=Q===void 0?!0:Q,N=oe.disabled,ye=N===void 0?!1:N,me=oe.readOnly,ie=me===void 0?!1:me,_e=oe.resize,ne=_e===void 0?"none":_e,q=oe.label,b=p(oe,P);return(0,y.jsx)(_.SP,{isValid:ae,disabled:ye,readOnly:ie,label:q,inputId:b.id,inputRenderer:function(v){var T=v.className,m=v.inputId;return(0,y.jsx)("textarea",Object.assign({},b,{id:m,disabled:ye,readOnly:Boolean(ie),className:L()(T,A().TextArea,A()["TextArea--resize-"+ne])}))}})};E.displayName="TextArea";try{E.displayName="TextArea",E.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:E.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(z){}var u=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ReadOnlyVariant } from '../_InputWrapper';

import { TextArea } from './TextArea';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857';

export default {
  title: \`Components/TextArea\`,
  component: TextArea,
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
    label: 'Label',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Regular textarea.',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  isValid: false,
};
Error.parameters = {
  docs: {
    description: {
      story: 'Textarea displaying error.',
    },
  },
};

export const ReadOnlyInfo = Template.bind({});
ReadOnlyInfo.args = {
  readOnly: true,
  value: 'Some text',
};
ReadOnlyInfo.parameters = {
  docs: {
    description: {
      story: 'Textarea as readonly-info.',
    },
  },
};

export const ReadOnlyConfirm = Template.bind({});
ReadOnlyConfirm.args = {
  readOnly: ReadOnlyVariant.ReadOnlyConfirm,
  value: 'Some text',
};
ReadOnlyConfirm.parameters = {
  docs: {
    description: {
      story: 'Textarea as readonly-confirm.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'Some text',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Textarea as disabled.',
    },
  },
};
`,i={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},c="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const O={title:"Components/TextArea",component:E,parameters:{design:(0,l.vc)([{type:"figma",url:c},{type:"link",url:c}]),docs:{page:function(){return(0,y.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var h=function(oe){return(0,y.jsx)(E,Object.assign({},oe))};h.displayName="Template";var D=h.bind({});D.args={},D.parameters={docs:{description:{story:"Regular textarea."}}};var x=h.bind({});x.args={isValid:!1},x.parameters={docs:{description:{story:"Textarea displaying error."}}};var g=h.bind({});g.args={readOnly:!0,value:"Some text"},g.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var M=h.bind({});M.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},M.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var B=h.bind({});B.args={disabled:!0,value:"Some text"},B.parameters={docs:{description:{story:"Textarea as disabled."}}},D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},D.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},x.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},g.parameters),M.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},M.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},B.parameters);var I=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>Q,Disabled:()=>ie,Error:()=>N,NumberInput:()=>ae,ReadOnlyConfirm:()=>me,ReadOnlyInfo:()=>ye,__namedExportsOrder:()=>_e,default:()=>z});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),y=e("./node_modules/classnames/index.js"),P=e.n(y),p=e("./node_modules/react-number-format/dist/react-number-format.es.js"),S=function(q){return q.format!==void 0},E=function(q){return q.format===void 0},u=function(q,b){return b&&E(b)?numericFormatter(q,b):b&&S(b)?patternFormatter(q,b):q},i=e("./node_modules/react/jsx-runtime.js"),c=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function O(ne,q){if(ne==null)return{};var b=h(ne,q),k,v;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(ne);for(v=0;v<T.length;v++)k=T[v],!(q.indexOf(k)>=0)&&(!Object.prototype.propertyIsEnumerable.call(ne,k)||(b[k]=ne[k]))}return b}function h(ne,q){if(ne==null)return{};var b={},k=Object.keys(ne),v,T;for(T=0;T<k.length;T++)v=k[T],!(q.indexOf(v)>=0)&&(b[v]=ne[v]);return b}var D=function(q){var b=q.values,k=q.sourceInfo;k.event.target.value=b.value.trim()},x=function(q,b,k){var v=q.target,T=q.key,m=v.selectionStart,d=v.selectionEnd,f=v.value,R=f===void 0?"":f;if(m!==null&&d!==null){var H=R[0]==="-",Z=(b==null?void 0:b.length)||0+(H?1:0),G=(k==null?void 0:k.length)||0;H&&d<=Z&&T==="Backspace"?v.setSelectionRange(1,1):v.setSelectionRange(Math.min(Math.max(m,Z),R.length-G),Math.max(Math.min(d,R.length-G),Z))}},g=function(q){var b=q.id,k=q.onChange,v=q.isValid,T=v===void 0?!0:v,m=q.disabled,d=m===void 0?!1:m,f=q.readOnly,R=f===void 0?!1:f,H=q.required,Z=H===void 0?!1:H,G=q.formatting,$=q.label,se=O(q,c),Y=function(he,re){re.source==="event"&&k&&(D({values:he,sourceInfo:re}),k(re.event))};return(0,i.jsx)(_.SP,{isValid:T,disabled:d,readOnly:R,label:$,inputId:b,inputRenderer:function(he){var re=he.className,ue=he.variant,K=he.inputId,X={id:K,readOnly:Boolean(R),disabled:d,required:Z,className:P()(re,se.className),style:Object.assign({textAlign:G==null?void 0:G.align},se.style)};return G!=null&&G.number&&E(G.number)?(G.number.prefix&&G.number.prefix[0]==="-"&&(G.number.prefix=" "+G.number.prefix),(0,i.jsx)(p.h3,Object.assign({},X,G.number,se,{"data-testid":K+"-formatted-number-"+ue,onValueChange:Y,valueIsNumericString:!0,onKeyDown:function(de){return x(de,G.number.prefix,G.number.suffix)}}))):G!=null&&G.number&&S(G.number)?(0,i.jsx)(p.HH,Object.assign({},X,G.number,se,{"data-testid":K+"-formatted-number-"+ue,onValueChange:Y,valueIsNumericString:!0})):(0,i.jsx)("input",Object.assign({},X,se,{"data-testid":K+"-"+ue,onChange:k}))}})};g.displayName="TextField";try{g.displayName="TextField",g.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:g.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(ne){}var M=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { ReadOnlyVariant } from '../_InputWrapper';

import { TextField } from './TextField';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723';

export default {
  title: \`Components/TextField\`,
  component: TextField,
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
    label: 'Label',
    id: 'textfield-story',
    formatting: {
      align: 'left',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    description: {
      story: 'Regular input field.',
    },
  },
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  formatting: {
    number: {
      thousandSeparator: ' ',
      prefix: 'NOK ',
    },
  },
};
NumberInput.parameters = {
  docs: {
    description: {
      story: 'Number input field.',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  isValid: false,
};
Error.parameters = {
  docs: {
    description: {
      story: 'Input field displaying error.',
    },
  },
};

export const ReadOnlyInfo = Template.bind({});
ReadOnlyInfo.args = {
  readOnly: true,
  value: 'Some text',
};
ReadOnlyInfo.parameters = {
  docs: {
    description: {
      story: 'Input field as readonly-info.',
    },
  },
};

export const ReadOnlyConfirm = Template.bind({});
ReadOnlyConfirm.args = {
  readOnly: ReadOnlyVariant.ReadOnlyConfirm,
  value: 'Some text',
};
ReadOnlyConfirm.parameters = {
  docs: {
    description: {
      story: 'Input field as readonly-confirm.',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: 'Some text',
};
Disabled.parameters = {
  docs: {
    description: {
      story: 'Input field as disabled.',
    },
  },
};
`,B={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},I="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const z={title:"Components/TextField",component:g,parameters:{design:(0,l.vc)([{type:"figma",url:I},{type:"link",url:I}]),docs:{page:function(){return(0,i.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var oe=function(q){return(0,i.jsx)(g,Object.assign({},q))};oe.displayName="Template";var Q=oe.bind({});Q.args={},Q.parameters={docs:{description:{story:"Regular input field."}}};var ae=oe.bind({});ae.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},ae.parameters={docs:{description:{story:"Number input field."}}};var N=oe.bind({});N.args={isValid:!1},N.parameters={docs:{description:{story:"Input field displaying error."}}};var ye=oe.bind({});ye.args={readOnly:!0,value:"Some text"},ye.parameters={docs:{description:{story:"Input field as readonly-info."}}};var me=oe.bind({});me.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},me.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var ie=oe.bind({});ie.args={disabled:!0,value:"Some text"},ie.parameters={docs:{description:{story:"Input field as disabled."}}},Q.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},Q.parameters),ae.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ae.parameters),N.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},N.parameters),ye.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ye.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},me.parameters),ie.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ie.parameters);var _e=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>b,__namedExportsOrder:()=>k,default:()=>ne});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./.storybook/StoryPage.tsx"),S=e("./node_modules/classnames/index.js"),E=e.n(S),u=(0,y.createContext)(void 0),i=function(){var T=(0,y.useContext)(u);if(T===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return T},c=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),O=e.n(c),h=e("./node_modules/react/jsx-runtime.js"),D=function(T){var m=T.children,d=T.onChange,f=T.selectedValue,R=function(Z){var G=Z.selectedValue;d({selectedValue:G})};return(0,h.jsx)(u.Provider,{value:{onChange:R,selectedValue:f},children:(0,h.jsx)("div",{className:E()(O()["toggle-button-group"]),"data-testid":"toggle-button-group",children:m})})};D.displayName="ToggleButtonGroup";try{D.displayName="ToggleButtonGroup",D.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:D.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(v){}var x=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),g=e.n(x),M=function(T){var m,d=T.children,f=T.value,R=i(),H=R.onChange,Z=R.selectedValue,G=function(){H({selectedValue:f})};return(0,h.jsx)("button",{"data-testid":"toggle-button",className:E()(g()["toggle-button"],(m={},m[g()["toggle-button--selected"]]=f===Z,m)),onClick:G,type:"button","aria-pressed":f==Z,children:d})};M.displayName="ToggleButton";try{M.displayName="ToggleButton",M.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:M.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(v){}var B=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),I=e.n(B);function z(v,T){return ye(v)||N(v,T)||Q(v,T)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(v,T){if(!!v){if(typeof v=="string")return ae(v,T);var m=Object.prototype.toString.call(v).slice(8,-1);if(m==="Object"&&v.constructor&&(m=v.constructor.name),m==="Map"||m==="Set")return Array.from(v);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return ae(v,T)}}function ae(v,T){(T==null||T>v.length)&&(T=v.length);for(var m=0,d=new Array(T);m<T;m++)d[m]=v[m];return d}function N(v,T){var m=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(m!=null){var d=[],f=!0,R=!1,H,Z;try{for(m=m.call(v);!(f=(H=m.next()).done)&&(d.push(H.value),!(T&&d.length===T));f=!0);}catch(G){R=!0,Z=G}finally{try{!f&&m.return!=null&&m.return()}finally{if(R)throw Z}}return d}}function ye(v){if(Array.isArray(v))return v}var me=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { ChangeProps } from './Context';
import { ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';
import classes from './ToggleButtonGroup.stories.module.css';

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
    <div className={classes['container']}>
      <ToggleButtonGroup
        onChange={handleChange}
        selectedValue={selected}
      >
        <ToggleButton value='left'>Aktivt valg</ToggleButton>
        <ToggleButton value='right'>Mulig valg</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
export const Example = Template.bind({});
Example.args = {};
Example.argTypes = {
  onChange: {
    control: false,
  },
  selectedValue: {
    control: false,
  },
};
Example.parameters = {
  docs: {
    description: {},
  },
};
`,ie={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},_e="";const ne={title:"Components/Toggle button group",component:D,parameters:{design:(0,P.vc)([{type:"figma",url:_e},{type:"link",url:_e}]),docs:{page:function(){return(0,h.jsx)(p.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var q=function(){var T=(0,y.useState)("left"),m=z(T,2),d=m[0],f=m[1],R=function(Z){var G=Z.selectedValue;f(G)};return(0,h.jsx)("div",{className:I().container,children:(0,h.jsxs)(D,{onChange:R,selectedValue:d,children:[(0,h.jsx)(M,{value:"left",children:"Aktivt valg"}),(0,h.jsx)(M,{value:"right",children:"Mulig valg"})]})})};q.displayName="Template";var b=q.bind({});b.args={},b.argTypes={onChange:{control:!1},selectedValue:{control:!1}},b.parameters={docs:{description:{}}},b.parameters=Object.assign({storySource:{source:`() => {
  const [selected, setSelected] = useState('left');

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };

  return (
    <div className={classes['container']}>
      <ToggleButtonGroup
        onChange={handleChange}
        selectedValue={selected}
      >
        <ToggleButton value='left'>Aktivt valg</ToggleButton>
        <ToggleButton value='right'>Mulig valg</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}`}},b.parameters);var k=["Example"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>p});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),_=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),U=e.n(V),j=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),w=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),L=1.6,C=/(\d*\.?\d+)rem(?=\W|$)/gim,A=function(u){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,c=Math.pow(10,i);return Math.round((u+Number.EPSILON)*c)/c},y=function(u){return typeof u=="string"?u.replace(C,function(i,c){var O=A(c*L);return O+"rem"}):u},P={get:function(u,i){if(i in u){var c=u[i];return typeof c=="object"?new Proxy(c,P):y(c)}}},p=new Proxy(j,P),S=new Proxy(w,P)},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{zx:()=>u,rp:()=>p,qE:()=>P,Wu:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),_=e("./node_modules/classnames/index.js"),V=e.n(_),U=e("./src/components/SvgIcon/index.ts"),j=e("./src/components/Button/Button.module.css"),w=e.n(j),L=e("./node_modules/react/jsx-runtime.js"),C=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function A(i,c){if(i==null)return{};var O=y(i,c),h,D;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(i);for(D=0;D<x.length;D++)h=x[D],!(c.indexOf(h)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,h)||(O[h]=i[h]))}return O}function y(i,c){if(i==null)return{};var O={},h=Object.keys(i),D,x;for(x=0;x<h.length;x++)D=h[x],!(c.indexOf(D)>=0)&&(O[D]=i[D]);return O}var P;(function(i){i.Small="small",i.Medium="medium",i.Large="large"})(P||(P={}));var p;(function(i){i.Primary="primary",i.Secondary="secondary",i.Success="success",i.Danger="danger",i.Inverted="inverted"})(p||(p={}));var S;(function(i){i.Filled="filled",i.Outline="outline",i.Quiet="quiet"})(S||(S={}));var E=function(c,O){var h,D,x,g=c.children,M=c.color,B=M===void 0?p.Primary:M,I=c.variant,z=I===void 0?S.Filled:I,oe=c.size,Q=oe===void 0?P.Small:oe,ae=c.fullWidth,N=ae===void 0?!1:ae,ye=c.dashedBorder,me=ye===void 0?!1:ye,ie=c.iconPlacement,_e=ie===void 0?"left":ie,ne=c.icon,q=c.type,b=q===void 0?"button":q,k=c.className,v=A(c,C);return(0,L.jsxs)("button",Object.assign({},v,{ref:O,className:V()(w().button,w()["button--"+Q],w()["button--"+z],w()["button--"+B],w()["button--"+z+"--"+B],(h={},h[w()["button--full-width"]]=N,h),(D={},D[w()["button--dashed-border"]]=me,D),(x={},x[w()["button--only-icon"]]=!g&&ne,x),k),type:b,children:[ne&&_e==="left"&&(0,L.jsx)(U.l,{svgIconComponent:ne,className:w().icon}),g,ne&&_e==="right"&&(0,L.jsx)(U.l,{svgIconComponent:ne,className:w().icon})]}))};E.displayName="Button";const u=(0,a.forwardRef)(E)},"./src/components/Checkbox/Checkbox.tsx":(r,t,e)=>{"use strict";e.d(t,{X:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),V=e("./node_modules/react/index.js"),U=e("./node_modules/classnames/index.js"),j=e.n(U),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),L=e("./src/components/Checkbox/Checkbox.module.css"),C=e.n(L),A=e("./node_modules/react/jsx-runtime.js"),y=function(p){var S=p.checkboxId,E=p.checked,u=p.compact,i=p.description,c=p.disabled,O=p.error,h=p.hideLabel,D=p.label,x=p.name,g=p.onChange,M=p.readOnly;return(0,A.jsx)(w.f,{checked:E,className:j()(C().checkbox,E&&C()["checkbox--checked"],O&&C()["checkbox--error"],c&&C()["checkbox--disabled"],u&&C()["checkbox--compact"],M&&C()["checkbox--read-only"]),description:i,disabled:c,hideInput:M,hideLabel:h,inputId:S,label:D,name:x,onChange:g,size:u?w.b.Xsmall:w.b.Small,type:"checkbox",children:(0,A.jsx)("span",{className:C()["visible-box"],children:(0,A.jsx)("span",{className:C()["visible-box__checkmark"]})})})};y.displayName="Checkbox";try{y.displayName="Checkbox",y.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:y.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(P){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(r,t,e)=>{"use strict";e.d(t,{B:()=>V});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ErrorMessage/ErrorMessage.module.css"),a=e.n(l),_=e("./node_modules/react/jsx-runtime.js"),V=function(j){var w=j.id,L=j.children,C=j.ariaLabel;return(0,_.jsx)("div",{"data-testid":"ErrorMessage","aria-label":C,id:w,role:"alertdialog",className:n()(a()["error-message-wrapper"]),children:L})};V.displayName="ErrorMessage";try{V.displayName="ErrorMessage",V.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:V.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(U){}},"./src/components/FieldSet/FieldSet.tsx":(r,t,e)=>{"use strict";e.d(t,{C:()=>L,w:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),a=e.n(l),_=e("./src/components/ErrorMessage/ErrorMessage.tsx"),V=e("./src/components/FieldSet/FieldSet.module.css"),U=e.n(V),j=e("./node_modules/react/jsx-runtime.js"),w;(function(C){C.Xsmall="xsmall",C.Small="small"})(w||(w={}));var L=function(A){var y=A.children,P=A.className,p=A.description,S=A.disabled,E=A.error,u=A.legend,i=A.size,c=i===void 0?w.Small:i;return(0,j.jsxs)("fieldset",{className:a()(U()["field-set"],U()["field-set--"+c],P),disabled:S,children:[u&&(0,j.jsx)("legend",{className:U()["field-set__legend"],children:u}),p&&(0,j.jsx)("p",{className:U()["field-set__description"],children:p}),(0,j.jsx)("div",{className:U()["field-set__content"],children:y}),E&&(0,j.jsx)("div",{className:U()["field-set__error-message"],children:(0,j.jsx)(_.B,{children:E})})]})};L.displayName="FieldSet";try{L.displayName="FieldSet",L.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:L.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(C){}},"./src/components/FieldSet/index.ts":(r,t,e)=>{"use strict";e.d(t,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(r,t,e)=>{"use strict";e.d(t,{t:()=>q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),P=e.n(y),p=e("./src/components/Pagination/Pagination.module.css"),S=e.n(p),E,u;function i(){return i=Object.assign?Object.assign.bind():function(b){for(var k=1;k<arguments.length;k++){var v=arguments[k];for(var T in v)Object.prototype.hasOwnProperty.call(v,T)&&(b[T]=v[T])}return b},i.apply(this,arguments)}var c=function(k){return A.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),E||(E=A.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=A.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},O,h;function D(){return D=Object.assign?Object.assign.bind():function(b){for(var k=1;k<arguments.length;k++){var v=arguments[k];for(var T in v)Object.prototype.hasOwnProperty.call(v,T)&&(b[T]=v[T])}return b},D.apply(this,arguments)}var x=function(k){return A.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),O||(O=A.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),h||(h=A.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},g;function M(){return M=Object.assign?Object.assign.bind():function(b){for(var k=1;k<arguments.length;k++){var v=arguments[k];for(var T in v)Object.prototype.hasOwnProperty.call(v,T)&&(b[T]=v[T])}return b},M.apply(this,arguments)}var B=function(k){return A.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),g||(g=A.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},I,z;function oe(){return oe=Object.assign?Object.assign.bind():function(b){for(var k=1;k<arguments.length;k++){var v=arguments[k];for(var T in v)Object.prototype.hasOwnProperty.call(v,T)&&(b[T]=v[T])}return b},oe.apply(this,arguments)}var Q=function(k){return A.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),I||(I=A.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),z||(z=A.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},ae=e("./node_modules/react/jsx-runtime.js");function N(b,k){return ne(b)||_e(b,k)||me(b,k)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(b,k){if(!!b){if(typeof b=="string")return ie(b,k);var v=Object.prototype.toString.call(b).slice(8,-1);if(v==="Object"&&b.constructor&&(v=b.constructor.name),v==="Map"||v==="Set")return Array.from(b);if(v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v))return ie(b,k)}}function ie(b,k){(k==null||k>b.length)&&(k=b.length);for(var v=0,T=new Array(k);v<k;v++)T[v]=b[v];return T}function _e(b,k){var v=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(v!=null){var T=[],m=!0,d=!1,f,R;try{for(v=v.call(b);!(m=(f=v.next()).done)&&(T.push(f.value),!(k&&T.length===k));m=!0);}catch(H){d=!0,R=H}finally{try{!m&&v.return!=null&&v.return()}finally{if(d)throw R}}return T}}function ne(b){if(Array.isArray(b))return b}var q=function(k){var v,T,m,d,f=k.numberOfRows,R=k.rowsPerPageOptions,H=k.rowsPerPage,Z=k.onRowsPerPageChange,G=k.currentPage,$=k.setCurrentPage,se=k.descriptionTexts,Y=(0,A.useState)(1),pe=N(Y,2),he=pe[0],re=pe[1];(0,A.useEffect)(function(){f<H?re(1):re(Math.ceil(f/H))},[H,f]);var ue=function(){G<he-1&&$(G+1)},K=function(){G>0&&$(G-1)},X=function(){var de=1+G*H,ve=H*(G+1)>f?f:H*(G+1);return(0,ae.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:de+"-"+ve+" "+se.of+" "+f})};return(0,ae.jsxs)("div",{className:P()(S()["pagination-wrapper"]),children:[(0,ae.jsx)("span",{style:{marginRight:"26px"},children:se.rowsPerPage}),(0,ae.jsx)("select",{style:{marginRight:"25px"},value:H,onChange:function(de){return Z(de)},"aria-label":"rader per side",children:R.map(function(le){return(0,ae.jsx)("option",{value:le,children:le},le)})}),X(),(0,ae.jsx)("button",{className:P()(S()["icon-button"]),onClick:function(){return $(0)},disabled:G===0,"aria-label":se.navigateFirstPage,"data-testid":"first-page-icon",children:(0,ae.jsx)(B,{className:P()(S()["pagination-icon"],(v={},v[S()["pagination-icon--disabled"]]=G===0,v))})}),(0,ae.jsx)("button",{className:P()(S()["icon-button"]),onClick:function(){return K()},disabled:G===0,"aria-label":se.previousPage,"data-testid":"pagination-previous-icon",children:(0,ae.jsx)(x,{className:P()(S()["pagination-icon"],(T={},T[S()["pagination-icon--disabled"]]=G===0,T))})}),(0,ae.jsx)("button",{className:P()(S()["icon-button"]),onClick:function(){return ue()},disabled:G===he-1,"aria-label":se.nextPage,"data-testid":"pagination-next-icon",children:(0,ae.jsx)(c,{className:P()(S()["pagination-icon"],(m={},m[S()["pagination-icon--disabled"]]=G===he-1,m))})}),(0,ae.jsx)("button",{className:P()(S()["icon-button"]),onClick:function(){return $(he-1)},disabled:G===he-1,"aria-label":se.navigateLastPage,children:(0,ae.jsx)(Q,{className:P()(S()["pagination-icon"],(d={},d[S()["pagination-icon--disabled"]]=G===he-1,d))})})]})};q.displayName="Pagination";try{q.displayName="Pagination",q.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:q.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(b){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>h,c:()=>u});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),a=e("./src/DesignTokens/index.ts"),_,V,U;function j(){return j=Object.assign?Object.assign.bind():function(D){for(var x=1;x<arguments.length;x++){var g=arguments[x];for(var M in g)Object.prototype.hasOwnProperty.call(g,M)&&(D[M]=g[M])}return D},j.apply(this,arguments)}var w=function(x){return s.createElement("svg",j({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},x),_||(_=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),V||(V=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),U||(U=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},L,C,A;function y(){return y=Object.assign?Object.assign.bind():function(D){for(var x=1;x<arguments.length;x++){var g=arguments[x];for(var M in g)Object.prototype.hasOwnProperty.call(g,M)&&(D[M]=g[M])}return D},y.apply(this,arguments)}var P=function(x){return s.createElement("svg",y({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},x),L||(L=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),C||(C=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),A||(A=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},p=e("./src/components/Panel/Panel.module.css"),S=e.n(p),E=e("./node_modules/react/jsx-runtime.js"),u;(function(D){D.Success="success",D.Info="info",D.Warning="warning",D.Error="error"})(u||(u={}));var i=function(x){var g=x.size,M=x.variant;switch(M){case u.Info:case u.Error:case u.Warning:return(0,E.jsx)(w,{style:{width:g,height:g},"data-testid":"panel-icon-info"});case u.Success:return(0,E.jsx)(P,{style:{width:g,height:g},"data-testid":"panel-icon-success"})}},c=function(x){var g=x.forceMobileLayout,M=(0,l.a)("(max-width: "+a.T.BreakpointsSm+")");return g?!0:M},O=function(x){var g=x.children;return(0,E.jsx)("div",{className:n()(S()["panel__pointer-position"]),children:g})};O.displayName="defaultRenderArrow";var h=function(x){var g,M=x.renderIcon,B=M===void 0?i:M,I=x.title,z=x.children,oe=x.variant,Q=oe===void 0?u.Info:oe,ae=x.showPointer,N=ae===void 0?!1:ae,ye=x.showIcon,me=ye===void 0?!0:ye,ie=x.forceMobileLayout,_e=ie===void 0?!1:ie,ne=x.renderArrow,q=ne===void 0?O:ne,b=c({forceMobileLayout:_e}),k=b?a.T.ComponentPanelSizeIconXs:a.T.ComponentPanelSizeIconMd;return(0,E.jsxs)("div",{className:n()(S().panel,(g={},g[S()["panel--mobile-layout"]]=b,g)),children:[N&&q({children:(0,E.jsx)("div",{"data-testid":"panel-pointer",className:n()(S().panel__pointer,S()["panel__pointer--"+Q])})}),(0,E.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(S()["panel__content-wrapper"],S()["panel__content-wrapper--"+Q]),children:[me&&(0,E.jsx)("div",{"data-testid":"panel-icon-wrapper",className:S()["panel__icon-wrapper"],children:B({size:k,variant:Q})}),(0,E.jsxs)("div",{className:S().panel__content,children:[I&&(0,E.jsx)("h2",{className:S().panel__header,children:I}),(0,E.jsx)("div",{className:S().panel__body,children:z})]})]})]})};h.displayName="Panel";try{h.displayName="Panel",h.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
  switch (variant) {
    case PanelVariant.Info:
    case PanelVariant.Error:
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
}`},description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"false"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:{value:`({ children }: RenderArrowProps) => {
  return (
    <div className={cn(classes['panel__pointer-position'])}>{children}</div>
  );
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:h.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(D){}},"./src/components/RadioButton/RadioButton.tsx":(r,t,e)=>{"use strict";e.d(t,{E:()=>P,j:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),V=e("./node_modules/react/index.js"),U=e("./node_modules/classnames/index.js"),j=e.n(U),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),L=e("./src/components/RadioButton/RadioButton.module.css"),C=e.n(L),A=e("./node_modules/react/jsx-runtime.js"),y;(function(p){p.Xsmall="xsmall",p.Small="small"})(y||(y={}));var P=function(S){var E=S.checked,u=S.description,i=S.disabled,c=S.error,O=S.hideLabel,h=S.label,D=S.name,x=S.onChange,g=S.radioId,M=S.size,B=M===void 0?y.Small:M,I=S.value;return(0,A.jsx)(w.f,{checked:E,className:j()(C().radio,C()["radio--"+B],E&&C()["radio--checked"],c&&C()["radio--error"],i&&C()["radio--disabled"]),description:u,disabled:i,hideLabel:O,inputId:g,label:h,name:D,onChange:x,size:B===y.Xsmall?w.b.Xsmall:w.b.Small,type:"radio",value:I,children:(0,A.jsx)("span",{className:C()["visible-button"],children:(0,A.jsx)("span",{className:C()["visible-button__checkmark"]})})})};P.displayName="RadioButton";try{P.displayName="RadioButton",P.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:P.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(p){}},"./src/components/RadioButton/index.ts":(r,t,e)=>{"use strict";e.d(t,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(r,t,e)=>{"use strict";e.d(t,{P:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),c=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),h=e.n(O),D=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),x=e("./src/components/_InputWrapper/index.ts"),g=e("./src/components/Select/MultiSelectItem.module.css"),M=e.n(g),B=e("./node_modules/react/jsx-runtime.js"),I=function(d){var f=d.deleteButtonLabel,R=d.disabled,H=d.onDeleteButtonClick,Z=d.label;return(0,B.jsxs)("span",{className:M()["multi-select-item"],children:[(0,B.jsx)("span",{children:Z}),(0,B.jsx)("button",{"aria-label":f,className:M()["multi-select-item__delete-button"],disabled:R,onClick:H,children:(0,B.jsx)("span",{className:M()["multi-select-item__delete-button__cross"]})})]})};I.displayName="MultiSelectItem";try{I.displayName="MultiSelectItem",I.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:I.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(m){}var z=e("./src/hooks/index.ts"),oe=e("./src/components/Select/Select.module.css"),Q=e.n(oe);function ae(m){return me(m)||ye(m)||ne(m)||N()}function N(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ye(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function me(m){if(Array.isArray(m))return q(m)}function ie(m,d){return k(m)||b(m,d)||ne(m,d)||_e()}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(m,d){if(!!m){if(typeof m=="string")return q(m,d);var f=Object.prototype.toString.call(m).slice(8,-1);if(f==="Object"&&m.constructor&&(f=m.constructor.name),f==="Map"||f==="Set")return Array.from(m);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return q(m,d)}}function q(m,d){(d==null||d>m.length)&&(d=m.length);for(var f=0,R=new Array(d);f<d;f++)R[f]=m[f];return R}function b(m,d){var f=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(f!=null){var R=[],H=!0,Z=!1,G,$;try{for(f=f.call(m);!(H=(G=f.next()).done)&&(R.push(G.value),!(d&&R.length===d));H=!0);}catch(se){Z=!0,$=se}finally{try{!H&&f.return!=null&&f.return()}finally{if(Z)throw $}}return R}}function k(m){if(Array.isArray(m))return m}var v={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},T=function(d){var f=d.disabled,R=d.error,H=d.hideLabel,Z=d.inputId,G=d.label,$=d.multiple,se=d.onChange,Y=d.options,pe=d.value,he=Y.map(function(Se){return Se.value});if(he.length!==new Set(he).size)throw Error("Each value in the option list must be unique.");var re=(0,c.useState)($?pe!=null?pe:[]:[]),ue=ie(re,2),K=ue[0],X=ue[1],le=(0,c.useState)($?void 0:pe),de=ie(le,2),ve=de[0],je=de[1],be=Y.findIndex(function(Se){return Se.value===ve}),Ee=(0,c.useState)(!1),Pe=ie(Ee,2),ge=Pe[0],fe=Pe[1];(0,z.OR)("click",function(){return fe(!1)}),(0,z.OR)("keydown",function(){return fe(!0)});var Oe=(0,c.useState)(!1),De=ie(Oe,2),Me=De[0],Be=De[1],Je=(0,c.useRef)(null),$e=(0,c.useRef)(null);(0,c.useEffect)(function(){var Se=Je.current;if(Se){var xe=Se.offsetHeight,Te=Se.getElementsByTagName("li")[0].offsetHeight,Ve=Se.scrollTop,Ae=Ve+xe,Le=be*Te,Ye=Le+Te,co=Le>=Ve&&Ye<=Ae;co||(Le<Ve?Se.scrollTop=Le:Se.scrollTop=Ye-xe)}},[be]);var qe=function(xe){var Te;return(Te=Y.find(function(Ve){return Ve.value===xe}))!==null&&Te!==void 0?Te:{label:"",value:""}},Ge=function(xe,Te){K!=null&&K.length||je(Te),X(xe),se&&se(xe)},Ue=function(xe){je(xe),Be(!1),se&&se(xe)},eo=function(xe){$?K.includes(xe)?Fe(xe):Ge([].concat(ae(K),[xe]),xe):Ue(xe)},Fe=function(xe){Ge(K.filter(function(Te){return Te!==xe}),xe)},ao=function(){Ge([])},lo=(0,c.useCallback)(function(){if(ve===void 0)je(Y[0].value);else{var Se=be+1;Se>=0&&Se<Y.length&&je(Y[Se].value)}Be(!0)},[ve,be,je,Y]),to=(0,c.useCallback)(function(){if(ve===void 0)je(Y[Y.length-1].value);else{var Se=be-1;Se>=0&&Se<Y.length&&je(Y[Se].value)}Be(!0)},[ve,be,je,Y]);(0,z.OG)(v.ArrowDown,function(){return Me&&lo()}),(0,z.OG)(v.ArrowUp,function(){return Me&&to()}),(0,z.OG)(v.Enter,function(){return Me&&$&&ve&&eo(ve)});var so=function(xe){return ve===xe},ro=function(xe){return $?K.includes(xe):so(xe)},io=(0,c.useId)(),uo=$e.current?"calc("+$e.current.offsetWidth+"px + 2 * "+D.component.input.border_width.default.value+")":void 0;return(0,B.jsxs)("div",{className:h()(Q().select,Q()["select--"+($?"multiple":"single")],Me&&Q()["select--expanded"],f&&Q()["select--disabled"],ge&&Q()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,B.jsx)(x.SP,{disabled:f,inputId:Z,inputRenderer:function(xe){var Te=xe.className,Ve=xe.inputId;return(0,B.jsxs)("span",{className:h()(Te,Q().select__field),ref:$e,children:[$&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{className:Q()["select--multiple__field__values"],children:K.map(qe).map(function(Ae){return(0,B.jsx)(I,{deleteButtonLabel:Ae.deleteButtonLabel,disabled:f!=null?f:!1,label:Ae.label,onDeleteButtonClick:function(){return Fe(Ae.value)}},Ae.value)})}),(0,B.jsx)("button",{"aria-label":d.deleteButtonLabel,className:Q()["select--multiple__field__delete-button"],disabled:!K.length||f,onClick:function(){return ao()},children:(0,B.jsx)("span",{className:Q()["select--multiple__field__delete-button__cross"]})})]}),(0,B.jsxs)("button",{"aria-controls":io,"aria-expanded":Me,"aria-label":G,className:Q().select__field__button,disabled:f,id:Ve,onBlur:function(){return Be(!1)},onClick:function(){return Be(!Me)},onKeyDown:function(Le){Object.values(v).includes(Le.key)&&(Le.preventDefault(),Be(!0))},role:"combobox",value:$?K:ve,children:[!$&&(0,B.jsx)("span",{className:Q()["select--single__field__value"],children:qe(ve).label}),(0,B.jsx)("span",{className:Q()["select__field__arrow-wrapper"],children:(0,B.jsx)("span",{className:Q()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!R,label:H?void 0:G,noFocusEffect:$,noPadding:!0,readOnly:!1}),(0,B.jsx)("ul",{className:Q()["select__option-list"],id:io,ref:Je,role:"listbox",style:{width:uo},children:Y.map(function(Se){return(0,B.jsx)("li",{"aria-selected":ro(Se.value),className:h()(Q()["select__option-list__option"],ro(Se.value)&&Q()["select__option-list__option--selected"],$&&so(Se.value)&&Q()["select--multiple__option-list__option--focused"]),onClick:function(){return eo(Se.value)},onMouseDown:function(Te){return Te.preventDefault()},onKeyDown:function(Te){return Te.preventDefault()},role:"option",value:Se.value,children:Se.label},Se.value)})})]})};T.displayName="Select";try{T.displayName="Select",T.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:T.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(m){}},"./src/components/SvgIcon/index.ts":(r,t,e)=>{"use strict";e.d(t,{l:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),_=["svgIconComponent"];function V(w,L){if(w==null)return{};var C=U(w,L),A,y;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(w);for(y=0;y<P.length;y++)A=P[y],!(L.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(w,A)||(C[A]=w[A]))}return C}function U(w,L){if(w==null)return{};var C={},A=Object.keys(w),y,P;for(P=0;P<A.length;P++)y=A[P],!(L.indexOf(y)>=0)&&(C[y]=w[y]);return C}var j=function(L){var C=L.svgIconComponent,A=V(L,_);return(0,a.isValidElement)(C)?(0,a.cloneElement)(C,Object.assign({},A)):null};try{j.displayName="SvgIcon",j.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:j.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(w){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(r,t,e)=>{"use strict";e.d(t,{b:()=>A,f:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),V=e("./node_modules/react/index.js"),U=e("./node_modules/classnames/index.js"),j=e.n(U),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),L=e.n(w),C=e("./node_modules/react/jsx-runtime.js"),A;(function(P){P.Xsmall="xsmall",P.Small="small"})(A||(A={}));var y=function(p){var S=p.checked,E=p.children,u=p.className,i=p.description,c=p.disabled,O=p.hideInput,h=p.hideLabel,D=p.inputId,x=p.label,g=p.name,M=p.onChange,B=p.size,I=p.type,z=p.value,oe=(0,V.useId)(),Q=D!=null?D:"input-"+oe,ae=x?Q+"-label":void 0,N=i?Q+"-description":void 0,ye=x&&!h;return(0,C.jsxs)("label",{className:j()(L().template,L()["template--"+B],c&&L()["template--disabled"],u),htmlFor:D,children:[!O&&(0,C.jsxs)("span",{className:L()["template__input-wrapper"],children:[(0,C.jsx)("input",{"aria-describedby":N,"aria-label":ye?void 0:x,"aria-labelledby":ye?ae:void 0,checked:S!=null?S:!1,className:L()["template__input-wrapper__input"],disabled:c,id:Q,name:g,onChange:c?void 0:M,type:I,value:z}),(0,C.jsx)("span",{className:L()["template__input-wrapper__visible-box"],children:E})]}),(ye||i)&&(0,C.jsxs)("span",{className:L()["template__label-and-description"],children:[ye&&(0,C.jsx)("span",{className:L()["template__label-and-description__label"],id:ae,children:x}),i&&(0,C.jsx)("span",{className:L()["template__label-and-description__description"],id:N,children:i})]})]})};y.displayName="CheckboxRadioTemplate";try{y.displayName="CheckboxRadioTemplate",y.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:y.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(P){}},"./src/components/_InputWrapper/index.ts":(r,t,e)=>{"use strict";e.d(t,{SP:()=>E,Hx:()=>a});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l;(function(u){u.Default="default",u.Error="error",u.Disabled="disabled",u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var a;(function(u){u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var _;(function(u){u.None="none",u.Error="error",u.Search="search"})(_||(_={}));var V=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=i.readOnly,O=c===void 0?!1:c,h=i.disabled,D=h===void 0?!1:h,x=i.isValid,g=x===void 0?!0:x,M=i.isSearch,B=M===void 0?!1:M,I=_.None;return B&&(I=_.Search),D?{variant:l.Disabled,iconVariant:I}:O===!0||O===a.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:I}:O===a.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:I}:g===!1?{variant:l.Error,iconVariant:_.Error}:{variant:l.Default,iconVariant:I}},U;function j(){return j=Object.assign?Object.assign.bind():function(u){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var O in c)Object.prototype.hasOwnProperty.call(c,O)&&(u[O]=c[O])}return u},j.apply(this,arguments)}var w=function(i){return s.createElement("svg",j({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),U||(U=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},L;function C(){return C=Object.assign?Object.assign.bind():function(u){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var O in c)Object.prototype.hasOwnProperty.call(c,O)&&(u[O]=c[O])}return u},C.apply(this,arguments)}var A=function(i){return s.createElement("svg",C({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),L||(L=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},y=e("./src/components/_InputWrapper/InputWrapper.module.css"),P=e.n(y),p=e("./node_modules/react/jsx-runtime.js"),S=function(i){var c=i.variant,O=i.disabled,h=O===void 0?!1:O;if(c===_.Error)return(0,p.jsx)("div",{className:P().InputWrapper__icon,children:(0,p.jsx)(w,{"data-testid":"input-icon-error"})});if(c===_.Search){var D;return(0,p.jsx)("div",{className:n()(P().InputWrapper__icon,(D={},D[P()["InputWrapper__icon--disabled"]]=h,D)),children:(0,p.jsx)(A,{"data-testid":"input-icon-search"})})}return null};try{S.displayName="Icon",S.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:S.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(u){}var E=function(i){var c,O=i.isValid,h=O===void 0?!0:O,D=i.disabled,x=D===void 0?!1:D,g=i.readOnly,M=g===void 0?!1:g,B=i.isSearch,I=B===void 0?!1:B,z=i.label,oe=i.inputId,Q=i.inputRenderer,ae=i.noFocusEffect,N=i.noPadding,ye=(0,s.useId)(),me=oe!=null?oe:ye,ie=V({readOnly:M,disabled:x,isValid:h,isSearch:I}),_e=ie.variant,ne=ie.iconVariant;return(0,p.jsxs)(p.Fragment,{children:[z&&(0,p.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(P().InputWrapper__label),htmlFor:me,children:z}),(0,p.jsxs)("div",{"data-testid":"InputWrapper",className:n()(P().InputWrapper,P()["InputWrapper--"+_e],(c={},c[P()["InputWrapper--search"]]=I,c[P()["InputWrapper--with-focus-effect"]]=!ae,c[P()["InputWrapper--with-padding"]]=!N,c)),children:[(0,p.jsx)(S,{variant:ne,disabled:x}),Q({className:P().InputWrapper__field,inputId:me,variant:_e})]})]})};try{E.displayName="InputWrapper",E.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:E.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(u){}},"./src/hooks/index.ts":(r,t,e)=>{"use strict";e.d(t,{OR:()=>o,OG:()=>n,D9:()=>l,PQ:()=>a});var s=e("./node_modules/react/index.js");function o(_,V){(0,s.useEffect)(function(){return document.addEventListener(_,V),function(){return document.removeEventListener(_,V)}},[_,V])}function n(_,V){(0,s.useEffect)(function(){var U=function(w){w.key===_&&V()};return document.addEventListener("keydown",U),function(){return document.removeEventListener("keydown",U)}},[_,V])}function l(_){var V=(0,s.useRef)();return(0,s.useEffect)(function(){V.current=_},[_]),V.current}var a=function(V,U){var j=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(j.current)j.current=!1;else return V()},U)}},"./src/utils/arrayUtils.ts":(r,t,e)=>{"use strict";e.d(t,{cO:()=>L,zb:()=>A});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),_=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e.n(j);function L(y,P){if(y===P)return!0;if(y===void 0||P===void 0||y.length!==P.length)return!1;for(var p in y)if(y[p]!==P[p])return!1;return!0}function C(y){return y[y.length-1]}function A(y){return y.length===new Set(y).size}},"./storybook-init-framework-entry.js":(r,t,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(r,t,e)=>{"use strict";e.d(t,{r:()=>_});var s=e("./node_modules/react/index.js"),o,n,l;function a(){return a=Object.assign?Object.assign.bind():function(V){for(var U=1;U<arguments.length;U++){var j=arguments[U];for(var w in j)Object.prototype.hasOwnProperty.call(j,w)&&(V[w]=j[w])}return V},a.apply(this,arguments)}var _=function(U){return s.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},U),o||(o=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),a.locals={accordion:"accordion---oQBwV"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),a.locals={container:"container---_OBRF"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion-header---NEcyL {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .accordion-header__subtitle---GFfGU {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .accordion-header__subtitle---GFfGU {
    opacity: 60%;
    font-size: 1.4rem;
    display: block;
  }
  .accordion-header--subtitle---tAtju {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 0.3rem;
  }
}

.accordion-header__title---BmsGI {
  --component-accordion_header_title-spacing-margin_left: 2.5rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.accordion-header__actions---qbcYv {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0 0.3rem;
}
`,""]),a.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),a.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),a.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
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
`,""]),a.locals={};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.button---AisLs {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button---AisLs:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.button---AisLs:focus:not(:focus-visible) {
  outline: none;
}

.button---AisLs:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.icon---eojMy {
  height: var(--icon-size);
  width: var(--icon-size);
}

.button--small---WfL7y {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.button--medium---FMlU7 {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.button--large---ajmmm {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.button--full-width---HGVii {
  width: 100%;
}

.button--dashed-border---JV4fE {
  border-style: dashed;
}

.button--only-icon---tO03o {
  padding: 0.5rem !important;
}

.button--filled---o9MD5 {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.button--outline---zP3gL {
  border-radius: 3px;
  background-color: transparent;
}

.button--quiet---OUUmK {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.button--filled--primary---OcTdh {
  background: var(--component-button-filled-primary-color-background-default);
}

.button--filled--primary---OcTdh:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.button--filled--primary---OcTdh:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.button--filled--secondary---YmpeA {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.button--filled--secondary---YmpeA:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.button--filled--secondary---YmpeA:not(:disabled):active {
  background: var(--colors-blue-950);
}

.button--filled--success---BK9MZ {
  background: var(--component-button-filled-success-color-background-default);
}

.button--filled--success---BK9MZ:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.button--filled--success---BK9MZ:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.button--filled--danger---YsMfL {
  background: var(--component-button-filled-danger-color-background-default);
}

.button--filled--danger---YsMfL:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.button--filled--danger---YsMfL:not(:disabled):active {
  background: var(--colors-red-800);
}

.button--filled--inverted---r1nYK {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.button--filled--inverted---r1nYK:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.button--filled--inverted---r1nYK:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.button--filled--inverted---r1nYK:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.button--outline--primary---gS4I3 {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.button--outline--primary---gS4I3:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.button--outline--primary---gS4I3:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.button--outline--secondary---AmzAA {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.button--outline--secondary---AmzAA:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.button--outline--secondary---AmzAA:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.button--outline--success---NWZPV {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.button--outline--success---NWZPV:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.button--outline--success---NWZPV:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.button--outline--danger---Cq5Wl {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.button--outline--danger---Cq5Wl:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.button--outline--danger---Cq5Wl:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.button--outline--inverted---GRPEJ {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.button--outline--inverted---GRPEJ:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.button--outline--inverted---GRPEJ:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.button--outline--inverted---GRPEJ:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.button--quiet--primary---ySkfc {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.button--quiet--primary---ySkfc:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.button--quiet--primary---ySkfc:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.button--quiet--secondary---bY9dk {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.button--quiet--secondary---bY9dk:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.button--quiet--secondary---bY9dk:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.button--quiet--success---viNz9 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.button--quiet--success---viNz9:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.button--quiet--success---viNz9:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.button--quiet--danger---bNxIz {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.button--quiet--danger---bNxIz:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.button--quiet--danger---bNxIz:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.button--quiet--inverted---qCJLy {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.button--quiet--inverted---qCJLy:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.button--quiet--inverted---qCJLy:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.button--quiet--inverted---qCJLy:focus-visible {
  outline-color: var(--colors-white);
}
`,""]),a.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.checkbox---sy8lK {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.checkbox--compact---SWP0L {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.checkbox--error---dOSpU {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.checkbox--checked---xvne_ {
  --checkbox-checkmark-display: inline-block;
}

.checkbox--checked---xvne_:not(.checkbox--disabled---Q4bxl) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.checkbox---sy8lK:not(.checkbox--disabled---Q4bxl, .checkbox--checked---xvne_):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.checkbox---sy8lK:not(.checkbox--disabled---Q4bxl, .checkbox--error---dOSpU, .checkbox--checked---xvne_):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.checkbox--disabled---Q4bxl.checkbox--checked---xvne_ {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.checkbox--read-only---PrpNx {
  --cursor: auto;
}

.visible-box---_ibVj {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.visible-box__checkmark---AB9zK {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`,""]),a.locals={checkbox:"checkbox---sy8lK","checkbox--compact":"checkbox--compact---SWP0L","checkbox--error":"checkbox--error---dOSpU","checkbox--checked":"checkbox--checked---xvne_","checkbox--disabled":"checkbox--disabled---Q4bxl","checkbox--read-only":"checkbox--read-only---PrpNx","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.checkbox-group---Ws6hw {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.checkbox-group--compact---yT3vB {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.checkbox-group--vertical---qFiAe {
  flex-direction: column;
}

.checkbox-group--horizontal---sbdQV {
  flex-direction: row;
}
`,""]),a.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group--vertical":"checkbox-group--vertical---qFiAe","checkbox-group--horizontal":"checkbox-group--horizontal---sbdQV"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.svg---cRnN3 {
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
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]),a.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),a.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.field-set---WtvOy {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-small);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.field-set--xsmall---ApLMF {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xsmall);
}

.field-set---WtvOy:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.field-set---WtvOy:disabled * {
  opacity: 1;
}

.field-set__legend---rtmfi {
  font-weight: bold;
  padding: 0;
}

.field-set__description---wR0Pc {
  color: var(--description-color);
  margin: 0;
}

.field-set__legend---rtmfi + .field-set__description---wR0Pc {
  margin-top: var(--description-margin_top);
}

.field-set__content---JLfVl:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.field-set__error-message---RL5SI {
  margin-top: var(--error_message-margin_top);
}
`,""]),a.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.list---Xw1lu {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.list--solid---neKiv {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.list--dashed---rXI_D {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`,""]),a.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),a.locals={container:"container---sf7W5"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.list-item---aLk6z {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.list-item--solid---Rnw0X {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.list-item--dashed---EbBKz {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`,""]),a.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),a.locals={map:"map---Z2PfI"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),a.locals={page:"page---LVMNK"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),a.locals={"page-content":"page-content---ZIuS7"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page-header---bt29G {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
}

.page-header--primary---tMRjo {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.page-header--success---ZUxkH {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

@media only screen and (min-width: 0) {
  .page-header---bt29G {
    --page_header-title-font-size: 18px;
    --page-header-height: 72px;
  }
}

@media only screen and (min-width: 768px) {
  .page-header---bt29G {
    --page_header-title-font-size: 28px;
    --page-header-height: 96px;
  }
}
`,""]),a.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page-icon---mvZDR {
  display: flex;
  justify-content: center;
  flex-direction: column;
  fill: currentColor;
}

@media only screen and (min-width: 0) {
  .page-icon__element---CsGkI {
    width: 28px;
    height: 28px;
  }
}

@media only screen and (min-width: 768px) {
  .page-icon__element---CsGkI {
    width: 40px;
    height: 40px;
  }
}
`,""]),a.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.pagination-icon---iNvyI {
  fill: rgb(0, 0, 0);
}

.pagination-icon---iNvyI:not(:last-child) {
  margin-right: 20px;
}

.pagination-icon---iNvyI:hover {
  cursor: pointer;
}

.pagination-icon--disabled---uO3Mm {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.pagination-wrapper---v7KJE {
  display: flex;
  align-items: center;
  justify-content: right;
}

.icon-button---AiFnU {
  background-color: transparent;
  border: none;
}
`,""]),a.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE","icon-button":"icon-button---AiFnU"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .panel---Cn6JI {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-xs);
    --panel-header-font_size: var(--component-panel-font_size-header-xs);
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-md);
    --panel-header-font_size: var(--component-panel-font_size-header-md);
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-lg);
    --panel-header-font_size: var(--component-panel-font_size-header-lg);
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-xl);
    --panel-header-font_size: var(--component-panel-font_size-header-xl);
  }
}

.panel---Cn6JI {
  width: 100%;
}

.panel__pointer---bc7XJ {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.panel__pointer-position---WhWRF {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
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

.panel__content-wrapper--error---dJU5t,
.panel__pointer--error---K6h4Z {
  background-color: var(--colors-red-300);
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
  gap: var(--component-panel-space-text_group-gap-xs);
}

.panel__header---kehDh {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.panel__body---NWoqK {
  font-size: var(--panel-body-font_size);
}
`,""]),a.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),a.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.radio---S0hlk {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.radio--small---uN_5E {
  --radio-size: var(--component-checkbox-size-width-small);
}

.radio--xsmall---tgsCS {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.radio--error---tU7TP {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.radio--checked---b1pmT {
  --radio-checkmark-display: inline-block;
}

.radio--checked---b1pmT:not(.radio--disabled---adqq7, .radio--error---tU7TP) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.radio---S0hlk:not(.radio--disabled---adqq7, .radio--checked---b1pmT):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.radio---S0hlk:not(.radio--disabled---adqq7, .radio--error---tU7TP, .radio--checked---b1pmT):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.radio--disabled---adqq7.radio--checked---b1pmT {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.visible-button---PkY72 {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.visible-button__checkmark---OzITh {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`,""]),a.locals={radio:"radio---S0hlk","radio--small":"radio--small---uN_5E","radio--xsmall":"radio--xsmall---tgsCS","radio--error":"radio--error---tU7TP","radio--checked":"radio--checked---b1pmT","radio--disabled":"radio--disabled---adqq7","visible-button":"visible-button---PkY72","visible-button__checkmark":"visible-button__checkmark---OzITh"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.radio-group---BsvK3 {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.radio-group--xsmall---x_9yu {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.radio-group--small---GIoae {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.radio-group--vertical---YkxyR {
  flex-direction: column;
}

.radio-group--horizontal---T4MpH {
  flex-direction: row;
}
`,""]),a.locals={"radio-group":"radio-group---BsvK3","radio-group--xsmall":"radio-group--xsmall---x_9yu","radio-group--small":"radio-group--small---GIoae","radio-group--vertical":"radio-group--vertical---YkxyR","radio-group--horizontal":"radio-group--horizontal---T4MpH"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.multi-select-item---KQ3Ws {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.multi-select-item__delete-button---IfUL7 {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.multi-select-item__delete-button---IfUL7:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.multi-select-item__delete-button---IfUL7:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.multi-select-item__delete-button__cross---q9XTV {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`,""]),a.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.select---eatbZ {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
}

.select--disabled---Q2nU6 {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.select--expanded---SqXv9 {
  --delete_cross-color: var(--delete_cross-color-active);
}

.select---eatbZ:not(.select--expanded---SqXv9) .select__option-list---cvauP {
  display: none;
}

.select--using-keyboard---p5TVL {
  --option-outline-focus: var(--focus_visible-outline);
}

.select__field__button---ZxHUH {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.select__field---kkk9_ {
  display: inline-flex;
  padding: 0;
}

.select--multiple---S8dty .select__field---kkk9_,
.select--single---dK6ee .select__field__button---ZxHUH {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.select--single__field__value---r8Had {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.select--multiple__field__values---j3h_y {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.select--multiple---S8dty .select__field__button---ZxHUH:focus-visible {
  outline: var(--focus_visible-outline);
}

.select__field__arrow-wrapper---Pb6zM {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.select__field__arrow-wrapper__arrow---GuFvQ {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.select--multiple__field__delete-button---fQeKk {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.select--multiple__field__delete-button---fQeKk:disabled {
  cursor: auto;
}

.select--multiple__field__delete-button---fQeKk:focus-visible {
  outline: var(--focus_visible-outline);
}

.select--multiple__field__delete-button---fQeKk:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.select--multiple__field__delete-button---fQeKk:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.select--multiple__field__delete-button__cross---SgnN0 {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.select__option-list---cvauP {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.select__option-list__option---poz8e {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select__option-list__option---poz8e:hover {
  background-color: var(--option-background_color-hover);
}

.select__option-list__option--selected---cAaDa {
  background-color: var(--option-background_color-selected);
}

.select__option-list__option--selected---cAaDa:hover {
  background-color: var(--option-background_color-selected-hover);
}

.select--multiple__option-list__option--focused---rgM72 {
  outline: var(--option-outline-focus);
}
`,""]),a.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
`,""]),a.locals={};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),a.locals={};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),a.locals={TableBody:"TableBody---cpO70"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.header-table-cell---zvgNX {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.header-table-cell-radiobutton---raQCE {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.body-table-cell---cCxyS {
  text-align: left;
  padding: 8px;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.body-table-cell-radiobutton---aoOCt {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.image---Jz7hI {
  max-width: 45px;
  max-height: 45px;
}

.input---jn1Id {
  margin: 0px 15px 0px 15px;
}
.radio-button---Bsw2x {
  margin: 0px 0px 0px 15px;
}

.container-sortable---vaStk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.icon---vY3zZ {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.icon-desc---YqUWK {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.icon-asc---T8x5u {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}
`,""]),a.locals={"header-table-cell":"header-table-cell---zvgNX","header-table-cell-radiobutton":"header-table-cell-radiobutton---raQCE","body-table-cell":"body-table-cell---cCxyS","body-table-cell-radiobutton":"body-table-cell-radiobutton---aoOCt",image:"image---Jz7hI",input:"input---jn1Id","radio-button":"radio-button---Bsw2x","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-footer":"table-footer---fVxHQ"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-header":"table-header---DnjKf"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TableRow---XoYrl {
  width: 1056px;
  height: 60px;
}

.table-row--selected---jiOF3 {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.table-row--body---wY2LD:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`,""]),a.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.tabs---dxRcK {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.tabs__tablist---_oC5W {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
}

.tabs__tablist__tab---n25P8 {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tabs__tablist__tab--selected---kffoD {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.tabs__tablist__tab---n25P8:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.tabs__tablist__tab---n25P8:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.tabs__divider---hR5Rm {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
  z-index: -1;
}

.tabs__tabpanel---FepKw {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`,""]),a.locals={tabs:"tabs---dxRcK",tabs__tablist:"tabs__tablist---_oC5W",tabs__tablist__tab:"tabs__tablist__tab---n25P8","tabs__tablist__tab--selected":"tabs__tablist__tab--selected---kffoD",tabs__divider:"tabs__divider---hR5Rm",tabs__tabpanel:"tabs__tabpanel---FepKw"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TextArea---kkLod {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-normal);
}

.TextArea--resize-none---EQA3f {
  resize: none;
}

.TextArea--resize-both---cN8gI {
  resize: both;
}

.TextArea--resize-horizontal---p__Ac {
  resize: horizontal;
}

.TextArea--resize-vertical---xcxkK {
  resize: vertical;
}
`,""]),a.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .toggle-button---VbrSe {
    --toggle_button-font_size: var(--component-toggle_button-font_size-xs);
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .toggle-button---VbrSe {
    --toggle_button-font_size: var(--component-toggle_button-font_size-md);
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .toggle-button---VbrSe {
    --toggle_button-font_size: var(--component-toggle_button-font_size-lg);
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .toggle-button---VbrSe {
    --toggle_button-font_size: var(--component-toggle_button-font_size-xl);
  }
}

.toggle-button---VbrSe {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--toggle_button-font_size);
  height: 100%;
}

.toggle-button--selected---eDtcc {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.toggle-button---VbrSe:not(.toggle-button--selected---eDtcc):hover {
  background-color: var(--colors-blue-300);
}
`,""]),a.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.toggle-button-group---xdsvq {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .toggle-button-group---xdsvq {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .toggle-button-group---xdsvq {
    --toggle-button-group-width: auto;
  }
}
`,""]),a.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`/* breakpoints-xs */
@media only screen and (min-width: 0px) {
  .container---_zb20 {
    width: 80vw;
  }
}

/* breakpoints for m and above */
@media only screen and (min-width: 768px) {
  .container---_zb20 {
    width: 350px;
  }
}
`,""]),a.locals={container:"container---_zb20"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.template---CPXze {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.template--xsmall---mGweJ {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xsmall);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.template--small---Ctnml {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-small);
  --gap: var(--component-checkbox-space-gap-small);
}

.template---CPXze:not(.template--disabled---ADFDz):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.template--disabled---ADFDz {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.template__input-wrapper---dLR0V {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.template__input-wrapper__input---zhrwu {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.template__input-wrapper__visible-box---fa020 {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.template__label-and-description---z1Efs {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.template__label-and-description__label---Z3XLk {
  color: var(--label-color);
}

.template__label-and-description__description---pF8QG {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .template---CPXze:not(.template--disabled---ADFDz):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.template---CPXze:not(.template--disabled---ADFDz):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`,""]),a.locals={template:"template---CPXze","template--xsmall":"template--xsmall---mGweJ","template--small":"template--small---Ctnml","template--disabled":"template--disabled---ADFDz","template__input-wrapper":"template__input-wrapper---dLR0V","template__input-wrapper__input":"template__input-wrapper__input---zhrwu","template__input-wrapper__visible-box":"template__input-wrapper__visible-box---fa020","template__label-and-description":"template__label-and-description---z1Efs","template__label-and-description__label":"template__label-and-description__label---Z3XLk","template__label-and-description__description":"template__label-and-description__description---pF8QG"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.InputWrapper---J_oif {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper--with-focus-effect---DMF5F:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper--default---IokYk:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper--error---iu8HJ {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper--error---iu8HJ:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper--disabled---V_5HB {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper--readonly-info---AizuC {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper--readonly-confirm---DBa44 {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper--search---CvAH7 {
  flex-direction: row-reverse;
}

.InputWrapper--with-padding---AxmLR {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper__field---Asejt {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper__icon---sQ_FI {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper__icon--disabled---ES3Mt {
  opacity: 60%;
}

.InputWrapper__label---N628B {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`,""]),a.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const _=a},"./src/components/Accordion/Accordion.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Button/Button.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Map/Map.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/Page.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/Select.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(r,t,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(r,t,e)=>{"use strict";r=e.nmd(r);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],r,!1)}},r=>{var t=s=>r(r.s=s);r.O(0,[436],()=>(t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),t("./storybook-init-framework-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),t("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),t("./.storybook/preview.js-generated-config-entry.js"),t("./generated-stories-entry.cjs")));var e=r.O()}]);
