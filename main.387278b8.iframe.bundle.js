(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function C(l){var c=n(l);return e(c)}function n(l){if(!e.o(s,l)){var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}return s[l]}C.keys=function(){return Object.keys(s)},C.resolve=n,A.exports=C,C.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>a,default:()=>x});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),X=e.n(F),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),Y=e.n(P),N=e("./node_modules/react/index.js"),f=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),i=["components"];function b(){return b=Object.assign?Object.assign.bind():function(O){for(var I=1;I<arguments.length;I++){var y=arguments[I];for(var p in y)Object.prototype.hasOwnProperty.call(y,p)&&(O[p]=y[p])}return O},b.apply(this,arguments)}function g(O,I){if(O==null)return{};var y=k(O,I),p,w;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(O);for(w=0;w<S.length;w++)p=S[w],!(I.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,p)||(y[p]=O[p]))}return y}function k(O,I){if(O==null)return{};var y={},p=Object.keys(O),w,S;for(S=0;S<p.length;S++)w=p[S],!(I.indexOf(w)>=0)&&(y[w]=O[w]);return y}var h={},m="wrapper";function u(O){var I=O.components,y=g(O,i);return(0,f.mdx)(m,b({},h,y,{components:I,mdxType:"MDXLayout"}),(0,f.mdx)(D.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,f.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,f.mdx)("h2",{id:"hvordan-installere"},"Hvordan installere"),(0,f.mdx)("p",null,"For \xE5 legge til designsystemet i ditt prosjekt, naviger til mappen hvor ",(0,f.mdx)("inlineCode",{parentName:"p"},"package.json"),"-filen befinner seg og kj\xF8r en av f\xF8lgende kommandoer:"),(0,f.mdx)("h3",{id:"npm"},"NPM"),(0,f.mdx)("pre",null,(0,f.mdx)("code",{parentName:"pre"},`npm install @altinn/altinn-design-system
`)),(0,f.mdx)("h3",{id:"yarn"},"Yarn"),(0,f.mdx)("pre",null,(0,f.mdx)("code",{parentName:"pre"},`yarn add @altinn/altinn-design-system
`)),(0,f.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,f.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React-komponenter, og flere av de benytter seg av css-variabler, som er design-tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre designsystem som tar utgangspunkt i at ",(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,f.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,f.mdx)("p",null,"Det er derfor viktig at css-variablene og design-tokens som skal brukes i prosjektene lastes fra pakken ",(0,f.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra Figma tokens-pakken ",(0,f.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,f.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste inn css-variablene p\xE5 er \xE5 benytte ",(0,f.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),`-komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css-variablene, og setter noen andre globale stilegenskaper som vi benytter i designsystemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere dem ogs\xE5 fra denne pakken: `,(0,f.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,f.mdx)("p",null,"For mer informasjon om hvordan denne transformasjonen gj\xF8res, kan du se i Readme for dette repoet."),(0,f.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,f.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,f.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,f.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,f.mdx)("ul",null,(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,f.mdx)("li",{parentName:"ul"},(0,f.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}u.displayName="MDXContent",u.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var j={title:"Introduksjon",includeStories:["__page"]},d={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,f.mdx)(D.aT,{mdxStoryNameToKey:d,mdxComponentAnnotations:j},(0,f.mdx)(u,null))}});const x=j;var R=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{__namedExportsOrder:()=>R,__page:()=>a,default:()=>x});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),X=e.n(F),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),Y=e.n(P),N=e("./node_modules/react/index.js"),f=e("./node_modules/@mdx-js/react/index.js"),D=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),i=["components"];function b(){return b=Object.assign?Object.assign.bind():function(O){for(var I=1;I<arguments.length;I++){var y=arguments[I];for(var p in y)Object.prototype.hasOwnProperty.call(y,p)&&(O[p]=y[p])}return O},b.apply(this,arguments)}function g(O,I){if(O==null)return{};var y=k(O,I),p,w;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(O);for(w=0;w<S.length;w++)p=S[w],!(I.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,p)||(y[p]=O[p]))}return y}function k(O,I){if(O==null)return{};var y={},p=Object.keys(O),w,S;for(S=0;S<p.length;S++)w=p[S],!(I.indexOf(w)>=0)&&(y[w]=O[w]);return y}var h={},m="wrapper";function u(O){var I=O.components,y=g(O,i);return(0,f.mdx)(m,b({},h,y,{components:I,mdxType:"MDXLayout"}),(0,f.mdx)(D.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,f.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,f.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
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
`)))}u.displayName="MDXContent",u.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var j={title:"Components/AppWrapper",includeStories:["__page"]},d={};j.parameters=j.parameters||{},j.parameters.docs=Object.assign({},j.parameters.docs||{},{page:function(){return(0,f.mdx)(D.aT,{mdxStoryNameToKey:d,mdxComponentAnnotations:j},(0,f.mdx)(u,null))}});const x=j;var R=["__page"]},"./.storybook/StoryPage.tsx":(A,o,e)=>{"use strict";e.d(o,{Y:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),c=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),J=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),F=e.n(J),X=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),P={};P.insert="head",P.singleton=!1;var Y=F()(X.Z,P);const N=X.Z.locals||{};var f=e("./node_modules/react/jsx-runtime.js"),D=function(m){var u=m.children;return(0,f.jsx)("div",{children:u})};D.displayName="AppWrapper";try{D.displayName="AppWrapper",D.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:D.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(h){}var i=function(m){var u=m.children;return(0,f.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,f.jsxs)("p",{style:{margin:"0"},children:[(0,f.jsx)("strong",{children:"Deprecated:"})," ",u]})})};i.displayName="DeprecationWarning";var b=null;try{i.displayName="DeprecationWarning",i.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:i.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(h){}var g=function(m){var u=m.description,a=m.deprecationWarning;return(0,f.jsxs)(D,{children:[(0,f.jsx)(l.Dx,{}),a&&(0,f.jsx)(i,{children:a}),(0,f.jsx)(l.dk,{children:u}),(0,f.jsx)(l.fQ,{includePrimary:!0}),(0,f.jsx)(l.X6,{children:"Props"}),(0,f.jsx)(l.$4,{story:l.Uh})]})};g.displayName="StoryPage";var k=null;try{g.displayName="StoryPage",g.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:g.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(h){}},"./.storybook/preview.js-generated-config-entry.js":(A,o,e)=>{"use strict";var s={};e.r(s),e.d(s,{__namedExportsOrder:()=>b,parameters:()=>i});var C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),N=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e("./node_modules/@storybook/theming/dist/esm/index.js"),i={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},D.np.dark),light:Object.assign({},D.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},b=["parameters"],g=e("./node_modules/console-browserify/index.js");function k(u,a){var j=Object.keys(u);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(u);a&&(d=d.filter(function(x){return Object.getOwnPropertyDescriptor(u,x).enumerable})),j.push.apply(j,d)}return j}function h(u){for(var a=1;a<arguments.length;a++){var j=arguments[a]!=null?arguments[a]:{};a%2?k(Object(j),!0).forEach(function(d){m(u,d,j[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(j)):k(Object(j)).forEach(function(d){Object.defineProperty(u,d,Object.getOwnPropertyDescriptor(j,d))})}return u}function m(u,a,j){return a in u?Object.defineProperty(u,a,{value:j,enumerable:!0,configurable:!0,writable:!0}):u[a]=j,u}Object.keys(s).forEach(function(u){var a=s[u];switch(u){case"args":return(0,N.uc)(a);case"argTypes":return(0,N.v9)(a);case"decorators":return a.forEach(function(d){return(0,N.$9)(d,!1)});case"loaders":return a.forEach(function(d){return(0,N.HZ)(d,!1)});case"parameters":return(0,N.h1)(h({},a),!1);case"argTypesEnhancers":return a.forEach(function(d){return(0,N.My)(d)});case"argsEnhancers":return a.forEach(function(d){return(0,N._C)(d)});case"render":return(0,N.$P)(a);case"globals":case"globalTypes":{var j={};return j[u]=a,(0,N.h1)(j,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return g.log(u+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>Be,__namedExportsOrder:()=>Re,default:()=>Oe});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),b=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),k=e("./node_modules/classnames/index.js"),h=e.n(k),m=e("./.storybook/StoryPage.tsx"),u=e("./src/components/Button/index.ts"),a;(function(ye){ye.Primary="primary",ye.Secondary="secondary"})(a||(a={}));var j=(0,i.createContext)(void 0),d=function(){var ge=(0,i.useContext)(j);if(ge===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return ge},x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(x),O=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),I={};I.insert="head",I.singleton=!1;var y=R()(O.Z,I);const p=O.Z.locals||{};var w=e("./node_modules/react/jsx-runtime.js"),S=function(ge){var V=ge.children,fe=ge.open,je=ge.onClick,De=ge.iconVariant,Te=De===void 0?a.Primary:De,Ke=(0,i.useId)(),we=(0,i.useId)();return(0,w.jsx)("div",{className:p.accordion,children:(0,w.jsx)(j.Provider,{value:{onClick:je,open:fe,headerId:Ke,contentId:we,iconVariant:Te},children:V})})};S.displayName="Accordion";const z=null;try{S.displayName="Accordion",S.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:S.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(ye){}var Z=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),se={};se.insert="head",se.singleton=!1;var ue=R()(Z.Z,se);const le=Z.Z.locals||{};var de=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),re={};re.insert="head",re.singleton=!1;var q=R()(de.Z,re);const v=de.Z.locals||{};var U;function Q(){return Q=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},Q.apply(this,arguments)}var M=function(ge){return i.createElement("svg",Q({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),U||(U=i.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},ee;function pe(){return pe=Object.assign?Object.assign.bind():function(ye){for(var ge=1;ge<arguments.length;ge++){var V=arguments[ge];for(var fe in V)Object.prototype.hasOwnProperty.call(V,fe)&&(ye[fe]=V[fe])}return ye},pe.apply(this,arguments)}var me=function(ge){return i.createElement("svg",pe({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ge),ee||(ee=i.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},$=function(){var ge,V,fe=d(),je=fe.onClick,De=fe.open,Te=fe.iconVariant,Ke=[v["accordion-icon"],(ge={},ge[v["accordion-icon--opened"]]=De,ge)],we=(V={height:20,width:20,className:h()(Ke)},V["data-testid"]=Te,V.onClick=je,V);switch(Te){case a.Primary:return(0,w.jsx)(M,Object.assign({},we));case a.Secondary:return(0,w.jsx)(me,Object.assign({},we))}};const E=null;var _=function(ge){var V,fe=ge.children,je=ge.actions,De=ge.subtitle,Te=d(),Ke=Te.onClick,we=Te.open,Ze=Te.headerId,Ve=Te.contentId;return(0,w.jsxs)("div",{className:h()(le["accordion-header"],(V={},V[le["accordion-header--subtitle"]]=De,V)),children:[(0,w.jsx)($,{}),(0,w.jsxs)("button",{className:h()(le["accordion-header__title"]),"aria-expanded":we,type:"button",onClick:Ke,id:Ze,"aria-controls":Ve,children:[fe,(De==null?void 0:De.length)&&(0,w.jsx)("div",{"data-testid":"accordion-header-subtitle",className:h()(le["accordion-header__subtitle"]),children:De})]}),(0,w.jsx)("div",{className:h()(le["accordion-header__actions"]),children:je})]})};_.displayName="AccordionHeader";try{_.displayName="AccordionHeader",_.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:_.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(ye){}var r=function(ge){var V=ge.children,fe=d(),je=fe.open,De=fe.contentId,Te=fe.headerId;return(0,w.jsx)("div",{children:je&&(0,w.jsx)("div",{"aria-expanded":je,id:De,"aria-labelledby":Te,children:V})})};r.displayName="AccordionContent";const t=null;try{r.displayName="AccordionContent",r.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:r.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(ye){}var L=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css"),B={};B.insert="head",B.singleton=!1;var ce=R()(L.Z,B);const be=L.Z.locals||{};function ne(ye,ge){return ke(ye)||_e(ye,ge)||K(ye,ge)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(ye,ge){if(!!ye){if(typeof ye=="string")return ae(ye,ge);var V=Object.prototype.toString.call(ye).slice(8,-1);if(V==="Object"&&ye.constructor&&(V=ye.constructor.name),V==="Map"||V==="Set")return Array.from(ye);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return ae(ye,ge)}}function ae(ye,ge){(ge==null||ge>ye.length)&&(ge=ye.length);for(var V=0,fe=new Array(ge);V<ge;V++)fe[V]=ye[V];return fe}function _e(ye,ge){var V=ye==null?null:typeof Symbol!="undefined"&&ye[Symbol.iterator]||ye["@@iterator"];if(V!=null){var fe=[],je=!0,De=!1,Te,Ke;try{for(V=V.call(ye);!(je=(Te=V.next()).done)&&(fe.push(Te.value),!(ge&&fe.length===ge));je=!0);}catch(we){De=!0,Ke=we}finally{try{!je&&V.return!=null&&V.return()}finally{if(De)throw Ke}}return fe}}function ke(ye){if(Array.isArray(ye))return ye}var Se=`import React, { useState } from 'react';
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
`,xe={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},he="";const Oe={title:"Components/Accordion",component:S,subcomponents:{AccordionHeader:_,AccordionContent:r},parameters:{design:(0,b.vc)([{type:"figma",url:he},{type:"link",url:he}]),docs:{page:function(){return(0,w.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:a.Primary,useActions:!0,subtitle:"Subtitle"}};var Ne=function(ge){var V=(0,i.useState)(!1),fe=ne(V,2),je=fe[0],De=fe[1],Te=(0,i.useState)(!1),Ke=ne(Te,2),we=Ke[0],Ze=Ke[1],Ve=function(){De(!je)},tn=function(){Ze(!we)},$e="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",un=(0,g.D8)(),sn=ne(un,1),mn=sn[0].useActions,dn=(0,g.D8)(),cn=ne(dn,1),Xe=cn[0].subtitle,on=mn?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{children:"Example setup"}),(0,w.jsx)(u.zx,{variant:u.Wu.Filled,color:u.rp.Primary,size:u.qE.Small,children:"Separat knapp 1"}),(0,w.jsx)(u.zx,{variant:u.Wu.Outline,color:u.rp.Primary,size:u.qE.Small,children:"Separat knapp 2"})]}):void 0,rn=Xe.length>0?Xe:void 0;return(0,w.jsxs)("div",{className:h()(be.container),children:[(0,w.jsxs)(S,{onClick:Ve,open:je,iconVariant:ge.iconVariant,children:[(0,w.jsx)(_,{actions:on,subtitle:rn,children:"Accordion 1"}),(0,w.jsx)(r,{children:$e})]}),(0,w.jsxs)(S,{onClick:tn,open:we,iconVariant:ge.iconVariant,children:[(0,w.jsx)(_,{actions:on,subtitle:rn,children:"Accordion 2"}),(0,w.jsx)(r,{children:$e})]})]})};Ne.displayName="Template";var Be=Ne.bind({});Be.args={iconVariant:a.Primary,open:!1},Be.argTypes={open:{control:!1},onClick:{control:!1}},Be.parameters={docs:{description:{story:""}}},Be.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Be.parameters);var Re=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>O,FullWidth:()=>R,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>x,Success:()=>u,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>j,__namedExportsOrder:()=>I,default:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),X=e("./.storybook/StoryPage.tsx"),P=e("./src/components/Button/index.ts"),Y=e("./src/components/Button/Stories/success.svg"),N=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const b={title:"Components/Button/Filled",component:P.zx,parameters:{design:(0,J.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,N.jsx)(X.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:P.Wu.Filled,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var g=function(p){return(0,N.jsx)(P.zx,Object.assign({},p))};g.displayName="Template";var k=function(p){return(0,N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,N.jsx)(P.zx,Object.assign({},p))})};k.displayName="WithinContainerTemplate";var h=g.bind({});h.args={color:P.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=g.bind({});m.args={color:P.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=g.bind({});u.args={color:P.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=g.bind({});a.args={color:P.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=g.bind({});j.args={color:P.rp.Success,icon:(0,N.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var d=g.bind({});d.args={color:P.rp.Success,icon:(0,N.jsx)(Y.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={color:P.rp.Secondary,icon:(0,N.jsx)(F.Z,{})},x.parameters={docs:{description:{story:""}}};var R=k.bind({});R.args={color:P.rp.Primary,icon:(0,N.jsx)(F.Z,{}),fullWidth:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var O=g.bind({});O.args={children:"Disabled button",disabled:!0},O.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>O,FullWidthAndDashedBorder:()=>R,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>x,Success:()=>u,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>j,__namedExportsOrder:()=>I,default:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),X=e("./.storybook/StoryPage.tsx"),P=e("./src/components/Button/index.ts"),Y=e("./src/components/Button/Stories/success.svg"),N=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SecondaryWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidthAndDashedBorder:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const b={title:"Components/Button/Outline",component:P.zx,parameters:{design:(0,J.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,N.jsx)(X.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:P.Wu.Outline,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var g=function(p){return(0,N.jsx)(P.zx,Object.assign({},p))};g.displayName="Template";var k=function(p){return(0,N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,N.jsx)(P.zx,Object.assign({},p))})};k.displayName="WithinContainerTemplate";var h=g.bind({});h.args={color:P.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=g.bind({});m.args={color:P.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=g.bind({});u.args={color:P.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=g.bind({});a.args={color:P.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=g.bind({});j.args={color:P.rp.Success,icon:(0,N.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var d=g.bind({});d.args={color:P.rp.Success,icon:(0,N.jsx)(Y.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={color:P.rp.Secondary,icon:(0,N.jsx)(F.Z,{})},x.parameters={docs:{description:{story:""}}};var R=k.bind({});R.args={color:P.rp.Primary,icon:(0,N.jsx)(F.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},R.parameters={docs:{description:{story:""}}};var O=g.bind({});O.args={children:"Disabled button",disabled:!0},O.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Danger:()=>a,Disabled:()=>O,FullWidth:()=>R,Primary:()=>h,Secondary:()=>m,Success:()=>u,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>j,SuccessWithIconNoText:()=>x,__namedExportsOrder:()=>I,default:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./node_modules/@navikt/ds-icons/esm/Success.js"),X=e("./.storybook/StoryPage.tsx"),P=e("./src/components/Button/index.ts"),Y=e("./src/components/Button/Stories/success.svg"),N=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Primary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Secondary:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Success:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},Danger:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithCustomIcon:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},SuccessWithIconNoText:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}},FullWidth:{startLoc:{col:63,line:48},endLoc:{col:1,line:61},startBody:{col:63,line:48},endBody:{col:1,line:61}},Disabled:{startLoc:{col:48,line:47},endLoc:{col:78,line:47},startBody:{col:48,line:47},endBody:{col:78,line:47}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const b={title:"Components/Button/Quiet",component:P.zx,parameters:{design:(0,J.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,N.jsx)(X.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Button from @digdir/design-system-react instead."})}}},args:{variant:P.Wu.Quiet,size:P.qE.Small,onClick:function(p){alert(JSON.stringify(p.target.innerHTML)+" clicked!")}}};var g=function(p){return(0,N.jsx)(P.zx,Object.assign({},p))};g.displayName="Template";var k=function(p){return(0,N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,N.jsx)(P.zx,Object.assign({},p))})};k.displayName="WithinContainerTemplate";var h=g.bind({});h.args={color:P.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=g.bind({});m.args={color:P.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var u=g.bind({});u.args={color:P.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var a=g.bind({});a.args={color:P.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var j=g.bind({});j.args={color:P.rp.Success,icon:(0,N.jsx)(F.Z,{}),iconPlacement:"left",children:"Button"},j.parameters={docs:{description:{story:""}}};var d=g.bind({});d.args={color:P.rp.Success,icon:(0,N.jsx)(Y.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var x=g.bind({});x.args={color:P.rp.Success,icon:(0,N.jsx)(F.Z,{})},x.parameters={docs:{description:{story:""}}};var R=k.bind({});R.args={color:P.rp.Primary,icon:(0,N.jsx)(F.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},R.parameters={docs:{description:{story:""}}};var O=g.bind({});O.args={children:"Disabled button",disabled:!0},O.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},x.parameters),R.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},R.parameters),O.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},O.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>g,Compact:()=>h,Disabled:()=>m,Error:()=>k,LongText:()=>j,Normal:()=>b,ReadOnly:()=>u,WithDescription:()=>a,WithHiddenLabel:()=>d,__namedExportsOrder:()=>x,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Checkbox/Checkbox.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Normal:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},ReadOnly:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:50,line:47},endLoc:{col:1,line:49},startBody:{col:50,line:47},endBody:{col:1,line:49}}},f="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const D={title:"Components/Checkbox",component:X.X,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change.",deprecationWarning:"Use Checkbox from @digdir/design-system-react instead."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var i=function(O){return(0,P.jsx)(X.X,Object.assign({},O))};i.displayName="Template";var b=i.bind({});b.args={},b.parameters={docs:{description:{story:"This is the default checkbox."}}};var g=i.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"This is a checked checkbox."}}};var k=i.bind({});k.args={error:!0},k.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var h=i.bind({});h.args={compact:!0},h.parameters={docs:{description:{story:"This is the compact checkbox."}}};var m=i.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var u=i.bind({});u.args={readOnly:!0},u.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var a=i.bind({});a.args={description:"Lorem ipsum dolor sit amet."},a.parameters={docs:{description:{story:"This is a checkbox with description."}}};var j=i.bind({});j.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},j.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var d=i.bind({});d.args={hideLabel:!0},d.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},k.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},a.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},j.parameters),d.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},d.parameters);var x=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>L,Disabled:()=>ce,Error:()=>B,Horizontal:()=>t,Vertical:()=>r,__namedExportsOrder:()=>be,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),d=e.n(j),x=e("./src/components/Checkbox/Checkbox.tsx"),R=e("./src/components/FieldSet/index.ts"),O=e("./src/utils/arrayUtils.ts"),I=e("./src/hooks/index.ts"),y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(y),w=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css"),S={};S.insert="head",S.singleton=!1;var z=p()(w.Z,S);const Z=w.Z.locals||{};var se=e("./node_modules/react/jsx-runtime.js");function ue(ne,W){return v(ne)||q(ne,W)||de(ne,W)||le()}function le(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function de(ne,W){if(!!ne){if(typeof ne=="string")return re(ne,W);var K=Object.prototype.toString.call(ne).slice(8,-1);if(K==="Object"&&ne.constructor&&(K=ne.constructor.name),K==="Map"||K==="Set")return Array.from(ne);if(K==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K))return re(ne,W)}}function re(ne,W){(W==null||W>ne.length)&&(W=ne.length);for(var K=0,ae=new Array(W);K<W;K++)ae[K]=ne[K];return ae}function q(ne,W){var K=ne==null?null:typeof Symbol!="undefined"&&ne[Symbol.iterator]||ne["@@iterator"];if(K!=null){var ae=[],_e=!0,ke=!1,Se,xe;try{for(K=K.call(ne);!(_e=(Se=K.next()).done)&&(ae.push(Se.value),!(W&&ae.length===W));_e=!0);}catch(he){ke=!0,xe=he}finally{try{!_e&&K.return!=null&&K.return()}finally{if(ke)throw xe}}return ae}}function v(ne){if(Array.isArray(ne))return ne}var U;(function(ne){ne.Vertical="vertical",ne.Horizontal="horizontal"})(U||(U={}));var Q=function(W,K){switch(K.type){case"check":return W.concat([K.name]);case"uncheck":return W.filter(function(ae){return ae!==K.name});case"reset":return K.state}},M=function(W){return W.filter(function(K){var ae=K.checked;return ae}).map(function(K){var ae=K.name;return ae})},ee=function(W){var K=W.compact,ae=W.description,_e=W.disabled,ke=W.error,Se=W.items,xe=W.legend,he=W.onChange,Oe=W.presentation,Ne=W.variant,Be=Ne===void 0?U.Vertical:Ne;if(!(0,O.zb)(Se.map(function(je){return je.name})))throw Error("Each name in the checkbox group must be unique.");var Re=(0,n.useReducer)(Q,M(Se)),ye=ue(Re,2),ge=ye[0],V=ye[1];(0,n.useEffect)(function(){return V({type:"reset",state:M(Se)})},[Se]);var fe=(0,I.D9)(ge);return(0,I.PQ)(function(){he&&!_e&&!(0,O.cO)(fe,ge)&&he(ge)},[ge,he,_e]),(0,se.jsx)(R.C,{description:ae,disabled:_e,error:ke,legend:xe,size:K?R.w.Xsmall:R.w.Small,children:(0,se.jsx)("div",{className:d()(Z["checkbox-group"],Z["checkbox-group--"+Be],K&&Z["checkbox-group--compact"]),children:Se.map(function(je){return(0,se.jsx)(x.X,{checkboxId:je.checkboxId,checked:ge.includes(je.name),compact:K,description:je.description,disabled:_e||je.disabled,error:!!ke,label:je.label,name:je.name,onChange:function(Te){V({type:Te.target.checked?"check":"uncheck",name:je.name})},presentation:Oe},je.name)})})})};ee.displayName="CheckboxGroup";try{ee.displayName="CheckboxGroup",ee.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:ee.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(ne){}var pe=`import React from 'react';
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
`,me={Vertical:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Horizontal:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Compact:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Error:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}},Disabled:{startLoc:{col:55,line:59},endLoc:{col:1,line:61},startBody:{col:55,line:59},endBody:{col:1,line:61}}},$="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const E={title:"Components/CheckboxGroup",component:ee,parameters:{design:(0,l.vc)([{type:"figma",url:$},{type:"link",url:$}]),docs:{page:function(){return(0,se.jsx)(c.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes.",deprecationWarning:"Use CheckboxGroup from @digdir/design-system-react instead."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:U.Vertical}};var _=function(W){return(0,se.jsx)(ee,Object.assign({},W))};_.displayName="Template";var r=_.bind({});r.args={variant:U.Vertical},r.parameters={docs:{description:{story:"This is the default setting."}}};var t=_.bind({});t.args={variant:U.Horizontal},t.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var L=_.bind({});L.args={compact:!0},L.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var B=_.bind({});B.args={error:"Du m\xE5 velge minst ett av alternativene over."},B.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var ce=_.bind({});ce.args={disabled:!0},ce.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},r.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},r.parameters),t.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},t.parameters),L.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},L.parameters),B.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},B.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},ce.parameters);var be=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{SimpleExample:()=>a,__namedExportsOrder:()=>j,default:()=>m});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./src/DesignTokens/index.ts"),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(F),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css"),Y={};Y.insert="head",Y.singleton=!1;var N=X()(P.Z,Y);const f=P.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),i=function(x){var R=x.value,O=x.width,I=O===void 0?70:O,y=x.strokeWidth,p=y===void 0?2.5:y,w=x.ariaLabel,S=x.label,z=x.id,Z=z+"-label",se=!w&&S?Z:void 0;return(0,D.jsxs)("div",{id:z,className:f.container,style:{width:I+"px"},role:"progressbar","aria-labelledby":se,"aria-label":w,children:[S&&(0,D.jsx)("div",{id:Z,className:f.label,children:S}),(0,D.jsxs)("svg",{className:f.svg,viewBox:"0 0 35.8 35.8",children:[(0,D.jsx)(b,{stroke:J.T.ColorsBlue200,strokeWidth:p}),(0,D.jsx)(b,{strokeWidth:p,stroke:J.T.ColorsBlue900,strokeDashoffset:100-R,strokeDasharray:"100 100",className:f.circleTransition})]})]})};i.displayName="CircularProgress";var b=function(x){return(0,D.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},x))};b.displayName="Circle";try{i.displayName="CircularProgress",i.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:i.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(d){}var g=`import React from 'react';
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
`,k={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const m={title:"Components/CircularProgress",component:i,parameters:{design:(0,l.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,D.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var u=function(x){return(0,D.jsx)(i,Object.assign({},x))};u.displayName="CircularTemplate";var a=u.bind({});a.args={width:100,value:60,label:"3/5",id:"progress"},a.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},a.parameters);var j=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>b,__namedExportsOrder:()=>g,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/ErrorMessage/ErrorMessage.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Example:{startLoc:{col:54,line:42},endLoc:{col:1,line:44},startBody:{col:54,line:42},endBody:{col:1,line:44}}},f="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const D={title:"Components/ErrorMessage",component:X.B,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"Simple error-message suitable to be shown in table views",deprecationWarning:"Use ErrorMessage from @digdir/design-system-react instead."})}}},args:{id:"error-message-story"}};var i=function(h){return(0,P.jsx)(X.B,Object.assign({},h,{children:"This is an error message"}))};i.displayName="Template";var b=i.bind({});b.args={},b.parameters={docs:{description:{story:""}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},b.parameters);var g=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>g,Disabled:()=>m,Error:()=>h,Normal:()=>b,WithDescription:()=>k,__namedExportsOrder:()=>u,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/FieldSet/FieldSet.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},f="";const D={title:"Components/FieldSet",component:X.C,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"Field set component to use as a wrapper for groups of form elements.",deprecationWarning:"Use FieldSet from @digdir/design-system-react instead."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:X.w.Small}};var i=function(j){return(0,P.jsx)(X.C,Object.assign({},j,{children:j.children}))};i.displayName="Template";var b=i.bind({});b.args={},b.parameters={docs:{description:{story:"This is a normal field set."}}};var g=i.bind({});g.args={size:X.w.Xsmall},g.parameters={docs:{description:{story:"This is a compact field set."}}};var k=i.bind({});k.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},k.parameters={docs:{description:{story:"This is a field set with a description."}}};var h=i.bind({});h.args={error:"Her er det en beskrivende feilmelding."},h.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var m=i.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},g.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},k.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters);var u=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Dashed:()=>se,Solid:()=>Z,__namedExportsOrder:()=>ue,default:()=>S});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./node_modules/classnames/index.js"),F=e.n(J),X=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(X),Y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),N={};N.insert="head",N.singleton=!1;var f=P()(Y.Z,N);const D=Y.Z.locals||{};var i;(function(le){le.Solid="solid",le.Dashed="dashed"})(i||(i={}));var b=(0,n.createContext)({borderStyle:i.Solid}),g=function(){var de=(0,n.useContext)(b);if(de===void 0)throw new Error("useListContext must be used within a ListContext");return de},k=e("./node_modules/react/jsx-runtime.js"),h=function(de){var re=de.children,q=de.borderStyle,v=q===void 0?i.Solid:q;return(0,k.jsx)("ul",{className:F()(D.list,D["list--"+v]),children:(0,k.jsx)(b.Provider,{value:{borderStyle:v},children:re})})};h.displayName="List";try{h.displayName="List",h.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:h.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(le){}var m=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),u={};u.insert="head",u.singleton=!1;var a=P()(m.Z,u);const j=m.Z.locals||{};var d=function(de){var re=de.children,q=g(),v=q.borderStyle;return(0,k.jsx)("li",{className:F()(j["list-item"],j["list-item--"+v]),children:re})};d.displayName="ListItem";try{d.displayName="ListItem",d.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:d.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(le){}var x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css"),R={};R.insert="head",R.singleton=!1;var O=P()(x.Z,R);const I=x.Z.locals||{};var y=`import React from 'react';
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
`,p={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},w="";const S={title:"Components/List",component:h,parameters:{design:(0,l.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,k.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var z=function(de){return(0,k.jsx)("div",{className:I.container,children:(0,k.jsxs)(h,{borderStyle:de.borderStyle,children:[(0,k.jsx)(d,{children:"List Item 1"}),(0,k.jsx)(d,{children:"List Item 2"}),(0,k.jsx)(d,{children:"List Item 3"})]})})};z.displayName="Template";var Z=z.bind({});Z.args={borderStyle:i.Solid},Z.parameters={docs:{description:{story:""}}};var se=z.bind({});se.args={borderStyle:i.Dashed},se.parameters={docs:{description:{story:""}}},Z.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},Z.parameters),se.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},se.parameters);var ue=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>r,GoogleMaps:()=>be,KartverketSea:()=>ce,KartverketTerrain:()=>B,MapWithMarkerZoomAndCenter:()=>t,OpenStreetMap:()=>L,__namedExportsOrder:()=>ne,default:()=>E});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),b=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),h=e("./node_modules/react-leaflet/lib/MapContainer.js"),m=e("./node_modules/react-leaflet/lib/TileLayer.js"),u=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),j=e("./node_modules/react-leaflet/lib/hooks.js"),d=e("./node_modules/leaflet/dist/leaflet-src.js"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(x),O=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),I={};I.insert="head",I.singleton=!1;var y=R()(O.Z,I);const p=O.Z.locals||{};var w=e("./node_modules/leaflet/dist/leaflet.css"),S=e("./node_modules/react/jsx-runtime.js"),z={latitude:64.888996,longitude:12.8186054},Z=4,se=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],ue=function(K){var ae=K.readOnly,_e=ae===void 0?!1:ae,ke=K.layers,Se=ke===void 0?se:ke,xe=K.centerLocation,he=xe===void 0?z:xe,Oe=K.zoom,Ne=Oe===void 0?Z:Oe,Be=K.markerLocation,Re=K.markerIcon,ye=K.onClick;return(0,S.jsxs)(h.h,{className:p.map,center:le(he),zoom:Ne,zoomControl:!_e,dragging:!_e,touchZoom:!_e,doubleClickZoom:!_e,scrollWheelZoom:!_e,attributionControl:!1,children:[Se.map(function(ge,V){return(0,S.jsx)(m.I,{url:ge.url,attribution:ge.attribution,subdomains:ge.subdomains?ge.subdomains:[],opacity:_e?.5:1},V)}),(0,S.jsx)(u.z,{prefix:!1}),Be?(0,S.jsx)(a.J,{position:le(Be),icon:(0,d.icon)(Re)}):null,(0,S.jsx)(de,{readOnly:_e,onClick:ye})]})};ue.displayName="Map";function le(W){return[W.latitude,W.longitude]}var de=function(K){var ae=K.onClick,_e=K.readOnly;return(0,j.zV)({click:function(Se){if(ae&&!_e){var xe=Se.latlng.wrap();ae({latitude:xe.lat,longitude:xe.lng})}}}),null};try{ue.displayName="Map",ue.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:ue.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(W){}var re=e("./node_modules/console-browserify/index.js");function q(W,K){return ee(W)||M(W,K)||U(W,K)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(W,K){if(!!W){if(typeof W=="string")return Q(W,K);var ae=Object.prototype.toString.call(W).slice(8,-1);if(ae==="Object"&&W.constructor&&(ae=W.constructor.name),ae==="Map"||ae==="Set")return Array.from(W);if(ae==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae))return Q(W,K)}}function Q(W,K){(K==null||K>W.length)&&(K=W.length);for(var ae=0,_e=new Array(K);ae<K;ae++)_e[ae]=W[ae];return _e}function M(W,K){var ae=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(ae!=null){var _e=[],ke=!0,Se=!1,xe,he;try{for(ae=ae.call(W);!(ke=(xe=ae.next()).done)&&(_e.push(xe.value),!(K&&_e.length===K));ke=!0);}catch(Oe){Se=!0,he=Oe}finally{try{!ke&&ae.return!=null&&ae.return()}finally{if(Se)throw he}}return _e}}function ee(W){if(Array.isArray(W))return W}var pe=`import React, { useState } from 'react';
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
`,me={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},$="";const E={title:"Components/Map",component:ue,parameters:{layout:"fullscreen",design:(0,b.vc)([{type:"figma",url:$},{type:"link",url:$}]),docs:{page:function(){return(0,S.jsx)(g.Y,{description:"Map component"})}}},args:{}};var _=function(K){var ae=(0,i.useState)(K.markerLocation),_e=q(ae,2),ke=_e[0],Se=_e[1],xe=function(Oe){Se(Oe),re.log("Map clicked at ["+Oe.latitude+","+Oe.longitude+"]")};return(0,S.jsx)(ue,Object.assign({},K,{markerLocation:ke,onClick:xe}))};_.displayName="Template";var r=_.bind({});r.args={},r.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var t=_.bind({});t.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},t.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var L=_.bind({});L.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},L.parameters={docs:{description:{story:"OpenStreetMap"}}};var B=_.bind({});B.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},B.parameters={docs:{description:{story:"Kartverket terrain map"}}};var ce=_.bind({});ce.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},ce.parameters={docs:{description:{story:"Kartverket sea map"}}};var be=_.bind({});be.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},be.parameters={docs:{description:{story:"Google Maps"}}},r.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},t.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),B.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},B.parameters),ce.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},be.parameters);var ne=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Primary:()=>q,Success:()=>v,__namedExportsOrder:()=>U,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J;function F(){return F=Object.assign?Object.assign.bind():function(Q){for(var M=1;M<arguments.length;M++){var ee=arguments[M];for(var pe in ee)Object.prototype.hasOwnProperty.call(ee,pe)&&(Q[pe]=ee[pe])}return Q},F.apply(this,arguments)}var X=function(M){return n.createElement("svg",F({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M),J||(J=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 2h-2v20h2V2ZM9 1v21H7v-9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v9H0v2h24v-2h-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v15h-2V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1Zm10 21h2V8h-2v14ZM3 22v-8h2v8H3Z",fill:"currentColor"})))},P;(function(Q){Q.Primary="primary",Q.Success="success"})(P||(P={}));var Y;(function(Q){Q.Small="small",Q.Medium="medium"})(Y||(Y={}));var N=(0,n.createContext)({color:P.Primary,size:Y.Medium}),f=function(){var M=(0,n.useContext)(N);if(M===void 0)throw new Error("usePageContext must be used within a PageContext");return M},D=e("./node_modules/classnames/index.js"),i=e.n(D),b=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),g=e.n(b),k=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css"),h={};h.insert="head",h.singleton=!1;var m=g()(k.Z,h);const u=k.Z.locals||{};var a=e("./node_modules/react/jsx-runtime.js"),j=function(M){var ee=M.children;return(0,a.jsx)("div",{className:i()(u["page-content"]),children:ee})};j.displayName="PageContent";try{j.displayName="PageContent",j.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:j.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(Q){}var d=e("./src/components/SvgIcon/index.ts"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css"),R={};R.insert="head",R.singleton=!1;var O=g()(x.Z,R);const I=x.Z.locals||{};var y=function(M){var ee=M.children,pe=M.icon,me=f(),$=me.color,E=me.size,_=E===Y.Small?28:40;return(0,a.jsxs)("header",{className:i()(I["page-header"],I["page-header--"+$],I["page-header--"+E]),children:[(0,a.jsx)(d.l,{width:_,height:_,svgIconComponent:pe}),(0,a.jsx)("span",{children:ee})]})};y.displayName="PageHeader";try{y.displayName="PageHeader",y.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:y.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(Q){}var p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css"),w={};w.insert="head",w.singleton=!1;var S=g()(p.Z,w);const z=p.Z.locals||{};var Z=function(M){var ee=M.children,pe=M.color,me=pe===void 0?P.Primary:pe,$=M.size,E=$===void 0?Y.Medium:$;return(0,a.jsx)("div",{className:z.page,children:(0,a.jsx)(N.Provider,{value:{color:me,size:E},children:ee})})};Z.displayName="Page";try{Z.displayName="Page",Z.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:Z.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(Q){}var se=`import React from 'react';
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
`,ue={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:54},startBody:{col:46,line:42},endBody:{col:1,line:54}}},le="";const de={title:"Components/Page",component:Z,parameters:{design:(0,l.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,a.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var re=function(M){return(0,a.jsx)("div",{style:{width:"600px"},children:(0,a.jsxs)(Z,{color:M.color,size:M.size,children:[(0,a.jsx)(y,{icon:(0,a.jsx)(X,{}),children:"PageHeader"}),(0,a.jsx)(j,{children:"PageContent"})]})})};re.displayName="Template";var q=re.bind({});q.args={color:P.Primary,size:Y.Medium},q.parameters={docs:{description:{story:""}}};var v=re.bind({});v.args={color:P.Success,size:Y.Medium},v.parameters={docs:{description:{story:""}}},q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},q.parameters),v.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},v.parameters);var U=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>$,default:()=>ee,descriptionTexts:()=>M});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),X=e.n(F),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Y=e.n(P),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(N),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e.n(D),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),g=e.n(b),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e.n(k),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),j=e.n(a),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e.n(d),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),O=e.n(R),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),y=e.n(I),p=e("./node_modules/react/index.js"),w=e("./node_modules/storybook-addon-designs/esm/index.js"),S=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Pagination/Pagination.tsx"),Z=e("./node_modules/react/jsx-runtime.js");function se(E,_){return q(E)||re(E,_)||le(E,_)||ue()}function ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function le(E,_){if(!!E){if(typeof E=="string")return de(E,_);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return de(E,_)}}function de(E,_){(_==null||_>E.length)&&(_=E.length);for(var r=0,t=new Array(_);r<_;r++)t[r]=E[r];return t}function re(E,_){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],L=!0,B=!1,ce,be;try{for(r=r.call(E);!(L=(ce=r.next()).done)&&(t.push(ce.value),!(_&&t.length===_));L=!0);}catch(ne){B=!0,be=ne}finally{try{!L&&r.return!=null&&r.return()}finally{if(B)throw be}}return t}}function q(E){if(Array.isArray(E))return E}var v=`import React, { useState } from 'react';
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
`,U={Example:{startLoc:{col:52,line:52},endLoc:{col:1,line:73},startBody:{col:52,line:52},endBody:{col:1,line:73}}},Q="",M={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"};const ee={title:"Components/Pagination",component:z.t,parameters:{design:(0,w.vc)([{type:"figma",url:Q},{type:"link",url:Q}]),docs:{page:function(){return(0,Z.jsx)(S.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var pe=function(_){var r=(0,p.useState)(5),t=se(r,2),L=t[0],B=t[1],ce=(0,p.useState)(0),be=se(ce,2),ne=be[0],W=be[1],K=function(_e){B(parseInt(_e.target.value,10)),W(0)};return(0,Z.jsx)(z.t,Object.assign({},_,{rowsPerPage:L,currentPage:ne,setCurrentPage:W,onRowsPerPageChange:K,descriptionTexts:M}))};pe.displayName="Template";var me=pe.bind({});me.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},me.parameters={docs:{description:{story:""}}},me.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},me.parameters);var $=["descriptionTexts","Example"];try{M.displayName="descriptionTexts",M.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:M.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(E){}},"./src/components/Panel/Panel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>h,Info:()=>g,Success:()=>b,Warning:()=>k,__namedExportsOrder:()=>m,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Panel/Panel.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},f="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const D={title:"Components/Panel",component:X.s,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Paneltittel",children:(0,P.jsx)("div",{children:"Her kommer litt informasjon"})}};var i=function(a){return(0,P.jsx)(X.s,Object.assign({},a))};i.displayName="Template";var b=i.bind({});b.args={variant:X.c.Success},b.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};var g=i.bind({});g.parameters={docs:{description:{story:"Infobeskrivelse"}}};var k=i.bind({});k.args={variant:X.c.Warning},k.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};var h=i.bind({});h.args={variant:X.c.Error},h.parameters={docs:{description:{story:"Feilbeskrivelse"}}},b.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},b.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},g.parameters),k.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},k.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},h.parameters);var m=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Error:()=>$,Info:()=>pe,Success:()=>ee,Warning:()=>me,__namedExportsOrder:()=>E,default:()=>Q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),b=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),k=e("./.storybook/StoryPage.tsx"),h=e("./src/components/Button/index.ts"),m=e("./src/components/Panel/Panel.tsx"),u=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),a=e("./node_modules/classnames/index.js"),j=e.n(a),d=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(d),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),O={};O.insert="head",O.singleton=!1;var I=x()(R.Z,O);const y=R.Z.locals||{};var p=e("./node_modules/react/jsx-runtime.js"),w=function(r){var t=r.children;return(0,p.jsx)(u.Eh,{className:j()(y["popover-panel__arrow"]),asChild:!0,children:t})};w.displayName="renderArrow";var S=function(r){var t=r.children,L=r.variant,B=L===void 0?m.c.Warning:L,ce=r.trigger,be=r.side,ne=be===void 0?"top":be,W=r.title,K=r.showIcon,ae=r.forceMobileLayout,_e=r.showPointer,ke=_e===void 0?!0:_e,Se=r.onOpenChange,xe=r.open,he=xe===void 0?!1:xe;return(0,p.jsxs)(u.fC,{open:he,onOpenChange:Se,children:[(0,p.jsx)(u.xz,{asChild:!0,role:"button",children:ce}),(0,p.jsx)(u.VY,{side:ne,className:y["popover-panel"],children:(0,p.jsx)(m.s,{title:W,showIcon:K,forceMobileLayout:ae,showPointer:ke,variant:B,renderArrow:w,children:t})})]})};S.displayName="PopoverPanel";const z=null;try{S.displayName="PopoverPanel",S.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:S.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(_){}function Z(_,r){return re(_)||de(_,r)||ue(_,r)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(_,r){if(!!_){if(typeof _=="string")return le(_,r);var t=Object.prototype.toString.call(_).slice(8,-1);if(t==="Object"&&_.constructor&&(t=_.constructor.name),t==="Map"||t==="Set")return Array.from(_);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return le(_,r)}}function le(_,r){(r==null||r>_.length)&&(r=_.length);for(var t=0,L=new Array(r);t<r;t++)L[t]=_[t];return L}function de(_,r){var t=_==null?null:typeof Symbol!="undefined"&&_[Symbol.iterator]||_["@@iterator"];if(t!=null){var L=[],B=!0,ce=!1,be,ne;try{for(t=t.call(_);!(B=(be=t.next()).done)&&(L.push(be.value),!(r&&L.length===r));B=!0);}catch(W){ce=!0,ne=W}finally{try{!B&&t.return!=null&&t.return()}finally{if(ce)throw ne}}return L}}function re(_){if(Array.isArray(_))return _}var q=`import React from 'react';
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
`,v={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},U="";const Q={title:"Components/Panel/PopoverPanel",component:S,parameters:{design:(0,b.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,p.jsx)(k.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:m.c.Warning,trigger:(0,p.jsx)("button",{children:"\xC5pne"}),side:"top"}};var M=function(r){var t=(0,g.eJ)(!1),L=Z(t,2),B=L[0],ce=L[1],be=function(){ce(!B)};return(0,p.jsx)("div",{children:(0,p.jsxs)(S,{variant:r.variant,side:r.side,title:r.title,open:B,trigger:(0,p.jsx)(h.zx,{variant:h.Wu.Filled,color:h.rp.Primary,children:"\xC5pne"}),onOpenChange:ce,showPointer:r.showPointer,showIcon:r.showIcon,forceMobileLayout:r.forceMobileLayout,children:[(0,p.jsx)("div",{children:"Her kommer litt informasjon"}),(0,p.jsx)(h.zx,{variant:h.Wu.Filled,color:h.rp.Primary,size:h.qE.Small,onClick:be,children:"Lukk"})]})})};M.displayName="Template";var ee=M.bind({});ee.args={variant:m.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},ee.argTypes={trigger:{control:!1}},ee.parameters={docs:{description:{story:""}}};var pe=M.bind({});pe.args={variant:m.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},pe.argTypes={trigger:{control:!1}},pe.parameters={docs:{description:{story:""}}};var me=M.bind({});me.args={variant:m.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},me.argTypes={trigger:{control:!1}},me.parameters={docs:{description:{story:""}}};var $=M.bind({});$.args={variant:m.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},$.argTypes={trigger:{control:!1}},$.parameters={docs:{description:{story:""}}},ee.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},me.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters);var E=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Checked:()=>g,Compact:()=>h,Default:()=>b,Disabled:()=>m,Error:()=>k,LongText:()=>a,WithDescription:()=>u,WithHiddenLabel:()=>j,__namedExportsOrder:()=>d,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/RadioButton/RadioButton.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Default:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Checked:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Error:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Compact:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},Disabled:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithDescription:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},LongText:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}},WithHiddenLabel:{startLoc:{col:53,line:47},endLoc:{col:1,line:49},startBody:{col:53,line:47},endBody:{col:1,line:49}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const D={title:"Components/RadioButton",component:X.E,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}",deprecationWarning:"Use RadioButton from @digdir/design-system-react instead."})}}},args:{label:"Label",name:"label",value:"label"}};var i=function(R){return(0,P.jsx)(X.E,Object.assign({},R))};i.displayName="Template";var b=i.bind({});b.args={},b.parameters={docs:{description:{story:"Default radio button."}}};var g=i.bind({});g.args={checked:!0},g.parameters={docs:{description:{story:"Checked radio button."}}};var k=i.bind({});k.args={error:!0},k.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var h=i.bind({});h.args={size:X.j.Xsmall},h.parameters={docs:{description:{story:"This is the compact radio button."}}};var m=i.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var u=i.bind({});u.args={description:"Lorem ipsum dolor sit amet."},u.parameters={docs:{description:{story:"This is a radio button with description."}}};var a=i.bind({});a.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},a.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var j=i.bind({});j.args={hideLabel:!0},j.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},b.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},g.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},k.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},u.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},a.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},j.parameters);var d=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Compact:()=>me,Disabled:()=>E,Error:()=>$,Horizontal:()=>pe,Vertical:()=>ee,__namedExportsOrder:()=>_,default:()=>Q});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),m=e("./src/components/RadioButton/index.ts"),u=e("./src/components/FieldSet/index.ts"),a=e("./src/hooks/index.ts"),j=e("./src/utils/arrayUtils.ts"),d=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),x=e.n(d),R=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css"),O={};O.insert="head",O.singleton=!1;var I=x()(R.Z,O);const y=R.Z.locals||{};var p=e("./node_modules/react/jsx-runtime.js");function w(r,t){return ue(r)||se(r,t)||z(r,t)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(r,t){if(!!r){if(typeof r=="string")return Z(r,t);var L=Object.prototype.toString.call(r).slice(8,-1);if(L==="Object"&&r.constructor&&(L=r.constructor.name),L==="Map"||L==="Set")return Array.from(r);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return Z(r,t)}}function Z(r,t){(t==null||t>r.length)&&(t=r.length);for(var L=0,B=new Array(t);L<t;L++)B[L]=r[L];return B}function se(r,t){var L=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(L!=null){var B=[],ce=!0,be=!1,ne,W;try{for(L=L.call(r);!(ce=(ne=L.next()).done)&&(B.push(ne.value),!(t&&B.length===t));ce=!0);}catch(K){be=!0,W=K}finally{try{!ce&&L.return!=null&&L.return()}finally{if(be)throw W}}return B}}function ue(r){if(Array.isArray(r))return r}var le;(function(r){r.Xsmall="xsmall",r.Small="small"})(le||(le={}));var de;(function(r){r.Vertical="vertical",r.Horizontal="horizontal"})(de||(de={}));var re=function(t){var L=t.description,B=t.disabled,ce=t.error,be=t.items,ne=t.legend,W=t.name,K=t.onChange,ae=t.presentation,_e=t.size,ke=_e===void 0?le.Small:_e,Se=t.value,xe=t.variant,he=xe===void 0?de.Vertical:xe;if(!(0,j.zb)(be.map(function(Te){return Te.value})))throw Error("Each value in the radio group must be unique.");var Oe=(0,n.useState)(Se),Ne=w(Oe,2),Be=Ne[0],Re=Ne[1];(0,n.useEffect)(function(){Re(Se)},[Se]);var ye=(0,a.D9)(Be);(0,a.PQ)(function(){K&&!B&&ye!==Be&&K(Be)},[Be,B,K]);var ge=function(Ke){return function(we){return we.target.checked&&Re(Ke)}},V=ke===le.Xsmall?[u.w.Xsmall,m.j.Xsmall]:[u.w.Small,m.j.Small],fe=w(V,2),je=fe[0],De=fe[1];return(0,p.jsx)(u.C,{description:L,disabled:B,error:ce,legend:ne,size:je,children:(0,p.jsx)("div",{className:[y["radio-group"],y["radio-group--"+he],y["radio-group--"+ke]].join(" "),role:ae?void 0:"radiogroup",children:be.map(function(Te){return(0,n.createElement)(m.E,Object.assign({},Te,{checked:Te.value===Be,disabled:B||Te.disabled,error:!!ce,key:Te.value,name:W,onChange:ge(Te.value),presentation:ae,size:De}))})})})};re.displayName="RadioGroup";try{re.displayName="RadioGroup",re.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:re.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(r){}var q=`import React from 'react';
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
`,v={Vertical:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Horizontal:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Compact:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Error:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}},Disabled:{startLoc:{col:52,line:50},endLoc:{col:1,line:52},startBody:{col:52,line:50},endBody:{col:1,line:52}}},U="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const Q={title:"Components/RadioGroup",component:re,parameters:{design:(0,l.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,p.jsx)(c.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes.",deprecationWarning:"Use RadioGroup from @digdir/design-system-react instead."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var M=function(t){return(0,p.jsx)(re,Object.assign({},t))};M.displayName="Template";var ee=M.bind({});ee.args={variant:de.Vertical},ee.parameters={docs:{description:{story:"This is the default setting."}}};var pe=M.bind({});pe.args={variant:de.Horizontal},pe.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var me=M.bind({});me.args={size:le.Xsmall},me.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var $=M.bind({});$.args={error:"Du m\xE5 velge et av alternativene over."},$.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var E=M.bind({});E.args={disabled:!0},E.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},ee.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},ee.parameters),pe.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},pe.parameters),me.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},me.parameters),$.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},$.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},E.parameters);var _=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>q,__namedExportsOrder:()=>v,default:()=>de});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),b=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),k=e("./.storybook/StoryPage.tsx"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),u=e("./node_modules/classnames/index.js"),a=e.n(u),j=e("./src/components/_InputWrapper/index.ts"),d=e("./node_modules/react/jsx-runtime.js"),x=["id","onChange","disabled","label"];function R(U,Q){if(U==null)return{};var M=O(U,Q),ee,pe;if(Object.getOwnPropertySymbols){var me=Object.getOwnPropertySymbols(U);for(pe=0;pe<me.length;pe++)ee=me[pe],!(Q.indexOf(ee)>=0)&&(!Object.prototype.propertyIsEnumerable.call(U,ee)||(M[ee]=U[ee]))}return M}function O(U,Q){if(U==null)return{};var M={},ee=Object.keys(U),pe,me;for(me=0;me<ee.length;me++)pe=ee[me],!(Q.indexOf(pe)>=0)&&(M[pe]=U[pe]);return M}var I=function(Q){var M=Q.id,ee=Q.onChange,pe=Q.disabled,me=pe===void 0?!1:pe,$=Q.label,E=R(Q,x);return(0,d.jsx)(j.SP,{disabled:me,isSearch:!0,label:$,inputRenderer:function(r){var t=r.className,L=r.variant,B={id:M,disabled:me,className:a()(t)};return(0,d.jsx)("input",Object.assign({},B,E,{"data-testid":M+"-"+L,onChange:ee}))}})};I.displayName="SearchField";try{I.displayName="SearchField",I.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:I.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(U){}function y(U,Q){return Z(U)||z(U,Q)||w(U,Q)||p()}function p(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(U,Q){if(!!U){if(typeof U=="string")return S(U,Q);var M=Object.prototype.toString.call(U).slice(8,-1);if(M==="Object"&&U.constructor&&(M=U.constructor.name),M==="Map"||M==="Set")return Array.from(U);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return S(U,Q)}}function S(U,Q){(Q==null||Q>U.length)&&(Q=U.length);for(var M=0,ee=new Array(Q);M<Q;M++)ee[M]=U[M];return ee}function z(U,Q){var M=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(M!=null){var ee=[],pe=!0,me=!1,$,E;try{for(M=M.call(U);!(pe=($=M.next()).done)&&(ee.push($.value),!(Q&&ee.length===Q));pe=!0);}catch(_){me=!0,E=_}finally{try{!pe&&M.return!=null&&M.return()}finally{if(me)throw E}}return ee}}function Z(U){if(Array.isArray(U))return U}var se=`import React from 'react';
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
`,ue={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},le="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const de={title:"Components/SearchField",component:I,parameters:{design:(0,b.vc)([{type:"figma",url:le},{type:"link",url:le}]),docs:{page:function(){return(0,d.jsx)(k.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var re=function(Q){var M=(0,g.D8)(),ee=y(M,1),pe=ee[0].disabled;return(0,d.jsx)(I,Object.assign({disabled:pe},Q))};re.displayName="Template";var q=re.bind({});q.args={},q.parameters={docs:{description:{story:"Search field."}}},q.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},q.parameters);var v=["Example"]},"./src/components/Select/Stories/MultipleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Disabled:()=>u,Error:()=>a,Multiple:()=>m,__namedExportsOrder:()=>j,default:()=>k});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),J=e.n(c),F=e("./node_modules/react/index.js"),X=e("./node_modules/storybook-addon-designs/esm/index.js"),P=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/Select/Select.tsx"),N=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,D={Multiple:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Disabled:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}},Error:{startLoc:{col:48,line:62},endLoc:{col:1,line:66},startBody:{col:48,line:62},endBody:{col:1,line:66}}},i="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",b=[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}],g=b.map(function(d){return Object.assign({},d,{deleteButtonLabel:"Slett "+d.label})});const k={title:"Components/Select/Multiple",component:Y.P,parameters:{design:(0,X.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,N.jsx)(P.Y,{description:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed.'",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:g}};var h=function(x){return(0,N.jsx)("div",{style:{width:"440px"},children:(0,N.jsx)(Y.P,Object.assign({},x))})};h.displayName="Template";var m=h.bind({});m.args={},m.parameters={docs:{description:{story:"This is the default multiple select box."}}};var u=h.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var a=h.bind({});a.args={error:!0},a.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},m.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},a.parameters);var j=["Multiple","Disabled","Error"]},"./src/components/Select/Stories/SingleSelect.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>b,Disabled:()=>g,Error:()=>k,__namedExportsOrder:()=>h,default:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),c=e("./node_modules/react/index.js"),J=e("./node_modules/storybook-addon-designs/esm/index.js"),F=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Select/Select.tsx"),P=e("./node_modules/react/jsx-runtime.js"),Y=`import React from 'react';
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
`,N={Default:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}},Error:{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627";const D={title:"Components/Select/Single",component:X.P,parameters:{design:(0,J.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,P.jsx)(F.Y,{description:"This is a select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed.",deprecationWarning:"Use Select from @digdir/design-system-react instead."})}}},args:{label:"Velg et fylke",multiple:!1,options:[{label:"Agder",value:"Agd"},{label:"Innlandet",value:"Inn"},{label:"M\xF8re og Romsdal",value:"MoR"},{label:"Nordland",value:"Nor"},{label:"Oslo",value:"Osl"},{label:"Rogaland",value:"Rog"},{label:"Vestfold og Telemark",value:"VoT"},{label:"Troms og Finnmark",value:"ToF"},{label:"Tr\xF8ndelag",value:"Tr\xF8"},{label:"Vestland",value:"Ves"},{label:"Viken",value:"Vik"}]}};var i=function(u){return(0,P.jsx)("div",{style:{width:"440px"},children:(0,P.jsx)(X.P,Object.assign({},u))})};i.displayName="Template";var b=i.bind({});b.args={},b.parameters={docs:{description:{story:"This is the default select box."}}};var g=i.bind({});g.args={disabled:!0},g.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var k=i.bind({});k.args={error:!0},k.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},b.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),k.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},k.parameters);var h=["Default","Disabled","Error"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{IconFromNavIconLibrary:()=>m,ImportedCustomIcon:()=>u,__namedExportsOrder:()=>a,default:()=>k});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./node_modules/@navikt/ds-icons/esm/Success.js"),J=e("./.storybook/StoryPage.tsx"),F=e("./src/components/SvgIcon/index.ts"),X,P,Y;function N(){return N=Object.assign?Object.assign.bind():function(j){for(var d=1;d<arguments.length;d++){var x=arguments[d];for(var R in x)Object.prototype.hasOwnProperty.call(x,R)&&(j[R]=x[R])}return j},N.apply(this,arguments)}var f=function(d){return n.createElement("svg",N({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},d),X||(X=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),P||(P=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),Y||(Y=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},D=e("./node_modules/react/jsx-runtime.js"),i=`import React from 'react';
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
`,b={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},g="";const k={title:"Components/SvgIcon",component:F.l,parameters:{design:(0,l.vc)([{type:"figma",url:g},{type:"link",url:g}]),docs:{page:function(){return(0,D.jsx)(J.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var h=function(d){return(0,D.jsx)(F.l,Object.assign({},d))};h.displayName="Template";var m=h.bind({});m.args={svgIconComponent:(0,D.jsx)(c.Z,{})},m.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var u=h.bind({});u.args={svgIconComponent:(0,D.jsx)(f,{height:"2rem",width:"2rem"})},u.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},m.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters);var a=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{BasicTable:()=>_n,Responsive:()=>yn,SelectRows:()=>gn,__namedExportsOrder:()=>Wn,default:()=>Mn});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),g=e("./node_modules/react/index.js"),k=e("./node_modules/storybook-addon-designs/esm/index.js"),h=e("./node_modules/classnames/index.js"),m=e.n(h),u=e("./.storybook/StoryPage.tsx"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),x=e("./src/hooks/useMediaQuery.ts"),R=e("./src/DesignTokens/index.ts"),O=e("./src/components/RadioButton/index.ts"),I;(function(T){T.Header="header",T.Body="body",T.Footer="footer"})(I||(I={}));var y;(function(T){T.Descending="desc",T.Ascending="asc",T.NotSortable="notSortable",T.NotActive="notActive"})(y||(y={}));var p=(0,g.createContext)(void 0);function w(){var T=(0,g.useContext)(p);if(T===void 0)throw new Error("useTableContext must be used within a TableContext");return T}var S=(0,g.createContext)({variantStandard:I.Body}),z=function(){var H=(0,g.useContext)(S);if(H===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return H},Z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),se=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),ue=e.n(se),le=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css"),de={};de.insert="head",de.singleton=!1;var re=ue()(le.Z,de);const q=le.Z.locals||{};var v=e("./node_modules/react/jsx-runtime.js"),U=["children","selectRows","onChange","selectedValue","className"];function Q(T,H){if(T==null)return{};var te=M(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function M(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}function ee(T){var H=T.children,te=T.selectRows,G=te===void 0?!1:te,oe=T.onChange,ie=T.selectedValue,ve=T.className,Le=Q(T,U),Ue={selectRows:G,onChange:oe,selectedValue:ie};return(0,v.jsx)("table",Object.assign({},Le,{className:m()(q.Table,ve),children:(0,v.jsx)(p.Provider,{value:Ue,children:H})}))}ee.displayName="Table";try{ee.displayName="Table",ee.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler<T>"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:ee.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(T){}var pe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css"),me={};me.insert="head",me.singleton=!1;var $=ue()(pe.Z,me);const E=pe.Z.locals||{};var _=["children","className"];function r(T,H){if(T==null)return{};var te=t(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function t(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}var L=function(H){var te=H.children,G=H.className,oe=r(H,_),ie=I.Header;return(0,v.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,v.jsx)("thead",Object.assign({},oe,{className:m()(E["table-header"],G),children:te}))})};L.displayName="TableHeader";try{L.displayName="TableHeader",L.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:L.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(T){}var B=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css"),ce={};ce.insert="head",ce.singleton=!1;var be=ue()(B.Z,ce);const ne=B.Z.locals||{};var W=["children","rowData","className"];function K(T,H){if(T==null)return{};var te=ae(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function ae(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}function _e(T){var H,te=T.children,G=T.rowData,oe=T.className,ie=K(T,W),ve=z(),Le=ve.variantStandard,Ue=w(),ze=Ue.onChange,Qe=Ue.selectedValue,Ee=Ue.selectRows,Ie=function(){ze!=null&&Ee&&Le===I.Body&&G&&ze({selectedValue:G})},Ae=Ee&&typeof G!="undefined"&&JSON.stringify(G)===JSON.stringify(Qe);return(0,v.jsx)("tr",Object.assign({},ie,{className:m()(ne.TableRow,(H={},H[ne["table-row--selected"]]=Ae,H[ne["table-row--body"]]=Le===I.Body&&Ee&&!Ae,H),oe),onClick:Ie,children:te}))}_e.displayName="TableRow";try{_e.displayName="TableRow",_e.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"T"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:_e.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(T){}var ke=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css"),Se={};Se.insert="head",Se.singleton=!1;var xe=ue()(ke.Z,Se);const he=ke.Z.locals||{};var Oe;function Ne(){return Ne=Object.assign?Object.assign.bind():function(T){for(var H=1;H<arguments.length;H++){var te=arguments[H];for(var G in te)Object.prototype.hasOwnProperty.call(te,G)&&(T[G]=te[G])}return T},Ne.apply(this,arguments)}var Be=function(H){return g.createElement("svg",Ne({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},H),Oe||(Oe=g.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},Re=["children","variant","onChange","sortDirection","className","radiobutton"];function ye(T,H){if(T==null)return{};var te=ge(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function ge(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}function V(T){var H,te=T.children,G=T.variant,oe=T.onChange,ie=T.sortDirection,ve=ie===void 0?y.NotSortable:ie,Le=T.className,Ue=T.radiobutton,ze=Ue===void 0?!1:Ue,Qe=ye(T,Re),Ee=z(),Ie=Ee.variantStandard,Ae=function(nn){return G===void 0?Ie===nn:G===nn},He=function(){oe!=null&&ve!=null&&ve!=y.NotSortable&&oe({next:ve===y.Descending?y.Ascending:y.Descending,previous:ve})};return(0,v.jsxs)(v.Fragment,{children:[Ae(I.Header)&&(0,v.jsx)("th",Object.assign({},Qe,{className:ze?m()(he["header-table-cell-radiobutton"],Le):m()(he["header-table-cell"],Le),"aria-sort":ve===y.Ascending?"ascending":ve===y.Descending?"descending":"none",children:(0,v.jsxs)("div",{className:ve!=y.NotSortable?m()(he["container-sortable"]):m()(he.container),onClick:function(){return He()},onKeyUp:function(nn){(nn.key==="Enter"||nn.key===" ")&&He()},role:ve!=y.NotSortable?"button":void 0,tabIndex:ve!=y.NotSortable?0:void 0,children:[(0,v.jsx)("div",{className:m()(he.input),children:te}),ve!=y.NotSortable&&(0,v.jsx)(Be,{"aria-label":"Sortering","data-testid":"sort-icon",className:m()(he.icon,(H={},H[he["icon-asc"]]=ve===y.Ascending,H[he["icon-desc"]]=ve===y.Descending,H))})]})})),Ae(I.Body)&&(0,v.jsx)("td",Object.assign({},Qe,{className:ze?m()(he["body-table-cell-radiobutton"],Le):m()(he["body-table-cell"],Le),children:(0,v.jsx)("div",{className:ze?m()(he["radio-button"]):m()(he.input),children:te})})),Ae(I.Footer)&&(0,v.jsx)("td",Object.assign({},Qe,{className:m()(Le),children:(0,v.jsx)("div",{className:m()(he.input),children:te})}))]})}try{V.displayName="TableCell",V.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirection:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirection",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},radiobutton:{defaultValue:{value:"false"},description:"",name:"radiobutton",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:V.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(T){}var fe=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css"),je={};je.insert="head",je.singleton=!1;var De=ue()(fe.Z,je);const Te=fe.Z.locals||{};var Ke=["children","className"];function we(T,H){if(T==null)return{};var te=Ze(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function Ze(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}var Ve=function(H){var te=H.children,G=H.className,oe=we(H,Ke),ie=I.Body;return(0,v.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,v.jsx)("tbody",Object.assign({},oe,{className:m()(Te.TableBody,G),children:te}))})};Ve.displayName="TableBody";try{Ve.displayName="TableBody",Ve.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:Ve.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(T){}var tn=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css"),$e={};$e.insert="head",$e.singleton=!1;var un=ue()(tn.Z,$e);const sn=tn.Z.locals||{};var mn=["children","className"];function dn(T,H){if(T==null)return{};var te=cn(T,H),G,oe;if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(T);for(oe=0;oe<ie.length;oe++)G=ie[oe],!(H.indexOf(G)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,G)||(te[G]=T[G]))}return te}function cn(T,H){if(T==null)return{};var te={},G=Object.keys(T),oe,ie;for(ie=0;ie<G.length;ie++)oe=G[ie],!(H.indexOf(oe)>=0)&&(te[oe]=T[oe]);return te}var Xe=function(H){var te=H.children,G=H.className,oe=dn(H,mn),ie=I.Footer;return(0,v.jsx)(S.Provider,{value:{variantStandard:ie},children:(0,v.jsx)("tfoot",Object.assign({},oe,{className:m()(sn["table-footer"],G),children:te}))})};Xe.displayName="TableFooter";try{Xe.displayName="TableFooter",Xe.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:Xe.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(T){}function on(T){var H=T.config,te=(0,x.a)("(max-width: "+R.T.BreakpointsSm+")");return te?(0,v.jsx)(rn,{config:H}):(0,v.jsx)(an,{config:H})}function rn(T){var H=T.config,te=H.rows,G=H.headers,oe=H.showColumnsMobile,ie=H.renderCell,ve=H.rowSelection,Le=H.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Qe=ve?2:1;return(0,v.jsxs)(ee,{selectRows:!!ve,onChange:function(Ie){var Ae=Ie.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,v.jsx)(Ve,{children:te.map(function(Ee){var Ie=JSON.stringify(Ee);return(0,v.jsxs)(_e,{rowData:Ee,children:[ve&&(0,v.jsx)(V,{radiobutton:!0,children:(0,v.jsx)(O.E,{name:Ie,onChange:function(){return ve.onSelectionChange(Ee)},value:Ie,checked:Ie===Ue,label:Ie,hideLabel:!0})}),(0,v.jsx)(V,{style:{padding:"0px"},children:ze.map(function(Ae){if(!(oe&&!oe.includes(Ae))){var He=ie&&ie[Ae],Ye=He?He(Ee[Ae]):Ee[Ae];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:he.header,children:G[Ae]}),(0,v.jsx)("div",{className:he.property,children:Ye})]})}})},Ie+"-data")]},Ie)})}),Le&&(0,v.jsx)(Xe,{children:(0,v.jsx)(_e,{children:(0,v.jsx)(V,{colSpan:Qe,children:Le})})})]})}rn.displayName="MobileTable";function an(T){var H=T.config,te=H.rows,G=H.headers,oe=H.renderCell,ie=H.columnSort,ve=H.rowSelection,Le=H.footer,Ue=JSON.stringify((ve==null?void 0:ve.selectedValue)||null),ze=Object.keys(G),Qe=ve?Object.keys(G).length+1:Object.keys(G).length;return(0,v.jsxs)(ee,{selectRows:!!ve,onChange:function(Ie){var Ae=Ie.selectedValue;return ve==null?void 0:ve.onSelectionChange(Ae)},selectedValue:ve==null?void 0:ve.selectedValue,children:[(0,v.jsx)(L,{children:(0,v.jsxs)(_e,{children:[ve&&(0,v.jsx)(V,{radiobutton:!0}),ze.map(function(Ee){return(0,v.jsx)(V,{onChange:function(Ae){var He=Ae.next,Ye=Ae.previous;ie&&ie.onSortChange({column:Ee,next:He,previous:Ye})},sortDirection:ie?ie.currentlySortedColumn===Ee?ie.currentDirection:ie.sortable.includes(Ee)?y.NotActive:y.NotSortable:y.NotSortable,children:G[Ee]},Ee)})]})}),(0,v.jsx)(Ve,{children:te.map(function(Ee){var Ie=JSON.stringify(Ee);return(0,v.jsxs)(_e,{rowData:Ee,children:[ve&&(0,v.jsx)(V,{radiobutton:!0,children:(0,v.jsx)(O.E,{name:Ie,onChange:function(){return ve.onSelectionChange(Ee)},value:Ie,checked:Ie===Ue,label:Ie,hideLabel:!0})}),ze.map(function(Ae){var He=oe&&oe[Ae];return(0,v.jsx)(V,{children:He?He(Ee[Ae]):Ee[Ae]},Ie+"-"+Ae)})]},Ie)})}),Le&&(0,v.jsx)(Xe,{children:(0,v.jsx)(_e,{children:(0,v.jsx)(V,{colSpan:Qe,children:Le})})})]})}an.displayName="LaptopTable";try{on.displayName="ResponsiveTable",on.__docgenInfo={description:"",displayName:"ResponsiveTable",props:{config:{defaultValue:null,description:"",name:"config",required:!0,type:{name:"ResponsiveTableConfig<T>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/ResponsiveTable.tsx#ResponsiveTable"]={docgenInfo:on.__docgenInfo,name:"ResponsiveTable",path:"src/components/Table/ResponsiveTable.tsx#ResponsiveTable"})}catch(T){}var pn=e("./src/components/Pagination/Pagination.stories.tsx"),Sn=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),En=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.sort.js"),Ce=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.reverse.js"),Pe=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function Fe(T){var H=T.page,te=T.rowsPerPage,G=T.sortColumn,oe=T.sortDirection,ie=[].concat(Pe);return G&&(ie.sort(function(ve,Le){return ve[G]===Le[G]?0:ve[G]>Le[G]?1:-1}),oe===y.Descending&&ie.reverse()),{totalNum:ie.length,rows:ie.slice(H*te,H*te+te)}}var qe=e("./src/components/Pagination/Pagination.tsx"),Ge=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css"),Je={};Je.insert="head",Je.singleton=!1;var Tn=ue()(Ge.Z,Je);const hn=Ge.Z.locals||{};function en(T,H){return wn(T)||Bn(T,H)||Rn(T,H)||In()}function In(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(T,H){if(!!T){if(typeof T=="string")return An(T,H);var te=Object.prototype.toString.call(T).slice(8,-1);if(te==="Object"&&T.constructor&&(te=T.constructor.name),te==="Map"||te==="Set")return Array.from(T);if(te==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(te))return An(T,H)}}function An(T,H){(H==null||H>T.length)&&(H=T.length);for(var te=0,G=new Array(H);te<H;te++)G[te]=T[te];return G}function Bn(T,H){var te=T==null?null:typeof Symbol!="undefined"&&T[Symbol.iterator]||T["@@iterator"];if(te!=null){var G=[],oe=!0,ie=!1,ve,Le;try{for(te=te.call(T);!(oe=(ve=te.next()).done)&&(G.push(ve.value),!(H&&G.length===H));oe=!0);}catch(Ue){ie=!0,Le=Ue}finally{try{!oe&&te.return!=null&&te.return()}finally{if(ie)throw Le}}return G}}function wn(T){if(Array.isArray(T))return T}var Kn=`import React, { useState } from 'react';
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
`,Vn={BasicTable:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},SelectRows:{startLoc:{col:47,line:54},endLoc:{col:1,line:160},startBody:{col:47,line:54},endBody:{col:1,line:160}},Responsive:{startLoc:{col:67,line:162},endLoc:{col:1,line:230},startBody:{col:67,line:162},endBody:{col:1,line:230}}},Dn="";const Mn={title:"Components/Table",component:ee,parameters:{design:(0,k.vc)([{type:"figma",url:Dn},{type:"link",url:Dn}]),docs:{page:function(){return(0,v.jsx)(u.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Cn=function(H){var te=(0,g.useState)(void 0),G=en(te,2),oe=G[0],ie=G[1],ve=(0,g.useState)(void 0),Le=en(ve,2),Ue=Le[0],ze=Le[1],Qe=(0,g.useState)(y.NotActive),Ee=en(Qe,2),Ie=Ee[0],Ae=Ee[1],He=(0,g.useState)(5),Ye=en(He,2),nn=Ye[0],kn=Ye[1],jn=(0,g.useState)(0),bn=en(jn,2),vn=bn[0],fn=bn[1],xn=Fe({page:vn,rowsPerPage:nn,sortColumn:Ue,sortDirection:Ie}),On=xn.rows,Pn=xn.totalNum;return(0,v.jsxs)(ee,{selectRows:H.selectRows,onChange:function(We){var ln=We.selectedValue;return ie(ln)},selectedValue:oe,children:[(0,v.jsx)(L,{children:(0,v.jsxs)(_e,{children:[H.selectRows&&(0,v.jsx)(V,{radiobutton:!0}),(0,v.jsx)(V,{onChange:function(We){var ln=We.next;ze("caseNum"),Ae(ln)},sortDirection:Ue==="caseNum"?Ie:y.NotActive,children:"S\xF8knadsnr."}),(0,v.jsx)(V,{onChange:function(We){var ln=We.next;ze("product"),Ae(ln)},sortDirection:Ue==="product"?Ie:y.NotActive,children:"Produkt"}),(0,v.jsx)(V,{children:"Status"}),(0,v.jsx)(V,{children:"Bilde"})]})}),(0,v.jsx)(Ve,{children:On.map(function(Me){return(0,v.jsxs)(_e,{rowData:{caseNum:Me.caseNum},children:[H.selectRows&&(0,v.jsx)(V,{radiobutton:!0,children:(0,v.jsx)(O.E,{name:""+Me.caseNum,onChange:function(){return ie(Me)},value:""+Me.caseNum,checked:(oe==null?void 0:oe.caseNum)===Me.caseNum,label:""+Me.caseNum,hideLabel:!0})}),(0,v.jsx)(V,{children:Me.caseNum}),(0,v.jsx)(V,{children:Me.product}),(0,v.jsx)(V,{children:Me.status}),(0,v.jsx)(V,{children:(0,v.jsx)("img",{className:m()(hn.checkmark),src:Me.image.src,alt:Me.image.alt})})]},Me.caseNum)})}),(0,v.jsx)(Xe,{children:(0,v.jsx)(_e,{children:(0,v.jsx)(V,{colSpan:5,children:(0,v.jsx)(qe.t,{numberOfRows:Pn,rowsPerPageOptions:[5,10,15,20],rowsPerPage:nn,onRowsPerPageChange:function(We){kn(parseInt(We.target.value,10)),fn(0)},currentPage:vn,setCurrentPage:function(We){return fn(We)},descriptionTexts:pn.descriptionTexts})})})})]})};Cn.displayName="Template";var Ln=function(){var H=(0,g.useState)(void 0),te=en(H,2),G=te[0],oe=te[1],ie=(0,g.useState)(void 0),ve=en(ie,2),Le=ve[0],Ue=ve[1],ze=(0,g.useState)(y.NotActive),Qe=en(ze,2),Ee=Qe[0],Ie=Qe[1],Ae=(0,g.useState)(5),He=en(Ae,2),Ye=He[0],nn=He[1],kn=(0,g.useState)(0),jn=en(kn,2),bn=jn[0],vn=jn[1],fn=Fe({rowsPerPage:Ye,page:bn,sortColumn:Le,sortDirection:Ee}),xn=fn.rows,On=fn.totalNum,Pn={rows:xn,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:function(We){var ln=We.column,Nn=We.next;Ue(ln),Ie(Nn)},sortable:["caseNum","product"],currentlySortedColumn:Le,currentDirection:Ee},renderCell:{image:function(We){return(0,v.jsx)("img",{className:m()(hn.checkmark),src:We.src,alt:We.alt})}},rowSelection:{onSelectionChange:function(We){return oe(We)},selectedValue:G},footer:(0,v.jsx)(qe.t,{numberOfRows:On,rowsPerPageOptions:[5,10,15,20],rowsPerPage:Ye,onRowsPerPageChange:function(We){nn(parseInt(We.target.value,10)),vn(0)},currentPage:bn,setCurrentPage:function(We){return vn(We)},descriptionTexts:pn.descriptionTexts})};return(0,v.jsx)(on,{config:Pn})};Ln.displayName="ResponsiveTemplate";var _n=Cn.bind({});_n.args={selectRows:!1},_n.parameters={docs:{description:{story:""}}};var gn=Cn.bind({});gn.args={selectRows:!0},gn.parameters={docs:{description:{story:""}}};var yn=Ln.bind({});yn.args={},yn.parameters={docs:{description:{story:""}}},_n.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},yn.parameters);var Wn=["BasicTable","SelectRows","Responsive"]},"./src/components/Tabs/Tabs.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>me,__namedExportsOrder:()=>$,default:()=>ee});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/classnames/index.js"),d=e.n(j),x=e("./src/utils/arrayUtils.ts"),R=e("./src/hooks/index.ts"),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(O),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css"),p={};p.insert="head",p.singleton=!1;var w=I()(y.Z,p);const S=y.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js");function Z(E,_){return re(E)||de(E,_)||ue(E,_)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(E,_){if(!!E){if(typeof E=="string")return le(E,_);var r=Object.prototype.toString.call(E).slice(8,-1);if(r==="Object"&&E.constructor&&(r=E.constructor.name),r==="Map"||r==="Set")return Array.from(E);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return le(E,_)}}function le(E,_){(_==null||_>E.length)&&(_=E.length);for(var r=0,t=new Array(_);r<_;r++)t[r]=E[r];return t}function de(E,_){var r=E==null?null:typeof Symbol!="undefined"&&E[Symbol.iterator]||E["@@iterator"];if(r!=null){var t=[],L=!0,B=!1,ce,be;try{for(r=r.call(E);!(L=(ce=r.next()).done)&&(t.push(ce.value),!(_&&t.length===_));L=!0);}catch(ne){B=!0,be=ne}finally{try{!L&&r.return!=null&&r.return()}finally{if(B)throw be}}return t}}function re(E){if(Array.isArray(E))return E}var q=function(_){return _.replace(/\s/,"_")},v=function(_){var r=_.activeTab,t=_.items,L=_.onChange,B=(0,n.useId)(),ce=t.map(function(V){var fe=V.name,je=V.content,De=V.value,Te=V.tabId,Ke=V.panelId,we=De!=null?De:fe,Ze=Te!=null?Te:B+q(we)+"-tab",Ve=Ke!=null?Ke:B+q(we)+"-panel";return{name:fe,content:je,value:we,tabId:Ze,panelId:Ve}});if(!(0,x.zb)(ce.map(function(V){var fe=V.value;return fe})))throw Error("Each tab value must be unique.");if(r!==void 0&&!ce.some(function(V){return V.value===r}))throw Error("The given active tab value must exist in the list of items.");var be=function(fe){return ce.findIndex(function(je){return je.value===fe})},ne=r!=null?r:ce[0].value,W=(0,n.useState)(ne),K=Z(W,2),ae=K[0],_e=K[1],ke=(0,n.useState)(be(ne)),Se=Z(ke,2),xe=Se[0],he=Se[1];(0,n.useEffect)(function(){return _e(ne)},[ne]);var Oe=(0,n.useRef)(null),Ne=ce.length-1;(0,R.PQ)(function(){var V;(V=Oe.current)===null||V===void 0||V.querySelectorAll('[role="tab"]')[xe].focus()},[xe]);var Be=function(fe){ae!==fe&&L&&L(fe),_e(fe),he(be(fe))},Re=function(){return xe!==void 0&&he(xe===Ne?0:xe+1)},ye=function(){return xe!==void 0&&he(xe===0?Ne:xe-1)},ge=function(fe){return function(je){switch(je.key){case"ArrowRight":Re();break;case"ArrowLeft":ye();break;case"Space":Be(fe)}}};return(0,z.jsxs)("div",{className:S.tabs,children:[(0,z.jsx)("div",{className:S.tabs__tablist,ref:Oe,role:"tablist",children:ce.map(function(V,fe){var je=V.value===ae,De=d()(S.tabs__tablist__tab,je&&S["tabs__tablist__tab--selected"]);return(0,z.jsx)("button",{"aria-controls":V.panelId,"aria-selected":je,className:De,id:V.tabId,onClick:function(){return Be(V.value)},onKeyDown:ge(V.value),role:"tab",tabIndex:xe===fe?0:-1,children:V.name},V.value)})}),(0,z.jsx)("hr",{className:S.tabs__divider}),ce.map(function(V){return(0,z.jsx)("div",{className:S.tabs__tabpanel,"aria-labelledby":V.tabId,hidden:V.value!==ae,id:V.panelId,role:"tabpanel",children:V.content},V.panelId)})]})};v.displayName="Tabs";try{v.displayName="Tabs",v.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:v.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(E){}var U=`import React from 'react';
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
`,Q={Example:{startLoc:{col:46,line:123},endLoc:{col:74,line:123},startBody:{col:46,line:123},endBody:{col:74,line:123}}},M="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const ee={title:"Components/Tabs",component:v,parameters:{design:(0,l.vc)([{type:"figma",url:M},{type:"link",url:M}]),docs:{page:function(){return(0,z.jsx)(c.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        There is also an optional `value` property that defaults to the value given in the `name` property.\n                        This may be useful together with the `activeTab` and `onChange` properties to identify tabs without relying on their name, which may be a dynamic value.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property is optional and can be used to trigger some function when the user switches to another tab. It is called with the tab value as a parameter.",deprecationWarning:"Use Tabs from @digdir/design-system-react instead."})}}},args:{items:[{name:"Ild",content:(0,z.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,z.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,z.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,z.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var pe=function(_){return(0,z.jsx)(v,Object.assign({},_))};pe.displayName="Template";var me=pe.bind({});me.args={},me.parameters={docs:{description:{story:"This is how the component might look like."}}},me.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},me.parameters);var $=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>y,Disabled:()=>z,Error:()=>p,ReadOnlyConfirm:()=>S,ReadOnlyInfo:()=>w,__namedExportsOrder:()=>Z,default:()=>O});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./src/components/_InputWrapper/index.ts"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/classnames/index.js"),N=e.n(Y),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),D=e.n(f),i=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css"),b={};b.insert="head",b.singleton=!1;var g=D()(i.Z,b);const k=i.Z.locals||{};var h=e("./node_modules/react/jsx-runtime.js"),m=["isValid","disabled","readOnly","resize","label"];function u(se,ue){if(se==null)return{};var le=a(se,ue),de,re;if(Object.getOwnPropertySymbols){var q=Object.getOwnPropertySymbols(se);for(re=0;re<q.length;re++)de=q[re],!(ue.indexOf(de)>=0)&&(!Object.prototype.propertyIsEnumerable.call(se,de)||(le[de]=se[de]))}return le}function a(se,ue){if(se==null)return{};var le={},de=Object.keys(se),re,q;for(q=0;q<de.length;q++)re=de[q],!(ue.indexOf(re)>=0)&&(le[re]=se[re]);return le}var j=function(ue){var le=ue.isValid,de=le===void 0?!0:le,re=ue.disabled,q=re===void 0?!1:re,v=ue.readOnly,U=v===void 0?!1:v,Q=ue.resize,M=Q===void 0?"none":Q,ee=ue.label,pe=u(ue,m);return(0,h.jsx)(J.SP,{isValid:de,disabled:q,readOnly:U,label:ee,inputId:pe.id,inputRenderer:function($){var E=$.className,_=$.inputId;return(0,h.jsx)("textarea",Object.assign({},pe,{id:_,disabled:q,readOnly:Boolean(U),className:N()(E,k.TextArea,k["TextArea--resize-"+M])}))}})};j.displayName="TextArea";try{j.displayName="TextArea",j.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:j.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(se){}var d=`import React from 'react';
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
`,x={Default:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Error:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyInfo:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},ReadOnlyConfirm:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}},Disabled:{startLoc:{col:50,line:42},endLoc:{col:1,line:44},startBody:{col:50,line:42},endBody:{col:1,line:44}}},R="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const O={title:"Components/TextArea",component:j,parameters:{design:(0,l.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,h.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextArea from @digdir/design-system-react instead."})}}},args:{label:"Label"}};var I=function(ue){return(0,h.jsx)(j,Object.assign({},ue))};I.displayName="Template";var y=I.bind({});y.args={},y.parameters={docs:{description:{story:"Regular textarea."}}};var p=I.bind({});p.args={isValid:!1},p.parameters={docs:{description:{story:"Textarea displaying error."}}};var w=I.bind({});w.args={readOnly:!0,value:"Some text"},w.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var S=I.bind({});S.args={readOnly:J.Hx.ReadOnlyConfirm,value:"Some text"},S.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var z=I.bind({});z.args={disabled:!0,value:"Some text"},z.parameters={docs:{description:{story:"Textarea as disabled."}}},y.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},y.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},p.parameters),w.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},w.parameters),S.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},S.parameters),z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},z.parameters);var Z=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Default:()=>z,Disabled:()=>de,Error:()=>se,NumberInput:()=>Z,ReadOnlyConfirm:()=>le,ReadOnlyInfo:()=>ue,__namedExportsOrder:()=>re,default:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),c=e("./.storybook/StoryPage.tsx"),J=e("./src/components/_InputWrapper/index.ts"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),i=e("./node_modules/classnames/index.js"),b=e.n(i),g=e("./node_modules/react-number-format/dist/react-number-format.es.js"),k=function(v){return v.format!==void 0},h=function(v){return v.format===void 0},m=function(v,U){return U&&h(U)?numericFormatter(v,U):U&&k(U)?patternFormatter(v,U):v},u=e("./node_modules/react/jsx-runtime.js"),a=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function j(q,v){if(q==null)return{};var U=d(q,v),Q,M;if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(q);for(M=0;M<ee.length;M++)Q=ee[M],!(v.indexOf(Q)>=0)&&(!Object.prototype.propertyIsEnumerable.call(q,Q)||(U[Q]=q[Q]))}return U}function d(q,v){if(q==null)return{};var U={},Q=Object.keys(q),M,ee;for(ee=0;ee<Q.length;ee++)M=Q[ee],!(v.indexOf(M)>=0)&&(U[M]=q[M]);return U}var x=function(v){var U=v.values,Q=v.sourceInfo;Q.event.target.value=U.value.trim()},R=function(v,U,Q){var M=v.target,ee=v.key,pe=M.selectionStart,me=M.selectionEnd,$=M.value,E=$===void 0?"":$;if(pe!==null&&me!==null){var _=E[0]==="-",r=(U==null?void 0:U.length)||0+(_?1:0),t=(Q==null?void 0:Q.length)||0;_&&me<=r&&ee==="Backspace"?M.setSelectionRange(1,1):M.setSelectionRange(Math.min(Math.max(pe,r),E.length-t),Math.max(Math.min(me,E.length-t),r))}},O=function(v){var U=v.id,Q=v.onChange,M=v.isValid,ee=M===void 0?!0:M,pe=v.disabled,me=pe===void 0?!1:pe,$=v.readOnly,E=$===void 0?!1:$,_=v.required,r=_===void 0?!1:_,t=v.formatting,L=v.label,B=j(v,a),ce=function(ne,W){W.source==="event"&&Q&&(x({values:ne,sourceInfo:W}),Q(W.event))};return(0,u.jsx)(J.SP,{isValid:ee,disabled:me,readOnly:E,label:L,inputId:U,inputRenderer:function(ne){var W=ne.className,K=ne.variant,ae=ne.inputId,_e={id:ae,readOnly:Boolean(E),disabled:me,required:r,className:b()(W,B.className),style:Object.assign({textAlign:t==null?void 0:t.align},B.style)};return t!=null&&t.number&&h(t.number)?(t.number.prefix&&t.number.prefix[0]==="-"&&(t.number.prefix=" "+t.number.prefix),(0,u.jsx)(g.h3,Object.assign({},_e,t.number,B,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0,onKeyDown:function(Se){return R(Se,t.number.prefix,t.number.suffix)}}))):t!=null&&t.number&&k(t.number)?(0,u.jsx)(g.HH,Object.assign({},_e,t.number,B,{"data-testid":ae+"-formatted-number-"+K,onValueChange:ce,valueIsNumericString:!0})):(0,u.jsx)("input",Object.assign({},_e,B,{"data-testid":ae+"-"+K,onChange:Q}))}})};O.displayName="TextField";try{O.displayName="TextField",O.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:O.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(q){}var I=`import React from 'react';
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
`,y={Default:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},NumberInput:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyInfo:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},ReadOnlyConfirm:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:51,line:46},endLoc:{col:1,line:48},startBody:{col:51,line:46},endBody:{col:1,line:48}}},p="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const w={title:"Components/TextField",component:O,parameters:{design:(0,l.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,u.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use TextField from @digdir/design-system-react instead."})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var S=function(v){return(0,u.jsx)(O,Object.assign({},v))};S.displayName="Template";var z=S.bind({});z.args={},z.parameters={docs:{description:{story:"Regular input field."}}};var Z=S.bind({});Z.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},Z.parameters={docs:{description:{story:"Number input field."}}};var se=S.bind({});se.args={isValid:!1},se.parameters={docs:{description:{story:"Input field displaying error."}}};var ue=S.bind({});ue.args={readOnly:!0,value:"Some text"},ue.parameters={docs:{description:{story:"Input field as readonly-info."}}};var le=S.bind({});le.args={readOnly:J.Hx.ReadOnlyConfirm,value:"Some text"},le.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var de=S.bind({});de.args={disabled:!0,value:"Some text"},de.parameters={docs:{description:{story:"Input field as disabled."}}},z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},z.parameters),Z.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},Z.parameters),se.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},se.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},ue.parameters),le.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},le.parameters),de.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},de.parameters);var re=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(A,o,e)=>{"use strict";e.r(o),e.d(o,{Example:()=>_,__namedExportsOrder:()=>r,default:()=>$});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),i=e("./node_modules/react/index.js"),b=e("./node_modules/storybook-addon-designs/esm/index.js"),g=e("./.storybook/StoryPage.tsx"),k=e("./node_modules/classnames/index.js"),h=e.n(k),m=(0,i.createContext)(void 0),u=function(){var L=(0,i.useContext)(m);if(L===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return L},a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),j=e.n(a),d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),x={};x.insert="head",x.singleton=!1;var R=j()(d.Z,x);const O=d.Z.locals||{};var I=e("./node_modules/react/jsx-runtime.js"),y=function(L){var B=L.children,ce=L.onChange,be=L.selectedValue,ne=function(K){var ae=K.selectedValue;ce({selectedValue:ae})};return(0,I.jsx)(m.Provider,{value:{onChange:ne,selectedValue:be},children:(0,I.jsx)("div",{className:h()(O["toggle-button-group"]),"data-testid":"toggle-button-group",children:B})})};y.displayName="ToggleButtonGroup";try{y.displayName="ToggleButtonGroup",y.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:y.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(t){}var p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css"),w={};w.insert="head",w.singleton=!1;var S=j()(p.Z,w);const z=p.Z.locals||{};var Z=function(L){var B,ce=L.children,be=L.value,ne=u(),W=ne.onChange,K=ne.selectedValue,ae=function(){W({selectedValue:be})};return(0,I.jsx)("button",{"data-testid":"toggle-button",className:h()(z["toggle-button"],(B={},B[z["toggle-button--selected"]]=be===K,B)),onClick:ae,type:"button","aria-pressed":be==K,children:ce})};Z.displayName="ToggleButton";try{Z.displayName="ToggleButton",Z.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:Z.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(t){}var se=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),ue={};ue.insert="head",ue.singleton=!1;var le=j()(se.Z,ue);const de=se.Z.locals||{};function re(t,L){return M(t)||Q(t,L)||v(t,L)||q()}function q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(t,L){if(!!t){if(typeof t=="string")return U(t,L);var B=Object.prototype.toString.call(t).slice(8,-1);if(B==="Object"&&t.constructor&&(B=t.constructor.name),B==="Map"||B==="Set")return Array.from(t);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return U(t,L)}}function U(t,L){(L==null||L>t.length)&&(L=t.length);for(var B=0,ce=new Array(L);B<L;B++)ce[B]=t[B];return ce}function Q(t,L){var B=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(B!=null){var ce=[],be=!0,ne=!1,W,K;try{for(B=B.call(t);!(be=(W=B.next()).done)&&(ce.push(W.value),!(L&&ce.length===L));be=!0);}catch(ae){ne=!0,K=ae}finally{try{!be&&B.return!=null&&B.return()}finally{if(ne)throw K}}return ce}}function M(t){if(Array.isArray(t))return t}var ee=`import React, { useState } from 'react';
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
`,pe={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},me="";const $={title:"Components/Toggle button group",component:y,parameters:{design:(0,b.vc)([{type:"figma",url:me},{type:"link",url:me}]),docs:{page:function(){return(0,I.jsx)(g.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var E=function(){var L=(0,i.useState)("left"),B=re(L,2),ce=B[0],be=B[1],ne=function(K){var ae=K.selectedValue;be(ae)};return(0,I.jsx)("div",{className:de.container,children:(0,I.jsxs)(y,{onChange:ne,selectedValue:ce,children:[(0,I.jsx)(Z,{value:"left",children:"Aktivt valg"}),(0,I.jsx)(Z,{value:"right",children:"Mulig valg"})]})})};E.displayName="Template";var _=E.bind({});_.args={},_.argTypes={onChange:{control:!1},selectedValue:{control:!1}},_.parameters={docs:{description:{}}},_.parameters=Object.assign({storySource:{source:`() => {
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
}`}},_.parameters);var r=["Example"]},"./src/DesignTokens/index.ts":(A,o,e)=>{"use strict";e.d(o,{T:()=>g});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),X=e.n(F),P=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),Y=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),N=1.6,f=/(\d*\.?\d+)rem(?=\W|$)/gim,D=function(m){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,a=Math.pow(10,u);return Math.round((m+Number.EPSILON)*a)/a},i=function(m){return typeof m=="string"?m.replace(f,function(u,a){var j=D(a*N);return j+"rem"}):m},b={get:function(m,u){if(u in m){var a=m[u];return typeof a=="object"?new Proxy(a,b):i(a)}}},g=new Proxy(P,b),k=new Proxy(Y,b)},"./src/components/Button/index.ts":(A,o,e)=>{"use strict";e.d(o,{zx:()=>d,rp:()=>u,qE:()=>m,Wu:()=>a});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),c=e("./node_modules/react/index.js"),J=e("./node_modules/classnames/index.js"),F=e.n(J),X=e("./src/components/SvgIcon/index.ts"),P=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Y=e.n(P),N=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css"),f={};f.insert="head",f.singleton=!1;var D=Y()(N.Z,f);const i=N.Z.locals||{};var b=e("./node_modules/react/jsx-runtime.js"),g=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function k(x,R){if(x==null)return{};var O=h(x,R),I,y;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(x);for(y=0;y<p.length;y++)I=p[y],!(R.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,I)||(O[I]=x[I]))}return O}function h(x,R){if(x==null)return{};var O={},I=Object.keys(x),y,p;for(p=0;p<I.length;p++)y=I[p],!(R.indexOf(y)>=0)&&(O[y]=x[y]);return O}var m;(function(x){x.Small="small",x.Medium="medium",x.Large="large"})(m||(m={}));var u;(function(x){x.Primary="primary",x.Secondary="secondary",x.Success="success",x.Danger="danger",x.Inverted="inverted"})(u||(u={}));var a;(function(x){x.Filled="filled",x.Outline="outline",x.Quiet="quiet"})(a||(a={}));var j=function(R,O){var I,y,p,w=R.children,S=R.color,z=S===void 0?u.Primary:S,Z=R.variant,se=Z===void 0?a.Filled:Z,ue=R.size,le=ue===void 0?m.Small:ue,de=R.fullWidth,re=de===void 0?!1:de,q=R.dashedBorder,v=q===void 0?!1:q,U=R.iconPlacement,Q=U===void 0?"left":U,M=R.icon,ee=R.type,pe=ee===void 0?"button":ee,me=R.className,$=k(R,g);return(0,b.jsxs)("button",Object.assign({},$,{ref:O,className:F()(i.button,i["button--"+le],i["button--"+se],i["button--"+z],i["button--"+se+"--"+z],(I={},I[i["button--full-width"]]=re,I),(y={},y[i["button--dashed-border"]]=v,y),(p={},p[i["button--only-icon"]]=!w&&M,p),me),type:pe,children:[M&&Q==="left"&&(0,b.jsx)(X.l,{svgIconComponent:M,className:i.icon}),w,M&&Q==="right"&&(0,b.jsx)(X.l,{svgIconComponent:M,className:i.icon})]}))};j.displayName="Button";const d=(0,c.forwardRef)(j)},"./src/components/Checkbox/Checkbox.tsx":(A,o,e)=>{"use strict";e.d(o,{X:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/react/index.js"),c=e("./node_modules/classnames/index.js"),J=e.n(c),F=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),X=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(X),Y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css"),N={};N.insert="head",N.singleton=!1;var f=P()(Y.Z,N);const D=Y.Z.locals||{};var i=e("./node_modules/react/jsx-runtime.js"),b=function(k){var h=k.checkboxId,m=k.checked,u=k.compact,a=k.description,j=k.disabled,d=k.error,x=k.hideLabel,R=k.label,O=k.name,I=k.onChange,y=k.presentation,p=k.readOnly;return(0,i.jsx)(F.f,{checked:m,className:J()(D.checkbox,m&&D["checkbox--checked"],d&&D["checkbox--error"],j&&D["checkbox--disabled"],u&&D["checkbox--compact"],p&&D["checkbox--read-only"]),description:a,disabled:j,hideInput:p,hideLabel:x,inputId:h,label:R,name:O,onChange:I,presentation:y,size:u?F.b.Xsmall:F.b.Small,type:"checkbox",children:(0,i.jsx)("span",{className:D["visible-box"],children:(0,i.jsx)("span",{className:D["visible-box__checkmark"]})})})};b.displayName="Checkbox";try{b.displayName="Checkbox",b.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:b.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(g){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(A,o,e)=>{"use strict";e.d(o,{B:()=>N});var s=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),n=e.n(C),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(l),J=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css"),F={};F.insert="head",F.singleton=!1;var X=c()(J.Z,F);const P=J.Z.locals||{};var Y=e("./node_modules/react/jsx-runtime.js"),N=function(D){var i=D.id,b=D.children,g=D.ariaLabel;return(0,Y.jsx)("div",{"data-testid":"ErrorMessage","aria-label":g,id:i,role:"alertdialog",className:n()(P["error-message-wrapper"]),children:b})};N.displayName="ErrorMessage";try{N.displayName="ErrorMessage",N.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:N.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(f){}},"./src/components/FieldSet/FieldSet.tsx":(A,o,e)=>{"use strict";e.d(o,{C:()=>b,w:()=>i});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/classnames/index.js"),c=e.n(l),J=e("./src/components/ErrorMessage/ErrorMessage.tsx"),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(F),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css"),Y={};Y.insert="head",Y.singleton=!1;var N=X()(P.Z,Y);const f=P.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),i;(function(g){g.Xsmall="xsmall",g.Small="small"})(i||(i={}));var b=function(k){var h=k.children,m=k.className,u=k.description,a=k.disabled,j=k.error,d=k.legend,x=k.size,R=x===void 0?i.Small:x;return(0,D.jsxs)("fieldset",{className:c()(f["field-set"],f["field-set--"+R],m),disabled:a,children:[d&&(0,D.jsx)("legend",{className:f["field-set__legend"],children:d}),u&&(0,D.jsx)("p",{className:f["field-set__description"],children:u}),(0,D.jsx)("div",{className:f["field-set__content"],children:h}),j&&(0,D.jsx)("div",{className:f["field-set__error-message"],children:(0,D.jsx)(J.B,{children:j})})]})};b.displayName="FieldSet";try{b.displayName="FieldSet",b.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:b.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(g){}},"./src/components/FieldSet/index.ts":(A,o,e)=>{"use strict";e.d(o,{C:()=>s.C,w:()=>s.w});var s=e("./src/components/FieldSet/FieldSet.tsx")},"./src/components/Pagination/Pagination.tsx":(A,o,e)=>{"use strict";e.d(o,{t:()=>me});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),D=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),b=e.n(i),g=e("./src/hooks/useMediaQuery.ts"),k=e("./src/DesignTokens/index.ts"),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=e.n(h),u=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css"),a={};a.insert="head",a.singleton=!1;var j=m()(u.Z,a);const d=u.Z.locals||{};var x,R;function O(){return O=Object.assign?Object.assign.bind():function($){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},O.apply(this,arguments)}var I=function(E){return D.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),x||(x=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),R||(R=D.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},y,p;function w(){return w=Object.assign?Object.assign.bind():function($){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},w.apply(this,arguments)}var S=function(E){return D.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),y||(y=D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),p||(p=D.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},z;function Z(){return Z=Object.assign?Object.assign.bind():function($){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},Z.apply(this,arguments)}var se=function(E){return D.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),z||(z=D.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},ue,le;function de(){return de=Object.assign?Object.assign.bind():function($){for(var E=1;E<arguments.length;E++){var _=arguments[E];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&($[r]=_[r])}return $},de.apply(this,arguments)}var re=function(E){return D.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},E),ue||(ue=D.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),le||(le=D.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},q=e("./node_modules/react/jsx-runtime.js");function v($,E){return pe($)||ee($,E)||Q($,E)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q($,E){if(!!$){if(typeof $=="string")return M($,E);var _=Object.prototype.toString.call($).slice(8,-1);if(_==="Object"&&$.constructor&&(_=$.constructor.name),_==="Map"||_==="Set")return Array.from($);if(_==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_))return M($,E)}}function M($,E){(E==null||E>$.length)&&(E=$.length);for(var _=0,r=new Array(E);_<E;_++)r[_]=$[_];return r}function ee($,E){var _=$==null?null:typeof Symbol!="undefined"&&$[Symbol.iterator]||$["@@iterator"];if(_!=null){var r=[],t=!0,L=!1,B,ce;try{for(_=_.call($);!(t=(B=_.next()).done)&&(r.push(B.value),!(E&&r.length===E));t=!0);}catch(be){L=!0,ce=be}finally{try{!t&&_.return!=null&&_.return()}finally{if(L)throw ce}}return r}}function pe($){if(Array.isArray($))return $}var me=function(E){var _,r,t,L,B=E.numberOfRows,ce=E.rowsPerPageOptions,be=E.rowsPerPage,ne=E.onRowsPerPageChange,W=E.currentPage,K=E.setCurrentPage,ae=E.descriptionTexts,_e=(0,g.a)("(max-width: "+k.T.BreakpointsSm+")"),ke=(0,D.useState)(1),Se=v(ke,2),xe=Se[0],he=Se[1];(0,D.useEffect)(function(){B<be?he(1):he(Math.ceil(B/be))},[be,B]);var Oe=function(){W<xe-1&&K(W+1)},Ne=function(){W>0&&K(W-1)},Be=function(){var ye=1+W*be,ge=be*(W+1)>B?B:be*(W+1);return(0,q.jsx)("span",{className:b()(d["description-text"]),"data-testid":"description-text",children:ye+"-"+ge+" "+ae.of+" "+B})};return(0,q.jsxs)("div",{className:b()(d["pagination-wrapper"]),children:[(0,q.jsxs)("div",{className:b()(d["pagination-wrapper-row"]),children:[(0,q.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!_e&&ae.rowsPerPage}),(0,q.jsx)("select",{className:b()(d["select-pagination"]),value:be,onChange:function(ye){return ne(ye)},"aria-labelledby":"number-of-rows-select",children:ce.map(function(Re){return(0,q.jsx)("option",{value:Re,children:Re},Re)})}),Be()]}),(0,q.jsxs)("div",{className:b()(d["pagination-wrapper-row"]),children:[(0,q.jsx)("button",{className:b()(d["icon-button"]),onClick:function(){return K(0)},disabled:W===0,"aria-label":ae.navigateFirstPage,"data-testid":"first-page-icon",children:(0,q.jsx)(se,{className:b()(d["pagination-icon"],(_={},_[d["pagination-icon--disabled"]]=W===0,_))})}),(0,q.jsx)("button",{className:b()(d["icon-button"]),onClick:function(){return Ne()},disabled:W===0,"aria-label":ae.previousPage,"data-testid":"pagination-previous-icon",children:(0,q.jsx)(S,{className:b()(d["pagination-icon"],(r={},r[d["pagination-icon--disabled"]]=W===0,r))})}),(0,q.jsx)("button",{className:b()(d["icon-button"]),onClick:function(){return Oe()},disabled:W===xe-1,"aria-label":ae.nextPage,"data-testid":"pagination-next-icon",children:(0,q.jsx)(I,{className:b()(d["pagination-icon"],(t={},t[d["pagination-icon--disabled"]]=W===xe-1,t))})}),(0,q.jsx)("button",{className:b()(d["icon-button"]),onClick:function(){return K(xe-1)},disabled:W===xe-1,"aria-label":ae.navigateLastPage,children:(0,q.jsx)(re,{className:b()(d["pagination-icon"],(L={},L[d["pagination-icon--disabled"]]=W===xe-1,L))})})]})]})};me.displayName="Pagination";try{me.displayName="Pagination",me.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:me.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch($){}},"./src/components/Panel/Panel.tsx":(A,o,e)=>{"use strict";e.d(o,{s:()=>I,c:()=>d});var s=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),n=e.n(C),l=e("./src/DesignTokens/index.ts"),c=e("./src/hooks/useMediaQuery.ts"),J,F,X;function P(){return P=Object.assign?Object.assign.bind():function(y){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(y[S]=w[S])}return y},P.apply(this,arguments)}var Y=function(p){return s.createElement("svg",P({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),J||(J=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),F||(F=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),X||(X=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},N,f,D;function i(){return i=Object.assign?Object.assign.bind():function(y){for(var p=1;p<arguments.length;p++){var w=arguments[p];for(var S in w)Object.prototype.hasOwnProperty.call(w,S)&&(y[S]=w[S])}return y},i.apply(this,arguments)}var b=function(p){return s.createElement("svg",i({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),N||(N=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),f||(f=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),D||(D=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},g=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(g),h=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),m={};m.insert="head",m.singleton=!1;var u=k()(h.Z,m);const a=h.Z.locals||{};var j=e("./node_modules/react/jsx-runtime.js"),d;(function(y){y.Success="success",y.Info="info",y.Warning="warning",y.Error="error"})(d||(d={}));var x=function(p){var w=p.size,S=p.variant;switch(S){case d.Info:case d.Error:case d.Warning:return(0,j.jsx)(Y,{style:{width:w,height:w},"data-testid":"panel-icon-info"});case d.Success:return(0,j.jsx)(b,{style:{width:w,height:w},"data-testid":"panel-icon-success"})}},R=function(p){var w=p.forceMobileLayout,S=(0,c.a)("(max-width: "+l.T.BreakpointsSm+")");return w?!0:S},O=function(p){var w=p.children;return(0,j.jsx)("div",{className:n()(a["panel__pointer-position"]),children:w})};O.displayName="defaultRenderArrow";var I=function(p){var w,S=p.renderIcon,z=S===void 0?x:S,Z=p.title,se=p.children,ue=p.variant,le=ue===void 0?d.Info:ue,de=p.showPointer,re=de===void 0?!1:de,q=p.showIcon,v=q===void 0?!0:q,U=p.forceMobileLayout,Q=U===void 0?!1:U,M=p.renderArrow,ee=M===void 0?O:M,pe=R({forceMobileLayout:Q}),me=pe?l.T.ComponentPanelSizeIconXs:l.T.ComponentPanelSizeIconMd;return(0,j.jsxs)("div",{className:n()(a.panel,(w={},w[a["panel--mobile-layout"]]=pe,w)),children:[re&&ee({children:(0,j.jsx)("div",{"data-testid":"panel-pointer",className:n()(a.panel__pointer,a["panel__pointer--"+le])})}),(0,j.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(a["panel__content-wrapper"],a["panel__content-wrapper--"+le]),children:[v&&(0,j.jsx)("div",{"data-testid":"panel-icon-wrapper",className:a["panel__icon-wrapper"],children:z({size:me,variant:le})}),(0,j.jsxs)("div",{className:a.panel__content,children:[Z&&(0,j.jsx)("h2",{className:a.panel__header,children:Z}),(0,j.jsx)("div",{className:a.panel__body,children:se})]})]})]})};I.displayName="Panel";try{I.displayName="Panel",I.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:I.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(y){}},"./src/components/RadioButton/RadioButton.tsx":(A,o,e)=>{"use strict";e.d(o,{E:()=>g,j:()=>b});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/react/index.js"),c=e("./node_modules/classnames/index.js"),J=e.n(c),F=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),X=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),P=e.n(X),Y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css"),N={};N.insert="head",N.singleton=!1;var f=P()(Y.Z,N);const D=Y.Z.locals||{};var i=e("./node_modules/react/jsx-runtime.js"),b;(function(k){k.Xsmall="xsmall",k.Small="small"})(b||(b={}));var g=function(h){var m=h.checked,u=h.description,a=h.disabled,j=h.error,d=h.hideLabel,x=h.label,R=h.name,O=h.onChange,I=h.presentation,y=h.radioId,p=h.size,w=p===void 0?b.Small:p,S=h.value;return(0,i.jsx)(F.f,{checked:m,className:J()(D.radio,D["radio--"+w],m&&D["radio--checked"],j&&D["radio--error"],a&&D["radio--disabled"]),description:u,disabled:a,hideLabel:d,inputId:y,label:x,name:R,onChange:O,presentation:I,size:w===b.Xsmall?F.b.Xsmall:F.b.Small,type:"radio",value:S,children:(0,i.jsx)("span",{className:D["visible-button"],children:(0,i.jsx)("span",{className:D["visible-button__checkmark"]})})})};g.displayName="RadioButton";try{g.displayName="RadioButton",g.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:g.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(k){}},"./src/components/RadioButton/index.ts":(A,o,e)=>{"use strict";e.d(o,{E:()=>s.E,j:()=>s.j});var s=e("./src/components/RadioButton/RadioButton.tsx")},"./src/components/Select/Select.tsx":(A,o,e)=>{"use strict";e.d(o,{P:()=>r});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),J=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),Y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),j=e("./node_modules/classnames/index.js"),d=e.n(j),x=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),R=e("./src/components/_InputWrapper/index.ts"),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),I=e.n(O),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css"),p={};p.insert="head",p.singleton=!1;var w=I()(y.Z,p);const S=y.Z.locals||{};var z=e("./node_modules/react/jsx-runtime.js"),Z=function(L){var B=L.deleteButtonLabel,ce=L.disabled,be=L.onDeleteButtonClick,ne=L.label;return(0,z.jsxs)("span",{className:S["multi-select-item"],children:[(0,z.jsx)("span",{children:ne}),(0,z.jsx)("button",{"aria-label":B,className:S["multi-select-item__delete-button"],disabled:ce,onClick:be,children:(0,z.jsx)("span",{className:S["multi-select-item__delete-button__cross"]})})]})};Z.displayName="MultiSelectItem";try{Z.displayName="MultiSelectItem",Z.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:Z.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(t){}var se=e("./src/hooks/index.ts"),ue=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css"),le={};le.insert="head",le.singleton=!1;var de=I()(ue.Z,le);const re=ue.Z.locals||{};function q(t){return Q(t)||U(t)||pe(t)||v()}function v(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q(t){if(Array.isArray(t))return me(t)}function M(t,L){return E(t)||$(t,L)||pe(t,L)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(t,L){if(!!t){if(typeof t=="string")return me(t,L);var B=Object.prototype.toString.call(t).slice(8,-1);if(B==="Object"&&t.constructor&&(B=t.constructor.name),B==="Map"||B==="Set")return Array.from(t);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return me(t,L)}}function me(t,L){(L==null||L>t.length)&&(L=t.length);for(var B=0,ce=new Array(L);B<L;B++)ce[B]=t[B];return ce}function $(t,L){var B=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(B!=null){var ce=[],be=!0,ne=!1,W,K;try{for(B=B.call(t);!(be=(W=B.next()).done)&&(ce.push(W.value),!(L&&ce.length===L));be=!0);}catch(ae){ne=!0,K=ae}finally{try{!be&&B.return!=null&&B.return()}finally{if(ne)throw K}}return ce}}function E(t){if(Array.isArray(t))return t}var _={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},r=function(L){var B=L.disabled,ce=L.error,be=L.hideLabel,ne=L.inputId,W=L.label,K=L.multiple,ae=L.onChange,_e=L.options,ke=L.value,Se=_e.map(function(Ce){return Ce.value});if(Se.length!==new Set(Se).size)throw Error("Each value in the option list must be unique.");var xe=(0,a.useState)(K?ke!=null?ke:[]:[]),he=M(xe,2),Oe=he[0],Ne=he[1],Be=(0,a.useState)(K?void 0:ke),Re=M(Be,2),ye=Re[0],ge=Re[1],V=_e.findIndex(function(Ce){return Ce.value===ye}),fe=(0,a.useState)(!1),je=M(fe,2),De=je[0],Te=je[1];(0,se.OR)("click",function(){return Te(!1)}),(0,se.OR)("keydown",function(){return Te(!0)});var Ke=(0,a.useState)(!1),we=M(Ke,2),Ze=we[0],Ve=we[1],tn=(0,a.useRef)(null),$e=(0,a.useRef)(null);(0,a.useEffect)(function(){var Ce=tn.current;if(Ce){var Pe=Ce.offsetHeight,Fe=Ce.getElementsByTagName("li")[0].offsetHeight,qe=Ce.scrollTop,Ge=qe+Pe,Je=V*Fe,Tn=Je+Fe,hn=Je>=qe&&Tn<=Ge;hn||(Je<qe?Ce.scrollTop=Je:Ce.scrollTop=Tn-Pe)}},[V]);var un=function(Pe){var Fe;return(Fe=_e.find(function(qe){return qe.value===Pe}))!==null&&Fe!==void 0?Fe:{label:"",value:""}},sn=function(Pe,Fe){Oe!=null&&Oe.length||ge(Fe),Ne(Pe),ae&&ae(Pe)},mn=function(Pe){ge(Pe),Ve(!1),ae&&ae(Pe)},dn=function(Pe){K?Oe.includes(Pe)?cn(Pe):sn([].concat(q(Oe),[Pe]),Pe):mn(Pe)},cn=function(Pe){sn(Oe.filter(function(Fe){return Fe!==Pe}),Pe)},Xe=function(){sn([])},on=(0,a.useCallback)(function(){if(ye===void 0)ge(_e[0].value);else{var Ce=V+1;Ce>=0&&Ce<_e.length&&ge(_e[Ce].value)}Ve(!0)},[ye,V,ge,_e]),rn=(0,a.useCallback)(function(){if(ye===void 0)ge(_e[_e.length-1].value);else{var Ce=V-1;Ce>=0&&Ce<_e.length&&ge(_e[Ce].value)}Ve(!0)},[ye,V,ge,_e]);(0,se.OG)(_.ArrowDown,function(){return Ze&&on()}),(0,se.OG)(_.ArrowUp,function(){return Ze&&rn()}),(0,se.OG)(_.Enter,function(){return Ze&&K&&ye&&dn(ye)});var an=function(Pe){return ye===Pe},pn=function(Pe){return K?Oe.includes(Pe):an(Pe)},Sn=(0,a.useId)(),En=$e.current?"calc("+$e.current.offsetWidth+"px + 2 * "+x.component.input.border_width.default.value+")":void 0;return(0,z.jsxs)("div",{className:d()(re.select,re["select--"+(K?"multiple":"single")],Ze&&re["select--expanded"],B&&re["select--disabled"],De&&re["select--using-keyboard"]),"data-testid":"select-root",children:[(0,z.jsx)(R.SP,{disabled:B,inputId:ne,inputRenderer:function(Pe){var Fe=Pe.className,qe=Pe.inputId;return(0,z.jsxs)("span",{className:d()(Fe,re.select__field),ref:$e,children:[K&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{className:re["select--multiple__field__values"],children:Oe.map(un).map(function(Ge){return(0,z.jsx)(Z,{deleteButtonLabel:Ge.deleteButtonLabel,disabled:B!=null?B:!1,label:Ge.label,onDeleteButtonClick:function(){return cn(Ge.value)}},Ge.value)})}),(0,z.jsx)("button",{"aria-label":L.deleteButtonLabel,className:re["select--multiple__field__delete-button"],disabled:!Oe.length||B,onClick:function(){return Xe()},children:(0,z.jsx)("span",{className:re["select--multiple__field__delete-button__cross"]})})]}),(0,z.jsxs)("button",{"aria-controls":Sn,"aria-expanded":Ze,"aria-label":W,className:re.select__field__button,disabled:B,id:qe,onBlur:function(){return Ve(!1)},onClick:function(){return Ve(!Ze)},onKeyDown:function(Je){Object.values(_).includes(Je.key)&&(Je.preventDefault(),Ve(!0))},role:"combobox",value:K?Oe:ye,children:[!K&&(0,z.jsx)("span",{className:re["select--single__field__value"],children:un(ye).label}),(0,z.jsx)("span",{className:re["select__field__arrow-wrapper"],children:(0,z.jsx)("span",{className:re["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!ce,label:be?void 0:W,noFocusEffect:K,noPadding:!0,readOnly:!1}),(0,z.jsx)("ul",{className:re["select__option-list"],id:Sn,ref:tn,role:"listbox",style:{width:En},children:_e.map(function(Ce){return(0,z.jsx)("li",{"aria-selected":pn(Ce.value),className:d()(re["select__option-list__option"],pn(Ce.value)&&re["select__option-list__option--selected"],K&&an(Ce.value)&&re["select--multiple__option-list__option--focused"]),onClick:function(){return dn(Ce.value)},onMouseDown:function(Fe){return Fe.preventDefault()},onKeyDown:function(Fe){return Fe.preventDefault()},role:"option",value:Ce.value,children:Ce.label},Ce.value)})})]})};r.displayName="Select";try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:r.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(t){}},"./src/components/SvgIcon/index.ts":(A,o,e)=>{"use strict";e.d(o,{l:()=>P});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),c=e("./node_modules/react/index.js"),J=["svgIconComponent"];function F(Y,N){if(Y==null)return{};var f=X(Y,N),D,i;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(Y);for(i=0;i<b.length;i++)D=b[i],!(N.indexOf(D)>=0)&&(!Object.prototype.propertyIsEnumerable.call(Y,D)||(f[D]=Y[D]))}return f}function X(Y,N){if(Y==null)return{};var f={},D=Object.keys(Y),i,b;for(b=0;b<D.length;b++)i=D[b],!(N.indexOf(i)>=0)&&(f[i]=Y[i]);return f}var P=function(N){var f=N.svgIconComponent,D=F(N,J);return(0,c.isValidElement)(f)?(0,c.cloneElement)(f,Object.assign({},D)):null};try{P.displayName="SvgIcon",P.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:P.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(Y){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(A,o,e)=>{"use strict";e.d(o,{f:()=>b,b:()=>i});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/react/index.js"),c=e("./node_modules/classnames/index.js"),J=e.n(c),F=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),X=e.n(F),P=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),Y={};Y.insert="head",Y.singleton=!1;var N=X()(P.Z,Y);const f=P.Z.locals||{};var D=e("./node_modules/react/jsx-runtime.js"),i;(function(g){g.Xsmall="xsmall",g.Small="small"})(i||(i={}));var b=function(k){var h=k.checked,m=k.children,u=k.className,a=k.description,j=k.disabled,d=k.hideInput,x=k.hideLabel,R=k.inputId,O=k.label,I=k.name,y=k.onChange,p=k.presentation,w=k.size,S=k.type,z=k.value,Z=(0,l.useId)(),se=R!=null?R:"input-"+Z,ue=O?se+"-label":void 0,le=a?se+"-description":void 0,de=O&&!x;return(0,D.jsxs)("label",{className:J()(f.template,f["template--"+w],j&&f["template--disabled"],u),htmlFor:R,children:[!d&&(0,D.jsxs)("span",{className:f["template__input-wrapper"],children:[(0,D.jsx)("input",{"aria-describedby":le,"aria-label":!de&&typeof O=="string"?O:void 0,"aria-labelledby":de?ue:void 0,checked:h!=null?h:!1,className:f["template__input-wrapper__input"],disabled:j,id:se,name:I,onChange:j?void 0:y,role:p?"presentation":void 0,type:S,value:z}),(0,D.jsx)("span",{className:f["template__input-wrapper__visible-box"],children:m})]}),(de||a)&&(0,D.jsxs)("span",{className:f["template__label-and-description"],children:[de&&(0,D.jsx)("span",{className:f["template__label-and-description__label"],id:ue,children:O}),a&&(0,D.jsx)("span",{className:f["template__label-and-description__description"],id:le,children:a})]})]})};b.displayName="CheckboxRadioTemplate";try{b.displayName="CheckboxRadioTemplate",b.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},presentation:{defaultValue:null,description:"",name:"presentation",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:b.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(g){}},"./src/components/_InputWrapper/index.ts":(A,o,e)=>{"use strict";e.d(o,{SP:()=>j,Hx:()=>c});var s=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),n=e.n(C),l;(function(d){d.Default="default",d.Error="error",d.Disabled="disabled",d.ReadOnlyInfo="readonly-info",d.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var c;(function(d){d.ReadOnlyInfo="readonly-info",d.ReadOnlyConfirm="readonly-confirm"})(c||(c={}));var J;(function(d){d.None="none",d.Error="error",d.Search="search"})(J||(J={}));var F=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},R=x.readOnly,O=R===void 0?!1:R,I=x.disabled,y=I===void 0?!1:I,p=x.isValid,w=p===void 0?!0:p,S=x.isSearch,z=S===void 0?!1:S,Z=J.None;return z&&(Z=J.Search),y?{variant:l.Disabled,iconVariant:Z}:O===!0||O===c.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:Z}:O===c.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:Z}:w===!1?{variant:l.Error,iconVariant:J.Error}:{variant:l.Default,iconVariant:Z}},X;function P(){return P=Object.assign?Object.assign.bind():function(d){for(var x=1;x<arguments.length;x++){var R=arguments[x];for(var O in R)Object.prototype.hasOwnProperty.call(R,O)&&(d[O]=R[O])}return d},P.apply(this,arguments)}var Y=function(x){return s.createElement("svg",P({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},x),X||(X=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},N;function f(){return f=Object.assign?Object.assign.bind():function(d){for(var x=1;x<arguments.length;x++){var R=arguments[x];for(var O in R)Object.prototype.hasOwnProperty.call(R,O)&&(d[O]=R[O])}return d},f.apply(this,arguments)}var D=function(x){return s.createElement("svg",f({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x),N||(N=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},i=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(i),g=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),k={};k.insert="head",k.singleton=!1;var h=b()(g.Z,k);const m=g.Z.locals||{};var u=e("./node_modules/react/jsx-runtime.js"),a=function(x){var R=x.variant,O=x.disabled,I=O===void 0?!1:O;if(R===J.Error)return(0,u.jsx)("div",{className:m.InputWrapper__icon,children:(0,u.jsx)(Y,{"data-testid":"input-icon-error"})});if(R===J.Search){var y;return(0,u.jsx)("div",{className:n()(m.InputWrapper__icon,(y={},y[m["InputWrapper__icon--disabled"]]=I,y)),children:(0,u.jsx)(D,{"data-testid":"input-icon-search"})})}return null};try{a.displayName="Icon",a.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:a.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(d){}var j=function(x){var R,O=x.isValid,I=O===void 0?!0:O,y=x.disabled,p=y===void 0?!1:y,w=x.readOnly,S=w===void 0?!1:w,z=x.isSearch,Z=z===void 0?!1:z,se=x.label,ue=x.inputId,le=x.inputRenderer,de=x.noFocusEffect,re=x.noPadding,q=(0,s.useId)(),v=ue!=null?ue:q,U=F({readOnly:S,disabled:p,isValid:I,isSearch:Z}),Q=U.variant,M=U.iconVariant;return(0,u.jsxs)(u.Fragment,{children:[se&&(0,u.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(m.InputWrapper__label),htmlFor:v,children:se}),(0,u.jsxs)("div",{"data-testid":"InputWrapper",className:n()(m.InputWrapper,m["InputWrapper--"+Q],(R={},R[m["InputWrapper--search"]]=Z,R[m["InputWrapper--with-focus-effect"]]=!de,R[m["InputWrapper--with-padding"]]=!re,R)),children:[(0,u.jsx)(a,{variant:M,disabled:p}),le({className:m.InputWrapper__field,inputId:v,variant:Q})]})]})};try{j.displayName="InputWrapper",j.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:j.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(d){}},"./src/hooks/index.ts":(A,o,e)=>{"use strict";e.d(o,{OR:()=>C,OG:()=>n,D9:()=>l,PQ:()=>c});var s=e("./node_modules/react/index.js");function C(J,F){(0,s.useEffect)(function(){return document.addEventListener(J,F),function(){return document.removeEventListener(J,F)}},[J,F])}function n(J,F){(0,s.useEffect)(function(){var X=function(Y){Y.key===J&&F()};return document.addEventListener("keydown",X),function(){return document.removeEventListener("keydown",X)}},[J,F])}function l(J){var F=(0,s.useRef)();return(0,s.useEffect)(function(){F.current=J},[J]),F.current}var c=function(F,X){var P=(0,s.useRef)(!0);(0,s.useEffect)(function(){if(P.current)P.current=!1;else return F()},X)}},"./src/hooks/useMediaQuery.ts":(A,o,e)=>{"use strict";e.d(o,{a:()=>w});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),X=e.n(F),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(P),N=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e.n(N),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(D),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(b),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e.n(k),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e.n(a),d=e("./node_modules/react/index.js");function x(S,z){return p(S)||y(S,z)||O(S,z)||R()}function R(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(S,z){if(!!S){if(typeof S=="string")return I(S,z);var Z=Object.prototype.toString.call(S).slice(8,-1);if(Z==="Object"&&S.constructor&&(Z=S.constructor.name),Z==="Map"||Z==="Set")return Array.from(S);if(Z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Z))return I(S,z)}}function I(S,z){(z==null||z>S.length)&&(z=S.length);for(var Z=0,se=new Array(z);Z<z;Z++)se[Z]=S[Z];return se}function y(S,z){var Z=S==null?null:typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"];if(Z!=null){var se=[],ue=!0,le=!1,de,re;try{for(Z=Z.call(S);!(ue=(de=Z.next()).done)&&(se.push(de.value),!(z&&se.length===z));ue=!0);}catch(q){le=!0,re=q}finally{try{!ue&&Z.return!=null&&Z.return()}finally{if(le)throw re}}return se}}function p(S){if(Array.isArray(S))return S}function w(S){var z=function(q){var v,U;return(v=(U=window)===null||U===void 0?void 0:U.matchMedia(q).matches)!==null&&v!==void 0?v:!1},Z=(0,d.useState)(z(S)),se=x(Z,2),ue=se[0],le=se[1],de=function(){le(z(S))};return(0,d.useEffect)(function(){var re=window.matchMedia(S);return de(),re.addEventListener("change",de),function(){return re.removeEventListener("change",de)}},[S]),ue}},"./src/utils/arrayUtils.ts":(A,o,e)=>{"use strict";e.d(o,{cO:()=>N,zb:()=>D});var s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),C=e.n(s),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(n),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),J=e.n(c),F=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),X=e.n(F),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),Y=e.n(P);function N(i,b){if(i===b)return!0;if(i===void 0||b===void 0||i.length!==b.length)return!1;for(var g in i)if(i[g]!==b[g])return!1;return!0}function f(i){return i[i.length-1]}function D(i){return i.length===new Set(i).size}},"./storybook-init-framework-entry.js":(A,o,e)=>{"use strict";var s=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.tyMY32TvkHDF8ZcennN\\+rw\\=\\= {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),n.locals={accordion:"tyMY32TvkHDF8ZcennN+rw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.AYJEVhVUCPNhIkdoY9L8Qw\\=\\= {
  width: 80vw;
}
`,""]),n.locals={container:"AYJEVhVUCPNhIkdoY9L8Qw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.bHJmGU5sUxKWla0mf2uWjg\\=\\= {
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
`,""]),n.locals={"accordion-header":"bHJmGU5sUxKWla0mf2uWjg==","accordion-header__subtitle":"R-AQdDhQHxYTukb-nSP9Aw==","accordion-header--subtitle":"Ei7ai3cperzTatRVCUKEiA==","accordion-header__title":"_2GCHs-3akoZ4nQ3ykkw6dg==","accordion-header__actions":"_91wKOkVBUdGPK4QUEykiYw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.XavJEiuidDgCiNx4DoHhSw\\=\\= {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

._2lKbkok1eRn8cgFFv33ggQ\\=\\= {
  transform: rotate(90deg);
}
`,""]),n.locals={"accordion-icon":"XavJEiuidDgCiNx4DoHhSw==","accordion-icon--opened":"_2lKbkok1eRn8cgFFv33ggQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),n.push([A.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),n.locals={};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Button/Button.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.wX7-jyEfKbJ\\+uiXi2TpIOA\\=\\= {
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

.wX7-jyEfKbJ\\+uiXi2TpIOA\\=\\=:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.wX7-jyEfKbJ\\+uiXi2TpIOA\\=\\=:focus:not(:focus-visible) {
  outline: none;
}

.wX7-jyEfKbJ\\+uiXi2TpIOA\\=\\=:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.lzTFhKYYpZ6oOQYy7Ny15g\\=\\= {
  height: var(--icon-size);
  width: var(--icon-size);
}

.qSXKoyCOpIreszWrNVBjRg\\=\\= {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.zMYsB8A9EICGrE\\+n1x8Ldg\\=\\= {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.gbyQB9POhEvXDdsN5vuoyA\\=\\= {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.I3gBgPVrajFsA\\+F0eWCrgQ\\=\\= {
  width: 100%;
}

.KLhGWeUGg7Ljp-cwOtG7kw\\=\\= {
  border-style: dashed;
}

.zlN905OWTAt-ULcP57mW5Q\\=\\= {
  padding: 0.5rem !important;
}

.s1QQ2psMTQfEgAiNgG1a1A\\=\\= {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.zmJZXhORQnAmdxMQRxfQQA\\=\\= {
  border-radius: 3px;
  background-color: transparent;
}

.v5i5mS9iAgXqd7xNYG1nCg\\=\\= {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.YmkrfaN48TfcCtfI\\+tLhqA\\=\\= {
  background: var(--component-button-filled-primary-color-background-default);
}

.YmkrfaN48TfcCtfI\\+tLhqA\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.YmkrfaN48TfcCtfI\\+tLhqA\\=\\=:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.z9TgdkJWNnRd4s7oRlNxdQ\\=\\= {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.z9TgdkJWNnRd4s7oRlNxdQ\\=\\=:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.z9TgdkJWNnRd4s7oRlNxdQ\\=\\=:not(:disabled):active {
  background: var(--colors-blue-950);
}

._3FGHlCeKjjL\\+qXkfKAoAaA\\=\\= {
  background: var(--component-button-filled-success-color-background-default);
}

._3FGHlCeKjjL\\+qXkfKAoAaA\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

._3FGHlCeKjjL\\+qXkfKAoAaA\\=\\=:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.jK-RlmD5udejJIUfHFtYuQ\\=\\= {
  background: var(--component-button-filled-danger-color-background-default);
}

.jK-RlmD5udejJIUfHFtYuQ\\=\\=:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.jK-RlmD5udejJIUfHFtYuQ\\=\\=:not(:disabled):active {
  background: var(--colors-red-800);
}

.tCeh4q92nFJqRPqfAo1fxg\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.tCeh4q92nFJqRPqfAo1fxg\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.tCeh4q92nFJqRPqfAo1fxg\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.tCeh4q92nFJqRPqfAo1fxg\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.fNQxvDxuo0ZliHqSXEL2kw\\=\\= {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.fNQxvDxuo0ZliHqSXEL2kw\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.fNQxvDxuo0ZliHqSXEL2kw\\=\\=:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.a-5UgG7J8HpBAdHEs1f15g\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.a-5UgG7J8HpBAdHEs1f15g\\=\\=:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.a-5UgG7J8HpBAdHEs1f15g\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.xABo3u2TTBsD\\+TjAi423wQ\\=\\= {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.xABo3u2TTBsD\\+TjAi423wQ\\=\\=:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.xABo3u2TTBsD\\+TjAi423wQ\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.zp2A3yygyniTWB3REhXPxg\\=\\= {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.zp2A3yygyniTWB3REhXPxg\\=\\=:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.zp2A3yygyniTWB3REhXPxg\\=\\=:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.wtq6K\\+l3gMHgJZ36C\\+uUVA\\=\\= {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.wtq6K\\+l3gMHgJZ36C\\+uUVA\\=\\=:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.wtq6K\\+l3gMHgJZ36C\\+uUVA\\=\\=:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.wtq6K\\+l3gMHgJZ36C\\+uUVA\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.zfQwVwm0CywWteFJakQhiw\\=\\= {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.zfQwVwm0CywWteFJakQhiw\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.zfQwVwm0CywWteFJakQhiw\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.lm6\\+FtjpKUk4CZrOGtnvQA\\=\\= {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.lm6\\+FtjpKUk4CZrOGtnvQA\\=\\=:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.lm6\\+FtjpKUk4CZrOGtnvQA\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

._8YLahwkiUsnP1LB8\\+lBdvA\\=\\= {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

._8YLahwkiUsnP1LB8\\+lBdvA\\=\\=:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

._8YLahwkiUsnP1LB8\\+lBdvA\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.mxTd4ZJjwDX242t9AK8AlA\\=\\= {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.mxTd4ZJjwDX242t9AK8AlA\\=\\=:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.mxTd4ZJjwDX242t9AK8AlA\\=\\=:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Fuz7enrNY1PoYFmwhkR2sA\\=\\= {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Fuz7enrNY1PoYFmwhkR2sA\\=\\=:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Fuz7enrNY1PoYFmwhkR2sA\\=\\=:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Fuz7enrNY1PoYFmwhkR2sA\\=\\=:focus-visible {
  outline-color: var(--colors-white);
}
`,""]),n.locals={button:"wX7-jyEfKbJ+uiXi2TpIOA==",icon:"lzTFhKYYpZ6oOQYy7Ny15g==","button--small":"qSXKoyCOpIreszWrNVBjRg==","button--medium":"zMYsB8A9EICGrE+n1x8Ldg==","button--large":"gbyQB9POhEvXDdsN5vuoyA==","button--full-width":"I3gBgPVrajFsA+F0eWCrgQ==","button--dashed-border":"KLhGWeUGg7Ljp-cwOtG7kw==","button--only-icon":"zlN905OWTAt-ULcP57mW5Q==","button--filled":"s1QQ2psMTQfEgAiNgG1a1A==","button--outline":"zmJZXhORQnAmdxMQRxfQQA==","button--quiet":"v5i5mS9iAgXqd7xNYG1nCg==","button--filled--primary":"YmkrfaN48TfcCtfI+tLhqA==","button--filled--secondary":"z9TgdkJWNnRd4s7oRlNxdQ==","button--filled--success":"_3FGHlCeKjjL+qXkfKAoAaA==","button--filled--danger":"jK-RlmD5udejJIUfHFtYuQ==","button--filled--inverted":"tCeh4q92nFJqRPqfAo1fxg==","button--outline--primary":"fNQxvDxuo0ZliHqSXEL2kw==","button--outline--secondary":"a-5UgG7J8HpBAdHEs1f15g==","button--outline--success":"xABo3u2TTBsD+TjAi423wQ==","button--outline--danger":"zp2A3yygyniTWB3REhXPxg==","button--outline--inverted":"wtq6K+l3gMHgJZ36C+uUVA==","button--quiet--primary":"zfQwVwm0CywWteFJakQhiw==","button--quiet--secondary":"lm6+FtjpKUk4CZrOGtnvQA==","button--quiet--success":"_8YLahwkiUsnP1LB8+lBdvA==","button--quiet--danger":"mxTd4ZJjwDX242t9AK8AlA==","button--quiet--inverted":"Fuz7enrNY1PoYFmwhkR2sA=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Checkbox/Checkbox.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.CBQZ4Pp1clb\\+5R8IlCO4gQ\\=\\= {
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

._2xOAXQNDzCgqacAo\\+oKLOg\\=\\= {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.WeyjcgGcMNxtO2LDl4DKQA\\=\\= {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.i1dR87g\\+8TBg6FeDsLal2w\\=\\= {
  --checkbox-checkmark-display: inline-block;
}

.i1dR87g\\+8TBg6FeDsLal2w\\=\\=:not(.NAZNS6yyS6f\\+\\+-Z\\+3s\\+3Bw\\=\\=) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.CBQZ4Pp1clb\\+5R8IlCO4gQ\\=\\=:not(.NAZNS6yyS6f\\+\\+-Z\\+3s\\+3Bw\\=\\=, .i1dR87g\\+8TBg6FeDsLal2w\\=\\=):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.CBQZ4Pp1clb\\+5R8IlCO4gQ\\=\\=:not(.NAZNS6yyS6f\\+\\+-Z\\+3s\\+3Bw\\=\\=, .WeyjcgGcMNxtO2LDl4DKQA\\=\\=, .i1dR87g\\+8TBg6FeDsLal2w\\=\\=):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.NAZNS6yyS6f\\+\\+-Z\\+3s\\+3Bw\\=\\=.i1dR87g\\+8TBg6FeDsLal2w\\=\\= {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.WHrr5Yrds1LJ9nUiOExIsg\\=\\= {
  --cursor: auto;
}

._1S0Qzo4imNS6vwyjkuv4RA\\=\\= {
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

.YAGMVPxAerlTUg65C58lMw\\=\\= {
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
`,""]),n.locals={checkbox:"CBQZ4Pp1clb+5R8IlCO4gQ==","checkbox--compact":"_2xOAXQNDzCgqacAo+oKLOg==","checkbox--error":"WeyjcgGcMNxtO2LDl4DKQA==","checkbox--checked":"i1dR87g+8TBg6FeDsLal2w==","checkbox--disabled":"NAZNS6yyS6f++-Z+3s+3Bw==","checkbox--read-only":"WHrr5Yrds1LJ9nUiOExIsg==","visible-box":"_1S0Qzo4imNS6vwyjkuv4RA==","visible-box__checkmark":"YAGMVPxAerlTUg65C58lMw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.ige1RYnNw6YzOn69ukooNg\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.jfBftTRNzfRPCUJ3sIy42g\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.FqPn7fXKjfNWR38TDuA7WA\\=\\= {
  flex-direction: column;
}

.fgimJ6Ufn2DhB8cn--r1mQ\\=\\= {
  flex-direction: row;
}
`,""]),n.locals={"checkbox-group":"ige1RYnNw6YzOn69ukooNg==","checkbox-group--compact":"jfBftTRNzfRPCUJ3sIy42g==","checkbox-group--vertical":"FqPn7fXKjfNWR38TDuA7WA==","checkbox-group--horizontal":"fgimJ6Ufn2DhB8cn--r1mQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.NTqKTbIBK1CSNC8WbgbZ7Q\\=\\= {
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
`,""]),n.locals={svg:"NTqKTbIBK1CSNC8WbgbZ7Q==",circleTransition:"WH18iHRFnpU4UnExhNnc+A==",container:"nAJVyVZi6iBoq6RpO2qgAg==",label:"_12tl+lgdk2k7GREN6Fu52A=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ErrorMessage/ErrorMessage.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`._9eiS7uG2pdhf7z19\\+eJXRg\\=\\= {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),n.locals={"error-message-wrapper":"_9eiS7uG2pdhf7z19+eJXRg=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/FieldSet/FieldSet.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.jD2bFSy26x27F4NbLqcwbQ\\=\\= {
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

._8GFGknosEtEZ9SfXHhMhMw\\=\\= {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.jD2bFSy26x27F4NbLqcwbQ\\=\\=:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.jD2bFSy26x27F4NbLqcwbQ\\=\\=:disabled * {
  opacity: 1;
}

.OQYh5PAAFutnaH1rnINCQg\\=\\= {
  font-weight: bold;
  padding: 0;
}

._3n36tzGn8BrmPzqFRn8Hcg\\=\\= {
  color: var(--description-color);
  margin: 0;
}

.OQYh5PAAFutnaH1rnINCQg\\=\\= + ._3n36tzGn8BrmPzqFRn8Hcg\\=\\= {
  margin-top: var(--description-margin_top);
}

.CrYaqiBODs4-E-OVg7ez1w\\=\\=:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.BIDa4zCcuZF-kvmdAMXnYA\\=\\= {
  margin-top: var(--error_message-margin_top);
}
`,""]),n.locals={"field-set":"jD2bFSy26x27F4NbLqcwbQ==","field-set--xsmall":"_8GFGknosEtEZ9SfXHhMhMw==","field-set__legend":"OQYh5PAAFutnaH1rnINCQg==","field-set__description":"_3n36tzGn8BrmPzqFRn8Hcg==","field-set__content":"CrYaqiBODs4-E-OVg7ez1w==","field-set__error-message":"BIDa4zCcuZF-kvmdAMXnYA=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.kVxFDkDp1WiqFARNx40efA\\=\\= {
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
`,""]),n.locals={list:"kVxFDkDp1WiqFARNx40efA==","list--solid":"N9NwN7tigj3zhHV6vAI1Yg==","list--dashed":"_1OjGKU1AWWv4onZHVy8gMg=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.stories.modules.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.PFSVXvkixjcwfiBNWK-KGw\\=\\= {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .PFSVXvkixjcwfiBNWK-KGw\\=\\= {
    width: 300px;
  }
}
`,""]),n.locals={container:"PFSVXvkixjcwfiBNWK-KGw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.kEMtpd0vDKSFN8sg4Zat8w\\=\\= {
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
`,""]),n.locals={"list-item":"kEMtpd0vDKSFN8sg4Zat8w==","list-item--solid":"PM38trUJ7HE3lYjM1aAEKQ==","list-item--dashed":"ayTZ1Tz-7hmw9Xr8jgrg1A=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.FtDdsbEAM33qIgoRUszLaA\\=\\= {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),n.locals={map:"FtDdsbEAM33qIgoRUszLaA=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.Mbb3fzMlklC4bB5nt8fvgQ\\=\\= {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),n.locals={page:"Mbb3fzMlklC4bB5nt8fvgQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.w0djuOyMj4iJjw\\+xnbxnBQ\\=\\= {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),n.locals={"page-content":"w0djuOyMj4iJjw+xnbxnBQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.-beL2kFpvp7WDWkJr8TBZg\\=\\= {
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
`,""]),n.locals={"page-header":"-beL2kFpvp7WDWkJr8TBZg==","page-header--primary":"AluzwyTlCuv1MlVQSq3Muw==","page-header--success":"yBWULdwIkJV8mVakLU6sFg==","page-header--small":"qGezCOaw+0uJJRA-y33ITw==","page-header--medium":"FNIUvKff1lwZLEaoDsSTDQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`._3GFSutpV5Q6iwd5VMJPC3A\\=\\= {
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
`,""]),n.locals={"pagination-icon":"_3GFSutpV5Q6iwd5VMJPC3A==","pagination-icon--disabled":"CN4Pm94YHEsSqZ1j8D3CiA==","pagination-wrapper":"bi-VW11-SL2+iaKLszbuoQ==","icon-button":"eMU9U091xipg7kcuaHFu4A==","description-text":"msPRefgGC7JcQ89NocZN3A==","select-pagination":"N9aaKkJuHiCfcKiq+DM0kw==","pagination-wrapper-row":"RjVcmiVd2eJ7i+jH6NM6TA=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`/* breakpoints-xs */
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
`,""]),n.locals={panel:"MW7PdvFCawKtIQQHk3x5sg==","panel--mobile-layout":"qMT1T6jZgyJjy+I32MZxyQ==",panel__pointer:"o1T9Q-usoqoUrOKBuFEstQ==","panel__pointer-position":"F-KinNeKbdcHeD0RghFn9Q==","panel__content-wrapper--info":"rbNO4rIwAvCwzM5qWDUYpg==","panel__pointer--info":"ac6w0wPOe4kWKKQIifG1Tw==","panel__content-wrapper--success":"zJu6Pkw2NTwhvG7Hqt25bQ==","panel__pointer--success":"L1AquKxZ517XcsNuewb4mg==","panel__content-wrapper--warning":"ELA7lcORz+i33bObgz2PEw==","panel__pointer--warning":"n7s3uIGJPyPYbNnirnZfFA==","panel__content-wrapper--error":"_2iiSnaDHm5arMnAht-1DDQ==","panel__pointer--error":"dy6s038ahAHiK0Z1EyznxQ==","panel__content-wrapper":"Bk+XnsOtij3t6WYERRepdA==","panel__icon-wrapper":"_7prLoCg4WYXIPP6qgno08Q==",panel__content:"FvFqL5PWy41YkIoFK7400Q==",panel__header:"MiyICMpVyox-tuL1Dsam9A==",panel__body:"I0pabCH9JQdqnqc9I8+g4w=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.ZeFGEoQClriUQ\\+sLw2IV0w\\=\\= {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.VgdMACBeJXZzPwgo5w-ZCQ\\=\\= {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),n.locals={"popover-panel":"ZeFGEoQClriUQ+sLw2IV0w==","popover-panel__arrow":"VgdMACBeJXZzPwgo5w-ZCQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioButton/RadioButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.F139HBygE3Z4puzjaV2QzQ\\=\\= {
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

.D6tP\\+xd\\+p0ExDGCgTKDB3A\\=\\= {
  --radio-size: var(--component-checkbox-size-width-small);
}

.KzbH9ZyZ41gm84XyFRt9KQ\\=\\= {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.D5qIKKX8A4TweQhz20Lptg\\=\\= {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

._4ebyxC9\\+hOwUmY6e9qyLGw\\=\\= {
  --radio-checkmark-display: inline-block;
}

._4ebyxC9\\+hOwUmY6e9qyLGw\\=\\=:not(._3YDRM-V76bxZdvtLv34c7Q\\=\\=, .D5qIKKX8A4TweQhz20Lptg\\=\\=) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.F139HBygE3Z4puzjaV2QzQ\\=\\=:not(._3YDRM-V76bxZdvtLv34c7Q\\=\\=, ._4ebyxC9\\+hOwUmY6e9qyLGw\\=\\=):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.F139HBygE3Z4puzjaV2QzQ\\=\\=:not(._3YDRM-V76bxZdvtLv34c7Q\\=\\=, .D5qIKKX8A4TweQhz20Lptg\\=\\=, ._4ebyxC9\\+hOwUmY6e9qyLGw\\=\\=):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

._3YDRM-V76bxZdvtLv34c7Q\\=\\=._4ebyxC9\\+hOwUmY6e9qyLGw\\=\\= {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

._9wvHGCSkxfKZ9wPK-0aujw\\=\\= {
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

.LODCDI\\+c2S0L56f8WCsCDA\\=\\= {
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
`,""]),n.locals={radio:"F139HBygE3Z4puzjaV2QzQ==","radio--small":"D6tP+xd+p0ExDGCgTKDB3A==","radio--xsmall":"KzbH9ZyZ41gm84XyFRt9KQ==","radio--error":"D5qIKKX8A4TweQhz20Lptg==","radio--checked":"_4ebyxC9+hOwUmY6e9qyLGw==","radio--disabled":"_3YDRM-V76bxZdvtLv34c7Q==","visible-button":"_9wvHGCSkxfKZ9wPK-0aujw==","visible-button__checkmark":"LODCDI+c2S0L56f8WCsCDA=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/RadioGroup/RadioGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.t6j3T81\\+Bw2pR5DMWbGTwA\\=\\= {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.d7DVCbaIBb5AquTni8Zghw\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.aHl6WYxgwcOtt9fMpOYq5A\\=\\= {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.lbS7BGXp4O7b-XXjtwXiHQ\\=\\= {
  flex-direction: column;
}

.qspL5NVVK478yxZbCeKRfQ\\=\\= {
  flex-direction: row;
}
`,""]),n.locals={"radio-group":"t6j3T81+Bw2pR5DMWbGTwA==","radio-group--xsmall":"d7DVCbaIBb5AquTni8Zghw==","radio-group--small":"aHl6WYxgwcOtt9fMpOYq5A==","radio-group--vertical":"lbS7BGXp4O7b-XXjtwXiHQ==","radio-group--horizontal":"qspL5NVVK478yxZbCeKRfQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/MultiSelectItem.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.ykP6NOMLOWJK0KzbyIopAg\\=\\= {
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

.aYyRp6UhI3nL8R6BRuxJCw\\=\\= {
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

.aYyRp6UhI3nL8R6BRuxJCw\\=\\=:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.aYyRp6UhI3nL8R6BRuxJCw\\=\\=:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.IOD\\+8FWXDuNMivJON7TR8Q\\=\\= {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`,""]),n.locals={"multi-select-item":"ykP6NOMLOWJK0KzbyIopAg==","multi-select-item__delete-button":"aYyRp6UhI3nL8R6BRuxJCw==","multi-select-item__delete-button__cross":"IOD+8FWXDuNMivJON7TR8Q=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Select/Select.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`._8aDaMI\\+VlZsGrbgDTqI5\\+w\\=\\= {
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

.zUl8iQUwkObF\\+BJhPMT2Eg\\=\\= {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.jnnG43FVN3h5H-ZabW7X\\+g\\=\\= {
  --delete_cross-color: var(--delete_cross-color-active);
}

._8aDaMI\\+VlZsGrbgDTqI5\\+w\\=\\=:not(.jnnG43FVN3h5H-ZabW7X\\+g\\=\\=) .s1X8EkemS7V0Uj\\+FeR9M7g\\=\\= {
  display: none;
}

._5eJbBtWdd5hoeiAcl7vNvg\\=\\= {
  --option-outline-focus: var(--focus_visible-outline);
}

.wLeyo6Z7DAkOI\\+E8IkWhsg\\=\\= {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.z641DQEkDm2LUPs\\+nUuMqA\\=\\= {
  display: inline-flex;
  padding: 0;
}

.Xq-Nm5SN5RyhSoA4geEjow\\=\\= .z641DQEkDm2LUPs\\+nUuMqA\\=\\=,
.CuKAvNuvsXxKsuwynkLGCg\\=\\= .wLeyo6Z7DAkOI\\+E8IkWhsg\\=\\= {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.CyZuu83LFd92ZHEfZzMDwQ\\=\\= {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

._8TtN-Z1U6JJAJSvxfHNilA\\=\\= {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Xq-Nm5SN5RyhSoA4geEjow\\=\\= .wLeyo6Z7DAkOI\\+E8IkWhsg\\=\\=:focus-visible {
  outline: var(--focus_visible-outline);
}

.aH1naigkBIEbavS2CX0FIA\\=\\= {
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

.DaFsWRju9isj8YYX4ia1RA\\=\\= {
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

.OmDwdrYEg5e6Bhy\\+DOoc5w\\=\\= {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.OmDwdrYEg5e6Bhy\\+DOoc5w\\=\\=:disabled {
  cursor: auto;
}

.OmDwdrYEg5e6Bhy\\+DOoc5w\\=\\=:focus-visible {
  outline: var(--focus_visible-outline);
}

.OmDwdrYEg5e6Bhy\\+DOoc5w\\=\\=:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.OmDwdrYEg5e6Bhy\\+DOoc5w\\=\\=:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.l9MxiyLwYMW77vhX0w8Djw\\=\\= {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.s1X8EkemS7V0Uj\\+FeR9M7g\\=\\= {
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

.vMO9XD3SBT9jcyzg4\\+iCOQ\\=\\= {
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

.vMO9XD3SBT9jcyzg4\\+iCOQ\\=\\=:hover {
  background-color: var(--option-background_color-hover);
}

.Gqd2uC-kcA4z39dTmWdpNw\\=\\= {
  background-color: var(--option-background_color-selected);
}

.Gqd2uC-kcA4z39dTmWdpNw\\=\\=:hover {
  background-color: var(--option-background_color-selected-hover);
}

._3d8A6RMbov6tFDfJiD1a\\+w\\=\\= {
  outline: var(--option-outline-focus);
}
`,""]),n.locals={select:"_8aDaMI+VlZsGrbgDTqI5+w==","select--disabled":"zUl8iQUwkObF+BJhPMT2Eg==","select--expanded":"jnnG43FVN3h5H-ZabW7X+g==","select__option-list":"s1X8EkemS7V0Uj+FeR9M7g==","select--using-keyboard":"_5eJbBtWdd5hoeiAcl7vNvg==",select__field__button:"wLeyo6Z7DAkOI+E8IkWhsg==",select__field:"z641DQEkDm2LUPs+nUuMqA==","select--multiple":"Xq-Nm5SN5RyhSoA4geEjow==","select--single":"CuKAvNuvsXxKsuwynkLGCg==","select--single__field__value":"CyZuu83LFd92ZHEfZzMDwQ==","select--multiple__field__values":"_8TtN-Z1U6JJAJSvxfHNilA==","select__field__arrow-wrapper":"aH1naigkBIEbavS2CX0FIA==","select__field__arrow-wrapper__arrow":"DaFsWRju9isj8YYX4ia1RA==","select--multiple__field__delete-button":"OmDwdrYEg5e6Bhy+DOoc5w==","select--multiple__field__delete-button__cross":"l9MxiyLwYMW77vhX0w8Djw==","select__option-list__option":"vMO9XD3SBT9jcyzg4+iCOQ==","select__option-list__option--selected":"Gqd2uC-kcA4z39dTmWdpNw==","select--multiple__option-list__option--focused":"_3d8A6RMbov6tFDfJiD1a+w=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`Table {
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
`,""]),n.locals={};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),n.locals={};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableBody.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`._7IC8ONaKMT4vARNOFE5K5Q\\=\\= {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),n.locals={TableBody:"_7IC8ONaKMT4vARNOFE5K5Q=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableCell.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.LzDte03f5wXbFrkq12x-PA\\=\\= {
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
`,""]),n.locals={"header-table-cell":"LzDte03f5wXbFrkq12x-PA==","header-table-cell-radiobutton":"NiTfbrfj6xyhW2chbCqPlA==","body-table-cell":"OSEprzp8ecljMivLiVJgRg==","body-table-cell-radiobutton":"_1-zaDxtrX5XZ+3pQQWnMqA==",image:"hIg6aexdd5+sPbM-Mpyrgg==",input:"VkQQnZmMeEHn8KvLo6lKIw==","radio-button":"I7NIpaN9kO7AbEzX84ck7w==","container-sortable":"ySg0u8CGsNQcJMSJguYJFQ==",icon:"kBQAKFeTyP1i2nfY36Gp1A==","icon-desc":"_8kN2-vZhRm91yXWVlcc4Eg==","icon-asc":"cPDdWIF8LIXRIOHZ8WFPfQ==",header:"LQ0LsJkWqygwhcQ-4qWyLA==",property:"_3uS1BrMpoI3lxpN5pw0c1A=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableFooter.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.eUOpKqyivgeuU5D\\+tMn8dw\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-footer":"eUOpKqyivgeuU5D+tMn8dw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableHeader.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.j9BLoyPnbvM\\+0hqq3x9F2w\\=\\= {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),n.locals={"table-header":"j9BLoyPnbvM+0hqq3x9F2w=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/TableRow.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.NEGwPcbU97ZVUshvyUGz0w\\=\\= {
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
`,""]),n.locals={TableRow:"NEGwPcbU97ZVUshvyUGz0w==","table-row--selected":"mI9RxXUW8WizpSnWjQyVZQ==","table-row--body":"m825MhHnmjQiRccJ9iL++A=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Tabs/Tabs.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.aEQEKZGVb6mn6MQvZOo4og\\=\\= {
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

.nFPPNWZ2UyViSDGg-qVr8Q\\=\\= {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.F2VClsE-0WKycV7Y32JwIQ\\=\\= {
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

._6GVPSjHDRXMLKSu6Bl\\+-7Q\\=\\= {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.F2VClsE-0WKycV7Y32JwIQ\\=\\=:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.F2VClsE-0WKycV7Y32JwIQ\\=\\=:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.iPbYDCasq-iHZkJucdg\\+\\+g\\=\\= {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

._39h\\+MN0hBLHpLgnk3lbXnQ\\=\\= {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`,""]),n.locals={tabs:"aEQEKZGVb6mn6MQvZOo4og==",tabs__tablist:"nFPPNWZ2UyViSDGg-qVr8Q==",tabs__tablist__tab:"F2VClsE-0WKycV7Y32JwIQ==","tabs__tablist__tab--selected":"_6GVPSjHDRXMLKSu6Bl+-7Q==",tabs__divider:"iPbYDCasq-iHZkJucdg++g==",tabs__tabpanel:"_39h+MN0hBLHpLgnk3lbXnQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/TextArea/TextArea.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.bobE-HOESIG3H3KPXZUweg\\=\\= {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

._7VAtScmg4Zb1zMZ8ebaV1w\\=\\= {
  resize: none;
}

.PnGMooQQFzFx-1aNPQoEhA\\=\\= {
  resize: both;
}

._9fHYBcDZO2GsMC9l5UqEUA\\=\\= {
  resize: horizontal;
}

.U2Y52EMONTDTxwCcBniYvw\\=\\= {
  resize: vertical;
}
`,""]),n.locals={TextArea:"bobE-HOESIG3H3KPXZUweg==","TextArea--resize-none":"_7VAtScmg4Zb1zMZ8ebaV1w==","TextArea--resize-both":"PnGMooQQFzFx-1aNPQoEhA==","TextArea--resize-horizontal":"_9fHYBcDZO2GsMC9l5UqEUA==","TextArea--resize-vertical":"U2Y52EMONTDTxwCcBniYvw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.okpOXDaGhTmc2MErW9y8ww\\=\\= {
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
`,""]),n.locals={"toggle-button":"okpOXDaGhTmc2MErW9y8ww==","toggle-button--selected":"NbJ+XVl6ovSJIqgxqiA4+A=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.wqtkxDVE9PqFNYigAvOtJw\\=\\= {
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
`,""]),n.locals={"toggle-button-group":"wqtkxDVE9PqFNYigAvOtJw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`/* breakpoints-xs */
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
`,""]),n.locals={container:"FqavDaQxoclcke6-M5jfoQ=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`._76JQBSTYhoDbtrN4-87nuA\\=\\= {
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

.DxVV06YOu3Z4cRfqN6ovFg\\=\\= {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

._2A01tl9oF0yas547pi44pg\\=\\= {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

._76JQBSTYhoDbtrN4-87nuA\\=\\=:not(.us9iqBxWGBWfsKkbuvzxCA\\=\\=):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.us9iqBxWGBWfsKkbuvzxCA\\=\\= {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.JunKKKD9udnwr0aVaZehJA\\=\\= {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.XyjxKC-FmeEX\\+3R\\+bVOmzQ\\=\\= {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.m53Uce1dnE9DqJP9ZTCPVw\\=\\= {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.ATCVmrLrH4jM-aq7tgkf4A\\=\\= {
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

.Aatp3GngB0CKjF1Pw78dQg\\=\\= {
  color: var(--label-color);
}

.bT3ffy2K-C6n9MMZprGJQw\\=\\= {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  ._76JQBSTYhoDbtrN4-87nuA\\=\\=:not(.us9iqBxWGBWfsKkbuvzxCA\\=\\=):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

._76JQBSTYhoDbtrN4-87nuA\\=\\=:not(.us9iqBxWGBWfsKkbuvzxCA\\=\\=):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`,""]),n.locals={template:"_76JQBSTYhoDbtrN4-87nuA==","template--xsmall":"DxVV06YOu3Z4cRfqN6ovFg==","template--small":"_2A01tl9oF0yas547pi44pg==","template--disabled":"us9iqBxWGBWfsKkbuvzxCA==","template__input-wrapper":"JunKKKD9udnwr0aVaZehJA==","template__input-wrapper__input":"XyjxKC-FmeEX+3R+bVOmzQ==","template__input-wrapper__visible-box":"m53Uce1dnE9DqJP9ZTCPVw==","template__label-and-description":"ATCVmrLrH4jM-aq7tgkf4A==","template__label-and-description__label":"Aatp3GngB0CKjF1Pw78dQg==","template__label-and-description__description":"bT3ffy2K-C6n9MMZprGJQw=="};const l=n},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(A,o,e)=>{"use strict";e.d(o,{Z:()=>l});var s=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),C=e.n(s),n=C()(function(c){return c[1]});n.push([A.id,`.Tj1ST4W8YSAsgzbuva7hWg\\=\\= {
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
`,""]),n.locals={InputWrapper:"Tj1ST4W8YSAsgzbuva7hWg==","InputWrapper--with-focus-effect":"YPGX+n3oPq3FmlOolIhSuA==","InputWrapper--default":"xgN2KlBZysAo6RAulFyMJg==","InputWrapper--error":"_0dxSTcSMr8DEmibPUWGS3A==","InputWrapper--disabled":"JRX5UzEi9DUgnQOK4vlG8w==","InputWrapper--readonly-info":"QGXwuLF-yOEOSRWjF8svnw==","InputWrapper--readonly-confirm":"_5Rk9wVjZh3Acbb7KlNJBMQ==","InputWrapper--search":"KlZzLquUQpf1tRZfegHamg==","InputWrapper--with-padding":"ClxxWyLo77vnr6AKremwFg==",InputWrapper__field:"lBYDUQowZ69aWIEzqk6bcQ==",InputWrapper__icon:"atgQHZ+u6-fmiM4fBFitUQ==","InputWrapper__icon--disabled":"b9sB1X+Rm9Q5fEYCbp0P3g==",InputWrapper__label:"WYOqCIKgmK0BQIynjf5kwA=="};const l=n},"./src/components/Button/Stories/success.svg":(A,o,e)=>{"use strict";e.d(o,{r:()=>J});var s=e("./node_modules/react/index.js"),C,n,l;function c(){return c=Object.assign?Object.assign.bind():function(F){for(var X=1;X<arguments.length;X++){var P=arguments[X];for(var Y in P)Object.prototype.hasOwnProperty.call(P,Y)&&(F[Y]=P[Y])}return F},c.apply(this,arguments)}var J=function(X){return s.createElement("svg",c({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},X),C||(C=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(A,o,e)=>{var s={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Stories/MultipleSelect.stories.tsx":"./src/components/Select/Stories/MultipleSelect.stories.tsx","./components/Select/Stories/SingleSelect.stories.tsx":"./src/components/Select/Stories/SingleSelect.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function C(l){var c=n(l);return e(c)}function n(l){if(!e.o(s,l)){var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}return s[l]}C.keys=function(){return Object.keys(s)},C.resolve=n,A.exports=C,C.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(A,o,e)=>{var s={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function C(l){var c=n(l);return e(c)}function n(l){if(!e.o(s,l)){var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}return s[l]}C.keys=function(){return Object.keys(s)},C.resolve=n,A.exports=C,C.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(A,o,e)=>{"use strict";A=e.nmd(A);var s=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,s.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],A,!1)}},A=>{var o=s=>A(A.s=s);A.O(0,[339],()=>(o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),o("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),o("./storybook-init-framework-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),o("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),o("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),o("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),o("./.storybook/preview.js-generated-config-entry.js"),o("./generated-stories-entry.cjs")));var e=A.O()}]);
