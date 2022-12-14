(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>O,__page:()=>c,default:()=>M});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(a),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),V=e.n(U),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(b),A=e("./node_modules/react/index.js"),S=e("./node_modules/@mdx-js/react/index.js"),R=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=["components"];function E(){return E=Object.assign?Object.assign.bind():function(g){for(var D=1;D<arguments.length;D++){var I=arguments[D];for(var N in I)Object.prototype.hasOwnProperty.call(I,N)&&(g[N]=I[N])}return g},E.apply(this,arguments)}function m(g,D){if(g==null)return{};var I=v(g,D),N,z;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(g);for(z=0;z<J.length;z++)N=J[z],!(D.indexOf(N)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,N)||(I[N]=g[N]))}return I}function v(g,D){if(g==null)return{};var I={},N=Object.keys(g),z,J;for(J=0;J<N.length;J++)z=N[J],!(D.indexOf(z)>=0)&&(I[z]=g[z]);return I}var T={},p="wrapper";function i(g){var D=g.components,I=m(g,y);return(0,S.mdx)(p,E({},T,I,{components:D,mdxType:"MDXLayout"}),(0,S.mdx)(R.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,S.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,S.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,S.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,S.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,S.mdx)("h3",{id:"npm"},"NPM"),(0,S.mdx)("pre",null,(0,S.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,S.mdx)("h3",{id:"yarn"},"Yarn"),(0,S.mdx)("pre",null,(0,S.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,S.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,S.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,S.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,S.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,S.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,S.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,S.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,S.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,S.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,S.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,S.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,S.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,S.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,S.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,S.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,S.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,S.mdx)("ul",null,(0,S.mdx)("li",{parentName:"ul"},(0,S.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,S.mdx)("li",{parentName:"ul"},(0,S.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}i.displayName="MDXContent",i.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var x={title:"Introduksjon",includeStories:["__page"]},P={};x.parameters=x.parameters||{},x.parameters.docs=Object.assign({},x.parameters.docs||{},{page:function(){return(0,S.mdx)(R.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:x},(0,S.mdx)(i,null))}});const M=x;var O=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>O,__page:()=>c,default:()=>M});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(a),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),V=e.n(U),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),w=e.n(b),A=e("./node_modules/react/index.js"),S=e("./node_modules/@mdx-js/react/index.js"),R=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),y=["components"];function E(){return E=Object.assign?Object.assign.bind():function(g){for(var D=1;D<arguments.length;D++){var I=arguments[D];for(var N in I)Object.prototype.hasOwnProperty.call(I,N)&&(g[N]=I[N])}return g},E.apply(this,arguments)}function m(g,D){if(g==null)return{};var I=v(g,D),N,z;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(g);for(z=0;z<J.length;z++)N=J[z],!(D.indexOf(N)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,N)||(I[N]=g[N]))}return I}function v(g,D){if(g==null)return{};var I={},N=Object.keys(g),z,J;for(J=0;J<N.length;J++)z=N[J],!(D.indexOf(z)>=0)&&(I[z]=g[z]);return I}var T={},p="wrapper";function i(g){var D=g.components,I=m(g,y);return(0,S.mdx)(p,E({},T,I,{components:D,mdxType:"MDXLayout"}),(0,S.mdx)(R.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,S.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,S.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,S.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,S.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,S.mdx)("pre",null,(0,S.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}i.displayName="MDXContent",i.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var x={title:"Components/AppWrapper",includeStories:["__page"]},P={};x.parameters=x.parameters||{},x.parameters.docs=Object.assign({},x.parameters.docs||{},{page:function(){return(0,S.mdx)(R.aT,{mdxStoryNameToKey:P,mdxComponentAnnotations:x},(0,S.mdx)(i,null))}});const M=x;var O=["__page"]},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),_=e("./src/components/AppWrapper/AppWrapper.module.css"),U=e("./node_modules/react/jsx-runtime.js"),V=function(S){var R=S.children;return(0,U.jsx)("div",{children:R})};V.displayName="AppWrapper";try{V.displayName="AppWrapper",V.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:V.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(A){}var b=function(S){var R=S.description;return(0,U.jsxs)(V,{children:[(0,U.jsx)(l.Dx,{}),(0,U.jsx)(l.dk,{children:R}),(0,U.jsx)(l.fQ,{includePrimary:!0}),(0,U.jsx)(l.X6,{children:"Props"}),(0,U.jsx)(l.$4,{story:l.Uh})]})};b.displayName="StoryPage";var w=null;try{b.displayName="StoryPage",b.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:b.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(A){}},"./.storybook/preview.js-generated-config-entry.js":(r,t,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>E,parameters:()=>y});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),A=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),R=e("./node_modules/@storybook/theming/dist/esm/index.js"),y={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},R.np.dark),light:Object.assign({},R.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},E=["parameters"],m=e("./node_modules/console-browserify/index.js");function v(i,c){var x=Object.keys(i);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(i);c&&(P=P.filter(function(M){return Object.getOwnPropertyDescriptor(i,M).enumerable})),x.push.apply(x,P)}return x}function T(i){for(var c=1;c<arguments.length;c++){var x=arguments[c]!=null?arguments[c]:{};c%2?v(Object(x),!0).forEach(function(P){p(i,P,x[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(x)):v(Object(x)).forEach(function(P){Object.defineProperty(i,P,Object.getOwnPropertyDescriptor(x,P))})}return i}function p(i,c,x){return c in i?Object.defineProperty(i,c,{value:x,enumerable:!0,configurable:!0,writable:!0}):i[c]=x,i}Object.keys(s).forEach(function(i){var c=s[i];switch(i){case"args":return(0,A.uc)(c);case"argTypes":return(0,A.v9)(c);case"decorators":return c.forEach(function(P){return(0,A.$9)(P,!1)});case"loaders":return c.forEach(function(P){return(0,A.HZ)(P,!1)});case"parameters":return(0,A.h1)(T({},c),!1);case"argTypesEnhancers":return c.forEach(function(P){return(0,A.My)(P)});case"argsEnhancers":return c.forEach(function(P){return(0,A._C)(P)});case"render":return(0,A.$P)(c);case"globals":case"globalTypes":{var x={};return x[i]=c,(0,A.h1)(x,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return m.log(i+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ie,__namedExportsOrder:()=>ue,default:()=>pe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),v=e("./node_modules/classnames/index.js"),T=e.n(v),p=e("./.storybook/StoryPage.tsx"),i=e("./src/components/Button/index.ts"),c;(function(K){K.Primary="primary",K.Secondary="secondary"})(c||(c={}));var x=(0,y.createContext)(void 0),P=function(){var X=(0,y.useContext)(x);if(X===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return X},M=e("./src/components/Accordion/Accordion.module.css"),O=e.n(M),g=e("./node_modules/react/jsx-runtime.js"),D=function(X){var se=X.children,de=X.open,ve=X.onClick,he=X.iconVariant,fe=he===void 0?c.Primary:he,Te=(0,y.useId)(),_e=(0,y.useId)();return(0,g.jsx)("div",{className:O().accordion,children:(0,g.jsx)(x.Provider,{value:{onClick:ve,open:de,headerId:Te,contentId:_e,iconVariant:fe},children:se})})};D.displayName="Accordion";const I=null;try{D.displayName="Accordion",D.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:D.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(K){}var N=e("./src/components/Accordion/AccordionHeader.module.css"),z=e.n(N),J=e("./src/components/Accordion/AccordionIcon.module.css"),Z=e.n(J),ae;function L(){return L=Object.assign?Object.assign.bind():function(K){for(var X=1;X<arguments.length;X++){var se=arguments[X];for(var de in se)Object.prototype.hasOwnProperty.call(se,de)&&(K[de]=se[de])}return K},L.apply(this,arguments)}var le=function(X){return y.createElement("svg",L({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X),ae||(ae=y.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},ge;function me(){return me=Object.assign?Object.assign.bind():function(K){for(var X=1;X<arguments.length;X++){var se=arguments[X];for(var de in se)Object.prototype.hasOwnProperty.call(se,de)&&(K[de]=se[de])}return K},me.apply(this,arguments)}var ye=function(X){return y.createElement("svg",me({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X),ge||(ge=y.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},re=function(){var X,se,de=P(),ve=de.onClick,he=de.open,fe=de.iconVariant,Te=[Z()["accordion-icon"],(X={},X[Z()["accordion-icon--opened"]]=he,X)],_e=(se={height:20,width:20,className:T()(Te)},se["data-testid"]=fe,se.onClick=ve,se);switch(fe){case c.Primary:return(0,g.jsx)(le,Object.assign({},_e));case c.Secondary:return(0,g.jsx)(ye,Object.assign({},_e))}};const ee=null;var h=function(X){var se,de=X.children,ve=X.actions,he=X.subtitle,fe=P(),Te=fe.onClick,_e=fe.open,je=fe.headerId,Oe=fe.contentId;return(0,g.jsxs)("div",{className:T()(z()["accordion-header"],(se={},se[z()["accordion-header--subtitle"]]=he,se)),children:[(0,g.jsx)(re,{}),(0,g.jsxs)("button",{className:T()(z()["accordion-header__title"]),"aria-expanded":_e,type:"button",onClick:Te,id:je,"aria-controls":Oe,children:[de,(he==null?void 0:he.length)&&(0,g.jsx)("div",{"data-testid":"accordion-header-subtitle",className:T()(z()["accordion-header__subtitle"]),children:he})]}),(0,g.jsx)("div",{className:T()(z()["accordion-header__actions"]),children:ve})]})};h.displayName="AccordionHeader";try{h.displayName="AccordionHeader",h.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:h.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(K){}var k=function(X){var se=X.children,de=P(),ve=de.open,he=de.contentId,fe=de.headerId;return(0,g.jsx)("div",{children:ve&&(0,g.jsx)("div",{"aria-expanded":ve,id:he,"aria-labelledby":fe,children:se})})};k.displayName="AccordionContent";const f=null;try{k.displayName="AccordionContent",k.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:k.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(K){}var C=e("./src/components/Accordion/Accordion.stories.module.css"),u=e.n(C);function d(K,X){return G(K)||Q(K,X)||B(K,X)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(K,X){if(!!K){if(typeof K=="string")return H(K,X);var se=Object.prototype.toString.call(K).slice(8,-1);if(se==="Object"&&K.constructor&&(se=K.constructor.name),se==="Map"||se==="Set")return Array.from(K);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return H(K,X)}}function H(K,X){(X==null||X>K.length)&&(X=K.length);for(var se=0,de=new Array(X);se<X;se++)de[se]=K[se];return de}function Q(K,X){var se=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(se!=null){var de=[],ve=!0,he=!1,fe,Te;try{for(se=se.call(K);!(ve=(fe=se.next()).done)&&(de.push(fe.value),!(X&&de.length===X));ve=!0);}catch(_e){he=!0,Te=_e}finally{try{!ve&&se.return!=null&&se.return()}finally{if(he)throw Te}}return de}}function G(K){if(Array.isArray(K))return K}var $=`import React, { useState } from 'react';
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
`,te={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},Y="";const pe={title:"Components/Accordion",component:D,subcomponents:{AccordionHeader:h,AccordionContent:k},parameters:{design:(0,E.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,g.jsx)(p.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:c.Primary,useActions:!0,subtitle:"Subtitle"}};var be=function(X){var se=(0,y.useState)(!1),de=d(se,2),ve=de[0],he=de[1],fe=(0,y.useState)(!1),Te=d(fe,2),_e=Te[0],je=Te[1],Oe=function(){he(!ve)},Ee=function(){je(!_e)},Me="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",De=(0,m.D8)(),Ae=d(De,1),Xe=Ae[0].useActions,Fe=(0,m.D8)(),qe=d(Fe,1),$e=qe[0].subtitle,Ue=Xe?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{children:"Example setup"}),(0,g.jsx)(i.zx,{variant:i.Wu.Filled,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 1"}),(0,g.jsx)(i.zx,{variant:i.Wu.Outline,color:i.rp.Primary,size:i.qE.Small,children:"Separat knapp 2"})]}):void 0,eo=$e.length>0?$e:void 0;return(0,g.jsxs)("div",{className:T()(u().container),children:[(0,g.jsxs)(D,{onClick:Oe,open:ve,iconVariant:X.iconVariant,children:[(0,g.jsx)(h,{actions:Ue,subtitle:eo,children:"Accordion 1"}),(0,g.jsx)(k,{children:Me})]}),(0,g.jsxs)(D,{onClick:Ee,open:_e,iconVariant:X.iconVariant,children:[(0,g.jsx)(h,{actions:Ue,subtitle:eo,children:"Accordion 2"}),(0,g.jsx)(k,{children:Me})]})]})};be.displayName="Template";var ie=be.bind({});ie.args={iconVariant:c.Primary,open:!1},ie.argTypes={open:{control:!1},onClick:{control:!1}},ie.parameters={docs:{description:{story:""}}},ie.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ie.parameters);var ue=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidth:()=>O,Primary:()=>T,Secondary:()=>p,SecondaryWithIconNoText:()=>M,Success:()=>i,SuccessWithCustomIcon:()=>P,SuccessWithIcon:()=>x,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./node_modules/@navikt/ds-icons/esm/Success.js"),V=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,R={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const E={title:"Components/Button/Filled",component:b.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,A.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:b.Wu.Filled,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var m=function(N){return(0,A.jsx)(b.zx,Object.assign({},N))};m.displayName="Template";var v=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(b.zx,Object.assign({},N))})};v.displayName="WithinContainerTemplate";var T=m.bind({});T.args={color:b.rp.Primary,children:"Primary button"},T.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={color:b.rp.Secondary,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={color:b.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var x=m.bind({});x.args={color:b.rp.Success,icon:(0,A.jsx)(U.Z,{}),iconPlacement:"left",children:"Button"},x.parameters={docs:{description:{story:""}}};var P=m.bind({});P.args={color:b.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},P.parameters={docs:{description:{story:""}}};var M=m.bind({});M.args={color:b.rp.Secondary,icon:(0,A.jsx)(U.Z,{})},M.parameters={docs:{description:{story:""}}};var O=v.bind({});O.args={color:b.rp.Primary,icon:(0,A.jsx)(U.Z,{}),fullWidth:!0,children:"Secondary button"},O.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters),M.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},M.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},O.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidthAndDashedBorder:()=>O,Primary:()=>T,Secondary:()=>p,SecondaryWithIconNoText:()=>M,Success:()=>i,SuccessWithCustomIcon:()=>P,SuccessWithIcon:()=>x,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./node_modules/@navikt/ds-icons/esm/Success.js"),V=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,R={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const E={title:"Components/Button/Outline",component:b.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,A.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:b.Wu.Outline,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var m=function(N){return(0,A.jsx)(b.zx,Object.assign({},N))};m.displayName="Template";var v=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(b.zx,Object.assign({},N))})};v.displayName="WithinContainerTemplate";var T=m.bind({});T.args={color:b.rp.Primary,children:"Primary button"},T.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={color:b.rp.Secondary,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={color:b.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var x=m.bind({});x.args={color:b.rp.Success,icon:(0,A.jsx)(U.Z,{}),iconPlacement:"left",children:"Button"},x.parameters={docs:{description:{story:""}}};var P=m.bind({});P.args={color:b.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},P.parameters={docs:{description:{story:""}}};var M=m.bind({});M.args={color:b.rp.Secondary,icon:(0,A.jsx)(U.Z,{})},M.parameters={docs:{description:{story:""}}};var O=v.bind({});O.args={color:b.rp.Primary,icon:(0,A.jsx)(U.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},O.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters),M.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},M.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},O.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>c,Disabled:()=>g,FullWidth:()=>O,Primary:()=>T,Secondary:()=>p,Success:()=>i,SuccessWithCustomIcon:()=>P,SuccessWithIcon:()=>x,SuccessWithIconNoText:()=>M,__namedExportsOrder:()=>D,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./node_modules/@navikt/ds-icons/esm/Success.js"),V=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),w=e("./src/components/Button/Stories/success.svg"),A=e("./node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,R={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const E={title:"Components/Button/Quiet",component:b.zx,parameters:{design:(0,_.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,A.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:b.Wu.Quiet,size:b.qE.Small,onClick:function(N){alert(JSON.stringify(N.target.innerHTML)+" clicked!")}}};var m=function(N){return(0,A.jsx)(b.zx,Object.assign({},N))};m.displayName="Template";var v=function(N){return(0,A.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,A.jsx)(b.zx,Object.assign({},N))})};v.displayName="WithinContainerTemplate";var T=m.bind({});T.args={color:b.rp.Primary,children:"Primary button"},T.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={color:b.rp.Secondary,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={color:b.rp.Success,children:"Success button"},i.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Danger,children:"Danger button"},c.parameters={docs:{description:{story:""}}};var x=m.bind({});x.args={color:b.rp.Success,icon:(0,A.jsx)(U.Z,{}),iconPlacement:"left",children:"Button"},x.parameters={docs:{description:{story:""}}};var P=m.bind({});P.args={color:b.rp.Success,icon:(0,A.jsx)(w.r,{}),iconPlacement:"left",children:"Button"},P.parameters={docs:{description:{story:""}}};var M=m.bind({});M.args={color:b.rp.Success,icon:(0,A.jsx)(U.Z,{})},M.parameters={docs:{description:{story:""}}};var O=v.bind({});O.args={color:b.rp.Primary,icon:(0,A.jsx)(U.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},O.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={children:"Disabled button",disabled:!0},g.parameters={docs:{description:{story:""}}},T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters),M.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},M.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},O.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters);var D=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>m,Compact:()=>T,Disabled:()=>p,Error:()=>v,LongText:()=>x,Normal:()=>E,ReadOnly:()=>i,WithDescription:()=>c,WithHiddenLabel:()=>P,__namedExportsOrder:()=>M,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/Checkbox/Checkbox.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},S="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const R={title:"Components/Checkbox",component:V.X,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var y=function(g){return(0,b.jsx)(V.X,Object.assign({},g))};y.displayName="Template";var E=y.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default checkbox."}}};var m=y.bind({});m.args={checked:!0},m.parameters={docs:{description:{story:"This is a checked checkbox."}}};var v=y.bind({});v.args={error:!0},v.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var T=y.bind({});T.args={compact:!0},T.parameters={docs:{description:{story:"This is the compact checkbox."}}};var p=y.bind({});p.args={disabled:!0},p.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var i=y.bind({});i.args={readOnly:!0},i.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var c=y.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a checkbox with description."}}};var x=y.bind({});x.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},x.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var P=y.bind({});P.args={hideLabel:!0},P.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},T.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters);var M=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>B,Disabled:()=>Q,Error:()=>H,Horizontal:()=>j,Vertical:()=>d,__namedExportsOrder:()=>G,default:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),x=e("./node_modules/classnames/index.js"),P=e.n(x),M=e("./src/components/Checkbox/Checkbox.tsx"),O=e("./src/components/FieldSet/index.ts"),g=e("./src/utils/arrayUtils.ts"),D=e("./src/hooks/index.ts"),I=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),N=e.n(I),z=e("./node_modules/react/jsx-runtime.js");function J($,te){return ge($)||le($,te)||ae($,te)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae($,te){if(!!$){if(typeof $=="string")return L($,te);var Y=Object.prototype.toString.call($).slice(8,-1);if(Y==="Object"&&$.constructor&&(Y=$.constructor.name),Y==="Map"||Y==="Set")return Array.from($);if(Y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Y))return L($,te)}}function L($,te){(te==null||te>$.length)&&(te=$.length);for(var Y=0,pe=new Array(te);Y<te;Y++)pe[Y]=$[Y];return pe}function le($,te){var Y=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(Y!=null){var pe=[],be=!0,ie=!1,ue,K;try{for(Y=Y.call($);!(be=(ue=Y.next()).done)&&(pe.push(ue.value),!(te&&pe.length===te));be=!0);}catch(X){ie=!0,K=X}finally{try{!be&&Y.return!=null&&Y.return()}finally{if(ie)throw K}}return pe}}function ge($){if(Array.isArray($))return $}var me;(function($){$.Vertical="vertical",$.Horizontal="horizontal"})(me||(me={}));var ye=function(te,Y){switch(Y.type){case"check":return te.concat([Y.name]);case"uncheck":return te.filter(function(pe){return pe!==Y.name});case"reset":return Y.state}},re=function(te){return te.filter(function(Y){var pe=Y.checked;return pe}).map(function(Y){var pe=Y.name;return pe})},ee=function(te){var Y=te.compact,pe=te.description,be=te.disabled,ie=te.error,ue=te.items,K=te.legend,X=te.onChange,se=te.variant,de=se===void 0?me.Vertical:se;if(!(0,g.zb)(ue.map(function(je){return je.name})))throw Error("Each name in the checkbox group must be unique.");var ve=(0,n.useReducer)(ye,re(ue)),he=J(ve,2),fe=he[0],Te=he[1];(0,n.useEffect)(function(){return Te({type:"reset",state:re(ue)})},[ue]);var _e=(0,D.D9)(fe);return(0,D.PQ)(function(){X&&!be&&!(0,g.cO)(_e,fe)&&X(fe)},[fe,X,be]),(0,z.jsx)(O.C,{description:pe,disabled:be,error:ie,legend:K,size:Y?O.w.Xsmall:O.w.Small,children:(0,z.jsx)("div",{className:P()(N()["checkbox-group"],N()["checkbox-group--"+de],Y&&N()["checkbox-group--compact"]),children:ue.map(function(je){return(0,z.jsx)(M.X,{checkboxId:je.checkboxId,checked:fe.includes(je.name),compact:Y,description:je.description,disabled:be||je.disabled,error:!!ie,label:je.label,name:je.name,onChange:function(Ee){Te({type:Ee.target.checked?"check":"uncheck",name:je.name})}},je.name)})})})};ee.displayName="CheckboxGroup";try{ee.displayName="CheckboxGroup",ee.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:ee.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch($){}var h=`import React from 'react';
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
`,k={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const C={title:"Components/CheckboxGroup",component:ee,parameters:{design:(0,l.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,z.jsx)(a.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:me.Vertical}};var u=function(te){return(0,z.jsx)(ee,Object.assign({},te))};u.displayName="Template";var d=u.bind({});d.args={variant:me.Vertical},d.parameters={docs:{description:{story:"This is the default setting."}}};var j=u.bind({});j.args={variant:me.Horizontal},j.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var B=u.bind({});B.args={compact:!0},B.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var H=u.bind({});H.args={error:"Du m\xE5 velge minst ett av alternativene over."},H.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var Q=u.bind({});Q.args={disabled:!0},Q.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},d.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},d.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},j.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},B.parameters),H.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},H.parameters),Q.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},Q.parameters);var G=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{SimpleExample:()=>v,__namedExportsOrder:()=>T,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/DesignTokens/index.ts"),U=e("./src/components/CircularProgress/CircularProgress.module.css"),V=e.n(U),b=e("./node_modules/react/jsx-runtime.js"),w=function(i){var c=i.value,x=i.width,P=x===void 0?70:x,M=i.strokeWidth,O=M===void 0?2.5:M,g=i.ariaLabel,D=i.label,I=i.id,N=I+"-label",z=!g&&D?N:void 0;return(0,b.jsxs)("div",{id:I,className:V().container,style:{width:P+"px"},role:"progressbar","aria-labelledby":z,"aria-label":g,children:[D&&(0,b.jsx)("div",{id:N,className:V().label,children:D}),(0,b.jsxs)("svg",{className:V().svg,viewBox:"0 0 35.8 35.8",children:[(0,b.jsx)(A,{stroke:_.T.ColorsBlue200,strokeWidth:O}),(0,b.jsx)(A,{strokeWidth:O,stroke:_.T.ColorsBlue900,strokeDashoffset:100-c,strokeDasharray:"100 100",className:V().circleTransition})]})]})};w.displayName="CircularProgress";var A=function(i){return(0,b.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},i))};A.displayName="Circle";try{w.displayName="CircularProgress",w.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:w.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(p){}var S=`import React from 'react';
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
`,R={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},y="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const E={title:"Components/CircularProgress",component:w,parameters:{design:(0,l.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,b.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var m=function(i){return(0,b.jsx)(w,Object.assign({},i))};m.displayName="CircularTemplate";var v=m.bind({});v.args={width:100,value:60,label:"3/5",id:"progress"},v.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},v.parameters);var T=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>E,__namedExportsOrder:()=>m,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/ErrorMessage/ErrorMessage.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},S="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const R={title:"Components/ErrorMessage",component:V.B,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var y=function(T){return(0,b.jsx)(V.B,Object.assign({},T,{children:"This is an error message"}))};y.displayName="Template";var E=y.bind({});E.args={},E.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},E.parameters);var m=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>m,Disabled:()=>p,Error:()=>T,Normal:()=>E,WithDescription:()=>v,__namedExportsOrder:()=>i,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/FieldSet/FieldSet.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},S="";const R={title:"Components/FieldSet",component:V.C,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:V.w.Small}};var y=function(x){return(0,b.jsx)(V.C,Object.assign({},x,{children:x.children}))};y.displayName="Template";var E=y.bind({});E.args={},E.parameters={docs:{description:{story:"This is a normal field set."}}};var m=y.bind({});m.args={size:V.w.Xsmall},m.parameters={docs:{description:{story:"This is a compact field set."}}};var v=y.bind({});v.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},v.parameters={docs:{description:{story:"This is a field set with a description."}}};var T=y.bind({});T.args={error:"Her er det en beskrivende feilmelding."},T.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var p=y.bind({});p.args={disabled:!0},p.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},T.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},p.parameters);var i=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Dashed:()=>g,Solid:()=>O,__namedExportsOrder:()=>D,default:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/classnames/index.js"),U=e.n(_),V=e("./src/components/List/List.module.css"),b=e.n(V),w;(function(I){I.Solid="solid",I.Dashed="dashed"})(w||(w={}));var A=(0,n.createContext)({borderStyle:w.Solid}),S=function(){var N=(0,n.useContext)(A);if(N===void 0)throw new Error("useListContext must be used within a ListContext");return N},R=e("./node_modules/react/jsx-runtime.js"),y=function(N){var z=N.children,J=N.borderStyle,Z=J===void 0?w.Solid:J;return(0,R.jsx)("ul",{className:U()(b().list,b()["list--"+Z]),children:(0,R.jsx)(A.Provider,{value:{borderStyle:Z},children:z})})};y.displayName="List";try{y.displayName="List",y.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:y.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(I){}var E=e("./src/components/List/ListItem.module.css"),m=e.n(E),v=function(N){var z=N.children,J=S(),Z=J.borderStyle;return(0,R.jsx)("li",{className:U()(m()["list-item"],m()["list-item--"+Z]),children:z})};v.displayName="ListItem";try{v.displayName="ListItem",v.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:v.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(I){}var T=e("./src/components/List/List.stories.modules.css"),p=e.n(T),i=`import React from 'react';
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
`,c={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},x="";const P={title:"Components/List",component:y,parameters:{design:(0,l.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,R.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var M=function(N){return(0,R.jsx)("div",{className:p().container,children:(0,R.jsxs)(y,{borderStyle:N.borderStyle,children:[(0,R.jsx)(v,{children:"List Item 1"}),(0,R.jsx)(v,{children:"List Item 2"}),(0,R.jsx)(v,{children:"List Item 3"})]})})};M.displayName="Template";var O=M.bind({});O.args={borderStyle:w.Solid},O.parameters={docs:{description:{story:""}}};var g=M.bind({});g.args={borderStyle:w.Dashed},g.parameters={docs:{description:{story:""}}},O.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},O.parameters),g.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},g.parameters);var D=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>Q,GoogleMaps:()=>pe,KartverketSea:()=>Y,KartverketTerrain:()=>te,MapWithMarkerZoomAndCenter:()=>G,OpenStreetMap:()=>$,__namedExportsOrder:()=>be,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./.storybook/StoryPage.tsx"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),T=e("./node_modules/leaflet/dist/images/marker-icon.png"),p=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),i=e("./node_modules/leaflet/dist/images/marker-shadow.png"),c=e("./node_modules/leaflet/dist/leaflet-src.js"),x=e("./node_modules/react-leaflet/lib/MapContainer.js"),P=e("./node_modules/react-leaflet/lib/TileLayer.js"),M=e("./node_modules/react-leaflet/lib/AttributionControl.js"),O=e("./node_modules/react-leaflet/lib/Marker.js"),g=e("./node_modules/react-leaflet/lib/hooks.js"),D=e("./src/components/Map/Map.module.css"),I=e.n(D),N=e("./node_modules/leaflet/dist/leaflet.css"),z=e("./node_modules/react/jsx-runtime.js"),J={latitude:64.888996,longitude:12.8186054},Z=4,ae=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],L=function(ue){var K=ue.readOnly,X=K===void 0?!1:K,se=ue.layers,de=se===void 0?ae:se,ve=ue.centerLocation,he=ve===void 0?J:ve,fe=ue.zoom,Te=fe===void 0?Z:fe,_e=ue.markerLocation,je=ue.onClick;return(0,z.jsxs)(x.h,{className:I().map,center:ge(he),zoom:Te,zoomControl:!X,dragging:!X,touchZoom:!X,doubleClickZoom:!X,scrollWheelZoom:!X,attributionControl:!1,children:[de.map(function(Oe,Ee){return(0,z.jsx)(P.I,{url:Oe.url,attribution:Oe.attribution,subdomains:Oe.subdomains?Oe.subdomains:[],opacity:X?.5:1},Ee)}),(0,z.jsx)(M.z,{prefix:!1}),(0,z.jsx)(le,{markerLocation:_e}),(0,z.jsx)(me,{readOnly:X,onClick:je})]})};L.displayName="Map";function le(ie){var ue=ie.markerLocation,K=(0,c.icon)({iconUrl:T,iconRetinaUrl:p,shadowUrl:i,iconSize:[25,41],iconAnchor:[12,41]});return ue?(0,z.jsx)(O.J,{position:ge(ue),icon:K}):null}function ge(ie){return[ie.latitude,ie.longitude]}var me=function(ue){var K=ue.onClick,X=ue.readOnly;return(0,g.zV)({click:function(de){K&&!X&&K({latitude:de.latlng.lat,longitude:de.latlng.lng})}}),null};try{L.displayName="Map",L.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:L.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(ie){}var ye=e("./node_modules/console-browserify/index.js");function re(ie,ue){return C(ie)||f(ie,ue)||h(ie,ue)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(ie,ue){if(!!ie){if(typeof ie=="string")return k(ie,ue);var K=Object.prototype.toString.call(ie).slice(8,-1);if(K==="Object"&&ie.constructor&&(K=ie.constructor.name),K==="Map"||K==="Set")return Array.from(ie);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return k(ie,ue)}}function k(ie,ue){(ue==null||ue>ie.length)&&(ue=ie.length);for(var K=0,X=new Array(ue);K<ue;K++)X[K]=ie[K];return X}function f(ie,ue){var K=ie==null?null:typeof Symbol!="undefined"&&ie[Symbol.iterator]||ie["@@iterator"];if(K!=null){var X=[],se=!0,de=!1,ve,he;try{for(K=K.call(ie);!(se=(ve=K.next()).done)&&(X.push(ve.value),!(ue&&X.length===ue));se=!0);}catch(fe){de=!0,he=fe}finally{try{!se&&K.return!=null&&K.return()}finally{if(de)throw he}}return X}}function C(ie){if(Array.isArray(ie))return ie}var u=`import React, { useState } from 'react';
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
`,d={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},j="";const B={title:"Components/Map",component:L,parameters:{layout:"fullscreen",design:(0,E.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,z.jsx)(m.Y,{description:"Map component"})}}},args:{}};var H=function(ue){var K=(0,y.useState)(ue.markerLocation),X=re(K,2),se=X[0],de=X[1],ve=function(fe){de(fe),ye.log("Map clicked at ["+fe.latitude+","+fe.longitude+"]")};return(0,z.jsx)(L,Object.assign({},ue,{markerLocation:se,onClick:ve}))};H.displayName="Template";var Q=H.bind({});Q.args={},Q.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var G=H.bind({});G.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},G.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var $=H.bind({});$.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},$.parameters={docs:{description:{story:"OpenStreetMap"}}};var te=H.bind({});te.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},te.parameters={docs:{description:{story:"Kartverket terrain map"}}};var Y=H.bind({});Y.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},Y.parameters={docs:{description:{story:"Kartverket sea map"}}};var pe=H.bind({});pe.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},pe.parameters={docs:{description:{story:"Google Maps"}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters),G.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters),te.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},te.parameters),Y.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},pe.parameters);var be=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Primary:()=>J,Success:()=>Z,__namedExportsOrder:()=>ae,default:()=>N});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_;function U(){return U=Object.assign?Object.assign.bind():function(L){for(var le=1;le<arguments.length;le++){var ge=arguments[le];for(var me in ge)Object.prototype.hasOwnProperty.call(ge,me)&&(L[me]=ge[me])}return L},U.apply(this,arguments)}var V=function(le){return n.createElement("svg",U({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},le),_||(_=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},b;(function(L){L.Primary="primary",L.Success="success"})(b||(b={}));var w;(function(L){L.Small="small",L.Medium="medium"})(w||(w={}));var A=(0,n.createContext)({color:b.Primary,size:w.Medium}),S=function(){var le=(0,n.useContext)(A);if(le===void 0)throw new Error("usePageContext must be used within a PageContext");return le},R=e("./node_modules/classnames/index.js"),y=e.n(R),E=e("./src/components/Page/PageContent.module.css"),m=e.n(E),v=e("./node_modules/react/jsx-runtime.js"),T=function(le){var ge=le.children;return(0,v.jsx)("div",{className:y()(m()["page-content"]),children:ge})};T.displayName="PageContent";try{T.displayName="PageContent",T.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:T.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(L){}var p=e("./src/components/SvgIcon/index.ts"),i=e("./src/components/Page/PageHeader.module.css"),c=e.n(i),x=function(le){var ge=le.children,me=le.icon,ye=S(),re=ye.color,ee=ye.size,h=ee===w.Small?28:40;return(0,v.jsxs)("header",{className:y()(c()["page-header"],c()["page-header--"+re],c()["page-header--"+ee]),children:[(0,v.jsx)(p.l,{width:h,height:h,svgIconComponent:me}),(0,v.jsx)("span",{children:ge})]})};x.displayName="PageHeader";try{x.displayName="PageHeader",x.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:x.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(L){}var P=e("./src/components/Page/Page.module.css"),M=e.n(P),O=function(le){var ge=le.children,me=le.color,ye=me===void 0?b.Primary:me,re=le.size,ee=re===void 0?w.Medium:re;return(0,v.jsx)("div",{className:M().page,children:(0,v.jsx)(A.Provider,{value:{color:ye,size:ee},children:ge})})};O.displayName="Page";try{O.displayName="Page",O.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:O.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(L){}var g=`import React from 'react';
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
`,D={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},I="";const N={title:"Components/Page",component:O,parameters:{design:(0,l.vc)([{type:"figma",url:I},{type:"link",url:I}]),docs:{page:function(){return(0,v.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var z=function(le){return(0,v.jsx)("div",{style:{width:"600px"},children:(0,v.jsxs)(O,{color:le.color,size:le.size,children:[(0,v.jsx)(x,{icon:(0,v.jsx)(V,{}),children:"PageHeader"}),(0,v.jsx)(T,{children:"PageContent"})]})})};z.displayName="Template";var J=z.bind({});J.args={color:b.Primary,size:w.Medium},J.parameters={docs:{description:{story:""}}};var Z=z.bind({});Z.args={color:b.Success,size:w.Medium},Z.parameters={docs:{description:{story:""}}},J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters),Z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Z.parameters);var ae=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>d,__namedExportsOrder:()=>j,default:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(a),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),V=e.n(U),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e.n(b),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),S=e.n(A),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(R),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),m=e.n(E),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e.n(v),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e.n(c),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),M=e.n(P),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(O),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),I=e.n(D),N=e("./node_modules/react/index.js"),z=e("./node_modules/storybook-addon-designs/esm/index.js"),J=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Pagination/Pagination.tsx"),ae=e("./node_modules/react/jsx-runtime.js");function L(B,H){return re(B)||ye(B,H)||ge(B,H)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(B,H){if(!!B){if(typeof B=="string")return me(B,H);var Q=Object.prototype.toString.call(B).slice(8,-1);if(Q==="Object"&&B.constructor&&(Q=B.constructor.name),Q==="Map"||Q==="Set")return Array.from(B);if(Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q))return me(B,H)}}function me(B,H){(H==null||H>B.length)&&(H=B.length);for(var Q=0,G=new Array(H);Q<H;Q++)G[Q]=B[Q];return G}function ye(B,H){var Q=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(Q!=null){var G=[],$=!0,te=!1,Y,pe;try{for(Q=Q.call(B);!($=(Y=Q.next()).done)&&(G.push(Y.value),!(H&&G.length===H));$=!0);}catch(be){te=!0,pe=be}finally{try{!$&&Q.return!=null&&Q.return()}finally{if(te)throw pe}}return G}}function re(B){if(Array.isArray(B))return B}var ee=`import React, { useState } from 'react';
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
`,h={Example:{startLoc:{col:52,line:46},endLoc:{col:1,line:67},startBody:{col:52,line:46},endBody:{col:1,line:67}}},k="",f={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const C={title:"Components/Pagination",component:Z.t,parameters:{design:(0,z.vc)([{type:"figma",url:k},{type:"link",url:k}]),docs:{page:function(){return(0,ae.jsx)(J.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var u=function(H){var Q=(0,N.useState)(5),G=L(Q,2),$=G[0],te=G[1],Y=(0,N.useState)(0),pe=L(Y,2),be=pe[0],ie=pe[1],ue=function(X){te(parseInt(X.target.value,10)),ie(0)};return(0,ae.jsx)(Z.t,Object.assign({},H,{rowsPerPage:$,currentPage:be,setCurrentPage:ie,onRowsPerPageChange:ue,descriptionTexts:f}))};u.displayName="Template";var d=u.bind({});d.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},d.parameters={docs:{description:{story:""}}},d.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},d.parameters);var j=["Example"]},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>T,Info:()=>m,Success:()=>E,Warning:()=>v,__namedExportsOrder:()=>p,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/Panel/Panel.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},S="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const R={title:"Components/Panel",component:V.s,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,b.jsx)("div",{children:"Her kommer litt informasjon"})}};var y=function(c){return(0,b.jsx)(V.s,Object.assign({},c))};y.displayName="Template";var E=y.bind({});E.args={variant:V.c.Success},E.parameters={docs:{description:{story:"Success beskrivelse"}}};var m=y.bind({});m.parameters={docs:{description:{story:"Info beskrivelse"}}};var v=y.bind({});v.args={variant:V.c.Warning},v.parameters={docs:{description:{story:"Warning beskrivelse"}}};var T=y.bind({});T.args={variant:V.c.Error},T.parameters={docs:{description:{story:"Error beskrivelse"}}},E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},m.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},T.parameters);var p=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>f,Info:()=>h,Success:()=>ee,Warning:()=>k,__namedExportsOrder:()=>C,default:()=>ye});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),v=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Button/index.ts"),p=e("./src/components/Panel/Panel.tsx"),i=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),c=e("./node_modules/classnames/index.js"),x=e.n(c),P=e("./src/components/Panel/PopoverPanel.module.css"),M=e.n(P),O=e("./node_modules/react/jsx-runtime.js"),g=function(d){var j=d.children;return(0,O.jsx)(i.Eh,{className:x()(M()["popover-panel__arrow"]),asChild:!0,children:j})};g.displayName="renderArrow";var D=function(d){var j=d.children,B=d.variant,H=B===void 0?p.c.Warning:B,Q=d.trigger,G=d.side,$=G===void 0?"top":G,te=d.title,Y=d.showIcon,pe=d.forceMobileLayout,be=d.showPointer,ie=be===void 0?!0:be,ue=d.onOpenChange,K=d.open,X=K===void 0?!1:K;return(0,O.jsxs)(i.fC,{open:X,onOpenChange:ue,children:[(0,O.jsx)(i.xz,{asChild:!0,role:"button",children:Q}),(0,O.jsx)(i.VY,{side:$,className:M()["popover-panel"],children:(0,O.jsx)(p.s,{title:te,showIcon:Y,forceMobileLayout:pe,showPointer:ie,variant:H,renderArrow:g,children:j})})]})};D.displayName="PopoverPanel";const I=null;try{D.displayName="PopoverPanel",D.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:D.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(u){}function N(u,d){return L(u)||ae(u,d)||J(u,d)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(u,d){if(!!u){if(typeof u=="string")return Z(u,d);var j=Object.prototype.toString.call(u).slice(8,-1);if(j==="Object"&&u.constructor&&(j=u.constructor.name),j==="Map"||j==="Set")return Array.from(u);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return Z(u,d)}}function Z(u,d){(d==null||d>u.length)&&(d=u.length);for(var j=0,B=new Array(d);j<d;j++)B[j]=u[j];return B}function ae(u,d){var j=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(j!=null){var B=[],H=!0,Q=!1,G,$;try{for(j=j.call(u);!(H=(G=j.next()).done)&&(B.push(G.value),!(d&&B.length===d));H=!0);}catch(te){Q=!0,$=te}finally{try{!H&&j.return!=null&&j.return()}finally{if(Q)throw $}}return B}}function L(u){if(Array.isArray(u))return u}var le=`import React from 'react';
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
`,ge={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},me="";const ye={title:"Components/Panel/PopoverPanel",component:D,parameters:{design:(0,E.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,O.jsx)(v.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:p.c.Warning,trigger:(0,O.jsx)("button",{children:"\xC5pne"}),side:"top"}};var re=function(d){var j=(0,m.eJ)(!1),B=N(j,2),H=B[0],Q=B[1],G=function(){Q(!H)};return(0,O.jsx)("div",{children:(0,O.jsxs)(D,{variant:d.variant,side:d.side,title:d.title,open:H,trigger:(0,O.jsx)(T.zx,{variant:T.Wu.Filled,color:T.rp.Primary,children:"\xC5pne"}),onOpenChange:Q,showPointer:d.showPointer,showIcon:d.showIcon,forceMobileLayout:d.forceMobileLayout,children:[(0,O.jsx)("div",{children:"Her kommer litt informasjon"}),(0,O.jsx)(T.zx,{variant:T.Wu.Filled,color:T.rp.Primary,size:T.qE.Small,onClick:G,children:"Lukk"})]})})};re.displayName="Template";var ee=re.bind({});ee.args={variant:p.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},ee.argTypes={trigger:{control:!1}},ee.parameters={docs:{description:{story:""}}};var h=re.bind({});h.args={variant:p.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},h.argTypes={trigger:{control:!1}},h.parameters={docs:{description:{story:""}}};var k=re.bind({});k.args={variant:p.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},k.argTypes={trigger:{control:!1}},k.parameters={docs:{description:{story:""}}};var f=re.bind({});f.args={variant:p.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},f.argTypes={trigger:{control:!1}},f.parameters={docs:{description:{story:""}}},ee.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ee.parameters),h.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},h.parameters),k.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters),f.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},f.parameters);var C=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>m,Compact:()=>T,Default:()=>E,Disabled:()=>p,Error:()=>v,LongText:()=>c,WithDescription:()=>i,WithHiddenLabel:()=>x,__namedExportsOrder:()=>P,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/RadioButton/RadioButton.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},S="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const R={title:"Components/RadioButton",component:V.E,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var y=function(O){return(0,b.jsx)(V.E,Object.assign({},O))};y.displayName="Template";var E=y.bind({});E.args={},E.parameters={docs:{description:{story:"Default radio button."}}};var m=y.bind({});m.args={checked:!0},m.parameters={docs:{description:{story:"Checked radio button."}}};var v=y.bind({});v.args={error:!0},v.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var T=y.bind({});T.args={size:V.j.Xsmall},T.parameters={docs:{description:{story:"This is the compact radio button."}}};var p=y.bind({});p.args={disabled:!0},p.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var i=y.bind({});i.args={description:"Lorem ipsum dolor sit amet."},i.parameters={docs:{description:{story:"This is a radio button with description."}}};var c=y.bind({});c.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},c.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var x=y.bind({});x.args={hideLabel:!0},x.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},T.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},c.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},x.parameters);var P=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>k,Disabled:()=>C,Error:()=>f,Horizontal:()=>h,Vertical:()=>ee,__namedExportsOrder:()=>u,default:()=>ye});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),p=e("./src/components/RadioButton/index.ts"),i=e("./src/components/FieldSet/index.ts"),c=e("./src/hooks/index.ts"),x=e("./src/utils/arrayUtils.ts"),P=e("./src/components/RadioGroup/RadioGroup.module.css"),M=e.n(P),O=e("./node_modules/react/jsx-runtime.js");function g(d,j){return J(d)||z(d,j)||I(d,j)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(d,j){if(!!d){if(typeof d=="string")return N(d,j);var B=Object.prototype.toString.call(d).slice(8,-1);if(B==="Object"&&d.constructor&&(B=d.constructor.name),B==="Map"||B==="Set")return Array.from(d);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return N(d,j)}}function N(d,j){(j==null||j>d.length)&&(j=d.length);for(var B=0,H=new Array(j);B<j;B++)H[B]=d[B];return H}function z(d,j){var B=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(B!=null){var H=[],Q=!0,G=!1,$,te;try{for(B=B.call(d);!(Q=($=B.next()).done)&&(H.push($.value),!(j&&H.length===j));Q=!0);}catch(Y){G=!0,te=Y}finally{try{!Q&&B.return!=null&&B.return()}finally{if(G)throw te}}return H}}function J(d){if(Array.isArray(d))return d}var Z;(function(d){d.Xsmall="xsmall",d.Small="small"})(Z||(Z={}));var ae;(function(d){d.Vertical="vertical",d.Horizontal="horizontal"})(ae||(ae={}));var L=function(j){var B=j.description,H=j.disabled,Q=j.error,G=j.items,$=j.legend,te=j.name,Y=j.onChange,pe=j.size,be=pe===void 0?Z.Small:pe,ie=j.value,ue=j.variant,K=ue===void 0?ae.Vertical:ue;if(!(0,x.zb)(G.map(function(Ee){return Ee.value})))throw Error("Each value in the radio group must be unique.");var X=(0,n.useState)(ie),se=g(X,2),de=se[0],ve=se[1];(0,n.useEffect)(function(){ve(ie)},[ie]);var he=(0,c.D9)(de);(0,c.PQ)(function(){Y&&!H&&he!==de&&Y(de)},[de,H,Y]);var fe=function(Me){return function(De){return De.target.checked&&ve(Me)}},Te=be===Z.Xsmall?[i.w.Xsmall,p.j.Xsmall]:[i.w.Small,p.j.Small],_e=g(Te,2),je=_e[0],Oe=_e[1];return(0,O.jsx)(i.C,{description:B,disabled:H,error:Q,legend:$,size:je,children:(0,O.jsx)("div",{className:[M()["radio-group"],M()["radio-group--"+K],M()["radio-group--"+be]].join(" "),role:"radiogroup",children:G.map(function(Ee){return(0,n.createElement)(p.E,Object.assign({},Ee,{checked:Ee.value===de,disabled:H||Ee.disabled,error:!!Q,key:Ee.value,name:te,onChange:fe(Ee.value),size:Oe}))})})})};L.displayName="RadioGroup";try{L.displayName="RadioGroup",L.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:L.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(d){}var le=`import React from 'react';
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
`,ge={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},me="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const ye={title:"Components/RadioGroup",component:L,parameters:{design:(0,l.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,O.jsx)(a.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var re=function(j){return(0,O.jsx)(L,Object.assign({},j))};re.displayName="Template";var ee=re.bind({});ee.args={variant:ae.Vertical},ee.parameters={docs:{description:{story:"This is the default setting."}}};var h=re.bind({});h.args={variant:ae.Horizontal},h.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var k=re.bind({});k.args={size:Z.Xsmall},k.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var f=re.bind({});f.args={error:"Du m\xE5 velge et av alternativene over."},f.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var C=re.bind({});C.args={disabled:!0},C.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},ee.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},ee.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},h.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},k.parameters),f.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},f.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},C.parameters);var u=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>re,__namedExportsOrder:()=>ee,default:()=>me});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),v=e("./.storybook/StoryPage.tsx"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e("./node_modules/classnames/index.js"),c=e.n(i),x=e("./src/components/_InputWrapper/index.ts"),P=e("./node_modules/react/jsx-runtime.js"),M=["id","onChange","disabled","label"];function O(h,k){if(h==null)return{};var f=g(h,k),C,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(h);for(u=0;u<d.length;u++)C=d[u],!(k.indexOf(C)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,C)||(f[C]=h[C]))}return f}function g(h,k){if(h==null)return{};var f={},C=Object.keys(h),u,d;for(d=0;d<C.length;d++)u=C[d],!(k.indexOf(u)>=0)&&(f[u]=h[u]);return f}var D=function(k){var f=k.id,C=k.onChange,u=k.disabled,d=u===void 0?!1:u,j=k.label,B=O(k,M);return(0,P.jsx)(x.SP,{disabled:d,isSearch:!0,label:j,inputRenderer:function(Q){var G=Q.className,$=Q.variant,te={id:f,disabled:d,className:c()(G)};return(0,P.jsx)("input",Object.assign({},te,B,{"data-testid":f+"-"+$,onChange:C}))}})};D.displayName="SearchField";try{D.displayName="SearchField",D.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:D.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(h){}function I(h,k){return ae(h)||Z(h,k)||z(h,k)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(h,k){if(!!h){if(typeof h=="string")return J(h,k);var f=Object.prototype.toString.call(h).slice(8,-1);if(f==="Object"&&h.constructor&&(f=h.constructor.name),f==="Map"||f==="Set")return Array.from(h);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return J(h,k)}}function J(h,k){(k==null||k>h.length)&&(k=h.length);for(var f=0,C=new Array(k);f<k;f++)C[f]=h[f];return C}function Z(h,k){var f=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(f!=null){var C=[],u=!0,d=!1,j,B;try{for(f=f.call(h);!(u=(j=f.next()).done)&&(C.push(j.value),!(k&&C.length===k));u=!0);}catch(H){d=!0,B=H}finally{try{!u&&f.return!=null&&f.return()}finally{if(d)throw B}}return C}}function ae(h){if(Array.isArray(h))return h}var L=`import React from 'react';
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
`,le={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},ge="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const me={title:"Components/SearchField",component:D,parameters:{design:(0,E.vc)([{type:"figma",url:ge},{type:"link",url:ge}]),docs:{page:function(){return(0,P.jsx)(v.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var ye=function(k){var f=(0,m.D8)(),C=I(f,1),u=C[0].disabled;return(0,P.jsx)(D,Object.assign({disabled:u},k))};ye.displayName="Template";var re=ye.bind({});re.args={},re.parameters={docs:{description:{story:"Search field."}}},re.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},re.parameters);var ee=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Disabled:()=>i,Error:()=>c,Multiple:()=>p,__namedExportsOrder:()=>x,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(a),U=e("./node_modules/react/index.js"),V=e("./node_modules/storybook-addon-designs/esm/index.js"),b=e("./.storybook/StoryPage.tsx"),w=e("./src/components/Select/Select.tsx"),A=e("./node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,R={Multiple:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Disabled:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}},Error:{startLoc:{col:48,line:61},endLoc:{col:1,line:65},startBody:{col:48,line:61},endBody:{col:1,line:65}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",E=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],m=E.map(function(P){return Object.assign({},P,{deleteButtonLabel:"Slett "+P.label})});const v={title:"Components/Select/Multiple",component:w.P,parameters:{design:(0,V.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,A.jsx)(b.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'"})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:m}};var T=function(M){return(0,A.jsx)("div",{style:{width:"440px"},children:(0,A.jsx)(w.P,Object.assign({},M))})};T.displayName="Template";var p=T.bind({});p.args={},p.parameters={docs:{description:{story:"This is the default multiple select box."}}};var i=T.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var c=T.bind({});c.args={error:!0},c.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters);var x=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>E,Disabled:()=>m,Error:()=>v,__namedExportsOrder:()=>T,default:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),a=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),V=e("./src/components/Select/Select.tsx"),b=e("./node_modules/react/jsx-runtime.js"),w=`import React from 'react';
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
`,A={Default:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Disabled:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},Error:{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}},S="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const R={title:"Components/Select/Single",component:V.P,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,b.jsx)(U.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var y=function(i){return(0,b.jsx)("div",{style:{width:"440px"},children:(0,b.jsx)(V.P,Object.assign({},i))})};y.displayName="Template";var E=y.bind({});E.args={},E.parameters={docs:{description:{story:"This is the default select box."}}};var m=y.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var v=y.bind({});v.args={error:!0},v.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},E.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},m.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},v.parameters);var T=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{IconFromNavIconLibrary:()=>p,ImportedCustomIcon:()=>i,__namedExportsOrder:()=>c,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./node_modules/@navikt/ds-icons/esm/Success.js"),_=e("./.storybook/StoryPage.tsx"),U=e("./src/components/SvgIcon/index.ts"),V,b,w;function A(){return A=Object.assign?Object.assign.bind():function(x){for(var P=1;P<arguments.length;P++){var M=arguments[P];for(var O in M)Object.prototype.hasOwnProperty.call(M,O)&&(x[O]=M[O])}return x},A.apply(this,arguments)}var S=function(P){return n.createElement("svg",A({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},P),V||(V=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),b||(b=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),w||(w=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},R=e("./node_modules/react/jsx-runtime.js"),y=`import React from 'react';
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
`,E={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},m="";const v={title:"Components/SvgIcon",component:U.l,parameters:{design:(0,l.vc)([{type:"figma",url:m},{type:"link",url:m}]),docs:{page:function(){return(0,R.jsx)(_.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var T=function(P){return(0,R.jsx)(U.l,Object.assign({},P))};T.displayName="Template";var p=T.bind({});p.args={svgIconComponent:(0,R.jsx)(a.Z,{})},p.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var i=T.bind({});i.args={svgIconComponent:(0,R.jsx)(S,{height:"2rem",width:"2rem"})},i.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},p.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},i.parameters);var c=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{BasicTable:()=>Ie,SelectRows:()=>Qe,__namedExportsOrder:()=>co,default:()=>xe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),m=e("./node_modules/react/index.js"),v=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./node_modules/classnames/index.js"),p=e.n(T),i=e("./.storybook/StoryPage.tsx"),c=e("./src/components/Pagination/Pagination.tsx"),x=e("./src/components/RadioButton/index.ts"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),O=e("./src/components/Table/Table.module.css"),g=e.n(O),D;(function(W){W.Header="header",W.Body="body",W.Footer="footer"})(D||(D={}));var I=(0,m.createContext)(void 0),N=function(){var F=(0,m.useContext)(I);if(F===void 0)throw new Error("useTableContext must be used within a TableContext");return F},z=(0,m.createContext)(void 0),J=function(){var F=useContext(z);if(F===void 0)throw new Error("useTableContext must be used within a TableContext");return F},Z=(0,m.createContext)({variantStandard:D.Body}),ae=function(){var F=(0,m.useContext)(Z);if(F===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return F},L=e("./node_modules/react/jsx-runtime.js"),le=["children","selectRows","onChange","selectedValue","className"];function ge(W,F){if(W==null)return{};var ne=me(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function me(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var ye=function(F){var ne=F.children,oe=F.selectRows,q=oe===void 0?!1:oe,ce=F.onChange,We=F.selectedValue,Ce=F.className,Re=ge(F,le);return(0,L.jsx)("table",Object.assign({},Re,{className:p()(g().Table,Ce),children:(0,L.jsx)(I.Provider,{value:{selectRows:q,onChange:ce,selectedValue:We},children:ne})}))};ye.displayName="Table";const re=null;try{ye.displayName="Table",ye.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:ye.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(W){}var ee=e("./src/components/Table/TableHeader.module.css"),h=e.n(ee),k=["children","className"];function f(W,F){if(W==null)return{};var ne=C(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function C(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var u=function(F){var ne=F.children,oe=F.className,q=f(F,k),ce=D.Header;return(0,L.jsx)(Z.Provider,{value:{variantStandard:ce},children:(0,L.jsx)("thead",Object.assign({},q,{className:p()(h()["table-header"],oe),children:ne}))})};u.displayName="TableHeader";try{u.displayName="TableHeader",u.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:u.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(W){}var d=e("./src/components/Table/TableCell.module.css"),j=e.n(d),B;function H(){return H=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var ne=arguments[F];for(var oe in ne)Object.prototype.hasOwnProperty.call(ne,oe)&&(W[oe]=ne[oe])}return W},H.apply(this,arguments)}var Q=function(F){return m.createElement("svg",H({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},F),B||(B=m.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},G=["children","variant","onChange","sortDirecton","sortKey","className","radiobutton"];function $(W,F){if(W==null)return{};var ne=te(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function te(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var Y;(function(W){W.Descending="desc",W.Ascending="asc",W.NotSortable="notSortable",W.NotActive="notActive"})(Y||(Y={}));var pe=function(F){var ne,oe=F.children,q=F.variant,ce=F.onChange,We=F.sortDirecton,Ce=We===void 0?Y.NotSortable:We,Re=F.sortKey,Ne=F.className,Ze=F.radiobutton,ze=Ze===void 0?!1:Ze,Ke=$(F,G),no=ae(),Ge=no.variantStandard,Je=function(){ce!=null&&Re!=null&&Ce!=null&&ce({sortedColumn:Re,previousSortDirection:Ce})};return(0,L.jsxs)(L.Fragment,{children:[(q==null?Ge===D.Header:q==="header")&&(0,L.jsx)("th",Object.assign({},Ke,{className:ze?p()(j()["header-table-cell-radiobutton"],Ne):p()(j()["header-table-cell"],Ne),children:(0,L.jsxs)("div",{className:Ce!=Y.NotSortable?p()(j()["container-sortable"]):p()(j().container),onClick:function(){return Je()},onKeyUp:function(oo){(oo.key==="Enter"||oo.key===" ")&&Je()},role:Ce!=Y.NotSortable?"button":void 0,tabIndex:Ce!=Y.NotSortable?0:void 0,children:[(0,L.jsx)("div",{className:p()(j().input),children:oe}),Ce!=Y.NotSortable&&(0,L.jsx)(Q,{"aria-label":"Sortering","data-testid":"sort-icon",className:p()(j().icon,(ne={},ne[j()["icon-asc"]]=Ce===Y.Ascending,ne[j()["icon-desc"]]=Ce===Y.Descending,ne))})]})})),(q==null?Ge===D.Body:q==="body")&&(0,L.jsx)("td",Object.assign({},Ke,{className:ze?p()(j()["body-table-cell-radiobutton"],Ne):p()(j()["body-table-cell"],Ne),children:(0,L.jsx)("div",{className:ze?p()(j()["radio-button"]):p()(j().input),children:oe})})),Ge===D.Footer&&(0,L.jsx)("td",Object.assign({},Ke,{className:p()(Ne),children:(0,L.jsx)("div",{className:p()(j().input),children:oe})}))]})};const be=null;try{pe.displayName="TableCell",pe.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:pe.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(W){}var ie=e("./src/components/Table/TableRow.module.css"),ue=e.n(ie),K=["children","rowData","selectSort","className"];function X(W,F){if(W==null)return{};var ne=se(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function se(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var de=function(F){var ne,oe=F.children,q=F.rowData,ce=F.selectSort,We=ce===void 0?"":ce,Ce=F.className,Re=X(F,K),Ne=ae(),Ze=Ne.variantStandard,ze=N(),Ke=ze.onChange,no=ze.selectedValue,Ge=ze.selectRows,Je=function(){Ke!=null&&Ge&&Ze===D.Body&&q&&Ke({selectedValue:q})},Ye=Ge&&typeof q!="undefined"&&JSON.stringify(q)===JSON.stringify(no);return(0,L.jsx)(z.Provider,{value:{selectSort:We},children:(0,L.jsx)("tr",Object.assign({},Re,{className:p()(ue().TableRow,(ne={},ne[ue()["table-row--selected"]]=Ye,ne[ue()["table-row--body"]]=Ze===D.Body&&Ge&&!Ye,ne),Ce),onClick:Je,children:oe}))})};de.displayName="TableRow";const ve=null;try{de.displayName="TableRow",de.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:de.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(W){}var he=e("./src/components/Table/TableBody.module.css"),fe=e.n(he),Te=["children","className"];function _e(W,F){if(W==null)return{};var ne=je(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function je(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var Oe=function(F){var ne=F.children,oe=F.className,q=_e(F,Te),ce=D.Body;return(0,L.jsx)(Z.Provider,{value:{variantStandard:ce},children:(0,L.jsx)("tbody",Object.assign({},q,{className:p()(fe().TableBody,oe),children:ne}))})};Oe.displayName="TableBody";const Ee=null;try{Oe.displayName="TableBody",Oe.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Oe.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(W){}var Me=e("./src/components/Table/Table.stories.module.css"),De=e.n(Me),Ae=e("./src/components/Table/TableFooter.module.css"),Xe=e.n(Ae),Fe=["children","className"];function qe(W,F){if(W==null)return{};var ne=$e(W,F),oe,q;if(Object.getOwnPropertySymbols){var ce=Object.getOwnPropertySymbols(W);for(q=0;q<ce.length;q++)oe=ce[q],!(F.indexOf(oe)>=0)&&(!Object.prototype.propertyIsEnumerable.call(W,oe)||(ne[oe]=W[oe]))}return ne}function $e(W,F){if(W==null)return{};var ne={},oe=Object.keys(W),q,ce;for(ce=0;ce<oe.length;ce++)q=oe[ce],!(F.indexOf(q)>=0)&&(ne[q]=W[q]);return ne}var Ue=function(F){var ne=F.children,oe=F.className,q=qe(F,Fe),ce=D.Footer;return(0,L.jsx)(Z.Provider,{value:{variantStandard:ce},children:(0,L.jsx)("tfoot",Object.assign({},q,{className:p()(Xe()["table-footer"],oe),children:ne}))})};Ue.displayName="TableFooter";const eo=null;try{Ue.displayName="TableFooter",Ue.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Ue.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(W){}function He(W,F){return ro(W)||so(W,F)||lo(W,F)||ao()}function ao(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lo(W,F){if(!!W){if(typeof W=="string")return to(W,F);var ne=Object.prototype.toString.call(W).slice(8,-1);if(ne==="Object"&&W.constructor&&(ne=W.constructor.name),ne==="Map"||ne==="Set")return Array.from(W);if(ne==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ne))return to(W,F)}}function to(W,F){(F==null||F>W.length)&&(F=W.length);for(var ne=0,oe=new Array(F);ne<F;ne++)oe[ne]=W[ne];return oe}function so(W,F){var ne=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(ne!=null){var oe=[],q=!0,ce=!1,We,Ce;try{for(ne=ne.call(W);!(q=(We=ne.next()).done)&&(oe.push(We.value),!(F&&oe.length===F));q=!0);}catch(Re){ce=!0,Ce=Re}finally{try{!q&&ne.return!=null&&ne.return()}finally{if(ce)throw Ce}}return oe}}function ro(W){if(Array.isArray(W))return W}var io=`import type { ChangeEvent } from 'react';
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
`,uo={BasicTable:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}},SelectRows:{startLoc:{col:47,line:126},endLoc:{col:1,line:275},startBody:{col:47,line:126},endBody:{col:1,line:275}}},Se="";const xe={title:"Components/Table",component:ye,parameters:{design:(0,v.vc)([{type:"figma",url:Se},{type:"link",url:Se}]),docs:{page:function(){return(0,L.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function Pe(W,F,ne,oe,q){return{applicationNr:W,product:F,status:ne,imageSrc:oe,imageAlt:q}}var Ve=[Pe("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),Pe("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),Pe("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),Pe("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),Pe("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),Pe("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),Pe("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),Pe("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],Le=function(F){var ne=(0,m.useState)({}),oe=He(ne,2),q=oe[0],ce=oe[1],We=(0,m.useState)({sortedColumn:"",sortDirection:Y.NotActive}),Ce=He(We,2),Re=Ce[0],Ne=Ce[1],Ze=(0,m.useState)(5),ze=He(Ze,2),Ke=ze[0],no=ze[1],Ge=(0,m.useState)(0),Je=He(Ge,2),Ye=Je[0],oo=Je[1],_o={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},go=function(Be){var we=Be.selectedValue;ce(we)},mo=function(Be){var we=Be.sortedColumn,po=Be.previousSortDirection;po===Y.Ascending?Ne({sortedColumn:we,sortDirection:Y.Descending}):po===Y.Descending?Ne({sortedColumn:we,sortDirection:Y.Ascending}):Ne({sortedColumn:we,sortDirection:Y.Descending})},yo=function(Be){no(parseInt(Be.target.value,10)),oo(0)},vo=function(Be){oo(Be)},fo=function(Be){var we={applicationNr:Be.target.value};ce(we)},bo=function(Be){var we={applicationNr:Be.applicationNr};return JSON.stringify(q)==JSON.stringify(we)};return(0,L.jsxs)(ye,{selectRows:F.selectRows,onChange:go,selectedValue:q,children:[(0,L.jsx)(u,{children:(0,L.jsxs)(de,{children:[F.selectRows&&(0,L.jsx)(pe,{radiobutton:!0}),(0,L.jsx)(pe,{onChange:mo,sortKey:"S\xF8knadsnr.",sortDirecton:Re.sortedColumn==="S\xF8knadsnr."?Re.sortDirection:Y.NotActive,children:"S\xF8knadsnr."}),(0,L.jsx)(pe,{sortKey:"Produkt",onChange:mo,sortDirecton:Re.sortedColumn==="Produkt"?Re.sortDirection:Y.NotActive,children:"Produkt"}),(0,L.jsx)(pe,{children:"Status"}),(0,L.jsx)(pe,{children:"Bilde"})]})}),(0,L.jsx)(Oe,{children:Ve.slice(Ye*Ke,Ye*Ke+Ke).map(function(ke){return(0,L.jsxs)(de,{rowData:{applicationNr:ke.applicationNr},children:[F.selectRows&&(0,L.jsx)(pe,{radiobutton:!0,children:(0,L.jsx)(x.E,{name:ke.applicationNr,onChange:function(we){return fo(we)},value:ke.applicationNr,checked:bo(ke),label:ke.applicationNr,hideLabel:!0})}),(0,L.jsx)(pe,{children:ke.applicationNr}),(0,L.jsx)(pe,{children:ke.product}),(0,L.jsx)(pe,{children:ke.status}),(0,L.jsx)(pe,{children:(0,L.jsx)("img",{className:p()(De().checkmark),src:ke.imageSrc,alt:ke.imageAlt})})]},ke.applicationNr)})}),(0,L.jsx)(Ue,{children:(0,L.jsx)(de,{children:(0,L.jsx)(pe,{colSpan:5,children:(0,L.jsx)(c.t,{numberOfRows:Ve.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ke,onRowsPerPageChange:yo,currentPage:Ye,setCurrentPage:vo,descriptionTexts:_o})})})})]})};Le.displayName="Template";var Ie=Le.bind({});Ie.args={selectRows:!1},Ie.parameters={docs:{description:{story:""}}};var Qe=Le.bind({});Qe.args={selectRows:!0},Qe.parameters={docs:{description:{story:""}}},Ie.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Ie.parameters),Qe.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Qe.parameters);var co=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>k,__namedExportsOrder:()=>f,default:()=>ee});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),x=e("./node_modules/classnames/index.js"),P=e.n(x),M=e("./src/utils/arrayUtils.ts"),O=e("./src/hooks/index.ts"),g=e("./src/components/Tabs/Tabs.module.css"),D=e.n(g),I=e("./node_modules/react/jsx-runtime.js");function N(C,u){return L(C)||ae(C,u)||J(C,u)||z()}function z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(C,u){if(!!C){if(typeof C=="string")return Z(C,u);var d=Object.prototype.toString.call(C).slice(8,-1);if(d==="Object"&&C.constructor&&(d=C.constructor.name),d==="Map"||d==="Set")return Array.from(C);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return Z(C,u)}}function Z(C,u){(u==null||u>C.length)&&(u=C.length);for(var d=0,j=new Array(u);d<u;d++)j[d]=C[d];return j}function ae(C,u){var d=C==null?null:typeof Symbol!="undefined"&&C[Symbol.iterator]||C["@@iterator"];if(d!=null){var j=[],B=!0,H=!1,Q,G;try{for(d=d.call(C);!(B=(Q=d.next()).done)&&(j.push(Q.value),!(u&&j.length===u));B=!0);}catch($){H=!0,G=$}finally{try{!B&&d.return!=null&&d.return()}finally{if(H)throw G}}return j}}function L(C){if(Array.isArray(C))return C}var le=function(u){return u.replace(/\s/,"_")},ge=function(u){var d=u.activeTab,j=u.items,B=u.onChange,H=(0,n.useId)(),Q=j.map(function(_e){var je=_e.name,Oe=_e.content,Ee=_e.value,Me=_e.tabId,De=_e.panelId,Ae=Ee!=null?Ee:je,Xe=Me!=null?Me:H+le(Ae)+"-tab",Fe=De!=null?De:H+le(Ae)+"-panel";return{name:je,content:Oe,value:Ae,tabId:Xe,panelId:Fe}});if(!(0,M.zb)(Q.map(function(_e){var je=_e.value;return je})))throw Error("Each tab value must be unique.");if(d!==void 0&&!Q.some(function(_e){return _e.value===d}))throw Error("The given active tab value must exist in the list of items.");var G=function(je){return Q.findIndex(function(Oe){return Oe.value===je})},$=d!=null?d:Q[0].value,te=(0,n.useState)($),Y=N(te,2),pe=Y[0],be=Y[1],ie=(0,n.useState)(G($)),ue=N(ie,2),K=ue[0],X=ue[1];(0,n.useEffect)(function(){return be($)},[$]);var se=(0,n.useRef)(null),de=Q.length-1;(0,O.PQ)(function(){var _e;(_e=se.current)===null||_e===void 0||_e.querySelectorAll('[role="tab"]')[K].focus()},[K]);var ve=function(je){pe!==je&&B&&B(je),be(je),X(G(je))},he=function(){return K!==void 0&&X(K===de?0:K+1)},fe=function(){return K!==void 0&&X(K===0?de:K-1)},Te=function(je){return function(Oe){switch(Oe.key){case"ArrowRight":he();break;case"ArrowLeft":fe();break;case"Space":ve(je)}}};return(0,I.jsxs)("div",{className:D().tabs,children:[(0,I.jsx)("div",{className:D().tabs__tablist,ref:se,role:"tablist",children:Q.map(function(_e,je){var Oe=_e.value===pe,Ee=P()(D().tabs__tablist__tab,Oe&&D()["tabs__tablist__tab--selected"]);return(0,I.jsx)("button",{"aria-controls":_e.panelId,"aria-selected":Oe,className:Ee,id:_e.tabId,onClick:function(){return ve(_e.value)},onKeyDown:Te(_e.value),role:"tab",tabIndex:K===je?0:-1,children:_e.name},_e.value)})}),(0,I.jsx)("hr",{className:D().tabs__divider}),Q.map(function(_e){return(0,I.jsx)("div",{className:D().tabs__tabpanel,"aria-labelledby":_e.tabId,hidden:_e.value!==pe,id:_e.panelId,role:"tabpanel",children:_e.content},_e.panelId)})]})};ge.displayName="Tabs";try{ge.displayName="Tabs",ge.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:ge.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(C){}var me=`import React from 'react';
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
`,ye={Example:{startLoc:{col:46,line:122},endLoc:{col:74,line:122},startBody:{col:46,line:122},endBody:{col:74,line:122}}},re="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const ee={title:"Components/Tabs",component:ge,parameters:{design:(0,l.vc)([{type:"figma",url:re},{type:"link",url:re}]),docs:{page:function(){return(0,I.jsx)(a.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter."})}}},args:{items:[{name:"Ild",content:(0,I.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,I.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,I.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,I.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var h=function(u){return(0,I.jsx)(ge,Object.assign({},u))};h.displayName="Template";var k=h.bind({});k.args={},k.parameters={docs:{description:{story:"This is how the component might look like."}}},k.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},k.parameters);var f=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>M,Disabled:()=>I,Error:()=>O,ReadOnlyConfirm:()=>D,ReadOnlyInfo:()=>g,__namedExportsOrder:()=>N,default:()=>x});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/classnames/index.js"),A=e.n(w),S=e("./src/components/TextArea/TextArea.module.css"),R=e.n(S),y=e("./node_modules/react/jsx-runtime.js"),E=["isValid","disabled","readOnly","resize","label"];function m(z,J){if(z==null)return{};var Z=v(z,J),ae,L;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(z);for(L=0;L<le.length;L++)ae=le[L],!(J.indexOf(ae)>=0)&&(!Object.prototype.propertyIsEnumerable.call(z,ae)||(Z[ae]=z[ae]))}return Z}function v(z,J){if(z==null)return{};var Z={},ae=Object.keys(z),L,le;for(le=0;le<ae.length;le++)L=ae[le],!(J.indexOf(L)>=0)&&(Z[L]=z[L]);return Z}var T=function(J){var Z=J.isValid,ae=Z===void 0?!0:Z,L=J.disabled,le=L===void 0?!1:L,ge=J.readOnly,me=ge===void 0?!1:ge,ye=J.resize,re=ye===void 0?"none":ye,ee=J.label,h=m(J,E);return(0,y.jsx)(_.SP,{isValid:ae,disabled:le,readOnly:me,label:ee,inputId:h.id,inputRenderer:function(f){var C=f.className,u=f.inputId;return(0,y.jsx)("textarea",Object.assign({},h,{id:u,disabled:le,readOnly:Boolean(me),className:A()(C,R().TextArea,R()["TextArea--resize-"+re])}))}})};T.displayName="TextArea";try{T.displayName="TextArea",T.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:T.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(z){}var p=`import React from 'react';
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
`,i={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},c="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const x={title:"Components/TextArea",component:T,parameters:{design:(0,l.vc)([{type:"figma",url:c},{type:"link",url:c}]),docs:{page:function(){return(0,y.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var P=function(J){return(0,y.jsx)(T,Object.assign({},J))};P.displayName="Template";var M=P.bind({});M.args={},M.parameters={docs:{description:{story:"Regular textarea."}}};var O=P.bind({});O.args={isValid:!1},O.parameters={docs:{description:{story:"Textarea displaying error."}}};var g=P.bind({});g.args={readOnly:!0,value:"Some text"},g.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var D=P.bind({});D.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},D.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var I=P.bind({});I.args={disabled:!0,value:"Some text"},I.parameters={docs:{description:{story:"Textarea as disabled."}}},M.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},M.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},O.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},g.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},D.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},I.parameters);var N=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>Z,Disabled:()=>me,Error:()=>L,NumberInput:()=>ae,ReadOnlyConfirm:()=>ge,ReadOnlyInfo:()=>le,__namedExportsOrder:()=>ye,default:()=>z});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),y=e("./node_modules/classnames/index.js"),E=e.n(y),m=e("./node_modules/react-number-format/dist/react-number-format.es.js"),v=function(ee){return ee.format!==void 0},T=function(ee){return ee.format===void 0},p=function(ee,h){return h&&T(h)?numericFormatter(ee,h):h&&v(h)?patternFormatter(ee,h):ee},i=e("./node_modules/react/jsx-runtime.js"),c=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function x(re,ee){if(re==null)return{};var h=P(re,ee),k,f;if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(re);for(f=0;f<C.length;f++)k=C[f],!(ee.indexOf(k)>=0)&&(!Object.prototype.propertyIsEnumerable.call(re,k)||(h[k]=re[k]))}return h}function P(re,ee){if(re==null)return{};var h={},k=Object.keys(re),f,C;for(C=0;C<k.length;C++)f=k[C],!(ee.indexOf(f)>=0)&&(h[f]=re[f]);return h}var M=function(ee){var h=ee.values,k=ee.sourceInfo;k.event.target.value=h.value.trim()},O=function(ee,h,k){var f=ee.target,C=ee.key,u=f.selectionStart,d=f.selectionEnd,j=f.value,B=j===void 0?"":j;if(u!==null&&d!==null){var H=B[0]==="-",Q=(h==null?void 0:h.length)||0+(H?1:0),G=(k==null?void 0:k.length)||0;H&&d<=Q&&C==="Backspace"?f.setSelectionRange(1,1):f.setSelectionRange(Math.min(Math.max(u,Q),B.length-G),Math.max(Math.min(d,B.length-G),Q))}},g=function(ee){var h=ee.id,k=ee.onChange,f=ee.isValid,C=f===void 0?!0:f,u=ee.disabled,d=u===void 0?!1:u,j=ee.readOnly,B=j===void 0?!1:j,H=ee.required,Q=H===void 0?!1:H,G=ee.formatting,$=ee.label,te=x(ee,c),Y=function(be,ie){ie.source==="event"&&k&&(M({values:be,sourceInfo:ie}),k(ie.event))};return(0,i.jsx)(_.SP,{isValid:C,disabled:d,readOnly:B,label:$,inputId:h,inputRenderer:function(be){var ie=be.className,ue=be.variant,K=be.inputId,X={id:K,readOnly:Boolean(B),disabled:d,required:Q,className:E()(ie,te.className),style:Object.assign({textAlign:G==null?void 0:G.align},te.style)};return G!=null&&G.number&&T(G.number)?(G.number.prefix&&G.number.prefix[0]==="-"&&(G.number.prefix=" "+G.number.prefix),(0,i.jsx)(m.h3,Object.assign({},X,G.number,te,{"data-testid":K+"-formatted-number-"+ue,onValueChange:Y,valueIsNumericString:!0,onKeyDown:function(de){return O(de,G.number.prefix,G.number.suffix)}}))):G!=null&&G.number&&v(G.number)?(0,i.jsx)(m.HH,Object.assign({},X,G.number,te,{"data-testid":K+"-formatted-number-"+ue,onValueChange:Y,valueIsNumericString:!0})):(0,i.jsx)("input",Object.assign({},X,te,{"data-testid":K+"-"+ue,onChange:k}))}})};g.displayName="TextField";try{g.displayName="TextField",g.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:g.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(re){}var D=`import React from 'react';
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
`,I={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},N="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const z={title:"Components/TextField",component:g,parameters:{design:(0,l.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,i.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var J=function(ee){return(0,i.jsx)(g,Object.assign({},ee))};J.displayName="Template";var Z=J.bind({});Z.args={},Z.parameters={docs:{description:{story:"Regular input field."}}};var ae=J.bind({});ae.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},ae.parameters={docs:{description:{story:"Number input field."}}};var L=J.bind({});L.args={isValid:!1},L.parameters={docs:{description:{story:"Input field displaying error."}}};var le=J.bind({});le.args={readOnly:!0,value:"Some text"},le.parameters={docs:{description:{story:"Input field as readonly-info."}}};var ge=J.bind({});ge.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},ge.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var me=J.bind({});me.args={disabled:!0,value:"Some text"},me.parameters={docs:{description:{story:"Input field as disabled."}}},Z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},Z.parameters),ae.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ae.parameters),L.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},L.parameters),le.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},le.parameters),ge.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ge.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},me.parameters);var ye=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>h,__namedExportsOrder:()=>k,default:()=>re});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e("./node_modules/react/index.js"),E=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./.storybook/StoryPage.tsx"),v=e("./node_modules/classnames/index.js"),T=e.n(v),p=(0,y.createContext)(void 0),i=function(){var C=(0,y.useContext)(p);if(C===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return C},c=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),x=e.n(c),P=e("./node_modules/react/jsx-runtime.js"),M=function(C){var u=C.children,d=C.onChange,j=C.selectedValue,B=function(Q){var G=Q.selectedValue;d({selectedValue:G})};return(0,P.jsx)(p.Provider,{value:{onChange:B,selectedValue:j},children:(0,P.jsx)("div",{className:T()(x()["toggle-button-group"]),"data-testid":"toggle-button-group",children:u})})};M.displayName="ToggleButtonGroup";try{M.displayName="ToggleButtonGroup",M.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:M.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(f){}var O=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),g=e.n(O),D=function(C){var u,d=C.children,j=C.value,B=i(),H=B.onChange,Q=B.selectedValue,G=function(){H({selectedValue:j})};return(0,P.jsx)("button",{"data-testid":"toggle-button",className:T()(g()["toggle-button"],(u={},u[g()["toggle-button--selected"]]=j===Q,u)),onClick:G,type:"button","aria-pressed":j==Q,children:d})};D.displayName="ToggleButton";try{D.displayName="ToggleButton",D.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:D.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(f){}var I=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),N=e.n(I);function z(f,C){return le(f)||L(f,C)||Z(f,C)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(f,C){if(!!f){if(typeof f=="string")return ae(f,C);var u=Object.prototype.toString.call(f).slice(8,-1);if(u==="Object"&&f.constructor&&(u=f.constructor.name),u==="Map"||u==="Set")return Array.from(f);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return ae(f,C)}}function ae(f,C){(C==null||C>f.length)&&(C=f.length);for(var u=0,d=new Array(C);u<C;u++)d[u]=f[u];return d}function L(f,C){var u=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(u!=null){var d=[],j=!0,B=!1,H,Q;try{for(u=u.call(f);!(j=(H=u.next()).done)&&(d.push(H.value),!(C&&d.length===C));j=!0);}catch(G){B=!0,Q=G}finally{try{!j&&u.return!=null&&u.return()}finally{if(B)throw Q}}return d}}function le(f){if(Array.isArray(f))return f}var ge=`import React, { useState } from 'react';
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
`,me={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},ye="";const re={title:"Components/Toggle button group",component:M,parameters:{design:(0,E.vc)([{type:"figma",url:ye},{type:"link",url:ye}]),docs:{page:function(){return(0,P.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var ee=function(){var C=(0,y.useState)("left"),u=z(C,2),d=u[0],j=u[1],B=function(Q){var G=Q.selectedValue;j(G)};return(0,P.jsx)("div",{className:N().container,children:(0,P.jsxs)(M,{onChange:B,selectedValue:d,children:[(0,P.jsx)(D,{value:"left",children:"Aktivt valg"}),(0,P.jsx)(D,{value:"right",children:"Mulig valg"})]})})};ee.displayName="Template";var h=ee.bind({});h.args={},h.argTypes={onChange:{control:!1},selectedValue:{control:!1}},h.parameters={docs:{description:{}}},h.parameters=Object.assign({storySource:{source:`() => {
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
}`}},h.parameters);var k=["Example"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>m});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),_=e.n(a),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),V=e.n(U),b=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),w=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),A=1.6,S=/(\d*\.?\d+)rem(?=\W|$)/gim,R=function(p){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,c=Math.pow(10,i);return Math.round((p+Number.EPSILON)*c)/c},y=function(p){return typeof p=="string"?p.replace(S,function(i,c){var x=R(c*A);return x+"rem"}):p},E={get:function(p,i){if(i in p){var c=p[i];return typeof c=="object"?new Proxy(c,E):y(c)}}},m=new Proxy(b,E),v=new Proxy(w,E)},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{zx:()=>p,rp:()=>m,qE:()=>E,Wu:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),_=e("./node_modules/classnames/index.js"),U=e.n(_),V=e("./src/components/SvgIcon/index.ts"),b=e("./src/components/Button/Button.module.css"),w=e.n(b),A=e("./node_modules/react/jsx-runtime.js"),S=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function R(i,c){if(i==null)return{};var x=y(i,c),P,M;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(i);for(M=0;M<O.length;M++)P=O[M],!(c.indexOf(P)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,P)||(x[P]=i[P]))}return x}function y(i,c){if(i==null)return{};var x={},P=Object.keys(i),M,O;for(O=0;O<P.length;O++)M=P[O],!(c.indexOf(M)>=0)&&(x[M]=i[M]);return x}var E;(function(i){i.Small="small",i.Medium="medium",i.Large="large"})(E||(E={}));var m;(function(i){i.Primary="primary",i.Secondary="secondary",i.Success="success",i.Danger="danger",i.Inverted="inverted"})(m||(m={}));var v;(function(i){i.Filled="filled",i.Outline="outline",i.Quiet="quiet"})(v||(v={}));var T=function(c,x){var P,M,O,g=c.children,D=c.color,I=D===void 0?m.Primary:D,N=c.variant,z=N===void 0?v.Filled:N,J=c.size,Z=J===void 0?E.Small:J,ae=c.fullWidth,L=ae===void 0?!1:ae,le=c.dashedBorder,ge=le===void 0?!1:le,me=c.iconPlacement,ye=me===void 0?"left":me,re=c.icon,ee=c.type,h=ee===void 0?"button":ee,k=c.className,f=R(c,S);return(0,A.jsxs)("button",Object.assign({},f,{ref:x,className:U()(w().button,w()["button--"+Z],w()["button--"+z],w()["button--"+I],w()["button--"+z+"--"+I],(P={},P[w()["button--full-width"]]=L,P),(M={},M[w()["button--dashed-border"]]=ge,M),(O={},O[w()["button--only-icon"]]=!g&&re,O),k),type:h,children:[re&&ye==="left"&&(0,A.jsx)(V.l,{svgIconComponent:re,className:w().icon}),g,re&&ye==="right"&&(0,A.jsx)(V.l,{svgIconComponent:re,className:w().icon})]}))};T.displayName="Button";const p=(0,a.forwardRef)(T)},"./src/components/Checkbox/Checkbox.tsx":(r,t,e)=>{"use strict";e.d(t,{X:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),U=e("./node_modules/react/index.js"),V=e("./node_modules/classnames/index.js"),b=e.n(V),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),A=e("./src/components/Checkbox/Checkbox.module.css"),S=e.n(A),R=e("./node_modules/react/jsx-runtime.js"),y=function(m){var v=m.checkboxId,T=m.checked,p=m.compact,i=m.description,c=m.disabled,x=m.error,P=m.hideLabel,M=m.label,O=m.name,g=m.onChange,D=m.readOnly;return(0,R.jsx)(w.f,{checked:T,className:b()(S().checkbox,T&&S()["checkbox--checked"],x&&S()["checkbox--error"],c&&S()["checkbox--disabled"],p&&S()["checkbox--compact"],D&&S()["checkbox--read-only"]),description:i,disabled:c,hideInput:D,hideLabel:P,inputId:v,label:M,name:O,onChange:g,size:p?w.b.Xsmall:w.b.Small,type:"checkbox",children:(0,R.jsx)("span",{className:S()["visible-box"],children:(0,R.jsx)("span",{className:S()["visible-box__checkmark"]})})})};y.displayName="Checkbox";try{y.displayName="Checkbox",y.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:y.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(E){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(r,t,e)=>{"use strict";e.d(t,{B:()=>U});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ErrorMessage/ErrorMessage.module.css"),a=e.n(l),_=e("./node_modules/react/jsx-runtime.js"),U=function(b){var w=b.id,A=b.children,S=b.ariaLabel;return(0,_.jsx)("div",{"data-testid":"ErrorMessage","aria-label":S,id:w,role:"alertdialog",className:n()(a()["error-message-wrapper"]),children:A})};U.displayName="ErrorMessage";try{U.displayName="ErrorMessage",U.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:U.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(V){}},"./src/components/FieldSet/FieldSet.tsx":(r,t,e)=>{"use strict";e.d(t,{C:()=>A,w:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),a=e.n(l),_=e("./src/components/ErrorMessage/ErrorMessage.tsx"),U=e("./src/components/FieldSet/FieldSet.module.css"),V=e.n(U),b=e("./node_modules/react/jsx-runtime.js"),w;(function(S){S.Xsmall="xsmall",S.Small="small"})(w||(w={}));var A=function(R){var y=R.children,E=R.className,m=R.description,v=R.disabled,T=R.error,p=R.legend,i=R.size,c=i===void 0?w.Small:i;return(0,b.jsxs)("fieldset",{className:a()(V()["field-set"],V()["field-set--"+c],E),disabled:v,children:[p&&(0,b.jsx)("legend",{className:V()["field-set__legend"],children:p}),m&&(0,b.jsx)("p",{className:V()["field-set__description"],children:m}),(0,b.jsx)("div",{className:V()["field-set__content"],children:y}),T&&(0,b.jsx)("div",{className:V()["field-set__error-message"],children:(0,b.jsx)(_.B,{children:T})})]})};A.displayName="FieldSet";try{A.displayName="FieldSet",A.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:A.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(S){}},"./src/components/FieldSet/index.ts":(r,t,e)=>{"use strict";e.d(t,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(r,t,e)=>{"use strict";e.d(t,{t:()=>ee});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),R=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),E=e.n(y),m=e("./src/components/Pagination/Pagination.module.css"),v=e.n(m),T,p;function i(){return i=Object.assign?Object.assign.bind():function(h){for(var k=1;k<arguments.length;k++){var f=arguments[k];for(var C in f)Object.prototype.hasOwnProperty.call(f,C)&&(h[C]=f[C])}return h},i.apply(this,arguments)}var c=function(k){return R.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),T||(T=R.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),p||(p=R.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},x,P;function M(){return M=Object.assign?Object.assign.bind():function(h){for(var k=1;k<arguments.length;k++){var f=arguments[k];for(var C in f)Object.prototype.hasOwnProperty.call(f,C)&&(h[C]=f[C])}return h},M.apply(this,arguments)}var O=function(k){return R.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),x||(x=R.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),P||(P=R.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},g;function D(){return D=Object.assign?Object.assign.bind():function(h){for(var k=1;k<arguments.length;k++){var f=arguments[k];for(var C in f)Object.prototype.hasOwnProperty.call(f,C)&&(h[C]=f[C])}return h},D.apply(this,arguments)}var I=function(k){return R.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),g||(g=R.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},N,z;function J(){return J=Object.assign?Object.assign.bind():function(h){for(var k=1;k<arguments.length;k++){var f=arguments[k];for(var C in f)Object.prototype.hasOwnProperty.call(f,C)&&(h[C]=f[C])}return h},J.apply(this,arguments)}var Z=function(k){return R.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},k),N||(N=R.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),z||(z=R.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},ae=e("./node_modules/react/jsx-runtime.js");function L(h,k){return re(h)||ye(h,k)||ge(h,k)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(h,k){if(!!h){if(typeof h=="string")return me(h,k);var f=Object.prototype.toString.call(h).slice(8,-1);if(f==="Object"&&h.constructor&&(f=h.constructor.name),f==="Map"||f==="Set")return Array.from(h);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return me(h,k)}}function me(h,k){(k==null||k>h.length)&&(k=h.length);for(var f=0,C=new Array(k);f<k;f++)C[f]=h[f];return C}function ye(h,k){var f=h==null?null:typeof Symbol!="undefined"&&h[Symbol.iterator]||h["@@iterator"];if(f!=null){var C=[],u=!0,d=!1,j,B;try{for(f=f.call(h);!(u=(j=f.next()).done)&&(C.push(j.value),!(k&&C.length===k));u=!0);}catch(H){d=!0,B=H}finally{try{!u&&f.return!=null&&f.return()}finally{if(d)throw B}}return C}}function re(h){if(Array.isArray(h))return h}var ee=function(k){var f,C,u,d,j=k.numberOfRows,B=k.rowsPerPageOptions,H=k.rowsPerPage,Q=k.onRowsPerPageChange,G=k.currentPage,$=k.setCurrentPage,te=k.descriptionTexts,Y=(0,R.useState)(1),pe=L(Y,2),be=pe[0],ie=pe[1];(0,R.useEffect)(function(){j<H?ie(1):ie(Math.ceil(j/H))},[H,j]);var ue=function(){G<be-1&&$(G+1)},K=function(){G>0&&$(G-1)},X=function(){var de=1+G*H,ve=H*(G+1)>j?j:H*(G+1);return(0,ae.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:de+"-"+ve+" "+te.of+" "+j})};return(0,ae.jsxs)("div",{className:E()(v()["pagination-wrapper"]),children:[(0,ae.jsx)("span",{style:{marginRight:"26px"},children:te.rowsPerPage}),(0,ae.jsx)("select",{style:{marginRight:"25px"},value:H,onChange:function(de){return Q(de)},"aria-label":"rader per side",children:B.map(function(se){return(0,ae.jsx)("option",{value:se,children:se},se)})}),X(),(0,ae.jsx)("button",{className:E()(v()["icon-button"]),onClick:function(){return $(0)},disabled:G===0,"aria-label":te.navigateFirstPage,"data-testid":"first-page-icon",children:(0,ae.jsx)(I,{className:E()(v()["pagination-icon"],(f={},f[v()["pagination-icon--disabled"]]=G===0,f))})}),(0,ae.jsx)("button",{className:E()(v()["icon-button"]),onClick:function(){return K()},disabled:G===0,"aria-label":te.previousPage,"data-testid":"pagination-previous-icon",children:(0,ae.jsx)(O,{className:E()(v()["pagination-icon"],(C={},C[v()["pagination-icon--disabled"]]=G===0,C))})}),(0,ae.jsx)("button",{className:E()(v()["icon-button"]),onClick:function(){return ue()},disabled:G===be-1,"aria-label":te.nextPage,"data-testid":"pagination-next-icon",children:(0,ae.jsx)(c,{className:E()(v()["pagination-icon"],(u={},u[v()["pagination-icon--disabled"]]=G===be-1,u))})}),(0,ae.jsx)("button",{className:E()(v()["icon-button"]),onClick:function(){return $(be-1)},disabled:G===be-1,"aria-label":te.navigateLastPage,children:(0,ae.jsx)(Z,{className:E()(v()["pagination-icon"],(d={},d[v()["pagination-icon--disabled"]]=G===be-1,d))})})]})};ee.displayName="Pagination";try{ee.displayName="Pagination",ee.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:ee.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(h){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>P,c:()=>p});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),a=e("./src/DesignTokens/index.ts"),_,U,V;function b(){return b=Object.assign?Object.assign.bind():function(M){for(var O=1;O<arguments.length;O++){var g=arguments[O];for(var D in g)Object.prototype.hasOwnProperty.call(g,D)&&(M[D]=g[D])}return M},b.apply(this,arguments)}var w=function(O){return s.createElement("svg",b({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},O),_||(_=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),U||(U=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),V||(V=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},A,S,R;function y(){return y=Object.assign?Object.assign.bind():function(M){for(var O=1;O<arguments.length;O++){var g=arguments[O];for(var D in g)Object.prototype.hasOwnProperty.call(g,D)&&(M[D]=g[D])}return M},y.apply(this,arguments)}var E=function(O){return s.createElement("svg",y({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},O),A||(A=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),S||(S=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),R||(R=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},m=e("./src/components/Panel/Panel.module.css"),v=e.n(m),T=e("./node_modules/react/jsx-runtime.js"),p;(function(M){M.Success="success",M.Info="info",M.Warning="warning",M.Error="error"})(p||(p={}));var i=function(O){var g=O.size,D=O.variant;switch(D){case p.Info:case p.Error:case p.Warning:return(0,T.jsx)(w,{style:{width:g,height:g},"data-testid":"panel-icon-info"});case p.Success:return(0,T.jsx)(E,{style:{width:g,height:g},"data-testid":"panel-icon-success"})}},c=function(O){var g=O.forceMobileLayout,D=(0,l.a)("(max-width: "+a.T.BreakpointsSm+")");return g?!0:D},x=function(O){var g=O.children;return(0,T.jsx)("div",{className:n()(v()["panel__pointer-position"]),children:g})};x.displayName="defaultRenderArrow";var P=function(O){var g,D=O.renderIcon,I=D===void 0?i:D,N=O.title,z=O.children,J=O.variant,Z=J===void 0?p.Info:J,ae=O.showPointer,L=ae===void 0?!1:ae,le=O.showIcon,ge=le===void 0?!0:le,me=O.forceMobileLayout,ye=me===void 0?!1:me,re=O.renderArrow,ee=re===void 0?x:re,h=c({forceMobileLayout:ye}),k=h?a.T.ComponentPanelSizeIconXs:a.T.ComponentPanelSizeIconMd;return(0,T.jsxs)("div",{className:n()(v().panel,(g={},g[v()["panel--mobile-layout"]]=h,g)),children:[L&&ee({children:(0,T.jsx)("div",{"data-testid":"panel-pointer",className:n()(v().panel__pointer,v()["panel__pointer--"+Z])})}),(0,T.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(v()["panel__content-wrapper"],v()["panel__content-wrapper--"+Z]),children:[ge&&(0,T.jsx)("div",{"data-testid":"panel-icon-wrapper",className:v()["panel__icon-wrapper"],children:I({size:k,variant:Z})}),(0,T.jsxs)("div",{className:v().panel__content,children:[N&&(0,T.jsx)("h2",{className:v().panel__header,children:N}),(0,T.jsx)("div",{className:v().panel__body,children:z})]})]})]})};P.displayName="Panel";try{P.displayName="Panel",P.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:P.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(M){}},"./src/components/RadioButton/RadioButton.tsx":(r,t,e)=>{"use strict";e.d(t,{E:()=>E,j:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),U=e("./node_modules/react/index.js"),V=e("./node_modules/classnames/index.js"),b=e.n(V),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),A=e("./src/components/RadioButton/RadioButton.module.css"),S=e.n(A),R=e("./node_modules/react/jsx-runtime.js"),y;(function(m){m.Xsmall="xsmall",m.Small="small"})(y||(y={}));var E=function(v){var T=v.checked,p=v.description,i=v.disabled,c=v.error,x=v.hideLabel,P=v.label,M=v.name,O=v.onChange,g=v.radioId,D=v.size,I=D===void 0?y.Small:D,N=v.value;return(0,R.jsx)(w.f,{checked:T,className:b()(S().radio,S()["radio--"+I],T&&S()["radio--checked"],c&&S()["radio--error"],i&&S()["radio--disabled"]),description:p,disabled:i,hideLabel:x,inputId:g,label:P,name:M,onChange:O,size:I===y.Xsmall?w.b.Xsmall:w.b.Small,type:"radio",value:N,children:(0,R.jsx)("span",{className:S()["visible-button"],children:(0,R.jsx)("span",{className:S()["visible-button__checkmark"]})})})};E.displayName="RadioButton";try{E.displayName="RadioButton",E.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:E.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(m){}},"./src/components/RadioButton/index.ts":(r,t,e)=>{"use strict";e.d(t,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(r,t,e)=>{"use strict";e.d(t,{P:()=>C});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),c=e("./node_modules/react/index.js"),x=e("./node_modules/classnames/index.js"),P=e.n(x),M=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),O=e("./src/components/_InputWrapper/index.ts"),g=e("./src/components/Select/MultiSelectItem.module.css"),D=e.n(g),I=e("./node_modules/react/jsx-runtime.js"),N=function(d){var j=d.deleteButtonLabel,B=d.disabled,H=d.onDeleteButtonClick,Q=d.label;return(0,I.jsxs)("span",{className:D()["multi-select-item"],children:[(0,I.jsx)("span",{children:Q}),(0,I.jsx)("button",{"aria-label":j,className:D()["multi-select-item__delete-button"],disabled:B,onClick:H,children:(0,I.jsx)("span",{className:D()["multi-select-item__delete-button__cross"]})})]})};N.displayName="MultiSelectItem";try{N.displayName="MultiSelectItem",N.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:N.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(u){}var z=e("./src/hooks/index.ts"),J=e("./src/components/Select/Select.module.css"),Z=e.n(J);function ae(u){return ge(u)||le(u)||re(u)||L()}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(u){if(typeof Symbol!="undefined"&&u[Symbol.iterator]!=null||u["@@iterator"]!=null)return Array.from(u)}function ge(u){if(Array.isArray(u))return ee(u)}function me(u,d){return k(u)||h(u,d)||re(u,d)||ye()}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(u,d){if(!!u){if(typeof u=="string")return ee(u,d);var j=Object.prototype.toString.call(u).slice(8,-1);if(j==="Object"&&u.constructor&&(j=u.constructor.name),j==="Map"||j==="Set")return Array.from(u);if(j==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(j))return ee(u,d)}}function ee(u,d){(d==null||d>u.length)&&(d=u.length);for(var j=0,B=new Array(d);j<d;j++)B[j]=u[j];return B}function h(u,d){var j=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(j!=null){var B=[],H=!0,Q=!1,G,$;try{for(j=j.call(u);!(H=(G=j.next()).done)&&(B.push(G.value),!(d&&B.length===d));H=!0);}catch(te){Q=!0,$=te}finally{try{!H&&j.return!=null&&j.return()}finally{if(Q)throw $}}return B}}function k(u){if(Array.isArray(u))return u}var f={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},C=function(d){var j=d.disabled,B=d.error,H=d.hideLabel,Q=d.inputId,G=d.label,$=d.multiple,te=d.onChange,Y=d.options,pe=d.value,be=Y.map(function(Se){return Se.value});if(be.length!==new Set(be).size)throw Error("Each value in the option list must be unique.");var ie=(0,c.useState)($?pe!=null?pe:[]:[]),ue=me(ie,2),K=ue[0],X=ue[1],se=(0,c.useState)($?void 0:pe),de=me(se,2),ve=de[0],he=de[1],fe=Y.findIndex(function(Se){return Se.value===ve}),Te=(0,c.useState)(!1),_e=me(Te,2),je=_e[0],Oe=_e[1];(0,z.OR)("click",function(){return Oe(!1)}),(0,z.OR)("keydown",function(){return Oe(!0)});var Ee=(0,c.useState)(!1),Me=me(Ee,2),De=Me[0],Ae=Me[1],Xe=(0,c.useRef)(null),Fe=(0,c.useRef)(null);(0,c.useEffect)(function(){var Se=Xe.current;if(Se){var xe=Se.offsetHeight,Pe=Se.getElementsByTagName("li")[0].offsetHeight,Ve=Se.scrollTop,Le=Ve+xe,Ie=fe*Pe,Qe=Ie+Pe,co=Ie>=Ve&&Qe<=Le;co||(Ie<Ve?Se.scrollTop=Ie:Se.scrollTop=Qe-xe)}},[fe]);var qe=function(xe){var Pe;return(Pe=Y.find(function(Ve){return Ve.value===xe}))!==null&&Pe!==void 0?Pe:{label:"",value:""}},$e=function(xe,Pe){K!=null&&K.length||he(Pe),X(xe),te&&te(xe)},Ue=function(xe){he(xe),Ae(!1),te&&te(xe)},eo=function(xe){$?K.includes(xe)?He(xe):$e([].concat(ae(K),[xe]),xe):Ue(xe)},He=function(xe){$e(K.filter(function(Pe){return Pe!==xe}),xe)},ao=function(){$e([])},lo=(0,c.useCallback)(function(){if(ve===void 0)he(Y[0].value);else{var Se=fe+1;Se>=0&&Se<Y.length&&he(Y[Se].value)}Ae(!0)},[ve,fe,he,Y]),to=(0,c.useCallback)(function(){if(ve===void 0)he(Y[Y.length-1].value);else{var Se=fe-1;Se>=0&&Se<Y.length&&he(Y[Se].value)}Ae(!0)},[ve,fe,he,Y]);(0,z.OG)(f.ArrowDown,function(){return De&&lo()}),(0,z.OG)(f.ArrowUp,function(){return De&&to()}),(0,z.OG)(f.Enter,function(){return De&&$&&ve&&eo(ve)});var so=function(xe){return ve===xe},ro=function(xe){return $?K.includes(xe):so(xe)},io=(0,c.useId)(),uo=Fe.current?"calc("+Fe.current.offsetWidth+"px + 2 * "+M.component.input.border_width.default.value+")":void 0;return(0,I.jsxs)("div",{className:P()(Z().select,Z()["select--"+($?"multiple":"single")],De&&Z()["select--expanded"],j&&Z()["select--disabled"],je&&Z()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,I.jsx)(O.SP,{disabled:j,inputId:Q,inputRenderer:function(xe){var Pe=xe.className,Ve=xe.inputId;return(0,I.jsxs)("span",{className:P()(Pe,Z().select__field),ref:Fe,children:[$&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("span",{className:Z()["select--multiple__field__values"],children:K.map(qe).map(function(Le){return(0,I.jsx)(N,{deleteButtonLabel:Le.deleteButtonLabel,disabled:j!=null?j:!1,label:Le.label,onDeleteButtonClick:function(){return He(Le.value)}},Le.value)})}),(0,I.jsx)("button",{"aria-label":d.deleteButtonLabel,className:Z()["select--multiple__field__delete-button"],disabled:!K.length||j,onClick:function(){return ao()},children:(0,I.jsx)("span",{className:Z()["select--multiple__field__delete-button__cross"]})})]}),(0,I.jsxs)("button",{"aria-controls":io,"aria-expanded":De,"aria-label":G,className:Z().select__field__button,disabled:j,id:Ve,onBlur:function(){return Ae(!1)},onClick:function(){return Ae(!De)},onKeyDown:function(Ie){Object.values(f).includes(Ie.key)&&(Ie.preventDefault(),Ae(!0))},role:"combobox",value:$?K:ve,children:[!$&&(0,I.jsx)("span",{className:Z()["select--single__field__value"],children:qe(ve).label}),(0,I.jsx)("span",{className:Z()["select__field__arrow-wrapper"],children:(0,I.jsx)("span",{className:Z()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!B,label:H?void 0:G,noFocusEffect:$,noPadding:!0,readOnly:!1}),(0,I.jsx)("ul",{className:Z()["select__option-list"],id:io,ref:Xe,role:"listbox",style:{width:uo},children:Y.map(function(Se){return(0,I.jsx)("li",{"aria-selected":ro(Se.value),className:P()(Z()["select__option-list__option"],ro(Se.value)&&Z()["select__option-list__option--selected"],$&&so(Se.value)&&Z()["select--multiple__option-list__option--focused"]),onClick:function(){return eo(Se.value)},onMouseDown:function(Pe){return Pe.preventDefault()},onKeyDown:function(Pe){return Pe.preventDefault()},role:"option",value:Se.value,children:Se.label},Se.value)})})]})};C.displayName="Select";try{C.displayName="Select",C.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:C.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(u){}},"./src/components/SvgIcon/index.ts":(r,t,e)=>{"use strict";e.d(t,{l:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),_=["svgIconComponent"];function U(w,A){if(w==null)return{};var S=V(w,A),R,y;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);for(y=0;y<E.length;y++)R=E[y],!(A.indexOf(R)>=0)&&(!Object.prototype.propertyIsEnumerable.call(w,R)||(S[R]=w[R]))}return S}function V(w,A){if(w==null)return{};var S={},R=Object.keys(w),y,E;for(E=0;E<R.length;E++)y=R[E],!(A.indexOf(y)>=0)&&(S[y]=w[y]);return S}var b=function(A){var S=A.svgIconComponent,R=U(A,_);return(0,a.isValidElement)(S)?(0,a.cloneElement)(S,Object.assign({},R)):null};try{b.displayName="SvgIcon",b.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:b.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(w){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(r,t,e)=>{"use strict";e.d(t,{b:()=>R,f:()=>y});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),_=e.n(a),U=e("./node_modules/react/index.js"),V=e("./node_modules/classnames/index.js"),b=e.n(V),w=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),A=e.n(w),S=e("./node_modules/react/jsx-runtime.js"),R;(function(E){E.Xsmall="xsmall",E.Small="small"})(R||(R={}));var y=function(m){var v=m.checked,T=m.children,p=m.className,i=m.description,c=m.disabled,x=m.hideInput,P=m.hideLabel,M=m.inputId,O=m.label,g=m.name,D=m.onChange,I=m.size,N=m.type,z=m.value,J=(0,U.useId)(),Z=M!=null?M:"input-"+J,ae=O?Z+"-label":void 0,L=i?Z+"-description":void 0,le=O&&!P;return(0,S.jsxs)("label",{className:b()(A().template,A()["template--"+I],c&&A()["template--disabled"],p),htmlFor:M,children:[!x&&(0,S.jsxs)("span",{className:A()["template__input-wrapper"],children:[(0,S.jsx)("input",{"aria-describedby":L,"aria-label":le?void 0:O,"aria-labelledby":le?ae:void 0,checked:v!=null?v:!1,className:A()["template__input-wrapper__input"],disabled:c,id:Z,name:g,onChange:c?void 0:D,type:N,value:z}),(0,S.jsx)("span",{className:A()["template__input-wrapper__visible-box"],children:T})]}),(le||i)&&(0,S.jsxs)("span",{className:A()["template__label-and-description"],children:[le&&(0,S.jsx)("span",{className:A()["template__label-and-description__label"],id:ae,children:O}),i&&(0,S.jsx)("span",{className:A()["template__label-and-description__description"],id:L,children:i})]})]})};y.displayName="CheckboxRadioTemplate";try{y.displayName="CheckboxRadioTemplate",y.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:y.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(E){}},"./src/components/_InputWrapper/index.ts":(r,t,e)=>{"use strict";e.d(t,{SP:()=>T,Hx:()=>a});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l;(function(p){p.Default="default",p.Error="error",p.Disabled="disabled",p.ReadOnlyInfo="readonly-info",p.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var a;(function(p){p.ReadOnlyInfo="readonly-info",p.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var _;(function(p){p.None="none",p.Error="error",p.Search="search"})(_||(_={}));var U=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=i.readOnly,x=c===void 0?!1:c,P=i.disabled,M=P===void 0?!1:P,O=i.isValid,g=O===void 0?!0:O,D=i.isSearch,I=D===void 0?!1:D,N=_.None;return I&&(N=_.Search),M?{variant:l.Disabled,iconVariant:N}:x===!0||x===a.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:N}:x===a.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:N}:g===!1?{variant:l.Error,iconVariant:_.Error}:{variant:l.Default,iconVariant:N}},V;function b(){return b=Object.assign?Object.assign.bind():function(p){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&(p[x]=c[x])}return p},b.apply(this,arguments)}var w=function(i){return s.createElement("svg",b({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),V||(V=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},A;function S(){return S=Object.assign?Object.assign.bind():function(p){for(var i=1;i<arguments.length;i++){var c=arguments[i];for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&(p[x]=c[x])}return p},S.apply(this,arguments)}var R=function(i){return s.createElement("svg",S({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i),A||(A=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},y=e("./src/components/_InputWrapper/InputWrapper.module.css"),E=e.n(y),m=e("./node_modules/react/jsx-runtime.js"),v=function(i){var c=i.variant,x=i.disabled,P=x===void 0?!1:x;if(c===_.Error)return(0,m.jsx)("div",{className:E().InputWrapper__icon,children:(0,m.jsx)(w,{"data-testid":"input-icon-error"})});if(c===_.Search){var M;return(0,m.jsx)("div",{className:n()(E().InputWrapper__icon,(M={},M[E()["InputWrapper__icon--disabled"]]=P,M)),children:(0,m.jsx)(R,{"data-testid":"input-icon-search"})})}return null};try{v.displayName="Icon",v.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:v.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(p){}var T=function(i){var c,x=i.isValid,P=x===void 0?!0:x,M=i.disabled,O=M===void 0?!1:M,g=i.readOnly,D=g===void 0?!1:g,I=i.isSearch,N=I===void 0?!1:I,z=i.label,J=i.inputId,Z=i.inputRenderer,ae=i.noFocusEffect,L=i.noPadding,le=(0,s.useId)(),ge=J!=null?J:le,me=U({readOnly:D,disabled:O,isValid:P,isSearch:N}),ye=me.variant,re=me.iconVariant;return(0,m.jsxs)(m.Fragment,{children:[z&&(0,m.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(E().InputWrapper__label),htmlFor:ge,children:z}),(0,m.jsxs)("div",{"data-testid":"InputWrapper",className:n()(E().InputWrapper,E()["InputWrapper--"+ye],(c={},c[E()["InputWrapper--search"]]=N,c[E()["InputWrapper--with-focus-effect"]]=!ae,c[E()["InputWrapper--with-padding"]]=!L,c)),children:[(0,m.jsx)(v,{variant:re,disabled:O}),Z({className:E().InputWrapper__field,inputId:ge,variant:ye})]})]})};try{T.displayName="InputWrapper",T.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:T.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(p){}},"./src/hooks/index.ts":(r,t,e)=>{"use strict";e.d(t,{OR:()=>o,OG:()=>n,D9:()=>l,PQ:()=>a});var s=e("./node_modules/react/index.js");function o(_,U){(0,s.useEffect)(function(){return document.addEventListener(_,U),function(){return document.removeEventListener(_,U)}},[_,U])}function n(_,U){(0,s.useEffect)(function(){var V=function(w){w.key===_&&U()};return document.addEventListener("keydown",V),function(){return document.removeEventListener("keydown",V)}},[_,U])}function l(_){var U=(0,s.useRef)();return(0,s.useEffect)(function(){U.current=_},[_]),U.current}var a=function(U,V){var b=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(b.current)b.current=!1;else return U()},V)}},"./src/utils/arrayUtils.ts":(r,t,e)=>{"use strict";e.d(t,{cO:()=>A,zb:()=>R});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),_=e.n(a),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),V=e.n(U),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),w=e.n(b);function A(y,E){if(y===E)return!0;if(y===void 0||E===void 0||y.length!==E.length)return!1;for(var m in y)if(y[m]!==E[m])return!1;return!0}function S(y){return y[y.length-1]}function R(y){return y.length===new Set(y).size}},"./storybook-init-framework-entry.js":(r,t,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(r,t,e)=>{"use strict";e.d(t,{r:()=>_});var s=e("./node_modules/react/index.js"),o,n,l;function a(){return a=Object.assign?Object.assign.bind():function(U){for(var V=1;V<arguments.length;V++){var b=arguments[V];for(var w in b)Object.prototype.hasOwnProperty.call(b,w)&&(U[w]=b[w])}return U},a.apply(this,arguments)}var _=function(V){return s.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},V),o||(o=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.accordion---oQBwV {
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
`,""]),a.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH","page-header--small":"page-header--small---cDICw","page-header--medium":"page-header--medium---wg1ER"};const _=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>_});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),a=l()(o());a.push([r.id,`.pagination-icon---iNvyI {
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
`,""]),a.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const _=a},"./src/components/Accordion/Accordion.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Button/Button.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Map/Map.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/Page.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Select/Select.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=s(o,n);r.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(r,t,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(l){var a=n(l);return e(a)}function n(l){if(!e.o(s,l)){var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}return s[l]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(r,t,e)=>{"use strict";r=e.nmd(r);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],r,!1)}},r=>{var t=s=>r(r.s=s);r.O(0,[748],()=>(t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),t("./storybook-init-framework-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),t("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),t("./.storybook/preview.js-generated-config-entry.js"),t("./generated-stories-entry.cjs")));var e=r.O()}]);
