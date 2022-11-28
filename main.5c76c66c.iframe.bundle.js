(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,s,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,a.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>c,__page:()=>_,default:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(p),O=e("./node_modules/react/index.js"),j=e("./node_modules/@mdx-js/react/index.js"),T=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(h){for(var S=1;S<arguments.length;S++){var x=arguments[S];for(var I in x)Object.prototype.hasOwnProperty.call(x,I)&&(h[I]=x[I])}return h},v.apply(this,arguments)}function E(h,S){if(h==null)return{};var x=P(h,S),I,Y;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(h);for(Y=0;Y<w.length;Y++)I=w[Y],!(S.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,I)||(x[I]=h[I]))}return x}function P(h,S){if(h==null)return{};var x={},I=Object.keys(h),Y,w;for(w=0;w<I.length;w++)Y=I[w],!(S.indexOf(Y)>=0)&&(x[Y]=h[Y]);return x}var b={},u="wrapper";function l(h){var S=h.components,x=E(h,f);return(0,j.mdx)(u,v({},b,x,{components:S,mdxType:"MDXLayout"}),(0,j.mdx)(T.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,j.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,j.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,j.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,j.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,j.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,j.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,j.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,j.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,j.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,j.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,j.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,j.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,j.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,j.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,j.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,j.mdx)("ul",null,(0,j.mdx)("li",{parentName:"ul"},(0,j.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,j.mdx)("li",{parentName:"ul"},(0,j.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}l.displayName="MDXContent",l.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var i={title:"Introduksjon",includeStories:["__page"]},g={};i.parameters=i.parameters||{},i.parameters.docs=Object.assign({},i.parameters.docs||{},{page:function(){return(0,j.mdx)(T.aT,{mdxStoryNameToKey:g,mdxComponentAnnotations:i},(0,j.mdx)(l,null))}});const y=i;var c=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>c,__page:()=>_,default:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(p),O=e("./node_modules/react/index.js"),j=e("./node_modules/@mdx-js/react/index.js"),T=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(h){for(var S=1;S<arguments.length;S++){var x=arguments[S];for(var I in x)Object.prototype.hasOwnProperty.call(x,I)&&(h[I]=x[I])}return h},v.apply(this,arguments)}function E(h,S){if(h==null)return{};var x=P(h,S),I,Y;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(h);for(Y=0;Y<w.length;Y++)I=w[Y],!(S.indexOf(I)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,I)||(x[I]=h[I]))}return x}function P(h,S){if(h==null)return{};var x={},I=Object.keys(h),Y,w;for(w=0;w<I.length;w++)Y=I[w],!(S.indexOf(Y)>=0)&&(x[Y]=h[Y]);return x}var b={},u="wrapper";function l(h){var S=h.components,x=E(h,f);return(0,j.mdx)(u,v({},b,x,{components:S,mdxType:"MDXLayout"}),(0,j.mdx)(T.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,j.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,j.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
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
`)))}l.displayName="MDXContent",l.isMDXComponent=!0;var _=function(){throw new Error("Docs-only story")};_.parameters={docsOnly:!0};var i={title:"Components/AppWrapper",includeStories:["__page"]},g={};i.parameters=i.parameters||{},i.parameters.docs=Object.assign({},i.parameters.docs||{},{page:function(){return(0,j.mdx)(T.aT,{mdxStoryNameToKey:g,mdxComponentAnnotations:i},(0,j.mdx)(l,null))}});const y=i;var c=["__page"]},"./.storybook/StoryPage.tsx":(a,s,e)=>{"use strict";e.d(s,{Y:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),D=e("./src/components/AppWrapper/AppWrapper.tsx"),C=e("./node_modules/react/jsx-runtime.js"),p=function(j){var T=j.description;return(0,C.jsxs)(D.O,{children:[(0,C.jsx)(m.Dx,{}),(0,C.jsx)(m.dk,{children:T}),(0,C.jsx)(m.fQ,{includePrimary:!0}),(0,C.jsx)(m.X6,{children:"Props"}),(0,C.jsx)(m.$4,{story:m.Uh})]})};p.displayName="StoryPage";var M=null;try{p.displayName="StoryPage",p.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:p.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(O){}},"./.storybook/preview.js-generated-config-entry.js":(a,s,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>v,parameters:()=>f});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),O=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),T=e("./node_modules/@storybook/theming/dist/esm/index.js"),f={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},T.np.dark),light:Object.assign({},T.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},v=["parameters"],E=e("./node_modules/console-browserify/index.js");function P(l,_){var i=Object.keys(l);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(l);_&&(g=g.filter(function(y){return Object.getOwnPropertyDescriptor(l,y).enumerable})),i.push.apply(i,g)}return i}function b(l){for(var _=1;_<arguments.length;_++){var i=arguments[_]!=null?arguments[_]:{};_%2?P(Object(i),!0).forEach(function(g){u(l,g,i[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach(function(g){Object.defineProperty(l,g,Object.getOwnPropertyDescriptor(i,g))})}return l}function u(l,_,i){return _ in l?Object.defineProperty(l,_,{value:i,enumerable:!0,configurable:!0,writable:!0}):l[_]=i,l}Object.keys(t).forEach(function(l){var _=t[l];switch(l){case"args":return(0,O.uc)(_);case"argTypes":return(0,O.v9)(_);case"decorators":return _.forEach(function(g){return(0,O.$9)(g,!1)});case"loaders":return _.forEach(function(g){return(0,O.HZ)(g,!1)});case"parameters":return(0,O.h1)(b({},_),!1);case"argTypesEnhancers":return _.forEach(function(g){return(0,O.My)(g)});case"argsEnhancers":return _.forEach(function(g){return(0,O._C)(g)});case"render":return(0,O.$P)(_);case"globals":case"globalTypes":{var i={};return i[l]=_,(0,O.h1)(i,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return E.log(l+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>k,__namedExportsOrder:()=>W,default:()=>V});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e.n(c),S=e("./node_modules/react/index.js"),x=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./node_modules/classnames/index.js"),w=e.n(Y),Z=e("./.storybook/StoryPage.tsx"),$=e("./src/components/Button/index.ts"),ee=e("./src/components/Accordion/Accordion.tsx"),oe=e("./src/components/Accordion/AccordionHeader.tsx"),J=e("./src/components/Accordion/AccordionContent.tsx"),_e=e("./src/components/Accordion/Accordion.stories.module.css"),de=e.n(_e),se=e("./src/components/Accordion/Context.ts"),te=e("./node_modules/react/jsx-runtime.js");function F(K,z){return A(K)||U(K,z)||G(K,z)||H()}function H(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(K,z){if(!!K){if(typeof K=="string")return Q(K,z);var X=Object.prototype.toString.call(K).slice(8,-1);if(X==="Object"&&K.constructor&&(X=K.constructor.name),X==="Map"||X==="Set")return Array.from(K);if(X==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(X))return Q(K,z)}}function Q(K,z){(z==null||z>K.length)&&(z=K.length);for(var X=0,re=new Array(z);X<z;X++)re[X]=K[X];return re}function U(K,z){var X=K==null?null:typeof Symbol!="undefined"&&K[Symbol.iterator]||K["@@iterator"];if(X!=null){var re=[],ce=!0,ae=!1,ye,be;try{for(X=X.call(K);!(ce=(ye=X.next()).done)&&(re.push(ye.value),!(z&&re.length===z));ce=!0);}catch(q){ae=!0,be=q}finally{try{!ce&&X.return!=null&&X.return()}finally{if(ae)throw be}}return re}}function A(K){if(Array.isArray(K))return K}var L=`import React, { useState } from 'react';
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
`,R={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},N="";const V={title:"Components/Accordion",component:ee.U,subcomponents:{AccordionHeader:oe._,AccordionContent:J.v},parameters:{design:(0,x.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,te.jsx)(Z.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:se.Bt.Primary,useActions:!0,subtitle:"Subtitle"}};var B=function(z){var X=(0,S.useState)(!1),re=F(X,2),ce=re[0],ae=re[1],ye=(0,S.useState)(!1),be=F(ye,2),q=be[0],ne=be[1],le=function(){ae(!ce)},ge=function(){ne(!q)},fe="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",he=(0,I.D8)(),Oe=F(he,1),ve=Oe[0].useActions,Ee=(0,I.D8)(),De=F(Ee,1),je=De[0].subtitle,Te=ve?(0,te.jsxs)(te.Fragment,{children:[(0,te.jsx)("div",{children:"Example setup"}),(0,te.jsx)($.zx,{variant:$.Wu.Filled,color:$.rp.Primary,size:$.qE.Small,children:"Separat knapp 1"}),(0,te.jsx)($.zx,{variant:$.Wu.Outline,color:$.rp.Primary,size:$.qE.Small,children:"Separat knapp 2"})]}):void 0,ie=je.length>0?je:void 0;return(0,te.jsxs)("div",{className:w()(de().container),children:[(0,te.jsxs)(ee.U,{onClick:le,open:ce,iconVariant:z.iconVariant,children:[(0,te.jsx)(oe._,{actions:Te,subtitle:ie,children:"Accordion 1"}),(0,te.jsx)(J.v,{children:fe})]}),(0,te.jsxs)(ee.U,{onClick:ge,open:q,iconVariant:z.iconVariant,children:[(0,te.jsx)(oe._,{actions:Te,subtitle:ie,children:"Accordion 2"}),(0,te.jsx)(J.v,{children:fe})]})]})};B.displayName="Template";var k=B.bind({});k.args={iconVariant:se.Bt.Primary,open:!1},k.argTypes={open:{control:!1},onClick:{control:!1}},k.parameters={docs:{description:{story:""}}},k.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters);var W=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>_,Disabled:()=>h,FullWidth:()=>c,Primary:()=>b,Secondary:()=>u,SecondaryWithIconNoText:()=>y,Success:()=>l,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>i,__namedExportsOrder:()=>S,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,T={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const v={title:"Components/Button/Filled",component:p.zx,parameters:{design:(0,m.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,O.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:p.Wu.Filled,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var E=function(I){return(0,O.jsx)(p.zx,Object.assign({},I))};E.displayName="Template";var P=function(I){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(p.zx,Object.assign({},I))})};P.displayName="WithinContainerTemplate";var b=E.bind({});b.args={color:p.rp.Primary,children:"Primary button"},b.parameters={docs:{description:{story:""}}};var u=E.bind({});u.args={color:p.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=E.bind({});l.args={color:p.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var _=E.bind({});_.args={color:p.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var i=E.bind({});i.args={color:p.rp.Success,icon:(0,O.jsx)(D.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var g=E.bind({});g.args={color:p.rp.Success,icon:(0,O.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var y=E.bind({});y.args={color:p.rp.Secondary,icon:(0,O.jsx)(D.Z,{})},y.parameters={docs:{description:{story:""}}};var c=P.bind({});c.args={color:p.rp.Primary,icon:(0,O.jsx)(D.Z,{}),fullWidth:!0,children:"Secondary button"},c.parameters={docs:{description:{story:""}}};var h=E.bind({});h.args={children:"Disabled button",disabled:!0},h.parameters={docs:{description:{story:""}}},b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},y.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>_,Disabled:()=>h,FullWidthAndDashedBorder:()=>c,Primary:()=>b,Secondary:()=>u,SecondaryWithIconNoText:()=>y,Success:()=>l,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>i,__namedExportsOrder:()=>S,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,T={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const v={title:"Components/Button/Outline",component:p.zx,parameters:{design:(0,m.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,O.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:p.Wu.Outline,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var E=function(I){return(0,O.jsx)(p.zx,Object.assign({},I))};E.displayName="Template";var P=function(I){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(p.zx,Object.assign({},I))})};P.displayName="WithinContainerTemplate";var b=E.bind({});b.args={color:p.rp.Primary,children:"Primary button"},b.parameters={docs:{description:{story:""}}};var u=E.bind({});u.args={color:p.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=E.bind({});l.args={color:p.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var _=E.bind({});_.args={color:p.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var i=E.bind({});i.args={color:p.rp.Success,icon:(0,O.jsx)(D.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var g=E.bind({});g.args={color:p.rp.Success,icon:(0,O.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var y=E.bind({});y.args={color:p.rp.Secondary,icon:(0,O.jsx)(D.Z,{})},y.parameters={docs:{description:{story:""}}};var c=P.bind({});c.args={color:p.rp.Primary,icon:(0,O.jsx)(D.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},c.parameters={docs:{description:{story:""}}};var h=E.bind({});h.args={children:"Disabled button",disabled:!0},h.parameters={docs:{description:{story:""}}},b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},y.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>_,Disabled:()=>h,FullWidth:()=>c,Primary:()=>b,Secondary:()=>u,Success:()=>l,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>i,SuccessWithIconNoText:()=>y,__namedExportsOrder:()=>S,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Button/index.ts"),M=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,T={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const v={title:"Components/Button/Quiet",component:p.zx,parameters:{design:(0,m.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,O.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:p.Wu.Quiet,size:p.qE.Small,onClick:function(I){alert(JSON.stringify(I.target.innerHTML)+" clicked!")}}};var E=function(I){return(0,O.jsx)(p.zx,Object.assign({},I))};E.displayName="Template";var P=function(I){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(p.zx,Object.assign({},I))})};P.displayName="WithinContainerTemplate";var b=E.bind({});b.args={color:p.rp.Primary,children:"Primary button"},b.parameters={docs:{description:{story:""}}};var u=E.bind({});u.args={color:p.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=E.bind({});l.args={color:p.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var _=E.bind({});_.args={color:p.rp.Danger,children:"Danger button"},_.parameters={docs:{description:{story:""}}};var i=E.bind({});i.args={color:p.rp.Success,icon:(0,O.jsx)(D.Z,{}),iconPlacement:"left",children:"Button"},i.parameters={docs:{description:{story:""}}};var g=E.bind({});g.args={color:p.rp.Success,icon:(0,O.jsx)(M.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var y=E.bind({});y.args={color:p.rp.Success,icon:(0,O.jsx)(D.Z,{})},y.parameters={docs:{description:{story:""}}};var c=P.bind({});c.args={color:p.rp.Primary,icon:(0,O.jsx)(D.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},c.parameters={docs:{description:{story:""}}};var h=E.bind({});h.args={children:"Disabled button",disabled:!0},h.parameters={docs:{description:{story:""}}},b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),y.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},y.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),h.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},h.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>E,Compact:()=>b,Disabled:()=>u,Error:()=>P,LongText:()=>i,Normal:()=>v,ReadOnly:()=>l,WithDescription:()=>_,WithHiddenLabel:()=>g,__namedExportsOrder:()=>y,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Checkbox/Checkbox.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Normal:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},ReadOnly:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:50,line:46},endLoc:{col:1,line:48},startBody:{col:50,line:46},endBody:{col:1,line:48}}},j="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const T={title:"Components/Checkbox",component:C.X,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"Checkbox for boolean or multiple choice values in forms.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        That is why the demonstration in Storybook does not change when clicking.\n                        The `onChange` property must be set to trigger this change."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var f=function(h){return(0,p.jsx)(C.X,Object.assign({},h))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is the default checkbox."}}};var E=f.bind({});E.args={checked:!0},E.parameters={docs:{description:{story:"This is a checked checkbox."}}};var P=f.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is a user input error related to it."}}};var b=f.bind({});b.args={compact:!0},b.parameters={docs:{description:{story:"This is the compact checkbox."}}};var u=f.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var l=f.bind({});l.args={readOnly:!0},l.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var _=f.bind({});_.args={description:"Lorem ipsum dolor sit amet."},_.parameters={docs:{description:{story:"This is a checkbox with description."}}};var i=f.bind({});i.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},i.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var g=f.bind({});g.args={hideLabel:!0},g.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},l.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},_.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters);var y=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>P,Disabled:()=>u,Error:()=>b,Horizontal:()=>E,Vertical:()=>v,__namedExportsOrder:()=>l,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const T={title:"Components/CheckboxGroup",component:C.c,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:C.T.Vertical}};var f=function(i){return(0,p.jsx)(C.c,Object.assign({},i))};f.displayName="Template";var v=f.bind({});v.args={variant:C.T.Vertical},v.parameters={docs:{description:{story:"This is the default setting."}}};var E=f.bind({});E.args={variant:C.T.Horizontal},E.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var P=f.bind({});P.args={compact:!0},P.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var b=f.bind({});b.args={error:"Du m\xE5 velge minst ett av alternativene over."},b.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var u=f.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},v.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},u.parameters);var l=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>v,__namedExportsOrder:()=>E,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/CircularProgress/CircularProgress.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const T={title:"Components/CircularProgress",component:C.D,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var f=function(b){return(0,p.jsx)(C.D,Object.assign({},b))};f.displayName="CircularTemplate";var v=f.bind({});v.args={width:100,value:60,label:"3/5",id:"progress"},v.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},v.parameters);var E=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>v,__namedExportsOrder:()=>E,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/ErrorMessage/ErrorMessage.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},j="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const T={title:"Components/ErrorMessage",component:C.B,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var f=function(b){return(0,p.jsx)(C.B,Object.assign({},b,{children:"This is an error message"}))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},v.parameters);var E=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>E,Disabled:()=>u,Error:()=>b,Normal:()=>v,WithDescription:()=>P,__namedExportsOrder:()=>l,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/FieldSet/FieldSet.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},j="";const T={title:"Components/FieldSet",component:C.C,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:C.w.Small}};var f=function(i){return(0,p.jsx)(C.C,Object.assign({},i,{children:i.children}))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is a normal field set."}}};var E=f.bind({});E.args={size:C.w.Xsmall},E.parameters={docs:{description:{story:"This is a compact field set."}}};var P=f.bind({});P.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},P.parameters={docs:{description:{story:"This is a field set with a description."}}};var b=f.bind({});b.args={error:"Her er det en beskrivende feilmelding."},b.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var u=f.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},u.parameters);var l=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Dashed:()=>l,Solid:()=>u,__namedExportsOrder:()=>_,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/List/List.tsx"),p=e("./src/components/List/ListItem.tsx"),M=e("./src/components/List/Context.ts"),O=e("./src/components/List/List.stories.modules.css"),j=e.n(O),T=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,v={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},E="";const P={title:"Components/List",component:C.a,parameters:{design:(0,m.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,T.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var b=function(g){return(0,T.jsx)("div",{className:j().container,children:(0,T.jsxs)(C.a,{borderStyle:g.borderStyle,children:[(0,T.jsx)(p.H,{children:"List Item 1"}),(0,T.jsx)(p.H,{children:"List Item 2"}),(0,T.jsx)(p.H,{children:"List Item 3"})]})})};b.displayName="Template";var u=b.bind({});u.args={borderStyle:M.N4.Solid},u.parameters={docs:{description:{story:""}}};var l=b.bind({});l.args={borderStyle:M.N4.Dashed},l.parameters={docs:{description:{story:""}}},u.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},l.parameters);var _=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>Q,GoogleMaps:()=>N,KartverketSea:()=>R,KartverketTerrain:()=>L,MapWithMarkerZoomAndCenter:()=>U,OpenStreetMap:()=>A,__namedExportsOrder:()=>V,default:()=>H});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e.n(c),S=e("./node_modules/react/index.js"),x=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/Map/Map.tsx"),w=e("./node_modules/react/jsx-runtime.js"),Z=e("./node_modules/console-browserify/index.js");function $(B,k){return de(B)||_e(B,k)||oe(B,k)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(B,k){if(!!B){if(typeof B=="string")return J(B,k);var W=Object.prototype.toString.call(B).slice(8,-1);if(W==="Object"&&B.constructor&&(W=B.constructor.name),W==="Map"||W==="Set")return Array.from(B);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return J(B,k)}}function J(B,k){(k==null||k>B.length)&&(k=B.length);for(var W=0,K=new Array(k);W<k;W++)K[W]=B[W];return K}function _e(B,k){var W=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(W!=null){var K=[],z=!0,X=!1,re,ce;try{for(W=W.call(B);!(z=(re=W.next()).done)&&(K.push(re.value),!(k&&K.length===k));z=!0);}catch(ae){X=!0,ce=ae}finally{try{!z&&W.return!=null&&W.return()}finally{if(X)throw ce}}return K}}function de(B){if(Array.isArray(B))return B}var se=`import React, { useState } from 'react';
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
`,te={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},F="";const H={title:"Components/Map",component:Y.D,parameters:{layout:"fullscreen",design:(0,x.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,w.jsx)(I.Y,{description:"Map component"})}}},args:{}};var G=function(k){var W=(0,S.useState)(k.markerLocation),K=$(W,2),z=K[0],X=K[1],re=function(ae){X(ae),Z.log("Map clicked at ["+ae.latitude+","+ae.longitude+"]")};return(0,w.jsx)(Y.D,Object.assign({},k,{markerLocation:z,onClick:re}))};G.displayName="Template";var Q=G.bind({});Q.args={},Q.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var U=G.bind({});U.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},U.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var A=G.bind({});A.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},A.parameters={docs:{description:{story:"OpenStreetMap"}}};var L=G.bind({});L.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},L.parameters={docs:{description:{story:"Kartverket terrain map"}}};var R=G.bind({});R.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},R.parameters={docs:{description:{story:"Kartverket sea map"}}};var N=G.bind({});N.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},N.parameters={docs:{description:{story:"Google Maps"}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},U.parameters),A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters),N.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},N.parameters);var V=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>l,Success:()=>_,__namedExportsOrder:()=>i,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./.storybook/StoryPage.tsx"),m=e("./src/components/Page/Context.ts"),D=e("./src/components/Page/PageContent.tsx"),C=e("./src/components/Page/PageHeader.tsx"),p=e("./src/components/Page/Page.tsx"),M,O;function j(){return j=Object.assign?Object.assign.bind():function(g){for(var y=1;y<arguments.length;y++){var c=arguments[y];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(g[h]=c[h])}return g},j.apply(this,arguments)}var T=function(y){return n.createElement("svg",j({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},y),M||(M=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),O||(O=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},f=e("./node_modules/react/jsx-runtime.js"),v=`import React from 'react';
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
`,E={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},P="";const b={title:"Components/Page",component:p.T,parameters:{design:(0,d.vc)([{type:"figma",url:P},{type:"link",url:P}]),docs:{page:function(){return(0,f.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var u=function(y){return(0,f.jsxs)(p.T,{color:y.color,children:[(0,f.jsx)(C.m,{icon:(0,f.jsx)(T,{}),children:"PageHeader"}),(0,f.jsx)(D.J,{children:"PageContent"})]})};u.displayName="Template";var l=u.bind({});l.args={color:m.gL.Primary},l.parameters={docs:{description:{story:""}}};var _=u.bind({});_.args={color:m.gL.Success},_.parameters={docs:{description:{story:""}}},l.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},l.parameters),_.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},_.parameters);var i=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>U,__namedExportsOrder:()=>A,default:()=>G});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),h=e.n(c),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),x=e.n(S),I=e("./node_modules/react/index.js"),Y=e("./node_modules/storybook-addon-designs/esm/index.js"),w=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Pagination/Pagination.tsx"),$=e("./node_modules/react/jsx-runtime.js");function ee(L,R){return se(L)||de(L,R)||J(L,R)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(L,R){if(!!L){if(typeof L=="string")return _e(L,R);var N=Object.prototype.toString.call(L).slice(8,-1);if(N==="Object"&&L.constructor&&(N=L.constructor.name),N==="Map"||N==="Set")return Array.from(L);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return _e(L,R)}}function _e(L,R){(R==null||R>L.length)&&(R=L.length);for(var N=0,V=new Array(R);N<R;N++)V[N]=L[N];return V}function de(L,R){var N=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(N!=null){var V=[],B=!0,k=!1,W,K;try{for(N=N.call(L);!(B=(W=N.next()).done)&&(V.push(W.value),!(R&&V.length===R));B=!0);}catch(z){k=!0,K=z}finally{try{!B&&N.return!=null&&N.return()}finally{if(k)throw K}}return V}}function se(L){if(Array.isArray(L))return L}var te=`import React, { useState } from 'react';
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
`,F={Example:{startLoc:{col:52,line:38},endLoc:{col:1,line:58},startBody:{col:52,line:38},endBody:{col:1,line:58}}},H="";const G={title:"Components/Pagination",component:Z.t,parameters:{design:(0,Y.vc)([{type:"figma",url:H},{type:"link",url:H}]),docs:{page:function(){return(0,$.jsx)(w.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Q=function(R){var N=(0,I.useState)(5),V=ee(N,2),B=V[0],k=V[1],W=(0,I.useState)(0),K=ee(W,2),z=K[0],X=K[1],re=function(ae){k(parseInt(ae.target.value,10)),X(0)};return(0,$.jsx)(Z.t,Object.assign({},R,{rowsPerPage:B,currentPage:z,setCurrentPage:X,onRowsPerPageChange:re}))};Q.displayName="Template";var U=Q.bind({});U.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20],rowsPerPageText:"Rader per side",pageDescriptionText:"av"},U.parameters={docs:{description:{story:""}}},U.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},U.parameters);var A=["Example"]},"./src/components/Panel/Panel.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>b,Info:()=>E,Success:()=>v,Warning:()=>P,__namedExportsOrder:()=>u,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Panel/Panel.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const T={title:"Components/Panel",component:C.s,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,p.jsx)("div",{children:"Her kommer litt informasjon"})}};var f=function(_){return(0,p.jsx)(C.s,Object.assign({},_))};f.displayName="Template";var v=f.bind({});v.args={variant:C.c.Success},v.parameters={docs:{description:{story:"Success beskrivelse"}}};var E=f.bind({});E.parameters={docs:{description:{story:"Info beskrivelse"}}};var P=f.bind({});P.args={variant:C.c.Warning},P.parameters={docs:{description:{story:"Warning beskrivelse"}}};var b=f.bind({});b.args={variant:C.c.Error},b.parameters={docs:{description:{story:"Error beskrivelse"}}},v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters),E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},P.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},b.parameters);var u=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>N,Info:()=>L,Success:()=>A,Warning:()=>R,__namedExportsOrder:()=>V,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e.n(c),S=e("./node_modules/react/index.js"),x=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),w=e("./src/components/Button/index.ts"),Z=e("./src/components/Panel/Panel.tsx"),$=e("./src/components/Panel/PopoverPanel.tsx"),ee=e("./node_modules/react/jsx-runtime.js");function oe(B,k){return te(B)||se(B,k)||_e(B,k)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(B,k){if(!!B){if(typeof B=="string")return de(B,k);var W=Object.prototype.toString.call(B).slice(8,-1);if(W==="Object"&&B.constructor&&(W=B.constructor.name),W==="Map"||W==="Set")return Array.from(B);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return de(B,k)}}function de(B,k){(k==null||k>B.length)&&(k=B.length);for(var W=0,K=new Array(k);W<k;W++)K[W]=B[W];return K}function se(B,k){var W=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(W!=null){var K=[],z=!0,X=!1,re,ce;try{for(W=W.call(B);!(z=(re=W.next()).done)&&(K.push(re.value),!(k&&K.length===k));z=!0);}catch(ae){X=!0,ce=ae}finally{try{!z&&W.return!=null&&W.return()}finally{if(X)throw ce}}return K}}function te(B){if(Array.isArray(B))return B}var F=`import React from 'react';
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
`,H={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},G="";const Q={title:"Components/Panel/PopoverPanel",component:$.H,parameters:{design:(0,x.vc)([{type:"figma",url:G},{type:"link",url:G}]),docs:{page:function(){return(0,ee.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:Z.c.Warning,trigger:(0,ee.jsx)("button",{children:"\xC5pne"}),side:"top"}};var U=function(k){var W=(0,I.eJ)(!1),K=oe(W,2),z=K[0],X=K[1],re=function(){X(!z)};return(0,ee.jsx)("div",{children:(0,ee.jsxs)($.H,{variant:k.variant,side:k.side,title:k.title,open:z,trigger:(0,ee.jsx)(w.zx,{variant:w.Wu.Filled,color:w.rp.Primary,children:"\xC5pne"}),onOpenChange:X,showPointer:k.showPointer,showIcon:k.showIcon,forceMobileLayout:k.forceMobileLayout,children:[(0,ee.jsx)("div",{children:"Her kommer litt informasjon"}),(0,ee.jsx)(w.zx,{variant:w.Wu.Filled,color:w.rp.Primary,size:w.qE.Small,onClick:re,children:"Lukk"})]})})};U.displayName="Template";var A=U.bind({});A.args={variant:Z.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},A.argTypes={trigger:{control:!1}},A.parameters={docs:{description:{story:""}}};var L=U.bind({});L.args={variant:Z.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},L.argTypes={trigger:{control:!1}},L.parameters={docs:{description:{story:""}}};var R=U.bind({});R.args={variant:Z.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},R.argTypes={trigger:{control:!1}},R.parameters={docs:{description:{story:""}}};var N=U.bind({});N.args={variant:Z.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},N.argTypes={trigger:{control:!1}},N.parameters={docs:{description:{story:""}}},A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters),N.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},N.parameters);var V=["Success","Info","Warning","Error"]},"./src/components/RadioButton/RadioButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>E,Compact:()=>b,Default:()=>v,Disabled:()=>u,Error:()=>P,LongText:()=>_,WithDescription:()=>l,WithHiddenLabel:()=>i,__namedExportsOrder:()=>g,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/RadioButton/RadioButton.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Default:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Checked:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Error:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Compact:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},Disabled:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithDescription:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},LongText:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}},WithHiddenLabel:{startLoc:{col:53,line:46},endLoc:{col:1,line:48},startBody:{col:53,line:46},endBody:{col:1,line:48}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const T={title:"Components/RadioButton",component:C.E,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"This is a radio button. Use it together with other radio buttons with the same name.\n                        The component relies on being controlled, which means that it expects the consumer to set its `checked` state.\n                        The `onChange` property must be set to trigger this change.\n                        We recommend using our `RadioGroup` component if you need radio buttons,\n                        but this standalone component might be useful if `RadioGroup` doesn't match the layout criteria of your use case.\n                        If that is the case, you may also consider contributing to the design system \u{1F642}"})}}},args:{label:"Label",name:"label",value:"label"}};var f=function(c){return(0,p.jsx)(C.E,Object.assign({},c))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"Default radio button."}}};var E=f.bind({});E.args={checked:!0},E.parameters={docs:{description:{story:"Checked radio button."}}};var P=f.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This radio button is supposed to be used when there is a user input error related to it."}}};var b=f.bind({});b.args={size:C.j.Xsmall},b.parameters={docs:{description:{story:"This is the compact radio button."}}};var u=f.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled radio button. Use this when the user is not supposed to check it. Remember to make it clear for the user why it can not be checked. The checked state of this button should only be used when all buttons in the group are disabled."}}};var l=f.bind({});l.args={description:"Lorem ipsum dolor sit amet."},l.parameters={docs:{description:{story:"This is a radio button with description."}}};var _=f.bind({});_.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},_.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var i=f.bind({});i.args={hideLabel:!0},i.parameters={docs:{description:{story:"This is a radio button with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the button. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},v.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},l.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},_.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioButton {...args} />
)`}},i.parameters);var g=["Default","Checked","Error","Compact","Disabled","WithDescription","LongText","WithHiddenLabel"]},"./src/components/RadioGroup/RadioGroup.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>P,Disabled:()=>u,Error:()=>b,Horizontal:()=>E,Vertical:()=>v,__namedExportsOrder:()=>l,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/RadioGroup/RadioGroup.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Vertical:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Horizontal:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Compact:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Error:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}},Disabled:{startLoc:{col:52,line:49},endLoc:{col:1,line:51},startBody:{col:52,line:49},endBody:{col:1,line:51}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9066%3A48225&t=xqaYVeY7K7YWkymE-0";const T={title:"Components/RadioGroup",component:C.Ee,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"Group of radio buttons for use cases where the user is supposed to select one and ony one value from a short list.\n                        It behaves similarly to channel presets on radios, hence its name.\n                        Its `onChange` property can be set to a function that will be called with the checked value each time it changes."})}}},args:{legend:"Hvilken iskremsmak er best?",description:"Velg din favorittsmak blant alternativene.",items:[{label:"Vanilje",value:"vanilje"},{label:"Jordb\xE6r",value:"jordb\xE6r"},{label:"Sjokolade",value:"sjokolade"},{label:"Jeg spiser ikke iskrem",value:"spiser-ikke-is"}],name:"favorittiskrem"}};var f=function(i){return(0,p.jsx)(C.Ee,Object.assign({},i))};f.displayName="Template";var v=f.bind({});v.args={variant:C.DX.Vertical},v.parameters={docs:{description:{story:"This is the default setting."}}};var E=f.bind({});E.args={variant:C.DX.Horizontal},E.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var P=f.bind({});P.args={size:C.YN.Xsmall},P.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var b=f.bind({});b.args={error:"Du m\xE5 velge et av alternativene over."},b.parameters={docs:{description:{story:"The radio group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var u=f.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"Use this if the user is not supposed to change the checked value. Remember to make it clear for the user why it can not be changed."}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},v.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <RadioGroup {...args} />
)`}},u.parameters);var l=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/SearchField/SearchField.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Q,__namedExportsOrder:()=>U,default:()=>H});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e.n(c),S=e("./node_modules/react/index.js"),x=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),w=e("./src/components/SearchField/SearchField.tsx"),Z=e("./node_modules/react/jsx-runtime.js");function $(A,L){return de(A)||_e(A,L)||oe(A,L)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(A,L){if(!!A){if(typeof A=="string")return J(A,L);var R=Object.prototype.toString.call(A).slice(8,-1);if(R==="Object"&&A.constructor&&(R=A.constructor.name),R==="Map"||R==="Set")return Array.from(A);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return J(A,L)}}function J(A,L){(L==null||L>A.length)&&(L=A.length);for(var R=0,N=new Array(L);R<L;R++)N[R]=A[R];return N}function _e(A,L){var R=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(R!=null){var N=[],V=!0,B=!1,k,W;try{for(R=R.call(A);!(V=(k=R.next()).done)&&(N.push(k.value),!(L&&N.length===L));V=!0);}catch(K){B=!0,W=K}finally{try{!V&&R.return!=null&&R.return()}finally{if(B)throw W}}return N}}function de(A){if(Array.isArray(A))return A}var se=`import React from 'react';
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
`,te={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},F="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const H={title:"Components/SearchField",component:w.U,parameters:{design:(0,x.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,Z.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var G=function(L){var R=(0,I.D8)(),N=$(R,1),V=N[0].disabled;return(0,Z.jsx)(w.U,Object.assign({disabled:V},L))};G.displayName="Template";var Q=G.bind({});Q.args={},Q.parameters={docs:{description:{story:"Search field."}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},Q.parameters);var U=["Example"]},"./src/components/Select/Select.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Multiple:()=>y,MultipleDisabled:()=>c,MultipleError:()=>h,Single:()=>_,SingleDisabled:()=>i,SingleError:()=>g,__namedExportsOrder:()=>S,default:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),m=e.n(r),D=e("./node_modules/react/index.js"),C=e("./node_modules/storybook-addon-designs/esm/index.js"),p=e("./.storybook/StoryPage.tsx"),M=e("./src/components/Select/Select.tsx"),O=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
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
`,T={Single:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},Multiple:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}}},f="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",v=[{label:"Agder",value:"Agder"},{label:"Innlandet",value:"Innlandet"},{label:"M\xF8re og Romsdal",value:"M\xF8re og Romsdal"},{label:"Nordland",value:"Nordland"},{label:"Oslo",value:"Oslo"},{label:"Rogaland",value:"Rogaland"},{label:"Vestfold og Telemark",value:"Vestfold og Telemark"},{label:"Troms og Finnmark",value:"Troms og Finnmark"},{label:"Tr\xF8ndelag",value:"Tr\xF8ndelag"},{label:"Vestland",value:"Vestland"},{label:"Viken",value:"Viken"}],E=v.map(function(x){return Object.assign({},x,{deleteButtonLabel:"Slett "+x.label})}),P={label:"Velg et fylke",multiple:!1,options:v},b={deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:E};const u={title:"Components/Select",component:M.P,parameters:{design:(0,C.vc)([{type:"figma",url:f},{type:"link",url:f}]),docs:{page:function(){return(0,O.jsx)(p.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:P};var l=function(I){return(0,O.jsx)("div",{style:{width:"440px"},children:(0,O.jsx)(M.P,Object.assign({},I))})};l.displayName="Template";var _=l.bind({});_.args={},_.parameters={docs:{description:{story:"This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."}}};var i=l.bind({});i.args={disabled:!0},i.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var g=l.bind({});g.args={error:!0},g.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}};var y=l.bind({});y.args=b,y.parameters={docs:{description:{story:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed."}}};var c=l.bind({});c.args=Object.assign({},b,{disabled:!0}),c.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var h=l.bind({});h.args=Object.assign({},b,{error:!0}),h.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},_.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},_.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),y.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},y.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters),h.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},h.parameters);var S=["Single","SingleDisabled","SingleError","Multiple","MultipleDisabled","MultipleError"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{IconFromNavIconLibrary:()=>u,ImportedCustomIcon:()=>l,__namedExportsOrder:()=>_,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./node_modules/@navikt/ds-icons/esm/Success.js"),m=e("./.storybook/StoryPage.tsx"),D=e("./src/components/SvgIcon/index.ts"),C,p,M;function O(){return O=Object.assign?Object.assign.bind():function(i){for(var g=1;g<arguments.length;g++){var y=arguments[g];for(var c in y)Object.prototype.hasOwnProperty.call(y,c)&&(i[c]=y[c])}return i},O.apply(this,arguments)}var j=function(g){return n.createElement("svg",O({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},g),C||(C=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),p||(p=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),M||(M=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},T=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,v={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},E="";const P={title:"Components/SvgIcon",component:D.l,parameters:{design:(0,d.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,T.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var b=function(g){return(0,T.jsx)(D.l,Object.assign({},g))};b.displayName="Template";var u=b.bind({});u.args={svgIconComponent:(0,T.jsx)(r.Z,{})},u.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var l=b.bind({});l.args={svgIconComponent:(0,T.jsx)(j,{height:"2rem",width:"2rem"})},l.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},l.parameters);var _=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{BasicTable:()=>ae,SelectRows:()=>ye,__namedExportsOrder:()=>be,default:()=>z});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e.n(c),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(S),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),Y=e.n(I),w=e("./node_modules/react/index.js"),Z=e("./node_modules/storybook-addon-designs/esm/index.js"),$=e("./node_modules/classnames/index.js"),ee=e.n($),oe=e("./.storybook/StoryPage.tsx"),J=e("./src/components/Pagination/index.ts"),_e=e("./src/components/Table/Table.tsx"),de=e("./src/components/Table/TableHeader.tsx"),se=e("./src/components/Table/TableCell.tsx"),te=e("./src/components/Table/TableRow.tsx"),F=e("./src/components/Table/TableBody.tsx"),H=e("./src/components/Table/Table.stories.module.css"),G=e.n(H),Q=e("./src/components/Table/TableFooter.tsx"),U=e("./node_modules/react/jsx-runtime.js");function A(q,ne){return B(q)||V(q,ne)||R(q,ne)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(q,ne){if(!!q){if(typeof q=="string")return N(q,ne);var le=Object.prototype.toString.call(q).slice(8,-1);if(le==="Object"&&q.constructor&&(le=q.constructor.name),le==="Map"||le==="Set")return Array.from(q);if(le==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le))return N(q,ne)}}function N(q,ne){(ne==null||ne>q.length)&&(ne=q.length);for(var le=0,ge=new Array(ne);le<ne;le++)ge[le]=q[le];return ge}function V(q,ne){var le=q==null?null:typeof Symbol!="undefined"&&q[Symbol.iterator]||q["@@iterator"];if(le!=null){var ge=[],fe=!0,he=!1,Oe,ve;try{for(le=le.call(q);!(fe=(Oe=le.next()).done)&&(ge.push(Oe.value),!(ne&&ge.length===ne));fe=!0);}catch(Ee){he=!0,ve=Ee}finally{try{!fe&&le.return!=null&&le.return()}finally{if(he)throw ve}}return ge}}function B(q){if(Array.isArray(q))return q}var k=`import React, { useState } from 'react';
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
`,W={BasicTable:{startLoc:{col:47,line:122},endLoc:{col:1,line:240},startBody:{col:47,line:122},endBody:{col:1,line:240}},SelectRows:{startLoc:{col:47,line:122},endLoc:{col:1,line:240},startBody:{col:47,line:122},endBody:{col:1,line:240}}},K="";const z={title:"Components/Table",component:_e.i,parameters:{design:(0,Z.vc)([{type:"figma",url:K},{type:"link",url:K}]),docs:{page:function(){return(0,U.jsx)(oe.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function X(q,ne,le,ge,fe){return{applicationNr:q,product:ne,status:le,imageSrc:ge,imageAlt:fe}}var re=[X("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),X("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),X("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),X("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),X("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),X("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),X("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),X("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],ce=function(ne){var le=(0,w.useState)({}),ge=A(le,2),fe=ge[0],he=ge[1],Oe=(0,w.useState)({sortedColumn:"",sortDirection:se.Sr.NotActive}),ve=A(Oe,2),Ee=ve[0],De=ve[1],je=(0,w.useState)(5),Te=A(je,2),ie=Te[0],me=Te[1],Ce=(0,w.useState)(0),xe=A(Ce,2),Be=xe[0],ke=xe[1],We=function(Se){var Le=Se.selectedValue;he(Le)},Ke=function(Se){var Le=Se.sortedColumn,Ue=Se.previousSortDirection;Ue===se.Sr.Ascending?De({sortedColumn:Le,sortDirection:se.Sr.Descending}):Ue===se.Sr.Descending?De({sortedColumn:Le,sortDirection:se.Sr.Ascending}):De({sortedColumn:Le,sortDirection:se.Sr.Descending})},Ne=function(Se){me(parseInt(Se.target.value,10)),ke(0)},we=function(Se){ke(Se)};return(0,U.jsxs)(_e.i,{selectRows:ne.selectRows,onChange:We,selectedValue:fe,children:[(0,U.jsx)(de.x,{children:(0,U.jsxs)(te.S,{children:[(0,U.jsx)(se.pj,{onChange:Ke,sortKey:"S\xF8knadsnr.",sortDirecton:Ee.sortedColumn==="S\xF8knadsnr."?Ee.sortDirection:se.Sr.NotActive,children:"S\xF8knadsnr."}),(0,U.jsx)(se.pj,{sortKey:"Produkt",onChange:Ke,sortDirecton:Ee.sortedColumn==="Produkt"?Ee.sortDirection:se.Sr.NotActive,children:"Produkt"}),(0,U.jsx)(se.pj,{children:"Status"}),(0,U.jsx)(se.pj,{children:"Bilde"})]})}),(0,U.jsx)(F.R,{children:re.slice(Be*ie,Be*ie+ie).map(function(Me){return(0,U.jsxs)(te.S,{rowData:{applicationNr:Me.applicationNr},children:[(0,U.jsx)(se.pj,{children:Me.applicationNr}),(0,U.jsx)(se.pj,{children:Me.product}),(0,U.jsx)(se.pj,{children:Me.status}),(0,U.jsx)(se.pj,{children:(0,U.jsx)("img",{className:ee()(G().checkmark),src:Me.imageSrc,alt:Me.imageAlt})})]},Me.applicationNr)})}),(0,U.jsx)(Q.y,{children:(0,U.jsx)(te.S,{children:(0,U.jsx)(se.pj,{colSpan:4,children:(0,U.jsx)(J.t,{numberOfRows:re.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:ie,onRowsPerPageChange:Ne,currentPage:Be,setCurrentPage:we,rowsPerPageText:"Rader per side",pageDescriptionText:"av"})})})})]})};ce.displayName="Template";var ae=ce.bind({});ae.args={selectRows:!1},ae.parameters={docs:{description:{story:""}}};var ye=ce.bind({});ye.args={selectRows:!0},ye.parameters={docs:{description:{story:""}}},ae.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ye.parameters);var be=["BasicTable","SelectRows"]},"./src/components/Tabs/Tabs.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>v,__namedExportsOrder:()=>E,default:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Tabs/Tabs.tsx"),p=e("./node_modules/react/jsx-runtime.js"),M=`import React from 'react';
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
`,O={Example:{startLoc:{col:46,line:120},endLoc:{col:74,line:120},startBody:{col:46,line:120},endBody:{col:74,line:120}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=9551%3A54208&t=hWPz7o59Op8wlvoS-0";const T={title:"Components/Tabs",component:C.m,parameters:{design:(0,m.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,p.jsx)(D.Y,{description:"This component allows the user to tab between several panels.\n                        It is useful to give a structured view of elements that do not have to be visible all at the same time.\n                        Tabs are selected using the mouse or by keyboard navigation. On the keyboard, left and right arrow keys are used to switch focus and the enter or space keys are used to open the focused tab.\n                        The component accepts a list of `TabItem`s (`item` property) consisting of a tab name and some tab panel content.\n                        It is also possible to specify IDs for the tab and the panel components (they will be generated if not given).\n                        The `activeTab` property can be used to define which tab should be selected by default. It defaults to the first tab.\n                        The `onChange` property optional and can be used to trigger some function the user switches to another tab. It is called with the tab name as a parameter."})}}},args:{items:[{name:"Ild",content:(0,p.jsx)("p",{children:"Nulla nec rutrum libero. Curabitur lorem est, tempor nec iaculis in, egestas eu lacus. Ut malesuada risus ut ipsum consequat mattis. Donec quis nunc ut lorem suscipit pharetra. Nulla ornare sed nisl nec facilisis. Sed in lacinia elit. Sed et eleifend nisi. Sed egestas nulla lobortis sapien scelerisque, at venenatis risus elementum. Aliquam eleifend, metus non molestie viverra, erat sem ornare enim, nec suscipit nulla nisi vel dolor. Etiam volutpat sapien arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sollicitudin molestie leo sit amet faucibus. Sed interdum condimentum interdum. Praesent volutpat turpis mattis purus venenatis egestas. In iaculis condimentum fringilla. Duis dignissim turpis mattis tristique vulputate."})},{name:"Jord",content:(0,p.jsx)("p",{children:"Vestibulum nisl diam, tempus sit amet justo eu, semper facilisis dolor. Proin scelerisque tellus sit amet consectetur condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dui vehicula, semper arcu vitae, posuere odio. Pellentesque eu ante in elit semper pellentesque. Donec cursus eros non diam condimentum viverra. Pellentesque at odio lorem. Aenean ac enim et risus bibendum scelerisque et a purus. Donec ultricies, ex et ornare fringilla, turpis ex consectetur ante, ut porta libero metus quis magna. Nulla eu hendrerit ex, non dapibus quam. Nulla dictum ligula tellus, et elementum orci convallis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dolor orci, sagittis vel elit eget, viverra ultrices nulla."})},{name:"Luft",content:(0,p.jsx)("p",{children:"Integer dictum lacus vitae urna lobortis, scelerisque varius metus maximus. Integer ornare pharetra metus, vel mattis urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla consectetur ipsum ac magna sollicitudin, ac fermentum sem tempus. Proin rutrum aliquam eros eu accumsan. Duis rhoncus urna a tellus sagittis, eu aliquam dui pharetra. Praesent eu libero consectetur, varius urna quis, volutpat magna. Vivamus ornare magna at vehicula pulvinar. Curabitur risus lorem, placerat sit amet mollis venenatis, placerat sed ligula. Donec pellentesque quis est nec viverra. Sed ultricies aliquam nunc, sit amet faucibus augue tempor quis. Pellentesque porttitor sapien quis risus placerat, in facilisis augue molestie."})},{name:"Vann",content:(0,p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel leo nibh. Fusce neque nulla, semper quis rutrum eu, volutpat nec mauris. In lacinia iaculis venenatis. Aliquam pulvinar lectus lorem, a congue nulla dictum vel. Donec augue eros, cursus ut porta eu, mollis sodales odio. Vestibulum rutrum sollicitudin nisi, sed facilisis nibh dictum at. Nulla arcu mi, iaculis quis luctus at, vulputate hendrerit quam. Suspendisse condimentum pellentesque varius. Nullam molestie dictum pellentesque. Nunc felis sem, elementum a sapien a, consectetur ullamcorper tellus. Nullam porta tempus nisl, in vehicula quam congue eget."})}]}};var f=function(b){return(0,p.jsx)(C.m,Object.assign({},b))};f.displayName="Template";var v=f.bind({});v.args={},v.parameters={docs:{description:{story:"This is how the component might look like."}}},v.parameters=Object.assign({storySource:{source:"(args) => <Tabs {...args} />"}},v.parameters);var E=["Example"]},"./src/components/TextArea/TextArea.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>E,Disabled:()=>l,Error:()=>P,ReadOnlyConfirm:()=>u,ReadOnlyInfo:()=>b,__namedExportsOrder:()=>_,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/_InputWrapper/index.ts"),p=e("./src/components/TextArea/TextArea.tsx"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,j={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},T="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const f={title:"Components/TextArea",component:p.K,parameters:{design:(0,m.vc)([{type:"figma",url:T},{type:"link",url:T}]),docs:{page:function(){return(0,M.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var v=function(g){return(0,M.jsx)(p.K,Object.assign({},g))};v.displayName="Template";var E=v.bind({});E.args={},E.parameters={docs:{description:{story:"Regular textarea."}}};var P=v.bind({});P.args={isValid:!1},P.parameters={docs:{description:{story:"Textarea displaying error."}}};var b=v.bind({});b.args={readOnly:!0,value:"Some text"},b.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var u=v.bind({});u.args={readOnly:C.Hx.ReadOnlyConfirm,value:"Some text"},u.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var l=v.bind({});l.args={disabled:!0,value:"Some text"},l.parameters={docs:{description:{story:"Textarea as disabled."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},l.parameters);var _=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>E,Disabled:()=>_,Error:()=>b,NumberInput:()=>P,ReadOnlyConfirm:()=>l,ReadOnlyInfo:()=>u,__namedExportsOrder:()=>i,default:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/storybook-addon-designs/esm/index.js"),D=e("./.storybook/StoryPage.tsx"),C=e("./src/components/_InputWrapper/index.ts"),p=e("./src/components/TextField/TextField.tsx"),M=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,j={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},T="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const f={title:"Components/TextField",component:p.n,parameters:{design:(0,m.vc)([{type:"figma",url:T},{type:"link",url:T}]),docs:{page:function(){return(0,M.jsx)(D.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var v=function(y){return(0,M.jsx)(p.n,Object.assign({},y))};v.displayName="Template";var E=v.bind({});E.args={},E.parameters={docs:{description:{story:"Regular input field."}}};var P=v.bind({});P.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},P.parameters={docs:{description:{story:"Number input field."}}};var b=v.bind({});b.args={isValid:!1},b.parameters={docs:{description:{story:"Input field displaying error."}}};var u=v.bind({});u.args={readOnly:!0,value:"Some text"},u.parameters={docs:{description:{story:"Input field as readonly-info."}}};var l=v.bind({});l.args={readOnly:C.Hx.ReadOnlyConfirm,value:"Some text"},l.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var _=v.bind({});_.args={disabled:!0,value:"Some text"},_.parameters={docs:{description:{story:"Input field as disabled."}}},E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},E.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},P.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},b.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},l.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},_.parameters);var i=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>A,__namedExportsOrder:()=>L,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e.n(c),S=e("./node_modules/react/index.js"),x=e("./node_modules/storybook-addon-designs/esm/index.js"),I=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),w=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),Z=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),$=e.n(Z),ee=e("./node_modules/react/jsx-runtime.js");function oe(R,N){return te(R)||se(R,N)||_e(R,N)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(R,N){if(!!R){if(typeof R=="string")return de(R,N);var V=Object.prototype.toString.call(R).slice(8,-1);if(V==="Object"&&R.constructor&&(V=R.constructor.name),V==="Map"||V==="Set")return Array.from(R);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return de(R,N)}}function de(R,N){(N==null||N>R.length)&&(N=R.length);for(var V=0,B=new Array(N);V<N;V++)B[V]=R[V];return B}function se(R,N){var V=R==null?null:typeof Symbol!="undefined"&&R[Symbol.iterator]||R["@@iterator"];if(V!=null){var B=[],k=!0,W=!1,K,z;try{for(V=V.call(R);!(k=(K=V.next()).done)&&(B.push(K.value),!(N&&B.length===N));k=!0);}catch(X){W=!0,z=X}finally{try{!k&&V.return!=null&&V.return()}finally{if(W)throw z}}return B}}function te(R){if(Array.isArray(R))return R}var F=`import React, { useState } from 'react';
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
`,H={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},G="";const Q={title:"Components/Toggle button group",component:Y.t,parameters:{design:(0,x.vc)([{type:"figma",url:G},{type:"link",url:G}]),docs:{page:function(){return(0,ee.jsx)(I.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var U=function(){var N=(0,S.useState)("left"),V=oe(N,2),B=V[0],k=V[1],W=function(z){var X=z.selectedValue;k(X)};return(0,ee.jsx)("div",{className:$().container,children:(0,ee.jsxs)(Y.t,{onChange:W,selectedValue:B,children:[(0,ee.jsx)(w.C,{value:"left",children:"Aktivt valg"}),(0,ee.jsx)(w.C,{value:"right",children:"Mulig valg"})]})})};U.displayName="Template";var A=U.bind({});A.args={},A.argTypes={onChange:{control:!1},selectedValue:{control:!1}},A.parameters={docs:{description:{}}},A.parameters=Object.assign({storySource:{source:`() => {
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
}`}},A.parameters);var L=["Example"]},"./src/DesignTokens/index.ts":(a,s,e)=>{"use strict";e.d(s,{T:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),C=e.n(D),p=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),M=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),O=1.6,j=/(\d*\.?\d+)rem(?=\W|$)/gim,T=function(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,_=Math.pow(10,l);return Math.round((u+Number.EPSILON)*_)/_},f=function(u){return typeof u=="string"?u.replace(j,function(l,_){var i=T(_*O);return i+"rem"}):u},v={get:function(u,l){if(l in u){var _=u[l];return typeof _=="object"?new Proxy(_,v):f(_)}}},E=new Proxy(p,v),P=new Proxy(M,v)},"./src/components/Accordion/Accordion.tsx":(a,s,e)=>{"use strict";e.d(s,{U:()=>m});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./src/components/Accordion/Accordion.module.css"),d=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),m=function(p){var M=p.children,O=p.open,j=p.onClick,T=p.iconVariant,f=T===void 0?o.Bt.Primary:T,v=(0,t.useId)(),E=(0,t.useId)();return(0,r.jsx)("div",{className:d().accordion,children:(0,r.jsx)(o.SY.Provider,{value:{onClick:j,open:O,headerId:v,contentId:E,iconVariant:f},children:M})})};m.displayName="Accordion";var D=null;try{m.displayName="Accordion",m.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:m.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(C){}},"./src/components/Accordion/AccordionContent.tsx":(a,s,e)=>{"use strict";e.d(s,{v:()=>d});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./node_modules/react/jsx-runtime.js"),d=function(D){var C=D.children,p=(0,o.EF)(),M=p.open,O=p.contentId,j=p.headerId;return(0,n.jsx)("div",{children:M&&(0,n.jsx)("div",{"aria-expanded":M,id:O,"aria-labelledby":j,children:C})})};d.displayName="AccordionContent";var r=null;try{d.displayName="AccordionContent",d.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:d.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(m){}},"./src/components/Accordion/AccordionHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{_:()=>p});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Accordion/AccordionHeader.module.css"),r=e.n(d),m=e("./src/components/Accordion/Context.ts"),D=e("./src/components/Accordion/AccordionIcon.tsx"),C=e("./node_modules/react/jsx-runtime.js"),p=function(O){var j,T=O.children,f=O.actions,v=O.subtitle,E=(0,m.EF)(),P=E.onClick,b=E.open,u=E.headerId,l=E.contentId;return(0,C.jsxs)("div",{className:n()(r()["accordion-header"],(j={},j[r()["accordion-header--subtitle"]]=v,j)),children:[(0,C.jsx)(D.X,{}),(0,C.jsxs)("button",{className:n()(r()["accordion-header__title"]),"aria-expanded":b,type:"button",onClick:P,id:u,"aria-controls":l,children:[T,(v==null?void 0:v.length)&&(0,C.jsx)("div",{"data-testid":"accordion-header-subtitle",className:n()(r()["accordion-header__subtitle"]),children:v})]}),(0,C.jsx)("div",{className:n()(r()["accordion-header__actions"]),children:f})]})};p.displayName="AccordionHeader";try{p.displayName="AccordionHeader",p.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:p.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(M){}},"./src/components/Accordion/AccordionIcon.tsx":(a,s,e)=>{"use strict";e.d(s,{X:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),d=e.n(n),r=e("./src/components/Accordion/AccordionIcon.module.css"),m=e.n(r),D=e("./src/components/Accordion/Context.ts"),C;function p(){return p=Object.assign?Object.assign.bind():function(P){for(var b=1;b<arguments.length;b++){var u=arguments[b];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(P[l]=u[l])}return P},p.apply(this,arguments)}var M=function(b){return o.createElement("svg",p({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b),C||(C=o.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},O;function j(){return j=Object.assign?Object.assign.bind():function(P){for(var b=1;b<arguments.length;b++){var u=arguments[b];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(P[l]=u[l])}return P},j.apply(this,arguments)}var T=function(b){return o.createElement("svg",j({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b),O||(O=o.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},f=e("./node_modules/react/jsx-runtime.js"),v=function(){var b,u,l=(0,D.EF)(),_=l.onClick,i=l.open,g=l.iconVariant,y=[m()["accordion-icon"],(b={},b[m()["accordion-icon--opened"]]=i,b)],c=(u={height:20,width:20,className:d()(y)},u["data-testid"]=g,u.onClick=_,u);switch(g){case D.Bt.Primary:return(0,f.jsx)(M,Object.assign({},c));case D.Bt.Secondary:return(0,f.jsx)(T,Object.assign({},c))}};const E=null},"./src/components/Accordion/Context.ts":(a,s,e)=>{"use strict";e.d(s,{Bt:()=>o,EF:()=>d,SY:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Secondary="secondary"})(o||(o={}));var n=(0,t.createContext)(void 0),d=function(){var m=(0,t.useContext)(n);if(m===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return m}},"./src/components/AppWrapper/AppWrapper.tsx":(a,s,e)=>{"use strict";e.d(s,{O:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),n=e.n(o),d=e("./src/components/AppWrapper/AppWrapper.module.css"),r=e.n(d),m=e("./node_modules/react/jsx-runtime.js"),D=function(p){var M=p.children;return(0,m.jsx)("div",{children:M})};D.displayName="AppWrapper";try{D.displayName="AppWrapper",D.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:D.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(C){}},"./src/components/Button/index.ts":(a,s,e)=>{"use strict";e.d(s,{zx:()=>u,rp:()=>E,qE:()=>v,Wu:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),m=e("./node_modules/classnames/index.js"),D=e.n(m),C=e("./src/components/SvgIcon/index.ts"),p=e("./src/components/Button/Button.module.css"),M=e.n(p),O=e("./node_modules/react/jsx-runtime.js"),j=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function T(l,_){if(l==null)return{};var i=f(l,_),g,y;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(y=0;y<c.length;y++)g=c[y],!(_.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,g)||(i[g]=l[g]))}return i}function f(l,_){if(l==null)return{};var i={},g=Object.keys(l),y,c;for(c=0;c<g.length;c++)y=g[c],!(_.indexOf(y)>=0)&&(i[y]=l[y]);return i}var v;(function(l){l.Small="small",l.Medium="medium",l.Large="large"})(v||(v={}));var E;(function(l){l.Primary="primary",l.Secondary="secondary",l.Success="success",l.Danger="danger",l.Inverted="inverted"})(E||(E={}));var P;(function(l){l.Filled="filled",l.Outline="outline",l.Quiet="quiet"})(P||(P={}));var b=function(_,i){var g,y,c,h=_.children,S=_.color,x=S===void 0?E.Primary:S,I=_.variant,Y=I===void 0?P.Filled:I,w=_.size,Z=w===void 0?v.Small:w,$=_.fullWidth,ee=$===void 0?!1:$,oe=_.dashedBorder,J=oe===void 0?!1:oe,_e=_.iconPlacement,de=_e===void 0?"left":_e,se=_.icon,te=_.type,F=te===void 0?"button":te,H=_.className,G=T(_,j);return(0,O.jsxs)("button",Object.assign({},G,{ref:i,className:D()(M().button,M()["button--"+Z],M()["button--"+Y],M()["button--"+x],M()["button--"+Y+"--"+x],(g={},g[M()["button--full-width"]]=ee,g),(y={},y[M()["button--dashed-border"]]=J,y),(c={},c[M()["button--only-icon"]]=!h&&se,c),H),type:F,children:[se&&de==="left"&&(0,O.jsx)(C.l,{svgIconComponent:se,className:M().icon}),h,se&&de==="right"&&(0,O.jsx)(C.l,{svgIconComponent:se,className:M().icon})]}))};b.displayName="Button";const u=(0,r.forwardRef)(b)},"./src/components/Checkbox/Checkbox.tsx":(a,s,e)=>{"use strict";e.d(s,{X:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e.n(r),D=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),p=e.n(C),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),O=e("./src/components/Checkbox/Checkbox.module.css"),j=e.n(O),T=e("./node_modules/react/jsx-runtime.js"),f=function(E){var P=E.checkboxId,b=E.checked,u=E.compact,l=E.description,_=E.disabled,i=E.error,g=E.hideLabel,y=E.label,c=E.name,h=E.onChange,S=E.readOnly;return(0,T.jsx)(M.f,{checked:b,className:p()(j().checkbox,b&&j()["checkbox--checked"],i&&j()["checkbox--error"],_&&j()["checkbox--disabled"],u&&j()["checkbox--compact"],S&&j()["checkbox--read-only"]),description:l,disabled:_,hideInput:S,hideLabel:g,inputId:P,label:y,name:c,onChange:h,size:u?M.b.Xsmall:M.b.Small,type:"checkbox",children:(0,T.jsx)("span",{className:j()["visible-box"],children:(0,T.jsx)("span",{className:j()["visible-box__checkmark"]})})})};f.displayName="Checkbox";try{f.displayName="Checkbox",f.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:f.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(v){}},"./src/components/CheckboxGroup/CheckboxGroup.tsx":(a,s,e)=>{"use strict";e.d(s,{T:()=>N,c:()=>k});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),h=e.n(c),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),x=e.n(S),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),Y=e.n(I),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),Z=e.n(w),$=e("./node_modules/react/index.js"),ee=e("./node_modules/classnames/index.js"),oe=e.n(ee),J=e("./src/components/index.ts"),_e=e("./src/components/FieldSet/FieldSet.tsx"),de=e("./src/utils/arrayUtils.ts"),se=e("./src/hooks/index.ts"),te=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),F=e.n(te),H=e("./node_modules/react/jsx-runtime.js");function G(W,K){return R(W)||L(W,K)||U(W,K)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(W,K){if(!!W){if(typeof W=="string")return A(W,K);var z=Object.prototype.toString.call(W).slice(8,-1);if(z==="Object"&&W.constructor&&(z=W.constructor.name),z==="Map"||z==="Set")return Array.from(W);if(z==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(z))return A(W,K)}}function A(W,K){(K==null||K>W.length)&&(K=W.length);for(var z=0,X=new Array(K);z<K;z++)X[z]=W[z];return X}function L(W,K){var z=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(z!=null){var X=[],re=!0,ce=!1,ae,ye;try{for(z=z.call(W);!(re=(ae=z.next()).done)&&(X.push(ae.value),!(K&&X.length===K));re=!0);}catch(be){ce=!0,ye=be}finally{try{!re&&z.return!=null&&z.return()}finally{if(ce)throw ye}}return X}}function R(W){if(Array.isArray(W))return W}var N;(function(W){W.Vertical="vertical",W.Horizontal="horizontal"})(N||(N={}));var V=function(K,z){switch(z.type){case"check":return K.concat([z.name]);case"uncheck":return K.filter(function(X){return X!==z.name});case"reset":return z.state}},B=function(K){return K.filter(function(z){var X=z.checked;return X}).map(function(z){var X=z.name;return X})},k=function(K){var z=K.compact,X=K.description,re=K.disabled,ce=K.error,ae=K.items,ye=K.legend,be=K.onChange,q=K.variant,ne=q===void 0?N.Vertical:q;if(!(0,de.zb)(ae.map(function(ve){return ve.name})))throw Error("Each name in the checkbox group must be unique.");var le=(0,$.useReducer)(V,B(ae)),ge=G(le,2),fe=ge[0],he=ge[1];(0,$.useEffect)(function(){return he({type:"reset",state:B(ae)})},[ae]);var Oe=(0,se.D9)(fe);return(0,se.PQ)(function(){be&&!re&&!(0,de.cO)(Oe,fe)&&be(fe)},[fe,be,re]),(0,H.jsx)(J.C3,{description:X,disabled:re,error:ce,legend:ye,size:z?_e.w.Xsmall:_e.w.Small,children:(0,H.jsx)("div",{className:oe()(F()["checkbox-group"],F()["checkbox-group--"+ne],z&&F()["checkbox-group--compact"]),children:ae.map(function(ve){return(0,H.jsx)(J.XZ,{checkboxId:ve.checkboxId,checked:fe.includes(ve.name),compact:z,description:ve.description,disabled:re||ve.disabled,error:!!ce,label:ve.label,name:ve.name,onChange:function(De){he({type:De.target.checked?"check":"uncheck",name:ve.name})}},ve.name)})})})};k.displayName="CheckboxGroup";try{k.displayName="CheckboxGroup",k.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:k.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(W){}},"./src/components/CircularProgress/CircularProgress.tsx":(a,s,e)=>{"use strict";e.d(s,{D:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/react/index.js"),d=e("./src/DesignTokens/index.ts"),r=e("./src/components/CircularProgress/CircularProgress.module.css"),m=e.n(r),D=e("./node_modules/react/jsx-runtime.js"),C=function(O){var j=O.value,T=O.width,f=T===void 0?70:T,v=O.strokeWidth,E=v===void 0?2.5:v,P=O.ariaLabel,b=O.label,u=O.id,l=u+"-label",_=!P&&b?l:void 0;return(0,D.jsxs)("div",{id:u,className:m().container,style:{width:f+"px"},role:"progressbar","aria-labelledby":_,"aria-label":P,children:[b&&(0,D.jsx)("div",{id:l,className:m().label,children:b}),(0,D.jsxs)("svg",{className:m().svg,viewBox:"0 0 35.8 35.8",children:[(0,D.jsx)(p,{stroke:d.T.ColorsBlue200,strokeWidth:E}),(0,D.jsx)(p,{strokeWidth:E,stroke:d.T.ColorsBlue900,strokeDashoffset:100-j,strokeDasharray:"100 100",className:m().circleTransition})]})]})};C.displayName="CircularProgress";var p=function(O){return(0,D.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},O))};p.displayName="Circle";try{C.displayName="CircularProgress",C.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:C.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(M){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(a,s,e)=>{"use strict";e.d(s,{B:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ErrorMessage/ErrorMessage.module.css"),r=e.n(d),m=e("./node_modules/react/jsx-runtime.js"),D=function(p){var M=p.id,O=p.children,j=p.ariaLabel;return(0,m.jsx)("div",{"data-testid":"ErrorMessage","aria-label":j,id:M,role:"alertdialog",className:n()(r()["error-message-wrapper"]),children:O})};D.displayName="ErrorMessage";try{D.displayName="ErrorMessage",D.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:D.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(C){}},"./src/components/FieldSet/FieldSet.tsx":(a,s,e)=>{"use strict";e.d(s,{C:()=>T,w:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/react/index.js"),m=e("./node_modules/classnames/index.js"),D=e.n(m),C=e("./src/components/index.ts"),p=e("./src/components/FieldSet/FieldSet.module.css"),M=e.n(p),O=e("./node_modules/react/jsx-runtime.js"),j;(function(f){f.Xsmall="xsmall",f.Small="small"})(j||(j={}));var T=function(v){var E=v.children,P=v.className,b=v.description,u=v.disabled,l=v.error,_=v.legend,i=v.size,g=i===void 0?j.Small:i;return(0,O.jsxs)("fieldset",{className:D()(M()["field-set"],M()["field-set--"+g],P),disabled:u,children:[_&&(0,O.jsx)("legend",{className:M()["field-set__legend"],children:_}),b&&(0,O.jsx)("p",{className:M()["field-set__description"],children:b}),(0,O.jsx)("div",{className:M()["field-set__content"],children:E}),l&&(0,O.jsx)("div",{className:M()["field-set__error-message"],children:(0,O.jsx)(C.Bc,{children:l})})]})};T.displayName="FieldSet";try{T.displayName="FieldSet",T.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:T.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(f){}},"./src/components/List/Context.ts":(a,s,e)=>{"use strict";e.d(s,{N4:()=>o,UU:()=>d,ZM:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Solid="solid",r.Dashed="dashed"})(o||(o={}));var n=(0,t.createContext)({borderStyle:o.Solid}),d=function(){var m=(0,t.useContext)(n);if(m===void 0)throw new Error("useListContext must be used within a ListContext");return m}},"./src/components/List/List.tsx":(a,s,e)=>{"use strict";e.d(s,{a:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/List/List.module.css"),r=e.n(d),m=e("./src/components/List/Context.ts"),D=e("./node_modules/react/jsx-runtime.js"),C=function(M){var O=M.children,j=M.borderStyle,T=j===void 0?m.N4.Solid:j;return(0,D.jsx)("ul",{className:n()(r().list,r()["list--"+T]),children:(0,D.jsx)(m.ZM.Provider,{value:{borderStyle:T},children:O})})};C.displayName="List";try{C.displayName="List",C.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:C.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(p){}},"./src/components/List/ListItem.tsx":(a,s,e)=>{"use strict";e.d(s,{H:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/List/ListItem.module.css"),r=e.n(d),m=e("./src/components/List/Context.ts"),D=e("./node_modules/react/jsx-runtime.js"),C=function(M){var O=M.children,j=(0,m.UU)(),T=j.borderStyle;return(0,D.jsx)("li",{className:n()(r()["list-item"],r()["list-item--"+T]),children:O})};C.displayName="ListItem";try{C.displayName="ListItem",C.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:C.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(p){}},"./src/components/Map/Map.tsx":(a,s,e)=>{"use strict";e.d(s,{D:()=>i});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/leaflet/dist/images/marker-icon.png"),d=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),r=e("./node_modules/leaflet/dist/images/marker-shadow.png"),m=e("./node_modules/leaflet/dist/leaflet-src.js"),D=e.n(m),C=e("./node_modules/react-leaflet/lib/MapContainer.js"),p=e("./node_modules/react-leaflet/lib/TileLayer.js"),M=e("./node_modules/react-leaflet/lib/AttributionControl.js"),O=e("./node_modules/react-leaflet/lib/Marker.js"),j=e("./node_modules/react-leaflet/lib/hooks.js"),T=e("./node_modules/react/index.js"),f=e("./src/components/Map/Map.module.css"),v=e.n(f),E=e("./node_modules/leaflet/dist/leaflet.css"),P=e.n(E),b=e("./node_modules/react/jsx-runtime.js"),u={latitude:64.888996,longitude:12.8186054},l=4,_=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],i=function(S){var x=S.readOnly,I=x===void 0?!1:x,Y=S.layers,w=Y===void 0?_:Y,Z=S.centerLocation,$=Z===void 0?u:Z,ee=S.zoom,oe=ee===void 0?l:ee,J=S.markerLocation,_e=S.onClick;return(0,b.jsxs)(C.h,{className:v().map,center:y($),zoom:oe,zoomControl:!I,dragging:!I,touchZoom:!I,doubleClickZoom:!I,scrollWheelZoom:!I,attributionControl:!1,children:[w.map(function(de,se){return(0,b.jsx)(p.I,{url:de.url,attribution:de.attribution,subdomains:de.subdomains?de.subdomains:[],opacity:I?.5:1},se)}),(0,b.jsx)(M.z,{prefix:!1}),(0,b.jsx)(g,{markerLocation:J}),(0,b.jsx)(c,{readOnly:I,onClick:_e})]})};i.displayName="Map";function g(h){var S=h.markerLocation,x=(0,m.icon)({iconUrl:n,iconRetinaUrl:d,shadowUrl:r,iconSize:[25,41],iconAnchor:[12,41]});return S?(0,b.jsx)(O.J,{position:y(S),icon:x}):null}function y(h){return[h.latitude,h.longitude]}var c=function(S){var x=S.onClick,I=S.readOnly;return(0,j.zV)({click:function(w){x&&!I&&x({latitude:w.latlng.lat,longitude:w.latlng.lng})}}),null};try{i.displayName="Map",i.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:i.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(h){}},"./src/components/Page/Context.ts":(a,s,e)=>{"use strict";e.d(s,{gL:()=>o,lO:()=>d,z1:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Success="success"})(o||(o={}));var n=(0,t.createContext)({color:o.Primary}),d=function(){var m=(0,t.useContext)(n);if(m===void 0)throw new Error("usePageContext must be used within a PageContext");return m}},"./src/components/Page/Page.tsx":(a,s,e)=>{"use strict";e.d(s,{T:()=>m});var t=e("./node_modules/react/index.js"),o=e("./src/components/Page/Context.ts"),n=e("./src/components/Page/Page.module.css"),d=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),m=function(C){var p=C.children,M=C.color,O=M===void 0?o.gL.Primary:M;return(0,r.jsx)("div",{className:d().page,children:(0,r.jsx)(o.z1.Provider,{value:{color:O},children:p})})};m.displayName="Page";try{m.displayName="Page",m.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:m.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(D){}},"./src/components/Page/PageContent.tsx":(a,s,e)=>{"use strict";e.d(s,{J:()=>D});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Page/PageContent.module.css"),r=e.n(d),m=e("./node_modules/react/jsx-runtime.js"),D=function(p){var M=p.children;return(0,m.jsx)("div",{className:n()(r()["page-content"]),children:M})};D.displayName="PageContent";try{D.displayName="PageContent",D.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:D.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(C){}},"./src/components/Page/PageHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{m:()=>j});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/Page/Context.ts"),r=e("./src/components/Page/PageHeader.module.css"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./src/components/Page/PageIcon.module.css"),p=e.n(C),M=e("./node_modules/react/jsx-runtime.js"),O=function(f){var v=f.icon,E={className:n()(p()["page-icon__element"])};return(0,M.jsx)("div",{className:p()["page-icon"],children:(0,t.cloneElement)(v,Object.assign({},E))})};O.displayName="PageIcon";try{O.displayName="PageIcon",O.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:O.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(T){}var j=function(f){var v=f.children,E=f.icon,P=(0,d.lO)(),b=P.color;return(0,M.jsxs)("header",{className:n()(m()["page-header"],m()["page-header--"+b]),"data-testid":"page-header",children:[E&&(0,M.jsx)(O,{icon:E}),(0,M.jsx)("span",{children:v})]})};j.displayName="PageHeader";try{j.displayName="PageHeader",j.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:j.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(T){}},"./src/components/Pagination/Pagination.tsx":(a,s,e)=>{"use strict";e.d(s,{t:()=>te});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),T=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),v=e.n(f),E=e("./src/components/Pagination/Pagination.module.css"),P=e.n(E),b,u;function l(){return l=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},l.apply(this,arguments)}var _=function(H){return T.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),b||(b=T.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=T.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},i,g;function y(){return y=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},y.apply(this,arguments)}var c=function(H){return T.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),i||(i=T.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),g||(g=T.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},h;function S(){return S=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},S.apply(this,arguments)}var x=function(H){return T.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),h||(h=T.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},I,Y;function w(){return w=Object.assign?Object.assign.bind():function(F){for(var H=1;H<arguments.length;H++){var G=arguments[H];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(F[Q]=G[Q])}return F},w.apply(this,arguments)}var Z=function(H){return T.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},H),I||(I=T.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),Y||(Y=T.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},$=e("./node_modules/react/jsx-runtime.js");function ee(F,H){return se(F)||de(F,H)||J(F,H)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(F,H){if(!!F){if(typeof F=="string")return _e(F,H);var G=Object.prototype.toString.call(F).slice(8,-1);if(G==="Object"&&F.constructor&&(G=F.constructor.name),G==="Map"||G==="Set")return Array.from(F);if(G==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G))return _e(F,H)}}function _e(F,H){(H==null||H>F.length)&&(H=F.length);for(var G=0,Q=new Array(H);G<H;G++)Q[G]=F[G];return Q}function de(F,H){var G=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(G!=null){var Q=[],U=!0,A=!1,L,R;try{for(G=G.call(F);!(U=(L=G.next()).done)&&(Q.push(L.value),!(H&&Q.length===H));U=!0);}catch(N){A=!0,R=N}finally{try{!U&&G.return!=null&&G.return()}finally{if(A)throw R}}return Q}}function se(F){if(Array.isArray(F))return F}var te=function(H){var G,Q,U,A,L=H.numberOfRows,R=H.rowsPerPageOptions,N=H.rowsPerPage,V=H.onRowsPerPageChange,B=H.currentPage,k=H.setCurrentPage,W=H.rowsPerPageText,K=H.pageDescriptionText,z=(0,T.useState)(1),X=ee(z,2),re=X[0],ce=X[1];(0,T.useEffect)(function(){L<N?ce(1):ce(Math.ceil(L/N))},[N,L]);var ae=function(){B<re-1&&k(B+1)},ye=function(){B>0&&k(B-1)},be=function(){var ne=1+B*N,le=N*(B+1)>L?L:N*(B+1);return(0,$.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ne+"-"+le+" "+K+" "+L})};return(0,$.jsxs)("div",{className:v()(P()["pagination-wrapper"]),children:[(0,$.jsx)("span",{style:{marginRight:"26px"},children:W}),(0,$.jsx)("select",{style:{marginRight:"25px"},value:N,onChange:function(ne){return V(ne)},children:R.map(function(q){return(0,$.jsx)("option",{value:q,children:q},q)})}),be(),(0,$.jsx)(x,{tabIndex:B!==0?0:void 0,className:v()(P()["pagination-icon"],(G={},G[P()["pagination-icon--disabled"]]=B===0,G)),onClick:function(){return k(0)},onKeyUp:function(ne){(ne.key==="Enter"||ne.key===" ")&&k(0)},"data-testid":"first-page-icon"}),(0,$.jsx)(c,{tabIndex:B!==0?0:void 0,className:v()(P()["pagination-icon"],(Q={},Q[P()["pagination-icon--disabled"]]=B===0,Q)),onClick:function(){return ye()},onKeyUp:function(ne){(ne.key==="Enter"||ne.key===" ")&&ye()}}),(0,$.jsx)(_,{tabIndex:B!==re-1?0:void 0,className:v()(P()["pagination-icon"],(U={},U[P()["pagination-icon--disabled"]]=B===re-1,U)),onClick:function(){return ae()},onKeyUp:function(ne){(ne.key==="Enter"||ne.key===" ")&&ae()}}),(0,$.jsx)(Z,{tabIndex:B!==re-1?0:void 0,className:v()(P()["pagination-icon"],(A={},A[P()["pagination-icon--disabled"]]=B===re-1,A)),onClick:function(){return k(re-1)},onKeyUp:function(ne){(ne.key==="Enter"||ne.key===" ")&&k(re-1)}})]})};te.displayName="Pagination";try{te.displayName="Pagination",te.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},rowsPerPageText:{defaultValue:null,description:"",name:"rowsPerPageText",required:!0,type:{name:"string"}},pageDescriptionText:{defaultValue:null,description:"",name:"pageDescriptionText",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:te.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(F){}},"./src/components/Pagination/index.ts":(a,s,e)=>{"use strict";e.d(s,{t:()=>t.t});var t=e("./src/components/Pagination/Pagination.tsx")},"./src/components/Panel/Panel.tsx":(a,s,e)=>{"use strict";e.d(s,{s:()=>g,c:()=>u});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),r=e("./src/DesignTokens/index.ts"),m,D,C;function p(){return p=Object.assign?Object.assign.bind():function(y){for(var c=1;c<arguments.length;c++){var h=arguments[c];for(var S in h)Object.prototype.hasOwnProperty.call(h,S)&&(y[S]=h[S])}return y},p.apply(this,arguments)}var M=function(c){return t.createElement("svg",p({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},c),m||(m=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),D||(D=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),C||(C=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},O,j,T;function f(){return f=Object.assign?Object.assign.bind():function(y){for(var c=1;c<arguments.length;c++){var h=arguments[c];for(var S in h)Object.prototype.hasOwnProperty.call(h,S)&&(y[S]=h[S])}return y},f.apply(this,arguments)}var v=function(c){return t.createElement("svg",f({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},c),O||(O=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),T||(T=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},E=e("./src/components/Panel/Panel.module.css"),P=e.n(E),b=e("./node_modules/react/jsx-runtime.js"),u;(function(y){y.Success="success",y.Info="info",y.Warning="warning",y.Error="error"})(u||(u={}));var l=function(c){var h=c.size,S=c.variant;switch(S){case u.Info:case u.Error:case u.Warning:return(0,b.jsx)(M,{style:{width:h,height:h},"data-testid":"panel-icon-info"});case u.Success:return(0,b.jsx)(v,{style:{width:h,height:h},"data-testid":"panel-icon-success"})}},_=function(c){var h=c.forceMobileLayout,S=(0,d.a)("(max-width: "+r.T.BreakpointsSm+")");return h?!0:S},i=function(c){var h=c.children;return(0,b.jsx)("div",{className:n()(P()["panel__pointer-position"]),children:h})};i.displayName="defaultRenderArrow";var g=function(c){var h,S=c.renderIcon,x=S===void 0?l:S,I=c.title,Y=c.children,w=c.variant,Z=w===void 0?u.Info:w,$=c.showPointer,ee=$===void 0?!1:$,oe=c.showIcon,J=oe===void 0?!0:oe,_e=c.forceMobileLayout,de=_e===void 0?!1:_e,se=c.renderArrow,te=se===void 0?i:se,F=_({forceMobileLayout:de}),H=F?r.T.ComponentPanelSizeIconXs:r.T.ComponentPanelSizeIconMd;return(0,b.jsxs)("div",{className:n()(P().panel,(h={},h[P()["panel--mobile-layout"]]=F,h)),children:[ee&&te({children:(0,b.jsx)("div",{"data-testid":"panel-pointer",className:n()(P().panel__pointer,P()["panel__pointer--"+Z])})}),(0,b.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(P()["panel__content-wrapper"],P()["panel__content-wrapper--"+Z]),children:[J&&(0,b.jsx)("div",{"data-testid":"panel-icon-wrapper",className:P()["panel__icon-wrapper"],children:x({size:H,variant:Z})}),(0,b.jsxs)("div",{className:P().panel__content,children:[I&&(0,b.jsx)("h2",{className:P().panel__header,children:I}),(0,b.jsx)("div",{className:P().panel__body,children:Y})]})]})]})};g.displayName="Panel";try{g.displayName="Panel",g.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:g.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(y){}},"./src/components/Panel/PopoverPanel.tsx":(a,s,e)=>{"use strict";e.d(s,{H:()=>M});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),n=e("./node_modules/classnames/index.js"),d=e.n(n),r=e("./src/components/Panel/Panel.tsx"),m=e("./src/components/Panel/PopoverPanel.module.css"),D=e.n(m),C=e("./node_modules/react/jsx-runtime.js"),p=function(T){var f=T.children;return(0,C.jsx)(o.Eh,{className:d()(D()["popover-panel__arrow"]),asChild:!0,children:f})};p.displayName="renderArrow";var M=function(T){var f=T.children,v=T.variant,E=v===void 0?r.c.Warning:v,P=T.trigger,b=T.side,u=b===void 0?"top":b,l=T.title,_=T.showIcon,i=T.forceMobileLayout,g=T.showPointer,y=g===void 0?!0:g,c=T.onOpenChange,h=T.open,S=h===void 0?!1:h;return(0,C.jsxs)(o.fC,{open:S,onOpenChange:c,children:[(0,C.jsx)(o.xz,{asChild:!0,role:"button",children:P}),(0,C.jsx)(o.VY,{side:u,className:D()["popover-panel"],children:(0,C.jsx)(r.s,{title:l,showIcon:_,forceMobileLayout:i,showPointer:y,variant:E,renderArrow:p,children:f})})]})};M.displayName="PopoverPanel";var O=null;try{M.displayName="PopoverPanel",M.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:M.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(j){}},"./src/components/RadioButton/RadioButton.tsx":(a,s,e)=>{"use strict";e.d(s,{E:()=>v,j:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e.n(r),D=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),p=e.n(C),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx"),O=e("./src/components/RadioButton/RadioButton.module.css"),j=e.n(O),T=e("./node_modules/react/jsx-runtime.js"),f;(function(E){E.Xsmall="xsmall",E.Small="small"})(f||(f={}));var v=function(P){var b=P.checked,u=P.description,l=P.disabled,_=P.error,i=P.hideLabel,g=P.label,y=P.name,c=P.onChange,h=P.radioId,S=P.size,x=S===void 0?f.Small:S,I=P.value;return(0,T.jsx)(M.f,{checked:b,className:p()(j().radio,j()["radio--"+x],b&&j()["radio--checked"],_&&j()["radio--error"],l&&j()["radio--disabled"]),description:u,disabled:l,hideLabel:i,inputId:h,label:g,name:y,onChange:c,size:x===f.Xsmall?M.b.Xsmall:M.b.Small,type:"radio",value:I,children:(0,T.jsx)("span",{className:j()["visible-button"],children:(0,T.jsx)("span",{className:j()["visible-button__checkmark"]})})})};v.displayName="RadioButton";try{v.displayName="RadioButton",v.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},radioId:{defaultValue:null,description:"",name:"radioId",required:!1,type:{name:"string"}},size:{defaultValue:{value:"RadioButtonSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/RadioButton.tsx#RadioButton"]={docgenInfo:v.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/RadioButton.tsx#RadioButton"})}catch(E){}},"./src/components/RadioGroup/RadioGroup.tsx":(a,s,e)=>{"use strict";e.d(s,{DX:()=>Q,Ee:()=>U,YN:()=>G});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.join.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),h=e.n(c),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),x=e.n(S),I=e("./node_modules/react/index.js"),Y=e("./src/components/RadioButton/RadioButton.tsx"),w=e("./src/components/index.ts"),Z=e("./src/hooks/index.ts"),$=e("./src/utils/arrayUtils.ts"),ee=e("./src/components/RadioGroup/RadioGroup.module.css"),oe=e.n(ee),J=e("./node_modules/react/jsx-runtime.js");function _e(A,L){return H(A)||F(A,L)||se(A,L)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(A,L){if(!!A){if(typeof A=="string")return te(A,L);var R=Object.prototype.toString.call(A).slice(8,-1);if(R==="Object"&&A.constructor&&(R=A.constructor.name),R==="Map"||R==="Set")return Array.from(A);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return te(A,L)}}function te(A,L){(L==null||L>A.length)&&(L=A.length);for(var R=0,N=new Array(L);R<L;R++)N[R]=A[R];return N}function F(A,L){var R=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(R!=null){var N=[],V=!0,B=!1,k,W;try{for(R=R.call(A);!(V=(k=R.next()).done)&&(N.push(k.value),!(L&&N.length===L));V=!0);}catch(K){B=!0,W=K}finally{try{!V&&R.return!=null&&R.return()}finally{if(B)throw W}}return N}}function H(A){if(Array.isArray(A))return A}var G;(function(A){A.Xsmall="xsmall",A.Small="small"})(G||(G={}));var Q;(function(A){A.Vertical="vertical",A.Horizontal="horizontal"})(Q||(Q={}));var U=function(L){var R=L.description,N=L.disabled,V=L.error,B=L.items,k=L.legend,W=L.name,K=L.onChange,z=L.size,X=z===void 0?G.Small:z,re=L.value,ce=L.variant,ae=ce===void 0?Q.Vertical:ce;if(!(0,$.zb)(B.map(function(Ee){return Ee.value})))throw Error("Each value in the radio group must be unique.");var ye=(0,I.useState)(re),be=_e(ye,2),q=be[0],ne=be[1];(0,I.useEffect)(function(){ne(re)},[re]);var le=(0,Z.D9)(q);(0,Z.PQ)(function(){K&&!N&&le!==q&&K(q)},[q,N,K]);var ge=function(De){return function(je){return je.target.checked&&ne(De)}},fe=X===G.Xsmall?[w.wO.Xsmall,Y.j.Xsmall]:[w.wO.Small,Y.j.Small],he=_e(fe,2),Oe=he[0],ve=he[1];return(0,J.jsx)(w.C3,{description:R,disabled:N,error:V,legend:k,size:Oe,children:(0,J.jsx)("div",{className:[oe()["radio-group"],oe()["radio-group--"+ae],oe()["radio-group--"+X]].join(" "),role:"radiogroup",children:B.map(function(Ee){return(0,I.createElement)(Y.E,Object.assign({},Ee,{checked:Ee.value===q,disabled:N||Ee.disabled,error:!!V,key:Ee.value,name:W,onChange:ge(Ee.value),size:ve}))})})})};U.displayName="RadioGroup";try{U.displayName="RadioGroup",U.__docgenInfo={description:"",displayName:"RadioGroup",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"RadioItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},size:{defaultValue:{value:"RadioGroupSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"RadioGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/RadioGroup/RadioGroup.tsx#RadioGroup"]={docgenInfo:U.__docgenInfo,name:"RadioGroup",path:"src/components/RadioGroup/RadioGroup.tsx#RadioGroup"})}catch(A){}},"./src/components/SearchField/SearchField.tsx":(a,s,e)=>{"use strict";e.d(s,{U:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/_InputWrapper/index.ts"),T=e("./node_modules/react/jsx-runtime.js"),f=["id","onChange","disabled","label"];function v(b,u){if(b==null)return{};var l=E(b,u),_,i;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(b);for(i=0;i<g.length;i++)_=g[i],!(u.indexOf(_)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,_)||(l[_]=b[_]))}return l}function E(b,u){if(b==null)return{};var l={},_=Object.keys(b),i,g;for(g=0;g<_.length;g++)i=_[g],!(u.indexOf(i)>=0)&&(l[i]=b[i]);return l}var P=function(u){var l=u.id,_=u.onChange,i=u.disabled,g=i===void 0?!1:i,y=u.label,c=v(u,f);return(0,T.jsx)(j.SP,{disabled:g,isSearch:!0,label:y,inputRenderer:function(S){var x=S.className,I=S.variant,Y={id:l,disabled:g,className:O()(x)};return(0,T.jsx)("input",Object.assign({},Y,c,{"data-testid":l+"-"+I,onChange:_}))}})};P.displayName="SearchField";try{P.displayName="SearchField",P.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:P.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(b){}},"./src/components/Select/Select.tsx":(a,s,e)=>{"use strict";e.d(s,{P:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),_=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),g=e.n(i),y=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),c=e("./src/components/_InputWrapper/index.ts"),h=e("./src/components/Select/MultiSelectItem.module.css"),S=e.n(h),x=e("./node_modules/react/jsx-runtime.js"),I=function(A){var L=A.deleteButtonLabel,R=A.disabled,N=A.onDeleteButtonClick,V=A.value;return(0,x.jsxs)("span",{className:S()["multi-select-item"],children:[(0,x.jsx)("span",{children:V}),(0,x.jsx)("button",{"aria-label":L,className:S()["multi-select-item__delete-button"],disabled:R,onClick:N,children:(0,x.jsx)("span",{className:S()["multi-select-item__delete-button__cross"]})})]})};I.displayName="MultiSelectItem";try{I.displayName="MultiSelectItem",I.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:I.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(U){}var Y=e("./src/hooks/index.ts"),w=e("./src/components/Select/Select.module.css"),Z=e.n(w);function $(U){return J(U)||oe(U)||se(U)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(U){if(typeof Symbol!="undefined"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}function J(U){if(Array.isArray(U))return te(U)}function _e(U,A){return H(U)||F(U,A)||se(U,A)||de()}function de(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(U,A){if(!!U){if(typeof U=="string")return te(U,A);var L=Object.prototype.toString.call(U).slice(8,-1);if(L==="Object"&&U.constructor&&(L=U.constructor.name),L==="Map"||L==="Set")return Array.from(U);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return te(U,A)}}function te(U,A){(A==null||A>U.length)&&(A=U.length);for(var L=0,R=new Array(A);L<A;L++)R[L]=U[L];return R}function F(U,A){var L=U==null?null:typeof Symbol!="undefined"&&U[Symbol.iterator]||U["@@iterator"];if(L!=null){var R=[],N=!0,V=!1,B,k;try{for(L=L.call(U);!(N=(B=L.next()).done)&&(R.push(B.value),!(A&&R.length===A));N=!0);}catch(W){V=!0,k=W}finally{try{!N&&L.return!=null&&L.return()}finally{if(V)throw k}}return R}}function H(U){if(Array.isArray(U))return U}var G={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Q=function(A){var L=A.disabled,R=A.error,N=A.hideLabel,V=A.inputId,B=A.label,k=A.multiple,W=A.onChange,K=A.options,z=A.value,X=K.map(function(ue){return ue.value});if(X.length!==new Set(X).size)throw Error("Each value in the option list must be unique.");var re=(0,_.useState)(k?z!=null?z:[]:[]),ce=_e(re,2),ae=ce[0],ye=ce[1],be=(0,_.useState)(k?void 0:z),q=_e(be,2),ne=q[0],le=q[1],ge=K.findIndex(function(ue){return ue.value===ne}),fe=(0,_.useState)(!1),he=_e(fe,2),Oe=he[0],ve=he[1];(0,Y.OR)("click",function(){return ve(!1)}),(0,Y.OR)("keydown",function(){return ve(!0)});var Ee=(0,_.useState)(!1),De=_e(Ee,2),je=De[0],Te=De[1],ie=(0,_.useRef)(null),me=(0,_.useRef)(null);(0,_.useEffect)(function(){var ue=ie.current;if(ue){var pe=ue.offsetHeight,Pe=ue.getElementsByTagName("li")[0].offsetHeight,Re=ue.scrollTop,Ae=Re+pe,Ie=ge*Pe,Ve=Ie+Pe,ze=Ie>=Re&&Ve<=Ae;ze||(Ie<Re?ue.scrollTop=Ie:ue.scrollTop=Ve-pe)}},[ge]);var Ce=function(pe){var Pe;return(Pe=K.find(function(Re){return Re.value===pe}))!==null&&Pe!==void 0?Pe:{label:"",value:""}},xe=function(pe,Pe){ae!=null&&ae.length||le(Pe),ye(pe),W&&W(pe)},Be=function(pe){le(pe),Te(!1),W&&W(pe)},ke=function(pe){k?ae.includes(pe)?We(pe):xe([].concat($(ae),[pe]),pe):Be(pe)},We=function(pe){xe(ae.filter(function(Pe){return Pe!==pe}),pe)},Ke=function(){xe([])},Ne=(0,_.useCallback)(function(){if(ne===void 0)le(K[0].value);else{var ue=ge+1;ue>=0&&ue<K.length&&le(K[ue].value)}Te(!0)},[ne,ge,le,K]),we=(0,_.useCallback)(function(){if(ne===void 0)le(K[K.length-1].value);else{var ue=ge-1;ue>=0&&ue<K.length&&le(K[ue].value)}Te(!0)},[ne,ge,le,K]);(0,Y.OG)(G.ArrowDown,function(){return je&&Ne()}),(0,Y.OG)(G.ArrowUp,function(){return je&&we()}),(0,Y.OG)(G.Enter,function(){return je&&k&&ne&&ke(ne)});var Me=function(pe){return ne===pe},Se=function(pe){return k?ae.includes(pe):Me(pe)},Le=(0,_.useId)(),Ue=me.current?"calc("+me.current.offsetWidth+"px + 2 * "+y.component.input.border_width.default.value+")":void 0;return(0,x.jsxs)("div",{className:g()(Z().select,Z()["select--"+(k?"multiple":"single")],je&&Z()["select--expanded"],L&&Z()["select--disabled"],Oe&&Z()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,x.jsx)(c.SP,{disabled:L,inputId:V,inputRenderer:function(pe){var Pe=pe.className,Re=pe.inputId;return(0,x.jsxs)("span",{className:g()(Pe,Z().select__field),ref:me,children:[k&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:Z()["select--multiple__field__values"],children:ae.map(Ce).map(function(Ae){return(0,x.jsx)(I,{deleteButtonLabel:Ae.deleteButtonLabel,disabled:L!=null?L:!1,onDeleteButtonClick:function(){return We(Ae.value)},value:Ae.value},Ae.value)})}),(0,x.jsx)("button",{"aria-label":A.deleteButtonLabel,className:Z()["select--multiple__field__delete-button"],disabled:!ae.length||L,onClick:function(){return Ke()},children:(0,x.jsx)("span",{className:Z()["select--multiple__field__delete-button__cross"]})})]}),(0,x.jsxs)("button",{"aria-controls":Le,"aria-expanded":je,"aria-label":B,className:Z().select__field__button,disabled:L,id:Re,onBlur:function(){return Te(!1)},onClick:function(){return Te(!je)},onKeyDown:function(Ie){Object.values(G).includes(Ie.key)&&(Ie.preventDefault(),Te(!0))},role:"combobox",value:k?ae:ne,children:[!k&&(0,x.jsx)("span",{className:Z()["select--single__field__value"],children:Ce(ne).label}),(0,x.jsx)("span",{className:Z()["select__field__arrow-wrapper"],children:(0,x.jsx)("span",{className:Z()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!R,label:N?void 0:B,noFocusEffect:k,noPadding:!0,readOnly:!1}),(0,x.jsx)("ul",{className:Z()["select__option-list"],id:Le,ref:ie,role:"listbox",style:{width:Ue},children:K.map(function(ue){return(0,x.jsx)("li",{"aria-selected":Se(ue.value),className:g()(Z()["select__option-list__option"],Se(ue.value)&&Z()["select__option-list__option--selected"],k&&Me(ue.value)&&Z()["select--multiple__option-list__option--focused"]),onClick:function(){return ke(ue.value)},onMouseDown:function(Pe){return Pe.preventDefault()},onKeyDown:function(Pe){return Pe.preventDefault()},role:"option",value:ue.value,children:ue.label},ue.value)})})]})};Q.displayName="Select";try{Q.displayName="Select",Q.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Q.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(U){}},"./src/components/SvgIcon/index.ts":(a,s,e)=>{"use strict";e.d(s,{l:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),m=["svgIconComponent"];function D(M,O){if(M==null)return{};var j=C(M,O),T,f;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(M);for(f=0;f<v.length;f++)T=v[f],!(O.indexOf(T)>=0)&&(!Object.prototype.propertyIsEnumerable.call(M,T)||(j[T]=M[T]))}return j}function C(M,O){if(M==null)return{};var j={},T=Object.keys(M),f,v;for(v=0;v<T.length;v++)f=T[v],!(O.indexOf(f)>=0)&&(j[f]=M[f]);return j}var p=function(O){var j=O.svgIconComponent,T=D(O,m);return(0,r.isValidElement)(j)?(0,r.cloneElement)(j,Object.assign({},T)):null};try{p.displayName="SvgIcon",p.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:p.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(M){}},"./src/components/Table/Context.ts":(a,s,e)=>{"use strict";e.d(s,{$K:()=>C,$e:()=>o,Je:()=>r,Sh:()=>d,XS:()=>n,wv:()=>D});var t=e("./node_modules/react/index.js"),o;(function(p){p.Header="header",p.Body="body",p.Footer="footer"})(o||(o={}));var n=(0,t.createContext)(void 0),d=function(){var M=(0,t.useContext)(n);if(M===void 0)throw new Error("useTableContext must be used within a TableContext");return M},r=(0,t.createContext)(void 0),m=function(){var M=useContext(r);if(M===void 0)throw new Error("useTableContext must be used within a TableContext");return M},D=(0,t.createContext)({variantStandard:o.Body}),C=function(){var M=(0,t.useContext)(D);if(M===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return M}},"./src/components/Table/Table.tsx":(a,s,e)=>{"use strict";e.d(s,{i:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/Table/Table.module.css"),T=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),E=["children","selectRows","onChange","selectedValue","className"];function P(_,i){if(_==null)return{};var g=b(_,i),y,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(c=0;c<h.length;c++)y=h[c],!(i.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,y)||(g[y]=_[y]))}return g}function b(_,i){if(_==null)return{};var g={},y=Object.keys(_),c,h;for(h=0;h<y.length;h++)c=y[h],!(i.indexOf(c)>=0)&&(g[c]=_[c]);return g}var u=function(i){var g=i.children,y=i.selectRows,c=y===void 0?!1:y,h=i.onChange,S=i.selectedValue,x=i.className,I=P(i,E);return(0,v.jsx)("table",Object.assign({},I,{className:O()(T().Table,x),children:(0,v.jsx)(f.XS.Provider,{value:{selectRows:c,onChange:h,selectedValue:S},children:g})}))};u.displayName="Table";var l=null;try{u.displayName="Table",u.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:u.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(_){}},"./src/components/Table/TableBody.tsx":(a,s,e)=>{"use strict";e.d(s,{R:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/Table/TableBody.module.css"),T=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),E=["children","className"];function P(_,i){if(_==null)return{};var g=b(_,i),y,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(c=0;c<h.length;c++)y=h[c],!(i.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,y)||(g[y]=_[y]))}return g}function b(_,i){if(_==null)return{};var g={},y=Object.keys(_),c,h;for(h=0;h<y.length;h++)c=y[h],!(i.indexOf(c)>=0)&&(g[c]=_[c]);return g}var u=function(i){var g=i.children,y=i.className,c=P(i,E),h=f.$e.Body;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:h},children:(0,v.jsx)("tbody",Object.assign({},c,{className:O()(T().TableBody,y),children:g}))})};u.displayName="TableBody";var l=null;try{u.displayName="TableBody",u.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:u.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(_){}},"./src/components/Table/TableCell.tsx":(a,s,e)=>{"use strict";e.d(s,{Sr:()=>b,pj:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),m=e("./node_modules/classnames/index.js"),D=e.n(m),C=e("./src/components/Table/TableCell.module.css"),p=e.n(C),M=e("./src/components/Table/Context.ts"),O;function j(){return j=Object.assign?Object.assign.bind():function(_){for(var i=1;i<arguments.length;i++){var g=arguments[i];for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&(_[y]=g[y])}return _},j.apply(this,arguments)}var T=function(i){return r.createElement("svg",j({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},i),O||(O=r.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},f=e("./node_modules/react/jsx-runtime.js"),v=["children","variant","onChange","sortDirecton","sortKey","className"];function E(_,i){if(_==null)return{};var g=P(_,i),y,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(c=0;c<h.length;c++)y=h[c],!(i.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,y)||(g[y]=_[y]))}return g}function P(_,i){if(_==null)return{};var g={},y=Object.keys(_),c,h;for(h=0;h<y.length;h++)c=y[h],!(i.indexOf(c)>=0)&&(g[c]=_[c]);return g}var b;(function(_){_.Descending="desc",_.Ascending="asc",_.NotSortable="notSortable",_.NotActive="notActive"})(b||(b={}));var u=function(i){var g,y=i.children,c=i.variant,h=i.onChange,S=i.sortDirecton,x=S===void 0?b.NotSortable:S,I=i.sortKey,Y=i.className,w=E(i,v),Z=(0,M.$K)(),$=Z.variantStandard,ee=function(){h!=null&&I!=null&&x!=null&&h({sortedColumn:I,previousSortDirection:x})};return(0,f.jsxs)(f.Fragment,{children:[(c==null?$===M.$e.Header:c==="header")&&(0,f.jsx)("th",Object.assign({},w,{className:D()(p()["header-table-cell"],Y),children:(0,f.jsxs)("div",{className:x!=b.NotSortable?D()(p()["container-sortable"]):D()(p().container),onClick:function(){return ee()},onKeyUp:function(J){(J.key==="Enter"||J.key===" ")&&ee()},role:x!=b.NotSortable?"button":void 0,tabIndex:x!=b.NotSortable?0:void 0,children:[(0,f.jsx)("div",{className:D()(p().input),children:y}),x!=b.NotSortable&&(0,f.jsx)(T,{className:D()(p().icon,(g={},g[p()["icon-asc"]]=x===b.Ascending,g[p()["icon-desc"]]=x===b.Descending,g))})]})})),(c==null?$===M.$e.Body:c==="body")&&(0,f.jsx)("td",Object.assign({},w,{className:D()(p()["body-table-cell"],Y),children:(0,f.jsx)("div",{className:D()(p().input),children:y})})),$===M.$e.Footer&&(0,f.jsx)("td",Object.assign({},w,{className:D()(Y),children:(0,f.jsx)("div",{className:D()(p().input),children:y})}))]})};const l=null;try{u.displayName="TableCell",u.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},sortKey:{defaultValue:null,description:"",name:"sortKey",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:u.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(_){}},"./src/components/Table/TableFooter.tsx":(a,s,e)=>{"use strict";e.d(s,{y:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/Table/TableFooter.module.css"),T=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),E=["children","className"];function P(_,i){if(_==null)return{};var g=b(_,i),y,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(c=0;c<h.length;c++)y=h[c],!(i.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,y)||(g[y]=_[y]))}return g}function b(_,i){if(_==null)return{};var g={},y=Object.keys(_),c,h;for(h=0;h<y.length;h++)c=y[h],!(i.indexOf(c)>=0)&&(g[c]=_[c]);return g}var u=function(i){var g=i.children,y=i.className,c=P(i,E),h=f.$e.Footer;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:h},children:(0,v.jsx)("tfoot",Object.assign({},c,{className:O()(T()["table-footer"],y),children:g}))})};u.displayName="TableFooter";var l=null;try{u.displayName="TableFooter",u.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:u.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(_){}},"./src/components/Table/TableHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{x:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/Table/TableHeader.module.css"),T=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),E=["children","className"];function P(l,_){if(l==null)return{};var i=b(l,_),g,y;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(y=0;y<c.length;y++)g=c[y],!(_.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,g)||(i[g]=l[g]))}return i}function b(l,_){if(l==null)return{};var i={},g=Object.keys(l),y,c;for(c=0;c<g.length;c++)y=g[c],!(_.indexOf(y)>=0)&&(i[y]=l[y]);return i}var u=function(_){var i=_.children,g=_.className,y=P(_,E),c=f.$e.Header;return(0,v.jsx)(f.wv.Provider,{value:{variantStandard:c},children:(0,v.jsx)("thead",Object.assign({},y,{className:O()(T()["table-header"],g),children:i}))})};u.displayName="TableHeader";try{u.displayName="TableHeader",u.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:u.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(l){}},"./src/components/Table/TableRow.tsx":(a,s,e)=>{"use strict";e.d(s,{S:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/Table/TableRow.module.css"),T=e.n(j),f=e("./src/components/Table/Context.ts"),v=e("./node_modules/react/jsx-runtime.js"),E=["children","rowData","selectSort","className"];function P(_,i){if(_==null)return{};var g=b(_,i),y,c;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(_);for(c=0;c<h.length;c++)y=h[c],!(i.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(_,y)||(g[y]=_[y]))}return g}function b(_,i){if(_==null)return{};var g={},y=Object.keys(_),c,h;for(h=0;h<y.length;h++)c=y[h],!(i.indexOf(c)>=0)&&(g[c]=_[c]);return g}var u=function(i){var g,y=i.children,c=i.rowData,h=i.selectSort,S=h===void 0?"":h,x=i.className,I=P(i,E),Y=(0,f.$K)(),w=Y.variantStandard,Z=(0,f.Sh)(),$=Z.onChange,ee=Z.selectedValue,oe=Z.selectRows,J=function(){$!=null&&oe&&w===f.$e.Body&&c&&$({selectedValue:c})},_e=JSON.stringify(c)===JSON.stringify(ee),de=function(te){(te.key==="Enter"||te.key===" ")&&$!=null&&ee&&c&&$({selectedValue:c})};return(0,v.jsx)(f.Je.Provider,{value:{selectSort:S},children:(0,v.jsx)("tr",Object.assign({},I,{className:O()(T().TableRow,(g={},g[T()["table-row--selected"]]=_e,g[T()["table-row--body"]]=w===f.$e.Body&&oe&&!_e,g),x),onClick:J,tabIndex:w===f.$e.Body&&oe?0:void 0,onKeyUp:function(te){return de(te)},children:y}))})};u.displayName="TableRow";var l=null;try{u.displayName="TableRow",u.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:u.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(_){}},"./src/components/Tabs/Tabs.tsx":(a,s,e)=>{"use strict";e.d(s,{m:()=>N});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.some.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),M=e.n(p),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),j=e.n(O),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.map.js"),f=e.n(T),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),E=e.n(v),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(u),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),i=e.n(_),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(g),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),h=e.n(c),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),x=e.n(S),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),Y=e.n(I),w=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),Z=e.n(w),$=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),ee=e.n($),oe=e("./node_modules/react/index.js"),J=e("./node_modules/classnames/index.js"),_e=e.n(J),de=e("./src/utils/arrayUtils.ts"),se=e("./src/hooks/index.ts"),te=e("./src/components/Tabs/Tabs.module.css"),F=e.n(te),H=e("./node_modules/react/jsx-runtime.js");function G(V,B){return R(V)||L(V,B)||U(V,B)||Q()}function Q(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(V,B){if(!!V){if(typeof V=="string")return A(V,B);var k=Object.prototype.toString.call(V).slice(8,-1);if(k==="Object"&&V.constructor&&(k=V.constructor.name),k==="Map"||k==="Set")return Array.from(V);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return A(V,B)}}function A(V,B){(B==null||B>V.length)&&(B=V.length);for(var k=0,W=new Array(B);k<B;k++)W[k]=V[k];return W}function L(V,B){var k=V==null?null:typeof Symbol!="undefined"&&V[Symbol.iterator]||V["@@iterator"];if(k!=null){var W=[],K=!0,z=!1,X,re;try{for(k=k.call(V);!(K=(X=k.next()).done)&&(W.push(X.value),!(B&&W.length===B));K=!0);}catch(ce){z=!0,re=ce}finally{try{!K&&k.return!=null&&k.return()}finally{if(z)throw re}}return W}}function R(V){if(Array.isArray(V))return V}var N=function(B){var k=B.activeTab,W=B.items,K=B.onChange;if(!(0,de.zb)(W.map(function(ie){var me=ie.name;return me})))throw Error("Each tab name must be unique.");if(k!==void 0&&!W.some(function(ie){var me=ie.name;return me===k}))throw Error("The given active tab name must exist in the list of items.");var z=function(me){return W.findIndex(function(Ce){return Ce.name===me})},X=k!=null?k:W[0].name,re=(0,oe.useState)(X),ce=G(re,2),ae=ce[0],ye=ce[1],be=(0,oe.useState)(z(X)),q=G(be,2),ne=q[0],le=q[1];(0,oe.useEffect)(function(){return ye(X)},[X]);var ge=(0,oe.useRef)(null),fe=(0,oe.useId)(),he=W.length-1;(0,se.PQ)(function(){var ie;(ie=ge.current)===null||ie===void 0||ie.querySelectorAll('[role="tab"]')[ne].focus()},[ne]);var Oe=function(me){ae!==me&&K&&K(me),ye(me),le(z(me))},ve=function(){return ne!==void 0&&le(ne===he?0:ne+1)},Ee=function(){return ne!==void 0&&le(ne===0?he:ne-1)},De=function(me){return function(Ce){switch(Ce.key){case"ArrowRight":ve();break;case"ArrowLeft":Ee();break;case"Space":Oe(me)}}},je=function(me){return me.replace(/\s/,"_")},Te=new Map(W.map(function(ie){var me,Ce;return[ie.name,{panelId:(me=ie.panelId)!==null&&me!==void 0?me:fe+"-panel-"+je(ie.name),tabId:(Ce=ie.tabId)!==null&&Ce!==void 0?Ce:fe+"-tab-"+je(ie.name)}]}));return(0,H.jsxs)("div",{className:F().tabs,children:[(0,H.jsx)("div",{className:F().tabs__tablist,ref:ge,role:"tablist",children:W.map(function(ie,me){var Ce=ie.name===ae,xe=Te.get(ie.name),Be=_e()(F().tabs__tablist__tab,Ce&&F()["tabs__tablist__tab--selected"]);return(0,H.jsx)("button",{"aria-controls":xe==null?void 0:xe.panelId,"aria-selected":Ce,className:Be,id:xe==null?void 0:xe.tabId,onClick:function(){return Oe(ie.name)},onKeyDown:De(ie.name),role:"tab",tabIndex:ne===me?0:-1,children:ie.name},ie.name)})}),(0,H.jsx)("hr",{className:F().tabs__divider}),W.map(function(ie){var me=Te.get(ie.name);return(0,H.jsx)("div",{className:F().tabs__tabpanel,"aria-labelledby":me==null?void 0:me.tabId,hidden:ie.name!==ae,id:me==null?void 0:me.panelId,role:"tabpanel",children:ie.content},me==null?void 0:me.panelId)})]})};N.displayName="Tabs";try{N.displayName="Tabs",N.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TabItem[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((name: string) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:N.__docgenInfo,name:"Tabs",path:"src/components/Tabs/Tabs.tsx#Tabs"})}catch(V){}},"./src/components/TextArea/TextArea.tsx":(a,s,e)=>{"use strict";e.d(s,{K:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(D),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./src/components/_InputWrapper/index.ts"),T=e("./src/components/TextArea/TextArea.module.css"),f=e.n(T),v=e("./node_modules/react/jsx-runtime.js"),E=["isValid","disabled","readOnly","resize","label"];function P(l,_){if(l==null)return{};var i=b(l,_),g,y;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);for(y=0;y<c.length;y++)g=c[y],!(_.indexOf(g)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,g)||(i[g]=l[g]))}return i}function b(l,_){if(l==null)return{};var i={},g=Object.keys(l),y,c;for(c=0;c<g.length;c++)y=g[c],!(_.indexOf(y)>=0)&&(i[y]=l[y]);return i}var u=function(_){var i=_.isValid,g=i===void 0?!0:i,y=_.disabled,c=y===void 0?!1:y,h=_.readOnly,S=h===void 0?!1:h,x=_.resize,I=x===void 0?"none":x,Y=_.label,w=P(_,E);return(0,v.jsx)(j.SP,{isValid:g,disabled:c,readOnly:S,label:Y,inputId:w.id,inputRenderer:function($){var ee=$.className,oe=$.inputId;return(0,v.jsx)("textarea",Object.assign({},w,{id:oe,disabled:c,readOnly:Boolean(S),className:O()(ee,f().TextArea,f()["TextArea--resize-"+I])}))}})};u.displayName="TextArea";try{u.displayName="TextArea",u.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:u.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(l){}},"./src/components/TextField/TextField.tsx":(a,s,e)=>{"use strict";e.d(s,{n:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),p=e("./node_modules/react/index.js"),M=e("./node_modules/classnames/index.js"),O=e.n(M),j=e("./node_modules/react-number-format/dist/react-number-format.es.js"),T=function(c){return c.format!==void 0},f=function(c){return c.format===void 0},v=function(c,h){return h&&f(h)?numericFormatter(c,h):h&&T(h)?patternFormatter(c,h):c},E=e("./src/components/_InputWrapper/index.ts"),P=e("./node_modules/react/jsx-runtime.js"),b=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function u(y,c){if(y==null)return{};var h=l(y,c),S,x;if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(y);for(x=0;x<I.length;x++)S=I[x],!(c.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,S)||(h[S]=y[S]))}return h}function l(y,c){if(y==null)return{};var h={},S=Object.keys(y),x,I;for(I=0;I<S.length;I++)x=S[I],!(c.indexOf(x)>=0)&&(h[x]=y[x]);return h}var _=function(c){var h=c.values,S=c.sourceInfo;S.event.target.value=h.value.trim()},i=function(c,h,S){var x=c.target,I=c.key,Y=x.selectionStart,w=x.selectionEnd,Z=x.value,$=Z===void 0?"":Z;if(Y!==null&&w!==null){var ee=$[0]==="-",oe=(h==null?void 0:h.length)||0+(ee?1:0),J=(S==null?void 0:S.length)||0;ee&&w<=oe&&I==="Backspace"?x.setSelectionRange(1,1):x.setSelectionRange(Math.min(Math.max(Y,oe),$.length-J),Math.max(Math.min(w,$.length-J),oe))}},g=function(c){var h=c.id,S=c.onChange,x=c.isValid,I=x===void 0?!0:x,Y=c.disabled,w=Y===void 0?!1:Y,Z=c.readOnly,$=Z===void 0?!1:Z,ee=c.required,oe=ee===void 0?!1:ee,J=c.formatting,_e=c.label,de=u(c,b),se=function(F,H){H.source==="event"&&S&&(_({values:F,sourceInfo:H}),S(H.event))};return(0,P.jsx)(E.SP,{isValid:I,disabled:w,readOnly:$,label:_e,inputId:h,inputRenderer:function(F){var H=F.className,G=F.variant,Q=F.inputId,U={id:Q,readOnly:Boolean($),disabled:w,required:oe,className:O()(H,de.className),style:Object.assign({textAlign:J==null?void 0:J.align},de.style)};return J!=null&&J.number&&f(J.number)?(J.number.prefix&&J.number.prefix[0]==="-"&&(J.number.prefix=" "+J.number.prefix),(0,P.jsx)(j.h3,Object.assign({},U,J.number,de,{"data-testid":Q+"-formatted-number-"+G,onValueChange:se,valueIsNumericString:!0,onKeyDown:function(L){return i(L,J.number.prefix,J.number.suffix)}}))):J!=null&&J.number&&T(J.number)?(0,P.jsx)(j.HH,Object.assign({},U,J.number,de,{"data-testid":Q+"-formatted-number-"+G,onValueChange:se,valueIsNumericString:!0})):(0,P.jsx)("input",Object.assign({},U,de,{"data-testid":Q+"-"+G,onChange:S}))}})};g.displayName="TextField";try{g.displayName="TextField",g.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:g.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(y){}},"./src/components/ToggleButtonGroup/Context.ts":(a,s,e)=>{"use strict";e.d(s,{S:()=>o,z:()=>n});var t=e("./node_modules/react/index.js"),o=(0,t.createContext)(void 0),n=function(){var r=(0,t.useContext)(o);if(r===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return r}},"./src/components/ToggleButtonGroup/ToggleButton.tsx":(a,s,e)=>{"use strict";e.d(s,{C:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),m=e.n(r),D=e("./node_modules/react/jsx-runtime.js"),C=function(M){var O,j=M.children,T=M.value,f=(0,d.z)(),v=f.onChange,E=f.selectedValue,P=function(){v({selectedValue:T})};return(0,D.jsx)("button",{"data-testid":"toggle-button",className:n()(m()["toggle-button"],(O={},O[m()["toggle-button--selected"]]=T===E,O)),onClick:P,type:"button","aria-pressed":T==E,children:j})};C.displayName="ToggleButton";try{C.displayName="ToggleButton",C.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:C.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(p){}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx":(a,s,e)=>{"use strict";e.d(s,{t:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),m=e.n(r),D=e("./node_modules/react/jsx-runtime.js"),C=function(M){var O=M.children,j=M.onChange,T=M.selectedValue,f=function(E){var P=E.selectedValue;j({selectedValue:P})};return(0,D.jsx)(d.S.Provider,{value:{onChange:f,selectedValue:T},children:(0,D.jsx)("div",{className:n()(m()["toggle-button-group"]),"data-testid":"toggle-button-group",children:O})})};C.displayName="ToggleButtonGroup";try{C.displayName="ToggleButtonGroup",C.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:C.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(p){}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx":(a,s,e)=>{"use strict";e.d(s,{b:()=>T,f:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e.n(r),D=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),p=e.n(C),M=e("./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css"),O=e.n(M),j=e("./node_modules/react/jsx-runtime.js"),T;(function(v){v.Xsmall="xsmall",v.Small="small"})(T||(T={}));var f=function(E){var P=E.checked,b=E.children,u=E.className,l=E.description,_=E.disabled,i=E.hideInput,g=E.hideLabel,y=E.inputId,c=E.label,h=E.name,S=E.onChange,x=E.size,I=E.type,Y=E.value,w=(0,D.useId)(),Z=y!=null?y:"input-"+w,$=c?Z+"-label":void 0,ee=l?Z+"-description":void 0,oe=c&&!g;return(0,j.jsxs)("label",{className:p()(O().template,O()["template--"+x],_&&O()["template--disabled"],u),htmlFor:y,children:[!i&&(0,j.jsxs)("span",{className:O()["template__input-wrapper"],children:[(0,j.jsx)("input",{"aria-describedby":ee,"aria-label":oe?void 0:c,"aria-labelledby":oe?$:void 0,checked:P!=null?P:!1,className:O()["template__input-wrapper__input"],disabled:_,id:Z,name:h,onChange:_?void 0:S,type:I,value:Y}),(0,j.jsx)("span",{className:O()["template__input-wrapper__visible-box"],children:b})]}),(oe||l)&&(0,j.jsxs)("span",{className:O()["template__label-and-description"],children:[oe&&(0,j.jsx)("span",{className:O()["template__label-and-description__label"],id:$,children:c}),l&&(0,j.jsx)("span",{className:O()["template__label-and-description__description"],id:ee,children:l})]})]})};f.displayName="CheckboxRadioTemplate";try{f.displayName="CheckboxRadioTemplate",f.__docgenInfo={description:"",displayName:"CheckboxRadioTemplate",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:null,description:"",name:"hideInput",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputWrapperClassName:{defaultValue:null,description:"",name:"inputWrapperClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"]={docgenInfo:f.__docgenInfo,name:"CheckboxRadioTemplate",path:"src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.tsx#CheckboxRadioTemplate"})}catch(v){}},"./src/components/_InputWrapper/index.ts":(a,s,e)=>{"use strict";e.d(s,{SP:()=>b,Hx:()=>r});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),d;(function(u){u.Default="default",u.Error="error",u.Disabled="disabled",u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(d||(d={}));var r;(function(u){u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(r||(r={}));var m;(function(u){u.None="none",u.Error="error",u.Search="search"})(m||(m={}));var D=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},_=l.readOnly,i=_===void 0?!1:_,g=l.disabled,y=g===void 0?!1:g,c=l.isValid,h=c===void 0?!0:c,S=l.isSearch,x=S===void 0?!1:S,I=m.None;return x&&(I=m.Search),y?{variant:d.Disabled,iconVariant:I}:i===!0||i===r.ReadOnlyInfo?{variant:d.ReadOnlyInfo,iconVariant:I}:i===r.ReadOnlyConfirm?{variant:d.ReadOnlyConfirm,iconVariant:I}:h===!1?{variant:d.Error,iconVariant:m.Error}:{variant:d.Default,iconVariant:I}},C;function p(){return p=Object.assign?Object.assign.bind():function(u){for(var l=1;l<arguments.length;l++){var _=arguments[l];for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&(u[i]=_[i])}return u},p.apply(this,arguments)}var M=function(l){return t.createElement("svg",p({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),C||(C=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},O;function j(){return j=Object.assign?Object.assign.bind():function(u){for(var l=1;l<arguments.length;l++){var _=arguments[l];for(var i in _)Object.prototype.hasOwnProperty.call(_,i)&&(u[i]=_[i])}return u},j.apply(this,arguments)}var T=function(l){return t.createElement("svg",j({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),O||(O=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},f=e("./src/components/_InputWrapper/InputWrapper.module.css"),v=e.n(f),E=e("./node_modules/react/jsx-runtime.js"),P=function(l){var _=l.variant,i=l.disabled,g=i===void 0?!1:i;if(_===m.Error)return(0,E.jsx)("div",{className:v().InputWrapper__icon,children:(0,E.jsx)(M,{"data-testid":"input-icon-error"})});if(_===m.Search){var y;return(0,E.jsx)("div",{className:n()(v().InputWrapper__icon,(y={},y[v()["InputWrapper__icon--disabled"]]=g,y)),children:(0,E.jsx)(T,{"data-testid":"input-icon-search"})})}return null};try{P.displayName="Icon",P.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:P.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(u){}var b=function(l){var _,i=l.isValid,g=i===void 0?!0:i,y=l.disabled,c=y===void 0?!1:y,h=l.readOnly,S=h===void 0?!1:h,x=l.isSearch,I=x===void 0?!1:x,Y=l.label,w=l.inputId,Z=l.inputRenderer,$=l.noFocusEffect,ee=l.noPadding,oe=(0,t.useId)(),J=w!=null?w:oe,_e=D({readOnly:S,disabled:c,isValid:g,isSearch:I}),de=_e.variant,se=_e.iconVariant;return(0,E.jsxs)(E.Fragment,{children:[Y&&(0,E.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(v().InputWrapper__label),htmlFor:J,children:Y}),(0,E.jsxs)("div",{"data-testid":"InputWrapper",className:n()(v().InputWrapper,v()["InputWrapper--"+de],(_={},_[v()["InputWrapper--search"]]=I,_[v()["InputWrapper--with-focus-effect"]]=!$,_[v()["InputWrapper--with-padding"]]=!ee,_)),children:[(0,E.jsx)(P,{variant:se,disabled:c}),Z({className:v().InputWrapper__field,inputId:J,variant:de})]})]})};try{b.displayName="InputWrapper",b.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:b.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(u){}},"./src/components/index.ts":(a,s,e)=>{"use strict";e.d(s,{XZ:()=>Y.X,Bc:()=>i.B,C3:()=>$.C,wO:()=>$.w});var t=e("./src/components/Panel/Panel.tsx"),o=e("./src/components/Panel/PopoverPanel.tsx"),n=e("./src/components/CircularProgress/CircularProgress.tsx"),d=e("./src/components/AppWrapper/AppWrapper.tsx"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),m=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),D=e("./src/components/Accordion/Accordion.tsx"),C=e("./src/components/Accordion/AccordionHeader.tsx"),p=e("./src/components/Accordion/AccordionContent.tsx"),M=e("./src/components/Accordion/Context.ts"),O=e("./src/components/Accordion/AccordionIcon.tsx"),j=e("./src/components/Button/index.ts"),T=e("./src/components/Page/Page.tsx"),f=e("./src/components/Page/PageHeader.tsx"),v=e("./src/components/Page/PageContent.tsx"),E=e("./src/components/Page/Context.ts"),P=e("./src/components/List/List.tsx"),b=e("./src/components/List/ListItem.tsx"),u=e("./src/components/List/Context.ts"),l=e("./src/components/TextField/TextField.tsx"),_=e("./src/components/SearchField/SearchField.tsx"),i=e("./src/components/ErrorMessage/ErrorMessage.tsx"),g=e("./src/components/Map/Map.tsx"),y=e("./src/components/Table/Table.tsx"),c=e("./src/components/Table/TableHeader.tsx"),h=e("./src/components/Table/TableRow.tsx"),S=e("./src/components/Table/TableBody.tsx"),x=e("./src/components/Table/TableCell.tsx"),I=e("./src/components/Table/TableFooter.tsx"),Y=e("./src/components/Checkbox/Checkbox.tsx"),w=e("./src/components/TextArea/TextArea.tsx"),Z=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),$=e("./src/components/FieldSet/FieldSet.tsx"),ee=e("./src/components/Pagination/index.ts"),oe=e("./src/components/Select/Select.tsx"),J=e("./src/components/Tabs/Tabs.tsx"),_e=e("./src/components/RadioGroup/RadioGroup.tsx"),de=e("./src/components/RadioButton/RadioButton.tsx")},"./src/hooks/index.ts":(a,s,e)=>{"use strict";e.d(s,{OR:()=>o,OG:()=>n,D9:()=>d,PQ:()=>r});var t=e("./node_modules/react/index.js");function o(m,D){(0,t.useEffect)(function(){return document.addEventListener(m,D),function(){return document.removeEventListener(m,D)}},[m,D])}function n(m,D){(0,t.useEffect)(function(){var C=function(M){M.key===m&&D()};return document.addEventListener("keydown",C),function(){return document.removeEventListener("keydown",C)}},[m,D])}function d(m){var D=(0,t.useRef)();return(0,t.useEffect)(function(){D.current=m},[m]),D.current}var r=function(D,C){var p=(0,t.useRef)(!0);(0,t.useEffect)(function(){if(p.current)p.current=!1;else return D()},C)}},"./src/utils/arrayUtils.ts":(a,s,e)=>{"use strict";e.d(s,{cO:()=>O,zb:()=>T});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),d=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),m=e.n(r),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),C=e.n(D),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e.n(p);function O(f,v){if(f===v)return!0;if(f===void 0||v===void 0||f.length!==v.length)return!1;for(var E in f)if(f[E]!==v[E])return!1;return!0}function j(f){return f[f.length-1]}function T(f){return f.length===new Set(f).size}},"./storybook-init-framework-entry.js":(a,s,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(a,s,e)=>{"use strict";e.d(s,{r:()=>m});var t=e("./node_modules/react/index.js"),o,n,d;function r(){return r=Object.assign?Object.assign.bind():function(D){for(var C=1;C<arguments.length;C++){var p=arguments[C];for(var M in p)Object.prototype.hasOwnProperty.call(p,M)&&(D[M]=p[M])}return D},r.apply(this,arguments)}var m=function(C){return t.createElement("svg",r({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},C),o||(o=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),d||(d=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),r.locals={accordion:"accordion---oQBwV"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),r.locals={container:"container---_OBRF"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.accordion-header---NEcyL {
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
`,""]),r.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),r.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([a.id,`html {
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
`,""]),r.locals={};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.button---AisLs {
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
`,""]),r.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.checkbox---sy8lK {
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
`,""]),r.locals={checkbox:"checkbox---sy8lK","checkbox--compact":"checkbox--compact---SWP0L","checkbox--error":"checkbox--error---dOSpU","checkbox--checked":"checkbox--checked---xvne_","checkbox--disabled":"checkbox--disabled---Q4bxl","checkbox--read-only":"checkbox--read-only---PrpNx","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.checkbox-group---Ws6hw {
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
`,""]),r.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group--vertical":"checkbox-group--vertical---qFiAe","checkbox-group--horizontal":"checkbox-group--horizontal---sbdQV"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.svg---cRnN3 {
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
`,""]),r.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),r.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.field-set---WtvOy {
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
`,""]),r.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.list---Xw1lu {
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
`,""]),r.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),r.locals={container:"container---sf7W5"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.list-item---aLk6z {
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
`,""]),r.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"map---Z2PfI"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),r.locals={page:"page---LVMNK"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),r.locals={"page-content":"page-content---ZIuS7"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.page-header---bt29G {
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
`,""]),r.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.page-icon---mvZDR {
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
`,""]),r.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.pagination-icon---iNvyI {
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
`,""]),r.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`/* breakpoints-xs */
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
`,""]),r.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),r.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.radio---S0hlk {
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
`,""]),r.locals={radio:"radio---S0hlk","radio--small":"radio--small---uN_5E","radio--xsmall":"radio--xsmall---tgsCS","radio--error":"radio--error---tU7TP","radio--checked":"radio--checked---b1pmT","radio--disabled":"radio--disabled---adqq7","visible-button":"visible-button---PkY72","visible-button__checkmark":"visible-button__checkmark---OzITh"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.radio-group---BsvK3 {
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
`,""]),r.locals={"radio-group":"radio-group---BsvK3","radio-group--xsmall":"radio-group--xsmall---x_9yu","radio-group--small":"radio-group--small---GIoae","radio-group--vertical":"radio-group--vertical---YkxyR","radio-group--horizontal":"radio-group--horizontal---T4MpH"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.multi-select-item---KQ3Ws {
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
`,""]),r.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.select---eatbZ {
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
`,""]),r.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`Table {
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
`,""]),r.locals={};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),r.locals={};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),r.locals={TableBody:"TableBody---cpO70"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.header-table-cell---zvgNX {
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
`,""]),r.locals={"header-table-cell":"header-table-cell---zvgNX","body-table-cell":"body-table-cell---cCxyS",image:"image---Jz7hI",input:"input---jn1Id","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-footer":"table-footer---fVxHQ"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-header":"table-header---DnjKf"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.TableRow---XoYrl {
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
`,""]),r.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.tabs---dxRcK {
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
`,""]),r.locals={tabs:"tabs---dxRcK",tabs__tablist:"tabs__tablist---_oC5W",tabs__tablist__tab:"tabs__tablist__tab---n25P8","tabs__tablist__tab--selected":"tabs__tablist__tab--selected---kffoD",tabs__divider:"tabs__divider---hR5Rm",tabs__tabpanel:"tabs__tabpanel---FepKw"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.TextArea---kkLod {
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
`,""]),r.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`/* breakpoints-xs */
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
`,""]),r.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.toggle-button-group---xdsvq {
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
`,""]),r.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`/* breakpoints-xs */
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
`,""]),r.locals={container:"container---_zb20"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.template---CPXze {
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
`,""]),r.locals={template:"template---CPXze","template--xsmall":"template--xsmall---mGweJ","template--small":"template--small---Ctnml","template--disabled":"template--disabled---ADFDz","template__input-wrapper":"template__input-wrapper---dLR0V","template__input-wrapper__input":"template__input-wrapper__input---zhrwu","template__input-wrapper__visible-box":"template__input-wrapper__visible-box---fa020","template__label-and-description":"template__label-and-description---z1Efs","template__label-and-description__label":"template__label-and-description__label---Z3XLk","template__label-and-description__description":"template__label-and-description__description---pF8QG"};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>m});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),d=e.n(n),r=d()(o());r.push([a.id,`.InputWrapper---J_oif {
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
`,""]),r.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const m=r},"./src/components/Accordion/Accordion.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Button/Button.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/List/List.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Map/Map.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Page/Page.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/RadioButton/RadioButton.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioButton/RadioButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/RadioGroup/RadioGroup.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/RadioGroup/RadioGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Select/Select.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/Table.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/Tabs/Tabs.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Tabs/Tabs.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_CheckboxRadioTemplate/CheckboxRadioTemplate.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(a,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var d=t(o,n);a.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(a,s,e)=>{var t={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/RadioButton/RadioButton.stories.tsx":"./src/components/RadioButton/RadioButton.stories.tsx","./components/RadioGroup/RadioGroup.stories.tsx":"./src/components/RadioGroup/RadioGroup.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/Tabs/Tabs.stories.tsx":"./src/components/Tabs/Tabs.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,s,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(d){var r=n(d);return e(r)}function n(d){if(!e.o(t,d)){var r=new Error("Cannot find module '"+d+"'");throw r.code="MODULE_NOT_FOUND",r}return t[d]}o.keys=function(){return Object.keys(t)},o.resolve=n,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(a,s,e)=>{"use strict";a=e.nmd(a);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],a,!1)}},a=>{var s=t=>a(a.s=t);a.O(0,[436],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=a.O()}]);
