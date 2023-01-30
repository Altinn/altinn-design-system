(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function O(i){var d=n(i);return e(d)}function n(i){if(!e.o(s,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return s[i]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>a,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),Z=e.n(F),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(x),W=e("./node_modules/react/index.js"),f=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),l=["components"];function v(){return v=Object.assign?Object.assign.bind():function(P){for(var L=1;L<arguments.length;L++){var g=arguments[L];for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(P[p]=g[p])}return P},v.apply(this,arguments)}function y(P,L){if(P==null)return{};var g=C(P,L),p,B;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(P);for(B=0;B<T.length;B++)p=T[B],!(L.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,p)||(g[p]=P[p]))}return g}function C(P,L){if(P==null)return{};var g={},p=Object.keys(P),B,T;for(T=0;T<p.length;T++)B=p[T],!(L.indexOf(B)>=0)&&(g[B]=P[B]);return g}var h={},m="wrapper";function u(P){var L=P.components,g=y(P,l);return(0,f.mdx)(m,v({},h,g,{components:L,mdxType:"MDXLayout"}),(0,f.mdx)(D.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,f.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,f.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,f.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,f.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,f.mdx)("h3",{id:"npm"},"NPM"),(0,f.mdx)("pre",null,(0,f.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,f.mdx)("h3",{id:"yarn"},"Yarn"),(0,f.mdx)("pre",null,(0,f.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,f.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,f.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,f.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,f.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,f.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,f.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,f.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,f.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,f.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,f.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,f.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,f.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,f.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,f.mdx)("ul",null,(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}u.displayName="MDXContent",u.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var j={title:"Introduksjon",includeStories:["__page"]},c={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,f.mdx)(D.aT,{mdxStoryNameToKey:c,mdxComponentAnnotations:j},(0,f.mdx)(u,null))}});const S=j;var R=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>a,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),Z=e.n(F),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),X=e.n(x),W=e("./node_modules/react/index.js"),f=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),l=["components"];function v(){return v=Object.assign?Object.assign.bind():function(P){for(var L=1;L<arguments.length;L++){var g=arguments[L];for(var p in g)Object.prototype.hasOwnProperty.call(g,p)&&(P[p]=g[p])}return P},v.apply(this,arguments)}function y(P,L){if(P==null)return{};var g=C(P,L),p,B;if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(P);for(B=0;B<T.length;B++)p=T[B],!(L.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,p)||(g[p]=P[p]))}return g}function C(P,L){if(P==null)return{};var g={},p=Object.keys(P),B,T;for(T=0;T<p.length;T++)B=p[T],!(L.indexOf(B)>=0)&&(g[B]=P[B]);return g}var h={},m="wrapper";function u(P){var L=P.components,g=y(P,l);return(0,f.mdx)(m,v({},h,g,{components:L,mdxType:"MDXLayout"}),(0,f.mdx)(D.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,f.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,f.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,f.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,f.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,f.mdx)("pre",null,(0,f.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}u.displayName="MDXContent",u.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var j={title:"Components/AppWrapper",includeStories:["__page"]},c={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,f.mdx)(D.aT,{mdxStoryNameToKey:c,mdxComponentAnnotations:j},(0,f.mdx)(u,null))}});const S=j;var R=["__page"]},"./.storybook/StoryPage.tsx":(A,o,e)=>{"use strict";e.d(o,{Y:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(q),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),x={};x.insert="head",x.singleton=!1;var X=F()(Z.Z,x);const W=Z.Z.locals||{};var f=e("./node_modules/react/jsx-runtime.js"),D=function(m){var u=m.children;return(0,f.jsx)("div",{children:u})};D.displayName="AppWrapper";try{D.displayName="AppWrapper",D.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:D.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(h){}var l=function(m){var u=m.children;return(0,f.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,f.jsxs)("p",{style:{margin:"0"},children:[(0,f.jsx)("strong",{children:"Deprecated:"})," ",u]})})};l.displayName="DeprecationWarning";var v=null;try{l.displayName="DeprecationWarning",l.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:l.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(h){}var y=function(m){var u=m.description,a=m.deprecationWarning;return(0,f.jsxs)(D,{children:[(0,f.jsx)(i.Dx,{}),a&&(0,f.jsx)(l,{children:a}),(0,f.jsx)(i.dk,{children:u}),(0,f.jsx)(i.fQ,{includePrimary:!0}),(0,f.jsx)(i.X6,{children:"Props"}),(0,f.jsx)(i.$4,{story:i.Uh})]})};y.displayName="StoryPage";var C=null;try{y.displayName="StoryPage",y.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:y.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(h){}},"./.storybook/preview.js-generated-config-entry.js":(A,o,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>v,parameters:()=>l});var O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),W=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e("./node_modules/@storybook/theming/dist/esm/index.js"),l={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},D.np.dark),light:Object.assign({},D.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},v=["parameters"],y=e("./node_modules/console-browserify/index.js");function C(u,a){var j=Object.keys(u);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(u);a&&(c=c.filter(function(S){return Object.getOwnPropertyDescriptor(u,S).enumerable})),j.push.apply(j,c)}return j}function h(u){for(var a=1;a<arguments.length;a++){var j=arguments[a]!=null?arguments[a]:{};a%2?C(Object(j),!0).forEach(function(c){m(u,c,j[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(j)):C(Object(j)).forEach(function(c){Object.defineProperty(u,c,Object.getOwnPropertyDescriptor(j,c))})}return u}function m(u,a,j){return a in u?Object.defineProperty(u,a,{value:j,enumerable:!0,configurable:!0,writable:!0}):u[a]=j,u}Object.keys(s).forEach(function(u){var a=s[u];switch(u){case"args":return(0,W.uc)(a);case"argTypes":return(0,W.v9)(a);case"decorators":return a.forEach(function(c){return(0,W.$9)(c,!1)});case"loaders":return a.forEach(function(c){return(0,W.HZ)(c,!1)});case"parameters":return(0,W.h1)(h({},a),!1);case"argTypesEnhancers":return a.forEach(function(c){return(0,W.My)(c)});case"argsEnhancers":return a.forEach(function(c){return(0,W._C)(c)});case"render":return(0,W.$P)(a);case"globals":case"globalTypes":{var j={};return j[u]=a,(0,W.h1)(j,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return y.log(u+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>Me,__namedExportsOrder:()=>Re,default:()=>Ce});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),C=e("./node_modules/classnames/index.js"),h=e.n(C),m=e("./.storybook/StoryPage.tsx"),u=e("./src/components/Button/index.ts"),a;(function(ye){ye.Primary="primary",ye.Secondary="secondary"})(a||(a={}));var j=(0,l.createContext)(void 0),c=function(){var ge=(0,l.useContext)(j);if(ge===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return ge},S=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(S),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),L={};L.insert="head",L.singleton=!1;var g=R()(P.Z,L);const p=P.Z.locals||{};var B=e("./node_modules/react/jsx-runtime.js"),T=function(ge){var V=ge.children,fe=ge.open,je=ge.onClick,Ie=ge.iconVariant,Te=Ie===void 0?a.Primary:Ie,Ke=(0,l.useId)(),Be=(0,l.useId)();return(0,B.jsx)("div",{className:p.accordion,children:(0,B.jsx)(j.Provider,{value:{onClick:je,open:fe,headerId:Ke,contentId:Be,iconVariant:Te},children:V})})};T.displayName="Accordion";const z=null;try{T.displayName="Accordion",T.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:T.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(ye){}var H=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),se={};se.insert="head",se.singleton=!1;var ue=R()(H.Z,se);const le=H.Z.locals||{};var de=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),re={};re.insert="head",re.singleton=!1;var $=R()(de.Z,re);const b=de.Z.locals||{};var U;function Y(){return Y=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},Y.apply(this,arguments)}var w=function(ge){return l.createElement("svg",Y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),U||(U=l.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},ee;function pe(){return pe=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},pe.apply(this,arguments)}var me=function(ge){return l.createElement("svg",pe({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),ee||(ee=l.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},J=function(){var ge,V,fe=c(),je=fe.onClick,Ie=fe.open,Te=fe.iconVariant,Ke=[b["accordion-icon"],(ge={},ge[b["accordion-icon--opened"]]=Ie,ge)],Be=(V={height:20,width:20,className:h()(Ke)},V["data-testid"]=Te,V.onClick=je,V);switch(Te){case a.Primary:return(0,B.jsx)(w,Object.assign({},Be));case a.Secondary:return(0,B.jsx)(me,Object.assign({},Be))}};const E=null;var _=function(ge){var V,fe=ge.children,je=ge.actions,Ie=ge.subtitle,Te=c(),Ke=Te.onClick,Be=Te.open,He=Te.headerId,Ve=Te.contentId;return(0,B.jsxs)("div",{className:h()(le["accordion-header"],(V={},V[le["accordion-header--subtitle"]]=Ie,V)),children:[(0,B.jsx)(J,{}),(0,B.jsxs)("button",{className:h()(le["accordion-header__title"]),"aria-expanded":Be,type:"button",onClick:Ke,id:He,"aria-controls":Ve,children:[fe,(Ie==null?void 0:Ie.length)&&(0,B.jsx)("div",{"data-testid":"accordion-header-subtitle",className:h()(le["accordion-header__subtitle"]),children:Ie})]}),(0,B.jsx)("div",{className:h()(le["accordion-header__actions"]),children:je})]})};_.displayName="AccordionHeader";try{_.displayName="AccordionHeader",_.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:_.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(ye){}var r=function(ge){var V=ge.children,fe=c(),je=fe.open,Ie=fe.contentId,Te=fe.headerId;return(0,B.jsx)("div",{children:je&&(0,B.jsx)("div",{"aria-expanded":je,id:Ie,"aria-labelledby":Te,children:V})})};r.displayName="AccordionContent";const t=null;try{r.displayName="AccordionContent",r.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:r.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(ye){}var I=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css"),M={};M.insert="head",M.singleton=!1;var ce=R()(I.Z,M);const be=I.Z.locals||{};function ne(ye,ge){return Oe(ye)||_e(ye,ge)||K(ye,ge)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(ye,ge){if(!!ye){if(typeof ye=="string")return ae(ye,ge);var V=Object.prototype.toString.call(ye).slice(8,-1);if(V==="Object"&&ye.constructor&&(V=ye.constructor.name),V==="Map"||V==="Set")return Array.from(ye);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return ae(ye,ge)}}function ae(ye,ge){(ge==null||ge>ye.length)&&(ge=ye.length);for(var V=0,fe=new Array(ge);V<ge;V++)fe[V]=ye[V];return fe}function _e(ye,ge){var V=ye==null?null:typeof Symbol!="undefined"&&ye[Symbol.iterator]||ye["@@iterator"];if(V!=null){var fe=[],je=!0,Ie=!1,Te,Ke;try{for(V=V.call(ye);!(je=(Te=V.next()).done)&&(fe.push(Te.value),!(ge&&fe.length===ge));je=!0);}catch(Be){Ie=!0,Ke=Be}finally{try{!je&&V.return!=null&&V.return()}finally{if(Ie)throw Ke}}return fe}}function Oe(ye){if(Array.isArray(ye))return ye}var Se=`import React, { useState } from 'react';
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
`,xe={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},he="";const Ce={title:"Components/Accordion",component:T,subcomponents:{AccordionHeader:_,AccordionContent:r},parameters:{design:(0,v.vc)([{type:"figma",url:he},{type:"link",url:he}]),docs:{page:function(){return(0,B.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:a.Primary,useActions:!0,subtitle:"Subtitle"}};var We=function(ge){var V=(0,l.useState)(!1),fe=ne(V,2),je=fe[0],Ie=fe[1],Te=(0,l.useState)(!1),Ke=ne(Te,2),Be=Ke[0],He=Ke[1],Ve=function(){Ie(!je)},tn=function(){He(!Be)},$e="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",un=(0,y.D8)(),sn=ne(un,1),mn=sn[0].useActions,dn=(0,y.D8)(),cn=ne(dn,1),Xe=cn[0].subtitle,on=mn?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:"Example setup"}),(0,B.jsx)(u.zx,{variant:u.Wu.Filled,color:u.rp.Primary,size:u.qE.Small,children:"Separat knapp 1"}),(0,B.jsx)(u.zx,{variant:u.Wu.Outline,color:u.rp.Primary,size:u.qE.Small,children:"Separat knapp 2"})]}):void 0,rn=Xe.length>0?Xe:void 0;return(0,B.jsxs)("div",{className:h()(be.container),children:[(0,B.jsxs)(T,{onClick:Ve,open:je,iconVariant:ge.iconVariant,children:[(0,B.jsx)(_,{actions:on,subtitle:rn,children:"Accordion 1"}),(0,B.jsx)(r,{children:$e})]}),(0,B.jsxs)(T,{onClick:tn,open:Be,iconVariant:ge.iconVariant,children:[(0,B.jsx)(_,{actions:on,subtitle:rn,children:"Accordion 2"}),(0,B.jsx)(r,{children:$e})]})]})};We.displayName="Template";var Me=We.bind({});Me.args={iconVariant:a.Primary,open:!1},Me.argTypes={open:{control:!1},onClick:{control:!1}},Me.parameters={docs:{description:{story:""}}},Me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Me.parameters);var Re=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>P,FullWidth:()=>R,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>S,Success:()=>u,SuccessWithCustomIcon:()=>c,SuccessWithIcon:()=>j,__namedExportsOrder:()=>L,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},l="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const v={title:"Components/Button/Filled",component:x.zx,parameters:{design:(0,q.vc)([{type:"figma",url:l},{type:"link",url:l}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:x.Wu.Filled,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var y=function(p){return(0,W.jsx)(x.zx,Object.assign({},p))};y.displayName="Template";var C=function(p){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(x.zx,Object.assign({},p))})};C.displayName="WithinContainerTemplate";var h=y.bind({});h.args={color:x.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:x.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=y.bind({});u.args={color:x.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=y.bind({});a.args={color:x.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:x.rp.Success,icon:(0,W.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:x.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var S=y.bind({});S.args={color:x.rp.Secondary,icon:(0,W.jsx)(F.Z,{})},S.parameters={docs:{description:{story:""}}};var R=C.bind({});R.args={color:x.rp.Primary,icon:(0,W.jsx)(F.Z,{}),fullWidth:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var P=y.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var L=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>P,FullWidthAndDashedBorder:()=>R,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>S,Success:()=>u,SuccessWithCustomIcon:()=>c,SuccessWithIcon:()=>j,__namedExportsOrder:()=>L,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidthAndDashedBorder:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},l="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const v={title:"Components/Button/Outline",component:x.zx,parameters:{design:(0,q.vc)([{type:"figma",url:l},{type:"link",url:l}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:x.Wu.Outline,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var y=function(p){return(0,W.jsx)(x.zx,Object.assign({},p))};y.displayName="Template";var C=function(p){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(x.zx,Object.assign({},p))})};C.displayName="WithinContainerTemplate";var h=y.bind({});h.args={color:x.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:x.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=y.bind({});u.args={color:x.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=y.bind({});a.args={color:x.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:x.rp.Success,icon:(0,W.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:x.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var S=y.bind({});S.args={color:x.rp.Secondary,icon:(0,W.jsx)(F.Z,{})},S.parameters={docs:{description:{story:""}}};var R=C.bind({});R.args={color:x.rp.Primary,icon:(0,W.jsx)(F.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var P=y.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var L=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>P,FullWidth:()=>R,Primary:()=>h,Secondary:()=>m,Success:()=>u,SuccessWithCustomIcon:()=>c,SuccessWithIcon:()=>j,SuccessWithIconNoText:()=>S,__namedExportsOrder:()=>L,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),Z=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/index.ts"),X=e("./src/components/Button/Stories/success.svg"),W=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Secondary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Success:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Danger:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithCustomIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIconNoText:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},FullWidth:{startLoc:{col:63,line:48},endLoc:{col:1,line:61},startBody:{col:63,line:48},endBody:{col:1,line:61}},Disabled:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}}},l="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const v={title:"Components/Button/Quiet",component:x.zx,parameters:{design:(0,q.vc)([{type:"figma",url:l},{type:"link",url:l}]),docs:{page:function(){return(0,W.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:x.Wu.Quiet,size:x.qE.Small,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var y=function(p){return(0,W.jsx)(x.zx,Object.assign({},p))};y.displayName="Template";var C=function(p){return(0,W.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,W.jsx)(x.zx,Object.assign({},p))})};C.displayName="WithinContainerTemplate";var h=y.bind({});h.args={color:x.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=y.bind({});m.args={color:x.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=y.bind({});u.args={color:x.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=y.bind({});a.args={color:x.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=y.bind({});j.args={color:x.rp.Success,icon:(0,W.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var c=y.bind({});c.args={color:x.rp.Success,icon:(0,W.jsx)(X.r,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var S=y.bind({});S.args={color:x.rp.Success,icon:(0,W.jsx)(F.Z,{})},S.parameters={docs:{description:{story:""}}};var R=C.bind({});R.args={color:x.rp.Primary,icon:(0,W.jsx)(F.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},R.parameters={docs:{description:{story:""}}};var P=y.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var L=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>h,Disabled:()=>m,Error:()=>C,LongText:()=>j,Normal:()=>v,ReadOnly:()=>u,WithDescription:()=>a,WithHiddenLabel:()=>c,__namedExportsOrder:()=>S,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Checkbox/Checkbox.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Normal:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},ReadOnly:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}}},f="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const D={title:"Components/Checkbox",component:Z.X,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change.",deprecationWarning:"Use Checkbox from @digdir/design-system-react instead."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var l=function(P){return(0,x.jsx)(Z.X,Object.assign({},P))};l.displayName="Template";var v=l.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default checkbox."}}};var y=l.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"This is a checked checkbox."}}};var C=l.bind({});C.args={error:!0},C.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var h=l.bind({});h.args={compact:!0},h.parameters={docs:{description:{story:"This is the compact checkbox."}}};var m=l.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var u=l.bind({});u.args={readOnly:!0},u.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var a=l.bind({});a.args={description:"Lorem ipsum dolor sit amet."},a.parameters={docs:{description:{story:"This is a checkbox with description."}}};var j=l.bind({});j.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},j.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var c=l.bind({});c.args={hideLabel:!0},c.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},y.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},C.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},a.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},j.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters);var S=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>I,Disabled:()=>ce,Error:()=>M,Horizontal:()=>t,Vertical:()=>r,__namedExportsOrder:()=>be,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),c=e.n(j),S=e("./src/components/Checkbox/Checkbox.tsx"),R=e("./src/components/FieldSet/index.ts"),P=e("./src/utils/arrayUtils.ts"),L=e("./src/hooks/index.ts"),g=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(g),B=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css"),T={};T.insert="head",T.singleton=!1;var z=p()(B.Z,T);const H=B.Z.locals||{};var se=e("./node_modules/react/jsx-runtime.js");function ue(ne,N){return b(ne)||$(ne,N)||de(ne,N)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(ne,N){if(!!ne){if(typeof ne=="string")return re(ne,N);var K=Object.prototype.toString.call(ne).slice(8,-1);if(K==="Object"&&ne.constructor&&(K=ne.constructor.name),K==="Map"||K==="Set")return Array.from(ne);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return re(ne,N)}}function re(ne,N){(N==null||N>ne.length)&&(N=ne.length);for(var K=0,ae=new Array(N);K<N;K++)ae[K]=ne[K];return ae}function $(ne,N){var K=ne==null?null:typeof Symbol!="undefined"&&ne[Symbol.iterator]||ne["@@iterator"];if(K!=null){var ae=[],_e=!0,Oe=!1,Se,xe;try{for(K=K.call(ne);!(_e=(Se=K.next()).done)&&(ae.push(Se.value),!(N&&ae.length===N));_e=!0);}catch(he){Oe=!0,xe=he}finally{try{!_e&&K.return!=null&&K.return()}finally{if(Oe)throw xe}}return ae}}function b(ne){if(Array.isArray(ne))return ne}var U;(function(ne){ne.Vertical="vertical",ne.Horizontal="horizontal"})(U||(U={}));var Y=function(N,K){switch(K.type){case"check":return N.concat([K.name]);case"uncheck":return N.filter(function(ae){return ae!==K.name});case"reset":return K.state}},w=function(N){return N.filter(function(K){var ae=K.checked;return ae}).map(function(K){var ae=K.name;return ae})},ee=function(N){var K=N.compact,ae=N.description,_e=N.disabled,Oe=N.error,Se=N.items,xe=N.legend,he=N.onChange,Ce=N.presentation,We=N.variant,Me=We===void 0?U.Vertical:We;if(!(0,P.zb)(Se.map(function(je){return je.name})))throw Error("Each name in the checkbox group must be unique.");var Re=(0,n.useReducer)(Y,w(Se)),ye=ue(Re,2),ge=ye[0],V=ye[1];(0,n.useEffect)(function(){return V({type:"reset",state:w(Se)})},[Se]);var fe=(0,L.D9)(ge);return(0,L.PQ)(function(){he&&!_e&&!(0,P.cO)(fe,ge)&&he(ge)},[ge,he,_e]),(0,se.jsx)(R.C,{description:ae,disabled:_e,error:Oe,legend:xe,size:K?R.w.Xsmall:R.w.Small,children:(0,se.jsx)("div",{className:c()(H["altinn-checkbox-group"],H["altinn-checkbox-group--"+Me],K&&H["altinn-checkbox-group--compact"]),children:Se.map(function(je){return(0,se.jsx)(S.X,{checkboxId:je.checkboxId,checked:ge.includes(je.name),compact:K,description:je.description,disabled:_e||je.disabled,error:!!Oe,label:je.label,name:je.name,onChange:function(Te){V({type:Te.target.checked?"check":"uncheck",name:je.name})},presentation:Ce},je.name)})})})};ee.displayName="CheckboxGroup";try{ee.displayName="CheckboxGroup",ee.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:ee.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(ne){}var pe=`import React from 'react';
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
`,me={Vertical:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Horizontal:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Compact:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Error:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Disabled:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}}},J="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const E={title:"Components/CheckboxGroup",component:ee,parameters:{design:(0,i.vc)([{type:"figma",url:J},{type:"link",url:J}]),docs:{page:function(){return(0,se.jsx)(d.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes.",deprecationWarning:"Use CheckboxGroup from @digdir/design-system-react instead."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:U.Vertical}};var _=function(N){return(0,se.jsx)(ee,Object.assign({},N))};_.displayName="Template";var r=_.bind({});r.args={variant:U.Vertical},r.parameters={docs:{description:{story:"This is the default setting."}}};var t=_.bind({});t.args={variant:U.Horizontal},t.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var I=_.bind({});I.args={compact:!0},I.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var M=_.bind({});M.args={error:"Du m\xE5 velge minst ett av alternativene over."},M.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var ce=_.bind({});ce.args={disabled:!0},ce.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},r.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},r.parameters),t.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},t.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},I.parameters),M.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},M.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},ce.parameters);var be=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{SimpleExample:()=>a,__namedExportsOrder:()=>j,default:()=>m});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./src/DesignTokens/index.ts"),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(F),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(x.Z,X);const f=x.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),l=function(S){var R=S.value,P=S.width,L=P===void 0?70:P,g=S.strokeWidth,p=g===void 0?2.5:g,B=S.ariaLabel,T=S.label,z=S.id,H=z+"-label",se=!B&&T?H:void 0;return(0,D.jsxs)("div",{id:z,className:f.container,style:{width:L+"px"},role:"progressbar","aria-labelledby":se,"aria-label":B,children:[T&&(0,D.jsx)("div",{id:H,className:f.label,children:T}),(0,D.jsxs)("svg",{className:f.svg,viewBox:"0 0 35.8 35.8",children:[(0,D.jsx)(v,{stroke:q.T.ColorsBlue200,strokeWidth:p}),(0,D.jsx)(v,{strokeWidth:p,stroke:q.T.ColorsBlue900,strokeDashoffset:100-R,strokeDasharray:"100 100",className:f.circleTransition})]})]})};l.displayName="CircularProgress";var v=function(S){return(0,D.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},S))};v.displayName="Circle";try{l.displayName="CircularProgress",l.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:l.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(c){}var y=`import React from 'react';
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
`,C={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const m={title:"Components/CircularProgress",component:l,parameters:{design:(0,i.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,D.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var u=function(S){return(0,D.jsx)(l,Object.assign({},S))};u.displayName="CircularTemplate";var a=u.bind({});a.args={width:100,value:60,label:"3/5",id:"progress"},a.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},a.parameters);var j=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>v,__namedExportsOrder:()=>y,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/ErrorMessage/ErrorMessage.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Example:{startLoc:{col:54,line:42},endLoc:{col:1,line:44},startBody:{col:54,line:42},endBody:{col:1,line:44}}},f="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const D={title:"Components/ErrorMessage",component:Z.B,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"Simple error-message suitable to be shown in table views",deprecationWarning:"Use ErrorMessage from @digdir/design-system-react instead."})}}},args:{id:"error-message-story"}};var l=function(h){return(0,x.jsx)(Z.B,Object.assign({},h,{children:"This is an error message"}))};l.displayName="Template";var v=l.bind({});v.args={},v.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},v.parameters);var y=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>y,Disabled:()=>m,Error:()=>h,Normal:()=>v,WithDescription:()=>C,__namedExportsOrder:()=>u,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/FieldSet/FieldSet.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},f="";const D={title:"Components/FieldSet",component:Z.C,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"Field set component to use as a wrapper for groups of form elements.",deprecationWarning:"Use FieldSet from @digdir/design-system-react instead."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:Z.w.Small}};var l=function(j){return(0,x.jsx)(Z.C,Object.assign({},j,{children:j.children}))};l.displayName="Template";var v=l.bind({});v.args={},v.parameters={docs:{description:{story:"This is a normal field set."}}};var y=l.bind({});y.args={size:Z.w.Xsmall},y.parameters={docs:{description:{story:"This is a compact field set."}}};var C=l.bind({});C.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},C.parameters={docs:{description:{story:"This is a field set with a description."}}};var h=l.bind({});h.args={error:"Her er det en beskrivende feilmelding."},h.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var m=l.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},y.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},C.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters);var u=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Dashed:()=>se,Solid:()=>H,__namedExportsOrder:()=>ue,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./node_modules/classnames/index.js"),F=e.n(q),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),W={};W.insert="head",W.singleton=!1;var f=x()(X.Z,W);const D=X.Z.locals||{};var l;(function(le){le.Solid="solid",le.Dashed="dashed"})(l||(l={}));var v=(0,n.createContext)({borderStyle:l.Solid}),y=function(){var de=(0,n.useContext)(v);if(de===void 0)throw new Error("useListContext must be used within a ListContext");return de},C=e("./node_modules/react/jsx-runtime.js"),h=function(de){var re=de.children,$=de.borderStyle,b=$===void 0?l.Solid:$;return(0,C.jsx)("ul",{className:F()(D.list,D["list--"+b]),children:(0,C.jsx)(v.Provider,{value:{borderStyle:b},children:re})})};h.displayName="List";try{h.displayName="List",h.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:h.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(le){}var m=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),u={};u.insert="head",u.singleton=!1;var a=x()(m.Z,u);const j=m.Z.locals||{};var c=function(de){var re=de.children,$=y(),b=$.borderStyle;return(0,C.jsx)("li",{className:F()(j["list-item"],j["list-item--"+b]),children:re})};c.displayName="ListItem";try{c.displayName="ListItem",c.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:c.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(le){}var S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css"),R={};R.insert="head",R.singleton=!1;var P=x()(S.Z,R);const L=S.Z.locals||{};var g=`import React from 'react';
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
`,p={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},B="";const T={title:"Components/List",component:h,parameters:{design:(0,i.vc)([{type:"figma",url:B},{type:"link",url:B}]),docs:{page:function(){return(0,C.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var z=function(de){return(0,C.jsx)("div",{className:L.container,children:(0,C.jsxs)(h,{borderStyle:de.borderStyle,children:[(0,C.jsx)(c,{children:"List Item 1"}),(0,C.jsx)(c,{children:"List Item 2"}),(0,C.jsx)(c,{children:"List Item 3"})]})})};z.displayName="Template";var H=z.bind({});H.args={borderStyle:l.Solid},H.parameters={docs:{description:{story:""}}};var se=z.bind({});se.args={borderStyle:l.Dashed},se.parameters={docs:{description:{story:""}}},H.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},se.parameters);var ue=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>r,GoogleMaps:()=>be,KartverketSea:()=>ce,KartverketTerrain:()=>M,MapWithMarkerZoomAndCenter:()=>t,OpenStreetMap:()=>I,__namedExportsOrder:()=>ne,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),h=e("./node_modules/react-leaflet/lib/MapContainer.js"),m=e("./node_modules/react-leaflet/lib/TileLayer.js"),u=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),j=e("./node_modules/react-leaflet/lib/hooks.js"),c=e("./node_modules/leaflet/dist/leaflet-src.js"),S=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(S),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),L={};L.insert="head",L.singleton=!1;var g=R()(P.Z,L);const p=P.Z.locals||{};var B=e("./node_modules/leaflet/dist/leaflet.css"),T=e("./node_modules/react/jsx-runtime.js"),z={latitude:64.888996,longitude:12.8186054},H=4,se=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],ue=function(K){var ae=K.readOnly,_e=ae===void 0?!1:ae,Oe=K.layers,Se=Oe===void 0?se:Oe,xe=K.centerLocation,he=xe===void 0?z:xe,Ce=K.zoom,We=Ce===void 0?H:Ce,Me=K.markerLocation,Re=K.markerIcon,ye=K.onClick;return(0,T.jsxs)(h.h,{className:p.map,center:le(he),zoom:We,zoomControl:!_e,dragging:!_e,touchZoom:!_e,doubleClickZoom:!_e,scrollWheelZoom:!_e,attributionControl:!1,children:[Se.map(function(ge,V){return(0,T.jsx)(m.I,{url:ge.url,attribution:ge.attribution,subdomains:ge.subdomains?ge.subdomains:[],opacity:_e?.5:1},V)}),(0,T.jsx)(u.z,{prefix:!1}),Me?(0,T.jsx)(a.J,{position:le(Me),icon:(0,c.icon)(Re)}):null,(0,T.jsx)(de,{readOnly:_e,onClick:ye})]})};ue.displayName="Map";function le(N){return[N.latitude,N.longitude]}var de=function(K){var ae=K.onClick,_e=K.readOnly;return(0,j.zV)({click:function(Se){if(ae&&!_e){var xe=Se.latlng.wrap();ae({latitude:xe.lat,longitude:xe.lng})}}}),null};try{ue.displayName="Map",ue.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:ue.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(N){}var re=e("./node_modules/console-browserify/index.js");function $(N,K){return ee(N)||w(N,K)||U(N,K)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(N,K){if(!!N){if(typeof N=="string")return Y(N,K);var ae=Object.prototype.toString.call(N).slice(8,-1);if(ae==="Object"&&N.constructor&&(ae=N.constructor.name),ae==="Map"||ae==="Set")return Array.from(N);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return Y(N,K)}}function Y(N,K){(K==null||K>N.length)&&(K=N.length);for(var ae=0,_e=new Array(K);ae<K;ae++)_e[ae]=N[ae];return _e}function w(N,K){var ae=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(ae!=null){var _e=[],Oe=!0,Se=!1,xe,he;try{for(ae=ae.call(N);!(Oe=(xe=ae.next()).done)&&(_e.push(xe.value),!(K&&_e.length===K));Oe=!0);}catch(Ce){Se=!0,he=Ce}finally{try{!Oe&&ae.return!=null&&ae.return()}finally{if(Se)throw he}}return _e}}function ee(N){if(Array.isArray(N))return N}var pe=`import React, { useState } from 'react';
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
`,me={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},J="";const E={title:"Components/Map",component:ue,parameters:{layout:"fullscreen",design:(0,v.vc)([{type:"figma",url:J},{type:"link",url:J}]),docs:{page:function(){return(0,T.jsx)(y.Y,{description:"Map component"})}}},args:{}};var _=function(K){var ae=(0,l.useState)(K.markerLocation),_e=$(ae,2),Oe=_e[0],Se=_e[1],xe=function(Ce){Se(Ce),re.log("Map clicked at ["+Ce.latitude+","+Ce.longitude+"]")};return(0,T.jsx)(ue,Object.assign({},K,{markerLocation:Oe,onClick:xe}))};_.displayName="Template";var r=_.bind({});r.args={},r.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var t=_.bind({});t.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},t.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var I=_.bind({});I.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},I.parameters={docs:{description:{story:"OpenStreetMap"}}};var M=_.bind({});M.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},M.parameters={docs:{description:{story:"Kartverket terrain map"}}};var ce=_.bind({});ce.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},ce.parameters={docs:{description:{story:"Kartverket sea map"}}};var be=_.bind({});be.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},be.parameters={docs:{description:{story:"Google Maps"}}},r.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},be.parameters);var ne=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Primary:()=>$,Success:()=>b,__namedExportsOrder:()=>U,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q;function F(){return F=Object.assign?Object.assign.bind():function(Y){for(var w=1;w<arguments.length;w++){var ee=arguments[w];for(var pe in ee)Object.prototype.hasOwnProperty.call(ee,pe)&&(Y[pe]=ee[pe])}return Y},F.apply(this,arguments)}var Z=function(w){return n.createElement("svg",F({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w),q||(q=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},x;(function(Y){Y.Primary="primary",Y.Success="success"})(x||(x={}));var X;(function(Y){Y.Small="small",Y.Medium="medium"})(X||(X={}));var W=(0,n.createContext)({color:x.Primary,size:X.Medium}),f=function(){var w=(0,n.useContext)(W);if(w===void 0)throw new Error("usePageContext must be used within a PageContext");return w},D=e("./node_modules/classnames/index.js"),l=e.n(D),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(v),C=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css"),h={};h.insert="head",h.singleton=!1;var m=y()(C.Z,h);const u=C.Z.locals||{};var a=e("./node_modules/react/jsx-runtime.js"),j=function(w){var ee=w.children;return(0,a.jsx)("div",{className:l()(u["page-content"]),children:ee})};j.displayName="PageContent";try{j.displayName="PageContent",j.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:j.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(Y){}var c=e("./src/components/SvgIcon/index.ts"),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css"),R={};R.insert="head",R.singleton=!1;var P=y()(S.Z,R);const L=S.Z.locals||{};var g=function(w){var ee=w.children,pe=w.icon,me=f(),J=me.color,E=me.size,_=E===X.Small?28:40;return(0,a.jsxs)("header",{className:l()(L["page-header"],L["page-header--"+J],L["page-header--"+E]),children:[(0,a.jsx)(c.l,{width:_,height:_,svgIconComponent:pe}),(0,a.jsx)("span",{children:ee})]})};g.displayName="PageHeader";try{g.displayName="PageHeader",g.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:g.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(Y){}var p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css"),B={};B.insert="head",B.singleton=!1;var T=y()(p.Z,B);const z=p.Z.locals||{};var H=function(w){var ee=w.children,pe=w.color,me=pe===void 0?x.Primary:pe,J=w.size,E=J===void 0?X.Medium:J;return(0,a.jsx)("div",{className:z.page,children:(0,a.jsx)(W.Provider,{value:{color:me,size:E},children:ee})})};H.displayName="Page";try{H.displayName="Page",H.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:H.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(Y){}var se=`import React from 'react';
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
`,ue={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},le="";const de={title:"Components/Page",component:H,parameters:{design:(0,i.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,a.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var re=function(w){return(0,a.jsx)("div",{style:{width:"600px"},children:(0,a.jsxs)(H,{color:w.color,size:w.size,children:[(0,a.jsx)(g,{icon:(0,a.jsx)(Z,{}),children:"PageHeader"}),(0,a.jsx)(j,{children:"PageContent"})]})})};re.displayName="Template";var $=re.bind({});$.args={color:x.Primary,size:X.Medium},$.parameters={docs:{description:{story:""}}};var b=re.bind({});b.args={color:x.Success,size:X.Medium},b.parameters={docs:{description:{story:""}}},$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters),b.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},b.parameters);var U=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>J,default:()=>ee,descriptionTexts:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),Z=e.n(F),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e.n(x),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(W),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(D),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),y=e.n(v),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e.n(C),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),j=e.n(a),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e.n(c),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),P=e.n(R),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e.n(L),p=e("./node_modules/react/index.js"),B=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Pagination/Pagination.tsx"),H=e("./node_modules/react/jsx-runtime.js");function se(E,_){return $(E)||re(E,_)||le(E,_)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(E,_){if(!!E){if(typeof E=="string")return de(E,_);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(E,_)}}function de(E,_){(_==null||_>E.length)&&(_=E.length);for(var r=0,t=new Array(_);r<_;r++)t[r]=E[r];return t}function re(E,_){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],I=!0,M=!1,ce,be;try{for(r=r.call(E);!(I=(ce=r.next()).done)&&(t.push(ce.value),!(_&&t.length===_));I=!0);}catch(ne){M=!0,be=ne}finally{try{!I&&r.return!=null&&r.return()}finally{if(M)throw be}}return t}}function $(E){if(Array.isArray(E))return E}var b=`import React, { useState } from 'react';
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
`,U={Example:{startLoc:{col:52,line:52},endLoc:{col:1,line:73},startBody:{col:52,line:52},endBody:{col:1,line:73}}},Y="",w={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const ee={title:"Components/Pagination",component:z.t,parameters:{design:(0,B.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,H.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var pe=function(_){var r=(0,p.useState)(5),t=se(r,2),I=t[0],M=t[1],ce=(0,p.useState)(0),be=se(ce,2),ne=be[0],N=be[1],K=function(_e){M(parseInt(_e.target.value,10)),N(0)};return(0,H.jsx)(z.t,Object.assign({},_,{rowsPerPage:I,currentPage:ne,setCurrentPage:N,onRowsPerPageChange:K,descriptionTexts:w}))};pe.displayName="Template";var me=pe.bind({});me.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},me.parameters={docs:{description:{story:""}}},me.parameters=Object.assign({storySource:{source:`(args) => {
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
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:w.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(E){}},"./src/components/Panel/Panel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>h,Info:()=>y,Success:()=>v,Warning:()=>C,__namedExportsOrder:()=>m,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Panel/Panel.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},f="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const D={title:"Components/Panel",component:Z.s,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,x.jsx)("div",{children:"Her kommer litt informasjon"})}};var l=function(a){return(0,x.jsx)(Z.s,Object.assign({},a))};l.displayName="Template";var v=l.bind({});v.args={variant:Z.c.Success},v.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var y=l.bind({});y.parameters={docs:{description:{story:"Infobeskrivelse"}}};var C=l.bind({});C.args={variant:Z.c.Warning},C.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var h=l.bind({});h.args={variant:Z.c.Error},h.parameters={docs:{description:{story:"Feilbeskrivelse"}}},v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},y.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},C.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},h.parameters);var m=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>J,Info:()=>pe,Success:()=>ee,Warning:()=>me,__namedExportsOrder:()=>E,default:()=>Y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),C=e("./.storybook/StoryPage.tsx"),h=e("./src/components/Button/index.ts"),m=e("./src/components/Panel/Panel.tsx"),u=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),a=e("./node_modules/classnames/index.js"),j=e.n(a),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(c),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),P={};P.insert="head",P.singleton=!1;var L=S()(R.Z,P);const g=R.Z.locals||{};var p=e("./node_modules/react/jsx-runtime.js"),B=function(r){var t=r.children;return(0,p.jsx)(u.Eh,{className:j()(g["popover-panel__arrow"]),asChild:!0,children:t})};B.displayName="renderArrow";var T=function(r){var t=r.children,I=r.variant,M=I===void 0?m.c.Warning:I,ce=r.trigger,be=r.side,ne=be===void 0?"top":be,N=r.title,K=r.showIcon,ae=r.forceMobileLayout,_e=r.showPointer,Oe=_e===void 0?!0:_e,Se=r.onOpenChange,xe=r.open,he=xe===void 0?!1:xe;return(0,p.jsxs)(u.fC,{open:he,onOpenChange:Se,children:[(0,p.jsx)(u.xz,{asChild:!0,role:"button",children:ce}),(0,p.jsx)(u.VY,{side:ne,className:g["popover-panel"],children:(0,p.jsx)(m.s,{title:N,showIcon:K,forceMobileLayout:ae,showPointer:Oe,variant:M,renderArrow:B,children:t})})]})};T.displayName="PopoverPanel";const z=null;try{T.displayName="PopoverPanel",T.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:T.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(_){}function H(_,r){return re(_)||de(_,r)||ue(_,r)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(_,r){if(!!_){if(typeof _=="string")return le(_,r);var t=Object.prototype.toString.call(_).slice(8,-1);if(t==="Object"&&_.constructor&&(t=_.constructor.name),t==="Map"||t==="Set")return Array.from(_);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return le(_,r)}}function le(_,r){(r==null||r>_.length)&&(r=_.length);for(var t=0,I=new Array(r);t<r;t++)I[t]=_[t];return I}function de(_,r){var t=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(t!=null){var I=[],M=!0,ce=!1,be,ne;try{for(t=t.call(_);!(M=(be=t.next()).done)&&(I.push(be.value),!(r&&I.length===r));M=!0);}catch(N){ce=!0,ne=N}finally{try{!M&&t.return!=null&&t.return()}finally{if(ce)throw ne}}return I}}function re(_){if(Array.isArray(_))return _}var $=`import React from 'react';
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
`,b={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},U="";const Y={title:"Components/Panel/PopoverPanel",component:T,parameters:{design:(0,v.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,p.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:m.c.Warning,trigger:(0,p.jsx)("button",{children:"\xC5pne"}),side:"top"}};var w=function(r){var t=(0,y.eJ)(!1),I=H(t,2),M=I[0],ce=I[1],be=function(){ce(!M)};return(0,p.jsx)("div",{children:(0,p.jsxs)(T,{variant:r.variant,side:r.side,title:r.title,open:M,trigger:(0,p.jsx)(h.zx,{variant:h.Wu.Filled,color:h.rp.Primary,children:"\xC5pne"}),onOpenChange:ce,showPointer:r.showPointer,showIcon:r.showIcon,forceMobileLayout:r.forceMobileLayout,children:[(0,p.jsx)("div",{children:"Her kommer litt informasjon"}),(0,p.jsx)(h.zx,{variant:h.Wu.Filled,color:h.rp.Primary,size:h.qE.Small,onClick:be,children:"Lukk"})]})})};w.displayName="Template";var ee=w.bind({});ee.args={variant:m.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},ee.argTypes={trigger:{control:!1}},ee.parameters={docs:{description:{story:""}}};var pe=w.bind({});pe.args={variant:m.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},pe.argTypes={trigger:{control:!1}},pe.parameters={docs:{description:{story:""}}};var me=w.bind({});me.args={variant:m.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},me.argTypes={trigger:{control:!1}},me.parameters={docs:{description:{story:""}}};var J=w.bind({});J.args={variant:m.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},J.argTypes={trigger:{control:!1}},J.parameters={docs:{description:{story:""}}},ee.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ee.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters);var E=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>y,Compact:()=>h,Default:()=>v,Disabled:()=>m,Error:()=>C,LongText:()=>a,WithDescription:()=>u,WithHiddenLabel:()=>j,__namedExportsOrder:()=>c,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/RadioButton/RadioButton.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Default:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const D={title:"Components/RadioButton",component:Z.E,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}",deprecationWarning:"Use RadioButton from @digdir/design-system-react instead."})}}},args:{label:"Label",name:"label",value:"label"}};var l=function(R){return(0,x.jsx)(Z.E,Object.assign({},R))};l.displayName="Template";var v=l.bind({});v.args={},v.parameters={docs:{description:{story:"Default radio button."}}};var y=l.bind({});y.args={checked:!0},y.parameters={docs:{description:{story:"Checked radio button."}}};var C=l.bind({});C.args={error:!0},C.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var h=l.bind({});h.args={size:Z.j.Xsmall},h.parameters={docs:{description:{story:"This is the compact radio button."}}};var m=l.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var u=l.bind({});u.args={description:"Lorem ipsum dolor sit amet."},u.parameters={docs:{description:{story:"This is a radio button with description."}}};var a=l.bind({});a.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},a.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var j=l.bind({});j.args={hideLabel:!0},j.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},y.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},C.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},u.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},a.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},j.parameters);var c=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>me,Disabled:()=>E,Error:()=>J,Horizontal:()=>pe,Vertical:()=>ee,__namedExportsOrder:()=>_,default:()=>Y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),m=e("./src/components/RadioButton/index.ts"),u=e("./src/components/FieldSet/index.ts"),a=e("./src/hooks/index.ts"),j=e("./src/utils/arrayUtils.ts"),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),S=e.n(c),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css"),P={};P.insert="head",P.singleton=!1;var L=S()(R.Z,P);const g=R.Z.locals||{};var p=e("./node_modules/react/jsx-runtime.js");function B(r,t){return ue(r)||se(r,t)||z(r,t)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(r,t){if(!!r){if(typeof r=="string")return H(r,t);var I=Object.prototype.toString.call(r).slice(8,-1);if(I==="Object"&&r.constructor&&(I=r.constructor.name),I==="Map"||I==="Set")return Array.from(r);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return H(r,t)}}function H(r,t){(t==null||t>r.length)&&(t=r.length);for(var I=0,M=new Array(t);I<t;I++)M[I]=r[I];return M}function se(r,t){var I=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(I!=null){var M=[],ce=!0,be=!1,ne,N;try{for(I=I.call(r);!(ce=(ne=I.next()).done)&&(M.push(ne.value),!(t&&M.length===t));ce=!0);}catch(K){be=!0,N=K}finally{try{!ce&&I.return!=null&&I.return()}finally{if(be)throw N}}return M}}function ue(r){if(Array.isArray(r))return r}var le;(function(r){r.Xsmall="xsmall",r.Small="small"})(le||(le={}));var de;(function(r){r.Vertical="vertical",r.Horizontal="horizontal"})(de||(de={}));var re=function(t){var I=t.description,M=t.disabled,ce=t.error,be=t.items,ne=t.legend,N=t.name,K=t.onChange,ae=t.presentation,_e=t.size,Oe=_e===void 0?le.Small:_e,Se=t.value,xe=t.variant,he=xe===void 0?de.Vertical:xe;if(!(0,j.zb)(be.map(function(Te){return Te.value})))throw Error("Each value in the radio group must be unique.");var Ce=(0,n.useState)(Se),We=B(Ce,2),Me=We[0],Re=We[1];(0,n.useEffect)(function(){Re(Se)},[Se]);var ye=(0,a.D9)(Me);(0,a.PQ)(function(){K&&!M&&ye!==Me&&K(Me)},[Me,M,K]);var ge=function(Ke){return function(Be){return Be.target.checked&&Re(Ke)}},V=Oe===le.Xsmall?[u.w.Xsmall,m.j.Xsmall]:[u.w.Small,m.j.Small],fe=B(V,2),je=fe[0],Ie=fe[1];return(0,p.jsx)(u.C,{description:I,disabled:M,error:ce,legend:ne,size:je,children:(0,p.jsx)("div",{className:[g["altinn-radio-group"],g["altinn-radio-group--"+he],g["altinn-radio-group--"+Oe]].join(" "),role:ae?void 0:"radiogroup",children:be.map(function(Te){return(0,n.createElement)(m.E,Object.assign({},Te,{checked:Te.value===Me,disabled:M||Te.disabled,error:!!ce,key:Te.value,name:N,onChange:ge(Te.value),presentation:ae,size:Ie}))})})})};re.displayName="RadioGroup";try{re.displayName="RadioGroup",re.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:re.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(r){}var $=`import React from 'react';
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
`,b={Vertical:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Horizontal:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Compact:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Error:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Disabled:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}}},U="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const Y={title:"Components/RadioGroup",component:re,parameters:{design:(0,i.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,p.jsx)(d.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes.",deprecationWarning:"Use RadioGroup from @digdir/design-system-react instead."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var w=function(t){return(0,p.jsx)(re,Object.assign({},t))};w.displayName="Template";var ee=w.bind({});ee.args={variant:de.Vertical},ee.parameters={docs:{description:{story:"This is the default setting."}}};var pe=w.bind({});pe.args={variant:de.Horizontal},pe.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var me=w.bind({});me.args={size:le.Xsmall},me.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var J=w.bind({});J.args={error:"Du m\xE5 velge et av alternativene over."},J.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var E=w.bind({});E.args={disabled:!0},E.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},ee.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},ee.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},pe.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},me.parameters),J.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},J.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},E.parameters);var _=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>$,__namedExportsOrder:()=>b,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),C=e("./.storybook/StoryPage.tsx"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),u=e("./node_modules/classnames/index.js"),a=e.n(u),j=e("./src/components/_InputWrapper/index.ts"),c=e("./node_modules/react/jsx-runtime.js"),S=["id","onChange","disabled","label"];function R(U,Y){if(U==null)return{};var w=P(U,Y),ee,pe;if(Object.getOwnPropertySymbols){var me=Object.getOwnPropertySymbols(U);for(pe=0;pe<me.length;pe++)ee=me[pe],!(Y.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(U,ee)||(w[ee]=U[ee]))}return w}function P(U,Y){if(U==null)return{};var w={},ee=Object.keys(U),pe,me;for(me=0;me<ee.length;me++)pe=ee[me],!(Y.indexOf(pe)>=0)&&(w[pe]=U[pe]);return w}var L=function(Y){var w=Y.id,ee=Y.onChange,pe=Y.disabled,me=pe===void 0?!1:pe,J=Y.label,E=R(Y,S);return(0,c.jsx)(j.SP,{disabled:me,isSearch:!0,label:J,inputRenderer:function(r){var t=r.className,I=r.variant,M={id:w,disabled:me,className:a()(t)};return(0,c.jsx)("input",Object.assign({},M,E,{"data-testid":w+"-"+I,onChange:ee}))}})};L.displayName="SearchField";try{L.displayName="SearchField",L.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:L.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(U){}function g(U,Y){return H(U)||z(U,Y)||B(U,Y)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(U,Y){if(!!U){if(typeof U=="string")return T(U,Y);var w=Object.prototype.toString.call(U).slice(8,-1);if(w==="Object"&&U.constructor&&(w=U.constructor.name),w==="Map"||w==="Set")return Array.from(U);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return T(U,Y)}}function T(U,Y){(Y==null||Y>U.length)&&(Y=U.length);for(var w=0,ee=new Array(Y);w<Y;w++)ee[w]=U[w];return ee}function z(U,Y){var w=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(w!=null){var ee=[],pe=!0,me=!1,J,E;try{for(w=w.call(U);!(pe=(J=w.next()).done)&&(ee.push(J.value),!(Y&&ee.length===Y));pe=!0);}catch(_){me=!0,E=_}finally{try{!pe&&w.return!=null&&w.return()}finally{if(me)throw E}}return ee}}function H(U){if(Array.isArray(U))return U}var se=`import React from 'react';
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
`,ue={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},le="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const de={title:"Components/SearchField",component:L,parameters:{design:(0,v.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,c.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var re=function(Y){var w=(0,y.D8)(),ee=g(w,1),pe=ee[0].disabled;return(0,c.jsx)(L,Object.assign({disabled:pe},Y))};re.displayName="Template";var $=re.bind({});$.args={},$.parameters={docs:{description:{story:"Search field."}}},$.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},$.parameters);var b=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Disabled:()=>u,Error:()=>a,Multiple:()=>m,__namedExportsOrder:()=>j,default:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),q=e.n(d),F=e("./node_modules/react/index.js"),Z=e("./node_modules/storybook-addon-designs/esm/index.js"),x=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Select/Select.tsx"),W=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Multiple:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Disabled:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Error:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}}},l="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",v=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],y=v.map(function(c){return Object.assign({},c,{deleteButtonLabel:"Slett "+c.label})});const C={title:"Components/Select/Multiple",component:X.P,parameters:{design:(0,Z.vc)([{type:"figma",url:l},{type:"link",url:l}]),docs:{page:function(){return(0,W.jsx)(x.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:y}};var h=function(S){return(0,W.jsx)("div",{style:{width:"440px"},children:(0,W.jsx)(X.P,Object.assign({},S))})};h.displayName="Template";var m=h.bind({});m.args={},m.parameters={docs:{description:{story:"This is the default multiple select box."}}};var u=h.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var a=h.bind({});a.args={error:!0},a.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},u.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},a.parameters);var j=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>v,Disabled:()=>y,Error:()=>C,__namedExportsOrder:()=>h,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),q=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Select/Select.tsx"),x=e("./node_modules/react/jsx-runtime.js"),X=`import React from 'react';
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
`,W={Default:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Error:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const D={title:"Components/Select/Single",component:Z.P,parameters:{design:(0,q.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,x.jsx)(F.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var l=function(u){return(0,x.jsx)("div",{style:{width:"440px"},children:(0,x.jsx)(Z.P,Object.assign({},u))})};l.displayName="Template";var v=l.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default select box."}}};var y=l.bind({});y.args={disabled:!0},y.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var C=l.bind({});C.args={error:!0},C.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},v.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},y.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},C.parameters);var h=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{IconFromNavIconLibrary:()=>m,ImportedCustomIcon:()=>u,__namedExportsOrder:()=>a,default:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./node_modules/@navikt/ds-icons/esm/Success.js"),q=e("./.storybook/StoryPage.tsx"),F=e("./src/components/SvgIcon/index.ts"),Z,x,X;function W(){return W=Object.assign?Object.assign.bind():function(j){for(var c=1;c<arguments.length;c++){var S=arguments[c];for(var R in S)Object.prototype.hasOwnProperty.call(S,R)&&(j[R]=S[R])}return j},W.apply(this,arguments)}var f=function(c){return n.createElement("svg",W({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},c),Z||(Z=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),x||(x=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),X||(X=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},D=e("./node_modules/react/jsx-runtime.js"),l=`import React from 'react';
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
`,v={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},y="";const C={title:"Components/SvgIcon",component:F.l,parameters:{design:(0,i.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,D.jsx)(q.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var h=function(c){return(0,D.jsx)(F.l,Object.assign({},c))};h.displayName="Template";var m=h.bind({});m.args={svgIconComponent:(0,D.jsx)(d.Z,{})},m.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var u=h.bind({});u.args={svgIconComponent:(0,D.jsx)(f,{height:"2rem",width:"2rem"})},u.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters);var a=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{BasicTable:()=>_n,Responsive:()=>yn,SelectRows:()=>gn,__namedExportsOrder:()=>Nn,default:()=>wn});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),C=e("./node_modules/storybook-addon-designs/esm/index.js"),h=e("./node_modules/classnames/index.js"),m=e.n(h),u=e("./.storybook/StoryPage.tsx"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),S=e("./src/hooks/useMediaQuery.ts"),R=e("./src/DesignTokens/index.ts"),P=e("./src/components/RadioButton/index.ts"),L;(function(k){k.Header="header",k.Body="body",k.Footer="footer"})(L||(L={}));var g;(function(k){k.Descending="desc",k.Ascending="asc",k.NotSortable="notSortable",k.NotActive="notActive"})(g||(g={}));var p=(0,y.createContext)(void 0);function B(){var k=(0,y.useContext)(p);if(k===void 0)throw new Error("useTableContext must be used within a TableContext");return k}var T=(0,y.createContext)({variantStandard:L.Body}),z=function(){var Q=(0,y.useContext)(T);if(Q===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return Q},H=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),se=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(se),le=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css"),de={};de.insert="head",de.singleton=!1;var re=ue()(le.Z,de);const $=le.Z.locals||{};var b=e("./node_modules/react/jsx-runtime.js"),U=["children","selectRows","onChange","selectedValue","className"];function Y(k,Q){if(k==null)return{};var te=w(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function w(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}function ee(k){var Q=k.children,te=k.selectRows,G=te===void 0?!1:te,oe=k.onChange,ie=k.selectedValue,ve=k.className,De=Y(k,U),Ue={selectRows:G,onChange:oe,selectedValue:ie};return(0,b.jsx)("table",Object.assign({},De,{className:m()($.Table,ve),children:(0,b.jsx)(p.Provider,{value:Ue,children:Q})}))}ee.displayName="Table";try{ee.displayName="Table",ee.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler<T>"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:ee.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(k){}var pe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css"),me={};me.insert="head",me.singleton=!1;var J=ue()(pe.Z,me);const E=pe.Z.locals||{};var _=["children","className"];function r(k,Q){if(k==null)return{};var te=t(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function t(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}var I=function(Q){var te=Q.children,G=Q.className,oe=r(Q,_),ie=L.Header;return(0,b.jsx)(T.Provider,{value:{variantStandard:ie},children:(0,b.jsx)("thead",Object.assign({},oe,{className:m()(E["table-header"],G),children:te}))})};I.displayName="TableHeader";try{I.displayName="TableHeader",I.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:I.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(k){}var M=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css"),ce={};ce.insert="head",ce.singleton=!1;var be=ue()(M.Z,ce);const ne=M.Z.locals||{};var N=["children","rowData","className"];function K(k,Q){if(k==null)return{};var te=ae(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function ae(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}function _e(k){var Q,te=k.children,G=k.rowData,oe=k.className,ie=K(k,N),ve=z(),De=ve.variantStandard,Ue=B(),ze=Ue.onChange,Ye=Ue.selectedValue,Ee=Ue.selectRows,Le=function(){ze!=null&&Ee&&De===L.Body&&G&&ze({selectedValue:G})},Ae=Ee&&typeof G!="undefined"&&JSON.stringify(G)===JSON.stringify(Ye);return(0,b.jsx)("tr",Object.assign({},ie,{className:m()(ne.TableRow,(Q={},Q[ne["table-row--selected"]]=Ae,Q[ne["table-row--body"]]=De===L.Body&&Ee&&!Ae,Q),oe),onClick:Le,children:te}))}_e.displayName="TableRow";try{_e.displayName="TableRow",_e.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:_e.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(k){}var Oe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css"),Se={};Se.insert="head",Se.singleton=!1;var xe=ue()(Oe.Z,Se);const he=Oe.Z.locals||{};var Ce;function We(){return We=Object.assign?Object.assign.bind():function(k){for(var Q=1;Q<arguments.length;Q++){var te=arguments[Q];for(var G in te)Object.prototype.hasOwnProperty.call(te,G)&&(k[G]=te[G])}return k},We.apply(this,arguments)}var Me=function(Q){return y.createElement("svg",We({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},Q),Ce||(Ce=y.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},Re=["children","variant","onChange","sortDirection","className","radiobutton"];function ye(k,Q){if(k==null)return{};var te=ge(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function ge(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}function V(k){var Q,te=k.children,G=k.variant,oe=k.onChange,ie=k.sortDirection,ve=ie===void 0?g.NotSortable:ie,De=k.className,Ue=k.radiobutton,ze=Ue===void 0?!1:Ue,Ye=ye(k,Re),Ee=z(),Le=Ee.variantStandard,Ae=function(nn){return G===void 0?Le===nn:G===nn},Qe=function(){oe!=null&&ve!=null&&ve!=g.NotSortable&&oe({next:ve===g.Descending?g.Ascending:g.Descending,previous:ve})};return(0,b.jsxs)(b.Fragment,{children:[Ae(L.Header)&&(0,b.jsx)("th",Object.assign({},Ye,{className:ze?m()(he["header-table-cell-radiobutton"],De):m()(he["header-table-cell"],De),"aria-sort":ve===g.Ascending?"ascending":ve===g.Descending?"descending":"none",children:(0,b.jsxs)("div",{className:ve!=g.NotSortable?m()(he["container-sortable"]):m()(he.container),onClick:function(){return Qe()},onKeyUp:function(nn){(nn.key==="Enter"||nn.key===" ")&&Qe()},role:ve!=g.NotSortable?"button":void 0,tabIndex:ve!=g.NotSortable?0:void 0,children:[(0,b.jsx)("div",{className:m()(he.input),children:te}),ve!=g.NotSortable&&(0,b.jsx)(Me,{"aria-label":"Sortering","data-testid":"sort-icon",className:m()(he.icon,(Q={},Q[he["icon-asc"]]=ve===g.Ascending,Q[he["icon-desc"]]=ve===g.Descending,Q))})]})})),Ae(L.Body)&&(0,b.jsx)("td",Object.assign({},Ye,{className:ze?m()(he["body-table-cell-radiobutton"],De):m()(he["body-table-cell"],De),children:(0,b.jsx)("div",{className:ze?m()(he["radio-button"]):m()(he.input),children:te})})),Ae(L.Footer)&&(0,b.jsx)("td",Object.assign({},Ye,{className:m()(De),children:(0,b.jsx)("div",{className:m()(he.input),children:te})}))]})}try{V.displayName="TableCell",V.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirection:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:V.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(k){}var fe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css"),je={};je.insert="head",je.singleton=!1;var Ie=ue()(fe.Z,je);const Te=fe.Z.locals||{};var Ke=["children","className"];function Be(k,Q){if(k==null)return{};var te=He(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function He(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}var Ve=function(Q){var te=Q.children,G=Q.className,oe=Be(Q,Ke),ie=L.Body;return(0,b.jsx)(T.Provider,{value:{variantStandard:ie},children:(0,b.jsx)("tbody",Object.assign({},oe,{className:m()(Te.TableBody,G),children:te}))})};Ve.displayName="TableBody";try{Ve.displayName="TableBody",Ve.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Ve.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(k){}var tn=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css"),$e={};$e.insert="head",$e.singleton=!1;var un=ue()(tn.Z,$e);const sn=tn.Z.locals||{};var mn=["children","className"];function dn(k,Q){if(k==null)return{};var te=cn(k,Q),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(k);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(Q.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(k,G)||(te[G]=k[G]))}return te}function cn(k,Q){if(k==null)return{};var te={},G=Object.keys(k),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(Q.indexOf(oe)>=0)&&(te[oe]=k[oe]);return te}var Xe=function(Q){var te=Q.children,G=Q.className,oe=dn(Q,mn),ie=L.Footer;return(0,b.jsx)(T.Provider,{value:{variantStandard:ie},children:(0,b.jsx)("tfoot",Object.assign({},oe,{className:m()(sn["table-footer"],G),children:te}))})};Xe.displayName="TableFooter";try{Xe.displayName="TableFooter",Xe.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Xe.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(k){}function on(k){var Q=k.config,te=(0,S.a)("(max-width: "+R.T.BreakpointsSm+")");return te?(0,b.jsx)(rn,{config:Q}):(0,b.jsx)(an,{config:Q})}function rn(k){var Q=k.config,te=Q.rows,G=Q.headers,oe=Q.showColumnsMobile,ie=Q.renderCell,ve=Q.rowSelection,De=Q.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Ye=ve?2:1;return(0,b.jsxs)(ee,{selectRows:!!ve,onChange:function(Le){var Ae=Le.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,b.jsx)(Ve,{children:te.map(function(Ee){var Le=JSON.stringify(Ee);return(0,b.jsxs)(_e,{rowData:Ee,children:[ve&&(0,b.jsx)(V,{radiobutton:!0,children:(0,b.jsx)(P.E,{name:Le,onChange:function(){return ve.onSelectionChange(Ee)},value:Le,checked:Le===Ue,label:Le,hideLabel:!0})}),(0,b.jsx)(V,{style:{padding:"0px"},children:ze.map(function(Ae){if(!(oe&&!oe.includes(Ae))){var Qe=ie&&ie[Ae],Ze=Qe?Qe(Ee[Ae]):Ee[Ae];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:he.header,children:G[Ae]}),(0,b.jsx)("div",{className:he.property,children:Ze})]})}})},Le+"-data")]},Le)})}),De&&(0,b.jsx)(Xe,{children:(0,b.jsx)(_e,{children:(0,b.jsx)(V,{colSpan:Ye,children:De})})})]})}rn.displayName="MobileTable";function an(k){var Q=k.config,te=Q.rows,G=Q.headers,oe=Q.renderCell,ie=Q.columnSort,ve=Q.rowSelection,De=Q.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Ye=ve?Object.keys(G).length+1:Object.keys(G).length;return(0,b.jsxs)(ee,{selectRows:!!ve,onChange:function(Le){var Ae=Le.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,b.jsx)(I,{children:(0,b.jsxs)(_e,{children:[ve&&(0,b.jsx)(V,{radiobutton:!0}),ze.map(function(Ee){return(0,b.jsx)(V,{onChange:function(Ae){var Qe=Ae.next,Ze=Ae.previous;ie&&ie.onSortChange({column:Ee,next:Qe,previous:Ze})},sortDirection:ie?ie.currentlySortedColumn===Ee?ie.currentDirection:ie.sortable.includes(Ee)?g.NotActive:g.NotSortable:g.NotSortable,children:G[Ee]},Ee)})]})}),(0,b.jsx)(Ve,{children:te.map(function(Ee){var Le=JSON.stringify(Ee);return(0,b.jsxs)(_e,{rowData:Ee,children:[ve&&(0,b.jsx)(V,{radiobutton:!0,children:(0,b.jsx)(P.E,{name:Le,onChange:function(){return ve.onSelectionChange(Ee)},value:Le,checked:Le===Ue,label:Le,hideLabel:!0})}),ze.map(function(Ae){var Qe=oe&&oe[Ae];return(0,b.jsx)(V,{children:Qe?Qe(Ee[Ae]):Ee[Ae]},Le+"-"+Ae)})]},Le)})}),De&&(0,b.jsx)(Xe,{children:(0,b.jsx)(_e,{children:(0,b.jsx)(V,{colSpan:Ye,children:De})})})]})}an.displayName="LaptopTable";try{on.displayName="ResponsiveTable",on.__docgenInfo={description:"",displayName:"ResponsiveTable",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"ResponsiveTableConfig<T>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/ResponsiveTable.tsx#ResponsiveTable"]={docgenInfo:on.__docgenInfo,name:"ResponsiveTable",path:"src/components/Table/ResponsiveTable.tsx#ResponsiveTable"})}catch(k){}var pn=e("./src/components/Pagination/Pagination.stories.tsx"),Sn=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),En=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.sort.js"),ke=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.reverse.js"),Pe=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function Fe(k){var Q=k.page,te=k.rowsPerPage,G=k.sortColumn,oe=k.sortDirection,ie=[].concat(Pe);return G&&(ie.sort(function(ve,De){return ve[G]===De[G]?0:ve[G]>De[G]?1:-1}),oe===g.Descending&&ie.reverse()),{totalNum:ie.length,rows:ie.slice(Q*te,Q*te+te)}}var qe=e("./src/components/Pagination/Pagination.tsx"),Ge=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css"),Je={};Je.insert="head",Je.singleton=!1;var Tn=ue()(Ge.Z,Je);const hn=Ge.Z.locals||{};function en(k,Q){return Bn(k)||Mn(k,Q)||Rn(k,Q)||Ln()}function Ln(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(k,Q){if(!!k){if(typeof k=="string")return An(k,Q);var te=Object.prototype.toString.call(k).slice(8,-1);if(te==="Object"&&k.constructor&&(te=k.constructor.name),te==="Map"||te==="Set")return Array.from(k);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return An(k,Q)}}function An(k,Q){(Q==null||Q>k.length)&&(Q=k.length);for(var te=0,G=new Array(Q);te<Q;te++)G[te]=k[te];return G}function Mn(k,Q){var te=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(te!=null){var G=[],oe=!0,ie=!1,ve,De;try{for(te=te.call(k);!(oe=(ve=te.next()).done)&&(G.push(ve.value),!(Q&&G.length===Q));oe=!0);}catch(Ue){ie=!0,De=Ue}finally{try{!oe&&te.return!=null&&te.return()}finally{if(ie)throw De}}return G}}function Bn(k){if(Array.isArray(k))return k}var Kn=`import React, { useState } from 'react';
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
`,Vn={BasicTable:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},SelectRows:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},Responsive:{startLoc:{col:67,line:162},endLoc:{col:1,line:230},startBody:{col:67,line:162},endBody:{col:1,line:230}}},In="";const wn={title:"Components/Table",component:ee,parameters:{design:(0,C.vc)([{type:"figma",url:In},{type:"link",url:In}]),docs:{page:function(){return(0,b.jsx)(u.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var kn=function(Q){var te=(0,y.useState)(void 0),G=en(te,2),oe=G[0],ie=G[1],ve=(0,y.useState)(void 0),De=en(ve,2),Ue=De[0],ze=De[1],Ye=(0,y.useState)(g.NotActive),Ee=en(Ye,2),Le=Ee[0],Ae=Ee[1],Qe=(0,y.useState)(5),Ze=en(Qe,2),nn=Ze[0],On=Ze[1],jn=(0,y.useState)(0),bn=en(jn,2),vn=bn[0],fn=bn[1],xn=Fe({page:vn,rowsPerPage:nn,sortColumn:Ue,sortDirection:Le}),Cn=xn.rows,Pn=xn.totalNum;return(0,b.jsxs)(ee,{selectRows:Q.selectRows,onChange:function(Ne){var ln=Ne.selectedValue;return ie(ln)},selectedValue:oe,children:[(0,b.jsx)(I,{children:(0,b.jsxs)(_e,{children:[Q.selectRows&&(0,b.jsx)(V,{radiobutton:!0}),(0,b.jsx)(V,{onChange:function(Ne){var ln=Ne.next;ze("caseNum"),Ae(ln)},sortDirection:Ue==="caseNum"?Le:g.NotActive,children:"S\xF8knadsnr."}),(0,b.jsx)(V,{onChange:function(Ne){var ln=Ne.next;ze("product"),Ae(ln)},sortDirection:Ue==="product"?Le:g.NotActive,children:"Produkt"}),(0,b.jsx)(V,{children:"Status"}),(0,b.jsx)(V,{children:"Bilde"})]})}),(0,b.jsx)(Ve,{children:Cn.map(function(we){return(0,b.jsxs)(_e,{rowData:{caseNum:we.caseNum},children:[Q.selectRows&&(0,b.jsx)(V,{radiobutton:!0,children:(0,b.jsx)(P.E,{name:""+we.caseNum,onChange:function(){return ie(we)},value:""+we.caseNum,checked:(oe==null?void 0:oe.caseNum)===we.caseNum,label:""+we.caseNum,hideLabel:!0})}),(0,b.jsx)(V,{children:we.caseNum}),(0,b.jsx)(V,{children:we.product}),(0,b.jsx)(V,{children:we.status}),(0,b.jsx)(V,{children:(0,b.jsx)("img",{className:m()(hn.checkmark),src:we.image.src,alt:we.image.alt})})]},we.caseNum)})}),(0,b.jsx)(Xe,{children:(0,b.jsx)(_e,{children:(0,b.jsx)(V,{colSpan:5,children:(0,b.jsx)(qe.t,{numberOfRows:Pn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:nn,onRowsPerPageChange:function(Ne){On(parseInt(Ne.target.value,10)),fn(0)},currentPage:vn,setCurrentPage:function(Ne){return fn(Ne)},descriptionTexts:pn.descriptionTexts})})})})]})};kn.displayName="Template";var Dn=function(){var Q=(0,y.useState)(void 0),te=en(Q,2),G=te[0],oe=te[1],ie=(0,y.useState)(void 0),ve=en(ie,2),De=ve[0],Ue=ve[1],ze=(0,y.useState)(g.NotActive),Ye=en(ze,2),Ee=Ye[0],Le=Ye[1],Ae=(0,y.useState)(5),Qe=en(Ae,2),Ze=Qe[0],nn=Qe[1],On=(0,y.useState)(0),jn=en(On,2),bn=jn[0],vn=jn[1],fn=Fe({rowsPerPage:Ze,page:bn,sortColumn:De,sortDirection:Ee}),xn=fn.rows,Cn=fn.totalNum,Pn={rows:xn,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:function(Ne){var ln=Ne.column,Wn=Ne.next;Ue(ln),Le(Wn)},sortable:["caseNum","product"],currentlySortedColumn:De,currentDirection:Ee},renderCell:{image:function(Ne){return(0,b.jsx)("img",{className:m()(hn.checkmark),src:Ne.src,alt:Ne.alt})}},rowSelection:{onSelectionChange:function(Ne){return oe(Ne)},selectedValue:G},footer:(0,b.jsx)(qe.t,{numberOfRows:Cn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ze,onRowsPerPageChange:function(Ne){nn(parseInt(Ne.target.value,10)),vn(0)},currentPage:bn,setCurrentPage:function(Ne){return vn(Ne)},descriptionTexts:pn.descriptionTexts})};return(0,b.jsx)(on,{config:Pn})};Dn.displayName="ResponsiveTemplate";var _n=kn.bind({});_n.args={selectRows:!1},_n.parameters={docs:{description:{story:""}}};var gn=kn.bind({});gn.args={selectRows:!0},gn.parameters={docs:{description:{story:""}}};var yn=Dn.bind({});yn.args={},yn.parameters={docs:{description:{story:""}}},_n.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},yn.parameters);var Nn=["BasicTable","SelectRows","Responsive"]},"./src/components/Tabs/Tabs.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>J,default:()=>ee});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),c=e.n(j),S=e("./src/utils/arrayUtils.ts"),R=e("./src/hooks/index.ts"),P=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(P),g=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css"),p={};p.insert="head",p.singleton=!1;var B=L()(g.Z,p);const T=g.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js");function H(E,_){return re(E)||de(E,_)||ue(E,_)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(E,_){if(!!E){if(typeof E=="string")return le(E,_);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return le(E,_)}}function le(E,_){(_==null||_>E.length)&&(_=E.length);for(var r=0,t=new Array(_);r<_;r++)t[r]=E[r];return t}function de(E,_){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],I=!0,M=!1,ce,be;try{for(r=r.call(E);!(I=(ce=r.next()).done)&&(t.push(ce.value),!(_&&t.length===_));I=!0);}catch(ne){M=!0,be=ne}finally{try{!I&&r.return!=null&&r.return()}finally{if(M)throw be}}return t}}function re(E){if(Array.isArray(E))return E}var $=function(_){return _.replace(/\s/,"_")},b=function(_){var r=_.activeTab,t=_.items,I=_.onChange,M=(0,n.useId)(),ce=t.map(function(V){var fe=V.name,je=V.content,Ie=V.value,Te=V.tabId,Ke=V.panelId,Be=Ie!=null?Ie:fe,He=Te!=null?Te:M+$(Be)+"-tab",Ve=Ke!=null?Ke:M+$(Be)+"-panel";return{name:fe,content:je,value:Be,tabId:He,panelId:Ve}});if(!(0,S.zb)(ce.map(function(V){var fe=V.value;return fe})))throw Error("Each tab value must be unique.");if(r!==void 0&&!ce.some(function(V){return V.value===r}))throw Error("The given active tab value must exist in the list of items.");var be=function(fe){return ce.findIndex(function(je){return je.value===fe})},ne=r!=null?r:ce[0].value,N=(0,n.useState)(ne),K=H(N,2),ae=K[0],_e=K[1],Oe=(0,n.useState)(be(ne)),Se=H(Oe,2),xe=Se[0],he=Se[1];(0,n.useEffect)(function(){return _e(ne)},[ne]);var Ce=(0,n.useRef)(null),We=ce.length-1;(0,R.PQ)(function(){var V;(V=Ce.current)===null||V===void 0||V.querySelectorAll('[role="tab"]')[xe].focus()},[xe]);var Me=function(fe){ae!==fe&&I&&I(fe),_e(fe),he(be(fe))},Re=function(){return xe!==void 0&&he(xe===We?0:xe+1)},ye=function(){return xe!==void 0&&he(xe===0?We:xe-1)},ge=function(fe){return function(je){switch(je.key){case"ArrowRight":Re();break;case"ArrowLeft":ye();break;case"Space":Me(fe)}}};return(0,z.jsxs)("div",{className:T["altinn-tabs"],children:[(0,z.jsx)("div",{className:T["altinn-tabs__tablist"],ref:Ce,role:"tablist",children:ce.map(function(V,fe){var je=V.value===ae,Ie=c()(T["altinn-tabs__tablist__tab"],je&&T["altinn-tabs__tablist__tab--selected"]);return(0,z.jsx)("button",{"aria-controls":V.panelId,"aria-selected":je,className:Ie,id:V.tabId,onClick:function(){return Me(V.value)},onKeyDown:ge(V.value),role:"tab",tabIndex:xe===fe?0:-1,children:V.name},V.value)})}),(0,z.jsx)("hr",{className:T["altinn-tabs__divider"]}),ce.map(function(V){return(0,z.jsx)("div",{className:T["altinn-tabs__tabpanel"],"aria-labelledby":V.tabId,hidden:V.value!==ae,id:V.panelId,role:"tabpanel",children:V.content},V.panelId)})]})};b.displayName="Tabs";try{b.displayName="Tabs",b.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:b.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(E){}var U=`import React from 'react';
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
`,Y={Example:{startLoc:{col:46,line:123},endLoc:{col:74,line:123},startBody:{col:46,line:123},endBody:{col:74,line:123}}},w="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const ee={title:"Components/Tabs",component:b,parameters:{design:(0,i.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,z.jsx)(d.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.",deprecationWarning:"Use Tabs from @digdir/design-system-react instead."})}}},args:{items:[{name:"Ild",content:(0,z.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,z.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,z.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var pe=function(_){return(0,z.jsx)(b,Object.assign({},_))};pe.displayName="Template";var me=pe.bind({});me.args={},me.parameters={docs:{description:{story:"This is how the component might look like."}}},me.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},me.parameters);var J=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>g,Disabled:()=>z,Error:()=>p,ReadOnlyConfirm:()=>T,ReadOnlyInfo:()=>B,__namedExportsOrder:()=>H,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./src/components/_InputWrapper/index.ts"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/classnames/index.js"),W=e.n(X),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(f),l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css"),v={};v.insert="head",v.singleton=!1;var y=D()(l.Z,v);const C=l.Z.locals||{};var h=e("./node_modules/react/jsx-runtime.js"),m=["isValid","disabled","readOnly","resize","label"];function u(se,ue){if(se==null)return{};var le=a(se,ue),de,re;if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(se);for(re=0;re<$.length;re++)de=$[re],!(ue.indexOf(de)>=0)&&(!Object.prototype.propertyIsEnumerable.call(se,de)||(le[de]=se[de]))}return le}function a(se,ue){if(se==null)return{};var le={},de=Object.keys(se),re,$;for($=0;$<de.length;$++)re=de[$],!(ue.indexOf(re)>=0)&&(le[re]=se[re]);return le}var j=function(ue){var le=ue.isValid,de=le===void 0?!0:le,re=ue.disabled,$=re===void 0?!1:re,b=ue.readOnly,U=b===void 0?!1:b,Y=ue.resize,w=Y===void 0?"none":Y,ee=ue.label,pe=u(ue,m);return(0,h.jsx)(q.SP,{isValid:de,disabled:$,readOnly:U,label:ee,inputId:pe.id,inputRenderer:function(J){var E=J.className,_=J.inputId;return(0,h.jsx)("textarea",Object.assign({},pe,{id:_,disabled:$,readOnly:Boolean(U),className:W()(E,C["altinn-TextArea"],C["altinn-TextArea--resize-"+w])}))}})};j.displayName="TextArea";try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:j.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(se){}var c=`import React from 'react';
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
`,S={Default:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Error:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyInfo:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyConfirm:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Disabled:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}}},R="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const P={title:"Components/TextArea",component:j,parameters:{design:(0,i.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,h.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextArea from @digdir/design-system-react instead."})}}},args:{label:"Label"}};var L=function(ue){return(0,h.jsx)(j,Object.assign({},ue))};L.displayName="Template";var g=L.bind({});g.args={},g.parameters={docs:{description:{story:"Regular textarea."}}};var p=L.bind({});p.args={isValid:!1},p.parameters={docs:{description:{story:"Textarea displaying error."}}};var B=L.bind({});B.args={readOnly:!0,value:"Some text"},B.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var T=L.bind({});T.args={readOnly:q.Hx.ReadOnlyConfirm,value:"Some text"},T.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var z=L.bind({});z.args={disabled:!0,value:"Some text"},z.parameters={docs:{description:{story:"Textarea as disabled."}}},g.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},g.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},p.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},B.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},T.parameters),z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},z.parameters);var H=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>z,Disabled:()=>de,Error:()=>se,NumberInput:()=>H,ReadOnlyConfirm:()=>le,ReadOnlyInfo:()=>ue,__namedExportsOrder:()=>re,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),q=e("./src/components/_InputWrapper/index.ts"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),l=e("./node_modules/classnames/index.js"),v=e.n(l),y=e("./node_modules/react-number-format/dist/react-number-format.es.js"),C=function(b){return b.format!==void 0},h=function(b){return b.format===void 0},m=function(b,U){return U&&h(U)?numericFormatter(b,U):U&&C(U)?patternFormatter(b,U):b},u=e("./node_modules/react/jsx-runtime.js"),a=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function j($,b){if($==null)return{};var U=c($,b),Y,w;if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols($);for(w=0;w<ee.length;w++)Y=ee[w],!(b.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call($,Y)||(U[Y]=$[Y]))}return U}function c($,b){if($==null)return{};var U={},Y=Object.keys($),w,ee;for(ee=0;ee<Y.length;ee++)w=Y[ee],!(b.indexOf(w)>=0)&&(U[w]=$[w]);return U}var S=function(b){var U=b.values,Y=b.sourceInfo;Y.event.target.value=U.value.trim()},R=function(b,U,Y){var w=b.target,ee=b.key,pe=w.selectionStart,me=w.selectionEnd,J=w.value,E=J===void 0?"":J;if(pe!==null&&me!==null){var _=E[0]==="-",r=(U==null?void 0:U.length)||0+(_?1:0),t=(Y==null?void 0:Y.length)||0;_&&me<=r&&ee==="Backspace"?w.setSelectionRange(1,1):w.setSelectionRange(Math.min(Math.max(pe,r),E.length-t),Math.max(Math.min(me,E.length-t),r))}},P=function(b){var U=b.id,Y=b.onChange,w=b.isValid,ee=w===void 0?!0:w,pe=b.disabled,me=pe===void 0?!1:pe,J=b.readOnly,E=J===void 0?!1:J,_=b.required,r=_===void 0?!1:_,t=b.formatting,I=b.label,M=j(b,a),ce=function(ne,N){N.source==="event"&&Y&&(S({values:ne,sourceInfo:N}),Y(N.event))};return(0,u.jsx)(q.SP,{isValid:ee,disabled:me,readOnly:E,label:I,inputId:U,inputRenderer:function(ne){var N=ne.className,K=ne.variant,ae=ne.inputId,_e={id:ae,readOnly:Boolean(E),disabled:me,required:r,className:v()(N,M.className),style:Object.assign({textAlign:t==null?void 0:t.align},M.style)};return t!=null&&t.number&&h(t.number)?(t.number.prefix&&t.number.prefix[0]==="-"&&(t.number.prefix=" "+t.number.prefix),(0,u.jsx)(y.h3,Object.assign({},_e,t.number,M,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0,onKeyDown:function(Se){return R(Se,t.number.prefix,t.number.suffix)}}))):t!=null&&t.number&&C(t.number)?(0,u.jsx)(y.HH,Object.assign({},_e,t.number,M,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0})):(0,u.jsx)("input",Object.assign({},_e,M,{"data-testid":ae+"-"+K,onChange:Y}))}})};P.displayName="TextField";try{P.displayName="TextField",P.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:P.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch($){}var L=`import React from 'react';
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
`,g={Default:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},NumberInput:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyInfo:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyConfirm:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}}},p="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const B={title:"Components/TextField",component:P,parameters:{design:(0,i.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,u.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextField from @digdir/design-system-react instead."})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var T=function(b){return(0,u.jsx)(P,Object.assign({},b))};T.displayName="Template";var z=T.bind({});z.args={},z.parameters={docs:{description:{story:"Regular input field."}}};var H=T.bind({});H.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},H.parameters={docs:{description:{story:"Number input field."}}};var se=T.bind({});se.args={isValid:!1},se.parameters={docs:{description:{story:"Input field displaying error."}}};var ue=T.bind({});ue.args={readOnly:!0,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as readonly-info."}}};var le=T.bind({});le.args={readOnly:q.Hx.ReadOnlyConfirm,value:"Some text"},le.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var de=T.bind({});de.args={disabled:!0,value:"Some text"},de.parameters={docs:{description:{story:"Input field as disabled."}}},z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},z.parameters),H.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},H.parameters),se.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},se.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters),le.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},le.parameters),de.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},de.parameters);var re=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>_,__namedExportsOrder:()=>r,default:()=>J});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),l=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),C=e("./node_modules/classnames/index.js"),h=e.n(C),m=(0,l.createContext)(void 0),u=function(){var I=(0,l.useContext)(m);if(I===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return I},a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(a),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),S={};S.insert="head",S.singleton=!1;var R=j()(c.Z,S);const P=c.Z.locals||{};var L=e("./node_modules/react/jsx-runtime.js"),g=function(I){var M=I.children,ce=I.onChange,be=I.selectedValue,ne=function(K){var ae=K.selectedValue;ce({selectedValue:ae})};return(0,L.jsx)(m.Provider,{value:{onChange:ne,selectedValue:be},children:(0,L.jsx)("div",{className:h()(P["toggle-button-group"]),"data-testid":"toggle-button-group",children:M})})};g.displayName="ToggleButtonGroup";try{g.displayName="ToggleButtonGroup",g.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:g.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(t){}var p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css"),B={};B.insert="head",B.singleton=!1;var T=j()(p.Z,B);const z=p.Z.locals||{};var H=function(I){var M,ce=I.children,be=I.value,ne=u(),N=ne.onChange,K=ne.selectedValue,ae=function(){N({selectedValue:be})};return(0,L.jsx)("button",{"data-testid":"toggle-button",className:h()(z["toggle-button"],(M={},M[z["toggle-button--selected"]]=be===K,M)),onClick:ae,type:"button","aria-pressed":be==K,children:ce})};H.displayName="ToggleButton";try{H.displayName="ToggleButton",H.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:H.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(t){}var se=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),ue={};ue.insert="head",ue.singleton=!1;var le=j()(se.Z,ue);const de=se.Z.locals||{};function re(t,I){return w(t)||Y(t,I)||b(t,I)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(t,I){if(!!t){if(typeof t=="string")return U(t,I);var M=Object.prototype.toString.call(t).slice(8,-1);if(M==="Object"&&t.constructor&&(M=t.constructor.name),M==="Map"||M==="Set")return Array.from(t);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return U(t,I)}}function U(t,I){(I==null||I>t.length)&&(I=t.length);for(var M=0,ce=new Array(I);M<I;M++)ce[M]=t[M];return ce}function Y(t,I){var M=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(M!=null){var ce=[],be=!0,ne=!1,N,K;try{for(M=M.call(t);!(be=(N=M.next()).done)&&(ce.push(N.value),!(I&&ce.length===I));be=!0);}catch(ae){ne=!0,K=ae}finally{try{!be&&M.return!=null&&M.return()}finally{if(ne)throw K}}return ce}}function w(t){if(Array.isArray(t))return t}var ee=`import React, { useState } from 'react';
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
`,pe={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},me="";const J={title:"Components/Toggle button group",component:g,parameters:{design:(0,v.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,L.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var E=function(){var I=(0,l.useState)("left"),M=re(I,2),ce=M[0],be=M[1],ne=function(K){var ae=K.selectedValue;be(ae)};return(0,L.jsx)("div",{className:de.container,children:(0,L.jsxs)(g,{onChange:ne,selectedValue:ce,children:[(0,L.jsx)(H,{value:"left",children:"Aktivt valg"}),(0,L.jsx)(H,{value:"right",children:"Mulig valg"})]})})};E.displayName="Template";var _=E.bind({});_.args={},_.argTypes={onChange:{control:!1},selectedValue:{control:!1}},_.parameters={docs:{description:{}}},_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters);var r=["Example"]},"./src/DesignTokens/index.ts":(A,o,e)=>{"use strict";e.d(o,{T:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),Z=e.n(F),x=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),X=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),W=1.6,f=/(\d*\.?\d+)rem(?=\W|$)/gim,D=function(m){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,a=Math.pow(10,u);return Math.round((m+Number.EPSILON)*a)/a},l=function(m){return typeof m=="string"?m.replace(f,function(u,a){var j=D(a*W);return j+"rem"}):m},v={get:function(m,u){if(u in m){var a=m[u];return typeof a=="object"?new Proxy(a,v):l(a)}}},y=new Proxy(x,v),C=new Proxy(X,v)},"./src/components/Button/index.ts":(A,o,e)=>{"use strict";e.d(o,{zx:()=>c,rp:()=>u,qE:()=>m,Wu:()=>a});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),q=e("./node_modules/classnames/index.js"),F=e.n(q),Z=e("./src/components/SvgIcon/index.ts"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(x),W=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),f={};f.insert="head",f.singleton=!1;var D=X()(W.Z,f);const l=W.Z.locals||{};var v=e("./node_modules/react/jsx-runtime.js"),y=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function C(S,R){if(S==null)return{};var P=h(S,R),L,g;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(S);for(g=0;g<p.length;g++)L=p[g],!(R.indexOf(L)>=0)&&(!Object.prototype.propertyIsEnumerable.call(S,L)||(P[L]=S[L]))}return P}function h(S,R){if(S==null)return{};var P={},L=Object.keys(S),g,p;for(p=0;p<L.length;p++)g=L[p],!(R.indexOf(g)>=0)&&(P[g]=S[g]);return P}var m;(function(S){S.Small="small",S.Medium="medium",S.Large="large"})(m||(m={}));var u;(function(S){S.Primary="primary",S.Secondary="secondary",S.Success="success",S.Danger="danger",S.Inverted="inverted"})(u||(u={}));var a;(function(S){S.Filled="filled",S.Outline="outline",S.Quiet="quiet"})(a||(a={}));var j=function(R,P){var L,g,p,B=R.children,T=R.color,z=T===void 0?u.Primary:T,H=R.variant,se=H===void 0?a.Filled:H,ue=R.size,le=ue===void 0?m.Small:ue,de=R.fullWidth,re=de===void 0?!1:de,$=R.dashedBorder,b=$===void 0?!1:$,U=R.iconPlacement,Y=U===void 0?"left":U,w=R.icon,ee=R.type,pe=ee===void 0?"button":ee,me=R.className,J=C(R,y);return(0,v.jsxs)("button",Object.assign({},J,{ref:P,className:F()(l["altinn-button"],l["altinn-button--"+le],l["altinn-button--"+se],l["altinn-button--"+z],l["altinn-button--"+se+"--"+z],(L={},L[l["altinn-button--full-width"]]=re,L),(g={},g[l["altinn-button--dashed-border"]]=b,g),(p={},p[l["altinn-button--only-icon"]]=!B&&w,p),me),type:pe,children:[w&&Y==="left"&&(0,v.jsx)(Z.l,{svgIconComponent:w,className:l.icon}),B,w&&Y==="right"&&(0,v.jsx)(Z.l,{svgIconComponent:w,className:l.icon})]}))};j.displayName="Button";const c=(0,d.forwardRef)(j)},"./src/components/Checkbox/Checkbox.tsx":(A,o,e)=>{"use strict";e.d(o,{X:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),q=e.n(d),F=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css"),W={};W.insert="head",W.singleton=!1;var f=x()(X.Z,W);const D=X.Z.locals||{};var l=e("./node_modules/react/jsx-runtime.js"),v=function(C){var h=C.checkboxId,m=C.checked,u=C.compact,a=C.description,j=C.disabled,c=C.error,S=C.hideLabel,R=C.label,P=C.name,L=C.onChange,g=C.presentation,p=C.readOnly;return(0,l.jsx)(F.f,{checked:m,className:q()(D["altinn-checkbox"],m&&D["altinn-checkbox--checked"],c&&D["altinn-checkbox--error"],j&&D["altinn-checkbox--disabled"],u&&D["altinn-checkbox--compact"],p&&D["altinn-checkbox--read-only"]),description:a,disabled:j,hideInput:p,hideLabel:S,inputId:h,label:R,name:P,onChange:L,presentation:g,size:u?F.b.Xsmall:F.b.Small,type:"checkbox",children:(0,l.jsx)("span",{className:D["altinn-visible-box"],children:(0,l.jsx)("span",{className:D["altinn-visible-box__checkmark"]})})})};v.displayName="Checkbox";try{v.displayName="Checkbox",v.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:v.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(y){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(A,o,e)=>{"use strict";e.d(o,{B:()=>x});var s=e("./node_modules/react/index.js"),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(O),i=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css"),d={};d.insert="head",d.singleton=!1;var q=n()(i.Z,d);const F=i.Z.locals||{};var Z=e("./node_modules/react/jsx-runtime.js"),x=function(W){var f=W.id,D=W.children,l=W.ariaLabel;return(0,Z.jsx)("div",{"data-testid":"ErrorMessage","aria-label":l,id:f,role:"alertdialog",className:F["altinn-error-message-wrapper"],children:D})};x.displayName="ErrorMessage";try{x.displayName="ErrorMessage",x.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:x.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(X){}},"./src/components/FieldSet/FieldSet.tsx":(A,o,e)=>{"use strict";e.d(o,{C:()=>v,w:()=>l});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),d=e.n(i),q=e("./src/components/ErrorMessage/ErrorMessage.tsx"),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(F),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(x.Z,X);const f=x.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),l;(function(y){y.Xsmall="xsmall",y.Small="small"})(l||(l={}));var v=function(C){var h=C.children,m=C.className,u=C.description,a=C.disabled,j=C.error,c=C.legend,S=C.size,R=S===void 0?l.Small:S;return(0,D.jsxs)("fieldset",{className:d()(f["altinn-field-set"],f["altinn-field-set--"+R],m),disabled:a,children:[c&&(0,D.jsx)("legend",{className:f["altinn-field-set__legend"],children:c}),u&&(0,D.jsx)("p",{className:f["altinn-field-set__description"],children:u}),(0,D.jsx)("div",{className:f["altinn-field-set__content"],children:h}),j&&(0,D.jsx)("div",{className:f["altinn-field-set__error-message"],children:(0,D.jsx)(q.B,{children:j})})]})};v.displayName="FieldSet";try{v.displayName="FieldSet",v.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:v.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(y){}},"./src/components/FieldSet/index.ts":(A,o,e)=>{"use strict";e.d(o,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(A,o,e)=>{"use strict";e.d(o,{t:()=>me});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),D=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),v=e.n(l),y=e("./src/hooks/useMediaQuery.ts"),C=e("./src/DesignTokens/index.ts"),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(h),u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css"),a={};a.insert="head",a.singleton=!1;var j=m()(u.Z,a);const c=u.Z.locals||{};var S,R;function P(){return P=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(J[r]=_[r])}return J},P.apply(this,arguments)}var L=function(E){return D.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),S||(S=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),R||(R=D.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},g,p;function B(){return B=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(J[r]=_[r])}return J},B.apply(this,arguments)}var T=function(E){return D.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),g||(g=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),p||(p=D.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},z;function H(){return H=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(J[r]=_[r])}return J},H.apply(this,arguments)}var se=function(E){return D.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),z||(z=D.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},ue,le;function de(){return de=Object.assign?Object.assign.bind():function(J){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(J[r]=_[r])}return J},de.apply(this,arguments)}var re=function(E){return D.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),ue||(ue=D.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),le||(le=D.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},$=e("./node_modules/react/jsx-runtime.js");function b(J,E){return pe(J)||ee(J,E)||Y(J,E)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(J,E){if(!!J){if(typeof J=="string")return w(J,E);var _=Object.prototype.toString.call(J).slice(8,-1);if(_==="Object"&&J.constructor&&(_=J.constructor.name),_==="Map"||_==="Set")return Array.from(J);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return w(J,E)}}function w(J,E){(E==null||E>J.length)&&(E=J.length);for(var _=0,r=new Array(E);_<E;_++)r[_]=J[_];return r}function ee(J,E){var _=J==null?null:typeof Symbol!="undefined"&&J[Symbol.iterator]||J["@@iterator"];if(_!=null){var r=[],t=!0,I=!1,M,ce;try{for(_=_.call(J);!(t=(M=_.next()).done)&&(r.push(M.value),!(E&&r.length===E));t=!0);}catch(be){I=!0,ce=be}finally{try{!t&&_.return!=null&&_.return()}finally{if(I)throw ce}}return r}}function pe(J){if(Array.isArray(J))return J}var me=function(E){var _,r,t,I,M=E.numberOfRows,ce=E.rowsPerPageOptions,be=E.rowsPerPage,ne=E.onRowsPerPageChange,N=E.currentPage,K=E.setCurrentPage,ae=E.descriptionTexts,_e=(0,y.a)("(max-width: "+C.T.BreakpointsSm+")"),Oe=(0,D.useState)(1),Se=b(Oe,2),xe=Se[0],he=Se[1];(0,D.useEffect)(function(){M<be?he(1):he(Math.ceil(M/be))},[be,M]);var Ce=function(){N<xe-1&&K(N+1)},We=function(){N>0&&K(N-1)},Me=function(){var ye=1+N*be,ge=be*(N+1)>M?M:be*(N+1);return(0,$.jsx)("span",{className:v()(c["description-text"]),"data-testid":"description-text",children:ye+"-"+ge+" "+ae.of+" "+M})};return(0,$.jsxs)("div",{className:v()(c["pagination-wrapper"]),children:[(0,$.jsxs)("div",{className:v()(c["pagination-wrapper-row"]),children:[(0,$.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!_e&&ae.rowsPerPage}),(0,$.jsx)("select",{className:v()(c["select-pagination"]),value:be,onChange:function(ye){return ne(ye)},"aria-labelledby":"number-of-rows-select",children:ce.map(function(Re){return(0,$.jsx)("option",{value:Re,children:Re},Re)})}),Me()]}),(0,$.jsxs)("div",{className:v()(c["pagination-wrapper-row"]),children:[(0,$.jsx)("button",{className:v()(c["icon-button"]),onClick:function(){return K(0)},disabled:N===0,"aria-label":ae.navigateFirstPage,"data-testid":"first-page-icon",children:(0,$.jsx)(se,{className:v()(c["pagination-icon"],(_={},_[c["pagination-icon--disabled"]]=N===0,_))})}),(0,$.jsx)("button",{className:v()(c["icon-button"]),onClick:function(){return We()},disabled:N===0,"aria-label":ae.previousPage,"data-testid":"pagination-previous-icon",children:(0,$.jsx)(T,{className:v()(c["pagination-icon"],(r={},r[c["pagination-icon--disabled"]]=N===0,r))})}),(0,$.jsx)("button",{className:v()(c["icon-button"]),onClick:function(){return Ce()},disabled:N===xe-1,"aria-label":ae.nextPage,"data-testid":"pagination-next-icon",children:(0,$.jsx)(L,{className:v()(c["pagination-icon"],(t={},t[c["pagination-icon--disabled"]]=N===xe-1,t))})}),(0,$.jsx)("button",{className:v()(c["icon-button"]),onClick:function(){return K(xe-1)},disabled:N===xe-1,"aria-label":ae.navigateLastPage,children:(0,$.jsx)(re,{className:v()(c["pagination-icon"],(I={},I[c["pagination-icon--disabled"]]=N===xe-1,I))})})]})]})};me.displayName="Pagination";try{me.displayName="Pagination",me.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:me.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(J){}},"./src/components/Panel/Panel.tsx":(A,o,e)=>{"use strict";e.d(o,{s:()=>L,c:()=>c});var s=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),n=e.n(O),i=e("./src/DesignTokens/index.ts"),d=e("./src/hooks/useMediaQuery.ts"),q,F,Z;function x(){return x=Object.assign?Object.assign.bind():function(g){for(var p=1;p<arguments.length;p++){var B=arguments[p];for(var T in B)Object.prototype.hasOwnProperty.call(B,T)&&(g[T]=B[T])}return g},x.apply(this,arguments)}var X=function(p){return s.createElement("svg",x({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),q||(q=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),F||(F=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),Z||(Z=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},W,f,D;function l(){return l=Object.assign?Object.assign.bind():function(g){for(var p=1;p<arguments.length;p++){var B=arguments[p];for(var T in B)Object.prototype.hasOwnProperty.call(B,T)&&(g[T]=B[T])}return g},l.apply(this,arguments)}var v=function(p){return s.createElement("svg",l({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),W||(W=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),f||(f=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),D||(D=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(y),h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),m={};m.insert="head",m.singleton=!1;var u=C()(h.Z,m);const a=h.Z.locals||{};var j=e("./node_modules/react/jsx-runtime.js"),c;(function(g){g.Success="success",g.Info="info",g.Warning="warning",g.Error="error"})(c||(c={}));var S=function(p){var B=p.size,T=p.variant;switch(T){case c.Info:case c.Error:case c.Warning:return(0,j.jsx)(X,{style:{width:B,height:B},"data-testid":"panel-icon-info"});case c.Success:return(0,j.jsx)(v,{style:{width:B,height:B},"data-testid":"panel-icon-success"})}},R=function(p){var B=p.forceMobileLayout,T=(0,d.a)("(max-width: "+i.T.BreakpointsSm+")");return B?!0:T},P=function(p){var B=p.children;return(0,j.jsx)("div",{className:n()(a["panel__pointer-position"]),children:B})};P.displayName="defaultRenderArrow";var L=function(p){var B,T=p.renderIcon,z=T===void 0?S:T,H=p.title,se=p.children,ue=p.variant,le=ue===void 0?c.Info:ue,de=p.showPointer,re=de===void 0?!1:de,$=p.showIcon,b=$===void 0?!0:$,U=p.forceMobileLayout,Y=U===void 0?!1:U,w=p.renderArrow,ee=w===void 0?P:w,pe=R({forceMobileLayout:Y}),me=pe?i.T.ComponentPanelSizeIconXs:i.T.ComponentPanelSizeIconMd;return(0,j.jsxs)("div",{className:n()(a.panel,(B={},B[a["panel--mobile-layout"]]=pe,B)),children:[re&&ee({children:(0,j.jsx)("div",{"data-testid":"panel-pointer",className:n()(a.panel__pointer,a["panel__pointer--"+le])})}),(0,j.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(a["panel__content-wrapper"],a["panel__content-wrapper--"+le]),children:[b&&(0,j.jsx)("div",{"data-testid":"panel-icon-wrapper",className:a["panel__icon-wrapper"],children:z({size:me,variant:le})}),(0,j.jsxs)("div",{className:a.panel__content,children:[H&&(0,j.jsx)("h2",{className:a.panel__header,children:H}),(0,j.jsx)("div",{className:a.panel__body,children:se})]})]})]})};L.displayName="Panel";try{L.displayName="Panel",L.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:L.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(g){}},"./src/components/RadioButton/RadioButton.tsx":(A,o,e)=>{"use strict";e.d(o,{E:()=>y,j:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),q=e.n(d),F=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(Z),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css"),W={};W.insert="head",W.singleton=!1;var f=x()(X.Z,W);const D=X.Z.locals||{};var l=e("./node_modules/react/jsx-runtime.js"),v;(function(C){C.Xsmall="xsmall",C.Small="small"})(v||(v={}));var y=function(h){var m=h.checked,u=h.description,a=h.disabled,j=h.error,c=h.hideLabel,S=h.label,R=h.name,P=h.onChange,L=h.presentation,g=h.radioId,p=h.size,B=p===void 0?v.Small:p,T=h.value;return(0,l.jsx)(F.f,{checked:m,className:q()(D["altinn-radio"],D["altinn-radio--"+B],m&&D["altinn-radio--checked"],j&&D["altinn-radio--error"],a&&D["altinn-radio--disabled"]),description:u,disabled:a,hideLabel:c,inputId:g,label:S,name:R,onChange:P,presentation:L,size:B===v.Xsmall?F.b.Xsmall:F.b.Small,type:"radio",value:T,children:(0,l.jsx)("span",{className:D["altinn-visible-button"],children:(0,l.jsx)("span",{className:D["altinn-visible-button__checkmark"]})})})};y.displayName="RadioButton";try{y.displayName="RadioButton",y.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:y.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(C){}},"./src/components/RadioButton/index.ts":(A,o,e)=>{"use strict";e.d(o,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(A,o,e)=>{"use strict";e.d(o,{P:()=>r});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),q=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),j=e("./node_modules/classnames/index.js"),c=e.n(j),S=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),R=e("./src/components/_InputWrapper/index.ts"),P=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(P),g=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css"),p={};p.insert="head",p.singleton=!1;var B=L()(g.Z,p);const T=g.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js"),H=function(I){var M=I.deleteButtonLabel,ce=I.disabled,be=I.onDeleteButtonClick,ne=I.label;return(0,z.jsxs)("span",{className:T["altinn-multi-select-item"],children:[(0,z.jsx)("span",{children:ne}),(0,z.jsx)("button",{"aria-label":M,className:T["altinn-multi-select-item__delete-button"],disabled:ce,onClick:be,children:(0,z.jsx)("span",{className:T["altinn-multi-select-item__delete-button__cross"]})})]})};H.displayName="MultiSelectItem";try{H.displayName="MultiSelectItem",H.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:H.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(t){}var se=e("./src/hooks/index.ts"),ue=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css"),le={};le.insert="head",le.singleton=!1;var de=L()(ue.Z,le);const re=ue.Z.locals||{};function $(t){return Y(t)||U(t)||pe(t)||b()}function b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Y(t){if(Array.isArray(t))return me(t)}function w(t,I){return E(t)||J(t,I)||pe(t,I)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,I){if(!!t){if(typeof t=="string")return me(t,I);var M=Object.prototype.toString.call(t).slice(8,-1);if(M==="Object"&&t.constructor&&(M=t.constructor.name),M==="Map"||M==="Set")return Array.from(t);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return me(t,I)}}function me(t,I){(I==null||I>t.length)&&(I=t.length);for(var M=0,ce=new Array(I);M<I;M++)ce[M]=t[M];return ce}function J(t,I){var M=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(M!=null){var ce=[],be=!0,ne=!1,N,K;try{for(M=M.call(t);!(be=(N=M.next()).done)&&(ce.push(N.value),!(I&&ce.length===I));be=!0);}catch(ae){ne=!0,K=ae}finally{try{!be&&M.return!=null&&M.return()}finally{if(ne)throw K}}return ce}}function E(t){if(Array.isArray(t))return t}var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},r=function(I){var M=I.disabled,ce=I.error,be=I.hideLabel,ne=I.inputId,N=I.label,K=I.multiple,ae=I.onChange,_e=I.options,Oe=I.value,Se=_e.map(function(ke){return ke.value});if(Se.length!==new Set(Se).size)throw Error("Each value in the option list must be unique.");var xe=(0,a.useState)(K?Oe!=null?Oe:[]:[]),he=w(xe,2),Ce=he[0],We=he[1],Me=(0,a.useState)(K?void 0:Oe),Re=w(Me,2),ye=Re[0],ge=Re[1],V=_e.findIndex(function(ke){return ke.value===ye}),fe=(0,a.useState)(!1),je=w(fe,2),Ie=je[0],Te=je[1];(0,se.OR)("click",function(){return Te(!1)}),(0,se.OR)("keydown",function(){return Te(!0)});var Ke=(0,a.useState)(!1),Be=w(Ke,2),He=Be[0],Ve=Be[1],tn=(0,a.useRef)(null),$e=(0,a.useRef)(null);(0,a.useEffect)(function(){var ke=tn.current;if(ke){var Pe=ke.offsetHeight,Fe=ke.getElementsByTagName("li")[0].offsetHeight,qe=ke.scrollTop,Ge=qe+Pe,Je=V*Fe,Tn=Je+Fe,hn=Je>=qe&&Tn<=Ge;hn||(Je<qe?ke.scrollTop=Je:ke.scrollTop=Tn-Pe)}},[V]);var un=function(Pe){var Fe;return(Fe=_e.find(function(qe){return qe.value===Pe}))!==null&&Fe!==void 0?Fe:{label:"",value:""}},sn=function(Pe,Fe){Ce!=null&&Ce.length||ge(Fe),We(Pe),ae&&ae(Pe)},mn=function(Pe){ge(Pe),Ve(!1),ae&&ae(Pe)},dn=function(Pe){K?Ce.includes(Pe)?cn(Pe):sn([].concat($(Ce),[Pe]),Pe):mn(Pe)},cn=function(Pe){sn(Ce.filter(function(Fe){return Fe!==Pe}),Pe)},Xe=function(){sn([])},on=(0,a.useCallback)(function(){if(ye===void 0)ge(_e[0].value);else{var ke=V+1;ke>=0&&ke<_e.length&&ge(_e[ke].value)}Ve(!0)},[ye,V,ge,_e]),rn=(0,a.useCallback)(function(){if(ye===void 0)ge(_e[_e.length-1].value);else{var ke=V-1;ke>=0&&ke<_e.length&&ge(_e[ke].value)}Ve(!0)},[ye,V,ge,_e]);(0,se.OG)(_.ArrowDown,function(){return He&&on()}),(0,se.OG)(_.ArrowUp,function(){return He&&rn()}),(0,se.OG)(_.Enter,function(){return He&&K&&ye&&dn(ye)});var an=function(Pe){return ye===Pe},pn=function(Pe){return K?Ce.includes(Pe):an(Pe)},Sn=(0,a.useId)(),En=$e.current?"calc("+$e.current.offsetWidth+"px + 2 * "+S.component.input.border_width.default.value+")":void 0;return(0,z.jsxs)("div",{className:c()(re["altinn-select"],re["altinn-select--"+(K?"multiple":"single")],He&&re["altinn-select--expanded"],M&&re["altinn-select--disabled"],Ie&&re["altinn-select--using-keyboard"]),"data-testid":"select-root",children:[(0,z.jsx)(R.SP,{disabled:M,inputId:ne,inputRenderer:function(Pe){var Fe=Pe.className,qe=Pe.inputId;return(0,z.jsxs)("span",{className:c()(Fe,re["altinn-select__field"]),ref:$e,children:[K&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{className:re["altinn-select--multiple__field__values"],children:Ce.map(un).map(function(Ge){return(0,z.jsx)(H,{deleteButtonLabel:Ge.deleteButtonLabel,disabled:M!=null?M:!1,label:Ge.label,onDeleteButtonClick:function(){return cn(Ge.value)}},Ge.value)})}),(0,z.jsx)("button",{"aria-label":I.deleteButtonLabel,className:re["altinn-select--multiple__field__delete-button"],disabled:!Ce.length||M,onClick:function(){return Xe()},children:(0,z.jsx)("span",{className:re["altinn-select--multiple__field__delete-button__cross"]})})]}),(0,z.jsxs)("button",{"aria-controls":Sn,"aria-expanded":He,"aria-label":N,className:re["altinn-select__field__button"],disabled:M,id:qe,onBlur:function(){return Ve(!1)},onClick:function(){return Ve(!He)},onKeyDown:function(Je){Object.values(_).includes(Je.key)&&(Je.preventDefault(),Ve(!0))},role:"combobox",value:K?Ce:ye,children:[!K&&(0,z.jsx)("span",{className:re["altinn-select--single__field__value"],children:un(ye).label}),(0,z.jsx)("span",{className:re["altinn-select__field__arrow-wrapper"],children:(0,z.jsx)("span",{className:re["altinn-select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!ce,label:be?void 0:N,noFocusEffect:K,noPadding:!0,readOnly:!1}),(0,z.jsx)("ul",{className:re["altinn-select__option-list"],id:Sn,ref:tn,role:"listbox",style:{width:En},children:_e.map(function(ke){return(0,z.jsx)("li",{"aria-selected":pn(ke.value),className:c()(re["altinn-select__option-list__option"],pn(ke.value)&&re["altinn-select__option-list__option--selected"],K&&an(ke.value)&&re["altinn-select--multiple__option-list__option--focused"]),onClick:function(){return dn(ke.value)},onMouseDown:function(Fe){return Fe.preventDefault()},onKeyDown:function(Fe){return Fe.preventDefault()},role:"option",value:ke.value,children:ke.label},ke.value)})})]})};r.displayName="Select";try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:r.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(t){}},"./src/components/SvgIcon/index.ts":(A,o,e)=>{"use strict";e.d(o,{l:()=>x});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e("./node_modules/react/index.js"),q=["svgIconComponent"];function F(X,W){if(X==null)return{};var f=Z(X,W),D,l;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(X);for(l=0;l<v.length;l++)D=v[l],!(W.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(X,D)||(f[D]=X[D]))}return f}function Z(X,W){if(X==null)return{};var f={},D=Object.keys(X),l,v;for(v=0;v<D.length;v++)l=D[v],!(W.indexOf(l)>=0)&&(f[l]=X[l]);return f}var x=function(W){var f=W.svgIconComponent,D=F(W,q);return(0,d.isValidElement)(f)?(0,d.cloneElement)(f,Object.assign({},D)):null};try{x.displayName="SvgIcon",x.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:x.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(X){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(A,o,e)=>{"use strict";e.d(o,{f:()=>v,b:()=>l});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),q=e.n(d),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Z=e.n(F),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),X={};X.insert="head",X.singleton=!1;var W=Z()(x.Z,X);const f=x.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),l;(function(y){y.Xsmall="xsmall",y.Small="small"})(l||(l={}));var v=function(C){var h=C.checked,m=C.children,u=C.className,a=C.description,j=C.disabled,c=C.hideInput,S=C.hideLabel,R=C.inputId,P=C.label,L=C.name,g=C.onChange,p=C.presentation,B=C.size,T=C.type,z=C.value,H=(0,i.useId)(),se=R!=null?R:"input-"+H,ue=P?se+"-label":void 0,le=a?se+"-description":void 0,de=P&&!S;return(0,D.jsxs)("label",{className:q()(f["altinn-template"],f["altinn-template--"+B],j&&f["altinn-template--disabled"],u),htmlFor:R,children:[!c&&(0,D.jsxs)("span",{className:f["altinn-template__input-wrapper"],children:[(0,D.jsx)("input",{"aria-describedby":le,"aria-label":!de&&typeof P=="string"?P:void 0,"aria-labelledby":de?ue:void 0,checked:h!=null?h:!1,className:f["altinn-template__input-wrapper__input"],disabled:j,id:se,name:L,onChange:j?void 0:g,role:p?"presentation":void 0,type:T,value:z}),(0,D.jsx)("span",{className:f["altinn-template__input-wrapper__visible-box"],children:m})]}),(de||a)&&(0,D.jsxs)("span",{className:f["altinn-template__label-and-description"],children:[de&&(0,D.jsx)("span",{className:f["altinn-template__label-and-description__label"],id:ue,children:P}),a&&(0,D.jsx)("span",{className:f["altinn-template__label-and-description__description"],id:le,children:a})]})]})};v.displayName="CheckboxRadioTemplate";try{v.displayName="CheckboxRadioTemplate",v.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:v.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(y){}},"./src/components/_InputWrapper/index.ts":(A,o,e)=>{"use strict";e.d(o,{SP:()=>j,Hx:()=>d});var s=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),n=e.n(O),i;(function(c){c.Default="default",c.Error="error",c.Disabled="disabled",c.ReadOnlyInfo="readonly-info",c.ReadOnlyConfirm="readonly-confirm"})(i||(i={}));var d;(function(c){c.ReadOnlyInfo="readonly-info",c.ReadOnlyConfirm="readonly-confirm"})(d||(d={}));var q;(function(c){c.None="none",c.Error="error",c.Search="search"})(q||(q={}));var F=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=S.readOnly,P=R===void 0?!1:R,L=S.disabled,g=L===void 0?!1:L,p=S.isValid,B=p===void 0?!0:p,T=S.isSearch,z=T===void 0?!1:T,H=q.None;return z&&(H=q.Search),g?{variant:i.Disabled,iconVariant:H}:P===!0||P===d.ReadOnlyInfo?{variant:i.ReadOnlyInfo,iconVariant:H}:P===d.ReadOnlyConfirm?{variant:i.ReadOnlyConfirm,iconVariant:H}:B===!1?{variant:i.Error,iconVariant:q.Error}:{variant:i.Default,iconVariant:H}},Z;function x(){return x=Object.assign?Object.assign.bind():function(c){for(var S=1;S<arguments.length;S++){var R=arguments[S];for(var P in R)Object.prototype.hasOwnProperty.call(R,P)&&(c[P]=R[P])}return c},x.apply(this,arguments)}var X=function(S){return s.createElement("svg",x({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},S),Z||(Z=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},W;function f(){return f=Object.assign?Object.assign.bind():function(c){for(var S=1;S<arguments.length;S++){var R=arguments[S];for(var P in R)Object.prototype.hasOwnProperty.call(R,P)&&(c[P]=R[P])}return c},f.apply(this,arguments)}var D=function(S){return s.createElement("svg",f({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},S),W||(W=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),v=e.n(l),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),C={};C.insert="head",C.singleton=!1;var h=v()(y.Z,C);const m=y.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js"),a=function(S){var R=S.variant,P=S.disabled,L=P===void 0?!1:P;if(R===q.Error)return(0,u.jsx)("div",{className:m.InputWrapper__icon,children:(0,u.jsx)(X,{"data-testid":"input-icon-error"})});if(R===q.Search){var g;return(0,u.jsx)("div",{className:n()(m.InputWrapper__icon,(g={},g[m["InputWrapper__icon--disabled"]]=L,g)),children:(0,u.jsx)(D,{"data-testid":"input-icon-search"})})}return null};try{a.displayName="Icon",a.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:a.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(c){}var j=function(S){var R,P=S.isValid,L=P===void 0?!0:P,g=S.disabled,p=g===void 0?!1:g,B=S.readOnly,T=B===void 0?!1:B,z=S.isSearch,H=z===void 0?!1:z,se=S.label,ue=S.inputId,le=S.inputRenderer,de=S.noFocusEffect,re=S.noPadding,$=(0,s.useId)(),b=ue!=null?ue:$,U=F({readOnly:T,disabled:p,isValid:L,isSearch:H}),Y=U.variant,w=U.iconVariant;return(0,u.jsxs)(u.Fragment,{children:[se&&(0,u.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(m.InputWrapper__label),htmlFor:b,children:se}),(0,u.jsxs)("div",{"data-testid":"InputWrapper",className:n()(m.InputWrapper,m["InputWrapper--"+Y],(R={},R[m["InputWrapper--search"]]=H,R[m["InputWrapper--with-focus-effect"]]=!de,R[m["InputWrapper--with-padding"]]=!re,R)),children:[(0,u.jsx)(a,{variant:w,disabled:p}),le({className:m.InputWrapper__field,inputId:b,variant:Y})]})]})};try{j.displayName="InputWrapper",j.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:j.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(c){}},"./src/hooks/index.ts":(A,o,e)=>{"use strict";e.d(o,{OR:()=>O,OG:()=>n,D9:()=>i,PQ:()=>d});var s=e("./node_modules/react/index.js");function O(q,F){(0,s.useEffect)(function(){return document.addEventListener(q,F),function(){return document.removeEventListener(q,F)}},[q,F])}function n(q,F){(0,s.useEffect)(function(){var Z=function(X){X.key===q&&F()};return document.addEventListener("keydown",Z),function(){return document.removeEventListener("keydown",Z)}},[q,F])}function i(q){var F=(0,s.useRef)();return(0,s.useEffect)(function(){F.current=q},[q]),F.current}var d=function(F,Z){var x=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(x.current)x.current=!1;else return F()},Z)}},"./src/hooks/useMediaQuery.ts":(A,o,e)=>{"use strict";e.d(o,{a:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),Z=e.n(F),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e.n(x),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e.n(W),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(D),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e.n(v),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e.n(C),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e.n(a),c=e("./node_modules/react/index.js");function S(T,z){return p(T)||g(T,z)||P(T,z)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(T,z){if(!!T){if(typeof T=="string")return L(T,z);var H=Object.prototype.toString.call(T).slice(8,-1);if(H==="Object"&&T.constructor&&(H=T.constructor.name),H==="Map"||H==="Set")return Array.from(T);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return L(T,z)}}function L(T,z){(z==null||z>T.length)&&(z=T.length);for(var H=0,se=new Array(z);H<z;H++)se[H]=T[H];return se}function g(T,z){var H=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(H!=null){var se=[],ue=!0,le=!1,de,re;try{for(H=H.call(T);!(ue=(de=H.next()).done)&&(se.push(de.value),!(z&&se.length===z));ue=!0);}catch($){le=!0,re=$}finally{try{!ue&&H.return!=null&&H.return()}finally{if(le)throw re}}return se}}function p(T){if(Array.isArray(T))return T}function B(T){var z=function($){var b,U;return(b=(U=window)===null||U===void 0?void 0:U.matchMedia($).matches)!==null&&b!==void 0?b:!1},H=(0,c.useState)(z(T)),se=S(H,2),ue=se[0],le=se[1],de=function(){le(z(T))};return(0,c.useEffect)(function(){var re=window.matchMedia(T);return de(),re.addEventListener("change",de),function(){return re.removeEventListener("change",de)}},[T]),ue}},"./src/utils/arrayUtils.ts":(A,o,e)=>{"use strict";e.d(o,{cO:()=>W,zb:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),O=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),q=e.n(d),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Z=e.n(F),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),X=e.n(x);function W(l,v){if(l===v)return!0;if(l===void 0||v===void 0||l.length!==v.length)return!1;for(var y in l)if(l[y]!==v[y])return!1;return!0}function f(l){return l[l.length-1]}function D(l){return l.length===new Set(l).size}},"./storybook-init-framework-entry.js":(A,o,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.tyMY32TvkHDF8ZcennN\\+rw\\=\\= {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),n.locals={accordion:"tyMY32TvkHDF8ZcennN+rw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.AYJEVhVUCPNhIkdoY9L8Qw\\=\\= {
  width: 80vw;
}
`,""]),n.locals={container:"AYJEVhVUCPNhIkdoY9L8Qw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.bHJmGU5sUxKWla0mf2uWjg\\=\\= {
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
    font-size: 1.4rem;
    display: block;
  }
  .Ei7ai3cperzTatRVCUKEiA\\=\\= {
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 0.3rem;
  }
}

._2GCHs-3akoZ4nQ3ykkw6dg\\=\\= {
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

._91wKOkVBUdGPK4QUEykiYw\\=\\= {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0 0.3rem;
}
`,""]),n.locals={"accordion-header":"bHJmGU5sUxKWla0mf2uWjg==","accordion-header__subtitle":"R-AQdDhQHxYTukb-nSP9Aw==","accordion-header--subtitle":"Ei7ai3cperzTatRVCUKEiA==","accordion-header__title":"_2GCHs-3akoZ4nQ3ykkw6dg==","accordion-header__actions":"_91wKOkVBUdGPK4QUEykiYw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.XavJEiuidDgCiNx4DoHhSw\\=\\= {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

._2lKbkok1eRn8cgFFv33ggQ\\=\\= {
  transform: rotate(90deg);
}
`,""]),n.locals={"accordion-icon":"XavJEiuidDgCiNx4DoHhSw==","accordion-icon--opened":"_2lKbkok1eRn8cgFFv33ggQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),n.push([A.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Rpukn9xRQJNHk-d00DYJZA\\=\\= {
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
`,""]),n.locals={"altinn-button":"Rpukn9xRQJNHk-d00DYJZA==",icon:"lzTFhKYYpZ6oOQYy7Ny15g==","altinn-button--small":"b56IqUPa8YtxEadvuN2s-g==","altinn-button--medium":"_67qzBbLNVwbEP2lGy72-Qw==","altinn-button--large":"_6-qcO3o6q0r9zr8jtwItqg==","altinn-button--full-width":"+dhr5mVGT98wPGvYdXqIIA==","altinn-button--dashed-border":"tGLwJ8ARxqRjqOJbLDxoeA==","altinn-button--only-icon":"juBmDuE28ovhDWACwh1BLA==","altinn-button--filled":"hMMZZ4eEilsaZmFZMnl8Sw==","altinn-button--outline":"-bPQQb0fsaCuGPqcUqNSEw==","altinn-button--quiet":"S7HTWmb8rvOx0PUk7QsxAg==","altinn-button--filled--primary":"pt9axdbF1+PvpS4lcPIt6g==","altinn-button--filled--secondary":"NAcapYB98eU7XEYhkckOXA==","altinn-button--filled--success":"EhPlDMHjMlU61ZlNzLPi2g==","altinn-button--filled--danger":"sw8kQjlsGPicR0raq+qeIA==","altinn-button--filled--inverted":"VIMerYm5yDrmH4Jn9Jlv8g==","altinn-button--outline--primary":"+-xr4oxvOaD1fIsYPtxmzQ==","altinn-button--outline--secondary":"fzmuATwPYJsZLHXpjdSYng==","altinn-button--outline--success":"-OvzVIoYMaALV5ZxPRa+Fw==","altinn-button--outline--danger":"GUgW3At90ZCp8coB4b6LBA==","altinn-button--outline--inverted":"TiXNfUBQGuJ9-7Xny83EDQ==","altinn-button--quiet--primary":"hUtYKXtR3xvGo1ltn7pzDQ==","altinn-button--quiet--secondary":"qlazmgHMDYc49tO4DqyqvA==","altinn-button--quiet--success":"U4Qgq7tcMLu9pjaRS4YH4Q==","altinn-button--quiet--danger":"zBi+ljk7FW9ThAlMpYvd5A==","altinn-button--quiet--inverted":"uSecvfY7ysZ05KTW4bZjQg=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._6cvF3VAbKtNmrdGxCUV8BA\\=\\= {
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
`,""]),n.locals={"altinn-checkbox":"_6cvF3VAbKtNmrdGxCUV8BA==","altinn-checkbox--compact":"_7zf2ATnLewY2YbGJG3kVBA==","altinn-checkbox--error":"NivKAZL4V+7F1RlnG3imJA==","altinn-checkbox--checked":"-Iyc0jAUikLmGhLX20VTYw==","altinn-checkbox--disabled":"WNrg3FUVIEKurYXV8rqmDA==","altinn-checkbox--read-only":"NC5gUZmpyIfxbbwGYK8bYw==","altinn-visible-box":"-5WMbVDfVXd4lKKAGQmh0A==","altinn-visible-box__checkmark":"W6NYQiBqa4fDAYmBwSL0zQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.QG9cxeNUql-KOCXlDEvm7w\\=\\= {
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
`,""]),n.locals={"altinn-checkbox-group":"QG9cxeNUql-KOCXlDEvm7w==","altinn-checkbox-group--compact":"HTv5-q0A4T-TzQsD9aXNJg==","altinn-checkbox-group--vertical":"IkHC5tBY9XQPN3ZtUwT9Pw==","altinn-checkbox-group--horizontal":"ifL1EO087Crq-ngEheO0nA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.NTqKTbIBK1CSNC8WbgbZ7Q\\=\\= {
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
`,""]),n.locals={svg:"NTqKTbIBK1CSNC8WbgbZ7Q==",circleTransition:"WH18iHRFnpU4UnExhNnc+A==",container:"nAJVyVZi6iBoq6RpO2qgAg==",label:"_12tl+lgdk2k7GREN6Fu52A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.IoZCSKoS7L1bZ82J1gYNlw\\=\\= {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),n.locals={"altinn-error-message-wrapper":"IoZCSKoS7L1bZ82J1gYNlw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.UNESAQpZG6tzsRbdm8\\+Vbg\\=\\= {
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
`,""]),n.locals={"altinn-field-set":"UNESAQpZG6tzsRbdm8+Vbg==","altinn-field-set--xsmall":"JZAkFzQ6g7vJjQqcYxD5tw==","altinn-field-set__legend":"QINSYREYKZyvy5XKaWqiZQ==","altinn-field-set__description":"Q5iUTDYGwtxoKymuXMlLPQ==","altinn-field-set__content":"Fs2jaEIJ0JQJMvBCwOt7pw==","altinn-field-set__error-message":"rIAGXHT9wNLIBLYV6VsqYA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.kVxFDkDp1WiqFARNx40efA\\=\\= {
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
`,""]),n.locals={list:"kVxFDkDp1WiqFARNx40efA==","list--solid":"N9NwN7tigj3zhHV6vAI1Yg==","list--dashed":"_1OjGKU1AWWv4onZHVy8gMg=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.PFSVXvkixjcwfiBNWK-KGw\\=\\= {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .PFSVXvkixjcwfiBNWK-KGw\\=\\= {
    width: 300px;
  }
}
`,""]),n.locals={container:"PFSVXvkixjcwfiBNWK-KGw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.kEMtpd0vDKSFN8sg4Zat8w\\=\\= {
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
`,""]),n.locals={"list-item":"kEMtpd0vDKSFN8sg4Zat8w==","list-item--solid":"PM38trUJ7HE3lYjM1aAEKQ==","list-item--dashed":"ayTZ1Tz-7hmw9Xr8jgrg1A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.FtDdsbEAM33qIgoRUszLaA\\=\\= {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),n.locals={map:"FtDdsbEAM33qIgoRUszLaA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Mbb3fzMlklC4bB5nt8fvgQ\\=\\= {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),n.locals={page:"Mbb3fzMlklC4bB5nt8fvgQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.w0djuOyMj4iJjw\\+xnbxnBQ\\=\\= {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),n.locals={"page-content":"w0djuOyMj4iJjw+xnbxnBQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.-beL2kFpvp7WDWkJr8TBZg\\=\\= {
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
`,""]),n.locals={"page-header":"-beL2kFpvp7WDWkJr8TBZg==","page-header--primary":"AluzwyTlCuv1MlVQSq3Muw==","page-header--success":"yBWULdwIkJV8mVakLU6sFg==","page-header--small":"qGezCOaw+0uJJRA-y33ITw==","page-header--medium":"FNIUvKff1lwZLEaoDsSTDQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._3GFSutpV5Q6iwd5VMJPC3A\\=\\= {
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
`,""]),n.locals={"pagination-icon":"_3GFSutpV5Q6iwd5VMJPC3A==","pagination-icon--disabled":"CN4Pm94YHEsSqZ1j8D3CiA==","pagination-wrapper":"bi-VW11-SL2+iaKLszbuoQ==","icon-button":"eMU9U091xipg7kcuaHFu4A==","description-text":"msPRefgGC7JcQ89NocZN3A==","select-pagination":"N9aaKkJuHiCfcKiq+DM0kw==","pagination-wrapper-row":"RjVcmiVd2eJ7i+jH6NM6TA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`/* breakpoints-xs */
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
`,""]),n.locals={panel:"MW7PdvFCawKtIQQHk3x5sg==","panel--mobile-layout":"qMT1T6jZgyJjy+I32MZxyQ==",panel__pointer:"o1T9Q-usoqoUrOKBuFEstQ==","panel__pointer-position":"F-KinNeKbdcHeD0RghFn9Q==","panel__content-wrapper--info":"rbNO4rIwAvCwzM5qWDUYpg==","panel__pointer--info":"ac6w0wPOe4kWKKQIifG1Tw==","panel__content-wrapper--success":"zJu6Pkw2NTwhvG7Hqt25bQ==","panel__pointer--success":"L1AquKxZ517XcsNuewb4mg==","panel__content-wrapper--warning":"ELA7lcORz+i33bObgz2PEw==","panel__pointer--warning":"n7s3uIGJPyPYbNnirnZfFA==","panel__content-wrapper--error":"_2iiSnaDHm5arMnAht-1DDQ==","panel__pointer--error":"dy6s038ahAHiK0Z1EyznxQ==","panel__content-wrapper":"Bk+XnsOtij3t6WYERRepdA==","panel__icon-wrapper":"_7prLoCg4WYXIPP6qgno08Q==",panel__content:"FvFqL5PWy41YkIoFK7400Q==",panel__header:"MiyICMpVyox-tuL1Dsam9A==",panel__body:"I0pabCH9JQdqnqc9I8+g4w=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.ZeFGEoQClriUQ\\+sLw2IV0w\\=\\= {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.VgdMACBeJXZzPwgo5w-ZCQ\\=\\= {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),n.locals={"popover-panel":"ZeFGEoQClriUQ+sLw2IV0w==","popover-panel__arrow":"VgdMACBeJXZzPwgo5w-ZCQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.aCyf9pLPzAc2ihOkfdX6mg\\=\\= {
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
`,""]),n.locals={"altinn-radio":"aCyf9pLPzAc2ihOkfdX6mg==","altinn-radio--small":"G5DknHbm2gY8qyW7ka08mA==","altinn-radio--xsmall":"Wsp9kJpqCtIJi8A9wpPveg==","altinn-radio--error":"qGp1OLfUJvxGIcspJSQb2w==","altinn-radio--checked":"kZO1bWGJxsIMKqodsCIQmQ==","altinn-radio--disabled":"kpe-8Y8p9ilWtjGronrBTA==","altinn-visible-button":"ijsYw-qgj-WTqjKTio511g==","altinn-visible-button__checkmark":"B8HlxHUrk1KbARim9bW1WQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.MN6Y5mhFQeWsEXfCvD\\+6VA\\=\\= {
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
`,""]),n.locals={"altinn-radio-group":"MN6Y5mhFQeWsEXfCvD+6VA==","altinn-radio-group--xsmall":"_4zSpufD2m729yFWGS1z6Mw==","altinn-radio-group--small":"FU77E504KM4-4r9-laSZgw==","altinn-radio-group--vertical":"QMwckwqxNOSCItawTIFMMg==","altinn-radio-group--horizontal":"wLJnhoPCdgedceZbDul89g=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Py6qc\\+IKr0LPRaVvFzU8Fg\\=\\= {
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
`,""]),n.locals={"altinn-multi-select-item":"Py6qc+IKr0LPRaVvFzU8Fg==","altinn-multi-select-item__delete-button":"_7oB+fUJQtt-DeqqgAsJmsA==","altinn-multi-select-item__delete-button__cross":"OcBogzyFW9oQeQqeCghLhw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.R2LoWFP9\\+fPxBI2eaLLicg\\=\\= {
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
`,""]),n.locals={"altinn-select":"R2LoWFP9+fPxBI2eaLLicg==","altinn-select--disabled":"vqFw-69e9qNv1MXnj0Wdsw==","altinn-select--expanded":"vQptyzjDO02r7nf7YJkoQg==","altinn-select__option-list":"slRIrBGrImDEa7PGPkxlDQ==","altinn-select--using-keyboard":"JyLC12fK-4C6aoj5YlqyaA==","altinn-select__field__button":"YInBaD0x4XXpv4Cic9LvJw==","altinn-select__field":"MUBtlKh6-5e6gPL2BaYHXQ==","altinn-select--multiple":"P-rQCIn6O68k9uFNyYNFJw==","altinn-select--single":"VmrXZU7ZmpU4cw-pPNpfeA==","altinn-select--single__field__value":"WkEA3Y8HYuiEEMbdjGqH4Q==","altinn-select--multiple__field__values":"NOu8xg3WM9OlBs8ufOmr0A==","altinn-select__field__arrow-wrapper":"OMcDJMTnBIm+iWDL4qmAng==","altinn-select__field__arrow-wrapper__arrow":"cSIarfxHLj6NLsscBd1A8w==","altinn-select--multiple__field__delete-button":"dTF1B6+yzFIk8cN0jABEiA==","altinn-select--multiple__field__delete-button__cross":"b-T-FEYorEaj-2YZdkVrHw==","altinn-select__option-list__option":"vWD2cb-A8mqXZgX3RWW6sA==","altinn-select__option-list__option--selected":"pBkKbqUXVymr5dOx-EQ1eg==","altinn-select--multiple__option-list__option--focused":"_4-U+k6Tn2g8Lse98X+iNkQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`Table {
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
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),n.locals={};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._7IC8ONaKMT4vARNOFE5K5Q\\=\\= {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),n.locals={TableBody:"_7IC8ONaKMT4vARNOFE5K5Q=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.LzDte03f5wXbFrkq12x-PA\\=\\= {
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
`,""]),n.locals={"header-table-cell":"LzDte03f5wXbFrkq12x-PA==","header-table-cell-radiobutton":"NiTfbrfj6xyhW2chbCqPlA==","body-table-cell":"OSEprzp8ecljMivLiVJgRg==","body-table-cell-radiobutton":"_1-zaDxtrX5XZ+3pQQWnMqA==",image:"hIg6aexdd5+sPbM-Mpyrgg==",input:"VkQQnZmMeEHn8KvLo6lKIw==","radio-button":"I7NIpaN9kO7AbEzX84ck7w==","container-sortable":"ySg0u8CGsNQcJMSJguYJFQ==",icon:"kBQAKFeTyP1i2nfY36Gp1A==","icon-desc":"_8kN2-vZhRm91yXWVlcc4Eg==","icon-asc":"cPDdWIF8LIXRIOHZ8WFPfQ==",header:"LQ0LsJkWqygwhcQ-4qWyLA==",property:"_3uS1BrMpoI3lxpN5pw0c1A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.eUOpKqyivgeuU5D\\+tMn8dw\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-footer":"eUOpKqyivgeuU5D+tMn8dw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.j9BLoyPnbvM\\+0hqq3x9F2w\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-header":"j9BLoyPnbvM+0hqq3x9F2w=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.NEGwPcbU97ZVUshvyUGz0w\\=\\= {
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
`,""]),n.locals={TableRow:"NEGwPcbU97ZVUshvyUGz0w==","table-row--selected":"mI9RxXUW8WizpSnWjQyVZQ==","table-row--body":"m825MhHnmjQiRccJ9iL++A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.JuI00pzq\\+rAdSRwc6y5jcw\\=\\= {
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
`,""]),n.locals={"altinn-tabs":"JuI00pzq+rAdSRwc6y5jcw==","altinn-tabs__tablist":"rfwF7zCA44HM3qrs5LQKew==","altinn-tabs__tablist__tab":"_97oEm+qN-2hAoNIiZ37LMQ==","altinn-tabs__tablist__tab--selected":"J+N6WcLVXrh1KiRNcr+wdw==","altinn-tabs__divider":"glGx-MRXIdRvekhewq978g==","altinn-tabs__tabpanel":"POthgVZLT1DWIUnMKkewDw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`._6aPn9FpEvnx2E4o6El8B2Q\\=\\= {
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
`,""]),n.locals={"altinn-TextArea":"_6aPn9FpEvnx2E4o6El8B2Q==","altinn-TextArea--resize-none":"YbBXYRQ7u3-VBr8vtG7AqQ==","altinn-TextArea--resize-both":"Z7e-6oVJt6I4FmaIJYScdQ==","altinn-TextArea--resize-horizontal":"SstdtkQyEbnDFVK6mU3hwA==","altinn-TextArea--resize-vertical":"X-2B2GC4rg4BN-LYzzHjMA=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.okpOXDaGhTmc2MErW9y8ww\\=\\= {
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
`,""]),n.locals={"toggle-button":"okpOXDaGhTmc2MErW9y8ww==","toggle-button--selected":"NbJ+XVl6ovSJIqgxqiA4+A=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.wqtkxDVE9PqFNYigAvOtJw\\=\\= {
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
`,""]),n.locals={"toggle-button-group":"wqtkxDVE9PqFNYigAvOtJw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`/* breakpoints-xs */
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
`,""]),n.locals={container:"FqavDaQxoclcke6-M5jfoQ=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.bFfNQMKg-8OQmtCsMcNi9g\\=\\= {
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
`,""]),n.locals={"altinn-template":"bFfNQMKg-8OQmtCsMcNi9g==","altinn-template--xsmall":"mU47Fm8IkqwzTdeQoHHM0Q==","altinn-template--small":"hyDgcWRUM7D4S5KwjgtkqA==","altinn-template--disabled":"_0eHvtJ7dNaxnqevpN9e-ow==","altinn-template__input-wrapper":"oR4L6MA44pFkRA4NH-xZTA==","altinn-template__input-wrapper__input":"emVeLqbca7sYpqo566uK-w==","altinn-template__input-wrapper__visible-box":"gNfZyXHRTvFaaRl9EqUiQQ==","altinn-template__label-and-description":"JQrGEVwupeQz6Gk5+Co+vA==","altinn-template__label-and-description__label":"u0TO-5OG1esV+LXioV6zHA==","altinn-template__label-and-description__description":"_0Pg8VMrCK1hFaVtJG3mjNw=="};const i=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>i});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),O=e.n(s),n=O()(function(d){return d[1]});n.push([A.id,`.Tj1ST4W8YSAsgzbuva7hWg\\=\\= {
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
`,""]),n.locals={InputWrapper:"Tj1ST4W8YSAsgzbuva7hWg==","InputWrapper--with-focus-effect":"YPGX+n3oPq3FmlOolIhSuA==","InputWrapper--default":"xgN2KlBZysAo6RAulFyMJg==","InputWrapper--error":"_0dxSTcSMr8DEmibPUWGS3A==","InputWrapper--disabled":"JRX5UzEi9DUgnQOK4vlG8w==","InputWrapper--readonly-info":"QGXwuLF-yOEOSRWjF8svnw==","InputWrapper--readonly-confirm":"_5Rk9wVjZh3Acbb7KlNJBMQ==","InputWrapper--search":"KlZzLquUQpf1tRZfegHamg==","InputWrapper--with-padding":"ClxxWyLo77vnr6AKremwFg==",InputWrapper__field:"lBYDUQowZ69aWIEzqk6bcQ==",InputWrapper__icon:"atgQHZ+u6-fmiM4fBFitUQ==","InputWrapper__icon--disabled":"b9sB1X+Rm9Q5fEYCbp0P3g==",InputWrapper__label:"WYOqCIKgmK0BQIynjf5kwA=="};const i=n},"./src/components/Button/Stories/success.svg":(A,o,e)=>{"use strict";e.d(o,{r:()=>q});var s=e("./node_modules/react/index.js"),O,n,i;function d(){return d=Object.assign?Object.assign.bind():function(F){for(var Z=1;Z<arguments.length;Z++){var x=arguments[Z];for(var X in x)Object.prototype.hasOwnProperty.call(x,X)&&(F[X]=x[X])}return F},d.apply(this,arguments)}var q=function(Z){return s.createElement("svg",d({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},Z),O||(O=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),i||(i=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(A,o,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function O(i){var d=n(i);return e(d)}function n(i){if(!e.o(s,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return s[i]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function O(i){var d=n(i);return e(d)}function n(i){if(!e.o(s,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return s[i]}O.keys=function(){return Object.keys(s)},O.resolve=n,A.exports=O,O.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(A,o,e)=>{"use strict";A=e.nmd(A);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],A,!1)}},A=>{var o=s=>A(A.s=s);A.O(0,[339],()=>(o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),o("./storybook-init-framework-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),o("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),o("./.storybook/preview.js-generated-config-entry.js"),o("./generated-stories-entry.cjs")));var e=A.O()}]);
