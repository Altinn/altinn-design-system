(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>I,__page:()=>_,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),z=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),M=e("./node_modules/react/index.js"),O=e("./node_modules/@mdx-js/react/index.js"),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(x){for(var A=1;A<arguments.length;A++){var L=arguments[A];for(var K in L)Object.prototype.hasOwnProperty.call(L,K)&&(x[K]=L[K])}return x},E.apply(this,arguments)}function g(x,A){if(x==null)return{};var L=P(x,A),K,H;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(x);for(H=0;H<J.length;H++)K=J[H],!(A.indexOf(K)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,K)||(L[K]=x[K]))}return L}function P(x,A){if(x==null)return{};var L={},K=Object.keys(x),H,J;for(J=0;J<K.length;J++)H=K[J],!(A.indexOf(H)>=0)&&(L[H]=x[H]);return L}var C={},v="wrapper";function i(x){var A=x.components,L=g(x,h);return(0,O.mdx)(v,E({},C,L,{components:A,mdxType:"MDXLayout"}),(0,O.mdx)(W.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,O.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,O.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,O.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,O.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,O.mdx)("h3",{id:"npm"},"NPM"),(0,O.mdx)("pre",null,(0,O.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,O.mdx)("h3",{id:"yarn"},"Yarn"),(0,O.mdx)("pre",null,(0,O.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,O.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,O.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,O.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,O.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,O.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,O.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,O.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,O.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,O.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,O.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,O.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,O.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,O.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,O.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,O.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,O.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,O.mdx)("ul",null,(0,O.mdx)("li",{parentName:"ul"},(0,O.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,O.mdx)("li",{parentName:"ul"},(0,O.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}i.displayName="MDXContent",i.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Introduksjon",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,O.mdx)(W.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,O.mdx)(i,null))}});const R=S;var I=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>I,__page:()=>_,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),z=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),M=e("./node_modules/react/index.js"),O=e("./node_modules/@mdx-js/react/index.js"),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(x){for(var A=1;A<arguments.length;A++){var L=arguments[A];for(var K in L)Object.prototype.hasOwnProperty.call(L,K)&&(x[K]=L[K])}return x},E.apply(this,arguments)}function g(x,A){if(x==null)return{};var L=P(x,A),K,H;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(x);for(H=0;H<J.length;H++)K=J[H],!(A.indexOf(K)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,K)||(L[K]=x[K]))}return L}function P(x,A){if(x==null)return{};var L={},K=Object.keys(x),H,J;for(J=0;J<K.length;J++)H=K[J],!(A.indexOf(H)>=0)&&(L[H]=x[H]);return L}var C={},v="wrapper";function i(x){var A=x.components,L=g(x,h);return(0,O.mdx)(v,E({},C,L,{components:A,mdxType:"MDXLayout"}),(0,O.mdx)(W.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,O.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,O.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,O.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,O.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,O.mdx)("pre",null,(0,O.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}i.displayName="MDXContent",i.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Components/AppWrapper",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,O.mdx)(W.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,O.mdx)(i,null))}});const R=S;var I=["__page"]},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),f=e("./src/components/AppWrapper/AppWrapper.module.css"),V=e("./node_modules/react/jsx-runtime.js"),z=function(O){var W=O.children;return(0,V.jsx)("div",{children:W})};z.displayName="AppWrapper";try{z.displayName="AppWrapper",z.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:z.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(M){}var j=function(O){var W=O.description;return(0,V.jsxs)(z,{children:[(0,V.jsx)(l.Dx,{}),(0,V.jsx)(l.dk,{children:W}),(0,V.jsx)(l.fQ,{includePrimary:!0}),(0,V.jsx)(l.X6,{children:"Props"}),(0,V.jsx)(l.$4,{story:l.Uh})]})};j.displayName="StoryPage";var w=null;try{j.displayName="StoryPage",j.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:j.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(M){}},"./.storybook/preview.js-generated-config-entry.js":(r,t,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>E,parameters:()=>h});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),M=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/@storybook/theming/dist/esm/index.js"),h={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},W.np.dark),light:Object.assign({},W.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},E=["parameters"],g=e("./node_modules/console-browserify/index.js");function P(i,_){var S=Object.keys(i);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(i);_&&(T=T.filter(function(R){return Object.getOwnPropertyDescriptor(i,R).enumerable})),S.push.apply(S,T)}return S}function C(i){for(var _=1;_<arguments.length;_++){var S=arguments[_]!=null?arguments[_]:{};_%2?P(Object(S),!0).forEach(function(T){v(i,T,S[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(S)):P(Object(S)).forEach(function(T){Object.defineProperty(i,T,Object.getOwnPropertyDescriptor(S,T))})}return i}function v(i,_,S){return _ in i?Object.defineProperty(i,_,{value:S,enumerable:!0,configurable:!0,writable:!0}):i[_]=S,i}Object.keys(s).forEach(function(i){var _=s[i];switch(i){case"args":return(0,M.uc)(_);case"argTypes":return(0,M.v9)(_);case"decorators":return _.forEach(function(T){return(0,M.$9)(T,!1)});case"loaders":return _.forEach(function(T){return(0,M.HZ)(T,!1)});case"parameters":return(0,M.h1)(C({},_),!1);case"argTypesEnhancers":return _.forEach(function(T){return(0,M.My)(T)});case"argsEnhancers":return _.forEach(function(T){return(0,M._C)(T)});case"render":return(0,M.$P)(_);case"globals":case"globalTypes":{var S={};return S[i]=_,(0,M.h1)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return g.log(i+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>le,__namedExportsOrder:()=>de,default:()=>me});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./node_modules/classnames/index.js"),C=e.n(P),v=e("./.storybook/StoryPage.tsx"),i=e("./src/components/Button/index.ts"),_;(function(B){B.Primary="primary",B.Secondary="secondary"})(_||(_={}));var S=(0,h.createContext)(void 0),T=function(){var Z=(0,h.useContext)(S);if(Z===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return Z},R=e("./src/components/Accordion/Accordion.module.css"),I=e.n(R),x=e("./node_modules/react/jsx-runtime.js"),A=function(Z){var re=Z.children,ce=Z.open,fe=Z.onClick,he=Z.iconVariant,be=he===void 0?_.Primary:he,Te=(0,h.useId)(),ge=(0,h.useId)();return(0,x.jsx)("div",{className:I().accordion,children:(0,x.jsx)(S.Provider,{value:{onClick:fe,open:ce,headerId:Te,contentId:ge,iconVariant:be},children:re})})};A.displayName="Accordion";const L=null;try{A.displayName="Accordion",A.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:A.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(B){}var K=e("./src/components/Accordion/AccordionHeader.module.css"),H=e.n(K),J=e("./src/components/Accordion/AccordionIcon.module.css"),q=e.n(J),ie;function k(){return k=Object.assign?Object.assign.bind():function(B){for(var Z=1;Z<arguments.length;Z++){var re=arguments[Z];for(var ce in re)Object.prototype.hasOwnProperty.call(re,ce)&&(B[ce]=re[ce])}return B},k.apply(this,arguments)}var ne=function(Z){return h.createElement("svg",k({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z),ie||(ie=h.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},pe;function _e(){return _e=Object.assign?Object.assign.bind():function(B){for(var Z=1;Z<arguments.length;Z++){var re=arguments[Z];for(var ce in re)Object.prototype.hasOwnProperty.call(re,ce)&&(B[ce]=re[ce])}return B},_e.apply(this,arguments)}var ye=function(Z){return h.createElement("svg",_e({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z),pe||(pe=h.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},ae=function(){var Z,re,ce=T(),fe=ce.onClick,he=ce.open,be=ce.iconVariant,Te=[q()["accordion-icon"],(Z={},Z[q()["accordion-icon--opened"]]=he,Z)],ge=(re={height:20,width:20,className:C()(Te)},re["data-testid"]=be,re.onClick=fe,re);switch(be){case _.Primary:return(0,x.jsx)(ne,Object.assign({},ge));case _.Secondary:return(0,x.jsx)(ye,Object.assign({},ge))}};const Q=null;var d=function(Z){var re,ce=Z.children,fe=Z.actions,he=Z.subtitle,be=T(),Te=be.onClick,ge=be.open,je=be.headerId,Oe=be.contentId;return(0,x.jsxs)("div",{className:C()(H()["accordion-header"],(re={},re[H()["accordion-header--subtitle"]]=he,re)),children:[(0,x.jsx)(ae,{}),(0,x.jsxs)("button",{className:C()(H()["accordion-header__title"]),"aria-expanded":ge,type:"button",onClick:Te,id:je,"aria-controls":Oe,children:[ce,(he==null?void 0:he.length)&&(0,x.jsx)("div",{"data-testid":"accordion-header-subtitle",className:C()(H()["accordion-header__subtitle"]),children:he})]}),(0,x.jsx)("div",{className:C()(H()["accordion-header__actions"]),children:fe})]})};d.displayName="AccordionHeader";try{d.displayName="AccordionHeader",d.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:d.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(B){}var p=function(Z){var re=Z.children,ce=T(),fe=ce.open,he=ce.contentId,be=ce.headerId;return(0,x.jsx)("div",{children:fe&&(0,x.jsx)("div",{"aria-expanded":fe,id:he,"aria-labelledby":be,children:re})})};p.displayName="AccordionContent";const c=null;try{p.displayName="AccordionContent",p.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:p.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(B){}var y=e("./src/components/Accordion/Accordion.stories.module.css"),m=e.n(y);function u(B,Z){return F(B)||Y(B,Z)||D(B,Z)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(B,Z){if(!!B){if(typeof B=="string")return U(B,Z);var re=Object.prototype.toString.call(B).slice(8,-1);if(re==="Object"&&B.constructor&&(re=B.constructor.name),re==="Map"||re==="Set")return Array.from(B);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return U(B,Z)}}function U(B,Z){(Z==null||Z>B.length)&&(Z=B.length);for(var re=0,ce=new Array(Z);re<Z;re++)ce[re]=B[re];return ce}function Y(B,Z){var re=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(re!=null){var ce=[],fe=!0,he=!1,be,Te;try{for(re=re.call(B);!(fe=(be=re.next()).done)&&(ce.push(be.value),!(Z&&ce.length===Z));fe=!0);}catch(ge){he=!0,Te=ge}finally{try{!fe&&re.return!=null&&re.return()}finally{if(he)throw Te}}return ce}}function F(B){if(Array.isArray(B))return B}var $=`import React, { useState } from 'react';
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
`,se={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},X="";const me={title:"Components/Accordion",component:A,subcomponents:{AccordionHeader:d,AccordionContent:p},parameters:{design:(0,E.vc)([{type:"figma",url:X},{type:"link",url:X}]),docs:{page:function(){return(0,x.jsx)(v.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Primary,useActions:!0,subtitle:"Subtitle"}};var ve=function(Z){var re=(0,h.useState)(!1),ce=u(re,2),fe=ce[0],he=ce[1],be=(0,h.useState)(!1),Te=u(be,2),ge=Te[0],je=Te[1],Oe=function(){he(!fe)},Ee=function(){je(!ge)},Me="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",De=(0,g.D8)(),Ae=u(De,1),Xe=Ae[0].useActions,Fe=(0,g.D8)(),qe=u(Fe,1),$e=qe[0].subtitle,Ue=Xe?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:"Example setup"}),(0,x.jsx)(i.zx,{variant:i.Wu.Filled,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 1"}),(0,x.jsx)(i.zx,{variant:i.Wu.Outline,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 2"})]}):void 0,eo=$e.length>0?$e:void 0;return(0,x.jsxs)("div",{className:C()(m().container),children:[(0,x.jsxs)(A,{onClick:Oe,open:fe,iconVariant:Z.iconVariant,children:[(0,x.jsx)(d,{actions:Ue,subtitle:eo,children:"Accordion 1"}),(0,x.jsx)(p,{children:Me})]}),(0,x.jsxs)(A,{onClick:Ee,open:ge,iconVariant:Z.iconVariant,children:[(0,x.jsx)(d,{actions:Ue,subtitle:eo,children:"Accordion 2"}),(0,x.jsx)(p,{children:Me})]})]})};ve.displayName="Template";var le=ve.bind({});le.args={iconVariant:_.Primary,open:!1},le.argTypes={open:{control:!1},onClick:{control:!1}},le.parameters={docs:{description:{story:""}}},le.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},le.parameters);var de=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>x,FullWidth:()=>I,Primary:()=>C,Secondary:()=>v,SecondaryWithIconNoText:()=>R,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>A,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const E={title:"Components/Button/Filled",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,M.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Filled,onClick:function(K){alert(JSON.stringify(K.target.innerHTML)+" clicked!")}}};var g=function(K){return(0,M.jsx)(j.zx,Object.assign({},K))};g.displayName="Template";var P=function(K){return(0,M.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,M.jsx)(j.zx,Object.assign({},K))})};P.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,M.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,M.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var R=g.bind({});R.args={color:j.rp.Secondary,icon:(0,M.jsx)(V.Z,{})},R.parameters={docs:{description:{story:""}}};var I=P.bind({});I.args={color:j.rp.Primary,icon:(0,M.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button"},I.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={children:"Disabled button",disabled:!0},x.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),R.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},R.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters);var A=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>x,FullWidthAndDashedBorder:()=>I,Primary:()=>C,Secondary:()=>v,SecondaryWithIconNoText:()=>R,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>A,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const E={title:"Components/Button/Outline",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,M.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Outline,onClick:function(K){alert(JSON.stringify(K.target.innerHTML)+" clicked!")}}};var g=function(K){return(0,M.jsx)(j.zx,Object.assign({},K))};g.displayName="Template";var P=function(K){return(0,M.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,M.jsx)(j.zx,Object.assign({},K))})};P.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,M.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,M.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var R=g.bind({});R.args={color:j.rp.Secondary,icon:(0,M.jsx)(V.Z,{})},R.parameters={docs:{description:{story:""}}};var I=P.bind({});I.args={color:j.rp.Primary,icon:(0,M.jsx)(V.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},I.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={children:"Disabled button",disabled:!0},x.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),R.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},R.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters);var A=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>x,FullWidth:()=>I,Primary:()=>C,Secondary:()=>v,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,SuccessWithIconNoText:()=>R,__namedExportsOrder:()=>A,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const E={title:"Components/Button/Quiet",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,M.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Quiet,size:j.qE.Small,onClick:function(K){alert(JSON.stringify(K.target.innerHTML)+" clicked!")}}};var g=function(K){return(0,M.jsx)(j.zx,Object.assign({},K))};g.displayName="Template";var P=function(K){return(0,M.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,M.jsx)(j.zx,Object.assign({},K))})};P.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,M.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,M.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var R=g.bind({});R.args={color:j.rp.Success,icon:(0,M.jsx)(V.Z,{})},R.parameters={docs:{description:{story:""}}};var I=P.bind({});I.args={color:j.rp.Primary,icon:(0,M.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},I.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={children:"Disabled button",disabled:!0},x.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),R.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},R.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters);var A=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>g,Compact:()=>C,Disabled:()=>v,Error:()=>P,LongText:()=>S,Normal:()=>E,ReadOnly:()=>i,WithDescription:()=>_,WithHiddenLabel:()=>T,__namedExportsOrder:()=>R,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Checkbox/Checkbox.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},O="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const W={title:"Components/Checkbox",component:z.X,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var h=function(x){return(0,j.jsx)(z.X,Object.assign({},x))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default checkbox."}}};var g=h.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"This is a checked checkbox."}}};var P=h.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var C=h.bind({});C.args={compact:!0},C.parameters={docs:{description:{story:"This is the compact checkbox."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var i=h.bind({});i.args={readOnly:!0},i.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var _=h.bind({});_.args={description:"Lorem ipsum dolor sit amet."},_.parameters={docs:{description:{story:"This is a checkbox with description."}}};var S=h.bind({});S.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},S.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var T=h.bind({});T.args={hideLabel:!0},T.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},C.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},_.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},S.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},T.parameters);var R=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>D,Disabled:()=>Y,Error:()=>U,Horizontal:()=>b,Vertical:()=>u,__namedExportsOrder:()=>F,default:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),R=e("./src/components/Checkbox/Checkbox.tsx"),I=e("./src/components/FieldSet/index.ts"),x=e("./src/utils/arrayUtils.ts"),A=e("./src/hooks/index.ts"),L=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),K=e.n(L),H=e("./node_modules/react/jsx-runtime.js");function J($,se){return pe($)||ne($,se)||ie($,se)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie($,se){if(!!$){if(typeof $=="string")return k($,se);var X=Object.prototype.toString.call($).slice(8,-1);if(X==="Object"&&$.constructor&&(X=$.constructor.name),X==="Map"||X==="Set")return Array.from($);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return k($,se)}}function k($,se){(se==null||se>$.length)&&(se=$.length);for(var X=0,me=new Array(se);X<se;X++)me[X]=$[X];return me}function ne($,se){var X=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(X!=null){var me=[],ve=!0,le=!1,de,B;try{for(X=X.call($);!(ve=(de=X.next()).done)&&(me.push(de.value),!(se&&me.length===se));ve=!0);}catch(Z){le=!0,B=Z}finally{try{!ve&&X.return!=null&&X.return()}finally{if(le)throw B}}return me}}function pe($){if(Array.isArray($))return $}var _e;(function($){$.Vertical="vertical",$.Horizontal="horizontal"})(_e||(_e={}));var ye=function(se,X){switch(X.type){case"check":return se.concat([X.name]);case"uncheck":return se.filter(function(me){return me!==X.name});case"reset":return X.state}},ae=function(se){return se.filter(function(X){var me=X.checked;return me}).map(function(X){var me=X.name;return me})},Q=function(se){var X=se.compact,me=se.description,ve=se.disabled,le=se.error,de=se.items,B=se.legend,Z=se.onChange,re=se.variant,ce=re===void 0?_e.Vertical:re;if(!(0,x.zb)(de.map(function(je){return je.name})))throw Error("Each name in the checkbox group must be unique.");var fe=(0,n.useReducer)(ye,ae(de)),he=J(fe,2),be=he[0],Te=he[1];(0,n.useEffect)(function(){return Te({type:"reset",state:ae(de)})},[de]);var ge=(0,A.D9)(be);return(0,A.PQ)(function(){Z&&!ve&&!(0,x.cO)(ge,be)&&Z(be)},[be,Z,ve]),(0,H.jsx)(I.C,{description:me,disabled:ve,error:le,legend:B,size:X?I.w.Xsmall:I.w.Small,children:(0,H.jsx)("div",{className:T()(K()["checkbox-group"],K()["checkbox-group--"+ce],X&&K()["checkbox-group--compact"]),children:de.map(function(je){return(0,H.jsx)(R.X,{checkboxId:je.checkboxId,checked:be.includes(je.name),compact:X,description:je.description,disabled:ve||je.disabled,error:!!le,label:je.label,name:je.name,onChange:function(Ee){Te({type:Ee.target.checked?"check":"uncheck",name:je.name})}},je.name)})})})};Q.displayName="CheckboxGroup";try{Q.displayName="CheckboxGroup",Q.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:Q.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch($){}var d=`import React from 'react';
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
`,p={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},c="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const y={title:"Components/CheckboxGroup",component:Q,parameters:{design:(0,l.vc)([{type:"figma",url:c},{type:"link",url:c}]),docs:{page:function(){return(0,H.jsx)(a.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:_e.Vertical}};var m=function(se){return(0,H.jsx)(Q,Object.assign({},se))};m.displayName="Template";var u=m.bind({});u.args={variant:_e.Vertical},u.parameters={docs:{description:{story:"This is the default setting."}}};var b=m.bind({});b.args={variant:_e.Horizontal},b.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var D=m.bind({});D.args={compact:!0},D.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var U=m.bind({});U.args={error:"Du m\xE5 velge minst ett av alternativene over."},U.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var Y=m.bind({});Y.args={disabled:!0},Y.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},u.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},D.parameters),U.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},U.parameters),Y.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},Y.parameters);var F=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{SimpleExample:()=>P,__namedExportsOrder:()=>C,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/DesignTokens/index.ts"),V=e("./src/components/CircularProgress/CircularProgress.module.css"),z=e.n(V),j=e("./node_modules/react/jsx-runtime.js"),w=function(i){var _=i.value,S=i.width,T=S===void 0?70:S,R=i.strokeWidth,I=R===void 0?2.5:R,x=i.ariaLabel,A=i.label,L=i.id,K=L+"-label",H=!x&&A?K:void 0;return(0,j.jsxs)("div",{id:L,className:z().container,style:{width:T+"px"},role:"progressbar","aria-labelledby":H,"aria-label":x,children:[A&&(0,j.jsx)("div",{id:K,className:z().label,children:A}),(0,j.jsxs)("svg",{className:z().svg,viewBox:"0 0 35.8 35.8",children:[(0,j.jsx)(M,{stroke:f.T.ColorsBlue200,strokeWidth:I}),(0,j.jsx)(M,{strokeWidth:I,stroke:f.T.ColorsBlue900,strokeDashoffset:100-_,strokeDasharray:"100 100",className:z().circleTransition})]})]})};w.displayName="CircularProgress";var M=function(i){return(0,j.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},i))};M.displayName="Circle";try{w.displayName="CircularProgress",w.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:w.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(v){}var O=`import React from 'react';
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
`,W={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const E={title:"Components/CircularProgress",component:w,parameters:{design:(0,l.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,j.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var g=function(i){return(0,j.jsx)(w,Object.assign({},i))};g.displayName="CircularTemplate";var P=g.bind({});P.args={width:100,value:60,label:"3/5",id:"progress"},P.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},P.parameters);var C=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>E,__namedExportsOrder:()=>g,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/ErrorMessage/ErrorMessage.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},O="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const W={title:"Components/ErrorMessage",component:z.B,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var h=function(C){return(0,j.jsx)(z.B,Object.assign({},C,{children:"This is an error message"}))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},E.parameters);var g=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>g,Disabled:()=>v,Error:()=>C,Normal:()=>E,WithDescription:()=>P,__namedExportsOrder:()=>i,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/FieldSet/FieldSet.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},O="";const W={title:"Components/FieldSet",component:z.C,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:z.w.Small}};var h=function(S){return(0,j.jsx)(z.C,Object.assign({},S,{children:S.children}))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is a normal field set."}}};var g=h.bind({});g.args={size:z.w.Xsmall},g.parameters={docs:{description:{story:"This is a compact field set."}}};var P=h.bind({});P.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},P.parameters={docs:{description:{story:"This is a field set with a description."}}};var C=h.bind({});C.args={error:"Her er det en beskrivende feilmelding."},C.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},g.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},P.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},C.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters);var i=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Dashed:()=>x,Solid:()=>I,__namedExportsOrder:()=>A,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/classnames/index.js"),V=e.n(f),z=e("./src/components/List/List.module.css"),j=e.n(z),w;(function(L){L.Solid="solid",L.Dashed="dashed"})(w||(w={}));var M=(0,n.createContext)({borderStyle:w.Solid}),O=function(){var K=(0,n.useContext)(M);if(K===void 0)throw new Error("useListContext must be used within a ListContext");return K},W=e("./node_modules/react/jsx-runtime.js"),h=function(K){var H=K.children,J=K.borderStyle,q=J===void 0?w.Solid:J;return(0,W.jsx)("ul",{className:V()(j().list,j()["list--"+q]),children:(0,W.jsx)(M.Provider,{value:{borderStyle:q},children:H})})};h.displayName="List";try{h.displayName="List",h.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:h.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(L){}var E=e("./src/components/List/ListItem.module.css"),g=e.n(E),P=function(K){var H=K.children,J=O(),q=J.borderStyle;return(0,W.jsx)("li",{className:V()(g()["list-item"],g()["list-item--"+q]),children:H})};P.displayName="ListItem";try{P.displayName="ListItem",P.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:P.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(L){}var C=e("./src/components/List/List.stories.modules.css"),v=e.n(C),i=`import React from 'react';
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
`,_={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},S="";const T={title:"Components/List",component:h,parameters:{design:(0,l.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,W.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var R=function(K){return(0,W.jsx)("div",{className:v().container,children:(0,W.jsxs)(h,{borderStyle:K.borderStyle,children:[(0,W.jsx)(P,{children:"List Item 1"}),(0,W.jsx)(P,{children:"List Item 2"}),(0,W.jsx)(P,{children:"List Item 3"})]})})};R.displayName="Template";var I=R.bind({});I.args={borderStyle:w.Solid},I.parameters={docs:{description:{story:""}}};var x=R.bind({});x.args={borderStyle:w.Dashed},x.parameters={docs:{description:{story:""}}},I.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},I.parameters),x.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},x.parameters);var A=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>Y,GoogleMaps:()=>me,KartverketSea:()=>X,KartverketTerrain:()=>se,MapWithMarkerZoomAndCenter:()=>F,OpenStreetMap:()=>$,__namedExportsOrder:()=>ve,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/leaflet/dist/images/marker-icon.png"),v=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),i=e("./node_modules/leaflet/dist/images/marker-shadow.png"),_=e("./node_modules/leaflet/dist/leaflet-src.js"),S=e("./node_modules/react-leaflet/lib/MapContainer.js"),T=e("./node_modules/react-leaflet/lib/TileLayer.js"),R=e("./node_modules/react-leaflet/lib/AttributionControl.js"),I=e("./node_modules/react-leaflet/lib/Marker.js"),x=e("./node_modules/react-leaflet/lib/hooks.js"),A=e("./src/components/Map/Map.module.css"),L=e.n(A),K=e("./node_modules/leaflet/dist/leaflet.css"),H=e("./node_modules/react/jsx-runtime.js"),J={latitude:64.888996,longitude:12.8186054},q=4,ie=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],k=function(de){var B=de.readOnly,Z=B===void 0?!1:B,re=de.layers,ce=re===void 0?ie:re,fe=de.centerLocation,he=fe===void 0?J:fe,be=de.zoom,Te=be===void 0?q:be,ge=de.markerLocation,je=de.onClick;return(0,H.jsxs)(S.h,{className:L().map,center:pe(he),zoom:Te,zoomControl:!Z,dragging:!Z,touchZoom:!Z,doubleClickZoom:!Z,scrollWheelZoom:!Z,attributionControl:!1,children:[ce.map(function(Oe,Ee){return(0,H.jsx)(T.I,{url:Oe.url,attribution:Oe.attribution,subdomains:Oe.subdomains?Oe.subdomains:[],opacity:Z?.5:1},Ee)}),(0,H.jsx)(R.z,{prefix:!1}),(0,H.jsx)(ne,{markerLocation:ge}),(0,H.jsx)(_e,{readOnly:Z,onClick:je})]})};k.displayName="Map";function ne(le){var de=le.markerLocation,B=(0,_.icon)({iconUrl:C,iconRetinaUrl:v,shadowUrl:i,iconSize:[25,41],iconAnchor:[12,41]});return de?(0,H.jsx)(I.J,{position:pe(de),icon:B}):null}function pe(le){return[le.latitude,le.longitude]}var _e=function(de){var B=de.onClick,Z=de.readOnly;return(0,x.zV)({click:function(ce){B&&!Z&&B({latitude:ce.latlng.lat,longitude:ce.latlng.lng})}}),null};try{k.displayName="Map",k.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:k.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(le){}var ye=e("./node_modules/console-browserify/index.js");function ae(le,de){return y(le)||c(le,de)||d(le,de)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function d(le,de){if(!!le){if(typeof le=="string")return p(le,de);var B=Object.prototype.toString.call(le).slice(8,-1);if(B==="Object"&&le.constructor&&(B=le.constructor.name),B==="Map"||B==="Set")return Array.from(le);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return p(le,de)}}function p(le,de){(de==null||de>le.length)&&(de=le.length);for(var B=0,Z=new Array(de);B<de;B++)Z[B]=le[B];return Z}function c(le,de){var B=le==null?null:typeof Symbol!="undefined"&&le[Symbol.iterator]||le["@@iterator"];if(B!=null){var Z=[],re=!0,ce=!1,fe,he;try{for(B=B.call(le);!(re=(fe=B.next()).done)&&(Z.push(fe.value),!(de&&Z.length===de));re=!0);}catch(be){ce=!0,he=be}finally{try{!re&&B.return!=null&&B.return()}finally{if(ce)throw he}}return Z}}function y(le){if(Array.isArray(le))return le}var m=`import React, { useState } from 'react';
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
`,u={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},b="";const D={title:"Components/Map",component:k,parameters:{layout:"fullscreen",design:(0,E.vc)([{type:"figma",url:b},{type:"link",url:b}]),docs:{page:function(){return(0,H.jsx)(g.Y,{description:"Map component"})}}},args:{}};var U=function(de){var B=(0,h.useState)(de.markerLocation),Z=ae(B,2),re=Z[0],ce=Z[1],fe=function(be){ce(be),ye.log("Map clicked at ["+be.latitude+","+be.longitude+"]")};return(0,H.jsx)(k,Object.assign({},de,{markerLocation:re,onClick:fe}))};U.displayName="Template";var Y=U.bind({});Y.args={},Y.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var F=U.bind({});F.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},F.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var $=U.bind({});$.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},$.parameters={docs:{description:{story:"OpenStreetMap"}}};var se=U.bind({});se.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},se.parameters={docs:{description:{story:"Kartverket terrain map"}}};var X=U.bind({});X.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},X.parameters={docs:{description:{story:"Kartverket sea map"}}};var me=U.bind({});me.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},me.parameters={docs:{description:{story:"Google Maps"}}},Y.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Y.parameters),F.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},F.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},se.parameters),X.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},X.parameters),me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},me.parameters);var ve=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Primary:()=>J,Success:()=>q,__namedExportsOrder:()=>ie,default:()=>K});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f;function V(){return V=Object.assign?Object.assign.bind():function(k){for(var ne=1;ne<arguments.length;ne++){var pe=arguments[ne];for(var _e in pe)Object.prototype.hasOwnProperty.call(pe,_e)&&(k[_e]=pe[_e])}return k},V.apply(this,arguments)}var z=function(ne){return n.createElement("svg",V({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne),f||(f=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},j;(function(k){k.Primary="primary",k.Success="success"})(j||(j={}));var w;(function(k){k.Small="small",k.Medium="medium"})(w||(w={}));var M=(0,n.createContext)({color:j.Primary,size:w.Medium}),O=function(){var ne=(0,n.useContext)(M);if(ne===void 0)throw new Error("usePageContext must be used within a PageContext");return ne},W=e("./node_modules/classnames/index.js"),h=e.n(W),E=e("./src/components/Page/PageContent.module.css"),g=e.n(E),P=e("./node_modules/react/jsx-runtime.js"),C=function(ne){var pe=ne.children;return(0,P.jsx)("div",{className:h()(g()["page-content"]),children:pe})};C.displayName="PageContent";try{C.displayName="PageContent",C.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:C.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(k){}var v=e("./src/components/SvgIcon/index.ts"),i=e("./src/components/Page/PageHeader.module.css"),_=e.n(i),S=function(ne){var pe=ne.children,_e=ne.icon,ye=O(),ae=ye.color,Q=ye.size,d=Q===w.Small?28:40;return(0,P.jsxs)("header",{className:h()(_()["page-header"],_()["page-header--"+ae],_()["page-header--"+Q]),children:[(0,P.jsx)(v.l,{width:d,height:d,svgIconComponent:_e}),(0,P.jsx)("span",{children:pe})]})};S.displayName="PageHeader";try{S.displayName="PageHeader",S.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:S.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(k){}var T=e("./src/components/Page/Page.module.css"),R=e.n(T),I=function(ne){var pe=ne.children,_e=ne.color,ye=_e===void 0?j.Primary:_e,ae=ne.size,Q=ae===void 0?w.Medium:ae;return(0,P.jsx)("div",{className:R().page,children:(0,P.jsx)(M.Provider,{value:{color:ye,size:Q},children:pe})})};I.displayName="Page";try{I.displayName="Page",I.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:I.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(k){}var x=`import React from 'react';
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
`,A={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},L="";const K={title:"Components/Page",component:I,parameters:{design:(0,l.vc)([{type:"figma",url:L},{type:"link",url:L}]),docs:{page:function(){return(0,P.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var H=function(ne){return(0,P.jsx)("div",{style:{width:"600px"},children:(0,P.jsxs)(I,{color:ne.color,size:ne.size,children:[(0,P.jsx)(S,{icon:(0,P.jsx)(z,{}),children:"PageHeader"}),(0,P.jsx)(C,{children:"PageContent"})]})})};H.displayName="Template";var J=H.bind({});J.args={color:j.Primary,size:w.Medium},J.parameters={docs:{description:{story:""}}};var q=H.bind({});q.args={color:j.Success,size:w.Medium},q.parameters={docs:{description:{story:""}}},J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters),q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters);var ie=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>u,__namedExportsOrder:()=>b,default:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),z=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e.n(j),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(M),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(W),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),g=e.n(E),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(P),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(v),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e.n(_),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),R=e.n(T),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(I),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),L=e.n(A),K=e("./node_modules/react/index.js"),H=e("./node_modules/storybook-addon-designs/esm/index.js"),J=e("./.storybook/StoryPage.tsx"),q=e("./src/components/Pagination/Pagination.tsx"),ie=e("./node_modules/react/jsx-runtime.js");function k(D,U){return ae(D)||ye(D,U)||pe(D,U)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(D,U){if(!!D){if(typeof D=="string")return _e(D,U);var Y=Object.prototype.toString.call(D).slice(8,-1);if(Y==="Object"&&D.constructor&&(Y=D.constructor.name),Y==="Map"||Y==="Set")return Array.from(D);if(Y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))return _e(D,U)}}function _e(D,U){(U==null||U>D.length)&&(U=D.length);for(var Y=0,F=new Array(U);Y<U;Y++)F[Y]=D[Y];return F}function ye(D,U){var Y=D==null?null:typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"];if(Y!=null){var F=[],$=!0,se=!1,X,me;try{for(Y=Y.call(D);!($=(X=Y.next()).done)&&(F.push(X.value),!(U&&F.length===U));$=!0);}catch(ve){se=!0,me=ve}finally{try{!$&&Y.return!=null&&Y.return()}finally{if(se)throw me}}return F}}function ae(D){if(Array.isArray(D))return D}var Q=`import React, { useState } from 'react';
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
`,d={Example:{startLoc:{col:52,line:46},endLoc:{col:1,line:67},startBody:{col:52,line:46},endBody:{col:1,line:67}}},p="",c={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const y={title:"Components/Pagination",component:q.t,parameters:{design:(0,H.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,ie.jsx)(J.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var m=function(U){var Y=(0,K.useState)(5),F=k(Y,2),$=F[0],se=F[1],X=(0,K.useState)(0),me=k(X,2),ve=me[0],le=me[1],de=function(Z){se(parseInt(Z.target.value,10)),le(0)};return(0,ie.jsx)(q.t,Object.assign({},U,{rowsPerPage:$,currentPage:ve,setCurrentPage:le,onRowsPerPageChange:de,descriptionTexts:c}))};m.displayName="Template";var u=m.bind({});u.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},u.parameters={docs:{description:{story:""}}},u.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},u.parameters);var b=["Example"]},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>C,Info:()=>g,Success:()=>E,Warning:()=>P,__namedExportsOrder:()=>v,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Panel/Panel.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},O="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const W={title:"Components/Panel",component:z.s,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,j.jsx)("div",{children:"Her kommer litt informasjon"})}};var h=function(_){return(0,j.jsx)(z.s,Object.assign({},_))};h.displayName="Template";var E=h.bind({});E.args={variant:z.c.Success},E.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var g=h.bind({});g.parameters={docs:{description:{story:"Infobeskrivelse"}}};var P=h.bind({});P.args={variant:z.c.Warning},P.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var C=h.bind({});C.args={variant:z.c.Error},C.parameters={docs:{description:{story:"Feilbeskrivelse"}}},E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},g.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},P.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},C.parameters);var v=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>c,Info:()=>d,Success:()=>Q,Warning:()=>p,__namedExportsOrder:()=>y,default:()=>ye});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Button/index.ts"),v=e("./src/components/Panel/Panel.tsx"),i=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),_=e("./node_modules/classnames/index.js"),S=e.n(_),T=e("./src/components/Panel/PopoverPanel.module.css"),R=e.n(T),I=e("./node_modules/react/jsx-runtime.js"),x=function(u){var b=u.children;return(0,I.jsx)(i.Eh,{className:S()(R()["popover-panel__arrow"]),asChild:!0,children:b})};x.displayName="renderArrow";var A=function(u){var b=u.children,D=u.variant,U=D===void 0?v.c.Warning:D,Y=u.trigger,F=u.side,$=F===void 0?"top":F,se=u.title,X=u.showIcon,me=u.forceMobileLayout,ve=u.showPointer,le=ve===void 0?!0:ve,de=u.onOpenChange,B=u.open,Z=B===void 0?!1:B;return(0,I.jsxs)(i.fC,{open:Z,onOpenChange:de,children:[(0,I.jsx)(i.xz,{asChild:!0,role:"button",children:Y}),(0,I.jsx)(i.VY,{side:$,className:R()["popover-panel"],children:(0,I.jsx)(v.s,{title:se,showIcon:X,forceMobileLayout:me,showPointer:le,variant:U,renderArrow:x,children:b})})]})};A.displayName="PopoverPanel";const L=null;try{A.displayName="PopoverPanel",A.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:A.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(m){}function K(m,u){return k(m)||ie(m,u)||J(m,u)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(m,u){if(!!m){if(typeof m=="string")return q(m,u);var b=Object.prototype.toString.call(m).slice(8,-1);if(b==="Object"&&m.constructor&&(b=m.constructor.name),b==="Map"||b==="Set")return Array.from(m);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return q(m,u)}}function q(m,u){(u==null||u>m.length)&&(u=m.length);for(var b=0,D=new Array(u);b<u;b++)D[b]=m[b];return D}function ie(m,u){var b=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(b!=null){var D=[],U=!0,Y=!1,F,$;try{for(b=b.call(m);!(U=(F=b.next()).done)&&(D.push(F.value),!(u&&D.length===u));U=!0);}catch(se){Y=!0,$=se}finally{try{!U&&b.return!=null&&b.return()}finally{if(Y)throw $}}return D}}function k(m){if(Array.isArray(m))return m}var ne=`import React from 'react';
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
`,pe={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},_e="";const ye={title:"Components/Panel/PopoverPanel",component:A,parameters:{design:(0,E.vc)([{type:"figma",url:_e},{type:"link",url:_e}]),docs:{page:function(){return(0,I.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:v.c.Warning,trigger:(0,I.jsx)("button",{children:"\xC5pne"}),side:"top"}};var ae=function(u){var b=(0,g.eJ)(!1),D=K(b,2),U=D[0],Y=D[1],F=function(){Y(!U)};return(0,I.jsx)("div",{children:(0,I.jsxs)(A,{variant:u.variant,side:u.side,title:u.title,open:U,trigger:(0,I.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,children:"\xC5pne"}),onOpenChange:Y,showPointer:u.showPointer,showIcon:u.showIcon,forceMobileLayout:u.forceMobileLayout,children:[(0,I.jsx)("div",{children:"Her kommer litt informasjon"}),(0,I.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,size:C.qE.Small,onClick:F,children:"Lukk"})]})})};ae.displayName="Template";var Q=ae.bind({});Q.args={variant:v.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},Q.argTypes={trigger:{control:!1}},Q.parameters={docs:{description:{story:""}}};var d=ae.bind({});d.args={variant:v.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},d.argTypes={trigger:{control:!1}},d.parameters={docs:{description:{story:""}}};var p=ae.bind({});p.args={variant:v.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},p.argTypes={trigger:{control:!1}},p.parameters={docs:{description:{story:""}}};var c=ae.bind({});c.args={variant:v.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},c.argTypes={trigger:{control:!1}},c.parameters={docs:{description:{story:""}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters),d.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},d.parameters),p.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},c.parameters);var y=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>g,Compact:()=>C,Default:()=>E,Disabled:()=>v,Error:()=>P,LongText:()=>_,WithDescription:()=>i,WithHiddenLabel:()=>S,__namedExportsOrder:()=>T,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/RadioButton/RadioButton.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const W={title:"Components/RadioButton",component:z.E,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var h=function(I){return(0,j.jsx)(z.E,Object.assign({},I))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"Default radio button."}}};var g=h.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"Checked radio button."}}};var P=h.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var C=h.bind({});C.args={size:z.j.Xsmall},C.parameters={docs:{description:{story:"This is the compact radio button."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var i=h.bind({});i.args={description:"Lorem ipsum dolor sit amet."},i.parameters={docs:{description:{story:"This is a radio button with description."}}};var _=h.bind({});_.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},_.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var S=h.bind({});S.args={hideLabel:!0},S.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},g.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},P.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},C.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},_.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},S.parameters);var T=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>p,Disabled:()=>y,Error:()=>c,Horizontal:()=>d,Vertical:()=>Q,__namedExportsOrder:()=>m,default:()=>ye});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e("./src/components/RadioButton/index.ts"),i=e("./src/components/FieldSet/index.ts"),_=e("./src/hooks/index.ts"),S=e("./src/utils/arrayUtils.ts"),T=e("./src/components/RadioGroup/RadioGroup.module.css"),R=e.n(T),I=e("./node_modules/react/jsx-runtime.js");function x(u,b){return J(u)||H(u,b)||L(u,b)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(u,b){if(!!u){if(typeof u=="string")return K(u,b);var D=Object.prototype.toString.call(u).slice(8,-1);if(D==="Object"&&u.constructor&&(D=u.constructor.name),D==="Map"||D==="Set")return Array.from(u);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return K(u,b)}}function K(u,b){(b==null||b>u.length)&&(b=u.length);for(var D=0,U=new Array(b);D<b;D++)U[D]=u[D];return U}function H(u,b){var D=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(D!=null){var U=[],Y=!0,F=!1,$,se;try{for(D=D.call(u);!(Y=($=D.next()).done)&&(U.push($.value),!(b&&U.length===b));Y=!0);}catch(X){F=!0,se=X}finally{try{!Y&&D.return!=null&&D.return()}finally{if(F)throw se}}return U}}function J(u){if(Array.isArray(u))return u}var q;(function(u){u.Xsmall="xsmall",u.Small="small"})(q||(q={}));var ie;(function(u){u.Vertical="vertical",u.Horizontal="horizontal"})(ie||(ie={}));var k=function(b){var D=b.description,U=b.disabled,Y=b.error,F=b.items,$=b.legend,se=b.name,X=b.onChange,me=b.size,ve=me===void 0?q.Small:me,le=b.value,de=b.variant,B=de===void 0?ie.Vertical:de;if(!(0,S.zb)(F.map(function(Ee){return Ee.value})))throw Error("Each value in the radio group must be unique.");var Z=(0,n.useState)(le),re=x(Z,2),ce=re[0],fe=re[1];(0,n.useEffect)(function(){fe(le)},[le]);var he=(0,_.D9)(ce);(0,_.PQ)(function(){X&&!U&&he!==ce&&X(ce)},[ce,U,X]);var be=function(Me){return function(De){return De.target.checked&&fe(Me)}},Te=ve===q.Xsmall?[i.w.Xsmall,v.j.Xsmall]:[i.w.Small,v.j.Small],ge=x(Te,2),je=ge[0],Oe=ge[1];return(0,I.jsx)(i.C,{description:D,disabled:U,error:Y,legend:$,size:je,children:(0,I.jsx)("div",{className:[R()["radio-group"],R()["radio-group--"+B],R()["radio-group--"+ve]].join(" "),role:"radiogroup",children:F.map(function(Ee){return(0,n.createElement)(v.E,Object.assign({},Ee,{checked:Ee.value===ce,disabled:U||Ee.disabled,error:!!Y,key:Ee.value,name:se,onChange:be(Ee.value),size:Oe}))})})})};k.displayName="RadioGroup";try{k.displayName="RadioGroup",k.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:k.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(u){}var ne=`import React from 'react';
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
`,pe={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},_e="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const ye={title:"Components/RadioGroup",component:k,parameters:{design:(0,l.vc)([{type:"figma",url:_e},{type:"link",url:_e}]),docs:{page:function(){return(0,I.jsx)(a.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var ae=function(b){return(0,I.jsx)(k,Object.assign({},b))};ae.displayName="Template";var Q=ae.bind({});Q.args={variant:ie.Vertical},Q.parameters={docs:{description:{story:"This is the default setting."}}};var d=ae.bind({});d.args={variant:ie.Horizontal},d.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var p=ae.bind({});p.args={size:q.Xsmall},p.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var c=ae.bind({});c.args={error:"Du m\xE5 velge et av alternativene over."},c.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var y=ae.bind({});y.args={disabled:!0},y.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},Q.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},Q.parameters),d.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},d.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},c.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},y.parameters);var m=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ae,__namedExportsOrder:()=>Q,default:()=>_e});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),P=e("./.storybook/StoryPage.tsx"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e("./node_modules/classnames/index.js"),_=e.n(i),S=e("./src/components/_InputWrapper/index.ts"),T=e("./node_modules/react/jsx-runtime.js"),R=["id","onChange","disabled","label"];function I(d,p){if(d==null)return{};var c=x(d,p),y,m;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(d);for(m=0;m<u.length;m++)y=u[m],!(p.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,y)||(c[y]=d[y]))}return c}function x(d,p){if(d==null)return{};var c={},y=Object.keys(d),m,u;for(u=0;u<y.length;u++)m=y[u],!(p.indexOf(m)>=0)&&(c[m]=d[m]);return c}var A=function(p){var c=p.id,y=p.onChange,m=p.disabled,u=m===void 0?!1:m,b=p.label,D=I(p,R);return(0,T.jsx)(S.SP,{disabled:u,isSearch:!0,label:b,inputRenderer:function(Y){var F=Y.className,$=Y.variant,se={id:c,disabled:u,className:_()(F)};return(0,T.jsx)("input",Object.assign({},se,D,{"data-testid":c+"-"+$,onChange:y}))}})};A.displayName="SearchField";try{A.displayName="SearchField",A.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:A.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(d){}function L(d,p){return ie(d)||q(d,p)||H(d,p)||K()}function K(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(d,p){if(!!d){if(typeof d=="string")return J(d,p);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return J(d,p)}}function J(d,p){(p==null||p>d.length)&&(p=d.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=d[c];return y}function q(d,p){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y=[],m=!0,u=!1,b,D;try{for(c=c.call(d);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(U){u=!0,D=U}finally{try{!m&&c.return!=null&&c.return()}finally{if(u)throw D}}return y}}function ie(d){if(Array.isArray(d))return d}var k=`import React from 'react';
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
`,ne={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},pe="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const _e={title:"Components/SearchField",component:A,parameters:{design:(0,E.vc)([{type:"figma",url:pe},{type:"link",url:pe}]),docs:{page:function(){return(0,T.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var ye=function(p){var c=(0,g.D8)(),y=L(c,1),m=y[0].disabled;return(0,T.jsx)(A,Object.assign({disabled:m},p))};ye.displayName="Template";var ae=ye.bind({});ae.args={},ae.parameters={docs:{description:{story:"Search field."}}},ae.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},ae.parameters);var Q=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Disabled:()=>i,Error:()=>_,Multiple:()=>v,__namedExportsOrder:()=>S,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/storybook-addon-designs/esm/index.js"),j=e("./.storybook/StoryPage.tsx"),w=e("./src/components/Select/Select.tsx"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,W={Multiple:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Disabled:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Error:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",E=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],g=E.map(function(T){return Object.assign({},T,{deleteButtonLabel:"Slett "+T.label})});const P={title:"Components/Select/Multiple",component:w.P,parameters:{design:(0,z.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,M.jsx)(j.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'"})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:g}};var C=function(R){return(0,M.jsx)("div",{style:{width:"440px"},children:(0,M.jsx)(w.P,Object.assign({},R))})};C.displayName="Template";var v=C.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default multiple select box."}}};var i=C.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var _=C.bind({});_.args={error:!0},_.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},_.parameters);var S=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>E,Disabled:()=>g,Error:()=>P,__namedExportsOrder:()=>C,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Select/Select.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,M={Default:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Disabled:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Error:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const W={title:"Components/Select/Single",component:z.P,parameters:{design:(0,f.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,j.jsx)(V.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var h=function(i){return(0,j.jsx)("div",{style:{width:"440px"},children:(0,j.jsx)(z.P,Object.assign({},i))})};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default select box."}}};var g=h.bind({});g.args={disabled:!0},g.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var P=h.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},P.parameters);var C=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{IconFromNavIconLibrary:()=>v,ImportedCustomIcon:()=>i,__namedExportsOrder:()=>_,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./node_modules/@navikt/ds-icons/esm/Success.js"),f=e("./.storybook/StoryPage.tsx"),V=e("./src/components/SvgIcon/index.ts"),z,j,w;function M(){return M=Object.assign?Object.assign.bind():function(S){for(var T=1;T<arguments.length;T++){var R=arguments[T];for(var I in R)Object.prototype.hasOwnProperty.call(R,I)&&(S[I]=R[I])}return S},M.apply(this,arguments)}var O=function(T){return n.createElement("svg",M({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},T),z||(z=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),w||(w=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},W=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,E={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},g="";const P={title:"Components/SvgIcon",component:V.l,parameters:{design:(0,l.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,W.jsx)(f.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var C=function(T){return(0,W.jsx)(V.l,Object.assign({},T))};C.displayName="Template";var v=C.bind({});v.args={svgIconComponent:(0,W.jsx)(a.Z,{})},v.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var i=C.bind({});i.args={svgIconComponent:(0,W.jsx)(O,{height:"2rem",width:"2rem"})},i.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},i.parameters);var _=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{BasicTable:()=>Ie,SelectRows:()=>Ze,__namedExportsOrder:()=>co,default:()=>xe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),P=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/classnames/index.js"),v=e.n(C),i=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Pagination/Pagination.tsx"),S=e("./src/components/RadioButton/index.ts"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),I=e("./src/components/Table/Table.module.css"),x=e.n(I),A;(function(N){N.Header="header",N.Body="body",N.Footer="footer"})(A||(A={}));var L=(0,g.createContext)(void 0),K=function(){var G=(0,g.useContext)(L);if(G===void 0)throw new Error("useTableContext must be used within a TableContext");return G},H=(0,g.createContext)(void 0),J=function(){var G=useContext(H);if(G===void 0)throw new Error("useTableContext must be used within a TableContext");return G},q=(0,g.createContext)({variantStandard:A.Body}),ie=function(){var G=(0,g.useContext)(q);if(G===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return G},k=e("./node_modules/react/jsx-runtime.js"),ne=["children","selectRows","onChange","selectedValue","className"];function pe(N,G){if(N==null)return{};var te=_e(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function _e(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var ye=function(G){var te=G.children,oe=G.selectRows,ee=oe===void 0?!1:oe,ue=G.onChange,We=G.selectedValue,Ce=G.className,Re=pe(G,ne);return(0,k.jsx)("table",Object.assign({},Re,{className:v()(x().Table,Ce),children:(0,k.jsx)(L.Provider,{value:{selectRows:ee,onChange:ue,selectedValue:We},children:te})}))};ye.displayName="Table";const ae=null;try{ye.displayName="Table",ye.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:ye.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(N){}var Q=e("./src/components/Table/TableHeader.module.css"),d=e.n(Q),p=["children","className"];function c(N,G){if(N==null)return{};var te=y(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function y(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var m=function(G){var te=G.children,oe=G.className,ee=c(G,p),ue=A.Header;return(0,k.jsx)(q.Provider,{value:{variantStandard:ue},children:(0,k.jsx)("thead",Object.assign({},ee,{className:v()(d()["table-header"],oe),children:te}))})};m.displayName="TableHeader";try{m.displayName="TableHeader",m.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:m.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(N){}var u=e("./src/components/Table/TableCell.module.css"),b=e.n(u),D;function U(){return U=Object.assign?Object.assign.bind():function(N){for(var G=1;G<arguments.length;G++){var te=arguments[G];for(var oe in te)Object.prototype.hasOwnProperty.call(te,oe)&&(N[oe]=te[oe])}return N},U.apply(this,arguments)}var Y=function(G){return g.createElement("svg",U({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},G),D||(D=g.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},F=["children","variant","onChange","sortDirecton","sortKey","className","radiobutton"];function $(N,G){if(N==null)return{};var te=se(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function se(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var X;(function(N){N.Descending="desc",N.Ascending="asc",N.NotSortable="notSortable",N.NotActive="notActive"})(X||(X={}));var me=function(G){var te,oe=G.children,ee=G.variant,ue=G.onChange,We=G.sortDirecton,Ce=We===void 0?X.NotSortable:We,Re=G.sortKey,Ne=G.className,Qe=G.radiobutton,ze=Qe===void 0?!1:Qe,Ke=$(G,F),no=ie(),Ge=no.variantStandard,Je=function(){ue!=null&&Re!=null&&Ce!=null&&ue({sortedColumn:Re,previousSortDirection:Ce})};return(0,k.jsxs)(k.Fragment,{children:[(ee==null?Ge===A.Header:ee==="header")&&(0,k.jsx)("th",Object.assign({},Ke,{className:ze?v()(b()["header-table-cell-radiobutton"],Ne):v()(b()["header-table-cell"],Ne),children:(0,k.jsxs)("div",{className:Ce!=X.NotSortable?v()(b()["container-sortable"]):v()(b().container),onClick:function(){return Je()},onKeyUp:function(oo){(oo.key==="Enter"||oo.key===" ")&&Je()},role:Ce!=X.NotSortable?"button":void 0,tabIndex:Ce!=X.NotSortable?0:void 0,children:[(0,k.jsx)("div",{className:v()(b().input),children:oe}),Ce!=X.NotSortable&&(0,k.jsx)(Y,{"aria-label":"Sortering","data-testid":"sort-icon",className:v()(b().icon,(te={},te[b()["icon-asc"]]=Ce===X.Ascending,te[b()["icon-desc"]]=Ce===X.Descending,te))})]})})),(ee==null?Ge===A.Body:ee==="body")&&(0,k.jsx)("td",Object.assign({},Ke,{className:ze?v()(b()["body-table-cell-radiobutton"],Ne):v()(b()["body-table-cell"],Ne),children:(0,k.jsx)("div",{className:ze?v()(b()["radio-button"]):v()(b().input),children:oe})})),Ge===A.Footer&&(0,k.jsx)("td",Object.assign({},Ke,{className:v()(Ne),children:(0,k.jsx)("div",{className:v()(b().input),children:oe})}))]})};const ve=null;try{me.displayName="TableCell",me.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:me.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(N){}var le=e("./src/components/Table/TableRow.module.css"),de=e.n(le),B=["children","rowData","selectSort","className"];function Z(N,G){if(N==null)return{};var te=re(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function re(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var ce=function(G){var te,oe=G.children,ee=G.rowData,ue=G.selectSort,We=ue===void 0?"":ue,Ce=G.className,Re=Z(G,B),Ne=ie(),Qe=Ne.variantStandard,ze=K(),Ke=ze.onChange,no=ze.selectedValue,Ge=ze.selectRows,Je=function(){Ke!=null&&Ge&&Qe===A.Body&&ee&&Ke({selectedValue:ee})},Ye=Ge&&typeof ee!="undefined"&&JSON.stringify(ee)===JSON.stringify(no);return(0,k.jsx)(H.Provider,{value:{selectSort:We},children:(0,k.jsx)("tr",Object.assign({},Re,{className:v()(de().TableRow,(te={},te[de()["table-row--selected"]]=Ye,te[de()["table-row--body"]]=Qe===A.Body&&Ge&&!Ye,te),Ce),onClick:Je,children:oe}))})};ce.displayName="TableRow";const fe=null;try{ce.displayName="TableRow",ce.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:ce.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(N){}var he=e("./src/components/Table/TableBody.module.css"),be=e.n(he),Te=["children","className"];function ge(N,G){if(N==null)return{};var te=je(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function je(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var Oe=function(G){var te=G.children,oe=G.className,ee=ge(G,Te),ue=A.Body;return(0,k.jsx)(q.Provider,{value:{variantStandard:ue},children:(0,k.jsx)("tbody",Object.assign({},ee,{className:v()(be().TableBody,oe),children:te}))})};Oe.displayName="TableBody";const Ee=null;try{Oe.displayName="TableBody",Oe.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Oe.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(N){}var Me=e("./src/components/Table/Table.stories.module.css"),De=e.n(Me),Ae=e("./src/components/Table/TableFooter.module.css"),Xe=e.n(Ae),Fe=["children","className"];function qe(N,G){if(N==null)return{};var te=$e(N,G),oe,ee;if(Object.getOwnPropertySymbols){var ue=Object.getOwnPropertySymbols(N);for(ee=0;ee<ue.length;ee++)oe=ue[ee],!(G.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(N,oe)||(te[oe]=N[oe]))}return te}function $e(N,G){if(N==null)return{};var te={},oe=Object.keys(N),ee,ue;for(ue=0;ue<oe.length;ue++)ee=oe[ue],!(G.indexOf(ee)>=0)&&(te[ee]=N[ee]);return te}var Ue=function(G){var te=G.children,oe=G.className,ee=qe(G,Fe),ue=A.Footer;return(0,k.jsx)(q.Provider,{value:{variantStandard:ue},children:(0,k.jsx)("tfoot",Object.assign({},ee,{className:v()(Xe()["table-footer"],oe),children:te}))})};Ue.displayName="TableFooter";const eo=null;try{Ue.displayName="TableFooter",Ue.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Ue.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(N){}function He(N,G){return ro(N)||so(N,G)||lo(N,G)||ao()}function ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(N,G){if(!!N){if(typeof N=="string")return to(N,G);var te=Object.prototype.toString.call(N).slice(8,-1);if(te==="Object"&&N.constructor&&(te=N.constructor.name),te==="Map"||te==="Set")return Array.from(N);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return to(N,G)}}function to(N,G){(G==null||G>N.length)&&(G=N.length);for(var te=0,oe=new Array(G);te<G;te++)oe[te]=N[te];return oe}function so(N,G){var te=N==null?null:typeof Symbol!="undefined"&&N[Symbol.iterator]||N["@@iterator"];if(te!=null){var oe=[],ee=!0,ue=!1,We,Ce;try{for(te=te.call(N);!(ee=(We=te.next()).done)&&(oe.push(We.value),!(G&&oe.length===G));ee=!0);}catch(Re){ue=!0,Ce=Re}finally{try{!ee&&te.return!=null&&te.return()}finally{if(ue)throw Ce}}return oe}}function ro(N){if(Array.isArray(N))return N}var io=`import type { ChangeEvent } from 'react';
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
`,uo={BasicTable:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}},SelectRows:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}}},Se="";const xe={title:"Components/Table",component:ye,parameters:{design:(0,P.vc)([{type:"figma",url:Se},{type:"link",url:Se}]),docs:{page:function(){return(0,k.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function Pe(N,G,te,oe,ee){return{applicationNr:N,product:G,status:te,imageSrc:oe,imageAlt:ee}}var Ve=[Pe("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),Pe("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),Pe("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),Pe("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),Pe("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),Pe("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),Pe("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),Pe("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],Le=function(G){var te=(0,g.useState)({}),oe=He(te,2),ee=oe[0],ue=oe[1],We=(0,g.useState)({sortedColumn:"",sortDirection:X.NotActive}),Ce=He(We,2),Re=Ce[0],Ne=Ce[1],Qe=(0,g.useState)(5),ze=He(Qe,2),Ke=ze[0],no=ze[1],Ge=(0,g.useState)(0),Je=He(Ge,2),Ye=Je[0],oo=Je[1],_o={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},go=function(Be){var we=Be.selectedValue;ue(we)},mo=function(Be){var we=Be.sortedColumn,po=Be.previousSortDirection;po===X.Ascending?Ne({sortedColumn:we,sortDirection:X.Descending}):po===X.Descending?Ne({sortedColumn:we,sortDirection:X.Ascending}):Ne({sortedColumn:we,sortDirection:X.Descending})},yo=function(Be){no(parseInt(Be.target.value,10)),oo(0)},vo=function(Be){oo(Be)},fo=function(Be){var we={applicationNr:Be.target.value};ue(we)},bo=function(Be){var we={applicationNr:Be.applicationNr};return JSON.stringify(ee)==JSON.stringify(we)};return(0,k.jsxs)(ye,{selectRows:G.selectRows,onChange:go,selectedValue:ee,children:[(0,k.jsx)(m,{children:(0,k.jsxs)(ce,{children:[G.selectRows&&(0,k.jsx)(me,{radiobutton:!0}),(0,k.jsx)(me,{onChange:mo,sortKey:"S\xF8knadsnr.",sortDirecton:Re.sortedColumn==="S\xF8knadsnr."?Re.sortDirection:X.NotActive,children:"S\xF8knadsnr."}),(0,k.jsx)(me,{sortKey:"Produkt",onChange:mo,sortDirecton:Re.sortedColumn==="Produkt"?Re.sortDirection:X.NotActive,children:"Produkt"}),(0,k.jsx)(me,{children:"Status"}),(0,k.jsx)(me,{children:"Bilde"})]})}),(0,k.jsx)(Oe,{children:Ve.slice(Ye*Ke,Ye*Ke+Ke).map(function(ke){return(0,k.jsxs)(ce,{rowData:{applicationNr:ke.applicationNr},children:[G.selectRows&&(0,k.jsx)(me,{radiobutton:!0,children:(0,k.jsx)(S.E,{name:ke.applicationNr,onChange:function(we){return fo(we)},value:ke.applicationNr,checked:bo(ke),label:ke.applicationNr,hideLabel:!0})}),(0,k.jsx)(me,{children:ke.applicationNr}),(0,k.jsx)(me,{children:ke.product}),(0,k.jsx)(me,{children:ke.status}),(0,k.jsx)(me,{children:(0,k.jsx)("img",{className:v()(De().checkmark),src:ke.imageSrc,alt:ke.imageAlt})})]},ke.applicationNr)})}),(0,k.jsx)(Ue,{children:(0,k.jsx)(ce,{children:(0,k.jsx)(me,{colSpan:5,children:(0,k.jsx)(_.t,{numberOfRows:Ve.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ke,onRowsPerPageChange:yo,currentPage:Ye,setCurrentPage:vo,descriptionTexts:_o})})})})]})};Le.displayName="Template";var Ie=Le.bind({});Ie.args={selectRows:!1},Ie.parameters={docs:{description:{story:""}}};var Ze=Le.bind({});Ze.args={selectRows:!0},Ze.parameters={docs:{description:{story:""}}},Ie.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Ie.parameters),Ze.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Ze.parameters);var co=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>p,__namedExportsOrder:()=>c,default:()=>Q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),R=e("./src/utils/arrayUtils.ts"),I=e("./src/hooks/index.ts"),x=e("./src/components/Tabs/Tabs.module.css"),A=e.n(x),L=e("./node_modules/react/jsx-runtime.js");function K(y,m){return k(y)||ie(y,m)||J(y,m)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(y,m){if(!!y){if(typeof y=="string")return q(y,m);var u=Object.prototype.toString.call(y).slice(8,-1);if(u==="Object"&&y.constructor&&(u=y.constructor.name),u==="Map"||u==="Set")return Array.from(y);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return q(y,m)}}function q(y,m){(m==null||m>y.length)&&(m=y.length);for(var u=0,b=new Array(m);u<m;u++)b[u]=y[u];return b}function ie(y,m){var u=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(u!=null){var b=[],D=!0,U=!1,Y,F;try{for(u=u.call(y);!(D=(Y=u.next()).done)&&(b.push(Y.value),!(m&&b.length===m));D=!0);}catch($){U=!0,F=$}finally{try{!D&&u.return!=null&&u.return()}finally{if(U)throw F}}return b}}function k(y){if(Array.isArray(y))return y}var ne=function(m){return m.replace(/\s/,"_")},pe=function(m){var u=m.activeTab,b=m.items,D=m.onChange,U=(0,n.useId)(),Y=b.map(function(ge){var je=ge.name,Oe=ge.content,Ee=ge.value,Me=ge.tabId,De=ge.panelId,Ae=Ee!=null?Ee:je,Xe=Me!=null?Me:U+ne(Ae)+"-tab",Fe=De!=null?De:U+ne(Ae)+"-panel";return{name:je,content:Oe,value:Ae,tabId:Xe,panelId:Fe}});if(!(0,R.zb)(Y.map(function(ge){var je=ge.value;return je})))throw Error("Each tab value must be unique.");if(u!==void 0&&!Y.some(function(ge){return ge.value===u}))throw Error("The given active tab value must exist in the list of items.");var F=function(je){return Y.findIndex(function(Oe){return Oe.value===je})},$=u!=null?u:Y[0].value,se=(0,n.useState)($),X=K(se,2),me=X[0],ve=X[1],le=(0,n.useState)(F($)),de=K(le,2),B=de[0],Z=de[1];(0,n.useEffect)(function(){return ve($)},[$]);var re=(0,n.useRef)(null),ce=Y.length-1;(0,I.PQ)(function(){var ge;(ge=re.current)===null||ge===void 0||ge.querySelectorAll('[role="tab"]')[B].focus()},[B]);var fe=function(je){me!==je&&D&&D(je),ve(je),Z(F(je))},he=function(){return B!==void 0&&Z(B===ce?0:B+1)},be=function(){return B!==void 0&&Z(B===0?ce:B-1)},Te=function(je){return function(Oe){switch(Oe.key){case"ArrowRight":he();break;case"ArrowLeft":be();break;case"Space":fe(je)}}};return(0,L.jsxs)("div",{className:A().tabs,children:[(0,L.jsx)("div",{className:A().tabs__tablist,ref:re,role:"tablist",children:Y.map(function(ge,je){var Oe=ge.value===me,Ee=T()(A().tabs__tablist__tab,Oe&&A()["tabs__tablist__tab--selected"]);return(0,L.jsx)("button",{"aria-controls":ge.panelId,"aria-selected":Oe,className:Ee,id:ge.tabId,onClick:function(){return fe(ge.value)},onKeyDown:Te(ge.value),role:"tab",tabIndex:B===je?0:-1,children:ge.name},ge.value)})}),(0,L.jsx)("hr",{className:A().tabs__divider}),Y.map(function(ge){return(0,L.jsx)("div",{className:A().tabs__tabpanel,"aria-labelledby":ge.tabId,hidden:ge.value!==me,id:ge.panelId,role:"tabpanel",children:ge.content},ge.panelId)})]})};pe.displayName="Tabs";try{pe.displayName="Tabs",pe.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:pe.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(y){}var _e=`import React from 'react';
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
`,ye={Example:{startLoc:{col:46,line:122},endLoc:{col:74,line:122},startBody:{col:46,line:122},endBody:{col:74,line:122}}},ae="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const Q={title:"Components/Tabs",component:pe,parameters:{design:(0,l.vc)([{type:"figma",url:ae},{type:"link",url:ae}]),docs:{page:function(){return(0,L.jsx)(a.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter."})}}},args:{items:[{name:"Ild",content:(0,L.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,L.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,L.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,L.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var d=function(m){return(0,L.jsx)(pe,Object.assign({},m))};d.displayName="Template";var p=d.bind({});p.args={},p.parameters={docs:{description:{story:"This is how the component might look like."}}},p.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},p.parameters);var c=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>R,Disabled:()=>L,Error:()=>I,ReadOnlyConfirm:()=>A,ReadOnlyInfo:()=>x,__namedExportsOrder:()=>K,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/classnames/index.js"),M=e.n(w),O=e("./src/components/TextArea/TextArea.module.css"),W=e.n(O),h=e("./node_modules/react/jsx-runtime.js"),E=["isValid","disabled","readOnly","resize","label"];function g(H,J){if(H==null)return{};var q=P(H,J),ie,k;if(Object.getOwnPropertySymbols){var ne=Object.getOwnPropertySymbols(H);for(k=0;k<ne.length;k++)ie=ne[k],!(J.indexOf(ie)>=0)&&(!Object.prototype.propertyIsEnumerable.call(H,ie)||(q[ie]=H[ie]))}return q}function P(H,J){if(H==null)return{};var q={},ie=Object.keys(H),k,ne;for(ne=0;ne<ie.length;ne++)k=ie[ne],!(J.indexOf(k)>=0)&&(q[k]=H[k]);return q}var C=function(J){var q=J.isValid,ie=q===void 0?!0:q,k=J.disabled,ne=k===void 0?!1:k,pe=J.readOnly,_e=pe===void 0?!1:pe,ye=J.resize,ae=ye===void 0?"none":ye,Q=J.label,d=g(J,E);return(0,h.jsx)(f.SP,{isValid:ie,disabled:ne,readOnly:_e,label:Q,inputId:d.id,inputRenderer:function(c){var y=c.className,m=c.inputId;return(0,h.jsx)("textarea",Object.assign({},d,{id:m,disabled:ne,readOnly:Boolean(_e),className:M()(y,W().TextArea,W()["TextArea--resize-"+ae])}))}})};C.displayName="TextArea";try{C.displayName="TextArea",C.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:C.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(H){}var v=`import React from 'react';
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
`,i={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},_="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const S={title:"Components/TextArea",component:C,parameters:{design:(0,l.vc)([{type:"figma",url:_},{type:"link",url:_}]),docs:{page:function(){return(0,h.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var T=function(J){return(0,h.jsx)(C,Object.assign({},J))};T.displayName="Template";var R=T.bind({});R.args={},R.parameters={docs:{description:{story:"Regular textarea."}}};var I=T.bind({});I.args={isValid:!1},I.parameters={docs:{description:{story:"Textarea displaying error."}}};var x=T.bind({});x.args={readOnly:!0,value:"Some text"},x.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var A=T.bind({});A.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},A.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var L=T.bind({});L.args={disabled:!0,value:"Some text"},L.parameters={docs:{description:{story:"Textarea as disabled."}}},R.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},R.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},I.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},x.parameters),A.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},A.parameters),L.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},L.parameters);var K=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>q,Disabled:()=>_e,Error:()=>k,NumberInput:()=>ie,ReadOnlyConfirm:()=>pe,ReadOnlyInfo:()=>ne,__namedExportsOrder:()=>ye,default:()=>H});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),h=e("./node_modules/classnames/index.js"),E=e.n(h),g=e("./node_modules/react-number-format/dist/react-number-format.es.js"),P=function(Q){return Q.format!==void 0},C=function(Q){return Q.format===void 0},v=function(Q,d){return d&&C(d)?numericFormatter(Q,d):d&&P(d)?patternFormatter(Q,d):Q},i=e("./node_modules/react/jsx-runtime.js"),_=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function S(ae,Q){if(ae==null)return{};var d=T(ae,Q),p,c;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(ae);for(c=0;c<y.length;c++)p=y[c],!(Q.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(ae,p)||(d[p]=ae[p]))}return d}function T(ae,Q){if(ae==null)return{};var d={},p=Object.keys(ae),c,y;for(y=0;y<p.length;y++)c=p[y],!(Q.indexOf(c)>=0)&&(d[c]=ae[c]);return d}var R=function(Q){var d=Q.values,p=Q.sourceInfo;p.event.target.value=d.value.trim()},I=function(Q,d,p){var c=Q.target,y=Q.key,m=c.selectionStart,u=c.selectionEnd,b=c.value,D=b===void 0?"":b;if(m!==null&&u!==null){var U=D[0]==="-",Y=(d==null?void 0:d.length)||0+(U?1:0),F=(p==null?void 0:p.length)||0;U&&u<=Y&&y==="Backspace"?c.setSelectionRange(1,1):c.setSelectionRange(Math.min(Math.max(m,Y),D.length-F),Math.max(Math.min(u,D.length-F),Y))}},x=function(Q){var d=Q.id,p=Q.onChange,c=Q.isValid,y=c===void 0?!0:c,m=Q.disabled,u=m===void 0?!1:m,b=Q.readOnly,D=b===void 0?!1:b,U=Q.required,Y=U===void 0?!1:U,F=Q.formatting,$=Q.label,se=S(Q,_),X=function(ve,le){le.source==="event"&&p&&(R({values:ve,sourceInfo:le}),p(le.event))};return(0,i.jsx)(f.SP,{isValid:y,disabled:u,readOnly:D,label:$,inputId:d,inputRenderer:function(ve){var le=ve.className,de=ve.variant,B=ve.inputId,Z={id:B,readOnly:Boolean(D),disabled:u,required:Y,className:E()(le,se.className),style:Object.assign({textAlign:F==null?void 0:F.align},se.style)};return F!=null&&F.number&&C(F.number)?(F.number.prefix&&F.number.prefix[0]==="-"&&(F.number.prefix=" "+F.number.prefix),(0,i.jsx)(g.h3,Object.assign({},Z,F.number,se,{"data-testid":B+"-formatted-number-"+de,onValueChange:X,valueIsNumericString:!0,onKeyDown:function(ce){return I(ce,F.number.prefix,F.number.suffix)}}))):F!=null&&F.number&&P(F.number)?(0,i.jsx)(g.HH,Object.assign({},Z,F.number,se,{"data-testid":B+"-formatted-number-"+de,onValueChange:X,valueIsNumericString:!0})):(0,i.jsx)("input",Object.assign({},Z,se,{"data-testid":B+"-"+de,onChange:p}))}})};x.displayName="TextField";try{x.displayName="TextField",x.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:x.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(ae){}var A=`import React from 'react';
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
`,L={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},K="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const H={title:"Components/TextField",component:x,parameters:{design:(0,l.vc)([{type:"figma",url:K},{type:"link",url:K}]),docs:{page:function(){return(0,i.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var J=function(Q){return(0,i.jsx)(x,Object.assign({},Q))};J.displayName="Template";var q=J.bind({});q.args={},q.parameters={docs:{description:{story:"Regular input field."}}};var ie=J.bind({});ie.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},ie.parameters={docs:{description:{story:"Number input field."}}};var k=J.bind({});k.args={isValid:!1},k.parameters={docs:{description:{story:"Input field displaying error."}}};var ne=J.bind({});ne.args={readOnly:!0,value:"Some text"},ne.parameters={docs:{description:{story:"Input field as readonly-info."}}};var pe=J.bind({});pe.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},pe.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var _e=J.bind({});_e.args={disabled:!0,value:"Some text"},_e.parameters={docs:{description:{story:"Input field as disabled."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},q.parameters),ie.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ie.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},k.parameters),ne.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ne.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},pe.parameters),_e.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},_e.parameters);var ye=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>d,__namedExportsOrder:()=>p,default:()=>ae});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),P=e("./node_modules/classnames/index.js"),C=e.n(P),v=(0,h.createContext)(void 0),i=function(){var y=(0,h.useContext)(v);if(y===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return y},_=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),S=e.n(_),T=e("./node_modules/react/jsx-runtime.js"),R=function(y){var m=y.children,u=y.onChange,b=y.selectedValue,D=function(Y){var F=Y.selectedValue;u({selectedValue:F})};return(0,T.jsx)(v.Provider,{value:{onChange:D,selectedValue:b},children:(0,T.jsx)("div",{className:C()(S()["toggle-button-group"]),"data-testid":"toggle-button-group",children:m})})};R.displayName="ToggleButtonGroup";try{R.displayName="ToggleButtonGroup",R.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:R.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(c){}var I=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),x=e.n(I),A=function(y){var m,u=y.children,b=y.value,D=i(),U=D.onChange,Y=D.selectedValue,F=function(){U({selectedValue:b})};return(0,T.jsx)("button",{"data-testid":"toggle-button",className:C()(x()["toggle-button"],(m={},m[x()["toggle-button--selected"]]=b===Y,m)),onClick:F,type:"button","aria-pressed":b==Y,children:u})};A.displayName="ToggleButton";try{A.displayName="ToggleButton",A.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:A.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(c){}var L=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),K=e.n(L);function H(c,y){return ne(c)||k(c,y)||q(c,y)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(c,y){if(!!c){if(typeof c=="string")return ie(c,y);var m=Object.prototype.toString.call(c).slice(8,-1);if(m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set")return Array.from(c);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return ie(c,y)}}function ie(c,y){(y==null||y>c.length)&&(y=c.length);for(var m=0,u=new Array(y);m<y;m++)u[m]=c[m];return u}function k(c,y){var m=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var u=[],b=!0,D=!1,U,Y;try{for(m=m.call(c);!(b=(U=m.next()).done)&&(u.push(U.value),!(y&&u.length===y));b=!0);}catch(F){D=!0,Y=F}finally{try{!b&&m.return!=null&&m.return()}finally{if(D)throw Y}}return u}}function ne(c){if(Array.isArray(c))return c}var pe=`import React, { useState } from 'react';
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
`,_e={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},ye="";const ae={title:"Components/Toggle button group",component:R,parameters:{design:(0,E.vc)([{type:"figma",url:ye},{type:"link",url:ye}]),docs:{page:function(){return(0,T.jsx)(g.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var Q=function(){var y=(0,h.useState)("left"),m=H(y,2),u=m[0],b=m[1],D=function(Y){var F=Y.selectedValue;b(F)};return(0,T.jsx)("div",{className:K().container,children:(0,T.jsxs)(R,{onChange:D,selectedValue:u,children:[(0,T.jsx)(A,{value:"left",children:"Aktivt valg"}),(0,T.jsx)(A,{value:"right",children:"Mulig valg"})]})})};Q.displayName="Template";var d=Q.bind({});d.args={},d.argTypes={onChange:{control:!1},selectedValue:{control:!1}},d.parameters={docs:{description:{}}},d.parameters=Object.assign({storySource:{source:`() => {
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
}`}},d.parameters);var p=["Example"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),f=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),z=e.n(V),j=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),w=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),M=1.6,O=/(\d*\.?\d+)rem(?=\W|$)/gim,W=function(v){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,_=Math.pow(10,i);return Math.round((v+Number.EPSILON)*_)/_},h=function(v){return typeof v=="string"?v.replace(O,function(i,_){var S=W(_*M);return S+"rem"}):v},E={get:function(v,i){if(i in v){var _=v[i];return typeof _=="object"?new Proxy(_,E):h(_)}}},g=new Proxy(j,E),P=new Proxy(w,E)},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{zx:()=>v,rp:()=>g,qE:()=>E,Wu:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),V=e.n(f),z=e("./src/components/SvgIcon/index.ts"),j=e("./src/components/Button/Button.module.css"),w=e.n(j),M=e("./node_modules/react/jsx-runtime.js"),O=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function W(i,_){if(i==null)return{};var S=h(i,_),T,R;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(i);for(R=0;R<I.length;R++)T=I[R],!(_.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,T)||(S[T]=i[T]))}return S}function h(i,_){if(i==null)return{};var S={},T=Object.keys(i),R,I;for(I=0;I<T.length;I++)R=T[I],!(_.indexOf(R)>=0)&&(S[R]=i[R]);return S}var E;(function(i){i.Small="small",i.Medium="medium",i.Large="large"})(E||(E={}));var g;(function(i){i.Primary="primary",i.Secondary="secondary",i.Success="success",i.Danger="danger",i.Inverted="inverted"})(g||(g={}));var P;(function(i){i.Filled="filled",i.Outline="outline",i.Quiet="quiet"})(P||(P={}));var C=function(_,S){var T,R,I,x=_.children,A=_.color,L=A===void 0?g.Primary:A,K=_.variant,H=K===void 0?P.Filled:K,J=_.size,q=J===void 0?E.Small:J,ie=_.fullWidth,k=ie===void 0?!1:ie,ne=_.dashedBorder,pe=ne===void 0?!1:ne,_e=_.iconPlacement,ye=_e===void 0?"left":_e,ae=_.icon,Q=_.type,d=Q===void 0?"button":Q,p=_.className,c=W(_,O);return(0,M.jsxs)("button",Object.assign({},c,{ref:S,className:V()(w().button,w()["button--"+q],w()["button--"+H],w()["button--"+L],w()["button--"+H+"--"+L],(T={},T[w()["button--full-width"]]=k,T),(R={},R[w()["button--dashed-border"]]=pe,R),(I={},I[w()["button--only-icon"]]=!x&&ae,I),p),type:d,children:[ae&&ye==="left"&&(0,M.jsx)(z.l,{svgIconComponent:ae,className:w().icon}),x,ae&&ye==="right"&&(0,M.jsx)(z.l,{svgIconComponent:ae,className:w().icon})]}))};C.displayName="Button";const v=(0,a.forwardRef)(C)},"./src/components/Checkbox/Checkbox.tsx":(r,t,e)=>{"use strict";e.d(t,{X:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),j=e.n(z),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),M=e("./src/components/Checkbox/Checkbox.module.css"),O=e.n(M),W=e("./node_modules/react/jsx-runtime.js"),h=function(g){var P=g.checkboxId,C=g.checked,v=g.compact,i=g.description,_=g.disabled,S=g.error,T=g.hideLabel,R=g.label,I=g.name,x=g.onChange,A=g.readOnly;return(0,W.jsx)(w.f,{checked:C,className:j()(O().checkbox,C&&O()["checkbox--checked"],S&&O()["checkbox--error"],_&&O()["checkbox--disabled"],v&&O()["checkbox--compact"],A&&O()["checkbox--read-only"]),description:i,disabled:_,hideInput:A,hideLabel:T,inputId:P,label:R,name:I,onChange:x,size:v?w.b.Xsmall:w.b.Small,type:"checkbox",children:(0,W.jsx)("span",{className:O()["visible-box"],children:(0,W.jsx)("span",{className:O()["visible-box__checkmark"]})})})};h.displayName="Checkbox";try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:h.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(E){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(r,t,e)=>{"use strict";e.d(t,{B:()=>V});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ErrorMessage/ErrorMessage.module.css"),a=e.n(l),f=e("./node_modules/react/jsx-runtime.js"),V=function(j){var w=j.id,M=j.children,O=j.ariaLabel;return(0,f.jsx)("div",{"data-testid":"ErrorMessage","aria-label":O,id:w,role:"alertdialog",className:n()(a()["error-message-wrapper"]),children:M})};V.displayName="ErrorMessage";try{V.displayName="ErrorMessage",V.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:V.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(z){}},"./src/components/FieldSet/FieldSet.tsx":(r,t,e)=>{"use strict";e.d(t,{C:()=>M,w:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),a=e.n(l),f=e("./src/components/ErrorMessage/ErrorMessage.tsx"),V=e("./src/components/FieldSet/FieldSet.module.css"),z=e.n(V),j=e("./node_modules/react/jsx-runtime.js"),w;(function(O){O.Xsmall="xsmall",O.Small="small"})(w||(w={}));var M=function(W){var h=W.children,E=W.className,g=W.description,P=W.disabled,C=W.error,v=W.legend,i=W.size,_=i===void 0?w.Small:i;return(0,j.jsxs)("fieldset",{className:a()(z()["field-set"],z()["field-set--"+_],E),disabled:P,children:[v&&(0,j.jsx)("legend",{className:z()["field-set__legend"],children:v}),g&&(0,j.jsx)("p",{className:z()["field-set__description"],children:g}),(0,j.jsx)("div",{className:z()["field-set__content"],children:h}),C&&(0,j.jsx)("div",{className:z()["field-set__error-message"],children:(0,j.jsx)(f.B,{children:C})})]})};M.displayName="FieldSet";try{M.displayName="FieldSet",M.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:M.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(O){}},"./src/components/FieldSet/index.ts":(r,t,e)=>{"use strict";e.d(t,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(r,t,e)=>{"use strict";e.d(t,{t:()=>Q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),h=e("./node_modules/classnames/index.js"),E=e.n(h),g=e("./src/components/Pagination/Pagination.module.css"),P=e.n(g),C,v;function i(){return i=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},i.apply(this,arguments)}var _=function(p){return W.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),C||(C=W.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),v||(v=W.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},S,T;function R(){return R=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},R.apply(this,arguments)}var I=function(p){return W.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),S||(S=W.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),T||(T=W.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},x;function A(){return A=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},A.apply(this,arguments)}var L=function(p){return W.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),x||(x=W.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},K,H;function J(){return J=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},J.apply(this,arguments)}var q=function(p){return W.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),K||(K=W.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),H||(H=W.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},ie=e("./node_modules/react/jsx-runtime.js");function k(d,p){return ae(d)||ye(d,p)||pe(d,p)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(d,p){if(!!d){if(typeof d=="string")return _e(d,p);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return _e(d,p)}}function _e(d,p){(p==null||p>d.length)&&(p=d.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=d[c];return y}function ye(d,p){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y=[],m=!0,u=!1,b,D;try{for(c=c.call(d);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(U){u=!0,D=U}finally{try{!m&&c.return!=null&&c.return()}finally{if(u)throw D}}return y}}function ae(d){if(Array.isArray(d))return d}var Q=function(p){var c,y,m,u,b=p.numberOfRows,D=p.rowsPerPageOptions,U=p.rowsPerPage,Y=p.onRowsPerPageChange,F=p.currentPage,$=p.setCurrentPage,se=p.descriptionTexts,X=(0,W.useState)(1),me=k(X,2),ve=me[0],le=me[1];(0,W.useEffect)(function(){b<U?le(1):le(Math.ceil(b/U))},[U,b]);var de=function(){F<ve-1&&$(F+1)},B=function(){F>0&&$(F-1)},Z=function(){var ce=1+F*U,fe=U*(F+1)>b?b:U*(F+1);return(0,ie.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ce+"-"+fe+" "+se.of+" "+b})};return(0,ie.jsxs)("div",{className:E()(P()["pagination-wrapper"]),children:[(0,ie.jsx)("span",{style:{marginRight:"26px"},children:se.rowsPerPage}),(0,ie.jsx)("select",{style:{marginRight:"25px"},value:U,onChange:function(ce){return Y(ce)},"aria-label":"rader per side",children:D.map(function(re){return(0,ie.jsx)("option",{value:re,children:re},re)})}),Z(),(0,ie.jsx)("button",{className:E()(P()["icon-button"]),onClick:function(){return $(0)},disabled:F===0,"aria-label":se.navigateFirstPage,"data-testid":"first-page-icon",children:(0,ie.jsx)(L,{className:E()(P()["pagination-icon"],(c={},c[P()["pagination-icon--disabled"]]=F===0,c))})}),(0,ie.jsx)("button",{className:E()(P()["icon-button"]),onClick:function(){return B()},disabled:F===0,"aria-label":se.previousPage,"data-testid":"pagination-previous-icon",children:(0,ie.jsx)(I,{className:E()(P()["pagination-icon"],(y={},y[P()["pagination-icon--disabled"]]=F===0,y))})}),(0,ie.jsx)("button",{className:E()(P()["icon-button"]),onClick:function(){return de()},disabled:F===ve-1,"aria-label":se.nextPage,"data-testid":"pagination-next-icon",children:(0,ie.jsx)(_,{className:E()(P()["pagination-icon"],(m={},m[P()["pagination-icon--disabled"]]=F===ve-1,m))})}),(0,ie.jsx)("button",{className:E()(P()["icon-button"]),onClick:function(){return $(ve-1)},disabled:F===ve-1,"aria-label":se.navigateLastPage,children:(0,ie.jsx)(q,{className:E()(P()["pagination-icon"],(u={},u[P()["pagination-icon--disabled"]]=F===ve-1,u))})})]})};Q.displayName="Pagination";try{Q.displayName="Pagination",Q.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Q.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(d){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>Q,c:()=>pe});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/DesignTokens/index.ts"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js");function g(d,p){return _(d)||i(d,p)||C(d,p)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(d,p){if(!!d){if(typeof d=="string")return v(d,p);var c=Object.prototype.toString.call(d).slice(8,-1);if(c==="Object"&&d.constructor&&(c=d.constructor.name),c==="Map"||c==="Set")return Array.from(d);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return v(d,p)}}function v(d,p){(p==null||p>d.length)&&(p=d.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=d[c];return y}function i(d,p){var c=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(c!=null){var y=[],m=!0,u=!1,b,D;try{for(c=c.call(d);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(U){u=!0,D=U}finally{try{!m&&c.return!=null&&c.return()}finally{if(u)throw D}}return y}}function _(d){if(Array.isArray(d))return d}function S(d){var p=function(U){var Y,F;return(Y=(F=window)===null||F===void 0?void 0:F.matchMedia(U).matches)!==null&&Y!==void 0?Y:!1},c=(0,s.useState)(p(d)),y=g(c,2),m=y[0],u=y[1],b=function(){u(p(d))};return(0,s.useEffect)(function(){var D=window.matchMedia(d);return b(),D.addEventListener("change",b),function(){return D.removeEventListener("change",b)}},[d]),m}var T,R,I;function x(){return x=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},x.apply(this,arguments)}var A=function(p){return s.createElement("svg",x({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),T||(T=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),R||(R=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),I||(I=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},L,K,H;function J(){return J=Object.assign?Object.assign.bind():function(d){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(d[y]=c[y])}return d},J.apply(this,arguments)}var q=function(p){return s.createElement("svg",J({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),L||(L=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),K||(K=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),H||(H=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},ie=e("./src/components/Panel/Panel.module.css"),k=e.n(ie),ne=e("./node_modules/react/jsx-runtime.js"),pe;(function(d){d.Success="success",d.Info="info",d.Warning="warning",d.Error="error"})(pe||(pe={}));var _e=function(p){var c=p.size,y=p.variant;switch(y){case pe.Info:case pe.Error:case pe.Warning:return(0,ne.jsx)(A,{style:{width:c,height:c},"data-testid":"panel-icon-info"});case pe.Success:return(0,ne.jsx)(q,{style:{width:c,height:c},"data-testid":"panel-icon-success"})}},ye=function(p){var c=p.forceMobileLayout,y=S("(max-width: "+l.T.BreakpointsSm+")");return c?!0:y},ae=function(p){var c=p.children;return(0,ne.jsx)("div",{className:n()(k()["panel__pointer-position"]),children:c})};ae.displayName="defaultRenderArrow";var Q=function(p){var c,y=p.renderIcon,m=y===void 0?_e:y,u=p.title,b=p.children,D=p.variant,U=D===void 0?pe.Info:D,Y=p.showPointer,F=Y===void 0?!1:Y,$=p.showIcon,se=$===void 0?!0:$,X=p.forceMobileLayout,me=X===void 0?!1:X,ve=p.renderArrow,le=ve===void 0?ae:ve,de=ye({forceMobileLayout:me}),B=de?l.T.ComponentPanelSizeIconXs:l.T.ComponentPanelSizeIconMd;return(0,ne.jsxs)("div",{className:n()(k().panel,(c={},c[k()["panel--mobile-layout"]]=de,c)),children:[F&&le({children:(0,ne.jsx)("div",{"data-testid":"panel-pointer",className:n()(k().panel__pointer,k()["panel__pointer--"+U])})}),(0,ne.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(k()["panel__content-wrapper"],k()["panel__content-wrapper--"+U]),children:[se&&(0,ne.jsx)("div",{"data-testid":"panel-icon-wrapper",className:k()["panel__icon-wrapper"],children:m({size:B,variant:U})}),(0,ne.jsxs)("div",{className:k().panel__content,children:[u&&(0,ne.jsx)("h2",{className:k().panel__header,children:u}),(0,ne.jsx)("div",{className:k().panel__body,children:b})]})]})]})};Q.displayName="Panel";try{Q.displayName="Panel",Q.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:Q.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(d){}},"./src/components/RadioButton/RadioButton.tsx":(r,t,e)=>{"use strict";e.d(t,{E:()=>E,j:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),j=e.n(z),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),M=e("./src/components/RadioButton/RadioButton.module.css"),O=e.n(M),W=e("./node_modules/react/jsx-runtime.js"),h;(function(g){g.Xsmall="xsmall",g.Small="small"})(h||(h={}));var E=function(P){var C=P.checked,v=P.description,i=P.disabled,_=P.error,S=P.hideLabel,T=P.label,R=P.name,I=P.onChange,x=P.radioId,A=P.size,L=A===void 0?h.Small:A,K=P.value;return(0,W.jsx)(w.f,{checked:C,className:j()(O().radio,O()["radio--"+L],C&&O()["radio--checked"],_&&O()["radio--error"],i&&O()["radio--disabled"]),description:v,disabled:i,hideLabel:S,inputId:x,label:T,name:R,onChange:I,size:L===h.Xsmall?w.b.Xsmall:w.b.Small,type:"radio",value:K,children:(0,W.jsx)("span",{className:O()["visible-button"],children:(0,W.jsx)("span",{className:O()["visible-button__checkmark"]})})})};E.displayName="RadioButton";try{E.displayName="RadioButton",E.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:E.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(g){}},"./src/components/RadioButton/index.ts":(r,t,e)=>{"use strict";e.d(t,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(r,t,e)=>{"use strict";e.d(t,{P:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),_=e("./node_modules/react/index.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),R=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),I=e("./src/components/_InputWrapper/index.ts"),x=e("./src/components/Select/MultiSelectItem.module.css"),A=e.n(x),L=e("./node_modules/react/jsx-runtime.js"),K=function(u){var b=u.deleteButtonLabel,D=u.disabled,U=u.onDeleteButtonClick,Y=u.label;return(0,L.jsxs)("span",{className:A()["multi-select-item"],children:[(0,L.jsx)("span",{children:Y}),(0,L.jsx)("button",{"aria-label":b,className:A()["multi-select-item__delete-button"],disabled:D,onClick:U,children:(0,L.jsx)("span",{className:A()["multi-select-item__delete-button__cross"]})})]})};K.displayName="MultiSelectItem";try{K.displayName="MultiSelectItem",K.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:K.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(m){}var H=e("./src/hooks/index.ts"),J=e("./src/components/Select/Select.module.css"),q=e.n(J);function ie(m){return pe(m)||ne(m)||ae(m)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function pe(m){if(Array.isArray(m))return Q(m)}function _e(m,u){return p(m)||d(m,u)||ae(m,u)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(m,u){if(!!m){if(typeof m=="string")return Q(m,u);var b=Object.prototype.toString.call(m).slice(8,-1);if(b==="Object"&&m.constructor&&(b=m.constructor.name),b==="Map"||b==="Set")return Array.from(m);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return Q(m,u)}}function Q(m,u){(u==null||u>m.length)&&(u=m.length);for(var b=0,D=new Array(u);b<u;b++)D[b]=m[b];return D}function d(m,u){var b=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(b!=null){var D=[],U=!0,Y=!1,F,$;try{for(b=b.call(m);!(U=(F=b.next()).done)&&(D.push(F.value),!(u&&D.length===u));U=!0);}catch(se){Y=!0,$=se}finally{try{!U&&b.return!=null&&b.return()}finally{if(Y)throw $}}return D}}function p(m){if(Array.isArray(m))return m}var c={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},y=function(u){var b=u.disabled,D=u.error,U=u.hideLabel,Y=u.inputId,F=u.label,$=u.multiple,se=u.onChange,X=u.options,me=u.value,ve=X.map(function(Se){return Se.value});if(ve.length!==new Set(ve).size)throw Error("Each value in the option list must be unique.");var le=(0,_.useState)($?me!=null?me:[]:[]),de=_e(le,2),B=de[0],Z=de[1],re=(0,_.useState)($?void 0:me),ce=_e(re,2),fe=ce[0],he=ce[1],be=X.findIndex(function(Se){return Se.value===fe}),Te=(0,_.useState)(!1),ge=_e(Te,2),je=ge[0],Oe=ge[1];(0,H.OR)("click",function(){return Oe(!1)}),(0,H.OR)("keydown",function(){return Oe(!0)});var Ee=(0,_.useState)(!1),Me=_e(Ee,2),De=Me[0],Ae=Me[1],Xe=(0,_.useRef)(null),Fe=(0,_.useRef)(null);(0,_.useEffect)(function(){var Se=Xe.current;if(Se){var xe=Se.offsetHeight,Pe=Se.getElementsByTagName("li")[0].offsetHeight,Ve=Se.scrollTop,Le=Ve+xe,Ie=be*Pe,Ze=Ie+Pe,co=Ie>=Ve&&Ze<=Le;co||(Ie<Ve?Se.scrollTop=Ie:Se.scrollTop=Ze-xe)}},[be]);var qe=function(xe){var Pe;return(Pe=X.find(function(Ve){return Ve.value===xe}))!==null&&Pe!==void 0?Pe:{label:"",value:""}},$e=function(xe,Pe){B!=null&&B.length||he(Pe),Z(xe),se&&se(xe)},Ue=function(xe){he(xe),Ae(!1),se&&se(xe)},eo=function(xe){$?B.includes(xe)?He(xe):$e([].concat(ie(B),[xe]),xe):Ue(xe)},He=function(xe){$e(B.filter(function(Pe){return Pe!==xe}),xe)},ao=function(){$e([])},lo=(0,_.useCallback)(function(){if(fe===void 0)he(X[0].value);else{var Se=be+1;Se>=0&&Se<X.length&&he(X[Se].value)}Ae(!0)},[fe,be,he,X]),to=(0,_.useCallback)(function(){if(fe===void 0)he(X[X.length-1].value);else{var Se=be-1;Se>=0&&Se<X.length&&he(X[Se].value)}Ae(!0)},[fe,be,he,X]);(0,H.OG)(c.ArrowDown,function(){return De&&lo()}),(0,H.OG)(c.ArrowUp,function(){return De&&to()}),(0,H.OG)(c.Enter,function(){return De&&$&&fe&&eo(fe)});var so=function(xe){return fe===xe},ro=function(xe){return $?B.includes(xe):so(xe)},io=(0,_.useId)(),uo=Fe.current?"calc("+Fe.current.offsetWidth+"px + 2 * "+R.component.input.border_width.default.value+")":void 0;return(0,L.jsxs)("div",{className:T()(q().select,q()["select--"+($?"multiple":"single")],De&&q()["select--expanded"],b&&q()["select--disabled"],je&&q()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,L.jsx)(I.SP,{disabled:b,inputId:Y,inputRenderer:function(xe){var Pe=xe.className,Ve=xe.inputId;return(0,L.jsxs)("span",{className:T()(Pe,q().select__field),ref:Fe,children:[$&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("span",{className:q()["select--multiple__field__values"],children:B.map(qe).map(function(Le){return(0,L.jsx)(K,{deleteButtonLabel:Le.deleteButtonLabel,disabled:b!=null?b:!1,label:Le.label,onDeleteButtonClick:function(){return He(Le.value)}},Le.value)})}),(0,L.jsx)("button",{"aria-label":u.deleteButtonLabel,className:q()["select--multiple__field__delete-button"],disabled:!B.length||b,onClick:function(){return ao()},children:(0,L.jsx)("span",{className:q()["select--multiple__field__delete-button__cross"]})})]}),(0,L.jsxs)("button",{"aria-controls":io,"aria-expanded":De,"aria-label":F,className:q().select__field__button,disabled:b,id:Ve,onBlur:function(){return Ae(!1)},onClick:function(){return Ae(!De)},onKeyDown:function(Ie){Object.values(c).includes(Ie.key)&&(Ie.preventDefault(),Ae(!0))},role:"combobox",value:$?B:fe,children:[!$&&(0,L.jsx)("span",{className:q()["select--single__field__value"],children:qe(fe).label}),(0,L.jsx)("span",{className:q()["select__field__arrow-wrapper"],children:(0,L.jsx)("span",{className:q()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!D,label:U?void 0:F,noFocusEffect:$,noPadding:!0,readOnly:!1}),(0,L.jsx)("ul",{className:q()["select__option-list"],id:io,ref:Xe,role:"listbox",style:{width:uo},children:X.map(function(Se){return(0,L.jsx)("li",{"aria-selected":ro(Se.value),className:T()(q()["select__option-list__option"],ro(Se.value)&&q()["select__option-list__option--selected"],$&&so(Se.value)&&q()["select--multiple__option-list__option--focused"]),onClick:function(){return eo(Se.value)},onMouseDown:function(Pe){return Pe.preventDefault()},onKeyDown:function(Pe){return Pe.preventDefault()},role:"option",value:Se.value,children:Se.label},Se.value)})})]})};y.displayName="Select";try{y.displayName="Select",y.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:y.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(m){}},"./src/components/SvgIcon/index.ts":(r,t,e)=>{"use strict";e.d(t,{l:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),f=["svgIconComponent"];function V(w,M){if(w==null)return{};var O=z(w,M),W,h;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);for(h=0;h<E.length;h++)W=E[h],!(M.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(w,W)||(O[W]=w[W]))}return O}function z(w,M){if(w==null)return{};var O={},W=Object.keys(w),h,E;for(E=0;E<W.length;E++)h=W[E],!(M.indexOf(h)>=0)&&(O[h]=w[h]);return O}var j=function(M){var O=M.svgIconComponent,W=V(M,f);return(0,a.isValidElement)(O)?(0,a.cloneElement)(O,Object.assign({},W)):null};try{j.displayName="SvgIcon",j.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:j.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(w){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(r,t,e)=>{"use strict";e.d(t,{b:()=>W,f:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),j=e.n(z),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),M=e.n(w),O=e("./node_modules/react/jsx-runtime.js"),W;(function(E){E.Xsmall="xsmall",E.Small="small"})(W||(W={}));var h=function(g){var P=g.checked,C=g.children,v=g.className,i=g.description,_=g.disabled,S=g.hideInput,T=g.hideLabel,R=g.inputId,I=g.label,x=g.name,A=g.onChange,L=g.size,K=g.type,H=g.value,J=(0,V.useId)(),q=R!=null?R:"input-"+J,ie=I?q+"-label":void 0,k=i?q+"-description":void 0,ne=I&&!T;return(0,O.jsxs)("label",{className:j()(M().template,M()["template--"+L],_&&M()["template--disabled"],v),htmlFor:R,children:[!S&&(0,O.jsxs)("span",{className:M()["template__input-wrapper"],children:[(0,O.jsx)("input",{"aria-describedby":k,"aria-label":ne?void 0:I,"aria-labelledby":ne?ie:void 0,checked:P!=null?P:!1,className:M()["template__input-wrapper__input"],disabled:_,id:q,name:x,onChange:_?void 0:A,type:K,value:H}),(0,O.jsx)("span",{className:M()["template__input-wrapper__visible-box"],children:C})]}),(ne||i)&&(0,O.jsxs)("span",{className:M()["template__label-and-description"],children:[ne&&(0,O.jsx)("span",{className:M()["template__label-and-description__label"],id:ie,children:I}),i&&(0,O.jsx)("span",{className:M()["template__label-and-description__description"],id:k,children:i})]})]})};h.displayName="CheckboxRadioTemplate";try{h.displayName="CheckboxRadioTemplate",h.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:h.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(E){}},"./src/components/_InputWrapper/index.ts":(r,t,e)=>{"use strict";e.d(t,{SP:()=>C,Hx:()=>a});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l;(function(v){v.Default="default",v.Error="error",v.Disabled="disabled",v.ReadOnlyInfo="readonly-info",v.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var a;(function(v){v.ReadOnlyInfo="readonly-info",v.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var f;(function(v){v.None="none",v.Error="error",v.Search="search"})(f||(f={}));var V=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=i.readOnly,S=_===void 0?!1:_,T=i.disabled,R=T===void 0?!1:T,I=i.isValid,x=I===void 0?!0:I,A=i.isSearch,L=A===void 0?!1:A,K=f.None;return L&&(K=f.Search),R?{variant:l.Disabled,iconVariant:K}:S===!0||S===a.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:K}:S===a.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:K}:x===!1?{variant:l.Error,iconVariant:f.Error}:{variant:l.Default,iconVariant:K}},z;function j(){return j=Object.assign?Object.assign.bind():function(v){for(var i=1;i<arguments.length;i++){var _=arguments[i];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(v[S]=_[S])}return v},j.apply(this,arguments)}var w=function(i){return s.createElement("svg",j({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),z||(z=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},M;function O(){return O=Object.assign?Object.assign.bind():function(v){for(var i=1;i<arguments.length;i++){var _=arguments[i];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(v[S]=_[S])}return v},O.apply(this,arguments)}var W=function(i){return s.createElement("svg",O({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),M||(M=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},h=e("./src/components/_InputWrapper/InputWrapper.module.css"),E=e.n(h),g=e("./node_modules/react/jsx-runtime.js"),P=function(i){var _=i.variant,S=i.disabled,T=S===void 0?!1:S;if(_===f.Error)return(0,g.jsx)("div",{className:E().InputWrapper__icon,children:(0,g.jsx)(w,{"data-testid":"input-icon-error"})});if(_===f.Search){var R;return(0,g.jsx)("div",{className:n()(E().InputWrapper__icon,(R={},R[E()["InputWrapper__icon--disabled"]]=T,R)),children:(0,g.jsx)(W,{"data-testid":"input-icon-search"})})}return null};try{P.displayName="Icon",P.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:P.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(v){}var C=function(i){var _,S=i.isValid,T=S===void 0?!0:S,R=i.disabled,I=R===void 0?!1:R,x=i.readOnly,A=x===void 0?!1:x,L=i.isSearch,K=L===void 0?!1:L,H=i.label,J=i.inputId,q=i.inputRenderer,ie=i.noFocusEffect,k=i.noPadding,ne=(0,s.useId)(),pe=J!=null?J:ne,_e=V({readOnly:A,disabled:I,isValid:T,isSearch:K}),ye=_e.variant,ae=_e.iconVariant;return(0,g.jsxs)(g.Fragment,{children:[H&&(0,g.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(E().InputWrapper__label),htmlFor:pe,children:H}),(0,g.jsxs)("div",{"data-testid":"InputWrapper",className:n()(E().InputWrapper,E()["InputWrapper--"+ye],(_={},_[E()["InputWrapper--search"]]=K,_[E()["InputWrapper--with-focus-effect"]]=!ie,_[E()["InputWrapper--with-padding"]]=!k,_)),children:[(0,g.jsx)(P,{variant:ae,disabled:I}),q({className:E().InputWrapper__field,inputId:pe,variant:ye})]})]})};try{C.displayName="InputWrapper",C.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:C.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(v){}},"./src/hooks/index.ts":(r,t,e)=>{"use strict";e.d(t,{OR:()=>o,OG:()=>n,D9:()=>l,PQ:()=>a});var s=e("./node_modules/react/index.js");function o(f,V){(0,s.useEffect)(function(){return document.addEventListener(f,V),function(){return document.removeEventListener(f,V)}},[f,V])}function n(f,V){(0,s.useEffect)(function(){var z=function(w){w.key===f&&V()};return document.addEventListener("keydown",z),function(){return document.removeEventListener("keydown",z)}},[f,V])}function l(f){var V=(0,s.useRef)();return(0,s.useEffect)(function(){V.current=f},[f]),V.current}var a=function(V,z){var j=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(j.current)j.current=!1;else return V()},z)}},"./src/utils/arrayUtils.ts":(r,t,e)=>{"use strict";e.d(t,{cO:()=>M,zb:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),z=e.n(V),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e.n(j);function M(h,E){if(h===E)return!0;if(h===void 0||E===void 0||h.length!==E.length)return!1;for(var g in h)if(h[g]!==E[g])return!1;return!0}function O(h){return h[h.length-1]}function W(h){return h.length===new Set(h).size}},"./storybook-init-framework-entry.js":(r,t,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(r,t,e)=>{"use strict";e.d(t,{r:()=>f});var s=e("./node_modules/react/index.js"),o,n,l;function a(){return a=Object.assign?Object.assign.bind():function(V){for(var z=1;z<arguments.length;z++){var j=arguments[z];for(var w in j)Object.prototype.hasOwnProperty.call(j,w)&&(V[w]=j[w])}return V},a.apply(this,arguments)}var f=function(z){return s.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},z),o||(o=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),a.locals={accordion:"accordion---oQBwV"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),a.locals={container:"container---_OBRF"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion-header---NEcyL {
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
`,""]),a.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),a.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),a.push([r.id,`html {
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
`,""]),a.locals={};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.button---AisLs {
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
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.button--large---ajmmm {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
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
`,""]),a.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.checkbox---sy8lK {
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
`,""]),a.locals={checkbox:"checkbox---sy8lK","checkbox--compact":"checkbox--compact---SWP0L","checkbox--error":"checkbox--error---dOSpU","checkbox--checked":"checkbox--checked---xvne_","checkbox--disabled":"checkbox--disabled---Q4bxl","checkbox--read-only":"checkbox--read-only---PrpNx","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.checkbox-group---Ws6hw {
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
`,""]),a.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group--vertical":"checkbox-group--vertical---qFiAe","checkbox-group--horizontal":"checkbox-group--horizontal---sbdQV"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.svg---cRnN3 {
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
`,""]),a.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),a.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.field-set---WtvOy {
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

.field-set--xsmall---ApLMF {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
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
`,""]),a.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.list---Xw1lu {
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
`,""]),a.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),a.locals={container:"container---sf7W5"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.list-item---aLk6z {
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
`,""]),a.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),a.locals={map:"map---Z2PfI"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),a.locals={page:"page---LVMNK"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),a.locals={"page-content":"page-content---ZIuS7"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.page-header---bt29G {
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

.page-header--primary---tMRjo {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.page-header--success---ZUxkH {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.page-header--small---cDICw {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.page-header--medium---wg1ER {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`,""]),a.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH","page-header--small":"page-header--small---cDICw","page-header--medium":"page-header--medium---wg1ER"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.pagination-icon---iNvyI {
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
`,""]),a.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE","icon-button":"icon-button---AiFnU"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .panel---Cn6JI {
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
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
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
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
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
`,""]),a.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),a.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.radio---S0hlk {
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
`,""]),a.locals={radio:"radio---S0hlk","radio--small":"radio--small---uN_5E","radio--xsmall":"radio--xsmall---tgsCS","radio--error":"radio--error---tU7TP","radio--checked":"radio--checked---b1pmT","radio--disabled":"radio--disabled---adqq7","visible-button":"visible-button---PkY72","visible-button__checkmark":"visible-button__checkmark---OzITh"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.radio-group---BsvK3 {
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
`,""]),a.locals={"radio-group":"radio-group---BsvK3","radio-group--xsmall":"radio-group--xsmall---x_9yu","radio-group--small":"radio-group--small---GIoae","radio-group--vertical":"radio-group--vertical---YkxyR","radio-group--horizontal":"radio-group--horizontal---T4MpH"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.multi-select-item---KQ3Ws {
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
`,""]),a.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.select---eatbZ {
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
`,""]),a.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`Table {
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
`,""]),a.locals={};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),a.locals={};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),a.locals={TableBody:"TableBody---cpO70"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.header-table-cell---zvgNX {
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
`,""]),a.locals={"header-table-cell":"header-table-cell---zvgNX","header-table-cell-radiobutton":"header-table-cell-radiobutton---raQCE","body-table-cell":"body-table-cell---cCxyS","body-table-cell-radiobutton":"body-table-cell-radiobutton---aoOCt",image:"image---Jz7hI",input:"input---jn1Id","radio-button":"radio-button---Bsw2x","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-footer":"table-footer---fVxHQ"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-header":"table-header---DnjKf"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TableRow---XoYrl {
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
`,""]),a.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.tabs---dxRcK {
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
  position: relative;
  z-index: 1;
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
}

.tabs__tabpanel---FepKw {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`,""]),a.locals={tabs:"tabs---dxRcK",tabs__tablist:"tabs__tablist---_oC5W",tabs__tablist__tab:"tabs__tablist__tab---n25P8","tabs__tablist__tab--selected":"tabs__tablist__tab--selected---kffoD",tabs__divider:"tabs__divider---hR5Rm",tabs__tabpanel:"tabs__tabpanel---FepKw"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.TextArea---kkLod {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
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
`,""]),a.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.toggle-button---VbrSe {
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

.toggle-button--selected---eDtcc {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.toggle-button---VbrSe:not(.toggle-button--selected---eDtcc):hover {
  background-color: var(--colors-blue-300);
}
`,""]),a.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.toggle-button-group---xdsvq {
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
`,""]),a.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`/* breakpoints-xs */
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
`,""]),a.locals={container:"container---_zb20"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.template---CPXze {
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
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.template--small---Ctnml {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
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
`,""]),a.locals={template:"template---CPXze","template--xsmall":"template--xsmall---mGweJ","template--small":"template--small---Ctnml","template--disabled":"template--disabled---ADFDz","template__input-wrapper":"template__input-wrapper---dLR0V","template__input-wrapper__input":"template__input-wrapper__input---zhrwu","template__input-wrapper__visible-box":"template__input-wrapper__visible-box---fa020","template__label-and-description":"template__label-and-description---z1Efs","template__label-and-description__label":"template__label-and-description__label---Z3XLk","template__label-and-description__description":"template__label-and-description__description---pF8QG"};const f=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.InputWrapper---J_oif {
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
`,""]),a.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const f=a},"./src/components/Accordion/Accordion.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Button/Button.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Map/Map.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/Page.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/Select.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(r,t,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(r,t,e)=>{"use strict";r=e.nmd(r);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],r,!1)}},r=>{var t=s=>r(r.s=s);r.O(0,[140],()=>(t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),t("./storybook-init-framework-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),t("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),t("./.storybook/preview.js-generated-config-entry.js"),t("./generated-stories-entry.cjs")));var e=r.O()}]);
