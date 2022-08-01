(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(t,s,e)=>{var r={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(i){var d=n(i);return e(d)}function n(i){if(!e.o(r,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return r[i]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>m,__page:()=>f,default:()=>u});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(d),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),x=e.n(I),h=e("./node_modules/react/index.js"),_=e("./node_modules/@mdx-js/react/dist/esm.js"),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=["components"];function k(){return k=Object.assign||function(a){for(var p=1;p<arguments.length;p++){var v=arguments[p];for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}return a},k.apply(this,arguments)}function A(a,p){if(a==null)return{};var v=R(a,p),g,L;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(a);for(L=0;L<U.length;L++)g=U[L],!(p.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(v[g]=a[g]))}return v}function R(a,p){if(a==null)return{};var v={},g=Object.keys(a),L,U;for(U=0;U<g.length;U++)L=g[U],!(p.indexOf(L)>=0)&&(v[L]=a[L]);return v}var K={},P="wrapper";function S(a){var p=a.components,v=A(a,D);return(0,_.kt)(P,k({},K,v,{components:p,mdxType:"MDXLayout"}),(0,_.kt)(O.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,_.kt)("h1",null,"Altinn Design System (v2)"),(0,_.kt)("h2",null,"Viktig informasjon om komponentbiblioteket"),(0,_.kt)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,_.kt)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,_.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,_.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,_.kt)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,_.kt)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,_.kt)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,_.kt)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,_.kt)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,_.kt)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,_.kt)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,_.kt)("h2",null,"Hvordan bruke Storybook"),(0,_.kt)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,_.kt)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,_.kt)("inlineCode",{parentName:"p"},"Docs"),"."),(0,_.kt)("ul",null,(0,_.kt)("li",{parentName:"ul"},(0,_.kt)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,_.kt)("li",{parentName:"ul"},(0,_.kt)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}S.displayName="MDXContent",S.isMDXComponent=!0;var f=function(){throw new Error("Docs-only story")};f.parameters={docsOnly:!0};var l={title:"Introduksjon",includeStories:["__page"]},c={};l.parameters=l.parameters||{},l.parameters.docs=Object.assign({},l.parameters.docs||{},{page:function(){return(0,_.kt)(O.aT,{mdxStoryNameToKey:c,mdxComponentAnnotations:l},(0,_.kt)(S,null))}});const u=l;var m=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>m,__page:()=>f,default:()=>u});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(d),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),x=e.n(I),h=e("./node_modules/react/index.js"),_=e("./node_modules/@mdx-js/react/dist/esm.js"),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=["components"];function k(){return k=Object.assign||function(a){for(var p=1;p<arguments.length;p++){var v=arguments[p];for(var g in v)Object.prototype.hasOwnProperty.call(v,g)&&(a[g]=v[g])}return a},k.apply(this,arguments)}function A(a,p){if(a==null)return{};var v=R(a,p),g,L;if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(a);for(L=0;L<U.length;L++)g=U[L],!(p.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(v[g]=a[g]))}return v}function R(a,p){if(a==null)return{};var v={},g=Object.keys(a),L,U;for(U=0;U<g.length;U++)L=g[U],!(p.indexOf(L)>=0)&&(v[L]=a[L]);return v}var K={},P="wrapper";function S(a){var p=a.components,v=A(a,D);return(0,_.kt)(P,k({},K,v,{components:p,mdxType:"MDXLayout"}),(0,_.kt)(O.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,_.kt)("h1",null,"AppWrapper"),(0,_.kt)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,_.kt)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,_.kt)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}S.displayName="MDXContent",S.isMDXComponent=!0;var f=function(){throw new Error("Docs-only story")};f.parameters={docsOnly:!0};var l={title:"Components/AppWrapper",includeStories:["__page"]},c={};l.parameters=l.parameters||{},l.parameters.docs=Object.assign({},l.parameters.docs||{},{page:function(){return(0,_.kt)(O.aT,{mdxStoryNameToKey:c,mdxComponentAnnotations:l},(0,_.kt)(S,null))}});const u=l;var m=["__page"]},"./.storybook/StoryPage.tsx":(t,s,e)=>{"use strict";e.d(s,{Y:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),y=e("./src/components/AppWrapper/AppWrapper.module.css"),I=e("./node_modules/react/jsx-runtime.js"),x=function(D){var k=D.children;return(0,I.jsx)("div",{children:k})};x.displayName="AppWrapper";try{x.displayName="AppWrapper",x.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:x.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(O){}var h=function(D){var k=D.description;return(0,I.jsxs)(x,{children:[(0,I.jsx)(i.Dx,{}),(0,I.jsx)(i.dk,{children:k}),(0,I.jsx)(i.fQ,{includePrimary:!0}),(0,I.jsx)(i.X6,{children:"Props"}),(0,I.jsx)(i.$4,{story:i.Uh})]})};h.displayName="StoryPage";var _=null;try{h.displayName="StoryPage",h.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:h.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(O){}},"./.storybook/preview.js-generated-config-entry.js":(t,s,e)=>{"use strict";var r={};e.r(r),e.d(r,{__namedExportsOrder:()=>R,parameters:()=>A});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),O=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),k=e("./node_modules/@storybook/theming/dist/esm/index.js"),A={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},k.np.dark),light:Object.assign({},k.np.normal)}},R=["parameters"],K=e("./node_modules/console-browserify/index.js");function P(l,c){var u=Object.keys(l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);c&&(m=m.filter(function(a){return Object.getOwnPropertyDescriptor(l,a).enumerable})),u.push.apply(u,m)}return u}function S(l){for(var c=1;c<arguments.length;c++){var u=arguments[c]!=null?arguments[c]:{};c%2?P(Object(u),!0).forEach(function(m){f(l,m,u[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(u)):P(Object(u)).forEach(function(m){Object.defineProperty(l,m,Object.getOwnPropertyDescriptor(u,m))})}return l}function f(l,c,u){return c in l?Object.defineProperty(l,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[c]=u,l}Object.keys(r).forEach(function(l){var c=r[l];switch(l){case"args":return(0,O.uc)(c);case"argTypes":return(0,O.v9)(c);case"decorators":return c.forEach(function(m){return(0,O.$9)(m,!1)});case"loaders":return c.forEach(function(m){return(0,O.HZ)(m,!1)});case"parameters":return(0,O.h1)(S({},c),!1);case"argTypesEnhancers":return c.forEach(function(m){return(0,O.My)(m)});case"argsEnhancers":return c.forEach(function(m){return(0,O._C)(m)});case"render":return(0,O.$P)(c);case"globals":case"globalTypes":{var u={};return u[l]=c,(0,O.h1)(u,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return K.log(l+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>X,__namedExportsOrder:()=>ae,default:()=>q});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),R=e("./node_modules/storybook-addon-designs/esm/index.js"),K=e("./node_modules/classnames/index.js"),P=e.n(K),S=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Button/Button.tsx"),l=(0,A.createContext)(void 0),c=function(){var E=(0,A.useContext)(l);if(E===void 0)throw new Error("useAccordionContext must be used within a AccordionContext");return E},u=e("./src/components/Accordion/Accordion.module.css"),m=e.n(u),a=e("./node_modules/react/jsx-runtime.js"),p=function(E){var C=E.children,V=E.open,Q=E.onClick,Z=(0,A.useId)(),J=(0,A.useId)();return(0,a.jsx)("div",{className:m().accordion,children:(0,a.jsx)(l.Provider,{value:{onClick:Q,open:V,headerId:Z,contentId:J},children:C})})};p.displayName="Accordion";const v=null;try{p.displayName="Accordion",p.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:p.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(j){}var g=e("./src/components/Accordion/AccordionHeader.module.css"),L=e.n(g),U;function oe(){return oe=Object.assign||function(j){for(var E=1;E<arguments.length;E++){var C=arguments[E];for(var V in C)Object.prototype.hasOwnProperty.call(C,V)&&(j[V]=C[V])}return j},oe.apply(this,arguments)}var ee=function(E){return A.createElement("svg",oe({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},E),U||(U=A.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z"})))},Y=function(E){var C,V=E.children,Q=E.actions,Z=c(),J=Z.onClick,ne=Z.open,de=Z.headerId,le=Z.contentId;return(0,a.jsxs)("div",{className:P()(L()["accordion-header"]),children:[(0,a.jsx)(ee,{className:P()(L()["accordion-header__icon"],(C={},C[L()["accordion-header__icon--opened"]]=ne,C)),width:"12",height:"18",onClick:J}),(0,a.jsx)("button",{className:P()(L()["accordion-header__title"]),"aria-expanded":ne,type:"button",onClick:J,id:de,"aria-controls":le,children:V}),(0,a.jsx)("div",{className:P()(L()["accordion-header__actions"]),children:Q})]})};Y.displayName="AccordionHeader";const se=null;try{Y.displayName="AccordionHeader",Y.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:Y.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(j){}var $=function(E){var C=E.children,V=c(),Q=V.open,Z=V.contentId,J=V.headerId;return(0,a.jsx)("div",{children:Q&&(0,a.jsx)("div",{"aria-expanded":Q,id:Z,"aria-labelledby":J,children:C})})};$.displayName="AccordionContent";const te=null;try{$.displayName="AccordionContent",$.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:$.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(j){}var re=e("./src/components/Accordion/Accordion.stories.module.css"),N=e.n(re);function T(j,E){return B(j)||M(j,E)||w(j,E)||W()}function W(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(j,E){if(!!j){if(typeof j=="string")return b(j,E);var C=Object.prototype.toString.call(j).slice(8,-1);if(C==="Object"&&j.constructor&&(C=j.constructor.name),C==="Map"||C==="Set")return Array.from(j);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return b(j,E)}}function b(j,E){(E==null||E>j.length)&&(E=j.length);for(var C=0,V=new Array(E);C<E;C++)V[C]=j[C];return V}function M(j,E){var C=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(C!=null){var V=[],Q=!0,Z=!1,J,ne;try{for(C=C.call(j);!(Q=(J=C.next()).done)&&(V.push(J.value),!(E&&V.length===E));Q=!0);}catch(de){Z=!0,ne=de}finally{try{!Q&&C.return!=null&&C.return()}finally{if(Z)throw ne}}return V}}function B(j){if(Array.isArray(j))return j}var z=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';

import { Button } from '../Button';

import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';
import classes from './Accordion.stories.module.css';

const figmaLink = ''; // TODO: Add figma link

export default {
  title: \`Components/Accordion\`,
  component: Accordion,
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
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const AccordionExampleContent =
    'Accordion-innhold uten css for \xE5 tilrettelegge for selvalgt styling';

  const ActionButton = <Button>Separat funksjonsknapp</Button>;
  return (
    <div className={cn(classes['container'])}>
      <Accordion
        onClick={handleClick1}
        open={open1}
      >
        <AccordionHeader actions={ActionButton}>Accordion 1</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onClick={handleClick2}
        open={open2}
      >
        <AccordionHeader actions={ActionButton}>Accordion 2</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
  );
};

export const Example = Template.bind({});
Example.args = {
  // TODO: Add story specific args
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,G={Example:{startLoc:{col:51,line:41},endLoc:{col:1,line:75},startBody:{col:51,line:41},endBody:{col:1,line:75}}},H="";const q={title:"Components/Accordion",component:p,parameters:{design:(0,R.vc)([{type:"figma",url:H},{type:"link",url:H}]),docs:{page:function(){return(0,a.jsx)(S.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var F=function(){var E=(0,A.useState)(!1),C=T(E,2),V=C[0],Q=C[1],Z=(0,A.useState)(!1),J=T(Z,2),ne=J[0],de=J[1],le=function(){Q(!V)},me=function(){de(!ne)},ie="Accordion-innhold uten css for \xE5 tilrettelegge for selvalgt styling",ce=(0,a.jsx)(f.z,{children:"Separat funksjonsknapp"});return(0,a.jsxs)("div",{className:P()(N().container),children:[(0,a.jsxs)(p,{onClick:le,open:V,children:[(0,a.jsx)(Y,{actions:ce,children:"Accordion 1"}),(0,a.jsx)($,{children:ie})]}),(0,a.jsxs)(p,{onClick:me,open:ne,children:[(0,a.jsx)(Y,{actions:ce,children:"Accordion 2"}),(0,a.jsx)($,{children:ie})]})]})};F.displayName="Template";var X=F.bind({});X.args={},X.parameters={docs:{description:{story:""}}},X.parameters=Object.assign({storySource:{source:`() => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const AccordionExampleContent =
    'Accordion-innhold uten css for \xE5 tilrettelegge for selvalgt styling';

  const ActionButton = <Button>Separat funksjonsknapp</Button>;
  return (
    <div className={cn(classes['container'])}>
      <Accordion
        onClick={handleClick1}
        open={open1}
      >
        <AccordionHeader actions={ActionButton}>Accordion 1</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion
        onClick={handleClick2}
        open={open2}
      >
        <AccordionHeader actions={ActionButton}>Accordion 2</AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>
  );
}`}},X.parameters);var ae=["Example"]},"./src/components/Button/Button.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>R,Secondary:()=>P,Submit:()=>K,__namedExportsOrder:()=>S,default:()=>k});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),d=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./.storybook/StoryPage.tsx"),x=e("./src/components/Button/Button.tsx"),h=e("./node_modules/react/jsx-runtime.js"),_=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant } from './Button';

const figmaLink =
  'https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2064%3A496';

export default {
  title: \`Components/Button\`,
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
    children: \`I'm a button\`,
    onClick: (params) => {
      alert(\`\${JSON.stringify((params.target as Element).innerHTML)} clicked!\`);
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: \`Primary button\`,
};
Primary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
export const Submit = Template.bind({});
Submit.args = {
  children: \`Submit button\`,
  variant: ButtonVariant.Submit,
};
Submit.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: \`Secondary button\`,
  variant: ButtonVariant.Secondary,
};
Secondary.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,O={Primary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},Submit:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},Secondary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}}},D="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2064%3A496";const k={title:"Components/Button",component:x.z,parameters:{design:(0,y.vc)([{type:"figma",url:D},{type:"link",url:D}]),docs:{page:function(){return(0,h.jsx)(I.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{children:"I'm a button",onClick:function(l){alert(JSON.stringify(l.target.innerHTML)+" clicked!")}}};var A=function(l){return(0,h.jsx)(x.z,Object.assign({},l))};A.displayName="Template";var R=A.bind({});R.args={children:"Primary button"},R.parameters={docs:{description:{story:""}}};var K=A.bind({});K.args={children:"Submit button",variant:x.W.Submit},K.parameters={docs:{description:{story:""}}};var P=A.bind({});P.args={children:"Secondary button",variant:x.W.Secondary},P.parameters={docs:{description:{story:""}}},R.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},R.parameters),K.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},K.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var S=["Primary","Submit","Secondary"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>P,__namedExportsOrder:()=>S,default:()=>R});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),y=e("./src/DesignTokens/index.ts"),I=e("./src/components/CircularProgress/CircularProgress.module.css"),x=e.n(I),h=e("./node_modules/react/jsx-runtime.js"),_=function(l){var c=l.value,u=l.width,m=u===void 0?70:u,a=l.strokeWidth,p=a===void 0?2.5:a,v=l.ariaLabel,g=l.label,L=l.id,U=L+"-label",oe=!v&&g?U:void 0;return(0,h.jsxs)("div",{id:L,className:x().container,style:{width:m+"px"},"aria-valuenow":c,role:"progressbar","aria-labelledby":oe,"aria-label":v,children:[g&&(0,h.jsx)("div",{id:U,className:x().label,children:g}),(0,h.jsxs)("svg",{className:x().svg,viewBox:"0 0 35.8 35.8",children:[(0,h.jsx)(O,{stroke:y.T.ColorsBlue200,strokeWidth:p}),(0,h.jsx)(O,{strokeWidth:p,stroke:y.T.ColorsBlue900,strokeDashoffset:100-c,strokeDasharray:"100 100",className:x().circleTransition})]})]})};_.displayName="CircularProgress";var O=function(l){return(0,h.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},l))};O.displayName="Circle";try{_.displayName="CircularProgress",_.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:_.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(f){}var D=`import React from 'react';
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
`,k={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},A="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const R={title:"Components/CircularProgress",component:_,parameters:{design:(0,i.vc)([{type:"figma",url:A},{type:"link",url:A}]),docs:{page:function(){return(0,h.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var K=function(l){return(0,h.jsx)(_,Object.assign({},l))};K.displayName="CircularTemplate";var P=K.bind({});P.args={width:100,value:60,label:"3/5",id:"progress"},P.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},P.parameters);var S=["SimpleExample"]},"./src/components/List/List.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>l,__namedExportsOrder:()=>c,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),y=e("./src/components/List/List.module.css"),I=e.n(y),x=e("./node_modules/react/jsx-runtime.js"),h=function(m){var a=m.children;return(0,x.jsx)("ul",{className:I().list,children:a})};h.displayName="List";try{h.displayName="List",h.__docgenInfo={description:"",displayName:"List",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:h.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(u){}var _=e("./src/components/List/ListItem.module.css"),O=e.n(_),D=function(m){var a=m.children;return(0,x.jsx)("li",{className:O()["list-item"],children:a})};D.displayName="ListItem";try{D.displayName="ListItem",D.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:D.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(u){}var k=e("./src/components/List/List.stories.modules.css"),A=e.n(k),R=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { List } from './List';
import { ListItem } from './ListItem';
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

const Template: ComponentStory<typeof List> = () => (
  <div className={classes['container']}>
    <List>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  </div>
);

export const Example = Template.bind({});
Example.args = {
  // TODO: Add story specific args
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,K={Example:{startLoc:{col:46,line:40},endLoc:{col:1,line:48},startBody:{col:46,line:40},endBody:{col:1,line:48}}},P="";const S={title:"Components/List",component:h,parameters:{design:(0,i.vc)([{type:"figma",url:P},{type:"link",url:P}]),docs:{page:function(){return(0,x.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var f=function(){return(0,x.jsx)("div",{className:A().container,children:(0,x.jsxs)(h,{children:[(0,x.jsx)(D,{children:"List Item 1"}),(0,x.jsx)(D,{children:"List Item 2"}),(0,x.jsx)(D,{children:"List Item 3"})]})})};f.displayName="Template";var l=f.bind({});l.args={},l.parameters={docs:{description:{story:""}}},l.parameters=Object.assign({storySource:{source:`() => (
  <div className={classes['container']}>
    <List>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  </div>
)`}},l.parameters);var c=["Example"]},"./src/components/Panel/Panel.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>te,Info:()=>se,Success:()=>Y,Warning:()=>$,__namedExportsOrder:()=>re,default:()=>oe});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),d=e("./.storybook/StoryPage.tsx"),y=e("./node_modules/classnames/index.js"),I=e.n(y),x=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),h=e("./src/DesignTokens/index.ts"),_,O,D;function k(){return k=Object.assign||function(N){for(var T=1;T<arguments.length;T++){var W=arguments[T];for(var w in W)Object.prototype.hasOwnProperty.call(W,w)&&(N[w]=W[w])}return N},k.apply(this,arguments)}var A=function(T){return n.createElement("svg",k({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},T),_||(_=n.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),O||(O=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),D||(D=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},R,K,P;function S(){return S=Object.assign||function(N){for(var T=1;T<arguments.length;T++){var W=arguments[T];for(var w in W)Object.prototype.hasOwnProperty.call(W,w)&&(N[w]=W[w])}return N},S.apply(this,arguments)}var f=function(T){return n.createElement("svg",S({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},T),R||(R=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),K||(K=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),P||(P=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},l=e("./src/components/Panel/Panel.module.css"),c=e.n(l),u=e("./node_modules/react/jsx-runtime.js"),m;(function(N){N.Success="success",N.Info="info",N.Warning="warning",N.Error="error"})(m||(m={}));var a=function(T){var W=T.size,w=T.variant;switch(w){case m.Info:case m.Error:case m.Warning:return(0,u.jsx)(A,{style:{width:W,height:W},"data-testid":"panel-icon-info"});case m.Success:return(0,u.jsx)(f,{style:{width:W,height:W},"data-testid":"panel-icon-success"})}},p=function(T){var W=T.forceMobileLayout,w=(0,x.a)("(max-width: "+h.T.BreakpointsSm+")");return W?!0:w},v=function(T){var W,w=T.renderIcon,b=w===void 0?a:w,M=T.title,B=T.children,z=T.variant,G=z===void 0?m.Info:z,H=T.showPointer,q=H===void 0?!1:H,F=T.showIcon,X=F===void 0?!0:F,ae=T.forceMobileLayout,j=ae===void 0?!1:ae,E=p({forceMobileLayout:j}),C=E?h.T.ComponentPanelSizeIconXs:h.T.ComponentPanelSizeIconMd;return(0,u.jsxs)("div",{className:I()(c().panel,(W={},W[c()["panel--has-pointer"]]=q,W[c()["panel--mobile-layout"]]=E,W)),children:[q&&(0,u.jsx)("div",{"data-testid":"panel-pointer",className:I()(c().panel__pointer,c()["panel__pointer--"+G])}),(0,u.jsxs)("div",{className:I()(c()["panel__content-wrapper"],c()["panel__content-wrapper--"+G]),children:[X&&(0,u.jsx)("div",{"data-testid":"panel-icon-wrapper",className:c()["panel__icon-wrapper"],children:b({size:C,variant:G})}),(0,u.jsxs)("div",{className:c().panel__content,children:[M&&(0,u.jsx)("h2",{className:c().panel__header,children:M}),(0,u.jsx)("div",{className:c().panel__body,children:B})]})]})]})};v.displayName="Panel";try{v.displayName="Panel",v.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"false"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:v.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(N){}var g=`import React from 'react';
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
`,L={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},U="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const oe={title:"Components/Panel",component:v,parameters:{design:(0,i.vc)([{type:"figma",url:U},{type:"link",url:U}]),docs:{page:function(){return(0,u.jsx)(d.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,u.jsx)("div",{children:"Her kommer litt informasjon"})}};var ee=function(T){return(0,u.jsx)(v,Object.assign({},T))};ee.displayName="Template";var Y=ee.bind({});Y.args={variant:m.Success},Y.parameters={docs:{description:{story:"Success beskrivelse"}}};var se=ee.bind({});se.parameters={docs:{description:{story:"Info beskrivelse"}}};var $=ee.bind({});$.args={variant:m.Warning},$.parameters={docs:{description:{story:"Warning beskrivelse"}}};var te=ee.bind({});te.args={variant:m.Error},te.parameters={docs:{description:{story:"Error beskrivelse"}}},Y.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},Y.parameters),se.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},se.parameters),$.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},$.parameters),te.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},te.parameters);var re=["Success","Info","Warning","Error"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(t,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>W,__namedExportsOrder:()=>w,default:()=>N});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),A=e("./node_modules/react/index.js"),R=e("./node_modules/storybook-addon-designs/esm/index.js"),K=e("./.storybook/StoryPage.tsx"),P=e("./node_modules/classnames/index.js"),S=e.n(P),f=(0,A.createContext)(void 0),l=function(){var M=(0,A.useContext)(f);if(M===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return M},c=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),u=e.n(c),m=e("./node_modules/react/jsx-runtime.js"),a=function(M){var B=M.children,z=M.onChange,G=M.selectedValue,H=function(F){var X=F.selectedValue;z({selectedValue:X})};return(0,m.jsx)(f.Provider,{value:{onChange:H,selectedValue:G},children:(0,m.jsx)("div",{className:S()(u()["toggle-button-group"]),"data-testid":"toggle-button-group",children:B})})};a.displayName="ToggleButtonGroup";try{a.displayName="ToggleButtonGroup",a.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:a.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(b){}var p=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),v=e.n(p),g=function(M){var B,z=M.children,G=M.value,H=l(),q=H.onChange,F=H.selectedValue,X=function(){q({selectedValue:G})};return(0,m.jsx)("button",{"data-testid":"toggle-button",className:S()(v()["toggle-button"],(B={},B[v()["toggle-button--selected"]]=G===F,B)),onClick:X,type:"button","aria-pressed":G==F,children:z})};g.displayName="ToggleButton";try{g.displayName="ToggleButton",g.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:g.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(b){}function L(b,M){return se(b)||Y(b,M)||oe(b,M)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(b,M){if(!!b){if(typeof b=="string")return ee(b,M);var B=Object.prototype.toString.call(b).slice(8,-1);if(B==="Object"&&b.constructor&&(B=b.constructor.name),B==="Map"||B==="Set")return Array.from(b);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return ee(b,M)}}function ee(b,M){(M==null||M>b.length)&&(M=b.length);for(var B=0,z=new Array(M);B<M;B++)z[B]=b[B];return z}function Y(b,M){var B=b==null?null:typeof Symbol!="undefined"&&b[Symbol.iterator]||b["@@iterator"];if(B!=null){var z=[],G=!0,H=!1,q,F;try{for(B=B.call(b);!(G=(q=B.next()).done)&&(z.push(q.value),!(M&&z.length===M));G=!0);}catch(X){H=!0,F=X}finally{try{!G&&B.return!=null&&B.return()}finally{if(H)throw F}}return z}}function se(b){if(Array.isArray(b))return b}var $=`import React, { useState } from 'react';
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
`,te={Example:{startLoc:{col:59,line:37},endLoc:{col:1,line:53},startBody:{col:59,line:37},endBody:{col:1,line:53}}},re="";const N={title:"Components/Toggle button group",component:a,parameters:{design:(0,R.vc)([{type:"figma",url:re},{type:"link",url:re}]),docs:{page:function(){return(0,m.jsx)(K.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var T=function(){var M=(0,A.useState)("left"),B=L(M,2),z=B[0],G=B[1],H=function(F){var X=F.selectedValue;G(X)};return(0,m.jsxs)(a,{onChange:H,selectedValue:z,children:[(0,m.jsx)(g,{value:"left",children:"Venstre valg"}),(0,m.jsx)(g,{value:"right",children:"H\xF8yre valg"})]})};T.displayName="Template";var W=T.bind({});W.args={},W.parameters={docs:{description:{}}},W.parameters=Object.assign({storySource:{source:`() => {
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
}`}},W.parameters);var w=["Example"]},"./src/DesignTokens/index.ts":(t,s,e)=>{"use strict";e.d(s,{T:()=>K});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),y=e.n(d),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),x=e.n(I),h=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),_=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),O=1.6,D=/(\d*\.?\d+)rem(?=\W|$)/gim,k=function(f){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,c=Math.pow(10,l);return Math.round((f+Number.EPSILON)*c)/c},A=function(f){return typeof f=="string"?f.replace(D,function(l,c){var u=k(c*O);return u+"rem"}):f},R={get:function(f,l){if(l in f){var c=f[l];return typeof c=="object"?new Proxy(c,R):A(c)}}},K=new Proxy(h,R),P=new Proxy(_,R)},"./src/components/Button/Button.tsx":(t,s,e)=>{"use strict";e.d(s,{W:()=>S,z:()=>f});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(d),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),x=e.n(I),h=e("./node_modules/react/index.js"),_=e("./node_modules/classnames/index.js"),O=e.n(_),D=e("./src/components/Button/Button.module.css"),k=e.n(D),A=e("./node_modules/react/jsx-runtime.js"),R=["children","variant","type"];function K(l,c){if(l==null)return{};var u=P(l,c),m,a;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);for(a=0;a<p.length;a++)m=p[a],!(c.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,m)||(u[m]=l[m]))}return u}function P(l,c){if(l==null)return{};var u={},m=Object.keys(l),a,p;for(p=0;p<m.length;p++)a=m[p],!(c.indexOf(a)>=0)&&(u[a]=l[a]);return u}var S;(function(l){l.Primary="primary",l.Secondary="secondary",l.Submit="submit"})(S||(S={}));var f=function(c){var u=c.children,m=c.variant,a=m===void 0?S.Primary:m,p=c.type,v=p===void 0?"button":p,g=K(c,R);return(0,A.jsx)("button",Object.assign({"data-testid":a+"-button",className:O()(k().button,k()["button--"+a]),type:v},g,{children:u}))};f.displayName="Button";try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"ButtonVariant.Primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"submit"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(l){}},"./storybook-init-framework-entry.js":(t,s,e)=>{"use strict";var r=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-neutral-000);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),d.locals={accordion:"accordion---oQBwV"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),d.locals={container:"container---_OBRF"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.accordion-header---NEcyL {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border-width-thin);
  --component-accordion_header-color-background: var(--colors-neutral-000);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

.accordion-header__title---BmsGI {
  --component-accordion_header_title-spacing-margin_left: 2.5rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font-size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-weight-heading
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
  background-color: var(--component-accordion_header_title-color-background);
  text-align: var(--component-accordion_header_title-text-align);
  margin-left: var(--component-accordion_header_title-margin-left);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
}

.accordion-header__actions---qbcYv {
  margin-top: 0.3rem;
}

.accordion-header__icon---fav1h {
  padding-top: 1rem;
  margin-left: 2.5rem;
}

.accordion-header__icon--opened---eyPGz {
  transform: rotate(90deg);
  margin-top: 0.3rem;
  margin-left: 3rem;
}
`,""]),d.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv","accordion-header__icon":"accordion-header__icon---fav1h","accordion-header__icon--opened":"accordion-header__icon--opened---eyPGz"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),d.push([t.id,`html {
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
`,""]),d.locals={};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.button---AisLs {
  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: 0;
  font-size: var(--font_size-300);
  text-align: center;
  box-sizing: border-box;
  padding: var(--component-button-space-padding-top)
    var(--component-button-space-padding-x)
    var(--component-button-space-padding-bottom);
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
}

.button---AisLs:focus-visible {
  outline: var(--colors-neutral-900) solid
    var(--component-button-border_width-default);
  outline-offset: calc(0px - var(--component-button-border_width-default));
}

.button--primary---cv182 {
  background: var(--component-button-primary-color-background-default);
  color: var(--component-button-primary-color-text-default);
}

.button--primary---cv182:hover,
.button--primary---cv182:focus-visible {
  background: var(--component-button-primary-color-background-hover);
}

.button--secondary---UO8l7 {
  background: var(--component-button-secondary-color-background-default);
  outline: var(--component-button-secondary-color-border-default) solid
    var(--component-button-border_width-default);
  outline-offset: calc(var(--component-button-border_width-default) * -1);
  color: var(--component-button-secondary-color-text-default);
}

.button--secondary---UO8l7:hover {
  background: var(--component-button-secondary-color-background-hover);
  color: var(--component-button-secondary-color-text-hover);
}

.button--submit---zwseS {
  background: var(--component-button-submit-color-background-default);
  color: var(--component-button-submit-color-text-default);
}

.button--submit---zwseS:hover,
.button--submit---zwseS:focus-visible {
  background: var(--component-button-submit-color-background-hover);
}
`,""]),d.locals={button:"button---AisLs","button--primary":"button--primary---cv182","button--secondary":"button--secondary---UO8l7","button--submit":"button--submit---zwseS"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.svg---cRnN3 {
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
`,""]),d.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.list---Xw1lu{
  --component-list-border_top_color: #BCC7CC;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
  padding-left: 0;
  list-style: none;
}
`,""]),d.locals={list:"list---Xw1lu"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.container---sf7W5{
    width: 720px;
}

@media only screen and (max-width: 960px) {
    .container---sf7W5{
       width: 300px;
    }
}`,""]),d.locals={container:"container---sf7W5"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.list-item---aLk6z{
    --component-list_item-border_bottom_color: #BCC7CC;
    --component-list_item-border-bottom-style: solid;
    --component-list_item-border-bottom-width: 0.1rem;
    border-bottom-color: var(--component-list_item-border_bottom_color);
    border-bottom-style: var(--component-list_item-border-bottom-style);
    border-bottom-width: var(--component-list_item-border-bottom-width);
    display: block;
}`,""]),d.locals={"list-item":"list-item---aLk6z"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`/* breakpoints-xs */
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
`,""]),d.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj","panel--has-pointer":"panel--has-pointer---MPH_N",panel__pointer:"panel__pointer---bc7XJ","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`/* breakpoints-xs */
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
  padding-top: var(--component-toggle_button-space-padding-top);
  padding-bottom: var(--component-toggle_button-space-padding-bottom);
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-deactive);
  color: var(--component-toggle_button-color-text-deactive);
  font-size: var(--toggle_button-font_size);
}

.toggle-button--selected---eDtcc {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.toggle-button---VbrSe:not(.toggle-button--selected---eDtcc):hover {
  background-color: var(--colors-blue-300);
}
`,""]),d.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const y=d},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),d=i()(o());d.push([t.id,`.toggle-button-group---xdsvq {
  border-color: var(--component-toggle_button-color-border-deactive);
  border-width: var(--border_width-standard);
  border-style: solid;
}
`,""]),d.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const y=d},"./src/components/Accordion/Accordion.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/Button/Button.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/List/List.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(t,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[t.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=r(o,n);t.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(t,s,e)=>{var r={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Button.stories.tsx":"./src/components/Button/Button.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(i){var d=n(i);return e(d)}function n(i){if(!e.o(r,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return r[i]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(t,s,e)=>{var r={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(i){var d=n(i);return e(d)}function n(i){if(!e.o(r,i)){var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}return r[i]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(t,s,e)=>{"use strict";t=e.nmd(t);var r=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,r.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],t,!1)}},t=>{var s=r=>t(t.s=r);t.O(0,[458],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=t.O()}]);
