(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(i){var a=n(i);return e(a)}function n(i){if(!e.o(s,i)){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}return s[i]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>j,__page:()=>_,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),z=e.n(V),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),U=e.n(b),L=e("./node_modules/react/index.js"),E=e("./node_modules/@mdx-js/react/index.js"),B=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),g=["components"];function h(){return h=Object.assign?Object.assign.bind():function(p){for(var k=1;k<arguments.length;k++){var x=arguments[k];for(var W in x)Object.prototype.hasOwnProperty.call(x,W)&&(p[W]=x[W])}return p},h.apply(this,arguments)}function m(p,k){if(p==null)return{};var x=O(p,k),W,X;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(p);for(X=0;X<R.length;X++)W=R[X],!(k.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,W)||(x[W]=p[W]))}return x}function O(p,k){if(p==null)return{};var x={},W=Object.keys(p),X,R;for(R=0;R<W.length;R++)X=W[R],!(k.indexOf(X)>=0)&&(x[X]=p[X]);return x}var C={},u="wrapper";function c(p){var k=p.components,x=m(p,g);return(0,E.mdx)(u,h({},C,x,{components:k,mdxType:"MDXLayout"}),(0,E.mdx)(B.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,E.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,E.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,E.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,E.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,E.mdx)("h3",{id:"npm"},"NPM"),(0,E.mdx)("pre",null,(0,E.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,E.mdx)("h3",{id:"yarn"},"Yarn"),(0,E.mdx)("pre",null,(0,E.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,E.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,E.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,E.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,E.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,E.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,E.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,E.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,E.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,E.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,E.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,E.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,E.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,E.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,E.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,E.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,E.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,E.mdx)("ul",null,(0,E.mdx)("li",{parentName:"ul"},(0,E.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,E.mdx)("li",{parentName:"ul"},(0,E.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}c.displayName="MDXContent",c.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Introduksjon",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,E.mdx)(B.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,E.mdx)(c,null))}});const D=S;var j=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{__namedExportsOrder:()=>j,__page:()=>_,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),z=e.n(V),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),U=e.n(b),L=e("./node_modules/react/index.js"),E=e("./node_modules/@mdx-js/react/index.js"),B=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),g=["components"];function h(){return h=Object.assign?Object.assign.bind():function(p){for(var k=1;k<arguments.length;k++){var x=arguments[k];for(var W in x)Object.prototype.hasOwnProperty.call(x,W)&&(p[W]=x[W])}return p},h.apply(this,arguments)}function m(p,k){if(p==null)return{};var x=O(p,k),W,X;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(p);for(X=0;X<R.length;X++)W=R[X],!(k.indexOf(W)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,W)||(x[W]=p[W]))}return x}function O(p,k){if(p==null)return{};var x={},W=Object.keys(p),X,R;for(R=0;R<W.length;R++)X=W[R],!(k.indexOf(X)>=0)&&(x[X]=p[X]);return x}var C={},u="wrapper";function c(p){var k=p.components,x=m(p,g);return(0,E.mdx)(u,h({},C,x,{components:k,mdxType:"MDXLayout"}),(0,E.mdx)(B.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,E.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,E.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,E.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,E.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,E.mdx)("pre",null,(0,E.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}c.displayName="MDXContent",c.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var S={title:"Components/AppWrapper",includeStories:["__page"]},T={};S.parameters=S.parameters||{},S.parameters.docs=Object.assign({},S.parameters.docs||{},{page:function(){return(0,E.mdx)(B.aT,{mdxStoryNameToKey:T,mdxComponentAnnotations:S},(0,E.mdx)(c,null))}});const D=S;var j=["__page"]},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>L});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),y=e("./src/components/AppWrapper/AppWrapper.module.css"),V=e("./node_modules/react/jsx-runtime.js"),z=function(g){var h=g.children;return(0,V.jsx)("div",{children:h})};z.displayName="AppWrapper";try{z.displayName="AppWrapper",z.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:z.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(B){}var b=function(g){var h=g.children;return(0,V.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,V.jsxs)("p",{style:{margin:"0"},children:[(0,V.jsx)("strong",{children:"Deprecated:"})," ",h]})})};b.displayName="DeprecationWarning";var U=null;try{b.displayName="DeprecationWarning",b.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:b.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(B){}var L=function(g){var h=g.description,m=g.deprecationWarning;return(0,V.jsxs)(z,{children:[(0,V.jsx)(i.Dx,{}),m&&(0,V.jsx)(b,{children:m}),(0,V.jsx)(i.dk,{children:h}),(0,V.jsx)(i.fQ,{includePrimary:!0}),(0,V.jsx)(i.X6,{children:"Props"}),(0,V.jsx)(i.$4,{story:i.Uh})]})};L.displayName="StoryPage";var E=null;try{L.displayName="StoryPage",L.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:L.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(B){}},"./.storybook/preview.js-generated-config-entry.js":(r,t,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>h,parameters:()=>g});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),L=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),B=e("./node_modules/@storybook/theming/dist/esm/index.js"),g={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},B.np.dark),light:Object.assign({},B.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},h=["parameters"],m=e("./node_modules/console-browserify/index.js");function O(c,_){var S=Object.keys(c);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(c);_&&(T=T.filter(function(D){return Object.getOwnPropertyDescriptor(c,D).enumerable})),S.push.apply(S,T)}return S}function C(c){for(var _=1;_<arguments.length;_++){var S=arguments[_]!=null?arguments[_]:{};_%2?O(Object(S),!0).forEach(function(T){u(c,T,S[T])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(S)):O(Object(S)).forEach(function(T){Object.defineProperty(c,T,Object.getOwnPropertyDescriptor(S,T))})}return c}function u(c,_,S){return _ in c?Object.defineProperty(c,_,{value:S,enumerable:!0,configurable:!0,writable:!0}):c[_]=S,c}Object.keys(s).forEach(function(c){var _=s[c];switch(c){case"args":return(0,L.uc)(_);case"argTypes":return(0,L.v9)(_);case"decorators":return _.forEach(function(T){return(0,L.$9)(T,!1)});case"loaders":return _.forEach(function(T){return(0,L.HZ)(T,!1)});case"parameters":return(0,L.h1)(C({},_),!1);case"argTypesEnhancers":return _.forEach(function(T){return(0,L.My)(T)});case"argsEnhancers":return _.forEach(function(T){return(0,L._C)(T)});case"render":return(0,L.$P)(_);case"globals":case"globalTypes":{var S={};return S[c]=_,(0,L.h1)(S,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return m.log(c+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ve,__namedExportsOrder:()=>he,default:()=>ce});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),h=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./node_modules/classnames/index.js"),C=e.n(O),u=e("./.storybook/StoryPage.tsx"),c=e("./src/components/Button/index.ts"),_;(function(H){H.Primary="primary",H.Secondary="secondary"})(_||(_={}));var S=(0,g.createContext)(void 0),T=function(){var de=(0,g.useContext)(S);if(de===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return de},D=e("./src/components/Accordion/Accordion.module.css"),j=e.n(D),p=e("./node_modules/react/jsx-runtime.js"),k=function(de){var re=de.children,ye=de.open,be=de.onClick,fe=de.iconVariant,je=fe===void 0?_.Primary:fe,Oe=(0,g.useId)(),me=(0,g.useId)();return(0,p.jsx)("div",{className:j().accordion,children:(0,p.jsx)(S.Provider,{value:{onClick:be,open:ye,headerId:Oe,contentId:me,iconVariant:je},children:re})})};k.displayName="Accordion";const x=null;try{k.displayName="Accordion",k.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:k.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(H){}var W=e("./src/components/Accordion/AccordionHeader.module.css"),X=e.n(W),R=e("./src/components/Accordion/AccordionIcon.module.css"),F=e.n(R),ae;function te(){return te=Object.assign?Object.assign.bind():function(H){for(var de=1;de<arguments.length;de++){var re=arguments[de];for(var ye in re)Object.prototype.hasOwnProperty.call(re,ye)&&(H[ye]=re[ye])}return H},te.apply(this,arguments)}var oe=function(de){return g.createElement("svg",te({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de),ae||(ae=g.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},A;function ue(){return ue=Object.assign?Object.assign.bind():function(H){for(var de=1;de<arguments.length;de++){var re=arguments[de];for(var ye in re)Object.prototype.hasOwnProperty.call(re,ye)&&(H[ye]=re[ye])}return H},ue.apply(this,arguments)}var ge=function(de){return g.createElement("svg",ue({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},de),A||(A=g.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},ie=function(){var de,re,ye=T(),be=ye.onClick,fe=ye.open,je=ye.iconVariant,Oe=[F()["accordion-icon"],(de={},de[F()["accordion-icon--opened"]]=fe,de)],me=(re={height:20,width:20,className:C()(Oe)},re["data-testid"]=je,re.onClick=be,re);switch(je){case _.Primary:return(0,p.jsx)(oe,Object.assign({},me));case _.Secondary:return(0,p.jsx)(ge,Object.assign({},me))}};const q=null;var w=function(de){var re,ye=de.children,be=de.actions,fe=de.subtitle,je=T(),Oe=je.onClick,me=je.open,ke=je.headerId,Pe=je.contentId;return(0,p.jsxs)("div",{className:C()(X()["accordion-header"],(re={},re[X()["accordion-header--subtitle"]]=fe,re)),children:[(0,p.jsx)(ie,{}),(0,p.jsxs)("button",{className:C()(X()["accordion-header__title"]),"aria-expanded":me,type:"button",onClick:Oe,id:ke,"aria-controls":Pe,children:[ye,(fe==null?void 0:fe.length)&&(0,p.jsx)("div",{"data-testid":"accordion-header-subtitle",className:C()(X()["accordion-header__subtitle"]),children:fe})]}),(0,p.jsx)("div",{className:C()(X()["accordion-header__actions"]),children:be})]})};w.displayName="AccordionHeader";try{w.displayName="AccordionHeader",w.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:w.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(H){}var $=function(de){var re=de.children,ye=T(),be=ye.open,fe=ye.contentId,je=ye.headerId;return(0,p.jsx)("div",{children:be&&(0,p.jsx)("div",{"aria-expanded":be,id:fe,"aria-labelledby":je,children:re})})};$.displayName="AccordionContent";const f=null;try{$.displayName="AccordionContent",$.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:$.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(H){}var v=e("./src/components/Accordion/Accordion.stories.module.css"),d=e.n(v);function l(H,de){return ne(H)||J(H,de)||I(H,de)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(H,de){if(!!H){if(typeof H=="string")return Z(H,de);var re=Object.prototype.toString.call(H).slice(8,-1);if(re==="Object"&&H.constructor&&(re=H.constructor.name),re==="Map"||re==="Set")return Array.from(H);if(re==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))return Z(H,de)}}function Z(H,de){(de==null||de>H.length)&&(de=H.length);for(var re=0,ye=new Array(de);re<de;re++)ye[re]=H[re];return ye}function J(H,de){var re=H==null?null:typeof Symbol!="undefined"&&H[Symbol.iterator]||H["@@iterator"];if(re!=null){var ye=[],be=!0,fe=!1,je,Oe;try{for(re=re.call(H);!(be=(je=re.next()).done)&&(ye.push(je.value),!(de&&ye.length===de));be=!0);}catch(me){fe=!0,Oe=me}finally{try{!be&&re.return!=null&&re.return()}finally{if(fe)throw Oe}}return ye}}function ne(H){if(Array.isArray(H))return H}var Q=`import React, { useState } from 'react';
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
`,K={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},N="";const ce={title:"Components/Accordion",component:k,subcomponents:{AccordionHeader:w,AccordionContent:$},parameters:{design:(0,h.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,p.jsx)(u.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Primary,useActions:!0,subtitle:"Subtitle"}};var _e=function(de){var re=(0,g.useState)(!1),ye=l(re,2),be=ye[0],fe=ye[1],je=(0,g.useState)(!1),Oe=l(je,2),me=Oe[0],ke=Oe[1],Pe=function(){fe(!be)},Ke=function(){ke(!me)},De="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",We=(0,m.D8)(),Ae=l(We,1),Fe=Ae[0].useActions,Ge=(0,m.D8)(),Ze=l(Ge,1),Xe=Ze[0].subtitle,eo=Fe?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{children:"Example setup"}),(0,p.jsx)(c.zx,{variant:c.Wu.Filled,color:c.rp.Primary,size:c.qE.Small,children:"Separat knapp 1"}),(0,p.jsx)(c.zx,{variant:c.Wu.Outline,color:c.rp.Primary,size:c.qE.Small,children:"Separat knapp 2"})]}):void 0,qe=Xe.length>0?Xe:void 0;return(0,p.jsxs)("div",{className:C()(d().container),children:[(0,p.jsxs)(k,{onClick:Pe,open:be,iconVariant:de.iconVariant,children:[(0,p.jsx)(w,{actions:eo,subtitle:qe,children:"Accordion 1"}),(0,p.jsx)($,{children:De})]}),(0,p.jsxs)(k,{onClick:Ke,open:me,iconVariant:de.iconVariant,children:[(0,p.jsx)(w,{actions:eo,subtitle:qe,children:"Accordion 2"}),(0,p.jsx)($,{children:De})]})]})};_e.displayName="Template";var ve=_e.bind({});ve.args={iconVariant:_.Primary,open:!1},ve.argTypes={open:{control:!1},onClick:{control:!1}},ve.parameters={docs:{description:{story:""}}},ve.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ve.parameters);var he=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>p,FullWidth:()=>j,Primary:()=>C,Secondary:()=>u,SecondaryWithIconNoText:()=>D,Success:()=>c,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>k,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),U=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,B={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},g="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const h={title:"Components/Button/Filled",component:b.zx,parameters:{design:(0,y.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,L.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:b.Wu.Filled,onClick:function(W){alert(JSON.stringify(W.target.innerHTML)+" clicked!")}}};var m=function(W){return(0,L.jsx)(b.zx,Object.assign({},W))};m.displayName="Template";var O=function(W){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(b.zx,Object.assign({},W))})};O.displayName="WithinContainerTemplate";var C=m.bind({});C.args={color:b.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:b.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var _=m.bind({});_.args={color:b.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=m.bind({});S.args={color:b.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=m.bind({});T.args={color:b.rp.Success,icon:(0,L.jsx)(U.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var D=m.bind({});D.args={color:b.rp.Secondary,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var j=O.bind({});j.args={color:b.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button"},j.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={children:"Disabled button",disabled:!0},p.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},j.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters);var k=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>p,FullWidthAndDashedBorder:()=>j,Primary:()=>C,Secondary:()=>u,SecondaryWithIconNoText:()=>D,Success:()=>c,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,__namedExportsOrder:()=>k,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),U=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,B={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidthAndDashedBorder:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},g="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const h={title:"Components/Button/Outline",component:b.zx,parameters:{design:(0,y.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,L.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:b.Wu.Outline,onClick:function(W){alert(JSON.stringify(W.target.innerHTML)+" clicked!")}}};var m=function(W){return(0,L.jsx)(b.zx,Object.assign({},W))};m.displayName="Template";var O=function(W){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(b.zx,Object.assign({},W))})};O.displayName="WithinContainerTemplate";var C=m.bind({});C.args={color:b.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:b.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var _=m.bind({});_.args={color:b.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=m.bind({});S.args={color:b.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=m.bind({});T.args={color:b.rp.Success,icon:(0,L.jsx)(U.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var D=m.bind({});D.args={color:b.rp.Secondary,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var j=O.bind({});j.args={color:b.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},j.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={children:"Disabled button",disabled:!0},p.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},j.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters);var k=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Danger:()=>_,Disabled:()=>p,FullWidth:()=>j,Primary:()=>C,Secondary:()=>u,Success:()=>c,SuccessWithCustomIcon:()=>T,SuccessWithIcon:()=>S,SuccessWithIconNoText:()=>D,__namedExportsOrder:()=>k,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./node_modules/@navikt/ds-icons/esm/Success.js"),z=e("./.storybook/StoryPage.tsx"),b=e("./src/components/Button/index.ts"),U=e("./src/components/Button/Stories/success.svg"),L=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,B={Primary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Secondary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Success:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Danger:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithCustomIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIconNoText:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},FullWidth:{startLoc:{col:63,line:48},endLoc:{col:1,line:61},startBody:{col:63,line:48},endBody:{col:1,line:61}},Disabled:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}}},g="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const h={title:"Components/Button/Quiet",component:b.zx,parameters:{design:(0,y.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,L.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:b.Wu.Quiet,size:b.qE.Small,onClick:function(W){alert(JSON.stringify(W.target.innerHTML)+" clicked!")}}};var m=function(W){return(0,L.jsx)(b.zx,Object.assign({},W))};m.displayName="Template";var O=function(W){return(0,L.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,L.jsx)(b.zx,Object.assign({},W))})};O.displayName="WithinContainerTemplate";var C=m.bind({});C.args={color:b.rp.Primary,children:"Primary button"},C.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:b.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:b.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var _=m.bind({});_.args={color:b.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var S=m.bind({});S.args={color:b.rp.Success,icon:(0,L.jsx)(V.Z,{}),iconPlacement:"left",children:"Button"},S.parameters={docs:{description:{story:""}}};var T=m.bind({});T.args={color:b.rp.Success,icon:(0,L.jsx)(U.r,{}),iconPlacement:"left",children:"Button"},T.parameters={docs:{description:{story:""}}};var D=m.bind({});D.args={color:b.rp.Success,icon:(0,L.jsx)(V.Z,{})},D.parameters={docs:{description:{story:""}}};var j=O.bind({});j.args={color:b.rp.Primary,icon:(0,L.jsx)(V.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},j.parameters={docs:{description:{story:""}}};var p=m.bind({});p.args={children:"Disabled button",disabled:!0},p.parameters={docs:{description:{story:""}}},C.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},C.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),S.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},S.parameters),T.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},T.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},D.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},j.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters);var k=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>m,Compact:()=>C,Disabled:()=>u,Error:()=>O,LongText:()=>S,Normal:()=>h,ReadOnly:()=>c,WithDescription:()=>_,WithHiddenLabel:()=>T,__namedExportsOrder:()=>D,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Checkbox/Checkbox.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Normal:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},ReadOnly:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}}},E="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const B={title:"Components/Checkbox",component:z.X,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change.",deprecationWarning:"Use Checkbox from @digdir/design-system-react instead."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var g=function(p){return(0,b.jsx)(z.X,Object.assign({},p))};g.displayName="Template";var h=g.bind({});h.args={},h.parameters={docs:{description:{story:"This is the default checkbox."}}};var m=g.bind({});m.args={checked:!0},m.parameters={docs:{description:{story:"This is a checked checkbox."}}};var O=g.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var C=g.bind({});C.args={compact:!0},C.parameters={docs:{description:{story:"This is the compact checkbox."}}};var u=g.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var c=g.bind({});c.args={readOnly:!0},c.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var _=g.bind({});_.args={description:"Lorem ipsum dolor sit amet."},_.parameters={docs:{description:{story:"This is a checkbox with description."}}};var S=g.bind({});S.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},S.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var T=g.bind({});T.args={hideLabel:!0},T.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},h.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},C.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},_.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},S.parameters),T.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},T.parameters);var D=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>I,Disabled:()=>J,Error:()=>Z,Horizontal:()=>M,Vertical:()=>l,__namedExportsOrder:()=>ne,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),D=e("./src/components/Checkbox/Checkbox.tsx"),j=e("./src/components/FieldSet/index.ts"),p=e("./src/utils/arrayUtils.ts"),k=e("./src/hooks/index.ts"),x=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),W=e.n(x),X=e("./node_modules/react/jsx-runtime.js");function R(Q,K){return A(Q)||oe(Q,K)||ae(Q,K)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(Q,K){if(!!Q){if(typeof Q=="string")return te(Q,K);var N=Object.prototype.toString.call(Q).slice(8,-1);if(N==="Object"&&Q.constructor&&(N=Q.constructor.name),N==="Map"||N==="Set")return Array.from(Q);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return te(Q,K)}}function te(Q,K){(K==null||K>Q.length)&&(K=Q.length);for(var N=0,ce=new Array(K);N<K;N++)ce[N]=Q[N];return ce}function oe(Q,K){var N=Q==null?null:typeof Symbol!="undefined"&&Q[Symbol.iterator]||Q["@@iterator"];if(N!=null){var ce=[],_e=!0,ve=!1,he,H;try{for(N=N.call(Q);!(_e=(he=N.next()).done)&&(ce.push(he.value),!(K&&ce.length===K));_e=!0);}catch(de){ve=!0,H=de}finally{try{!_e&&N.return!=null&&N.return()}finally{if(ve)throw H}}return ce}}function A(Q){if(Array.isArray(Q))return Q}var ue;(function(Q){Q.Vertical="vertical",Q.Horizontal="horizontal"})(ue||(ue={}));var ge=function(K,N){switch(N.type){case"check":return K.concat([N.name]);case"uncheck":return K.filter(function(ce){return ce!==N.name});case"reset":return N.state}},ie=function(K){return K.filter(function(N){var ce=N.checked;return ce}).map(function(N){var ce=N.name;return ce})},q=function(K){var N=K.compact,ce=K.description,_e=K.disabled,ve=K.error,he=K.items,H=K.legend,de=K.onChange,re=K.presentation,ye=K.variant,be=ye===void 0?ue.Vertical:ye;if(!(0,p.zb)(he.map(function(Pe){return Pe.name})))throw Error("Each name in the checkbox group must be unique.");var fe=(0,n.useReducer)(ge,ie(he)),je=R(fe,2),Oe=je[0],me=je[1];(0,n.useEffect)(function(){return me({type:"reset",state:ie(he)})},[he]);var ke=(0,k.D9)(Oe);return(0,k.PQ)(function(){de&&!_e&&!(0,p.cO)(ke,Oe)&&de(Oe)},[Oe,de,_e]),(0,X.jsx)(j.C,{description:ce,disabled:_e,error:ve,legend:H,size:N?j.w.Xsmall:j.w.Small,children:(0,X.jsx)("div",{className:T()(W()["checkbox-group"],W()["checkbox-group--"+be],N&&W()["checkbox-group--compact"]),children:he.map(function(Pe){return(0,X.jsx)(D.X,{checkboxId:Pe.checkboxId,checked:Oe.includes(Pe.name),compact:N,description:Pe.description,disabled:_e||Pe.disabled,error:!!ve,label:Pe.label,name:Pe.name,onChange:function(De){me({type:De.target.checked?"check":"uncheck",name:Pe.name})},presentation:re},Pe.name)})})})};q.displayName="CheckboxGroup";try{q.displayName="CheckboxGroup",q.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:q.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(Q){}var w=`import React from 'react';
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
`,$={Vertical:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Horizontal:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Compact:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Error:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Disabled:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const v={title:"Components/CheckboxGroup",component:q,parameters:{design:(0,i.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,X.jsx)(a.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes.",deprecationWarning:"Use CheckboxGroup from @digdir/design-system-react instead."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:ue.Vertical}};var d=function(K){return(0,X.jsx)(q,Object.assign({},K))};d.displayName="Template";var l=d.bind({});l.args={variant:ue.Vertical},l.parameters={docs:{description:{story:"This is the default setting."}}};var M=d.bind({});M.args={variant:ue.Horizontal},M.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var I=d.bind({});I.args={compact:!0},I.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var Z=d.bind({});Z.args={error:"Du m\xE5 velge minst ett av alternativene over."},Z.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var J=d.bind({});J.args={disabled:!0},J.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},l.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},l.parameters),M.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},M.parameters),I.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},I.parameters),Z.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},Z.parameters),J.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},J.parameters);var ne=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{SimpleExample:()=>O,__namedExportsOrder:()=>C,default:()=>h});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./src/DesignTokens/index.ts"),V=e("./src/components/CircularProgress/CircularProgress.module.css"),z=e.n(V),b=e("./node_modules/react/jsx-runtime.js"),U=function(c){var _=c.value,S=c.width,T=S===void 0?70:S,D=c.strokeWidth,j=D===void 0?2.5:D,p=c.ariaLabel,k=c.label,x=c.id,W=x+"-label",X=!p&&k?W:void 0;return(0,b.jsxs)("div",{id:x,className:z().container,style:{width:T+"px"},role:"progressbar","aria-labelledby":X,"aria-label":p,children:[k&&(0,b.jsx)("div",{id:W,className:z().label,children:k}),(0,b.jsxs)("svg",{className:z().svg,viewBox:"0 0 35.8 35.8",children:[(0,b.jsx)(L,{stroke:y.T.ColorsBlue200,strokeWidth:j}),(0,b.jsx)(L,{strokeWidth:j,stroke:y.T.ColorsBlue900,strokeDashoffset:100-_,strokeDasharray:"100 100",className:z().circleTransition})]})]})};U.displayName="CircularProgress";var L=function(c){return(0,b.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},c))};L.displayName="Circle";try{U.displayName="CircularProgress",U.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:U.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(u){}var E=`import React from 'react';
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
`,B={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},g="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const h={title:"Components/CircularProgress",component:U,parameters:{design:(0,i.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,b.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var m=function(c){return(0,b.jsx)(U,Object.assign({},c))};m.displayName="CircularTemplate";var O=m.bind({});O.args={width:100,value:60,label:"3/5",id:"progress"},O.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},O.parameters);var C=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>h,__namedExportsOrder:()=>m,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/ErrorMessage/ErrorMessage.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Example:{startLoc:{col:54,line:42},endLoc:{col:1,line:44},startBody:{col:54,line:42},endBody:{col:1,line:44}}},E="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const B={title:"Components/ErrorMessage",component:z.B,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"Simple error-message suitable to be shown in table views",deprecationWarning:"Use ErrorMessage from @digdir/design-system-react instead."})}}},args:{id:"error-message-story"}};var g=function(C){return(0,b.jsx)(z.B,Object.assign({},C,{children:"This is an error message"}))};g.displayName="Template";var h=g.bind({});h.args={},h.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},h.parameters);var m=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>m,Disabled:()=>u,Error:()=>C,Normal:()=>h,WithDescription:()=>O,__namedExportsOrder:()=>c,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/FieldSet/FieldSet.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},E="";const B={title:"Components/FieldSet",component:z.C,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"Field set component to use as a wrapper for groups of form elements.",deprecationWarning:"Use FieldSet from @digdir/design-system-react instead."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:z.w.Small}};var g=function(S){return(0,b.jsx)(z.C,Object.assign({},S,{children:S.children}))};g.displayName="Template";var h=g.bind({});h.args={},h.parameters={docs:{description:{story:"This is a normal field set."}}};var m=g.bind({});m.args={size:z.w.Xsmall},m.parameters={docs:{description:{story:"This is a compact field set."}}};var O=g.bind({});O.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},O.parameters={docs:{description:{story:"This is a field set with a description."}}};var C=g.bind({});C.args={error:"Her er det en beskrivende feilmelding."},C.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var u=g.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},h.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},C.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},u.parameters);var c=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Dashed:()=>p,Solid:()=>j,__namedExportsOrder:()=>k,default:()=>T});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./node_modules/classnames/index.js"),V=e.n(y),z=e("./src/components/List/List.module.css"),b=e.n(z),U;(function(x){x.Solid="solid",x.Dashed="dashed"})(U||(U={}));var L=(0,n.createContext)({borderStyle:U.Solid}),E=function(){var W=(0,n.useContext)(L);if(W===void 0)throw new Error("useListContext must be used within a ListContext");return W},B=e("./node_modules/react/jsx-runtime.js"),g=function(W){var X=W.children,R=W.borderStyle,F=R===void 0?U.Solid:R;return(0,B.jsx)("ul",{className:V()(b().list,b()["list--"+F]),children:(0,B.jsx)(L.Provider,{value:{borderStyle:F},children:X})})};g.displayName="List";try{g.displayName="List",g.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:g.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(x){}var h=e("./src/components/List/ListItem.module.css"),m=e.n(h),O=function(W){var X=W.children,R=E(),F=R.borderStyle;return(0,B.jsx)("li",{className:V()(m()["list-item"],m()["list-item--"+F]),children:X})};O.displayName="ListItem";try{O.displayName="ListItem",O.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:O.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(x){}var C=e("./src/components/List/List.stories.modules.css"),u=e.n(C),c=`import React from 'react';
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
`,_={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},S="";const T={title:"Components/List",component:g,parameters:{design:(0,i.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,B.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var D=function(W){return(0,B.jsx)("div",{className:u().container,children:(0,B.jsxs)(g,{borderStyle:W.borderStyle,children:[(0,B.jsx)(O,{children:"List Item 1"}),(0,B.jsx)(O,{children:"List Item 2"}),(0,B.jsx)(O,{children:"List Item 3"})]})})};D.displayName="Template";var j=D.bind({});j.args={borderStyle:U.Solid},j.parameters={docs:{description:{story:""}}};var p=D.bind({});p.args={borderStyle:U.Dashed},p.parameters={docs:{description:{story:""}}},j.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},j.parameters),p.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},p.parameters);var k=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>l,GoogleMaps:()=>ne,KartverketSea:()=>J,KartverketTerrain:()=>Z,MapWithMarkerZoomAndCenter:()=>M,OpenStreetMap:()=>I,__namedExportsOrder:()=>Q,default:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),h=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./.storybook/StoryPage.tsx"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/react-leaflet/lib/MapContainer.js"),u=e("./node_modules/react-leaflet/lib/TileLayer.js"),c=e("./node_modules/react-leaflet/lib/AttributionControl.js"),_=e("./node_modules/react-leaflet/lib/Marker.js"),S=e("./node_modules/react-leaflet/lib/hooks.js"),T=e("./node_modules/leaflet/dist/leaflet-src.js"),D=e("./src/components/Map/Map.module.css"),j=e.n(D),p=e("./node_modules/leaflet/dist/leaflet.css"),k=e("./node_modules/react/jsx-runtime.js"),x={latitude:64.888996,longitude:12.8186054},W=4,X=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],R=function(N){var ce=N.readOnly,_e=ce===void 0?!1:ce,ve=N.layers,he=ve===void 0?X:ve,H=N.centerLocation,de=H===void 0?x:H,re=N.zoom,ye=re===void 0?W:re,be=N.markerLocation,fe=N.markerIcon,je=N.onClick;return(0,k.jsxs)(C.h,{className:j().map,center:F(de),zoom:ye,zoomControl:!_e,dragging:!_e,touchZoom:!_e,doubleClickZoom:!_e,scrollWheelZoom:!_e,attributionControl:!1,children:[he.map(function(Oe,me){return(0,k.jsx)(u.I,{url:Oe.url,attribution:Oe.attribution,subdomains:Oe.subdomains?Oe.subdomains:[],opacity:_e?.5:1},me)}),(0,k.jsx)(c.z,{prefix:!1}),be?(0,k.jsx)(_.J,{position:F(be),icon:(0,T.icon)(fe)}):null,(0,k.jsx)(ae,{readOnly:_e,onClick:je})]})};R.displayName="Map";function F(K){return[K.latitude,K.longitude]}var ae=function(N){var ce=N.onClick,_e=N.readOnly;return(0,S.zV)({click:function(he){if(ce&&!_e){var H=he.latlng.wrap();ce({latitude:H.lat,longitude:H.lng})}}}),null};try{R.displayName="Map",R.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:R.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(K){}var te=e("./node_modules/console-browserify/index.js");function oe(K,N){return q(K)||ie(K,N)||ue(K,N)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(K,N){if(!!K){if(typeof K=="string")return ge(K,N);var ce=Object.prototype.toString.call(K).slice(8,-1);if(ce==="Object"&&K.constructor&&(ce=K.constructor.name),ce==="Map"||ce==="Set")return Array.from(K);if(ce==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ce))return ge(K,N)}}function ge(K,N){(N==null||N>K.length)&&(N=K.length);for(var ce=0,_e=new Array(N);ce<N;ce++)_e[ce]=K[ce];return _e}function ie(K,N){var ce=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(ce!=null){var _e=[],ve=!0,he=!1,H,de;try{for(ce=ce.call(K);!(ve=(H=ce.next()).done)&&(_e.push(H.value),!(N&&_e.length===N));ve=!0);}catch(re){he=!0,de=re}finally{try{!ve&&ce.return!=null&&ce.return()}finally{if(he)throw de}}return _e}}function q(K){if(Array.isArray(K))return K}var w=`import React, { useState } from 'react';
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
`,$={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},f="";const v={title:"Components/Map",component:R,parameters:{layout:"fullscreen",design:(0,h.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,k.jsx)(m.Y,{description:"Map component"})}}},args:{}};var d=function(N){var ce=(0,g.useState)(N.markerLocation),_e=oe(ce,2),ve=_e[0],he=_e[1],H=function(re){he(re),te.log("Map clicked at ["+re.latitude+","+re.longitude+"]")};return(0,k.jsx)(R,Object.assign({},N,{markerLocation:ve,onClick:H}))};d.displayName="Template";var l=d.bind({});l.args={},l.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var M=d.bind({});M.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},M.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var I=d.bind({});I.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},I.parameters={docs:{description:{story:"OpenStreetMap"}}};var Z=d.bind({});Z.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},Z.parameters={docs:{description:{story:"Kartverket terrain map"}}};var J=d.bind({});J.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},J.parameters={docs:{description:{story:"Kartverket sea map"}}};var ne=d.bind({});ne.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},ne.parameters={docs:{description:{story:"Google Maps"}}},l.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},l.parameters),M.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},M.parameters),I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),Z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Z.parameters),J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters),ne.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ne.parameters);var Q=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Primary:()=>R,Success:()=>F,__namedExportsOrder:()=>ae,default:()=>W});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y;function V(){return V=Object.assign?Object.assign.bind():function(te){for(var oe=1;oe<arguments.length;oe++){var A=arguments[oe];for(var ue in A)Object.prototype.hasOwnProperty.call(A,ue)&&(te[ue]=A[ue])}return te},V.apply(this,arguments)}var z=function(oe){return n.createElement("svg",V({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},oe),y||(y=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},b;(function(te){te.Primary="primary",te.Success="success"})(b||(b={}));var U;(function(te){te.Small="small",te.Medium="medium"})(U||(U={}));var L=(0,n.createContext)({color:b.Primary,size:U.Medium}),E=function(){var oe=(0,n.useContext)(L);if(oe===void 0)throw new Error("usePageContext must be used within a PageContext");return oe},B=e("./node_modules/classnames/index.js"),g=e.n(B),h=e("./src/components/Page/PageContent.module.css"),m=e.n(h),O=e("./node_modules/react/jsx-runtime.js"),C=function(oe){var A=oe.children;return(0,O.jsx)("div",{className:g()(m()["page-content"]),children:A})};C.displayName="PageContent";try{C.displayName="PageContent",C.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:C.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(te){}var u=e("./src/components/SvgIcon/index.ts"),c=e("./src/components/Page/PageHeader.module.css"),_=e.n(c),S=function(oe){var A=oe.children,ue=oe.icon,ge=E(),ie=ge.color,q=ge.size,w=q===U.Small?28:40;return(0,O.jsxs)("header",{className:g()(_()["page-header"],_()["page-header--"+ie],_()["page-header--"+q]),children:[(0,O.jsx)(u.l,{width:w,height:w,svgIconComponent:ue}),(0,O.jsx)("span",{children:A})]})};S.displayName="PageHeader";try{S.displayName="PageHeader",S.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:S.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(te){}var T=e("./src/components/Page/Page.module.css"),D=e.n(T),j=function(oe){var A=oe.children,ue=oe.color,ge=ue===void 0?b.Primary:ue,ie=oe.size,q=ie===void 0?U.Medium:ie;return(0,O.jsx)("div",{className:D().page,children:(0,O.jsx)(L.Provider,{value:{color:ge,size:q},children:A})})};j.displayName="Page";try{j.displayName="Page",j.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:j.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(te){}var p=`import React from 'react';
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
`,k={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},x="";const W={title:"Components/Page",component:j,parameters:{design:(0,i.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,O.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var X=function(oe){return(0,O.jsx)("div",{style:{width:"600px"},children:(0,O.jsxs)(j,{color:oe.color,size:oe.size,children:[(0,O.jsx)(S,{icon:(0,O.jsx)(z,{}),children:"PageHeader"}),(0,O.jsx)(C,{children:"PageContent"})]})})};X.displayName="Template";var R=X.bind({});R.args={color:b.Primary,size:U.Medium},R.parameters={docs:{description:{story:""}}};var F=X.bind({});F.args={color:b.Success,size:U.Medium},F.parameters={docs:{description:{story:""}}},R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters),F.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},F.parameters);var ae=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>l,__namedExportsOrder:()=>M,default:()=>v,descriptionTexts:()=>f});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),z=e.n(V),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e.n(b),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e.n(L),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e.n(B),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),m=e.n(h),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(O),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),c=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e.n(_),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),D=e.n(T),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(j),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),x=e.n(k),W=e("./node_modules/react/index.js"),X=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./.storybook/StoryPage.tsx"),F=e("./src/components/Pagination/Pagination.tsx"),ae=e("./node_modules/react/jsx-runtime.js");function te(I,Z){return ie(I)||ge(I,Z)||A(I,Z)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(I,Z){if(!!I){if(typeof I=="string")return ue(I,Z);var J=Object.prototype.toString.call(I).slice(8,-1);if(J==="Object"&&I.constructor&&(J=I.constructor.name),J==="Map"||J==="Set")return Array.from(I);if(J==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J))return ue(I,Z)}}function ue(I,Z){(Z==null||Z>I.length)&&(Z=I.length);for(var J=0,ne=new Array(Z);J<Z;J++)ne[J]=I[J];return ne}function ge(I,Z){var J=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(J!=null){var ne=[],Q=!0,K=!1,N,ce;try{for(J=J.call(I);!(Q=(N=J.next()).done)&&(ne.push(N.value),!(Z&&ne.length===Z));Q=!0);}catch(_e){K=!0,ce=_e}finally{try{!Q&&J.return!=null&&J.return()}finally{if(K)throw ce}}return ne}}function ie(I){if(Array.isArray(I))return I}var q=`import React, { useState } from 'react';
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
`,w={Example:{startLoc:{col:52,line:52},endLoc:{col:1,line:73},startBody:{col:52,line:52},endBody:{col:1,line:73}}},$="",f={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const v={title:"Components/Pagination",component:F.t,parameters:{design:(0,X.vc)([{type:"figma",url:$},{type:"link",url:$}]),docs:{page:function(){return(0,ae.jsx)(R.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var d=function(Z){var J=(0,W.useState)(5),ne=te(J,2),Q=ne[0],K=ne[1],N=(0,W.useState)(0),ce=te(N,2),_e=ce[0],ve=ce[1],he=function(de){K(parseInt(de.target.value,10)),ve(0)};return(0,ae.jsx)(F.t,Object.assign({},Z,{rowsPerPage:Q,currentPage:_e,setCurrentPage:ve,onRowsPerPageChange:he,descriptionTexts:f}))};d.displayName="Template";var l=d.bind({});l.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},l.parameters={docs:{description:{story:""}}},l.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},l.parameters);var M=["descriptionTexts","Example"];try{f.displayName="descriptionTexts",f.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:f.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(I){}},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>C,Info:()=>m,Success:()=>h,Warning:()=>O,__namedExportsOrder:()=>u,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Panel/Panel.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},E="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const B={title:"Components/Panel",component:z.s,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,b.jsx)("div",{children:"Her kommer litt informasjon"})}};var g=function(_){return(0,b.jsx)(z.s,Object.assign({},_))};g.displayName="Template";var h=g.bind({});h.args={variant:z.c.Success},h.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var m=g.bind({});m.parameters={docs:{description:{story:"Infobeskrivelse"}}};var O=g.bind({});O.args={variant:z.c.Warning},O.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var C=g.bind({});C.args={variant:z.c.Error},C.parameters={docs:{description:{story:"Feilbeskrivelse"}}},h.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},m.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},O.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},C.parameters);var u=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Error:()=>f,Info:()=>w,Success:()=>q,Warning:()=>$,__namedExportsOrder:()=>v,default:()=>ge});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),h=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Button/index.ts"),u=e("./src/components/Panel/Panel.tsx"),c=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),_=e("./node_modules/classnames/index.js"),S=e.n(_),T=e("./src/components/Panel/PopoverPanel.module.css"),D=e.n(T),j=e("./node_modules/react/jsx-runtime.js"),p=function(l){var M=l.children;return(0,j.jsx)(c.Eh,{className:S()(D()["popover-panel__arrow"]),asChild:!0,children:M})};p.displayName="renderArrow";var k=function(l){var M=l.children,I=l.variant,Z=I===void 0?u.c.Warning:I,J=l.trigger,ne=l.side,Q=ne===void 0?"top":ne,K=l.title,N=l.showIcon,ce=l.forceMobileLayout,_e=l.showPointer,ve=_e===void 0?!0:_e,he=l.onOpenChange,H=l.open,de=H===void 0?!1:H;return(0,j.jsxs)(c.fC,{open:de,onOpenChange:he,children:[(0,j.jsx)(c.xz,{asChild:!0,role:"button",children:J}),(0,j.jsx)(c.VY,{side:Q,className:D()["popover-panel"],children:(0,j.jsx)(u.s,{title:K,showIcon:N,forceMobileLayout:ce,showPointer:ve,variant:Z,renderArrow:p,children:M})})]})};k.displayName="PopoverPanel";const x=null;try{k.displayName="PopoverPanel",k.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:k.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(d){}function W(d,l){return te(d)||ae(d,l)||R(d,l)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(d,l){if(!!d){if(typeof d=="string")return F(d,l);var M=Object.prototype.toString.call(d).slice(8,-1);if(M==="Object"&&d.constructor&&(M=d.constructor.name),M==="Map"||M==="Set")return Array.from(d);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return F(d,l)}}function F(d,l){(l==null||l>d.length)&&(l=d.length);for(var M=0,I=new Array(l);M<l;M++)I[M]=d[M];return I}function ae(d,l){var M=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(M!=null){var I=[],Z=!0,J=!1,ne,Q;try{for(M=M.call(d);!(Z=(ne=M.next()).done)&&(I.push(ne.value),!(l&&I.length===l));Z=!0);}catch(K){J=!0,Q=K}finally{try{!Z&&M.return!=null&&M.return()}finally{if(J)throw Q}}return I}}function te(d){if(Array.isArray(d))return d}var oe=`import React from 'react';
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
`,A={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},ue="";const ge={title:"Components/Panel/PopoverPanel",component:k,parameters:{design:(0,h.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,j.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:u.c.Warning,trigger:(0,j.jsx)("button",{children:"\xC5pne"}),side:"top"}};var ie=function(l){var M=(0,m.eJ)(!1),I=W(M,2),Z=I[0],J=I[1],ne=function(){J(!Z)};return(0,j.jsx)("div",{children:(0,j.jsxs)(k,{variant:l.variant,side:l.side,title:l.title,open:Z,trigger:(0,j.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,children:"\xC5pne"}),onOpenChange:J,showPointer:l.showPointer,showIcon:l.showIcon,forceMobileLayout:l.forceMobileLayout,children:[(0,j.jsx)("div",{children:"Her kommer litt informasjon"}),(0,j.jsx)(C.zx,{variant:C.Wu.Filled,color:C.rp.Primary,size:C.qE.Small,onClick:ne,children:"Lukk"})]})})};ie.displayName="Template";var q=ie.bind({});q.args={variant:u.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},q.argTypes={trigger:{control:!1}},q.parameters={docs:{description:{story:""}}};var w=ie.bind({});w.args={variant:u.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},w.argTypes={trigger:{control:!1}},w.parameters={docs:{description:{story:""}}};var $=ie.bind({});$.args={variant:u.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},$.argTypes={trigger:{control:!1}},$.parameters={docs:{description:{story:""}}};var f=ie.bind({});f.args={variant:u.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},f.argTypes={trigger:{control:!1}},f.parameters={docs:{description:{story:""}}},q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters),w.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},w.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters),f.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},f.parameters);var v=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Checked:()=>m,Compact:()=>C,Default:()=>h,Disabled:()=>u,Error:()=>O,LongText:()=>_,WithDescription:()=>c,WithHiddenLabel:()=>S,__namedExportsOrder:()=>T,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/RadioButton/RadioButton.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Default:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}}},E="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const B={title:"Components/RadioButton",component:z.E,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}",deprecationWarning:"Use RadioButton from @digdir/design-system-react instead."})}}},args:{label:"Label",name:"label",value:"label"}};var g=function(j){return(0,b.jsx)(z.E,Object.assign({},j))};g.displayName="Template";var h=g.bind({});h.args={},h.parameters={docs:{description:{story:"Default radio button."}}};var m=g.bind({});m.args={checked:!0},m.parameters={docs:{description:{story:"Checked radio button."}}};var O=g.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var C=g.bind({});C.args={size:z.j.Xsmall},C.parameters={docs:{description:{story:"This is the compact radio button."}}};var u=g.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var c=g.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a radio button with description."}}};var _=g.bind({});_.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},_.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var S=g.bind({});S.args={hideLabel:!0},S.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},O.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},C.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},u.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},c.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},_.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},S.parameters);var T=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Compact:()=>$,Disabled:()=>v,Error:()=>f,Horizontal:()=>w,Vertical:()=>q,__namedExportsOrder:()=>d,default:()=>ge});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),u=e("./src/components/RadioButton/index.ts"),c=e("./src/components/FieldSet/index.ts"),_=e("./src/hooks/index.ts"),S=e("./src/utils/arrayUtils.ts"),T=e("./src/components/RadioGroup/RadioGroup.module.css"),D=e.n(T),j=e("./node_modules/react/jsx-runtime.js");function p(l,M){return R(l)||X(l,M)||x(l,M)||k()}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(l,M){if(!!l){if(typeof l=="string")return W(l,M);var I=Object.prototype.toString.call(l).slice(8,-1);if(I==="Object"&&l.constructor&&(I=l.constructor.name),I==="Map"||I==="Set")return Array.from(l);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return W(l,M)}}function W(l,M){(M==null||M>l.length)&&(M=l.length);for(var I=0,Z=new Array(M);I<M;I++)Z[I]=l[I];return Z}function X(l,M){var I=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(I!=null){var Z=[],J=!0,ne=!1,Q,K;try{for(I=I.call(l);!(J=(Q=I.next()).done)&&(Z.push(Q.value),!(M&&Z.length===M));J=!0);}catch(N){ne=!0,K=N}finally{try{!J&&I.return!=null&&I.return()}finally{if(ne)throw K}}return Z}}function R(l){if(Array.isArray(l))return l}var F;(function(l){l.Xsmall="xsmall",l.Small="small"})(F||(F={}));var ae;(function(l){l.Vertical="vertical",l.Horizontal="horizontal"})(ae||(ae={}));var te=function(M){var I=M.description,Z=M.disabled,J=M.error,ne=M.items,Q=M.legend,K=M.name,N=M.onChange,ce=M.presentation,_e=M.size,ve=_e===void 0?F.Small:_e,he=M.value,H=M.variant,de=H===void 0?ae.Vertical:H;if(!(0,S.zb)(ne.map(function(De){return De.value})))throw Error("Each value in the radio group must be unique.");var re=(0,n.useState)(he),ye=p(re,2),be=ye[0],fe=ye[1];(0,n.useEffect)(function(){fe(he)},[he]);var je=(0,_.D9)(be);(0,_.PQ)(function(){N&&!Z&&je!==be&&N(be)},[be,Z,N]);var Oe=function(We){return function(Ae){return Ae.target.checked&&fe(We)}},me=ve===F.Xsmall?[c.w.Xsmall,u.j.Xsmall]:[c.w.Small,u.j.Small],ke=p(me,2),Pe=ke[0],Ke=ke[1];return(0,j.jsx)(c.C,{description:I,disabled:Z,error:J,legend:Q,size:Pe,children:(0,j.jsx)("div",{className:[D()["radio-group"],D()["radio-group--"+de],D()["radio-group--"+ve]].join(" "),role:ce?void 0:"radiogroup",children:ne.map(function(De){return(0,n.createElement)(u.E,Object.assign({},De,{checked:De.value===be,disabled:Z||De.disabled,error:!!J,key:De.value,name:K,onChange:Oe(De.value),presentation:ce,size:Ke}))})})})};te.displayName="RadioGroup";try{te.displayName="RadioGroup",te.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:te.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(l){}var oe=`import React from 'react';
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
`,A={Vertical:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Horizontal:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Compact:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Error:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Disabled:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}}},ue="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const ge={title:"Components/RadioGroup",component:te,parameters:{design:(0,i.vc)([{type:"figma",url:ue},{type:"link",url:ue}]),docs:{page:function(){return(0,j.jsx)(a.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes.",deprecationWarning:"Use RadioGroup from @digdir/design-system-react instead."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var ie=function(M){return(0,j.jsx)(te,Object.assign({},M))};ie.displayName="Template";var q=ie.bind({});q.args={variant:ae.Vertical},q.parameters={docs:{description:{story:"This is the default setting."}}};var w=ie.bind({});w.args={variant:ae.Horizontal},w.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var $=ie.bind({});$.args={size:F.Xsmall},$.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var f=ie.bind({});f.args={error:"Du m\xE5 velge et av alternativene over."},f.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var v=ie.bind({});v.args={disabled:!0},v.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},q.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},q.parameters),w.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},w.parameters),$.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},$.parameters),f.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},f.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},v.parameters);var d=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>ie,__namedExportsOrder:()=>q,default:()=>ue});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),h=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),O=e("./.storybook/StoryPage.tsx"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),c=e("./node_modules/classnames/index.js"),_=e.n(c),S=e("./src/components/_InputWrapper/index.ts"),T=e("./node_modules/react/jsx-runtime.js"),D=["id","onChange","disabled","label"];function j(w,$){if(w==null)return{};var f=p(w,$),v,d;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(w);for(d=0;d<l.length;d++)v=l[d],!($.indexOf(v)>=0)&&(!Object.prototype.propertyIsEnumerable.call(w,v)||(f[v]=w[v]))}return f}function p(w,$){if(w==null)return{};var f={},v=Object.keys(w),d,l;for(l=0;l<v.length;l++)d=v[l],!($.indexOf(d)>=0)&&(f[d]=w[d]);return f}var k=function($){var f=$.id,v=$.onChange,d=$.disabled,l=d===void 0?!1:d,M=$.label,I=j($,D);return(0,T.jsx)(S.SP,{disabled:l,isSearch:!0,label:M,inputRenderer:function(J){var ne=J.className,Q=J.variant,K={id:f,disabled:l,className:_()(ne)};return(0,T.jsx)("input",Object.assign({},K,I,{"data-testid":f+"-"+Q,onChange:v}))}})};k.displayName="SearchField";try{k.displayName="SearchField",k.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:k.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(w){}function x(w,$){return ae(w)||F(w,$)||X(w,$)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(w,$){if(!!w){if(typeof w=="string")return R(w,$);var f=Object.prototype.toString.call(w).slice(8,-1);if(f==="Object"&&w.constructor&&(f=w.constructor.name),f==="Map"||f==="Set")return Array.from(w);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return R(w,$)}}function R(w,$){($==null||$>w.length)&&($=w.length);for(var f=0,v=new Array($);f<$;f++)v[f]=w[f];return v}function F(w,$){var f=w==null?null:typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(f!=null){var v=[],d=!0,l=!1,M,I;try{for(f=f.call(w);!(d=(M=f.next()).done)&&(v.push(M.value),!($&&v.length===$));d=!0);}catch(Z){l=!0,I=Z}finally{try{!d&&f.return!=null&&f.return()}finally{if(l)throw I}}return v}}function ae(w){if(Array.isArray(w))return w}var te=`import React from 'react';
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
`,oe={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},A="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const ue={title:"Components/SearchField",component:k,parameters:{design:(0,h.vc)([{type:"figma",url:A},{type:"link",url:A}]),docs:{page:function(){return(0,T.jsx)(O.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var ge=function($){var f=(0,m.D8)(),v=x(f,1),d=v[0].disabled;return(0,T.jsx)(k,Object.assign({disabled:d},$))};ge.displayName="Template";var ie=ge.bind({});ie.args={},ie.parameters={docs:{description:{story:"Search field."}}},ie.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},ie.parameters);var q=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Disabled:()=>c,Error:()=>_,Multiple:()=>u,__namedExportsOrder:()=>S,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),y=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/storybook-addon-designs/esm/index.js"),b=e("./.storybook/StoryPage.tsx"),U=e("./src/components/Select/Select.tsx"),L=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,B={Multiple:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Disabled:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Error:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}}},g="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",h=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],m=h.map(function(T){return Object.assign({},T,{deleteButtonLabel:"Slett "+T.label})});const O={title:"Components/Select/Multiple",component:U.P,parameters:{design:(0,z.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,L.jsx)(b.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:m}};var C=function(D){return(0,L.jsx)("div",{style:{width:"440px"},children:(0,L.jsx)(U.P,Object.assign({},D))})};C.displayName="Template";var u=C.bind({});u.args={},u.parameters={docs:{description:{story:"This is the default multiple select box."}}};var c=C.bind({});c.args={disabled:!0},c.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var _=C.bind({});_.args={error:!0},_.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},u.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},_.parameters);var S=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>h,Disabled:()=>m,Error:()=>O,__namedExportsOrder:()=>C,default:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),a=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),V=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Select/Select.tsx"),b=e("./node_modules/react/jsx-runtime.js"),U=`import React from 'react';
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
`,L={Default:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Error:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}},E="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const B={title:"Components/Select/Single",component:z.P,parameters:{design:(0,y.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,b.jsx)(V.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var g=function(c){return(0,b.jsx)("div",{style:{width:"440px"},children:(0,b.jsx)(z.P,Object.assign({},c))})};g.displayName="Template";var h=g.bind({});h.args={},h.parameters={docs:{description:{story:"This is the default select box."}}};var m=g.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var O=g.bind({});O.args={error:!0},O.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},h.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},m.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},O.parameters);var C=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{IconFromNavIconLibrary:()=>u,ImportedCustomIcon:()=>c,__namedExportsOrder:()=>_,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./node_modules/@navikt/ds-icons/esm/Success.js"),y=e("./.storybook/StoryPage.tsx"),V=e("./src/components/SvgIcon/index.ts"),z,b,U;function L(){return L=Object.assign?Object.assign.bind():function(S){for(var T=1;T<arguments.length;T++){var D=arguments[T];for(var j in D)Object.prototype.hasOwnProperty.call(D,j)&&(S[j]=D[j])}return S},L.apply(this,arguments)}var E=function(T){return n.createElement("svg",L({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},T),z||(z=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),b||(b=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),U||(U=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},B=e("./node_modules/react/jsx-runtime.js"),g=`import React from 'react';
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
`,h={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},m="";const O={title:"Components/SvgIcon",component:V.l,parameters:{design:(0,i.vc)([{type:"figma",url:m},{type:"link",url:m}]),docs:{page:function(){return(0,B.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var C=function(T){return(0,B.jsx)(V.l,Object.assign({},T))};C.displayName="Template";var u=C.bind({});u.args={svgIconComponent:(0,B.jsx)(a.Z,{})},u.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var c=C.bind({});c.args={svgIconComponent:(0,B.jsx)(E,{height:"2rem",width:"2rem"})},c.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},c.parameters);var _=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{BasicTable:()=>so,Responsive:()=>ao,SelectRows:()=>ro,__namedExportsOrder:()=>Oo,default:()=>vo});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),m=e("./node_modules/react/index.js"),O=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/classnames/index.js"),u=e.n(C),c=e("./.storybook/StoryPage.tsx"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),D=e("./src/hooks/useMediaQuery.ts"),j=e("./src/DesignTokens/index.ts"),p=e("./src/components/RadioButton/index.ts"),k;(function(P){P.Header="header",P.Body="body",P.Footer="footer"})(k||(k={}));var x;(function(P){P.Descending="desc",P.Ascending="asc",P.NotSortable="notSortable",P.NotActive="notActive"})(x||(x={}));var W=(0,m.createContext)(void 0);function X(){var P=(0,m.useContext)(W);if(P===void 0)throw new Error("useTableContext must be used within a TableContext");return P}var R=(0,m.createContext)({variantStandard:k.Body}),F=function(){var G=(0,m.useContext)(R);if(G===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return G},ae=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),te=e("./src/components/Table/Table.module.css"),oe=e.n(te),A=e("./node_modules/react/jsx-runtime.js"),ue=["children","selectRows","onChange","selectedValue","className"];function ge(P,G){if(P==null)return{};var se=ie(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function ie(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}function q(P){var G=P.children,se=P.selectRows,Y=se===void 0?!1:se,ee=P.onChange,le=P.selectedValue,pe=P.className,Ce=ge(P,ue),Re={selectRows:Y,onChange:ee,selectedValue:le};return(0,A.jsx)("table",Object.assign({},Ce,{className:u()(oe().Table,pe),children:(0,A.jsx)(W.Provider,{value:Re,children:G})}))}q.displayName="Table";try{q.displayName="Table",q.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler<T>"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:q.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(P){}var w=e("./src/components/Table/TableHeader.module.css"),$=e.n(w),f=["children","className"];function v(P,G){if(P==null)return{};var se=d(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function d(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}var l=function(G){var se=G.children,Y=G.className,ee=v(G,f),le=k.Header;return(0,A.jsx)(R.Provider,{value:{variantStandard:le},children:(0,A.jsx)("thead",Object.assign({},ee,{className:u()($()["table-header"],Y),children:se}))})};l.displayName="TableHeader";try{l.displayName="TableHeader",l.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:l.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(P){}var M=e("./src/components/Table/TableRow.module.css"),I=e.n(M),Z=["children","rowData","className"];function J(P,G){if(P==null)return{};var se=ne(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function ne(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}function Q(P){var G,se=P.children,Y=P.rowData,ee=P.className,le=J(P,Z),pe=F(),Ce=pe.variantStandard,Re=X(),Ne=Re.onChange,Ue=Re.selectedValue,Te=Re.selectRows,Me=function(){Ne!=null&&Te&&Ce===k.Body&&Y&&Ne({selectedValue:Y})},Ee=Te&&typeof Y!="undefined"&&JSON.stringify(Y)===JSON.stringify(Ue);return(0,A.jsx)("tr",Object.assign({tabIndex:Ce===k.Body?-1:0},le,{className:u()(I().TableRow,(G={},G[I()["table-row--selected"]]=Ee,G[I()["table-row--body"]]=Ce===k.Body&&Te&&!Ee,G),ee),onClick:Me,children:se}))}Q.displayName="TableRow";try{Q.displayName="TableRow",Q.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:Q.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(P){}var K=e("./src/components/Table/TableCell.module.css"),N=e.n(K),ce;function _e(){return _e=Object.assign?Object.assign.bind():function(P){for(var G=1;G<arguments.length;G++){var se=arguments[G];for(var Y in se)Object.prototype.hasOwnProperty.call(se,Y)&&(P[Y]=se[Y])}return P},_e.apply(this,arguments)}var ve=function(G){return m.createElement("svg",_e({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},G),ce||(ce=m.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},he=["children","variant","onChange","sortDirection","className","radiobutton"];function H(P,G){if(P==null)return{};var se=de(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function de(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}function re(P){var G,se=P.children,Y=P.variant,ee=P.onChange,le=P.sortDirection,pe=le===void 0?x.NotSortable:le,Ce=P.className,Re=P.radiobutton,Ne=Re===void 0?!1:Re,Ue=H(P,he),Te=F(),Me=Te.variantStandard,Ee=function(Ye){return Y===void 0?Me===Ye:Y===Ye},we=function(){ee!=null&&pe!=null&&pe!=x.NotSortable&&ee({next:pe===x.Descending?x.Ascending:x.Descending,previous:pe})};return(0,A.jsxs)(A.Fragment,{children:[Ee(k.Header)&&(0,A.jsx)("th",Object.assign({},Ue,{className:Ne?u()(N()["header-table-cell-radiobutton"],Ce):u()(N()["header-table-cell"],Ce),"aria-sort":pe===x.Ascending?"ascending":pe===x.Descending?"descending":"none",children:(0,A.jsxs)("div",{className:pe!=x.NotSortable?u()(N()["container-sortable"]):u()(N().container),onClick:function(){return we()},onKeyUp:function(Ye){(Ye.key==="Enter"||Ye.key===" ")&&we()},role:pe!=x.NotSortable?"button":void 0,tabIndex:pe!=x.NotSortable?0:void 0,children:[(0,A.jsx)("div",{className:u()(N().input),children:se}),pe!=x.NotSortable&&(0,A.jsx)(ve,{"aria-label":"Sortering","data-testid":"sort-icon",className:u()(N().icon,(G={},G[N()["icon-asc"]]=pe===x.Ascending,G[N()["icon-desc"]]=pe===x.Descending,G))})]})})),Ee(k.Body)&&(0,A.jsx)("td",Object.assign({},Ue,{className:Ne?u()(N()["body-table-cell-radiobutton"],Ce):u()(N()["body-table-cell"],Ce),style:{padding:"0px"},children:(0,A.jsxs)("div",{className:Ne?u()(N()["radio-button"]):u()(N().input),children:[" ",se]})})),Ee(k.Footer)&&(0,A.jsx)("td",Object.assign({},Ue,{className:u()(Ce),children:(0,A.jsx)("div",{className:u()(N().input),children:se})}))]})}try{re.displayName="TableCell",re.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirection:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:re.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(P){}var ye=e("./src/components/Table/TableBody.module.css"),be=e.n(ye),fe=["children","className"];function je(P,G){if(P==null)return{};var se=Oe(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function Oe(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}var me=function(G){var se=G.children,Y=G.className,ee=je(G,fe),le=k.Body;return(0,A.jsx)(R.Provider,{value:{variantStandard:le},children:(0,A.jsx)("tbody",Object.assign({},ee,{className:u()(be().TableBody,Y),children:se}))})};me.displayName="TableBody";try{me.displayName="TableBody",me.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:me.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(P){}var ke=e("./src/components/Table/TableFooter.module.css"),Pe=e.n(ke),Ke=["children","className"];function De(P,G){if(P==null)return{};var se=We(P,G),Y,ee;if(Object.getOwnPropertySymbols){var le=Object.getOwnPropertySymbols(P);for(ee=0;ee<le.length;ee++)Y=le[ee],!(G.indexOf(Y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,Y)||(se[Y]=P[Y]))}return se}function We(P,G){if(P==null)return{};var se={},Y=Object.keys(P),ee,le;for(le=0;le<Y.length;le++)ee=Y[le],!(G.indexOf(ee)>=0)&&(se[ee]=P[ee]);return se}var Ae=function(G){var se=G.children,Y=G.className,ee=De(G,Ke),le=k.Footer;return(0,A.jsx)(R.Provider,{value:{variantStandard:le},children:(0,A.jsx)("tfoot",Object.assign({},ee,{className:u()(Pe()["table-footer"],Y),children:se}))})};Ae.displayName="TableFooter";try{Ae.displayName="TableFooter",Ae.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Ae.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(P){}function Fe(P){var G=P.config,se=(0,D.a)("(max-width: "+j.T.BreakpointsSm+")");return se?(0,A.jsx)(Ge,{config:G}):(0,A.jsx)(Ze,{config:G})}function Ge(P){var G=P.config,se=G.rows,Y=G.headers,ee=G.showColumnsMobile,le=G.renderCell,pe=G.rowSelection,Ce=G.footer,Re=JSON.stringify((pe==null?void 0:pe.selectedValue)||null),Ne=Object.keys(Y),Ue=pe?2:1;return(0,A.jsxs)(q,{selectRows:!!pe,onChange:function(Me){var Ee=Me.selectedValue;return pe==null?void 0:pe.onSelectionChange(Ee)},selectedValue:pe==null?void 0:pe.selectedValue,children:[(0,A.jsx)(me,{children:se.map(function(Te){var Me=JSON.stringify(Te);return(0,A.jsxs)(Q,{rowData:Te,children:[pe&&(0,A.jsx)(re,{radiobutton:!0,children:(0,A.jsx)(p.E,{name:Me,onChange:function(){return pe.onSelectionChange(Te)},value:Me,checked:Me===Re,label:Me,hideLabel:!0})}),(0,A.jsx)(re,{children:Ne.map(function(Ee){if(!(ee&&!ee.includes(Ee))){var we=le&&le[Ee],ze=we?we(Te[Ee]):Te[Ee];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:N().header,children:Y[Ee]}),(0,A.jsx)("div",{className:N().property,children:ze})]})}})},Me+"-data")]},Me)})}),Ce&&(0,A.jsx)(Ae,{children:(0,A.jsx)(Q,{children:(0,A.jsx)(re,{colSpan:Ue,children:Ce})})})]})}Ge.displayName="MobileTable";function Ze(P){var G=P.config,se=G.rows,Y=G.headers,ee=G.renderCell,le=G.columnSort,pe=G.rowSelection,Ce=G.footer,Re=JSON.stringify((pe==null?void 0:pe.selectedValue)||null),Ne=Object.keys(Y),Ue=pe?Object.keys(Y).length+1:Object.keys(Y).length;return(0,A.jsxs)(q,{selectRows:!!pe,onChange:function(Me){var Ee=Me.selectedValue;return pe==null?void 0:pe.onSelectionChange(Ee)},selectedValue:pe==null?void 0:pe.selectedValue,children:[(0,A.jsx)(l,{children:(0,A.jsxs)(Q,{children:[pe&&(0,A.jsx)(re,{radiobutton:!0}),Ne.map(function(Te){return(0,A.jsx)(re,{onChange:function(Ee){var we=Ee.next,ze=Ee.previous;le&&le.onSortChange({column:Te,next:we,previous:ze})},sortDirection:le?le.currentlySortedColumn===Te?le.currentDirection:le.sortable.includes(Te)?x.NotActive:x.NotSortable:x.NotSortable,children:Y[Te]},Te)})]})}),(0,A.jsx)(me,{children:se.map(function(Te){var Me=JSON.stringify(Te);return(0,A.jsxs)(Q,{rowData:Te,children:[pe&&(0,A.jsx)(re,{radiobutton:!0,children:(0,A.jsx)(p.E,{name:Me,onChange:function(){return pe.onSelectionChange(Te)},value:Me,checked:Me===Re,label:Me,hideLabel:!0})}),Ne.map(function(Ee){var we=ee&&ee[Ee];return(0,A.jsx)(re,{children:we?we(Te[Ee]):Te[Ee]},Me+"-"+Ee)})]},Me)})}),Ce&&(0,A.jsx)(Ae,{children:(0,A.jsx)(Q,{children:(0,A.jsx)(re,{colSpan:Ue,children:Ce})})})]})}Ze.displayName="LaptopTable";try{Fe.displayName="ResponsiveTable",Fe.__docgenInfo={description:"",displayName:"ResponsiveTable",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"ResponsiveTableConfig<T>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/ResponsiveTable.tsx#ResponsiveTable"]={docgenInfo:Fe.__docgenInfo,name:"ResponsiveTable",path:"src/components/Table/ResponsiveTable.tsx#ResponsiveTable"})}catch(P){}var Xe=e("./src/components/Pagination/Pagination.stories.tsx"),eo=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),qe=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.sort.js"),oo=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.reverse.js"),yo=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function uo(P){var G=P.page,se=P.rowsPerPage,Y=P.sortColumn,ee=P.sortDirection,le=[].concat(yo);return Y&&(le.sort(function(pe,Ce){return pe[Y]===Ce[Y]?0:pe[Y]>Ce[Y]?1:-1}),ee===x.Descending&&le.reverse()),{totalNum:le.length,rows:le.slice(G*se,G*se+se)}}var mo=e("./src/components/Pagination/Pagination.tsx"),_o=e("./src/components/Table/Table.stories.module.css"),no=e.n(_o);function Ve(P,G){return $e(P)||Be(P,G)||xe(P,G)||fo()}function fo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(P,G){if(!!P){if(typeof P=="string")return Se(P,G);var se=Object.prototype.toString.call(P).slice(8,-1);if(se==="Object"&&P.constructor&&(se=P.constructor.name),se==="Map"||se==="Set")return Array.from(P);if(se==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se))return Se(P,G)}}function Se(P,G){(G==null||G>P.length)&&(G=P.length);for(var se=0,Y=new Array(G);se<G;se++)Y[se]=P[se];return Y}function Be(P,G){var se=P==null?null:typeof Symbol!="undefined"&&P[Symbol.iterator]||P["@@iterator"];if(se!=null){var Y=[],ee=!0,le=!1,pe,Ce;try{for(se=se.call(P);!(ee=(pe=se.next()).done)&&(Y.push(pe.value),!(G&&Y.length===G));ee=!0);}catch(Re){le=!0,Ce=Re}finally{try{!ee&&se.return!=null&&se.return()}finally{if(le)throw Ce}}return Y}}function $e(P){if(Array.isArray(P))return P}var He=`import React, { useState } from 'react';
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
`,Qe={BasicTable:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},SelectRows:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},Responsive:{startLoc:{col:67,line:162},endLoc:{col:1,line:230},startBody:{col:67,line:162},endBody:{col:1,line:230}}},to="";const vo={title:"Components/Table",component:q,parameters:{design:(0,O.vc)([{type:"figma",url:to},{type:"link",url:to}]),docs:{page:function(){return(0,A.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var bo=function(G){var se=(0,m.useState)(void 0),Y=Ve(se,2),ee=Y[0],le=Y[1],pe=(0,m.useState)(void 0),Ce=Ve(pe,2),Re=Ce[0],Ne=Ce[1],Ue=(0,m.useState)(x.NotActive),Te=Ve(Ue,2),Me=Te[0],Ee=Te[1],we=(0,m.useState)(5),ze=Ve(we,2),Ye=ze[0],ho=ze[1],po=(0,m.useState)(0),lo=Ve(po,2),io=lo[0],co=lo[1],go=uo({page:io,rowsPerPage:Ye,sortColumn:Re,sortDirection:Me}),jo=go.rows,xo=go.totalNum;return(0,A.jsxs)(q,{selectRows:G.selectRows,onChange:function(Ie){var Je=Ie.selectedValue;return le(Je)},selectedValue:ee,children:[(0,A.jsx)(l,{children:(0,A.jsxs)(Q,{children:[G.selectRows&&(0,A.jsx)(re,{radiobutton:!0}),(0,A.jsx)(re,{onChange:function(Ie){var Je=Ie.next;Ne("caseNum"),Ee(Je)},sortDirection:Re==="caseNum"?Me:x.NotActive,children:"S\xF8knadsnr."}),(0,A.jsx)(re,{onChange:function(Ie){var Je=Ie.next;Ne("product"),Ee(Je)},sortDirection:Re==="product"?Me:x.NotActive,children:"Produkt"}),(0,A.jsx)(re,{children:"Status"}),(0,A.jsx)(re,{children:"Bilde"})]})}),(0,A.jsx)(me,{children:jo.map(function(Le){return(0,A.jsxs)(Q,{rowData:{caseNum:Le.caseNum},children:[G.selectRows&&(0,A.jsx)(re,{radiobutton:!0,children:(0,A.jsx)(p.E,{name:""+Le.caseNum,onChange:function(){return le(Le)},value:""+Le.caseNum,checked:(ee==null?void 0:ee.caseNum)===Le.caseNum,label:""+Le.caseNum,hideLabel:!0})}),(0,A.jsx)(re,{children:Le.caseNum}),(0,A.jsx)(re,{children:Le.product}),(0,A.jsx)(re,{children:Le.status}),(0,A.jsx)(re,{children:(0,A.jsx)("img",{className:u()(no().checkmark),src:Le.image.src,alt:Le.image.alt})})]},Le.caseNum)})}),(0,A.jsx)(Ae,{children:(0,A.jsx)(Q,{children:(0,A.jsx)(re,{colSpan:5,children:(0,A.jsx)(mo.t,{numberOfRows:xo,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ye,onRowsPerPageChange:function(Ie){ho(parseInt(Ie.target.value,10)),co(0)},currentPage:io,setCurrentPage:function(Ie){return co(Ie)},descriptionTexts:Xe.descriptionTexts})})})})]})};bo.displayName="Template";var So=function(){var G=(0,m.useState)(void 0),se=Ve(G,2),Y=se[0],ee=se[1],le=(0,m.useState)(void 0),pe=Ve(le,2),Ce=pe[0],Re=pe[1],Ne=(0,m.useState)(x.NotActive),Ue=Ve(Ne,2),Te=Ue[0],Me=Ue[1],Ee=(0,m.useState)(5),we=Ve(Ee,2),ze=we[0],Ye=we[1],ho=(0,m.useState)(0),po=Ve(ho,2),lo=po[0],io=po[1],co=uo({rowsPerPage:ze,page:lo,sortColumn:Ce,sortDirection:Te}),go=co.rows,jo=co.totalNum,xo={rows:go,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:function(Ie){var Je=Ie.column,To=Ie.next;Re(Je),Me(To)},sortable:["caseNum","product"],currentlySortedColumn:Ce,currentDirection:Te},renderCell:{image:function(Ie){return(0,A.jsx)("img",{className:u()(no().checkmark),src:Ie.src,alt:Ie.alt})}},rowSelection:{onSelectionChange:function(Ie){return ee(Ie)},selectedValue:Y},footer:(0,A.jsx)(mo.t,{numberOfRows:jo,rowsPerPageOptions:[5,10,15,20],rowsPerPage:ze,onRowsPerPageChange:function(Ie){Ye(parseInt(Ie.target.value,10)),io(0)},currentPage:lo,setCurrentPage:function(Ie){return io(Ie)},descriptionTexts:Xe.descriptionTexts})};return(0,A.jsx)(Fe,{config:xo})};So.displayName="ResponsiveTemplate";var so=bo.bind({});so.args={selectRows:!1},so.parameters={docs:{description:{story:""}}};var ro=bo.bind({});ro.args={selectRows:!0},ro.parameters={docs:{description:{story:""}}};var ao=So.bind({});ao.args={},ao.parameters={docs:{description:{story:""}}},so.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},so.parameters),ro.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ro.parameters),ao.parameters=Object.assign({storySource:{source:`() => {
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
}`}},ao.parameters);var Oo=["BasicTable","SelectRows","Responsive"]},"./src/components/Tabs/Tabs.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>$,__namedExportsOrder:()=>f,default:()=>q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),D=e("./src/utils/arrayUtils.ts"),j=e("./src/hooks/index.ts"),p=e("./src/components/Tabs/Tabs.module.css"),k=e.n(p),x=e("./node_modules/react/jsx-runtime.js");function W(v,d){return te(v)||ae(v,d)||R(v,d)||X()}function X(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(v,d){if(!!v){if(typeof v=="string")return F(v,d);var l=Object.prototype.toString.call(v).slice(8,-1);if(l==="Object"&&v.constructor&&(l=v.constructor.name),l==="Map"||l==="Set")return Array.from(v);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return F(v,d)}}function F(v,d){(d==null||d>v.length)&&(d=v.length);for(var l=0,M=new Array(d);l<d;l++)M[l]=v[l];return M}function ae(v,d){var l=v==null?null:typeof Symbol!="undefined"&&v[Symbol.iterator]||v["@@iterator"];if(l!=null){var M=[],I=!0,Z=!1,J,ne;try{for(l=l.call(v);!(I=(J=l.next()).done)&&(M.push(J.value),!(d&&M.length===d));I=!0);}catch(Q){Z=!0,ne=Q}finally{try{!I&&l.return!=null&&l.return()}finally{if(Z)throw ne}}return M}}function te(v){if(Array.isArray(v))return v}var oe=function(d){return d.replace(/\s/,"_")},A=function(d){var l=d.activeTab,M=d.items,I=d.onChange,Z=(0,n.useId)(),J=M.map(function(me){var ke=me.name,Pe=me.content,Ke=me.value,De=me.tabId,We=me.panelId,Ae=Ke!=null?Ke:ke,Fe=De!=null?De:Z+oe(Ae)+"-tab",Ge=We!=null?We:Z+oe(Ae)+"-panel";return{name:ke,content:Pe,value:Ae,tabId:Fe,panelId:Ge}});if(!(0,D.zb)(J.map(function(me){var ke=me.value;return ke})))throw Error("Each tab value must be unique.");if(l!==void 0&&!J.some(function(me){return me.value===l}))throw Error("The given active tab value must exist in the list of items.");var ne=function(ke){return J.findIndex(function(Pe){return Pe.value===ke})},Q=l!=null?l:J[0].value,K=(0,n.useState)(Q),N=W(K,2),ce=N[0],_e=N[1],ve=(0,n.useState)(ne(Q)),he=W(ve,2),H=he[0],de=he[1];(0,n.useEffect)(function(){return _e(Q)},[Q]);var re=(0,n.useRef)(null),ye=J.length-1;(0,j.PQ)(function(){var me;(me=re.current)===null||me===void 0||me.querySelectorAll('[role="tab"]')[H].focus()},[H]);var be=function(ke){ce!==ke&&I&&I(ke),_e(ke),de(ne(ke))},fe=function(){return H!==void 0&&de(H===ye?0:H+1)},je=function(){return H!==void 0&&de(H===0?ye:H-1)},Oe=function(ke){return function(Pe){switch(Pe.key){case"ArrowRight":fe();break;case"ArrowLeft":je();break;case"Space":be(ke)}}};return(0,x.jsxs)("div",{className:k().tabs,children:[(0,x.jsx)("div",{className:k().tabs__tablist,ref:re,role:"tablist",children:J.map(function(me,ke){var Pe=me.value===ce,Ke=T()(k().tabs__tablist__tab,Pe&&k()["tabs__tablist__tab--selected"]);return(0,x.jsx)("button",{"aria-controls":me.panelId,"aria-selected":Pe,className:Ke,id:me.tabId,onClick:function(){return be(me.value)},onKeyDown:Oe(me.value),role:"tab",tabIndex:H===ke?0:-1,children:me.name},me.value)})}),(0,x.jsx)("hr",{className:k().tabs__divider}),J.map(function(me){return(0,x.jsx)("div",{className:k().tabs__tabpanel,"aria-labelledby":me.tabId,hidden:me.value!==ce,id:me.panelId,role:"tabpanel",children:me.content},me.panelId)})]})};A.displayName="Tabs";try{A.displayName="Tabs",A.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:A.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(v){}var ue=`import React from 'react';
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
`,ge={Example:{startLoc:{col:46,line:123},endLoc:{col:74,line:123},startBody:{col:46,line:123},endBody:{col:74,line:123}}},ie="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const q={title:"Components/Tabs",component:A,parameters:{design:(0,i.vc)([{type:"figma",url:ie},{type:"link",url:ie}]),docs:{page:function(){return(0,x.jsx)(a.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.",deprecationWarning:"Use Tabs from @digdir/design-system-react instead."})}}},args:{items:[{name:"Ild",content:(0,x.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,x.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,x.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,x.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var w=function(d){return(0,x.jsx)(A,Object.assign({},d))};w.displayName="Template";var $=w.bind({});$.args={},$.parameters={docs:{description:{story:"This is how the component might look like."}}},$.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},$.parameters);var f=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>D,Disabled:()=>x,Error:()=>j,ReadOnlyConfirm:()=>k,ReadOnlyInfo:()=>p,__namedExportsOrder:()=>W,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/classnames/index.js"),L=e.n(U),E=e("./src/components/TextArea/TextArea.module.css"),B=e.n(E),g=e("./node_modules/react/jsx-runtime.js"),h=["isValid","disabled","readOnly","resize","label"];function m(X,R){if(X==null)return{};var F=O(X,R),ae,te;if(Object.getOwnPropertySymbols){var oe=Object.getOwnPropertySymbols(X);for(te=0;te<oe.length;te++)ae=oe[te],!(R.indexOf(ae)>=0)&&(!Object.prototype.propertyIsEnumerable.call(X,ae)||(F[ae]=X[ae]))}return F}function O(X,R){if(X==null)return{};var F={},ae=Object.keys(X),te,oe;for(oe=0;oe<ae.length;oe++)te=ae[oe],!(R.indexOf(te)>=0)&&(F[te]=X[te]);return F}var C=function(R){var F=R.isValid,ae=F===void 0?!0:F,te=R.disabled,oe=te===void 0?!1:te,A=R.readOnly,ue=A===void 0?!1:A,ge=R.resize,ie=ge===void 0?"none":ge,q=R.label,w=m(R,h);return(0,g.jsx)(y.SP,{isValid:ae,disabled:oe,readOnly:ue,label:q,inputId:w.id,inputRenderer:function(f){var v=f.className,d=f.inputId;return(0,g.jsx)("textarea",Object.assign({},w,{id:d,disabled:oe,readOnly:Boolean(ue),className:L()(v,B().TextArea,B()["TextArea--resize-"+ie])}))}})};C.displayName="TextArea";try{C.displayName="TextArea",C.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:C.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(X){}var u=`import React from 'react';
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
`,c={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},_="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const S={title:"Components/TextArea",component:C,parameters:{design:(0,i.vc)([{type:"figma",url:_},{type:"link",url:_}]),docs:{page:function(){return(0,g.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var T=function(R){return(0,g.jsx)(C,Object.assign({},R))};T.displayName="Template";var D=T.bind({});D.args={},D.parameters={docs:{description:{story:"Regular textarea."}}};var j=T.bind({});j.args={isValid:!1},j.parameters={docs:{description:{story:"Textarea displaying error."}}};var p=T.bind({});p.args={readOnly:!0,value:"Some text"},p.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var k=T.bind({});k.args={readOnly:y.Hx.ReadOnlyConfirm,value:"Some text"},k.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var x=T.bind({});x.args={disabled:!0,value:"Some text"},x.parameters={docs:{description:{story:"Textarea as disabled."}}},D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},D.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},j.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},p.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},k.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},x.parameters);var W=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Default:()=>F,Disabled:()=>ue,Error:()=>te,NumberInput:()=>ae,ReadOnlyConfirm:()=>A,ReadOnlyInfo:()=>oe,__namedExportsOrder:()=>ge,default:()=>X});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),a=e("./.storybook/StoryPage.tsx"),y=e("./src/components/_InputWrapper/index.ts"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),g=e("./node_modules/classnames/index.js"),h=e.n(g),m=e("./node_modules/react-number-format/dist/react-number-format.es.js"),O=function(q){return q.format!==void 0},C=function(q){return q.format===void 0},u=function(q,w){return w&&C(w)?numericFormatter(q,w):w&&O(w)?patternFormatter(q,w):q},c=e("./node_modules/react/jsx-runtime.js"),_=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function S(ie,q){if(ie==null)return{};var w=T(ie,q),$,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(ie);for(f=0;f<v.length;f++)$=v[f],!(q.indexOf($)>=0)&&(!Object.prototype.propertyIsEnumerable.call(ie,$)||(w[$]=ie[$]))}return w}function T(ie,q){if(ie==null)return{};var w={},$=Object.keys(ie),f,v;for(v=0;v<$.length;v++)f=$[v],!(q.indexOf(f)>=0)&&(w[f]=ie[f]);return w}var D=function(q){var w=q.values,$=q.sourceInfo;$.event.target.value=w.value.trim()},j=function(q,w,$){var f=q.target,v=q.key,d=f.selectionStart,l=f.selectionEnd,M=f.value,I=M===void 0?"":M;if(d!==null&&l!==null){var Z=I[0]==="-",J=(w==null?void 0:w.length)||0+(Z?1:0),ne=($==null?void 0:$.length)||0;Z&&l<=J&&v==="Backspace"?f.setSelectionRange(1,1):f.setSelectionRange(Math.min(Math.max(d,J),I.length-ne),Math.max(Math.min(l,I.length-ne),J))}},p=function(q){var w=q.id,$=q.onChange,f=q.isValid,v=f===void 0?!0:f,d=q.disabled,l=d===void 0?!1:d,M=q.readOnly,I=M===void 0?!1:M,Z=q.required,J=Z===void 0?!1:Z,ne=q.formatting,Q=q.label,K=S(q,_),N=function(_e,ve){ve.source==="event"&&$&&(D({values:_e,sourceInfo:ve}),$(ve.event))};return(0,c.jsx)(y.SP,{isValid:v,disabled:l,readOnly:I,label:Q,inputId:w,inputRenderer:function(_e){var ve=_e.className,he=_e.variant,H=_e.inputId,de={id:H,readOnly:Boolean(I),disabled:l,required:J,className:h()(ve,K.className),style:Object.assign({textAlign:ne==null?void 0:ne.align},K.style)};return ne!=null&&ne.number&&C(ne.number)?(ne.number.prefix&&ne.number.prefix[0]==="-"&&(ne.number.prefix=" "+ne.number.prefix),(0,c.jsx)(m.h3,Object.assign({},de,ne.number,K,{"data-testid":H+"-formatted-number-"+he,onValueChange:N,valueIsNumericString:!0,onKeyDown:function(ye){return j(ye,ne.number.prefix,ne.number.suffix)}}))):ne!=null&&ne.number&&O(ne.number)?(0,c.jsx)(m.HH,Object.assign({},de,ne.number,K,{"data-testid":H+"-formatted-number-"+he,onValueChange:N,valueIsNumericString:!0})):(0,c.jsx)("input",Object.assign({},de,K,{"data-testid":H+"-"+he,onChange:$}))}})};p.displayName="TextField";try{p.displayName="TextField",p.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:p.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(ie){}var k=`import React from 'react';
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
`,x={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},W="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const X={title:"Components/TextField",component:p,parameters:{design:(0,i.vc)([{type:"figma",url:W},{type:"link",url:W}]),docs:{page:function(){return(0,c.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var R=function(q){return(0,c.jsx)(p,Object.assign({},q))};R.displayName="Template";var F=R.bind({});F.args={},F.parameters={docs:{description:{story:"Regular input field."}}};var ae=R.bind({});ae.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},ae.parameters={docs:{description:{story:"Number input field."}}};var te=R.bind({});te.args={isValid:!1},te.parameters={docs:{description:{story:"Input field displaying error."}}};var oe=R.bind({});oe.args={readOnly:!0,value:"Some text"},oe.parameters={docs:{description:{story:"Input field as readonly-info."}}};var A=R.bind({});A.args={readOnly:y.Hx.ReadOnlyConfirm,value:"Some text"},A.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var ue=R.bind({});ue.args={disabled:!0,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as disabled."}}},F.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},F.parameters),ae.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ae.parameters),te.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},te.parameters),oe.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},oe.parameters),A.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},A.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters);var ge=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(r,t,e)=>{"use strict";e.r(t),e.d(t,{Example:()=>w,__namedExportsOrder:()=>$,default:()=>ie});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),h=e("./node_modules/storybook-addon-designs/esm/index.js"),m=e("./.storybook/StoryPage.tsx"),O=e("./node_modules/classnames/index.js"),C=e.n(O),u=(0,g.createContext)(void 0),c=function(){var v=(0,g.useContext)(u);if(v===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return v},_=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),S=e.n(_),T=e("./node_modules/react/jsx-runtime.js"),D=function(v){var d=v.children,l=v.onChange,M=v.selectedValue,I=function(J){var ne=J.selectedValue;l({selectedValue:ne})};return(0,T.jsx)(u.Provider,{value:{onChange:I,selectedValue:M},children:(0,T.jsx)("div",{className:C()(S()["toggle-button-group"]),"data-testid":"toggle-button-group",children:d})})};D.displayName="ToggleButtonGroup";try{D.displayName="ToggleButtonGroup",D.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:D.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(f){}var j=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),p=e.n(j),k=function(v){var d,l=v.children,M=v.value,I=c(),Z=I.onChange,J=I.selectedValue,ne=function(){Z({selectedValue:M})};return(0,T.jsx)("button",{"data-testid":"toggle-button",className:C()(p()["toggle-button"],(d={},d[p()["toggle-button--selected"]]=M===J,d)),onClick:ne,type:"button","aria-pressed":M==J,children:l})};k.displayName="ToggleButton";try{k.displayName="ToggleButton",k.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:k.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(f){}var x=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),W=e.n(x);function X(f,v){return oe(f)||te(f,v)||F(f,v)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F(f,v){if(!!f){if(typeof f=="string")return ae(f,v);var d=Object.prototype.toString.call(f).slice(8,-1);if(d==="Object"&&f.constructor&&(d=f.constructor.name),d==="Map"||d==="Set")return Array.from(f);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ae(f,v)}}function ae(f,v){(v==null||v>f.length)&&(v=f.length);for(var d=0,l=new Array(v);d<v;d++)l[d]=f[d];return l}function te(f,v){var d=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(d!=null){var l=[],M=!0,I=!1,Z,J;try{for(d=d.call(f);!(M=(Z=d.next()).done)&&(l.push(Z.value),!(v&&l.length===v));M=!0);}catch(ne){I=!0,J=ne}finally{try{!M&&d.return!=null&&d.return()}finally{if(I)throw J}}return l}}function oe(f){if(Array.isArray(f))return f}var A=`import React, { useState } from 'react';
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
`,ue={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},ge="";const ie={title:"Components/Toggle button group",component:D,parameters:{design:(0,h.vc)([{type:"figma",url:ge},{type:"link",url:ge}]),docs:{page:function(){return(0,T.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var q=function(){var v=(0,g.useState)("left"),d=X(v,2),l=d[0],M=d[1],I=function(J){var ne=J.selectedValue;M(ne)};return(0,T.jsx)("div",{className:W().container,children:(0,T.jsxs)(D,{onChange:I,selectedValue:l,children:[(0,T.jsx)(k,{value:"left",children:"Aktivt valg"}),(0,T.jsx)(k,{value:"right",children:"Mulig valg"})]})})};q.displayName="Template";var w=q.bind({});w.args={},w.argTypes={onChange:{control:!1},selectedValue:{control:!1}},w.parameters={docs:{description:{}}},w.parameters=Object.assign({storySource:{source:`() => {
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
}`}},w.parameters);var $=["Example"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>m});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),z=e.n(V),b=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),U=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),L=1.6,E=/(\d*\.?\d+)rem(?=\W|$)/gim,B=function(u){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,_=Math.pow(10,c);return Math.round((u+Number.EPSILON)*_)/_},g=function(u){return typeof u=="string"?u.replace(E,function(c,_){var S=B(_*L);return S+"rem"}):u},h={get:function(u,c){if(c in u){var _=u[c];return typeof _=="object"?new Proxy(_,h):g(_)}}},m=new Proxy(b,h),O=new Proxy(U,h)},"./src/components/Button/index.ts":(r,t,e)=>{"use strict";e.d(t,{zx:()=>u,rp:()=>m,qE:()=>h,Wu:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),V=e.n(y),z=e("./src/components/SvgIcon/index.ts"),b=e("./src/components/Button/Button.module.css"),U=e.n(b),L=e("./node_modules/react/jsx-runtime.js"),E=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function B(c,_){if(c==null)return{};var S=g(c,_),T,D;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(c);for(D=0;D<j.length;D++)T=j[D],!(_.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,T)||(S[T]=c[T]))}return S}function g(c,_){if(c==null)return{};var S={},T=Object.keys(c),D,j;for(j=0;j<T.length;j++)D=T[j],!(_.indexOf(D)>=0)&&(S[D]=c[D]);return S}var h;(function(c){c.Small="small",c.Medium="medium",c.Large="large"})(h||(h={}));var m;(function(c){c.Primary="primary",c.Secondary="secondary",c.Success="success",c.Danger="danger",c.Inverted="inverted"})(m||(m={}));var O;(function(c){c.Filled="filled",c.Outline="outline",c.Quiet="quiet"})(O||(O={}));var C=function(_,S){var T,D,j,p=_.children,k=_.color,x=k===void 0?m.Primary:k,W=_.variant,X=W===void 0?O.Filled:W,R=_.size,F=R===void 0?h.Small:R,ae=_.fullWidth,te=ae===void 0?!1:ae,oe=_.dashedBorder,A=oe===void 0?!1:oe,ue=_.iconPlacement,ge=ue===void 0?"left":ue,ie=_.icon,q=_.type,w=q===void 0?"button":q,$=_.className,f=B(_,E);return(0,L.jsxs)("button",Object.assign({},f,{ref:S,className:V()(U().button,U()["button--"+F],U()["button--"+X],U()["button--"+x],U()["button--"+X+"--"+x],(T={},T[U()["button--full-width"]]=te,T),(D={},D[U()["button--dashed-border"]]=A,D),(j={},j[U()["button--only-icon"]]=!p&&ie,j),$),type:w,children:[ie&&ge==="left"&&(0,L.jsx)(z.l,{svgIconComponent:ie,className:U().icon}),p,ie&&ge==="right"&&(0,L.jsx)(z.l,{svgIconComponent:ie,className:U().icon})]}))};C.displayName="Button";const u=(0,a.forwardRef)(C)},"./src/components/Checkbox/Checkbox.tsx":(r,t,e)=>{"use strict";e.d(t,{X:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),b=e.n(z),U=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),L=e("./src/components/Checkbox/Checkbox.module.css"),E=e.n(L),B=e("./node_modules/react/jsx-runtime.js"),g=function(m){var O=m.checkboxId,C=m.checked,u=m.compact,c=m.description,_=m.disabled,S=m.error,T=m.hideLabel,D=m.label,j=m.name,p=m.onChange,k=m.presentation,x=m.readOnly;return(0,B.jsx)(U.f,{checked:C,className:b()(E().checkbox,C&&E()["checkbox--checked"],S&&E()["checkbox--error"],_&&E()["checkbox--disabled"],u&&E()["checkbox--compact"],x&&E()["checkbox--read-only"]),description:c,disabled:_,hideInput:x,hideLabel:T,inputId:O,label:D,name:j,onChange:p,presentation:k,size:u?U.b.Xsmall:U.b.Small,type:"checkbox",children:(0,B.jsx)("span",{className:E()["visible-box"],children:(0,B.jsx)("span",{className:E()["visible-box__checkmark"]})})})};g.displayName="Checkbox";try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:g.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(h){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(r,t,e)=>{"use strict";e.d(t,{B:()=>V});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/ErrorMessage/ErrorMessage.module.css"),a=e.n(i),y=e("./node_modules/react/jsx-runtime.js"),V=function(b){var U=b.id,L=b.children,E=b.ariaLabel;return(0,y.jsx)("div",{"data-testid":"ErrorMessage","aria-label":E,id:U,role:"alertdialog",className:n()(a()["error-message-wrapper"]),children:L})};V.displayName="ErrorMessage";try{V.displayName="ErrorMessage",V.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:V.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(z){}},"./src/components/FieldSet/FieldSet.tsx":(r,t,e)=>{"use strict";e.d(t,{C:()=>L,w:()=>U});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),a=e.n(i),y=e("./src/components/ErrorMessage/ErrorMessage.tsx"),V=e("./src/components/FieldSet/FieldSet.module.css"),z=e.n(V),b=e("./node_modules/react/jsx-runtime.js"),U;(function(E){E.Xsmall="xsmall",E.Small="small"})(U||(U={}));var L=function(B){var g=B.children,h=B.className,m=B.description,O=B.disabled,C=B.error,u=B.legend,c=B.size,_=c===void 0?U.Small:c;return(0,b.jsxs)("fieldset",{className:a()(z()["field-set"],z()["field-set--"+_],h),disabled:O,children:[u&&(0,b.jsx)("legend",{className:z()["field-set__legend"],children:u}),m&&(0,b.jsx)("p",{className:z()["field-set__description"],children:m}),(0,b.jsx)("div",{className:z()["field-set__content"],children:g}),C&&(0,b.jsx)("div",{className:z()["field-set__error-message"],children:(0,b.jsx)(y.B,{children:C})})]})};L.displayName="FieldSet";try{L.displayName="FieldSet",L.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:L.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(E){}},"./src/components/FieldSet/index.ts":(r,t,e)=>{"use strict";e.d(t,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(r,t,e)=>{"use strict";e.d(t,{t:()=>$});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),B=e("./node_modules/react/index.js"),g=e("./node_modules/classnames/index.js"),h=e.n(g),m=e("./src/hooks/useMediaQuery.ts"),O=e("./src/DesignTokens/index.ts"),C=e("./src/components/Pagination/Pagination.module.css"),u=e.n(C),c,_;function S(){return S=Object.assign?Object.assign.bind():function(f){for(var v=1;v<arguments.length;v++){var d=arguments[v];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(f[l]=d[l])}return f},S.apply(this,arguments)}var T=function(v){return B.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},v),c||(c=B.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),_||(_=B.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},D,j;function p(){return p=Object.assign?Object.assign.bind():function(f){for(var v=1;v<arguments.length;v++){var d=arguments[v];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(f[l]=d[l])}return f},p.apply(this,arguments)}var k=function(v){return B.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},v),D||(D=B.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),j||(j=B.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},x;function W(){return W=Object.assign?Object.assign.bind():function(f){for(var v=1;v<arguments.length;v++){var d=arguments[v];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(f[l]=d[l])}return f},W.apply(this,arguments)}var X=function(v){return B.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},v),x||(x=B.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},R,F;function ae(){return ae=Object.assign?Object.assign.bind():function(f){for(var v=1;v<arguments.length;v++){var d=arguments[v];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(f[l]=d[l])}return f},ae.apply(this,arguments)}var te=function(v){return B.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},v),R||(R=B.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),F||(F=B.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},oe=e("./node_modules/react/jsx-runtime.js");function A(f,v){return w(f)||q(f,v)||ge(f,v)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(f,v){if(!!f){if(typeof f=="string")return ie(f,v);var d=Object.prototype.toString.call(f).slice(8,-1);if(d==="Object"&&f.constructor&&(d=f.constructor.name),d==="Map"||d==="Set")return Array.from(f);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return ie(f,v)}}function ie(f,v){(v==null||v>f.length)&&(v=f.length);for(var d=0,l=new Array(v);d<v;d++)l[d]=f[d];return l}function q(f,v){var d=f==null?null:typeof Symbol!="undefined"&&f[Symbol.iterator]||f["@@iterator"];if(d!=null){var l=[],M=!0,I=!1,Z,J;try{for(d=d.call(f);!(M=(Z=d.next()).done)&&(l.push(Z.value),!(v&&l.length===v));M=!0);}catch(ne){I=!0,J=ne}finally{try{!M&&d.return!=null&&d.return()}finally{if(I)throw J}}return l}}function w(f){if(Array.isArray(f))return f}var $=function(v){var d,l,M,I,Z=v.numberOfRows,J=v.rowsPerPageOptions,ne=v.rowsPerPage,Q=v.onRowsPerPageChange,K=v.currentPage,N=v.setCurrentPage,ce=v.descriptionTexts,_e=(0,m.a)("(max-width: "+O.T.BreakpointsSm+")"),ve=(0,B.useState)(1),he=A(ve,2),H=he[0],de=he[1];(0,B.useEffect)(function(){Z<ne?de(1):de(Math.ceil(Z/ne))},[ne,Z]);var re=function(){K<H-1&&N(K+1)},ye=function(){K>0&&N(K-1)},be=function(){var je=1+K*ne,Oe=ne*(K+1)>Z?Z:ne*(K+1);return(0,oe.jsx)("span",{className:h()(u()["description-text"]),"data-testid":"description-text",children:je+"-"+Oe+" "+ce.of+" "+Z})};return(0,oe.jsxs)("div",{className:h()(u()["pagination-wrapper"]),children:[(0,oe.jsxs)("div",{className:h()(u()["pagination-wrapper-row"]),children:[(0,oe.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!_e&&ce.rowsPerPage}),(0,oe.jsx)("select",{className:h()(u()["select-pagination"]),value:ne,onChange:function(je){return Q(je)},"aria-labelledby":"number-of-rows-select",children:J.map(function(fe){return(0,oe.jsx)("option",{value:fe,children:fe},fe)})}),be()]}),(0,oe.jsxs)("div",{className:h()(u()["pagination-wrapper-row"]),children:[(0,oe.jsx)("button",{className:h()(u()["icon-button"]),onClick:function(){return N(0)},disabled:K===0,"aria-label":ce.navigateFirstPage,"data-testid":"first-page-icon",children:(0,oe.jsx)(X,{className:h()(u()["pagination-icon"],(d={},d[u()["pagination-icon--disabled"]]=K===0,d))})}),(0,oe.jsx)("button",{className:h()(u()["icon-button"]),onClick:function(){return ye()},disabled:K===0,"aria-label":ce.previousPage,"data-testid":"pagination-previous-icon",children:(0,oe.jsx)(k,{className:h()(u()["pagination-icon"],(l={},l[u()["pagination-icon--disabled"]]=K===0,l))})}),(0,oe.jsx)("button",{className:h()(u()["icon-button"]),onClick:function(){return re()},disabled:K===H-1,"aria-label":ce.nextPage,"data-testid":"pagination-next-icon",children:(0,oe.jsx)(T,{className:h()(u()["pagination-icon"],(M={},M[u()["pagination-icon--disabled"]]=K===H-1,M))})}),(0,oe.jsx)("button",{className:h()(u()["icon-button"]),onClick:function(){return N(H-1)},disabled:K===H-1,"aria-label":ce.navigateLastPage,children:(0,oe.jsx)(te,{className:h()(u()["pagination-icon"],(I={},I[u()["pagination-icon--disabled"]]=K===H-1,I))})})]})]})};$.displayName="Pagination";try{$.displayName="Pagination",$.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:$.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(f){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>T,c:()=>u});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/DesignTokens/index.ts"),a=e("./src/hooks/useMediaQuery.ts"),y,V,z;function b(){return b=Object.assign?Object.assign.bind():function(D){for(var j=1;j<arguments.length;j++){var p=arguments[j];for(var k in p)Object.prototype.hasOwnProperty.call(p,k)&&(D[k]=p[k])}return D},b.apply(this,arguments)}var U=function(j){return s.createElement("svg",b({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},j),y||(y=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),V||(V=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),z||(z=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},L,E,B;function g(){return g=Object.assign?Object.assign.bind():function(D){for(var j=1;j<arguments.length;j++){var p=arguments[j];for(var k in p)Object.prototype.hasOwnProperty.call(p,k)&&(D[k]=p[k])}return D},g.apply(this,arguments)}var h=function(j){return s.createElement("svg",g({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},j),L||(L=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),E||(E=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),B||(B=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},m=e("./src/components/Panel/Panel.module.css"),O=e.n(m),C=e("./node_modules/react/jsx-runtime.js"),u;(function(D){D.Success="success",D.Info="info",D.Warning="warning",D.Error="error"})(u||(u={}));var c=function(j){var p=j.size,k=j.variant;switch(k){case u.Info:case u.Error:case u.Warning:return(0,C.jsx)(U,{style:{width:p,height:p},"data-testid":"panel-icon-info"});case u.Success:return(0,C.jsx)(h,{style:{width:p,height:p},"data-testid":"panel-icon-success"})}},_=function(j){var p=j.forceMobileLayout,k=(0,a.a)("(max-width: "+i.T.BreakpointsSm+")");return p?!0:k},S=function(j){var p=j.children;return(0,C.jsx)("div",{className:n()(O()["panel__pointer-position"]),children:p})};S.displayName="defaultRenderArrow";var T=function(j){var p,k=j.renderIcon,x=k===void 0?c:k,W=j.title,X=j.children,R=j.variant,F=R===void 0?u.Info:R,ae=j.showPointer,te=ae===void 0?!1:ae,oe=j.showIcon,A=oe===void 0?!0:oe,ue=j.forceMobileLayout,ge=ue===void 0?!1:ue,ie=j.renderArrow,q=ie===void 0?S:ie,w=_({forceMobileLayout:ge}),$=w?i.T.ComponentPanelSizeIconXs:i.T.ComponentPanelSizeIconMd;return(0,C.jsxs)("div",{className:n()(O().panel,(p={},p[O()["panel--mobile-layout"]]=w,p)),children:[te&&q({children:(0,C.jsx)("div",{"data-testid":"panel-pointer",className:n()(O().panel__pointer,O()["panel__pointer--"+F])})}),(0,C.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(O()["panel__content-wrapper"],O()["panel__content-wrapper--"+F]),children:[A&&(0,C.jsx)("div",{"data-testid":"panel-icon-wrapper",className:O()["panel__icon-wrapper"],children:x({size:$,variant:F})}),(0,C.jsxs)("div",{className:O().panel__content,children:[W&&(0,C.jsx)("h2",{className:O().panel__header,children:W}),(0,C.jsx)("div",{className:O().panel__body,children:X})]})]})]})};T.displayName="Panel";try{T.displayName="Panel",T.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:T.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(D){}},"./src/components/RadioButton/RadioButton.tsx":(r,t,e)=>{"use strict";e.d(t,{E:()=>h,j:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),b=e.n(z),U=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),L=e("./src/components/RadioButton/RadioButton.module.css"),E=e.n(L),B=e("./node_modules/react/jsx-runtime.js"),g;(function(m){m.Xsmall="xsmall",m.Small="small"})(g||(g={}));var h=function(O){var C=O.checked,u=O.description,c=O.disabled,_=O.error,S=O.hideLabel,T=O.label,D=O.name,j=O.onChange,p=O.presentation,k=O.radioId,x=O.size,W=x===void 0?g.Small:x,X=O.value;return(0,B.jsx)(U.f,{checked:C,className:b()(E().radio,E()["radio--"+W],C&&E()["radio--checked"],_&&E()["radio--error"],c&&E()["radio--disabled"]),description:u,disabled:c,hideLabel:S,inputId:k,label:T,name:D,onChange:j,presentation:p,size:W===g.Xsmall?U.b.Xsmall:U.b.Small,type:"radio",value:X,children:(0,B.jsx)("span",{className:E()["visible-button"],children:(0,B.jsx)("span",{className:E()["visible-button__checkmark"]})})})};h.displayName="RadioButton";try{h.displayName="RadioButton",h.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:h.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(m){}},"./src/components/RadioButton/index.ts":(r,t,e)=>{"use strict";e.d(t,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(r,t,e)=>{"use strict";e.d(t,{P:()=>v});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),U=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),_=e("./node_modules/react/index.js"),S=e("./node_modules/classnames/index.js"),T=e.n(S),D=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),j=e("./src/components/_InputWrapper/index.ts"),p=e("./src/components/Select/MultiSelectItem.module.css"),k=e.n(p),x=e("./node_modules/react/jsx-runtime.js"),W=function(l){var M=l.deleteButtonLabel,I=l.disabled,Z=l.onDeleteButtonClick,J=l.label;return(0,x.jsxs)("span",{className:k()["multi-select-item"],children:[(0,x.jsx)("span",{children:J}),(0,x.jsx)("button",{"aria-label":M,className:k()["multi-select-item__delete-button"],disabled:I,onClick:Z,children:(0,x.jsx)("span",{className:k()["multi-select-item__delete-button__cross"]})})]})};W.displayName="MultiSelectItem";try{W.displayName="MultiSelectItem",W.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:W.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(d){}var X=e("./src/hooks/index.ts"),R=e("./src/components/Select/Select.module.css"),F=e.n(R);function ae(d){return A(d)||oe(d)||ie(d)||te()}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(d){if(typeof Symbol!="undefined"&&d[Symbol.iterator]!=null||d["@@iterator"]!=null)return Array.from(d)}function A(d){if(Array.isArray(d))return q(d)}function ue(d,l){return $(d)||w(d,l)||ie(d,l)||ge()}function ge(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(d,l){if(!!d){if(typeof d=="string")return q(d,l);var M=Object.prototype.toString.call(d).slice(8,-1);if(M==="Object"&&d.constructor&&(M=d.constructor.name),M==="Map"||M==="Set")return Array.from(d);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return q(d,l)}}function q(d,l){(l==null||l>d.length)&&(l=d.length);for(var M=0,I=new Array(l);M<l;M++)I[M]=d[M];return I}function w(d,l){var M=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(M!=null){var I=[],Z=!0,J=!1,ne,Q;try{for(M=M.call(d);!(Z=(ne=M.next()).done)&&(I.push(ne.value),!(l&&I.length===l));Z=!0);}catch(K){J=!0,Q=K}finally{try{!Z&&M.return!=null&&M.return()}finally{if(J)throw Q}}return I}}function $(d){if(Array.isArray(d))return d}var f={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},v=function(l){var M=l.disabled,I=l.error,Z=l.hideLabel,J=l.inputId,ne=l.label,Q=l.multiple,K=l.onChange,N=l.options,ce=l.value,_e=N.map(function(xe){return xe.value});if(_e.length!==new Set(_e).size)throw Error("Each value in the option list must be unique.");var ve=(0,_.useState)(Q?ce!=null?ce:[]:[]),he=ue(ve,2),H=he[0],de=he[1],re=(0,_.useState)(Q?void 0:ce),ye=ue(re,2),be=ye[0],fe=ye[1],je=N.findIndex(function(xe){return xe.value===be}),Oe=(0,_.useState)(!1),me=ue(Oe,2),ke=me[0],Pe=me[1];(0,X.OR)("click",function(){return Pe(!1)}),(0,X.OR)("keydown",function(){return Pe(!0)});var Ke=(0,_.useState)(!1),De=ue(Ke,2),We=De[0],Ae=De[1],Fe=(0,_.useRef)(null),Ge=(0,_.useRef)(null);(0,_.useEffect)(function(){var xe=Fe.current;if(xe){var Se=xe.offsetHeight,Be=xe.getElementsByTagName("li")[0].offsetHeight,$e=xe.scrollTop,He=$e+Se,Qe=je*Be,to=Qe+Be,vo=Qe>=$e&&to<=He;vo||(Qe<$e?xe.scrollTop=Qe:xe.scrollTop=to-Se)}},[je]);var Ze=function(Se){var Be;return(Be=N.find(function($e){return $e.value===Se}))!==null&&Be!==void 0?Be:{label:"",value:""}},Xe=function(Se,Be){H!=null&&H.length||fe(Be),de(Se),K&&K(Se)},eo=function(Se){fe(Se),Ae(!1),K&&K(Se)},qe=function(Se){Q?H.includes(Se)?oo(Se):Xe([].concat(ae(H),[Se]),Se):eo(Se)},oo=function(Se){Xe(H.filter(function(Be){return Be!==Se}),Se)},yo=function(){Xe([])},uo=(0,_.useCallback)(function(){if(be===void 0)fe(N[0].value);else{var xe=je+1;xe>=0&&xe<N.length&&fe(N[xe].value)}Ae(!0)},[be,je,fe,N]),mo=(0,_.useCallback)(function(){if(be===void 0)fe(N[N.length-1].value);else{var xe=je-1;xe>=0&&xe<N.length&&fe(N[xe].value)}Ae(!0)},[be,je,fe,N]);(0,X.OG)(f.ArrowDown,function(){return We&&uo()}),(0,X.OG)(f.ArrowUp,function(){return We&&mo()}),(0,X.OG)(f.Enter,function(){return We&&Q&&be&&qe(be)});var _o=function(Se){return be===Se},no=function(Se){return Q?H.includes(Se):_o(Se)},Ve=(0,_.useId)(),fo=Ge.current?"calc("+Ge.current.offsetWidth+"px + 2 * "+D.component.input.border_width.default.value+")":void 0;return(0,x.jsxs)("div",{className:T()(F().select,F()["select--"+(Q?"multiple":"single")],We&&F()["select--expanded"],M&&F()["select--disabled"],ke&&F()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,x.jsx)(j.SP,{disabled:M,inputId:J,inputRenderer:function(Se){var Be=Se.className,$e=Se.inputId;return(0,x.jsxs)("span",{className:T()(Be,F().select__field),ref:Ge,children:[Q&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:F()["select--multiple__field__values"],children:H.map(Ze).map(function(He){return(0,x.jsx)(W,{deleteButtonLabel:He.deleteButtonLabel,disabled:M!=null?M:!1,label:He.label,onDeleteButtonClick:function(){return oo(He.value)}},He.value)})}),(0,x.jsx)("button",{"aria-label":l.deleteButtonLabel,className:F()["select--multiple__field__delete-button"],disabled:!H.length||M,onClick:function(){return yo()},children:(0,x.jsx)("span",{className:F()["select--multiple__field__delete-button__cross"]})})]}),(0,x.jsxs)("button",{"aria-controls":Ve,"aria-expanded":We,"aria-label":ne,className:F().select__field__button,disabled:M,id:$e,onBlur:function(){return Ae(!1)},onClick:function(){return Ae(!We)},onKeyDown:function(Qe){Object.values(f).includes(Qe.key)&&(Qe.preventDefault(),Ae(!0))},role:"combobox",value:Q?H:be,children:[!Q&&(0,x.jsx)("span",{className:F()["select--single__field__value"],children:Ze(be).label}),(0,x.jsx)("span",{className:F()["select__field__arrow-wrapper"],children:(0,x.jsx)("span",{className:F()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!I,label:Z?void 0:ne,noFocusEffect:Q,noPadding:!0,readOnly:!1}),(0,x.jsx)("ul",{className:F()["select__option-list"],id:Ve,ref:Fe,role:"listbox",style:{width:fo},children:N.map(function(xe){return(0,x.jsx)("li",{"aria-selected":no(xe.value),className:T()(F()["select__option-list__option"],no(xe.value)&&F()["select__option-list__option--selected"],Q&&_o(xe.value)&&F()["select--multiple__option-list__option--focused"]),onClick:function(){return qe(xe.value)},onMouseDown:function(Be){return Be.preventDefault()},onKeyDown:function(Be){return Be.preventDefault()},role:"option",value:xe.value,children:xe.label},xe.value)})})]})};v.displayName="Select";try{v.displayName="Select",v.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:v.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(d){}},"./src/components/SvgIcon/index.ts":(r,t,e)=>{"use strict";e.d(t,{l:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),a=e("./node_modules/react/index.js"),y=["svgIconComponent"];function V(U,L){if(U==null)return{};var E=z(U,L),B,g;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(U);for(g=0;g<h.length;g++)B=h[g],!(L.indexOf(B)>=0)&&(!Object.prototype.propertyIsEnumerable.call(U,B)||(E[B]=U[B]))}return E}function z(U,L){if(U==null)return{};var E={},B=Object.keys(U),g,h;for(h=0;h<B.length;h++)g=B[h],!(L.indexOf(g)>=0)&&(E[g]=U[g]);return E}var b=function(L){var E=L.svgIconComponent,B=V(L,y);return(0,a.isValidElement)(E)?(0,a.cloneElement)(E,Object.assign({},B)):null};try{b.displayName="SvgIcon",b.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:b.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(U){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(r,t,e)=>{"use strict";e.d(t,{b:()=>B,f:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(a),V=e("./node_modules/react/index.js"),z=e("./node_modules/classnames/index.js"),b=e.n(z),U=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),L=e.n(U),E=e("./node_modules/react/jsx-runtime.js"),B;(function(h){h.Xsmall="xsmall",h.Small="small"})(B||(B={}));var g=function(m){var O=m.checked,C=m.children,u=m.className,c=m.description,_=m.disabled,S=m.hideInput,T=m.hideLabel,D=m.inputId,j=m.label,p=m.name,k=m.onChange,x=m.presentation,W=m.size,X=m.type,R=m.value,F=(0,V.useId)(),ae=D!=null?D:"input-"+F,te=j?ae+"-label":void 0,oe=c?ae+"-description":void 0,A=j&&!T;return(0,E.jsxs)("label",{className:b()(L().template,L()["template--"+W],_&&L()["template--disabled"],u),htmlFor:D,children:[!S&&(0,E.jsxs)("span",{className:L()["template__input-wrapper"],children:[(0,E.jsx)("input",{"aria-describedby":oe,"aria-label":!A&&typeof j=="string"?j:void 0,"aria-labelledby":A?te:void 0,checked:O!=null?O:!1,className:L()["template__input-wrapper__input"],disabled:_,id:ae,name:p,onChange:_?void 0:k,role:x?"presentation":void 0,type:X,value:R}),(0,E.jsx)("span",{className:L()["template__input-wrapper__visible-box"],children:C})]}),(A||c)&&(0,E.jsxs)("span",{className:L()["template__label-and-description"],children:[A&&(0,E.jsx)("span",{className:L()["template__label-and-description__label"],id:te,children:j}),c&&(0,E.jsx)("span",{className:L()["template__label-and-description__description"],id:oe,children:c})]})]})};g.displayName="CheckboxRadioTemplate";try{g.displayName="CheckboxRadioTemplate",g.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:g.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(h){}},"./src/components/_InputWrapper/index.ts":(r,t,e)=>{"use strict";e.d(t,{SP:()=>C,Hx:()=>a});var s=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i;(function(u){u.Default="default",u.Error="error",u.Disabled="disabled",u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(i||(i={}));var a;(function(u){u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(a||(a={}));var y;(function(u){u.None="none",u.Error="error",u.Search="search"})(y||(y={}));var V=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=c.readOnly,S=_===void 0?!1:_,T=c.disabled,D=T===void 0?!1:T,j=c.isValid,p=j===void 0?!0:j,k=c.isSearch,x=k===void 0?!1:k,W=y.None;return x&&(W=y.Search),D?{variant:i.Disabled,iconVariant:W}:S===!0||S===a.ReadOnlyInfo?{variant:i.ReadOnlyInfo,iconVariant:W}:S===a.ReadOnlyConfirm?{variant:i.ReadOnlyConfirm,iconVariant:W}:p===!1?{variant:i.Error,iconVariant:y.Error}:{variant:i.Default,iconVariant:W}},z;function b(){return b=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var _=arguments[c];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(u[S]=_[S])}return u},b.apply(this,arguments)}var U=function(c){return s.createElement("svg",b({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),z||(z=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},L;function E(){return E=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var _=arguments[c];for(var S in _)Object.prototype.hasOwnProperty.call(_,S)&&(u[S]=_[S])}return u},E.apply(this,arguments)}var B=function(c){return s.createElement("svg",E({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),L||(L=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},g=e("./src/components/_InputWrapper/InputWrapper.module.css"),h=e.n(g),m=e("./node_modules/react/jsx-runtime.js"),O=function(c){var _=c.variant,S=c.disabled,T=S===void 0?!1:S;if(_===y.Error)return(0,m.jsx)("div",{className:h().InputWrapper__icon,children:(0,m.jsx)(U,{"data-testid":"input-icon-error"})});if(_===y.Search){var D;return(0,m.jsx)("div",{className:n()(h().InputWrapper__icon,(D={},D[h()["InputWrapper__icon--disabled"]]=T,D)),children:(0,m.jsx)(B,{"data-testid":"input-icon-search"})})}return null};try{O.displayName="Icon",O.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:O.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(u){}var C=function(c){var _,S=c.isValid,T=S===void 0?!0:S,D=c.disabled,j=D===void 0?!1:D,p=c.readOnly,k=p===void 0?!1:p,x=c.isSearch,W=x===void 0?!1:x,X=c.label,R=c.inputId,F=c.inputRenderer,ae=c.noFocusEffect,te=c.noPadding,oe=(0,s.useId)(),A=R!=null?R:oe,ue=V({readOnly:k,disabled:j,isValid:T,isSearch:W}),ge=ue.variant,ie=ue.iconVariant;return(0,m.jsxs)(m.Fragment,{children:[X&&(0,m.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(h().InputWrapper__label),htmlFor:A,children:X}),(0,m.jsxs)("div",{"data-testid":"InputWrapper",className:n()(h().InputWrapper,h()["InputWrapper--"+ge],(_={},_[h()["InputWrapper--search"]]=W,_[h()["InputWrapper--with-focus-effect"]]=!ae,_[h()["InputWrapper--with-padding"]]=!te,_)),children:[(0,m.jsx)(O,{variant:ie,disabled:j}),F({className:h().InputWrapper__field,inputId:A,variant:ge})]})]})};try{C.displayName="InputWrapper",C.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:C.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(u){}},"./src/hooks/index.ts":(r,t,e)=>{"use strict";e.d(t,{OR:()=>o,OG:()=>n,D9:()=>i,PQ:()=>a});var s=e("./node_modules/react/index.js");function o(y,V){(0,s.useEffect)(function(){return document.addEventListener(y,V),function(){return document.removeEventListener(y,V)}},[y,V])}function n(y,V){(0,s.useEffect)(function(){var z=function(U){U.key===y&&V()};return document.addEventListener("keydown",z),function(){return document.removeEventListener("keydown",z)}},[y,V])}function i(y){var V=(0,s.useRef)();return(0,s.useEffect)(function(){V.current=y},[y]),V.current}var a=function(V,z){var b=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(b.current)b.current=!1;else return V()},z)}},"./src/hooks/useMediaQuery.ts":(r,t,e)=>{"use strict";e.d(t,{a:()=>X});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),z=e.n(V),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),U=e.n(b),L=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(L),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e.n(B),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(h),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),C=e.n(O),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),c=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e.n(_),T=e("./node_modules/react/index.js");function D(R,F){return W(R)||x(R,F)||p(R,F)||j()}function j(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(R,F){if(!!R){if(typeof R=="string")return k(R,F);var ae=Object.prototype.toString.call(R).slice(8,-1);if(ae==="Object"&&R.constructor&&(ae=R.constructor.name),ae==="Map"||ae==="Set")return Array.from(R);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return k(R,F)}}function k(R,F){(F==null||F>R.length)&&(F=R.length);for(var ae=0,te=new Array(F);ae<F;ae++)te[ae]=R[ae];return te}function x(R,F){var ae=R==null?null:typeof Symbol!="undefined"&&R[Symbol.iterator]||R["@@iterator"];if(ae!=null){var te=[],oe=!0,A=!1,ue,ge;try{for(ae=ae.call(R);!(oe=(ue=ae.next()).done)&&(te.push(ue.value),!(F&&te.length===F));oe=!0);}catch(ie){A=!0,ge=ie}finally{try{!oe&&ae.return!=null&&ae.return()}finally{if(A)throw ge}}return te}}function W(R){if(Array.isArray(R))return R}function X(R){var F=function(ie){var q,w;return(q=(w=window)===null||w===void 0?void 0:w.matchMedia(ie).matches)!==null&&q!==void 0?q:!1},ae=(0,T.useState)(F(R)),te=D(ae,2),oe=te[0],A=te[1],ue=function(){A(F(R))};return(0,T.useEffect)(function(){var ge=window.matchMedia(R);return ue(),ge.addEventListener("change",ue),function(){return ge.removeEventListener("change",ue)}},[R]),oe}},"./src/utils/arrayUtils.ts":(r,t,e)=>{"use strict";e.d(t,{cO:()=>L,zb:()=>B});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e.n(n),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),y=e.n(a),V=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),z=e.n(V),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),U=e.n(b);function L(g,h){if(g===h)return!0;if(g===void 0||h===void 0||g.length!==h.length)return!1;for(var m in g)if(g[m]!==h[m])return!1;return!0}function E(g){return g[g.length-1]}function B(g){return g.length===new Set(g).size}},"./storybook-init-framework-entry.js":(r,t,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(r,t,e)=>{"use strict";e.d(t,{r:()=>y});var s=e("./node_modules/react/index.js"),o,n,i;function a(){return a=Object.assign?Object.assign.bind():function(V){for(var z=1;z<arguments.length;z++){var b=arguments[z];for(var U in b)Object.prototype.hasOwnProperty.call(b,U)&&(V[U]=b[U])}return V},a.apply(this,arguments)}var y=function(z){return s.createElement("svg",a({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},z),o||(o=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),i||(i=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),a.locals={accordion:"accordion---oQBwV"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),a.locals={container:"container---_OBRF"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.accordion-header---NEcyL {
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
`,""]),a.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),a.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),a.push([r.id,`html {
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
`,""]),a.locals={};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.button---AisLs {
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
`,""]),a.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.checkbox---sy8lK {
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
`,""]),a.locals={checkbox:"checkbox---sy8lK","checkbox--compact":"checkbox--compact---SWP0L","checkbox--error":"checkbox--error---dOSpU","checkbox--checked":"checkbox--checked---xvne_","checkbox--disabled":"checkbox--disabled---Q4bxl","checkbox--read-only":"checkbox--read-only---PrpNx","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.checkbox-group---Ws6hw {
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
`,""]),a.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group--vertical":"checkbox-group--vertical---qFiAe","checkbox-group--horizontal":"checkbox-group--horizontal---sbdQV"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.svg---cRnN3 {
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
`,""]),a.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),a.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.field-set---WtvOy {
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
`,""]),a.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.list---Xw1lu {
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
`,""]),a.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),a.locals={container:"container---sf7W5"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.list-item---aLk6z {
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
`,""]),a.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),a.locals={map:"map---Z2PfI"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),a.locals={page:"page---LVMNK"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),a.locals={"page-content":"page-content---ZIuS7"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.page-header---bt29G {
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
`,""]),a.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH","page-header--small":"page-header--small---cDICw","page-header--medium":"page-header--medium---wg1ER"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.pagination-icon---iNvyI {
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
  margin: 5px;
  border: none;
}

.description-text---ziZv_ {
  margin-right: 64px;
}

.select-pagination---ucKkC {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .pagination-wrapper---v7KJE {
    display: flex;
    flex-direction: column;
  }
  .pagination-wrapper-row---iD9lO {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .description-text---ziZv_ {
    margin-top: 10px;
    margin-right: 30px;
  }
  .select-pagination---ucKkC {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`,""]),a.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE","icon-button":"icon-button---AiFnU","description-text":"description-text---ziZv_","select-pagination":"select-pagination---ucKkC","pagination-wrapper-row":"pagination-wrapper-row---iD9lO"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`/* breakpoints-xs */
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
`,""]),a.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),a.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.radio---S0hlk {
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
`,""]),a.locals={radio:"radio---S0hlk","radio--small":"radio--small---uN_5E","radio--xsmall":"radio--xsmall---tgsCS","radio--error":"radio--error---tU7TP","radio--checked":"radio--checked---b1pmT","radio--disabled":"radio--disabled---adqq7","visible-button":"visible-button---PkY72","visible-button__checkmark":"visible-button__checkmark---OzITh"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.radio-group---BsvK3 {
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
`,""]),a.locals={"radio-group":"radio-group---BsvK3","radio-group--xsmall":"radio-group--xsmall---x_9yu","radio-group--small":"radio-group--small---GIoae","radio-group--vertical":"radio-group--vertical---YkxyR","radio-group--horizontal":"radio-group--horizontal---T4MpH"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.multi-select-item---KQ3Ws {
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
`,""]),a.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.select---eatbZ {
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
`,""]),a.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`Table {
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
`,""]),a.locals={};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),a.locals={};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),a.locals={TableBody:"TableBody---cpO70"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.header-table-cell---zvgNX {
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

.header---dwlGy {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

.property---PP0hS {
  margin: 10px 10px 10px 0;
}
`,""]),a.locals={"header-table-cell":"header-table-cell---zvgNX","header-table-cell-radiobutton":"header-table-cell-radiobutton---raQCE","body-table-cell":"body-table-cell---cCxyS","body-table-cell-radiobutton":"body-table-cell-radiobutton---aoOCt",image:"image---Jz7hI",input:"input---jn1Id","radio-button":"radio-button---Bsw2x","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u",header:"header---dwlGy",property:"property---PP0hS"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-footer":"table-footer---fVxHQ"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),a.locals={"table-header":"table-header---DnjKf"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.TableRow---XoYrl {
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
`,""]),a.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.tabs---dxRcK {
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
`,""]),a.locals={tabs:"tabs---dxRcK",tabs__tablist:"tabs__tablist---_oC5W",tabs__tablist__tab:"tabs__tablist__tab---n25P8","tabs__tablist__tab--selected":"tabs__tablist__tab--selected---kffoD",tabs__divider:"tabs__divider---hR5Rm",tabs__tabpanel:"tabs__tabpanel---FepKw"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.TextArea---kkLod {
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
`,""]),a.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.toggle-button---VbrSe {
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
`,""]),a.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.toggle-button-group---xdsvq {
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
`,""]),a.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`/* breakpoints-xs */
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
`,""]),a.locals={container:"container---_zb20"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.template---CPXze {
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
`,""]),a.locals={template:"template---CPXze","template--xsmall":"template--xsmall---mGweJ","template--small":"template--small---Ctnml","template--disabled":"template--disabled---ADFDz","template__input-wrapper":"template__input-wrapper---dLR0V","template__input-wrapper__input":"template__input-wrapper__input---zhrwu","template__input-wrapper__visible-box":"template__input-wrapper__visible-box---fa020","template__label-and-description":"template__label-and-description---z1Efs","template__label-and-description__label":"template__label-and-description__label---Z3XLk","template__label-and-description__description":"template__label-and-description__description---pF8QG"};const y=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>y});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(s),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),a=i()(o());a.push([r.id,`.InputWrapper---J_oif {
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
`,""]),a.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const y=a},"./src/components/Accordion/Accordion.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Button/Button.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Map/Map.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Page/Page.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Select/Select.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(r,t,e)=>{var s=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[r.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=s(o,n);r.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(r,t,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(i){var a=n(i);return e(a)}function n(i){if(!e.o(s,i)){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}return s[i]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(r,t,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(i){var a=n(i);return e(a)}function n(i){if(!e.o(s,i)){var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}return s[i]}o.keys=function(){return Object.keys(s)},o.resolve=n,r.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(r,t,e)=>{"use strict";r=e.nmd(r);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],r,!1)}},r=>{var t=s=>r(r.s=s);r.O(0,[776],()=>(t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),t("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),t("./storybook-init-framework-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),t("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),t("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),t("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),t("./.storybook/preview.js-generated-config-entry.js"),t("./generated-stories-entry.cjs")));var e=r.O()}]);
