(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(d,s,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(i){var r=n(i);return e(r)}function n(i){if(!e.o(t,i)){var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}return t[i]}o.keys=function(){return Object.keys(t)},o.resolve=n,d.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>_,__page:()=>a,default:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),T=e.n(y),E=e("./node_modules/react/index.js"),h=e("./node_modules/@mdx-js/react/index.js"),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=["components"];function b(){return b=Object.assign?Object.assign.bind():function(f){for(var S=1;S<arguments.length;S++){var D=arguments[S];for(var A in D)Object.prototype.hasOwnProperty.call(D,A)&&(f[A]=D[A])}return f},b.apply(this,arguments)}function x(f,S){if(f==null)return{};var D=P(f,S),A,G;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(f);for(G=0;G<R.length;G++)A=R[G],!(S.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,A)||(D[A]=f[A]))}return D}function P(f,S){if(f==null)return{};var D={},A=Object.keys(f),G,R;for(R=0;R<A.length;R++)G=A[R],!(S.indexOf(G)>=0)&&(D[G]=f[G]);return D}var v={},u="wrapper";function l(f){var S=f.components,D=x(f,O);return(0,h.mdx)(u,b({},v,D,{components:S,mdxType:"MDXLayout"}),(0,h.mdx)(j.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,h.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,h.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,h.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,h.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,h.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,h.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,h.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,h.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,h.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,h.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,h.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,h.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,h.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,h.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,h.mdx)("ul",null,(0,h.mdx)("li",{parentName:"ul"},(0,h.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,h.mdx)("li",{parentName:"ul"},(0,h.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}l.displayName="MDXContent",l.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var c={title:"Introduksjon",includeStories:["__page"]},m={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,h.mdx)(j.aT,{mdxStoryNameToKey:m,mdxComponentAnnotations:c},(0,h.mdx)(l,null))}});const p=c;var _=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>_,__page:()=>a,default:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),T=e.n(y),E=e("./node_modules/react/index.js"),h=e("./node_modules/@mdx-js/react/index.js"),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),O=["components"];function b(){return b=Object.assign?Object.assign.bind():function(f){for(var S=1;S<arguments.length;S++){var D=arguments[S];for(var A in D)Object.prototype.hasOwnProperty.call(D,A)&&(f[A]=D[A])}return f},b.apply(this,arguments)}function x(f,S){if(f==null)return{};var D=P(f,S),A,G;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(f);for(G=0;G<R.length;G++)A=R[G],!(S.indexOf(A)>=0)&&(!Object.prototype.propertyIsEnumerable.call(f,A)||(D[A]=f[A]))}return D}function P(f,S){if(f==null)return{};var D={},A=Object.keys(f),G,R;for(R=0;R<A.length;R++)G=A[R],!(S.indexOf(G)>=0)&&(D[G]=f[G]);return D}var v={},u="wrapper";function l(f){var S=f.components,D=x(f,O);return(0,h.mdx)(u,b({},v,D,{components:S,mdxType:"MDXLayout"}),(0,h.mdx)(j.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,h.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,h.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,h.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,h.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,h.mdx)("pre",null,(0,h.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}l.displayName="MDXContent",l.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var c={title:"Components/AppWrapper",includeStories:["__page"]},m={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,h.mdx)(j.aT,{mdxStoryNameToKey:m,mdxComponentAnnotations:c},(0,h.mdx)(l,null))}});const p=c;var _=["__page"]},"./.storybook/StoryPage.tsx":(d,s,e)=>{"use strict";e.d(s,{Y:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),M=e("./src/components/AppWrapper/AppWrapper.tsx"),C=e("./node_modules/react/jsx-runtime.js"),y=function(h){var j=h.description;return(0,C.jsxs)(M.O,{children:[(0,C.jsx)(g.Dx,{}),(0,C.jsx)(g.dk,{children:j}),(0,C.jsx)(g.fQ,{includePrimary:!0}),(0,C.jsx)(g.X6,{children:"Props"}),(0,C.jsx)(g.$4,{story:g.Uh})]})};y.displayName="StoryPage";var T=null;try{y.displayName="StoryPage",y.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:y.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(E){}},"./.storybook/preview.js-generated-config-entry.js":(d,s,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>b,parameters:()=>O});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),E=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),j=e("./node_modules/@storybook/theming/dist/esm/index.js"),O={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},j.np.dark),light:Object.assign({},j.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},b=["parameters"],x=e("./node_modules/console-browserify/index.js");function P(l,a){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);a&&(m=m.filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable})),c.push.apply(c,m)}return c}function v(l){for(var a=1;a<arguments.length;a++){var c=arguments[a]!=null?arguments[a]:{};a%2?P(Object(c),!0).forEach(function(m){u(l,m,c[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):P(Object(c)).forEach(function(m){Object.defineProperty(l,m,Object.getOwnPropertyDescriptor(c,m))})}return l}function u(l,a,c){return a in l?Object.defineProperty(l,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[a]=c,l}Object.keys(t).forEach(function(l){var a=t[l];switch(l){case"args":return(0,E.uc)(a);case"argTypes":return(0,E.v9)(a);case"decorators":return a.forEach(function(m){return(0,E.$9)(m,!1)});case"loaders":return a.forEach(function(m){return(0,E.HZ)(m,!1)});case"parameters":return(0,E.h1)(v({},a),!1);case"argTypesEnhancers":return a.forEach(function(m){return(0,E.My)(m)});case"argsEnhancers":return a.forEach(function(m){return(0,E._C)(m)});case"render":return(0,E.$P)(a);case"globals":case"globalTypes":{var c={};return c[l]=a,(0,E.h1)(c,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return x.log(l+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>z,__namedExportsOrder:()=>H,default:()=>ee});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),f=e.n(_),S=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./node_modules/classnames/index.js"),R=e.n(G),te=e("./.storybook/StoryPage.tsx"),K=e("./src/components/Button/index.ts"),oe=e("./src/components/Accordion/Accordion.tsx"),re=e("./src/components/Accordion/AccordionHeader.tsx"),J=e("./src/components/Accordion/AccordionContent.tsx"),Y=e("./src/components/Accordion/Accordion.stories.module.css"),F=e.n(Y),U=e("./src/components/Accordion/Context.ts"),q=e("./node_modules/react/jsx-runtime.js");function w(X,Z){return I(X)||$(X,Z)||V(X,Z)||N()}function N(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V(X,Z){if(!!X){if(typeof X=="string")return Q(X,Z);var ne=Object.prototype.toString.call(X).slice(8,-1);if(ne==="Object"&&X.constructor&&(ne=X.constructor.name),ne==="Map"||ne==="Set")return Array.from(X);if(ne==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ne))return Q(X,Z)}}function Q(X,Z){(Z==null||Z>X.length)&&(Z=X.length);for(var ne=0,de=new Array(Z);ne<Z;ne++)de[ne]=X[ne];return de}function $(X,Z){var ne=X==null?null:typeof Symbol!="undefined"&&X[Symbol.iterator]||X["@@iterator"];if(ne!=null){var de=[],me=!0,ce=!1,ue,Ee;try{for(ne=ne.call(X);!(me=(ue=ne.next()).done)&&(de.push(ue.value),!(Z&&de.length===Z));me=!0);}catch(se){ce=!0,Ee=se}finally{try{!me&&ne.return!=null&&ne.return()}finally{if(ce)throw Ee}}return de}}function I(X){if(Array.isArray(X))return X}var B=`import React, { useState } from 'react';
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
`,L={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},W="";const ee={title:"Components/Accordion",component:oe.U,subcomponents:{AccordionHeader:re._,AccordionContent:J.v},parameters:{design:(0,D.vc)([{type:"figma",url:W},{type:"link",url:W}]),docs:{page:function(){return(0,q.jsx)(te.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:U.Bt.Primary,useActions:!0,subtitle:"Subtitle"}};var k=function(Z){var ne=(0,S.useState)(!1),de=w(ne,2),me=de[0],ce=de[1],ue=(0,S.useState)(!1),Ee=w(ue,2),se=Ee[0],ae=Ee[1],le=function(){ce(!me)},pe=function(){ae(!se)},ge="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",Te=(0,A.D8)(),Oe=w(Te,1),Ce=Oe[0].useActions,he=(0,A.D8)(),De=w(he,1),Se=De[0].subtitle,be=Ce?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{children:"Example setup"}),(0,q.jsx)(K.zx,{variant:K.Wu.Filled,color:K.rp.Primary,size:K.qE.Small,children:"Separat knapp 1"}),(0,q.jsx)(K.zx,{variant:K.Wu.Outline,color:K.rp.Primary,size:K.qE.Small,children:"Separat knapp 2"})]}):void 0,fe=Se.length>0?Se:void 0;return(0,q.jsxs)("div",{className:R()(F().container),children:[(0,q.jsxs)(oe.U,{onClick:le,open:me,iconVariant:Z.iconVariant,children:[(0,q.jsx)(re._,{actions:be,subtitle:fe,children:"Accordion 1"}),(0,q.jsx)(J.v,{children:ge})]}),(0,q.jsxs)(oe.U,{onClick:pe,open:se,iconVariant:Z.iconVariant,children:[(0,q.jsx)(re._,{actions:be,subtitle:fe,children:"Accordion 2"}),(0,q.jsx)(J.v,{children:ge})]})]})};k.displayName="Template";var z=k.bind({});z.args={iconVariant:U.Bt.Primary,open:!1},z.argTypes={open:{control:!1},onClick:{control:!1}},z.parameters={docs:{description:{story:""}}},z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},z.parameters);var H=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>f,FullWidth:()=>_,Primary:()=>v,Secondary:()=>u,SecondaryWithIconNoText:()=>p,Success:()=>l,SuccessWithCustomIcon:()=>m,SuccessWithIcon:()=>c,__namedExportsOrder:()=>S,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),T=e("./src/components/Button/Stories/success.svg"),E=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,j={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const b={title:"Components/Button/Filled",component:y.zx,parameters:{design:(0,g.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,E.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Filled,onClick:function(A){alert(JSON.stringify(A.target.innerHTML)+" clicked!")}}};var x=function(A){return(0,E.jsx)(y.zx,Object.assign({},A))};x.displayName="Template";var P=function(A){return(0,E.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,E.jsx)(y.zx,Object.assign({},A))})};P.displayName="WithinContainerTemplate";var v=x.bind({});v.args={color:y.rp.Primary,children:"Primary button"},v.parameters={docs:{description:{story:""}}};var u=x.bind({});u.args={color:y.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=x.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=x.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var c=x.bind({});c.args={color:y.rp.Success,icon:(0,E.jsx)(M.Z,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var m=x.bind({});m.args={color:y.rp.Success,icon:(0,E.jsx)(T.r,{}),iconPlacement:"left",children:"Button"},m.parameters={docs:{description:{story:""}}};var p=x.bind({});p.args={color:y.rp.Secondary,icon:(0,E.jsx)(M.Z,{})},p.parameters={docs:{description:{story:""}}};var _=P.bind({});_.args={color:y.rp.Primary,icon:(0,E.jsx)(M.Z,{}),fullWidth:!0,children:"Secondary button"},_.parameters={docs:{description:{story:""}}};var f=x.bind({});f.args={children:"Disabled button",disabled:!0},f.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},_.parameters),f.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},f.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>f,FullWidthAndDashedBorder:()=>_,Primary:()=>v,Secondary:()=>u,SecondaryWithIconNoText:()=>p,Success:()=>l,SuccessWithCustomIcon:()=>m,SuccessWithIcon:()=>c,__namedExportsOrder:()=>S,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),T=e("./src/components/Button/Stories/success.svg"),E=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,j={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SecondaryWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidthAndDashedBorder:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const b={title:"Components/Button/Outline",component:y.zx,parameters:{design:(0,g.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,E.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Outline,onClick:function(A){alert(JSON.stringify(A.target.innerHTML)+" clicked!")}}};var x=function(A){return(0,E.jsx)(y.zx,Object.assign({},A))};x.displayName="Template";var P=function(A){return(0,E.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,E.jsx)(y.zx,Object.assign({},A))})};P.displayName="WithinContainerTemplate";var v=x.bind({});v.args={color:y.rp.Primary,children:"Primary button"},v.parameters={docs:{description:{story:""}}};var u=x.bind({});u.args={color:y.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=x.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=x.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var c=x.bind({});c.args={color:y.rp.Success,icon:(0,E.jsx)(M.Z,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var m=x.bind({});m.args={color:y.rp.Success,icon:(0,E.jsx)(T.r,{}),iconPlacement:"left",children:"Button"},m.parameters={docs:{description:{story:""}}};var p=x.bind({});p.args={color:y.rp.Secondary,icon:(0,E.jsx)(M.Z,{})},p.parameters={docs:{description:{story:""}}};var _=P.bind({});_.args={color:y.rp.Primary,icon:(0,E.jsx)(M.Z,{}),fullWidth:!0,dashedBorder:!0,children:"Secondary button"},_.parameters={docs:{description:{story:""}}};var f=x.bind({});f.args={children:"Disabled button",disabled:!0},f.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},_.parameters),f.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},f.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>a,Disabled:()=>f,FullWidth:()=>_,Primary:()=>v,Secondary:()=>u,Success:()=>l,SuccessWithCustomIcon:()=>m,SuccessWithIcon:()=>c,SuccessWithIconNoText:()=>p,__namedExportsOrder:()=>S,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./node_modules/@navikt/ds-icons/esm/Success.js"),C=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Button/index.ts"),T=e("./src/components/Button/Stories/success.svg"),E=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,j={Primary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Secondary:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Success:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},Danger:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithCustomIcon:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},SuccessWithIconNoText:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}},FullWidth:{startLoc:{col:63,line:47},endLoc:{col:1,line:60},startBody:{col:63,line:47},endBody:{col:1,line:60}},Disabled:{startLoc:{col:48,line:46},endLoc:{col:78,line:46},startBody:{col:48,line:46},endBody:{col:78,line:46}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const b={title:"Components/Button/Quiet",component:y.zx,parameters:{design:(0,g.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,E.jsx)(C.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:y.Wu.Quiet,size:y.qE.Small,onClick:function(A){alert(JSON.stringify(A.target.innerHTML)+" clicked!")}}};var x=function(A){return(0,E.jsx)(y.zx,Object.assign({},A))};x.displayName="Template";var P=function(A){return(0,E.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,E.jsx)(y.zx,Object.assign({},A))})};P.displayName="WithinContainerTemplate";var v=x.bind({});v.args={color:y.rp.Primary,children:"Primary button"},v.parameters={docs:{description:{story:""}}};var u=x.bind({});u.args={color:y.rp.Secondary,children:"Secondary button"},u.parameters={docs:{description:{story:""}}};var l=x.bind({});l.args={color:y.rp.Success,children:"Success button"},l.parameters={docs:{description:{story:""}}};var a=x.bind({});a.args={color:y.rp.Danger,children:"Danger button"},a.parameters={docs:{description:{story:""}}};var c=x.bind({});c.args={color:y.rp.Success,icon:(0,E.jsx)(M.Z,{}),iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var m=x.bind({});m.args={color:y.rp.Success,icon:(0,E.jsx)(T.r,{}),iconPlacement:"left",children:"Button"},m.parameters={docs:{description:{story:""}}};var p=x.bind({});p.args={color:y.rp.Success,icon:(0,E.jsx)(M.Z,{})},p.parameters={docs:{description:{story:""}}};var _=P.bind({});_.args={color:y.rp.Primary,icon:(0,E.jsx)(M.Z,{}),fullWidth:!0,children:"Secondary button",iconPlacement:"left"},_.parameters={docs:{description:{story:""}}};var f=x.bind({});f.args={children:"Disabled button",disabled:!0},f.parameters={docs:{description:{story:""}}},v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),l.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},l.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},_.parameters),f.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},f.parameters);var S=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>x,Compact:()=>v,Disabled:()=>u,Error:()=>P,LongText:()=>c,Normal:()=>b,ReadOnly:()=>l,WithDescription:()=>a,WithHiddenLabel:()=>m,__namedExportsOrder:()=>p,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Checkbox/Checkbox.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
        <StoryPage description='Checkbox for boolean or multiple choice values in forms.' />
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
        'This checkbox is supposed to be used when there is an user input error related to it.',
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
`,E={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Checked:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnly:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},LongText:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithHiddenLabel:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},h="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const j={title:"Components/Checkbox",component:C.X,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"Checkbox for boolean or multiple choice values in forms."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var O=function(f){return(0,y.jsx)(C.X,Object.assign({},f))};O.displayName="Template";var b=O.bind({});b.args={},b.parameters={docs:{description:{story:"This is the default checkbox."}}};var x=O.bind({});x.args={checked:!0},x.parameters={docs:{description:{story:"This is a checked checkbox."}}};var P=O.bind({});P.args={error:!0},P.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is an user input error related to it."}}};var v=O.bind({});v.args={compact:!0},v.parameters={docs:{description:{story:"This is the compact checkbox."}}};var u=O.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var l=O.bind({});l.args={readOnly:!0},l.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var a=O.bind({});a.args={description:"Lorem ipsum dolor sit amet."},a.parameters={docs:{description:{story:"This is a checkbox with description."}}};var c=O.bind({});c.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},c.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var m=O.bind({});m.args={hideLabel:!0},m.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},P.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},a.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters);var p=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>P,Disabled:()=>u,Error:()=>v,Horizontal:()=>x,Vertical:()=>b,__namedExportsOrder:()=>l,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,E={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const j={title:"Components/CheckboxGroup",component:C.c,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:C.T.Vertical}};var O=function(c){return(0,y.jsx)(C.c,Object.assign({},c))};O.displayName="Template";var b=O.bind({});b.args={variant:C.T.Vertical},b.parameters={docs:{description:{story:"This is the default setting."}}};var x=O.bind({});x.args={variant:C.T.Horizontal},x.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var P=O.bind({});P.args={compact:!0},P.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var v=O.bind({});v.args={error:"Du m\xE5 velge minst ett av alternativene over."},v.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var u=O.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},P.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},u.parameters);var l=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>b,__namedExportsOrder:()=>x,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/CircularProgress/CircularProgress.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,E={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const j={title:"Components/CircularProgress",component:C.D,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var O=function(v){return(0,y.jsx)(C.D,Object.assign({},v))};O.displayName="CircularTemplate";var b=O.bind({});b.args={width:100,value:60,label:"3/5",id:"progress"},b.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},b.parameters);var x=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>b,__namedExportsOrder:()=>x,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/ErrorMessage/ErrorMessage.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,E={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},h="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const j={title:"Components/ErrorMessage",component:C.B,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var O=function(v){return(0,y.jsx)(C.B,Object.assign({},v,{children:"This is an error message"}))};O.displayName="Template";var b=O.bind({});b.args={},b.parameters={docs:{description:{story:""}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},b.parameters);var x=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>x,Disabled:()=>u,Error:()=>v,Normal:()=>b,WithDescription:()=>P,__namedExportsOrder:()=>l,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/FieldSet/FieldSet.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,E={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},h="";const j={title:"Components/FieldSet",component:C.C,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:C.w.Small}};var O=function(c){return(0,y.jsx)(C.C,Object.assign({},c,{children:c.children}))};O.displayName="Template";var b=O.bind({});b.args={},b.parameters={docs:{description:{story:"This is a normal field set."}}};var x=O.bind({});x.args={size:C.w.Xsmall},x.parameters={docs:{description:{story:"This is a compact field set."}}};var P=O.bind({});P.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},P.parameters={docs:{description:{story:"This is a field set with a description."}}};var v=O.bind({});v.args={error:"Her er det en beskrivende feilmelding."},v.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var u=O.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},P.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},u.parameters);var l=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Dashed:()=>l,Solid:()=>u,__namedExportsOrder:()=>a,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/List/List.tsx"),y=e("./src/components/List/ListItem.tsx"),T=e("./src/components/List/Context.ts"),E=e("./src/components/List/List.stories.modules.css"),h=e.n(E),j=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,b={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},x="";const P={title:"Components/List",component:C.a,parameters:{design:(0,g.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(M.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var v=function(m){return(0,j.jsx)("div",{className:h().container,children:(0,j.jsxs)(C.a,{borderStyle:m.borderStyle,children:[(0,j.jsx)(y.H,{children:"List Item 1"}),(0,j.jsx)(y.H,{children:"List Item 2"}),(0,j.jsx)(y.H,{children:"List Item 3"})]})})};v.displayName="Template";var u=v.bind({});u.args={borderStyle:T.N4.Solid},u.parameters={docs:{description:{story:""}}};var l=v.bind({});l.args={borderStyle:T.N4.Dashed},l.parameters={docs:{description:{story:""}}},u.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},l.parameters);var a=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>Q,GoogleMaps:()=>W,KartverketSea:()=>L,KartverketTerrain:()=>B,MapWithMarkerZoomAndCenter:()=>$,OpenStreetMap:()=>I,__namedExportsOrder:()=>ee,default:()=>N});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),f=e.n(_),S=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./.storybook/StoryPage.tsx"),G=e("./src/components/Map/Map.tsx"),R=e("./node_modules/react/jsx-runtime.js"),te=e("./node_modules/console-browserify/index.js");function K(k,z){return F(k)||Y(k,z)||re(k,z)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(k,z){if(!!k){if(typeof k=="string")return J(k,z);var H=Object.prototype.toString.call(k).slice(8,-1);if(H==="Object"&&k.constructor&&(H=k.constructor.name),H==="Map"||H==="Set")return Array.from(k);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return J(k,z)}}function J(k,z){(z==null||z>k.length)&&(z=k.length);for(var H=0,X=new Array(z);H<z;H++)X[H]=k[H];return X}function Y(k,z){var H=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(H!=null){var X=[],Z=!0,ne=!1,de,me;try{for(H=H.call(k);!(Z=(de=H.next()).done)&&(X.push(de.value),!(z&&X.length===z));Z=!0);}catch(ce){ne=!0,me=ce}finally{try{!Z&&H.return!=null&&H.return()}finally{if(ne)throw me}}return X}}function F(k){if(Array.isArray(k))return k}var U=`import React, { useState } from 'react';
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
`,q={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},w="";const N={title:"Components/Map",component:G.D,parameters:{layout:"fullscreen",design:(0,D.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,R.jsx)(A.Y,{description:"Map component"})}}},args:{}};var V=function(z){var H=(0,S.useState)(z.markerLocation),X=K(H,2),Z=X[0],ne=X[1],de=function(ce){ne(ce),te.log("Map clicked at ["+ce.latitude+","+ce.longitude+"]")};return(0,R.jsx)(G.D,Object.assign({},z,{markerLocation:Z,onClick:de}))};V.displayName="Template";var Q=V.bind({});Q.args={},Q.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var $=V.bind({});$.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},$.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var I=V.bind({});I.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},I.parameters={docs:{description:{story:"OpenStreetMap"}}};var B=V.bind({});B.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},B.parameters={docs:{description:{story:"Kartverket terrain map"}}};var L=V.bind({});L.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},L.parameters={docs:{description:{story:"Kartverket sea map"}}};var W=V.bind({});W.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},W.parameters={docs:{description:{story:"Google Maps"}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters),$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters),I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),B.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},B.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),W.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},W.parameters);var ee=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>l,Success:()=>a,__namedExportsOrder:()=>c,default:()=>v});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./.storybook/StoryPage.tsx"),g=e("./src/components/Page/Context.ts"),M=e("./src/components/Page/PageContent.tsx"),C=e("./src/components/Page/PageHeader.tsx"),y=e("./src/components/Page/Page.tsx"),T,E;function h(){return h=Object.assign?Object.assign.bind():function(m){for(var p=1;p<arguments.length;p++){var _=arguments[p];for(var f in _)Object.prototype.hasOwnProperty.call(_,f)&&(m[f]=_[f])}return m},h.apply(this,arguments)}var j=function(p){return n.createElement("svg",h({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),T||(T=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),E||(E=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},O=e("./node_modules/react/jsx-runtime.js"),b=`import React from 'react';
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
`,x={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},P="";const v={title:"Components/Page",component:y.T,parameters:{design:(0,i.vc)([{type:"figma",url:P},{type:"link",url:P}]),docs:{page:function(){return(0,O.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var u=function(p){return(0,O.jsxs)(y.T,{color:p.color,children:[(0,O.jsx)(C.m,{icon:(0,O.jsx)(j,{}),children:"PageHeader"}),(0,O.jsx)(M.J,{children:"PageContent"})]})};u.displayName="Template";var l=u.bind({});l.args={color:g.gL.Primary},l.parameters={docs:{description:{story:""}}};var a=u.bind({});a.args={color:g.gL.Success},a.parameters={docs:{description:{story:""}}},l.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},a.parameters);var c=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>$,__namedExportsOrder:()=>I,default:()=>V});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),f=e.n(_),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),D=e.n(S),A=e("./node_modules/react/index.js"),G=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./.storybook/StoryPage.tsx"),te=e("./src/components/Pagination/Pagination.tsx"),K=e("./node_modules/react/jsx-runtime.js");function oe(B,L){return U(B)||F(B,L)||J(B,L)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(B,L){if(!!B){if(typeof B=="string")return Y(B,L);var W=Object.prototype.toString.call(B).slice(8,-1);if(W==="Object"&&B.constructor&&(W=B.constructor.name),W==="Map"||W==="Set")return Array.from(B);if(W==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(W))return Y(B,L)}}function Y(B,L){(L==null||L>B.length)&&(L=B.length);for(var W=0,ee=new Array(L);W<L;W++)ee[W]=B[W];return ee}function F(B,L){var W=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(W!=null){var ee=[],k=!0,z=!1,H,X;try{for(W=W.call(B);!(k=(H=W.next()).done)&&(ee.push(H.value),!(L&&ee.length===L));k=!0);}catch(Z){z=!0,X=Z}finally{try{!k&&W.return!=null&&W.return()}finally{if(z)throw X}}return ee}}function U(B){if(Array.isArray(B))return B}var q=`import React, { useState } from 'react';
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
`,w={Example:{startLoc:{col:52,line:38},endLoc:{col:1,line:58},startBody:{col:52,line:38},endBody:{col:1,line:58}}},N="";const V={title:"Components/Pagination",component:te.t,parameters:{design:(0,G.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,K.jsx)(R.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Q=function(L){var W=(0,A.useState)(5),ee=oe(W,2),k=ee[0],z=ee[1],H=(0,A.useState)(0),X=oe(H,2),Z=X[0],ne=X[1],de=function(ce){z(parseInt(ce.target.value,10)),ne(0)};return(0,K.jsx)(te.t,Object.assign({},L,{rowsPerPage:k,currentPage:Z,setCurrentPage:ne,onRowsPerPageChange:de}))};Q.displayName="Template";var $=Q.bind({});$.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20],rowsPerPageText:"Rader per side",pageDescriptionText:"av"},$.parameters={docs:{description:{story:""}}},$.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},$.parameters);var I=["Example"]},"./src/components/Panel/Panel.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>v,Info:()=>x,Success:()=>b,Warning:()=>P,__namedExportsOrder:()=>u,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/Panel/Panel.tsx"),y=e("./node_modules/react/jsx-runtime.js"),T=`import React from 'react';
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
`,E={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const j={title:"Components/Panel",component:C.s,parameters:{design:(0,g.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,y.jsx)(M.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,y.jsx)("div",{children:"Her kommer litt informasjon"})}};var O=function(a){return(0,y.jsx)(C.s,Object.assign({},a))};O.displayName="Template";var b=O.bind({});b.args={variant:C.c.Success},b.parameters={docs:{description:{story:"Success beskrivelse"}}};var x=O.bind({});x.parameters={docs:{description:{story:"Info beskrivelse"}}};var P=O.bind({});P.args={variant:C.c.Warning},P.parameters={docs:{description:{story:"Warning beskrivelse"}}};var v=O.bind({});v.args={variant:C.c.Error},v.parameters={docs:{description:{story:"Error beskrivelse"}}},b.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},b.parameters),x.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},x.parameters),P.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},P.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters);var u=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>W,Info:()=>B,Success:()=>I,Warning:()=>L,__namedExportsOrder:()=>ee,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),f=e.n(_),S=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./.storybook/StoryPage.tsx"),R=e("./src/components/Button/index.ts"),te=e("./src/components/Panel/Panel.tsx"),K=e("./src/components/Panel/PopoverPanel.tsx"),oe=e("./node_modules/react/jsx-runtime.js");function re(k,z){return q(k)||U(k,z)||Y(k,z)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(k,z){if(!!k){if(typeof k=="string")return F(k,z);var H=Object.prototype.toString.call(k).slice(8,-1);if(H==="Object"&&k.constructor&&(H=k.constructor.name),H==="Map"||H==="Set")return Array.from(k);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return F(k,z)}}function F(k,z){(z==null||z>k.length)&&(z=k.length);for(var H=0,X=new Array(z);H<z;H++)X[H]=k[H];return X}function U(k,z){var H=k==null?null:typeof Symbol!="undefined"&&k[Symbol.iterator]||k["@@iterator"];if(H!=null){var X=[],Z=!0,ne=!1,de,me;try{for(H=H.call(k);!(Z=(de=H.next()).done)&&(X.push(de.value),!(z&&X.length===z));Z=!0);}catch(ce){ne=!0,me=ce}finally{try{!Z&&H.return!=null&&H.return()}finally{if(ne)throw me}}return X}}function q(k){if(Array.isArray(k))return k}var w=`import React from 'react';
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
`,N={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},V="";const Q={title:"Components/Panel/PopoverPanel",component:K.H,parameters:{design:(0,D.vc)([{type:"figma",url:V},{type:"link",url:V}]),docs:{page:function(){return(0,oe.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:te.c.Warning,trigger:(0,oe.jsx)("button",{children:"\xC5pne"}),side:"top"}};var $=function(z){var H=(0,A.eJ)(!1),X=re(H,2),Z=X[0],ne=X[1],de=function(){ne(!Z)};return(0,oe.jsx)("div",{children:(0,oe.jsxs)(K.H,{variant:z.variant,side:z.side,title:z.title,open:Z,trigger:(0,oe.jsx)(R.zx,{variant:R.Wu.Filled,color:R.rp.Primary,children:"\xC5pne"}),onOpenChange:ne,showPointer:z.showPointer,showIcon:z.showIcon,forceMobileLayout:z.forceMobileLayout,children:[(0,oe.jsx)("div",{children:"Her kommer litt informasjon"}),(0,oe.jsx)(R.zx,{variant:R.Wu.Filled,color:R.rp.Primary,size:R.qE.Small,onClick:de,children:"Lukk"})]})})};$.displayName="Template";var I=$.bind({});I.args={variant:te.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},I.argTypes={trigger:{control:!1}},I.parameters={docs:{description:{story:""}}};var B=$.bind({});B.args={variant:te.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},B.argTypes={trigger:{control:!1}},B.parameters={docs:{description:{story:""}}};var L=$.bind({});L.args={variant:te.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},L.argTypes={trigger:{control:!1}},L.parameters={docs:{description:{story:""}}};var W=$.bind({});W.args={variant:te.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},W.argTypes={trigger:{control:!1}},W.parameters={docs:{description:{story:""}}},I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),B.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},B.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),W.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},W.parameters);var ee=["Success","Info","Warning","Error"]},"./src/components/SearchField/SearchField.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Q,__namedExportsOrder:()=>$,default:()=>N});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),f=e.n(_),S=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./.storybook/StoryPage.tsx"),R=e("./src/components/SearchField/SearchField.tsx"),te=e("./node_modules/react/jsx-runtime.js");function K(I,B){return F(I)||Y(I,B)||re(I,B)||oe()}function oe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(I,B){if(!!I){if(typeof I=="string")return J(I,B);var L=Object.prototype.toString.call(I).slice(8,-1);if(L==="Object"&&I.constructor&&(L=I.constructor.name),L==="Map"||L==="Set")return Array.from(I);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return J(I,B)}}function J(I,B){(B==null||B>I.length)&&(B=I.length);for(var L=0,W=new Array(B);L<B;L++)W[L]=I[L];return W}function Y(I,B){var L=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(L!=null){var W=[],ee=!0,k=!1,z,H;try{for(L=L.call(I);!(ee=(z=L.next()).done)&&(W.push(z.value),!(B&&W.length===B));ee=!0);}catch(X){k=!0,H=X}finally{try{!ee&&L.return!=null&&L.return()}finally{if(k)throw H}}return W}}function F(I){if(Array.isArray(I))return I}var U=`import React from 'react';
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
`,q={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},w="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const N={title:"Components/SearchField",component:R.U,parameters:{design:(0,D.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,te.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var V=function(B){var L=(0,A.D8)(),W=K(L,1),ee=W[0].disabled;return(0,te.jsx)(R.U,Object.assign({disabled:ee},B))};V.displayName="Template";var Q=V.bind({});Q.args={},Q.parameters={docs:{description:{story:"Search field."}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},Q.parameters);var $=["Example"]},"./src/components/Select/Select.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Multiple:()=>p,MultipleDisabled:()=>_,MultipleError:()=>f,Single:()=>a,SingleDisabled:()=>c,SingleError:()=>m,__namedExportsOrder:()=>S,default:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),g=e.n(r),M=e("./node_modules/react/index.js"),C=e("./node_modules/storybook-addon-designs/esm/index.js"),y=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Select/Select.tsx"),E=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,j={Single:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},Multiple:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}}},O="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",b=[{label:"Agder",value:"Agder"},{label:"Innlandet",value:"Innlandet"},{label:"M\xF8re og Romsdal",value:"M\xF8re og Romsdal"},{label:"Nordland",value:"Nordland"},{label:"Oslo",value:"Oslo"},{label:"Rogaland",value:"Rogaland"},{label:"Vestfold og Telemark",value:"Vestfold og Telemark"},{label:"Troms og Finnmark",value:"Troms og Finnmark"},{label:"Tr\xF8ndelag",value:"Tr\xF8ndelag"},{label:"Vestland",value:"Vestland"},{label:"Viken",value:"Viken"}],x=b.map(function(D){return Object.assign({},D,{deleteButtonLabel:"Slett "+D.label})}),P={label:"Velg et fylke",multiple:!1,options:b},v={deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:x};const u={title:"Components/Select",component:T.P,parameters:{design:(0,C.vc)([{type:"figma",url:O},{type:"link",url:O}]),docs:{page:function(){return(0,E.jsx)(y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:P};var l=function(A){return(0,E.jsx)("div",{style:{width:"440px"},children:(0,E.jsx)(T.P,Object.assign({},A))})};l.displayName="Template";var a=l.bind({});a.args={},a.parameters={docs:{description:{story:"This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."}}};var c=l.bind({});c.args={disabled:!0},c.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var m=l.bind({});m.args={error:!0},m.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}};var p=l.bind({});p.args=v,p.parameters={docs:{description:{story:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed."}}};var _=l.bind({});_.args=Object.assign({},v,{disabled:!0}),_.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var f=l.bind({});f.args=Object.assign({},v,{error:!0}),f.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},a.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},a.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},m.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),_.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},_.parameters),f.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},f.parameters);var S=["Single","SingleDisabled","SingleError","Multiple","MultipleDisabled","MultipleError"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{IconFromNavIconLibrary:()=>u,ImportedCustomIcon:()=>l,__namedExportsOrder:()=>a,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),i=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./node_modules/@navikt/ds-icons/esm/Success.js"),g=e("./.storybook/StoryPage.tsx"),M=e("./src/components/SvgIcon/index.ts"),C,y,T;function E(){return E=Object.assign?Object.assign.bind():function(c){for(var m=1;m<arguments.length;m++){var p=arguments[m];for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(c[_]=p[_])}return c},E.apply(this,arguments)}var h=function(m){return n.createElement("svg",E({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},m),C||(C=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),y||(y=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),T||(T=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},j=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,b={IconFromNavIconLibrary:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}},ImportedCustomIcon:{startLoc:{col:49,line:39},endLoc:{col:1,line:41},startBody:{col:49,line:39},endBody:{col:1,line:41}}},x="";const P={title:"Components/SvgIcon",component:M.l,parameters:{design:(0,i.vc)([{type:"figma",url:x},{type:"link",url:x}]),docs:{page:function(){return(0,j.jsx)(g.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var v=function(m){return(0,j.jsx)(M.l,Object.assign({},m))};v.displayName="Template";var u=v.bind({});u.args={svgIconComponent:(0,j.jsx)(r.Z,{})},u.parameters={docs:{description:{story:"`<SvgIcon svgIconComponent: <SuccessIconNAV />`"}}};var l=v.bind({});l.args={svgIconComponent:(0,j.jsx)(h,{height:"2rem",width:"2rem"})},l.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},l.parameters);var a=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{BasicTable:()=>ce,SelectRows:()=>ue,__namedExportsOrder:()=>Ee,default:()=>Z});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),f=e.n(_),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e.n(S),A=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),G=e.n(A),R=e("./node_modules/react/index.js"),te=e("./node_modules/storybook-addon-designs/esm/index.js"),K=e("./node_modules/classnames/index.js"),oe=e.n(K),re=e("./.storybook/StoryPage.tsx"),J=e("./src/components/Pagination/index.ts"),Y=e("./src/components/Table/Table.tsx"),F=e("./src/components/Table/TableHeader.tsx"),U=e("./src/components/Table/TableCell.tsx"),q=e("./src/components/Table/TableRow.tsx"),w=e("./src/components/Table/TableBody.tsx"),N=e("./src/components/Table/Table.stories.module.css"),V=e.n(N),Q=e("./src/components/Table/TableFooter.tsx"),$=e("./node_modules/react/jsx-runtime.js");function I(se,ae){return k(se)||ee(se,ae)||L(se,ae)||B()}function B(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(se,ae){if(!!se){if(typeof se=="string")return W(se,ae);var le=Object.prototype.toString.call(se).slice(8,-1);if(le==="Object"&&se.constructor&&(le=se.constructor.name),le==="Map"||le==="Set")return Array.from(se);if(le==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(le))return W(se,ae)}}function W(se,ae){(ae==null||ae>se.length)&&(ae=se.length);for(var le=0,pe=new Array(ae);le<ae;le++)pe[le]=se[le];return pe}function ee(se,ae){var le=se==null?null:typeof Symbol!="undefined"&&se[Symbol.iterator]||se["@@iterator"];if(le!=null){var pe=[],ge=!0,Te=!1,Oe,Ce;try{for(le=le.call(se);!(ge=(Oe=le.next()).done)&&(pe.push(Oe.value),!(ae&&pe.length===ae));ge=!0);}catch(he){Te=!0,Ce=he}finally{try{!ge&&le.return!=null&&le.return()}finally{if(Te)throw Ce}}return pe}}function k(se){if(Array.isArray(se))return se}var z=`import React, { useState } from 'react';
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
    idCell: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({ idCell, previousSortDirection }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        idCell: idCell,
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
            id={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.idCell === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            id={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.idCell === 'Produkt'
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
`,H={BasicTable:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}},SelectRows:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}}},X="";const Z={title:"Components/Table",component:Y.i,parameters:{design:(0,te.vc)([{type:"figma",url:X},{type:"link",url:X}]),docs:{page:function(){return(0,$.jsx)(re.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function ne(se,ae,le,pe,ge){return{applicationNr:se,product:ae,status:le,imageSrc:pe,imageAlt:ge}}var de=[ne("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),ne("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),ne("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),ne("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),ne("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),ne("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),ne("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),ne("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],me=function(ae){var le=(0,R.useState)({}),pe=I(le,2),ge=pe[0],Te=pe[1],Oe=(0,R.useState)({idCell:"",sortDirection:U.Sr.NotActive}),Ce=I(Oe,2),he=Ce[0],De=Ce[1],Se=(0,R.useState)(5),be=I(Se,2),fe=be[0],Ie=be[1],Be=(0,R.useState)(0),ke=I(Be,2),Ae=ke[0],Ke=ke[1],Ue=function(je){var xe=je.selectedValue;Te(xe)},Re=function(je){var xe=je.idCell,We=je.previousSortDirection;We===U.Sr.Ascending?De({idCell:xe,sortDirection:U.Sr.Descending}):We===U.Sr.Descending?De({idCell:xe,sortDirection:U.Sr.Ascending}):De({idCell:xe,sortDirection:U.Sr.Descending})},we=function(je){Ie(parseInt(je.target.value,10)),Ke(0)},Ne=function(je){Ke(je)};return(0,$.jsxs)(Y.i,{selectRows:ae.selectRows,onChange:Ue,selectedValue:ge,children:[(0,$.jsx)(F.x,{children:(0,$.jsxs)(q.S,{children:[(0,$.jsx)(U.pj,{onChange:Re,id:"S\xF8knadsnr.",sortDirecton:he.idCell==="S\xF8knadsnr."?he.sortDirection:U.Sr.NotActive,children:"S\xF8knadsnr."}),(0,$.jsx)(U.pj,{id:"Produkt",onChange:Re,sortDirecton:he.idCell==="Produkt"?he.sortDirection:U.Sr.NotActive,children:"Produkt"}),(0,$.jsx)(U.pj,{children:"Status"}),(0,$.jsx)(U.pj,{children:"Bilde"})]})}),(0,$.jsx)(w.R,{children:de.slice(Ae*fe,Ae*fe+fe).map(function(ve){return(0,$.jsxs)(q.S,{rowData:{applicationNr:ve.applicationNr},children:[(0,$.jsx)(U.pj,{children:ve.applicationNr}),(0,$.jsx)(U.pj,{children:ve.product}),(0,$.jsx)(U.pj,{children:ve.status}),(0,$.jsx)(U.pj,{children:(0,$.jsx)("img",{className:oe()(V().checkmark),src:ve.imageSrc,alt:ve.imageAlt})})]},ve.applicationNr)})}),(0,$.jsx)(Q.y,{children:(0,$.jsx)(q.S,{children:(0,$.jsx)(U.pj,{colSpan:4,children:(0,$.jsx)(J.t,{numberOfRows:de.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:fe,onRowsPerPageChange:we,currentPage:Ae,setCurrentPage:Ne,rowsPerPageText:"Rader per side",pageDescriptionText:"av"})})})})]})};me.displayName="Template";var ce=me.bind({});ce.args={selectRows:!1},ce.parameters={docs:{description:{story:""}}};var ue=me.bind({});ue.args={selectRows:!0},ue.parameters={docs:{description:{story:""}}},ce.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    idCell: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({ idCell, previousSortDirection }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        idCell: idCell,
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
            id={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.idCell === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            id={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.idCell === 'Produkt'
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
}`}},ce.parameters),ue.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState({});
  const [selectedSort, setSelectedSort] = useState({
    idCell: '',
    sortDirection: SortDirection.NotActive,
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChange = ({ selectedValue }: ChangeProps) => {
    setSelected(selectedValue);
  };
  const handleSortChange = ({ idCell, previousSortDirection }: SortProps) => {
    if (previousSortDirection === SortDirection.Ascending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Descending,
      });
    } else if (previousSortDirection === SortDirection.Descending) {
      setSelectedSort({
        idCell: idCell,
        sortDirection: SortDirection.Ascending,
      });
    } else {
      setSelectedSort({
        idCell: idCell,
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
            id={'S\xF8knadsnr.'}
            sortDirecton={
              selectedSort.idCell === 'S\xF8knadsnr.'
                ? selectedSort.sortDirection
                : SortDirection.NotActive
            }
          >
            S\xF8knadsnr.
          </TableCell>
          <TableCell
            id={'Produkt'}
            onChange={handleSortChange}
            sortDirecton={
              selectedSort.idCell === 'Produkt'
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
}`}},ue.parameters);var Ee=["BasicTable","SelectRows"]},"./src/components/TextArea/TextArea.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>x,Disabled:()=>l,Error:()=>P,ReadOnlyConfirm:()=>u,ReadOnlyInfo:()=>v,__namedExportsOrder:()=>a,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/_InputWrapper/index.ts"),y=e("./src/components/TextArea/TextArea.tsx"),T=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,h={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const O={title:"Components/TextArea",component:y.K,parameters:{design:(0,g.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,T.jsx)(M.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var b=function(m){return(0,T.jsx)(y.K,Object.assign({},m))};b.displayName="Template";var x=b.bind({});x.args={},x.parameters={docs:{description:{story:"Regular textarea."}}};var P=b.bind({});P.args={isValid:!1},P.parameters={docs:{description:{story:"Textarea displaying error."}}};var v=b.bind({});v.args={readOnly:!0,value:"Some text"},v.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var u=b.bind({});u.args={readOnly:C.Hx.ReadOnlyConfirm,value:"Some text"},u.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var l=b.bind({});l.args={disabled:!0,value:"Some text"},l.parameters={docs:{description:{story:"Textarea as disabled."}}},x.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},P.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},l.parameters);var a=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>x,Disabled:()=>a,Error:()=>v,NumberInput:()=>P,ReadOnlyConfirm:()=>l,ReadOnlyInfo:()=>u,__namedExportsOrder:()=>c,default:()=>O});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/storybook-addon-designs/esm/index.js"),M=e("./.storybook/StoryPage.tsx"),C=e("./src/components/_InputWrapper/index.ts"),y=e("./src/components/TextField/TextField.tsx"),T=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,h={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const O={title:"Components/TextField",component:y.n,parameters:{design:(0,g.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,T.jsx)(M.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var b=function(p){return(0,T.jsx)(y.n,Object.assign({},p))};b.displayName="Template";var x=b.bind({});x.args={},x.parameters={docs:{description:{story:"Regular input field."}}};var P=b.bind({});P.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},P.parameters={docs:{description:{story:"Number input field."}}};var v=b.bind({});v.args={isValid:!1},v.parameters={docs:{description:{story:"Input field displaying error."}}};var u=b.bind({});u.args={readOnly:!0,value:"Some text"},u.parameters={docs:{description:{story:"Input field as readonly-info."}}};var l=b.bind({});l.args={readOnly:C.Hx.ReadOnlyConfirm,value:"Some text"},l.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var a=b.bind({});a.args={disabled:!0,value:"Some text"},a.parameters={docs:{description:{story:"Input field as disabled."}}},x.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},x.parameters),P.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},P.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},u.parameters),l.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},l.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},a.parameters);var c=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(d,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>I,__namedExportsOrder:()=>B,default:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(M),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e.n(y),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(E),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),O=e.n(j),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),x=e.n(b),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(P),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),l=e.n(u),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e.n(a),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(m),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),f=e.n(_),S=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),A=e("./.storybook/StoryPage.tsx"),G=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),R=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),te=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),K=e.n(te),oe=e("./node_modules/react/jsx-runtime.js");function re(L,W){return q(L)||U(L,W)||Y(L,W)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(L,W){if(!!L){if(typeof L=="string")return F(L,W);var ee=Object.prototype.toString.call(L).slice(8,-1);if(ee==="Object"&&L.constructor&&(ee=L.constructor.name),ee==="Map"||ee==="Set")return Array.from(L);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return F(L,W)}}function F(L,W){(W==null||W>L.length)&&(W=L.length);for(var ee=0,k=new Array(W);ee<W;ee++)k[ee]=L[ee];return k}function U(L,W){var ee=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(ee!=null){var k=[],z=!0,H=!1,X,Z;try{for(ee=ee.call(L);!(z=(X=ee.next()).done)&&(k.push(X.value),!(W&&k.length===W));z=!0);}catch(ne){H=!0,Z=ne}finally{try{!z&&ee.return!=null&&ee.return()}finally{if(H)throw Z}}return k}}function q(L){if(Array.isArray(L))return L}var w=`import React, { useState } from 'react';
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
`,N={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},V="";const Q={title:"Components/Toggle button group",component:G.t,parameters:{design:(0,D.vc)([{type:"figma",url:V},{type:"link",url:V}]),docs:{page:function(){return(0,oe.jsx)(A.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var $=function(){var W=(0,S.useState)("left"),ee=re(W,2),k=ee[0],z=ee[1],H=function(Z){var ne=Z.selectedValue;z(ne)};return(0,oe.jsx)("div",{className:K().container,children:(0,oe.jsxs)(G.t,{onChange:H,selectedValue:k,children:[(0,oe.jsx)(R.C,{value:"left",children:"Aktivt valg"}),(0,oe.jsx)(R.C,{value:"right",children:"Mulig valg"})]})})};$.displayName="Template";var I=$.bind({});I.args={},I.argTypes={onChange:{control:!1},selectedValue:{control:!1}},I.parameters={docs:{description:{}}},I.parameters=Object.assign({storySource:{source:`() => {
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
}`}},I.parameters);var B=["Example"]},"./src/DesignTokens/index.ts":(d,s,e)=>{"use strict";e.d(s,{T:()=>x});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),C=e.n(M),y=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),T=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),E=1.6,h=/(\d*\.?\d+)rem(?=\W|$)/gim,j=function(u){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,a=Math.pow(10,l);return Math.round((u+Number.EPSILON)*a)/a},O=function(u){return typeof u=="string"?u.replace(h,function(l,a){var c=j(a*E);return c+"rem"}):u},b={get:function(u,l){if(l in u){var a=u[l];return typeof a=="object"?new Proxy(a,b):O(a)}}},x=new Proxy(y,b),P=new Proxy(T,b)},"./src/components/Accordion/Accordion.tsx":(d,s,e)=>{"use strict";e.d(s,{U:()=>g});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./src/components/Accordion/Accordion.module.css"),i=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),g=function(y){var T=y.children,E=y.open,h=y.onClick,j=y.iconVariant,O=j===void 0?o.Bt.Primary:j,b=(0,t.useId)(),x=(0,t.useId)();return(0,r.jsx)("div",{className:i().accordion,children:(0,r.jsx)(o.SY.Provider,{value:{onClick:h,open:E,headerId:b,contentId:x,iconVariant:O},children:T})})};g.displayName="Accordion";var M=null;try{g.displayName="Accordion",g.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:g.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(C){}},"./src/components/Accordion/AccordionContent.tsx":(d,s,e)=>{"use strict";e.d(s,{v:()=>i});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./node_modules/react/jsx-runtime.js"),i=function(M){var C=M.children,y=(0,o.EF)(),T=y.open,E=y.contentId,h=y.headerId;return(0,n.jsx)("div",{children:T&&(0,n.jsx)("div",{"aria-expanded":T,id:E,"aria-labelledby":h,children:C})})};i.displayName="AccordionContent";var r=null;try{i.displayName="AccordionContent",i.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:i.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(g){}},"./src/components/Accordion/AccordionHeader.tsx":(d,s,e)=>{"use strict";e.d(s,{_:()=>y});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/Accordion/AccordionHeader.module.css"),r=e.n(i),g=e("./src/components/Accordion/Context.ts"),M=e("./src/components/Accordion/AccordionIcon.tsx"),C=e("./node_modules/react/jsx-runtime.js"),y=function(E){var h,j=E.children,O=E.actions,b=E.subtitle,x=(0,g.EF)(),P=x.onClick,v=x.open,u=x.headerId,l=x.contentId;return(0,C.jsxs)("div",{className:n()(r()["accordion-header"],(h={},h[r()["accordion-header--subtitle"]]=b,h)),children:[(0,C.jsx)(M.X,{}),(0,C.jsxs)("button",{className:n()(r()["accordion-header__title"]),"aria-expanded":v,type:"button",onClick:P,id:u,"aria-controls":l,children:[j,(b==null?void 0:b.length)&&(0,C.jsx)("div",{"data-testid":"accordion-header-subtitle",className:n()(r()["accordion-header__subtitle"]),children:b})]}),(0,C.jsx)("div",{className:n()(r()["accordion-header__actions"]),children:O})]})};y.displayName="AccordionHeader";try{y.displayName="AccordionHeader",y.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:y.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(T){}},"./src/components/Accordion/AccordionIcon.tsx":(d,s,e)=>{"use strict";e.d(s,{X:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),i=e.n(n),r=e("./src/components/Accordion/AccordionIcon.module.css"),g=e.n(r),M=e("./src/components/Accordion/Context.ts"),C;function y(){return y=Object.assign?Object.assign.bind():function(P){for(var v=1;v<arguments.length;v++){var u=arguments[v];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(P[l]=u[l])}return P},y.apply(this,arguments)}var T=function(v){return o.createElement("svg",y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),C||(C=o.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},E;function h(){return h=Object.assign?Object.assign.bind():function(P){for(var v=1;v<arguments.length;v++){var u=arguments[v];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(P[l]=u[l])}return P},h.apply(this,arguments)}var j=function(v){return o.createElement("svg",h({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),E||(E=o.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},O=e("./node_modules/react/jsx-runtime.js"),b=function(){var v,u,l=(0,M.EF)(),a=l.onClick,c=l.open,m=l.iconVariant,p=[g()["accordion-icon"],(v={},v[g()["accordion-icon--opened"]]=c,v)],_=(u={height:20,width:20,className:i()(p)},u["data-testid"]=m,u.onClick=a,u);switch(m){case M.Bt.Primary:return(0,O.jsx)(T,Object.assign({},_));case M.Bt.Secondary:return(0,O.jsx)(j,Object.assign({},_))}};const x=null},"./src/components/Accordion/Context.ts":(d,s,e)=>{"use strict";e.d(s,{Bt:()=>o,EF:()=>i,SY:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Secondary="secondary"})(o||(o={}));var n=(0,t.createContext)(void 0),i=function(){var g=(0,t.useContext)(n);if(g===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return g}},"./src/components/AppWrapper/AppWrapper.tsx":(d,s,e)=>{"use strict";e.d(s,{O:()=>M});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),n=e.n(o),i=e("./src/components/AppWrapper/AppWrapper.module.css"),r=e.n(i),g=e("./node_modules/react/jsx-runtime.js"),M=function(y){var T=y.children;return(0,g.jsx)("div",{children:T})};M.displayName="AppWrapper";try{M.displayName="AppWrapper",M.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:M.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(C){}},"./src/components/Button/index.ts":(d,s,e)=>{"use strict";e.d(s,{zx:()=>u,rp:()=>x,qE:()=>b,Wu:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),g=e("./node_modules/classnames/index.js"),M=e.n(g),C=e("./src/components/SvgIcon/index.ts"),y=e("./src/components/Button/Button.module.css"),T=e.n(y),E=e("./node_modules/react/jsx-runtime.js"),h=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"];function j(l,a){if(l==null)return{};var c=O(l,a),m,p;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(l);for(p=0;p<_.length;p++)m=_[p],!(a.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,m)||(c[m]=l[m]))}return c}function O(l,a){if(l==null)return{};var c={},m=Object.keys(l),p,_;for(_=0;_<m.length;_++)p=m[_],!(a.indexOf(p)>=0)&&(c[p]=l[p]);return c}var b;(function(l){l.Small="small",l.Medium="medium",l.Large="large"})(b||(b={}));var x;(function(l){l.Primary="primary",l.Secondary="secondary",l.Success="success",l.Danger="danger",l.Inverted="inverted"})(x||(x={}));var P;(function(l){l.Filled="filled",l.Outline="outline",l.Quiet="quiet"})(P||(P={}));var v=function(a,c){var m,p,_,f=a.children,S=a.color,D=S===void 0?x.Primary:S,A=a.variant,G=A===void 0?P.Filled:A,R=a.size,te=R===void 0?b.Small:R,K=a.fullWidth,oe=K===void 0?!1:K,re=a.dashedBorder,J=re===void 0?!1:re,Y=a.iconPlacement,F=Y===void 0?"left":Y,U=a.icon,q=a.type,w=q===void 0?"button":q,N=a.className,V=j(a,h);return(0,E.jsxs)("button",Object.assign({},V,{ref:c,className:M()(T().button,T()["button--"+te],T()["button--"+G],T()["button--"+D],T()["button--"+G+"--"+D],(m={},m[T()["button--full-width"]]=oe,m),(p={},p[T()["button--dashed-border"]]=J,p),(_={},_[T()["button--only-icon"]]=!f&&U,_),N),type:w,children:[U&&F==="left"&&(0,E.jsx)(C.l,{svgIconComponent:U,className:T().icon}),f,U&&F==="right"&&(0,E.jsx)(C.l,{svgIconComponent:U,className:T().icon})]}))};v.displayName="Button";const u=(0,r.forwardRef)(v)},"./src/components/Checkbox/Checkbox.tsx":(d,s,e)=>{"use strict";e.d(s,{X:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e.n(r),M=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),y=e.n(C),T=e("./src/components/Checkbox/Checkbox.module.css"),E=e.n(T),h=e("./node_modules/react/jsx-runtime.js"),j=function(b){var x=b.checkboxId,P=b.checked,v=b.compact,u=b.description,l=b.disabled,a=b.error,c=b.hideLabel,m=b.label,p=b.name,_=b.onChange,f=b.readOnly,S=(0,M.useId)(),D=x||"checkbox-"+S,A=m?D+"-label":void 0,G=u?D+"-description":void 0,R=m&&!c;return(0,h.jsxs)("label",{className:y()(E().wrapper,P&&E()["wrapper--checked"],a&&E()["wrapper--error"],l&&E()["wrapper--disabled"],v&&E()["wrapper--compact"],f&&E()["wrapper--read-only"]),htmlFor:D,children:[!f&&(0,h.jsxs)("span",{className:E()["checkbox-wrapper"],children:[(0,h.jsx)("input",{"aria-describedby":G,"aria-label":R?void 0:m,"aria-labelledby":R?A:void 0,checked:P!=null?P:!1,className:E().checkbox,disabled:l,id:D,name:p,onChange:l?void 0:_,type:"checkbox"}),(0,h.jsx)("span",{className:E()["visible-box"],children:(0,h.jsx)("span",{className:E()["visible-box__checkmark"]})})]}),(R||u)&&(0,h.jsxs)("span",{className:E()["label-and-description"],children:[R&&(0,h.jsx)("span",{className:E().label,id:D+"-label",children:m}),u&&(0,h.jsx)("span",{className:E().description,id:D+"-description",children:u})]})]})};j.displayName="Checkbox";try{j.displayName="Checkbox",j.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:j.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(O){}},"./src/components/CheckboxGroup/CheckboxGroup.tsx":(d,s,e)=>{"use strict";e.d(s,{c:()=>J,T:()=>K});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),l=e.n(u),a=e("./src/components/index.ts"),c=e("./src/components/FieldSet/FieldSet.tsx");function m(Y,F){if(Y===F)return!0;if(Y===void 0||F===void 0||Y.length!==F.length)return!1;for(var U in Y)if(Y[U]!==F[U])return!1;return!0}var p=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),_=e.n(p),f=e("./node_modules/react/jsx-runtime.js");function S(Y,F){return te(Y)||R(Y,F)||A(Y,F)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(Y,F){if(!!Y){if(typeof Y=="string")return G(Y,F);var U=Object.prototype.toString.call(Y).slice(8,-1);if(U==="Object"&&Y.constructor&&(U=Y.constructor.name),U==="Map"||U==="Set")return Array.from(Y);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return G(Y,F)}}function G(Y,F){(F==null||F>Y.length)&&(F=Y.length);for(var U=0,q=new Array(F);U<F;U++)q[U]=Y[U];return q}function R(Y,F){var U=Y==null?null:typeof Symbol!="undefined"&&Y[Symbol.iterator]||Y["@@iterator"];if(U!=null){var q=[],w=!0,N=!1,V,Q;try{for(U=U.call(Y);!(w=(V=U.next()).done)&&(q.push(V.value),!(F&&q.length===F));w=!0);}catch($){N=!0,Q=$}finally{try{!w&&U.return!=null&&U.return()}finally{if(N)throw Q}}return q}}function te(Y){if(Array.isArray(Y))return Y}var K;(function(Y){Y.Vertical="vertical",Y.Horizontal="horizontal"})(K||(K={}));var oe=function(F,U){switch(U.type){case"check":return F.concat([U.name]);case"uncheck":return F.filter(function(q){return q!==U.name});case"reset":return U.state}},re=function(F){return F.filter(function(U){var q=U.checked;return q}).map(function(U){var q=U.name;return q})},J=function(F){var U=F.compact,q=F.description,w=F.disabled,N=F.error,V=F.items,Q=F.legend,$=F.onChange,I=F.variant,B=I===void 0?K.Vertical:I,L=V.map(function(Z){return Z.name});if(L.length!==new Set(L).size)throw Error("Each name in the checkbox group must be unique.");var W=(0,v.useReducer)(oe,re(V)),ee=S(W,2),k=ee[0],z=ee[1];(0,v.useEffect)(function(){return z({type:"reset",state:re(V)})},[V]);var H=(0,v.useRef)(!0),X=(0,v.useRef)(k);return(0,v.useEffect)(function(){H.current?H.current=!1:$&&!w&&!m(X.current,k)&&($(k),X.current=k)},[k,$,w]),(0,f.jsx)(a.C3,{className:l()(_()["checkbox-group"],U&&_()["checkbox-group--compact"]),description:q,disabled:w,error:N,legend:Q,size:U?c.w.Xsmall:c.w.Small,children:(0,f.jsx)("div",{className:l()(_()["checkbox-group__list"],_()["checkbox-group__list--"+B]),children:V.map(function(Z){return(0,f.jsx)(a.XZ,{checkboxId:Z.checkboxId,checked:k.includes(Z.name),compact:U,description:Z.description,disabled:w||Z.disabled,error:!!N,label:Z.label,name:Z.name,onChange:function(de){z({type:de.target.checked?"check":"uncheck",name:Z.name})}},Z.name)})})})};J.displayName="CheckboxGroup";try{J.displayName="CheckboxGroup",J.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:J.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(Y){}},"./src/components/CircularProgress/CircularProgress.tsx":(d,s,e)=>{"use strict";e.d(s,{D:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/react/index.js"),i=e("./src/DesignTokens/index.ts"),r=e("./src/components/CircularProgress/CircularProgress.module.css"),g=e.n(r),M=e("./node_modules/react/jsx-runtime.js"),C=function(E){var h=E.value,j=E.width,O=j===void 0?70:j,b=E.strokeWidth,x=b===void 0?2.5:b,P=E.ariaLabel,v=E.label,u=E.id,l=u+"-label",a=!P&&v?l:void 0;return(0,M.jsxs)("div",{id:u,className:g().container,style:{width:O+"px"},role:"progressbar","aria-labelledby":a,"aria-label":P,children:[v&&(0,M.jsx)("div",{id:l,className:g().label,children:v}),(0,M.jsxs)("svg",{className:g().svg,viewBox:"0 0 35.8 35.8",children:[(0,M.jsx)(y,{stroke:i.T.ColorsBlue200,strokeWidth:x}),(0,M.jsx)(y,{strokeWidth:x,stroke:i.T.ColorsBlue900,strokeDashoffset:100-h,strokeDasharray:"100 100",className:g().circleTransition})]})]})};C.displayName="CircularProgress";var y=function(E){return(0,M.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},E))};y.displayName="Circle";try{C.displayName="CircularProgress",C.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:C.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(T){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(d,s,e)=>{"use strict";e.d(s,{B:()=>M});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/ErrorMessage/ErrorMessage.module.css"),r=e.n(i),g=e("./node_modules/react/jsx-runtime.js"),M=function(y){var T=y.id,E=y.children,h=y.ariaLabel;return(0,g.jsx)("div",{"data-testid":"ErrorMessage","aria-label":h,id:T,role:"alertdialog",className:n()(r()["error-message-wrapper"]),children:E})};M.displayName="ErrorMessage";try{M.displayName="ErrorMessage",M.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:M.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(C){}},"./src/components/FieldSet/FieldSet.tsx":(d,s,e)=>{"use strict";e.d(s,{C:()=>j,w:()=>h});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),i=e.n(n),r=e("./node_modules/react/index.js"),g=e("./node_modules/classnames/index.js"),M=e.n(g),C=e("./src/components/index.ts"),y=e("./src/components/FieldSet/FieldSet.module.css"),T=e.n(y),E=e("./node_modules/react/jsx-runtime.js"),h;(function(O){O.Xsmall="xsmall",O.Small="small"})(h||(h={}));var j=function(b){var x=b.children,P=b.className,v=b.description,u=b.disabled,l=b.error,a=b.legend,c=b.size,m=c===void 0?h.Small:c;return(0,E.jsxs)("fieldset",{className:M()(T()["field-set"],T()["field-set--"+m],P),disabled:u,children:[a&&(0,E.jsx)("legend",{className:T()["field-set__legend"],children:a}),v&&(0,E.jsx)("p",{className:T()["field-set__description"],children:v}),(0,E.jsx)("div",{className:T()["field-set__content"],children:x}),l&&(0,E.jsx)("div",{className:T()["field-set__error-message"],children:(0,E.jsx)(C.Bc,{children:l})})]})};j.displayName="FieldSet";try{j.displayName="FieldSet",j.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:j.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(O){}},"./src/components/List/Context.ts":(d,s,e)=>{"use strict";e.d(s,{N4:()=>o,UU:()=>i,ZM:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Solid="solid",r.Dashed="dashed"})(o||(o={}));var n=(0,t.createContext)({borderStyle:o.Solid}),i=function(){var g=(0,t.useContext)(n);if(g===void 0)throw new Error("useListContext must be used within a ListContext");return g}},"./src/components/List/List.tsx":(d,s,e)=>{"use strict";e.d(s,{a:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/List/List.module.css"),r=e.n(i),g=e("./src/components/List/Context.ts"),M=e("./node_modules/react/jsx-runtime.js"),C=function(T){var E=T.children,h=T.borderStyle,j=h===void 0?g.N4.Solid:h;return(0,M.jsx)("ul",{className:n()(r().list,r()["list--"+j]),children:(0,M.jsx)(g.ZM.Provider,{value:{borderStyle:j},children:E})})};C.displayName="List";try{C.displayName="List",C.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:C.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(y){}},"./src/components/List/ListItem.tsx":(d,s,e)=>{"use strict";e.d(s,{H:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/List/ListItem.module.css"),r=e.n(i),g=e("./src/components/List/Context.ts"),M=e("./node_modules/react/jsx-runtime.js"),C=function(T){var E=T.children,h=(0,g.UU)(),j=h.borderStyle;return(0,M.jsx)("li",{className:n()(r()["list-item"],r()["list-item--"+j]),children:E})};C.displayName="ListItem";try{C.displayName="ListItem",C.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:C.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(y){}},"./src/components/Map/Map.tsx":(d,s,e)=>{"use strict";e.d(s,{D:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/leaflet/dist/images/marker-icon.png"),i=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),r=e("./node_modules/leaflet/dist/images/marker-shadow.png"),g=e("./node_modules/leaflet/dist/leaflet-src.js"),M=e.n(g),C=e("./node_modules/react-leaflet/lib/MapContainer.js"),y=e("./node_modules/react-leaflet/lib/TileLayer.js"),T=e("./node_modules/react-leaflet/lib/AttributionControl.js"),E=e("./node_modules/react-leaflet/lib/Marker.js"),h=e("./node_modules/react-leaflet/lib/hooks.js"),j=e("./node_modules/react/index.js"),O=e("./src/components/Map/Map.module.css"),b=e.n(O),x=e("./node_modules/leaflet/dist/leaflet.css"),P=e.n(x),v=e("./node_modules/react/jsx-runtime.js"),u={latitude:64.888996,longitude:12.8186054},l=4,a=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],c=function(S){var D=S.readOnly,A=D===void 0?!1:D,G=S.layers,R=G===void 0?a:G,te=S.centerLocation,K=te===void 0?u:te,oe=S.zoom,re=oe===void 0?l:oe,J=S.markerLocation,Y=S.onClick;return(0,v.jsxs)(C.h,{className:b().map,center:p(K),zoom:re,zoomControl:!A,dragging:!A,touchZoom:!A,doubleClickZoom:!A,scrollWheelZoom:!A,attributionControl:!1,children:[R.map(function(F,U){return(0,v.jsx)(y.I,{url:F.url,attribution:F.attribution,subdomains:F.subdomains?F.subdomains:[],opacity:A?.5:1},U)}),(0,v.jsx)(T.z,{prefix:!1}),(0,v.jsx)(m,{markerLocation:J}),(0,v.jsx)(_,{readOnly:A,onClick:Y})]})};c.displayName="Map";function m(f){var S=f.markerLocation,D=(0,g.icon)({iconUrl:n,iconRetinaUrl:i,shadowUrl:r,iconSize:[25,41],iconAnchor:[12,41]});return S?(0,v.jsx)(E.J,{position:p(S),icon:D}):null}function p(f){return[f.latitude,f.longitude]}var _=function(S){var D=S.onClick,A=S.readOnly;return(0,h.zV)({click:function(R){D&&!A&&D({latitude:R.latlng.lat,longitude:R.latlng.lng})}}),null};try{c.displayName="Map",c.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:c.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(f){}},"./src/components/Page/Context.ts":(d,s,e)=>{"use strict";e.d(s,{gL:()=>o,lO:()=>i,z1:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Success="success"})(o||(o={}));var n=(0,t.createContext)({color:o.Primary}),i=function(){var g=(0,t.useContext)(n);if(g===void 0)throw new Error("usePageContext must be used within a PageContext");return g}},"./src/components/Page/Page.tsx":(d,s,e)=>{"use strict";e.d(s,{T:()=>g});var t=e("./node_modules/react/index.js"),o=e("./src/components/Page/Context.ts"),n=e("./src/components/Page/Page.module.css"),i=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),g=function(C){var y=C.children,T=C.color,E=T===void 0?o.gL.Primary:T;return(0,r.jsx)("div",{className:i().page,children:(0,r.jsx)(o.z1.Provider,{value:{color:E},children:y})})};g.displayName="Page";try{g.displayName="Page",g.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:g.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(M){}},"./src/components/Page/PageContent.tsx":(d,s,e)=>{"use strict";e.d(s,{J:()=>M});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/Page/PageContent.module.css"),r=e.n(i),g=e("./node_modules/react/jsx-runtime.js"),M=function(y){var T=y.children;return(0,g.jsx)("div",{className:n()(r()["page-content"]),children:T})};M.displayName="PageContent";try{M.displayName="PageContent",M.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:M.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(C){}},"./src/components/Page/PageHeader.tsx":(d,s,e)=>{"use strict";e.d(s,{m:()=>h});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/Page/Context.ts"),r=e("./src/components/Page/PageHeader.module.css"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e("./src/components/Page/PageIcon.module.css"),y=e.n(C),T=e("./node_modules/react/jsx-runtime.js"),E=function(O){var b=O.icon,x={className:n()(y()["page-icon__element"])};return(0,T.jsx)("div",{className:y()["page-icon"],children:(0,t.cloneElement)(b,Object.assign({},x))})};E.displayName="PageIcon";try{E.displayName="PageIcon",E.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:E.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(j){}var h=function(O){var b=O.children,x=O.icon,P=(0,i.lO)(),v=P.color;return(0,T.jsxs)("header",{className:n()(g()["page-header"],g()["page-header--"+v]),"data-testid":"page-header",children:[x&&(0,T.jsx)(E,{icon:x}),(0,T.jsx)("span",{children:b})]})};h.displayName="PageHeader";try{h.displayName="PageHeader",h.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:h.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(j){}},"./src/components/Pagination/Pagination.tsx":(d,s,e)=>{"use strict";e.d(s,{t:()=>q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),b=e.n(O),x=e("./src/components/Pagination/Pagination.module.css"),P=e.n(x),v,u;function l(){return l=Object.assign?Object.assign.bind():function(w){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var Q in V)Object.prototype.hasOwnProperty.call(V,Q)&&(w[Q]=V[Q])}return w},l.apply(this,arguments)}var a=function(N){return j.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},N),v||(v=j.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=j.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},c,m;function p(){return p=Object.assign?Object.assign.bind():function(w){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var Q in V)Object.prototype.hasOwnProperty.call(V,Q)&&(w[Q]=V[Q])}return w},p.apply(this,arguments)}var _=function(N){return j.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},N),c||(c=j.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),m||(m=j.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},f;function S(){return S=Object.assign?Object.assign.bind():function(w){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var Q in V)Object.prototype.hasOwnProperty.call(V,Q)&&(w[Q]=V[Q])}return w},S.apply(this,arguments)}var D=function(N){return j.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},N),f||(f=j.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},A,G;function R(){return R=Object.assign?Object.assign.bind():function(w){for(var N=1;N<arguments.length;N++){var V=arguments[N];for(var Q in V)Object.prototype.hasOwnProperty.call(V,Q)&&(w[Q]=V[Q])}return w},R.apply(this,arguments)}var te=function(N){return j.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},N),A||(A=j.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),G||(G=j.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},K=e("./node_modules/react/jsx-runtime.js");function oe(w,N){return U(w)||F(w,N)||J(w,N)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(w,N){if(!!w){if(typeof w=="string")return Y(w,N);var V=Object.prototype.toString.call(w).slice(8,-1);if(V==="Object"&&w.constructor&&(V=w.constructor.name),V==="Map"||V==="Set")return Array.from(w);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return Y(w,N)}}function Y(w,N){(N==null||N>w.length)&&(N=w.length);for(var V=0,Q=new Array(N);V<N;V++)Q[V]=w[V];return Q}function F(w,N){var V=w==null?null:typeof Symbol!="undefined"&&w[Symbol.iterator]||w["@@iterator"];if(V!=null){var Q=[],$=!0,I=!1,B,L;try{for(V=V.call(w);!($=(B=V.next()).done)&&(Q.push(B.value),!(N&&Q.length===N));$=!0);}catch(W){I=!0,L=W}finally{try{!$&&V.return!=null&&V.return()}finally{if(I)throw L}}return Q}}function U(w){if(Array.isArray(w))return w}var q=function(N){var V,Q,$,I,B=N.numberOfRows,L=N.rowsPerPageOptions,W=N.rowsPerPage,ee=N.onRowsPerPageChange,k=N.currentPage,z=N.setCurrentPage,H=N.rowsPerPageText,X=N.pageDescriptionText,Z=(0,j.useState)(1),ne=oe(Z,2),de=ne[0],me=ne[1];(0,j.useEffect)(function(){B<W?me(1):me(Math.ceil(B/W))},[W,B]);var ce=function(){k<de-1&&z(k+1)},ue=function(){k>0&&z(k-1)},Ee=function(){var ae=1+k*W,le=W*(k+1)>B?B:W*(k+1);return(0,K.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ae+"-"+le+" "+X+" "+B})};return(0,K.jsxs)("div",{className:b()(P()["pagination-wrapper"]),children:[(0,K.jsx)("span",{style:{marginRight:"26px"},children:H}),(0,K.jsx)("select",{style:{marginRight:"25px"},value:W,onChange:function(ae){return ee(ae)},children:L.map(function(se){return(0,K.jsx)("option",{value:se,children:se},se)})}),Ee(),(0,K.jsx)(D,{tabIndex:k!==0?0:void 0,className:b()(P()["pagination-icon"],(V={},V[P()["pagination-icon--disabled"]]=k===0,V)),onClick:function(){return z(0)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&z(0)},"data-testid":"first-page-icon"}),(0,K.jsx)(_,{tabIndex:k!==0?0:void 0,className:b()(P()["pagination-icon"],(Q={},Q[P()["pagination-icon--disabled"]]=k===0,Q)),onClick:function(){return ue()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ue()}}),(0,K.jsx)(a,{tabIndex:k!==de-1?0:void 0,className:b()(P()["pagination-icon"],($={},$[P()["pagination-icon--disabled"]]=k===de-1,$)),onClick:function(){return ce()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ce()}}),(0,K.jsx)(te,{tabIndex:k!==de-1?0:void 0,className:b()(P()["pagination-icon"],(I={},I[P()["pagination-icon--disabled"]]=k===de-1,I)),onClick:function(){return z(de-1)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&z(de-1)}})]})};q.displayName="Pagination";try{q.displayName="Pagination",q.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},rowsPerPageText:{defaultValue:null,description:"",name:"rowsPerPageText",required:!0,type:{name:"string"}},pageDescriptionText:{defaultValue:null,description:"",name:"pageDescriptionText",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:q.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(w){}},"./src/components/Pagination/index.ts":(d,s,e)=>{"use strict";e.d(s,{t:()=>t.t});var t=e("./src/components/Pagination/Pagination.tsx")},"./src/components/Panel/Panel.tsx":(d,s,e)=>{"use strict";e.d(s,{s:()=>m,c:()=>u});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),r=e("./src/DesignTokens/index.ts"),g,M,C;function y(){return y=Object.assign?Object.assign.bind():function(p){for(var _=1;_<arguments.length;_++){var f=arguments[_];for(var S in f)Object.prototype.hasOwnProperty.call(f,S)&&(p[S]=f[S])}return p},y.apply(this,arguments)}var T=function(_){return t.createElement("svg",y({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),g||(g=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),M||(M=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),C||(C=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},E,h,j;function O(){return O=Object.assign?Object.assign.bind():function(p){for(var _=1;_<arguments.length;_++){var f=arguments[_];for(var S in f)Object.prototype.hasOwnProperty.call(f,S)&&(p[S]=f[S])}return p},O.apply(this,arguments)}var b=function(_){return t.createElement("svg",O({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),E||(E=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),h||(h=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),j||(j=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},x=e("./src/components/Panel/Panel.module.css"),P=e.n(x),v=e("./node_modules/react/jsx-runtime.js"),u;(function(p){p.Success="success",p.Info="info",p.Warning="warning",p.Error="error"})(u||(u={}));var l=function(_){var f=_.size,S=_.variant;switch(S){case u.Info:case u.Error:case u.Warning:return(0,v.jsx)(T,{style:{width:f,height:f},"data-testid":"panel-icon-info"});case u.Success:return(0,v.jsx)(b,{style:{width:f,height:f},"data-testid":"panel-icon-success"})}},a=function(_){var f=_.forceMobileLayout,S=(0,i.a)("(max-width: "+r.T.BreakpointsSm+")");return f?!0:S},c=function(_){var f=_.children;return(0,v.jsx)("div",{className:n()(P()["panel__pointer-position"]),children:f})};c.displayName="defaultRenderArrow";var m=function(_){var f,S=_.renderIcon,D=S===void 0?l:S,A=_.title,G=_.children,R=_.variant,te=R===void 0?u.Info:R,K=_.showPointer,oe=K===void 0?!1:K,re=_.showIcon,J=re===void 0?!0:re,Y=_.forceMobileLayout,F=Y===void 0?!1:Y,U=_.renderArrow,q=U===void 0?c:U,w=a({forceMobileLayout:F}),N=w?r.T.ComponentPanelSizeIconXs:r.T.ComponentPanelSizeIconMd;return(0,v.jsxs)("div",{className:n()(P().panel,(f={},f[P()["panel--mobile-layout"]]=w,f)),children:[oe&&q({children:(0,v.jsx)("div",{"data-testid":"panel-pointer",className:n()(P().panel__pointer,P()["panel__pointer--"+te])})}),(0,v.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(P()["panel__content-wrapper"],P()["panel__content-wrapper--"+te]),children:[J&&(0,v.jsx)("div",{"data-testid":"panel-icon-wrapper",className:P()["panel__icon-wrapper"],children:D({size:N,variant:te})}),(0,v.jsxs)("div",{className:P().panel__content,children:[A&&(0,v.jsx)("h2",{className:P().panel__header,children:A}),(0,v.jsx)("div",{className:P().panel__body,children:G})]})]})]})};m.displayName="Panel";try{m.displayName="Panel",m.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:m.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(p){}},"./src/components/Panel/PopoverPanel.tsx":(d,s,e)=>{"use strict";e.d(s,{H:()=>T});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),n=e("./node_modules/classnames/index.js"),i=e.n(n),r=e("./src/components/Panel/Panel.tsx"),g=e("./src/components/Panel/PopoverPanel.module.css"),M=e.n(g),C=e("./node_modules/react/jsx-runtime.js"),y=function(j){var O=j.children;return(0,C.jsx)(o.Eh,{className:i()(M()["popover-panel__arrow"]),asChild:!0,children:O})};y.displayName="renderArrow";var T=function(j){var O=j.children,b=j.variant,x=b===void 0?r.c.Warning:b,P=j.trigger,v=j.side,u=v===void 0?"top":v,l=j.title,a=j.showIcon,c=j.forceMobileLayout,m=j.showPointer,p=m===void 0?!0:m,_=j.onOpenChange,f=j.open,S=f===void 0?!1:f;return(0,C.jsxs)(o.fC,{open:S,onOpenChange:_,children:[(0,C.jsx)(o.xz,{asChild:!0,role:"button",children:P}),(0,C.jsx)(o.VY,{side:u,className:M()["popover-panel"],children:(0,C.jsx)(r.s,{title:l,showIcon:a,forceMobileLayout:c,showPointer:p,variant:x,renderArrow:y,children:O})})]})};T.displayName="PopoverPanel";var E=null;try{T.displayName="PopoverPanel",T.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:T.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(h){}},"./src/components/SearchField/SearchField.tsx":(d,s,e)=>{"use strict";e.d(s,{U:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/_InputWrapper/index.ts"),j=e("./node_modules/react/jsx-runtime.js"),O=["id","onChange","disabled","label"];function b(v,u){if(v==null)return{};var l=x(v,u),a,c;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(v);for(c=0;c<m.length;c++)a=m[c],!(u.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,a)||(l[a]=v[a]))}return l}function x(v,u){if(v==null)return{};var l={},a=Object.keys(v),c,m;for(m=0;m<a.length;m++)c=a[m],!(u.indexOf(c)>=0)&&(l[c]=v[c]);return l}var P=function(u){var l=u.id,a=u.onChange,c=u.disabled,m=c===void 0?!1:c,p=u.label,_=b(u,O);return(0,j.jsx)(h.SP,{disabled:m,isSearch:!0,label:p,inputRenderer:function(S){var D=S.className,A=S.variant,G={id:l,disabled:m,className:E()(D)};return(0,j.jsx)("input",Object.assign({},G,_,{"data-testid":l+"-"+A,onChange:a}))}})};P.displayName="SearchField";try{P.displayName="SearchField",P.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:P.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(v){}},"./src/components/Select/Select.tsx":(d,s,e)=>{"use strict";e.d(s,{P:()=>$});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),c=e("./node_modules/classnames/index.js"),m=e.n(c),p=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),_=e("./src/components/_InputWrapper/index.ts"),f=e("./src/components/Select/MultiSelectItem.module.css"),S=e.n(f),D=e("./node_modules/react/jsx-runtime.js"),A=function(B){var L=B.deleteButtonLabel,W=B.disabled,ee=B.onDeleteButtonClick,k=B.value;return(0,D.jsxs)("span",{className:S()["multi-select-item"],children:[(0,D.jsx)("span",{children:k}),(0,D.jsx)("button",{"aria-label":L,className:S()["multi-select-item__delete-button"],disabled:W,onClick:ee,children:(0,D.jsx)("span",{className:S()["multi-select-item__delete-button__cross"]})})]})};A.displayName="MultiSelectItem";try{A.displayName="MultiSelectItem",A.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:A.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(I){}function G(I,B){(0,a.useEffect)(function(){var L=function(ee){ee.key===I&&B()};return document.addEventListener("keydown",L),function(){return document.removeEventListener("keydown",L)}},[I,B])}function R(I,B){(0,a.useEffect)(function(){return document.addEventListener(I,B),function(){return document.removeEventListener(I,B)}},[I,B])}var te=e("./src/components/Select/Select.module.css"),K=e.n(te);function oe(I){return Y(I)||J(I)||q(I)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(I){if(typeof Symbol!="undefined"&&I[Symbol.iterator]!=null||I["@@iterator"]!=null)return Array.from(I)}function Y(I){if(Array.isArray(I))return w(I)}function F(I,B){return V(I)||N(I,B)||q(I,B)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(I,B){if(!!I){if(typeof I=="string")return w(I,B);var L=Object.prototype.toString.call(I).slice(8,-1);if(L==="Object"&&I.constructor&&(L=I.constructor.name),L==="Map"||L==="Set")return Array.from(I);if(L==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L))return w(I,B)}}function w(I,B){(B==null||B>I.length)&&(B=I.length);for(var L=0,W=new Array(B);L<B;L++)W[L]=I[L];return W}function N(I,B){var L=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(L!=null){var W=[],ee=!0,k=!1,z,H;try{for(L=L.call(I);!(ee=(z=L.next()).done)&&(W.push(z.value),!(B&&W.length===B));ee=!0);}catch(X){k=!0,H=X}finally{try{!ee&&L.return!=null&&L.return()}finally{if(k)throw H}}return W}}function V(I){if(Array.isArray(I))return I}var Q={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},$=function(B){var L=B.disabled,W=B.error,ee=B.hideLabel,k=B.inputId,z=B.label,H=B.multiple,X=B.onChange,Z=B.options,ne=B.value,de=Z.map(function(_e){return _e.value});if(de.length!==new Set(de).size)throw Error("Each value in the option list must be unique.");var me=(0,a.useState)(H?ne!=null?ne:[]:[]),ce=F(me,2),ue=ce[0],Ee=ce[1],se=(0,a.useState)(H?void 0:ne),ae=F(se,2),le=ae[0],pe=ae[1],ge=Z.findIndex(function(_e){return _e.value===le}),Te=(0,a.useState)(!1),Oe=F(Te,2),Ce=Oe[0],he=Oe[1];R("click",function(){return he(!1)}),R("keydown",function(){return he(!0)});var De=(0,a.useState)(!1),Se=F(De,2),be=Se[0],fe=Se[1],Ie=(0,a.useRef)(null),Be=(0,a.useRef)(null);(0,a.useEffect)(function(){var _e=Ie.current;if(_e){var ie=_e.offsetHeight,ye=_e.getElementsByTagName("li")[0].offsetHeight,Le=_e.scrollTop,Pe=Le+ie,Me=ge*ye,Ve=Me+ye,ze=Me>=Le&&Ve<=Pe;ze||(Me<Le?_e.scrollTop=Me:_e.scrollTop=Ve-ie)}},[ge]);var ke=function(ie){var ye;return(ye=Z.find(function(Le){return Le.value===ie}))!==null&&ye!==void 0?ye:{label:"",value:""}},Ae=function(ie,ye){ue!=null&&ue.length||pe(ye),Ee(ie),X&&X(ie)},Ke=function(ie){pe(ie),fe(!1),X&&X(ie)},Ue=function(ie){H?ue.includes(ie)?Re(ie):Ae([].concat(oe(ue),[ie]),ie):Ke(ie)},Re=function(ie){Ae(ue.filter(function(ye){return ye!==ie}),ie)},we=function(){Ae([])},Ne=(0,a.useCallback)(function(){if(le===void 0)pe(Z[0].value);else{var _e=ge+1;_e>=0&&_e<Z.length&&pe(Z[_e].value)}fe(!0)},[le,ge,pe,Z]),ve=(0,a.useCallback)(function(){if(le===void 0)pe(Z[Z.length-1].value);else{var _e=ge-1;_e>=0&&_e<Z.length&&pe(Z[_e].value)}fe(!0)},[le,ge,pe,Z]);G(Q.ArrowDown,function(){return be&&Ne()}),G(Q.ArrowUp,function(){return be&&ve()}),G(Q.Enter,function(){return be&&H&&le&&Ue(le)});var je=function(ie){return le===ie},xe=function(ie){return H?ue.includes(ie):je(ie)},We=(0,a.useId)(),Fe=Be.current?"calc("+Be.current.offsetWidth+"px + 2 * "+p.component.input.border_width.default.value+")":void 0;return(0,D.jsxs)("div",{className:m()(K().select,K()["select--"+(H?"multiple":"single")],be&&K()["select--expanded"],L&&K()["select--disabled"],Ce&&K()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,D.jsx)(_.SP,{disabled:L,inputId:k,inputRenderer:function(ie){var ye=ie.className,Le=ie.inputId;return(0,D.jsxs)("span",{className:m()(ye,K().select__field),ref:Be,children:[H&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("span",{className:K()["select--multiple__field__values"],children:ue.map(ke).map(function(Pe){return(0,D.jsx)(A,{deleteButtonLabel:Pe.deleteButtonLabel,disabled:L!=null?L:!1,onDeleteButtonClick:function(){return Re(Pe.value)},value:Pe.value},Pe.value)})}),(0,D.jsx)("button",{"aria-label":B.deleteButtonLabel,className:K()["select--multiple__field__delete-button"],disabled:!ue.length||L,onClick:function(){return we()},children:(0,D.jsx)("span",{className:K()["select--multiple__field__delete-button__cross"]})})]}),(0,D.jsxs)("button",{"aria-controls":We,"aria-expanded":be,"aria-label":z,className:K().select__field__button,disabled:L,id:Le,onBlur:function(){return fe(!1)},onClick:function(){return fe(!be)},onKeyDown:function(Me){Object.values(Q).includes(Me.key)&&(Me.preventDefault(),fe(!0))},role:"combobox",value:H?ue:le,children:[!H&&(0,D.jsx)("span",{className:K()["select--single__field__value"],children:ke(le).label}),(0,D.jsx)("span",{className:K()["select__field__arrow-wrapper"],children:(0,D.jsx)("span",{className:K()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!W,label:ee?void 0:z,noFocusEffect:H,noPadding:!0,readOnly:!1}),(0,D.jsx)("ul",{className:K()["select__option-list"],id:We,ref:Ie,role:"listbox",style:{width:Fe},children:Z.map(function(_e){return(0,D.jsx)("li",{"aria-selected":xe(_e.value),className:m()(K()["select__option-list__option"],xe(_e.value)&&K()["select__option-list__option--selected"],H&&je(_e.value)&&K()["select--multiple__option-list__option--focused"]),onClick:function(){return Ue(_e.value)},onMouseDown:function(ye){return ye.preventDefault()},onKeyDown:function(ye){return ye.preventDefault()},role:"option",value:_e.value,children:_e.label},_e.value)})})]})};$.displayName="Select";try{$.displayName="Select",$.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:$.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(I){}},"./src/components/SvgIcon/index.ts":(d,s,e)=>{"use strict";e.d(s,{l:()=>y});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),g=["svgIconComponent"];function M(T,E){if(T==null)return{};var h=C(T,E),j,O;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(T);for(O=0;O<b.length;O++)j=b[O],!(E.indexOf(j)>=0)&&(!Object.prototype.propertyIsEnumerable.call(T,j)||(h[j]=T[j]))}return h}function C(T,E){if(T==null)return{};var h={},j=Object.keys(T),O,b;for(b=0;b<j.length;b++)O=j[b],!(E.indexOf(O)>=0)&&(h[O]=T[O]);return h}var y=function(E){var h=E.svgIconComponent,j=M(E,g);return(0,r.isValidElement)(h)?(0,r.cloneElement)(h,Object.assign({},j)):null};try{y.displayName="SvgIcon",y.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:y.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(T){}},"./src/components/Table/Context.ts":(d,s,e)=>{"use strict";e.d(s,{$K:()=>C,$e:()=>o,Je:()=>r,Sh:()=>i,XS:()=>n,wv:()=>M});var t=e("./node_modules/react/index.js"),o;(function(y){y.Header="header",y.Body="body",y.Footer="footer"})(o||(o={}));var n=(0,t.createContext)(void 0),i=function(){var T=(0,t.useContext)(n);if(T===void 0)throw new Error("useTableContext must be used within a TableContext");return T},r=(0,t.createContext)(void 0),g=function(){var T=useContext(r);if(T===void 0)throw new Error("useTableContext must be used within a TableContext");return T},M=(0,t.createContext)({variantStandard:o.Body}),C=function(){var T=(0,t.useContext)(M);if(T===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return T}},"./src/components/Table/Table.tsx":(d,s,e)=>{"use strict";e.d(s,{i:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/Table/Table.module.css"),j=e.n(h),O=e("./src/components/Table/Context.ts"),b=e("./node_modules/react/jsx-runtime.js"),x=["children","selectRows","onChange","selectedValue","className"];function P(a,c){if(a==null)return{};var m=v(a,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(m[p]=a[p]))}return m}function v(a,c){if(a==null)return{};var m={},p=Object.keys(a),_,f;for(f=0;f<p.length;f++)_=p[f],!(c.indexOf(_)>=0)&&(m[_]=a[_]);return m}var u=function(c){var m=c.children,p=c.selectRows,_=p===void 0?!1:p,f=c.onChange,S=c.selectedValue,D=c.className,A=P(c,x);return(0,b.jsx)("table",Object.assign({},A,{className:E()(j().Table,D),children:(0,b.jsx)(O.XS.Provider,{value:{selectRows:_,onChange:f,selectedValue:S},children:m})}))};u.displayName="Table";var l=null;try{u.displayName="Table",u.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"RowData"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:u.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(a){}},"./src/components/Table/TableBody.tsx":(d,s,e)=>{"use strict";e.d(s,{R:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/Table/TableBody.module.css"),j=e.n(h),O=e("./src/components/Table/Context.ts"),b=e("./node_modules/react/jsx-runtime.js"),x=["children","className"];function P(a,c){if(a==null)return{};var m=v(a,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(m[p]=a[p]))}return m}function v(a,c){if(a==null)return{};var m={},p=Object.keys(a),_,f;for(f=0;f<p.length;f++)_=p[f],!(c.indexOf(_)>=0)&&(m[_]=a[_]);return m}var u=function(c){var m=c.children,p=c.className,_=P(c,x),f=O.$e.Body;return(0,b.jsx)(O.wv.Provider,{value:{variantStandard:f},children:(0,b.jsx)("tbody",Object.assign({},_,{className:E()(j().TableBody,p),children:m}))})};u.displayName="TableBody";var l=null;try{u.displayName="TableBody",u.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:u.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(a){}},"./src/components/Table/TableCell.tsx":(d,s,e)=>{"use strict";e.d(s,{Sr:()=>v,pj:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),g=e("./node_modules/classnames/index.js"),M=e.n(g),C=e("./src/components/Table/TableCell.module.css"),y=e.n(C),T=e("./src/components/Table/Context.ts"),E;function h(){return h=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var m=arguments[c];for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}return a},h.apply(this,arguments)}var j=function(c){return r.createElement("svg",h({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},c),E||(E=r.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},O=e("./node_modules/react/jsx-runtime.js"),b=["children","variant","onChange","sortDirecton","id","className"];function x(a,c){if(a==null)return{};var m=P(a,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(m[p]=a[p]))}return m}function P(a,c){if(a==null)return{};var m={},p=Object.keys(a),_,f;for(f=0;f<p.length;f++)_=p[f],!(c.indexOf(_)>=0)&&(m[_]=a[_]);return m}var v;(function(a){a.Descending="desc",a.Ascending="asc",a.NotSortable="notSortable",a.NotActive="notActive"})(v||(v={}));var u=function(c){var m,p=c.children,_=c.variant,f=c.onChange,S=c.sortDirecton,D=S===void 0?v.NotSortable:S,A=c.id,G=c.className,R=x(c,b),te=(0,T.$K)(),K=te.variantStandard,oe=function(){f!=null&&A!=null&&D!=null&&f({idCell:A,previousSortDirection:D})};return(0,O.jsxs)(O.Fragment,{children:[(_==null?K===T.$e.Header:_==="header")&&(0,O.jsx)("th",Object.assign({},R,{className:M()(y()["header-table-cell"],G),children:(0,O.jsxs)("div",{className:D!=v.NotSortable?M()(y()["container-sortable"]):M()(y().container),onClick:function(){return oe()},onKeyUp:function(J){(J.key==="Enter"||J.key===" ")&&oe()},role:D!=v.NotSortable?"button":void 0,tabIndex:D!=v.NotSortable?0:void 0,children:[(0,O.jsx)("div",{className:M()(y().input),children:p}),D!=v.NotSortable&&(0,O.jsx)(j,{className:M()(y().icon,(m={},m[y()["icon-asc"]]=D===v.Ascending,m[y()["icon-desc"]]=D===v.Descending,m))})]})})),(_==null?K===T.$e.Body:_==="body")&&(0,O.jsx)("td",Object.assign({},R,{className:M()(y()["body-table-cell"],G),children:(0,O.jsx)("div",{className:M()(y().input),children:p})})),K===T.$e.Footer&&(0,O.jsx)("td",Object.assign({},R,{className:M()(G),children:(0,O.jsx)("div",{className:M()(y().input),children:p})}))]})};const l=null;try{u.displayName="TableCell",u.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:u.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(a){}},"./src/components/Table/TableFooter.tsx":(d,s,e)=>{"use strict";e.d(s,{y:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/Table/TableFooter.module.css"),j=e.n(h),O=e("./src/components/Table/Context.ts"),b=e("./node_modules/react/jsx-runtime.js"),x=["children","className"];function P(a,c){if(a==null)return{};var m=v(a,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(m[p]=a[p]))}return m}function v(a,c){if(a==null)return{};var m={},p=Object.keys(a),_,f;for(f=0;f<p.length;f++)_=p[f],!(c.indexOf(_)>=0)&&(m[_]=a[_]);return m}var u=function(c){var m=c.children,p=c.className,_=P(c,x),f=O.$e.Footer;return(0,b.jsx)(O.wv.Provider,{value:{variantStandard:f},children:(0,b.jsx)("tfoot",Object.assign({},_,{className:E()(j()["table-footer"],p),children:m}))})};u.displayName="TableFooter";var l=null;try{u.displayName="TableFooter",u.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:u.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(a){}},"./src/components/Table/TableHeader.tsx":(d,s,e)=>{"use strict";e.d(s,{x:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/Table/TableHeader.module.css"),j=e.n(h),O=e("./src/components/Table/Context.ts"),b=e("./node_modules/react/jsx-runtime.js"),x=["children","className"];function P(l,a){if(l==null)return{};var c=v(l,a),m,p;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(l);for(p=0;p<_.length;p++)m=_[p],!(a.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,m)||(c[m]=l[m]))}return c}function v(l,a){if(l==null)return{};var c={},m=Object.keys(l),p,_;for(_=0;_<m.length;_++)p=m[_],!(a.indexOf(p)>=0)&&(c[p]=l[p]);return c}var u=function(a){var c=a.children,m=a.className,p=P(a,x),_=O.$e.Header;return(0,b.jsx)(O.wv.Provider,{value:{variantStandard:_},children:(0,b.jsx)("thead",Object.assign({},p,{className:E()(j()["table-header"],m),children:c}))})};u.displayName="TableHeader";try{u.displayName="TableHeader",u.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:u.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(l){}},"./src/components/Table/TableRow.tsx":(d,s,e)=>{"use strict";e.d(s,{S:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/Table/TableRow.module.css"),j=e.n(h),O=e("./src/components/Table/Context.ts"),b=e("./node_modules/react/jsx-runtime.js"),x=["children","rowData","selectSort","className"];function P(a,c){if(a==null)return{};var m=v(a,c),p,_;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(_=0;_<f.length;_++)p=f[_],!(c.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(m[p]=a[p]))}return m}function v(a,c){if(a==null)return{};var m={},p=Object.keys(a),_,f;for(f=0;f<p.length;f++)_=p[f],!(c.indexOf(_)>=0)&&(m[_]=a[_]);return m}var u=function(c){var m,p=c.children,_=c.rowData,f=c.selectSort,S=f===void 0?"":f,D=c.className,A=P(c,x),G=(0,O.$K)(),R=G.variantStandard,te=(0,O.Sh)(),K=te.onChange,oe=te.selectedValue,re=te.selectRows,J=function(){K!=null&&re&&R===O.$e.Body&&_&&K({selectedValue:_})},Y=JSON.stringify(_)===JSON.stringify(oe),F=function(q){(q.key==="Enter"||q.key===" ")&&K!=null&&oe&&_&&K({selectedValue:_})};return(0,b.jsx)(O.Je.Provider,{value:{selectSort:S},children:(0,b.jsx)("tr",Object.assign({},A,{className:E()(j().TableRow,(m={},m[j()["table-row--selected"]]=Y,m[j()["table-row--body"]]=R===O.$e.Body&&re&&!Y,m),D),onClick:J,tabIndex:R===O.$e.Body&&re?0:void 0,onKeyUp:function(q){return F(q)},children:p}))})};u.displayName="TableRow";var l=null;try{u.displayName="TableRow",u.__docgenInfo={description:"",displayName:"TableRow",props:{rowData:{defaultValue:null,description:"",name:"rowData",required:!1,type:{name:"RowData"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:u.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(a){}},"./src/components/TextArea/TextArea.tsx":(d,s,e)=>{"use strict";e.d(s,{K:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),i=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),g=e.n(r),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),C=e.n(M),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./src/components/_InputWrapper/index.ts"),j=e("./src/components/TextArea/TextArea.module.css"),O=e.n(j),b=e("./node_modules/react/jsx-runtime.js"),x=["isValid","disabled","readOnly","resize","label"];function P(l,a){if(l==null)return{};var c=v(l,a),m,p;if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(l);for(p=0;p<_.length;p++)m=_[p],!(a.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,m)||(c[m]=l[m]))}return c}function v(l,a){if(l==null)return{};var c={},m=Object.keys(l),p,_;for(_=0;_<m.length;_++)p=m[_],!(a.indexOf(p)>=0)&&(c[p]=l[p]);return c}var u=function(a){var c=a.isValid,m=c===void 0?!0:c,p=a.disabled,_=p===void 0?!1:p,f=a.readOnly,S=f===void 0?!1:f,D=a.resize,A=D===void 0?"none":D,G=a.label,R=P(a,x);return(0,b.jsx)(h.SP,{isValid:m,disabled:_,readOnly:S,label:G,inputId:R.id,inputRenderer:function(K){var oe=K.className,re=K.inputId;return(0,b.jsx)("textarea",Object.assign({},R,{id:re,disabled:_,readOnly:Boolean(S),className:E()(oe,O().TextArea,O()["TextArea--resize-"+A])}))}})};u.displayName="TextArea";try{u.displayName="TextArea",u.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:u.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(l){}},"./src/components/TextField/TextField.tsx":(d,s,e)=>{"use strict";e.d(s,{n:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),y=e("./node_modules/react/index.js"),T=e("./node_modules/classnames/index.js"),E=e.n(T),h=e("./node_modules/react-number-format/dist/react-number-format.es.js"),j=function(_){return _.format!==void 0},O=function(_){return _.format===void 0},b=function(_,f){return f&&O(f)?numericFormatter(_,f):f&&j(f)?patternFormatter(_,f):_},x=e("./src/components/_InputWrapper/index.ts"),P=e("./node_modules/react/jsx-runtime.js"),v=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function u(p,_){if(p==null)return{};var f=l(p,_),S,D;if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(p);for(D=0;D<A.length;D++)S=A[D],!(_.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,S)||(f[S]=p[S]))}return f}function l(p,_){if(p==null)return{};var f={},S=Object.keys(p),D,A;for(A=0;A<S.length;A++)D=S[A],!(_.indexOf(D)>=0)&&(f[D]=p[D]);return f}var a=function(_){var f=_.values,S=_.sourceInfo;S.event.target.value=f.value.trim()},c=function(_,f,S){var D=_.target,A=_.key,G=D.selectionStart,R=D.selectionEnd,te=D.value,K=te===void 0?"":te;if(G!==null&&R!==null){var oe=K[0]==="-",re=(f==null?void 0:f.length)||0+(oe?1:0),J=(S==null?void 0:S.length)||0;oe&&R<=re&&A==="Backspace"?D.setSelectionRange(1,1):D.setSelectionRange(Math.min(Math.max(G,re),K.length-J),Math.max(Math.min(R,K.length-J),re))}},m=function(_){var f=_.id,S=_.onChange,D=_.isValid,A=D===void 0?!0:D,G=_.disabled,R=G===void 0?!1:G,te=_.readOnly,K=te===void 0?!1:te,oe=_.required,re=oe===void 0?!1:oe,J=_.formatting,Y=_.label,F=u(_,v),U=function(w,N){N.source==="event"&&S&&(a({values:w,sourceInfo:N}),S(N.event))};return(0,P.jsx)(x.SP,{isValid:A,disabled:R,readOnly:K,label:Y,inputId:f,inputRenderer:function(w){var N=w.className,V=w.variant,Q=w.inputId,$={id:Q,readOnly:Boolean(K),disabled:R,required:re,className:E()(N,F.className),style:Object.assign({textAlign:J==null?void 0:J.align},F.style)};return J!=null&&J.number&&O(J.number)?(J.number.prefix&&J.number.prefix[0]==="-"&&(J.number.prefix=" "+J.number.prefix),(0,P.jsx)(h.h3,Object.assign({},$,J.number,F,{"data-testid":Q+"-formatted-number-"+V,onValueChange:U,valueIsNumericString:!0,onKeyDown:function(B){return c(B,J.number.prefix,J.number.suffix)}}))):J!=null&&J.number&&j(J.number)?(0,P.jsx)(h.HH,Object.assign({},$,J.number,F,{"data-testid":Q+"-formatted-number-"+V,onValueChange:U,valueIsNumericString:!0})):(0,P.jsx)("input",Object.assign({},$,F,{"data-testid":Q+"-"+V,onChange:S}))}})};m.displayName="TextField";try{m.displayName="TextField",m.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:m.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(p){}},"./src/components/ToggleButtonGroup/Context.ts":(d,s,e)=>{"use strict";e.d(s,{S:()=>o,z:()=>n});var t=e("./node_modules/react/index.js"),o=(0,t.createContext)(void 0),n=function(){var r=(0,t.useContext)(o);if(r===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return r}},"./src/components/ToggleButtonGroup/ToggleButton.tsx":(d,s,e)=>{"use strict";e.d(s,{C:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),g=e.n(r),M=e("./node_modules/react/jsx-runtime.js"),C=function(T){var E,h=T.children,j=T.value,O=(0,i.z)(),b=O.onChange,x=O.selectedValue,P=function(){b({selectedValue:j})};return(0,M.jsx)("button",{"data-testid":"toggle-button",className:n()(g()["toggle-button"],(E={},E[g()["toggle-button--selected"]]=j===x,E)),onClick:P,type:"button","aria-pressed":j==x,children:h})};C.displayName="ToggleButton";try{C.displayName="ToggleButton",C.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:C.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(y){}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx":(d,s,e)=>{"use strict";e.d(s,{t:()=>C});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),g=e.n(r),M=e("./node_modules/react/jsx-runtime.js"),C=function(T){var E=T.children,h=T.onChange,j=T.selectedValue,O=function(x){var P=x.selectedValue;h({selectedValue:P})};return(0,M.jsx)(i.S.Provider,{value:{onChange:O,selectedValue:j},children:(0,M.jsx)("div",{className:n()(g()["toggle-button-group"]),"data-testid":"toggle-button-group",children:E})})};C.displayName="ToggleButtonGroup";try{C.displayName="ToggleButtonGroup",C.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:C.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(y){}},"./src/components/_InputWrapper/index.ts":(d,s,e)=>{"use strict";e.d(s,{SP:()=>v,Hx:()=>r});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),i;(function(u){u.Default="default",u.Error="error",u.Disabled="disabled",u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(i||(i={}));var r;(function(u){u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(r||(r={}));var g;(function(u){u.None="none",u.Error="error",u.Search="search"})(g||(g={}));var M=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.readOnly,c=a===void 0?!1:a,m=l.disabled,p=m===void 0?!1:m,_=l.isValid,f=_===void 0?!0:_,S=l.isSearch,D=S===void 0?!1:S,A=g.None;return D&&(A=g.Search),p?{variant:i.Disabled,iconVariant:A}:c===!0||c===r.ReadOnlyInfo?{variant:i.ReadOnlyInfo,iconVariant:A}:c===r.ReadOnlyConfirm?{variant:i.ReadOnlyConfirm,iconVariant:A}:f===!1?{variant:i.Error,iconVariant:g.Error}:{variant:i.Default,iconVariant:A}},C;function y(){return y=Object.assign?Object.assign.bind():function(u){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(u[c]=a[c])}return u},y.apply(this,arguments)}var T=function(l){return t.createElement("svg",y({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),C||(C=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},E;function h(){return h=Object.assign?Object.assign.bind():function(u){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(u[c]=a[c])}return u},h.apply(this,arguments)}var j=function(l){return t.createElement("svg",h({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l),E||(E=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},O=e("./src/components/_InputWrapper/InputWrapper.module.css"),b=e.n(O),x=e("./node_modules/react/jsx-runtime.js"),P=function(l){var a=l.variant,c=l.disabled,m=c===void 0?!1:c;if(a===g.Error)return(0,x.jsx)("div",{className:b().InputWrapper__icon,children:(0,x.jsx)(T,{"data-testid":"input-icon-error"})});if(a===g.Search){var p;return(0,x.jsx)("div",{className:n()(b().InputWrapper__icon,(p={},p[b()["InputWrapper__icon--disabled"]]=m,p)),children:(0,x.jsx)(j,{"data-testid":"input-icon-search"})})}return null};try{P.displayName="Icon",P.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:P.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(u){}var v=function(l){var a,c=l.isValid,m=c===void 0?!0:c,p=l.disabled,_=p===void 0?!1:p,f=l.readOnly,S=f===void 0?!1:f,D=l.isSearch,A=D===void 0?!1:D,G=l.label,R=l.inputId,te=l.inputRenderer,K=l.noFocusEffect,oe=l.noPadding,re=(0,t.useId)(),J=R!=null?R:re,Y=M({readOnly:S,disabled:_,isValid:m,isSearch:A}),F=Y.variant,U=Y.iconVariant;return(0,x.jsxs)(x.Fragment,{children:[G&&(0,x.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(b().InputWrapper__label),htmlFor:J,children:G}),(0,x.jsxs)("div",{"data-testid":"InputWrapper",className:n()(b().InputWrapper,b()["InputWrapper--"+F],(a={},a[b()["InputWrapper--search"]]=A,a[b()["InputWrapper--with-focus-effect"]]=!K,a[b()["InputWrapper--with-padding"]]=!oe,a)),children:[(0,x.jsx)(P,{variant:U,disabled:_}),te({className:b().InputWrapper__field,inputId:J,variant:F})]})]})};try{v.displayName="InputWrapper",v.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:v.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(u){}},"./src/components/index.ts":(d,s,e)=>{"use strict";e.d(s,{XZ:()=>G.X,Bc:()=>c.B,C3:()=>K.C});var t=e("./src/components/Panel/Panel.tsx"),o=e("./src/components/Panel/PopoverPanel.tsx"),n=e("./src/components/CircularProgress/CircularProgress.tsx"),i=e("./src/components/AppWrapper/AppWrapper.tsx"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),g=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),M=e("./src/components/Accordion/Accordion.tsx"),C=e("./src/components/Accordion/AccordionHeader.tsx"),y=e("./src/components/Accordion/AccordionContent.tsx"),T=e("./src/components/Accordion/Context.ts"),E=e("./src/components/Accordion/AccordionIcon.tsx"),h=e("./src/components/Button/index.ts"),j=e("./src/components/Page/Page.tsx"),O=e("./src/components/Page/PageHeader.tsx"),b=e("./src/components/Page/PageContent.tsx"),x=e("./src/components/Page/Context.ts"),P=e("./src/components/List/List.tsx"),v=e("./src/components/List/ListItem.tsx"),u=e("./src/components/List/Context.ts"),l=e("./src/components/TextField/TextField.tsx"),a=e("./src/components/SearchField/SearchField.tsx"),c=e("./src/components/ErrorMessage/ErrorMessage.tsx"),m=e("./src/components/Map/Map.tsx"),p=e("./src/components/Table/Table.tsx"),_=e("./src/components/Table/TableHeader.tsx"),f=e("./src/components/Table/TableRow.tsx"),S=e("./src/components/Table/TableBody.tsx"),D=e("./src/components/Table/TableCell.tsx"),A=e("./src/components/Table/TableFooter.tsx"),G=e("./src/components/Checkbox/Checkbox.tsx"),R=e("./src/components/TextArea/TextArea.tsx"),te=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),K=e("./src/components/FieldSet/FieldSet.tsx"),oe=e("./src/components/Pagination/index.ts"),re=e("./src/components/Select/Select.tsx")},"./storybook-init-framework-entry.js":(d,s,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(d,s,e)=>{"use strict";e.d(s,{r:()=>g});var t=e("./node_modules/react/index.js"),o,n,i;function r(){return r=Object.assign?Object.assign.bind():function(M){for(var C=1;C<arguments.length;C++){var y=arguments[C];for(var T in y)Object.prototype.hasOwnProperty.call(y,T)&&(M[T]=y[T])}return M},r.apply(this,arguments)}var g=function(C){return t.createElement("svg",r({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},C),o||(o=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),i||(i=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),r.locals={accordion:"accordion---oQBwV"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),r.locals={container:"container---_OBRF"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.accordion-header---NEcyL {
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
`,""]),r.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),r.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([d.id,`html {
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
`,""]),r.locals={};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.button---AisLs {
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
`,""]),r.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.wrapper---WhgDa {
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-small);
  --gap: var(--component-checkbox-space-gap-small);
  --label-color: var(--component-checkbox-color-text-default);

  border-radius: var(--interactive_components-border_radius-normal);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
}

.wrapper--compact---JU5AA {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xsmall);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.wrapper--error---mbmQZ {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.wrapper--checked---SKWr8 {
  --checkbox-checkmark-display: inline-block;
}

.wrapper--checked---SKWr8:not(.wrapper--disabled---pTnwY) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.wrapper---WhgDa:not(.wrapper--disabled---pTnwY, .wrapper--read-only---blIvh):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.wrapper---WhgDa:not(.wrapper--disabled---pTnwY, .wrapper--checked---SKWr8):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.wrapper---WhgDa:not(.wrapper--disabled---pTnwY, .wrapper--error---mbmQZ, .wrapper--checked---SKWr8):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.wrapper--disabled---pTnwY {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-disabled);
  --cursor: auto;
  --description-color: var(--component-checkbox-color-text-disabled);
  --label-color: var(--component-checkbox-color-text-disabled);
}

.wrapper--disabled---pTnwY.wrapper--checked---SKWr8 {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.wrapper--read-only---blIvh {
  --cursor: auto;
}

.checkbox-wrapper---CuQ4i {
  display: inline-block;
  flex: 0 0 var(--checkbox-width);
  height: var(--checkbox-height);
  position: relative;
  width: var(--checkbox-width);
}

.checkbox---sy8lK {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.visible-box---_ibVj {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  height: var(--checkbox-height);
  left: 0;
  position: absolute;
  top: 0;
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

.label-and-description---x9fQn {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align checkbox with the first line in the label */
  margin-top: calc(
    (
        var(--checkbox-height) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.label---a2ABr {
  color: var(--label-color);
}

.description---U6Cn3 {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .wrapper---WhgDa:not(.wrapper--disabled---pTnwY):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.wrapper---WhgDa:not(.wrapper--disabled---pTnwY):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`,""]),r.locals={wrapper:"wrapper---WhgDa","wrapper--compact":"wrapper--compact---JU5AA","wrapper--error":"wrapper--error---mbmQZ","wrapper--checked":"wrapper--checked---SKWr8","wrapper--disabled":"wrapper--disabled---pTnwY","wrapper--read-only":"wrapper--read-only---blIvh","checkbox-wrapper":"checkbox-wrapper---CuQ4i",checkbox:"checkbox---sy8lK","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK","label-and-description":"label-and-description---x9fQn",label:"label---a2ABr",description:"description---U6Cn3"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.checkbox-group---Ws6hw {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.checkbox-group--compact---yT3vB {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.checkbox-group__list---WaB0C {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.checkbox-group__list--vertical---dNWTw {
  flex-direction: column;
}

.checkbox-group__list--horizontal---Gv47i {
  flex-direction: row;
}
`,""]),r.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group__list":"checkbox-group__list---WaB0C","checkbox-group__list--vertical":"checkbox-group__list--vertical---dNWTw","checkbox-group__list--horizontal":"checkbox-group__list--horizontal---Gv47i"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.svg---cRnN3 {
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
`,""]),r.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),r.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.field-set---WtvOy {
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
  --color: var(--component-checkbox-color-text-disabled);
  --description-color: var(--component-checkbox-color-text-disabled);
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
`,""]),r.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.list---Xw1lu {
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
`,""]),r.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),r.locals={container:"container---sf7W5"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.list-item---aLk6z {
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
`,""]),r.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"map---Z2PfI"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),r.locals={page:"page---LVMNK"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),r.locals={"page-content":"page-content---ZIuS7"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.page-header---bt29G {
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
`,""]),r.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.page-icon---mvZDR {
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
`,""]),r.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.pagination-icon---iNvyI {
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
`,""]),r.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`/* breakpoints-xs */
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
`,""]),r.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),r.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.multi-select-item---KQ3Ws {
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
`,""]),r.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.select---eatbZ {
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
`,""]),r.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`Table {
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
`,""]),r.locals={};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),r.locals={};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),r.locals={TableBody:"TableBody---cpO70"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.header-table-cell---zvgNX {
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
`,""]),r.locals={"header-table-cell":"header-table-cell---zvgNX","body-table-cell":"body-table-cell---cCxyS",image:"image---Jz7hI",input:"input---jn1Id","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-footer":"table-footer---fVxHQ"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-header":"table-header---DnjKf"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.TableRow---XoYrl {
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
`,""]),r.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.TextArea---kkLod {
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
`,""]),r.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`/* breakpoints-xs */
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
`,""]),r.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.toggle-button-group---xdsvq {
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
`,""]),r.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`/* breakpoints-xs */
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
`,""]),r.locals={container:"container---_zb20"};const g=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(d,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>g});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),i=e.n(n),r=i()(o());r.push([d.id,`.InputWrapper---J_oif {
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
`,""]),r.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const g=r},"./src/components/Accordion/Accordion.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Button/Button.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/List/List.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Map/Map.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Page/Page.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Select/Select.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/Table.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(d,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[d.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var i=t(o,n);d.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(d,s,e)=>{var t={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(i){var r=n(i);return e(r)}function n(i){if(!e.o(t,i)){var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}return t[i]}o.keys=function(){return Object.keys(t)},o.resolve=n,d.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(d,s,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(i){var r=n(i);return e(r)}function n(i){if(!e.o(t,i)){var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}return t[i]}o.keys=function(){return Object.keys(t)},o.resolve=n,d.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(d,s,e)=>{"use strict";d=e.nmd(d);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],d,!1)}},d=>{var s=t=>d(d.s=t);d.O(0,[907],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=d.O()}]);
