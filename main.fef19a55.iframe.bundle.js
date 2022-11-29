(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(_,s,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,_.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>c,__page:()=>a,default:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(y),T=e("./node_modules/react/index.js"),j=e("./node_modules/@mdx-js/react/index.js"),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(P){for(var I=1;I<arguments.length;I++){var S=arguments[I];for(var B in S)Object.prototype.hasOwnProperty.call(S,B)&&(P[B]=S[B])}return P},v.apply(this,arguments)}function b(P,I){if(P==null)return{};var S=E(P,I),B,Y;if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(P);for(Y=0;Y<z.length;Y++)B=z[Y],!(I.indexOf(B)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,B)||(S[B]=P[B]))}return S}function E(P,I){if(P==null)return{};var S={},B=Object.keys(P),Y,z;for(z=0;z<B.length;z++)Y=B[z],!(I.indexOf(Y)>=0)&&(S[Y]=P[Y]);return S}var h={},m="wrapper";function l(P){var I=P.components,S=b(P,f);return(0,j.mdx)(m,v({},h,S,{components:I,mdxType:"MDXLayout"}),(0,j.mdx)(O.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,j.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,j.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,j.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,j.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,j.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,j.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,j.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,j.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,j.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,j.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,j.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,j.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,j.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,j.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,j.mdx)("ul",null,(0,j.mdx)("li",{parentName:"ul"},(0,j.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,j.mdx)("li",{parentName:"ul"},(0,j.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}l.displayName="MDXContent",l.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var i={title:"Introduksjon",includeStories:["__page"]},p={};i.parameters=i.parameters||{},i.parameters.docs=Object.assign({},i.parameters.docs||{},{page:function(){return(0,j.mdx)(O.aT,{mdxStoryNameToKey:p,mdxComponentAnnotations:i},(0,j.mdx)(l,null))}});const g=i;var c=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>c,__page:()=>a,default:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(y),T=e("./node_modules/react/index.js"),j=e("./node_modules/@mdx-js/react/index.js"),O=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(P){for(var I=1;I<arguments.length;I++){var S=arguments[I];for(var B in S)Object.prototype.hasOwnProperty.call(S,B)&&(P[B]=S[B])}return P},v.apply(this,arguments)}function b(P,I){if(P==null)return{};var S=E(P,I),B,Y;if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(P);for(Y=0;Y<z.length;Y++)B=z[Y],!(I.indexOf(B)>=0)&&(!Object.prototype.propertyIsEnumerable.call(P,B)||(S[B]=P[B]))}return S}function E(P,I){if(P==null)return{};var S={},B=Object.keys(P),Y,z;for(z=0;z<B.length;z++)Y=B[z],!(I.indexOf(Y)>=0)&&(S[Y]=P[Y]);return S}var h={},m="wrapper";function l(P){var I=P.components,S=b(P,f);return(0,j.mdx)(m,v({},h,S,{components:I,mdxType:"MDXLayout"}),(0,j.mdx)(O.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,j.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,j.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,j.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,j.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,j.mdx)("pre",null,(0,j.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}l.displayName="MDXContent",l.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var i={title:"Components/AppWrapper",includeStories:["__page"]},p={};i.parameters=i.parameters||{},i.parameters.docs=Object.assign({},i.parameters.docs||{},{page:function(){return(0,j.mdx)(O.aT,{mdxStoryNameToKey:p,mdxComponentAnnotations:i},(0,j.mdx)(l,null))}});const g=i;var c=["__page"]},"./.storybook/StoryPage.tsx":(_,s,e)=>{"use strict";e.d(s,{Y:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),C=e("./src/components/AppWrapper/AppWrapper.tsx"),D=e("./node_modules/react/jsx-runtime.js"),y=function(j){var O=j.description;return(0,D.jsxs)(C.O,{children:[(0,D.jsx)(u.Dx,{}),(0,D.jsx)(u.dk,{children:O}),(0,D.jsx)(u.fQ,{includePrimary:!0}),(0,D.jsx)(u.X6,{children:"Props"}),(0,D.jsx)(u.$4,{story:u.Uh})]})};y.displayName="StoryPage";var M=null;try{y.displayName="StoryPage",y.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:y.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(T){}},"./.storybook/preview.js-generated-config-entry.js":(_,s,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>v,parameters:()=>f});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),T=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e("./node_modules/@storybook/theming/dist/esm/index.js"),f={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},O.np.dark),light:Object.assign({},O.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},v=["parameters"],b=e("./node_modules/console-browserify/index.js");function E(l,a){var i=Object.keys(l);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(l);a&&(p=p.filter(function(g){return Object.getOwnPropertyDescriptor(l,g).enumerable})),i.push.apply(i,p)}return i}function h(l){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?E(Object(i),!0).forEach(function(p){m(l,p,i[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):E(Object(i)).forEach(function(p){Object.defineProperty(l,p,Object.getOwnPropertyDescriptor(i,p))})}return l}function m(l,a,i){return a in l?Object.defineProperty(l,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):l[a]=i,l}Object.keys(t).forEach(function(l){var a=t[l];switch(l){case"args":return(0,T.uc)(a);case"argTypes":return(0,T.v9)(a);case"decorators":return a.forEach(function(p){return(0,T.$9)(p,!1)});case"loaders":return a.forEach(function(p){return(0,T.HZ)(p,!1)});case"parameters":return(0,T.h1)(h({},a),!1);case"argTypesEnhancers":return a.forEach(function(p){return(0,T.My)(p)});case"argsEnhancers":return a.forEach(function(p){return(0,T._C)(p)});case"render":return(0,T.$P)(a);case"globals":case"globalTypes":{var i={};return i[l]=a,(0,T.h1)(i,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return b.log(l+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>R,__namedExportsOrder:()=>W,default:()=>w});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),P=e.n(c),I=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),B=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./node_modules/classnames/index.js"),z=e.n(Y),Z=e("./.storybook/StoryPage.tsx"),X=e("./src/components/Button/index.ts"),oe=e("./src/components/Accordion/Accordion.tsx"),ne=e("./src/components/Accordion/AccordionHeader.tsx"),J=e("./src/components/Accordion/AccordionContent.tsx"),_e=e("./src/components/Accordion/Accordion.stories.module.css"),de=e.n(_e),se=e("./src/components/Accordion/Context.ts"),te=e("./node_modules/react/jsx-runtime.js");function F(K,V){return x(K)||U(K,V)||G(K,V)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(K,V){if(!!K){if(typeof K=="string")return Q(K,V);var $=Object.prototype.toString.call(K).slice(8,-1);if($==="Object"&&K.constructor&&($=K.constructor.name),$==="Map"||$==="Set")return Array.from(K);if($==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test($))return Q(K,V)}}function Q(K,V){(V==null||V>K.length)&&(V=K.length);for(var $=0,re=new Array(V);$<V;$++)re[$]=K[$];return re}function U(K,V){var $=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if($!=null){var re=[],ce=!0,ae=!1,ye,be;try{for($=$.call(K);!(ce=(ye=$.next()).done)&&(re.push(ye.value),!(V&&re.length===V));ce=!0);}catch(q){ae=!0,be=q}finally{try{!ce&&$.return!=null&&$.return()}finally{if(ae)throw be}}return re}}function x(K){if(Array.isArray(K))return K}var A=`import React, { useState } from 'react';
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
`,k={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},N="";const w={title:"Components/Accordion",component:oe.U,subcomponents:{AccordionHeader:ne._,AccordionContent:J.v},parameters:{design:(0,S.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,te.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:se.Bt.Primary,useActions:!0,subtitle:"Subtitle"}};var L=function(V){var $=(0,I.useState)(!1),re=F($,2),ce=re[0],ae=re[1],ye=(0,I.useState)(!1),be=F(ye,2),q=be[0],ee=be[1],le=function(){ae(!ce)},ge=function(){ee(!q)},fe="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",he=(0,B.D8)(),Oe=F(he,1),ve=Oe[0].useActions,Ee=(0,B.D8)(),De=F(Ee,1),je=De[0].subtitle,Te=ve?(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("div",{children:"Example setup"}),(0,te.jsx)(X.zx,{variant:X.Wu.Filled,color:X.rp.Primary,size:X.qE.Small,children:"Separat knapp 1"}),(0,te.jsx)(X.zx,{variant:X.Wu.Outline,color:X.rp.Primary,size:X.qE.Small,children:"Separat knapp 2"})]}):void 0,ie=je.length>0?je:void 0;return(0,te.jsxs)("div",{className:z()(de().container),children:[(0,te.jsxs)(oe.U,{onClick:le,open:ce,iconVariant:V.iconVariant,children:[(0,te.jsx)(ne._,{actions:Te,subtitle:ie,children:"Accordion 1"}),(0,te.jsx)(J.v,{children:fe})]}),(0,te.jsxs)(oe.U,{onClick:ge,open:q,iconVariant:V.iconVariant,children:[(0,te.jsx)(ne._,{actions:Te,subtitle:ie,children:"Accordion 2"}),(0,te.jsx)(J.v,{children:fe})]})]})};L.displayName="Template";var R=L.bind({});R.args={iconVariant:se.Bt.Primary,open:!1},R.argTypes={open:{control:!1},onClick:{control:!1}},R.parameters={docs:{description:{story:""}}},R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters);var W=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>P,FullWidth:()=>c,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>g,Success:()=>l,SuccessWithCustomIcon:()=>p,SuccessWithIcon:()=>i,__namedExportsOrder:()=>I,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/@navikt/ds-icons/esm/Success.js"),D=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),T=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,O={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const v={title:"Components/Button/Filled",component:y.zx,parameters:{design:(0,u.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,T.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Filled,onClick:function(B){alert(JSON.stringify(B.target.innerHTML)+" clicked!")}}};var b=function(B){return(0,T.jsx)(y.zx,Object.assign({},B))};b.displayName="Template";var E=function(B){return(0,T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,T.jsx)(y.zx,Object.assign({},B))})};E.displayName="WithinContainerTemplate";var h=b.bind({});h.args={color:y.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=b.bind({});m.args={color:y.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var l=b.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=b.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var i=b.bind({});i.args={color:y.rp.Success,icon:(0,T.jsx)(C.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var p=b.bind({});p.args={color:y.rp.Success,icon:(0,T.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},p.parameters={docs:{description:{story:""}}};var g=b.bind({});g.args={color:y.rp.Secondary,icon:(0,T.jsx)(C.Z,{})},g.parameters={docs:{description:{story:""}}};var c=E.bind({});c.args={color:y.rp.Primary,icon:(0,T.jsx)(C.Z,{}),fullWidth:!0,children:"Secondary button"},c.parameters={docs:{description:{story:""}}};var P=b.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>P,FullWidthAndDashedBorder:()=>c,Primary:()=>h,Secondary:()=>m,SecondaryWithIconNoText:()=>g,Success:()=>l,SuccessWithCustomIcon:()=>p,SuccessWithIcon:()=>i,__namedExportsOrder:()=>I,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/@navikt/ds-icons/esm/Success.js"),D=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),T=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,O={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const v={title:"Components/Button/Outline",component:y.zx,parameters:{design:(0,u.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,T.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Outline,onClick:function(B){alert(JSON.stringify(B.target.innerHTML)+" clicked!")}}};var b=function(B){return(0,T.jsx)(y.zx,Object.assign({},B))};b.displayName="Template";var E=function(B){return(0,T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,T.jsx)(y.zx,Object.assign({},B))})};E.displayName="WithinContainerTemplate";var h=b.bind({});h.args={color:y.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=b.bind({});m.args={color:y.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var l=b.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=b.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var i=b.bind({});i.args={color:y.rp.Success,icon:(0,T.jsx)(C.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var p=b.bind({});p.args={color:y.rp.Success,icon:(0,T.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},p.parameters={docs:{description:{story:""}}};var g=b.bind({});g.args={color:y.rp.Secondary,icon:(0,T.jsx)(C.Z,{})},g.parameters={docs:{description:{story:""}}};var c=E.bind({});c.args={color:y.rp.Primary,icon:(0,T.jsx)(C.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},c.parameters={docs:{description:{story:""}}};var P=b.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>P,FullWidth:()=>c,Primary:()=>h,Secondary:()=>m,Success:()=>l,SuccessWithCustomIcon:()=>p,SuccessWithIcon:()=>i,SuccessWithIconNoText:()=>g,__namedExportsOrder:()=>I,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./node_modules/@navikt/ds-icons/esm/Success.js"),D=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),T=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,O={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const v={title:"Components/Button/Quiet",component:y.zx,parameters:{design:(0,u.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,T.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Quiet,size:y.qE.Small,onClick:function(B){alert(JSON.stringify(B.target.innerHTML)+" clicked!")}}};var b=function(B){return(0,T.jsx)(y.zx,Object.assign({},B))};b.displayName="Template";var E=function(B){return(0,T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,T.jsx)(y.zx,Object.assign({},B))})};E.displayName="WithinContainerTemplate";var h=b.bind({});h.args={color:y.rp.Primary,children:"Primary button"},h.parameters={docs:{description:{story:""}}};var m=b.bind({});m.args={color:y.rp.Secondary,children:"Secondary button"},m.parameters={docs:{description:{story:""}}};var l=b.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=b.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var i=b.bind({});i.args={color:y.rp.Success,icon:(0,T.jsx)(C.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var p=b.bind({});p.args={color:y.rp.Success,icon:(0,T.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},p.parameters={docs:{description:{story:""}}};var g=b.bind({});g.args={color:y.rp.Success,icon:(0,T.jsx)(C.Z,{})},g.parameters={docs:{description:{story:""}}};var c=E.bind({});c.args={color:y.rp.Primary,icon:(0,T.jsx)(C.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},c.parameters={docs:{description:{story:""}}};var P=b.bind({});P.args={children:"Disabled button",disabled:!0},P.parameters={docs:{description:{story:""}}},h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},P.parameters);var I=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>b,Compact:()=>h,Disabled:()=>m,Error:()=>E,LongText:()=>i,Normal:()=>v,ReadOnly:()=>l,WithDescription:()=>a,WithHiddenLabel:()=>p,__namedExportsOrder:()=>g,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/Checkbox/Checkbox.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},j="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const O={title:"Components/Checkbox",component:D.X,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var f=function(P){return(0,y.jsx)(D.X,Object.assign({},P))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default checkbox."}}};var b=f.bind({});b.args={checked:!0},b.parameters={docs:{description:{story:"This is a checked checkbox."}}};var E=f.bind({});E.args={error:!0},E.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var h=f.bind({});h.args={compact:!0},h.parameters={docs:{description:{story:"This is the compact checkbox."}}};var m=f.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var l=f.bind({});l.args={readOnly:!0},l.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var a=f.bind({});a.args={description:"Lorem ipsum dolor sit amet."},a.parameters={docs:{description:{story:"This is a checkbox with description."}}};var i=f.bind({});i.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},i.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var p=f.bind({});p.args={hideLabel:!0},p.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},a.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},p.parameters);var g=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>E,Disabled:()=>m,Error:()=>h,Horizontal:()=>b,Vertical:()=>v,__namedExportsOrder:()=>l,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const O={title:"Components/CheckboxGroup",component:D.c,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:D.T.Vertical}};var f=function(i){return(0,y.jsx)(D.c,Object.assign({},i))};f.displayName="Template";var v=f.bind({});v.args={variant:D.T.Vertical},v.parameters={docs:{description:{story:"This is the default setting."}}};var b=f.bind({});b.args={variant:D.T.Horizontal},b.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var E=f.bind({});E.args={compact:!0},E.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var h=f.bind({});h.args={error:"Du m\xE5 velge minst ett av alternativene over."},h.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var m=f.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},v.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},m.parameters);var l=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>v,__namedExportsOrder:()=>b,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/CircularProgress/CircularProgress.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const O={title:"Components/CircularProgress",component:D.D,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var f=function(h){return(0,y.jsx)(D.D,Object.assign({},h))};f.displayName="CircularTemplate";var v=f.bind({});v.args={width:100,value:60,label:"3/5",id:"progress"},v.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},v.parameters);var b=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>v,__namedExportsOrder:()=>b,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/ErrorMessage/ErrorMessage.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},j="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const O={title:"Components/ErrorMessage",component:D.B,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var f=function(h){return(0,y.jsx)(D.B,Object.assign({},h,{children:"This is an error message"}))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},v.parameters);var b=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>b,Disabled:()=>m,Error:()=>h,Normal:()=>v,WithDescription:()=>E,__namedExportsOrder:()=>l,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/FieldSet/FieldSet.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},j="";const O={title:"Components/FieldSet",component:D.C,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:D.w.Small}};var f=function(i){return(0,y.jsx)(D.C,Object.assign({},i,{children:i.children}))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is a normal field set."}}};var b=f.bind({});b.args={size:D.w.Xsmall},b.parameters={docs:{description:{story:"This is a compact field set."}}};var E=f.bind({});E.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},E.parameters={docs:{description:{story:"This is a field set with a description."}}};var h=f.bind({});h.args={error:"Her er det en beskrivende feilmelding."},h.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var m=f.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters);var l=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Dashed:()=>l,Solid:()=>m,__namedExportsOrder:()=>a,default:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/List/List.tsx"),y=e("./src/components/List/ListItem.tsx"),M=e("./src/components/List/Context.ts"),T=e("./src/components/List/List.stories.modules.css"),j=e.n(T),O=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,v={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},b="";const E={title:"Components/List",component:D.a,parameters:{design:(0,u.vc)([{type:"figma",url:b},{type:"link",url:b}]),docs:{page:function(){return(0,O.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var h=function(p){return(0,O.jsx)("div",{className:j().container,children:(0,O.jsxs)(D.a,{borderStyle:p.borderStyle,children:[(0,O.jsx)(y.H,{children:"List Item 1"}),(0,O.jsx)(y.H,{children:"List Item 2"}),(0,O.jsx)(y.H,{children:"List Item 3"})]})})};h.displayName="Template";var m=h.bind({});m.args={borderStyle:M.N4.Solid},m.parameters={docs:{description:{story:""}}};var l=h.bind({});l.args={borderStyle:M.N4.Dashed},l.parameters={docs:{description:{story:""}}},m.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},l.parameters);var a=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>Q,GoogleMaps:()=>N,KartverketSea:()=>k,KartverketTerrain:()=>A,MapWithMarkerZoomAndCenter:()=>U,OpenStreetMap:()=>x,__namedExportsOrder:()=>w,default:()=>H});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),P=e.n(c),I=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),B=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/Map/Map.tsx"),z=e("./node_modules/react/jsx-runtime.js"),Z=e("./node_modules/console-browserify/index.js");function X(L,R){return de(L)||_e(L,R)||ne(L,R)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(L,R){if(!!L){if(typeof L=="string")return J(L,R);var W=Object.prototype.toString.call(L).slice(8,-1);if(W==="Object"&&L.constructor&&(W=L.constructor.name),W==="Map"||W==="Set")return Array.from(L);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return J(L,R)}}function J(L,R){(R==null||R>L.length)&&(R=L.length);for(var W=0,K=new Array(R);W<R;W++)K[W]=L[W];return K}function _e(L,R){var W=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(W!=null){var K=[],V=!0,$=!1,re,ce;try{for(W=W.call(L);!(V=(re=W.next()).done)&&(K.push(re.value),!(R&&K.length===R));V=!0);}catch(ae){$=!0,ce=ae}finally{try{!V&&W.return!=null&&W.return()}finally{if($)throw ce}}return K}}function de(L){if(Array.isArray(L))return L}var se=`import React, { useState } from 'react';
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
`,te={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},F="";const H={title:"Components/Map",component:Y.D,parameters:{layout:"fullscreen",design:(0,S.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,z.jsx)(B.Y,{description:"Map component"})}}},args:{}};var G=function(R){var W=(0,I.useState)(R.markerLocation),K=X(W,2),V=K[0],$=K[1],re=function(ae){$(ae),Z.log("Map clicked at ["+ae.latitude+","+ae.longitude+"]")};return(0,z.jsx)(Y.D,Object.assign({},R,{markerLocation:V,onClick:re}))};G.displayName="Template";var Q=G.bind({});Q.args={},Q.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var U=G.bind({});U.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},U.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var x=G.bind({});x.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},x.parameters={docs:{description:{story:"OpenStreetMap"}}};var A=G.bind({});A.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},A.parameters={docs:{description:{story:"Kartverket terrain map"}}};var k=G.bind({});k.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},k.parameters={docs:{description:{story:"Kartverket sea map"}}};var N=G.bind({});N.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},N.parameters={docs:{description:{story:"Google Maps"}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters),U.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},U.parameters),x.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},x.parameters),A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),k.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters),N.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},N.parameters);var w=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>l,Success:()=>a,__namedExportsOrder:()=>i,default:()=>h});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./.storybook/StoryPage.tsx"),u=e("./src/components/Page/Context.ts"),C=e("./src/components/Page/PageContent.tsx"),D=e("./src/components/Page/PageHeader.tsx"),y=e("./src/components/Page/Page.tsx"),M,T;function j(){return j=Object.assign?Object.assign.bind():function(p){for(var g=1;g<arguments.length;g++){var c=arguments[g];for(var P in c)Object.prototype.hasOwnProperty.call(c,P)&&(p[P]=c[P])}return p},j.apply(this,arguments)}var O=function(g){return n.createElement("svg",j({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},g),M||(M=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),T||(T=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},f=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,b={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},E="";const h={title:"Components/Page",component:y.T,parameters:{design:(0,d.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,f.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var m=function(g){return(0,f.jsxs)(y.T,{color:g.color,children:[(0,f.jsx)(D.m,{icon:(0,f.jsx)(O,{}),children:"PageHeader"}),(0,f.jsx)(C.J,{children:"PageContent"})]})};m.displayName="Template";var l=m.bind({});l.args={color:u.gL.Primary},l.parameters={docs:{description:{story:""}}};var a=m.bind({});a.args={color:u.gL.Success},a.parameters={docs:{description:{story:""}}},l.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},a.parameters);var i=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>U,__namedExportsOrder:()=>x,default:()=>G});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),P=e.n(c),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e.n(I),B=e("./node_modules/react/index.js"),Y=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Pagination/Pagination.tsx"),X=e("./node_modules/react/jsx-runtime.js");function oe(A,k){return se(A)||de(A,k)||J(A,k)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(A,k){if(!!A){if(typeof A=="string")return _e(A,k);var N=Object.prototype.toString.call(A).slice(8,-1);if(N==="Object"&&A.constructor&&(N=A.constructor.name),N==="Map"||N==="Set")return Array.from(A);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return _e(A,k)}}function _e(A,k){(k==null||k>A.length)&&(k=A.length);for(var N=0,w=new Array(k);N<k;N++)w[N]=A[N];return w}function de(A,k){var N=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(N!=null){var w=[],L=!0,R=!1,W,K;try{for(N=N.call(A);!(L=(W=N.next()).done)&&(w.push(W.value),!(k&&w.length===k));L=!0);}catch(V){R=!0,K=V}finally{try{!L&&N.return!=null&&N.return()}finally{if(R)throw K}}return w}}function se(A){if(Array.isArray(A))return A}var te=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Pagination } from './Pagination';

const figmaLink = ''; // TODO: Add figma link

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
    />
  );
};

export const Example = Template.bind({});
Example.args = {
  numberOfRows: 200,
  rowsPerPageOptions: [5, 10, 15, 20],
  rowsPerPageText: 'Rader per side',
  pageDescriptionText: 'av',
};
Example.parameters = {
  docs: {
    description: {
      story: '', // TODO: add story description, supports markdown
    },
  },
};
`,F={Example:{startLoc:{col:52,line:38},endLoc:{col:1,line:58},startBody:{col:52,line:38},endBody:{col:1,line:58}}},H="";const G={title:"Components/Pagination",component:Z.t,parameters:{design:(0,Y.vc)([{type:"figma",url:H},{type:"link",url:H}]),docs:{page:function(){return(0,X.jsx)(z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Q=function(k){var N=(0,B.useState)(5),w=oe(N,2),L=w[0],R=w[1],W=(0,B.useState)(0),K=oe(W,2),V=K[0],$=K[1],re=function(ae){R(parseInt(ae.target.value,10)),$(0)};return(0,X.jsx)(Z.t,Object.assign({},k,{rowsPerPage:L,currentPage:V,setCurrentPage:$,onRowsPerPageChange:re}))};Q.displayName="Template";var U=Q.bind({});U.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20],rowsPerPageText:"Rader per side",pageDescriptionText:"av"},U.parameters={docs:{description:{story:""}}},U.parameters=Object.assign({storySource:{source:`(args) => {
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
    />
  );
}`}},U.parameters);var x=["Example"]},"./src/components/Panel/Panel.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>h,Info:()=>b,Success:()=>v,Warning:()=>E,__namedExportsOrder:()=>m,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/Panel/Panel.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const O={title:"Components/Panel",component:D.s,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,y.jsx)("div",{children:"Her kommer litt informasjon"})}};var f=function(a){return(0,y.jsx)(D.s,Object.assign({},a))};f.displayName="Template";var v=f.bind({});v.args={variant:D.c.Success},v.parameters={docs:{description:{story:"Success beskrivelse"}}};var b=f.bind({});b.parameters={docs:{description:{story:"Info beskrivelse"}}};var E=f.bind({});E.args={variant:D.c.Warning},E.parameters={docs:{description:{story:"Warning beskrivelse"}}};var h=f.bind({});h.args={variant:D.c.Error},h.parameters={docs:{description:{story:"Error beskrivelse"}}},v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},b.parameters),E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},h.parameters);var m=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>N,Info:()=>A,Success:()=>x,Warning:()=>k,__namedExportsOrder:()=>w,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),P=e.n(c),I=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),B=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Button/index.ts"),Z=e("./src/components/Panel/Panel.tsx"),X=e("./src/components/Panel/PopoverPanel.tsx"),oe=e("./node_modules/react/jsx-runtime.js");function ne(L,R){return te(L)||se(L,R)||_e(L,R)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(L,R){if(!!L){if(typeof L=="string")return de(L,R);var W=Object.prototype.toString.call(L).slice(8,-1);if(W==="Object"&&L.constructor&&(W=L.constructor.name),W==="Map"||W==="Set")return Array.from(L);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return de(L,R)}}function de(L,R){(R==null||R>L.length)&&(R=L.length);for(var W=0,K=new Array(R);W<R;W++)K[W]=L[W];return K}function se(L,R){var W=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(W!=null){var K=[],V=!0,$=!1,re,ce;try{for(W=W.call(L);!(V=(re=W.next()).done)&&(K.push(re.value),!(R&&K.length===R));V=!0);}catch(ae){$=!0,ce=ae}finally{try{!V&&W.return!=null&&W.return()}finally{if($)throw ce}}return K}}function te(L){if(Array.isArray(L))return L}var F=`import React from 'react';
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
`,H={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},G="";const Q={title:"Components/Panel/PopoverPanel",component:X.H,parameters:{design:(0,S.vc)([{type:"figma",url:G},{type:"link",url:G}]),docs:{page:function(){return(0,oe.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:Z.c.Warning,trigger:(0,oe.jsx)("button",{children:"\xC5pne"}),side:"top"}};var U=function(R){var W=(0,B.eJ)(!1),K=ne(W,2),V=K[0],$=K[1],re=function(){$(!V)};return(0,oe.jsx)("div",{children:(0,oe.jsxs)(X.H,{variant:R.variant,side:R.side,title:R.title,open:V,trigger:(0,oe.jsx)(z.zx,{variant:z.Wu.Filled,color:z.rp.Primary,children:"\xC5pne"}),onOpenChange:$,showPointer:R.showPointer,showIcon:R.showIcon,forceMobileLayout:R.forceMobileLayout,children:[(0,oe.jsx)("div",{children:"Her kommer litt informasjon"}),(0,oe.jsx)(z.zx,{variant:z.Wu.Filled,color:z.rp.Primary,size:z.qE.Small,onClick:re,children:"Lukk"})]})})};U.displayName="Template";var x=U.bind({});x.args={variant:Z.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},x.argTypes={trigger:{control:!1}},x.parameters={docs:{description:{story:""}}};var A=U.bind({});A.args={variant:Z.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},A.argTypes={trigger:{control:!1}},A.parameters={docs:{description:{story:""}}};var k=U.bind({});k.args={variant:Z.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},k.argTypes={trigger:{control:!1}},k.parameters={docs:{description:{story:""}}};var N=U.bind({});N.args={variant:Z.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},N.argTypes={trigger:{control:!1}},N.parameters={docs:{description:{story:""}}},x.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},x.parameters),A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),k.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters),N.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},N.parameters);var w=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>b,Compact:()=>h,Default:()=>v,Disabled:()=>m,Error:()=>E,LongText:()=>a,WithDescription:()=>l,WithHiddenLabel:()=>i,__namedExportsOrder:()=>p,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/RadioButton/RadioButton.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const O={title:"Components/RadioButton",component:D.E,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var f=function(c){return(0,y.jsx)(D.E,Object.assign({},c))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"Default radio button."}}};var b=f.bind({});b.args={checked:!0},b.parameters={docs:{description:{story:"Checked radio button."}}};var E=f.bind({});E.args={error:!0},E.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var h=f.bind({});h.args={size:D.j.Xsmall},h.parameters={docs:{description:{story:"This is the compact radio button."}}};var m=f.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var l=f.bind({});l.args={description:"Lorem ipsum dolor sit amet."},l.parameters={docs:{description:{story:"This is a radio button with description."}}};var a=f.bind({});a.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},a.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var i=f.bind({});i.args={hideLabel:!0},i.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},a.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters);var p=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>E,Disabled:()=>m,Error:()=>h,Horizontal:()=>b,Vertical:()=>v,__namedExportsOrder:()=>l,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/RadioGroup/RadioGroup.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const O={title:"Components/RadioGroup",component:D.Ee,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var f=function(i){return(0,y.jsx)(D.Ee,Object.assign({},i))};f.displayName="Template";var v=f.bind({});v.args={variant:D.DX.Vertical},v.parameters={docs:{description:{story:"This is the default setting."}}};var b=f.bind({});b.args={variant:D.DX.Horizontal},b.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var E=f.bind({});E.args={size:D.YN.Xsmall},E.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var h=f.bind({});h.args={error:"Du m\xE5 velge et av alternativene over."},h.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var m=f.bind({});m.args={disabled:!0},m.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},v.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},m.parameters);var l=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Q,__namedExportsOrder:()=>U,default:()=>H});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),P=e.n(c),I=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),B=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),z=e("./src/components/SearchField/SearchField.tsx"),Z=e("./node_modules/react/jsx-runtime.js");function X(x,A){return de(x)||_e(x,A)||ne(x,A)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(x,A){if(!!x){if(typeof x=="string")return J(x,A);var k=Object.prototype.toString.call(x).slice(8,-1);if(k==="Object"&&x.constructor&&(k=x.constructor.name),k==="Map"||k==="Set")return Array.from(x);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return J(x,A)}}function J(x,A){(A==null||A>x.length)&&(A=x.length);for(var k=0,N=new Array(A);k<A;k++)N[k]=x[k];return N}function _e(x,A){var k=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(k!=null){var N=[],w=!0,L=!1,R,W;try{for(k=k.call(x);!(w=(R=k.next()).done)&&(N.push(R.value),!(A&&N.length===A));w=!0);}catch(K){L=!0,W=K}finally{try{!w&&k.return!=null&&k.return()}finally{if(L)throw W}}return N}}function de(x){if(Array.isArray(x))return x}var se=`import React from 'react';
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
`,te={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},F="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const H={title:"Components/SearchField",component:z.U,parameters:{design:(0,S.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,Z.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var G=function(A){var k=(0,B.D8)(),N=X(k,1),w=N[0].disabled;return(0,Z.jsx)(z.U,Object.assign({disabled:w},A))};G.displayName="Template";var Q=G.bind({});Q.args={},Q.parameters={docs:{description:{story:"Search field."}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},Q.parameters);var U=["Example"]},"./src/components/Select/Select.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Multiple:()=>g,MultipleDisabled:()=>c,MultipleError:()=>P,Single:()=>a,SingleDisabled:()=>i,SingleError:()=>p,__namedExportsOrder:()=>I,default:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),u=e.n(r),C=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),M=e("./src/components/Select/Select.tsx"),T=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import type {
  MultiSelectOption,
  MultiSelectProps,
  SingleSelectOption,
  SingleSelectProps,
} from './Select';
import { Select } from './Select';

const figmaLink =
  'https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627';

const defaultOptions: SingleSelectOption[] = [
  { label: 'Agder', value: 'Agder' },
  { label: 'Innlandet', value: 'Innlandet' },
  { label: 'M\xF8re og Romsdal', value: 'M\xF8re og Romsdal' },
  { label: 'Nordland', value: 'Nordland' },
  { label: 'Oslo', value: 'Oslo' },
  { label: 'Rogaland', value: 'Rogaland' },
  { label: 'Vestfold og Telemark', value: 'Vestfold og Telemark' },
  { label: 'Troms og Finnmark', value: 'Troms og Finnmark' },
  { label: 'Tr\xF8ndelag', value: 'Tr\xF8ndelag' },
  { label: 'Vestland', value: 'Vestland' },
  { label: 'Viken', value: 'Viken' },
];

const multipleSelectOptions: MultiSelectOption[] = defaultOptions.map(
  (option) => ({ ...option, deleteButtonLabel: 'Slett ' + option.label }),
);

const defaultArgs: SingleSelectProps = {
  label: 'Velg et fylke',
  multiple: false,
  options: defaultOptions,
};

const multipleSelectArgs: MultiSelectProps = {
  deleteButtonLabel: 'Fjern alle',
  label: 'Velg ett eller flere fylker',
  multiple: true,
  options: multipleSelectOptions,
};

export default {
  title: \`Components/Select\`,
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
          description={\`TODO: Add a description (supports markdown)\`}
        />
      ),
    },
  },
  args: defaultArgs,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
);

export const Single = Template.bind({});
Single.args = {};
Single.parameters = {
  docs: {
    description: {
      story:
        'This is the default select box. It only allows one option to be selected, like \`<select>\` in html. It has an \`onChange\` property hat accepts a function which will receive the selected value each time it is changed.',
    },
  },
};

export const SingleDisabled = Template.bind({});
SingleDisabled.args = { disabled: true };
SingleDisabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, single select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const SingleError = Template.bind({});
SingleError.args = { error: true };
SingleError.parameters = {
  docs: {
    description: {
      story:
        'This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = multipleSelectArgs;
Multiple.parameters = {
  docs: {
    description: {
      story:
        'This is a select box with the possibility to choose multiple values, like \`<select multiple>\` in html. It has an \`onChange\` property hat accepts a function which will receive a list of the selected values each time it is changed.',
    },
  },
};

export const MultipleDisabled = Template.bind({});
MultipleDisabled.args = { ...multipleSelectArgs, disabled: true };
MultipleDisabled.parameters = {
  docs: {
    description: {
      story:
        'This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled.',
    },
  },
};

export const MultipleError = Template.bind({});
MultipleError.args = { ...multipleSelectArgs, error: true };
MultipleError.parameters = {
  docs: {
    description: {
      story:
        'This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error.',
    },
  },
};
`,O={Single:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},Multiple:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",v=[{label:"Agder",value:"Agder"},{label:"Innlandet",value:"Innlandet"},{label:"M\xF8re og Romsdal",value:"M\xF8re og Romsdal"},{label:"Nordland",value:"Nordland"},{label:"Oslo",value:"Oslo"},{label:"Rogaland",value:"Rogaland"},{label:"Vestfold og Telemark",value:"Vestfold og Telemark"},{label:"Troms og Finnmark",value:"Troms og Finnmark"},{label:"Tr\xF8ndelag",value:"Tr\xF8ndelag"},{label:"Vestland",value:"Vestland"},{label:"Viken",value:"Viken"}],b=v.map(function(S){return Object.assign({},S,{deleteButtonLabel:"Slett "+S.label})}),E={label:"Velg et fylke",multiple:!1,options:v},h={deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:b};const m={title:"Components/Select",component:M.P,parameters:{design:(0,D.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,T.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:E};var l=function(B){return(0,T.jsx)("div",{style:{width:"440px"},children:(0,T.jsx)(M.P,Object.assign({},B))})};l.displayName="Template";var a=l.bind({});a.args={},a.parameters={docs:{description:{story:"This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."}}};var i=l.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var p=l.bind({});p.args={error:!0},p.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}};var g=l.bind({});g.args=h,g.parameters={docs:{description:{story:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed."}}};var c=l.bind({});c.args=Object.assign({},h,{disabled:!0}),c.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var P=l.bind({});P.args=Object.assign({},h,{error:!0}),P.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},a.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},a.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},P.parameters);var I=["Single","SingleDisabled","SingleError","Multiple","MultipleDisabled","MultipleError"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{IconFromNavIconLibrary:()=>m,ImportedCustomIcon:()=>l,__namedExportsOrder:()=>a,default:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./node_modules/@navikt/ds-icons/esm/Success.js"),u=e("./.storybook/StoryPage.tsx"),C=e("./src/components/SvgIcon/index.ts"),D,y,M;function T(){return T=Object.assign?Object.assign.bind():function(i){for(var p=1;p<arguments.length;p++){var g=arguments[p];for(var c in g)Object.prototype.hasOwnProperty.call(g,c)&&(i[c]=g[c])}return i},T.apply(this,arguments)}var j=function(p){return n.createElement("svg",T({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),D||(D=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),y||(y=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),M||(M=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},O=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,v={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},b="";const E={title:"Components/SvgIcon",component:C.l,parameters:{design:(0,d.vc)([{type:"figma",url:b},{type:"link",url:b}]),docs:{page:function(){return(0,O.jsx)(u.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var h=function(p){return(0,O.jsx)(C.l,Object.assign({},p))};h.displayName="Template";var m=h.bind({});m.args={svgIconComponent:(0,O.jsx)(r.Z,{})},m.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var l=h.bind({});l.args={svgIconComponent:(0,O.jsx)(j,{height:"2rem",width:"2rem"})},l.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},l.parameters);var a=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{BasicTable:()=>ae,SelectRows:()=>ye,__namedExportsOrder:()=>be,default:()=>V});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),P=e.n(c),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),S=e.n(I),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),Y=e.n(B),z=e("./node_modules/react/index.js"),Z=e("./node_modules/storybook-addon-designs/esm/index.js"),X=e("./node_modules/classnames/index.js"),oe=e.n(X),ne=e("./.storybook/StoryPage.tsx"),J=e("./src/components/Pagination/index.ts"),_e=e("./src/components/Table/Table.tsx"),de=e("./src/components/Table/TableHeader.tsx"),se=e("./src/components/Table/TableCell.tsx"),te=e("./src/components/Table/TableRow.tsx"),F=e("./src/components/Table/TableBody.tsx"),H=e("./src/components/Table/Table.stories.module.css"),G=e.n(H),Q=e("./src/components/Table/TableFooter.tsx"),U=e("./node_modules/react/jsx-runtime.js");function x(q,ee){return L(q)||w(q,ee)||k(q,ee)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(q,ee){if(!!q){if(typeof q=="string")return N(q,ee);var le=Object.prototype.toString.call(q).slice(8,-1);if(le==="Object"&&q.constructor&&(le=q.constructor.name),le==="Map"||le==="Set")return Array.from(q);if(le==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le))return N(q,ee)}}function N(q,ee){(ee==null||ee>q.length)&&(ee=q.length);for(var le=0,ge=new Array(ee);le<ee;le++)ge[le]=q[le];return ge}function w(q,ee){var le=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(le!=null){var ge=[],fe=!0,he=!1,Oe,ve;try{for(le=le.call(q);!(fe=(Oe=le.next()).done)&&(ge.push(Oe.value),!(ee&&ge.length===ee));fe=!0);}catch(Ee){he=!0,ve=Ee}finally{try{!fe&&le.return!=null&&le.return()}finally{if(he)throw ve}}return ge}}function L(q){if(Array.isArray(q))return q}var R=`import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';
import cn from 'classnames';

import { StoryPage } from '@sb/StoryPage';

import { Pagination } from '../Pagination';

import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { SortDirection, TableCell } from './TableCell';
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

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
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
          <TableCell colSpan={4}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              rowsPerPageText='Rader per side'
              pageDescriptionText='av'
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
`,W={BasicTable:{startLoc:{col:47,line:122},endLoc:{col:1,line:240},startBody:{col:47,line:122},endBody:{col:1,line:240}},SelectRows:{startLoc:{col:47,line:122},endLoc:{col:1,line:240},startBody:{col:47,line:122},endBody:{col:1,line:240}}},K="";const V={title:"Components/Table",component:_e.i,parameters:{design:(0,Z.vc)([{type:"figma",url:K},{type:"link",url:K}]),docs:{page:function(){return(0,U.jsx)(ne.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function $(q,ee,le,ge,fe){return{applicationNr:q,product:ee,status:le,imageSrc:ge,imageAlt:fe}}var re=[$("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),$("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),$("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),$("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),$("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),$("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),$("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),$("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],ce=function(ee){var le=(0,z.useState)({}),ge=x(le,2),fe=ge[0],he=ge[1],Oe=(0,z.useState)({sortedColumn:"",sortDirection:se.Sr.NotActive}),ve=x(Oe,2),Ee=ve[0],De=ve[1],je=(0,z.useState)(5),Te=x(je,2),ie=Te[0],me=Te[1],Ce=(0,z.useState)(0),xe=x(Ce,2),Be=xe[0],Re=xe[1],We=function(Se){var Le=Se.selectedValue;he(Le)},Ke=function(Se){var Le=Se.sortedColumn,Ue=Se.previousSortDirection;Ue===se.Sr.Ascending?De({sortedColumn:Le,sortDirection:se.Sr.Descending}):Ue===se.Sr.Descending?De({sortedColumn:Le,sortDirection:se.Sr.Ascending}):De({sortedColumn:Le,sortDirection:se.Sr.Descending})},Ne=function(Se){me(parseInt(Se.target.value,10)),Re(0)},we=function(Se){Re(Se)};return(0,U.jsxs)(_e.i,{selectRows:ee.selectRows,onChange:We,selectedValue:fe,children:[(0,U.jsx)(de.x,{children:(0,U.jsxs)(te.S,{children:[(0,U.jsx)(se.pj,{onChange:Ke,sortKey:"S\xF8knadsnr.",sortDirecton:Ee.sortedColumn==="S\xF8knadsnr."?Ee.sortDirection:se.Sr.NotActive,children:"S\xF8knadsnr."}),(0,U.jsx)(se.pj,{sortKey:"Produkt",onChange:Ke,sortDirecton:Ee.sortedColumn==="Produkt"?Ee.sortDirection:se.Sr.NotActive,children:"Produkt"}),(0,U.jsx)(se.pj,{children:"Status"}),(0,U.jsx)(se.pj,{children:"Bilde"})]})}),(0,U.jsx)(F.R,{children:re.slice(Be*ie,Be*ie+ie).map(function(Me){return(0,U.jsxs)(te.S,{rowData:{applicationNr:Me.applicationNr},children:[(0,U.jsx)(se.pj,{children:Me.applicationNr}),(0,U.jsx)(se.pj,{children:Me.product}),(0,U.jsx)(se.pj,{children:Me.status}),(0,U.jsx)(se.pj,{children:(0,U.jsx)("img",{className:oe()(G().checkmark),src:Me.imageSrc,alt:Me.imageAlt})})]},Me.applicationNr)})}),(0,U.jsx)(Q.y,{children:(0,U.jsx)(te.S,{children:(0,U.jsx)(se.pj,{colSpan:4,children:(0,U.jsx)(J.t,{numberOfRows:re.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:ie,onRowsPerPageChange:Ne,currentPage:Be,setCurrentPage:we,rowsPerPageText:"Rader per side",pageDescriptionText:"av"})})})})]})};ce.displayName="Template";var ae=ce.bind({});ae.args={selectRows:!1},ae.parameters={docs:{description:{story:""}}};var ye=ce.bind({});ye.args={selectRows:!0},ye.parameters={docs:{description:{story:""}}},ae.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

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

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
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
          <TableCell colSpan={4}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              rowsPerPageText='Rader per side'
              pageDescriptionText='av'
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},ae.parameters),ye.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    sortedColumn: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

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

  return (
    <Table
      selectRows={args.selectRows}
      onChange={handleChange}
      selectedValue={selected}
    >
      <TableHeader>
        <TableRow>
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
          <TableCell colSpan={4}>
            <Pagination
              numberOfRows={rows.length}
              rowsPerPageOptions={[5, 10, 15, 20]}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              currentPage={page}
              setCurrentPage={handleChangeInCurrentPage}
              rowsPerPageText='Rader per side'
              pageDescriptionText='av'
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`}},ye.parameters);var be=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>v,__namedExportsOrder:()=>b,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/Tabs/Tabs.tsx"),y=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,T={Example:{startLoc:{col:46,line:120},endLoc:{col:74,line:120},startBody:{col:46,line:120},endBody:{col:74,line:120}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const O={title:"Components/Tabs",component:D.m,parameters:{design:(0,u.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,y.jsx)(C.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property optional and can be used to trigger some function the user switches to another tab. It is called with the tab name as a parameter."})}}},args:{items:[{name:"Ild",content:(0,y.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,y.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,y.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var f=function(h){return(0,y.jsx)(D.m,Object.assign({},h))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is how the component might look like."}}},v.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},v.parameters);var b=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>b,Disabled:()=>l,Error:()=>E,ReadOnlyConfirm:()=>m,ReadOnlyInfo:()=>h,__namedExportsOrder:()=>a,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/_InputWrapper/index.ts"),y=e("./src/components/TextArea/TextArea.tsx"),M=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,j={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const f={title:"Components/TextArea",component:y.K,parameters:{design:(0,u.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,M.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var v=function(p){return(0,M.jsx)(y.K,Object.assign({},p))};v.displayName="Template";var b=v.bind({});b.args={},b.parameters={docs:{description:{story:"Regular textarea."}}};var E=v.bind({});E.args={isValid:!1},E.parameters={docs:{description:{story:"Textarea displaying error."}}};var h=v.bind({});h.args={readOnly:!0,value:"Some text"},h.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var m=v.bind({});m.args={readOnly:D.Hx.ReadOnlyConfirm,value:"Some text"},m.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var l=v.bind({});l.args={disabled:!0,value:"Some text"},l.parameters={docs:{description:{story:"Textarea as disabled."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},l.parameters);var a=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>b,Disabled:()=>a,Error:()=>h,NumberInput:()=>E,ReadOnlyConfirm:()=>l,ReadOnlyInfo:()=>m,__namedExportsOrder:()=>i,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/storybook-addon-designs/esm/index.js"),C=e("./.storybook/StoryPage.tsx"),D=e("./src/components/_InputWrapper/index.ts"),y=e("./src/components/TextField/TextField.tsx"),M=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,j={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},O="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const f={title:"Components/TextField",component:y.n,parameters:{design:(0,u.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,M.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var v=function(g){return(0,M.jsx)(y.n,Object.assign({},g))};v.displayName="Template";var b=v.bind({});b.args={},b.parameters={docs:{description:{story:"Regular input field."}}};var E=v.bind({});E.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},E.parameters={docs:{description:{story:"Number input field."}}};var h=v.bind({});h.args={isValid:!1},h.parameters={docs:{description:{story:"Input field displaying error."}}};var m=v.bind({});m.args={readOnly:!0,value:"Some text"},m.parameters={docs:{description:{story:"Input field as readonly-info."}}};var l=v.bind({});l.args={readOnly:D.Hx.ReadOnlyConfirm,value:"Some text"},l.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var a=v.bind({});a.args={disabled:!0,value:"Some text"},a.parameters={docs:{description:{story:"Input field as disabled."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},b.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},E.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},h.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},m.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},a.parameters);var i=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(_,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>x,__namedExportsOrder:()=>A,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),P=e.n(c),I=e("./node_modules/react/index.js"),S=e("./node_modules/storybook-addon-designs/esm/index.js"),B=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),z=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),Z=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),X=e.n(Z),oe=e("./node_modules/react/jsx-runtime.js");function ne(k,N){return te(k)||se(k,N)||_e(k,N)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(k,N){if(!!k){if(typeof k=="string")return de(k,N);var w=Object.prototype.toString.call(k).slice(8,-1);if(w==="Object"&&k.constructor&&(w=k.constructor.name),w==="Map"||w==="Set")return Array.from(k);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return de(k,N)}}function de(k,N){(N==null||N>k.length)&&(N=k.length);for(var w=0,L=new Array(N);w<N;w++)L[w]=k[w];return L}function se(k,N){var w=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(w!=null){var L=[],R=!0,W=!1,K,V;try{for(w=w.call(k);!(R=(K=w.next()).done)&&(L.push(K.value),!(N&&L.length===N));R=!0);}catch($){W=!0,V=$}finally{try{!R&&w.return!=null&&w.return()}finally{if(W)throw V}}return L}}function te(k){if(Array.isArray(k))return k}var F=`import React, { useState } from 'react';
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
`,H={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},G="";const Q={title:"Components/Toggle button group",component:Y.t,parameters:{design:(0,S.vc)([{type:"figma",url:G},{type:"link",url:G}]),docs:{page:function(){return(0,oe.jsx)(B.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var U=function(){var N=(0,I.useState)("left"),w=ne(N,2),L=w[0],R=w[1],W=function(V){var $=V.selectedValue;R($)};return(0,oe.jsx)("div",{className:X().container,children:(0,oe.jsxs)(Y.t,{onChange:W,selectedValue:L,children:[(0,oe.jsx)(z.C,{value:"left",children:"Aktivt valg"}),(0,oe.jsx)(z.C,{value:"right",children:"Mulig valg"})]})})};U.displayName="Template";var x=U.bind({});x.args={},x.argTypes={onChange:{control:!1},selectedValue:{control:!1}},x.parameters={docs:{description:{}}},x.parameters=Object.assign({storySource:{source:`() => {
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
}`}},x.parameters);var A=["Example"]},"./src/DesignTokens/index.ts":(_,s,e)=>{"use strict";e.d(s,{T:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),D=e.n(C),y=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),M=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),T=1.6,j=/(\d*\.?\d+)rem(?=\W|$)/gim,O=function(m){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,a=Math.pow(10,l);return Math.round((m+Number.EPSILON)*a)/a},f=function(m){return typeof m=="string"?m.replace(j,function(l,a){var i=O(a*T);return i+"rem"}):m},v={get:function(m,l){if(l in m){var a=m[l];return typeof a=="object"?new Proxy(a,v):f(a)}}},b=new Proxy(y,v),E=new Proxy(M,v)},"./src/components/Accordion/Accordion.tsx":(_,s,e)=>{"use strict";e.d(s,{U:()=>u});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./src/components/Accordion/Accordion.module.css"),d=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),u=function(y){var M=y.children,T=y.open,j=y.onClick,O=y.iconVariant,f=O===void 0?o.Bt.Primary:O,v=(0,t.useId)(),b=(0,t.useId)();return(0,r.jsx)("div",{className:d().accordion,children:(0,r.jsx)(o.SY.Provider,{value:{onClick:j,open:T,headerId:v,contentId:b,iconVariant:f},children:M})})};u.displayName="Accordion";var C=null;try{u.displayName="Accordion",u.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:u.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(D){}},"./src/components/Accordion/AccordionContent.tsx":(_,s,e)=>{"use strict";e.d(s,{v:()=>d});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./node_modules/react/jsx-runtime.js"),d=function(C){var D=C.children,y=(0,o.EF)(),M=y.open,T=y.contentId,j=y.headerId;return(0,n.jsx)("div",{children:M&&(0,n.jsx)("div",{"aria-expanded":M,id:T,"aria-labelledby":j,children:D})})};d.displayName="AccordionContent";var r=null;try{d.displayName="AccordionContent",d.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:d.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(u){}},"./src/components/Accordion/AccordionHeader.tsx":(_,s,e)=>{"use strict";e.d(s,{_:()=>y});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Accordion/AccordionHeader.module.css"),r=e.n(d),u=e("./src/components/Accordion/Context.ts"),C=e("./src/components/Accordion/AccordionIcon.tsx"),D=e("./node_modules/react/jsx-runtime.js"),y=function(T){var j,O=T.children,f=T.actions,v=T.subtitle,b=(0,u.EF)(),E=b.onClick,h=b.open,m=b.headerId,l=b.contentId;return(0,D.jsxs)("div",{className:n()(r()["accordion-header"],(j={},j[r()["accordion-header--subtitle"]]=v,j)),children:[(0,D.jsx)(C.X,{}),(0,D.jsxs)("button",{className:n()(r()["accordion-header__title"]),"aria-expanded":h,type:"button",onClick:E,id:m,"aria-controls":l,children:[O,(v==null?void 0:v.length)&&(0,D.jsx)("div",{"data-testid":"accordion-header-subtitle",className:n()(r()["accordion-header__subtitle"]),children:v})]}),(0,D.jsx)("div",{className:n()(r()["accordion-header__actions"]),children:f})]})};y.displayName="AccordionHeader";try{y.displayName="AccordionHeader",y.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:y.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(M){}},"./src/components/Accordion/AccordionIcon.tsx":(_,s,e)=>{"use strict";e.d(s,{X:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),d=e.n(n),r=e("./src/components/Accordion/AccordionIcon.module.css"),u=e.n(r),C=e("./src/components/Accordion/Context.ts"),D;function y(){return y=Object.assign?Object.assign.bind():function(E){for(var h=1;h<arguments.length;h++){var m=arguments[h];for(var l in m)Object.prototype.hasOwnProperty.call(m,l)&&(E[l]=m[l])}return E},y.apply(this,arguments)}var M=function(h){return o.createElement("svg",y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),D||(D=o.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},T;function j(){return j=Object.assign?Object.assign.bind():function(E){for(var h=1;h<arguments.length;h++){var m=arguments[h];for(var l in m)Object.prototype.hasOwnProperty.call(m,l)&&(E[l]=m[l])}return E},j.apply(this,arguments)}var O=function(h){return o.createElement("svg",j({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h),T||(T=o.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},f=e("./node_modules/react/jsx-runtime.js"),v=function(){var h,m,l=(0,C.EF)(),a=l.onClick,i=l.open,p=l.iconVariant,g=[u()["accordion-icon"],(h={},h[u()["accordion-icon--opened"]]=i,h)],c=(m={height:20,width:20,className:d()(g)},m["data-testid"]=p,m.onClick=a,m);switch(p){case C.Bt.Primary:return(0,f.jsx)(M,Object.assign({},c));case C.Bt.Secondary:return(0,f.jsx)(O,Object.assign({},c))}};const b=null},"./src/components/Accordion/Context.ts":(_,s,e)=>{"use strict";e.d(s,{Bt:()=>o,EF:()=>d,SY:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Secondary="secondary"})(o||(o={}));var n=(0,t.createContext)(void 0),d=function(){var u=(0,t.useContext)(n);if(u===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return u}},"./src/components/AppWrapper/AppWrapper.tsx":(_,s,e)=>{"use strict";e.d(s,{O:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),n=e.n(o),d=e("./src/components/AppWrapper/AppWrapper.module.css"),r=e.n(d),u=e("./node_modules/react/jsx-runtime.js"),C=function(y){var M=y.children;return(0,u.jsx)("div",{children:M})};C.displayName="AppWrapper";try{C.displayName="AppWrapper",C.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:C.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(D){}},"./src/components/Button/index.ts":(_,s,e)=>{"use strict";e.d(s,{zx:()=>m,rp:()=>b,qE:()=>v,Wu:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),C=e.n(u),D=e("./src/components/SvgIcon/index.ts"),y=e("./src/components/Button/Button.module.css"),M=e.n(y),T=e("./node_modules/react/jsx-runtime.js"),j=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function O(l,a){if(l==null)return{};var i=f(l,a),p,g;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(g=0;g<c.length;g++)p=c[g],!(a.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,p)||(i[p]=l[p]))}return i}function f(l,a){if(l==null)return{};var i={},p=Object.keys(l),g,c;for(c=0;c<p.length;c++)g=p[c],!(a.indexOf(g)>=0)&&(i[g]=l[g]);return i}var v;(function(l){l.Small="small",l.Medium="medium",l.Large="large"})(v||(v={}));var b;(function(l){l.Primary="primary",l.Secondary="secondary",l.Success="success",l.Danger="danger",l.Inverted="inverted"})(b||(b={}));var E;(function(l){l.Filled="filled",l.Outline="outline",l.Quiet="quiet"})(E||(E={}));var h=function(a,i){var p,g,c,P=a.children,I=a.color,S=I===void 0?b.Primary:I,B=a.variant,Y=B===void 0?E.Filled:B,z=a.size,Z=z===void 0?v.Small:z,X=a.fullWidth,oe=X===void 0?!1:X,ne=a.dashedBorder,J=ne===void 0?!1:ne,_e=a.iconPlacement,de=_e===void 0?"left":_e,se=a.icon,te=a.type,F=te===void 0?"button":te,H=a.className,G=O(a,j);return(0,T.jsxs)("button",Object.assign({},G,{ref:i,className:C()(M().button,M()["button--"+Z],M()["button--"+Y],M()["button--"+S],M()["button--"+Y+"--"+S],(p={},p[M()["button--full-width"]]=oe,p),(g={},g[M()["button--dashed-border"]]=J,g),(c={},c[M()["button--only-icon"]]=!P&&se,c),H),type:F,children:[se&&de==="left"&&(0,T.jsx)(D.l,{svgIconComponent:se,className:M().icon}),P,se&&de==="right"&&(0,T.jsx)(D.l,{svgIconComponent:se,className:M().icon})]}))};h.displayName="Button";const m=(0,r.forwardRef)(h)},"./src/components/Checkbox/Checkbox.tsx":(_,s,e)=>{"use strict";e.d(s,{X:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(r),C=e("./node_modules/react/index.js"),D=e("./node_modules/classnames/index.js"),y=e.n(D),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),T=e("./src/components/Checkbox/Checkbox.module.css"),j=e.n(T),O=e("./node_modules/react/jsx-runtime.js"),f=function(b){var E=b.checkboxId,h=b.checked,m=b.compact,l=b.description,a=b.disabled,i=b.error,p=b.hideLabel,g=b.label,c=b.name,P=b.onChange,I=b.readOnly;return(0,O.jsx)(M.f,{checked:h,className:y()(j().checkbox,h&&j()["checkbox--checked"],i&&j()["checkbox--error"],a&&j()["checkbox--disabled"],m&&j()["checkbox--compact"],I&&j()["checkbox--read-only"]),description:l,disabled:a,hideInput:I,hideLabel:p,inputId:E,label:g,name:c,onChange:P,size:m?M.b.Xsmall:M.b.Small,type:"checkbox",children:(0,O.jsx)("span",{className:j()["visible-box"],children:(0,O.jsx)("span",{className:j()["visible-box__checkmark"]})})})};f.displayName="Checkbox";try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:f.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(v){}},"./src/components/CheckboxGroup/CheckboxGroup.tsx":(_,s,e)=>{"use strict";e.d(s,{T:()=>N,c:()=>R});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),P=e.n(c),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),S=e.n(I),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),Y=e.n(B),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),Z=e.n(z),X=e("./node_modules/react/index.js"),oe=e("./node_modules/classnames/index.js"),ne=e.n(oe),J=e("./src/components/index.ts"),_e=e("./src/components/FieldSet/FieldSet.tsx"),de=e("./src/utils/arrayUtils.ts"),se=e("./src/hooks/index.ts"),te=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),F=e.n(te),H=e("./node_modules/react/jsx-runtime.js");function G(W,K){return k(W)||A(W,K)||U(W,K)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(W,K){if(!!W){if(typeof W=="string")return x(W,K);var V=Object.prototype.toString.call(W).slice(8,-1);if(V==="Object"&&W.constructor&&(V=W.constructor.name),V==="Map"||V==="Set")return Array.from(W);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return x(W,K)}}function x(W,K){(K==null||K>W.length)&&(K=W.length);for(var V=0,$=new Array(K);V<K;V++)$[V]=W[V];return $}function A(W,K){var V=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(V!=null){var $=[],re=!0,ce=!1,ae,ye;try{for(V=V.call(W);!(re=(ae=V.next()).done)&&($.push(ae.value),!(K&&$.length===K));re=!0);}catch(be){ce=!0,ye=be}finally{try{!re&&V.return!=null&&V.return()}finally{if(ce)throw ye}}return $}}function k(W){if(Array.isArray(W))return W}var N;(function(W){W.Vertical="vertical",W.Horizontal="horizontal"})(N||(N={}));var w=function(K,V){switch(V.type){case"check":return K.concat([V.name]);case"uncheck":return K.filter(function($){return $!==V.name});case"reset":return V.state}},L=function(K){return K.filter(function(V){var $=V.checked;return $}).map(function(V){var $=V.name;return $})},R=function(K){var V=K.compact,$=K.description,re=K.disabled,ce=K.error,ae=K.items,ye=K.legend,be=K.onChange,q=K.variant,ee=q===void 0?N.Vertical:q;if(!(0,de.zb)(ae.map(function(ve){return ve.name})))throw Error("Each name in the checkbox group must be unique.");var le=(0,X.useReducer)(w,L(ae)),ge=G(le,2),fe=ge[0],he=ge[1];(0,X.useEffect)(function(){return he({type:"reset",state:L(ae)})},[ae]);var Oe=(0,se.D9)(fe);return(0,se.PQ)(function(){be&&!re&&!(0,de.cO)(Oe,fe)&&be(fe)},[fe,be,re]),(0,H.jsx)(J.C3,{description:$,disabled:re,error:ce,legend:ye,size:V?_e.w.Xsmall:_e.w.Small,children:(0,H.jsx)("div",{className:ne()(F()["checkbox-group"],F()["checkbox-group--"+ee],V&&F()["checkbox-group--compact"]),children:ae.map(function(ve){return(0,H.jsx)(J.XZ,{checkboxId:ve.checkboxId,checked:fe.includes(ve.name),compact:V,description:ve.description,disabled:re||ve.disabled,error:!!ce,label:ve.label,name:ve.name,onChange:function(De){he({type:De.target.checked?"check":"uncheck",name:ve.name})}},ve.name)})})})};R.displayName="CheckboxGroup";try{R.displayName="CheckboxGroup",R.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:R.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(W){}},"./src/components/CircularProgress/CircularProgress.tsx":(_,s,e)=>{"use strict";e.d(s,{D:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/react/index.js"),d=e("./src/DesignTokens/index.ts"),r=e("./src/components/CircularProgress/CircularProgress.module.css"),u=e.n(r),C=e("./node_modules/react/jsx-runtime.js"),D=function(T){var j=T.value,O=T.width,f=O===void 0?70:O,v=T.strokeWidth,b=v===void 0?2.5:v,E=T.ariaLabel,h=T.label,m=T.id,l=m+"-label",a=!E&&h?l:void 0;return(0,C.jsxs)("div",{id:m,className:u().container,style:{width:f+"px"},role:"progressbar","aria-labelledby":a,"aria-label":E,children:[h&&(0,C.jsx)("div",{id:l,className:u().label,children:h}),(0,C.jsxs)("svg",{className:u().svg,viewBox:"0 0 35.8 35.8",children:[(0,C.jsx)(y,{stroke:d.T.ColorsBlue200,strokeWidth:b}),(0,C.jsx)(y,{strokeWidth:b,stroke:d.T.ColorsBlue900,strokeDashoffset:100-j,strokeDasharray:"100 100",className:u().circleTransition})]})]})};D.displayName="CircularProgress";var y=function(T){return(0,C.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},T))};y.displayName="Circle";try{D.displayName="CircularProgress",D.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:D.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(M){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(_,s,e)=>{"use strict";e.d(s,{B:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ErrorMessage/ErrorMessage.module.css"),r=e.n(d),u=e("./node_modules/react/jsx-runtime.js"),C=function(y){var M=y.id,T=y.children,j=y.ariaLabel;return(0,u.jsx)("div",{"data-testid":"ErrorMessage","aria-label":j,id:M,role:"alertdialog",className:n()(r()["error-message-wrapper"]),children:T})};C.displayName="ErrorMessage";try{C.displayName="ErrorMessage",C.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:C.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(D){}},"./src/components/FieldSet/FieldSet.tsx":(_,s,e)=>{"use strict";e.d(s,{C:()=>O,w:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),C=e.n(u),D=e("./src/components/index.ts"),y=e("./src/components/FieldSet/FieldSet.module.css"),M=e.n(y),T=e("./node_modules/react/jsx-runtime.js"),j;(function(f){f.Xsmall="xsmall",f.Small="small"})(j||(j={}));var O=function(v){var b=v.children,E=v.className,h=v.description,m=v.disabled,l=v.error,a=v.legend,i=v.size,p=i===void 0?j.Small:i;return(0,T.jsxs)("fieldset",{className:C()(M()["field-set"],M()["field-set--"+p],E),disabled:m,children:[a&&(0,T.jsx)("legend",{className:M()["field-set__legend"],children:a}),h&&(0,T.jsx)("p",{className:M()["field-set__description"],children:h}),(0,T.jsx)("div",{className:M()["field-set__content"],children:b}),l&&(0,T.jsx)("div",{className:M()["field-set__error-message"],children:(0,T.jsx)(D.Bc,{children:l})})]})};O.displayName="FieldSet";try{O.displayName="FieldSet",O.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:O.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(f){}},"./src/components/List/Context.ts":(_,s,e)=>{"use strict";e.d(s,{N4:()=>o,UU:()=>d,ZM:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Solid="solid",r.Dashed="dashed"})(o||(o={}));var n=(0,t.createContext)({borderStyle:o.Solid}),d=function(){var u=(0,t.useContext)(n);if(u===void 0)throw new Error("useListContext must be used within a ListContext");return u}},"./src/components/List/List.tsx":(_,s,e)=>{"use strict";e.d(s,{a:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/List/List.module.css"),r=e.n(d),u=e("./src/components/List/Context.ts"),C=e("./node_modules/react/jsx-runtime.js"),D=function(M){var T=M.children,j=M.borderStyle,O=j===void 0?u.N4.Solid:j;return(0,C.jsx)("ul",{className:n()(r().list,r()["list--"+O]),children:(0,C.jsx)(u.ZM.Provider,{value:{borderStyle:O},children:T})})};D.displayName="List";try{D.displayName="List",D.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:D.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(y){}},"./src/components/List/ListItem.tsx":(_,s,e)=>{"use strict";e.d(s,{H:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/List/ListItem.module.css"),r=e.n(d),u=e("./src/components/List/Context.ts"),C=e("./node_modules/react/jsx-runtime.js"),D=function(M){var T=M.children,j=(0,u.UU)(),O=j.borderStyle;return(0,C.jsx)("li",{className:n()(r()["list-item"],r()["list-item--"+O]),children:T})};D.displayName="ListItem";try{D.displayName="ListItem",D.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:D.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(y){}},"./src/components/Map/Map.tsx":(_,s,e)=>{"use strict";e.d(s,{D:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/react-leaflet/lib/MapContainer.js"),d=e("./node_modules/react-leaflet/lib/TileLayer.js"),r=e("./node_modules/react-leaflet/lib/AttributionControl.js"),u=e("./node_modules/react-leaflet/lib/Marker.js"),C=e("./node_modules/react-leaflet/lib/hooks.js"),D=e("./node_modules/react/index.js"),y=e("./src/components/Map/Map.module.css"),M=e.n(y),T=e("./node_modules/leaflet/dist/leaflet.css"),j=e.n(T),O=e("./node_modules/react/jsx-runtime.js"),f={latitude:64.888996,longitude:12.8186054},v=4,b=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],E=function(i){var p=i.readOnly,g=p===void 0?!1:p,c=i.layers,P=c===void 0?b:c,I=i.centerLocation,S=I===void 0?f:I,B=i.zoom,Y=B===void 0?v:B,z=i.markerLocation,Z=i.onClick;return(0,O.jsxs)(n.h,{className:M().map,center:m(S),zoom:Y,zoomControl:!g,dragging:!g,touchZoom:!g,doubleClickZoom:!g,scrollWheelZoom:!g,attributionControl:!1,children:[P.map(function(X,oe){return(0,O.jsx)(d.I,{url:X.url,attribution:X.attribution,subdomains:X.subdomains?X.subdomains:[],opacity:g?.5:1},oe)}),(0,O.jsx)(r.z,{prefix:!1}),(0,O.jsx)(h,{markerLocation:z}),(0,O.jsx)(l,{readOnly:g,onClick:Z})]})};E.displayName="Map";function h(a){var i=a.markerLocation;return i?(0,O.jsx)(u.J,{position:m(i)}):null}function m(a){return[a.latitude,a.longitude]}var l=function(i){var p=i.onClick,g=i.readOnly;return(0,C.zV)({click:function(P){p&&!g&&p({latitude:P.latlng.lat,longitude:P.latlng.lng})}}),null};try{E.displayName="Map",E.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:E.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(a){}},"./src/components/Page/Context.ts":(_,s,e)=>{"use strict";e.d(s,{gL:()=>o,lO:()=>d,z1:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Success="success"})(o||(o={}));var n=(0,t.createContext)({color:o.Primary}),d=function(){var u=(0,t.useContext)(n);if(u===void 0)throw new Error("usePageContext must be used within a PageContext");return u}},"./src/components/Page/Page.tsx":(_,s,e)=>{"use strict";e.d(s,{T:()=>u});var t=e("./node_modules/react/index.js"),o=e("./src/components/Page/Context.ts"),n=e("./src/components/Page/Page.module.css"),d=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),u=function(D){var y=D.children,M=D.color,T=M===void 0?o.gL.Primary:M;return(0,r.jsx)("div",{className:d().page,children:(0,r.jsx)(o.z1.Provider,{value:{color:T},children:y})})};u.displayName="Page";try{u.displayName="Page",u.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:u.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(C){}},"./src/components/Page/PageContent.tsx":(_,s,e)=>{"use strict";e.d(s,{J:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Page/PageContent.module.css"),r=e.n(d),u=e("./node_modules/react/jsx-runtime.js"),C=function(y){var M=y.children;return(0,u.jsx)("div",{className:n()(r()["page-content"]),children:M})};C.displayName="PageContent";try{C.displayName="PageContent",C.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:C.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(D){}},"./src/components/Page/PageHeader.tsx":(_,s,e)=>{"use strict";e.d(s,{m:()=>j});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Page/Context.ts"),r=e("./src/components/Page/PageHeader.module.css"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e("./src/components/Page/PageIcon.module.css"),y=e.n(D),M=e("./node_modules/react/jsx-runtime.js"),T=function(f){var v=f.icon,b={className:n()(y()["page-icon__element"])};return(0,M.jsx)("div",{className:y()["page-icon"],children:(0,t.cloneElement)(v,Object.assign({},b))})};T.displayName="PageIcon";try{T.displayName="PageIcon",T.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:T.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(O){}var j=function(f){var v=f.children,b=f.icon,E=(0,d.lO)(),h=E.color;return(0,M.jsxs)("header",{className:n()(u()["page-header"],u()["page-header--"+h]),"data-testid":"page-header",children:[b&&(0,M.jsx)(T,{icon:b}),(0,M.jsx)("span",{children:v})]})};j.displayName="PageHeader";try{j.displayName="PageHeader",j.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:j.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(O){}},"./src/components/Pagination/Pagination.tsx":(_,s,e)=>{"use strict";e.d(s,{t:()=>te});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),v=e.n(f),b=e("./src/components/Pagination/Pagination.module.css"),E=e.n(b),h,m;function l(){return l=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},l.apply(this,arguments)}var a=function(H){return O.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),h||(h=O.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),m||(m=O.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},i,p;function g(){return g=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},g.apply(this,arguments)}var c=function(H){return O.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),i||(i=O.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),p||(p=O.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},P;function I(){return I=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},I.apply(this,arguments)}var S=function(H){return O.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),P||(P=O.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},B,Y;function z(){return z=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},z.apply(this,arguments)}var Z=function(H){return O.createElement("svg",z({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),B||(B=O.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),Y||(Y=O.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},X=e("./node_modules/react/jsx-runtime.js");function oe(F,H){return se(F)||de(F,H)||J(F,H)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(F,H){if(!!F){if(typeof F=="string")return _e(F,H);var G=Object.prototype.toString.call(F).slice(8,-1);if(G==="Object"&&F.constructor&&(G=F.constructor.name),G==="Map"||G==="Set")return Array.from(F);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return _e(F,H)}}function _e(F,H){(H==null||H>F.length)&&(H=F.length);for(var G=0,Q=new Array(H);G<H;G++)Q[G]=F[G];return Q}function de(F,H){var G=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(G!=null){var Q=[],U=!0,x=!1,A,k;try{for(G=G.call(F);!(U=(A=G.next()).done)&&(Q.push(A.value),!(H&&Q.length===H));U=!0);}catch(N){x=!0,k=N}finally{try{!U&&G.return!=null&&G.return()}finally{if(x)throw k}}return Q}}function se(F){if(Array.isArray(F))return F}var te=function(H){var G,Q,U,x,A=H.numberOfRows,k=H.rowsPerPageOptions,N=H.rowsPerPage,w=H.onRowsPerPageChange,L=H.currentPage,R=H.setCurrentPage,W=H.rowsPerPageText,K=H.pageDescriptionText,V=(0,O.useState)(1),$=oe(V,2),re=$[0],ce=$[1];(0,O.useEffect)(function(){A<N?ce(1):ce(Math.ceil(A/N))},[N,A]);var ae=function(){L<re-1&&R(L+1)},ye=function(){L>0&&R(L-1)},be=function(){var ee=1+L*N,le=N*(L+1)>A?A:N*(L+1);return(0,X.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ee+"-"+le+" "+K+" "+A})};return(0,X.jsxs)("div",{className:v()(E()["pagination-wrapper"]),children:[(0,X.jsx)("span",{style:{marginRight:"26px"},children:W}),(0,X.jsx)("select",{style:{marginRight:"25px"},value:N,onChange:function(ee){return w(ee)},children:k.map(function(q){return(0,X.jsx)("option",{value:q,children:q},q)})}),be(),(0,X.jsx)(S,{tabIndex:L!==0?0:void 0,className:v()(E()["pagination-icon"],(G={},G[E()["pagination-icon--disabled"]]=L===0,G)),onClick:function(){return R(0)},onKeyUp:function(ee){(ee.key==="Enter"||ee.key===" ")&&R(0)},"data-testid":"first-page-icon"}),(0,X.jsx)(c,{tabIndex:L!==0?0:void 0,className:v()(E()["pagination-icon"],(Q={},Q[E()["pagination-icon--disabled"]]=L===0,Q)),onClick:function(){return ye()},onKeyUp:function(ee){(ee.key==="Enter"||ee.key===" ")&&ye()}}),(0,X.jsx)(a,{tabIndex:L!==re-1?0:void 0,className:v()(E()["pagination-icon"],(U={},U[E()["pagination-icon--disabled"]]=L===re-1,U)),onClick:function(){return ae()},onKeyUp:function(ee){(ee.key==="Enter"||ee.key===" ")&&ae()}}),(0,X.jsx)(Z,{tabIndex:L!==re-1?0:void 0,className:v()(E()["pagination-icon"],(x={},x[E()["pagination-icon--disabled"]]=L===re-1,x)),onClick:function(){return R(re-1)},onKeyUp:function(ee){(ee.key==="Enter"||ee.key===" ")&&R(re-1)}})]})};te.displayName="Pagination";try{te.displayName="Pagination",te.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},rowsPerPageText:{defaultValue:null,description:"",name:"rowsPerPageText",required:!0,type:{name:"string"}},pageDescriptionText:{defaultValue:null,description:"",name:"pageDescriptionText",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:te.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(F){}},"./src/components/Pagination/index.ts":(_,s,e)=>{"use strict";e.d(s,{t:()=>t.t});var t=e("./src/components/Pagination/Pagination.tsx")},"./src/components/Panel/Panel.tsx":(_,s,e)=>{"use strict";e.d(s,{s:()=>p,c:()=>m});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),r=e("./src/DesignTokens/index.ts"),u,C,D;function y(){return y=Object.assign?Object.assign.bind():function(g){for(var c=1;c<arguments.length;c++){var P=arguments[c];for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(g[I]=P[I])}return g},y.apply(this,arguments)}var M=function(c){return t.createElement("svg",y({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},c),u||(u=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),C||(C=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),D||(D=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},T,j,O;function f(){return f=Object.assign?Object.assign.bind():function(g){for(var c=1;c<arguments.length;c++){var P=arguments[c];for(var I in P)Object.prototype.hasOwnProperty.call(P,I)&&(g[I]=P[I])}return g},f.apply(this,arguments)}var v=function(c){return t.createElement("svg",f({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},c),T||(T=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),O||(O=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},b=e("./src/components/Panel/Panel.module.css"),E=e.n(b),h=e("./node_modules/react/jsx-runtime.js"),m;(function(g){g.Success="success",g.Info="info",g.Warning="warning",g.Error="error"})(m||(m={}));var l=function(c){var P=c.size,I=c.variant;switch(I){case m.Info:case m.Error:case m.Warning:return(0,h.jsx)(M,{style:{width:P,height:P},"data-testid":"panel-icon-info"});case m.Success:return(0,h.jsx)(v,{style:{width:P,height:P},"data-testid":"panel-icon-success"})}},a=function(c){var P=c.forceMobileLayout,I=(0,d.a)("(max-width: "+r.T.BreakpointsSm+")");return P?!0:I},i=function(c){var P=c.children;return(0,h.jsx)("div",{className:n()(E()["panel__pointer-position"]),children:P})};i.displayName="defaultRenderArrow";var p=function(c){var P,I=c.renderIcon,S=I===void 0?l:I,B=c.title,Y=c.children,z=c.variant,Z=z===void 0?m.Info:z,X=c.showPointer,oe=X===void 0?!1:X,ne=c.showIcon,J=ne===void 0?!0:ne,_e=c.forceMobileLayout,de=_e===void 0?!1:_e,se=c.renderArrow,te=se===void 0?i:se,F=a({forceMobileLayout:de}),H=F?r.T.ComponentPanelSizeIconXs:r.T.ComponentPanelSizeIconMd;return(0,h.jsxs)("div",{className:n()(E().panel,(P={},P[E()["panel--mobile-layout"]]=F,P)),children:[oe&&te({children:(0,h.jsx)("div",{"data-testid":"panel-pointer",className:n()(E().panel__pointer,E()["panel__pointer--"+Z])})}),(0,h.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(E()["panel__content-wrapper"],E()["panel__content-wrapper--"+Z]),children:[J&&(0,h.jsx)("div",{"data-testid":"panel-icon-wrapper",className:E()["panel__icon-wrapper"],children:S({size:H,variant:Z})}),(0,h.jsxs)("div",{className:E().panel__content,children:[B&&(0,h.jsx)("h2",{className:E().panel__header,children:B}),(0,h.jsx)("div",{className:E().panel__body,children:Y})]})]})]})};p.displayName="Panel";try{p.displayName="Panel",p.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:p.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(g){}},"./src/components/Panel/PopoverPanel.tsx":(_,s,e)=>{"use strict";e.d(s,{H:()=>M});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),n=e("./node_modules/classnames/index.js"),d=e.n(n),r=e("./src/components/Panel/Panel.tsx"),u=e("./src/components/Panel/PopoverPanel.module.css"),C=e.n(u),D=e("./node_modules/react/jsx-runtime.js"),y=function(O){var f=O.children;return(0,D.jsx)(o.Eh,{className:d()(C()["popover-panel__arrow"]),asChild:!0,children:f})};y.displayName="renderArrow";var M=function(O){var f=O.children,v=O.variant,b=v===void 0?r.c.Warning:v,E=O.trigger,h=O.side,m=h===void 0?"top":h,l=O.title,a=O.showIcon,i=O.forceMobileLayout,p=O.showPointer,g=p===void 0?!0:p,c=O.onOpenChange,P=O.open,I=P===void 0?!1:P;return(0,D.jsxs)(o.fC,{open:I,onOpenChange:c,children:[(0,D.jsx)(o.xz,{asChild:!0,role:"button",children:E}),(0,D.jsx)(o.VY,{side:m,className:C()["popover-panel"],children:(0,D.jsx)(r.s,{title:l,showIcon:a,forceMobileLayout:i,showPointer:g,variant:b,renderArrow:y,children:f})})]})};M.displayName="PopoverPanel";var T=null;try{M.displayName="PopoverPanel",M.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:M.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(j){}},"./src/components/RadioButton/RadioButton.tsx":(_,s,e)=>{"use strict";e.d(s,{E:()=>v,j:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(r),C=e("./node_modules/react/index.js"),D=e("./node_modules/classnames/index.js"),y=e.n(D),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),T=e("./src/components/RadioButton/RadioButton.module.css"),j=e.n(T),O=e("./node_modules/react/jsx-runtime.js"),f;(function(b){b.Xsmall="xsmall",b.Small="small"})(f||(f={}));var v=function(E){var h=E.checked,m=E.description,l=E.disabled,a=E.error,i=E.hideLabel,p=E.label,g=E.name,c=E.onChange,P=E.radioId,I=E.size,S=I===void 0?f.Small:I,B=E.value;return(0,O.jsx)(M.f,{checked:h,className:y()(j().radio,j()["radio--"+S],h&&j()["radio--checked"],a&&j()["radio--error"],l&&j()["radio--disabled"]),description:m,disabled:l,hideLabel:i,inputId:P,label:p,name:g,onChange:c,size:S===f.Xsmall?M.b.Xsmall:M.b.Small,type:"radio",value:B,children:(0,O.jsx)("span",{className:j()["visible-button"],children:(0,O.jsx)("span",{className:j()["visible-button__checkmark"]})})})};v.displayName="RadioButton";try{v.displayName="RadioButton",v.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:v.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(b){}},"./src/components/RadioGroup/RadioGroup.tsx":(_,s,e)=>{"use strict";e.d(s,{DX:()=>Q,Ee:()=>U,YN:()=>G});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),P=e.n(c),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),S=e.n(I),B=e("./node_modules/react/index.js"),Y=e("./src/components/RadioButton/RadioButton.tsx"),z=e("./src/components/index.ts"),Z=e("./src/hooks/index.ts"),X=e("./src/utils/arrayUtils.ts"),oe=e("./src/components/RadioGroup/RadioGroup.module.css"),ne=e.n(oe),J=e("./node_modules/react/jsx-runtime.js");function _e(x,A){return H(x)||F(x,A)||se(x,A)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(x,A){if(!!x){if(typeof x=="string")return te(x,A);var k=Object.prototype.toString.call(x).slice(8,-1);if(k==="Object"&&x.constructor&&(k=x.constructor.name),k==="Map"||k==="Set")return Array.from(x);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return te(x,A)}}function te(x,A){(A==null||A>x.length)&&(A=x.length);for(var k=0,N=new Array(A);k<A;k++)N[k]=x[k];return N}function F(x,A){var k=x==null?null:typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"];if(k!=null){var N=[],w=!0,L=!1,R,W;try{for(k=k.call(x);!(w=(R=k.next()).done)&&(N.push(R.value),!(A&&N.length===A));w=!0);}catch(K){L=!0,W=K}finally{try{!w&&k.return!=null&&k.return()}finally{if(L)throw W}}return N}}function H(x){if(Array.isArray(x))return x}var G;(function(x){x.Xsmall="xsmall",x.Small="small"})(G||(G={}));var Q;(function(x){x.Vertical="vertical",x.Horizontal="horizontal"})(Q||(Q={}));var U=function(A){var k=A.description,N=A.disabled,w=A.error,L=A.items,R=A.legend,W=A.name,K=A.onChange,V=A.size,$=V===void 0?G.Small:V,re=A.value,ce=A.variant,ae=ce===void 0?Q.Vertical:ce;if(!(0,X.zb)(L.map(function(Ee){return Ee.value})))throw Error("Each value in the radio group must be unique.");var ye=(0,B.useState)(re),be=_e(ye,2),q=be[0],ee=be[1];(0,B.useEffect)(function(){ee(re)},[re]);var le=(0,Z.D9)(q);(0,Z.PQ)(function(){K&&!N&&le!==q&&K(q)},[q,N,K]);var ge=function(De){return function(je){return je.target.checked&&ee(De)}},fe=$===G.Xsmall?[z.wO.Xsmall,Y.j.Xsmall]:[z.wO.Small,Y.j.Small],he=_e(fe,2),Oe=he[0],ve=he[1];return(0,J.jsx)(z.C3,{description:k,disabled:N,error:w,legend:R,size:Oe,children:(0,J.jsx)("div",{className:[ne()["radio-group"],ne()["radio-group--"+ae],ne()["radio-group--"+$]].join(" "),role:"radiogroup",children:L.map(function(Ee){return(0,B.createElement)(Y.E,Object.assign({},Ee,{checked:Ee.value===q,disabled:N||Ee.disabled,error:!!w,key:Ee.value,name:W,onChange:ge(Ee.value),size:ve}))})})})};U.displayName="RadioGroup";try{U.displayName="RadioGroup",U.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:U.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(x){}},"./src/components/SearchField/SearchField.tsx":(_,s,e)=>{"use strict";e.d(s,{U:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/_InputWrapper/index.ts"),O=e("./node_modules/react/jsx-runtime.js"),f=["id","onChange","disabled","label"];function v(h,m){if(h==null)return{};var l=b(h,m),a,i;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(h);for(i=0;i<p.length;i++)a=p[i],!(m.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,a)||(l[a]=h[a]))}return l}function b(h,m){if(h==null)return{};var l={},a=Object.keys(h),i,p;for(p=0;p<a.length;p++)i=a[p],!(m.indexOf(i)>=0)&&(l[i]=h[i]);return l}var E=function(m){var l=m.id,a=m.onChange,i=m.disabled,p=i===void 0?!1:i,g=m.label,c=v(m,f);return(0,O.jsx)(j.SP,{disabled:p,isSearch:!0,label:g,inputRenderer:function(I){var S=I.className,B=I.variant,Y={id:l,disabled:p,className:T()(S)};return(0,O.jsx)("input",Object.assign({},Y,c,{"data-testid":l+"-"+B,onChange:a}))}})};E.displayName="SearchField";try{E.displayName="SearchField",E.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:E.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(h){}},"./src/components/Select/Select.tsx":(_,s,e)=>{"use strict";e.d(s,{P:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),p=e.n(i),g=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),c=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/Select/MultiSelectItem.module.css"),I=e.n(P),S=e("./node_modules/react/jsx-runtime.js"),B=function(x){var A=x.deleteButtonLabel,k=x.disabled,N=x.onDeleteButtonClick,w=x.value;return(0,S.jsxs)("span",{className:I()["multi-select-item"],children:[(0,S.jsx)("span",{children:w}),(0,S.jsx)("button",{"aria-label":A,className:I()["multi-select-item__delete-button"],disabled:k,onClick:N,children:(0,S.jsx)("span",{className:I()["multi-select-item__delete-button__cross"]})})]})};B.displayName="MultiSelectItem";try{B.displayName="MultiSelectItem",B.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:B.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(U){}var Y=e("./src/hooks/index.ts"),z=e("./src/components/Select/Select.module.css"),Z=e.n(z);function X(U){return J(U)||ne(U)||se(U)||oe()}function oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(U){if(typeof Symbol!="undefined"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function J(U){if(Array.isArray(U))return te(U)}function _e(U,x){return H(U)||F(U,x)||se(U,x)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(U,x){if(!!U){if(typeof U=="string")return te(U,x);var A=Object.prototype.toString.call(U).slice(8,-1);if(A==="Object"&&U.constructor&&(A=U.constructor.name),A==="Map"||A==="Set")return Array.from(U);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return te(U,x)}}function te(U,x){(x==null||x>U.length)&&(x=U.length);for(var A=0,k=new Array(x);A<x;A++)k[A]=U[A];return k}function F(U,x){var A=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(A!=null){var k=[],N=!0,w=!1,L,R;try{for(A=A.call(U);!(N=(L=A.next()).done)&&(k.push(L.value),!(x&&k.length===x));N=!0);}catch(W){w=!0,R=W}finally{try{!N&&A.return!=null&&A.return()}finally{if(w)throw R}}return k}}function H(U){if(Array.isArray(U))return U}var G={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Q=function(x){var A=x.disabled,k=x.error,N=x.hideLabel,w=x.inputId,L=x.label,R=x.multiple,W=x.onChange,K=x.options,V=x.value,$=K.map(function(ue){return ue.value});if($.length!==new Set($).size)throw Error("Each value in the option list must be unique.");var re=(0,a.useState)(R?V!=null?V:[]:[]),ce=_e(re,2),ae=ce[0],ye=ce[1],be=(0,a.useState)(R?void 0:V),q=_e(be,2),ee=q[0],le=q[1],ge=K.findIndex(function(ue){return ue.value===ee}),fe=(0,a.useState)(!1),he=_e(fe,2),Oe=he[0],ve=he[1];(0,Y.OR)("click",function(){return ve(!1)}),(0,Y.OR)("keydown",function(){return ve(!0)});var Ee=(0,a.useState)(!1),De=_e(Ee,2),je=De[0],Te=De[1],ie=(0,a.useRef)(null),me=(0,a.useRef)(null);(0,a.useEffect)(function(){var ue=ie.current;if(ue){var pe=ue.offsetHeight,Pe=ue.getElementsByTagName("li")[0].offsetHeight,ke=ue.scrollTop,Ae=ke+pe,Ie=ge*Pe,Ve=Ie+Pe,ze=Ie>=ke&&Ve<=Ae;ze||(Ie<ke?ue.scrollTop=Ie:ue.scrollTop=Ve-pe)}},[ge]);var Ce=function(pe){var Pe;return(Pe=K.find(function(ke){return ke.value===pe}))!==null&&Pe!==void 0?Pe:{label:"",value:""}},xe=function(pe,Pe){ae!=null&&ae.length||le(Pe),ye(pe),W&&W(pe)},Be=function(pe){le(pe),Te(!1),W&&W(pe)},Re=function(pe){R?ae.includes(pe)?We(pe):xe([].concat(X(ae),[pe]),pe):Be(pe)},We=function(pe){xe(ae.filter(function(Pe){return Pe!==pe}),pe)},Ke=function(){xe([])},Ne=(0,a.useCallback)(function(){if(ee===void 0)le(K[0].value);else{var ue=ge+1;ue>=0&&ue<K.length&&le(K[ue].value)}Te(!0)},[ee,ge,le,K]),we=(0,a.useCallback)(function(){if(ee===void 0)le(K[K.length-1].value);else{var ue=ge-1;ue>=0&&ue<K.length&&le(K[ue].value)}Te(!0)},[ee,ge,le,K]);(0,Y.OG)(G.ArrowDown,function(){return je&&Ne()}),(0,Y.OG)(G.ArrowUp,function(){return je&&we()}),(0,Y.OG)(G.Enter,function(){return je&&R&&ee&&Re(ee)});var Me=function(pe){return ee===pe},Se=function(pe){return R?ae.includes(pe):Me(pe)},Le=(0,a.useId)(),Ue=me.current?"calc("+me.current.offsetWidth+"px + 2 * "+g.component.input.border_width.default.value+")":void 0;return(0,S.jsxs)("div",{className:p()(Z().select,Z()["select--"+(R?"multiple":"single")],je&&Z()["select--expanded"],A&&Z()["select--disabled"],Oe&&Z()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,S.jsx)(c.SP,{disabled:A,inputId:w,inputRenderer:function(pe){var Pe=pe.className,ke=pe.inputId;return(0,S.jsxs)("span",{className:p()(Pe,Z().select__field),ref:me,children:[R&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("span",{className:Z()["select--multiple__field__values"],children:ae.map(Ce).map(function(Ae){return(0,S.jsx)(B,{deleteButtonLabel:Ae.deleteButtonLabel,disabled:A!=null?A:!1,onDeleteButtonClick:function(){return We(Ae.value)},value:Ae.value},Ae.value)})}),(0,S.jsx)("button",{"aria-label":x.deleteButtonLabel,className:Z()["select--multiple__field__delete-button"],disabled:!ae.length||A,onClick:function(){return Ke()},children:(0,S.jsx)("span",{className:Z()["select--multiple__field__delete-button__cross"]})})]}),(0,S.jsxs)("button",{"aria-controls":Le,"aria-expanded":je,"aria-label":L,className:Z().select__field__button,disabled:A,id:ke,onBlur:function(){return Te(!1)},onClick:function(){return Te(!je)},onKeyDown:function(Ie){Object.values(G).includes(Ie.key)&&(Ie.preventDefault(),Te(!0))},role:"combobox",value:R?ae:ee,children:[!R&&(0,S.jsx)("span",{className:Z()["select--single__field__value"],children:Ce(ee).label}),(0,S.jsx)("span",{className:Z()["select__field__arrow-wrapper"],children:(0,S.jsx)("span",{className:Z()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!k,label:N?void 0:L,noFocusEffect:R,noPadding:!0,readOnly:!1}),(0,S.jsx)("ul",{className:Z()["select__option-list"],id:Le,ref:ie,role:"listbox",style:{width:Ue},children:K.map(function(ue){return(0,S.jsx)("li",{"aria-selected":Se(ue.value),className:p()(Z()["select__option-list__option"],Se(ue.value)&&Z()["select__option-list__option--selected"],R&&Me(ue.value)&&Z()["select--multiple__option-list__option--focused"]),onClick:function(){return Re(ue.value)},onMouseDown:function(Pe){return Pe.preventDefault()},onKeyDown:function(Pe){return Pe.preventDefault()},role:"option",value:ue.value,children:ue.label},ue.value)})})]})};Q.displayName="Select";try{Q.displayName="Select",Q.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Q.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(U){}},"./src/components/SvgIcon/index.ts":(_,s,e)=>{"use strict";e.d(s,{l:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),u=["svgIconComponent"];function C(M,T){if(M==null)return{};var j=D(M,T),O,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(M);for(f=0;f<v.length;f++)O=v[f],!(T.indexOf(O)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,O)||(j[O]=M[O]))}return j}function D(M,T){if(M==null)return{};var j={},O=Object.keys(M),f,v;for(v=0;v<O.length;v++)f=O[v],!(T.indexOf(f)>=0)&&(j[f]=M[f]);return j}var y=function(T){var j=T.svgIconComponent,O=C(T,u);return(0,r.isValidElement)(j)?(0,r.cloneElement)(j,Object.assign({},O)):null};try{y.displayName="SvgIcon",y.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:y.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(M){}},"./src/components/Table/Context.ts":(_,s,e)=>{"use strict";e.d(s,{$K:()=>D,$e:()=>o,Je:()=>r,Sh:()=>d,XS:()=>n,wv:()=>C});var t=e("./node_modules/react/index.js"),o;(function(y){y.Header="header",y.Body="body",y.Footer="footer"})(o||(o={}));var n=(0,t.createContext)(void 0),d=function(){var M=(0,t.useContext)(n);if(M===void 0)throw new Error("useTableContext must be used within a TableContext");return M},r=(0,t.createContext)(void 0),u=function(){var M=useContext(r);if(M===void 0)throw new Error("useTableContext must be used within a TableContext");return M},C=(0,t.createContext)({variantStandard:o.Body}),D=function(){var M=(0,t.useContext)(C);if(M===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return M}},"./src/components/Table/Table.tsx":(_,s,e)=>{"use strict";e.d(s,{i:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/Table/Table.module.css"),O=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),b=["children","selectRows","onChange","selectedValue","className"];function E(a,i){if(a==null)return{};var p=h(a,i),g,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(c=0;c<P.length;c++)g=P[c],!(i.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(p[g]=a[g]))}return p}function h(a,i){if(a==null)return{};var p={},g=Object.keys(a),c,P;for(P=0;P<g.length;P++)c=g[P],!(i.indexOf(c)>=0)&&(p[c]=a[c]);return p}var m=function(i){var p=i.children,g=i.selectRows,c=g===void 0?!1:g,P=i.onChange,I=i.selectedValue,S=i.className,B=E(i,b);return(0,v.jsx)("table",Object.assign({},B,{className:T()(O().Table,S),children:(0,v.jsx)(f.XS.Provider,{value:{selectRows:c,onChange:P,selectedValue:I},children:p})}))};m.displayName="Table";var l=null;try{m.displayName="Table",m.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:m.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(a){}},"./src/components/Table/TableBody.tsx":(_,s,e)=>{"use strict";e.d(s,{R:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/Table/TableBody.module.css"),O=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),b=["children","className"];function E(a,i){if(a==null)return{};var p=h(a,i),g,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(c=0;c<P.length;c++)g=P[c],!(i.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(p[g]=a[g]))}return p}function h(a,i){if(a==null)return{};var p={},g=Object.keys(a),c,P;for(P=0;P<g.length;P++)c=g[P],!(i.indexOf(c)>=0)&&(p[c]=a[c]);return p}var m=function(i){var p=i.children,g=i.className,c=E(i,b),P=f.$e.Body;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:P},children:(0,v.jsx)("tbody",Object.assign({},c,{className:T()(O().TableBody,g),children:p}))})};m.displayName="TableBody";var l=null;try{m.displayName="TableBody",m.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:m.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(a){}},"./src/components/Table/TableCell.tsx":(_,s,e)=>{"use strict";e.d(s,{Sr:()=>h,pj:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),C=e.n(u),D=e("./src/components/Table/TableCell.module.css"),y=e.n(D),M=e("./src/components/Table/Context.ts"),T;function j(){return j=Object.assign?Object.assign.bind():function(a){for(var i=1;i<arguments.length;i++){var p=arguments[i];for(var g in p)Object.prototype.hasOwnProperty.call(p,g)&&(a[g]=p[g])}return a},j.apply(this,arguments)}var O=function(i){return r.createElement("svg",j({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},i),T||(T=r.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},f=e("./node_modules/react/jsx-runtime.js"),v=["children","variant","onChange","sortDirecton","sortKey","className"];function b(a,i){if(a==null)return{};var p=E(a,i),g,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(c=0;c<P.length;c++)g=P[c],!(i.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(p[g]=a[g]))}return p}function E(a,i){if(a==null)return{};var p={},g=Object.keys(a),c,P;for(P=0;P<g.length;P++)c=g[P],!(i.indexOf(c)>=0)&&(p[c]=a[c]);return p}var h;(function(a){a.Descending="desc",a.Ascending="asc",a.NotSortable="notSortable",a.NotActive="notActive"})(h||(h={}));var m=function(i){var p,g=i.children,c=i.variant,P=i.onChange,I=i.sortDirecton,S=I===void 0?h.NotSortable:I,B=i.sortKey,Y=i.className,z=b(i,v),Z=(0,M.$K)(),X=Z.variantStandard,oe=function(){P!=null&&B!=null&&S!=null&&P({sortedColumn:B,previousSortDirection:S})};return(0,f.jsxs)(f.Fragment,{children:[(c==null?X===M.$e.Header:c==="header")&&(0,f.jsx)("th",Object.assign({},z,{className:C()(y()["header-table-cell"],Y),children:(0,f.jsxs)("div",{className:S!=h.NotSortable?C()(y()["container-sortable"]):C()(y().container),onClick:function(){return oe()},onKeyUp:function(J){(J.key==="Enter"||J.key===" ")&&oe()},role:S!=h.NotSortable?"button":void 0,tabIndex:S!=h.NotSortable?0:void 0,children:[(0,f.jsx)("div",{className:C()(y().input),children:g}),S!=h.NotSortable&&(0,f.jsx)(O,{className:C()(y().icon,(p={},p[y()["icon-asc"]]=S===h.Ascending,p[y()["icon-desc"]]=S===h.Descending,p))})]})})),(c==null?X===M.$e.Body:c==="body")&&(0,f.jsx)("td",Object.assign({},z,{className:C()(y()["body-table-cell"],Y),children:(0,f.jsx)("div",{className:C()(y().input),children:g})})),X===M.$e.Footer&&(0,f.jsx)("td",Object.assign({},z,{className:C()(Y),children:(0,f.jsx)("div",{className:C()(y().input),children:g})}))]})};const l=null;try{m.displayName="TableCell",m.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:m.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(a){}},"./src/components/Table/TableFooter.tsx":(_,s,e)=>{"use strict";e.d(s,{y:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/Table/TableFooter.module.css"),O=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),b=["children","className"];function E(a,i){if(a==null)return{};var p=h(a,i),g,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(c=0;c<P.length;c++)g=P[c],!(i.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(p[g]=a[g]))}return p}function h(a,i){if(a==null)return{};var p={},g=Object.keys(a),c,P;for(P=0;P<g.length;P++)c=g[P],!(i.indexOf(c)>=0)&&(p[c]=a[c]);return p}var m=function(i){var p=i.children,g=i.className,c=E(i,b),P=f.$e.Footer;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:P},children:(0,v.jsx)("tfoot",Object.assign({},c,{className:T()(O()["table-footer"],g),children:p}))})};m.displayName="TableFooter";var l=null;try{m.displayName="TableFooter",m.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:m.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(a){}},"./src/components/Table/TableHeader.tsx":(_,s,e)=>{"use strict";e.d(s,{x:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/Table/TableHeader.module.css"),O=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),b=["children","className"];function E(l,a){if(l==null)return{};var i=h(l,a),p,g;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(g=0;g<c.length;g++)p=c[g],!(a.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,p)||(i[p]=l[p]))}return i}function h(l,a){if(l==null)return{};var i={},p=Object.keys(l),g,c;for(c=0;c<p.length;c++)g=p[c],!(a.indexOf(g)>=0)&&(i[g]=l[g]);return i}var m=function(a){var i=a.children,p=a.className,g=E(a,b),c=f.$e.Header;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:c},children:(0,v.jsx)("thead",Object.assign({},g,{className:T()(O()["table-header"],p),children:i}))})};m.displayName="TableHeader";try{m.displayName="TableHeader",m.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:m.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(l){}},"./src/components/Table/TableRow.tsx":(_,s,e)=>{"use strict";e.d(s,{S:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/Table/TableRow.module.css"),O=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),b=["children","rowData","selectSort","className"];function E(a,i){if(a==null)return{};var p=h(a,i),g,c;if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(a);for(c=0;c<P.length;c++)g=P[c],!(i.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,g)||(p[g]=a[g]))}return p}function h(a,i){if(a==null)return{};var p={},g=Object.keys(a),c,P;for(P=0;P<g.length;P++)c=g[P],!(i.indexOf(c)>=0)&&(p[c]=a[c]);return p}var m=function(i){var p,g=i.children,c=i.rowData,P=i.selectSort,I=P===void 0?"":P,S=i.className,B=E(i,b),Y=(0,f.$K)(),z=Y.variantStandard,Z=(0,f.Sh)(),X=Z.onChange,oe=Z.selectedValue,ne=Z.selectRows,J=function(){X!=null&&ne&&z===f.$e.Body&&c&&X({selectedValue:c})},_e=JSON.stringify(c)===JSON.stringify(oe),de=function(te){(te.key==="Enter"||te.key===" ")&&X!=null&&oe&&c&&X({selectedValue:c})};return(0,v.jsx)(f.Je.Provider,{value:{selectSort:I},children:(0,v.jsx)("tr",Object.assign({},B,{className:T()(O().TableRow,(p={},p[O()["table-row--selected"]]=_e,p[O()["table-row--body"]]=z===f.$e.Body&&ne&&!_e,p),S),onClick:J,tabIndex:z===f.$e.Body&&ne?0:void 0,onKeyUp:function(te){return de(te)},children:g}))})};m.displayName="TableRow";var l=null;try{m.displayName="TableRow",m.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:m.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(a){}},"./src/components/Tabs/Tabs.tsx":(_,s,e)=>{"use strict";e.d(s,{m:()=>N});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),M=e.n(y),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),j=e.n(T),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.map.js"),f=e.n(O),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),b=e.n(v),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),h=e.n(E),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(m),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(a),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(p),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),P=e.n(c),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),S=e.n(I),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(B),z=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),Z=e.n(z),X=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),oe=e.n(X),ne=e("./node_modules/react/index.js"),J=e("./node_modules/classnames/index.js"),_e=e.n(J),de=e("./src/utils/arrayUtils.ts"),se=e("./src/hooks/index.ts"),te=e("./src/components/Tabs/Tabs.module.css"),F=e.n(te),H=e("./node_modules/react/jsx-runtime.js");function G(w,L){return k(w)||A(w,L)||U(w,L)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(w,L){if(!!w){if(typeof w=="string")return x(w,L);var R=Object.prototype.toString.call(w).slice(8,-1);if(R==="Object"&&w.constructor&&(R=w.constructor.name),R==="Map"||R==="Set")return Array.from(w);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return x(w,L)}}function x(w,L){(L==null||L>w.length)&&(L=w.length);for(var R=0,W=new Array(L);R<L;R++)W[R]=w[R];return W}function A(w,L){var R=w==null?null:typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(R!=null){var W=[],K=!0,V=!1,$,re;try{for(R=R.call(w);!(K=($=R.next()).done)&&(W.push($.value),!(L&&W.length===L));K=!0);}catch(ce){V=!0,re=ce}finally{try{!K&&R.return!=null&&R.return()}finally{if(V)throw re}}return W}}function k(w){if(Array.isArray(w))return w}var N=function(L){var R=L.activeTab,W=L.items,K=L.onChange;if(!(0,de.zb)(W.map(function(ie){var me=ie.name;return me})))throw Error("Each tab name must be unique.");if(R!==void 0&&!W.some(function(ie){var me=ie.name;return me===R}))throw Error("The given active tab name must exist in the list of items.");var V=function(me){return W.findIndex(function(Ce){return Ce.name===me})},$=R!=null?R:W[0].name,re=(0,ne.useState)($),ce=G(re,2),ae=ce[0],ye=ce[1],be=(0,ne.useState)(V($)),q=G(be,2),ee=q[0],le=q[1];(0,ne.useEffect)(function(){return ye($)},[$]);var ge=(0,ne.useRef)(null),fe=(0,ne.useId)(),he=W.length-1;(0,se.PQ)(function(){var ie;(ie=ge.current)===null||ie===void 0||ie.querySelectorAll('[role="tab"]')[ee].focus()},[ee]);var Oe=function(me){ae!==me&&K&&K(me),ye(me),le(V(me))},ve=function(){return ee!==void 0&&le(ee===he?0:ee+1)},Ee=function(){return ee!==void 0&&le(ee===0?he:ee-1)},De=function(me){return function(Ce){switch(Ce.key){case"ArrowRight":ve();break;case"ArrowLeft":Ee();break;case"Space":Oe(me)}}},je=function(me){return me.replace(/\s/,"_")},Te=new Map(W.map(function(ie){var me,Ce;return[ie.name,{panelId:(me=ie.panelId)!==null&&me!==void 0?me:fe+"-panel-"+je(ie.name),tabId:(Ce=ie.tabId)!==null&&Ce!==void 0?Ce:fe+"-tab-"+je(ie.name)}]}));return(0,H.jsxs)("div",{className:F().tabs,children:[(0,H.jsx)("div",{className:F().tabs__tablist,ref:ge,role:"tablist",children:W.map(function(ie,me){var Ce=ie.name===ae,xe=Te.get(ie.name),Be=_e()(F().tabs__tablist__tab,Ce&&F()["tabs__tablist__tab--selected"]);return(0,H.jsx)("button",{"aria-controls":xe==null?void 0:xe.panelId,"aria-selected":Ce,className:Be,id:xe==null?void 0:xe.tabId,onClick:function(){return Oe(ie.name)},onKeyDown:De(ie.name),role:"tab",tabIndex:ee===me?0:-1,children:ie.name},ie.name)})}),(0,H.jsx)("hr",{className:F().tabs__divider}),W.map(function(ie){var me=Te.get(ie.name);return(0,H.jsx)("div",{className:F().tabs__tabpanel,"aria-labelledby":me==null?void 0:me.tabId,hidden:ie.name!==ae,id:me==null?void 0:me.panelId,role:"tabpanel",children:ie.content},me==null?void 0:me.panelId)})]})};N.displayName="Tabs";try{N.displayName="Tabs",N.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:N.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(w){}},"./src/components/TextArea/TextArea.tsx":(_,s,e)=>{"use strict";e.d(s,{K:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),D=e.n(C),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./src/components/_InputWrapper/index.ts"),O=e("./src/components/TextArea/TextArea.module.css"),f=e.n(O),v=e("./node_modules/react/jsx-runtime.js"),b=["isValid","disabled","readOnly","resize","label"];function E(l,a){if(l==null)return{};var i=h(l,a),p,g;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(g=0;g<c.length;g++)p=c[g],!(a.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,p)||(i[p]=l[p]))}return i}function h(l,a){if(l==null)return{};var i={},p=Object.keys(l),g,c;for(c=0;c<p.length;c++)g=p[c],!(a.indexOf(g)>=0)&&(i[g]=l[g]);return i}var m=function(a){var i=a.isValid,p=i===void 0?!0:i,g=a.disabled,c=g===void 0?!1:g,P=a.readOnly,I=P===void 0?!1:P,S=a.resize,B=S===void 0?"none":S,Y=a.label,z=E(a,b);return(0,v.jsx)(j.SP,{isValid:p,disabled:c,readOnly:I,label:Y,inputId:z.id,inputRenderer:function(X){var oe=X.className,ne=X.inputId;return(0,v.jsx)("textarea",Object.assign({},z,{id:ne,disabled:c,readOnly:Boolean(I),className:T()(oe,f().TextArea,f()["TextArea--resize-"+B])}))}})};m.displayName="TextArea";try{m.displayName="TextArea",m.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:m.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(l){}},"./src/components/TextField/TextField.tsx":(_,s,e)=>{"use strict";e.d(s,{n:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),y=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),T=e.n(M),j=e("./node_modules/react-number-format/dist/react-number-format.es.js"),O=function(c){return c.format!==void 0},f=function(c){return c.format===void 0},v=function(c,P){return P&&f(P)?numericFormatter(c,P):P&&O(P)?patternFormatter(c,P):c},b=e("./src/components/_InputWrapper/index.ts"),E=e("./node_modules/react/jsx-runtime.js"),h=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function m(g,c){if(g==null)return{};var P=l(g,c),I,S;if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(g);for(S=0;S<B.length;S++)I=B[S],!(c.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,I)||(P[I]=g[I]))}return P}function l(g,c){if(g==null)return{};var P={},I=Object.keys(g),S,B;for(B=0;B<I.length;B++)S=I[B],!(c.indexOf(S)>=0)&&(P[S]=g[S]);return P}var a=function(c){var P=c.values,I=c.sourceInfo;I.event.target.value=P.value.trim()},i=function(c,P,I){var S=c.target,B=c.key,Y=S.selectionStart,z=S.selectionEnd,Z=S.value,X=Z===void 0?"":Z;if(Y!==null&&z!==null){var oe=X[0]==="-",ne=(P==null?void 0:P.length)||0+(oe?1:0),J=(I==null?void 0:I.length)||0;oe&&z<=ne&&B==="Backspace"?S.setSelectionRange(1,1):S.setSelectionRange(Math.min(Math.max(Y,ne),X.length-J),Math.max(Math.min(z,X.length-J),ne))}},p=function(c){var P=c.id,I=c.onChange,S=c.isValid,B=S===void 0?!0:S,Y=c.disabled,z=Y===void 0?!1:Y,Z=c.readOnly,X=Z===void 0?!1:Z,oe=c.required,ne=oe===void 0?!1:oe,J=c.formatting,_e=c.label,de=m(c,h),se=function(F,H){H.source==="event"&&I&&(a({values:F,sourceInfo:H}),I(H.event))};return(0,E.jsx)(b.SP,{isValid:B,disabled:z,readOnly:X,label:_e,inputId:P,inputRenderer:function(F){var H=F.className,G=F.variant,Q=F.inputId,U={id:Q,readOnly:Boolean(X),disabled:z,required:ne,className:T()(H,de.className),style:Object.assign({textAlign:J==null?void 0:J.align},de.style)};return J!=null&&J.number&&f(J.number)?(J.number.prefix&&J.number.prefix[0]==="-"&&(J.number.prefix=" "+J.number.prefix),(0,E.jsx)(j.h3,Object.assign({},U,J.number,de,{"data-testid":Q+"-formatted-number-"+G,onValueChange:se,valueIsNumericString:!0,onKeyDown:function(A){return i(A,J.number.prefix,J.number.suffix)}}))):J!=null&&J.number&&O(J.number)?(0,E.jsx)(j.HH,Object.assign({},U,J.number,de,{"data-testid":Q+"-formatted-number-"+G,onValueChange:se,valueIsNumericString:!0})):(0,E.jsx)("input",Object.assign({},U,de,{"data-testid":Q+"-"+G,onChange:I}))}})};p.displayName="TextField";try{p.displayName="TextField",p.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:p.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(g){}},"./src/components/ToggleButtonGroup/Context.ts":(_,s,e)=>{"use strict";e.d(s,{S:()=>o,z:()=>n});var t=e("./node_modules/react/index.js"),o=(0,t.createContext)(void 0),n=function(){var r=(0,t.useContext)(o);if(r===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return r}},"./src/components/ToggleButtonGroup/ToggleButton.tsx":(_,s,e)=>{"use strict";e.d(s,{C:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),u=e.n(r),C=e("./node_modules/react/jsx-runtime.js"),D=function(M){var T,j=M.children,O=M.value,f=(0,d.z)(),v=f.onChange,b=f.selectedValue,E=function(){v({selectedValue:O})};return(0,C.jsx)("button",{"data-testid":"toggle-button",className:n()(u()["toggle-button"],(T={},T[u()["toggle-button--selected"]]=O===b,T)),onClick:E,type:"button","aria-pressed":O==b,children:j})};D.displayName="ToggleButton";try{D.displayName="ToggleButton",D.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:D.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(y){}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx":(_,s,e)=>{"use strict";e.d(s,{t:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),u=e.n(r),C=e("./node_modules/react/jsx-runtime.js"),D=function(M){var T=M.children,j=M.onChange,O=M.selectedValue,f=function(b){var E=b.selectedValue;j({selectedValue:E})};return(0,C.jsx)(d.S.Provider,{value:{onChange:f,selectedValue:O},children:(0,C.jsx)("div",{className:n()(u()["toggle-button-group"]),"data-testid":"toggle-button-group",children:T})})};D.displayName="ToggleButtonGroup";try{D.displayName="ToggleButtonGroup",D.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:D.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(y){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(_,s,e)=>{"use strict";e.d(s,{b:()=>O,f:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),u=e.n(r),C=e("./node_modules/react/index.js"),D=e("./node_modules/classnames/index.js"),y=e.n(D),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),T=e.n(M),j=e("./node_modules/react/jsx-runtime.js"),O;(function(v){v.Xsmall="xsmall",v.Small="small"})(O||(O={}));var f=function(b){var E=b.checked,h=b.children,m=b.className,l=b.description,a=b.disabled,i=b.hideInput,p=b.hideLabel,g=b.inputId,c=b.label,P=b.name,I=b.onChange,S=b.size,B=b.type,Y=b.value,z=(0,C.useId)(),Z=g!=null?g:"input-"+z,X=c?Z+"-label":void 0,oe=l?Z+"-description":void 0,ne=c&&!p;return(0,j.jsxs)("label",{className:y()(T().template,T()["template--"+S],a&&T()["template--disabled"],m),htmlFor:g,children:[!i&&(0,j.jsxs)("span",{className:T()["template__input-wrapper"],children:[(0,j.jsx)("input",{"aria-describedby":oe,"aria-label":ne?void 0:c,"aria-labelledby":ne?X:void 0,checked:E!=null?E:!1,className:T()["template__input-wrapper__input"],disabled:a,id:Z,name:P,onChange:a?void 0:I,type:B,value:Y}),(0,j.jsx)("span",{className:T()["template__input-wrapper__visible-box"],children:h})]}),(ne||l)&&(0,j.jsxs)("span",{className:T()["template__label-and-description"],children:[ne&&(0,j.jsx)("span",{className:T()["template__label-and-description__label"],id:X,children:c}),l&&(0,j.jsx)("span",{className:T()["template__label-and-description__description"],id:oe,children:l})]})]})};f.displayName="CheckboxRadioTemplate";try{f.displayName="CheckboxRadioTemplate",f.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:f.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(v){}},"./src/components/_InputWrapper/index.ts":(_,s,e)=>{"use strict";e.d(s,{SP:()=>h,Hx:()=>r});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d;(function(m){m.Default="default",m.Error="error",m.Disabled="disabled",m.ReadOnlyInfo="readonly-info",m.ReadOnlyConfirm="readonly-confirm"})(d||(d={}));var r;(function(m){m.ReadOnlyInfo="readonly-info",m.ReadOnlyConfirm="readonly-confirm"})(r||(r={}));var u;(function(m){m.None="none",m.Error="error",m.Search="search"})(u||(u={}));var C=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.readOnly,i=a===void 0?!1:a,p=l.disabled,g=p===void 0?!1:p,c=l.isValid,P=c===void 0?!0:c,I=l.isSearch,S=I===void 0?!1:I,B=u.None;return S&&(B=u.Search),g?{variant:d.Disabled,iconVariant:B}:i===!0||i===r.ReadOnlyInfo?{variant:d.ReadOnlyInfo,iconVariant:B}:i===r.ReadOnlyConfirm?{variant:d.ReadOnlyConfirm,iconVariant:B}:P===!1?{variant:d.Error,iconVariant:u.Error}:{variant:d.Default,iconVariant:B}},D;function y(){return y=Object.assign?Object.assign.bind():function(m){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(m[i]=a[i])}return m},y.apply(this,arguments)}var M=function(l){return t.createElement("svg",y({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),D||(D=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},T;function j(){return j=Object.assign?Object.assign.bind():function(m){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(m[i]=a[i])}return m},j.apply(this,arguments)}var O=function(l){return t.createElement("svg",j({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),T||(T=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},f=e("./src/components/_InputWrapper/InputWrapper.module.css"),v=e.n(f),b=e("./node_modules/react/jsx-runtime.js"),E=function(l){var a=l.variant,i=l.disabled,p=i===void 0?!1:i;if(a===u.Error)return(0,b.jsx)("div",{className:v().InputWrapper__icon,children:(0,b.jsx)(M,{"data-testid":"input-icon-error"})});if(a===u.Search){var g;return(0,b.jsx)("div",{className:n()(v().InputWrapper__icon,(g={},g[v()["InputWrapper__icon--disabled"]]=p,g)),children:(0,b.jsx)(O,{"data-testid":"input-icon-search"})})}return null};try{E.displayName="Icon",E.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:E.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(m){}var h=function(l){var a,i=l.isValid,p=i===void 0?!0:i,g=l.disabled,c=g===void 0?!1:g,P=l.readOnly,I=P===void 0?!1:P,S=l.isSearch,B=S===void 0?!1:S,Y=l.label,z=l.inputId,Z=l.inputRenderer,X=l.noFocusEffect,oe=l.noPadding,ne=(0,t.useId)(),J=z!=null?z:ne,_e=C({readOnly:I,disabled:c,isValid:p,isSearch:B}),de=_e.variant,se=_e.iconVariant;return(0,b.jsxs)(b.Fragment,{children:[Y&&(0,b.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(v().InputWrapper__label),htmlFor:J,children:Y}),(0,b.jsxs)("div",{"data-testid":"InputWrapper",className:n()(v().InputWrapper,v()["InputWrapper--"+de],(a={},a[v()["InputWrapper--search"]]=B,a[v()["InputWrapper--with-focus-effect"]]=!X,a[v()["InputWrapper--with-padding"]]=!oe,a)),children:[(0,b.jsx)(E,{variant:se,disabled:c}),Z({className:v().InputWrapper__field,inputId:J,variant:de})]})]})};try{h.displayName="InputWrapper",h.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:h.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(m){}},"./src/components/index.ts":(_,s,e)=>{"use strict";e.d(s,{XZ:()=>Y.X,Bc:()=>i.B,C3:()=>X.C,wO:()=>X.w});var t=e("./src/components/Panel/Panel.tsx"),o=e("./src/components/Panel/PopoverPanel.tsx"),n=e("./src/components/CircularProgress/CircularProgress.tsx"),d=e("./src/components/AppWrapper/AppWrapper.tsx"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),u=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),C=e("./src/components/Accordion/Accordion.tsx"),D=e("./src/components/Accordion/AccordionHeader.tsx"),y=e("./src/components/Accordion/AccordionContent.tsx"),M=e("./src/components/Accordion/Context.ts"),T=e("./src/components/Accordion/AccordionIcon.tsx"),j=e("./src/components/Button/index.ts"),O=e("./src/components/Page/Page.tsx"),f=e("./src/components/Page/PageHeader.tsx"),v=e("./src/components/Page/PageContent.tsx"),b=e("./src/components/Page/Context.ts"),E=e("./src/components/List/List.tsx"),h=e("./src/components/List/ListItem.tsx"),m=e("./src/components/List/Context.ts"),l=e("./src/components/TextField/TextField.tsx"),a=e("./src/components/SearchField/SearchField.tsx"),i=e("./src/components/ErrorMessage/ErrorMessage.tsx"),p=e("./src/components/Map/Map.tsx"),g=e("./src/components/Table/Table.tsx"),c=e("./src/components/Table/TableHeader.tsx"),P=e("./src/components/Table/TableRow.tsx"),I=e("./src/components/Table/TableBody.tsx"),S=e("./src/components/Table/TableCell.tsx"),B=e("./src/components/Table/TableFooter.tsx"),Y=e("./src/components/Checkbox/Checkbox.tsx"),z=e("./src/components/TextArea/TextArea.tsx"),Z=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),X=e("./src/components/FieldSet/FieldSet.tsx"),oe=e("./src/components/Pagination/index.ts"),ne=e("./src/components/Select/Select.tsx"),J=e("./src/components/Tabs/Tabs.tsx"),_e=e("./src/components/RadioGroup/RadioGroup.tsx"),de=e("./src/components/RadioButton/RadioButton.tsx")},"./src/hooks/index.ts":(_,s,e)=>{"use strict";e.d(s,{OR:()=>o,OG:()=>n,D9:()=>d,PQ:()=>r});var t=e("./node_modules/react/index.js");function o(u,C){(0,t.useEffect)(function(){return document.addEventListener(u,C),function(){return document.removeEventListener(u,C)}},[u,C])}function n(u,C){(0,t.useEffect)(function(){var D=function(M){M.key===u&&C()};return document.addEventListener("keydown",D),function(){return document.removeEventListener("keydown",D)}},[u,C])}function d(u){var C=(0,t.useRef)();return(0,t.useEffect)(function(){C.current=u},[u]),C.current}var r=function(C,D){var y=(0,t.useRef)(!0);(0,t.useEffect)(function(){if(y.current)y.current=!1;else return C()},D)}},"./src/utils/arrayUtils.ts":(_,s,e)=>{"use strict";e.d(s,{cO:()=>T,zb:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),u=e.n(r),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),D=e.n(C),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(y);function T(f,v){if(f===v)return!0;if(f===void 0||v===void 0||f.length!==v.length)return!1;for(var b in f)if(f[b]!==v[b])return!1;return!0}function j(f){return f[f.length-1]}function O(f){return f.length===new Set(f).size}},"./storybook-init-framework-entry.js":(_,s,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(_,s,e)=>{"use strict";e.d(s,{r:()=>u});var t=e("./node_modules/react/index.js"),o,n,d;function r(){return r=Object.assign?Object.assign.bind():function(C){for(var D=1;D<arguments.length;D++){var y=arguments[D];for(var M in y)Object.prototype.hasOwnProperty.call(y,M)&&(C[M]=y[M])}return C},r.apply(this,arguments)}var u=function(D){return t.createElement("svg",r({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},D),o||(o=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),d||(d=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),r.locals={accordion:"accordion---oQBwV"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),r.locals={container:"container---_OBRF"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.accordion-header---NEcyL {
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
`,""]),r.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),r.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([_.id,`html {
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
`,""]),r.locals={};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.button---AisLs {
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
`,""]),r.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.checkbox---sy8lK {
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
`,""]),r.locals={checkbox:"checkbox---sy8lK","checkbox--compact":"checkbox--compact---SWP0L","checkbox--error":"checkbox--error---dOSpU","checkbox--checked":"checkbox--checked---xvne_","checkbox--disabled":"checkbox--disabled---Q4bxl","checkbox--read-only":"checkbox--read-only---PrpNx","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.checkbox-group---Ws6hw {
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
`,""]),r.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group--vertical":"checkbox-group--vertical---qFiAe","checkbox-group--horizontal":"checkbox-group--horizontal---sbdQV"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.svg---cRnN3 {
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
`,""]),r.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),r.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.field-set---WtvOy {
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
`,""]),r.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.list---Xw1lu {
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
`,""]),r.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),r.locals={container:"container---sf7W5"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.list-item---aLk6z {
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
`,""]),r.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"map---Z2PfI"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),r.locals={page:"page---LVMNK"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),r.locals={"page-content":"page-content---ZIuS7"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.page-header---bt29G {
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
`,""]),r.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.page-icon---mvZDR {
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
`,""]),r.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.pagination-icon---iNvyI {
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
`,""]),r.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`/* breakpoints-xs */
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
`,""]),r.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),r.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.radio---S0hlk {
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
`,""]),r.locals={radio:"radio---S0hlk","radio--small":"radio--small---uN_5E","radio--xsmall":"radio--xsmall---tgsCS","radio--error":"radio--error---tU7TP","radio--checked":"radio--checked---b1pmT","radio--disabled":"radio--disabled---adqq7","visible-button":"visible-button---PkY72","visible-button__checkmark":"visible-button__checkmark---OzITh"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.radio-group---BsvK3 {
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
`,""]),r.locals={"radio-group":"radio-group---BsvK3","radio-group--xsmall":"radio-group--xsmall---x_9yu","radio-group--small":"radio-group--small---GIoae","radio-group--vertical":"radio-group--vertical---YkxyR","radio-group--horizontal":"radio-group--horizontal---T4MpH"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.multi-select-item---KQ3Ws {
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
`,""]),r.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.select---eatbZ {
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
`,""]),r.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`Table {
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
`,""]),r.locals={};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),r.locals={};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),r.locals={TableBody:"TableBody---cpO70"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.header-table-cell---zvgNX {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.body-table-cell---cCxyS {
  text-align: left;
  padding: 8px;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  min-width: 100px;
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
`,""]),r.locals={"header-table-cell":"header-table-cell---zvgNX","body-table-cell":"body-table-cell---cCxyS",image:"image---Jz7hI",input:"input---jn1Id","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-footer":"table-footer---fVxHQ"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-header":"table-header---DnjKf"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.TableRow---XoYrl {
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
`,""]),r.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.tabs---dxRcK {
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
`,""]),r.locals={tabs:"tabs---dxRcK",tabs__tablist:"tabs__tablist---_oC5W",tabs__tablist__tab:"tabs__tablist__tab---n25P8","tabs__tablist__tab--selected":"tabs__tablist__tab--selected---kffoD",tabs__divider:"tabs__divider---hR5Rm",tabs__tabpanel:"tabs__tabpanel---FepKw"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.TextArea---kkLod {
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
`,""]),r.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`/* breakpoints-xs */
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
`,""]),r.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.toggle-button-group---xdsvq {
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
`,""]),r.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`/* breakpoints-xs */
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
`,""]),r.locals={container:"container---_zb20"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.template---CPXze {
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
`,""]),r.locals={template:"template---CPXze","template--xsmall":"template--xsmall---mGweJ","template--small":"template--small---Ctnml","template--disabled":"template--disabled---ADFDz","template__input-wrapper":"template__input-wrapper---dLR0V","template__input-wrapper__input":"template__input-wrapper__input---zhrwu","template__input-wrapper__visible-box":"template__input-wrapper__visible-box---fa020","template__label-and-description":"template__label-and-description---z1Efs","template__label-and-description__label":"template__label-and-description__label---Z3XLk","template__label-and-description__description":"template__label-and-description__description---pF8QG"};const u=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(_,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>u});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([_.id,`.InputWrapper---J_oif {
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
`,""]),r.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const u=r},"./src/components/Accordion/Accordion.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Button/Button.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/List/List.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Map/Map.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Page/Page.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Select/Select.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/Table.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(_,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[_.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);_.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(_,s,e)=>{var t={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,_.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(_,s,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,_.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(_,s,e)=>{"use strict";_=e.nmd(_);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],_,!1)}},_=>{var s=t=>_(_.s=t);_.O(0,[743],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=_.O()}]);
