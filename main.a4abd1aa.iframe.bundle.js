(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>I,__page:()=>_,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(a),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),F=e.n(z),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),A=e("./node_modules/react/index.js"),x=e("./node_modules/@mdx-js/react/index.js"),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(P){for(var D=1;D<arguments.length;D++){var L=arguments[D];for(var N in L)Object.prototype.hasOwnProperty.call(L,N)&&(P[N]=L[N])}return P},E.apply(this,arguments)}function g(P,D){if(P==null)return{};var L=O(P,D),N,$;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(P);for($=0;$<Z.length;$++)N=Z[$],!(D.indexOf(N)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,N)||(L[N]=P[N]))}return L}function O(P,D){if(P==null)return{};var L={},N=Object.keys(P),$,Z;for(Z=0;Z<N.length;Z++)$=N[Z],!(D.indexOf($)>=0)&&(L[$]=P[$]);return L}var C={},v="wrapper";function i(P){var D=P.components,L=g(P,h);return(0,x.mdx)(v,E({},C,L,{components:D,mdxType:"MDXLayout"}),(0,x.mdx)(W.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,x.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,x.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,x.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,x.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,x.mdx)("h3",{id:"npm"},"NPM"),(0,x.mdx)("pre",null,(0,x.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,x.mdx)("h3",{id:"yarn"},"Yarn"),(0,x.mdx)("pre",null,(0,x.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,x.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,x.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,x.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,x.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,x.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,x.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,x.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,x.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,x.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,x.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,x.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,x.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,x.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,x.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,x.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,x.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,x.mdx)("ul",null,(0,x.mdx)("li",{parentName:"ul"},(0,x.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,x.mdx)("li",{parentName:"ul"},(0,x.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}i.displayName="MDXContent",i.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Introduksjon",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,x.mdx)(W.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,x.mdx)(i,null))}});const B=S;var I=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>I,__page:()=>_,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(a),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),F=e.n(z),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(j),A=e("./node_modules/react/index.js"),x=e("./node_modules/@mdx-js/react/index.js"),W=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(P){for(var D=1;D<arguments.length;D++){var L=arguments[D];for(var N in L)Object.prototype.hasOwnProperty.call(L,N)&&(P[N]=L[N])}return P},E.apply(this,arguments)}function g(P,D){if(P==null)return{};var L=O(P,D),N,$;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(P);for($=0;$<Z.length;$++)N=Z[$],!(D.indexOf(N)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,N)||(L[N]=P[N]))}return L}function O(P,D){if(P==null)return{};var L={},N=Object.keys(P),$,Z;for(Z=0;Z<N.length;Z++)$=N[Z],!(D.indexOf($)>=0)&&(L[$]=P[$]);return L}var C={},v="wrapper";function i(P){var D=P.components,L=g(P,h);return(0,x.mdx)(v,E({},C,L,{components:D,mdxType:"MDXLayout"}),(0,x.mdx)(W.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,x.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,x.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,x.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,x.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,x.mdx)("pre",null,(0,x.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}i.displayName="MDXContent",i.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Components/AppWrapper",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,x.mdx)(W.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,x.mdx)(i,null))}});const B=S;var I=["__page"]},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),f=e("./src/components/AppWrapper/AppWrapper.module.css"),z=e("./node_modules/react/jsx-runtime.js"),F=function(x){var W=x.children;return(0,z.jsx)("div",{children:W})};F.displayName="AppWrapper";try{F.displayName="AppWrapper",F.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:F.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(A){}var j=function(x){var W=x.description;return(0,z.jsxs)(F,{children:[(0,z.jsx)(l.Dx,{}),(0,z.jsx)(l.dk,{children:W}),(0,z.jsx)(l.fQ,{includePrimary:!0}),(0,z.jsx)(l.X6,{children:"Props"}),(0,z.jsx)(l.$4,{story:l.Uh})]})};j.displayName="StoryPage";var w=null;try{j.displayName="StoryPage",j.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:j.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(A){}},"./.storybook/preview.js-generated-config-entry.js":(r,t,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>E,parameters:()=>h});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),A=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),W=e("./node_modules/@storybook/theming/dist/esm/index.js"),h={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},W.np.dark),light:Object.assign({},W.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},E=["parameters"],g=e("./node_modules/console-browserify/index.js");function O(i,_){var S=Object.keys(i);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(i);_&&(T=T.filter(function(B){return Object.getOwnPropertyDescriptor(i,B).enumerable})),S.push.apply(S,T)}return S}function C(i){for(var _=1;_<arguments.length;_++){var S=arguments[_]!=null?arguments[_]:{};_%2?O(Object(S),!0).forEach(function(T){v(i,T,S[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(S)):O(Object(S)).forEach(function(T){Object.defineProperty(i,T,Object.getOwnPropertyDescriptor(S,T))})}return i}function v(i,_,S){return _ in i?Object.defineProperty(i,_,{value:S,enumerable:!0,configurable:!0,writable:!0}):i[_]=S,i}Object.keys(s).forEach(function(i){var _=s[i];switch(i){case"args":return(0,A.uc)(_);case"argTypes":return(0,A.v9)(_);case"decorators":return _.forEach(function(T){return(0,A.$9)(T,!1)});case"loaders":return _.forEach(function(T){return(0,A.HZ)(T,!1)});case"parameters":return(0,A.h1)(C({},_),!1);case"argTypesEnhancers":return _.forEach(function(T){return(0,A.My)(T)});case"argsEnhancers":return _.forEach(function(T){return(0,A._C)(T)});case"render":return(0,A.$P)(_);case"globals":case"globalTypes":{var S={};return S[i]=_,(0,A.h1)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return g.log(i+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ye,__namedExportsOrder:()=>ve,default:()=>oe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./node_modules/classnames/index.js"),C=e.n(O),v=e("./.storybook/StoryPage.tsx"),i=e("./src/components/Button/index.ts"),_;(function(G){G.Primary="primary",G.Secondary="secondary"})(_||(_={}));var S=(0,h.createContext)(void 0),T=function(){var re=(0,h.useContext)(S);if(re===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return re},B=e("./src/components/Accordion/Accordion.module.css"),I=e.n(B),P=e("./node_modules/react/jsx-runtime.js"),D=function(re){var ae=re.children,pe=re.open,fe=re.onClick,he=re.iconVariant,je=he===void 0?_.Primary:he,Oe=(0,h.useId)(),_e=(0,h.useId)();return(0,P.jsx)("div",{className:I().accordion,children:(0,P.jsx)(S.Provider,{value:{onClick:fe,open:pe,headerId:Oe,contentId:_e,iconVariant:je},children:ae})})};D.displayName="Accordion";const L=null;try{D.displayName="Accordion",D.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:D.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(G){}var N=e("./src/components/Accordion/AccordionHeader.module.css"),$=e.n(N),Z=e("./src/components/Accordion/AccordionIcon.module.css"),q=e.n(Z),ie;function M(){return M=Object.assign?Object.assign.bind():function(G){for(var re=1;re<arguments.length;re++){var ae=arguments[re];for(var pe in ae)Object.prototype.hasOwnProperty.call(ae,pe)&&(G[pe]=ae[pe])}return G},M.apply(this,arguments)}var te=function(re){return h.createElement("svg",M({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re),ie||(ie=h.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},me;function ue(){return ue=Object.assign?Object.assign.bind():function(G){for(var re=1;re<arguments.length;re++){var ae=arguments[re];for(var pe in ae)Object.prototype.hasOwnProperty.call(ae,pe)&&(G[pe]=ae[pe])}return G},ue.apply(this,arguments)}var ge=function(re){return h.createElement("svg",ue({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re),me||(me=h.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},le=function(){var re,ae,pe=T(),fe=pe.onClick,he=pe.open,je=pe.iconVariant,Oe=[q()["accordion-icon"],(re={},re[q()["accordion-icon--opened"]]=he,re)],_e=(ae={height:20,width:20,className:C()(Oe)},ae["data-testid"]=je,ae.onClick=fe,ae);switch(je){case _.Primary:return(0,P.jsx)(te,Object.assign({},_e));case _.Secondary:return(0,P.jsx)(ge,Object.assign({},_e))}};const J=null;var u=function(re){var ae,pe=re.children,fe=re.actions,he=re.subtitle,je=T(),Oe=je.onClick,_e=je.open,Se=je.headerId,Te=je.contentId;return(0,P.jsxs)("div",{className:C()($()["accordion-header"],(ae={},ae[$()["accordion-header--subtitle"]]=he,ae)),children:[(0,P.jsx)(le,{}),(0,P.jsxs)("button",{className:C()($()["accordion-header__title"]),"aria-expanded":_e,type:"button",onClick:Oe,id:Se,"aria-controls":Te,children:[pe,(he==null?void 0:he.length)&&(0,P.jsx)("div",{"data-testid":"accordion-header-subtitle",className:C()($()["accordion-header__subtitle"]),children:he})]}),(0,P.jsx)("div",{className:C()($()["accordion-header__actions"]),children:fe})]})};u.displayName="AccordionHeader";try{u.displayName="AccordionHeader",u.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:u.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(G){}var p=function(re){var ae=re.children,pe=T(),fe=pe.open,he=pe.contentId,je=pe.headerId;return(0,P.jsx)("div",{children:fe&&(0,P.jsx)("div",{"aria-expanded":fe,id:he,"aria-labelledby":je,children:ae})})};p.displayName="AccordionContent";const c=null;try{p.displayName="AccordionContent",p.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:p.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(G){}var y=e("./src/components/Accordion/Accordion.stories.module.css"),m=e.n(y);function d(G,re){return H(G)||X(G,re)||k(G,re)||b()}function b(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(G,re){if(!!G){if(typeof G=="string")return V(G,re);var ae=Object.prototype.toString.call(G).slice(8,-1);if(ae==="Object"&&G.constructor&&(ae=G.constructor.name),ae==="Map"||ae==="Set")return Array.from(G);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return V(G,re)}}function V(G,re){(re==null||re>G.length)&&(re=G.length);for(var ae=0,pe=new Array(re);ae<re;ae++)pe[ae]=G[ae];return pe}function X(G,re){var ae=G==null?null:typeof Symbol!="undefined"&&G[Symbol.iterator]||G["@@iterator"];if(ae!=null){var pe=[],fe=!0,he=!1,je,Oe;try{for(ae=ae.call(G);!(fe=(je=ae.next()).done)&&(pe.push(je.value),!(re&&pe.length===re));fe=!0);}catch(_e){he=!0,Oe=_e}finally{try{!fe&&ae.return!=null&&ae.return()}finally{if(he)throw Oe}}return pe}}function H(G){if(Array.isArray(G))return G}var Q=`import React, { useState } from 'react';
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
`,U={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},R="";const oe={title:"Components/Accordion",component:D,subcomponents:{AccordionHeader:u,AccordionContent:p},parameters:{design:(0,E.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,P.jsx)(v.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Primary,useActions:!0,subtitle:"Subtitle"}};var ce=function(re){var ae=(0,h.useState)(!1),pe=d(ae,2),fe=pe[0],he=pe[1],je=(0,h.useState)(!1),Oe=d(je,2),_e=Oe[0],Se=Oe[1],Te=function(){he(!fe)},Ee=function(){Se(!_e)},Me="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",De=(0,g.D8)(),Ae=d(De,1),Xe=Ae[0].useActions,Fe=(0,g.D8)(),qe=d(Fe,1),$e=qe[0].subtitle,Ue=Xe?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("div",{children:"Example setup"}),(0,P.jsx)(i.zx,{variant:i.Wu.Filled,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 1"}),(0,P.jsx)(i.zx,{variant:i.Wu.Outline,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 2"})]}):void 0,eo=$e.length>0?$e:void 0;return(0,P.jsxs)("div",{className:C()(m().container),children:[(0,P.jsxs)(D,{onClick:Te,open:fe,iconVariant:re.iconVariant,children:[(0,P.jsx)(u,{actions:Ue,subtitle:eo,children:"Accordion 1"}),(0,P.jsx)(p,{children:Me})]}),(0,P.jsxs)(D,{onClick:Ee,open:_e,iconVariant:re.iconVariant,children:[(0,P.jsx)(u,{actions:Ue,subtitle:eo,children:"Accordion 2"}),(0,P.jsx)(p,{children:Me})]})]})};ce.displayName="Template";var ye=ce.bind({});ye.args={iconVariant:_.Primary,open:!1},ye.argTypes={open:{control:!1},onClick:{control:!1}},ye.parameters={docs:{description:{story:""}}},ye.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ye.parameters);var ve=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>P,FullWidth:()=>I,Primary:()=>C,Secondary:()=>v,SecondaryWithIconNoText:()=>B,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./node_modules/@navikt/ds-icons/esm/Success.js"),F=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const E={title:"Components/Button/Filled",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,A.jsx)(F.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Filled,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var g=function(N){return(0,A.jsx)(j.zx,Object.assign({},N))};g.displayName="Template";var O=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(j.zx,Object.assign({},N))})};O.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,A.jsx)(z.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var B=g.bind({});B.args={color:j.rp.Secondary,icon:(0,A.jsx)(z.Z,{})},B.parameters={docs:{description:{story:""}}};var I=O.bind({});I.args={color:j.rp.Primary,icon:(0,A.jsx)(z.Z,{}),fullWidth:!0,children:"Secondary button"},I.parameters={docs:{description:{story:""}}};var P=g.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),B.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},B.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>P,FullWidthAndDashedBorder:()=>I,Primary:()=>C,Secondary:()=>v,SecondaryWithIconNoText:()=>B,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./node_modules/@navikt/ds-icons/esm/Success.js"),F=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const E={title:"Components/Button/Outline",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,A.jsx)(F.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Outline,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var g=function(N){return(0,A.jsx)(j.zx,Object.assign({},N))};g.displayName="Template";var O=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(j.zx,Object.assign({},N))})};O.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,A.jsx)(z.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var B=g.bind({});B.args={color:j.rp.Secondary,icon:(0,A.jsx)(z.Z,{})},B.parameters={docs:{description:{story:""}}};var I=O.bind({});I.args={color:j.rp.Primary,icon:(0,A.jsx)(z.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},I.parameters={docs:{description:{story:""}}};var P=g.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),B.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},B.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>P,FullWidth:()=>I,Primary:()=>C,Secondary:()=>v,Success:()=>i,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,SuccessWithIconNoText:()=>B,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./node_modules/@navikt/ds-icons/esm/Success.js"),F=e("./.storybook/StoryPage.tsx"),j=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,W={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const E={title:"Components/Button/Quiet",component:j.zx,parameters:{design:(0,f.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,A.jsx)(F.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:j.Wu.Quiet,size:j.qE.Small,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var g=function(N){return(0,A.jsx)(j.zx,Object.assign({},N))};g.displayName="Template";var O=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(j.zx,Object.assign({},N))})};O.displayName="WithinContainerTemplate";var C=g.bind({});C.args={color:j.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var v=g.bind({});v.args={color:j.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var i=g.bind({});i.args={color:j.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var _=g.bind({});_.args={color:j.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=g.bind({});S.args={color:j.rp.Success,icon:(0,A.jsx)(z.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=g.bind({});T.args={color:j.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var B=g.bind({});B.args={color:j.rp.Success,icon:(0,A.jsx)(z.Z,{})},B.parameters={docs:{description:{story:""}}};var I=O.bind({});I.args={color:j.rp.Primary,icon:(0,A.jsx)(z.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},I.parameters={docs:{description:{story:""}}};var P=g.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),B.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},B.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},I.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>g,Compact:()=>C,Disabled:()=>v,Error:()=>O,LongText:()=>S,Normal:()=>E,ReadOnly:()=>i,WithDescription:()=>_,WithHiddenLabel:()=>T,__namedExportsOrder:()=>B,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/Checkbox/Checkbox.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},x="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const W={title:"Components/Checkbox",component:F.X,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var h=function(P){return(0,j.jsx)(F.X,Object.assign({},P))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default checkbox."}}};var g=h.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"This is a checked checkbox."}}};var O=h.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var C=h.bind({});C.args={compact:!0},C.parameters={docs:{description:{story:"This is the compact checkbox."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var i=h.bind({});i.args={readOnly:!0},i.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var _=h.bind({});_.args={description:"Lorem ipsum dolor sit amet."},_.parameters={docs:{description:{story:"This is a checkbox with description."}}};var S=h.bind({});S.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},S.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var T=h.bind({});T.args={hideLabel:!0},T.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},T.parameters);var B=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>k,Disabled:()=>X,Error:()=>V,Horizontal:()=>b,Vertical:()=>d,__namedExportsOrder:()=>H,default:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),B=e("./src/components/Checkbox/Checkbox.tsx"),I=e("./src/components/FieldSet/index.ts"),P=e("./src/utils/arrayUtils.ts"),D=e("./src/hooks/index.ts"),L=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),N=e.n(L),$=e("./node_modules/react/jsx-runtime.js");function Z(Q,U){return me(Q)||te(Q,U)||ie(Q,U)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(Q,U){if(!!Q){if(typeof Q=="string")return M(Q,U);var R=Object.prototype.toString.call(Q).slice(8,-1);if(R==="Object"&&Q.constructor&&(R=Q.constructor.name),R==="Map"||R==="Set")return Array.from(Q);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return M(Q,U)}}function M(Q,U){(U==null||U>Q.length)&&(U=Q.length);for(var R=0,oe=new Array(U);R<U;R++)oe[R]=Q[R];return oe}function te(Q,U){var R=Q==null?null:typeof Symbol!="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(R!=null){var oe=[],ce=!0,ye=!1,ve,G;try{for(R=R.call(Q);!(ce=(ve=R.next()).done)&&(oe.push(ve.value),!(U&&oe.length===U));ce=!0);}catch(re){ye=!0,G=re}finally{try{!ce&&R.return!=null&&R.return()}finally{if(ye)throw G}}return oe}}function me(Q){if(Array.isArray(Q))return Q}var ue;(function(Q){Q.Vertical="vertical",Q.Horizontal="horizontal"})(ue||(ue={}));var ge=function(U,R){switch(R.type){case"check":return U.concat([R.name]);case"uncheck":return U.filter(function(oe){return oe!==R.name});case"reset":return R.state}},le=function(U){return U.filter(function(R){var oe=R.checked;return oe}).map(function(R){var oe=R.name;return oe})},J=function(U){var R=U.compact,oe=U.description,ce=U.disabled,ye=U.error,ve=U.items,G=U.legend,re=U.onChange,ae=U.variant,pe=ae===void 0?ue.Vertical:ae;if(!(0,P.zb)(ve.map(function(Se){return Se.name})))throw Error("Each name in the checkbox group must be unique.");var fe=(0,n.useReducer)(ge,le(ve)),he=Z(fe,2),je=he[0],Oe=he[1];(0,n.useEffect)(function(){return Oe({type:"reset",state:le(ve)})},[ve]);var _e=(0,D.D9)(je);return(0,D.PQ)(function(){re&&!ce&&!(0,P.cO)(_e,je)&&re(je)},[je,re,ce]),(0,$.jsx)(I.C,{description:oe,disabled:ce,error:ye,legend:G,size:R?I.w.Xsmall:I.w.Small,children:(0,$.jsx)("div",{className:T()(N()["checkbox-group"],N()["checkbox-group--"+pe],R&&N()["checkbox-group--compact"]),children:ve.map(function(Se){return(0,$.jsx)(B.X,{checkboxId:Se.checkboxId,checked:je.includes(Se.name),compact:R,description:Se.description,disabled:ce||Se.disabled,error:!!ye,label:Se.label,name:Se.name,onChange:function(Ee){Oe({type:Ee.target.checked?"check":"uncheck",name:Se.name})}},Se.name)})})})};J.displayName="CheckboxGroup";try{J.displayName="CheckboxGroup",J.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:J.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(Q){}var u=`import React from 'react';
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
`,p={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},c="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const y={title:"Components/CheckboxGroup",component:J,parameters:{design:(0,l.vc)([{type:"figma",url:c},{type:"link",url:c}]),docs:{page:function(){return(0,$.jsx)(a.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:ue.Vertical}};var m=function(U){return(0,$.jsx)(J,Object.assign({},U))};m.displayName="Template";var d=m.bind({});d.args={variant:ue.Vertical},d.parameters={docs:{description:{story:"This is the default setting."}}};var b=m.bind({});b.args={variant:ue.Horizontal},b.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var k=m.bind({});k.args={compact:!0},k.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var V=m.bind({});V.args={error:"Du m\xE5 velge minst ett av alternativene over."},V.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var X=m.bind({});X.args={disabled:!0},X.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},d.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},d.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},k.parameters),V.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},V.parameters),X.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},X.parameters);var H=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{SimpleExample:()=>O,__namedExportsOrder:()=>C,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/DesignTokens/index.ts"),z=e("./src/components/CircularProgress/CircularProgress.module.css"),F=e.n(z),j=e("./node_modules/react/jsx-runtime.js"),w=function(i){var _=i.value,S=i.width,T=S===void 0?70:S,B=i.strokeWidth,I=B===void 0?2.5:B,P=i.ariaLabel,D=i.label,L=i.id,N=L+"-label",$=!P&&D?N:void 0;return(0,j.jsxs)("div",{id:L,className:F().container,style:{width:T+"px"},role:"progressbar","aria-labelledby":$,"aria-label":P,children:[D&&(0,j.jsx)("div",{id:N,className:F().label,children:D}),(0,j.jsxs)("svg",{className:F().svg,viewBox:"0 0 35.8 35.8",children:[(0,j.jsx)(A,{stroke:f.T.ColorsBlue200,strokeWidth:I}),(0,j.jsx)(A,{strokeWidth:I,stroke:f.T.ColorsBlue900,strokeDashoffset:100-_,strokeDasharray:"100 100",className:F().circleTransition})]})]})};w.displayName="CircularProgress";var A=function(i){return(0,j.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},i))};A.displayName="Circle";try{w.displayName="CircularProgress",w.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:w.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(v){}var x=`import React from 'react';
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
`,W={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const E={title:"Components/CircularProgress",component:w,parameters:{design:(0,l.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,j.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var g=function(i){return(0,j.jsx)(w,Object.assign({},i))};g.displayName="CircularTemplate";var O=g.bind({});O.args={width:100,value:60,label:"3/5",id:"progress"},O.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},O.parameters);var C=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>E,__namedExportsOrder:()=>g,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/ErrorMessage/ErrorMessage.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},x="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const W={title:"Components/ErrorMessage",component:F.B,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var h=function(C){return(0,j.jsx)(F.B,Object.assign({},C,{children:"This is an error message"}))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},E.parameters);var g=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>g,Disabled:()=>v,Error:()=>C,Normal:()=>E,WithDescription:()=>O,__namedExportsOrder:()=>i,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/FieldSet/FieldSet.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},x="";const W={title:"Components/FieldSet",component:F.C,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:F.w.Small}};var h=function(S){return(0,j.jsx)(F.C,Object.assign({},S,{children:S.children}))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is a normal field set."}}};var g=h.bind({});g.args={size:F.w.Xsmall},g.parameters={docs:{description:{story:"This is a compact field set."}}};var O=h.bind({});O.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},O.parameters={docs:{description:{story:"This is a field set with a description."}}};var C=h.bind({});C.args={error:"Her er det en beskrivende feilmelding."},C.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},g.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},C.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters);var i=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Dashed:()=>P,Solid:()=>I,__namedExportsOrder:()=>D,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/classnames/index.js"),z=e.n(f),F=e("./src/components/List/List.module.css"),j=e.n(F),w;(function(L){L.Solid="solid",L.Dashed="dashed"})(w||(w={}));var A=(0,n.createContext)({borderStyle:w.Solid}),x=function(){var N=(0,n.useContext)(A);if(N===void 0)throw new Error("useListContext must be used within a ListContext");return N},W=e("./node_modules/react/jsx-runtime.js"),h=function(N){var $=N.children,Z=N.borderStyle,q=Z===void 0?w.Solid:Z;return(0,W.jsx)("ul",{className:z()(j().list,j()["list--"+q]),children:(0,W.jsx)(A.Provider,{value:{borderStyle:q},children:$})})};h.displayName="List";try{h.displayName="List",h.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:h.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(L){}var E=e("./src/components/List/ListItem.module.css"),g=e.n(E),O=function(N){var $=N.children,Z=x(),q=Z.borderStyle;return(0,W.jsx)("li",{className:z()(g()["list-item"],g()["list-item--"+q]),children:$})};O.displayName="ListItem";try{O.displayName="ListItem",O.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:O.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(L){}var C=e("./src/components/List/List.stories.modules.css"),v=e.n(C),i=`import React from 'react';
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
`,_={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},S="";const T={title:"Components/List",component:h,parameters:{design:(0,l.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,W.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var B=function(N){return(0,W.jsx)("div",{className:v().container,children:(0,W.jsxs)(h,{borderStyle:N.borderStyle,children:[(0,W.jsx)(O,{children:"List Item 1"}),(0,W.jsx)(O,{children:"List Item 2"}),(0,W.jsx)(O,{children:"List Item 3"})]})})};B.displayName="Template";var I=B.bind({});I.args={borderStyle:w.Solid},I.parameters={docs:{description:{story:""}}};var P=B.bind({});P.args={borderStyle:w.Dashed},P.parameters={docs:{description:{story:""}}},I.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},I.parameters),P.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},P.parameters);var D=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>d,GoogleMaps:()=>H,KartverketSea:()=>X,KartverketTerrain:()=>V,MapWithMarkerZoomAndCenter:()=>b,OpenStreetMap:()=>k,__namedExportsOrder:()=>Q,default:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/react-leaflet/lib/MapContainer.js"),v=e("./node_modules/react-leaflet/lib/TileLayer.js"),i=e("./node_modules/react-leaflet/lib/AttributionControl.js"),_=e("./node_modules/react-leaflet/lib/Marker.js"),S=e("./node_modules/react-leaflet/lib/hooks.js"),T=e("./node_modules/leaflet/dist/leaflet-src.js"),B=e("./src/components/Map/Map.module.css"),I=e.n(B),P=e("./node_modules/leaflet/dist/leaflet.css"),D=e("./node_modules/react/jsx-runtime.js"),L={latitude:64.888996,longitude:12.8186054},N=4,$=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],Z=function(R){var oe=R.readOnly,ce=oe===void 0?!1:oe,ye=R.layers,ve=ye===void 0?$:ye,G=R.centerLocation,re=G===void 0?L:G,ae=R.zoom,pe=ae===void 0?N:ae,fe=R.markerLocation,he=R.markerIcon,je=R.onClick;return(0,D.jsxs)(C.h,{className:I().map,center:q(re),zoom:pe,zoomControl:!ce,dragging:!ce,touchZoom:!ce,doubleClickZoom:!ce,scrollWheelZoom:!ce,attributionControl:!1,children:[ve.map(function(Oe,_e){return(0,D.jsx)(v.I,{url:Oe.url,attribution:Oe.attribution,subdomains:Oe.subdomains?Oe.subdomains:[],opacity:ce?.5:1},_e)}),(0,D.jsx)(i.z,{prefix:!1}),fe?(0,D.jsx)(_.J,{position:q(fe),icon:(0,T.icon)(he)}):null,(0,D.jsx)(ie,{readOnly:ce,onClick:je})]})};Z.displayName="Map";function q(U){return[U.latitude,U.longitude]}var ie=function(R){var oe=R.onClick,ce=R.readOnly;return(0,S.zV)({click:function(ve){if(oe&&!ce){var G=ve.latlng.wrap();oe({latitude:G.lat,longitude:G.lng})}}}),null};try{Z.displayName="Map",Z.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:Z.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(U){}var M=e("./node_modules/console-browserify/index.js");function te(U,R){return J(U)||le(U,R)||ue(U,R)||me()}function me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(U,R){if(!!U){if(typeof U=="string")return ge(U,R);var oe=Object.prototype.toString.call(U).slice(8,-1);if(oe==="Object"&&U.constructor&&(oe=U.constructor.name),oe==="Map"||oe==="Set")return Array.from(U);if(oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe))return ge(U,R)}}function ge(U,R){(R==null||R>U.length)&&(R=U.length);for(var oe=0,ce=new Array(R);oe<R;oe++)ce[oe]=U[oe];return ce}function le(U,R){var oe=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(oe!=null){var ce=[],ye=!0,ve=!1,G,re;try{for(oe=oe.call(U);!(ye=(G=oe.next()).done)&&(ce.push(G.value),!(R&&ce.length===R));ye=!0);}catch(ae){ve=!0,re=ae}finally{try{!ye&&oe.return!=null&&oe.return()}finally{if(ve)throw re}}return ce}}function J(U){if(Array.isArray(U))return U}var u=`import React, { useState } from 'react';
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
`,p={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},c="";const y={title:"Components/Map",component:Z,parameters:{layout:"fullscreen",design:(0,E.vc)([{type:"figma",url:c},{type:"link",url:c}]),docs:{page:function(){return(0,D.jsx)(g.Y,{description:"Map component"})}}},args:{}};var m=function(R){var oe=(0,h.useState)(R.markerLocation),ce=te(oe,2),ye=ce[0],ve=ce[1],G=function(ae){ve(ae),M.log("Map clicked at ["+ae.latitude+","+ae.longitude+"]")};return(0,D.jsx)(Z,Object.assign({},R,{markerLocation:ye,onClick:G}))};m.displayName="Template";var d=m.bind({});d.args={},d.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var b=m.bind({});b.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},b.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var k=m.bind({});k.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},k.parameters={docs:{description:{story:"OpenStreetMap"}}};var V=m.bind({});V.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},V.parameters={docs:{description:{story:"Kartverket terrain map"}}};var X=m.bind({});X.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},X.parameters={docs:{description:{story:"Kartverket sea map"}}};var H=m.bind({});H.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},H.parameters={docs:{description:{story:"Google Maps"}}},d.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},d.parameters),b.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},b.parameters),k.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters),V.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},V.parameters),X.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},X.parameters),H.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},H.parameters);var Q=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Primary:()=>Z,Success:()=>q,__namedExportsOrder:()=>ie,default:()=>N});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f;function z(){return z=Object.assign?Object.assign.bind():function(M){for(var te=1;te<arguments.length;te++){var me=arguments[te];for(var ue in me)Object.prototype.hasOwnProperty.call(me,ue)&&(M[ue]=me[ue])}return M},z.apply(this,arguments)}var F=function(te){return n.createElement("svg",z({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te),f||(f=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},j;(function(M){M.Primary="primary",M.Success="success"})(j||(j={}));var w;(function(M){M.Small="small",M.Medium="medium"})(w||(w={}));var A=(0,n.createContext)({color:j.Primary,size:w.Medium}),x=function(){var te=(0,n.useContext)(A);if(te===void 0)throw new Error("usePageContext must be used within a PageContext");return te},W=e("./node_modules/classnames/index.js"),h=e.n(W),E=e("./src/components/Page/PageContent.module.css"),g=e.n(E),O=e("./node_modules/react/jsx-runtime.js"),C=function(te){var me=te.children;return(0,O.jsx)("div",{className:h()(g()["page-content"]),children:me})};C.displayName="PageContent";try{C.displayName="PageContent",C.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:C.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(M){}var v=e("./src/components/SvgIcon/index.ts"),i=e("./src/components/Page/PageHeader.module.css"),_=e.n(i),S=function(te){var me=te.children,ue=te.icon,ge=x(),le=ge.color,J=ge.size,u=J===w.Small?28:40;return(0,O.jsxs)("header",{className:h()(_()["page-header"],_()["page-header--"+le],_()["page-header--"+J]),children:[(0,O.jsx)(v.l,{width:u,height:u,svgIconComponent:ue}),(0,O.jsx)("span",{children:me})]})};S.displayName="PageHeader";try{S.displayName="PageHeader",S.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:S.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(M){}var T=e("./src/components/Page/Page.module.css"),B=e.n(T),I=function(te){var me=te.children,ue=te.color,ge=ue===void 0?j.Primary:ue,le=te.size,J=le===void 0?w.Medium:le;return(0,O.jsx)("div",{className:B().page,children:(0,O.jsx)(A.Provider,{value:{color:ge,size:J},children:me})})};I.displayName="Page";try{I.displayName="Page",I.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:I.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(M){}var P=`import React from 'react';
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
`,D={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},L="";const N={title:"Components/Page",component:I,parameters:{design:(0,l.vc)([{type:"figma",url:L},{type:"link",url:L}]),docs:{page:function(){return(0,O.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var $=function(te){return(0,O.jsx)("div",{style:{width:"600px"},children:(0,O.jsxs)(I,{color:te.color,size:te.size,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(F,{}),children:"PageHeader"}),(0,O.jsx)(C,{children:"PageContent"})]})})};$.displayName="Template";var Z=$.bind({});Z.args={color:j.Primary,size:w.Medium},Z.parameters={docs:{description:{story:""}}};var q=$.bind({});q.args={color:j.Success,size:w.Medium},q.parameters={docs:{description:{story:""}}},Z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Z.parameters),q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters);var ie=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>d,__namedExportsOrder:()=>b,default:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(a),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),F=e.n(z),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e.n(j),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),x=e.n(A),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(W),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),g=e.n(E),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(v),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e.n(_),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),B=e.n(T),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),P=e.n(I),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),L=e.n(D),N=e("./node_modules/react/index.js"),$=e("./node_modules/storybook-addon-designs/esm/index.js"),Z=e("./.storybook/StoryPage.tsx"),q=e("./src/components/Pagination/Pagination.tsx"),ie=e("./node_modules/react/jsx-runtime.js");function M(k,V){return le(k)||ge(k,V)||me(k,V)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(k,V){if(!!k){if(typeof k=="string")return ue(k,V);var X=Object.prototype.toString.call(k).slice(8,-1);if(X==="Object"&&k.constructor&&(X=k.constructor.name),X==="Map"||X==="Set")return Array.from(k);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return ue(k,V)}}function ue(k,V){(V==null||V>k.length)&&(V=k.length);for(var X=0,H=new Array(V);X<V;X++)H[X]=k[X];return H}function ge(k,V){var X=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(X!=null){var H=[],Q=!0,U=!1,R,oe;try{for(X=X.call(k);!(Q=(R=X.next()).done)&&(H.push(R.value),!(V&&H.length===V));Q=!0);}catch(ce){U=!0,oe=ce}finally{try{!Q&&X.return!=null&&X.return()}finally{if(U)throw oe}}return H}}function le(k){if(Array.isArray(k))return k}var J=`import React, { useState } from 'react';
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
`,u={Example:{startLoc:{col:52,line:46},endLoc:{col:1,line:67},startBody:{col:52,line:46},endBody:{col:1,line:67}}},p="",c={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const y={title:"Components/Pagination",component:q.t,parameters:{design:(0,$.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,ie.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var m=function(V){var X=(0,N.useState)(5),H=M(X,2),Q=H[0],U=H[1],R=(0,N.useState)(0),oe=M(R,2),ce=oe[0],ye=oe[1],ve=function(re){U(parseInt(re.target.value,10)),ye(0)};return(0,ie.jsx)(q.t,Object.assign({},V,{rowsPerPage:Q,currentPage:ce,setCurrentPage:ye,onRowsPerPageChange:ve,descriptionTexts:c}))};m.displayName="Template";var d=m.bind({});d.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},d.parameters={docs:{description:{story:""}}},d.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},d.parameters);var b=["Example"]},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>C,Info:()=>g,Success:()=>E,Warning:()=>O,__namedExportsOrder:()=>v,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/Panel/Panel.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},x="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const W={title:"Components/Panel",component:F.s,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,j.jsx)("div",{children:"Her kommer litt informasjon"})}};var h=function(_){return(0,j.jsx)(F.s,Object.assign({},_))};h.displayName="Template";var E=h.bind({});E.args={variant:F.c.Success},E.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var g=h.bind({});g.parameters={docs:{description:{story:"Infobeskrivelse"}}};var O=h.bind({});O.args={variant:F.c.Warning},O.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var C=h.bind({});C.args={variant:F.c.Error},C.parameters={docs:{description:{story:"Feilbeskrivelse"}}},E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},g.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},O.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},C.parameters);var v=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>c,Info:()=>u,Success:()=>J,Warning:()=>p,__namedExportsOrder:()=>y,default:()=>ge});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Button/index.ts"),v=e("./src/components/Panel/Panel.tsx"),i=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),_=e("./node_modules/classnames/index.js"),S=e.n(_),T=e("./src/components/Panel/PopoverPanel.module.css"),B=e.n(T),I=e("./node_modules/react/jsx-runtime.js"),P=function(d){var b=d.children;return(0,I.jsx)(i.Eh,{className:S()(B()["popover-panel__arrow"]),asChild:!0,children:b})};P.displayName="renderArrow";var D=function(d){var b=d.children,k=d.variant,V=k===void 0?v.c.Warning:k,X=d.trigger,H=d.side,Q=H===void 0?"top":H,U=d.title,R=d.showIcon,oe=d.forceMobileLayout,ce=d.showPointer,ye=ce===void 0?!0:ce,ve=d.onOpenChange,G=d.open,re=G===void 0?!1:G;return(0,I.jsxs)(i.fC,{open:re,onOpenChange:ve,children:[(0,I.jsx)(i.xz,{asChild:!0,role:"button",children:X}),(0,I.jsx)(i.VY,{side:Q,className:B()["popover-panel"],children:(0,I.jsx)(v.s,{title:U,showIcon:R,forceMobileLayout:oe,showPointer:ye,variant:V,renderArrow:P,children:b})})]})};D.displayName="PopoverPanel";const L=null;try{D.displayName="PopoverPanel",D.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:D.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(m){}function N(m,d){return M(m)||ie(m,d)||Z(m,d)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(m,d){if(!!m){if(typeof m=="string")return q(m,d);var b=Object.prototype.toString.call(m).slice(8,-1);if(b==="Object"&&m.constructor&&(b=m.constructor.name),b==="Map"||b==="Set")return Array.from(m);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return q(m,d)}}function q(m,d){(d==null||d>m.length)&&(d=m.length);for(var b=0,k=new Array(d);b<d;b++)k[b]=m[b];return k}function ie(m,d){var b=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(b!=null){var k=[],V=!0,X=!1,H,Q;try{for(b=b.call(m);!(V=(H=b.next()).done)&&(k.push(H.value),!(d&&k.length===d));V=!0);}catch(U){X=!0,Q=U}finally{try{!V&&b.return!=null&&b.return()}finally{if(X)throw Q}}return k}}function M(m){if(Array.isArray(m))return m}var te=`import React from 'react';
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
`,me={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},ue="";const ge={title:"Components/Panel/PopoverPanel",component:D,parameters:{design:(0,E.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,I.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:v.c.Warning,trigger:(0,I.jsx)("button",{children:"\xC5pne"}),side:"top"}};var le=function(d){var b=(0,g.eJ)(!1),k=N(b,2),V=k[0],X=k[1],H=function(){X(!V)};return(0,I.jsx)("div",{children:(0,I.jsxs)(D,{variant:d.variant,side:d.side,title:d.title,open:V,trigger:(0,I.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,children:"\xC5pne"}),onOpenChange:X,showPointer:d.showPointer,showIcon:d.showIcon,forceMobileLayout:d.forceMobileLayout,children:[(0,I.jsx)("div",{children:"Her kommer litt informasjon"}),(0,I.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,size:C.qE.Small,onClick:H,children:"Lukk"})]})})};le.displayName="Template";var J=le.bind({});J.args={variant:v.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},J.argTypes={trigger:{control:!1}},J.parameters={docs:{description:{story:""}}};var u=le.bind({});u.args={variant:v.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},u.argTypes={trigger:{control:!1}},u.parameters={docs:{description:{story:""}}};var p=le.bind({});p.args={variant:v.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},p.argTypes={trigger:{control:!1}},p.parameters={docs:{description:{story:""}}};var c=le.bind({});c.args={variant:v.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},c.argTypes={trigger:{control:!1}},c.parameters={docs:{description:{story:""}}},J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters),u.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},c.parameters);var y=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>g,Compact:()=>C,Default:()=>E,Disabled:()=>v,Error:()=>O,LongText:()=>_,WithDescription:()=>i,WithHiddenLabel:()=>S,__namedExportsOrder:()=>T,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/RadioButton/RadioButton.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},x="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const W={title:"Components/RadioButton",component:F.E,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var h=function(I){return(0,j.jsx)(F.E,Object.assign({},I))};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"Default radio button."}}};var g=h.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"Checked radio button."}}};var O=h.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var C=h.bind({});C.args={size:F.j.Xsmall},C.parameters={docs:{description:{story:"This is the compact radio button."}}};var v=h.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var i=h.bind({});i.args={description:"Lorem ipsum dolor sit amet."},i.parameters={docs:{description:{story:"This is a radio button with description."}}};var _=h.bind({});_.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},_.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var S=h.bind({});S.args={hideLabel:!0},S.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},g.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},C.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},_.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},S.parameters);var T=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>p,Disabled:()=>y,Error:()=>c,Horizontal:()=>u,Vertical:()=>J,__namedExportsOrder:()=>m,default:()=>ge});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e("./src/components/RadioButton/index.ts"),i=e("./src/components/FieldSet/index.ts"),_=e("./src/hooks/index.ts"),S=e("./src/utils/arrayUtils.ts"),T=e("./src/components/RadioGroup/RadioGroup.module.css"),B=e.n(T),I=e("./node_modules/react/jsx-runtime.js");function P(d,b){return Z(d)||$(d,b)||L(d,b)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(d,b){if(!!d){if(typeof d=="string")return N(d,b);var k=Object.prototype.toString.call(d).slice(8,-1);if(k==="Object"&&d.constructor&&(k=d.constructor.name),k==="Map"||k==="Set")return Array.from(d);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return N(d,b)}}function N(d,b){(b==null||b>d.length)&&(b=d.length);for(var k=0,V=new Array(b);k<b;k++)V[k]=d[k];return V}function $(d,b){var k=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(k!=null){var V=[],X=!0,H=!1,Q,U;try{for(k=k.call(d);!(X=(Q=k.next()).done)&&(V.push(Q.value),!(b&&V.length===b));X=!0);}catch(R){H=!0,U=R}finally{try{!X&&k.return!=null&&k.return()}finally{if(H)throw U}}return V}}function Z(d){if(Array.isArray(d))return d}var q;(function(d){d.Xsmall="xsmall",d.Small="small"})(q||(q={}));var ie;(function(d){d.Vertical="vertical",d.Horizontal="horizontal"})(ie||(ie={}));var M=function(b){var k=b.description,V=b.disabled,X=b.error,H=b.items,Q=b.legend,U=b.name,R=b.onChange,oe=b.size,ce=oe===void 0?q.Small:oe,ye=b.value,ve=b.variant,G=ve===void 0?ie.Vertical:ve;if(!(0,S.zb)(H.map(function(Ee){return Ee.value})))throw Error("Each value in the radio group must be unique.");var re=(0,n.useState)(ye),ae=P(re,2),pe=ae[0],fe=ae[1];(0,n.useEffect)(function(){fe(ye)},[ye]);var he=(0,_.D9)(pe);(0,_.PQ)(function(){R&&!V&&he!==pe&&R(pe)},[pe,V,R]);var je=function(Me){return function(De){return De.target.checked&&fe(Me)}},Oe=ce===q.Xsmall?[i.w.Xsmall,v.j.Xsmall]:[i.w.Small,v.j.Small],_e=P(Oe,2),Se=_e[0],Te=_e[1];return(0,I.jsx)(i.C,{description:k,disabled:V,error:X,legend:Q,size:Se,children:(0,I.jsx)("div",{className:[B()["radio-group"],B()["radio-group--"+G],B()["radio-group--"+ce]].join(" "),role:"radiogroup",children:H.map(function(Ee){return(0,n.createElement)(v.E,Object.assign({},Ee,{checked:Ee.value===pe,disabled:V||Ee.disabled,error:!!X,key:Ee.value,name:U,onChange:je(Ee.value),size:Te}))})})})};M.displayName="RadioGroup";try{M.displayName="RadioGroup",M.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:M.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(d){}var te=`import React from 'react';
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
`,me={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},ue="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const ge={title:"Components/RadioGroup",component:M,parameters:{design:(0,l.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,I.jsx)(a.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var le=function(b){return(0,I.jsx)(M,Object.assign({},b))};le.displayName="Template";var J=le.bind({});J.args={variant:ie.Vertical},J.parameters={docs:{description:{story:"This is the default setting."}}};var u=le.bind({});u.args={variant:ie.Horizontal},u.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var p=le.bind({});p.args={size:q.Xsmall},p.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var c=le.bind({});c.args={error:"Du m\xE5 velge et av alternativene over."},c.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var y=le.bind({});y.args={disabled:!0},y.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},J.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},J.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},p.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},c.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},y.parameters);var m=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>le,__namedExportsOrder:()=>J,default:()=>ue});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e("./node_modules/classnames/index.js"),_=e.n(i),S=e("./src/components/_InputWrapper/index.ts"),T=e("./node_modules/react/jsx-runtime.js"),B=["id","onChange","disabled","label"];function I(u,p){if(u==null)return{};var c=P(u,p),y,m;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(u);for(m=0;m<d.length;m++)y=d[m],!(p.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(u,y)||(c[y]=u[y]))}return c}function P(u,p){if(u==null)return{};var c={},y=Object.keys(u),m,d;for(d=0;d<y.length;d++)m=y[d],!(p.indexOf(m)>=0)&&(c[m]=u[m]);return c}var D=function(p){var c=p.id,y=p.onChange,m=p.disabled,d=m===void 0?!1:m,b=p.label,k=I(p,B);return(0,T.jsx)(S.SP,{disabled:d,isSearch:!0,label:b,inputRenderer:function(X){var H=X.className,Q=X.variant,U={id:c,disabled:d,className:_()(H)};return(0,T.jsx)("input",Object.assign({},U,k,{"data-testid":c+"-"+Q,onChange:y}))}})};D.displayName="SearchField";try{D.displayName="SearchField",D.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:D.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(u){}function L(u,p){return ie(u)||q(u,p)||$(u,p)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(u,p){if(!!u){if(typeof u=="string")return Z(u,p);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Z(u,p)}}function Z(u,p){(p==null||p>u.length)&&(p=u.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=u[c];return y}function q(u,p){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var y=[],m=!0,d=!1,b,k;try{for(c=c.call(u);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(V){d=!0,k=V}finally{try{!m&&c.return!=null&&c.return()}finally{if(d)throw k}}return y}}function ie(u){if(Array.isArray(u))return u}var M=`import React from 'react';
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
`,te={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},me="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const ue={title:"Components/SearchField",component:D,parameters:{design:(0,E.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,T.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var ge=function(p){var c=(0,g.D8)(),y=L(c,1),m=y[0].disabled;return(0,T.jsx)(D,Object.assign({disabled:m},p))};ge.displayName="Template";var le=ge.bind({});le.args={},le.parameters={docs:{description:{story:"Search field."}}},le.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},le.parameters);var J=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Disabled:()=>i,Error:()=>_,Multiple:()=>v,__namedExportsOrder:()=>S,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(a),z=e("./node_modules/react/index.js"),F=e("./node_modules/storybook-addon-designs/esm/index.js"),j=e("./.storybook/StoryPage.tsx"),w=e("./src/components/Select/Select.tsx"),A=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,W={Multiple:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Disabled:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Error:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",E=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],g=E.map(function(T){return Object.assign({},T,{deleteButtonLabel:"Slett "+T.label})});const O={title:"Components/Select/Multiple",component:w.P,parameters:{design:(0,F.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,A.jsx)(j.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'"})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:g}};var C=function(B){return(0,A.jsx)("div",{style:{width:"440px"},children:(0,A.jsx)(w.P,Object.assign({},B))})};C.displayName="Template";var v=C.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default multiple select box."}}};var i=C.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var _=C.bind({});_.args={error:!0},_.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},_.parameters);var S=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>E,Disabled:()=>g,Error:()=>O,__namedExportsOrder:()=>C,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),F=e("./src/components/Select/Select.tsx"),j=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Default:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Disabled:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Error:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}},x="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const W={title:"Components/Select/Single",component:F.P,parameters:{design:(0,f.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(z.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var h=function(i){return(0,j.jsx)("div",{style:{width:"440px"},children:(0,j.jsx)(F.P,Object.assign({},i))})};h.displayName="Template";var E=h.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default select box."}}};var g=h.bind({});g.args={disabled:!0},g.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var O=h.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},E.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},O.parameters);var C=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{IconFromNavIconLibrary:()=>v,ImportedCustomIcon:()=>i,__namedExportsOrder:()=>_,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./node_modules/@navikt/ds-icons/esm/Success.js"),f=e("./.storybook/StoryPage.tsx"),z=e("./src/components/SvgIcon/index.ts"),F,j,w;function A(){return A=Object.assign?Object.assign.bind():function(S){for(var T=1;T<arguments.length;T++){var B=arguments[T];for(var I in B)Object.prototype.hasOwnProperty.call(B,I)&&(S[I]=B[I])}return S},A.apply(this,arguments)}var x=function(T){return n.createElement("svg",A({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},T),F||(F=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),w||(w=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},W=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,E={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},g="";const O={title:"Components/SvgIcon",component:z.l,parameters:{design:(0,l.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,W.jsx)(f.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var C=function(T){return(0,W.jsx)(z.l,Object.assign({},T))};C.displayName="Template";var v=C.bind({});v.args={svgIconComponent:(0,W.jsx)(a.Z,{})},v.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var i=C.bind({});i.args={svgIconComponent:(0,W.jsx)(x,{height:"2rem",width:"2rem"})},i.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},v.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},i.parameters);var _=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{BasicTable:()=>Ie,SelectRows:()=>Ze,__namedExportsOrder:()=>co,default:()=>xe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),O=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/classnames/index.js"),v=e.n(C),i=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Pagination/Pagination.tsx"),S=e("./src/components/RadioButton/index.ts"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),I=e("./src/components/Table/Table.module.css"),P=e.n(I),D;(function(K){K.Header="header",K.Body="body",K.Footer="footer"})(D||(D={}));var L=(0,g.createContext)(void 0),N=function(){var Y=(0,g.useContext)(L);if(Y===void 0)throw new Error("useTableContext must be used within a TableContext");return Y},$=(0,g.createContext)(void 0),Z=function(){var Y=useContext($);if(Y===void 0)throw new Error("useTableContext must be used within a TableContext");return Y},q=(0,g.createContext)({variantStandard:D.Body}),ie=function(){var Y=(0,g.useContext)(q);if(Y===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return Y},M=e("./node_modules/react/jsx-runtime.js"),te=["children","selectRows","onChange","selectedValue","className"];function me(K,Y){if(K==null)return{};var se=ue(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function ue(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var ge=function(Y){var se=Y.children,ne=Y.selectRows,ee=ne===void 0?!1:ne,de=Y.onChange,We=Y.selectedValue,Ce=Y.className,Re=me(Y,te);return(0,M.jsx)("table",Object.assign({},Re,{className:v()(P().Table,Ce),children:(0,M.jsx)(L.Provider,{value:{selectRows:ee,onChange:de,selectedValue:We},children:se})}))};ge.displayName="Table";const le=null;try{ge.displayName="Table",ge.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:ge.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(K){}var J=e("./src/components/Table/TableHeader.module.css"),u=e.n(J),p=["children","className"];function c(K,Y){if(K==null)return{};var se=y(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function y(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var m=function(Y){var se=Y.children,ne=Y.className,ee=c(Y,p),de=D.Header;return(0,M.jsx)(q.Provider,{value:{variantStandard:de},children:(0,M.jsx)("thead",Object.assign({},ee,{className:v()(u()["table-header"],ne),children:se}))})};m.displayName="TableHeader";try{m.displayName="TableHeader",m.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:m.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(K){}var d=e("./src/components/Table/TableCell.module.css"),b=e.n(d),k;function V(){return V=Object.assign?Object.assign.bind():function(K){for(var Y=1;Y<arguments.length;Y++){var se=arguments[Y];for(var ne in se)Object.prototype.hasOwnProperty.call(se,ne)&&(K[ne]=se[ne])}return K},V.apply(this,arguments)}var X=function(Y){return g.createElement("svg",V({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},Y),k||(k=g.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},H=["children","variant","onChange","sortDirecton","sortKey","className","radiobutton"];function Q(K,Y){if(K==null)return{};var se=U(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function U(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var R;(function(K){K.Descending="desc",K.Ascending="asc",K.NotSortable="notSortable",K.NotActive="notActive"})(R||(R={}));var oe=function(Y){var se,ne=Y.children,ee=Y.variant,de=Y.onChange,We=Y.sortDirecton,Ce=We===void 0?R.NotSortable:We,Re=Y.sortKey,Ne=Y.className,Qe=Y.radiobutton,ze=Qe===void 0?!1:Qe,Ke=Q(Y,H),no=ie(),Ge=no.variantStandard,Je=function(){de!=null&&Re!=null&&Ce!=null&&de({sortedColumn:Re,previousSortDirection:Ce})};return(0,M.jsxs)(M.Fragment,{children:[(ee==null?Ge===D.Header:ee==="header")&&(0,M.jsx)("th",Object.assign({},Ke,{className:ze?v()(b()["header-table-cell-radiobutton"],Ne):v()(b()["header-table-cell"],Ne),"aria-sort":Ce===R.Ascending?"ascending":Ce===R.Descending?"descending":"none",children:(0,M.jsxs)("div",{className:Ce!=R.NotSortable?v()(b()["container-sortable"]):v()(b().container),onClick:function(){return Je()},onKeyUp:function(oo){(oo.key==="Enter"||oo.key===" ")&&Je()},role:Ce!=R.NotSortable?"button":void 0,tabIndex:Ce!=R.NotSortable?0:void 0,children:[(0,M.jsx)("div",{className:v()(b().input),children:ne}),Ce!=R.NotSortable&&(0,M.jsx)(X,{"aria-label":"Sortering","data-testid":"sort-icon",className:v()(b().icon,(se={},se[b()["icon-asc"]]=Ce===R.Ascending,se[b()["icon-desc"]]=Ce===R.Descending,se))})]})})),(ee==null?Ge===D.Body:ee==="body")&&(0,M.jsx)("td",Object.assign({},Ke,{className:ze?v()(b()["body-table-cell-radiobutton"],Ne):v()(b()["body-table-cell"],Ne),children:(0,M.jsx)("div",{className:ze?v()(b()["radio-button"]):v()(b().input),children:ne})})),Ge===D.Footer&&(0,M.jsx)("td",Object.assign({},Ke,{className:v()(Ne),children:(0,M.jsx)("div",{className:v()(b().input),children:ne})}))]})};const ce=null;try{oe.displayName="TableCell",oe.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:oe.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(K){}var ye=e("./src/components/Table/TableRow.module.css"),ve=e.n(ye),G=["children","rowData","selectSort","className"];function re(K,Y){if(K==null)return{};var se=ae(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function ae(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var pe=function(Y){var se,ne=Y.children,ee=Y.rowData,de=Y.selectSort,We=de===void 0?"":de,Ce=Y.className,Re=re(Y,G),Ne=ie(),Qe=Ne.variantStandard,ze=N(),Ke=ze.onChange,no=ze.selectedValue,Ge=ze.selectRows,Je=function(){Ke!=null&&Ge&&Qe===D.Body&&ee&&Ke({selectedValue:ee})},Ye=Ge&&typeof ee!="undefined"&&JSON.stringify(ee)===JSON.stringify(no);return(0,M.jsx)($.Provider,{value:{selectSort:We},children:(0,M.jsx)("tr",Object.assign({tabIndex:Qe===D.Body?-1:0},Re,{className:v()(ve().TableRow,(se={},se[ve()["table-row--selected"]]=Ye,se[ve()["table-row--body"]]=Qe===D.Body&&Ge&&!Ye,se),Ce),onClick:Je,children:ne}))})};pe.displayName="TableRow";const fe=null;try{pe.displayName="TableRow",pe.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:pe.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(K){}var he=e("./src/components/Table/TableBody.module.css"),je=e.n(he),Oe=["children","className"];function _e(K,Y){if(K==null)return{};var se=Se(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function Se(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var Te=function(Y){var se=Y.children,ne=Y.className,ee=_e(Y,Oe),de=D.Body;return(0,M.jsx)(q.Provider,{value:{variantStandard:de},children:(0,M.jsx)("tbody",Object.assign({},ee,{className:v()(je().TableBody,ne),children:se}))})};Te.displayName="TableBody";const Ee=null;try{Te.displayName="TableBody",Te.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Te.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(K){}var Me=e("./src/components/Table/Table.stories.module.css"),De=e.n(Me),Ae=e("./src/components/Table/TableFooter.module.css"),Xe=e.n(Ae),Fe=["children","className"];function qe(K,Y){if(K==null)return{};var se=$e(K,Y),ne,ee;if(Object.getOwnPropertySymbols){var de=Object.getOwnPropertySymbols(K);for(ee=0;ee<de.length;ee++)ne=de[ee],!(Y.indexOf(ne)>=0)&&(!Object.prototype.propertyIsEnumerable.call(K,ne)||(se[ne]=K[ne]))}return se}function $e(K,Y){if(K==null)return{};var se={},ne=Object.keys(K),ee,de;for(de=0;de<ne.length;de++)ee=ne[de],!(Y.indexOf(ee)>=0)&&(se[ee]=K[ee]);return se}var Ue=function(Y){var se=Y.children,ne=Y.className,ee=qe(Y,Fe),de=D.Footer;return(0,M.jsx)(q.Provider,{value:{variantStandard:de},children:(0,M.jsx)("tfoot",Object.assign({},ee,{className:v()(Xe()["table-footer"],ne),children:se}))})};Ue.displayName="TableFooter";const eo=null;try{Ue.displayName="TableFooter",Ue.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Ue.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(K){}function He(K,Y){return ro(K)||so(K,Y)||lo(K,Y)||ao()}function ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(K,Y){if(!!K){if(typeof K=="string")return to(K,Y);var se=Object.prototype.toString.call(K).slice(8,-1);if(se==="Object"&&K.constructor&&(se=K.constructor.name),se==="Map"||se==="Set")return Array.from(K);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return to(K,Y)}}function to(K,Y){(Y==null||Y>K.length)&&(Y=K.length);for(var se=0,ne=new Array(Y);se<Y;se++)ne[se]=K[se];return ne}function so(K,Y){var se=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(se!=null){var ne=[],ee=!0,de=!1,We,Ce;try{for(se=se.call(K);!(ee=(We=se.next()).done)&&(ne.push(We.value),!(Y&&ne.length===Y));ee=!0);}catch(Re){de=!0,Ce=Re}finally{try{!ee&&se.return!=null&&se.return()}finally{if(de)throw Ce}}return ne}}function ro(K){if(Array.isArray(K))return K}var io=`import type { ChangeEvent } from 'react';
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
`,uo={BasicTable:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}},SelectRows:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}}},be="";const xe={title:"Components/Table",component:ge,parameters:{design:(0,O.vc)([{type:"figma",url:be},{type:"link",url:be}]),docs:{page:function(){return(0,M.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function Pe(K,Y,se,ne,ee){return{applicationNr:K,product:Y,status:se,imageSrc:ne,imageAlt:ee}}var Ve=[Pe("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),Pe("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),Pe("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),Pe("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),Pe("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),Pe("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),Pe("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),Pe("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],Le=function(Y){var se=(0,g.useState)({}),ne=He(se,2),ee=ne[0],de=ne[1],We=(0,g.useState)({sortedColumn:"",sortDirection:R.NotActive}),Ce=He(We,2),Re=Ce[0],Ne=Ce[1],Qe=(0,g.useState)(5),ze=He(Qe,2),Ke=ze[0],no=ze[1],Ge=(0,g.useState)(0),Je=He(Ge,2),Ye=Je[0],oo=Je[1],_o={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},go=function(Be){var we=Be.selectedValue;de(we)},mo=function(Be){var we=Be.sortedColumn,po=Be.previousSortDirection;po===R.Ascending?Ne({sortedColumn:we,sortDirection:R.Descending}):po===R.Descending?Ne({sortedColumn:we,sortDirection:R.Ascending}):Ne({sortedColumn:we,sortDirection:R.Descending})},yo=function(Be){no(parseInt(Be.target.value,10)),oo(0)},vo=function(Be){oo(Be)},fo=function(Be){var we={applicationNr:Be.target.value};de(we)},bo=function(Be){var we={applicationNr:Be.applicationNr};return JSON.stringify(ee)==JSON.stringify(we)};return(0,M.jsxs)(ge,{selectRows:Y.selectRows,onChange:go,selectedValue:ee,children:[(0,M.jsx)(m,{children:(0,M.jsxs)(pe,{children:[Y.selectRows&&(0,M.jsx)(oe,{radiobutton:!0}),(0,M.jsx)(oe,{onChange:mo,sortKey:"S\xF8knadsnr.",sortDirecton:Re.sortedColumn==="S\xF8knadsnr."?Re.sortDirection:R.NotActive,children:"S\xF8knadsnr."}),(0,M.jsx)(oe,{sortKey:"Produkt",onChange:mo,sortDirecton:Re.sortedColumn==="Produkt"?Re.sortDirection:R.NotActive,children:"Produkt"}),(0,M.jsx)(oe,{children:"Status"}),(0,M.jsx)(oe,{children:"Bilde"})]})}),(0,M.jsx)(Te,{children:Ve.slice(Ye*Ke,Ye*Ke+Ke).map(function(ke){return(0,M.jsxs)(pe,{rowData:{applicationNr:ke.applicationNr},children:[Y.selectRows&&(0,M.jsx)(oe,{radiobutton:!0,children:(0,M.jsx)(S.E,{name:ke.applicationNr,onChange:function(we){return fo(we)},value:ke.applicationNr,checked:bo(ke),label:ke.applicationNr,hideLabel:!0})}),(0,M.jsx)(oe,{children:ke.applicationNr}),(0,M.jsx)(oe,{children:ke.product}),(0,M.jsx)(oe,{children:ke.status}),(0,M.jsx)(oe,{children:(0,M.jsx)("img",{className:v()(De().checkmark),src:ke.imageSrc,alt:ke.imageAlt})})]},ke.applicationNr)})}),(0,M.jsx)(Ue,{children:(0,M.jsx)(pe,{children:(0,M.jsx)(oe,{colSpan:5,children:(0,M.jsx)(_.t,{numberOfRows:Ve.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ke,onRowsPerPageChange:yo,currentPage:Ye,setCurrentPage:vo,descriptionTexts:_o})})})})]})};Le.displayName="Template";var Ie=Le.bind({});Ie.args={selectRows:!1},Ie.parameters={docs:{description:{story:""}}};var Ze=Le.bind({});Ze.args={selectRows:!0},Ze.parameters={docs:{description:{story:""}}},Ie.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Ze.parameters);var co=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>p,__namedExportsOrder:()=>c,default:()=>J});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),B=e("./src/utils/arrayUtils.ts"),I=e("./src/hooks/index.ts"),P=e("./src/components/Tabs/Tabs.module.css"),D=e.n(P),L=e("./node_modules/react/jsx-runtime.js");function N(y,m){return M(y)||ie(y,m)||Z(y,m)||$()}function $(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(y,m){if(!!y){if(typeof y=="string")return q(y,m);var d=Object.prototype.toString.call(y).slice(8,-1);if(d==="Object"&&y.constructor&&(d=y.constructor.name),d==="Map"||d==="Set")return Array.from(y);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return q(y,m)}}function q(y,m){(m==null||m>y.length)&&(m=y.length);for(var d=0,b=new Array(m);d<m;d++)b[d]=y[d];return b}function ie(y,m){var d=y==null?null:typeof Symbol!="undefined"&&y[Symbol.iterator]||y["@@iterator"];if(d!=null){var b=[],k=!0,V=!1,X,H;try{for(d=d.call(y);!(k=(X=d.next()).done)&&(b.push(X.value),!(m&&b.length===m));k=!0);}catch(Q){V=!0,H=Q}finally{try{!k&&d.return!=null&&d.return()}finally{if(V)throw H}}return b}}function M(y){if(Array.isArray(y))return y}var te=function(m){return m.replace(/\s/,"_")},me=function(m){var d=m.activeTab,b=m.items,k=m.onChange,V=(0,n.useId)(),X=b.map(function(_e){var Se=_e.name,Te=_e.content,Ee=_e.value,Me=_e.tabId,De=_e.panelId,Ae=Ee!=null?Ee:Se,Xe=Me!=null?Me:V+te(Ae)+"-tab",Fe=De!=null?De:V+te(Ae)+"-panel";return{name:Se,content:Te,value:Ae,tabId:Xe,panelId:Fe}});if(!(0,B.zb)(X.map(function(_e){var Se=_e.value;return Se})))throw Error("Each tab value must be unique.");if(d!==void 0&&!X.some(function(_e){return _e.value===d}))throw Error("The given active tab value must exist in the list of items.");var H=function(Se){return X.findIndex(function(Te){return Te.value===Se})},Q=d!=null?d:X[0].value,U=(0,n.useState)(Q),R=N(U,2),oe=R[0],ce=R[1],ye=(0,n.useState)(H(Q)),ve=N(ye,2),G=ve[0],re=ve[1];(0,n.useEffect)(function(){return ce(Q)},[Q]);var ae=(0,n.useRef)(null),pe=X.length-1;(0,I.PQ)(function(){var _e;(_e=ae.current)===null||_e===void 0||_e.querySelectorAll('[role="tab"]')[G].focus()},[G]);var fe=function(Se){oe!==Se&&k&&k(Se),ce(Se),re(H(Se))},he=function(){return G!==void 0&&re(G===pe?0:G+1)},je=function(){return G!==void 0&&re(G===0?pe:G-1)},Oe=function(Se){return function(Te){switch(Te.key){case"ArrowRight":he();break;case"ArrowLeft":je();break;case"Space":fe(Se)}}};return(0,L.jsxs)("div",{className:D().tabs,children:[(0,L.jsx)("div",{className:D().tabs__tablist,ref:ae,role:"tablist",children:X.map(function(_e,Se){var Te=_e.value===oe,Ee=T()(D().tabs__tablist__tab,Te&&D()["tabs__tablist__tab--selected"]);return(0,L.jsx)("button",{"aria-controls":_e.panelId,"aria-selected":Te,className:Ee,id:_e.tabId,onClick:function(){return fe(_e.value)},onKeyDown:Oe(_e.value),role:"tab",tabIndex:G===Se?0:-1,children:_e.name},_e.value)})}),(0,L.jsx)("hr",{className:D().tabs__divider}),X.map(function(_e){return(0,L.jsx)("div",{className:D().tabs__tabpanel,"aria-labelledby":_e.tabId,hidden:_e.value!==oe,id:_e.panelId,role:"tabpanel",children:_e.content},_e.panelId)})]})};me.displayName="Tabs";try{me.displayName="Tabs",me.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:me.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(y){}var ue=`import React from 'react';
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
`,ge={Example:{startLoc:{col:46,line:122},endLoc:{col:74,line:122},startBody:{col:46,line:122},endBody:{col:74,line:122}}},le="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const J={title:"Components/Tabs",component:me,parameters:{design:(0,l.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,L.jsx)(a.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter."})}}},args:{items:[{name:"Ild",content:(0,L.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,L.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,L.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,L.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var u=function(m){return(0,L.jsx)(me,Object.assign({},m))};u.displayName="Template";var p=u.bind({});p.args={},p.parameters={docs:{description:{story:"This is how the component might look like."}}},p.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},p.parameters);var c=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>B,Disabled:()=>L,Error:()=>I,ReadOnlyConfirm:()=>D,ReadOnlyInfo:()=>P,__namedExportsOrder:()=>N,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/classnames/index.js"),A=e.n(w),x=e("./src/components/TextArea/TextArea.module.css"),W=e.n(x),h=e("./node_modules/react/jsx-runtime.js"),E=["isValid","disabled","readOnly","resize","label"];function g($,Z){if($==null)return{};var q=O($,Z),ie,M;if(Object.getOwnPropertySymbols){var te=Object.getOwnPropertySymbols($);for(M=0;M<te.length;M++)ie=te[M],!(Z.indexOf(ie)>=0)&&(!Object.prototype.propertyIsEnumerable.call($,ie)||(q[ie]=$[ie]))}return q}function O($,Z){if($==null)return{};var q={},ie=Object.keys($),M,te;for(te=0;te<ie.length;te++)M=ie[te],!(Z.indexOf(M)>=0)&&(q[M]=$[M]);return q}var C=function(Z){var q=Z.isValid,ie=q===void 0?!0:q,M=Z.disabled,te=M===void 0?!1:M,me=Z.readOnly,ue=me===void 0?!1:me,ge=Z.resize,le=ge===void 0?"none":ge,J=Z.label,u=g(Z,E);return(0,h.jsx)(f.SP,{isValid:ie,disabled:te,readOnly:ue,label:J,inputId:u.id,inputRenderer:function(c){var y=c.className,m=c.inputId;return(0,h.jsx)("textarea",Object.assign({},u,{id:m,disabled:te,readOnly:Boolean(ue),className:A()(y,W().TextArea,W()["TextArea--resize-"+le])}))}})};C.displayName="TextArea";try{C.displayName="TextArea",C.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:C.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch($){}var v=`import React from 'react';
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
`,i={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},_="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const S={title:"Components/TextArea",component:C,parameters:{design:(0,l.vc)([{type:"figma",url:_},{type:"link",url:_}]),docs:{page:function(){return(0,h.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var T=function(Z){return(0,h.jsx)(C,Object.assign({},Z))};T.displayName="Template";var B=T.bind({});B.args={},B.parameters={docs:{description:{story:"Regular textarea."}}};var I=T.bind({});I.args={isValid:!1},I.parameters={docs:{description:{story:"Textarea displaying error."}}};var P=T.bind({});P.args={readOnly:!0,value:"Some text"},P.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var D=T.bind({});D.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},D.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var L=T.bind({});L.args={disabled:!0,value:"Some text"},L.parameters={docs:{description:{story:"Textarea as disabled."}}},B.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},B.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},I.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},P.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},D.parameters),L.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},L.parameters);var N=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>q,Disabled:()=>ue,Error:()=>M,NumberInput:()=>ie,ReadOnlyConfirm:()=>me,ReadOnlyInfo:()=>te,__namedExportsOrder:()=>ge,default:()=>$});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),h=e("./node_modules/classnames/index.js"),E=e.n(h),g=e("./node_modules/react-number-format/dist/react-number-format.es.js"),O=function(J){return J.format!==void 0},C=function(J){return J.format===void 0},v=function(J,u){return u&&C(u)?numericFormatter(J,u):u&&O(u)?patternFormatter(J,u):J},i=e("./node_modules/react/jsx-runtime.js"),_=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function S(le,J){if(le==null)return{};var u=T(le,J),p,c;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(le);for(c=0;c<y.length;c++)p=y[c],!(J.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(le,p)||(u[p]=le[p]))}return u}function T(le,J){if(le==null)return{};var u={},p=Object.keys(le),c,y;for(y=0;y<p.length;y++)c=p[y],!(J.indexOf(c)>=0)&&(u[c]=le[c]);return u}var B=function(J){var u=J.values,p=J.sourceInfo;p.event.target.value=u.value.trim()},I=function(J,u,p){var c=J.target,y=J.key,m=c.selectionStart,d=c.selectionEnd,b=c.value,k=b===void 0?"":b;if(m!==null&&d!==null){var V=k[0]==="-",X=(u==null?void 0:u.length)||0+(V?1:0),H=(p==null?void 0:p.length)||0;V&&d<=X&&y==="Backspace"?c.setSelectionRange(1,1):c.setSelectionRange(Math.min(Math.max(m,X),k.length-H),Math.max(Math.min(d,k.length-H),X))}},P=function(J){var u=J.id,p=J.onChange,c=J.isValid,y=c===void 0?!0:c,m=J.disabled,d=m===void 0?!1:m,b=J.readOnly,k=b===void 0?!1:b,V=J.required,X=V===void 0?!1:V,H=J.formatting,Q=J.label,U=S(J,_),R=function(ce,ye){ye.source==="event"&&p&&(B({values:ce,sourceInfo:ye}),p(ye.event))};return(0,i.jsx)(f.SP,{isValid:y,disabled:d,readOnly:k,label:Q,inputId:u,inputRenderer:function(ce){var ye=ce.className,ve=ce.variant,G=ce.inputId,re={id:G,readOnly:Boolean(k),disabled:d,required:X,className:E()(ye,U.className),style:Object.assign({textAlign:H==null?void 0:H.align},U.style)};return H!=null&&H.number&&C(H.number)?(H.number.prefix&&H.number.prefix[0]==="-"&&(H.number.prefix=" "+H.number.prefix),(0,i.jsx)(g.h3,Object.assign({},re,H.number,U,{"data-testid":G+"-formatted-number-"+ve,onValueChange:R,valueIsNumericString:!0,onKeyDown:function(pe){return I(pe,H.number.prefix,H.number.suffix)}}))):H!=null&&H.number&&O(H.number)?(0,i.jsx)(g.HH,Object.assign({},re,H.number,U,{"data-testid":G+"-formatted-number-"+ve,onValueChange:R,valueIsNumericString:!0})):(0,i.jsx)("input",Object.assign({},re,U,{"data-testid":G+"-"+ve,onChange:p}))}})};P.displayName="TextField";try{P.displayName="TextField",P.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:P.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(le){}var D=`import React from 'react';
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
`,L={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},N="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const $={title:"Components/TextField",component:P,parameters:{design:(0,l.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,i.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var Z=function(J){return(0,i.jsx)(P,Object.assign({},J))};Z.displayName="Template";var q=Z.bind({});q.args={},q.parameters={docs:{description:{story:"Regular input field."}}};var ie=Z.bind({});ie.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},ie.parameters={docs:{description:{story:"Number input field."}}};var M=Z.bind({});M.args={isValid:!1},M.parameters={docs:{description:{story:"Input field displaying error."}}};var te=Z.bind({});te.args={readOnly:!0,value:"Some text"},te.parameters={docs:{description:{story:"Input field as readonly-info."}}};var me=Z.bind({});me.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},me.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var ue=Z.bind({});ue.args={disabled:!0,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as disabled."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},q.parameters),ie.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ie.parameters),M.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},M.parameters),te.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},te.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},me.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters);var ge=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>u,__namedExportsOrder:()=>p,default:()=>le});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),O=e("./node_modules/classnames/index.js"),C=e.n(O),v=(0,h.createContext)(void 0),i=function(){var y=(0,h.useContext)(v);if(y===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return y},_=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),S=e.n(_),T=e("./node_modules/react/jsx-runtime.js"),B=function(y){var m=y.children,d=y.onChange,b=y.selectedValue,k=function(X){var H=X.selectedValue;d({selectedValue:H})};return(0,T.jsx)(v.Provider,{value:{onChange:k,selectedValue:b},children:(0,T.jsx)("div",{className:C()(S()["toggle-button-group"]),"data-testid":"toggle-button-group",children:m})})};B.displayName="ToggleButtonGroup";try{B.displayName="ToggleButtonGroup",B.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:B.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(c){}var I=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),P=e.n(I),D=function(y){var m,d=y.children,b=y.value,k=i(),V=k.onChange,X=k.selectedValue,H=function(){V({selectedValue:b})};return(0,T.jsx)("button",{"data-testid":"toggle-button",className:C()(P()["toggle-button"],(m={},m[P()["toggle-button--selected"]]=b===X,m)),onClick:H,type:"button","aria-pressed":b==X,children:d})};D.displayName="ToggleButton";try{D.displayName="ToggleButton",D.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:D.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(c){}var L=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),N=e.n(L);function $(c,y){return te(c)||M(c,y)||q(c,y)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(c,y){if(!!c){if(typeof c=="string")return ie(c,y);var m=Object.prototype.toString.call(c).slice(8,-1);if(m==="Object"&&c.constructor&&(m=c.constructor.name),m==="Map"||m==="Set")return Array.from(c);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return ie(c,y)}}function ie(c,y){(y==null||y>c.length)&&(y=c.length);for(var m=0,d=new Array(y);m<y;m++)d[m]=c[m];return d}function M(c,y){var m=c==null?null:typeof Symbol!="undefined"&&c[Symbol.iterator]||c["@@iterator"];if(m!=null){var d=[],b=!0,k=!1,V,X;try{for(m=m.call(c);!(b=(V=m.next()).done)&&(d.push(V.value),!(y&&d.length===y));b=!0);}catch(H){k=!0,X=H}finally{try{!b&&m.return!=null&&m.return()}finally{if(k)throw X}}return d}}function te(c){if(Array.isArray(c))return c}var me=`import React, { useState } from 'react';
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
`,ue={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},ge="";const le={title:"Components/Toggle button group",component:B,parameters:{design:(0,E.vc)([{type:"figma",url:ge},{type:"link",url:ge}]),docs:{page:function(){return(0,T.jsx)(g.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var J=function(){var y=(0,h.useState)("left"),m=$(y,2),d=m[0],b=m[1],k=function(X){var H=X.selectedValue;b(H)};return(0,T.jsx)("div",{className:N().container,children:(0,T.jsxs)(B,{onChange:k,selectedValue:d,children:[(0,T.jsx)(D,{value:"left",children:"Aktivt valg"}),(0,T.jsx)(D,{value:"right",children:"Mulig valg"})]})})};J.displayName="Template";var u=J.bind({});u.args={},u.argTypes={onChange:{control:!1},selectedValue:{control:!1}},u.parameters={docs:{description:{}}},u.parameters=Object.assign({storySource:{source:`() => {
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
}`}},u.parameters);var p=["Example"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),f=e.n(a),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),F=e.n(z),j=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),w=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),A=1.6,x=/(\d*\.?\d+)rem(?=\W|$)/gim,W=function(v){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,_=Math.pow(10,i);return Math.round((v+Number.EPSILON)*_)/_},h=function(v){return typeof v=="string"?v.replace(x,function(i,_){var S=W(_*A);return S+"rem"}):v},E={get:function(v,i){if(i in v){var _=v[i];return typeof _=="object"?new Proxy(_,E):h(_)}}},g=new Proxy(j,E),O=new Proxy(w,E)},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{zx:()=>v,rp:()=>g,qE:()=>E,Wu:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),z=e.n(f),F=e("./src/components/SvgIcon/index.ts"),j=e("./src/components/Button/Button.module.css"),w=e.n(j),A=e("./node_modules/react/jsx-runtime.js"),x=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function W(i,_){if(i==null)return{};var S=h(i,_),T,B;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(i);for(B=0;B<I.length;B++)T=I[B],!(_.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,T)||(S[T]=i[T]))}return S}function h(i,_){if(i==null)return{};var S={},T=Object.keys(i),B,I;for(I=0;I<T.length;I++)B=T[I],!(_.indexOf(B)>=0)&&(S[B]=i[B]);return S}var E;(function(i){i.Small="small",i.Medium="medium",i.Large="large"})(E||(E={}));var g;(function(i){i.Primary="primary",i.Secondary="secondary",i.Success="success",i.Danger="danger",i.Inverted="inverted"})(g||(g={}));var O;(function(i){i.Filled="filled",i.Outline="outline",i.Quiet="quiet"})(O||(O={}));var C=function(_,S){var T,B,I,P=_.children,D=_.color,L=D===void 0?g.Primary:D,N=_.variant,$=N===void 0?O.Filled:N,Z=_.size,q=Z===void 0?E.Small:Z,ie=_.fullWidth,M=ie===void 0?!1:ie,te=_.dashedBorder,me=te===void 0?!1:te,ue=_.iconPlacement,ge=ue===void 0?"left":ue,le=_.icon,J=_.type,u=J===void 0?"button":J,p=_.className,c=W(_,x);return(0,A.jsxs)("button",Object.assign({},c,{ref:S,className:z()(w().button,w()["button--"+q],w()["button--"+$],w()["button--"+L],w()["button--"+$+"--"+L],(T={},T[w()["button--full-width"]]=M,T),(B={},B[w()["button--dashed-border"]]=me,B),(I={},I[w()["button--only-icon"]]=!P&&le,I),p),type:u,children:[le&&ge==="left"&&(0,A.jsx)(F.l,{svgIconComponent:le,className:w().icon}),P,le&&ge==="right"&&(0,A.jsx)(F.l,{svgIconComponent:le,className:w().icon})]}))};C.displayName="Button";const v=(0,a.forwardRef)(C)},"./src/components/Checkbox/Checkbox.tsx":(r,t,e)=>{"use strict";e.d(t,{X:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),z=e("./node_modules/react/index.js"),F=e("./node_modules/classnames/index.js"),j=e.n(F),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),A=e("./src/components/Checkbox/Checkbox.module.css"),x=e.n(A),W=e("./node_modules/react/jsx-runtime.js"),h=function(g){var O=g.checkboxId,C=g.checked,v=g.compact,i=g.description,_=g.disabled,S=g.error,T=g.hideLabel,B=g.label,I=g.name,P=g.onChange,D=g.readOnly;return(0,W.jsx)(w.f,{checked:C,className:j()(x().checkbox,C&&x()["checkbox--checked"],S&&x()["checkbox--error"],_&&x()["checkbox--disabled"],v&&x()["checkbox--compact"],D&&x()["checkbox--read-only"]),description:i,disabled:_,hideInput:D,hideLabel:T,inputId:O,label:B,name:I,onChange:P,size:v?w.b.Xsmall:w.b.Small,type:"checkbox",children:(0,W.jsx)("span",{className:x()["visible-box"],children:(0,W.jsx)("span",{className:x()["visible-box__checkmark"]})})})};h.displayName="Checkbox";try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:h.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(E){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(r,t,e)=>{"use strict";e.d(t,{B:()=>z});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ErrorMessage/ErrorMessage.module.css"),a=e.n(l),f=e("./node_modules/react/jsx-runtime.js"),z=function(j){var w=j.id,A=j.children,x=j.ariaLabel;return(0,f.jsx)("div",{"data-testid":"ErrorMessage","aria-label":x,id:w,role:"alertdialog",className:n()(a()["error-message-wrapper"]),children:A})};z.displayName="ErrorMessage";try{z.displayName="ErrorMessage",z.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:z.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(F){}},"./src/components/FieldSet/FieldSet.tsx":(r,t,e)=>{"use strict";e.d(t,{C:()=>A,w:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),a=e.n(l),f=e("./src/components/ErrorMessage/ErrorMessage.tsx"),z=e("./src/components/FieldSet/FieldSet.module.css"),F=e.n(z),j=e("./node_modules/react/jsx-runtime.js"),w;(function(x){x.Xsmall="xsmall",x.Small="small"})(w||(w={}));var A=function(W){var h=W.children,E=W.className,g=W.description,O=W.disabled,C=W.error,v=W.legend,i=W.size,_=i===void 0?w.Small:i;return(0,j.jsxs)("fieldset",{className:a()(F()["field-set"],F()["field-set--"+_],E),disabled:O,children:[v&&(0,j.jsx)("legend",{className:F()["field-set__legend"],children:v}),g&&(0,j.jsx)("p",{className:F()["field-set__description"],children:g}),(0,j.jsx)("div",{className:F()["field-set__content"],children:h}),C&&(0,j.jsx)("div",{className:F()["field-set__error-message"],children:(0,j.jsx)(f.B,{children:C})})]})};A.displayName="FieldSet";try{A.displayName="FieldSet",A.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:A.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(x){}},"./src/components/FieldSet/index.ts":(r,t,e)=>{"use strict";e.d(t,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(r,t,e)=>{"use strict";e.d(t,{t:()=>J});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),W=e("./node_modules/react/index.js"),h=e("./node_modules/classnames/index.js"),E=e.n(h),g=e("./src/components/Pagination/Pagination.module.css"),O=e.n(g),C,v;function i(){return i=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},i.apply(this,arguments)}var _=function(p){return W.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),C||(C=W.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),v||(v=W.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},S,T;function B(){return B=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},B.apply(this,arguments)}var I=function(p){return W.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),S||(S=W.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),T||(T=W.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},P;function D(){return D=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},D.apply(this,arguments)}var L=function(p){return W.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),P||(P=W.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},N,$;function Z(){return Z=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},Z.apply(this,arguments)}var q=function(p){return W.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},p),N||(N=W.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),$||($=W.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},ie=e("./node_modules/react/jsx-runtime.js");function M(u,p){return le(u)||ge(u,p)||me(u,p)||te()}function te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(u,p){if(!!u){if(typeof u=="string")return ue(u,p);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return ue(u,p)}}function ue(u,p){(p==null||p>u.length)&&(p=u.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=u[c];return y}function ge(u,p){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var y=[],m=!0,d=!1,b,k;try{for(c=c.call(u);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(V){d=!0,k=V}finally{try{!m&&c.return!=null&&c.return()}finally{if(d)throw k}}return y}}function le(u){if(Array.isArray(u))return u}var J=function(p){var c,y,m,d,b=p.numberOfRows,k=p.rowsPerPageOptions,V=p.rowsPerPage,X=p.onRowsPerPageChange,H=p.currentPage,Q=p.setCurrentPage,U=p.descriptionTexts,R=(0,W.useState)(1),oe=M(R,2),ce=oe[0],ye=oe[1];(0,W.useEffect)(function(){b<V?ye(1):ye(Math.ceil(b/V))},[V,b]);var ve=function(){H<ce-1&&Q(H+1)},G=function(){H>0&&Q(H-1)},re=function(){var pe=1+H*V,fe=V*(H+1)>b?b:V*(H+1);return(0,ie.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:pe+"-"+fe+" "+U.of+" "+b})};return(0,ie.jsxs)("div",{className:E()(O()["pagination-wrapper"]),children:[(0,ie.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:U.rowsPerPage}),(0,ie.jsx)("select",{style:{marginRight:"25px"},value:V,onChange:function(pe){return X(pe)},"aria-labelledby":"number-of-rows-select",children:k.map(function(ae){return(0,ie.jsx)("option",{value:ae,children:ae},ae)})}),re(),(0,ie.jsx)("button",{className:E()(O()["icon-button"]),onClick:function(){return Q(0)},disabled:H===0,"aria-label":U.navigateFirstPage,"data-testid":"first-page-icon",children:(0,ie.jsx)(L,{className:E()(O()["pagination-icon"],(c={},c[O()["pagination-icon--disabled"]]=H===0,c))})}),(0,ie.jsx)("button",{className:E()(O()["icon-button"]),onClick:function(){return G()},disabled:H===0,"aria-label":U.previousPage,"data-testid":"pagination-previous-icon",children:(0,ie.jsx)(I,{className:E()(O()["pagination-icon"],(y={},y[O()["pagination-icon--disabled"]]=H===0,y))})}),(0,ie.jsx)("button",{className:E()(O()["icon-button"]),onClick:function(){return ve()},disabled:H===ce-1,"aria-label":U.nextPage,"data-testid":"pagination-next-icon",children:(0,ie.jsx)(_,{className:E()(O()["pagination-icon"],(m={},m[O()["pagination-icon--disabled"]]=H===ce-1,m))})}),(0,ie.jsx)("button",{className:E()(O()["icon-button"]),onClick:function(){return Q(ce-1)},disabled:H===ce-1,"aria-label":U.navigateLastPage,children:(0,ie.jsx)(q,{className:E()(O()["pagination-icon"],(d={},d[O()["pagination-icon--disabled"]]=H===ce-1,d))})})]})};J.displayName="Pagination";try{J.displayName="Pagination",J.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:J.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(u){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>J,c:()=>me});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/DesignTokens/index.ts"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js");function g(u,p){return _(u)||i(u,p)||C(u,p)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(u,p){if(!!u){if(typeof u=="string")return v(u,p);var c=Object.prototype.toString.call(u).slice(8,-1);if(c==="Object"&&u.constructor&&(c=u.constructor.name),c==="Map"||c==="Set")return Array.from(u);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return v(u,p)}}function v(u,p){(p==null||p>u.length)&&(p=u.length);for(var c=0,y=new Array(p);c<p;c++)y[c]=u[c];return y}function i(u,p){var c=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(c!=null){var y=[],m=!0,d=!1,b,k;try{for(c=c.call(u);!(m=(b=c.next()).done)&&(y.push(b.value),!(p&&y.length===p));m=!0);}catch(V){d=!0,k=V}finally{try{!m&&c.return!=null&&c.return()}finally{if(d)throw k}}return y}}function _(u){if(Array.isArray(u))return u}function S(u){var p=function(V){var X,H;return(X=(H=window)===null||H===void 0?void 0:H.matchMedia(V).matches)!==null&&X!==void 0?X:!1},c=(0,s.useState)(p(u)),y=g(c,2),m=y[0],d=y[1],b=function(){d(p(u))};return(0,s.useEffect)(function(){var k=window.matchMedia(u);return b(),k.addEventListener("change",b),function(){return k.removeEventListener("change",b)}},[u]),m}var T,B,I;function P(){return P=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},P.apply(this,arguments)}var D=function(p){return s.createElement("svg",P({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),T||(T=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),B||(B=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),I||(I=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},L,N,$;function Z(){return Z=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var c=arguments[p];for(var y in c)Object.prototype.hasOwnProperty.call(c,y)&&(u[y]=c[y])}return u},Z.apply(this,arguments)}var q=function(p){return s.createElement("svg",Z({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),L||(L=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),N||(N=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),$||($=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},ie=e("./src/components/Panel/Panel.module.css"),M=e.n(ie),te=e("./node_modules/react/jsx-runtime.js"),me;(function(u){u.Success="success",u.Info="info",u.Warning="warning",u.Error="error"})(me||(me={}));var ue=function(p){var c=p.size,y=p.variant;switch(y){case me.Info:case me.Error:case me.Warning:return(0,te.jsx)(D,{style:{width:c,height:c},"data-testid":"panel-icon-info"});case me.Success:return(0,te.jsx)(q,{style:{width:c,height:c},"data-testid":"panel-icon-success"})}},ge=function(p){var c=p.forceMobileLayout,y=S("(max-width: "+l.T.BreakpointsSm+")");return c?!0:y},le=function(p){var c=p.children;return(0,te.jsx)("div",{className:n()(M()["panel__pointer-position"]),children:c})};le.displayName="defaultRenderArrow";var J=function(p){var c,y=p.renderIcon,m=y===void 0?ue:y,d=p.title,b=p.children,k=p.variant,V=k===void 0?me.Info:k,X=p.showPointer,H=X===void 0?!1:X,Q=p.showIcon,U=Q===void 0?!0:Q,R=p.forceMobileLayout,oe=R===void 0?!1:R,ce=p.renderArrow,ye=ce===void 0?le:ce,ve=ge({forceMobileLayout:oe}),G=ve?l.T.ComponentPanelSizeIconXs:l.T.ComponentPanelSizeIconMd;return(0,te.jsxs)("div",{className:n()(M().panel,(c={},c[M()["panel--mobile-layout"]]=ve,c)),children:[H&&ye({children:(0,te.jsx)("div",{"data-testid":"panel-pointer",className:n()(M().panel__pointer,M()["panel__pointer--"+V])})}),(0,te.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(M()["panel__content-wrapper"],M()["panel__content-wrapper--"+V]),children:[U&&(0,te.jsx)("div",{"data-testid":"panel-icon-wrapper",className:M()["panel__icon-wrapper"],children:m({size:G,variant:V})}),(0,te.jsxs)("div",{className:M().panel__content,children:[d&&(0,te.jsx)("h2",{className:M().panel__header,children:d}),(0,te.jsx)("div",{className:M().panel__body,children:b})]})]})]})};J.displayName="Panel";try{J.displayName="Panel",J.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:J.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(u){}},"./src/components/RadioButton/RadioButton.tsx":(r,t,e)=>{"use strict";e.d(t,{E:()=>E,j:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),z=e("./node_modules/react/index.js"),F=e("./node_modules/classnames/index.js"),j=e.n(F),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),A=e("./src/components/RadioButton/RadioButton.module.css"),x=e.n(A),W=e("./node_modules/react/jsx-runtime.js"),h;(function(g){g.Xsmall="xsmall",g.Small="small"})(h||(h={}));var E=function(O){var C=O.checked,v=O.description,i=O.disabled,_=O.error,S=O.hideLabel,T=O.label,B=O.name,I=O.onChange,P=O.radioId,D=O.size,L=D===void 0?h.Small:D,N=O.value;return(0,W.jsx)(w.f,{checked:C,className:j()(x().radio,x()["radio--"+L],C&&x()["radio--checked"],_&&x()["radio--error"],i&&x()["radio--disabled"]),description:v,disabled:i,hideLabel:S,inputId:P,label:T,name:B,onChange:I,size:L===h.Xsmall?w.b.Xsmall:w.b.Small,type:"radio",value:N,children:(0,W.jsx)("span",{className:x()["visible-button"],children:(0,W.jsx)("span",{className:x()["visible-button__checkmark"]})})})};E.displayName="RadioButton";try{E.displayName="RadioButton",E.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:E.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(g){}},"./src/components/RadioButton/index.ts":(r,t,e)=>{"use strict";e.d(t,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(r,t,e)=>{"use strict";e.d(t,{P:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),_=e("./node_modules/react/index.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),B=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),I=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/Select/MultiSelectItem.module.css"),D=e.n(P),L=e("./node_modules/react/jsx-runtime.js"),N=function(d){var b=d.deleteButtonLabel,k=d.disabled,V=d.onDeleteButtonClick,X=d.label;return(0,L.jsxs)("span",{className:D()["multi-select-item"],children:[(0,L.jsx)("span",{children:X}),(0,L.jsx)("button",{"aria-label":b,className:D()["multi-select-item__delete-button"],disabled:k,onClick:V,children:(0,L.jsx)("span",{className:D()["multi-select-item__delete-button__cross"]})})]})};N.displayName="MultiSelectItem";try{N.displayName="MultiSelectItem",N.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:N.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(m){}var $=e("./src/hooks/index.ts"),Z=e("./src/components/Select/Select.module.css"),q=e.n(Z);function ie(m){return me(m)||te(m)||le(m)||M()}function M(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(m){if(typeof Symbol!="undefined"&&m[Symbol.iterator]!=null||m["@@iterator"]!=null)return Array.from(m)}function me(m){if(Array.isArray(m))return J(m)}function ue(m,d){return p(m)||u(m,d)||le(m,d)||ge()}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(m,d){if(!!m){if(typeof m=="string")return J(m,d);var b=Object.prototype.toString.call(m).slice(8,-1);if(b==="Object"&&m.constructor&&(b=m.constructor.name),b==="Map"||b==="Set")return Array.from(m);if(b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return J(m,d)}}function J(m,d){(d==null||d>m.length)&&(d=m.length);for(var b=0,k=new Array(d);b<d;b++)k[b]=m[b];return k}function u(m,d){var b=m==null?null:typeof Symbol!="undefined"&&m[Symbol.iterator]||m["@@iterator"];if(b!=null){var k=[],V=!0,X=!1,H,Q;try{for(b=b.call(m);!(V=(H=b.next()).done)&&(k.push(H.value),!(d&&k.length===d));V=!0);}catch(U){X=!0,Q=U}finally{try{!V&&b.return!=null&&b.return()}finally{if(X)throw Q}}return k}}function p(m){if(Array.isArray(m))return m}var c={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},y=function(d){var b=d.disabled,k=d.error,V=d.hideLabel,X=d.inputId,H=d.label,Q=d.multiple,U=d.onChange,R=d.options,oe=d.value,ce=R.map(function(be){return be.value});if(ce.length!==new Set(ce).size)throw Error("Each value in the option list must be unique.");var ye=(0,_.useState)(Q?oe!=null?oe:[]:[]),ve=ue(ye,2),G=ve[0],re=ve[1],ae=(0,_.useState)(Q?void 0:oe),pe=ue(ae,2),fe=pe[0],he=pe[1],je=R.findIndex(function(be){return be.value===fe}),Oe=(0,_.useState)(!1),_e=ue(Oe,2),Se=_e[0],Te=_e[1];(0,$.OR)("click",function(){return Te(!1)}),(0,$.OR)("keydown",function(){return Te(!0)});var Ee=(0,_.useState)(!1),Me=ue(Ee,2),De=Me[0],Ae=Me[1],Xe=(0,_.useRef)(null),Fe=(0,_.useRef)(null);(0,_.useEffect)(function(){var be=Xe.current;if(be){var xe=be.offsetHeight,Pe=be.getElementsByTagName("li")[0].offsetHeight,Ve=be.scrollTop,Le=Ve+xe,Ie=je*Pe,Ze=Ie+Pe,co=Ie>=Ve&&Ze<=Le;co||(Ie<Ve?be.scrollTop=Ie:be.scrollTop=Ze-xe)}},[je]);var qe=function(xe){var Pe;return(Pe=R.find(function(Ve){return Ve.value===xe}))!==null&&Pe!==void 0?Pe:{label:"",value:""}},$e=function(xe,Pe){G!=null&&G.length||he(Pe),re(xe),U&&U(xe)},Ue=function(xe){he(xe),Ae(!1),U&&U(xe)},eo=function(xe){Q?G.includes(xe)?He(xe):$e([].concat(ie(G),[xe]),xe):Ue(xe)},He=function(xe){$e(G.filter(function(Pe){return Pe!==xe}),xe)},ao=function(){$e([])},lo=(0,_.useCallback)(function(){if(fe===void 0)he(R[0].value);else{var be=je+1;be>=0&&be<R.length&&he(R[be].value)}Ae(!0)},[fe,je,he,R]),to=(0,_.useCallback)(function(){if(fe===void 0)he(R[R.length-1].value);else{var be=je-1;be>=0&&be<R.length&&he(R[be].value)}Ae(!0)},[fe,je,he,R]);(0,$.OG)(c.ArrowDown,function(){return De&&lo()}),(0,$.OG)(c.ArrowUp,function(){return De&&to()}),(0,$.OG)(c.Enter,function(){return De&&Q&&fe&&eo(fe)});var so=function(xe){return fe===xe},ro=function(xe){return Q?G.includes(xe):so(xe)},io=(0,_.useId)(),uo=Fe.current?"calc("+Fe.current.offsetWidth+"px + 2 * "+B.component.input.border_width.default.value+")":void 0;return(0,L.jsxs)("div",{className:T()(q().select,q()["select--"+(Q?"multiple":"single")],De&&q()["select--expanded"],b&&q()["select--disabled"],Se&&q()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,L.jsx)(I.SP,{disabled:b,inputId:X,inputRenderer:function(xe){var Pe=xe.className,Ve=xe.inputId;return(0,L.jsxs)("span",{className:T()(Pe,q().select__field),ref:Fe,children:[Q&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("span",{className:q()["select--multiple__field__values"],children:G.map(qe).map(function(Le){return(0,L.jsx)(N,{deleteButtonLabel:Le.deleteButtonLabel,disabled:b!=null?b:!1,label:Le.label,onDeleteButtonClick:function(){return He(Le.value)}},Le.value)})}),(0,L.jsx)("button",{"aria-label":d.deleteButtonLabel,className:q()["select--multiple__field__delete-button"],disabled:!G.length||b,onClick:function(){return ao()},children:(0,L.jsx)("span",{className:q()["select--multiple__field__delete-button__cross"]})})]}),(0,L.jsxs)("button",{"aria-controls":io,"aria-expanded":De,"aria-label":H,className:q().select__field__button,disabled:b,id:Ve,onBlur:function(){return Ae(!1)},onClick:function(){return Ae(!De)},onKeyDown:function(Ie){Object.values(c).includes(Ie.key)&&(Ie.preventDefault(),Ae(!0))},role:"combobox",value:Q?G:fe,children:[!Q&&(0,L.jsx)("span",{className:q()["select--single__field__value"],children:qe(fe).label}),(0,L.jsx)("span",{className:q()["select__field__arrow-wrapper"],children:(0,L.jsx)("span",{className:q()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!k,label:V?void 0:H,noFocusEffect:Q,noPadding:!0,readOnly:!1}),(0,L.jsx)("ul",{className:q()["select__option-list"],id:io,ref:Xe,role:"listbox",style:{width:uo},children:R.map(function(be){return(0,L.jsx)("li",{"aria-selected":ro(be.value),className:T()(q()["select__option-list__option"],ro(be.value)&&q()["select__option-list__option--selected"],Q&&so(be.value)&&q()["select--multiple__option-list__option--focused"]),onClick:function(){return eo(be.value)},onMouseDown:function(Pe){return Pe.preventDefault()},onKeyDown:function(Pe){return Pe.preventDefault()},role:"option",value:be.value,children:be.label},be.value)})})]})};y.displayName="Select";try{y.displayName="Select",y.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:y.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(m){}},"./src/components/SvgIcon/index.ts":(r,t,e)=>{"use strict";e.d(t,{l:()=>j});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),f=["svgIconComponent"];function z(w,A){if(w==null)return{};var x=F(w,A),W,h;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);for(h=0;h<E.length;h++)W=E[h],!(A.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(w,W)||(x[W]=w[W]))}return x}function F(w,A){if(w==null)return{};var x={},W=Object.keys(w),h,E;for(E=0;E<W.length;E++)h=W[E],!(A.indexOf(h)>=0)&&(x[h]=w[h]);return x}var j=function(A){var x=A.svgIconComponent,W=z(A,f);return(0,a.isValidElement)(x)?(0,a.cloneElement)(x,Object.assign({},W)):null};try{j.displayName="SvgIcon",j.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:j.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(w){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(r,t,e)=>{"use strict";e.d(t,{b:()=>W,f:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(a),z=e("./node_modules/react/index.js"),F=e("./node_modules/classnames/index.js"),j=e.n(F),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),A=e.n(w),x=e("./node_modules/react/jsx-runtime.js"),W;(function(E){E.Xsmall="xsmall",E.Small="small"})(W||(W={}));var h=function(g){var O=g.checked,C=g.children,v=g.className,i=g.description,_=g.disabled,S=g.hideInput,T=g.hideLabel,B=g.inputId,I=g.label,P=g.name,D=g.onChange,L=g.size,N=g.type,$=g.value,Z=(0,z.useId)(),q=B!=null?B:"input-"+Z,ie=I?q+"-label":void 0,M=i?q+"-description":void 0,te=I&&!T;return(0,x.jsxs)("label",{className:j()(A().template,A()["template--"+L],_&&A()["template--disabled"],v),htmlFor:B,children:[!S&&(0,x.jsxs)("span",{className:A()["template__input-wrapper"],children:[(0,x.jsx)("input",{"aria-describedby":M,"aria-label":te?void 0:I,"aria-labelledby":te?ie:void 0,checked:O!=null?O:!1,className:A()["template__input-wrapper__input"],disabled:_,id:q,name:P,onChange:_?void 0:D,type:N,value:$}),(0,x.jsx)("span",{className:A()["template__input-wrapper__visible-box"],children:C})]}),(te||i)&&(0,x.jsxs)("span",{className:A()["template__label-and-description"],children:[te&&(0,x.jsx)("span",{className:A()["template__label-and-description__label"],id:ie,children:I}),i&&(0,x.jsx)("span",{className:A()["template__label-and-description__description"],id:M,children:i})]})]})};h.displayName="CheckboxRadioTemplate";try{h.displayName="CheckboxRadioTemplate",h.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:h.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(E){}},"./src/components/_InputWrapper/index.ts":(r,t,e)=>{"use strict";e.d(t,{SP:()=>C,Hx:()=>a});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l;(function(v){v.Default="default",v.Error="error",v.Disabled="disabled",v.ReadOnlyInfo="readonly-info",v.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var a;(function(v){v.ReadOnlyInfo="readonly-info",v.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var f;(function(v){v.None="none",v.Error="error",v.Search="search"})(f||(f={}));var z=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=i.readOnly,S=_===void 0?!1:_,T=i.disabled,B=T===void 0?!1:T,I=i.isValid,P=I===void 0?!0:I,D=i.isSearch,L=D===void 0?!1:D,N=f.None;return L&&(N=f.Search),B?{variant:l.Disabled,iconVariant:N}:S===!0||S===a.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:N}:S===a.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:N}:P===!1?{variant:l.Error,iconVariant:f.Error}:{variant:l.Default,iconVariant:N}},F;function j(){return j=Object.assign?Object.assign.bind():function(v){for(var i=1;i<arguments.length;i++){var _=arguments[i];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(v[S]=_[S])}return v},j.apply(this,arguments)}var w=function(i){return s.createElement("svg",j({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),F||(F=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},A;function x(){return x=Object.assign?Object.assign.bind():function(v){for(var i=1;i<arguments.length;i++){var _=arguments[i];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(v[S]=_[S])}return v},x.apply(this,arguments)}var W=function(i){return s.createElement("svg",x({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),A||(A=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},h=e("./src/components/_InputWrapper/InputWrapper.module.css"),E=e.n(h),g=e("./node_modules/react/jsx-runtime.js"),O=function(i){var _=i.variant,S=i.disabled,T=S===void 0?!1:S;if(_===f.Error)return(0,g.jsx)("div",{className:E().InputWrapper__icon,children:(0,g.jsx)(w,{"data-testid":"input-icon-error"})});if(_===f.Search){var B;return(0,g.jsx)("div",{className:n()(E().InputWrapper__icon,(B={},B[E()["InputWrapper__icon--disabled"]]=T,B)),children:(0,g.jsx)(W,{"data-testid":"input-icon-search"})})}return null};try{O.displayName="Icon",O.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:O.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(v){}var C=function(i){var _,S=i.isValid,T=S===void 0?!0:S,B=i.disabled,I=B===void 0?!1:B,P=i.readOnly,D=P===void 0?!1:P,L=i.isSearch,N=L===void 0?!1:L,$=i.label,Z=i.inputId,q=i.inputRenderer,ie=i.noFocusEffect,M=i.noPadding,te=(0,s.useId)(),me=Z!=null?Z:te,ue=z({readOnly:D,disabled:I,isValid:T,isSearch:N}),ge=ue.variant,le=ue.iconVariant;return(0,g.jsxs)(g.Fragment,{children:[$&&(0,g.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(E().InputWrapper__label),htmlFor:me,children:$}),(0,g.jsxs)("div",{"data-testid":"InputWrapper",className:n()(E().InputWrapper,E()["InputWrapper--"+ge],(_={},_[E()["InputWrapper--search"]]=N,_[E()["InputWrapper--with-focus-effect"]]=!ie,_[E()["InputWrapper--with-padding"]]=!M,_)),children:[(0,g.jsx)(O,{variant:le,disabled:I}),q({className:E().InputWrapper__field,inputId:me,variant:ge})]})]})};try{C.displayName="InputWrapper",C.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:C.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(v){}},"./src/hooks/index.ts":(r,t,e)=>{"use strict";e.d(t,{OR:()=>o,OG:()=>n,D9:()=>l,PQ:()=>a});var s=e("./node_modules/react/index.js");function o(f,z){(0,s.useEffect)(function(){return document.addEventListener(f,z),function(){return document.removeEventListener(f,z)}},[f,z])}function n(f,z){(0,s.useEffect)(function(){var F=function(w){w.key===f&&z()};return document.addEventListener("keydown",F),function(){return document.removeEventListener("keydown",F)}},[f,z])}function l(f){var z=(0,s.useRef)();return(0,s.useEffect)(function(){z.current=f},[f]),z.current}var a=function(z,F){var j=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(j.current)j.current=!1;else return z()},F)}},"./src/utils/arrayUtils.ts":(r,t,e)=>{"use strict";e.d(t,{cO:()=>A,zb:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e.n(a),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),F=e.n(z),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e.n(j);function A(h,E){if(h===E)return!0;if(h===void 0||E===void 0||h.length!==E.length)return!1;for(var g in h)if(h[g]!==E[g])return!1;return!0}function x(h){return h[h.length-1]}function W(h){return h.length===new Set(h).size}},"./storybook-init-framework-entry.js":(r,t,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(r,t,e)=>{"use strict";e.d(t,{r:()=>f});var s=e("./node_modules/react/index.js"),o,n,l;function a(){return a=Object.assign?Object.assign.bind():function(z){for(var F=1;F<arguments.length;F++){var j=arguments[F];for(var w in j)Object.prototype.hasOwnProperty.call(j,w)&&(z[w]=j[w])}return z},a.apply(this,arguments)}var f=function(F){return s.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},F),o||(o=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion---oQBwV {
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

/* print style */
@media print {
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
`,""]),a.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const f=a},"./src/components/Accordion/Accordion.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Button/Button.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Map/Map.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/Page.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/Select.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(r,t,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(r,t,e)=>{"use strict";r=e.nmd(r);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],r,!1)}},r=>{var t=s=>r(r.s=s);r.O(0,[249],()=>(t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),t("./storybook-init-framework-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),t("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),t("./.storybook/preview.js-generated-config-entry.js"),t("./generated-stories-entry.cjs")));var e=r.O()}]);
