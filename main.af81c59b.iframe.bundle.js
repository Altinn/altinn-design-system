(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function O(a){var d=n(a);return e(d)}function n(a){if(!e.o(s,a)){var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}return s[a]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>c,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),oe=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),Z=e.n(Q),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(T),W=e("./node_modules/react/index.js"),v=e("./node_modules/@mdx-js/react/index.js"),L=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),i=["components"];function f(){return f=Object.assign?Object.assign.bind():function(C){for(var D=1;D<arguments.length;D++){var _=arguments[D];for(var u in _)Object.prototype.hasOwnProperty.call(_,u)&&(C[u]=_[u])}return C},f.apply(this,arguments)}function y(C,D){if(C==null)return{};var _=P(C,D),u,B;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(C);for(B=0;B<S.length;B++)u=S[B],!(D.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,u)||(_[u]=C[u]))}return _}function P(C,D){if(C==null)return{};var _={},u=Object.keys(C),B,S;for(S=0;S<u.length;S++)B=u[S],!(D.indexOf(B)>=0)&&(_[B]=C[B]);return _}var x={},b="wrapper";function p(C){var D=C.components,_=y(C,i);return(0,v.mdx)(b,f({},x,_,{components:D,mdxType:"MDXLayout"}),(0,v.mdx)(L.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,v.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,v.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,v.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,v.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,v.mdx)("h3",{id:"npm"},"NPM"),(0,v.mdx)("pre",null,(0,v.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,v.mdx)("h3",{id:"yarn"},"Yarn"),(0,v.mdx)("pre",null,(0,v.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,v.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,v.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,v.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,v.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,v.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,v.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,v.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,v.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,v.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,v.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,v.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,v.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,v.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,v.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,v.mdx)("ul",null,(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}p.displayName="MDXContent",p.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var j={title:"Introduksjon",includeStories:["__page"]},l={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,v.mdx)(L.aT,{mdxStoryNameToKey:l,mdxComponentAnnotations:j},(0,v.mdx)(p,null))}});const h=j;var R=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>c,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),oe=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),Z=e.n(Q),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(T),W=e("./node_modules/react/index.js"),v=e("./node_modules/@mdx-js/react/index.js"),L=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),i=["components"];function f(){return f=Object.assign?Object.assign.bind():function(C){for(var D=1;D<arguments.length;D++){var _=arguments[D];for(var u in _)Object.prototype.hasOwnProperty.call(_,u)&&(C[u]=_[u])}return C},f.apply(this,arguments)}function y(C,D){if(C==null)return{};var _=P(C,D),u,B;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(C);for(B=0;B<S.length;B++)u=S[B],!(D.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(C,u)||(_[u]=C[u]))}return _}function P(C,D){if(C==null)return{};var _={},u=Object.keys(C),B,S;for(S=0;S<u.length;S++)B=u[S],!(D.indexOf(B)>=0)&&(_[B]=C[B]);return _}var x={},b="wrapper";function p(C){var D=C.components,_=y(C,i);return(0,v.mdx)(b,f({},x,_,{components:D,mdxType:"MDXLayout"}),(0,v.mdx)(L.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,v.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,v.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
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
`)))}p.displayName="MDXContent",p.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var j={title:"Components/AppWrapper",includeStories:["__page"]},l={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,v.mdx)(L.aT,{mdxStoryNameToKey:l,mdxComponentAnnotations:j},(0,v.mdx)(p,null))}});const h=j;var R=["__page"]},"./.storybook/StoryPage.tsx":(A,o,e)=>{"use strict";e.d(o,{Y:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),oe=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=e.n(oe),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),T={};T.insert="head",T.singleton=!1;var X=Q()(Z.Z,T);const W=Z.Z.locals||{};var v=e("./node_modules/react/jsx-runtime.js"),L=function(b){var p=b.children;return(0,v.jsx)("div",{children:p})};L.displayName="AppWrapper";try{L.displayName="AppWrapper",L.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:L.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(x){}var i=function(b){var p=b.children;return(0,v.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,v.jsxs)("p",{style:{margin:"0"},children:[(0,v.jsx)("strong",{children:"Deprecated:"})," ",p]})})};i.displayName="DeprecationWarning";var f=null;try{i.displayName="DeprecationWarning",i.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:i.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(x){}var y=function(b){var p=b.description,c=b.deprecationWarning;return(0,v.jsxs)(L,{children:[(0,v.jsx)(a.Dx,{}),c&&(0,v.jsx)(i,{children:c}),(0,v.jsx)(a.dk,{children:p}),(0,v.jsx)(a.fQ,{includePrimary:!0}),(0,v.jsx)(a.X6,{children:"Props"}),(0,v.jsx)(a.$4,{story:a.Uh})]})};y.displayName="StoryPage";var P=null;try{y.displayName="StoryPage",y.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:y.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(x){}},"./.storybook/preview.js-generated-config-entry.js":(A,o,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>f,parameters:()=>i});var O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),W=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),L=e("./node_modules/@storybook/theming/dist/esm/index.js"),i={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},L.np.dark),light:Object.assign({},L.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},f=["parameters"],y=e("./node_modules/console-browserify/index.js");function P(p,c){var j=Object.keys(p);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(p);c&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(p,h).enumerable})),j.push.apply(j,l)}return j}function x(p){for(var c=1;c<arguments.length;c++){var j=arguments[c]!=null?arguments[c]:{};c%2?P(Object(j),!0).forEach(function(l){b(p,l,j[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(j)):P(Object(j)).forEach(function(l){Object.defineProperty(p,l,Object.getOwnPropertyDescriptor(j,l))})}return p}function b(p,c,j){return c in p?Object.defineProperty(p,c,{value:j,enumerable:!0,configurable:!0,writable:!0}):p[c]=j,p}Object.keys(s).forEach(function(p){var c=s[p];switch(p){case"args":return(0,W.uc)(c);case"argTypes":return(0,W.v9)(c);case"decorators":return c.forEach(function(l){return(0,W.$9)(l,!1)});case"loaders":return c.forEach(function(l){return(0,W.HZ)(l,!1)});case"parameters":return(0,W.h1)(x({},c),!1);case"argTypesEnhancers":return c.forEach(function(l){return(0,W.My)(l)});case"argsEnhancers":return c.forEach(function(l){return(0,W._C)(l)});case"render":return(0,W.$P)(c);case"globals":case"globalTypes":{var j={};return j[p]=c,(0,W.h1)(j,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return y.log(p+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>Me,__namedExportsOrder:()=>Re,default:()=>Ce});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./node_modules/classnames/index.js"),x=e.n(P),b=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Button/index.ts"),c;(function(ye){ye.Primary="primary",ye.Secondary="secondary"})(c||(c={}));var j=(0,i.createContext)(void 0),l=function(){var ge=(0,i.useContext)(j);if(ge===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return ge},h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(h),C=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),D={};D.insert="head",D.singleton=!1;var _=R()(C.Z,D);const u=C.Z.locals||{};var B=e("./node_modules/react/jsx-runtime.js"),S=function(ge){var V=ge.children,fe=ge.open,xe=ge.onClick,Ie=ge.iconVariant,Te=Ie===void 0?c.Primary:Ie,Ke=(0,i.useId)(),Be=(0,i.useId)();return(0,B.jsx)("div",{className:u.accordion,children:(0,B.jsx)(j.Provider,{value:{onClick:xe,open:fe,headerId:Ke,contentId:Be,iconVariant:Te},children:V})})};S.displayName="Accordion";const F=null;try{S.displayName="Accordion",S.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:S.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(ye){}var H=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),se={};se.insert="head",se.singleton=!1;var ue=R()(H.Z,se);const le=H.Z.locals||{};var de=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),re={};re.insert="head",re.singleton=!1;var $=R()(de.Z,re);const g=de.Z.locals||{};var U;function Y(){return Y=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},Y.apply(this,arguments)}var w=function(ge){return i.createElement("svg",Y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),U||(U=i.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},q;function pe(){return pe=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},pe.apply(this,arguments)}var me=function(ge){return i.createElement("svg",pe({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),q||(q=i.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},J=function(){var ge,V,fe=l(),xe=fe.onClick,Ie=fe.open,Te=fe.iconVariant,Ke=[g["accordion-icon"],(ge={},ge[g["accordion-icon--opened"]]=Ie,ge)],Be=(V={height:20,width:20,className:x()(Ke)},V["data-testid"]=Te,V.onClick=xe,V);switch(Te){case c.Primary:return(0,B.jsx)(w,Object.assign({},Be));case c.Secondary:return(0,B.jsx)(me,Object.assign({},Be))}};const E=null;var m=function(ge){var V,fe=ge.children,xe=ge.actions,Ie=ge.subtitle,Te=l(),Ke=Te.onClick,Be=Te.open,He=Te.headerId,Ve=Te.contentId;return(0,B.jsxs)("div",{className:x()(le["accordion-header"],(V={},V[le["accordion-header--subtitle"]]=Ie,V)),children:[(0,B.jsx)(J,{}),(0,B.jsxs)("button",{className:x()(le["accordion-header__title"]),"aria-expanded":Be,type:"button",onClick:Ke,id:He,"aria-controls":Ve,children:[fe,(Ie==null?void 0:Ie.length)&&(0,B.jsx)("div",{"data-testid":"accordion-header-subtitle",className:x()(le["accordion-header__subtitle"]),children:Ie})]}),(0,B.jsx)("div",{className:x()(le["accordion-header__actions"]),children:xe})]})};m.displayName="AccordionHeader";try{m.displayName="AccordionHeader",m.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:m.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(ye){}var r=function(ge){var V=ge.children,fe=l(),xe=fe.open,Ie=fe.contentId,Te=fe.headerId;return(0,B.jsx)("div",{children:xe&&(0,B.jsx)("div",{"aria-expanded":xe,id:Ie,"aria-labelledby":Te,children:V})})};r.displayName="AccordionContent";const t=null;try{r.displayName="AccordionContent",r.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:r.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(ye){}var I=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css"),M={};M.insert="head",M.singleton=!1;var ce=R()(I.Z,M);const be=I.Z.locals||{};function ee(ye,ge){return Oe(ye)||_e(ye,ge)||K(ye,ge)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(ye,ge){if(!!ye){if(typeof ye=="string")return ae(ye,ge);var V=Object.prototype.toString.call(ye).slice(8,-1);if(V==="Object"&&ye.constructor&&(V=ye.constructor.name),V==="Map"||V==="Set")return Array.from(ye);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return ae(ye,ge)}}function ae(ye,ge){(ge==null||ge>ye.length)&&(ge=ye.length);for(var V=0,fe=new Array(ge);V<ge;V++)fe[V]=ye[V];return fe}function _e(ye,ge){var V=ye==null?null:typeof Symbol!="undefined"&&ye[Symbol.iterator]||ye["@@iterator"];if(V!=null){var fe=[],xe=!0,Ie=!1,Te,Ke;try{for(V=V.call(ye);!(xe=(Te=V.next()).done)&&(fe.push(Te.value),!(ge&&fe.length===ge));xe=!0);}catch(Be){Ie=!0,Ke=Be}finally{try{!xe&&V.return!=null&&V.return()}finally{if(Ie)throw Ke}}return fe}}function Oe(ye){if(Array.isArray(ye))return ye}var Se=`import React, { useState } from 'react';
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
`,je={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},he="";const Ce={title:"Components/Accordion",component:S,subcomponents:{AccordionHeader:m,AccordionContent:r},parameters:{design:(0,f.vc)([{type:"figma",url:he},{type:"link",url:he}]),docs:{page:function(){return(0,B.jsx)(b.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:c.Primary,useActions:!0,subtitle:"Subtitle"}};var We=function(ge){var V=(0,i.useState)(!1),fe=ee(V,2),xe=fe[0],Ie=fe[1],Te=(0,i.useState)(!1),Ke=ee(Te,2),Be=Ke[0],He=Ke[1],Ve=function(){Ie(!xe)},tn=function(){He(!Be)},$e="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",un=(0,y.D8)(),sn=ee(un,1),mn=sn[0].useActions,dn=(0,y.D8)(),cn=ee(dn,1),Xe=cn[0].subtitle,on=mn?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:"Example setup"}),(0,B.jsx)(p.zx,{variant:p.Wu.Filled,color:p.rp.Primary,size:p.qE.Small,children:"Separat knapp 1"}),(0,B.jsx)(p.zx,{variant:p.Wu.Outline,color:p.rp.Primary,size:p.qE.Small,children:"Separat knapp 2"})]}):void 0,rn=Xe.length>0?Xe:void 0;return(0,B.jsxs)("div",{className:x()(be.container),children:[(0,B.jsxs)(S,{onClick:Ve,open:xe,iconVariant:ge.iconVariant,children:[(0,B.jsx)(m,{actions:on,subtitle:rn,children:"Accordion 1"}),(0,B.jsx)(r,{children:$e})]}),(0,B.jsxs)(S,{onClick:tn,open:Be,iconVariant:ge.iconVariant,children:[(0,B.jsx)(m,{actions:on,subtitle:rn,children:"Accordion 2"}),(0,B.jsx)(r,{children:$e})]})]})};We.displayName="Template";var Me=We.bind({});Me.args={iconVariant:c.Primary,open:!1},Me.argTypes={open:{control:!1},onClick:{control:!1}},Me.parameters={docs:{description:{story:""}}},Me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Me.parameters);var Re=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidth:()=>R,Primary:()=>x,Secondary:()=>b,SecondaryWithIconNoText:()=>h,Success:()=>p,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,__namedExportsOrder:()=>D,default:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,L={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const f={title:"Components/Button/Filled",component:T.zx,parameters:{design:(0,oe.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:T.Wu.Filled,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,W.jsx)(T.zx,Object.assign({},u))};y.displayName="Template";var P=function(u){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(T.zx,Object.assign({},u))})};P.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:T.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:T.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var p=y.bind({});p.args={color:T.rp.Success,children:"Success button"},p.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:T.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:T.rp.Success,icon:(0,W.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:T.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:T.rp.Secondary,icon:(0,W.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=P.bind({});R.args={color:T.rp.Primary,icon:(0,W.jsx)(Q.Z,{}),fullWidth:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidthAndDashedBorder:()=>R,Primary:()=>x,Secondary:()=>b,SecondaryWithIconNoText:()=>h,Success:()=>p,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,__namedExportsOrder:()=>D,default:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,L={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidthAndDashedBorder:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const f={title:"Components/Button/Outline",component:T.zx,parameters:{design:(0,oe.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:T.Wu.Outline,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,W.jsx)(T.zx,Object.assign({},u))};y.displayName="Template";var P=function(u){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(T.zx,Object.assign({},u))})};P.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:T.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:T.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var p=y.bind({});p.args={color:T.rp.Success,children:"Success button"},p.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:T.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:T.rp.Success,icon:(0,W.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:T.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:T.rp.Secondary,icon:(0,W.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=P.bind({});R.args={color:T.rp.Primary,icon:(0,W.jsx)(Q.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>c,Disabled:()=>C,FullWidth:()=>R,Primary:()=>x,Secondary:()=>b,Success:()=>p,SuccessWithCustomIcon:()=>l,SuccessWithIcon:()=>j,SuccessWithIconNoText:()=>h,__namedExportsOrder:()=>D,default:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,L={Primary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Secondary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Success:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Danger:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithCustomIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIconNoText:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},FullWidth:{startLoc:{col:63,line:48},endLoc:{col:1,line:61},startBody:{col:63,line:48},endBody:{col:1,line:61}},Disabled:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const f={title:"Components/Button/Quiet",component:T.zx,parameters:{design:(0,oe.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:T.Wu.Quiet,size:T.qE.Small,onClick:function(u){alert(JSON.stringify(u.target.innerHTML)+" clicked!")}}};var y=function(u){return(0,W.jsx)(T.zx,Object.assign({},u))};y.displayName="Template";var P=function(u){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(T.zx,Object.assign({},u))})};P.displayName="WithinContainerTemplate";var x=y.bind({});x.args={color:T.rp.Primary,children:"Primary button"},x.parameters={docs:{description:{story:""}}};var b=y.bind({});b.args={color:T.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var p=y.bind({});p.args={color:T.rp.Success,children:"Success button"},p.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:T.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:T.rp.Success,icon:(0,W.jsx)(Q.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var l=y.bind({});l.args={color:T.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},l.parameters={docs:{description:{story:""}}};var h=y.bind({});h.args={color:T.rp.Success,icon:(0,W.jsx)(Q.Z,{})},h.parameters={docs:{description:{story:""}}};var R=P.bind({});R.args={color:T.rp.Primary,icon:(0,W.jsx)(Q.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},R.parameters={docs:{description:{story:""}}};var C=y.bind({});C.args={children:"Disabled button",disabled:!0},C.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>x,Disabled:()=>b,Error:()=>P,LongText:()=>j,Normal:()=>f,ReadOnly:()=>p,WithDescription:()=>c,WithHiddenLabel:()=>l,__namedExportsOrder:()=>h,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Checkbox/Checkbox.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Normal:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},ReadOnly:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}}},v="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const L={title:"Components/Checkbox",component:Z.X,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change.",deprecationWarning:"Use Checkbox from @digdir/design-system-react instead."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var i=function(C){return(0,T.jsx)(Z.X,Object.assign({},C))};i.displayName="Template";var f=i.bind({});f.args={},f.parameters={docs:{description:{story:"This is the default checkbox."}}};var y=i.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"This is a checked checkbox."}}};var P=i.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var x=i.bind({});x.args={compact:!0},x.parameters={docs:{description:{story:"This is the compact checkbox."}}};var b=i.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var p=i.bind({});p.args={readOnly:!0},p.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var c=i.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a checkbox with description."}}};var j=i.bind({});j.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},j.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var l=i.bind({});l.args={hideLabel:!0},l.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},y.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},j.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},l.parameters);var h=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>I,Disabled:()=>ce,Error:()=>M,Horizontal:()=>t,Vertical:()=>r,__namedExportsOrder:()=>be,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./src/components/Checkbox/Checkbox.tsx"),R=e("./src/components/FieldSet/index.ts"),C=e("./src/utils/arrayUtils.ts"),D=e("./src/hooks/index.ts"),_=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),u=e.n(_),B=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css"),S={};S.insert="head",S.singleton=!1;var F=u()(B.Z,S);const H=B.Z.locals||{};var se=e("./node_modules/react/jsx-runtime.js");function ue(ee,N){return g(ee)||$(ee,N)||de(ee,N)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(ee,N){if(!!ee){if(typeof ee=="string")return re(ee,N);var K=Object.prototype.toString.call(ee).slice(8,-1);if(K==="Object"&&ee.constructor&&(K=ee.constructor.name),K==="Map"||K==="Set")return Array.from(ee);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return re(ee,N)}}function re(ee,N){(N==null||N>ee.length)&&(N=ee.length);for(var K=0,ae=new Array(N);K<N;K++)ae[K]=ee[K];return ae}function $(ee,N){var K=ee==null?null:typeof Symbol!="undefined"&&ee[Symbol.iterator]||ee["@@iterator"];if(K!=null){var ae=[],_e=!0,Oe=!1,Se,je;try{for(K=K.call(ee);!(_e=(Se=K.next()).done)&&(ae.push(Se.value),!(N&&ae.length===N));_e=!0);}catch(he){Oe=!0,je=he}finally{try{!_e&&K.return!=null&&K.return()}finally{if(Oe)throw je}}return ae}}function g(ee){if(Array.isArray(ee))return ee}var U;(function(ee){ee.Vertical="vertical",ee.Horizontal="horizontal"})(U||(U={}));var Y=function(N,K){switch(K.type){case"check":return N.concat([K.name]);case"uncheck":return N.filter(function(ae){return ae!==K.name});case"reset":return K.state}},w=function(N){return N.filter(function(K){var ae=K.checked;return ae}).map(function(K){var ae=K.name;return ae})},q=function(N){var K=N.compact,ae=N.description,_e=N.disabled,Oe=N.error,Se=N.items,je=N.legend,he=N.onChange,Ce=N.presentation,We=N.variant,Me=We===void 0?U.Vertical:We;if(!(0,C.zb)(Se.map(function(xe){return xe.name})))throw Error("Each name in the checkbox group must be unique.");var Re=(0,n.useReducer)(Y,w(Se)),ye=ue(Re,2),ge=ye[0],V=ye[1];(0,n.useEffect)(function(){return V({type:"reset",state:w(Se)})},[Se]);var fe=(0,D.D9)(ge);return(0,D.PQ)(function(){he&&!_e&&!(0,C.cO)(fe,ge)&&he(ge)},[ge,he,_e]),(0,se.jsx)(R.C,{description:ae,disabled:_e,error:Oe,legend:je,size:K?R.w.Xsmall:R.w.Small,children:(0,se.jsx)("div",{className:l()(H["altinn-checkbox-group"],H["altinn-checkbox-group--"+Me],K&&H["altinn-checkbox-group--compact"]),children:Se.map(function(xe){return(0,se.jsx)(h.X,{checkboxId:xe.checkboxId,checked:ge.includes(xe.name),compact:K,description:xe.description,disabled:_e||xe.disabled,error:!!Oe,label:xe.label,name:xe.name,onChange:function(Te){V({type:Te.target.checked?"check":"uncheck",name:xe.name})},presentation:Ce},xe.name)})})})};q.displayName="CheckboxGroup";try{q.displayName="CheckboxGroup",q.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:q.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(ee){}var pe=`import React from 'react';
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
`,me={Vertical:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Horizontal:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Compact:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Error:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Disabled:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}}},J="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const E={title:"Components/CheckboxGroup",component:q,parameters:{design:(0,a.vc)([{type:"figma",url:J},{type:"link",url:J}]),docs:{page:function(){return(0,se.jsx)(d.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes.",deprecationWarning:"Use CheckboxGroup from @digdir/design-system-react instead."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:U.Vertical}};var m=function(N){return(0,se.jsx)(q,Object.assign({},N))};m.displayName="Template";var r=m.bind({});r.args={variant:U.Vertical},r.parameters={docs:{description:{story:"This is the default setting."}}};var t=m.bind({});t.args={variant:U.Horizontal},t.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var I=m.bind({});I.args={compact:!0},I.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var M=m.bind({});M.args={error:"Du m\xE5 velge minst ett av alternativene over."},M.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var ce=m.bind({});ce.args={disabled:!0},ce.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},r.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},r.parameters),t.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},t.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},I.parameters),M.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},M.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},ce.parameters);var be=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{SimpleExample:()=>c,__namedExportsOrder:()=>j,default:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./src/DesignTokens/index.ts"),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(Q),T=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(T.Z,X);const v=T.Z.locals||{};var L=e("./node_modules/react/jsx-runtime.js"),i=function(h){var R=h.value,C=h.width,D=C===void 0?70:C,_=h.strokeWidth,u=_===void 0?2.5:_,B=h.ariaLabel,S=h.label,F=h.id,H=F+"-label",se=!B&&S?H:void 0;return(0,L.jsxs)("div",{id:F,className:v.container,style:{width:D+"px"},role:"progressbar","aria-labelledby":se,"aria-label":B,children:[S&&(0,L.jsx)("div",{id:H,className:v.label,children:S}),(0,L.jsxs)("svg",{className:v.svg,viewBox:"0 0 35.8 35.8",children:[(0,L.jsx)(f,{stroke:oe.T.B0w,strokeWidth:u}),(0,L.jsx)(f,{strokeWidth:u,stroke:oe.T.CbY,strokeDashoffset:100-R,strokeDasharray:"100 100",className:v.circleTransition})]})]})};i.displayName="CircularProgress";var f=function(h){return(0,L.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},h))};f.displayName="Circle";try{i.displayName="CircularProgress",i.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:i.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(l){}var y=`import React from 'react';
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
`,P={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},x="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const b={title:"Components/CircularProgress",component:i,parameters:{design:(0,a.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,L.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var p=function(h){return(0,L.jsx)(i,Object.assign({},h))};p.displayName="CircularTemplate";var c=p.bind({});c.args={width:100,value:60,label:"3/5",id:"progress"},c.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},c.parameters);var j=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>f,__namedExportsOrder:()=>y,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/ErrorMessage/ErrorMessage.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Example:{startLoc:{col:54,line:42},endLoc:{col:1,line:44},startBody:{col:54,line:42},endBody:{col:1,line:44}}},v="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const L={title:"Components/ErrorMessage",component:Z.B,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"Simple error-message suitable to be shown in table views",deprecationWarning:"Use ErrorMessage from @digdir/design-system-react instead."})}}},args:{id:"error-message-story"}};var i=function(x){return(0,T.jsx)(Z.B,Object.assign({},x,{children:"This is an error message"}))};i.displayName="Template";var f=i.bind({});f.args={},f.parameters={docs:{description:{story:""}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},f.parameters);var y=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>y,Disabled:()=>b,Error:()=>x,Normal:()=>f,WithDescription:()=>P,__namedExportsOrder:()=>p,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/FieldSet/FieldSet.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},v="";const L={title:"Components/FieldSet",component:Z.C,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"Field set component to use as a wrapper for groups of form elements.",deprecationWarning:"Use FieldSet from @digdir/design-system-react instead."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:Z.w.Small}};var i=function(j){return(0,T.jsx)(Z.C,Object.assign({},j,{children:j.children}))};i.displayName="Template";var f=i.bind({});f.args={},f.parameters={docs:{description:{story:"This is a normal field set."}}};var y=i.bind({});y.args={size:Z.w.Xsmall},y.parameters={docs:{description:{story:"This is a compact field set."}}};var P=i.bind({});P.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},P.parameters={docs:{description:{story:"This is a field set with a description."}}};var x=i.bind({});x.args={error:"Her er det en beskrivende feilmelding."},x.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var b=i.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},y.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},P.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters);var p=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Dashed:()=>se,Solid:()=>H,__namedExportsOrder:()=>ue,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./node_modules/classnames/index.js"),Q=e.n(oe),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),W={};W.insert="head",W.singleton=!1;var v=T()(X.Z,W);const L=X.Z.locals||{};var i;(function(le){le.Solid="solid",le.Dashed="dashed"})(i||(i={}));var f=(0,n.createContext)({borderStyle:i.Solid}),y=function(){var de=(0,n.useContext)(f);if(de===void 0)throw new Error("useListContext must be used within a ListContext");return de},P=e("./node_modules/react/jsx-runtime.js"),x=function(de){var re=de.children,$=de.borderStyle,g=$===void 0?i.Solid:$;return(0,P.jsx)("ul",{className:Q()(L.list,L["list--"+g]),children:(0,P.jsx)(f.Provider,{value:{borderStyle:g},children:re})})};x.displayName="List";try{x.displayName="List",x.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:x.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(le){}var b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),p={};p.insert="head",p.singleton=!1;var c=T()(b.Z,p);const j=b.Z.locals||{};var l=function(de){var re=de.children,$=y(),g=$.borderStyle;return(0,P.jsx)("li",{className:Q()(j["list-item"],j["list-item--"+g]),children:re})};l.displayName="ListItem";try{l.displayName="ListItem",l.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:l.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(le){}var h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css"),R={};R.insert="head",R.singleton=!1;var C=T()(h.Z,R);const D=h.Z.locals||{};var _=`import React from 'react';
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
`,u={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},B="";const S={title:"Components/List",component:x,parameters:{design:(0,a.vc)([{type:"figma",url:B},{type:"link",url:B}]),docs:{page:function(){return(0,P.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var F=function(de){return(0,P.jsx)("div",{className:D.container,children:(0,P.jsxs)(x,{borderStyle:de.borderStyle,children:[(0,P.jsx)(l,{children:"List Item 1"}),(0,P.jsx)(l,{children:"List Item 2"}),(0,P.jsx)(l,{children:"List Item 3"})]})})};F.displayName="Template";var H=F.bind({});H.args={borderStyle:i.Solid},H.parameters={docs:{description:{story:""}}};var se=F.bind({});se.args={borderStyle:i.Dashed},se.parameters={docs:{description:{story:""}}},H.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},H.parameters),se.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},se.parameters);var ue=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>r,GoogleMaps:()=>be,KartverketSea:()=>ce,KartverketTerrain:()=>M,MapWithMarkerZoomAndCenter:()=>t,OpenStreetMap:()=>I,__namedExportsOrder:()=>ee,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),x=e("./node_modules/react-leaflet/lib/MapContainer.js"),b=e("./node_modules/react-leaflet/lib/TileLayer.js"),p=e("./node_modules/react-leaflet/lib/AttributionControl.js"),c=e("./node_modules/react-leaflet/lib/Marker.js"),j=e("./node_modules/react-leaflet/lib/hooks.js"),l=e("./node_modules/leaflet/dist/leaflet-src.js"),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(h),C=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),D={};D.insert="head",D.singleton=!1;var _=R()(C.Z,D);const u=C.Z.locals||{};var B=e("./node_modules/leaflet/dist/leaflet.css"),S=e("./node_modules/react/jsx-runtime.js"),F={latitude:64.888996,longitude:12.8186054},H=4,se=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],ue=function(K){var ae=K.readOnly,_e=ae===void 0?!1:ae,Oe=K.layers,Se=Oe===void 0?se:Oe,je=K.centerLocation,he=je===void 0?F:je,Ce=K.zoom,We=Ce===void 0?H:Ce,Me=K.markerLocation,Re=K.markerIcon,ye=K.onClick;return(0,S.jsxs)(x.h,{className:u.map,center:le(he),zoom:We,zoomControl:!_e,dragging:!_e,touchZoom:!_e,doubleClickZoom:!_e,scrollWheelZoom:!_e,attributionControl:!1,children:[Se.map(function(ge,V){return(0,S.jsx)(b.I,{url:ge.url,attribution:ge.attribution,subdomains:ge.subdomains?ge.subdomains:[],opacity:_e?.5:1},V)}),(0,S.jsx)(p.z,{prefix:!1}),Me?(0,S.jsx)(c.J,{position:le(Me),icon:(0,l.icon)(Re)}):null,(0,S.jsx)(de,{readOnly:_e,onClick:ye})]})};ue.displayName="Map";function le(N){return[N.latitude,N.longitude]}var de=function(K){var ae=K.onClick,_e=K.readOnly;return(0,j.zV)({click:function(Se){if(ae&&!_e){var je=Se.latlng.wrap();ae({latitude:je.lat,longitude:je.lng})}}}),null};try{ue.displayName="Map",ue.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:ue.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(N){}var re=e("./node_modules/console-browserify/index.js");function $(N,K){return q(N)||w(N,K)||U(N,K)||g()}function g(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(N,K){if(!!N){if(typeof N=="string")return Y(N,K);var ae=Object.prototype.toString.call(N).slice(8,-1);if(ae==="Object"&&N.constructor&&(ae=N.constructor.name),ae==="Map"||ae==="Set")return Array.from(N);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return Y(N,K)}}function Y(N,K){(K==null||K>N.length)&&(K=N.length);for(var ae=0,_e=new Array(K);ae<K;ae++)_e[ae]=N[ae];return _e}function w(N,K){var ae=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(ae!=null){var _e=[],Oe=!0,Se=!1,je,he;try{for(ae=ae.call(N);!(Oe=(je=ae.next()).done)&&(_e.push(je.value),!(K&&_e.length===K));Oe=!0);}catch(Ce){Se=!0,he=Ce}finally{try{!Oe&&ae.return!=null&&ae.return()}finally{if(Se)throw he}}return _e}}function q(N){if(Array.isArray(N))return N}var pe=`import React, { useState } from 'react';
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
`,me={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},J="";const E={title:"Components/Map",component:ue,parameters:{layout:"fullscreen",design:(0,f.vc)([{type:"figma",url:J},{type:"link",url:J}]),docs:{page:function(){return(0,S.jsx)(y.Y,{description:"Map component"})}}},args:{}};var m=function(K){var ae=(0,i.useState)(K.markerLocation),_e=$(ae,2),Oe=_e[0],Se=_e[1],je=function(Ce){Se(Ce),re.log("Map clicked at ["+Ce.latitude+","+Ce.longitude+"]")};return(0,S.jsx)(ue,Object.assign({},K,{markerLocation:Oe,onClick:je}))};m.displayName="Template";var r=m.bind({});r.args={},r.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var t=m.bind({});t.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},t.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var I=m.bind({});I.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},I.parameters={docs:{description:{story:"OpenStreetMap"}}};var M=m.bind({});M.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},M.parameters={docs:{description:{story:"Kartverket terrain map"}}};var ce=m.bind({});ce.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},ce.parameters={docs:{description:{story:"Kartverket sea map"}}};var be=m.bind({});be.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},be.parameters={docs:{description:{story:"Google Maps"}}},r.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},r.parameters),t.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},t.parameters),I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),M.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},M.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ce.parameters),be.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},be.parameters);var ee=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Primary:()=>$,Success:()=>g,__namedExportsOrder:()=>U,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe;function Q(){return Q=Object.assign?Object.assign.bind():function(Y){for(var w=1;w<arguments.length;w++){var q=arguments[w];for(var pe in q)Object.prototype.hasOwnProperty.call(q,pe)&&(Y[pe]=q[pe])}return Y},Q.apply(this,arguments)}var Z=function(w){return n.createElement("svg",Q({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w),oe||(oe=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},T;(function(Y){Y.Primary="primary",Y.Success="success"})(T||(T={}));var X;(function(Y){Y.Small="small",Y.Medium="medium"})(X||(X={}));var W=(0,n.createContext)({color:T.Primary,size:X.Medium}),v=function(){var w=(0,n.useContext)(W);if(w===void 0)throw new Error("usePageContext must be used within a PageContext");return w},L=e("./node_modules/classnames/index.js"),i=e.n(L),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(f),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css"),x={};x.insert="head",x.singleton=!1;var b=y()(P.Z,x);const p=P.Z.locals||{};var c=e("./node_modules/react/jsx-runtime.js"),j=function(w){var q=w.children;return(0,c.jsx)("div",{className:i()(p["page-content"]),children:q})};j.displayName="PageContent";try{j.displayName="PageContent",j.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:j.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(Y){}var l=e("./src/components/SvgIcon/index.ts"),h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css"),R={};R.insert="head",R.singleton=!1;var C=y()(h.Z,R);const D=h.Z.locals||{};var _=function(w){var q=w.children,pe=w.icon,me=v(),J=me.color,E=me.size,m=E===X.Small?28:40;return(0,c.jsxs)("header",{className:i()(D["page-header"],D["page-header--"+J],D["page-header--"+E]),children:[(0,c.jsx)(l.l,{width:m,height:m,svgIconComponent:pe}),(0,c.jsx)("span",{children:q})]})};_.displayName="PageHeader";try{_.displayName="PageHeader",_.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:_.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(Y){}var u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css"),B={};B.insert="head",B.singleton=!1;var S=y()(u.Z,B);const F=u.Z.locals||{};var H=function(w){var q=w.children,pe=w.color,me=pe===void 0?T.Primary:pe,J=w.size,E=J===void 0?X.Medium:J;return(0,c.jsx)("div",{className:F.page,children:(0,c.jsx)(W.Provider,{value:{color:me,size:E},children:q})})};H.displayName="Page";try{H.displayName="Page",H.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:H.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(Y){}var se=`import React from 'react';
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
`,ue={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},le="";const de={title:"Components/Page",component:H,parameters:{design:(0,a.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,c.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var re=function(w){return(0,c.jsx)("div",{style:{width:"600px"},children:(0,c.jsxs)(H,{color:w.color,size:w.size,children:[(0,c.jsx)(_,{icon:(0,c.jsx)(Z,{}),children:"PageHeader"}),(0,c.jsx)(j,{children:"PageContent"})]})})};re.displayName="Template";var $=re.bind({});$.args={color:T.Primary,size:X.Medium},$.parameters={docs:{description:{story:""}}};var g=re.bind({});g.args={color:T.Success,size:X.Medium},g.parameters={docs:{description:{story:""}}},$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters),g.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},g.parameters);var U=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>J,default:()=>q,descriptionTexts:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),oe=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),Z=e.n(Q),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e.n(T),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e.n(W),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e.n(L),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),y=e.n(f),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(P),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e.n(b),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),j=e.n(c),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e.n(l),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),C=e.n(R),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),_=e.n(D),u=e("./node_modules/react/index.js"),B=e("./node_modules/storybook-addon-designs/esm/index.js"),S=e("./.storybook/StoryPage.tsx"),F=e("./src/components/Pagination/Pagination.tsx"),H=e("./node_modules/react/jsx-runtime.js");function se(E,m){return $(E)||re(E,m)||le(E,m)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(E,m){if(!!E){if(typeof E=="string")return de(E,m);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(E,m)}}function de(E,m){(m==null||m>E.length)&&(m=E.length);for(var r=0,t=new Array(m);r<m;r++)t[r]=E[r];return t}function re(E,m){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],I=!0,M=!1,ce,be;try{for(r=r.call(E);!(I=(ce=r.next()).done)&&(t.push(ce.value),!(m&&t.length===m));I=!0);}catch(ee){M=!0,be=ee}finally{try{!I&&r.return!=null&&r.return()}finally{if(M)throw be}}return t}}function $(E){if(Array.isArray(E))return E}var g=`import React, { useState } from 'react';
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
`,U={Example:{startLoc:{col:52,line:52},endLoc:{col:1,line:73},startBody:{col:52,line:52},endBody:{col:1,line:73}}},Y="",w={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const q={title:"Components/Pagination",component:F.t,parameters:{design:(0,B.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,H.jsx)(S.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var pe=function(m){var r=(0,u.useState)(5),t=se(r,2),I=t[0],M=t[1],ce=(0,u.useState)(0),be=se(ce,2),ee=be[0],N=be[1],K=function(_e){M(parseInt(_e.target.value,10)),N(0)};return(0,H.jsx)(F.t,Object.assign({},m,{rowsPerPage:I,currentPage:ee,setCurrentPage:N,onRowsPerPageChange:K,descriptionTexts:w}))};pe.displayName="Template";var me=pe.bind({});me.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},me.parameters={docs:{description:{story:""}}},me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},me.parameters);var J=["descriptionTexts","Example"];try{w.displayName="descriptionTexts",w.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:w.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(E){}},"./src/components/Panel/Panel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>x,Info:()=>y,Success:()=>f,Warning:()=>P,__namedExportsOrder:()=>b,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Panel/Panel.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},v="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const L={title:"Components/Panel",component:Z.s,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,T.jsx)("div",{children:"Her kommer litt informasjon"})}};var i=function(c){return(0,T.jsx)(Z.s,Object.assign({},c))};i.displayName="Template";var f=i.bind({});f.args={variant:Z.c.Success},f.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var y=i.bind({});y.parameters={docs:{description:{story:"Infobeskrivelse"}}};var P=i.bind({});P.args={variant:Z.c.Warning},P.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var x=i.bind({});x.args={variant:Z.c.Error},x.parameters={docs:{description:{story:"Feilbeskrivelse"}}},f.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},f.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},y.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},P.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},x.parameters);var b=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>J,Info:()=>pe,Success:()=>q,Warning:()=>me,__namedExportsOrder:()=>E,default:()=>Y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/index.ts"),b=e("./src/components/Panel/Panel.tsx"),p=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),c=e("./node_modules/classnames/index.js"),j=e.n(c),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(l),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),C={};C.insert="head",C.singleton=!1;var D=h()(R.Z,C);const _=R.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js"),B=function(r){var t=r.children;return(0,u.jsx)(p.Eh,{className:j()(_["popover-panel__arrow"]),asChild:!0,children:t})};B.displayName="renderArrow";var S=function(r){var t=r.children,I=r.variant,M=I===void 0?b.c.Warning:I,ce=r.trigger,be=r.side,ee=be===void 0?"top":be,N=r.title,K=r.showIcon,ae=r.forceMobileLayout,_e=r.showPointer,Oe=_e===void 0?!0:_e,Se=r.onOpenChange,je=r.open,he=je===void 0?!1:je;return(0,u.jsxs)(p.fC,{open:he,onOpenChange:Se,children:[(0,u.jsx)(p.xz,{asChild:!0,role:"button",children:ce}),(0,u.jsx)(p.VY,{side:ee,className:_["popover-panel"],children:(0,u.jsx)(b.s,{title:N,showIcon:K,forceMobileLayout:ae,showPointer:Oe,variant:M,renderArrow:B,children:t})})]})};S.displayName="PopoverPanel";const F=null;try{S.displayName="PopoverPanel",S.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:S.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(m){}function H(m,r){return re(m)||de(m,r)||ue(m,r)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(m,r){if(!!m){if(typeof m=="string")return le(m,r);var t=Object.prototype.toString.call(m).slice(8,-1);if(t==="Object"&&m.constructor&&(t=m.constructor.name),t==="Map"||t==="Set")return Array.from(m);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return le(m,r)}}function le(m,r){(r==null||r>m.length)&&(r=m.length);for(var t=0,I=new Array(r);t<r;t++)I[t]=m[t];return I}function de(m,r){var t=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(t!=null){var I=[],M=!0,ce=!1,be,ee;try{for(t=t.call(m);!(M=(be=t.next()).done)&&(I.push(be.value),!(r&&I.length===r));M=!0);}catch(N){ce=!0,ee=N}finally{try{!M&&t.return!=null&&t.return()}finally{if(ce)throw ee}}return I}}function re(m){if(Array.isArray(m))return m}var $=`import React from 'react';
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
`,g={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},U="";const Y={title:"Components/Panel/PopoverPanel",component:S,parameters:{design:(0,f.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,u.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:b.c.Warning,trigger:(0,u.jsx)("button",{children:"\xC5pne"}),side:"top"}};var w=function(r){var t=(0,y.eJ)(!1),I=H(t,2),M=I[0],ce=I[1],be=function(){ce(!M)};return(0,u.jsx)("div",{children:(0,u.jsxs)(S,{variant:r.variant,side:r.side,title:r.title,open:M,trigger:(0,u.jsx)(x.zx,{variant:x.Wu.Filled,color:x.rp.Primary,children:"\xC5pne"}),onOpenChange:ce,showPointer:r.showPointer,showIcon:r.showIcon,forceMobileLayout:r.forceMobileLayout,children:[(0,u.jsx)("div",{children:"Her kommer litt informasjon"}),(0,u.jsx)(x.zx,{variant:x.Wu.Filled,color:x.rp.Primary,size:x.qE.Small,onClick:be,children:"Lukk"})]})})};w.displayName="Template";var q=w.bind({});q.args={variant:b.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},q.argTypes={trigger:{control:!1}},q.parameters={docs:{description:{story:""}}};var pe=w.bind({});pe.args={variant:b.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},pe.argTypes={trigger:{control:!1}},pe.parameters={docs:{description:{story:""}}};var me=w.bind({});me.args={variant:b.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},me.argTypes={trigger:{control:!1}},me.parameters={docs:{description:{story:""}}};var J=w.bind({});J.args={variant:b.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},J.argTypes={trigger:{control:!1}},J.parameters={docs:{description:{story:""}}},q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},pe.parameters),me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},me.parameters),J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters);var E=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>x,Default:()=>f,Disabled:()=>b,Error:()=>P,LongText:()=>c,WithDescription:()=>p,WithHiddenLabel:()=>j,__namedExportsOrder:()=>l,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/RadioButton/RadioButton.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Default:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}}},v="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const L={title:"Components/RadioButton",component:Z.E,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}",deprecationWarning:"Use RadioButton from @digdir/design-system-react instead."})}}},args:{label:"Label",name:"label",value:"label"}};var i=function(R){return(0,T.jsx)(Z.E,Object.assign({},R))};i.displayName="Template";var f=i.bind({});f.args={},f.parameters={docs:{description:{story:"Default radio button."}}};var y=i.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"Checked radio button."}}};var P=i.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var x=i.bind({});x.args={size:Z.j.Xsmall},x.parameters={docs:{description:{story:"This is the compact radio button."}}};var b=i.bind({});b.args={disabled:!0},b.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var p=i.bind({});p.args={description:"Lorem ipsum dolor sit amet."},p.parameters={docs:{description:{story:"This is a radio button with description."}}};var c=i.bind({});c.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},c.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var j=i.bind({});j.args={hideLabel:!0},j.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},y.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},P.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},x.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},c.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},j.parameters);var l=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>me,Disabled:()=>E,Error:()=>J,Horizontal:()=>pe,Vertical:()=>q,__namedExportsOrder:()=>m,default:()=>Y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),b=e("./src/components/RadioButton/index.ts"),p=e("./src/components/FieldSet/index.ts"),c=e("./src/hooks/index.ts"),j=e("./src/utils/arrayUtils.ts"),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(l),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css"),C={};C.insert="head",C.singleton=!1;var D=h()(R.Z,C);const _=R.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js");function B(r,t){return ue(r)||se(r,t)||F(r,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(r,t){if(!!r){if(typeof r=="string")return H(r,t);var I=Object.prototype.toString.call(r).slice(8,-1);if(I==="Object"&&r.constructor&&(I=r.constructor.name),I==="Map"||I==="Set")return Array.from(r);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return H(r,t)}}function H(r,t){(t==null||t>r.length)&&(t=r.length);for(var I=0,M=new Array(t);I<t;I++)M[I]=r[I];return M}function se(r,t){var I=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(I!=null){var M=[],ce=!0,be=!1,ee,N;try{for(I=I.call(r);!(ce=(ee=I.next()).done)&&(M.push(ee.value),!(t&&M.length===t));ce=!0);}catch(K){be=!0,N=K}finally{try{!ce&&I.return!=null&&I.return()}finally{if(be)throw N}}return M}}function ue(r){if(Array.isArray(r))return r}var le;(function(r){r.Xsmall="xsmall",r.Small="small"})(le||(le={}));var de;(function(r){r.Vertical="vertical",r.Horizontal="horizontal"})(de||(de={}));var re=function(t){var I=t.description,M=t.disabled,ce=t.error,be=t.items,ee=t.legend,N=t.name,K=t.onChange,ae=t.presentation,_e=t.size,Oe=_e===void 0?le.Small:_e,Se=t.value,je=t.variant,he=je===void 0?de.Vertical:je;if(!(0,j.zb)(be.map(function(Te){return Te.value})))throw Error("Each value in the radio group must be unique.");var Ce=(0,n.useState)(Se),We=B(Ce,2),Me=We[0],Re=We[1];(0,n.useEffect)(function(){Re(Se)},[Se]);var ye=(0,c.D9)(Me);(0,c.PQ)(function(){K&&!M&&ye!==Me&&K(Me)},[Me,M,K]);var ge=function(Ke){return function(Be){return Be.target.checked&&Re(Ke)}},V=Oe===le.Xsmall?[p.w.Xsmall,b.j.Xsmall]:[p.w.Small,b.j.Small],fe=B(V,2),xe=fe[0],Ie=fe[1];return(0,u.jsx)(p.C,{description:I,disabled:M,error:ce,legend:ee,size:xe,children:(0,u.jsx)("div",{className:[_["altinn-radio-group"],_["altinn-radio-group--"+he],_["altinn-radio-group--"+Oe]].join(" "),role:ae?void 0:"radiogroup",children:be.map(function(Te){return(0,n.createElement)(b.E,Object.assign({},Te,{checked:Te.value===Me,disabled:M||Te.disabled,error:!!ce,key:Te.value,name:N,onChange:ge(Te.value),presentation:ae,size:Ie}))})})})};re.displayName="RadioGroup";try{re.displayName="RadioGroup",re.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:re.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(r){}var $=`import React from 'react';
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
`,g={Vertical:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Horizontal:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Compact:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Error:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Disabled:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}}},U="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const Y={title:"Components/RadioGroup",component:re,parameters:{design:(0,a.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,u.jsx)(d.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes.",deprecationWarning:"Use RadioGroup from @digdir/design-system-react instead."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var w=function(t){return(0,u.jsx)(re,Object.assign({},t))};w.displayName="Template";var q=w.bind({});q.args={variant:de.Vertical},q.parameters={docs:{description:{story:"This is the default setting."}}};var pe=w.bind({});pe.args={variant:de.Horizontal},pe.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var me=w.bind({});me.args={size:le.Xsmall},me.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var J=w.bind({});J.args={error:"Du m\xE5 velge et av alternativene over."},J.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var E=w.bind({});E.args={disabled:!0},E.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},q.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},pe.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},me.parameters),J.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},J.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},E.parameters);var m=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>$,__namedExportsOrder:()=>g,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./.storybook/StoryPage.tsx"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),p=e("./node_modules/classnames/index.js"),c=e.n(p),j=e("./src/components/_InputWrapper/index.ts"),l=e("./node_modules/react/jsx-runtime.js"),h=["id","onChange","disabled","label"];function R(U,Y){if(U==null)return{};var w=C(U,Y),q,pe;if(Object.getOwnPropertySymbols){var me=Object.getOwnPropertySymbols(U);for(pe=0;pe<me.length;pe++)q=me[pe],!(Y.indexOf(q)>=0)&&(!Object.prototype.propertyIsEnumerable.call(U,q)||(w[q]=U[q]))}return w}function C(U,Y){if(U==null)return{};var w={},q=Object.keys(U),pe,me;for(me=0;me<q.length;me++)pe=q[me],!(Y.indexOf(pe)>=0)&&(w[pe]=U[pe]);return w}var D=function(Y){var w=Y.id,q=Y.onChange,pe=Y.disabled,me=pe===void 0?!1:pe,J=Y.label,E=R(Y,h);return(0,l.jsx)(j.SP,{disabled:me,isSearch:!0,label:J,inputRenderer:function(r){var t=r.className,I=r.variant,M={id:w,disabled:me,className:c()(t)};return(0,l.jsx)("input",Object.assign({},M,E,{"data-testid":w+"-"+I,onChange:q}))}})};D.displayName="SearchField";try{D.displayName="SearchField",D.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:D.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(U){}function _(U,Y){return H(U)||F(U,Y)||B(U,Y)||u()}function u(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(U,Y){if(!!U){if(typeof U=="string")return S(U,Y);var w=Object.prototype.toString.call(U).slice(8,-1);if(w==="Object"&&U.constructor&&(w=U.constructor.name),w==="Map"||w==="Set")return Array.from(U);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return S(U,Y)}}function S(U,Y){(Y==null||Y>U.length)&&(Y=U.length);for(var w=0,q=new Array(Y);w<Y;w++)q[w]=U[w];return q}function F(U,Y){var w=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(w!=null){var q=[],pe=!0,me=!1,J,E;try{for(w=w.call(U);!(pe=(J=w.next()).done)&&(q.push(J.value),!(Y&&q.length===Y));pe=!0);}catch(m){me=!0,E=m}finally{try{!pe&&w.return!=null&&w.return()}finally{if(me)throw E}}return q}}function H(U){if(Array.isArray(U))return U}var se=`import React from 'react';
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
`,ue={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},le="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const de={title:"Components/SearchField",component:D,parameters:{design:(0,f.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,l.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var re=function(Y){var w=(0,y.D8)(),q=_(w,1),pe=q[0].disabled;return(0,l.jsx)(D,Object.assign({disabled:pe},Y))};re.displayName="Template";var $=re.bind({});$.args={},$.parameters={docs:{description:{story:"Search field."}}},$.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},$.parameters);var g=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Disabled:()=>p,Error:()=>c,Multiple:()=>b,__namedExportsOrder:()=>j,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),oe=e.n(d),Q=e("./node_modules/react/index.js"),Z=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Select/Select.tsx"),W=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,L={Multiple:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Disabled:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Error:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",f=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],y=f.map(function(l){return Object.assign({},l,{deleteButtonLabel:"Slett "+l.label})});const P={title:"Components/Select/Multiple",component:X.P,parameters:{design:(0,Z.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,W.jsx)(T.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:y}};var x=function(h){return(0,W.jsx)("div",{style:{width:"440px"},children:(0,W.jsx)(X.P,Object.assign({},h))})};x.displayName="Template";var b=x.bind({});b.args={},b.parameters={docs:{description:{story:"This is the default multiple select box."}}};var p=x.bind({});p.args={disabled:!0},p.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var c=x.bind({});c.args={error:!0},c.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters);var j=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>f,Disabled:()=>y,Error:()=>P,__namedExportsOrder:()=>x,default:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e.n(n),d=e("./node_modules/react/index.js"),oe=e("./node_modules/storybook-addon-designs/esm/index.js"),Q=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Select/Select.tsx"),T=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Default:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Error:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}},v="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const L={title:"Components/Select/Single",component:Z.P,parameters:{design:(0,oe.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,T.jsx)(Q.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var i=function(p){return(0,T.jsx)("div",{style:{width:"440px"},children:(0,T.jsx)(Z.P,Object.assign({},p))})};i.displayName="Template";var f=i.bind({});f.args={},f.parameters={docs:{description:{story:"This is the default select box."}}};var y=i.bind({});y.args={disabled:!0},y.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var P=i.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},f.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},f.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},y.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},P.parameters);var x=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{IconFromNavIconLibrary:()=>b,ImportedCustomIcon:()=>p,__namedExportsOrder:()=>c,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./node_modules/@navikt/ds-icons/esm/Success.js"),oe=e("./.storybook/StoryPage.tsx"),Q=e("./src/components/SvgIcon/index.ts"),Z,T,X;function W(){return W=Object.assign?Object.assign.bind():function(j){for(var l=1;l<arguments.length;l++){var h=arguments[l];for(var R in h)Object.prototype.hasOwnProperty.call(h,R)&&(j[R]=h[R])}return j},W.apply(this,arguments)}var v=function(l){return n.createElement("svg",W({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},l),Z||(Z=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),T||(T=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),X||(X=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},L=e("./node_modules/react/jsx-runtime.js"),i=`import React from 'react';
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
`,f={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},y="";const P={title:"Components/SvgIcon",component:Q.l,parameters:{design:(0,a.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,L.jsx)(oe.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var x=function(l){return(0,L.jsx)(Q.l,Object.assign({},l))};x.displayName="Template";var b=x.bind({});b.args={svgIconComponent:(0,L.jsx)(d.Z,{})},b.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var p=x.bind({});p.args={svgIconComponent:(0,L.jsx)(v,{height:"2rem",width:"2rem"})},p.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},b.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},p.parameters);var c=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{BasicTable:()=>_n,Responsive:()=>yn,SelectRows:()=>gn,__namedExportsOrder:()=>Nn,default:()=>wn});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),x=e("./node_modules/classnames/index.js"),b=e.n(x),p=e("./.storybook/StoryPage.tsx"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),h=e("./src/hooks/useMediaQuery.ts"),R=e("./src/DesignTokens/index.ts"),C=e("./src/components/RadioButton/index.ts"),D;(function(k){k.Header="header",k.Body="body",k.Footer="footer"})(D||(D={}));var _;(function(k){k.Descending="desc",k.Ascending="asc",k.NotSortable="notSortable",k.NotActive="notActive"})(_||(_={}));var u=(0,y.createContext)(void 0);function B(){var k=(0,y.useContext)(u);if(k===void 0)throw new Error("useTableContext must be used within a TableContext");return k}var S=(0,y.createContext)({variantStandard:D.Body}),F=function(){var z=(0,y.useContext)(S);if(z===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return z},H=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),se=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(se),le=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css"),de={};de.insert="head",de.singleton=!1;var re=ue()(le.Z,de);const $=le.Z.locals||{};var g=e("./node_modules/react/jsx-runtime.js"),U=["children","selectRows","onChange","selectedValue","className"];function Y(k,z){if(k==null)return{};var te=w(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function w(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}function q(k){var z=k.children,te=k.selectRows,G=te===void 0?!1:te,ne=k.onChange,ie=k.selectedValue,ve=k.className,Le=Y(k,U),Ue={selectRows:G,onChange:ne,selectedValue:ie};return(0,g.jsx)("table",Object.assign({},Le,{className:b()($.Table,ve),children:(0,g.jsx)(u.Provider,{value:Ue,children:z})}))}q.displayName="Table";try{q.displayName="Table",q.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler<T>"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:q.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(k){}var pe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css"),me={};me.insert="head",me.singleton=!1;var J=ue()(pe.Z,me);const E=pe.Z.locals||{};var m=["children","className"];function r(k,z){if(k==null)return{};var te=t(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function t(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}var I=function(z){var te=z.children,G=z.className,ne=r(z,m),ie=D.Header;return(0,g.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,g.jsx)("thead",Object.assign({},ne,{className:b()(E["table-header"],G),children:te}))})};I.displayName="TableHeader";try{I.displayName="TableHeader",I.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:I.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(k){}var M=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css"),ce={};ce.insert="head",ce.singleton=!1;var be=ue()(M.Z,ce);const ee=M.Z.locals||{};var N=["children","rowData","className"];function K(k,z){if(k==null)return{};var te=ae(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function ae(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}function _e(k){var z,te=k.children,G=k.rowData,ne=k.className,ie=K(k,N),ve=F(),Le=ve.variantStandard,Ue=B(),ze=Ue.onChange,Ye=Ue.selectedValue,Ee=Ue.selectRows,De=function(){ze!=null&&Ee&&Le===D.Body&&G&&ze({selectedValue:G})},Ae=Ee&&typeof G!="undefined"&&JSON.stringify(G)===JSON.stringify(Ye);return(0,g.jsx)("tr",Object.assign({},ie,{className:b()(ee.TableRow,(z={},z[ee["table-row--selected"]]=Ae,z[ee["table-row--body"]]=Le===D.Body&&Ee&&!Ae,z),ne),onClick:De,children:te}))}_e.displayName="TableRow";try{_e.displayName="TableRow",_e.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:_e.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(k){}var Oe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css"),Se={};Se.insert="head",Se.singleton=!1;var je=ue()(Oe.Z,Se);const he=Oe.Z.locals||{};var Ce;function We(){return We=Object.assign?Object.assign.bind():function(k){for(var z=1;z<arguments.length;z++){var te=arguments[z];for(var G in te)Object.prototype.hasOwnProperty.call(te,G)&&(k[G]=te[G])}return k},We.apply(this,arguments)}var Me=function(z){return y.createElement("svg",We({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},z),Ce||(Ce=y.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},Re=["children","variant","onChange","sortDirection","className","radiobutton"];function ye(k,z){if(k==null)return{};var te=ge(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function ge(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}function V(k){var z,te=k.children,G=k.variant,ne=k.onChange,ie=k.sortDirection,ve=ie===void 0?_.NotSortable:ie,Le=k.className,Ue=k.radiobutton,ze=Ue===void 0?!1:Ue,Ye=ye(k,Re),Ee=F(),De=Ee.variantStandard,Ae=function(nn){return G===void 0?De===nn:G===nn},Qe=function(){ne!=null&&ve!=null&&ve!=_.NotSortable&&ne({next:ve===_.Descending?_.Ascending:_.Descending,previous:ve})};return(0,g.jsxs)(g.Fragment,{children:[Ae(D.Header)&&(0,g.jsx)("th",Object.assign({},Ye,{className:ze?b()(he["header-table-cell-radiobutton"],Le):b()(he["header-table-cell"],Le),"aria-sort":ve===_.Ascending?"ascending":ve===_.Descending?"descending":"none",children:(0,g.jsxs)("div",{className:ve!=_.NotSortable?b()(he["container-sortable"]):b()(he.container),onClick:function(){return Qe()},onKeyUp:function(nn){(nn.key==="Enter"||nn.key===" ")&&Qe()},role:ve!=_.NotSortable?"button":void 0,tabIndex:ve!=_.NotSortable?0:void 0,children:[(0,g.jsx)("div",{className:b()(he.input),children:te}),ve!=_.NotSortable&&(0,g.jsx)(Me,{"aria-label":"Sortering","data-testid":"sort-icon",className:b()(he.icon,(z={},z[he["icon-asc"]]=ve===_.Ascending,z[he["icon-desc"]]=ve===_.Descending,z))})]})})),Ae(D.Body)&&(0,g.jsx)("td",Object.assign({},Ye,{className:ze?b()(he["body-table-cell-radiobutton"],Le):b()(he["body-table-cell"],Le),children:(0,g.jsx)("div",{className:ze?b()(he["radio-button"]):b()(he.input),children:te})})),Ae(D.Footer)&&(0,g.jsx)("td",Object.assign({},Ye,{className:b()(Le),children:(0,g.jsx)("div",{className:b()(he.input),children:te})}))]})}try{V.displayName="TableCell",V.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirection:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:V.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(k){}var fe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css"),xe={};xe.insert="head",xe.singleton=!1;var Ie=ue()(fe.Z,xe);const Te=fe.Z.locals||{};var Ke=["children","className"];function Be(k,z){if(k==null)return{};var te=He(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function He(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}var Ve=function(z){var te=z.children,G=z.className,ne=Be(z,Ke),ie=D.Body;return(0,g.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,g.jsx)("tbody",Object.assign({},ne,{className:b()(Te.TableBody,G),children:te}))})};Ve.displayName="TableBody";try{Ve.displayName="TableBody",Ve.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Ve.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(k){}var tn=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css"),$e={};$e.insert="head",$e.singleton=!1;var un=ue()(tn.Z,$e);const sn=tn.Z.locals||{};var mn=["children","className"];function dn(k,z){if(k==null)return{};var te=cn(k,z),G,ne;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(ne=0;ne<ie.length;ne++)G=ie[ne],!(z.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function cn(k,z){if(k==null)return{};var te={},G=Object.keys(k),ne,ie;for(ie=0;ie<G.length;ie++)ne=G[ie],!(z.indexOf(ne)>=0)&&(te[ne]=k[ne]);return te}var Xe=function(z){var te=z.children,G=z.className,ne=dn(z,mn),ie=D.Footer;return(0,g.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,g.jsx)("tfoot",Object.assign({},ne,{className:b()(sn["table-footer"],G),children:te}))})};Xe.displayName="TableFooter";try{Xe.displayName="TableFooter",Xe.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Xe.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(k){}function on(k){var z=k.config,te=(0,h.a)("(max-width: "+R.T.cLy+")");return te?(0,g.jsx)(rn,{config:z}):(0,g.jsx)(an,{config:z})}function rn(k){var z=k.config,te=z.rows,G=z.headers,ne=z.showColumnsMobile,ie=z.renderCell,ve=z.rowSelection,Le=z.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Ye=ve?2:1;return(0,g.jsxs)(q,{selectRows:!!ve,onChange:function(De){var Ae=De.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,g.jsx)(Ve,{children:te.map(function(Ee){var De=JSON.stringify(Ee);return(0,g.jsxs)(_e,{rowData:Ee,children:[ve&&(0,g.jsx)(V,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:De,onChange:function(){return ve.onSelectionChange(Ee)},value:De,checked:De===Ue,label:De,hideLabel:!0})}),(0,g.jsx)(V,{style:{padding:"0px"},children:ze.map(function(Ae){if(!(ne&&!ne.includes(Ae))){var Qe=ie&&ie[Ae],Ze=Qe?Qe(Ee[Ae]):Ee[Ae];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:he.header,children:G[Ae]}),(0,g.jsx)("div",{className:he.property,children:Ze})]})}})},De+"-data")]},De)})}),Le&&(0,g.jsx)(Xe,{children:(0,g.jsx)(_e,{children:(0,g.jsx)(V,{colSpan:Ye,children:Le})})})]})}rn.displayName="MobileTable";function an(k){var z=k.config,te=z.rows,G=z.headers,ne=z.renderCell,ie=z.columnSort,ve=z.rowSelection,Le=z.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Ye=ve?Object.keys(G).length+1:Object.keys(G).length;return(0,g.jsxs)(q,{selectRows:!!ve,onChange:function(De){var Ae=De.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,g.jsx)(I,{children:(0,g.jsxs)(_e,{children:[ve&&(0,g.jsx)(V,{radiobutton:!0}),ze.map(function(Ee){return(0,g.jsx)(V,{onChange:function(Ae){var Qe=Ae.next,Ze=Ae.previous;ie&&ie.onSortChange({column:Ee,next:Qe,previous:Ze})},sortDirection:ie?ie.currentlySortedColumn===Ee?ie.currentDirection:ie.sortable.includes(Ee)?_.NotActive:_.NotSortable:_.NotSortable,children:G[Ee]},Ee)})]})}),(0,g.jsx)(Ve,{children:te.map(function(Ee){var De=JSON.stringify(Ee);return(0,g.jsxs)(_e,{rowData:Ee,children:[ve&&(0,g.jsx)(V,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:De,onChange:function(){return ve.onSelectionChange(Ee)},value:De,checked:De===Ue,label:De,hideLabel:!0})}),ze.map(function(Ae){var Qe=ne&&ne[Ae];return(0,g.jsx)(V,{children:Qe?Qe(Ee[Ae]):Ee[Ae]},De+"-"+Ae)})]},De)})}),Le&&(0,g.jsx)(Xe,{children:(0,g.jsx)(_e,{children:(0,g.jsx)(V,{colSpan:Ye,children:Le})})})]})}an.displayName="LaptopTable";try{on.displayName="ResponsiveTable",on.__docgenInfo={description:"",displayName:"ResponsiveTable",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"ResponsiveTableConfig<T>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/ResponsiveTable.tsx#ResponsiveTable"]={docgenInfo:on.__docgenInfo,name:"ResponsiveTable",path:"src/components/Table/ResponsiveTable.tsx#ResponsiveTable"})}catch(k){}var pn=e("./src/components/Pagination/Pagination.stories.tsx"),Sn=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),En=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.sort.js"),ke=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.reverse.js"),Pe=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function Fe(k){var z=k.page,te=k.rowsPerPage,G=k.sortColumn,ne=k.sortDirection,ie=[].concat(Pe);return G&&(ie.sort(function(ve,Le){return ve[G]===Le[G]?0:ve[G]>Le[G]?1:-1}),ne===_.Descending&&ie.reverse()),{totalNum:ie.length,rows:ie.slice(z*te,z*te+te)}}var qe=e("./src/components/Pagination/Pagination.tsx"),Ge=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css"),Je={};Je.insert="head",Je.singleton=!1;var Tn=ue()(Ge.Z,Je);const hn=Ge.Z.locals||{};function en(k,z){return Bn(k)||Mn(k,z)||Rn(k,z)||Dn()}function Dn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(k,z){if(!!k){if(typeof k=="string")return An(k,z);var te=Object.prototype.toString.call(k).slice(8,-1);if(te==="Object"&&k.constructor&&(te=k.constructor.name),te==="Map"||te==="Set")return Array.from(k);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return An(k,z)}}function An(k,z){(z==null||z>k.length)&&(z=k.length);for(var te=0,G=new Array(z);te<z;te++)G[te]=k[te];return G}function Mn(k,z){var te=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(te!=null){var G=[],ne=!0,ie=!1,ve,Le;try{for(te=te.call(k);!(ne=(ve=te.next()).done)&&(G.push(ve.value),!(z&&G.length===z));ne=!0);}catch(Ue){ie=!0,Le=Ue}finally{try{!ne&&te.return!=null&&te.return()}finally{if(ie)throw Le}}return G}}function Bn(k){if(Array.isArray(k))return k}var Kn=`import React, { useState } from 'react';
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
`,Vn={BasicTable:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},SelectRows:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},Responsive:{startLoc:{col:67,line:162},endLoc:{col:1,line:230},startBody:{col:67,line:162},endBody:{col:1,line:230}}},In="";const wn={title:"Components/Table",component:q,parameters:{design:(0,P.vc)([{type:"figma",url:In},{type:"link",url:In}]),docs:{page:function(){return(0,g.jsx)(p.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var kn=function(z){var te=(0,y.useState)(void 0),G=en(te,2),ne=G[0],ie=G[1],ve=(0,y.useState)(void 0),Le=en(ve,2),Ue=Le[0],ze=Le[1],Ye=(0,y.useState)(_.NotActive),Ee=en(Ye,2),De=Ee[0],Ae=Ee[1],Qe=(0,y.useState)(5),Ze=en(Qe,2),nn=Ze[0],On=Ze[1],xn=(0,y.useState)(0),bn=en(xn,2),vn=bn[0],fn=bn[1],jn=Fe({page:vn,rowsPerPage:nn,sortColumn:Ue,sortDirection:De}),Cn=jn.rows,Pn=jn.totalNum;return(0,g.jsxs)(q,{selectRows:z.selectRows,onChange:function(Ne){var ln=Ne.selectedValue;return ie(ln)},selectedValue:ne,children:[(0,g.jsx)(I,{children:(0,g.jsxs)(_e,{children:[z.selectRows&&(0,g.jsx)(V,{radiobutton:!0}),(0,g.jsx)(V,{onChange:function(Ne){var ln=Ne.next;ze("caseNum"),Ae(ln)},sortDirection:Ue==="caseNum"?De:_.NotActive,children:"S\xF8knadsnr."}),(0,g.jsx)(V,{onChange:function(Ne){var ln=Ne.next;ze("product"),Ae(ln)},sortDirection:Ue==="product"?De:_.NotActive,children:"Produkt"}),(0,g.jsx)(V,{children:"Status"}),(0,g.jsx)(V,{children:"Bilde"})]})}),(0,g.jsx)(Ve,{children:Cn.map(function(we){return(0,g.jsxs)(_e,{rowData:{caseNum:we.caseNum},children:[z.selectRows&&(0,g.jsx)(V,{radiobutton:!0,children:(0,g.jsx)(C.E,{name:""+we.caseNum,onChange:function(){return ie(we)},value:""+we.caseNum,checked:(ne==null?void 0:ne.caseNum)===we.caseNum,label:""+we.caseNum,hideLabel:!0})}),(0,g.jsx)(V,{children:we.caseNum}),(0,g.jsx)(V,{children:we.product}),(0,g.jsx)(V,{children:we.status}),(0,g.jsx)(V,{children:(0,g.jsx)("img",{className:b()(hn.checkmark),src:we.image.src,alt:we.image.alt})})]},we.caseNum)})}),(0,g.jsx)(Xe,{children:(0,g.jsx)(_e,{children:(0,g.jsx)(V,{colSpan:5,children:(0,g.jsx)(qe.t,{numberOfRows:Pn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:nn,onRowsPerPageChange:function(Ne){On(parseInt(Ne.target.value,10)),fn(0)},currentPage:vn,setCurrentPage:function(Ne){return fn(Ne)},descriptionTexts:pn.descriptionTexts})})})})]})};kn.displayName="Template";var Ln=function(){var z=(0,y.useState)(void 0),te=en(z,2),G=te[0],ne=te[1],ie=(0,y.useState)(void 0),ve=en(ie,2),Le=ve[0],Ue=ve[1],ze=(0,y.useState)(_.NotActive),Ye=en(ze,2),Ee=Ye[0],De=Ye[1],Ae=(0,y.useState)(5),Qe=en(Ae,2),Ze=Qe[0],nn=Qe[1],On=(0,y.useState)(0),xn=en(On,2),bn=xn[0],vn=xn[1],fn=Fe({rowsPerPage:Ze,page:bn,sortColumn:Le,sortDirection:Ee}),jn=fn.rows,Cn=fn.totalNum,Pn={rows:jn,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:function(Ne){var ln=Ne.column,Wn=Ne.next;Ue(ln),De(Wn)},sortable:["caseNum","product"],currentlySortedColumn:Le,currentDirection:Ee},renderCell:{image:function(Ne){return(0,g.jsx)("img",{className:b()(hn.checkmark),src:Ne.src,alt:Ne.alt})}},rowSelection:{onSelectionChange:function(Ne){return ne(Ne)},selectedValue:G},footer:(0,g.jsx)(qe.t,{numberOfRows:Cn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ze,onRowsPerPageChange:function(Ne){nn(parseInt(Ne.target.value,10)),vn(0)},currentPage:bn,setCurrentPage:function(Ne){return vn(Ne)},descriptionTexts:pn.descriptionTexts})};return(0,g.jsx)(on,{config:Pn})};Ln.displayName="ResponsiveTemplate";var _n=kn.bind({});_n.args={selectRows:!1},_n.parameters={docs:{description:{story:""}}};var gn=kn.bind({});gn.args={selectRows:!0},gn.parameters={docs:{description:{story:""}}};var yn=Ln.bind({});yn.args={},yn.parameters={docs:{description:{story:""}}},_n.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},yn.parameters);var Nn=["BasicTable","SelectRows","Responsive"]},"./src/components/Tabs/Tabs.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>J,default:()=>q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./src/utils/arrayUtils.ts"),R=e("./src/hooks/index.ts"),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(C),_=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css"),u={};u.insert="head",u.singleton=!1;var B=D()(_.Z,u);const S=_.Z.locals||{};var F=e("./node_modules/react/jsx-runtime.js");function H(E,m){return re(E)||de(E,m)||ue(E,m)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(E,m){if(!!E){if(typeof E=="string")return le(E,m);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return le(E,m)}}function le(E,m){(m==null||m>E.length)&&(m=E.length);for(var r=0,t=new Array(m);r<m;r++)t[r]=E[r];return t}function de(E,m){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],I=!0,M=!1,ce,be;try{for(r=r.call(E);!(I=(ce=r.next()).done)&&(t.push(ce.value),!(m&&t.length===m));I=!0);}catch(ee){M=!0,be=ee}finally{try{!I&&r.return!=null&&r.return()}finally{if(M)throw be}}return t}}function re(E){if(Array.isArray(E))return E}var $=function(m){return m.replace(/\s/,"_")},g=function(m){var r=m.activeTab,t=m.items,I=m.onChange,M=(0,n.useId)(),ce=t.map(function(V){var fe=V.name,xe=V.content,Ie=V.value,Te=V.tabId,Ke=V.panelId,Be=Ie!=null?Ie:fe,He=Te!=null?Te:M+$(Be)+"-tab",Ve=Ke!=null?Ke:M+$(Be)+"-panel";return{name:fe,content:xe,value:Be,tabId:He,panelId:Ve}});if(!(0,h.zb)(ce.map(function(V){var fe=V.value;return fe})))throw Error("Each tab value must be unique.");if(r!==void 0&&!ce.some(function(V){return V.value===r}))throw Error("The given active tab value must exist in the list of items.");var be=function(fe){return ce.findIndex(function(xe){return xe.value===fe})},ee=r!=null?r:ce[0].value,N=(0,n.useState)(ee),K=H(N,2),ae=K[0],_e=K[1],Oe=(0,n.useState)(be(ee)),Se=H(Oe,2),je=Se[0],he=Se[1];(0,n.useEffect)(function(){return _e(ee)},[ee]);var Ce=(0,n.useRef)(null),We=ce.length-1;(0,R.PQ)(function(){var V;(V=Ce.current)===null||V===void 0||V.querySelectorAll('[role="tab"]')[je].focus()},[je]);var Me=function(fe){ae!==fe&&I&&I(fe),_e(fe),he(be(fe))},Re=function(){return je!==void 0&&he(je===We?0:je+1)},ye=function(){return je!==void 0&&he(je===0?We:je-1)},ge=function(fe){return function(xe){switch(xe.key){case"ArrowRight":Re();break;case"ArrowLeft":ye();break;case"Space":Me(fe)}}};return(0,F.jsxs)("div",{className:S["altinn-tabs"],children:[(0,F.jsx)("div",{className:S["altinn-tabs__tablist"],ref:Ce,role:"tablist",children:ce.map(function(V,fe){var xe=V.value===ae,Ie=l()(S["altinn-tabs__tablist__tab"],xe&&S["altinn-tabs__tablist__tab--selected"]);return(0,F.jsx)("button",{"aria-controls":V.panelId,"aria-selected":xe,className:Ie,id:V.tabId,onClick:function(){return Me(V.value)},onKeyDown:ge(V.value),role:"tab",tabIndex:je===fe?0:-1,children:V.name},V.value)})}),(0,F.jsx)("hr",{className:S["altinn-tabs__divider"]}),ce.map(function(V){return(0,F.jsx)("div",{className:S["altinn-tabs__tabpanel"],"aria-labelledby":V.tabId,hidden:V.value!==ae,id:V.panelId,role:"tabpanel",children:V.content},V.panelId)})]})};g.displayName="Tabs";try{g.displayName="Tabs",g.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:g.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(E){}var U=`import React from 'react';
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
`,Y={Example:{startLoc:{col:46,line:123},endLoc:{col:74,line:123},startBody:{col:46,line:123},endBody:{col:74,line:123}}},w="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const q={title:"Components/Tabs",component:g,parameters:{design:(0,a.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,F.jsx)(d.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.",deprecationWarning:"Use Tabs from @digdir/design-system-react instead."})}}},args:{items:[{name:"Ild",content:(0,F.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,F.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,F.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,F.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var pe=function(m){return(0,F.jsx)(g,Object.assign({},m))};pe.displayName="Template";var me=pe.bind({});me.args={},me.parameters={docs:{description:{story:"This is how the component might look like."}}},me.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},me.parameters);var J=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>_,Disabled:()=>F,Error:()=>u,ReadOnlyConfirm:()=>S,ReadOnlyInfo:()=>B,__namedExportsOrder:()=>H,default:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./src/components/_InputWrapper/index.ts"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/classnames/index.js"),W=e.n(X),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(v),i=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css"),f={};f.insert="head",f.singleton=!1;var y=L()(i.Z,f);const P=i.Z.locals||{};var x=e("./node_modules/react/jsx-runtime.js"),b=["isValid","disabled","readOnly","resize","label"];function p(se,ue){if(se==null)return{};var le=c(se,ue),de,re;if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(se);for(re=0;re<$.length;re++)de=$[re],!(ue.indexOf(de)>=0)&&(!Object.prototype.propertyIsEnumerable.call(se,de)||(le[de]=se[de]))}return le}function c(se,ue){if(se==null)return{};var le={},de=Object.keys(se),re,$;for($=0;$<de.length;$++)re=de[$],!(ue.indexOf(re)>=0)&&(le[re]=se[re]);return le}var j=function(ue){var le=ue.isValid,de=le===void 0?!0:le,re=ue.disabled,$=re===void 0?!1:re,g=ue.readOnly,U=g===void 0?!1:g,Y=ue.resize,w=Y===void 0?"none":Y,q=ue.label,pe=p(ue,b);return(0,x.jsx)(oe.SP,{isValid:de,disabled:$,readOnly:U,label:q,inputId:pe.id,inputRenderer:function(J){var E=J.className,m=J.inputId;return(0,x.jsx)("textarea",Object.assign({},pe,{id:m,disabled:$,readOnly:Boolean(U),className:W()(E,P["altinn-TextArea"],P["altinn-TextArea--resize-"+w])}))}})};j.displayName="TextArea";try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:j.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(se){}var l=`import React from 'react';
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
`,h={Default:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Error:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyInfo:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyConfirm:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Disabled:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}}},R="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const C={title:"Components/TextArea",component:j,parameters:{design:(0,a.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,x.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextArea from @digdir/design-system-react instead."})}}},args:{label:"Label"}};var D=function(ue){return(0,x.jsx)(j,Object.assign({},ue))};D.displayName="Template";var _=D.bind({});_.args={},_.parameters={docs:{description:{story:"Regular textarea."}}};var u=D.bind({});u.args={isValid:!1},u.parameters={docs:{description:{story:"Textarea displaying error."}}};var B=D.bind({});B.args={readOnly:!0,value:"Some text"},B.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var S=D.bind({});S.args={readOnly:oe.Hx.ReadOnlyConfirm,value:"Some text"},S.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var F=D.bind({});F.args={disabled:!0,value:"Some text"},F.parameters={docs:{description:{story:"Textarea as disabled."}}},_.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},_.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},u.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},B.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},S.parameters),F.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},F.parameters);var H=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>F,Disabled:()=>de,Error:()=>se,NumberInput:()=>H,ReadOnlyConfirm:()=>le,ReadOnlyInfo:()=>ue,__namedExportsOrder:()=>re,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),oe=e("./src/components/_InputWrapper/index.ts"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),i=e("./node_modules/classnames/index.js"),f=e.n(i),y=e("./node_modules/react-number-format/dist/react-number-format.es.js"),P=function(g){return g.format!==void 0},x=function(g){return g.format===void 0},b=function(g,U){return U&&x(U)?numericFormatter(g,U):U&&P(U)?patternFormatter(g,U):g},p=e("./node_modules/react/jsx-runtime.js"),c=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function j($,g){if($==null)return{};var U=l($,g),Y,w;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols($);for(w=0;w<q.length;w++)Y=q[w],!(g.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call($,Y)||(U[Y]=$[Y]))}return U}function l($,g){if($==null)return{};var U={},Y=Object.keys($),w,q;for(q=0;q<Y.length;q++)w=Y[q],!(g.indexOf(w)>=0)&&(U[w]=$[w]);return U}var h=function(g){var U=g.values,Y=g.sourceInfo;Y.event.target.value=U.value.trim()},R=function(g,U,Y){var w=g.target,q=g.key,pe=w.selectionStart,me=w.selectionEnd,J=w.value,E=J===void 0?"":J;if(pe!==null&&me!==null){var m=E[0]==="-",r=(U==null?void 0:U.length)||0+(m?1:0),t=(Y==null?void 0:Y.length)||0;m&&me<=r&&q==="Backspace"?w.setSelectionRange(1,1):w.setSelectionRange(Math.min(Math.max(pe,r),E.length-t),Math.max(Math.min(me,E.length-t),r))}},C=function(g){var U=g.id,Y=g.onChange,w=g.isValid,q=w===void 0?!0:w,pe=g.disabled,me=pe===void 0?!1:pe,J=g.readOnly,E=J===void 0?!1:J,m=g.required,r=m===void 0?!1:m,t=g.formatting,I=g.label,M=j(g,c),ce=function(ee,N){N.source==="event"&&Y&&(h({values:ee,sourceInfo:N}),Y(N.event))};return(0,p.jsx)(oe.SP,{isValid:q,disabled:me,readOnly:E,label:I,inputId:U,inputRenderer:function(ee){var N=ee.className,K=ee.variant,ae=ee.inputId,_e={id:ae,readOnly:Boolean(E),disabled:me,required:r,className:f()(N,M.className),style:Object.assign({textAlign:t==null?void 0:t.align},M.style)};return t!=null&&t.number&&x(t.number)?(t.number.prefix&&t.number.prefix[0]==="-"&&(t.number.prefix=" "+t.number.prefix),(0,p.jsx)(y.h3,Object.assign({},_e,t.number,M,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0,onKeyDown:function(Se){return R(Se,t.number.prefix,t.number.suffix)}}))):t!=null&&t.number&&P(t.number)?(0,p.jsx)(y.HH,Object.assign({},_e,t.number,M,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0})):(0,p.jsx)("input",Object.assign({},_e,M,{"data-testid":ae+"-"+K,onChange:Y}))}})};C.displayName="TextField";try{C.displayName="TextField",C.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:C.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch($){}var D=`import React from 'react';
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
`,_={Default:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},NumberInput:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyInfo:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyConfirm:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}}},u="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const B={title:"Components/TextField",component:C,parameters:{design:(0,a.vc)([{type:"figma",url:u},{type:"link",url:u}]),docs:{page:function(){return(0,p.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextField from @digdir/design-system-react instead."})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var S=function(g){return(0,p.jsx)(C,Object.assign({},g))};S.displayName="Template";var F=S.bind({});F.args={},F.parameters={docs:{description:{story:"Regular input field."}}};var H=S.bind({});H.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},H.parameters={docs:{description:{story:"Number input field."}}};var se=S.bind({});se.args={isValid:!1},se.parameters={docs:{description:{story:"Input field displaying error."}}};var ue=S.bind({});ue.args={readOnly:!0,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as readonly-info."}}};var le=S.bind({});le.args={readOnly:oe.Hx.ReadOnlyConfirm,value:"Some text"},le.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var de=S.bind({});de.args={disabled:!0,value:"Some text"},de.parameters={docs:{description:{story:"Input field as disabled."}}},F.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},F.parameters),H.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},H.parameters),se.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},se.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters),le.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},le.parameters),de.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},de.parameters);var re=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>m,__namedExportsOrder:()=>r,default:()=>J});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),P=e("./node_modules/classnames/index.js"),x=e.n(P),b=(0,i.createContext)(void 0),p=function(){var I=(0,i.useContext)(b);if(I===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return I},c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(c),l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),h={};h.insert="head",h.singleton=!1;var R=j()(l.Z,h);const C=l.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),_=function(I){var M=I.children,ce=I.onChange,be=I.selectedValue,ee=function(K){var ae=K.selectedValue;ce({selectedValue:ae})};return(0,D.jsx)(b.Provider,{value:{onChange:ee,selectedValue:be},children:(0,D.jsx)("div",{className:x()(C["toggle-button-group"]),"data-testid":"toggle-button-group",children:M})})};_.displayName="ToggleButtonGroup";try{_.displayName="ToggleButtonGroup",_.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:_.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(t){}var u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css"),B={};B.insert="head",B.singleton=!1;var S=j()(u.Z,B);const F=u.Z.locals||{};var H=function(I){var M,ce=I.children,be=I.value,ee=p(),N=ee.onChange,K=ee.selectedValue,ae=function(){N({selectedValue:be})};return(0,D.jsx)("button",{"data-testid":"toggle-button",className:x()(F["toggle-button"],(M={},M[F["toggle-button--selected"]]=be===K,M)),onClick:ae,type:"button","aria-pressed":be==K,children:ce})};H.displayName="ToggleButton";try{H.displayName="ToggleButton",H.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:H.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(t){}var se=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),ue={};ue.insert="head",ue.singleton=!1;var le=j()(se.Z,ue);const de=se.Z.locals||{};function re(t,I){return w(t)||Y(t,I)||g(t,I)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(t,I){if(!!t){if(typeof t=="string")return U(t,I);var M=Object.prototype.toString.call(t).slice(8,-1);if(M==="Object"&&t.constructor&&(M=t.constructor.name),M==="Map"||M==="Set")return Array.from(t);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return U(t,I)}}function U(t,I){(I==null||I>t.length)&&(I=t.length);for(var M=0,ce=new Array(I);M<I;M++)ce[M]=t[M];return ce}function Y(t,I){var M=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(M!=null){var ce=[],be=!0,ee=!1,N,K;try{for(M=M.call(t);!(be=(N=M.next()).done)&&(ce.push(N.value),!(I&&ce.length===I));be=!0);}catch(ae){ee=!0,K=ae}finally{try{!be&&M.return!=null&&M.return()}finally{if(ee)throw K}}return ce}}function w(t){if(Array.isArray(t))return t}var q=`import React, { useState } from 'react';
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
`,pe={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},me="";const J={title:"Components/Toggle button group",component:_,parameters:{design:(0,f.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,D.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var E=function(){var I=(0,i.useState)("left"),M=re(I,2),ce=M[0],be=M[1],ee=function(K){var ae=K.selectedValue;be(ae)};return(0,D.jsx)("div",{className:de.container,children:(0,D.jsxs)(_,{onChange:ee,selectedValue:ce,children:[(0,D.jsx)(H,{value:"left",children:"Aktivt valg"}),(0,D.jsx)(H,{value:"right",children:"Mulig valg"})]})})};E.displayName="Template";var m=E.bind({});m.args={},m.argTypes={onChange:{control:!1},selectedValue:{control:!1}},m.parameters={docs:{description:{}}},m.parameters=Object.assign({storySource:{source:`() => {
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
}`}},m.parameters);var r=["Example"]},"./src/DesignTokens/index.ts":(A,o,e)=>{"use strict";e.d(o,{T:()=>s});var s=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),O=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/Button/index.ts":(A,o,e)=>{"use strict";e.d(o,{zx:()=>l,rp:()=>p,qE:()=>b,Wu:()=>c});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),oe=e("./node_modules/classnames/index.js"),Q=e.n(oe),Z=e("./src/components/SvgIcon/index.ts"),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(T),W=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),v={};v.insert="head",v.singleton=!1;var L=X()(W.Z,v);const i=W.Z.locals||{};var f=e("./node_modules/react/jsx-runtime.js"),y=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function P(h,R){if(h==null)return{};var C=x(h,R),D,_;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(h);for(_=0;_<u.length;_++)D=u[_],!(R.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,D)||(C[D]=h[D]))}return C}function x(h,R){if(h==null)return{};var C={},D=Object.keys(h),_,u;for(u=0;u<D.length;u++)_=D[u],!(R.indexOf(_)>=0)&&(C[_]=h[_]);return C}var b;(function(h){h.Small="small",h.Medium="medium",h.Large="large"})(b||(b={}));var p;(function(h){h.Primary="primary",h.Secondary="secondary",h.Success="success",h.Danger="danger",h.Inverted="inverted"})(p||(p={}));var c;(function(h){h.Filled="filled",h.Outline="outline",h.Quiet="quiet"})(c||(c={}));var j=function(R,C){var D,_,u,B=R.children,S=R.color,F=S===void 0?p.Primary:S,H=R.variant,se=H===void 0?c.Filled:H,ue=R.size,le=ue===void 0?b.Small:ue,de=R.fullWidth,re=de===void 0?!1:de,$=R.dashedBorder,g=$===void 0?!1:$,U=R.iconPlacement,Y=U===void 0?"left":U,w=R.icon,q=R.type,pe=q===void 0?"button":q,me=R.className,J=P(R,y);return(0,f.jsxs)("button",Object.assign({},J,{ref:C,className:Q()(i["altinn-button"],i["altinn-button--"+le],i["altinn-button--"+se],i["altinn-button--"+F],i["altinn-button--"+se+"--"+F],(D={},D[i["altinn-button--full-width"]]=re,D),(_={},_[i["altinn-button--dashed-border"]]=g,_),(u={},u[i["altinn-button--only-icon"]]=!B&&w,u),me),type:pe,children:[w&&Y==="left"&&(0,f.jsx)(Z.l,{svgIconComponent:w,className:i.icon}),B,w&&Y==="right"&&(0,f.jsx)(Z.l,{svgIconComponent:w,className:i.icon})]}))};j.displayName="Button";const l=(0,d.forwardRef)(j)},"./src/components/Checkbox/Checkbox.tsx":(A,o,e)=>{"use strict";e.d(o,{X:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),oe=e.n(d),Q=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css"),W={};W.insert="head",W.singleton=!1;var v=T()(X.Z,W);const L=X.Z.locals||{};var i=e("./node_modules/react/jsx-runtime.js"),f=function(P){var x=P.checkboxId,b=P.checked,p=P.compact,c=P.description,j=P.disabled,l=P.error,h=P.hideLabel,R=P.label,C=P.name,D=P.onChange,_=P.presentation,u=P.readOnly;return(0,i.jsx)(Q.f,{checked:b,className:oe()(L["altinn-checkbox"],b&&L["altinn-checkbox--checked"],l&&L["altinn-checkbox--error"],j&&L["altinn-checkbox--disabled"],p&&L["altinn-checkbox--compact"],u&&L["altinn-checkbox--read-only"]),description:c,disabled:j,hideInput:u,hideLabel:h,inputId:x,label:R,name:C,onChange:D,presentation:_,size:p?Q.b.Xsmall:Q.b.Small,type:"checkbox",children:(0,i.jsx)("span",{className:L["altinn-visible-box"],children:(0,i.jsx)("span",{className:L["altinn-visible-box__checkmark"]})})})};f.displayName="Checkbox";try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:f.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(y){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(A,o,e)=>{"use strict";e.d(o,{B:()=>T});var s=e("./node_modules/react/index.js"),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(O),a=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css"),d={};d.insert="head",d.singleton=!1;var oe=n()(a.Z,d);const Q=a.Z.locals||{};var Z=e("./node_modules/react/jsx-runtime.js"),T=function(W){var v=W.id,L=W.children,i=W.ariaLabel;return(0,Z.jsx)("div",{"data-testid":"ErrorMessage","aria-label":i,id:v,role:"alertdialog",className:Q["altinn-error-message-wrapper"],children:L})};T.displayName="ErrorMessage";try{T.displayName="ErrorMessage",T.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:T.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(X){}},"./src/components/FieldSet/FieldSet.tsx":(A,o,e)=>{"use strict";e.d(o,{C:()=>f,w:()=>i});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),a=e("./node_modules/classnames/index.js"),d=e.n(a),oe=e("./src/components/ErrorMessage/ErrorMessage.tsx"),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(Q),T=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(T.Z,X);const v=T.Z.locals||{};var L=e("./node_modules/react/jsx-runtime.js"),i;(function(y){y.Xsmall="xsmall",y.Small="small"})(i||(i={}));var f=function(P){var x=P.children,b=P.className,p=P.description,c=P.disabled,j=P.error,l=P.legend,h=P.size,R=h===void 0?i.Small:h;return(0,L.jsxs)("fieldset",{className:d()(v["altinn-field-set"],v["altinn-field-set--"+R],b),disabled:c,children:[l&&(0,L.jsx)("legend",{className:v["altinn-field-set__legend"],children:l}),p&&(0,L.jsx)("p",{className:v["altinn-field-set__description"],children:p}),(0,L.jsx)("div",{className:v["altinn-field-set__content"],children:x}),j&&(0,L.jsx)("div",{className:v["altinn-field-set__error-message"],children:(0,L.jsx)(oe.B,{children:j})})]})};f.displayName="FieldSet";try{f.displayName="FieldSet",f.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:f.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(y){}},"./src/components/FieldSet/index.ts":(A,o,e)=>{"use strict";e.d(o,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(A,o,e)=>{"use strict";e.d(o,{t:()=>me});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),L=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),f=e.n(i),y=e("./src/hooks/useMediaQuery.ts"),P=e("./src/DesignTokens/index.ts"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(x),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css"),c={};c.insert="head",c.singleton=!1;var j=b()(p.Z,c);const l=p.Z.locals||{};var h,R;function C(){return C=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var m=arguments[E];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&(J[r]=m[r])}return J},C.apply(this,arguments)}var D=function(E){return L.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),h||(h=L.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),R||(R=L.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},_,u;function B(){return B=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var m=arguments[E];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&(J[r]=m[r])}return J},B.apply(this,arguments)}var S=function(E){return L.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),_||(_=L.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=L.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},F;function H(){return H=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var m=arguments[E];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&(J[r]=m[r])}return J},H.apply(this,arguments)}var se=function(E){return L.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),F||(F=L.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},ue,le;function de(){return de=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var m=arguments[E];for(var r in m)Object.prototype.hasOwnProperty.call(m,r)&&(J[r]=m[r])}return J},de.apply(this,arguments)}var re=function(E){return L.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),ue||(ue=L.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),le||(le=L.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},$=e("./node_modules/react/jsx-runtime.js");function g(J,E){return pe(J)||q(J,E)||Y(J,E)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(J,E){if(!!J){if(typeof J=="string")return w(J,E);var m=Object.prototype.toString.call(J).slice(8,-1);if(m==="Object"&&J.constructor&&(m=J.constructor.name),m==="Map"||m==="Set")return Array.from(J);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return w(J,E)}}function w(J,E){(E==null||E>J.length)&&(E=J.length);for(var m=0,r=new Array(E);m<E;m++)r[m]=J[m];return r}function q(J,E){var m=J==null?null:typeof Symbol!="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(m!=null){var r=[],t=!0,I=!1,M,ce;try{for(m=m.call(J);!(t=(M=m.next()).done)&&(r.push(M.value),!(E&&r.length===E));t=!0);}catch(be){I=!0,ce=be}finally{try{!t&&m.return!=null&&m.return()}finally{if(I)throw ce}}return r}}function pe(J){if(Array.isArray(J))return J}var me=function(E){var m,r,t,I,M=E.numberOfRows,ce=E.rowsPerPageOptions,be=E.rowsPerPage,ee=E.onRowsPerPageChange,N=E.currentPage,K=E.setCurrentPage,ae=E.descriptionTexts,_e=(0,y.a)("(max-width: "+P.T.cLy+")"),Oe=(0,L.useState)(1),Se=g(Oe,2),je=Se[0],he=Se[1];(0,L.useEffect)(function(){M<be?he(1):he(Math.ceil(M/be))},[be,M]);var Ce=function(){N<je-1&&K(N+1)},We=function(){N>0&&K(N-1)},Me=function(){var ye=1+N*be,ge=be*(N+1)>M?M:be*(N+1);return(0,$.jsx)("span",{className:f()(l["description-text"]),"data-testid":"description-text",children:ye+"-"+ge+" "+ae.of+" "+M})};return(0,$.jsxs)("div",{className:f()(l["pagination-wrapper"]),children:[(0,$.jsxs)("div",{className:f()(l["pagination-wrapper-row"]),children:[(0,$.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!_e&&ae.rowsPerPage}),(0,$.jsx)("select",{className:f()(l["select-pagination"]),value:be,onChange:function(ye){return ee(ye)},"aria-labelledby":"number-of-rows-select",children:ce.map(function(Re){return(0,$.jsx)("option",{value:Re,children:Re},Re)})}),Me()]}),(0,$.jsxs)("div",{className:f()(l["pagination-wrapper-row"]),children:[(0,$.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return K(0)},disabled:N===0,"aria-label":ae.navigateFirstPage,"data-testid":"first-page-icon",children:(0,$.jsx)(se,{className:f()(l["pagination-icon"],(m={},m[l["pagination-icon--disabled"]]=N===0,m))})}),(0,$.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return We()},disabled:N===0,"aria-label":ae.previousPage,"data-testid":"pagination-previous-icon",children:(0,$.jsx)(S,{className:f()(l["pagination-icon"],(r={},r[l["pagination-icon--disabled"]]=N===0,r))})}),(0,$.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return Ce()},disabled:N===je-1,"aria-label":ae.nextPage,"data-testid":"pagination-next-icon",children:(0,$.jsx)(D,{className:f()(l["pagination-icon"],(t={},t[l["pagination-icon--disabled"]]=N===je-1,t))})}),(0,$.jsx)("button",{className:f()(l["icon-button"]),onClick:function(){return K(je-1)},disabled:N===je-1,"aria-label":ae.navigateLastPage,children:(0,$.jsx)(re,{className:f()(l["pagination-icon"],(I={},I[l["pagination-icon--disabled"]]=N===je-1,I))})})]})]})};me.displayName="Pagination";try{me.displayName="Pagination",me.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:me.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(J){}},"./src/components/Panel/Panel.tsx":(A,o,e)=>{"use strict";e.d(o,{s:()=>D,c:()=>l});var s=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),n=e.n(O),a=e("./src/DesignTokens/index.ts"),d=e("./src/hooks/useMediaQuery.ts"),oe,Q,Z;function T(){return T=Object.assign?Object.assign.bind():function(_){for(var u=1;u<arguments.length;u++){var B=arguments[u];for(var S in B)Object.prototype.hasOwnProperty.call(B,S)&&(_[S]=B[S])}return _},T.apply(this,arguments)}var X=function(u){return s.createElement("svg",T({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},u),oe||(oe=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),Q||(Q=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),Z||(Z=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},W,v,L;function i(){return i=Object.assign?Object.assign.bind():function(_){for(var u=1;u<arguments.length;u++){var B=arguments[u];for(var S in B)Object.prototype.hasOwnProperty.call(B,S)&&(_[S]=B[S])}return _},i.apply(this,arguments)}var f=function(u){return s.createElement("svg",i({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},u),W||(W=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),v||(v=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),L||(L=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(y),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),b={};b.insert="head",b.singleton=!1;var p=P()(x.Z,b);const c=x.Z.locals||{};var j=e("./node_modules/react/jsx-runtime.js"),l;(function(_){_.Success="success",_.Info="info",_.Warning="warning",_.Error="error"})(l||(l={}));var h=function(u){var B=u.size,S=u.variant;switch(S){case l.Info:case l.Error:case l.Warning:return(0,j.jsx)(X,{style:{width:B,height:B},"data-testid":"panel-icon-info"});case l.Success:return(0,j.jsx)(f,{style:{width:B,height:B},"data-testid":"panel-icon-success"})}},R=function(u){var B=u.forceMobileLayout,S=(0,d.a)("(max-width: "+a.T.cLy+")");return B?!0:S},C=function(u){var B=u.children;return(0,j.jsx)("div",{className:n()(c["panel__pointer-position"]),children:B})};C.displayName="defaultRenderArrow";var D=function(u){var B,S=u.renderIcon,F=S===void 0?h:S,H=u.title,se=u.children,ue=u.variant,le=ue===void 0?l.Info:ue,de=u.showPointer,re=de===void 0?!1:de,$=u.showIcon,g=$===void 0?!0:$,U=u.forceMobileLayout,Y=U===void 0?!1:U,w=u.renderArrow,q=w===void 0?C:w,pe=R({forceMobileLayout:Y}),me=pe?a.T.lxo:a.T.mgB;return(0,j.jsxs)("div",{className:n()(c.panel,(B={},B[c["panel--mobile-layout"]]=pe,B)),children:[re&&q({children:(0,j.jsx)("div",{"data-testid":"panel-pointer",className:n()(c.panel__pointer,c["panel__pointer--"+le])})}),(0,j.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(c["panel__content-wrapper"],c["panel__content-wrapper--"+le]),children:[g&&(0,j.jsx)("div",{"data-testid":"panel-icon-wrapper",className:c["panel__icon-wrapper"],children:F({size:me,variant:le})}),(0,j.jsxs)("div",{className:c.panel__content,children:[H&&(0,j.jsx)("h2",{className:c.panel__header,children:H}),(0,j.jsx)("div",{className:c.panel__body,children:se})]})]})]})};D.displayName="Panel";try{D.displayName="Panel",D.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:D.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(_){}},"./src/components/RadioButton/RadioButton.tsx":(A,o,e)=>{"use strict";e.d(o,{E:()=>y,j:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),oe=e.n(d),Q=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),T=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css"),W={};W.insert="head",W.singleton=!1;var v=T()(X.Z,W);const L=X.Z.locals||{};var i=e("./node_modules/react/jsx-runtime.js"),f;(function(P){P.Xsmall="xsmall",P.Small="small"})(f||(f={}));var y=function(x){var b=x.checked,p=x.description,c=x.disabled,j=x.error,l=x.hideLabel,h=x.label,R=x.name,C=x.onChange,D=x.presentation,_=x.radioId,u=x.size,B=u===void 0?f.Small:u,S=x.value;return(0,i.jsx)(Q.f,{checked:b,className:oe()(L["altinn-radio"],L["altinn-radio--"+B],b&&L["altinn-radio--checked"],j&&L["altinn-radio--error"],c&&L["altinn-radio--disabled"]),description:p,disabled:c,hideLabel:l,inputId:_,label:h,name:R,onChange:C,presentation:D,size:B===f.Xsmall?Q.b.Xsmall:Q.b.Small,type:"radio",value:S,children:(0,i.jsx)("span",{className:L["altinn-visible-button"],children:(0,i.jsx)("span",{className:L["altinn-visible-button__checkmark"]})})})};y.displayName="RadioButton";try{y.displayName="RadioButton",y.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:y.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(P){}},"./src/components/RadioButton/index.ts":(A,o,e)=>{"use strict";e.d(o,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(A,o,e)=>{"use strict";e.d(o,{P:()=>r});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),oe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),c=e("./node_modules/react/index.js"),j=e("./node_modules/classnames/index.js"),l=e.n(j),h=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),R=e("./src/components/_InputWrapper/index.ts"),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(C),_=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css"),u={};u.insert="head",u.singleton=!1;var B=D()(_.Z,u);const S=_.Z.locals||{};var F=e("./node_modules/react/jsx-runtime.js"),H=function(I){var M=I.deleteButtonLabel,ce=I.disabled,be=I.onDeleteButtonClick,ee=I.label;return(0,F.jsxs)("span",{className:S["altinn-multi-select-item"],children:[(0,F.jsx)("span",{children:ee}),(0,F.jsx)("button",{"aria-label":M,className:S["altinn-multi-select-item__delete-button"],disabled:ce,onClick:be,children:(0,F.jsx)("span",{className:S["altinn-multi-select-item__delete-button__cross"]})})]})};H.displayName="MultiSelectItem";try{H.displayName="MultiSelectItem",H.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:H.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(t){}var se=e("./src/hooks/index.ts"),ue=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css"),le={};le.insert="head",le.singleton=!1;var de=D()(ue.Z,le);const re=ue.Z.locals||{};function $(t){return Y(t)||U(t)||pe(t)||g()}function g(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y(t){if(Array.isArray(t))return me(t)}function w(t,I){return E(t)||J(t,I)||pe(t,I)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,I){if(!!t){if(typeof t=="string")return me(t,I);var M=Object.prototype.toString.call(t).slice(8,-1);if(M==="Object"&&t.constructor&&(M=t.constructor.name),M==="Map"||M==="Set")return Array.from(t);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return me(t,I)}}function me(t,I){(I==null||I>t.length)&&(I=t.length);for(var M=0,ce=new Array(I);M<I;M++)ce[M]=t[M];return ce}function J(t,I){var M=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(M!=null){var ce=[],be=!0,ee=!1,N,K;try{for(M=M.call(t);!(be=(N=M.next()).done)&&(ce.push(N.value),!(I&&ce.length===I));be=!0);}catch(ae){ee=!0,K=ae}finally{try{!be&&M.return!=null&&M.return()}finally{if(ee)throw K}}return ce}}function E(t){if(Array.isArray(t))return t}var m={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},r=function(I){var M=I.disabled,ce=I.error,be=I.hideLabel,ee=I.inputId,N=I.label,K=I.multiple,ae=I.onChange,_e=I.options,Oe=I.value,Se=_e.map(function(ke){return ke.value});if(Se.length!==new Set(Se).size)throw Error("Each value in the option list must be unique.");var je=(0,c.useState)(K?Oe!=null?Oe:[]:[]),he=w(je,2),Ce=he[0],We=he[1],Me=(0,c.useState)(K?void 0:Oe),Re=w(Me,2),ye=Re[0],ge=Re[1],V=_e.findIndex(function(ke){return ke.value===ye}),fe=(0,c.useState)(!1),xe=w(fe,2),Ie=xe[0],Te=xe[1];(0,se.OR)("click",function(){return Te(!1)}),(0,se.OR)("keydown",function(){return Te(!0)});var Ke=(0,c.useState)(!1),Be=w(Ke,2),He=Be[0],Ve=Be[1],tn=(0,c.useRef)(null),$e=(0,c.useRef)(null);(0,c.useEffect)(function(){var ke=tn.current;if(ke){var Pe=ke.offsetHeight,Fe=ke.getElementsByTagName("li")[0].offsetHeight,qe=ke.scrollTop,Ge=qe+Pe,Je=V*Fe,Tn=Je+Fe,hn=Je>=qe&&Tn<=Ge;hn||(Je<qe?ke.scrollTop=Je:ke.scrollTop=Tn-Pe)}},[V]);var un=function(Pe){var Fe;return(Fe=_e.find(function(qe){return qe.value===Pe}))!==null&&Fe!==void 0?Fe:{label:"",value:""}},sn=function(Pe,Fe){Ce!=null&&Ce.length||ge(Fe),We(Pe),ae&&ae(Pe)},mn=function(Pe){ge(Pe),Ve(!1),ae&&ae(Pe)},dn=function(Pe){K?Ce.includes(Pe)?cn(Pe):sn([].concat($(Ce),[Pe]),Pe):mn(Pe)},cn=function(Pe){sn(Ce.filter(function(Fe){return Fe!==Pe}),Pe)},Xe=function(){sn([])},on=(0,c.useCallback)(function(){if(ye===void 0)ge(_e[0].value);else{var ke=V+1;ke>=0&&ke<_e.length&&ge(_e[ke].value)}Ve(!0)},[ye,V,ge,_e]),rn=(0,c.useCallback)(function(){if(ye===void 0)ge(_e[_e.length-1].value);else{var ke=V-1;ke>=0&&ke<_e.length&&ge(_e[ke].value)}Ve(!0)},[ye,V,ge,_e]);(0,se.OG)(m.ArrowDown,function(){return He&&on()}),(0,se.OG)(m.ArrowUp,function(){return He&&rn()}),(0,se.OG)(m.Enter,function(){return He&&K&&ye&&dn(ye)});var an=function(Pe){return ye===Pe},pn=function(Pe){return K?Ce.includes(Pe):an(Pe)},Sn=(0,c.useId)(),En=$e.current?"calc("+$e.current.offsetWidth+"px + 2 * "+h.wU.qH.fO.Z.S+")":void 0;return(0,F.jsxs)("div",{className:l()(re["altinn-select"],re["altinn-select--"+(K?"multiple":"single")],He&&re["altinn-select--expanded"],M&&re["altinn-select--disabled"],Ie&&re["altinn-select--using-keyboard"]),"data-testid":"select-root",children:[(0,F.jsx)(R.SP,{disabled:M,inputId:ee,inputRenderer:function(Pe){var Fe=Pe.className,qe=Pe.inputId;return(0,F.jsxs)("span",{className:l()(Fe,re["altinn-select__field"]),ref:$e,children:[K&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("span",{className:re["altinn-select--multiple__field__values"],children:Ce.map(un).map(function(Ge){return(0,F.jsx)(H,{deleteButtonLabel:Ge.deleteButtonLabel,disabled:M!=null?M:!1,label:Ge.label,onDeleteButtonClick:function(){return cn(Ge.value)}},Ge.value)})}),(0,F.jsx)("button",{"aria-label":I.deleteButtonLabel,className:re["altinn-select--multiple__field__delete-button"],disabled:!Ce.length||M,onClick:function(){return Xe()},children:(0,F.jsx)("span",{className:re["altinn-select--multiple__field__delete-button__cross"]})})]}),(0,F.jsxs)("button",{"aria-controls":Sn,"aria-expanded":He,"aria-label":N,className:re["altinn-select__field__button"],disabled:M,id:qe,onBlur:function(){return Ve(!1)},onClick:function(){return Ve(!He)},onKeyDown:function(Je){Object.values(m).includes(Je.key)&&(Je.preventDefault(),Ve(!0))},role:"combobox",value:K?Ce:ye,children:[!K&&(0,F.jsx)("span",{className:re["altinn-select--single__field__value"],children:un(ye).label}),(0,F.jsx)("span",{className:re["altinn-select__field__arrow-wrapper"],children:(0,F.jsx)("span",{className:re["altinn-select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!ce,label:be?void 0:N,noFocusEffect:K,noPadding:!0,readOnly:!1}),(0,F.jsx)("ul",{className:re["altinn-select__option-list"],id:Sn,ref:tn,role:"listbox",style:{width:En},children:_e.map(function(ke){return(0,F.jsx)("li",{"aria-selected":pn(ke.value),className:l()(re["altinn-select__option-list__option"],pn(ke.value)&&re["altinn-select__option-list__option--selected"],K&&an(ke.value)&&re["altinn-select--multiple__option-list__option--focused"]),onClick:function(){return dn(ke.value)},onMouseDown:function(Fe){return Fe.preventDefault()},onKeyDown:function(Fe){return Fe.preventDefault()},role:"option",value:ke.value,children:ke.label},ke.value)})})]})};r.displayName="Select";try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:r.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(t){}},"./src/components/SvgIcon/index.ts":(A,o,e)=>{"use strict";e.d(o,{l:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),oe=["svgIconComponent"];function Q(X,W){if(X==null)return{};var v=Z(X,W),L,i;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(X);for(i=0;i<f.length;i++)L=f[i],!(W.indexOf(L)>=0)&&(!Object.prototype.propertyIsEnumerable.call(X,L)||(v[L]=X[L]))}return v}function Z(X,W){if(X==null)return{};var v={},L=Object.keys(X),i,f;for(f=0;f<L.length;f++)i=L[f],!(W.indexOf(i)>=0)&&(v[i]=X[i]);return v}var T=function(W){var v=W.svgIconComponent,L=Q(W,oe);return(0,d.isValidElement)(v)?(0,d.cloneElement)(v,Object.assign({},L)):null};try{T.displayName="SvgIcon",T.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:T.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(X){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(A,o,e)=>{"use strict";e.d(o,{f:()=>f,b:()=>i});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),oe=e.n(d),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(Q),T=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(T.Z,X);const v=T.Z.locals||{};var L=e("./node_modules/react/jsx-runtime.js"),i;(function(y){y.Xsmall="xsmall",y.Small="small"})(i||(i={}));var f=function(P){var x=P.checked,b=P.children,p=P.className,c=P.description,j=P.disabled,l=P.hideInput,h=P.hideLabel,R=P.inputId,C=P.label,D=P.name,_=P.onChange,u=P.presentation,B=P.size,S=P.type,F=P.value,H=(0,a.useId)(),se=R!=null?R:"input-"+H,ue=C?se+"-label":void 0,le=c?se+"-description":void 0,de=C&&!h;return(0,L.jsxs)("label",{className:oe()(v["altinn-template"],v["altinn-template--"+B],j&&v["altinn-template--disabled"],p),htmlFor:R,children:[!l&&(0,L.jsxs)("span",{className:v["altinn-template__input-wrapper"],children:[(0,L.jsx)("input",{"aria-describedby":le,"aria-label":!de&&typeof C=="string"?C:void 0,"aria-labelledby":de?ue:void 0,checked:x!=null?x:!1,className:v["altinn-template__input-wrapper__input"],disabled:j,id:se,name:D,onChange:j?void 0:_,role:u?"presentation":void 0,type:S,value:F}),(0,L.jsx)("span",{className:v["altinn-template__input-wrapper__visible-box"],children:b})]}),(de||c)&&(0,L.jsxs)("span",{className:v["altinn-template__label-and-description"],children:[de&&(0,L.jsx)("span",{className:v["altinn-template__label-and-description__label"],id:ue,children:C}),c&&(0,L.jsx)("span",{className:v["altinn-template__label-and-description__description"],id:le,children:c})]})]})};f.displayName="CheckboxRadioTemplate";try{f.displayName="CheckboxRadioTemplate",f.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:f.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(y){}},"./src/components/_InputWrapper/index.ts":(A,o,e)=>{"use strict";e.d(o,{SP:()=>j,Hx:()=>d});var s=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),n=e.n(O),a;(function(l){l.Default="default",l.Error="error",l.Disabled="disabled",l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var d;(function(l){l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm"})(d||(d={}));var oe;(function(l){l.None="none",l.Error="error",l.Search="search"})(oe||(oe={}));var Q=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=h.readOnly,C=R===void 0?!1:R,D=h.disabled,_=D===void 0?!1:D,u=h.isValid,B=u===void 0?!0:u,S=h.isSearch,F=S===void 0?!1:S,H=oe.None;return F&&(H=oe.Search),_?{variant:a.Disabled,iconVariant:H}:C===!0||C===d.ReadOnlyInfo?{variant:a.ReadOnlyInfo,iconVariant:H}:C===d.ReadOnlyConfirm?{variant:a.ReadOnlyConfirm,iconVariant:H}:B===!1?{variant:a.Error,iconVariant:oe.Error}:{variant:a.Default,iconVariant:H}},Z;function T(){return T=Object.assign?Object.assign.bind():function(l){for(var h=1;h<arguments.length;h++){var R=arguments[h];for(var C in R)Object.prototype.hasOwnProperty.call(R,C)&&(l[C]=R[C])}return l},T.apply(this,arguments)}var X=function(h){return s.createElement("svg",T({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),Z||(Z=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},W;function v(){return v=Object.assign?Object.assign.bind():function(l){for(var h=1;h<arguments.length;h++){var R=arguments[h];for(var C in R)Object.prototype.hasOwnProperty.call(R,C)&&(l[C]=R[C])}return l},v.apply(this,arguments)}var L=function(h){return s.createElement("svg",v({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),W||(W=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},i=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(i),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),P={};P.insert="head",P.singleton=!1;var x=f()(y.Z,P);const b=y.Z.locals||{};var p=e("./node_modules/react/jsx-runtime.js"),c=function(h){var R=h.variant,C=h.disabled,D=C===void 0?!1:C;if(R===oe.Error)return(0,p.jsx)("div",{className:b.InputWrapper__icon,children:(0,p.jsx)(X,{"data-testid":"input-icon-error"})});if(R===oe.Search){var _;return(0,p.jsx)("div",{className:n()(b.InputWrapper__icon,(_={},_[b["InputWrapper__icon--disabled"]]=D,_)),children:(0,p.jsx)(L,{"data-testid":"input-icon-search"})})}return null};try{c.displayName="Icon",c.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:c.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(l){}var j=function(h){var R,C=h.isValid,D=C===void 0?!0:C,_=h.disabled,u=_===void 0?!1:_,B=h.readOnly,S=B===void 0?!1:B,F=h.isSearch,H=F===void 0?!1:F,se=h.label,ue=h.inputId,le=h.inputRenderer,de=h.noFocusEffect,re=h.noPadding,$=(0,s.useId)(),g=ue!=null?ue:$,U=Q({readOnly:S,disabled:u,isValid:D,isSearch:H}),Y=U.variant,w=U.iconVariant;return(0,p.jsxs)(p.Fragment,{children:[se&&(0,p.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(b.InputWrapper__label),htmlFor:g,children:se}),(0,p.jsxs)("div",{"data-testid":"InputWrapper",className:n()(b.InputWrapper,b["InputWrapper--"+Y],(R={},R[b["InputWrapper--search"]]=H,R[b["InputWrapper--with-focus-effect"]]=!de,R[b["InputWrapper--with-padding"]]=!re,R)),children:[(0,p.jsx)(c,{variant:w,disabled:u}),le({className:b.InputWrapper__field,inputId:g,variant:Y})]})]})};try{j.displayName="InputWrapper",j.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:j.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(l){}},"./src/hooks/index.ts":(A,o,e)=>{"use strict";e.d(o,{OR:()=>O,OG:()=>n,D9:()=>a,PQ:()=>d});var s=e("./node_modules/react/index.js");function O(oe,Q){(0,s.useEffect)(function(){return document.addEventListener(oe,Q),function(){return document.removeEventListener(oe,Q)}},[oe,Q])}function n(oe,Q){(0,s.useEffect)(function(){var Z=function(X){X.key===oe&&Q()};return document.addEventListener("keydown",Z),function(){return document.removeEventListener("keydown",Z)}},[oe,Q])}function a(oe){var Q=(0,s.useRef)();return(0,s.useEffect)(function(){Q.current=oe},[oe]),Q.current}var d=function(Q,Z){var T=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(T.current)T.current=!1;else return Q()},Z)}},"./src/hooks/useMediaQuery.ts":(A,o,e)=>{"use strict";e.d(o,{a:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),oe=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(Q),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(T),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),v=e.n(W),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(L),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e.n(f),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e.n(P),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(b),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e.n(c),l=e("./node_modules/react/index.js");function h(S,F){return u(S)||_(S,F)||C(S,F)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(S,F){if(!!S){if(typeof S=="string")return D(S,F);var H=Object.prototype.toString.call(S).slice(8,-1);if(H==="Object"&&S.constructor&&(H=S.constructor.name),H==="Map"||H==="Set")return Array.from(S);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return D(S,F)}}function D(S,F){(F==null||F>S.length)&&(F=S.length);for(var H=0,se=new Array(F);H<F;H++)se[H]=S[H];return se}function _(S,F){var H=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(H!=null){var se=[],ue=!0,le=!1,de,re;try{for(H=H.call(S);!(ue=(de=H.next()).done)&&(se.push(de.value),!(F&&se.length===F));ue=!0);}catch($){le=!0,re=$}finally{try{!ue&&H.return!=null&&H.return()}finally{if(le)throw re}}return se}}function u(S){if(Array.isArray(S))return S}function B(S){var F=function($){var g,U;return(g=(U=window)===null||U===void 0?void 0:U.matchMedia($).matches)!==null&&g!==void 0?g:!1},H=(0,l.useState)(F(S)),se=h(H,2),ue=se[0],le=se[1],de=function(){le(F(S))};return(0,l.useEffect)(function(){var re=window.matchMedia(S);return de(),re.addEventListener("change",de),function(){return re.removeEventListener("change",de)}},[S]),ue}},"./src/utils/arrayUtils.ts":(A,o,e)=>{"use strict";e.d(o,{cO:()=>W,zb:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),a=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),oe=e.n(d),Q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(Q),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(T);function W(i,f){if(i===f)return!0;if(i===void 0||f===void 0||i.length!==f.length)return!1;for(var y in i)if(i[y]!==f[y])return!1;return!0}function v(i){return i[i.length-1]}function L(i){return i.length===new Set(i).size}},"./storybook-init-framework-entry.js":(A,o,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.tyMY32TvkHDF8ZcennN\\+rw\\=\\= {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),n.locals={accordion:"tyMY32TvkHDF8ZcennN+rw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.AYJEVhVUCPNhIkdoY9L8Qw\\=\\= {
  width: 80vw;
}
`,""]),n.locals={container:"AYJEVhVUCPNhIkdoY9L8Qw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.bHJmGU5sUxKWla0mf2uWjg\\=\\= {
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
`,""]),n.locals={"accordion-header":"bHJmGU5sUxKWla0mf2uWjg==","accordion-header__subtitle":"R-AQdDhQHxYTukb-nSP9Aw==","accordion-header--subtitle":"Ei7ai3cperzTatRVCUKEiA==","accordion-header__title":"_2GCHs-3akoZ4nQ3ykkw6dg==","accordion-header__actions":"_91wKOkVBUdGPK4QUEykiYw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.XavJEiuidDgCiNx4DoHhSw\\=\\= {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

._2lKbkok1eRn8cgFFv33ggQ\\=\\= {
  transform: rotate(90deg);
}
`,""]),n.locals={"accordion-icon":"XavJEiuidDgCiNx4DoHhSw==","accordion-icon--opened":"_2lKbkok1eRn8cgFFv33ggQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),n.push([A.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),n.locals={};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Rpukn9xRQJNHk-d00DYJZA\\=\\= {
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
`,""]),n.locals={"altinn-button":"Rpukn9xRQJNHk-d00DYJZA==",icon:"lzTFhKYYpZ6oOQYy7Ny15g==","altinn-button--small":"b56IqUPa8YtxEadvuN2s-g==","altinn-button--medium":"_67qzBbLNVwbEP2lGy72-Qw==","altinn-button--large":"_6-qcO3o6q0r9zr8jtwItqg==","altinn-button--full-width":"+dhr5mVGT98wPGvYdXqIIA==","altinn-button--dashed-border":"tGLwJ8ARxqRjqOJbLDxoeA==","altinn-button--only-icon":"juBmDuE28ovhDWACwh1BLA==","altinn-button--filled":"hMMZZ4eEilsaZmFZMnl8Sw==","altinn-button--outline":"-bPQQb0fsaCuGPqcUqNSEw==","altinn-button--quiet":"S7HTWmb8rvOx0PUk7QsxAg==","altinn-button--filled--primary":"pt9axdbF1+PvpS4lcPIt6g==","altinn-button--filled--secondary":"NAcapYB98eU7XEYhkckOXA==","altinn-button--filled--success":"EhPlDMHjMlU61ZlNzLPi2g==","altinn-button--filled--danger":"sw8kQjlsGPicR0raq+qeIA==","altinn-button--filled--inverted":"VIMerYm5yDrmH4Jn9Jlv8g==","altinn-button--outline--primary":"+-xr4oxvOaD1fIsYPtxmzQ==","altinn-button--outline--secondary":"fzmuATwPYJsZLHXpjdSYng==","altinn-button--outline--success":"-OvzVIoYMaALV5ZxPRa+Fw==","altinn-button--outline--danger":"GUgW3At90ZCp8coB4b6LBA==","altinn-button--outline--inverted":"TiXNfUBQGuJ9-7Xny83EDQ==","altinn-button--quiet--primary":"hUtYKXtR3xvGo1ltn7pzDQ==","altinn-button--quiet--secondary":"qlazmgHMDYc49tO4DqyqvA==","altinn-button--quiet--success":"U4Qgq7tcMLu9pjaRS4YH4Q==","altinn-button--quiet--danger":"zBi+ljk7FW9ThAlMpYvd5A==","altinn-button--quiet--inverted":"uSecvfY7ysZ05KTW4bZjQg=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._6cvF3VAbKtNmrdGxCUV8BA\\=\\= {
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
`,""]),n.locals={"altinn-checkbox":"_6cvF3VAbKtNmrdGxCUV8BA==","altinn-checkbox--compact":"_7zf2ATnLewY2YbGJG3kVBA==","altinn-checkbox--error":"NivKAZL4V+7F1RlnG3imJA==","altinn-checkbox--checked":"-Iyc0jAUikLmGhLX20VTYw==","altinn-checkbox--disabled":"WNrg3FUVIEKurYXV8rqmDA==","altinn-checkbox--read-only":"NC5gUZmpyIfxbbwGYK8bYw==","altinn-visible-box":"-5WMbVDfVXd4lKKAGQmh0A==","altinn-visible-box__checkmark":"W6NYQiBqa4fDAYmBwSL0zQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.QG9cxeNUql-KOCXlDEvm7w\\=\\= {
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
`,""]),n.locals={"altinn-checkbox-group":"QG9cxeNUql-KOCXlDEvm7w==","altinn-checkbox-group--compact":"HTv5-q0A4T-TzQsD9aXNJg==","altinn-checkbox-group--vertical":"IkHC5tBY9XQPN3ZtUwT9Pw==","altinn-checkbox-group--horizontal":"ifL1EO087Crq-ngEheO0nA=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.NTqKTbIBK1CSNC8WbgbZ7Q\\=\\= {
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
`,""]),n.locals={svg:"NTqKTbIBK1CSNC8WbgbZ7Q==",circleTransition:"WH18iHRFnpU4UnExhNnc+A==",container:"nAJVyVZi6iBoq6RpO2qgAg==",label:"_12tl+lgdk2k7GREN6Fu52A=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.IoZCSKoS7L1bZ82J1gYNlw\\=\\= {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),n.locals={"altinn-error-message-wrapper":"IoZCSKoS7L1bZ82J1gYNlw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.UNESAQpZG6tzsRbdm8\\+Vbg\\=\\= {
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
`,""]),n.locals={"altinn-field-set":"UNESAQpZG6tzsRbdm8+Vbg==","altinn-field-set--xsmall":"JZAkFzQ6g7vJjQqcYxD5tw==","altinn-field-set__legend":"QINSYREYKZyvy5XKaWqiZQ==","altinn-field-set__description":"Q5iUTDYGwtxoKymuXMlLPQ==","altinn-field-set__content":"Fs2jaEIJ0JQJMvBCwOt7pw==","altinn-field-set__error-message":"rIAGXHT9wNLIBLYV6VsqYA=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.kVxFDkDp1WiqFARNx40efA\\=\\= {
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
`,""]),n.locals={list:"kVxFDkDp1WiqFARNx40efA==","list--solid":"N9NwN7tigj3zhHV6vAI1Yg==","list--dashed":"_1OjGKU1AWWv4onZHVy8gMg=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.PFSVXvkixjcwfiBNWK-KGw\\=\\= {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .PFSVXvkixjcwfiBNWK-KGw\\=\\= {
    width: 300px;
  }
}
`,""]),n.locals={container:"PFSVXvkixjcwfiBNWK-KGw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.kEMtpd0vDKSFN8sg4Zat8w\\=\\= {
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
`,""]),n.locals={"list-item":"kEMtpd0vDKSFN8sg4Zat8w==","list-item--solid":"PM38trUJ7HE3lYjM1aAEKQ==","list-item--dashed":"ayTZ1Tz-7hmw9Xr8jgrg1A=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.FtDdsbEAM33qIgoRUszLaA\\=\\= {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),n.locals={map:"FtDdsbEAM33qIgoRUszLaA=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Mbb3fzMlklC4bB5nt8fvgQ\\=\\= {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),n.locals={page:"Mbb3fzMlklC4bB5nt8fvgQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.w0djuOyMj4iJjw\\+xnbxnBQ\\=\\= {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),n.locals={"page-content":"w0djuOyMj4iJjw+xnbxnBQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.-beL2kFpvp7WDWkJr8TBZg\\=\\= {
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
`,""]),n.locals={"page-header":"-beL2kFpvp7WDWkJr8TBZg==","page-header--primary":"AluzwyTlCuv1MlVQSq3Muw==","page-header--success":"yBWULdwIkJV8mVakLU6sFg==","page-header--small":"qGezCOaw+0uJJRA-y33ITw==","page-header--medium":"FNIUvKff1lwZLEaoDsSTDQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._3GFSutpV5Q6iwd5VMJPC3A\\=\\= {
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
`,""]),n.locals={"pagination-icon":"_3GFSutpV5Q6iwd5VMJPC3A==","pagination-icon--disabled":"CN4Pm94YHEsSqZ1j8D3CiA==","pagination-wrapper":"bi-VW11-SL2+iaKLszbuoQ==","icon-button":"eMU9U091xipg7kcuaHFu4A==","description-text":"msPRefgGC7JcQ89NocZN3A==","select-pagination":"N9aaKkJuHiCfcKiq+DM0kw==","pagination-wrapper-row":"RjVcmiVd2eJ7i+jH6NM6TA=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`/* breakpoints-xs */
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
  background-color: var(--colors-red-300);
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
`,""]),n.locals={panel:"MW7PdvFCawKtIQQHk3x5sg==","panel--mobile-layout":"qMT1T6jZgyJjy+I32MZxyQ==",panel__pointer:"o1T9Q-usoqoUrOKBuFEstQ==","panel__pointer-position":"F-KinNeKbdcHeD0RghFn9Q==","panel__content-wrapper--info":"rbNO4rIwAvCwzM5qWDUYpg==","panel__pointer--info":"ac6w0wPOe4kWKKQIifG1Tw==","panel__content-wrapper--success":"zJu6Pkw2NTwhvG7Hqt25bQ==","panel__pointer--success":"L1AquKxZ517XcsNuewb4mg==","panel__content-wrapper--warning":"ELA7lcORz+i33bObgz2PEw==","panel__pointer--warning":"n7s3uIGJPyPYbNnirnZfFA==","panel__content-wrapper--error":"_2iiSnaDHm5arMnAht-1DDQ==","panel__pointer--error":"dy6s038ahAHiK0Z1EyznxQ==","panel__content-wrapper":"Bk+XnsOtij3t6WYERRepdA==","panel__icon-wrapper":"_7prLoCg4WYXIPP6qgno08Q==",panel__content:"FvFqL5PWy41YkIoFK7400Q==",panel__header:"MiyICMpVyox-tuL1Dsam9A==",panel__body:"I0pabCH9JQdqnqc9I8+g4w=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.ZeFGEoQClriUQ\\+sLw2IV0w\\=\\= {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.VgdMACBeJXZzPwgo5w-ZCQ\\=\\= {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),n.locals={"popover-panel":"ZeFGEoQClriUQ+sLw2IV0w==","popover-panel__arrow":"VgdMACBeJXZzPwgo5w-ZCQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.aCyf9pLPzAc2ihOkfdX6mg\\=\\= {
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
`,""]),n.locals={"altinn-radio":"aCyf9pLPzAc2ihOkfdX6mg==","altinn-radio--small":"G5DknHbm2gY8qyW7ka08mA==","altinn-radio--xsmall":"Wsp9kJpqCtIJi8A9wpPveg==","altinn-radio--error":"qGp1OLfUJvxGIcspJSQb2w==","altinn-radio--checked":"kZO1bWGJxsIMKqodsCIQmQ==","altinn-radio--disabled":"kpe-8Y8p9ilWtjGronrBTA==","altinn-visible-button":"ijsYw-qgj-WTqjKTio511g==","altinn-visible-button__checkmark":"B8HlxHUrk1KbARim9bW1WQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.MN6Y5mhFQeWsEXfCvD\\+6VA\\=\\= {
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
`,""]),n.locals={"altinn-radio-group":"MN6Y5mhFQeWsEXfCvD+6VA==","altinn-radio-group--xsmall":"_4zSpufD2m729yFWGS1z6Mw==","altinn-radio-group--small":"FU77E504KM4-4r9-laSZgw==","altinn-radio-group--vertical":"QMwckwqxNOSCItawTIFMMg==","altinn-radio-group--horizontal":"wLJnhoPCdgedceZbDul89g=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Py6qc\\+IKr0LPRaVvFzU8Fg\\=\\= {
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
`,""]),n.locals={"altinn-multi-select-item":"Py6qc+IKr0LPRaVvFzU8Fg==","altinn-multi-select-item__delete-button":"_7oB+fUJQtt-DeqqgAsJmsA==","altinn-multi-select-item__delete-button__cross":"OcBogzyFW9oQeQqeCghLhw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.R2LoWFP9\\+fPxBI2eaLLicg\\=\\= {
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
`,""]),n.locals={"altinn-select":"R2LoWFP9+fPxBI2eaLLicg==","altinn-select--disabled":"vqFw-69e9qNv1MXnj0Wdsw==","altinn-select--expanded":"vQptyzjDO02r7nf7YJkoQg==","altinn-select__option-list":"slRIrBGrImDEa7PGPkxlDQ==","altinn-select--using-keyboard":"JyLC12fK-4C6aoj5YlqyaA==","altinn-select__field__button":"YInBaD0x4XXpv4Cic9LvJw==","altinn-select__field":"MUBtlKh6-5e6gPL2BaYHXQ==","altinn-select--multiple":"P-rQCIn6O68k9uFNyYNFJw==","altinn-select--single":"VmrXZU7ZmpU4cw-pPNpfeA==","altinn-select--single__field__value":"WkEA3Y8HYuiEEMbdjGqH4Q==","altinn-select--multiple__field__values":"NOu8xg3WM9OlBs8ufOmr0A==","altinn-select__field__arrow-wrapper":"OMcDJMTnBIm+iWDL4qmAng==","altinn-select__field__arrow-wrapper__arrow":"cSIarfxHLj6NLsscBd1A8w==","altinn-select--multiple__field__delete-button":"dTF1B6+yzFIk8cN0jABEiA==","altinn-select--multiple__field__delete-button__cross":"b-T-FEYorEaj-2YZdkVrHw==","altinn-select__option-list__option":"vWD2cb-A8mqXZgX3RWW6sA==","altinn-select__option-list__option--selected":"pBkKbqUXVymr5dOx-EQ1eg==","altinn-select--multiple__option-list__option--focused":"_4-U+k6Tn2g8Lse98X+iNkQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`Table {
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
`,""]),n.locals={};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),n.locals={};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._7IC8ONaKMT4vARNOFE5K5Q\\=\\= {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),n.locals={TableBody:"_7IC8ONaKMT4vARNOFE5K5Q=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.LzDte03f5wXbFrkq12x-PA\\=\\= {
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
`,""]),n.locals={"header-table-cell":"LzDte03f5wXbFrkq12x-PA==","header-table-cell-radiobutton":"NiTfbrfj6xyhW2chbCqPlA==","body-table-cell":"OSEprzp8ecljMivLiVJgRg==","body-table-cell-radiobutton":"_1-zaDxtrX5XZ+3pQQWnMqA==",image:"hIg6aexdd5+sPbM-Mpyrgg==",input:"VkQQnZmMeEHn8KvLo6lKIw==","radio-button":"I7NIpaN9kO7AbEzX84ck7w==","container-sortable":"ySg0u8CGsNQcJMSJguYJFQ==",icon:"kBQAKFeTyP1i2nfY36Gp1A==","icon-desc":"_8kN2-vZhRm91yXWVlcc4Eg==","icon-asc":"cPDdWIF8LIXRIOHZ8WFPfQ==",header:"LQ0LsJkWqygwhcQ-4qWyLA==",property:"_3uS1BrMpoI3lxpN5pw0c1A=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.eUOpKqyivgeuU5D\\+tMn8dw\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-footer":"eUOpKqyivgeuU5D+tMn8dw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.j9BLoyPnbvM\\+0hqq3x9F2w\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-header":"j9BLoyPnbvM+0hqq3x9F2w=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.NEGwPcbU97ZVUshvyUGz0w\\=\\= {
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
`,""]),n.locals={TableRow:"NEGwPcbU97ZVUshvyUGz0w==","table-row--selected":"mI9RxXUW8WizpSnWjQyVZQ==","table-row--body":"m825MhHnmjQiRccJ9iL++A=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.JuI00pzq\\+rAdSRwc6y5jcw\\=\\= {
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
`,""]),n.locals={"altinn-tabs":"JuI00pzq+rAdSRwc6y5jcw==","altinn-tabs__tablist":"rfwF7zCA44HM3qrs5LQKew==","altinn-tabs__tablist__tab":"_97oEm+qN-2hAoNIiZ37LMQ==","altinn-tabs__tablist__tab--selected":"J+N6WcLVXrh1KiRNcr+wdw==","altinn-tabs__divider":"glGx-MRXIdRvekhewq978g==","altinn-tabs__tabpanel":"POthgVZLT1DWIUnMKkewDw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._6aPn9FpEvnx2E4o6El8B2Q\\=\\= {
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
`,""]),n.locals={"altinn-TextArea":"_6aPn9FpEvnx2E4o6El8B2Q==","altinn-TextArea--resize-none":"YbBXYRQ7u3-VBr8vtG7AqQ==","altinn-TextArea--resize-both":"Z7e-6oVJt6I4FmaIJYScdQ==","altinn-TextArea--resize-horizontal":"SstdtkQyEbnDFVK6mU3hwA==","altinn-TextArea--resize-vertical":"X-2B2GC4rg4BN-LYzzHjMA=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.okpOXDaGhTmc2MErW9y8ww\\=\\= {
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
  background-color: var(--colors-blue-300);
}
`,""]),n.locals={"toggle-button":"okpOXDaGhTmc2MErW9y8ww==","toggle-button--selected":"NbJ+XVl6ovSJIqgxqiA4+A=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.wqtkxDVE9PqFNYigAvOtJw\\=\\= {
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
`,""]),n.locals={"toggle-button-group":"wqtkxDVE9PqFNYigAvOtJw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`/* breakpoints-xs */
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
`,""]),n.locals={container:"FqavDaQxoclcke6-M5jfoQ=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.bFfNQMKg-8OQmtCsMcNi9g\\=\\= {
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
`,""]),n.locals={"altinn-template":"bFfNQMKg-8OQmtCsMcNi9g==","altinn-template--xsmall":"mU47Fm8IkqwzTdeQoHHM0Q==","altinn-template--small":"hyDgcWRUM7D4S5KwjgtkqA==","altinn-template--disabled":"_0eHvtJ7dNaxnqevpN9e-ow==","altinn-template__input-wrapper":"oR4L6MA44pFkRA4NH-xZTA==","altinn-template__input-wrapper__input":"emVeLqbca7sYpqo566uK-w==","altinn-template__input-wrapper__visible-box":"gNfZyXHRTvFaaRl9EqUiQQ==","altinn-template__label-and-description":"JQrGEVwupeQz6Gk5+Co+vA==","altinn-template__label-and-description__label":"u0TO-5OG1esV+LXioV6zHA==","altinn-template__label-and-description__description":"_0Pg8VMrCK1hFaVtJG3mjNw=="};const a=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>a});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Tj1ST4W8YSAsgzbuva7hWg\\=\\= {
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
`,""]),n.locals={InputWrapper:"Tj1ST4W8YSAsgzbuva7hWg==","InputWrapper--with-focus-effect":"YPGX+n3oPq3FmlOolIhSuA==","InputWrapper--default":"xgN2KlBZysAo6RAulFyMJg==","InputWrapper--error":"_0dxSTcSMr8DEmibPUWGS3A==","InputWrapper--disabled":"JRX5UzEi9DUgnQOK4vlG8w==","InputWrapper--readonly-info":"QGXwuLF-yOEOSRWjF8svnw==","InputWrapper--readonly-confirm":"_5Rk9wVjZh3Acbb7KlNJBMQ==","InputWrapper--search":"KlZzLquUQpf1tRZfegHamg==","InputWrapper--with-padding":"ClxxWyLo77vnr6AKremwFg==",InputWrapper__field:"lBYDUQowZ69aWIEzqk6bcQ==",InputWrapper__icon:"atgQHZ+u6-fmiM4fBFitUQ==","InputWrapper__icon--disabled":"b9sB1X+Rm9Q5fEYCbp0P3g==",InputWrapper__label:"WYOqCIKgmK0BQIynjf5kwA=="};const a=n},"./src/components/Button/Stories/success.svg":(A,o,e)=>{"use strict";e.d(o,{r:()=>oe});var s=e("./node_modules/react/index.js"),O,n,a;function d(){return d=Object.assign?Object.assign.bind():function(Q){for(var Z=1;Z<arguments.length;Z++){var T=arguments[Z];for(var X in T)Object.prototype.hasOwnProperty.call(T,X)&&(Q[X]=T[X])}return Q},d.apply(this,arguments)}var oe=function(Z){return s.createElement("svg",d({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},Z),O||(O=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),a||(a=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(A,o,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function O(a){var d=n(a);return e(d)}function n(a){if(!e.o(s,a)){var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}return s[a]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function O(a){var d=n(a);return e(d)}function n(a){if(!e.o(s,a)){var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}return s[a]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(A,o,e)=>{"use strict";A=e.nmd(A);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],A,!1)}},A=>{var o=s=>A(A.s=s);A.O(0,[857],()=>(o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),o("./storybook-init-framework-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),o("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),o("./.storybook/preview.js-generated-config-entry.js"),o("./generated-stories-entry.cjs")));var e=A.O()}]);
