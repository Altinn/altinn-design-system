(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(E,o,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function k(i){var d=n(i);return e(d)}function n(i){if(!e.o(t,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return t[i]}k.keys=function(){return Object.keys(t)},k.resolve=n,E.exports=k,k.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>c,default:()=>h});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),ne=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),G=e.n(Q),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(S),U=e("./node_modules/react/index.js"),v=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=["components"];function f(){return f=Object.assign?Object.assign.bind():function(C){for(var M=1;M<arguments.length;M++){var p=arguments[M];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(C[u]=p[u])}return C},f.apply(this,arguments)}function y(C,M){if(C==null)return{};var p=O(C,M),u,B;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(C);for(B=0;B<A.length;B++)u=A[B],!(M.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,u)||(p[u]=C[u]))}return p}function O(C,M){if(C==null)return{};var p={},u=Object.keys(C),B,A;for(A=0;A<u.length;A++)B=u[A],!(M.indexOf(B)>=0)&&(p[B]=C[B]);return p}var x={},b="wrapper";function m(C){var M=C.components,p=y(C,a);return(0,v.mdx)(b,f({},x,p,{components:M,mdxType:"MDXLayout"}),(0,v.mdx)(D.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,v.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,v.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,v.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,v.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,v.mdx)("h3",{id:"npm"},"NPM"),(0,v.mdx)("pre",null,(0,v.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,v.mdx)("h3",{id:"yarn"},"Yarn"),(0,v.mdx)("pre",null,(0,v.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,v.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,v.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,v.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,v.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,v.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,v.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,v.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,v.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,v.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,v.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,v.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,v.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,v.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,v.mdx)("ul",null,(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}m.displayName="MDXContent",m.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var j={title:"Introduksjon",includeStories:["__page"]},l={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,v.mdx)(D.aT,{mdxStoryNameToKey:l,mdxComponentAnnotations:j},(0,v.mdx)(m,null))}});const h=j;var R=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>c,default:()=>h});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),ne=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),G=e.n(Q),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(S),U=e("./node_modules/react/index.js"),v=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=["components"];function f(){return f=Object.assign?Object.assign.bind():function(C){for(var M=1;M<arguments.length;M++){var p=arguments[M];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(C[u]=p[u])}return C},f.apply(this,arguments)}function y(C,M){if(C==null)return{};var p=O(C,M),u,B;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(C);for(B=0;B<A.length;B++)u=A[B],!(M.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,u)||(p[u]=C[u]))}return p}function O(C,M){if(C==null)return{};var p={},u=Object.keys(C),B,A;for(A=0;A<u.length;A++)B=u[A],!(M.indexOf(B)>=0)&&(p[B]=C[B]);return p}var x={},b="wrapper";function m(C){var M=C.components,p=y(C,a);return(0,v.mdx)(b,f({},x,p,{components:M,mdxType:"MDXLayout"}),(0,v.mdx)(D.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,v.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,v.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,v.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,v.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,v.mdx)("pre",null,(0,v.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}m.displayName="MDXContent",m.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var j={title:"Components/AppWrapper",includeStories:["__page"]},l={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,v.mdx)(D.aT,{mdxStoryNameToKey:l,mdxComponentAnnotations:j},(0,v.mdx)(m,null))}});const h=j;var R=["__page"]},"./.storybook/StoryPage.tsx":(E,o,e)=>{"use strict";e.d(o,{Y:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),ne=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=e.n(ne),G=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),S={};S.insert="head",S.singleton=!1;var X=Q()(G.Z,S);const U=G.Z.locals||{};var v=e("./node_modules/react/jsx-runtime.js"),D=function(b){var m=b.children;return(0,v.jsx)("div",{children:m})};D.displayName="AppWrapper";try{D.displayName="AppWrapper",D.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:D.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(x){}var a=function(b){var m=b.children;return(0,v.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,v.jsxs)("p",{style:{margin:"0"},children:[(0,v.jsx)("strong",{children:"Deprecated:"})," ",m]})})};a.displayName="DeprecationWarning";var f=null;try{a.displayName="DeprecationWarning",a.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:a.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(x){}var y=function(b){var m=b.description,c=b.deprecationWarning;return(0,v.jsxs)(D,{children:[(0,v.jsx)(i.Dx,{}),c&&(0,v.jsx)(a,{children:c}),(0,v.jsx)(i.dk,{children:m}),(0,v.jsx)(i.fQ,{includePrimary:!0}),(0,v.jsx)(i.X6,{children:"Props"}),(0,v.jsx)(i.$4,{story:i.Uh})]})};y.displayName="StoryPage";var O=null;try{y.displayName="StoryPage",y.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:y.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(x){}},"./.storybook/preview.js-generated-config-entry.js":(E,o,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>f,parameters:()=>a});var k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),U=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e("./node_modules/@storybook/theming/dist/esm/index.js"),a={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},D.np.dark),light:Object.assign({},D.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},f=["parameters"],y=e("./node_modules/console-browserify/index.js");function O(m,c){var j=Object.keys(m);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(m);c&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(m,h).enumerable})),j.push.apply(j,l)}return j}function x(m){for(var c=1;c<arguments.length;c++){var j=arguments[c]!=null?arguments[c]:{};c%2?O(Object(j),!0).forEach(function(l){b(m,l,j[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(j)):O(Object(j)).forEach(function(l){Object.defineProperty(m,l,Object.getOwnPropertyDescriptor(j,l))})}return m}function b(m,c,j){return c in m?Object.defineProperty(m,c,{value:j,enumerable:!0,configurable:!0,writable:!0}):m[c]=j,m}Object.keys(t).forEach(function(m){var c=t[m];switch(m){case"args":return(0,U.uc)(c);case"argTypes":return(0,U.v9)(c);case"decorators":return c.forEach(function(l){return(0,U.$9)(l,!1)});case"loaders":return c.forEach(function(l){return(0,U.HZ)(l,!1)});case"parameters":return(0,U.h1)(x({},c),!1);case"argTypesEnhancers":return c.forEach(function(l){return(0,U.My)(l)});case"argsEnhancers":return c.forEach(function(l){return(0,U._C)(l)});case"render":return(0,U.$P)(c);case"globals":case"globalTypes":{var j={};return j[m]=c,(0,U.h1)(j,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return y.log(m+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>we,__namedExportsOrder:()=>le,default:()=>De});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),b=e("./.storybook/StoryPage.tsx"),m=e("./src/components/Button/index.ts"),c;(function(K){K.Primary="primary",K.Secondary="secondary"})(c||(c={}));var j=(0,a.createContext)(void 0),l=function(){var W=(0,a.useContext)(j);if(W===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return W},h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(h),C=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),M={};M.insert="head",M.singleton=!1;var p=R()(C.Z,M);const u=C.Z.locals||{};var B=e("./node_modules/react/jsx-runtime.js"),A=function(W){var I=W.children,ye=W.open,he=W.onClick,Te=W.iconVariant,je=Te===void 0?c.Primary:Te,Le=(0,a.useId)(),Ne=(0,a.useId)();return(0,B.jsx)("div",{className:u.accordion,children:(0,B.jsx)(j.Provider,{value:{onClick:he,open:ye,headerId:Le,contentId:Ne,iconVariant:je},children:I})})};A.displayName="Accordion";const z=null;try{A.displayName="Accordion",A.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:A.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(K){}var H=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),ae={};ae.insert="head",ae.singleton=!1;var pe=R()(H.Z,ae);const ue=H.Z.locals||{};var me=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),ie={};ie.insert="head",ie.singleton=!1;var J=R()(me.Z,ie);const g=me.Z.locals||{};var V;function Y(){return Y=Object.assign?Object.assign.bind():function(K){for(var W=1;W<arguments.length;W++){var I=arguments[W];for(var ye in I)Object.prototype.hasOwnProperty.call(I,ye)&&(K[ye]=I[ye])}return K},Y.apply(this,arguments)}var w=function(W){return a.createElement("svg",Y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W),V||(V=a.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},q;function _e(){return _e=Object.assign?Object.assign.bind():function(K){for(var W=1;W<arguments.length;W++){var I=arguments[W];for(var ye in I)Object.prototype.hasOwnProperty.call(I,ye)&&(K[ye]=I[ye])}return K},_e.apply(this,arguments)}var ce=function(W){return a.createElement("svg",_e({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W),q||(q=a.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},$=function(){var W,I,ye=l(),he=ye.onClick,Te=ye.open,je=ye.iconVariant,Le=[g["accordion-icon"],(W={},W[g["accordion-icon--opened"]]=Te,W)],Ne=(I={height:20,width:20,className:x()(Le)},I["data-testid"]=je,I.onClick=he,I);switch(je){case c.Primary:return(0,B.jsx)(w,Object.assign({},Ne));case c.Secondary:return(0,B.jsx)(ce,Object.assign({},Ne))}};const P=null;var _=function(W){var I,ye=W.children,he=W.actions,Te=W.subtitle,je=l(),Le=je.onClick,Ne=je.open,Qe=je.headerId,We=je.contentId;return(0,B.jsxs)("div",{className:x()(ue["accordion-header"],(I={},I[ue["accordion-header--subtitle"]]=Te,I)),children:[(0,B.jsx)($,{}),(0,B.jsxs)("button",{className:x()(ue["accordion-header__title"]),"aria-expanded":Ne,type:"button",onClick:Le,id:Qe,"aria-controls":We,children:[ye,(Te==null?void 0:Te.length)&&(0,B.jsx)("div",{"data-testid":"accordion-header-subtitle",className:x()(ue["accordion-header__subtitle"]),children:Te})]}),(0,B.jsx)("div",{className:x()(ue["accordion-header__actions"]),children:he})]})};_.displayName="AccordionHeader";try{_.displayName="AccordionHeader",_.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:_.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(K){}var r=function(W){var I=W.children,ye=l(),he=ye.open,Te=ye.contentId,je=ye.headerId;return(0,B.jsx)("div",{children:he&&(0,B.jsx)("div",{"aria-expanded":he,id:Te,"aria-labelledby":je,children:I})})};r.displayName="AccordionContent";const s=null;try{r.displayName="AccordionContent",r.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:r.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(K){}var L=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css"),N={};N.insert="head",N.singleton=!1;var ge=R()(L.Z,N);const be=L.Z.locals||{};function oe(K,W){return Ee(K)||ve(K,W)||re(K,W)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(K,W){if(!!K){if(typeof K=="string")return fe(K,W);var I=Object.prototype.toString.call(K).slice(8,-1);if(I==="Object"&&K.constructor&&(I=K.constructor.name),I==="Map"||I==="Set")return Array.from(K);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return fe(K,W)}}function fe(K,W){(W==null||W>K.length)&&(W=K.length);for(var I=0,ye=new Array(W);I<W;I++)ye[I]=K[I];return ye}function ve(K,W){var I=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(I!=null){var ye=[],he=!0,Te=!1,je,Le;try{for(I=I.call(K);!(he=(je=I.next()).done)&&(ye.push(je.value),!(W&&ye.length===W));he=!0);}catch(Ne){Te=!0,Le=Ne}finally{try{!he&&I.return!=null&&I.return()}finally{if(Te)throw Le}}return ye}}function Ee(K){if(Array.isArray(K))return K}var Oe=`import React, { useState } from 'react';
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
          deprecationWarning={\`Use Accordion from @digdir/design-system-react instead.\`}
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
`,ke={Example:{startLoc:{col:51,line:50},endLoc:{col:1,line:120},startBody:{col:51,line:50},endBody:{col:1,line:120}}},Se="";const De={title:"Components/Accordion",component:A,subcomponents:{AccordionHeader:_,AccordionContent:r},parameters:{design:(0,f.vc)([{type:"figma",url:Se},{type:"link",url:Se}]),docs:{page:function(){return(0,B.jsx)(b.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Accordion from @digdir/design-system-react instead."})}}},args:{variant:c.Primary,useActions:!0,subtitle:"Subtitle"}};var Be=function(W){var I=(0,a.useState)(!1),ye=oe(I,2),he=ye[0],Te=ye[1],je=(0,a.useState)(!1),Le=oe(je,2),Ne=Le[0],Qe=Le[1],We=function(){Te(!he)},He=function(){Qe(!Ne)},qe="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",cn=(0,y.D8)(),rn=oe(cn,1),ln=rn[0].useActions,nn=(0,y.D8)(),dn=oe(nn,1),Fe=dn[0].subtitle,Ge=ln?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:"Example setup"}),(0,B.jsx)(m.zx,{variant:m.Wu.Filled,color:m.rp.Primary,size:m.qE.Small,children:"Separat knapp 1"}),(0,B.jsx)(m.zx,{variant:m.Wu.Outline,color:m.rp.Primary,size:m.qE.Small,children:"Separat knapp 2"})]}):void 0,an=Fe.length>0?Fe:void 0;return(0,B.jsxs)("div",{className:x()(be.container),children:[(0,B.jsxs)(A,{onClick:We,open:he,iconVariant:W.iconVariant,children:[(0,B.jsx)(_,{actions:Ge,subtitle:an,children:"Accordion 1"}),(0,B.jsx)(r,{children:qe})]}),(0,B.jsxs)(A,{onClick:He,open:Ne,iconVariant:W.iconVariant,children:[(0,B.jsx)(_,{actions:Ge,subtitle:an,children:"Accordion 2"}),(0,B.jsx)(r,{children:qe})]})]})};Be.displayName="Template";var we=Be.bind({});we.args={iconVariant:c.Primary,open:!1},we.argTypes={open:{control:!1},onClick:{control:!1}},we.parameters={docs:{description:{story:""}}},we.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},we.parameters);var le=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidth:()=>R,Primary:()=>x,Secondary:()=>b,SecondaryWithIconNoText:()=>h,Success:()=>m,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,__namedExportsOrder:()=>M,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),G=e("./.storybook/StoryPage.tsx"),S=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),U=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
          deprecationWarning={\`Use Button from @digdir/design-system-react instead.\`}
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},a="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const f={title:"Components/Button/Filled",component:S.zx,parameters:{design:(0,ne.vc)([{type:"figma",url:a},{type:"link",url:a}]),docs:{page:function(){return(0,U.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:S.Wu.Filled,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,U.jsx)(S.zx,Object.assign({},u))};y.displayName="Template";var O=function(u){return(0,U.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,U.jsx)(S.zx,Object.assign({},u))})};O.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:S.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:S.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:S.rp.Success,children:"Success button"},m.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:S.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:S.rp.Success,icon:(0,U.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:S.rp.Success,icon:(0,U.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:S.rp.Secondary,icon:(0,U.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=O.bind({});R.args={color:S.rp.Primary,icon:(0,U.jsx)(Q.Z,{}),fullWidth:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidthAndDashedBorder:()=>R,Primary:()=>x,Secondary:()=>b,SecondaryWithIconNoText:()=>h,Success:()=>m,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,__namedExportsOrder:()=>M,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),G=e("./.storybook/StoryPage.tsx"),S=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),U=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
          deprecationWarning={\`Use Button from @digdir/design-system-react instead.\`}
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidthAndDashedBorder:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},a="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const f={title:"Components/Button/Outline",component:S.zx,parameters:{design:(0,ne.vc)([{type:"figma",url:a},{type:"link",url:a}]),docs:{page:function(){return(0,U.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:S.Wu.Outline,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,U.jsx)(S.zx,Object.assign({},u))};y.displayName="Template";var O=function(u){return(0,U.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,U.jsx)(S.zx,Object.assign({},u))})};O.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:S.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:S.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:S.rp.Success,children:"Success button"},m.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:S.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:S.rp.Success,icon:(0,U.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:S.rp.Success,icon:(0,U.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:S.rp.Secondary,icon:(0,U.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=O.bind({});R.args={color:S.rp.Primary,icon:(0,U.jsx)(Q.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidth:()=>R,Primary:()=>x,Secondary:()=>b,Success:()=>m,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,SuccessWithIconNoText:()=>h,__namedExportsOrder:()=>M,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),G=e("./.storybook/StoryPage.tsx"),S=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),U=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
          deprecationWarning={\`Use Button from @digdir/design-system-react instead.\`}
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
`,D={Primary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Secondary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Success:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Danger:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithCustomIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIconNoText:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},FullWidth:{startLoc:{col:63,line:48},endLoc:{col:1,line:61},startBody:{col:63,line:48},endBody:{col:1,line:61}},Disabled:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}}},a="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const f={title:"Components/Button/Quiet",component:S.zx,parameters:{design:(0,ne.vc)([{type:"figma",url:a},{type:"link",url:a}]),docs:{page:function(){return(0,U.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:S.Wu.Quiet,size:S.qE.Small,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,U.jsx)(S.zx,Object.assign({},u))};y.displayName="Template";var O=function(u){return(0,U.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,U.jsx)(S.zx,Object.assign({},u))})};O.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:S.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:S.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:S.rp.Success,children:"Success button"},m.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:S.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:S.rp.Success,icon:(0,U.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:S.rp.Success,icon:(0,U.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:S.rp.Success,icon:(0,U.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=O.bind({});R.args={color:S.rp.Primary,icon:(0,U.jsx)(Q.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var M=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>x,Disabled:()=>b,Error:()=>O,LongText:()=>j,Normal:()=>f,ReadOnly:()=>m,WithDescription:()=>c,WithHiddenLabel:()=>l,__namedExportsOrder:()=>h,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/Checkbox/Checkbox.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
          deprecationWarning={\`Use Checkbox from @digdir/design-system-react instead.\`}
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
`,U={Normal:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},ReadOnly:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}}},v="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const D={title:"Components/Checkbox",component:G.X,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change.",deprecationWarning:"Use Checkbox from @digdir/design-system-react instead."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var a=function(C){return(0,S.jsx)(G.X,Object.assign({},C))};a.displayName="Template";var f=a.bind({});f.args={},f.parameters={docs:{description:{story:"This is the default checkbox."}}};var y=a.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"This is a checked checkbox."}}};var O=a.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var x=a.bind({});x.args={compact:!0},x.parameters={docs:{description:{story:"This is the compact checkbox."}}};var b=a.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var m=a.bind({});m.args={readOnly:!0},m.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var c=a.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a checkbox with description."}}};var j=a.bind({});j.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},j.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var l=a.bind({});l.args={hideLabel:!0},l.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},y.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},O.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},j.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},l.parameters);var h=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>L,Disabled:()=>ge,Error:()=>N,Horizontal:()=>s,Vertical:()=>r,__namedExportsOrder:()=>be,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./src/components/Checkbox/Checkbox.tsx"),R=e("./src/components/FieldSet/index.ts"),C=e("./src/utils/arrayUtils.ts"),M=e("./src/hooks/index.ts"),p=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(p),B=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css"),A={};A.insert="head",A.singleton=!1;var z=u()(B.Z,A);const H=B.Z.locals||{};var ae=e("./node_modules/react/jsx-runtime.js");function pe(oe,se){return g(oe)||J(oe,se)||me(oe,se)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(oe,se){if(!!oe){if(typeof oe=="string")return ie(oe,se);var re=Object.prototype.toString.call(oe).slice(8,-1);if(re==="Object"&&oe.constructor&&(re=oe.constructor.name),re==="Map"||re==="Set")return Array.from(oe);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return ie(oe,se)}}function ie(oe,se){(se==null||se>oe.length)&&(se=oe.length);for(var re=0,fe=new Array(se);re<se;re++)fe[re]=oe[re];return fe}function J(oe,se){var re=oe==null?null:typeof Symbol!="undefined"&&oe[Symbol.iterator]||oe["@@iterator"];if(re!=null){var fe=[],ve=!0,Ee=!1,Oe,ke;try{for(re=re.call(oe);!(ve=(Oe=re.next()).done)&&(fe.push(Oe.value),!(se&&fe.length===se));ve=!0);}catch(Se){Ee=!0,ke=Se}finally{try{!ve&&re.return!=null&&re.return()}finally{if(Ee)throw ke}}return fe}}function g(oe){if(Array.isArray(oe))return oe}var V;(function(oe){oe.Vertical="vertical",oe.Horizontal="horizontal"})(V||(V={}));var Y=function(se,re){switch(re.type){case"check":return se.concat([re.name]);case"uncheck":return se.filter(function(fe){return fe!==re.name});case"reset":return re.state}},w=function(se){return se.filter(function(re){var fe=re.checked;return fe}).map(function(re){var fe=re.name;return fe})},q=function(se){var re=se.compact,fe=se.description,ve=se.disabled,Ee=se.error,Oe=se.items,ke=se.legend,Se=se.onChange,De=se.presentation,Be=se.variant,we=Be===void 0?V.Vertical:Be;if(!(0,C.zb)(Oe.map(function(he){return he.name})))throw Error("Each name in the checkbox group must be unique.");var le=(0,n.useReducer)(Y,w(Oe)),K=pe(le,2),W=K[0],I=K[1];(0,n.useEffect)(function(){return I({type:"reset",state:w(Oe)})},[Oe]);var ye=(0,M.D9)(W);return(0,M.PQ)(function(){Se&&!ve&&!(0,C.cO)(ye,W)&&Se(W)},[W,Se,ve]),(0,ae.jsx)(R.C,{description:fe,disabled:ve,error:Ee,legend:ke,size:re?R.w.Xsmall:R.w.Small,children:(0,ae.jsx)("div",{className:l()(H["altinn-checkbox-group"],H["altinn-checkbox-group--"+we],re&&H["altinn-checkbox-group--compact"]),children:Oe.map(function(he){return(0,ae.jsx)(h.X,{checkboxId:he.checkboxId,checked:W.includes(he.name),compact:re,description:he.description,disabled:ve||he.disabled,error:!!Ee,label:he.label,name:he.name,onChange:function(je){I({type:je.target.checked?"check":"uncheck",name:he.name})},presentation:De},he.name)})})})};q.displayName="CheckboxGroup";try{q.displayName="CheckboxGroup",q.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:q.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(oe){}var _e=`import React from 'react';
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
          deprecationWarning={
            'Use CheckboxGroup from @digdir/design-system-react instead.'
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
`,ce={Vertical:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Horizontal:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Compact:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Error:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Disabled:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}}},$="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const P={title:"Components/CheckboxGroup",component:q,parameters:{design:(0,i.vc)([{type:"figma",url:$},{type:"link",url:$}]),docs:{page:function(){return(0,ae.jsx)(d.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes.",deprecationWarning:"Use CheckboxGroup from @digdir/design-system-react instead."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:V.Vertical}};var _=function(se){return(0,ae.jsx)(q,Object.assign({},se))};_.displayName="Template";var r=_.bind({});r.args={variant:V.Vertical},r.parameters={docs:{description:{story:"This is the default setting."}}};var s=_.bind({});s.args={variant:V.Horizontal},s.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var L=_.bind({});L.args={compact:!0},L.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var N=_.bind({});N.args={error:"Du m\xE5 velge minst ett av alternativene over."},N.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var ge=_.bind({});ge.args={disabled:!0},ge.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},r.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},r.parameters),s.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},s.parameters),L.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},L.parameters),N.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},N.parameters),ge.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},ge.parameters);var be=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{SimpleExample:()=>c,__namedExportsOrder:()=>j,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./src/DesignTokens/index.ts"),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(Q),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css"),X={};X.insert="head",X.singleton=!1;var U=G()(S.Z,X);const v=S.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),a=function(h){var R=h.value,C=h.width,M=C===void 0?70:C,p=h.strokeWidth,u=p===void 0?2.5:p,B=h.ariaLabel,A=h.label,z=h.id,H=z+"-label",ae=!B&&A?H:void 0;return(0,D.jsxs)("div",{id:z,className:v.container,style:{width:M+"px"},role:"progressbar","aria-labelledby":ae,"aria-label":B,children:[A&&(0,D.jsx)("div",{id:H,className:v.label,children:A}),(0,D.jsxs)("svg",{className:v.svg,viewBox:"0 0 35.8 35.8",children:[(0,D.jsx)(f,{stroke:ne.T.B0w,strokeWidth:u}),(0,D.jsx)(f,{strokeWidth:u,stroke:ne.T.CbY,strokeDashoffset:100-R,strokeDasharray:"100 100",className:v.circleTransition})]})]})};a.displayName="CircularProgress";var f=function(h){return(0,D.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},h))};f.displayName="Circle";try{a.displayName="CircularProgress",a.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:a.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(l){}var y=`import React from 'react';
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
`,O={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},x="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const b={title:"Components/CircularProgress",component:a,parameters:{design:(0,i.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,D.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var m=function(h){return(0,D.jsx)(a,Object.assign({},h))};m.displayName="CircularTemplate";var c=m.bind({});c.args={width:100,value:60,label:"3/5",id:"progress"},c.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},c.parameters);var j=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>f,__namedExportsOrder:()=>y,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/ErrorMessage/ErrorMessage.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
          deprecationWarning={\`Use ErrorMessage from @digdir/design-system-react instead.\`}
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
`,U={Example:{startLoc:{col:54,line:42},endLoc:{col:1,line:44},startBody:{col:54,line:42},endBody:{col:1,line:44}}},v="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const D={title:"Components/ErrorMessage",component:G.B,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"Simple error-message suitable to be shown in table views",deprecationWarning:"Use ErrorMessage from @digdir/design-system-react instead."})}}},args:{id:"error-message-story"}};var a=function(x){return(0,S.jsx)(G.B,Object.assign({},x,{children:"This is an error message"}))};a.displayName="Template";var f=a.bind({});f.args={},f.parameters={docs:{description:{story:""}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},f.parameters);var y=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>y,Disabled:()=>b,Error:()=>x,Normal:()=>f,WithDescription:()=>O,__namedExportsOrder:()=>m,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/FieldSet/FieldSet.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
          deprecationWarning={\`Use FieldSet from @digdir/design-system-react instead.\`}
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
`,U={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},v="";const D={title:"Components/FieldSet",component:G.C,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"Field set component to use as a wrapper for groups of form elements.",deprecationWarning:"Use FieldSet from @digdir/design-system-react instead."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:G.w.Small}};var a=function(j){return(0,S.jsx)(G.C,Object.assign({},j,{children:j.children}))};a.displayName="Template";var f=a.bind({});f.args={},f.parameters={docs:{description:{story:"This is a normal field set."}}};var y=a.bind({});y.args={size:G.w.Xsmall},y.parameters={docs:{description:{story:"This is a compact field set."}}};var O=a.bind({});O.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},O.parameters={docs:{description:{story:"This is a field set with a description."}}};var x=a.bind({});x.args={error:"Her er det en beskrivende feilmelding."},x.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var b=a.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},y.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},O.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters);var m=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Dashed:()=>ae,Solid:()=>H,__namedExportsOrder:()=>pe,default:()=>A});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./node_modules/classnames/index.js"),Q=e.n(ne),G=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(G),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),U={};U.insert="head",U.singleton=!1;var v=S()(X.Z,U);const D=X.Z.locals||{};var a;(function(ue){ue.Solid="solid",ue.Dashed="dashed"})(a||(a={}));var f=(0,n.createContext)({borderStyle:a.Solid}),y=function(){var me=(0,n.useContext)(f);if(me===void 0)throw new Error("useListContext must be used within a ListContext");return me},O=e("./node_modules/react/jsx-runtime.js"),x=function(me){var ie=me.children,J=me.borderStyle,g=J===void 0?a.Solid:J;return(0,O.jsx)("ul",{className:Q()(D.list,D["list--"+g]),children:(0,O.jsx)(f.Provider,{value:{borderStyle:g},children:ie})})};x.displayName="List";try{x.displayName="List",x.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:x.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(ue){}var b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),m={};m.insert="head",m.singleton=!1;var c=S()(b.Z,m);const j=b.Z.locals||{};var l=function(me){var ie=me.children,J=y(),g=J.borderStyle;return(0,O.jsx)("li",{className:Q()(j["list-item"],j["list-item--"+g]),children:ie})};l.displayName="ListItem";try{l.displayName="ListItem",l.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:l.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(ue){}var h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css"),R={};R.insert="head",R.singleton=!1;var C=S()(h.Z,R);const M=h.Z.locals||{};var p=`import React from 'react';
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
`,u={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},B="";const A={title:"Components/List",component:x,parameters:{design:(0,i.vc)([{type:"figma",url:B},{type:"link",url:B}]),docs:{page:function(){return(0,O.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var z=function(me){return(0,O.jsx)("div",{className:M.container,children:(0,O.jsxs)(x,{borderStyle:me.borderStyle,children:[(0,O.jsx)(l,{children:"List Item 1"}),(0,O.jsx)(l,{children:"List Item 2"}),(0,O.jsx)(l,{children:"List Item 3"})]})})};z.displayName="Template";var H=z.bind({});H.args={borderStyle:a.Solid},H.parameters={docs:{description:{story:""}}};var ae=z.bind({});ae.args={borderStyle:a.Dashed},ae.parameters={docs:{description:{story:""}}},H.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},H.parameters),ae.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},ae.parameters);var pe=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>Ee,GoogleMaps:()=>Be,KartverketSea:()=>De,KartverketTerrain:()=>Se,MapWithMarkerZoomAndCenter:()=>Oe,OpenStreetMap:()=>ke,__namedExportsOrder:()=>we,default:()=>fe});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./node_modules/leaflet/dist/images/marker-icon.png"),x=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),b=e("./node_modules/leaflet/dist/images/marker-shadow.png"),m=e("./.storybook/StoryPage.tsx"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),j=e("./node_modules/react-leaflet/lib/MapContainer.js"),l=e("./node_modules/react-leaflet/lib/TileLayer.js"),h=e("./node_modules/react-leaflet/lib/AttributionControl.js"),R=e("./node_modules/react-leaflet/lib/Marker.js"),C=e("./node_modules/react-leaflet/lib/hooks.js"),M=e("./node_modules/leaflet/dist/leaflet-src.js"),p=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(p),B=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),A={};A.insert="head",A.singleton=!1;var z=u()(B.Z,A);const H=B.Z.locals||{};var ae=e("./node_modules/leaflet/dist/leaflet.css"),pe=e("./node_modules/react/jsx-runtime.js");function ue(le,K){return V(le)||g(le,K)||ie(le,K)||me()}function me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(le,K){if(!!le){if(typeof le=="string")return J(le,K);var W=Object.prototype.toString.call(le).slice(8,-1);if(W==="Object"&&le.constructor&&(W=le.constructor.name),W==="Map"||W==="Set")return Array.from(le);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return J(le,K)}}function J(le,K){(K==null||K>le.length)&&(K=le.length);for(var W=0,I=new Array(K);W<K;W++)I[W]=le[W];return I}function g(le,K){var W=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(W!=null){var I=[],ye=!0,he=!1,Te,je;try{for(W=W.call(le);!(ye=(Te=W.next()).done)&&(I.push(Te.value),!(K&&I.length===K));ye=!0);}catch(Le){he=!0,je=Le}finally{try{!ye&&W.return!=null&&W.return()}finally{if(he)throw je}}return I}}function V(le){if(Array.isArray(le))return le}var Y={latitude:64.888996,longitude:12.8186054},w=4,q=16,_e=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],ce=function(K){var W=K.readOnly,I=W===void 0?!1:W,ye=K.layers,he=ye===void 0?_e:ye,Te=K.centerLocation,je=Te===void 0?Y:Te,Le=K.zoom,Ne=Le===void 0?w:Le,Qe=K.flyToZoomLevel,We=Qe===void 0?q:Qe,He=K.markerLocation,qe=K.markerIcon,cn=K.onClick,rn=(0,a.useState)(null),ln=ue(rn,2),nn=ln[0],dn=ln[1],Fe=(0,a.useMemo)(function(){if(!(!(He!=null&&He.latitude)||!(He!=null&&He.longitude)))return He},[He]);return(0,a.useEffect)(function(){nn&&Fe&&We&&nn.flyTo({lat:Fe.latitude,lng:Fe.longitude},We)},[nn,Fe,We]),(0,pe.jsxs)(j.h,{className:H.map,center:$(je),zoom:Ne,zoomControl:!I,dragging:!I,touchZoom:!I,doubleClickZoom:!I,scrollWheelZoom:!I,attributionControl:!1,ref:dn,children:[he.map(function(Ge,an){return(0,pe.jsx)(l.I,{url:Ge.url,attribution:Ge.attribution,subdomains:Ge.subdomains?Ge.subdomains:[],opacity:I?.5:1},an)}),(0,pe.jsx)(h.z,{prefix:!1}),Fe?(0,pe.jsx)(R.J,{position:$(Fe),icon:(0,M.icon)(qe)}):null,(0,pe.jsx)(P,{readOnly:I,onClick:cn})]})};ce.displayName="Map";function $(le){return[le.latitude,le.longitude]}var P=function(K){var W=K.onClick,I=K.readOnly;return(0,C.zV)({click:function(he){if(W&&!I){var Te=he.latlng.wrap();W({latitude:Te.lat,longitude:Te.lng})}}}),null};try{ce.displayName="Map",ce.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},flyToZoomLevel:{defaultValue:{value:"16"},description:"",name:"flyToZoomLevel",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:ce.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(le){}var _=e("./node_modules/console-browserify/index.js");function r(le,K){return be(le)||ge(le,K)||L(le,K)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(le,K){if(!!le){if(typeof le=="string")return N(le,K);var W=Object.prototype.toString.call(le).slice(8,-1);if(W==="Object"&&le.constructor&&(W=le.constructor.name),W==="Map"||W==="Set")return Array.from(le);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return N(le,K)}}function N(le,K){(K==null||K>le.length)&&(K=le.length);for(var W=0,I=new Array(K);W<K;W++)I[W]=le[W];return I}function ge(le,K){var W=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(W!=null){var I=[],ye=!0,he=!1,Te,je;try{for(W=W.call(le);!(ye=(Te=W.next()).done)&&(I.push(Te.value),!(K&&I.length===K));ye=!0);}catch(Le){he=!0,je=Le}finally{try{!ye&&W.return!=null&&W.return()}finally{if(he)throw je}}return I}}function be(le){if(Array.isArray(le))return le}var oe=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import { useArgs } from '@storybook/client-api';
import Marker from 'leaflet/dist/images/marker-icon.png';
import RetinaMarker from 'leaflet/dist/images/marker-icon-2x.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';

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
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
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
`,se={Default:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}},OpenStreetMap:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}},KartverketTerrain:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}},KartverketSea:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}},GoogleMaps:{startLoc:{col:45,line:40},endLoc:{col:1,line:61},startBody:{col:45,line:40},endBody:{col:1,line:61}}},re="";const fe={title:"Components/Map",component:ce,parameters:{layout:"fullscreen",design:(0,f.vc)([{type:"figma",url:re},{type:"link",url:re}]),docs:{page:function(){return(0,pe.jsx)(m.Y,{description:"Map component"})}}},args:{}};var ve=function(K){var W=(0,y.D8)(),I=r(W,2),ye=I[1],he=function(je){ye(Object.assign({},K,{markerLocation:je})),_.log("Map clicked at ["+je.latitude+","+je.longitude+"]")};return(0,pe.jsx)(ce,Object.assign({},K,{markerIcon:{iconUrl:O,iconRetinaUrl:x,shadowUrl:b,iconSize:[25,41],iconAnchor:[12,41]},onClick:he}))};ve.displayName="Template";var Ee=ve.bind({});Ee.args={},Ee.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var Oe=ve.bind({});Oe.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},Oe.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var ke=ve.bind({});ke.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},ke.parameters={docs:{description:{story:"OpenStreetMap"}}};var Se=ve.bind({});Se.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},Se.parameters={docs:{description:{story:"Kartverket terrain map"}}};var De=ve.bind({});De.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},De.parameters={docs:{description:{story:"Kartverket sea map"}}};var Be=ve.bind({});Be.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},Be.parameters={docs:{description:{story:"Google Maps"}}},Ee.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},Ee.parameters),Oe.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},Oe.parameters),ke.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},ke.parameters),Se.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},Se.parameters),De.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},De.parameters),Be.parameters=Object.assign({storySource:{source:`(args) => {
  const [, updateArgs] = useArgs();

  const mapClicked = (location: Location) => {
    updateArgs({ ...args, markerLocation: location });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };

  return (
    <Map
      {...args}
      markerIcon={{
        iconUrl: Marker,
        iconRetinaUrl: RetinaMarker,
        shadowUrl: MarkerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      }}
      onClick={mapClicked}
    />
  );
}`}},Be.parameters);var we=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Primary:()=>J,Success:()=>g,__namedExportsOrder:()=>V,default:()=>me});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne;function Q(){return Q=Object.assign?Object.assign.bind():function(Y){for(var w=1;w<arguments.length;w++){var q=arguments[w];for(var _e in q)Object.prototype.hasOwnProperty.call(q,_e)&&(Y[_e]=q[_e])}return Y},Q.apply(this,arguments)}var G=function(w){return n.createElement("svg",Q({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w),ne||(ne=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},S;(function(Y){Y.Primary="primary",Y.Success="success"})(S||(S={}));var X;(function(Y){Y.Small="small",Y.Medium="medium"})(X||(X={}));var U=(0,n.createContext)({color:S.Primary,size:X.Medium}),v=function(){var w=(0,n.useContext)(U);if(w===void 0)throw new Error("usePageContext must be used within a PageContext");return w},D=e("./node_modules/classnames/index.js"),a=e.n(D),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(f),O=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css"),x={};x.insert="head",x.singleton=!1;var b=y()(O.Z,x);const m=O.Z.locals||{};var c=e("./node_modules/react/jsx-runtime.js"),j=function(w){var q=w.children;return(0,c.jsx)("div",{className:a()(m["page-content"]),children:q})};j.displayName="PageContent";try{j.displayName="PageContent",j.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:j.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(Y){}var l=e("./src/components/SvgIcon/index.ts"),h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css"),R={};R.insert="head",R.singleton=!1;var C=y()(h.Z,R);const M=h.Z.locals||{};var p=function(w){var q=w.children,_e=w.icon,ce=v(),$=ce.color,P=ce.size,_=P===X.Small?28:40;return(0,c.jsxs)("header",{className:a()(M["page-header"],M["page-header--"+$],M["page-header--"+P]),children:[(0,c.jsx)(l.l,{width:_,height:_,svgIconComponent:_e}),(0,c.jsx)("span",{children:q})]})};p.displayName="PageHeader";try{p.displayName="PageHeader",p.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:p.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(Y){}var u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css"),B={};B.insert="head",B.singleton=!1;var A=y()(u.Z,B);const z=u.Z.locals||{};var H=function(w){var q=w.children,_e=w.color,ce=_e===void 0?S.Primary:_e,$=w.size,P=$===void 0?X.Medium:$;return(0,c.jsx)("div",{className:z.page,children:(0,c.jsx)(U.Provider,{value:{color:ce,size:P},children:q})})};H.displayName="Page";try{H.displayName="Page",H.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:H.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(Y){}var ae=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';
import { ReactComponent as DataIcon } from '@/assets/Data.svg';

import { PageColor, PageSize } from './Context';
import { PageContent } from './PageContent';
import { PageHeader } from './PageHeader';
import { Page } from './Page';

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
    <div style={{ width: '600px' }}>
      <Page
        color={args.color}
        size={args.size}
      >
        <PageHeader icon={<DataIcon />}>PageHeader</PageHeader>
        <PageContent>PageContent</PageContent>
      </Page>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: PageColor.Primary,
  size: PageSize.Medium,
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
  size: PageSize.Medium,
};
Success.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,pe={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},ue="";const me={title:"Components/Page",component:H,parameters:{design:(0,i.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,c.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var ie=function(w){return(0,c.jsx)("div",{style:{width:"600px"},children:(0,c.jsxs)(H,{color:w.color,size:w.size,children:[(0,c.jsx)(p,{icon:(0,c.jsx)(G,{}),children:"PageHeader"}),(0,c.jsx)(j,{children:"PageContent"})]})})};ie.displayName="Template";var J=ie.bind({});J.args={color:S.Primary,size:X.Medium},J.parameters={docs:{description:{story:""}}};var g=ie.bind({});g.args={color:S.Success,size:X.Medium},g.parameters={docs:{description:{story:""}}},J.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div style={{ width: '600px' }}>
      <Page
        color={args.color}
        size={args.size}
      >
        <PageHeader icon={<DataIcon />}>PageHeader</PageHeader>
        <PageContent>PageContent</PageContent>
      </Page>
    </div>
  );
}`}},J.parameters),g.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div style={{ width: '600px' }}>
      <Page
        color={args.color}
        size={args.size}
      >
        <PageHeader icon={<DataIcon />}>PageHeader</PageHeader>
        <PageContent>PageContent</PageContent>
      </Page>
    </div>
  );
}`}},g.parameters);var V=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>ce,__namedExportsOrder:()=>$,default:()=>q,descriptionTexts:()=>w});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),ne=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),G=e.n(Q),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e.n(S),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e.n(U),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),a=e.n(D),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),y=e.n(f),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(O),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e.n(b),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),j=e.n(c),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e.n(l),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),C=e.n(R),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),p=e.n(M),u=e("./node_modules/react/index.js"),B=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Pagination/Pagination.tsx"),H=e("./node_modules/react/jsx-runtime.js");function ae(P,_){return J(P)||ie(P,_)||ue(P,_)||pe()}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(P,_){if(!!P){if(typeof P=="string")return me(P,_);var r=Object.prototype.toString.call(P).slice(8,-1);if(r==="Object"&&P.constructor&&(r=P.constructor.name),r==="Map"||r==="Set")return Array.from(P);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return me(P,_)}}function me(P,_){(_==null||_>P.length)&&(_=P.length);for(var r=0,s=new Array(_);r<_;r++)s[r]=P[r];return s}function ie(P,_){var r=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(r!=null){var s=[],L=!0,N=!1,ge,be;try{for(r=r.call(P);!(L=(ge=r.next()).done)&&(s.push(ge.value),!(_&&s.length===_));L=!0);}catch(oe){N=!0,be=oe}finally{try{!L&&r.return!=null&&r.return()}finally{if(N)throw be}}return s}}function J(P){if(Array.isArray(P))return P}var g=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type { DescriptionText } from './Pagination';
import { Pagination } from './Pagination';

const figmaLink = ''; // TODO: Add figma link

/**
 * Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
 * when working with Pagination.
 */
export const descriptionTexts: DescriptionText = {
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
      descriptionTexts={descriptionTexts}
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
`,V={Example:{startLoc:{col:52,line:52},endLoc:{col:1,line:73},startBody:{col:52,line:52},endBody:{col:1,line:73}}},Y="",w={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const q={title:"Components/Pagination",component:z.t,parameters:{design:(0,B.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,H.jsx)(A.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var _e=function(_){var r=(0,u.useState)(5),s=ae(r,2),L=s[0],N=s[1],ge=(0,u.useState)(0),be=ae(ge,2),oe=be[0],se=be[1],re=function(ve){N(parseInt(ve.target.value,10)),se(0)};return(0,H.jsx)(z.t,Object.assign({},_,{rowsPerPage:L,currentPage:oe,setCurrentPage:se,onRowsPerPageChange:re,descriptionTexts:w}))};_e.displayName="Template";var ce=_e.bind({});ce.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},ce.parameters={docs:{description:{story:""}}},ce.parameters=Object.assign({storySource:{source:`(args) => {
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
      descriptionTexts={descriptionTexts}
    />
  );
}`}},ce.parameters);var $=["descriptionTexts","Example"];try{w.displayName="descriptionTexts",w.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:w.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(P){}},"./src/components/Panel/Panel.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>x,Info:()=>y,Success:()=>f,Warning:()=>O,__namedExportsOrder:()=>b,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/Panel/Panel.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
    title: 'Paneltittel',
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
      story: 'Suksessbeskrivelse',
    },
  },
};

export const Info = Template.bind({});
Info.parameters = {
  docs: {
    description: {
      story: 'Infobeskrivelse',
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
      story: 'Advarselsbeskrivelse',
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
      story: 'Feilbeskrivelse',
    },
  },
};
`,U={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},v="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const D={title:"Components/Panel",component:G.s,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,S.jsx)("div",{children:"Her kommer litt informasjon"})}};var a=function(c){return(0,S.jsx)(G.s,Object.assign({},c))};a.displayName="Template";var f=a.bind({});f.args={variant:G.c.Success},f.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var y=a.bind({});y.parameters={docs:{description:{story:"Infobeskrivelse"}}};var O=a.bind({});O.args={variant:G.c.Warning},O.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var x=a.bind({});x.args={variant:G.c.Error},x.parameters={docs:{description:{story:"Feilbeskrivelse"}}},f.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},f.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},y.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},O.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},x.parameters);var b=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>$,Info:()=>_e,Success:()=>q,Warning:()=>ce,__namedExportsOrder:()=>P,default:()=>Y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/index.ts"),b=e("./src/components/Panel/Panel.tsx"),m=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),c=e("./node_modules/classnames/index.js"),j=e.n(c),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(l),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),C={};C.insert="head",C.singleton=!1;var M=h()(R.Z,C);const p=R.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js"),B=function(r){var s=r.children;return(0,u.jsx)(m.Eh,{className:j()(p["popover-panel__arrow"]),asChild:!0,children:s})};B.displayName="renderArrow";var A=function(r){var s=r.children,L=r.variant,N=L===void 0?b.c.Warning:L,ge=r.trigger,be=r.side,oe=be===void 0?"top":be,se=r.title,re=r.showIcon,fe=r.forceMobileLayout,ve=r.showPointer,Ee=ve===void 0?!0:ve,Oe=r.onOpenChange,ke=r.open,Se=ke===void 0?!1:ke;return(0,u.jsxs)(m.fC,{open:Se,onOpenChange:Oe,children:[(0,u.jsx)(m.xz,{asChild:!0,role:"button",children:ge}),(0,u.jsx)(m.VY,{side:oe,className:p["popover-panel"],children:(0,u.jsx)(b.s,{title:se,showIcon:re,forceMobileLayout:fe,showPointer:Ee,variant:N,renderArrow:B,children:s})})]})};A.displayName="PopoverPanel";const z=null;try{A.displayName="PopoverPanel",A.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:A.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(_){}function H(_,r){return ie(_)||me(_,r)||pe(_,r)||ae()}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(_,r){if(!!_){if(typeof _=="string")return ue(_,r);var s=Object.prototype.toString.call(_).slice(8,-1);if(s==="Object"&&_.constructor&&(s=_.constructor.name),s==="Map"||s==="Set")return Array.from(_);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return ue(_,r)}}function ue(_,r){(r==null||r>_.length)&&(r=_.length);for(var s=0,L=new Array(r);s<r;s++)L[s]=_[s];return L}function me(_,r){var s=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(s!=null){var L=[],N=!0,ge=!1,be,oe;try{for(s=s.call(_);!(N=(be=s.next()).done)&&(L.push(be.value),!(r&&L.length===r));N=!0);}catch(se){ge=!0,oe=se}finally{try{!N&&s.return!=null&&s.return()}finally{if(ge)throw oe}}return L}}function ie(_){if(Array.isArray(_))return _}var J=`import React from 'react';
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
`,g={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},V="";const Y={title:"Components/Panel/PopoverPanel",component:A,parameters:{design:(0,f.vc)([{type:"figma",url:V},{type:"link",url:V}]),docs:{page:function(){return(0,u.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:b.c.Warning,trigger:(0,u.jsx)("button",{children:"\xC5pne"}),side:"top"}};var w=function(r){var s=(0,y.eJ)(!1),L=H(s,2),N=L[0],ge=L[1],be=function(){ge(!N)};return(0,u.jsx)("div",{children:(0,u.jsxs)(A,{variant:r.variant,side:r.side,title:r.title,open:N,trigger:(0,u.jsx)(x.zx,{variant:x.Wu.Filled,color:x.rp.Primary,children:"\xC5pne"}),onOpenChange:ge,showPointer:r.showPointer,showIcon:r.showIcon,forceMobileLayout:r.forceMobileLayout,children:[(0,u.jsx)("div",{children:"Her kommer litt informasjon"}),(0,u.jsx)(x.zx,{variant:x.Wu.Filled,color:x.rp.Primary,size:x.qE.Small,onClick:be,children:"Lukk"})]})})};w.displayName="Template";var q=w.bind({});q.args={variant:b.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},q.argTypes={trigger:{control:!1}},q.parameters={docs:{description:{story:""}}};var _e=w.bind({});_e.args={variant:b.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},_e.argTypes={trigger:{control:!1}},_e.parameters={docs:{description:{story:""}}};var ce=w.bind({});ce.args={variant:b.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},ce.argTypes={trigger:{control:!1}},ce.parameters={docs:{description:{story:""}}};var $=w.bind({});$.args={variant:b.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},$.argTypes={trigger:{control:!1}},$.parameters={docs:{description:{story:""}}},q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters),_e.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},_e.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ce.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters);var P=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>x,Default:()=>f,Disabled:()=>b,Error:()=>O,LongText:()=>c,WithDescription:()=>m,WithHiddenLabel:()=>j,__namedExportsOrder:()=>l,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/RadioButton/RadioButton.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
          deprecationWarning={\`Use RadioButton from @digdir/design-system-react instead.\`}
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
`,U={Default:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}}},v="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const D={title:"Components/RadioButton",component:G.E,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}",deprecationWarning:"Use RadioButton from @digdir/design-system-react instead."})}}},args:{label:"Label",name:"label",value:"label"}};var a=function(R){return(0,S.jsx)(G.E,Object.assign({},R))};a.displayName="Template";var f=a.bind({});f.args={},f.parameters={docs:{description:{story:"Default radio button."}}};var y=a.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"Checked radio button."}}};var O=a.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var x=a.bind({});x.args={size:G.j.Xsmall},x.parameters={docs:{description:{story:"This is the compact radio button."}}};var b=a.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var m=a.bind({});m.args={description:"Lorem ipsum dolor sit amet."},m.parameters={docs:{description:{story:"This is a radio button with description."}}};var c=a.bind({});c.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},c.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var j=a.bind({});j.args={hideLabel:!0},j.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},y.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},O.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},b.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},c.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},j.parameters);var l=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>ce,Disabled:()=>P,Error:()=>$,Horizontal:()=>_e,Vertical:()=>q,__namedExportsOrder:()=>_,default:()=>Y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),b=e("./src/components/RadioButton/index.ts"),m=e("./src/components/FieldSet/index.ts"),c=e("./src/hooks/index.ts"),j=e("./src/utils/arrayUtils.ts"),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(l),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css"),C={};C.insert="head",C.singleton=!1;var M=h()(R.Z,C);const p=R.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js");function B(r,s){return pe(r)||ae(r,s)||z(r,s)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(r,s){if(!!r){if(typeof r=="string")return H(r,s);var L=Object.prototype.toString.call(r).slice(8,-1);if(L==="Object"&&r.constructor&&(L=r.constructor.name),L==="Map"||L==="Set")return Array.from(r);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return H(r,s)}}function H(r,s){(s==null||s>r.length)&&(s=r.length);for(var L=0,N=new Array(s);L<s;L++)N[L]=r[L];return N}function ae(r,s){var L=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(L!=null){var N=[],ge=!0,be=!1,oe,se;try{for(L=L.call(r);!(ge=(oe=L.next()).done)&&(N.push(oe.value),!(s&&N.length===s));ge=!0);}catch(re){be=!0,se=re}finally{try{!ge&&L.return!=null&&L.return()}finally{if(be)throw se}}return N}}function pe(r){if(Array.isArray(r))return r}var ue;(function(r){r.Xsmall="xsmall",r.Small="small"})(ue||(ue={}));var me;(function(r){r.Vertical="vertical",r.Horizontal="horizontal"})(me||(me={}));var ie=function(s){var L=s.description,N=s.disabled,ge=s.error,be=s.items,oe=s.legend,se=s.name,re=s.onChange,fe=s.presentation,ve=s.size,Ee=ve===void 0?ue.Small:ve,Oe=s.value,ke=s.variant,Se=ke===void 0?me.Vertical:ke;if(!(0,j.zb)(be.map(function(je){return je.value})))throw Error("Each value in the radio group must be unique.");var De=(0,n.useState)(Oe),Be=B(De,2),we=Be[0],le=Be[1];(0,n.useEffect)(function(){le(Oe)},[Oe]);var K=(0,c.D9)(we);(0,c.PQ)(function(){re&&!N&&K!==we&&re(we)},[we,N,re]);var W=function(Le){return function(Ne){return Ne.target.checked&&le(Le)}},I=Ee===ue.Xsmall?[m.w.Xsmall,b.j.Xsmall]:[m.w.Small,b.j.Small],ye=B(I,2),he=ye[0],Te=ye[1];return(0,u.jsx)(m.C,{description:L,disabled:N,error:ge,legend:oe,size:he,children:(0,u.jsx)("div",{className:[p["altinn-radio-group"],p["altinn-radio-group--"+Se],p["altinn-radio-group--"+Ee]].join(" "),role:fe?void 0:"radiogroup",children:be.map(function(je){return(0,n.createElement)(b.E,Object.assign({},je,{checked:je.value===we,disabled:N||je.disabled,error:!!ge,key:je.value,name:se,onChange:W(je.value),presentation:fe,size:Te}))})})})};ie.displayName="RadioGroup";try{ie.displayName="RadioGroup",ie.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:ie.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(r){}var J=`import React from 'react';
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
          deprecationWarning={\`Use RadioGroup from @digdir/design-system-react instead.\`}
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
`,g={Vertical:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Horizontal:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Compact:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Error:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Disabled:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}}},V="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const Y={title:"Components/RadioGroup",component:ie,parameters:{design:(0,i.vc)([{type:"figma",url:V},{type:"link",url:V}]),docs:{page:function(){return(0,u.jsx)(d.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes.",deprecationWarning:"Use RadioGroup from @digdir/design-system-react instead."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var w=function(s){return(0,u.jsx)(ie,Object.assign({},s))};w.displayName="Template";var q=w.bind({});q.args={variant:me.Vertical},q.parameters={docs:{description:{story:"This is the default setting."}}};var _e=w.bind({});_e.args={variant:me.Horizontal},_e.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var ce=w.bind({});ce.args={size:ue.Xsmall},ce.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var $=w.bind({});$.args={error:"Du m\xE5 velge et av alternativene over."},$.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var P=w.bind({});P.args={disabled:!0},P.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},q.parameters),_e.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},_e.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},ce.parameters),$.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},$.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},P.parameters);var _=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>J,__namedExportsOrder:()=>g,default:()=>me});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),m=e("./node_modules/classnames/index.js"),c=e.n(m),j=e("./src/components/_InputWrapper/index.ts"),l=e("./node_modules/react/jsx-runtime.js"),h=["id","onChange","disabled","label"];function R(V,Y){if(V==null)return{};var w=C(V,Y),q,_e;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(V);for(_e=0;_e<ce.length;_e++)q=ce[_e],!(Y.indexOf(q)>=0)&&(!Object.prototype.propertyIsEnumerable.call(V,q)||(w[q]=V[q]))}return w}function C(V,Y){if(V==null)return{};var w={},q=Object.keys(V),_e,ce;for(ce=0;ce<q.length;ce++)_e=q[ce],!(Y.indexOf(_e)>=0)&&(w[_e]=V[_e]);return w}var M=function(Y){var w=Y.id,q=Y.onChange,_e=Y.disabled,ce=_e===void 0?!1:_e,$=Y.label,P=R(Y,h);return(0,l.jsx)(j.SP,{disabled:ce,isSearch:!0,label:$,inputRenderer:function(r){var s=r.className,L=r.variant,N={id:w,disabled:ce,className:c()(s)};return(0,l.jsx)("input",Object.assign({},N,P,{"data-testid":w+"-"+L,onChange:q}))}})};M.displayName="SearchField";try{M.displayName="SearchField",M.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:M.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(V){}function p(V,Y){return H(V)||z(V,Y)||B(V,Y)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(V,Y){if(!!V){if(typeof V=="string")return A(V,Y);var w=Object.prototype.toString.call(V).slice(8,-1);if(w==="Object"&&V.constructor&&(w=V.constructor.name),w==="Map"||w==="Set")return Array.from(V);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return A(V,Y)}}function A(V,Y){(Y==null||Y>V.length)&&(Y=V.length);for(var w=0,q=new Array(Y);w<Y;w++)q[w]=V[w];return q}function z(V,Y){var w=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(w!=null){var q=[],_e=!0,ce=!1,$,P;try{for(w=w.call(V);!(_e=($=w.next()).done)&&(q.push($.value),!(Y&&q.length===Y));_e=!0);}catch(_){ce=!0,P=_}finally{try{!_e&&w.return!=null&&w.return()}finally{if(ce)throw P}}return q}}function H(V){if(Array.isArray(V))return V}var ae=`import React from 'react';
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
`,pe={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},ue="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const me={title:"Components/SearchField",component:M,parameters:{design:(0,f.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,l.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var ie=function(Y){var w=(0,y.D8)(),q=p(w,1),_e=q[0].disabled;return(0,l.jsx)(M,Object.assign({disabled:_e},Y))};ie.displayName="Template";var J=ie.bind({});J.args={},J.parameters={docs:{description:{story:"Search field."}}},J.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},J.parameters);var g=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Disabled:()=>m,Error:()=>c,Multiple:()=>b,__namedExportsOrder:()=>j,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),ne=e.n(d),Q=e("./node_modules/react/index.js"),G=e("./node_modules/storybook-addon-designs/esm/index.js"),S=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Select/Select.tsx"),U=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
          deprecationWarning={\`Use Select from @digdir/design-system-react instead.\`}
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
`,D={Multiple:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Disabled:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Error:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}}},a="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",f=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],y=f.map(function(l){return Object.assign({},l,{deleteButtonLabel:"Slett "+l.label})});const O={title:"Components/Select/Multiple",component:X.P,parameters:{design:(0,G.vc)([{type:"figma",url:a},{type:"link",url:a}]),docs:{page:function(){return(0,U.jsx)(S.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:y}};var x=function(h){return(0,U.jsx)("div",{style:{width:"440px"},children:(0,U.jsx)(X.P,Object.assign({},h))})};x.displayName="Template";var b=x.bind({});b.args={},b.parameters={docs:{description:{story:"This is the default multiple select box."}}};var m=x.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var c=x.bind({});c.args={error:!0},c.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},b.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters);var j=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>f,Disabled:()=>y,Error:()=>O,__namedExportsOrder:()=>x,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),ne=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),G=e("./src/components/Select/Select.tsx"),S=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
          deprecationWarning={\`Use Select from @digdir/design-system-react instead.\`}
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
`,U={Default:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Error:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}},v="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const D={title:"Components/Select/Single",component:G.P,parameters:{design:(0,ne.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,S.jsx)(Q.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var a=function(m){return(0,S.jsx)("div",{style:{width:"440px"},children:(0,S.jsx)(G.P,Object.assign({},m))})};a.displayName="Template";var f=a.bind({});f.args={},f.parameters={docs:{description:{story:"This is the default select box."}}};var y=a.bind({});y.args={disabled:!0},y.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var O=a.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},y.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},O.parameters);var x=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{IconFromNavIconLibrary:()=>b,ImportedCustomIcon:()=>m,__namedExportsOrder:()=>c,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./node_modules/@navikt/ds-icons/esm/Success.js"),ne=e("./.storybook/StoryPage.tsx"),Q=e("./src/components/SvgIcon/index.ts"),G,S,X;function U(){return U=Object.assign?Object.assign.bind():function(j){for(var l=1;l<arguments.length;l++){var h=arguments[l];for(var R in h)Object.prototype.hasOwnProperty.call(h,R)&&(j[R]=h[R])}return j},U.apply(this,arguments)}var v=function(l){return n.createElement("svg",U({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},l),G||(G=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),S||(S=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),X||(X=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},D=e("./node_modules/react/jsx-runtime.js"),a=`import React from 'react';
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
`,f={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},y="";const O={title:"Components/SvgIcon",component:Q.l,parameters:{design:(0,i.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,D.jsx)(ne.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var x=function(l){return(0,D.jsx)(Q.l,Object.assign({},l))};x.displayName="Template";var b=x.bind({});b.args={svgIconComponent:(0,D.jsx)(d.Z,{})},b.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var m=x.bind({});m.args={svgIconComponent:(0,D.jsx)(v,{height:"2rem",width:"2rem"})},m.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},b.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},m.parameters);var c=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{BasicTable:()=>_n,Responsive:()=>yn,SelectRows:()=>gn,__namedExportsOrder:()=>Nn,default:()=>wn});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),O=e("./node_modules/storybook-addon-designs/esm/index.js"),x=e("./node_modules/classnames/index.js"),b=e.n(x),m=e("./.storybook/StoryPage.tsx"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),h=e("./src/hooks/useMediaQuery.ts"),R=e("./src/DesignTokens/index.ts"),C=e("./src/components/RadioButton/index.ts"),M;(function(T){T.Header="header",T.Body="body",T.Footer="footer"})(M||(M={}));var p;(function(T){T.Descending="desc",T.Ascending="asc",T.NotSortable="notSortable",T.NotActive="notActive"})(p||(p={}));var u=(0,y.createContext)(void 0);function B(){var T=(0,y.useContext)(u);if(T===void 0)throw new Error("useTableContext must be used within a TableContext");return T}var A=(0,y.createContext)({variantStandard:M.Body}),z=function(){var F=(0,y.useContext)(A);if(F===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return F},H=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),ae=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),pe=e.n(ae),ue=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css"),me={};me.insert="head",me.singleton=!1;var ie=pe()(ue.Z,me);const J=ue.Z.locals||{};var g=e("./node_modules/react/jsx-runtime.js"),V=["children","selectRows","onChange","selectedValue","className"];function Y(T,F){if(T==null)return{};var te=w(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function w(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}function q(T){var F=T.children,te=T.selectRows,Z=te===void 0?!1:te,ee=T.onChange,de=T.selectedValue,xe=T.className,Re=Y(T,V),Ve={selectRows:Z,onChange:ee,selectedValue:de};return(0,g.jsx)("table",Object.assign({},Re,{className:b()(J.Table,xe),children:(0,g.jsx)(u.Provider,{value:Ve,children:F})}))}q.displayName="Table";try{q.displayName="Table",q.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler<T>"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:q.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(T){}var _e=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css"),ce={};ce.insert="head",ce.singleton=!1;var $=pe()(_e.Z,ce);const P=_e.Z.locals||{};var _=["children","className"];function r(T,F){if(T==null)return{};var te=s(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function s(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}var L=function(F){var te=F.children,Z=F.className,ee=r(F,_),de=M.Header;return(0,g.jsx)(A.Provider,{value:{variantStandard:de},children:(0,g.jsx)("thead",Object.assign({},ee,{className:b()(P["table-header"],Z),children:te}))})};L.displayName="TableHeader";try{L.displayName="TableHeader",L.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:L.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(T){}var N=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css"),ge={};ge.insert="head",ge.singleton=!1;var be=pe()(N.Z,ge);const oe=N.Z.locals||{};var se=["children","rowData","className"];function re(T,F){if(T==null)return{};var te=fe(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function fe(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}function ve(T){var F,te=T.children,Z=T.rowData,ee=T.className,de=re(T,se),xe=z(),Re=xe.variantStandard,Ve=B(),Ye=Ve.onChange,Xe=Ve.selectedValue,Ae=Ve.selectRows,Me=function(){Ye!=null&&Ae&&Re===M.Body&&Z&&Ye({selectedValue:Z})},Ie=Ae&&typeof Z!="undefined"&&JSON.stringify(Z)===JSON.stringify(Xe);return(0,g.jsx)("tr",Object.assign({},de,{className:b()(oe.TableRow,(F={},F[oe["table-row--selected"]]=Ie,F[oe["table-row--body"]]=Re===M.Body&&Ae&&!Ie,F),ee),onClick:Me,children:te}))}ve.displayName="TableRow";try{ve.displayName="TableRow",ve.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:ve.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(T){}var Ee=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css"),Oe={};Oe.insert="head",Oe.singleton=!1;var ke=pe()(Ee.Z,Oe);const Se=Ee.Z.locals||{};var De;function Be(){return Be=Object.assign?Object.assign.bind():function(T){for(var F=1;F<arguments.length;F++){var te=arguments[F];for(var Z in te)Object.prototype.hasOwnProperty.call(te,Z)&&(T[Z]=te[Z])}return T},Be.apply(this,arguments)}var we=function(F){return y.createElement("svg",Be({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},F),De||(De=y.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},le=["children","variant","onChange","sortDirection","className","radiobutton"];function K(T,F){if(T==null)return{};var te=W(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function W(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}function I(T){var F,te=T.children,Z=T.variant,ee=T.onChange,de=T.sortDirection,xe=de===void 0?p.NotSortable:de,Re=T.className,Ve=T.radiobutton,Ye=Ve===void 0?!1:Ve,Xe=K(T,le),Ae=z(),Me=Ae.variantStandard,Ie=function(sn){return Z===void 0?Me===sn:Z===sn},Ze=function(){ee!=null&&xe!=null&&xe!=p.NotSortable&&ee({next:xe===p.Descending?p.Ascending:p.Descending,previous:xe})};return(0,g.jsxs)(g.Fragment,{children:[Ie(M.Header)&&(0,g.jsx)("th",Object.assign({},Xe,{className:Ye?b()(Se["header-table-cell-radiobutton"],Re):b()(Se["header-table-cell"],Re),"aria-sort":xe===p.Ascending?"ascending":xe===p.Descending?"descending":"none",children:(0,g.jsxs)("div",{className:xe!=p.NotSortable?b()(Se["container-sortable"]):b()(Se.container),onClick:function(){return Ze()},onKeyUp:function(sn){(sn.key==="Enter"||sn.key===" ")&&Ze()},role:xe!=p.NotSortable?"button":void 0,tabIndex:xe!=p.NotSortable?0:void 0,children:[(0,g.jsx)("div",{className:b()(Se.input),children:te}),xe!=p.NotSortable&&(0,g.jsx)(we,{"aria-label":"Sortering","data-testid":"sort-icon",className:b()(Se.icon,(F={},F[Se["icon-asc"]]=xe===p.Ascending,F[Se["icon-desc"]]=xe===p.Descending,F))})]})})),Ie(M.Body)&&(0,g.jsx)("td",Object.assign({},Xe,{className:Ye?b()(Se["body-table-cell-radiobutton"],Re):b()(Se["body-table-cell"],Re),children:(0,g.jsx)("div",{className:Ye?b()(Se["radio-button"]):b()(Se.input),children:te})})),Ie(M.Footer)&&(0,g.jsx)("td",Object.assign({},Xe,{className:b()(Re),children:(0,g.jsx)("div",{className:b()(Se.input),children:te})}))]})}try{I.displayName="TableCell",I.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirection:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:I.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(T){}var ye=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css"),he={};he.insert="head",he.singleton=!1;var Te=pe()(ye.Z,he);const je=ye.Z.locals||{};var Le=["children","className"];function Ne(T,F){if(T==null)return{};var te=Qe(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function Qe(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}var We=function(F){var te=F.children,Z=F.className,ee=Ne(F,Le),de=M.Body;return(0,g.jsx)(A.Provider,{value:{variantStandard:de},children:(0,g.jsx)("tbody",Object.assign({},ee,{className:b()(je.TableBody,Z),children:te}))})};We.displayName="TableBody";try{We.displayName="TableBody",We.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:We.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(T){}var He=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css"),qe={};qe.insert="head",qe.singleton=!1;var cn=pe()(He.Z,qe);const rn=He.Z.locals||{};var ln=["children","className"];function nn(T,F){if(T==null)return{};var te=dn(T,F),Z,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(T);for(ee=0;ee<de.length;ee++)Z=de[ee],!(F.indexOf(Z)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,Z)||(te[Z]=T[Z]))}return te}function dn(T,F){if(T==null)return{};var te={},Z=Object.keys(T),ee,de;for(de=0;de<Z.length;de++)ee=Z[de],!(F.indexOf(ee)>=0)&&(te[ee]=T[ee]);return te}var Fe=function(F){var te=F.children,Z=F.className,ee=nn(F,ln),de=M.Footer;return(0,g.jsx)(A.Provider,{value:{variantStandard:de},children:(0,g.jsx)("tfoot",Object.assign({},ee,{className:b()(rn["table-footer"],Z),children:te}))})};Fe.displayName="TableFooter";try{Fe.displayName="TableFooter",Fe.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Fe.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(T){}function Ge(T){var F=T.config,te=(0,h.a)("(max-width: "+R.T.cLy+")");return te?(0,g.jsx)(an,{config:F}):(0,g.jsx)(un,{config:F})}function an(T){var F=T.config,te=F.rows,Z=F.headers,ee=F.showColumnsMobile,de=F.renderCell,xe=F.rowSelection,Re=F.footer,Ve=JSON.stringify((xe==null?void 0:xe.selectedValue)||null),Ye=Object.keys(Z),Xe=xe?2:1;return(0,g.jsxs)(q,{selectRows:!!xe,onChange:function(Me){var Ie=Me.selectedValue;return xe==null?void 0:xe.onSelectionChange(Ie)},selectedValue:xe==null?void 0:xe.selectedValue,children:[(0,g.jsx)(We,{children:te.map(function(Ae){var Me=JSON.stringify(Ae);return(0,g.jsxs)(ve,{rowData:Ae,children:[xe&&(0,g.jsx)(I,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:Me,onChange:function(){return xe.onSelectionChange(Ae)},value:Me,checked:Me===Ve,label:Me,hideLabel:!0})}),(0,g.jsx)(I,{style:{padding:"0px"},children:Ye.map(function(Ie){if(!(ee&&!ee.includes(Ie))){var Ze=de&&de[Ie],$e=Ze?Ze(Ae[Ie]):Ae[Ie];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:Se.header,children:Z[Ie]}),(0,g.jsx)("div",{className:Se.property,children:$e})]})}})},Me+"-data")]},Me)})}),Re&&(0,g.jsx)(Fe,{children:(0,g.jsx)(ve,{children:(0,g.jsx)(I,{colSpan:Xe,children:Re})})})]})}an.displayName="MobileTable";function un(T){var F=T.config,te=F.rows,Z=F.headers,ee=F.renderCell,de=F.columnSort,xe=F.rowSelection,Re=F.footer,Ve=JSON.stringify((xe==null?void 0:xe.selectedValue)||null),Ye=Object.keys(Z),Xe=xe?Object.keys(Z).length+1:Object.keys(Z).length;return(0,g.jsxs)(q,{selectRows:!!xe,onChange:function(Me){var Ie=Me.selectedValue;return xe==null?void 0:xe.onSelectionChange(Ie)},selectedValue:xe==null?void 0:xe.selectedValue,children:[(0,g.jsx)(L,{children:(0,g.jsxs)(ve,{children:[xe&&(0,g.jsx)(I,{radiobutton:!0}),Ye.map(function(Ae){return(0,g.jsx)(I,{onChange:function(Ie){var Ze=Ie.next,$e=Ie.previous;de&&de.onSortChange({column:Ae,next:Ze,previous:$e})},sortDirection:de?de.currentlySortedColumn===Ae?de.currentDirection:de.sortable.includes(Ae)?p.NotActive:p.NotSortable:p.NotSortable,children:Z[Ae]},Ae)})]})}),(0,g.jsx)(We,{children:te.map(function(Ae){var Me=JSON.stringify(Ae);return(0,g.jsxs)(ve,{rowData:Ae,children:[xe&&(0,g.jsx)(I,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:Me,onChange:function(){return xe.onSelectionChange(Ae)},value:Me,checked:Me===Ve,label:Me,hideLabel:!0})}),Ye.map(function(Ie){var Ze=ee&&ee[Ie];return(0,g.jsx)(I,{children:Ze?Ze(Ae[Ie]):Ae[Ie]},Me+"-"+Ie)})]},Me)})}),Re&&(0,g.jsx)(Fe,{children:(0,g.jsx)(ve,{children:(0,g.jsx)(I,{colSpan:Xe,children:Re})})})]})}un.displayName="LaptopTable";try{Ge.displayName="ResponsiveTable",Ge.__docgenInfo={description:"",displayName:"ResponsiveTable",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"ResponsiveTableConfig<T>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/ResponsiveTable.tsx#ResponsiveTable"]={docgenInfo:Ge.__docgenInfo,name:"ResponsiveTable",path:"src/components/Table/ResponsiveTable.tsx#ResponsiveTable"})}catch(T){}var pn=e("./src/components/Pagination/Pagination.stories.tsx"),Sn=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),En=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.sort.js"),Ce=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.reverse.js"),Pe=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function ze(T){var F=T.page,te=T.rowsPerPage,Z=T.sortColumn,ee=T.sortDirection,de=[].concat(Pe);return Z&&(de.sort(function(xe,Re){return xe[Z]===Re[Z]?0:xe[Z]>Re[Z]?1:-1}),ee===p.Descending&&de.reverse()),{totalNum:de.length,rows:de.slice(F*te,F*te+te)}}var on=e("./src/components/Pagination/Pagination.tsx"),Je=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css"),en={};en.insert="head",en.singleton=!1;var Tn=pe()(Je.Z,en);const hn=Je.Z.locals||{};function tn(T,F){return Bn(T)||Mn(T,F)||Rn(T,F)||Ln()}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(T,F){if(!!T){if(typeof T=="string")return An(T,F);var te=Object.prototype.toString.call(T).slice(8,-1);if(te==="Object"&&T.constructor&&(te=T.constructor.name),te==="Map"||te==="Set")return Array.from(T);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return An(T,F)}}function An(T,F){(F==null||F>T.length)&&(F=T.length);for(var te=0,Z=new Array(F);te<F;te++)Z[te]=T[te];return Z}function Mn(T,F){var te=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(te!=null){var Z=[],ee=!0,de=!1,xe,Re;try{for(te=te.call(T);!(ee=(xe=te.next()).done)&&(Z.push(xe.value),!(F&&Z.length===F));ee=!0);}catch(Ve){de=!0,Re=Ve}finally{try{!ee&&te.return!=null&&te.return()}finally{if(de)throw Re}}return Z}}function Bn(T){if(Array.isArray(T))return T}var Kn=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';
import type { ResponsiveTableConfig } from '@/components/Table/ResponsiveTable';
import { ResponsiveTable } from '@/components/Table/ResponsiveTable';
import { descriptionTexts } from '@/components/Pagination/Pagination.stories';
import type { MyExampleTableData } from '@/components/Table/ExampleData';
import { getExampleTableRows } from '@/components/Table/ExampleData';

import { Pagination } from '../Pagination';
import { RadioButton } from '../RadioButton';

import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';
import { TableBody } from './TableBody';
import { SortDirection } from './Toolbox';
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

const Template: ComponentStory<typeof Table> = (args) => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection,
  });

  return (
    <Table
      selectRows={args.selectRows}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={({ next }) => {
              setSortColumn('caseNum');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            onChange={({ next }) => {
              setSortColumn('product');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'product' ? sortDirection : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.caseNum}
            rowData={{ caseNum: row.caseNum }}
          >
            {args.selectRows && (
              <TableCell radiobutton={true}>
                <RadioButton
                  name={\`\${row.caseNum}\`}
                  onChange={() => setSelected(row)}
                  value={\`\${row.caseNum}\`}
                  checked={selected?.caseNum === row.caseNum}
                  label={\`\${row.caseNum}\`}
                  hideLabel={true}
                ></RadioButton>
              </TableCell>
            )}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img
                className={cn(classes['checkmark'])}
                src={row.image.src}
                alt={row.image.alt}
              ></img>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={totalNum}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              currentPage={page}
              setCurrentPage={(newPage) => setPage(newPage)}
              descriptionTexts={descriptionTexts}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

const ResponsiveTemplate: ComponentStory<typeof ResponsiveTable> = () => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    rowsPerPage,
    page,
    sortColumn,
    sortDirection,
  });

  const config: ResponsiveTableConfig<MyExampleTableData> = {
    rows,
    headers: {
      caseNum: 'S\xF8knadsnr.',
      product: 'Produkt',
      status: 'Status',
      image: 'Bilde',
    },
    showColumnsMobile: ['product', 'caseNum', 'status'],
    columnSort: {
      onSortChange: ({ column, next }) => {
        setSortColumn(column);
        setSortDirection(next);
      },
      sortable: ['caseNum', 'product'],
      currentlySortedColumn: sortColumn,
      currentDirection: sortDirection,
    },
    renderCell: {
      image: (imageObj) => (
        <img
          className={cn(classes['checkmark'])}
          src={imageObj.src}
          alt={imageObj.alt}
        />
      ),
    },
    rowSelection: {
      onSelectionChange: (row) => setSelected(row),
      selectedValue: selected,
    },
    footer: (
      <Pagination
        numberOfRows={totalNum}
        rowsPerPageOptions={[5, 10, 15, 20]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        currentPage={page}
        setCurrentPage={(newPage) => setPage(newPage)}
        descriptionTexts={descriptionTexts}
      />
    ),
  };

  return <ResponsiveTable config={config} />;
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

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {};
Responsive.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,Un={BasicTable:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},SelectRows:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},Responsive:{startLoc:{col:67,line:162},endLoc:{col:1,line:230},startBody:{col:67,line:162},endBody:{col:1,line:230}}},In="";const wn={title:"Components/Table",component:q,parameters:{design:(0,O.vc)([{type:"figma",url:In},{type:"link",url:In}]),docs:{page:function(){return(0,g.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var kn=function(F){var te=(0,y.useState)(void 0),Z=tn(te,2),ee=Z[0],de=Z[1],xe=(0,y.useState)(void 0),Re=tn(xe,2),Ve=Re[0],Ye=Re[1],Xe=(0,y.useState)(p.NotActive),Ae=tn(Xe,2),Me=Ae[0],Ie=Ae[1],Ze=(0,y.useState)(5),$e=tn(Ze,2),sn=$e[0],On=$e[1],xn=(0,y.useState)(0),bn=tn(xn,2),vn=bn[0],fn=bn[1],jn=ze({page:vn,rowsPerPage:sn,sortColumn:Ve,sortDirection:Me}),Cn=jn.rows,Pn=jn.totalNum;return(0,g.jsxs)(q,{selectRows:F.selectRows,onChange:function(Ue){var mn=Ue.selectedValue;return de(mn)},selectedValue:ee,children:[(0,g.jsx)(L,{children:(0,g.jsxs)(ve,{children:[F.selectRows&&(0,g.jsx)(I,{radiobutton:!0}),(0,g.jsx)(I,{onChange:function(Ue){var mn=Ue.next;Ye("caseNum"),Ie(mn)},sortDirection:Ve==="caseNum"?Me:p.NotActive,children:"S\xF8knadsnr."}),(0,g.jsx)(I,{onChange:function(Ue){var mn=Ue.next;Ye("product"),Ie(mn)},sortDirection:Ve==="product"?Me:p.NotActive,children:"Produkt"}),(0,g.jsx)(I,{children:"Status"}),(0,g.jsx)(I,{children:"Bilde"})]})}),(0,g.jsx)(We,{children:Cn.map(function(Ke){return(0,g.jsxs)(ve,{rowData:{caseNum:Ke.caseNum},children:[F.selectRows&&(0,g.jsx)(I,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:""+Ke.caseNum,onChange:function(){return de(Ke)},value:""+Ke.caseNum,checked:(ee==null?void 0:ee.caseNum)===Ke.caseNum,label:""+Ke.caseNum,hideLabel:!0})}),(0,g.jsx)(I,{children:Ke.caseNum}),(0,g.jsx)(I,{children:Ke.product}),(0,g.jsx)(I,{children:Ke.status}),(0,g.jsx)(I,{children:(0,g.jsx)("img",{className:b()(hn.checkmark),src:Ke.image.src,alt:Ke.image.alt})})]},Ke.caseNum)})}),(0,g.jsx)(Fe,{children:(0,g.jsx)(ve,{children:(0,g.jsx)(I,{colSpan:5,children:(0,g.jsx)(on.t,{numberOfRows:Pn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:sn,onRowsPerPageChange:function(Ue){On(parseInt(Ue.target.value,10)),fn(0)},currentPage:vn,setCurrentPage:function(Ue){return fn(Ue)},descriptionTexts:pn.descriptionTexts})})})})]})};kn.displayName="Template";var Dn=function(){var F=(0,y.useState)(void 0),te=tn(F,2),Z=te[0],ee=te[1],de=(0,y.useState)(void 0),xe=tn(de,2),Re=xe[0],Ve=xe[1],Ye=(0,y.useState)(p.NotActive),Xe=tn(Ye,2),Ae=Xe[0],Me=Xe[1],Ie=(0,y.useState)(5),Ze=tn(Ie,2),$e=Ze[0],sn=Ze[1],On=(0,y.useState)(0),xn=tn(On,2),bn=xn[0],vn=xn[1],fn=ze({rowsPerPage:$e,page:bn,sortColumn:Re,sortDirection:Ae}),jn=fn.rows,Cn=fn.totalNum,Pn={rows:jn,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:function(Ue){var mn=Ue.column,Wn=Ue.next;Ve(mn),Me(Wn)},sortable:["caseNum","product"],currentlySortedColumn:Re,currentDirection:Ae},renderCell:{image:function(Ue){return(0,g.jsx)("img",{className:b()(hn.checkmark),src:Ue.src,alt:Ue.alt})}},rowSelection:{onSelectionChange:function(Ue){return ee(Ue)},selectedValue:Z},footer:(0,g.jsx)(on.t,{numberOfRows:Cn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:$e,onRowsPerPageChange:function(Ue){sn(parseInt(Ue.target.value,10)),vn(0)},currentPage:bn,setCurrentPage:function(Ue){return vn(Ue)},descriptionTexts:pn.descriptionTexts})};return(0,g.jsx)(Ge,{config:Pn})};Dn.displayName="ResponsiveTemplate";var _n=kn.bind({});_n.args={selectRows:!1},_n.parameters={docs:{description:{story:""}}};var gn=kn.bind({});gn.args={selectRows:!0},gn.parameters={docs:{description:{story:""}}};var yn=Dn.bind({});yn.args={},yn.parameters={docs:{description:{story:""}}},_n.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection,
  });

  return (
    <Table
      selectRows={args.selectRows}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={({ next }) => {
              setSortColumn('caseNum');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            onChange={({ next }) => {
              setSortColumn('product');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'product' ? sortDirection : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.caseNum}
            rowData={{ caseNum: row.caseNum }}
          >
            {args.selectRows && (
              <TableCell radiobutton={true}>
                <RadioButton
                  name={\`\${row.caseNum}\`}
                  onChange={() => setSelected(row)}
                  value={\`\${row.caseNum}\`}
                  checked={selected?.caseNum === row.caseNum}
                  label={\`\${row.caseNum}\`}
                  hideLabel={true}
                ></RadioButton>
              </TableCell>
            )}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img
                className={cn(classes['checkmark'])}
                src={row.image.src}
                alt={row.image.alt}
              ></img>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={totalNum}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              currentPage={page}
              setCurrentPage={(newPage) => setPage(newPage)}
              descriptionTexts={descriptionTexts}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},_n.parameters),gn.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection,
  });

  return (
    <Table
      selectRows={args.selectRows}
      onChange={({ selectedValue }) => setSelected(selectedValue)}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell
            onChange={({ next }) => {
              setSortColumn('caseNum');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            onChange={({ next }) => {
              setSortColumn('product');
              setSortDirection(next);
            }}
            sortDirection={
              sortColumn === 'product' ? sortDirection : SortDirection.NotActive
            }
          >
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.caseNum}
            rowData={{ caseNum: row.caseNum }}
          >
            {args.selectRows && (
              <TableCell radiobutton={true}>
                <RadioButton
                  name={\`\${row.caseNum}\`}
                  onChange={() => setSelected(row)}
                  value={\`\${row.caseNum}\`}
                  checked={selected?.caseNum === row.caseNum}
                  label={\`\${row.caseNum}\`}
                  hideLabel={true}
                ></RadioButton>
              </TableCell>
            )}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img
                className={cn(classes['checkmark'])}
                src={row.image.src}
                alt={row.image.alt}
              ></img>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination
              numberOfRows={totalNum}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(event) => {
                setRowsPerPage(parseInt(event.target.value, 10));
                setPage(0);
              }}
              currentPage={page}
              setCurrentPage={(newPage) => setPage(newPage)}
              descriptionTexts={descriptionTexts}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},gn.parameters),yn.parameters=Object.assign({storySource:{source:`() => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(
    undefined,
  );
  const [sortColumn, setSortColumn] = useState<
    keyof MyExampleTableData | undefined
  >(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    SortDirection.NotActive,
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const { rows, totalNum } = getExampleTableRows({
    rowsPerPage,
    page,
    sortColumn,
    sortDirection,
  });

  const config: ResponsiveTableConfig<MyExampleTableData> = {
    rows,
    headers: {
      caseNum: 'S\xF8knadsnr.',
      product: 'Produkt',
      status: 'Status',
      image: 'Bilde',
    },
    showColumnsMobile: ['product', 'caseNum', 'status'],
    columnSort: {
      onSortChange: ({ column, next }) => {
        setSortColumn(column);
        setSortDirection(next);
      },
      sortable: ['caseNum', 'product'],
      currentlySortedColumn: sortColumn,
      currentDirection: sortDirection,
    },
    renderCell: {
      image: (imageObj) => (
        <img
          className={cn(classes['checkmark'])}
          src={imageObj.src}
          alt={imageObj.alt}
        />
      ),
    },
    rowSelection: {
      onSelectionChange: (row) => setSelected(row),
      selectedValue: selected,
    },
    footer: (
      <Pagination
        numberOfRows={totalNum}
        rowsPerPageOptions={[5, 10, 15, 20]}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        currentPage={page}
        setCurrentPage={(newPage) => setPage(newPage)}
        descriptionTexts={descriptionTexts}
      />
    ),
  };

  return <ResponsiveTable config={config} />;
}`}},yn.parameters);var Nn=["BasicTable","SelectRows","Responsive"]},"./src/components/Tabs/Tabs.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>ce,__namedExportsOrder:()=>$,default:()=>q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./src/utils/arrayUtils.ts"),R=e("./src/hooks/index.ts"),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(C),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css"),u={};u.insert="head",u.singleton=!1;var B=M()(p.Z,u);const A=p.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js");function H(P,_){return ie(P)||me(P,_)||pe(P,_)||ae()}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(P,_){if(!!P){if(typeof P=="string")return ue(P,_);var r=Object.prototype.toString.call(P).slice(8,-1);if(r==="Object"&&P.constructor&&(r=P.constructor.name),r==="Map"||r==="Set")return Array.from(P);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(P,_)}}function ue(P,_){(_==null||_>P.length)&&(_=P.length);for(var r=0,s=new Array(_);r<_;r++)s[r]=P[r];return s}function me(P,_){var r=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(r!=null){var s=[],L=!0,N=!1,ge,be;try{for(r=r.call(P);!(L=(ge=r.next()).done)&&(s.push(ge.value),!(_&&s.length===_));L=!0);}catch(oe){N=!0,be=oe}finally{try{!L&&r.return!=null&&r.return()}finally{if(N)throw be}}return s}}function ie(P){if(Array.isArray(P))return P}var J=function(_){return _.replace(/\s/,"_")},g=function(_){var r=_.activeTab,s=_.items,L=_.onChange,N=(0,n.useId)(),ge=s.map(function(I){var ye=I.name,he=I.content,Te=I.value,je=I.tabId,Le=I.panelId,Ne=Te!=null?Te:ye,Qe=je!=null?je:N+J(Ne)+"-tab",We=Le!=null?Le:N+J(Ne)+"-panel";return{name:ye,content:he,value:Ne,tabId:Qe,panelId:We}});if(!(0,h.zb)(ge.map(function(I){var ye=I.value;return ye})))throw Error("Each tab value must be unique.");if(r!==void 0&&!ge.some(function(I){return I.value===r}))throw Error("The given active tab value must exist in the list of items.");var be=function(ye){return ge.findIndex(function(he){return he.value===ye})},oe=r!=null?r:ge[0].value,se=(0,n.useState)(oe),re=H(se,2),fe=re[0],ve=re[1],Ee=(0,n.useState)(be(oe)),Oe=H(Ee,2),ke=Oe[0],Se=Oe[1];(0,n.useEffect)(function(){return ve(oe)},[oe]);var De=(0,n.useRef)(null),Be=ge.length-1;(0,R.PQ)(function(){var I;(I=De.current)===null||I===void 0||I.querySelectorAll('[role="tab"]')[ke].focus()},[ke]);var we=function(ye){fe!==ye&&L&&L(ye),ve(ye),Se(be(ye))},le=function(){return ke!==void 0&&Se(ke===Be?0:ke+1)},K=function(){return ke!==void 0&&Se(ke===0?Be:ke-1)},W=function(ye){return function(he){switch(he.key){case"ArrowRight":le();break;case"ArrowLeft":K();break;case"Space":we(ye)}}};return(0,z.jsxs)("div",{className:A["altinn-tabs"],children:[(0,z.jsx)("div",{className:A["altinn-tabs__tablist"],ref:De,role:"tablist",children:ge.map(function(I,ye){var he=I.value===fe,Te=l()(A["altinn-tabs__tablist__tab"],he&&A["altinn-tabs__tablist__tab--selected"]);return(0,z.jsx)("button",{"aria-controls":I.panelId,"aria-selected":he,className:Te,id:I.tabId,onClick:function(){return we(I.value)},onKeyDown:W(I.value),role:"tab",tabIndex:ke===ye?0:-1,children:I.name},I.value)})}),(0,z.jsx)("hr",{className:A["altinn-tabs__divider"]}),ge.map(function(I){return(0,z.jsx)("div",{className:A["altinn-tabs__tabpanel"],"aria-labelledby":I.tabId,hidden:I.value!==fe,id:I.panelId,role:"tabpanel",children:I.content},I.panelId)})]})};g.displayName="Tabs";try{g.displayName="Tabs",g.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:g.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(P){}var V=`import React from 'react';
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
                        There is also an optional \\\`value\\\` property that defaults to the value given in the \\\`name\\\` property.
                        This may be useful together with the \\\`activeTab\\\` and \\\`onChange\\\` properties to identify tabs without relying on their name, which may be a dynamic value.
                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).
                        The \\\`activeTab\\\` property can be used to define which tab should be selected by default. It defaults to the first tab.
                        The \\\`onChange\\\` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.\`}
          deprecationWarning={\`Use Tabs from @digdir/design-system-react instead.\`}
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
`,Y={Example:{startLoc:{col:46,line:123},endLoc:{col:74,line:123},startBody:{col:46,line:123},endBody:{col:74,line:123}}},w="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const q={title:"Components/Tabs",component:g,parameters:{design:(0,i.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,z.jsx)(d.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.",deprecationWarning:"Use Tabs from @digdir/design-system-react instead."})}}},args:{items:[{name:"Ild",content:(0,z.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,z.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,z.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var _e=function(_){return(0,z.jsx)(g,Object.assign({},_))};_e.displayName="Template";var ce=_e.bind({});ce.args={},ce.parameters={docs:{description:{story:"This is how the component might look like."}}},ce.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},ce.parameters);var $=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>p,Disabled:()=>z,Error:()=>u,ReadOnlyConfirm:()=>A,ReadOnlyInfo:()=>B,__namedExportsOrder:()=>H,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./src/components/_InputWrapper/index.ts"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/classnames/index.js"),U=e.n(X),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(v),a=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css"),f={};f.insert="head",f.singleton=!1;var y=D()(a.Z,f);const O=a.Z.locals||{};var x=e("./node_modules/react/jsx-runtime.js"),b=["isValid","disabled","readOnly","resize","label"];function m(ae,pe){if(ae==null)return{};var ue=c(ae,pe),me,ie;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(ae);for(ie=0;ie<J.length;ie++)me=J[ie],!(pe.indexOf(me)>=0)&&(!Object.prototype.propertyIsEnumerable.call(ae,me)||(ue[me]=ae[me]))}return ue}function c(ae,pe){if(ae==null)return{};var ue={},me=Object.keys(ae),ie,J;for(J=0;J<me.length;J++)ie=me[J],!(pe.indexOf(ie)>=0)&&(ue[ie]=ae[ie]);return ue}var j=function(pe){var ue=pe.isValid,me=ue===void 0?!0:ue,ie=pe.disabled,J=ie===void 0?!1:ie,g=pe.readOnly,V=g===void 0?!1:g,Y=pe.resize,w=Y===void 0?"none":Y,q=pe.label,_e=m(pe,b);return(0,x.jsx)(ne.SP,{isValid:me,disabled:J,readOnly:V,label:q,inputId:_e.id,inputRenderer:function($){var P=$.className,_=$.inputId;return(0,x.jsx)("textarea",Object.assign({},_e,{id:_,disabled:J,readOnly:Boolean(V),className:U()(P,O["altinn-TextArea"],O["altinn-TextArea--resize-"+w])}))}})};j.displayName="TextArea";try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:j.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(ae){}var l=`import React from 'react';
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
          deprecationWarning={\`Use TextArea from @digdir/design-system-react instead.\`}
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
`,h={Default:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Error:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyInfo:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyConfirm:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Disabled:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}}},R="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const C={title:"Components/TextArea",component:j,parameters:{design:(0,i.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,x.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextArea from @digdir/design-system-react instead."})}}},args:{label:"Label"}};var M=function(pe){return(0,x.jsx)(j,Object.assign({},pe))};M.displayName="Template";var p=M.bind({});p.args={},p.parameters={docs:{description:{story:"Regular textarea."}}};var u=M.bind({});u.args={isValid:!1},u.parameters={docs:{description:{story:"Textarea displaying error."}}};var B=M.bind({});B.args={readOnly:!0,value:"Some text"},B.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var A=M.bind({});A.args={readOnly:ne.Hx.ReadOnlyConfirm,value:"Some text"},A.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var z=M.bind({});z.args={disabled:!0,value:"Some text"},z.parameters={docs:{description:{story:"Textarea as disabled."}}},p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},p.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},u.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},B.parameters),A.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},A.parameters),z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},z.parameters);var H=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>z,Disabled:()=>me,Error:()=>ae,NumberInput:()=>H,ReadOnlyConfirm:()=>ue,ReadOnlyInfo:()=>pe,__namedExportsOrder:()=>ie,default:()=>B});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),ne=e("./src/components/_InputWrapper/index.ts"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),a=e("./node_modules/classnames/index.js"),f=e.n(a),y=e("./node_modules/react-number-format/dist/react-number-format.es.js"),O=function(g){return g.format!==void 0},x=function(g){return g.format===void 0},b=function(g,V){return V&&x(V)?numericFormatter(g,V):V&&O(V)?patternFormatter(g,V):g},m=e("./node_modules/react/jsx-runtime.js"),c=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function j(J,g){if(J==null)return{};var V=l(J,g),Y,w;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(J);for(w=0;w<q.length;w++)Y=q[w],!(g.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(J,Y)||(V[Y]=J[Y]))}return V}function l(J,g){if(J==null)return{};var V={},Y=Object.keys(J),w,q;for(q=0;q<Y.length;q++)w=Y[q],!(g.indexOf(w)>=0)&&(V[w]=J[w]);return V}var h=function(g){var V=g.values,Y=g.sourceInfo;Y.event.target.value=V.value.trim()},R=function(g,V,Y){var w=g.target,q=g.key,_e=w.selectionStart,ce=w.selectionEnd,$=w.value,P=$===void 0?"":$;if(_e!==null&&ce!==null){var _=P[0]==="-",r=(V==null?void 0:V.length)||0+(_?1:0),s=(Y==null?void 0:Y.length)||0;_&&ce<=r&&q==="Backspace"?w.setSelectionRange(1,1):w.setSelectionRange(Math.min(Math.max(_e,r),P.length-s),Math.max(Math.min(ce,P.length-s),r))}},C=function(g){var V=g.id,Y=g.onChange,w=g.isValid,q=w===void 0?!0:w,_e=g.disabled,ce=_e===void 0?!1:_e,$=g.readOnly,P=$===void 0?!1:$,_=g.required,r=_===void 0?!1:_,s=g.formatting,L=g.label,N=j(g,c),ge=function(oe,se){se.source==="event"&&Y&&(h({values:oe,sourceInfo:se}),Y(se.event))};return(0,m.jsx)(ne.SP,{isValid:q,disabled:ce,readOnly:P,label:L,inputId:V,inputRenderer:function(oe){var se=oe.className,re=oe.variant,fe=oe.inputId,ve={id:fe,readOnly:Boolean(P),disabled:ce,required:r,className:f()(se,N.className),style:Object.assign({textAlign:s==null?void 0:s.align},N.style)};return s!=null&&s.number&&x(s.number)?(s.number.prefix&&s.number.prefix[0]==="-"&&(s.number.prefix=" "+s.number.prefix),(0,m.jsx)(y.h3,Object.assign({},ve,s.number,N,{"data-testid":fe+"-formatted-number-"+re,onValueChange:ge,valueIsNumericString:!0,onKeyDown:function(Oe){return R(Oe,s.number.prefix,s.number.suffix)}}))):s!=null&&s.number&&O(s.number)?(0,m.jsx)(y.HH,Object.assign({},ve,s.number,N,{"data-testid":fe+"-formatted-number-"+re,onValueChange:ge,valueIsNumericString:!0})):(0,m.jsx)("input",Object.assign({},ve,N,{"data-testid":fe+"-"+re,onChange:Y}))}})};C.displayName="TextField";try{C.displayName="TextField",C.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:C.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(J){}var M=`import React from 'react';
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
          deprecationWarning={\`Use TextField from @digdir/design-system-react instead.\`}
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
`,p={Default:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},NumberInput:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyInfo:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyConfirm:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}}},u="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const B={title:"Components/TextField",component:C,parameters:{design:(0,i.vc)([{type:"figma",url:u},{type:"link",url:u}]),docs:{page:function(){return(0,m.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextField from @digdir/design-system-react instead."})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var A=function(g){return(0,m.jsx)(C,Object.assign({},g))};A.displayName="Template";var z=A.bind({});z.args={},z.parameters={docs:{description:{story:"Regular input field."}}};var H=A.bind({});H.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},H.parameters={docs:{description:{story:"Number input field."}}};var ae=A.bind({});ae.args={isValid:!1},ae.parameters={docs:{description:{story:"Input field displaying error."}}};var pe=A.bind({});pe.args={readOnly:!0,value:"Some text"},pe.parameters={docs:{description:{story:"Input field as readonly-info."}}};var ue=A.bind({});ue.args={readOnly:ne.Hx.ReadOnlyConfirm,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var me=A.bind({});me.args={disabled:!0,value:"Some text"},me.parameters={docs:{description:{story:"Input field as disabled."}}},z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},z.parameters),H.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},H.parameters),ae.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ae.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},pe.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},me.parameters);var ie=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(E,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>_,__namedExportsOrder:()=>r,default:()=>$});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),O=e("./node_modules/classnames/index.js"),x=e.n(O),b=(0,a.createContext)(void 0),m=function(){var L=(0,a.useContext)(b);if(L===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return L},c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(c),l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),h={};h.insert="head",h.singleton=!1;var R=j()(l.Z,h);const C=l.Z.locals||{};var M=e("./node_modules/react/jsx-runtime.js"),p=function(L){var N=L.children,ge=L.onChange,be=L.selectedValue,oe=function(re){var fe=re.selectedValue;ge({selectedValue:fe})};return(0,M.jsx)(b.Provider,{value:{onChange:oe,selectedValue:be},children:(0,M.jsx)("div",{className:x()(C["toggle-button-group"]),"data-testid":"toggle-button-group",children:N})})};p.displayName="ToggleButtonGroup";try{p.displayName="ToggleButtonGroup",p.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:p.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(s){}var u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css"),B={};B.insert="head",B.singleton=!1;var A=j()(u.Z,B);const z=u.Z.locals||{};var H=function(L){var N,ge=L.children,be=L.value,oe=m(),se=oe.onChange,re=oe.selectedValue,fe=function(){se({selectedValue:be})};return(0,M.jsx)("button",{"data-testid":"toggle-button",className:x()(z["toggle-button"],(N={},N[z["toggle-button--selected"]]=be===re,N)),onClick:fe,type:"button","aria-pressed":be==re,children:ge})};H.displayName="ToggleButton";try{H.displayName="ToggleButton",H.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:H.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(s){}var ae=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),pe={};pe.insert="head",pe.singleton=!1;var ue=j()(ae.Z,pe);const me=ae.Z.locals||{};function ie(s,L){return w(s)||Y(s,L)||g(s,L)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(s,L){if(!!s){if(typeof s=="string")return V(s,L);var N=Object.prototype.toString.call(s).slice(8,-1);if(N==="Object"&&s.constructor&&(N=s.constructor.name),N==="Map"||N==="Set")return Array.from(s);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return V(s,L)}}function V(s,L){(L==null||L>s.length)&&(L=s.length);for(var N=0,ge=new Array(L);N<L;N++)ge[N]=s[N];return ge}function Y(s,L){var N=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(N!=null){var ge=[],be=!0,oe=!1,se,re;try{for(N=N.call(s);!(be=(se=N.next()).done)&&(ge.push(se.value),!(L&&ge.length===L));be=!0);}catch(fe){oe=!0,re=fe}finally{try{!be&&N.return!=null&&N.return()}finally{if(oe)throw re}}return ge}}function w(s){if(Array.isArray(s))return s}var q=`import React, { useState } from 'react';
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
`,_e={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},ce="";const $={title:"Components/Toggle button group",component:p,parameters:{design:(0,f.vc)([{type:"figma",url:ce},{type:"link",url:ce}]),docs:{page:function(){return(0,M.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var P=function(){var L=(0,a.useState)("left"),N=ie(L,2),ge=N[0],be=N[1],oe=function(re){var fe=re.selectedValue;be(fe)};return(0,M.jsx)("div",{className:me.container,children:(0,M.jsxs)(p,{onChange:oe,selectedValue:ge,children:[(0,M.jsx)(H,{value:"left",children:"Aktivt valg"}),(0,M.jsx)(H,{value:"right",children:"Mulig valg"})]})})};P.displayName="Template";var _=P.bind({});_.args={},_.argTypes={onChange:{control:!1},selectedValue:{control:!1}},_.parameters={docs:{description:{}}},_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters);var r=["Example"]},"./src/DesignTokens/index.ts":(E,o,e)=>{"use strict";e.d(o,{T:()=>t});var t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),k=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/Button/index.ts":(E,o,e)=>{"use strict";e.d(o,{zx:()=>l,rp:()=>m,qE:()=>b,Wu:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),ne=e("./node_modules/classnames/index.js"),Q=e.n(ne),G=e("./src/components/SvgIcon/index.ts"),S=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(S),U=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),v={};v.insert="head",v.singleton=!1;var D=X()(U.Z,v);const a=U.Z.locals||{};var f=e("./node_modules/react/jsx-runtime.js"),y=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function O(h,R){if(h==null)return{};var C=x(h,R),M,p;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);for(p=0;p<u.length;p++)M=u[p],!(R.indexOf(M)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,M)||(C[M]=h[M]))}return C}function x(h,R){if(h==null)return{};var C={},M=Object.keys(h),p,u;for(u=0;u<M.length;u++)p=M[u],!(R.indexOf(p)>=0)&&(C[p]=h[p]);return C}var b;(function(h){h.Small="small",h.Medium="medium",h.Large="large"})(b||(b={}));var m;(function(h){h.Primary="primary",h.Secondary="secondary",h.Success="success",h.Danger="danger",h.Inverted="inverted"})(m||(m={}));var c;(function(h){h.Filled="filled",h.Outline="outline",h.Quiet="quiet"})(c||(c={}));var j=function(R,C){var M,p,u,B=R.children,A=R.color,z=A===void 0?m.Primary:A,H=R.variant,ae=H===void 0?c.Filled:H,pe=R.size,ue=pe===void 0?b.Small:pe,me=R.fullWidth,ie=me===void 0?!1:me,J=R.dashedBorder,g=J===void 0?!1:J,V=R.iconPlacement,Y=V===void 0?"left":V,w=R.icon,q=R.type,_e=q===void 0?"button":q,ce=R.className,$=O(R,y);return(0,f.jsxs)("button",Object.assign({},$,{ref:C,className:Q()(a["altinn-button"],a["altinn-button--"+ue],a["altinn-button--"+ae],a["altinn-button--"+z],a["altinn-button--"+ae+"--"+z],(M={},M[a["altinn-button--full-width"]]=ie,M),(p={},p[a["altinn-button--dashed-border"]]=g,p),(u={},u[a["altinn-button--only-icon"]]=!B&&w,u),ce),type:_e,children:[w&&Y==="left"&&(0,f.jsx)(G.l,{svgIconComponent:w,className:a.icon}),B,w&&Y==="right"&&(0,f.jsx)(G.l,{svgIconComponent:w,className:a.icon})]}))};j.displayName="Button";const l=(0,d.forwardRef)(j)},"./src/components/Checkbox/Checkbox.tsx":(E,o,e)=>{"use strict";e.d(o,{X:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),ne=e.n(d),Q=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),G=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(G),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css"),U={};U.insert="head",U.singleton=!1;var v=S()(X.Z,U);const D=X.Z.locals||{};var a=e("./node_modules/react/jsx-runtime.js"),f=function(O){var x=O.checkboxId,b=O.checked,m=O.compact,c=O.description,j=O.disabled,l=O.error,h=O.hideLabel,R=O.label,C=O.name,M=O.onChange,p=O.presentation,u=O.readOnly;return(0,a.jsx)(Q.f,{checked:b,className:ne()(D["altinn-checkbox"],b&&D["altinn-checkbox--checked"],l&&D["altinn-checkbox--error"],j&&D["altinn-checkbox--disabled"],m&&D["altinn-checkbox--compact"],u&&D["altinn-checkbox--read-only"]),description:c,disabled:j,hideInput:u,hideLabel:h,inputId:x,label:R,name:C,onChange:M,presentation:p,size:m?Q.b.Xsmall:Q.b.Small,type:"checkbox",children:(0,a.jsx)("span",{className:D["altinn-visible-box"],children:(0,a.jsx)("span",{className:D["altinn-visible-box__checkmark"]})})})};f.displayName="Checkbox";try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:f.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(y){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(E,o,e)=>{"use strict";e.d(o,{B:()=>S});var t=e("./node_modules/react/index.js"),k=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(k),i=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css"),d={};d.insert="head",d.singleton=!1;var ne=n()(i.Z,d);const Q=i.Z.locals||{};var G=e("./node_modules/react/jsx-runtime.js"),S=function(U){var v=U.id,D=U.children,a=U.ariaLabel;return(0,G.jsx)("div",{"data-testid":"ErrorMessage","aria-label":a,id:v,role:"alertdialog",className:Q["altinn-error-message-wrapper"],children:D})};S.displayName="ErrorMessage";try{S.displayName="ErrorMessage",S.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:S.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(X){}},"./src/components/FieldSet/FieldSet.tsx":(E,o,e)=>{"use strict";e.d(o,{C:()=>f,w:()=>a});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),d=e.n(i),ne=e("./src/components/ErrorMessage/ErrorMessage.tsx"),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(Q),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css"),X={};X.insert="head",X.singleton=!1;var U=G()(S.Z,X);const v=S.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),a;(function(y){y.Xsmall="xsmall",y.Small="small"})(a||(a={}));var f=function(O){var x=O.children,b=O.className,m=O.description,c=O.disabled,j=O.error,l=O.legend,h=O.size,R=h===void 0?a.Small:h;return(0,D.jsxs)("fieldset",{className:d()(v["altinn-field-set"],v["altinn-field-set--"+R],b),disabled:c,children:[l&&(0,D.jsx)("legend",{className:v["altinn-field-set__legend"],children:l}),m&&(0,D.jsx)("p",{className:v["altinn-field-set__description"],children:m}),(0,D.jsx)("div",{className:v["altinn-field-set__content"],children:x}),j&&(0,D.jsx)("div",{className:v["altinn-field-set__error-message"],children:(0,D.jsx)(ne.B,{children:j})})]})};f.displayName="FieldSet";try{f.displayName="FieldSet",f.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:f.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(y){}},"./src/components/FieldSet/index.ts":(E,o,e)=>{"use strict";e.d(o,{C:()=>t.C,w:()=>t.w});var t=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(E,o,e)=>{"use strict";e.d(o,{t:()=>ce});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),D=e("./node_modules/react/index.js"),a=e("./node_modules/classnames/index.js"),f=e.n(a),y=e("./src/hooks/useMediaQuery.ts"),O=e("./src/DesignTokens/index.ts"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(x),m=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css"),c={};c.insert="head",c.singleton=!1;var j=b()(m.Z,c);const l=m.Z.locals||{};var h,R;function C(){return C=Object.assign?Object.assign.bind():function($){for(var P=1;P<arguments.length;P++){var _=arguments[P];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},C.apply(this,arguments)}var M=function(P){return D.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},P),h||(h=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),R||(R=D.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},p,u;function B(){return B=Object.assign?Object.assign.bind():function($){for(var P=1;P<arguments.length;P++){var _=arguments[P];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},B.apply(this,arguments)}var A=function(P){return D.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},P),p||(p=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=D.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},z;function H(){return H=Object.assign?Object.assign.bind():function($){for(var P=1;P<arguments.length;P++){var _=arguments[P];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},H.apply(this,arguments)}var ae=function(P){return D.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},P),z||(z=D.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},pe,ue;function me(){return me=Object.assign?Object.assign.bind():function($){for(var P=1;P<arguments.length;P++){var _=arguments[P];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},me.apply(this,arguments)}var ie=function(P){return D.createElement("svg",me({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},P),pe||(pe=D.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),ue||(ue=D.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},J=e("./node_modules/react/jsx-runtime.js");function g($,P){return _e($)||q($,P)||Y($,P)||V()}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y($,P){if(!!$){if(typeof $=="string")return w($,P);var _=Object.prototype.toString.call($).slice(8,-1);if(_==="Object"&&$.constructor&&(_=$.constructor.name),_==="Map"||_==="Set")return Array.from($);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return w($,P)}}function w($,P){(P==null||P>$.length)&&(P=$.length);for(var _=0,r=new Array(P);_<P;_++)r[_]=$[_];return r}function q($,P){var _=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(_!=null){var r=[],s=!0,L=!1,N,ge;try{for(_=_.call($);!(s=(N=_.next()).done)&&(r.push(N.value),!(P&&r.length===P));s=!0);}catch(be){L=!0,ge=be}finally{try{!s&&_.return!=null&&_.return()}finally{if(L)throw ge}}return r}}function _e($){if(Array.isArray($))return $}var ce=function(P){var _,r,s,L,N=P.numberOfRows,ge=P.rowsPerPageOptions,be=P.rowsPerPage,oe=P.onRowsPerPageChange,se=P.currentPage,re=P.setCurrentPage,fe=P.descriptionTexts,ve=(0,y.a)("(max-width: "+O.T.cLy+")"),Ee=(0,D.useState)(1),Oe=g(Ee,2),ke=Oe[0],Se=Oe[1];(0,D.useEffect)(function(){N<be?Se(1):Se(Math.ceil(N/be))},[be,N]);var De=function(){se<ke-1&&re(se+1)},Be=function(){se>0&&re(se-1)},we=function(){var K=1+se*be,W=be*(se+1)>N?N:be*(se+1);return(0,J.jsx)("span",{className:f()(l["description-text"]),"data-testid":"description-text",children:K+"-"+W+" "+fe.of+" "+N})};return(0,J.jsxs)("div",{className:f()(l["pagination-wrapper"]),children:[(0,J.jsxs)("div",{className:f()(l["pagination-wrapper-row"]),children:[(0,J.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!ve&&fe.rowsPerPage}),(0,J.jsx)("select",{className:f()(l["select-pagination"]),value:be,onChange:function(K){return oe(K)},"aria-labelledby":"number-of-rows-select",children:ge.map(function(le){return(0,J.jsx)("option",{value:le,children:le},le)})}),we()]}),(0,J.jsxs)("div",{className:f()(l["pagination-wrapper-row"]),children:[(0,J.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return re(0)},disabled:se===0,"aria-label":fe.navigateFirstPage,"data-testid":"first-page-icon",children:(0,J.jsx)(ae,{className:f()(l["pagination-icon"],(_={},_[l["pagination-icon--disabled"]]=se===0,_))})}),(0,J.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return Be()},disabled:se===0,"aria-label":fe.previousPage,"data-testid":"pagination-previous-icon",children:(0,J.jsx)(A,{className:f()(l["pagination-icon"],(r={},r[l["pagination-icon--disabled"]]=se===0,r))})}),(0,J.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return De()},disabled:se===ke-1,"aria-label":fe.nextPage,"data-testid":"pagination-next-icon",children:(0,J.jsx)(M,{className:f()(l["pagination-icon"],(s={},s[l["pagination-icon--disabled"]]=se===ke-1,s))})}),(0,J.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return re(ke-1)},disabled:se===ke-1,"aria-label":fe.navigateLastPage,children:(0,J.jsx)(ie,{className:f()(l["pagination-icon"],(L={},L[l["pagination-icon--disabled"]]=se===ke-1,L))})})]})]})};ce.displayName="Pagination";try{ce.displayName="Pagination",ce.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:ce.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch($){}},"./src/components/Panel/Panel.tsx":(E,o,e)=>{"use strict";e.d(o,{s:()=>M,c:()=>l});var t=e("./node_modules/react/index.js"),k=e("./node_modules/classnames/index.js"),n=e.n(k),i=e("./src/DesignTokens/index.ts"),d=e("./src/hooks/useMediaQuery.ts"),ne,Q,G;function S(){return S=Object.assign?Object.assign.bind():function(p){for(var u=1;u<arguments.length;u++){var B=arguments[u];for(var A in B)Object.prototype.hasOwnProperty.call(B,A)&&(p[A]=B[A])}return p},S.apply(this,arguments)}var X=function(u){return t.createElement("svg",S({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},u),ne||(ne=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),Q||(Q=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),G||(G=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},U,v,D;function a(){return a=Object.assign?Object.assign.bind():function(p){for(var u=1;u<arguments.length;u++){var B=arguments[u];for(var A in B)Object.prototype.hasOwnProperty.call(B,A)&&(p[A]=B[A])}return p},a.apply(this,arguments)}var f=function(u){return t.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},u),U||(U=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),v||(v=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),D||(D=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=e.n(y),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),b={};b.insert="head",b.singleton=!1;var m=O()(x.Z,b);const c=x.Z.locals||{};var j=e("./node_modules/react/jsx-runtime.js"),l;(function(p){p.Success="success",p.Info="info",p.Warning="warning",p.Error="error"})(l||(l={}));var h=function(u){var B=u.size,A=u.variant;switch(A){case l.Info:case l.Error:case l.Warning:return(0,j.jsx)(X,{style:{width:B,height:B},"data-testid":"panel-icon-info"});case l.Success:return(0,j.jsx)(f,{style:{width:B,height:B},"data-testid":"panel-icon-success"})}},R=function(u){var B=u.forceMobileLayout,A=(0,d.a)("(max-width: "+i.T.cLy+")");return B?!0:A},C=function(u){var B=u.children;return(0,j.jsx)("div",{className:n()(c["panel__pointer-position"]),children:B})};C.displayName="defaultRenderArrow";var M=function(u){var B,A=u.renderIcon,z=A===void 0?h:A,H=u.title,ae=u.children,pe=u.variant,ue=pe===void 0?l.Info:pe,me=u.showPointer,ie=me===void 0?!1:me,J=u.showIcon,g=J===void 0?!0:J,V=u.forceMobileLayout,Y=V===void 0?!1:V,w=u.renderArrow,q=w===void 0?C:w,_e=R({forceMobileLayout:Y}),ce=_e?i.T.lxo:i.T.mgB;return(0,j.jsxs)("div",{className:n()(c.panel,(B={},B[c["panel--mobile-layout"]]=_e,B)),children:[ie&&q({children:(0,j.jsx)("div",{"data-testid":"panel-pointer",className:n()(c.panel__pointer,c["panel__pointer--"+ue])})}),(0,j.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(c["panel__content-wrapper"],c["panel__content-wrapper--"+ue]),children:[g&&(0,j.jsx)("div",{"data-testid":"panel-icon-wrapper",className:c["panel__icon-wrapper"],children:z({size:ce,variant:ue})}),(0,j.jsxs)("div",{className:c.panel__content,children:[H&&(0,j.jsx)("h2",{className:c.panel__header,children:H}),(0,j.jsx)("div",{className:c.panel__body,children:ae})]})]})]})};M.displayName="Panel";try{M.displayName="Panel",M.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:M.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(p){}},"./src/components/RadioButton/RadioButton.tsx":(E,o,e)=>{"use strict";e.d(o,{E:()=>y,j:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),ne=e.n(d),Q=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),G=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(G),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css"),U={};U.insert="head",U.singleton=!1;var v=S()(X.Z,U);const D=X.Z.locals||{};var a=e("./node_modules/react/jsx-runtime.js"),f;(function(O){O.Xsmall="xsmall",O.Small="small"})(f||(f={}));var y=function(x){var b=x.checked,m=x.description,c=x.disabled,j=x.error,l=x.hideLabel,h=x.label,R=x.name,C=x.onChange,M=x.presentation,p=x.radioId,u=x.size,B=u===void 0?f.Small:u,A=x.value;return(0,a.jsx)(Q.f,{checked:b,className:ne()(D["altinn-radio"],D["altinn-radio--"+B],b&&D["altinn-radio--checked"],j&&D["altinn-radio--error"],c&&D["altinn-radio--disabled"]),description:m,disabled:c,hideLabel:l,inputId:p,label:h,name:R,onChange:C,presentation:M,size:B===f.Xsmall?Q.b.Xsmall:Q.b.Small,type:"radio",value:A,children:(0,a.jsx)("span",{className:D["altinn-visible-button"],children:(0,a.jsx)("span",{className:D["altinn-visible-button__checkmark"]})})})};y.displayName="RadioButton";try{y.displayName="RadioButton",y.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:y.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(O){}},"./src/components/RadioButton/index.ts":(E,o,e)=>{"use strict";e.d(o,{E:()=>t.E,j:()=>t.j});var t=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(E,o,e)=>{"use strict";e.d(o,{P:()=>r});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),ne=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),G=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),c=e("./node_modules/react/index.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),R=e("./src/components/_InputWrapper/index.ts"),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(C),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css"),u={};u.insert="head",u.singleton=!1;var B=M()(p.Z,u);const A=p.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js"),H=function(L){var N=L.deleteButtonLabel,ge=L.disabled,be=L.onDeleteButtonClick,oe=L.label;return(0,z.jsxs)("span",{className:A["altinn-multi-select-item"],children:[(0,z.jsx)("span",{children:oe}),(0,z.jsx)("button",{"aria-label":N,className:A["altinn-multi-select-item__delete-button"],disabled:ge,onClick:be,children:(0,z.jsx)("span",{className:A["altinn-multi-select-item__delete-button__cross"]})})]})};H.displayName="MultiSelectItem";try{H.displayName="MultiSelectItem",H.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:H.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(s){}var ae=e("./src/hooks/index.ts"),pe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css"),ue={};ue.insert="head",ue.singleton=!1;var me=M()(pe.Z,ue);const ie=pe.Z.locals||{};function J(s){return Y(s)||V(s)||_e(s)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(s){if(typeof Symbol!="undefined"&&s[Symbol.iterator]!=null||s["@@iterator"]!=null)return Array.from(s)}function Y(s){if(Array.isArray(s))return ce(s)}function w(s,L){return P(s)||$(s,L)||_e(s,L)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(s,L){if(!!s){if(typeof s=="string")return ce(s,L);var N=Object.prototype.toString.call(s).slice(8,-1);if(N==="Object"&&s.constructor&&(N=s.constructor.name),N==="Map"||N==="Set")return Array.from(s);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return ce(s,L)}}function ce(s,L){(L==null||L>s.length)&&(L=s.length);for(var N=0,ge=new Array(L);N<L;N++)ge[N]=s[N];return ge}function $(s,L){var N=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(N!=null){var ge=[],be=!0,oe=!1,se,re;try{for(N=N.call(s);!(be=(se=N.next()).done)&&(ge.push(se.value),!(L&&ge.length===L));be=!0);}catch(fe){oe=!0,re=fe}finally{try{!be&&N.return!=null&&N.return()}finally{if(oe)throw re}}return ge}}function P(s){if(Array.isArray(s))return s}var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},r=function(L){var N=L.disabled,ge=L.error,be=L.hideLabel,oe=L.inputId,se=L.label,re=L.multiple,fe=L.onChange,ve=L.options,Ee=L.value,Oe=ve.map(function(Ce){return Ce.value});if(Oe.length!==new Set(Oe).size)throw Error("Each value in the option list must be unique.");var ke=(0,c.useState)(re?Ee!=null?Ee:[]:[]),Se=w(ke,2),De=Se[0],Be=Se[1],we=(0,c.useState)(re?void 0:Ee),le=w(we,2),K=le[0],W=le[1],I=ve.findIndex(function(Ce){return Ce.value===K}),ye=(0,c.useState)(!1),he=w(ye,2),Te=he[0],je=he[1];(0,ae.OR)("click",function(){return je(!1)}),(0,ae.OR)("keydown",function(){return je(!0)});var Le=(0,c.useState)(!1),Ne=w(Le,2),Qe=Ne[0],We=Ne[1],He=(0,c.useRef)(null),qe=(0,c.useRef)(null);(0,c.useEffect)(function(){var Ce=He.current;if(Ce){var Pe=Ce.offsetHeight,ze=Ce.getElementsByTagName("li")[0].offsetHeight,on=Ce.scrollTop,Je=on+Pe,en=I*ze,Tn=en+ze,hn=en>=on&&Tn<=Je;hn||(en<on?Ce.scrollTop=en:Ce.scrollTop=Tn-Pe)}},[I]);var cn=function(Pe){var ze;return(ze=ve.find(function(on){return on.value===Pe}))!==null&&ze!==void 0?ze:{label:"",value:""}},rn=function(Pe,ze){De!=null&&De.length||W(ze),Be(Pe),fe&&fe(Pe)},ln=function(Pe){W(Pe),We(!1),fe&&fe(Pe)},nn=function(Pe){re?De.includes(Pe)?dn(Pe):rn([].concat(J(De),[Pe]),Pe):ln(Pe)},dn=function(Pe){rn(De.filter(function(ze){return ze!==Pe}),Pe)},Fe=function(){rn([])},Ge=(0,c.useCallback)(function(){if(K===void 0)W(ve[0].value);else{var Ce=I+1;Ce>=0&&Ce<ve.length&&W(ve[Ce].value)}We(!0)},[K,I,W,ve]),an=(0,c.useCallback)(function(){if(K===void 0)W(ve[ve.length-1].value);else{var Ce=I-1;Ce>=0&&Ce<ve.length&&W(ve[Ce].value)}We(!0)},[K,I,W,ve]);(0,ae.OG)(_.ArrowDown,function(){return Qe&&Ge()}),(0,ae.OG)(_.ArrowUp,function(){return Qe&&an()}),(0,ae.OG)(_.Enter,function(){return Qe&&re&&K&&nn(K)});var un=function(Pe){return K===Pe},pn=function(Pe){return re?De.includes(Pe):un(Pe)},Sn=(0,c.useId)(),En=qe.current?"calc("+qe.current.offsetWidth+"px + 2 * "+h.wU.qH.fO.Z.S+")":void 0;return(0,z.jsxs)("div",{className:l()(ie["altinn-select"],ie["altinn-select--"+(re?"multiple":"single")],Qe&&ie["altinn-select--expanded"],N&&ie["altinn-select--disabled"],Te&&ie["altinn-select--using-keyboard"]),"data-testid":"select-root",children:[(0,z.jsx)(R.SP,{disabled:N,inputId:oe,inputRenderer:function(Pe){var ze=Pe.className,on=Pe.inputId;return(0,z.jsxs)("span",{className:l()(ze,ie["altinn-select__field"]),ref:qe,children:[re&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{className:ie["altinn-select--multiple__field__values"],children:De.map(cn).map(function(Je){return(0,z.jsx)(H,{deleteButtonLabel:Je.deleteButtonLabel,disabled:N!=null?N:!1,label:Je.label,onDeleteButtonClick:function(){return dn(Je.value)}},Je.value)})}),(0,z.jsx)("button",{"aria-label":L.deleteButtonLabel,className:ie["altinn-select--multiple__field__delete-button"],disabled:!De.length||N,onClick:function(){return Fe()},children:(0,z.jsx)("span",{className:ie["altinn-select--multiple__field__delete-button__cross"]})})]}),(0,z.jsxs)("button",{"aria-controls":Sn,"aria-expanded":Qe,"aria-label":se,className:ie["altinn-select__field__button"],disabled:N,id:on,onBlur:function(){return We(!1)},onClick:function(){return We(!Qe)},onKeyDown:function(en){Object.values(_).includes(en.key)&&(en.preventDefault(),We(!0))},role:"combobox",value:re?De:K,children:[!re&&(0,z.jsx)("span",{className:ie["altinn-select--single__field__value"],children:cn(K).label}),(0,z.jsx)("span",{className:ie["altinn-select__field__arrow-wrapper"],children:(0,z.jsx)("span",{className:ie["altinn-select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!ge,label:be?void 0:se,noFocusEffect:re,noPadding:!0,readOnly:!1}),(0,z.jsx)("ul",{className:ie["altinn-select__option-list"],id:Sn,ref:He,role:"listbox",style:{width:En},children:ve.map(function(Ce){return(0,z.jsx)("li",{"aria-selected":pn(Ce.value),className:l()(ie["altinn-select__option-list__option"],pn(Ce.value)&&ie["altinn-select__option-list__option--selected"],re&&un(Ce.value)&&ie["altinn-select--multiple__option-list__option--focused"]),onClick:function(){return nn(Ce.value)},onMouseDown:function(ze){return ze.preventDefault()},onKeyDown:function(ze){return ze.preventDefault()},role:"option",value:Ce.value,children:Ce.label},Ce.value)})})]})};r.displayName="Select";try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:r.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(s){}},"./src/components/SvgIcon/index.ts":(E,o,e)=>{"use strict";e.d(o,{l:()=>S});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),ne=["svgIconComponent"];function Q(X,U){if(X==null)return{};var v=G(X,U),D,a;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(X);for(a=0;a<f.length;a++)D=f[a],!(U.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(X,D)||(v[D]=X[D]))}return v}function G(X,U){if(X==null)return{};var v={},D=Object.keys(X),a,f;for(f=0;f<D.length;f++)a=D[f],!(U.indexOf(a)>=0)&&(v[a]=X[a]);return v}var S=function(U){var v=U.svgIconComponent,D=Q(U,ne);return(0,d.isValidElement)(v)?(0,d.cloneElement)(v,Object.assign({},D)):null};try{S.displayName="SvgIcon",S.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:S.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(X){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(E,o,e)=>{"use strict";e.d(o,{f:()=>f,b:()=>a});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),ne=e.n(d),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),G=e.n(Q),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),X={};X.insert="head",X.singleton=!1;var U=G()(S.Z,X);const v=S.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),a;(function(y){y.Xsmall="xsmall",y.Small="small"})(a||(a={}));var f=function(O){var x=O.checked,b=O.children,m=O.className,c=O.description,j=O.disabled,l=O.hideInput,h=O.hideLabel,R=O.inputId,C=O.label,M=O.name,p=O.onChange,u=O.presentation,B=O.size,A=O.type,z=O.value,H=(0,i.useId)(),ae=R!=null?R:"input-"+H,pe=C?ae+"-label":void 0,ue=c?ae+"-description":void 0,me=C&&!h;return(0,D.jsxs)("label",{className:ne()(v["altinn-template"],v["altinn-template--"+B],j&&v["altinn-template--disabled"],m),htmlFor:R,children:[!l&&(0,D.jsxs)("span",{className:v["altinn-template__input-wrapper"],children:[(0,D.jsx)("input",{"aria-describedby":ue,"aria-label":!me&&typeof C=="string"?C:void 0,"aria-labelledby":me?pe:void 0,checked:x!=null?x:!1,className:v["altinn-template__input-wrapper__input"],disabled:j,id:ae,name:M,onChange:j?void 0:p,role:u?"presentation":void 0,type:A,value:z}),(0,D.jsx)("span",{className:v["altinn-template__input-wrapper__visible-box"],children:b})]}),(me||c)&&(0,D.jsxs)("span",{className:v["altinn-template__label-and-description"],children:[me&&(0,D.jsx)("span",{className:v["altinn-template__label-and-description__label"],id:pe,children:C}),c&&(0,D.jsx)("span",{className:v["altinn-template__label-and-description__description"],id:ue,children:c})]})]})};f.displayName="CheckboxRadioTemplate";try{f.displayName="CheckboxRadioTemplate",f.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:f.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(y){}},"./src/components/_InputWrapper/index.ts":(E,o,e)=>{"use strict";e.d(o,{SP:()=>j,Hx:()=>d});var t=e("./node_modules/react/index.js"),k=e("./node_modules/classnames/index.js"),n=e.n(k),i;(function(l){l.Default="default",l.Error="error",l.Disabled="disabled",l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm"})(i||(i={}));var d;(function(l){l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm"})(d||(d={}));var ne;(function(l){l.None="none",l.Error="error",l.Search="search"})(ne||(ne={}));var Q=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=h.readOnly,C=R===void 0?!1:R,M=h.disabled,p=M===void 0?!1:M,u=h.isValid,B=u===void 0?!0:u,A=h.isSearch,z=A===void 0?!1:A,H=ne.None;return z&&(H=ne.Search),p?{variant:i.Disabled,iconVariant:H}:C===!0||C===d.ReadOnlyInfo?{variant:i.ReadOnlyInfo,iconVariant:H}:C===d.ReadOnlyConfirm?{variant:i.ReadOnlyConfirm,iconVariant:H}:B===!1?{variant:i.Error,iconVariant:ne.Error}:{variant:i.Default,iconVariant:H}},G;function S(){return S=Object.assign?Object.assign.bind():function(l){for(var h=1;h<arguments.length;h++){var R=arguments[h];for(var C in R)Object.prototype.hasOwnProperty.call(R,C)&&(l[C]=R[C])}return l},S.apply(this,arguments)}var X=function(h){return t.createElement("svg",S({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),G||(G=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},U;function v(){return v=Object.assign?Object.assign.bind():function(l){for(var h=1;h<arguments.length;h++){var R=arguments[h];for(var C in R)Object.prototype.hasOwnProperty.call(R,C)&&(l[C]=R[C])}return l},v.apply(this,arguments)}var D=function(h){return t.createElement("svg",v({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),U||(U=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(a),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),O={};O.insert="head",O.singleton=!1;var x=f()(y.Z,O);const b=y.Z.locals||{};var m=e("./node_modules/react/jsx-runtime.js"),c=function(h){var R=h.variant,C=h.disabled,M=C===void 0?!1:C;if(R===ne.Error)return(0,m.jsx)("div",{className:b.InputWrapper__icon,children:(0,m.jsx)(X,{"data-testid":"input-icon-error"})});if(R===ne.Search){var p;return(0,m.jsx)("div",{className:n()(b.InputWrapper__icon,(p={},p[b["InputWrapper__icon--disabled"]]=M,p)),children:(0,m.jsx)(D,{"data-testid":"input-icon-search"})})}return null};try{c.displayName="Icon",c.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:c.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(l){}var j=function(h){var R,C=h.isValid,M=C===void 0?!0:C,p=h.disabled,u=p===void 0?!1:p,B=h.readOnly,A=B===void 0?!1:B,z=h.isSearch,H=z===void 0?!1:z,ae=h.label,pe=h.inputId,ue=h.inputRenderer,me=h.noFocusEffect,ie=h.noPadding,J=(0,t.useId)(),g=pe!=null?pe:J,V=Q({readOnly:A,disabled:u,isValid:M,isSearch:H}),Y=V.variant,w=V.iconVariant;return(0,m.jsxs)(m.Fragment,{children:[ae&&(0,m.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(b.InputWrapper__label),htmlFor:g,children:ae}),(0,m.jsxs)("div",{"data-testid":"InputWrapper",className:n()(b.InputWrapper,b["InputWrapper--"+Y],(R={},R[b["InputWrapper--search"]]=H,R[b["InputWrapper--with-focus-effect"]]=!me,R[b["InputWrapper--with-padding"]]=!ie,R)),children:[(0,m.jsx)(c,{variant:w,disabled:u}),ue({className:b.InputWrapper__field,inputId:g,variant:Y})]})]})};try{j.displayName="InputWrapper",j.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:j.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(l){}},"./src/hooks/index.ts":(E,o,e)=>{"use strict";e.d(o,{OR:()=>k,OG:()=>n,D9:()=>i,PQ:()=>d});var t=e("./node_modules/react/index.js");function k(ne,Q){(0,t.useEffect)(function(){return document.addEventListener(ne,Q),function(){return document.removeEventListener(ne,Q)}},[ne,Q])}function n(ne,Q){(0,t.useEffect)(function(){var G=function(X){X.key===ne&&Q()};return document.addEventListener("keydown",G),function(){return document.removeEventListener("keydown",G)}},[ne,Q])}function i(ne){var Q=(0,t.useRef)();return(0,t.useEffect)(function(){Q.current=ne},[ne]),Q.current}var d=function(Q,G){var S=(0,t.useRef)(!0);(0,t.useEffect)(function(){if(S.current)S.current=!1;else return Q()},G)}},"./src/hooks/useMediaQuery.ts":(E,o,e)=>{"use strict";e.d(o,{a:()=>B});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),ne=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),G=e.n(Q),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(S),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),v=e.n(U),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),a=e.n(D),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e.n(f),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e.n(O),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e.n(b),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e.n(c),l=e("./node_modules/react/index.js");function h(A,z){return u(A)||p(A,z)||C(A,z)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(A,z){if(!!A){if(typeof A=="string")return M(A,z);var H=Object.prototype.toString.call(A).slice(8,-1);if(H==="Object"&&A.constructor&&(H=A.constructor.name),H==="Map"||H==="Set")return Array.from(A);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return M(A,z)}}function M(A,z){(z==null||z>A.length)&&(z=A.length);for(var H=0,ae=new Array(z);H<z;H++)ae[H]=A[H];return ae}function p(A,z){var H=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(H!=null){var ae=[],pe=!0,ue=!1,me,ie;try{for(H=H.call(A);!(pe=(me=H.next()).done)&&(ae.push(me.value),!(z&&ae.length===z));pe=!0);}catch(J){ue=!0,ie=J}finally{try{!pe&&H.return!=null&&H.return()}finally{if(ue)throw ie}}return ae}}function u(A){if(Array.isArray(A))return A}function B(A){var z=function(J){var g,V;return(g=(V=window)===null||V===void 0?void 0:V.matchMedia(J).matches)!==null&&g!==void 0?g:!1},H=(0,l.useState)(z(A)),ae=h(H,2),pe=ae[0],ue=ae[1],me=function(){ue(z(A))};return(0,l.useEffect)(function(){var ie=window.matchMedia(A);return me(),ie.addEventListener("change",me),function(){return ie.removeEventListener("change",me)}},[A]),pe}},"./src/utils/arrayUtils.ts":(E,o,e)=>{"use strict";e.d(o,{cO:()=>U,zb:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),k=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),ne=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),G=e.n(Q),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(S);function U(a,f){if(a===f)return!0;if(a===void 0||f===void 0||a.length!==f.length)return!1;for(var y in a)if(a[y]!==f[y])return!1;return!0}function v(a){return a[a.length-1]}function D(a){return a.length===new Set(a).size}},"./storybook-init-framework-entry.js":(E,o,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.tyMY32TvkHDF8ZcennN\\+rw\\=\\= {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),n.locals={accordion:"tyMY32TvkHDF8ZcennN+rw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.AYJEVhVUCPNhIkdoY9L8Qw\\=\\= {
  width: 80vw;
}
`,""]),n.locals={container:"AYJEVhVUCPNhIkdoY9L8Qw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.bHJmGU5sUxKWla0mf2uWjg\\=\\= {
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
  .R-AQdDhQHxYTukb-nSP9Aw\\=\\= {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .R-AQdDhQHxYTukb-nSP9Aw\\=\\= {
    opacity: 60%;
    font-size: 0.9rem;
    display: block;
  }
  .Ei7ai3cperzTatRVCUKEiA\\=\\= {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }
}

._2GCHs-3akoZ4nQ3ykkw6dg\\=\\= {
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
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

._91wKOkVBUdGPK4QUEykiYw\\=\\= {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0 0.2rem;
}
`,""]),n.locals={"accordion-header":"bHJmGU5sUxKWla0mf2uWjg==","accordion-header__subtitle":"R-AQdDhQHxYTukb-nSP9Aw==","accordion-header--subtitle":"Ei7ai3cperzTatRVCUKEiA==","accordion-header__title":"_2GCHs-3akoZ4nQ3ykkw6dg==","accordion-header__actions":"_91wKOkVBUdGPK4QUEykiYw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.XavJEiuidDgCiNx4DoHhSw\\=\\= {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

._2lKbkok1eRn8cgFFv33ggQ\\=\\= {
  transform: rotate(90deg);
}
`,""]),n.locals={"accordion-icon":"XavJEiuidDgCiNx4DoHhSw==","accordion-icon--opened":"_2lKbkok1eRn8cgFFv33ggQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),n.push([E.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.Rpukn9xRQJNHk-d00DYJZA\\=\\= {
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

.Rpukn9xRQJNHk-d00DYJZA\\=\\=:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Rpukn9xRQJNHk-d00DYJZA\\=\\=:focus:not(:focus-visible) {
  outline: none;
}

.Rpukn9xRQJNHk-d00DYJZA\\=\\=:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.lzTFhKYYpZ6oOQYy7Ny15g\\=\\= {
  height: var(--icon-size);
  width: var(--icon-size);
}

.b56IqUPa8YtxEadvuN2s-g\\=\\= {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

._67qzBbLNVwbEP2lGy72-Qw\\=\\= {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

._6-qcO3o6q0r9zr8jtwItqg\\=\\= {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.\\+dhr5mVGT98wPGvYdXqIIA\\=\\= {
  width: 100%;
}

.tGLwJ8ARxqRjqOJbLDxoeA\\=\\= {
  border-style: dashed;
}

.juBmDuE28ovhDWACwh1BLA\\=\\= {
  padding: 0.5rem !important;
}

.hMMZZ4eEilsaZmFZMnl8Sw\\=\\= {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.-bPQQb0fsaCuGPqcUqNSEw\\=\\= {
  border-radius: 3px;
  background-color: transparent;
}

.S7HTWmb8rvOx0PUk7QsxAg\\=\\= {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.pt9axdbF1\\+PvpS4lcPIt6g\\=\\= {
  background: var(--component-button-filled-primary-color-background-default);
}

.pt9axdbF1\\+PvpS4lcPIt6g\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.pt9axdbF1\\+PvpS4lcPIt6g\\=\\=:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.NAcapYB98eU7XEYhkckOXA\\=\\= {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.NAcapYB98eU7XEYhkckOXA\\=\\=:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.NAcapYB98eU7XEYhkckOXA\\=\\=:not(:disabled):active {
  background: var(--colors-blue-950);
}

.EhPlDMHjMlU61ZlNzLPi2g\\=\\= {
  background: var(--component-button-filled-success-color-background-default);
}

.EhPlDMHjMlU61ZlNzLPi2g\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.EhPlDMHjMlU61ZlNzLPi2g\\=\\=:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.sw8kQjlsGPicR0raq\\+qeIA\\=\\= {
  background: var(--component-button-filled-danger-color-background-default);
}

.sw8kQjlsGPicR0raq\\+qeIA\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.sw8kQjlsGPicR0raq\\+qeIA\\=\\=:not(:disabled):active {
  background: var(--colors-red-800);
}

.VIMerYm5yDrmH4Jn9Jlv8g\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.VIMerYm5yDrmH4Jn9Jlv8g\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.VIMerYm5yDrmH4Jn9Jlv8g\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.VIMerYm5yDrmH4Jn9Jlv8g\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.\\+-xr4oxvOaD1fIsYPtxmzQ\\=\\= {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.\\+-xr4oxvOaD1fIsYPtxmzQ\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.\\+-xr4oxvOaD1fIsYPtxmzQ\\=\\=:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.fzmuATwPYJsZLHXpjdSYng\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.fzmuATwPYJsZLHXpjdSYng\\=\\=:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.fzmuATwPYJsZLHXpjdSYng\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.-OvzVIoYMaALV5ZxPRa\\+Fw\\=\\= {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.-OvzVIoYMaALV5ZxPRa\\+Fw\\=\\=:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.-OvzVIoYMaALV5ZxPRa\\+Fw\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.GUgW3At90ZCp8coB4b6LBA\\=\\= {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.GUgW3At90ZCp8coB4b6LBA\\=\\=:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.GUgW3At90ZCp8coB4b6LBA\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.TiXNfUBQGuJ9-7Xny83EDQ\\=\\= {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.TiXNfUBQGuJ9-7Xny83EDQ\\=\\=:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.TiXNfUBQGuJ9-7Xny83EDQ\\=\\=:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.TiXNfUBQGuJ9-7Xny83EDQ\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.hUtYKXtR3xvGo1ltn7pzDQ\\=\\= {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.hUtYKXtR3xvGo1ltn7pzDQ\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.hUtYKXtR3xvGo1ltn7pzDQ\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.qlazmgHMDYc49tO4DqyqvA\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.qlazmgHMDYc49tO4DqyqvA\\=\\=:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.qlazmgHMDYc49tO4DqyqvA\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.U4Qgq7tcMLu9pjaRS4YH4Q\\=\\= {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.U4Qgq7tcMLu9pjaRS4YH4Q\\=\\=:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.U4Qgq7tcMLu9pjaRS4YH4Q\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.zBi\\+ljk7FW9ThAlMpYvd5A\\=\\= {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.zBi\\+ljk7FW9ThAlMpYvd5A\\=\\=:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.zBi\\+ljk7FW9ThAlMpYvd5A\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.uSecvfY7ysZ05KTW4bZjQg\\=\\= {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.uSecvfY7ysZ05KTW4bZjQg\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.uSecvfY7ysZ05KTW4bZjQg\\=\\=:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.uSecvfY7ysZ05KTW4bZjQg\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}
`,""]),n.locals={"altinn-button":"Rpukn9xRQJNHk-d00DYJZA==",icon:"lzTFhKYYpZ6oOQYy7Ny15g==","altinn-button--small":"b56IqUPa8YtxEadvuN2s-g==","altinn-button--medium":"_67qzBbLNVwbEP2lGy72-Qw==","altinn-button--large":"_6-qcO3o6q0r9zr8jtwItqg==","altinn-button--full-width":"+dhr5mVGT98wPGvYdXqIIA==","altinn-button--dashed-border":"tGLwJ8ARxqRjqOJbLDxoeA==","altinn-button--only-icon":"juBmDuE28ovhDWACwh1BLA==","altinn-button--filled":"hMMZZ4eEilsaZmFZMnl8Sw==","altinn-button--outline":"-bPQQb0fsaCuGPqcUqNSEw==","altinn-button--quiet":"S7HTWmb8rvOx0PUk7QsxAg==","altinn-button--filled--primary":"pt9axdbF1+PvpS4lcPIt6g==","altinn-button--filled--secondary":"NAcapYB98eU7XEYhkckOXA==","altinn-button--filled--success":"EhPlDMHjMlU61ZlNzLPi2g==","altinn-button--filled--danger":"sw8kQjlsGPicR0raq+qeIA==","altinn-button--filled--inverted":"VIMerYm5yDrmH4Jn9Jlv8g==","altinn-button--outline--primary":"+-xr4oxvOaD1fIsYPtxmzQ==","altinn-button--outline--secondary":"fzmuATwPYJsZLHXpjdSYng==","altinn-button--outline--success":"-OvzVIoYMaALV5ZxPRa+Fw==","altinn-button--outline--danger":"GUgW3At90ZCp8coB4b6LBA==","altinn-button--outline--inverted":"TiXNfUBQGuJ9-7Xny83EDQ==","altinn-button--quiet--primary":"hUtYKXtR3xvGo1ltn7pzDQ==","altinn-button--quiet--secondary":"qlazmgHMDYc49tO4DqyqvA==","altinn-button--quiet--success":"U4Qgq7tcMLu9pjaRS4YH4Q==","altinn-button--quiet--danger":"zBi+ljk7FW9ThAlMpYvd5A==","altinn-button--quiet--inverted":"uSecvfY7ysZ05KTW4bZjQg=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`._6cvF3VAbKtNmrdGxCUV8BA\\=\\= {
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

._7zf2ATnLewY2YbGJG3kVBA\\=\\= {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.NivKAZL4V\\+7F1RlnG3imJA\\=\\= {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.-Iyc0jAUikLmGhLX20VTYw\\=\\= {
  --checkbox-checkmark-display: inline-block;
}

.-Iyc0jAUikLmGhLX20VTYw\\=\\=:not(.WNrg3FUVIEKurYXV8rqmDA\\=\\=) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

._6cvF3VAbKtNmrdGxCUV8BA\\=\\=:not(
    .WNrg3FUVIEKurYXV8rqmDA\\=\\=,
    .-Iyc0jAUikLmGhLX20VTYw\\=\\=
  ):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

._6cvF3VAbKtNmrdGxCUV8BA\\=\\=:not(
    .WNrg3FUVIEKurYXV8rqmDA\\=\\=,
    .NivKAZL4V\\+7F1RlnG3imJA\\=\\=,
    .-Iyc0jAUikLmGhLX20VTYw\\=\\=
  ):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.WNrg3FUVIEKurYXV8rqmDA\\=\\=.-Iyc0jAUikLmGhLX20VTYw\\=\\= {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.NC5gUZmpyIfxbbwGYK8bYw\\=\\= {
  --cursor: auto;
}

.\\-5WMbVDfVXd4lKKAGQmh0A\\=\\= {
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

.W6NYQiBqa4fDAYmBwSL0zQ\\=\\= {
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
`,""]),n.locals={"altinn-checkbox":"_6cvF3VAbKtNmrdGxCUV8BA==","altinn-checkbox--compact":"_7zf2ATnLewY2YbGJG3kVBA==","altinn-checkbox--error":"NivKAZL4V+7F1RlnG3imJA==","altinn-checkbox--checked":"-Iyc0jAUikLmGhLX20VTYw==","altinn-checkbox--disabled":"WNrg3FUVIEKurYXV8rqmDA==","altinn-checkbox--read-only":"NC5gUZmpyIfxbbwGYK8bYw==","altinn-visible-box":"-5WMbVDfVXd4lKKAGQmh0A==","altinn-visible-box__checkmark":"W6NYQiBqa4fDAYmBwSL0zQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.QG9cxeNUql-KOCXlDEvm7w\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.HTv5-q0A4T-TzQsD9aXNJg\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.IkHC5tBY9XQPN3ZtUwT9Pw\\=\\= {
  flex-direction: column;
}

.ifL1EO087Crq-ngEheO0nA\\=\\= {
  flex-direction: row;
}
`,""]),n.locals={"altinn-checkbox-group":"QG9cxeNUql-KOCXlDEvm7w==","altinn-checkbox-group--compact":"HTv5-q0A4T-TzQsD9aXNJg==","altinn-checkbox-group--vertical":"IkHC5tBY9XQPN3ZtUwT9Pw==","altinn-checkbox-group--horizontal":"ifL1EO087Crq-ngEheO0nA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.NTqKTbIBK1CSNC8WbgbZ7Q\\=\\= {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.WH18iHRFnpU4UnExhNnc\\+A\\=\\= {
  transition: stroke-dashoffset 1s ease-in-out;
}

.nAJVyVZi6iBoq6RpO2qgAg\\=\\= {
  position: relative;
}

._12tl\\+lgdk2k7GREN6Fu52A\\=\\= {
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
`,""]),n.locals={svg:"NTqKTbIBK1CSNC8WbgbZ7Q==",circleTransition:"WH18iHRFnpU4UnExhNnc+A==",container:"nAJVyVZi6iBoq6RpO2qgAg==",label:"_12tl+lgdk2k7GREN6Fu52A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.IoZCSKoS7L1bZ82J1gYNlw\\=\\= {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),n.locals={"altinn-error-message-wrapper":"IoZCSKoS7L1bZ82J1gYNlw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.UNESAQpZG6tzsRbdm8\\+Vbg\\=\\= {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.JZAkFzQ6g7vJjQqcYxD5tw\\=\\= {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.UNESAQpZG6tzsRbdm8\\+Vbg\\=\\=:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.UNESAQpZG6tzsRbdm8\\+Vbg\\=\\=:disabled * {
  opacity: 1;
}

.QINSYREYKZyvy5XKaWqiZQ\\=\\= {
  font-weight: bold;
  padding: 0;
}

.Q5iUTDYGwtxoKymuXMlLPQ\\=\\= {
  color: var(--description-color);
  margin: 0;
}

.QINSYREYKZyvy5XKaWqiZQ\\=\\= + .Q5iUTDYGwtxoKymuXMlLPQ\\=\\= {
  margin-top: var(--description-margin_top);
}

.Fs2jaEIJ0JQJMvBCwOt7pw\\=\\=:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.rIAGXHT9wNLIBLYV6VsqYA\\=\\= {
  margin-top: var(--error_message-margin_top);
}
`,""]),n.locals={"altinn-field-set":"UNESAQpZG6tzsRbdm8+Vbg==","altinn-field-set--xsmall":"JZAkFzQ6g7vJjQqcYxD5tw==","altinn-field-set__legend":"QINSYREYKZyvy5XKaWqiZQ==","altinn-field-set__description":"Q5iUTDYGwtxoKymuXMlLPQ==","altinn-field-set__content":"Fs2jaEIJ0JQJMvBCwOt7pw==","altinn-field-set__error-message":"rIAGXHT9wNLIBLYV6VsqYA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.kVxFDkDp1WiqFARNx40efA\\=\\= {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.N9NwN7tigj3zhHV6vAI1Yg\\=\\= {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

._1OjGKU1AWWv4onZHVy8gMg\\=\\= {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`,""]),n.locals={list:"kVxFDkDp1WiqFARNx40efA==","list--solid":"N9NwN7tigj3zhHV6vAI1Yg==","list--dashed":"_1OjGKU1AWWv4onZHVy8gMg=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.PFSVXvkixjcwfiBNWK-KGw\\=\\= {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .PFSVXvkixjcwfiBNWK-KGw\\=\\= {
    width: 300px;
  }
}
`,""]),n.locals={container:"PFSVXvkixjcwfiBNWK-KGw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.kEMtpd0vDKSFN8sg4Zat8w\\=\\= {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.PM38trUJ7HE3lYjM1aAEKQ\\=\\= {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ayTZ1Tz-7hmw9Xr8jgrg1A\\=\\= {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`,""]),n.locals={"list-item":"kEMtpd0vDKSFN8sg4Zat8w==","list-item--solid":"PM38trUJ7HE3lYjM1aAEKQ==","list-item--dashed":"ayTZ1Tz-7hmw9Xr8jgrg1A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.FtDdsbEAM33qIgoRUszLaA\\=\\= {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),n.locals={map:"FtDdsbEAM33qIgoRUszLaA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.Mbb3fzMlklC4bB5nt8fvgQ\\=\\= {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),n.locals={page:"Mbb3fzMlklC4bB5nt8fvgQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.w0djuOyMj4iJjw\\+xnbxnBQ\\=\\= {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),n.locals={"page-content":"w0djuOyMj4iJjw+xnbxnBQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.-beL2kFpvp7WDWkJr8TBZg\\=\\= {
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
  fill: var(--component-page_header-color);
}

.AluzwyTlCuv1MlVQSq3Muw\\=\\= {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.yBWULdwIkJV8mVakLU6sFg\\=\\= {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.qGezCOaw\\+0uJJRA-y33ITw\\=\\= {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.FNIUvKff1lwZLEaoDsSTDQ\\=\\= {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`,""]),n.locals={"page-header":"-beL2kFpvp7WDWkJr8TBZg==","page-header--primary":"AluzwyTlCuv1MlVQSq3Muw==","page-header--success":"yBWULdwIkJV8mVakLU6sFg==","page-header--small":"qGezCOaw+0uJJRA-y33ITw==","page-header--medium":"FNIUvKff1lwZLEaoDsSTDQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`._3GFSutpV5Q6iwd5VMJPC3A\\=\\= {
  fill: rgb(0, 0, 0);
}

._3GFSutpV5Q6iwd5VMJPC3A\\=\\=:not(:last-child) {
  margin-right: 20px;
}

._3GFSutpV5Q6iwd5VMJPC3A\\=\\=:hover {
  cursor: pointer;
}

.CN4Pm94YHEsSqZ1j8D3CiA\\=\\= {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.bi-VW11-SL2\\+iaKLszbuoQ\\=\\= {
  display: flex;
  align-items: center;
  justify-content: right;
}

.eMU9U091xipg7kcuaHFu4A\\=\\= {
  background-color: transparent;
  margin: 5px;
  border: none;
}

.msPRefgGC7JcQ89NocZN3A\\=\\= {
  margin-right: 64px;
}

.N9aaKkJuHiCfcKiq\\+DM0kw\\=\\= {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .bi-VW11-SL2\\+iaKLszbuoQ\\=\\= {
    display: flex;
    flex-direction: column;
  }
  .RjVcmiVd2eJ7i\\+jH6NM6TA\\=\\= {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .msPRefgGC7JcQ89NocZN3A\\=\\= {
    margin-top: 10px;
    margin-right: 30px;
  }
  .N9aaKkJuHiCfcKiq\\+DM0kw\\=\\= {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`,""]),n.locals={"pagination-icon":"_3GFSutpV5Q6iwd5VMJPC3A==","pagination-icon--disabled":"CN4Pm94YHEsSqZ1j8D3CiA==","pagination-wrapper":"bi-VW11-SL2+iaKLszbuoQ==","icon-button":"eMU9U091xipg7kcuaHFu4A==","description-text":"msPRefgGC7JcQ89NocZN3A==","select-pagination":"N9aaKkJuHiCfcKiq+DM0kw==","pagination-wrapper-row":"RjVcmiVd2eJ7i+jH6NM6TA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\= {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\=:not(.qMT1T6jZgyJjy\\+I32MZxyQ\\=\\=) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\=:not(.qMT1T6jZgyJjy\\+I32MZxyQ\\=\\=) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\=:not(.qMT1T6jZgyJjy\\+I32MZxyQ\\=\\=) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\=:not(.qMT1T6jZgyJjy\\+I32MZxyQ\\=\\=) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .MW7PdvFCawKtIQQHk3x5sg\\=\\= {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.MW7PdvFCawKtIQQHk3x5sg\\=\\= {
  width: 100%;
}

.o1T9Q-usoqoUrOKBuFEstQ\\=\\= {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.F-KinNeKbdcHeD0RghFn9Q\\=\\= {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.rbNO4rIwAvCwzM5qWDUYpg\\=\\=,
.ac6w0wPOe4kWKKQIifG1Tw\\=\\= {
  background-color: var(--component-panel-color-background-default);
}

.zJu6Pkw2NTwhvG7Hqt25bQ\\=\\=,
.L1AquKxZ517XcsNuewb4mg\\=\\= {
  background-color: var(--component-panel-color-background-success);
}

.ELA7lcORz\\+i33bObgz2PEw\\=\\=,
.n7s3uIGJPyPYbNnirnZfFA\\=\\= {
  background-color: var(--component-panel-color-background-warning);
}

._2iiSnaDHm5arMnAht-1DDQ\\=\\=,
.dy6s038ahAHiK0Z1EyznxQ\\=\\= {
  background-color: var(--colors-red-200);
}

.Bk\\+XnsOtij3t6WYERRepdA\\=\\= {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

._7prLoCg4WYXIPP6qgno08Q\\=\\= {
  display: flex;
  flex: none;
}

.FvFqL5PWy41YkIoFK7400Q\\=\\= {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.MiyICMpVyox-tuL1Dsam9A\\=\\= {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.I0pabCH9JQdqnqc9I8\\+g4w\\=\\= {
  font-size: var(--panel-body-font_size);
}
`,""]),n.locals={panel:"MW7PdvFCawKtIQQHk3x5sg==","panel--mobile-layout":"qMT1T6jZgyJjy+I32MZxyQ==",panel__pointer:"o1T9Q-usoqoUrOKBuFEstQ==","panel__pointer-position":"F-KinNeKbdcHeD0RghFn9Q==","panel__content-wrapper--info":"rbNO4rIwAvCwzM5qWDUYpg==","panel__pointer--info":"ac6w0wPOe4kWKKQIifG1Tw==","panel__content-wrapper--success":"zJu6Pkw2NTwhvG7Hqt25bQ==","panel__pointer--success":"L1AquKxZ517XcsNuewb4mg==","panel__content-wrapper--warning":"ELA7lcORz+i33bObgz2PEw==","panel__pointer--warning":"n7s3uIGJPyPYbNnirnZfFA==","panel__content-wrapper--error":"_2iiSnaDHm5arMnAht-1DDQ==","panel__pointer--error":"dy6s038ahAHiK0Z1EyznxQ==","panel__content-wrapper":"Bk+XnsOtij3t6WYERRepdA==","panel__icon-wrapper":"_7prLoCg4WYXIPP6qgno08Q==",panel__content:"FvFqL5PWy41YkIoFK7400Q==",panel__header:"MiyICMpVyox-tuL1Dsam9A==",panel__body:"I0pabCH9JQdqnqc9I8+g4w=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.ZeFGEoQClriUQ\\+sLw2IV0w\\=\\= {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.VgdMACBeJXZzPwgo5w-ZCQ\\=\\= {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),n.locals={"popover-panel":"ZeFGEoQClriUQ+sLw2IV0w==","popover-panel__arrow":"VgdMACBeJXZzPwgo5w-ZCQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.aCyf9pLPzAc2ihOkfdX6mg\\=\\= {
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

.G5DknHbm2gY8qyW7ka08mA\\=\\= {
  --radio-size: var(--component-checkbox-size-width-small);
}

.Wsp9kJpqCtIJi8A9wpPveg\\=\\= {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.qGp1OLfUJvxGIcspJSQb2w\\=\\= {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.kZO1bWGJxsIMKqodsCIQmQ\\=\\= {
  --radio-checkmark-display: inline-block;
}

.kZO1bWGJxsIMKqodsCIQmQ\\=\\=:not(.kpe-8Y8p9ilWtjGronrBTA\\=\\=, .qGp1OLfUJvxGIcspJSQb2w\\=\\=) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.aCyf9pLPzAc2ihOkfdX6mg\\=\\=:not(.kpe-8Y8p9ilWtjGronrBTA\\=\\=, .kZO1bWGJxsIMKqodsCIQmQ\\=\\=):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.aCyf9pLPzAc2ihOkfdX6mg\\=\\=:not(
    .kpe-8Y8p9ilWtjGronrBTA\\=\\=,
    .qGp1OLfUJvxGIcspJSQb2w\\=\\=,
    .kZO1bWGJxsIMKqodsCIQmQ\\=\\=
  ):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.kpe-8Y8p9ilWtjGronrBTA\\=\\=.kZO1bWGJxsIMKqodsCIQmQ\\=\\= {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.ijsYw-qgj-WTqjKTio511g\\=\\= {
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

.B8HlxHUrk1KbARim9bW1WQ\\=\\= {
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
`,""]),n.locals={"altinn-radio":"aCyf9pLPzAc2ihOkfdX6mg==","altinn-radio--small":"G5DknHbm2gY8qyW7ka08mA==","altinn-radio--xsmall":"Wsp9kJpqCtIJi8A9wpPveg==","altinn-radio--error":"qGp1OLfUJvxGIcspJSQb2w==","altinn-radio--checked":"kZO1bWGJxsIMKqodsCIQmQ==","altinn-radio--disabled":"kpe-8Y8p9ilWtjGronrBTA==","altinn-visible-button":"ijsYw-qgj-WTqjKTio511g==","altinn-visible-button__checkmark":"B8HlxHUrk1KbARim9bW1WQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.MN6Y5mhFQeWsEXfCvD\\+6VA\\=\\= {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

._4zSpufD2m729yFWGS1z6Mw\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.FU77E504KM4-4r9-laSZgw\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.QMwckwqxNOSCItawTIFMMg\\=\\= {
  flex-direction: column;
}

.wLJnhoPCdgedceZbDul89g\\=\\= {
  flex-direction: row;
}
`,""]),n.locals={"altinn-radio-group":"MN6Y5mhFQeWsEXfCvD+6VA==","altinn-radio-group--xsmall":"_4zSpufD2m729yFWGS1z6Mw==","altinn-radio-group--small":"FU77E504KM4-4r9-laSZgw==","altinn-radio-group--vertical":"QMwckwqxNOSCItawTIFMMg==","altinn-radio-group--horizontal":"wLJnhoPCdgedceZbDul89g=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.Py6qc\\+IKr0LPRaVvFzU8Fg\\=\\= {
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

._7oB\\+fUJQtt-DeqqgAsJmsA\\=\\= {
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

._7oB\\+fUJQtt-DeqqgAsJmsA\\=\\=:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

._7oB\\+fUJQtt-DeqqgAsJmsA\\=\\=:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.OcBogzyFW9oQeQqeCghLhw\\=\\= {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`,""]),n.locals={"altinn-multi-select-item":"Py6qc+IKr0LPRaVvFzU8Fg==","altinn-multi-select-item__delete-button":"_7oB+fUJQtt-DeqqgAsJmsA==","altinn-multi-select-item__delete-button__cross":"OcBogzyFW9oQeQqeCghLhw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.R2LoWFP9\\+fPxBI2eaLLicg\\=\\= {
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
  position: relative;
}

.vqFw-69e9qNv1MXnj0Wdsw\\=\\= {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.vQptyzjDO02r7nf7YJkoQg\\=\\= {
  --delete_cross-color: var(--delete_cross-color-active);
}

.R2LoWFP9\\+fPxBI2eaLLicg\\=\\=:not(.vQptyzjDO02r7nf7YJkoQg\\=\\=) .slRIrBGrImDEa7PGPkxlDQ\\=\\= {
  display: none;
}

.JyLC12fK-4C6aoj5YlqyaA\\=\\= {
  --option-outline-focus: var(--focus_visible-outline);
}

.YInBaD0x4XXpv4Cic9LvJw\\=\\= {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.MUBtlKh6-5e6gPL2BaYHXQ\\=\\= {
  display: inline-flex;
  padding: 0;
}

.P-rQCIn6O68k9uFNyYNFJw\\=\\= .MUBtlKh6-5e6gPL2BaYHXQ\\=\\=,
.VmrXZU7ZmpU4cw-pPNpfeA\\=\\= .YInBaD0x4XXpv4Cic9LvJw\\=\\= {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.WkEA3Y8HYuiEEMbdjGqH4Q\\=\\= {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.NOu8xg3WM9OlBs8ufOmr0A\\=\\= {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.P-rQCIn6O68k9uFNyYNFJw\\=\\= .YInBaD0x4XXpv4Cic9LvJw\\=\\=:focus-visible {
  outline: var(--focus_visible-outline);
}

.OMcDJMTnBIm\\+iWDL4qmAng\\=\\= {
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

.cSIarfxHLj6NLsscBd1A8w\\=\\= {
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

.dTF1B6\\+yzFIk8cN0jABEiA\\=\\= {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.dTF1B6\\+yzFIk8cN0jABEiA\\=\\=:disabled {
  cursor: auto;
}

.dTF1B6\\+yzFIk8cN0jABEiA\\=\\=:focus-visible {
  outline: var(--focus_visible-outline);
}

.dTF1B6\\+yzFIk8cN0jABEiA\\=\\=:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.dTF1B6\\+yzFIk8cN0jABEiA\\=\\=:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.b-T-FEYorEaj-2YZdkVrHw\\=\\= {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.slRIrBGrImDEa7PGPkxlDQ\\=\\= {
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

.vWD2cb-A8mqXZgX3RWW6sA\\=\\= {
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

.vWD2cb-A8mqXZgX3RWW6sA\\=\\=:hover {
  background-color: var(--option-background_color-hover);
}

.pBkKbqUXVymr5dOx-EQ1eg\\=\\= {
  background-color: var(--option-background_color-selected);
}

.pBkKbqUXVymr5dOx-EQ1eg\\=\\=:hover {
  background-color: var(--option-background_color-selected-hover);
}

._4-U\\+k6Tn2g8Lse98X\\+iNkQ\\=\\= {
  outline: var(--option-outline-focus);
}
`,""]),n.locals={"altinn-select":"R2LoWFP9+fPxBI2eaLLicg==","altinn-select--disabled":"vqFw-69e9qNv1MXnj0Wdsw==","altinn-select--expanded":"vQptyzjDO02r7nf7YJkoQg==","altinn-select__option-list":"slRIrBGrImDEa7PGPkxlDQ==","altinn-select--using-keyboard":"JyLC12fK-4C6aoj5YlqyaA==","altinn-select__field__button":"YInBaD0x4XXpv4Cic9LvJw==","altinn-select__field":"MUBtlKh6-5e6gPL2BaYHXQ==","altinn-select--multiple":"P-rQCIn6O68k9uFNyYNFJw==","altinn-select--single":"VmrXZU7ZmpU4cw-pPNpfeA==","altinn-select--single__field__value":"WkEA3Y8HYuiEEMbdjGqH4Q==","altinn-select--multiple__field__values":"NOu8xg3WM9OlBs8ufOmr0A==","altinn-select__field__arrow-wrapper":"OMcDJMTnBIm+iWDL4qmAng==","altinn-select__field__arrow-wrapper__arrow":"cSIarfxHLj6NLsscBd1A8w==","altinn-select--multiple__field__delete-button":"dTF1B6+yzFIk8cN0jABEiA==","altinn-select--multiple__field__delete-button__cross":"b-T-FEYorEaj-2YZdkVrHw==","altinn-select__option-list__option":"vWD2cb-A8mqXZgX3RWW6sA==","altinn-select__option-list__option--selected":"pBkKbqUXVymr5dOx-EQ1eg==","altinn-select--multiple__option-list__option--focused":"_4-U+k6Tn2g8Lse98X+iNkQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`Table {
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
}
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`._7IC8ONaKMT4vARNOFE5K5Q\\=\\= {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),n.locals={TableBody:"_7IC8ONaKMT4vARNOFE5K5Q=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.LzDte03f5wXbFrkq12x-PA\\=\\= {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.NiTfbrfj6xyhW2chbCqPlA\\=\\= {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.OSEprzp8ecljMivLiVJgRg\\=\\= {
  text-align: left;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

._1-zaDxtrX5XZ\\+3pQQWnMqA\\=\\= {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.hIg6aexdd5\\+sPbM-Mpyrgg\\=\\= {
  max-width: 45px;
  max-height: 45px;
}

.VkQQnZmMeEHn8KvLo6lKIw\\=\\= {
  margin: 0px 15px 0px 15px;
}
.I7NIpaN9kO7AbEzX84ck7w\\=\\= {
  margin: 0px 0px 0px 15px;
}

.ySg0u8CGsNQcJMSJguYJFQ\\=\\= {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.kBQAKFeTyP1i2nfY36Gp1A\\=\\= {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

._8kN2-vZhRm91yXWVlcc4Eg\\=\\= {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.cPDdWIF8LIXRIOHZ8WFPfQ\\=\\= {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}

.LQ0LsJkWqygwhcQ-4qWyLA\\=\\= {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

._3uS1BrMpoI3lxpN5pw0c1A\\=\\= {
  margin: 10px 10px 10px 0;
}
`,""]),n.locals={"header-table-cell":"LzDte03f5wXbFrkq12x-PA==","header-table-cell-radiobutton":"NiTfbrfj6xyhW2chbCqPlA==","body-table-cell":"OSEprzp8ecljMivLiVJgRg==","body-table-cell-radiobutton":"_1-zaDxtrX5XZ+3pQQWnMqA==",image:"hIg6aexdd5+sPbM-Mpyrgg==",input:"VkQQnZmMeEHn8KvLo6lKIw==","radio-button":"I7NIpaN9kO7AbEzX84ck7w==","container-sortable":"ySg0u8CGsNQcJMSJguYJFQ==",icon:"kBQAKFeTyP1i2nfY36Gp1A==","icon-desc":"_8kN2-vZhRm91yXWVlcc4Eg==","icon-asc":"cPDdWIF8LIXRIOHZ8WFPfQ==",header:"LQ0LsJkWqygwhcQ-4qWyLA==",property:"_3uS1BrMpoI3lxpN5pw0c1A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.eUOpKqyivgeuU5D\\+tMn8dw\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-footer":"eUOpKqyivgeuU5D+tMn8dw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.j9BLoyPnbvM\\+0hqq3x9F2w\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-header":"j9BLoyPnbvM+0hqq3x9F2w=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.NEGwPcbU97ZVUshvyUGz0w\\=\\= {
  width: 1056px;
  height: 60px;
}

.mI9RxXUW8WizpSnWjQyVZQ\\=\\= {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.m825MhHnmjQiRccJ9iL\\+\\+A\\=\\=:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`,""]),n.locals={TableRow:"NEGwPcbU97ZVUshvyUGz0w==","table-row--selected":"mI9RxXUW8WizpSnWjQyVZQ==","table-row--body":"m825MhHnmjQiRccJ9iL++A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.JuI00pzq\\+rAdSRwc6y5jcw\\=\\= {
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

.rfwF7zCA44HM3qrs5LQKew\\=\\= {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

._97oEm\\+qN-2hAoNIiZ37LMQ\\=\\= {
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

.J\\+N6WcLVXrh1KiRNcr\\+wdw\\=\\= {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

._97oEm\\+qN-2hAoNIiZ37LMQ\\=\\=:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

._97oEm\\+qN-2hAoNIiZ37LMQ\\=\\=:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.glGx-MRXIdRvekhewq978g\\=\\= {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.POthgVZLT1DWIUnMKkewDw\\=\\= {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`,""]),n.locals={"altinn-tabs":"JuI00pzq+rAdSRwc6y5jcw==","altinn-tabs__tablist":"rfwF7zCA44HM3qrs5LQKew==","altinn-tabs__tablist__tab":"_97oEm+qN-2hAoNIiZ37LMQ==","altinn-tabs__tablist__tab--selected":"J+N6WcLVXrh1KiRNcr+wdw==","altinn-tabs__divider":"glGx-MRXIdRvekhewq978g==","altinn-tabs__tabpanel":"POthgVZLT1DWIUnMKkewDw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`._6aPn9FpEvnx2E4o6El8B2Q\\=\\= {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.YbBXYRQ7u3-VBr8vtG7AqQ\\=\\= {
  resize: none;
}

.Z7e-6oVJt6I4FmaIJYScdQ\\=\\= {
  resize: both;
}

.SstdtkQyEbnDFVK6mU3hwA\\=\\= {
  resize: horizontal;
}

.X-2B2GC4rg4BN-LYzzHjMA\\=\\= {
  resize: vertical;
}
`,""]),n.locals={"altinn-TextArea":"_6aPn9FpEvnx2E4o6El8B2Q==","altinn-TextArea--resize-none":"YbBXYRQ7u3-VBr8vtG7AqQ==","altinn-TextArea--resize-both":"Z7e-6oVJt6I4FmaIJYScdQ==","altinn-TextArea--resize-horizontal":"SstdtkQyEbnDFVK6mU3hwA==","altinn-TextArea--resize-vertical":"X-2B2GC4rg4BN-LYzzHjMA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.okpOXDaGhTmc2MErW9y8ww\\=\\= {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.NbJ\\+XVl6ovSJIqgxqiA4\\+A\\=\\= {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.okpOXDaGhTmc2MErW9y8ww\\=\\=:not(.NbJ\\+XVl6ovSJIqgxqiA4\\+A\\=\\=):hover {
  background-color: var(--colors-blue-200);
}
`,""]),n.locals={"toggle-button":"okpOXDaGhTmc2MErW9y8ww==","toggle-button--selected":"NbJ+XVl6ovSJIqgxqiA4+A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.wqtkxDVE9PqFNYigAvOtJw\\=\\= {
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
  .wqtkxDVE9PqFNYigAvOtJw\\=\\= {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .wqtkxDVE9PqFNYigAvOtJw\\=\\= {
    --toggle-button-group-width: auto;
  }
}
`,""]),n.locals={"toggle-button-group":"wqtkxDVE9PqFNYigAvOtJw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`/* breakpoints-xs */
@media only screen and (min-width: 0px) {
  .FqavDaQxoclcke6-M5jfoQ\\=\\= {
    width: 80vw;
  }
}

/* breakpoints for m and above */
@media only screen and (min-width: 768px) {
  .FqavDaQxoclcke6-M5jfoQ\\=\\= {
    width: 350px;
  }
}
`,""]),n.locals={container:"FqavDaQxoclcke6-M5jfoQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.bFfNQMKg-8OQmtCsMcNi9g\\=\\= {
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

.mU47Fm8IkqwzTdeQoHHM0Q\\=\\= {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.hyDgcWRUM7D4S5KwjgtkqA\\=\\= {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.bFfNQMKg-8OQmtCsMcNi9g\\=\\=:not(._0eHvtJ7dNaxnqevpN9e-ow\\=\\=):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

._0eHvtJ7dNaxnqevpN9e-ow\\=\\= {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.oR4L6MA44pFkRA4NH-xZTA\\=\\= {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.emVeLqbca7sYpqo566uK-w\\=\\= {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.gNfZyXHRTvFaaRl9EqUiQQ\\=\\= {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.JQrGEVwupeQz6Gk5\\+Co\\+vA\\=\\= {
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

.u0TO-5OG1esV\\+LXioV6zHA\\=\\= {
  color: var(--label-color);
}

._0Pg8VMrCK1hFaVtJG3mjNw\\=\\= {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .bFfNQMKg-8OQmtCsMcNi9g\\=\\=:not(._0eHvtJ7dNaxnqevpN9e-ow\\=\\=):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.bFfNQMKg-8OQmtCsMcNi9g\\=\\=:not(._0eHvtJ7dNaxnqevpN9e-ow\\=\\=):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`,""]),n.locals={"altinn-template":"bFfNQMKg-8OQmtCsMcNi9g==","altinn-template--xsmall":"mU47Fm8IkqwzTdeQoHHM0Q==","altinn-template--small":"hyDgcWRUM7D4S5KwjgtkqA==","altinn-template--disabled":"_0eHvtJ7dNaxnqevpN9e-ow==","altinn-template__input-wrapper":"oR4L6MA44pFkRA4NH-xZTA==","altinn-template__input-wrapper__input":"emVeLqbca7sYpqo566uK-w==","altinn-template__input-wrapper__visible-box":"gNfZyXHRTvFaaRl9EqUiQQ==","altinn-template__label-and-description":"JQrGEVwupeQz6Gk5+Co+vA==","altinn-template__label-and-description__label":"u0TO-5OG1esV+LXioV6zHA==","altinn-template__label-and-description__description":"_0Pg8VMrCK1hFaVtJG3mjNw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(E,o,e)=>{"use strict";e.d(o,{Z:()=>i});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),k=e.n(t),n=k()(function(d){return d[1]});n.push([E.id,`.Tj1ST4W8YSAsgzbuva7hWg\\=\\= {
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

.YPGX\\+n3oPq3FmlOolIhSuA\\=\\=:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.xgN2KlBZysAo6RAulFyMJg\\=\\=:hover {
  --border-color: var(--component-input-color-border-hover);
}

._0dxSTcSMr8DEmibPUWGS3A\\=\\= {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

._0dxSTcSMr8DEmibPUWGS3A\\=\\=:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.JRX5UzEi9DUgnQOK4vlG8w\\=\\= {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.QGXwuLF-yOEOSRWjF8svnw\\=\\= {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

._5Rk9wVjZh3Acbb7KlNJBMQ\\=\\= {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.KlZzLquUQpf1tRZfegHamg\\=\\= {
  flex-direction: row-reverse;
}

.ClxxWyLo77vnr6AKremwFg\\=\\= {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.lBYDUQowZ69aWIEzqk6bcQ\\=\\= {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.atgQHZ\\+u6-fmiM4fBFitUQ\\=\\= {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.b9sB1X\\+Rm9Q5fEYCbp0P3g\\=\\= {
  opacity: 60%;
}

.WYOqCIKgmK0BQIynjf5kwA\\=\\= {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`,""]),n.locals={InputWrapper:"Tj1ST4W8YSAsgzbuva7hWg==","InputWrapper--with-focus-effect":"YPGX+n3oPq3FmlOolIhSuA==","InputWrapper--default":"xgN2KlBZysAo6RAulFyMJg==","InputWrapper--error":"_0dxSTcSMr8DEmibPUWGS3A==","InputWrapper--disabled":"JRX5UzEi9DUgnQOK4vlG8w==","InputWrapper--readonly-info":"QGXwuLF-yOEOSRWjF8svnw==","InputWrapper--readonly-confirm":"_5Rk9wVjZh3Acbb7KlNJBMQ==","InputWrapper--search":"KlZzLquUQpf1tRZfegHamg==","InputWrapper--with-padding":"ClxxWyLo77vnr6AKremwFg==",InputWrapper__field:"lBYDUQowZ69aWIEzqk6bcQ==",InputWrapper__icon:"atgQHZ+u6-fmiM4fBFitUQ==","InputWrapper__icon--disabled":"b9sB1X+Rm9Q5fEYCbp0P3g==",InputWrapper__label:"WYOqCIKgmK0BQIynjf5kwA=="};const i=n},"./src/components/Button/Stories/success.svg":(E,o,e)=>{"use strict";e.d(o,{r:()=>ne});var t=e("./node_modules/react/index.js"),k,n,i;function d(){return d=Object.assign?Object.assign.bind():function(Q){for(var G=1;G<arguments.length;G++){var S=arguments[G];for(var X in S)Object.prototype.hasOwnProperty.call(S,X)&&(Q[X]=S[X])}return Q},d.apply(this,arguments)}var ne=function(G){return t.createElement("svg",d({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},G),k||(k=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),i||(i=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(E,o,e)=>{var t={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function k(i){var d=n(i);return e(d)}function n(i){if(!e.o(t,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return t[i]}k.keys=function(){return Object.keys(t)},k.resolve=n,E.exports=k,k.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(E,o,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function k(i){var d=n(i);return e(d)}function n(i){if(!e.o(t,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return t[i]}k.keys=function(){return Object.keys(t)},k.resolve=n,E.exports=k,k.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(E,o,e)=>{"use strict";E=e.nmd(E);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],E,!1)}},E=>{var o=t=>E(E.s=t);E.O(0,[372],()=>(o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),o("./storybook-init-framework-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),o("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),o("./.storybook/preview.js-generated-config-entry.js"),o("./generated-stories-entry.cjs")));var e=E.O()}]);
