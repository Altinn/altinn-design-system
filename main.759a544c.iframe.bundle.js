(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(l,s,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(_){var r=n(_);return e(r)}function n(_){if(!e.o(t,_)){var r=new Error("Cannot find module '"+_+"'");throw r.code="MODULE_NOT_FOUND",r}return t[_]}o.keys=function(){return Object.keys(t)},o.resolve=n,l.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>i,__page:()=>a,default:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(P),x=e("./node_modules/react/index.js"),h=e("./node_modules/@mdx-js/react/index.js"),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),C=["components"];function m(){return m=Object.assign?Object.assign.bind():function(v){for(var S=1;S<arguments.length;S++){var M=arguments[S];for(var k in M)Object.prototype.hasOwnProperty.call(M,k)&&(v[k]=M[k])}return v},m.apply(this,arguments)}function D(v,S){if(v==null)return{};var M=E(v,S),k,G;if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(v);for(G=0;G<W.length;G++)k=W[G],!(S.indexOf(k)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,k)||(M[k]=v[k]))}return M}function E(v,S){if(v==null)return{};var M={},k=Object.keys(v),G,W;for(W=0;W<k.length;W++)G=k[W],!(S.indexOf(G)>=0)&&(M[G]=v[G]);return M}var b={},c="wrapper";function g(v){var S=v.components,M=D(v,C);return(0,h.mdx)(c,m({},b,M,{components:S,mdxType:"MDXLayout"}),(0,h.mdx)(j.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,h.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,h.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,h.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,h.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,h.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,h.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,h.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,h.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,h.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,h.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,h.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,h.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,h.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,h.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,h.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,h.mdx)("ul",null,(0,h.mdx)("li",{parentName:"ul"},(0,h.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,h.mdx)("li",{parentName:"ul"},(0,h.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}g.displayName="MDXContent",g.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var d={title:"Introduksjon",includeStories:["__page"]},u={};d.parameters=d.parameters||{},d.parameters.docs=Object.assign({},d.parameters.docs||{},{page:function(){return(0,h.mdx)(j.aT,{mdxStoryNameToKey:u,mdxComponentAnnotations:d},(0,h.mdx)(g,null))}});const p=d;var i=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>i,__page:()=>a,default:()=>p});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(P),x=e("./node_modules/react/index.js"),h=e("./node_modules/@mdx-js/react/index.js"),j=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),C=["components"];function m(){return m=Object.assign?Object.assign.bind():function(v){for(var S=1;S<arguments.length;S++){var M=arguments[S];for(var k in M)Object.prototype.hasOwnProperty.call(M,k)&&(v[k]=M[k])}return v},m.apply(this,arguments)}function D(v,S){if(v==null)return{};var M=E(v,S),k,G;if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(v);for(G=0;G<W.length;G++)k=W[G],!(S.indexOf(k)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,k)||(M[k]=v[k]))}return M}function E(v,S){if(v==null)return{};var M={},k=Object.keys(v),G,W;for(W=0;W<k.length;W++)G=k[W],!(S.indexOf(G)>=0)&&(M[G]=v[G]);return M}var b={},c="wrapper";function g(v){var S=v.components,M=D(v,C);return(0,h.mdx)(c,m({},b,M,{components:S,mdxType:"MDXLayout"}),(0,h.mdx)(j.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,h.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,h.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
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
`)))}g.displayName="MDXContent",g.isMDXComponent=!0;var a=function(){throw new Error("Docs-only story")};a.parameters={docsOnly:!0};var d={title:"Components/AppWrapper",includeStories:["__page"]},u={};d.parameters=d.parameters||{},d.parameters.docs=Object.assign({},d.parameters.docs||{},{page:function(){return(0,h.mdx)(j.aT,{mdxStoryNameToKey:u,mdxComponentAnnotations:d},(0,h.mdx)(g,null))}});const p=d;var i=["__page"]},"./.storybook/StoryPage.tsx":(l,s,e)=>{"use strict";e.d(s,{Y:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/AppWrapper/AppWrapper.tsx"),f=e("./node_modules/react/jsx-runtime.js"),P=function(h){var j=h.description;return(0,f.jsxs)(T.O,{children:[(0,f.jsx)(y.Dx,{}),(0,f.jsx)(y.dk,{children:j}),(0,f.jsx)(y.fQ,{includePrimary:!0}),(0,f.jsx)(y.X6,{children:"Props"}),(0,f.jsx)(y.$4,{story:y.Uh})]})};P.displayName="StoryPage";var O=null;try{P.displayName="StoryPage",P.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:P.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(x){}},"./.storybook/preview.js-generated-config-entry.js":(l,s,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>m,parameters:()=>C});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),x=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),j=e("./node_modules/@storybook/theming/dist/esm/index.js"),C={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},j.np.dark),light:Object.assign({},j.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},m=["parameters"],D=e("./node_modules/console-browserify/index.js");function E(g,a){var d=Object.keys(g);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(g);a&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(g,p).enumerable})),d.push.apply(d,u)}return d}function b(g){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?arguments[a]:{};a%2?E(Object(d),!0).forEach(function(u){c(g,u,d[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(d)):E(Object(d)).forEach(function(u){Object.defineProperty(g,u,Object.getOwnPropertyDescriptor(d,u))})}return g}function c(g,a,d){return a in g?Object.defineProperty(g,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):g[a]=d,g}Object.keys(t).forEach(function(g){var a=t[g];switch(g){case"args":return(0,x.uc)(a);case"argTypes":return(0,x.v9)(a);case"decorators":return a.forEach(function(u){return(0,x.$9)(u,!1)});case"loaders":return a.forEach(function(u){return(0,x.HZ)(u,!1)});case"parameters":return(0,x.h1)(b({},a),!1);case"argTypesEnhancers":return a.forEach(function(u){return(0,x.My)(u)});case"argsEnhancers":return a.forEach(function(u){return(0,x._C)(u)});case"render":return(0,x.$P)(a);case"globals":case"globalTypes":{var d={};return d[g]=a,(0,x.h1)(d,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return D.log(g+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>z,__namedExportsOrder:()=>H,default:()=>oe});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e.n(i),S=e("./node_modules/react/index.js"),M=e("./node_modules/storybook-addon-designs/esm/index.js"),k=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./node_modules/classnames/index.js"),W=e.n(G),se=e("./.storybook/StoryPage.tsx"),K=e("./src/components/Button/index.ts"),ee=e("./src/components/Accordion/Accordion.tsx"),re=e("./src/components/Accordion/AccordionHeader.tsx"),Z=e("./src/components/Accordion/AccordionContent.tsx"),X=e("./src/components/Accordion/Accordion.stories.module.css"),V=e.n(X),U=e("./src/components/Accordion/Context.ts"),q=e("./node_modules/react/jsx-runtime.js");function F(Y,$){return L(Y)||Q(Y,$)||N(Y,$)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N(Y,$){if(!!Y){if(typeof Y=="string")return J(Y,$);var ne=Object.prototype.toString.call(Y).slice(8,-1);if(ne==="Object"&&Y.constructor&&(ne=Y.constructor.name),ne==="Map"||ne==="Set")return Array.from(Y);if(ne==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ne))return J(Y,$)}}function J(Y,$){($==null||$>Y.length)&&($=Y.length);for(var ne=0,le=new Array($);ne<$;ne++)le[ne]=Y[ne];return le}function Q(Y,$){var ne=Y==null?null:typeof Symbol!="undefined"&&Y[Symbol.iterator]||Y["@@iterator"];if(ne!=null){var le=[],me=!0,ce=!1,ue,Ee;try{for(ne=ne.call(Y);!(me=(ue=ne.next()).done)&&(le.push(ue.value),!($&&le.length===$));me=!0);}catch(te){ce=!0,Ee=te}finally{try{!me&&ne.return!=null&&ne.return()}finally{if(ce)throw Ee}}return le}}function L(Y){if(Array.isArray(Y))return Y}var I=`import React, { useState } from 'react';
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
`,A={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},R="";const oe={title:"Components/Accordion",component:ee.U,subcomponents:{AccordionHeader:re._,AccordionContent:Z.v},parameters:{design:(0,M.vc)([{type:"figma",url:R},{type:"link",url:R}]),docs:{page:function(){return(0,q.jsx)(se.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:U.Bt.Primary,useActions:!0,subtitle:"Subtitle"}};var B=function($){var ne=(0,S.useState)(!1),le=F(ne,2),me=le[0],ce=le[1],ue=(0,S.useState)(!1),Ee=F(ue,2),te=Ee[0],ae=Ee[1],de=function(){ce(!me)},pe=function(){ae(!te)},ge="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",Te=(0,k.D8)(),Oe=F(Te,1),Ce=Oe[0].useActions,he=(0,k.D8)(),Me=F(he,1),Se=Me[0].subtitle,be=Ce?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)("div",{children:"Example setup"}),(0,q.jsx)(K.zx,{variant:K.Wu.Filled,color:K.rp.Primary,size:K.qE.Small,children:"Separat knapp 1"}),(0,q.jsx)(K.zx,{variant:K.Wu.Outline,color:K.rp.Primary,size:K.qE.Small,children:"Separat knapp 2"})]}):void 0,ve=Se.length>0?Se:void 0;return(0,q.jsxs)("div",{className:W()(V().container),children:[(0,q.jsxs)(ee.U,{onClick:de,open:me,iconVariant:$.iconVariant,children:[(0,q.jsx)(re._,{actions:be,subtitle:ve,children:"Accordion 1"}),(0,q.jsx)(Z.v,{children:ge})]}),(0,q.jsxs)(ee.U,{onClick:pe,open:te,iconVariant:$.iconVariant,children:[(0,q.jsx)(re._,{actions:be,subtitle:ve,children:"Accordion 2"}),(0,q.jsx)(Z.v,{children:ge})]})]})};B.displayName="Template";var z=B.bind({});z.args={iconVariant:U.Bt.Primary,open:!1},z.argTypes={open:{control:!1},onClick:{control:!1}},z.parameters={docs:{description:{story:""}}},z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},z.parameters);var H=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>g,Disabled:()=>i,FullWidth:()=>p,Primary:()=>E,Secondary:()=>b,SecondaryWithIconNoText:()=>u,Success:()=>c,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>a,__namedExportsOrder:()=>v,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor } from '..';

import { ReactComponent as SuccessIcon } from './success.svg';

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
  iconName: 'Success',
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
  svgIconComponent: <SuccessIcon />,
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
  iconName: 'Close',
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
  iconName: 'AddCircle',
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
`,h={Primary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Secondary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Success:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Danger:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithCustomIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SecondaryWithIconNoText:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},FullWidth:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const C={title:"Components/Button/Filled",component:f.zx,parameters:{design:(0,y.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,O.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:f.Wu.Filled,onClick:function(M){alert(JSON.stringify(M.target.innerHTML)+" clicked!")}}};var m=function(M){return(0,O.jsx)(f.zx,Object.assign({},M))};m.displayName="Template";var D=function(M){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(f.zx,Object.assign({},M))})};D.displayName="WithinContainerTemplate";var E=m.bind({});E.args={color:f.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var b=m.bind({});b.args={color:f.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:f.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={color:f.rp.Danger,children:"Danger button"},g.parameters={docs:{description:{story:""}}};var a=m.bind({});a.args={color:f.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},a.parameters={docs:{description:{story:""}}};var d=m.bind({});d.args={color:f.rp.Success,svgIconComponent:(0,O.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:f.rp.Secondary,iconName:"Close"},u.parameters={docs:{description:{story:""}}};var p=D.bind({});p.args={color:f.rp.Primary,iconName:"AddCircle",fullWidth:!0,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={children:"Disabled button",disabled:!0},i.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters);var v=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>g,Disabled:()=>i,FullWidthAndDashedBorder:()=>p,Primary:()=>E,Secondary:()=>b,SecondaryWithIconNoText:()=>u,Success:()=>c,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>a,__namedExportsOrder:()=>v,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor } from '..';

import { ReactComponent as SuccessIcon } from './success.svg';

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

export const SuccessWithIcon = WithinContainerTemplate.bind({});
SuccessWithIcon.args = {
  color: ButtonColor.Success,
  iconName: 'Success',
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
  svgIconComponent: <SuccessIcon />,
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
  iconName: 'Close',
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
  iconName: 'AddCircle',
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
`,h={Primary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Secondary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Success:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Danger:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithIcon:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},SuccessWithCustomIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SecondaryWithIconNoText:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},FullWidthAndDashedBorder:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const C={title:"Components/Button/Outline",component:f.zx,parameters:{design:(0,y.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,O.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:f.Wu.Outline,onClick:function(M){alert(JSON.stringify(M.target.innerHTML)+" clicked!")}}};var m=function(M){return(0,O.jsx)(f.zx,Object.assign({},M))};m.displayName="Template";var D=function(M){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(f.zx,Object.assign({},M))})};D.displayName="WithinContainerTemplate";var E=m.bind({});E.args={color:f.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var b=m.bind({});b.args={color:f.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:f.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={color:f.rp.Danger,children:"Danger button"},g.parameters={docs:{description:{story:""}}};var a=D.bind({});a.args={color:f.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},a.parameters={docs:{description:{story:""}}};var d=m.bind({});d.args={color:f.rp.Success,svgIconComponent:(0,O.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:f.rp.Secondary,iconName:"Close"},u.parameters={docs:{description:{story:""}}};var p=D.bind({});p.args={color:f.rp.Primary,iconName:"AddCircle",fullWidth:!0,dashedBorder:!0,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={children:"Disabled button",disabled:!0},i.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},a.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters);var v=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>g,Disabled:()=>i,FullWidth:()=>p,Primary:()=>E,Secondary:()=>b,Success:()=>c,SuccessWithCustomIcon:()=>d,SuccessWithIcon:()=>a,SuccessWithIconNoText:()=>u,__namedExportsOrder:()=>v,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),O=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

import { StoryPage } from '@sb/StoryPage';

import { Button, ButtonVariant, ButtonColor, ButtonSize } from '..';

import { ReactComponent as SuccessIcon } from './success.svg';

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
  iconName: 'Success',
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
  svgIconComponent: <SuccessIcon />,
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
  iconName: 'Success',
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
  iconName: 'AddCircle',
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
`,h={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const C={title:"Components/Button/Quiet",component:f.zx,parameters:{design:(0,y.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,O.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:f.Wu.Quiet,size:f.qE.Small,onClick:function(M){alert(JSON.stringify(M.target.innerHTML)+" clicked!")}}};var m=function(M){return(0,O.jsx)(f.zx,Object.assign({},M))};m.displayName="Template";var D=function(M){return(0,O.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,O.jsx)(f.zx,Object.assign({},M))})};D.displayName="WithinContainerTemplate";var E=m.bind({});E.args={color:f.rp.Primary,children:"Primary button"},E.parameters={docs:{description:{story:""}}};var b=m.bind({});b.args={color:f.rp.Secondary,children:"Secondary button"},b.parameters={docs:{description:{story:""}}};var c=m.bind({});c.args={color:f.rp.Success,children:"Success button"},c.parameters={docs:{description:{story:""}}};var g=m.bind({});g.args={color:f.rp.Danger,children:"Danger button"},g.parameters={docs:{description:{story:""}}};var a=m.bind({});a.args={color:f.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},a.parameters={docs:{description:{story:""}}};var d=m.bind({});d.args={color:f.rp.Success,svgIconComponent:(0,O.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},d.parameters={docs:{description:{story:""}}};var u=m.bind({});u.args={color:f.rp.Success,iconName:"Success"},u.parameters={docs:{description:{story:""}}};var p=D.bind({});p.args={color:f.rp.Primary,iconName:"AddCircle",fullWidth:!0,children:"Secondary button"},p.parameters={docs:{description:{story:""}}};var i=m.bind({});i.args={children:"Disabled button",disabled:!0},i.parameters={docs:{description:{story:""}}},E.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},E.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),a.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},a.parameters),d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},i.parameters);var v=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>D,Compact:()=>b,Disabled:()=>c,Error:()=>E,LongText:()=>d,Normal:()=>m,ReadOnly:()=>g,WithDescription:()=>a,WithHiddenLabel:()=>u,__namedExportsOrder:()=>p,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Checkbox/Checkbox.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Checked:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnly:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},LongText:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithHiddenLabel:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},h="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const j={title:"Components/Checkbox",component:f.X,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Checkbox for boolean or multiple choice values in forms."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var C=function(v){return(0,P.jsx)(f.X,Object.assign({},v))};C.displayName="Template";var m=C.bind({});m.args={},m.parameters={docs:{description:{story:"This is the default checkbox."}}};var D=C.bind({});D.args={checked:!0},D.parameters={docs:{description:{story:"This is a checked checkbox."}}};var E=C.bind({});E.args={error:!0},E.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is an user input error related to it."}}};var b=C.bind({});b.args={compact:!0},b.parameters={docs:{description:{story:"This is the compact checkbox."}}};var c=C.bind({});c.args={disabled:!0},c.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var g=C.bind({});g.args={readOnly:!0},g.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var a=C.bind({});a.args={description:"Lorem ipsum dolor sit amet."},a.parameters={docs:{description:{story:"This is a checkbox with description."}}};var d=C.bind({});d.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},d.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var u=C.bind({});u.args={hideLabel:!0},u.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},D.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},E.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},a.parameters),d.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},d.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters);var p=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>E,Disabled:()=>c,Error:()=>b,Horizontal:()=>D,Vertical:()=>m,__namedExportsOrder:()=>g,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const j={title:"Components/CheckboxGroup",component:f.c,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:f.T.Vertical}};var C=function(d){return(0,P.jsx)(f.c,Object.assign({},d))};C.displayName="Template";var m=C.bind({});m.args={variant:f.T.Vertical},m.parameters={docs:{description:{story:"This is the default setting."}}};var D=C.bind({});D.args={variant:f.T.Horizontal},D.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var E=C.bind({});E.args={compact:!0},E.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var b=C.bind({});b.args={error:"Du m\xE5 velge minst ett av alternativene over."},b.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var c=C.bind({});c.args={disabled:!0},c.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},m.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},D.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},E.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},c.parameters);var g=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>m,__namedExportsOrder:()=>D,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/CircularProgress/CircularProgress.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const j={title:"Components/CircularProgress",component:f.D,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var C=function(b){return(0,P.jsx)(f.D,Object.assign({},b))};C.displayName="CircularTemplate";var m=C.bind({});m.args={width:100,value:60,label:"3/5",id:"progress"},m.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},m.parameters);var D=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>m,__namedExportsOrder:()=>D,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/ErrorMessage/ErrorMessage.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},h="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const j={title:"Components/ErrorMessage",component:f.B,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var C=function(b){return(0,P.jsx)(f.B,Object.assign({},b,{children:"This is an error message"}))};C.displayName="Template";var m=C.bind({});m.args={},m.parameters={docs:{description:{story:""}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},m.parameters);var D=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>D,Disabled:()=>c,Error:()=>b,Normal:()=>m,WithDescription:()=>E,__namedExportsOrder:()=>g,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/FieldSet/FieldSet.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},h="";const j={title:"Components/FieldSet",component:f.C,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:f.w.Small}};var C=function(d){return(0,P.jsx)(f.C,Object.assign({},d,{children:d.children}))};C.displayName="Template";var m=C.bind({});m.args={},m.parameters={docs:{description:{story:"This is a normal field set."}}};var D=C.bind({});D.args={size:f.w.Xsmall},D.parameters={docs:{description:{story:"This is a compact field set."}}};var E=C.bind({});E.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},E.parameters={docs:{description:{story:"This is a field set with a description."}}};var b=C.bind({});b.args={error:"Her er det en beskrivende feilmelding."},b.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var c=C.bind({});c.args={disabled:!0},c.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},m.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},m.parameters),D.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},D.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},E.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},c.parameters);var g=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Dashed:()=>g,Solid:()=>c,__namedExportsOrder:()=>a,default:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/List/List.tsx"),P=e("./src/components/List/ListItem.tsx"),O=e("./src/components/List/Context.ts"),x=e("./src/components/List/List.stories.modules.css"),h=e.n(x),j=e("./node_modules/react/jsx-runtime.js"),C=`import React from 'react';
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
`,m={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},D="";const E={title:"Components/List",component:f.a,parameters:{design:(0,y.vc)([{type:"figma",url:D},{type:"link",url:D}]),docs:{page:function(){return(0,j.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var b=function(u){return(0,j.jsx)("div",{className:h().container,children:(0,j.jsxs)(f.a,{borderStyle:u.borderStyle,children:[(0,j.jsx)(P.H,{children:"List Item 1"}),(0,j.jsx)(P.H,{children:"List Item 2"}),(0,j.jsx)(P.H,{children:"List Item 3"})]})})};b.displayName="Template";var c=b.bind({});c.args={borderStyle:O.N4.Solid},c.parameters={docs:{description:{story:""}}};var g=b.bind({});g.args={borderStyle:O.N4.Dashed},g.parameters={docs:{description:{story:""}}},c.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},g.parameters);var a=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>J,GoogleMaps:()=>R,KartverketSea:()=>A,KartverketTerrain:()=>I,MapWithMarkerZoomAndCenter:()=>Q,OpenStreetMap:()=>L,__namedExportsOrder:()=>oe,default:()=>w});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e.n(i),S=e("./node_modules/react/index.js"),M=e("./node_modules/storybook-addon-designs/esm/index.js"),k=e("./.storybook/StoryPage.tsx"),G=e("./src/components/Map/Map.tsx"),W=e("./node_modules/react/jsx-runtime.js"),se=e("./node_modules/console-browserify/index.js");function K(B,z){return V(B)||X(B,z)||re(B,z)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(B,z){if(!!B){if(typeof B=="string")return Z(B,z);var H=Object.prototype.toString.call(B).slice(8,-1);if(H==="Object"&&B.constructor&&(H=B.constructor.name),H==="Map"||H==="Set")return Array.from(B);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return Z(B,z)}}function Z(B,z){(z==null||z>B.length)&&(z=B.length);for(var H=0,Y=new Array(z);H<z;H++)Y[H]=B[H];return Y}function X(B,z){var H=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(H!=null){var Y=[],$=!0,ne=!1,le,me;try{for(H=H.call(B);!($=(le=H.next()).done)&&(Y.push(le.value),!(z&&Y.length===z));$=!0);}catch(ce){ne=!0,me=ce}finally{try{!$&&H.return!=null&&H.return()}finally{if(ne)throw me}}return Y}}function V(B){if(Array.isArray(B))return B}var U=`import React, { useState } from 'react';
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
`,q={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},F="";const w={title:"Components/Map",component:G.D,parameters:{layout:"fullscreen",design:(0,M.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,W.jsx)(k.Y,{description:"Map component"})}}},args:{}};var N=function(z){var H=(0,S.useState)(z.markerLocation),Y=K(H,2),$=Y[0],ne=Y[1],le=function(ce){ne(ce),se.log("Map clicked at ["+ce.latitude+","+ce.longitude+"]")};return(0,W.jsx)(G.D,Object.assign({},z,{markerLocation:$,onClick:le}))};N.displayName="Template";var J=N.bind({});J.args={},J.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var Q=N.bind({});Q.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},Q.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var L=N.bind({});L.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},L.parameters={docs:{description:{story:"OpenStreetMap"}}};var I=N.bind({});I.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},I.parameters={docs:{description:{story:"Kartverket terrain map"}}};var A=N.bind({});A.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},A.parameters={docs:{description:{story:"Kartverket sea map"}}};var R=N.bind({});R.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},R.parameters={docs:{description:{story:"Google Maps"}}},J.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},J.parameters),Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters),L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters);var oe=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>g,Success:()=>a,__namedExportsOrder:()=>d,default:()=>b});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Page/Context.ts"),T=e("./src/components/Page/PageContent.tsx"),f=e("./src/components/Page/PageHeader.tsx"),P=e("./src/components/Page/Page.tsx"),O,x;function h(){return h=Object.assign?Object.assign.bind():function(u){for(var p=1;p<arguments.length;p++){var i=arguments[p];for(var v in i)Object.prototype.hasOwnProperty.call(i,v)&&(u[v]=i[v])}return u},h.apply(this,arguments)}var j=function(p){return n.createElement("svg",h({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},p),O||(O=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),x||(x=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},C=e("./node_modules/react/jsx-runtime.js"),m=`import React from 'react';
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
`,D={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},E="";const b={title:"Components/Page",component:P.T,parameters:{design:(0,_.vc)([{type:"figma",url:E},{type:"link",url:E}]),docs:{page:function(){return(0,C.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var c=function(p){return(0,C.jsxs)(P.T,{color:p.color,children:[(0,C.jsx)(f.m,{icon:(0,C.jsx)(j,{}),children:"PageHeader"}),(0,C.jsx)(T.J,{children:"PageContent"})]})};c.displayName="Template";var g=c.bind({});g.args={color:y.gL.Primary},g.parameters={docs:{description:{story:""}}};var a=c.bind({});a.args={color:y.gL.Success},a.parameters={docs:{description:{story:""}}},g.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},g.parameters),a.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},a.parameters);var d=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Q,__namedExportsOrder:()=>L,default:()=>N});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),v=e.n(i),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),M=e.n(S),k=e("./node_modules/react/index.js"),G=e("./node_modules/storybook-addon-designs/esm/index.js"),W=e("./.storybook/StoryPage.tsx"),se=e("./src/components/Pagination/Pagination.tsx"),K=e("./node_modules/react/jsx-runtime.js");function ee(I,A){return U(I)||V(I,A)||Z(I,A)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(I,A){if(!!I){if(typeof I=="string")return X(I,A);var R=Object.prototype.toString.call(I).slice(8,-1);if(R==="Object"&&I.constructor&&(R=I.constructor.name),R==="Map"||R==="Set")return Array.from(I);if(R==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(R))return X(I,A)}}function X(I,A){(A==null||A>I.length)&&(A=I.length);for(var R=0,oe=new Array(A);R<A;R++)oe[R]=I[R];return oe}function V(I,A){var R=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(R!=null){var oe=[],B=!0,z=!1,H,Y;try{for(R=R.call(I);!(B=(H=R.next()).done)&&(oe.push(H.value),!(A&&oe.length===A));B=!0);}catch($){z=!0,Y=$}finally{try{!B&&R.return!=null&&R.return()}finally{if(z)throw Y}}return oe}}function U(I){if(Array.isArray(I))return I}var q=`import React, { useState } from 'react';
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
`,F={Example:{startLoc:{col:52,line:38},endLoc:{col:1,line:58},startBody:{col:52,line:38},endBody:{col:1,line:58}}},w="";const N={title:"Components/Pagination",component:se.t,parameters:{design:(0,G.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,K.jsx)(W.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var J=function(A){var R=(0,k.useState)(5),oe=ee(R,2),B=oe[0],z=oe[1],H=(0,k.useState)(0),Y=ee(H,2),$=Y[0],ne=Y[1],le=function(ce){z(parseInt(ce.target.value,10)),ne(0)};return(0,K.jsx)(se.t,Object.assign({},A,{rowsPerPage:B,currentPage:$,setCurrentPage:ne,onRowsPerPageChange:le}))};J.displayName="Template";var Q=J.bind({});Q.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20],rowsPerPageText:"Rader per side",pageDescriptionText:"av"},Q.parameters={docs:{description:{story:""}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters);var L=["Example"]},"./src/components/Panel/Panel.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>b,Info:()=>D,Success:()=>m,Warning:()=>E,__namedExportsOrder:()=>c,default:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Panel/Panel.tsx"),P=e("./node_modules/react/jsx-runtime.js"),O=`import React from 'react';
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
`,x={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const j={title:"Components/Panel",component:f.s,parameters:{design:(0,y.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,P.jsx)("div",{children:"Her kommer litt informasjon"})}};var C=function(a){return(0,P.jsx)(f.s,Object.assign({},a))};C.displayName="Template";var m=C.bind({});m.args={variant:f.c.Success},m.parameters={docs:{description:{story:"Success beskrivelse"}}};var D=C.bind({});D.parameters={docs:{description:{story:"Info beskrivelse"}}};var E=C.bind({});E.args={variant:f.c.Warning},E.parameters={docs:{description:{story:"Warning beskrivelse"}}};var b=C.bind({});b.args={variant:f.c.Error},b.parameters={docs:{description:{story:"Error beskrivelse"}}},m.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},m.parameters),D.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},D.parameters),E.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},E.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},b.parameters);var c=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>R,Info:()=>I,Success:()=>L,Warning:()=>A,__namedExportsOrder:()=>oe,default:()=>J});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e.n(i),S=e("./node_modules/react/index.js"),M=e("./node_modules/storybook-addon-designs/esm/index.js"),k=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./.storybook/StoryPage.tsx"),W=e("./src/components/Button/index.ts"),se=e("./src/components/Panel/Panel.tsx"),K=e("./src/components/Panel/PopoverPanel.tsx"),ee=e("./node_modules/react/jsx-runtime.js");function re(B,z){return q(B)||U(B,z)||X(B,z)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(B,z){if(!!B){if(typeof B=="string")return V(B,z);var H=Object.prototype.toString.call(B).slice(8,-1);if(H==="Object"&&B.constructor&&(H=B.constructor.name),H==="Map"||H==="Set")return Array.from(B);if(H==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(H))return V(B,z)}}function V(B,z){(z==null||z>B.length)&&(z=B.length);for(var H=0,Y=new Array(z);H<z;H++)Y[H]=B[H];return Y}function U(B,z){var H=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(H!=null){var Y=[],$=!0,ne=!1,le,me;try{for(H=H.call(B);!($=(le=H.next()).done)&&(Y.push(le.value),!(z&&Y.length===z));$=!0);}catch(ce){ne=!0,me=ce}finally{try{!$&&H.return!=null&&H.return()}finally{if(ne)throw me}}return Y}}function q(B){if(Array.isArray(B))return B}var F=`import React from 'react';
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
`,w={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},N="";const J={title:"Components/Panel/PopoverPanel",component:K.H,parameters:{design:(0,M.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,ee.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:se.c.Warning,trigger:(0,ee.jsx)("button",{children:"\xC5pne"}),side:"top"}};var Q=function(z){var H=(0,k.eJ)(!1),Y=re(H,2),$=Y[0],ne=Y[1],le=function(){ne(!$)};return(0,ee.jsx)("div",{children:(0,ee.jsxs)(K.H,{variant:z.variant,side:z.side,title:z.title,open:$,trigger:(0,ee.jsx)(W.zx,{variant:W.Wu.Filled,color:W.rp.Primary,children:"\xC5pne"}),onOpenChange:ne,showPointer:z.showPointer,showIcon:z.showIcon,forceMobileLayout:z.forceMobileLayout,children:[(0,ee.jsx)("div",{children:"Her kommer litt informasjon"}),(0,ee.jsx)(W.zx,{variant:W.Wu.Filled,color:W.rp.Primary,size:W.qE.Small,onClick:le,children:"Lukk"})]})})};Q.displayName="Template";var L=Q.bind({});L.args={variant:se.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},L.argTypes={trigger:{control:!1}},L.parameters={docs:{description:{story:""}}};var I=Q.bind({});I.args={variant:se.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},I.argTypes={trigger:{control:!1}},I.parameters={docs:{description:{story:""}}};var A=Q.bind({});A.args={variant:se.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},A.argTypes={trigger:{control:!1}},A.parameters={docs:{description:{story:""}}};var R=Q.bind({});R.args={variant:se.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},R.argTypes={trigger:{control:!1}},R.parameters={docs:{description:{story:""}}},L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},L.parameters),I.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},I.parameters),A.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},A.parameters),R.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},R.parameters);var oe=["Success","Info","Warning","Error"]},"./src/components/SearchField/SearchField.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>J,__namedExportsOrder:()=>Q,default:()=>w});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e.n(i),S=e("./node_modules/react/index.js"),M=e("./node_modules/storybook-addon-designs/esm/index.js"),k=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),G=e("./.storybook/StoryPage.tsx"),W=e("./src/components/SearchField/SearchField.tsx"),se=e("./node_modules/react/jsx-runtime.js");function K(L,I){return V(L)||X(L,I)||re(L,I)||ee()}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(L,I){if(!!L){if(typeof L=="string")return Z(L,I);var A=Object.prototype.toString.call(L).slice(8,-1);if(A==="Object"&&L.constructor&&(A=L.constructor.name),A==="Map"||A==="Set")return Array.from(L);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return Z(L,I)}}function Z(L,I){(I==null||I>L.length)&&(I=L.length);for(var A=0,R=new Array(I);A<I;A++)R[A]=L[A];return R}function X(L,I){var A=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(A!=null){var R=[],oe=!0,B=!1,z,H;try{for(A=A.call(L);!(oe=(z=A.next()).done)&&(R.push(z.value),!(I&&R.length===I));oe=!0);}catch(Y){B=!0,H=Y}finally{try{!oe&&A.return!=null&&A.return()}finally{if(B)throw H}}return R}}function V(L){if(Array.isArray(L))return L}var U=`import React from 'react';
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
`,q={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},F="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const w={title:"Components/SearchField",component:W.U,parameters:{design:(0,M.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,se.jsx)(G.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var N=function(I){var A=(0,k.D8)(),R=K(A,1),oe=R[0].disabled;return(0,se.jsx)(W.U,Object.assign({disabled:oe},I))};N.displayName="Template";var J=N.bind({});J.args={},J.parameters={docs:{description:{story:"Search field."}}},J.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},J.parameters);var Q=["Example"]},"./src/components/Select/Select.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Multiple:()=>p,MultipleDisabled:()=>i,MultipleError:()=>v,Single:()=>a,SingleDisabled:()=>d,SingleError:()=>u,__namedExportsOrder:()=>S,default:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),y=e.n(r),T=e("./node_modules/react/index.js"),f=e("./node_modules/storybook-addon-designs/esm/index.js"),P=e("./.storybook/StoryPage.tsx"),O=e("./src/components/Select/Select.tsx"),x=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,j={Single:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},Multiple:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}}},C="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",m=[{label:"Agder",value:"Agder"},{label:"Innlandet",value:"Innlandet"},{label:"M\xF8re og Romsdal",value:"M\xF8re og Romsdal"},{label:"Nordland",value:"Nordland"},{label:"Oslo",value:"Oslo"},{label:"Rogaland",value:"Rogaland"},{label:"Vestfold og Telemark",value:"Vestfold og Telemark"},{label:"Troms og Finnmark",value:"Troms og Finnmark"},{label:"Tr\xF8ndelag",value:"Tr\xF8ndelag"},{label:"Vestland",value:"Vestland"},{label:"Viken",value:"Viken"}],D=m.map(function(M){return Object.assign({},M,{deleteButtonLabel:"Slett "+M.label})}),E={label:"Velg et fylke",multiple:!1,options:m},b={deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:D};const c={title:"Components/Select",component:O.P,parameters:{design:(0,f.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,x.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:E};var g=function(k){return(0,x.jsx)("div",{style:{width:"440px"},children:(0,x.jsx)(O.P,Object.assign({},k))})};g.displayName="Template";var a=g.bind({});a.args={},a.parameters={docs:{description:{story:"This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."}}};var d=g.bind({});d.args={disabled:!0},d.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var u=g.bind({});u.args={error:!0},u.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}};var p=g.bind({});p.args=b,p.parameters={docs:{description:{story:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed."}}};var i=g.bind({});i.args=Object.assign({},b,{disabled:!0}),i.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var v=g.bind({});v.args=Object.assign({},b,{error:!0}),v.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},a.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},a.parameters),d.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},d.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},u.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},p.parameters),i.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},i.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},v.parameters);var S=["Single","SingleDisabled","SingleError","Multiple","MultipleDisabled","MultipleError"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{IconFromNavIconLibrary:()=>b,ImportedCustomIcon:()=>c,__namedExportsOrder:()=>g,default:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),r=e("./.storybook/StoryPage.tsx"),y=e("./src/components/SvgIcon/index.ts"),T,f,P;function O(){return O=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(a[p]=u[p])}return a},O.apply(this,arguments)}var x=function(d){return n.createElement("svg",O({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},d),T||(T=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),f||(f=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),P||(P=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},h=e("./node_modules/react/jsx-runtime.js"),j=`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { config } from 'storybook-addon-designs';

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
  iconName: 'Success',
};
IconFromNavIconLibrary.parameters = {
  docs: {
    description: {
      story: "\`<SvgIcon iconName='Success' />\`",
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
`,C={IconFromNavIconLibrary:{startLoc:{col:49,line:38},endLoc:{col:1,line:40},startBody:{col:49,line:38},endBody:{col:1,line:40}},ImportedCustomIcon:{startLoc:{col:49,line:38},endLoc:{col:1,line:40},startBody:{col:49,line:38},endBody:{col:1,line:40}}},m="";const D={title:"Components/SvgIcon",component:y.l,parameters:{design:(0,_.vc)([{type:"figma",url:m},{type:"link",url:m}]),docs:{page:function(){return(0,h.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var E=function(d){return(0,h.jsx)(y.l,Object.assign({},d))};E.displayName="Template";var b=E.bind({});b.args={iconName:"Success"},b.parameters={docs:{description:{story:"`<SvgIcon iconName='Success' />`"}}};var c=E.bind({});c.args={svgIconComponent:(0,h.jsx)(x,{height:"2rem",width:"2rem"})},c.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},b.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},c.parameters);var g=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{BasicTable:()=>ce,SelectRows:()=>ue,__namedExportsOrder:()=>Ee,default:()=>$});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),v=e.n(i),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),M=e.n(S),k=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),G=e.n(k),W=e("./node_modules/react/index.js"),se=e("./node_modules/storybook-addon-designs/esm/index.js"),K=e("./node_modules/classnames/index.js"),ee=e.n(K),re=e("./.storybook/StoryPage.tsx"),Z=e("./src/components/Pagination/index.ts"),X=e("./src/components/Table/Table.tsx"),V=e("./src/components/Table/TableHeader.tsx"),U=e("./src/components/Table/TableCell.tsx"),q=e("./src/components/Table/TableRow.tsx"),F=e("./src/components/Table/TableBody.tsx"),w=e("./src/components/Table/Table.stories.module.css"),N=e.n(w),J=e("./src/components/Table/TableFooter.tsx"),Q=e("./node_modules/react/jsx-runtime.js");function L(te,ae){return B(te)||oe(te,ae)||A(te,ae)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(te,ae){if(!!te){if(typeof te=="string")return R(te,ae);var de=Object.prototype.toString.call(te).slice(8,-1);if(de==="Object"&&te.constructor&&(de=te.constructor.name),de==="Map"||de==="Set")return Array.from(te);if(de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de))return R(te,ae)}}function R(te,ae){(ae==null||ae>te.length)&&(ae=te.length);for(var de=0,pe=new Array(ae);de<ae;de++)pe[de]=te[de];return pe}function oe(te,ae){var de=te==null?null:typeof Symbol!="undefined"&&te[Symbol.iterator]||te["@@iterator"];if(de!=null){var pe=[],ge=!0,Te=!1,Oe,Ce;try{for(de=de.call(te);!(ge=(Oe=de.next()).done)&&(pe.push(Oe.value),!(ae&&pe.length===ae));ge=!0);}catch(he){Te=!0,Ce=he}finally{try{!ge&&de.return!=null&&de.return()}finally{if(Te)throw Ce}}return pe}}function B(te){if(Array.isArray(te))return te}var z=`import React, { useState } from 'react';
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
  const [selected, setSelected] = useState('');
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
              value={row.applicationNr}
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
`,H={BasicTable:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}},SelectRows:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}}},Y="";const $={title:"Components/Table",component:X.i,parameters:{design:(0,se.vc)([{type:"figma",url:Y},{type:"link",url:Y}]),docs:{page:function(){return(0,Q.jsx)(re.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function ne(te,ae,de,pe,ge){return{applicationNr:te,product:ae,status:de,imageSrc:pe,imageAlt:ge}}var le=[ne("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),ne("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),ne("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),ne("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),ne("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),ne("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),ne("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),ne("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],me=function(ae){var de=(0,W.useState)(""),pe=L(de,2),ge=pe[0],Te=pe[1],Oe=(0,W.useState)({idCell:"",sortDirection:U.Sr.NotActive}),Ce=L(Oe,2),he=Ce[0],Me=Ce[1],Se=(0,W.useState)(5),be=L(Se,2),ve=be[0],Ie=be[1],Be=(0,W.useState)(0),ke=L(Be,2),Ae=ke[0],Ke=ke[1],Ue=function(je){var xe=je.selectedValue;Te(xe)},Re=function(je){var xe=je.idCell,We=je.previousSortDirection;We===U.Sr.Ascending?Me({idCell:xe,sortDirection:U.Sr.Descending}):We===U.Sr.Descending?Me({idCell:xe,sortDirection:U.Sr.Ascending}):Me({idCell:xe,sortDirection:U.Sr.Descending})},Fe=function(je){Ie(parseInt(je.target.value,10)),Ke(0)},we=function(je){Ke(je)};return(0,Q.jsxs)(X.i,{selectRows:ae.selectRows,onChange:Ue,selectedValue:ge,children:[(0,Q.jsx)(V.x,{children:(0,Q.jsxs)(q.S,{children:[(0,Q.jsx)(U.pj,{onChange:Re,id:"S\xF8knadsnr.",sortDirecton:he.idCell==="S\xF8knadsnr."?he.sortDirection:U.Sr.NotActive,children:"S\xF8knadsnr."}),(0,Q.jsx)(U.pj,{id:"Produkt",onChange:Re,sortDirecton:he.idCell==="Produkt"?he.sortDirection:U.Sr.NotActive,children:"Produkt"}),(0,Q.jsx)(U.pj,{children:"Status"}),(0,Q.jsx)(U.pj,{children:"Bilde"})]})}),(0,Q.jsx)(F.R,{children:le.slice(Ae*ve,Ae*ve+ve).map(function(fe){return(0,Q.jsxs)(q.S,{value:fe.applicationNr,children:[(0,Q.jsx)(U.pj,{children:fe.applicationNr}),(0,Q.jsx)(U.pj,{children:fe.product}),(0,Q.jsx)(U.pj,{children:fe.status}),(0,Q.jsx)(U.pj,{children:(0,Q.jsx)("img",{className:ee()(N().checkmark),src:fe.imageSrc,alt:fe.imageAlt})})]},fe.applicationNr)})}),(0,Q.jsx)(J.y,{children:(0,Q.jsx)(q.S,{children:(0,Q.jsx)(U.pj,{colSpan:4,children:(0,Q.jsx)(Z.t,{numberOfRows:le.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:ve,onRowsPerPageChange:Fe,currentPage:Ae,setCurrentPage:we,rowsPerPageText:"Rader per side",pageDescriptionText:"av"})})})})]})};me.displayName="Template";var ce=me.bind({});ce.args={selectRows:!1},ce.parameters={docs:{description:{story:""}}};var ue=me.bind({});ue.args={selectRows:!0},ue.parameters={docs:{description:{story:""}}},ce.parameters=Object.assign({storySource:{source:`(args) => {
  const [selected, setSelected] = useState('');
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
              value={row.applicationNr}
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
  const [selected, setSelected] = useState('');
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
              value={row.applicationNr}
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
}`}},ue.parameters);var Ee=["BasicTable","SelectRows"]},"./src/components/TextArea/TextArea.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>D,Disabled:()=>g,Error:()=>E,ReadOnlyConfirm:()=>c,ReadOnlyInfo:()=>b,__namedExportsOrder:()=>a,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/TextArea/TextArea.tsx"),O=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,h={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},j="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const C={title:"Components/TextArea",component:P.K,parameters:{design:(0,y.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,O.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var m=function(u){return(0,O.jsx)(P.K,Object.assign({},u))};m.displayName="Template";var D=m.bind({});D.args={},D.parameters={docs:{description:{story:"Regular textarea."}}};var E=m.bind({});E.args={isValid:!1},E.parameters={docs:{description:{story:"Textarea displaying error."}}};var b=m.bind({});b.args={readOnly:!0,value:"Some text"},b.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var c=m.bind({});c.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},c.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var g=m.bind({});g.args={disabled:!0,value:"Some text"},g.parameters={docs:{description:{story:"Textarea as disabled."}}},D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},D.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},E.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},g.parameters);var a=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>D,Disabled:()=>a,Error:()=>b,NumberInput:()=>E,ReadOnlyConfirm:()=>g,ReadOnlyInfo:()=>c,__namedExportsOrder:()=>d,default:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),f=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/TextField/TextField.tsx"),O=e("./node_modules/react/jsx-runtime.js"),x=`import React from 'react';
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
`,h={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},j="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const C={title:"Components/TextField",component:P.n,parameters:{design:(0,y.vc)([{type:"figma",url:j},{type:"link",url:j}]),docs:{page:function(){return(0,O.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var m=function(p){return(0,O.jsx)(P.n,Object.assign({},p))};m.displayName="Template";var D=m.bind({});D.args={},D.parameters={docs:{description:{story:"Regular input field."}}};var E=m.bind({});E.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},E.parameters={docs:{description:{story:"Number input field."}}};var b=m.bind({});b.args={isValid:!1},b.parameters={docs:{description:{story:"Input field displaying error."}}};var c=m.bind({});c.args={readOnly:!0,value:"Some text"},c.parameters={docs:{description:{story:"Input field as readonly-info."}}};var g=m.bind({});g.args={readOnly:f.Hx.ReadOnlyConfirm,value:"Some text"},g.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var a=m.bind({});a.args={disabled:!0,value:"Some text"},a.parameters={docs:{description:{story:"Input field as disabled."}}},D.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},D.parameters),E.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},E.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},b.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},g.parameters),a.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},a.parameters);var d=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(l,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>L,__namedExportsOrder:()=>I,default:()=>J});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),O=e.n(P),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),h=e.n(x),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(j),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),D=e.n(m),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),b=e.n(E),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),a=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(a),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),p=e.n(u),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e.n(i),S=e("./node_modules/react/index.js"),M=e("./node_modules/storybook-addon-designs/esm/index.js"),k=e("./.storybook/StoryPage.tsx"),G=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),W=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),se=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),K=e.n(se),ee=e("./node_modules/react/jsx-runtime.js");function re(A,R){return q(A)||U(A,R)||X(A,R)||Z()}function Z(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(A,R){if(!!A){if(typeof A=="string")return V(A,R);var oe=Object.prototype.toString.call(A).slice(8,-1);if(oe==="Object"&&A.constructor&&(oe=A.constructor.name),oe==="Map"||oe==="Set")return Array.from(A);if(oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe))return V(A,R)}}function V(A,R){(R==null||R>A.length)&&(R=A.length);for(var oe=0,B=new Array(R);oe<R;oe++)B[oe]=A[oe];return B}function U(A,R){var oe=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(oe!=null){var B=[],z=!0,H=!1,Y,$;try{for(oe=oe.call(A);!(z=(Y=oe.next()).done)&&(B.push(Y.value),!(R&&B.length===R));z=!0);}catch(ne){H=!0,$=ne}finally{try{!z&&oe.return!=null&&oe.return()}finally{if(H)throw $}}return B}}function q(A){if(Array.isArray(A))return A}var F=`import React, { useState } from 'react';
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
`,w={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},N="";const J={title:"Components/Toggle button group",component:G.t,parameters:{design:(0,M.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,ee.jsx)(k.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var Q=function(){var R=(0,S.useState)("left"),oe=re(R,2),B=oe[0],z=oe[1],H=function($){var ne=$.selectedValue;z(ne)};return(0,ee.jsx)("div",{className:K().container,children:(0,ee.jsxs)(G.t,{onChange:H,selectedValue:B,children:[(0,ee.jsx)(W.C,{value:"left",children:"Aktivt valg"}),(0,ee.jsx)(W.C,{value:"right",children:"Mulig valg"})]})})};Q.displayName="Template";var L=Q.bind({});L.args={},L.argTypes={onChange:{control:!1},selectedValue:{control:!1}},L.parameters={docs:{description:{}}},L.parameters=Object.assign({storySource:{source:`() => {
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
}`}},L.parameters);var I=["Example"]},"./src/DesignTokens/index.ts":(l,s,e)=>{"use strict";e.d(s,{T:()=>D});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),f=e.n(T),P=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),O=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),x=1.6,h=/(\d*\.?\d+)rem(?=\W|$)/gim,j=function(c){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,a=Math.pow(10,g);return Math.round((c+Number.EPSILON)*a)/a},C=function(c){return typeof c=="string"?c.replace(h,function(g,a){var d=j(a*x);return d+"rem"}):c},m={get:function(c,g){if(g in c){var a=c[g];return typeof a=="object"?new Proxy(a,m):C(a)}}},D=new Proxy(P,m),E=new Proxy(O,m)},"./src/components/Accordion/Accordion.tsx":(l,s,e)=>{"use strict";e.d(s,{U:()=>y});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./src/components/Accordion/Accordion.module.css"),_=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),y=function(P){var O=P.children,x=P.open,h=P.onClick,j=P.iconVariant,C=j===void 0?o.Bt.Primary:j,m=(0,t.useId)(),D=(0,t.useId)();return(0,r.jsx)("div",{className:_().accordion,children:(0,r.jsx)(o.SY.Provider,{value:{onClick:h,open:x,headerId:m,contentId:D,iconVariant:C},children:O})})};y.displayName="Accordion";var T=null;try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:y.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(f){}},"./src/components/Accordion/AccordionContent.tsx":(l,s,e)=>{"use strict";e.d(s,{v:()=>_});var t=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./node_modules/react/jsx-runtime.js"),_=function(T){var f=T.children,P=(0,o.EF)(),O=P.open,x=P.contentId,h=P.headerId;return(0,n.jsx)("div",{children:O&&(0,n.jsx)("div",{"aria-expanded":O,id:x,"aria-labelledby":h,children:f})})};_.displayName="AccordionContent";var r=null;try{_.displayName="AccordionContent",_.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:_.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(y){}},"./src/components/Accordion/AccordionHeader.tsx":(l,s,e)=>{"use strict";e.d(s,{_:()=>P});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/Accordion/AccordionHeader.module.css"),r=e.n(_),y=e("./src/components/Accordion/Context.ts"),T=e("./src/components/Accordion/AccordionIcon.tsx"),f=e("./node_modules/react/jsx-runtime.js"),P=function(x){var h,j=x.children,C=x.actions,m=x.subtitle,D=(0,y.EF)(),E=D.onClick,b=D.open,c=D.headerId,g=D.contentId;return(0,f.jsxs)("div",{className:n()(r()["accordion-header"],(h={},h[r()["accordion-header--subtitle"]]=m,h)),children:[(0,f.jsx)(T.X,{}),(0,f.jsxs)("button",{className:n()(r()["accordion-header__title"]),"aria-expanded":b,type:"button",onClick:E,id:c,"aria-controls":g,children:[j,(m==null?void 0:m.length)&&(0,f.jsx)("div",{"data-testid":"accordion-header-subtitle",className:n()(r()["accordion-header__subtitle"]),children:m})]}),(0,f.jsx)("div",{className:n()(r()["accordion-header__actions"]),children:C})]})};P.displayName="AccordionHeader";try{P.displayName="AccordionHeader",P.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:P.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(O){}},"./src/components/Accordion/AccordionIcon.tsx":(l,s,e)=>{"use strict";e.d(s,{X:()=>m});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),_=e.n(n),r=e("./src/components/Accordion/AccordionIcon.module.css"),y=e.n(r),T=e("./src/components/Accordion/Context.ts"),f;function P(){return P=Object.assign?Object.assign.bind():function(E){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(E[g]=c[g])}return E},P.apply(this,arguments)}var O=function(b){return o.createElement("svg",P({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b),f||(f=o.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},x;function h(){return h=Object.assign?Object.assign.bind():function(E){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(E[g]=c[g])}return E},h.apply(this,arguments)}var j=function(b){return o.createElement("svg",h({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b),x||(x=o.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},C=e("./node_modules/react/jsx-runtime.js"),m=function(){var b,c,g=(0,T.EF)(),a=g.onClick,d=g.open,u=g.iconVariant,p=[y()["accordion-icon"],(b={},b[y()["accordion-icon--opened"]]=d,b)],i=(c={height:20,width:20,className:_()(p)},c["data-testid"]=u,c.onClick=a,c);switch(u){case T.Bt.Primary:return(0,C.jsx)(O,Object.assign({},i));case T.Bt.Secondary:return(0,C.jsx)(j,Object.assign({},i))}};const D=null},"./src/components/Accordion/Context.ts":(l,s,e)=>{"use strict";e.d(s,{Bt:()=>o,EF:()=>_,SY:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Secondary="secondary"})(o||(o={}));var n=(0,t.createContext)(void 0),_=function(){var y=(0,t.useContext)(n);if(y===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return y}},"./src/components/AppWrapper/AppWrapper.tsx":(l,s,e)=>{"use strict";e.d(s,{O:()=>T});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),n=e.n(o),_=e("./src/components/AppWrapper/AppWrapper.module.css"),r=e.n(_),y=e("./node_modules/react/jsx-runtime.js"),T=function(P){var O=P.children;return(0,y.jsx)("div",{children:O})};T.displayName="AppWrapper";try{T.displayName="AppWrapper",T.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:T.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(f){}},"./src/components/Button/index.ts":(l,s,e)=>{"use strict";e.d(s,{zx:()=>g,rp:()=>D,qE:()=>m,Wu:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),T=e.n(y),f=e("./src/components/SvgIcon/index.ts"),P=e("./src/components/Button/Button.module.css"),O=e.n(P),x=e("./node_modules/react/jsx-runtime.js"),h=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","iconName","svgIconComponent","type","className"];function j(a,d){if(a==null)return{};var u=C(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function C(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var m;(function(a){a.Small="small",a.Medium="medium",a.Large="large"})(m||(m={}));var D;(function(a){a.Primary="primary",a.Secondary="secondary",a.Success="success",a.Danger="danger",a.Inverted="inverted"})(D||(D={}));var E;(function(a){a.Filled="filled",a.Outline="outline",a.Quiet="quiet"})(E||(E={}));var b=function(d,u){if(d&&!u)return(0,x.jsx)(f.l,{iconName:d,className:T()(O().icon)});if(!d&&u)return(0,x.jsx)(f.l,{svgIconComponent:u,className:T()(O().icon)})},c=function(d,u){var p,i,v,S=d.children,M=d.color,k=M===void 0?D.Primary:M,G=d.variant,W=G===void 0?E.Filled:G,se=d.size,K=se===void 0?m.Small:se,ee=d.fullWidth,re=ee===void 0?!1:ee,Z=d.dashedBorder,X=Z===void 0?!1:Z,V=d.iconPlacement,U=V===void 0?"left":V,q=d.iconName,F=d.svgIconComponent,w=d.type,N=w===void 0?"button":w,J=d.className,Q=j(d,h);return(0,x.jsxs)("button",Object.assign({},Q,{ref:u,className:T()(O().button,O()["button--"+K],O()["button--"+W],O()["button--"+k],O()["button--"+W+"--"+k],(p={},p[O()["button--full-width"]]=re,p),(i={},i[O()["button--dashed-border"]]=X,i),(v={},v[O()["button--only-icon"]]=!S&&q,v),J),type:N,children:[(U==="left"||!S)&&b(q,F),S,U==="right"&&b(q,F)]}))};c.displayName="Button";const g=(0,r.forwardRef)(c)},"./src/components/Checkbox/Checkbox.tsx":(l,s,e)=>{"use strict";e.d(s,{X:()=>j});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e.n(r),T=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),P=e.n(f),O=e("./src/components/Checkbox/Checkbox.module.css"),x=e.n(O),h=e("./node_modules/react/jsx-runtime.js"),j=function(m){var D=m.checkboxId,E=m.checked,b=m.compact,c=m.description,g=m.disabled,a=m.error,d=m.hideLabel,u=m.label,p=m.name,i=m.onChange,v=m.readOnly,S=(0,T.useId)(),M=D||"checkbox-"+S,k=u?M+"-label":void 0,G=c?M+"-description":void 0,W=u&&!d;return(0,h.jsxs)("label",{className:P()(x().wrapper,E&&x()["wrapper--checked"],a&&x()["wrapper--error"],g&&x()["wrapper--disabled"],b&&x()["wrapper--compact"],v&&x()["wrapper--read-only"]),htmlFor:M,children:[!v&&(0,h.jsxs)("span",{className:x()["checkbox-wrapper"],children:[(0,h.jsx)("input",{"aria-describedby":G,"aria-label":W?void 0:u,"aria-labelledby":W?k:void 0,checked:E!=null?E:!1,className:x().checkbox,disabled:g,id:M,name:p,onChange:g?void 0:i,type:"checkbox"}),(0,h.jsx)("span",{className:x()["visible-box"],children:(0,h.jsx)("span",{className:x()["visible-box__checkmark"]})})]}),(W||c)&&(0,h.jsxs)("span",{className:x()["label-and-description"],children:[W&&(0,h.jsx)("span",{className:x().label,id:M+"-label",children:u}),c&&(0,h.jsx)("span",{className:x().description,id:M+"-description",children:c})]})]})};j.displayName="Checkbox";try{j.displayName="Checkbox",j.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:j.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(C){}},"./src/components/CheckboxGroup/CheckboxGroup.tsx":(l,s,e)=>{"use strict";e.d(s,{c:()=>Z,T:()=>K});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),b=e("./node_modules/react/index.js"),c=e("./node_modules/classnames/index.js"),g=e.n(c),a=e("./src/components/index.ts"),d=e("./src/components/FieldSet/FieldSet.tsx");function u(X,V){if(X===V)return!0;if(X===void 0||V===void 0||X.length!==V.length)return!1;for(var U in X)if(X[U]!==V[U])return!1;return!0}var p=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),i=e.n(p),v=e("./node_modules/react/jsx-runtime.js");function S(X,V){return se(X)||W(X,V)||k(X,V)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k(X,V){if(!!X){if(typeof X=="string")return G(X,V);var U=Object.prototype.toString.call(X).slice(8,-1);if(U==="Object"&&X.constructor&&(U=X.constructor.name),U==="Map"||U==="Set")return Array.from(X);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return G(X,V)}}function G(X,V){(V==null||V>X.length)&&(V=X.length);for(var U=0,q=new Array(V);U<V;U++)q[U]=X[U];return q}function W(X,V){var U=X==null?null:typeof Symbol!="undefined"&&X[Symbol.iterator]||X["@@iterator"];if(U!=null){var q=[],F=!0,w=!1,N,J;try{for(U=U.call(X);!(F=(N=U.next()).done)&&(q.push(N.value),!(V&&q.length===V));F=!0);}catch(Q){w=!0,J=Q}finally{try{!F&&U.return!=null&&U.return()}finally{if(w)throw J}}return q}}function se(X){if(Array.isArray(X))return X}var K;(function(X){X.Vertical="vertical",X.Horizontal="horizontal"})(K||(K={}));var ee=function(V,U){switch(U.type){case"check":return V.concat([U.name]);case"uncheck":return V.filter(function(q){return q!==U.name});case"reset":return U.state}},re=function(V){return V.filter(function(U){var q=U.checked;return q}).map(function(U){var q=U.name;return q})},Z=function(V){var U=V.compact,q=V.description,F=V.disabled,w=V.error,N=V.items,J=V.legend,Q=V.onChange,L=V.variant,I=L===void 0?K.Vertical:L,A=N.map(function($){return $.name});if(A.length!==new Set(A).size)throw Error("Each name in the checkbox group must be unique.");var R=(0,b.useReducer)(ee,re(N)),oe=S(R,2),B=oe[0],z=oe[1];(0,b.useEffect)(function(){return z({type:"reset",state:re(N)})},[N]);var H=(0,b.useRef)(!0),Y=(0,b.useRef)(B);return(0,b.useEffect)(function(){H.current?H.current=!1:Q&&!F&&!u(Y.current,B)&&(Q(B),Y.current=B)},[B,Q,F]),(0,v.jsx)(a.C3,{className:g()(i()["checkbox-group"],U&&i()["checkbox-group--compact"]),description:q,disabled:F,error:w,legend:J,size:U?d.w.Xsmall:d.w.Small,children:(0,v.jsx)("div",{className:g()(i()["checkbox-group__list"],i()["checkbox-group__list--"+I]),children:N.map(function($){return(0,v.jsx)(a.XZ,{checkboxId:$.checkboxId,checked:B.includes($.name),compact:U,description:$.description,disabled:F||$.disabled,error:!!w,label:$.label,name:$.name,onChange:function(le){z({type:le.target.checked?"check":"uncheck",name:$.name})}},$.name)})})})};Z.displayName="CheckboxGroup";try{Z.displayName="CheckboxGroup",Z.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:Z.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(X){}},"./src/components/CircularProgress/CircularProgress.tsx":(l,s,e)=>{"use strict";e.d(s,{D:()=>f});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(t),n=e("./node_modules/react/index.js"),_=e("./src/DesignTokens/index.ts"),r=e("./src/components/CircularProgress/CircularProgress.module.css"),y=e.n(r),T=e("./node_modules/react/jsx-runtime.js"),f=function(x){var h=x.value,j=x.width,C=j===void 0?70:j,m=x.strokeWidth,D=m===void 0?2.5:m,E=x.ariaLabel,b=x.label,c=x.id,g=c+"-label",a=!E&&b?g:void 0;return(0,T.jsxs)("div",{id:c,className:y().container,style:{width:C+"px"},role:"progressbar","aria-labelledby":a,"aria-label":E,children:[b&&(0,T.jsx)("div",{id:g,className:y().label,children:b}),(0,T.jsxs)("svg",{className:y().svg,viewBox:"0 0 35.8 35.8",children:[(0,T.jsx)(P,{stroke:_.T.ColorsBlue200,strokeWidth:D}),(0,T.jsx)(P,{strokeWidth:D,stroke:_.T.ColorsBlue900,strokeDashoffset:100-h,strokeDasharray:"100 100",className:y().circleTransition})]})]})};f.displayName="CircularProgress";var P=function(x){return(0,T.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},x))};P.displayName="Circle";try{f.displayName="CircularProgress",f.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:f.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(O){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(l,s,e)=>{"use strict";e.d(s,{B:()=>T});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/ErrorMessage/ErrorMessage.module.css"),r=e.n(_),y=e("./node_modules/react/jsx-runtime.js"),T=function(P){var O=P.id,x=P.children,h=P.ariaLabel;return(0,y.jsx)("div",{"data-testid":"ErrorMessage","aria-label":h,id:O,role:"alertdialog",className:n()(r()["error-message-wrapper"]),children:x})};T.displayName="ErrorMessage";try{T.displayName="ErrorMessage",T.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:T.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(f){}},"./src/components/FieldSet/FieldSet.tsx":(l,s,e)=>{"use strict";e.d(s,{C:()=>j,w:()=>h});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),_=e.n(n),r=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),T=e.n(y),f=e("./src/components/index.ts"),P=e("./src/components/FieldSet/FieldSet.module.css"),O=e.n(P),x=e("./node_modules/react/jsx-runtime.js"),h;(function(C){C.Xsmall="xsmall",C.Small="small"})(h||(h={}));var j=function(m){var D=m.children,E=m.className,b=m.description,c=m.disabled,g=m.error,a=m.legend,d=m.size,u=d===void 0?h.Small:d;return(0,x.jsxs)("fieldset",{className:T()(O()["field-set"],O()["field-set--"+u],E),disabled:c,children:[a&&(0,x.jsx)("legend",{className:O()["field-set__legend"],children:a}),b&&(0,x.jsx)("p",{className:O()["field-set__description"],children:b}),(0,x.jsx)("div",{className:O()["field-set__content"],children:D}),g&&(0,x.jsx)("div",{className:O()["field-set__error-message"],children:(0,x.jsx)(f.Bc,{children:g})})]})};j.displayName="FieldSet";try{j.displayName="FieldSet",j.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:j.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(C){}},"./src/components/List/Context.ts":(l,s,e)=>{"use strict";e.d(s,{N4:()=>o,UU:()=>_,ZM:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Solid="solid",r.Dashed="dashed"})(o||(o={}));var n=(0,t.createContext)({borderStyle:o.Solid}),_=function(){var y=(0,t.useContext)(n);if(y===void 0)throw new Error("useListContext must be used within a ListContext");return y}},"./src/components/List/List.tsx":(l,s,e)=>{"use strict";e.d(s,{a:()=>f});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/List/List.module.css"),r=e.n(_),y=e("./src/components/List/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),f=function(O){var x=O.children,h=O.borderStyle,j=h===void 0?y.N4.Solid:h;return(0,T.jsx)("ul",{className:n()(r().list,r()["list--"+j]),children:(0,T.jsx)(y.ZM.Provider,{value:{borderStyle:j},children:x})})};f.displayName="List";try{f.displayName="List",f.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:f.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(P){}},"./src/components/List/ListItem.tsx":(l,s,e)=>{"use strict";e.d(s,{H:()=>f});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/List/ListItem.module.css"),r=e.n(_),y=e("./src/components/List/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),f=function(O){var x=O.children,h=(0,y.UU)(),j=h.borderStyle;return(0,T.jsx)("li",{className:n()(r()["list-item"],r()["list-item--"+j]),children:x})};f.displayName="ListItem";try{f.displayName="ListItem",f.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:f.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(P){}},"./src/components/Map/Map.tsx":(l,s,e)=>{"use strict";e.d(s,{D:()=>d});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(t),n=e("./node_modules/leaflet/dist/images/marker-icon.png"),_=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),r=e("./node_modules/leaflet/dist/images/marker-shadow.png"),y=e("./node_modules/leaflet/dist/leaflet-src.js"),T=e.n(y),f=e("./node_modules/react-leaflet/lib/MapContainer.js"),P=e("./node_modules/react-leaflet/lib/TileLayer.js"),O=e("./node_modules/react-leaflet/lib/AttributionControl.js"),x=e("./node_modules/react-leaflet/lib/Marker.js"),h=e("./node_modules/react-leaflet/lib/hooks.js"),j=e("./node_modules/react/index.js"),C=e("./src/components/Map/Map.module.css"),m=e.n(C),D=e("./node_modules/leaflet/dist/leaflet.css"),E=e.n(D),b=e("./node_modules/react/jsx-runtime.js"),c={latitude:64.888996,longitude:12.8186054},g=4,a=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],d=function(S){var M=S.readOnly,k=M===void 0?!1:M,G=S.layers,W=G===void 0?a:G,se=S.centerLocation,K=se===void 0?c:se,ee=S.zoom,re=ee===void 0?g:ee,Z=S.markerLocation,X=S.onClick;return(0,b.jsxs)(f.h,{className:m().map,center:p(K),zoom:re,zoomControl:!k,dragging:!k,touchZoom:!k,doubleClickZoom:!k,scrollWheelZoom:!k,attributionControl:!1,children:[W.map(function(V,U){return(0,b.jsx)(P.I,{url:V.url,attribution:V.attribution,subdomains:V.subdomains?V.subdomains:[],opacity:k?.5:1},U)}),(0,b.jsx)(O.z,{prefix:!1}),(0,b.jsx)(u,{markerLocation:Z}),(0,b.jsx)(i,{readOnly:k,onClick:X})]})};d.displayName="Map";function u(v){var S=v.markerLocation,M=(0,y.icon)({iconUrl:n,iconRetinaUrl:_,shadowUrl:r,iconSize:[25,41],iconAnchor:[12,41]});return S?(0,b.jsx)(x.J,{position:p(S),icon:M}):null}function p(v){return[v.latitude,v.longitude]}var i=function(S){var M=S.onClick,k=S.readOnly;return(0,h.zV)({click:function(W){M&&!k&&M({latitude:W.latlng.lat,longitude:W.latlng.lng})}}),null};try{d.displayName="Map",d.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:d.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(v){}},"./src/components/Page/Context.ts":(l,s,e)=>{"use strict";e.d(s,{gL:()=>o,lO:()=>_,z1:()=>n});var t=e("./node_modules/react/index.js"),o;(function(r){r.Primary="primary",r.Success="success"})(o||(o={}));var n=(0,t.createContext)({color:o.Primary}),_=function(){var y=(0,t.useContext)(n);if(y===void 0)throw new Error("usePageContext must be used within a PageContext");return y}},"./src/components/Page/Page.tsx":(l,s,e)=>{"use strict";e.d(s,{T:()=>y});var t=e("./node_modules/react/index.js"),o=e("./src/components/Page/Context.ts"),n=e("./src/components/Page/Page.module.css"),_=e.n(n),r=e("./node_modules/react/jsx-runtime.js"),y=function(f){var P=f.children,O=f.color,x=O===void 0?o.gL.Primary:O;return(0,r.jsx)("div",{className:_().page,children:(0,r.jsx)(o.z1.Provider,{value:{color:x},children:P})})};y.displayName="Page";try{y.displayName="Page",y.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:y.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(T){}},"./src/components/Page/PageContent.tsx":(l,s,e)=>{"use strict";e.d(s,{J:()=>T});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/Page/PageContent.module.css"),r=e.n(_),y=e("./node_modules/react/jsx-runtime.js"),T=function(P){var O=P.children;return(0,y.jsx)("div",{className:n()(r()["page-content"]),children:O})};T.displayName="PageContent";try{T.displayName="PageContent",T.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:T.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(f){}},"./src/components/Page/PageHeader.tsx":(l,s,e)=>{"use strict";e.d(s,{m:()=>h});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/Page/Context.ts"),r=e("./src/components/Page/PageHeader.module.css"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e("./src/components/Page/PageIcon.module.css"),P=e.n(f),O=e("./node_modules/react/jsx-runtime.js"),x=function(C){var m=C.icon,D={className:n()(P()["page-icon__element"])};return(0,O.jsx)("div",{className:P()["page-icon"],children:(0,t.cloneElement)(m,Object.assign({},D))})};x.displayName="PageIcon";try{x.displayName="PageIcon",x.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:x.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(j){}var h=function(C){var m=C.children,D=C.icon,E=(0,_.lO)(),b=E.color;return(0,O.jsxs)("header",{className:n()(y()["page-header"],y()["page-header--"+b]),"data-testid":"page-header",children:[D&&(0,O.jsx)(x,{icon:D}),(0,O.jsx)("span",{children:m})]})};h.displayName="PageHeader";try{h.displayName="PageHeader",h.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:h.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(j){}},"./src/components/Pagination/Pagination.tsx":(l,s,e)=>{"use strict";e.d(s,{t:()=>q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),j=e("./node_modules/react/index.js"),C=e("./node_modules/classnames/index.js"),m=e.n(C),D=e("./src/components/Pagination/Pagination.module.css"),E=e.n(D),b,c;function g(){return g=Object.assign?Object.assign.bind():function(F){for(var w=1;w<arguments.length;w++){var N=arguments[w];for(var J in N)Object.prototype.hasOwnProperty.call(N,J)&&(F[J]=N[J])}return F},g.apply(this,arguments)}var a=function(w){return j.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},w),b||(b=j.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),c||(c=j.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},d,u;function p(){return p=Object.assign?Object.assign.bind():function(F){for(var w=1;w<arguments.length;w++){var N=arguments[w];for(var J in N)Object.prototype.hasOwnProperty.call(N,J)&&(F[J]=N[J])}return F},p.apply(this,arguments)}var i=function(w){return j.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},w),d||(d=j.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=j.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},v;function S(){return S=Object.assign?Object.assign.bind():function(F){for(var w=1;w<arguments.length;w++){var N=arguments[w];for(var J in N)Object.prototype.hasOwnProperty.call(N,J)&&(F[J]=N[J])}return F},S.apply(this,arguments)}var M=function(w){return j.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},w),v||(v=j.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},k,G;function W(){return W=Object.assign?Object.assign.bind():function(F){for(var w=1;w<arguments.length;w++){var N=arguments[w];for(var J in N)Object.prototype.hasOwnProperty.call(N,J)&&(F[J]=N[J])}return F},W.apply(this,arguments)}var se=function(w){return j.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},w),k||(k=j.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),G||(G=j.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},K=e("./node_modules/react/jsx-runtime.js");function ee(F,w){return U(F)||V(F,w)||Z(F,w)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(F,w){if(!!F){if(typeof F=="string")return X(F,w);var N=Object.prototype.toString.call(F).slice(8,-1);if(N==="Object"&&F.constructor&&(N=F.constructor.name),N==="Map"||N==="Set")return Array.from(F);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return X(F,w)}}function X(F,w){(w==null||w>F.length)&&(w=F.length);for(var N=0,J=new Array(w);N<w;N++)J[N]=F[N];return J}function V(F,w){var N=F==null?null:typeof Symbol!="undefined"&&F[Symbol.iterator]||F["@@iterator"];if(N!=null){var J=[],Q=!0,L=!1,I,A;try{for(N=N.call(F);!(Q=(I=N.next()).done)&&(J.push(I.value),!(w&&J.length===w));Q=!0);}catch(R){L=!0,A=R}finally{try{!Q&&N.return!=null&&N.return()}finally{if(L)throw A}}return J}}function U(F){if(Array.isArray(F))return F}var q=function(w){var N,J,Q,L,I=w.numberOfRows,A=w.rowsPerPageOptions,R=w.rowsPerPage,oe=w.onRowsPerPageChange,B=w.currentPage,z=w.setCurrentPage,H=w.rowsPerPageText,Y=w.pageDescriptionText,$=(0,j.useState)(1),ne=ee($,2),le=ne[0],me=ne[1];(0,j.useEffect)(function(){I<R?me(1):me(Math.ceil(I/R))},[R,I]);var ce=function(){B<le-1&&z(B+1)},ue=function(){B>0&&z(B-1)},Ee=function(){var ae=1+B*R,de=R*(B+1)>I?I:R*(B+1);return(0,K.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ae+"-"+de+" "+Y+" "+I})};return(0,K.jsxs)("div",{className:m()(E()["pagination-wrapper"]),children:[(0,K.jsx)("span",{style:{marginRight:"26px"},children:H}),(0,K.jsx)("select",{style:{marginRight:"25px"},value:R,onChange:function(ae){return oe(ae)},children:A.map(function(te){return(0,K.jsx)("option",{value:te,children:te},te)})}),Ee(),(0,K.jsx)(M,{tabIndex:B!==0?0:void 0,className:m()(E()["pagination-icon"],(N={},N[E()["pagination-icon--disabled"]]=B===0,N)),onClick:function(){return z(0)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&z(0)},"data-testid":"first-page-icon"}),(0,K.jsx)(i,{tabIndex:B!==0?0:void 0,className:m()(E()["pagination-icon"],(J={},J[E()["pagination-icon--disabled"]]=B===0,J)),onClick:function(){return ue()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ue()}}),(0,K.jsx)(a,{tabIndex:B!==le-1?0:void 0,className:m()(E()["pagination-icon"],(Q={},Q[E()["pagination-icon--disabled"]]=B===le-1,Q)),onClick:function(){return ce()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ce()}}),(0,K.jsx)(se,{tabIndex:B!==le-1?0:void 0,className:m()(E()["pagination-icon"],(L={},L[E()["pagination-icon--disabled"]]=B===le-1,L)),onClick:function(){return z(le-1)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&z(le-1)}})]})};q.displayName="Pagination";try{q.displayName="Pagination",q.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},rowsPerPageText:{defaultValue:null,description:"",name:"rowsPerPageText",required:!0,type:{name:"string"}},pageDescriptionText:{defaultValue:null,description:"",name:"pageDescriptionText",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:q.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(F){}},"./src/components/Pagination/index.ts":(l,s,e)=>{"use strict";e.d(s,{t:()=>t.t});var t=e("./src/components/Pagination/Pagination.tsx")},"./src/components/Panel/Panel.tsx":(l,s,e)=>{"use strict";e.d(s,{s:()=>u,c:()=>c});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),r=e("./src/DesignTokens/index.ts"),y,T,f;function P(){return P=Object.assign?Object.assign.bind():function(p){for(var i=1;i<arguments.length;i++){var v=arguments[i];for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(p[S]=v[S])}return p},P.apply(this,arguments)}var O=function(i){return t.createElement("svg",P({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},i),y||(y=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),T||(T=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),f||(f=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},x,h,j;function C(){return C=Object.assign?Object.assign.bind():function(p){for(var i=1;i<arguments.length;i++){var v=arguments[i];for(var S in v)Object.prototype.hasOwnProperty.call(v,S)&&(p[S]=v[S])}return p},C.apply(this,arguments)}var m=function(i){return t.createElement("svg",C({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},i),x||(x=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),h||(h=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),j||(j=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},D=e("./src/components/Panel/Panel.module.css"),E=e.n(D),b=e("./node_modules/react/jsx-runtime.js"),c;(function(p){p.Success="success",p.Info="info",p.Warning="warning",p.Error="error"})(c||(c={}));var g=function(i){var v=i.size,S=i.variant;switch(S){case c.Info:case c.Error:case c.Warning:return(0,b.jsx)(O,{style:{width:v,height:v},"data-testid":"panel-icon-info"});case c.Success:return(0,b.jsx)(m,{style:{width:v,height:v},"data-testid":"panel-icon-success"})}},a=function(i){var v=i.forceMobileLayout,S=(0,_.a)("(max-width: "+r.T.BreakpointsSm+")");return v?!0:S},d=function(i){var v=i.children;return(0,b.jsx)("div",{className:n()(E()["panel__pointer-position"]),children:v})};d.displayName="defaultRenderArrow";var u=function(i){var v,S=i.renderIcon,M=S===void 0?g:S,k=i.title,G=i.children,W=i.variant,se=W===void 0?c.Info:W,K=i.showPointer,ee=K===void 0?!1:K,re=i.showIcon,Z=re===void 0?!0:re,X=i.forceMobileLayout,V=X===void 0?!1:X,U=i.renderArrow,q=U===void 0?d:U,F=a({forceMobileLayout:V}),w=F?r.T.ComponentPanelSizeIconXs:r.T.ComponentPanelSizeIconMd;return(0,b.jsxs)("div",{className:n()(E().panel,(v={},v[E()["panel--mobile-layout"]]=F,v)),children:[ee&&q({children:(0,b.jsx)("div",{"data-testid":"panel-pointer",className:n()(E().panel__pointer,E()["panel__pointer--"+se])})}),(0,b.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(E()["panel__content-wrapper"],E()["panel__content-wrapper--"+se]),children:[Z&&(0,b.jsx)("div",{"data-testid":"panel-icon-wrapper",className:E()["panel__icon-wrapper"],children:M({size:w,variant:se})}),(0,b.jsxs)("div",{className:E().panel__content,children:[k&&(0,b.jsx)("h2",{className:E().panel__header,children:k}),(0,b.jsx)("div",{className:E().panel__body,children:G})]})]})]})};u.displayName="Panel";try{u.displayName="Panel",u.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:u.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(p){}},"./src/components/Panel/PopoverPanel.tsx":(l,s,e)=>{"use strict";e.d(s,{H:()=>O});var t=e("./node_modules/react/index.js"),o=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),n=e("./node_modules/classnames/index.js"),_=e.n(n),r=e("./src/components/Panel/Panel.tsx"),y=e("./src/components/Panel/PopoverPanel.module.css"),T=e.n(y),f=e("./node_modules/react/jsx-runtime.js"),P=function(j){var C=j.children;return(0,f.jsx)(o.Eh,{className:_()(T()["popover-panel__arrow"]),asChild:!0,children:C})};P.displayName="renderArrow";var O=function(j){var C=j.children,m=j.variant,D=m===void 0?r.c.Warning:m,E=j.trigger,b=j.side,c=b===void 0?"top":b,g=j.title,a=j.showIcon,d=j.forceMobileLayout,u=j.showPointer,p=u===void 0?!0:u,i=j.onOpenChange,v=j.open,S=v===void 0?!1:v;return(0,f.jsxs)(o.fC,{open:S,onOpenChange:i,children:[(0,f.jsx)(o.xz,{asChild:!0,role:"button",children:E}),(0,f.jsx)(o.VY,{side:c,className:T()["popover-panel"],children:(0,f.jsx)(r.s,{title:g,showIcon:a,forceMobileLayout:d,showPointer:p,variant:D,renderArrow:P,children:C})})]})};O.displayName="PopoverPanel";var x=null;try{O.displayName="PopoverPanel",O.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:O.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(h){}},"./src/components/SearchField/SearchField.tsx":(l,s,e)=>{"use strict";e.d(s,{U:()=>E});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/_InputWrapper/index.ts"),j=e("./node_modules/react/jsx-runtime.js"),C=["id","onChange","disabled","label"];function m(b,c){if(b==null)return{};var g=D(b,c),a,d;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(b);for(d=0;d<u.length;d++)a=u[d],!(c.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,a)||(g[a]=b[a]))}return g}function D(b,c){if(b==null)return{};var g={},a=Object.keys(b),d,u;for(u=0;u<a.length;u++)d=a[u],!(c.indexOf(d)>=0)&&(g[d]=b[d]);return g}var E=function(c){var g=c.id,a=c.onChange,d=c.disabled,u=d===void 0?!1:d,p=c.label,i=m(c,C);return(0,j.jsx)(h.SP,{disabled:u,isSearch:!0,label:p,inputRenderer:function(S){var M=S.className,k=S.variant,G={id:g,disabled:u,className:x()(M)};return(0,j.jsx)("input",Object.assign({},G,i,{"data-testid":g+"-"+k,onChange:a}))}})};E.displayName="SearchField";try{E.displayName="SearchField",E.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:E.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(b){}},"./src/components/Select/Select.tsx":(l,s,e)=>{"use strict";e.d(s,{P:()=>Q});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),O=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),x=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),D=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),g=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),u=e.n(d),p=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),i=e("./src/components/_InputWrapper/index.ts"),v=e("./src/components/Select/MultiSelectItem.module.css"),S=e.n(v),M=e("./node_modules/react/jsx-runtime.js"),k=function(I){var A=I.deleteButtonLabel,R=I.disabled,oe=I.onDeleteButtonClick,B=I.value;return(0,M.jsxs)("span",{className:S()["multi-select-item"],children:[(0,M.jsx)("span",{children:B}),(0,M.jsx)("button",{"aria-label":A,className:S()["multi-select-item__delete-button"],disabled:R,onClick:oe,children:(0,M.jsx)("span",{className:S()["multi-select-item__delete-button__cross"]})})]})};k.displayName="MultiSelectItem";try{k.displayName="MultiSelectItem",k.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:k.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(L){}function G(L,I){(0,a.useEffect)(function(){var A=function(oe){oe.key===L&&I()};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[L,I])}function W(L,I){(0,a.useEffect)(function(){return document.addEventListener(L,I),function(){return document.removeEventListener(L,I)}},[L,I])}var se=e("./src/components/Select/Select.module.css"),K=e.n(se);function ee(L){return X(L)||Z(L)||q(L)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(L){if(typeof Symbol!="undefined"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function X(L){if(Array.isArray(L))return F(L)}function V(L,I){return N(L)||w(L,I)||q(L,I)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(L,I){if(!!L){if(typeof L=="string")return F(L,I);var A=Object.prototype.toString.call(L).slice(8,-1);if(A==="Object"&&L.constructor&&(A=L.constructor.name),A==="Map"||A==="Set")return Array.from(L);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return F(L,I)}}function F(L,I){(I==null||I>L.length)&&(I=L.length);for(var A=0,R=new Array(I);A<I;A++)R[A]=L[A];return R}function w(L,I){var A=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(A!=null){var R=[],oe=!0,B=!1,z,H;try{for(A=A.call(L);!(oe=(z=A.next()).done)&&(R.push(z.value),!(I&&R.length===I));oe=!0);}catch(Y){B=!0,H=Y}finally{try{!oe&&A.return!=null&&A.return()}finally{if(B)throw H}}return R}}function N(L){if(Array.isArray(L))return L}var J={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Q=function(I){var A=I.disabled,R=I.error,oe=I.hideLabel,B=I.inputId,z=I.label,H=I.multiple,Y=I.onChange,$=I.options,ne=I.value,le=$.map(function(_e){return _e.value});if(le.length!==new Set(le).size)throw Error("Each value in the option list must be unique.");var me=(0,a.useState)(H?ne!=null?ne:[]:[]),ce=V(me,2),ue=ce[0],Ee=ce[1],te=(0,a.useState)(H?void 0:ne),ae=V(te,2),de=ae[0],pe=ae[1],ge=$.findIndex(function(_e){return _e.value===de}),Te=(0,a.useState)(!1),Oe=V(Te,2),Ce=Oe[0],he=Oe[1];W("click",function(){return he(!1)}),W("keydown",function(){return he(!0)});var Me=(0,a.useState)(!1),Se=V(Me,2),be=Se[0],ve=Se[1],Ie=(0,a.useRef)(null),Be=(0,a.useRef)(null);(0,a.useEffect)(function(){var _e=Ie.current;if(_e){var ie=_e.offsetHeight,ye=_e.getElementsByTagName("li")[0].offsetHeight,Le=_e.scrollTop,Pe=Le+ie,De=ge*ye,Ne=De+ye,ze=De>=Le&&Ne<=Pe;ze||(De<Le?_e.scrollTop=De:_e.scrollTop=Ne-ie)}},[ge]);var ke=function(ie){var ye;return(ye=$.find(function(Le){return Le.value===ie}))!==null&&ye!==void 0?ye:{label:"",value:""}},Ae=function(ie,ye){ue!=null&&ue.length||pe(ye),Ee(ie),Y&&Y(ie)},Ke=function(ie){pe(ie),ve(!1),Y&&Y(ie)},Ue=function(ie){H?ue.includes(ie)?Re(ie):Ae([].concat(ee(ue),[ie]),ie):Ke(ie)},Re=function(ie){Ae(ue.filter(function(ye){return ye!==ie}),ie)},Fe=function(){Ae([])},we=(0,a.useCallback)(function(){if(de===void 0)pe($[0].value);else{var _e=ge+1;_e>=0&&_e<$.length&&pe($[_e].value)}ve(!0)},[de,ge,pe,$]),fe=(0,a.useCallback)(function(){if(de===void 0)pe($[$.length-1].value);else{var _e=ge-1;_e>=0&&_e<$.length&&pe($[_e].value)}ve(!0)},[de,ge,pe,$]);G(J.ArrowDown,function(){return be&&we()}),G(J.ArrowUp,function(){return be&&fe()}),G(J.Enter,function(){return be&&H&&de&&Ue(de)});var je=function(ie){return de===ie},xe=function(ie){return H?ue.includes(ie):je(ie)},We=(0,a.useId)(),Ve=Be.current?"calc("+Be.current.offsetWidth+"px + 2 * "+p.component.input.border_width.default.value+")":void 0;return(0,M.jsxs)("div",{className:u()(K().select,K()["select--"+(H?"multiple":"single")],be&&K()["select--expanded"],A&&K()["select--disabled"],Ce&&K()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,M.jsx)(i.SP,{disabled:A,inputId:B,inputRenderer:function(ie){var ye=ie.className,Le=ie.inputId;return(0,M.jsxs)("span",{className:u()(ye,K().select__field),ref:Be,children:[H&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("span",{className:K()["select--multiple__field__values"],children:ue.map(ke).map(function(Pe){return(0,M.jsx)(k,{deleteButtonLabel:Pe.deleteButtonLabel,disabled:A!=null?A:!1,onDeleteButtonClick:function(){return Re(Pe.value)},value:Pe.value},Pe.value)})}),(0,M.jsx)("button",{"aria-label":I.deleteButtonLabel,className:K()["select--multiple__field__delete-button"],disabled:!ue.length||A,onClick:function(){return Fe()},children:(0,M.jsx)("span",{className:K()["select--multiple__field__delete-button__cross"]})})]}),(0,M.jsxs)("button",{"aria-controls":We,"aria-expanded":be,"aria-label":z,className:K().select__field__button,disabled:A,id:Le,onBlur:function(){return ve(!1)},onClick:function(){return ve(!be)},onKeyDown:function(De){Object.values(J).includes(De.key)&&(De.preventDefault(),ve(!0))},role:"combobox",value:H?ue:de,children:[!H&&(0,M.jsx)("span",{className:K()["select--single__field__value"],children:ke(de).label}),(0,M.jsx)("span",{className:K()["select__field__arrow-wrapper"],children:(0,M.jsx)("span",{className:K()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!R,label:z,noFocusEffect:H,noPadding:!0,readOnly:!1}),(0,M.jsx)("ul",{className:K()["select__option-list"],id:We,ref:Ie,role:"listbox",style:{width:Ve},children:$.map(function(_e){return(0,M.jsx)("li",{"aria-selected":xe(_e.value),className:u()(K()["select__option-list__option"],xe(_e.value)&&K()["select__option-list__option--selected"],H&&je(_e.value)&&K()["select--multiple__option-list__option--focused"]),onClick:function(){return Ue(_e.value)},onMouseDown:function(ye){return ye.preventDefault()},onKeyDown:function(ye){return ye.preventDefault()},role:"option",value:_e.value,children:_e.label},_e.value)})})]})};Q.displayName="Select";try{Q.displayName="Select",Q.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Q.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(L){}},"./src/components/SvgIcon/index.ts":(l,s,e)=>{"use strict";e.d(s,{l:()=>x});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),y=e("./node_modules/@navikt/ds-icons/esm/index.js"),T=e("./node_modules/react/jsx-runtime.js"),f=["iconName","svgIconComponent"];function P(h,j){if(h==null)return{};var C=O(h,j),m,D;if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(h);for(D=0;D<E.length;D++)m=E[D],!(j.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(h,m)||(C[m]=h[m]))}return C}function O(h,j){if(h==null)return{};var C={},m=Object.keys(h),D,E;for(E=0;E<m.length;E++)D=m[E],!(j.indexOf(D)>=0)&&(C[D]=h[D]);return C}var x=function(j){var C=j.iconName,m=j.svgIconComponent,D=P(j,f);if(C){var E=y[C];if(E)return(0,T.jsx)(E,Object.assign({},D))}else if(m)return(0,r.cloneElement)(m,Object.assign({},D));return null};try{x.displayName="SvgIcon",x.__docgenInfo={description:"",displayName:"SvgIcon",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AddCircleFilled"'},{value:'"AddFilled"'},{value:'"AddPerson"'},{value:'"AddPersonFilled"'},{value:'"Applicant"'},{value:'"ApplicantFilled"'},{value:'"Attachment"'},{value:'"AttachmentFilled"'},{value:'"AutomaticSystem"'},{value:'"AutomaticSystemFilled"'},{value:'"BabyChangingRoom"'},{value:'"BabyChangingRoomFilled"'},{value:'"Back"'},{value:'"BackFilled"'},{value:'"Bag"'},{value:'"BagFilled"'},{value:'"Baggage"'},{value:'"BaggageFilled"'},{value:'"Bandage"'},{value:'"BandageFilled"'},{value:'"Bed"'},{value:'"BedFilled"'},{value:'"Bell"'},{value:'"BellFilled"'},{value:'"Bike"'},{value:'"BikeFilled"'},{value:'"Bookmark"'},{value:'"BookmarkFilled"'},{value:'"Bowl"'},{value:'"BowlFilled"'},{value:'"Braille"'},{value:'"BrailleFilled"'},{value:'"Calculator"'},{value:'"CalculatorFilled"'},{value:'"Calender"'},{value:'"CalenderFilled"'},{value:'"Camera"'},{value:'"CameraFilled"'},{value:'"Cancel"'},{value:'"CancelFilled"'},{value:'"Candle"'},{value:'"CandleFilled"'},{value:'"Cantine1"'},{value:'"Cantine1Filled"'},{value:'"Cantine2"'},{value:'"Cantine2Filled"'},{value:'"Car"'},{value:'"CarFilled"'},{value:'"Caseworker"'},{value:'"CaseworkerFilled"'},{value:'"Child"'},{value:'"ChildFilled"'},{value:'"Clock"'},{value:'"ClockFilled"'},{value:'"Close"'},{value:'"CloseFilled"'},{value:'"CoApplicant"'},{value:'"CoApplicantFilled"'},{value:'"Cognition"'},{value:'"CognitionFilled"'},{value:'"Collapse"'},{value:'"CollapseFilled"'},{value:'"Combifridge1"'},{value:'"Combifridge1Filled"'},{value:'"Combifridge2"'},{value:'"Combifridge2Filled"'},{value:'"Copy"'},{value:'"CopyFilled"'},{value:'"Coronavirus"'},{value:'"CoronavirusFilled"'},{value:'"Cup"'},{value:'"CupFilled"'},{value:'"Data"'},{value:'"DataFilled"'},{value:'"Decision"'},{value:'"DecisionCheck"'},{value:'"DecisionCheckFilled"'},{value:'"DecisionCross"'},{value:'"DecisionFilled"'},{value:'"Delete"'},{value:'"DeleteFilled"'},{value:'"Dialog"'},{value:'"DialogDots"'},{value:'"DialogDotsFilled"'},{value:'"DialogFilled"'},{value:'"DialogReport"'},{value:'"DialogReportFilled"'},{value:'"DialogSuccess"'},{value:'"DialogSuccessFilled"'},{value:'"DicisionCrossFilled"'},{value:'"DirectionSign"'},{value:'"DirectionSignFilled"'},{value:'"Disability"'},{value:'"DisabilityFilled"'},{value:'"Dish"'},{value:'"DishFilled"'},{value:'"Dishwasher"'},{value:'"DishwasherFilled"'},{value:'"Divide"'},{value:'"DivideFilled"'},{value:'"Down"'},{value:'"DownFilled"'},{value:'"Download"'},{value:'"DownloadFilled"'},{value:'"DrinkingWaterFilled"'},{value:'"DrinkingWaterStroke"'},{value:'"Edit"'},{value:'"EditFilled"'},{value:'"Elevator"'},{value:'"ElevatorFilled"'},{value:'"EllipsisCircleH"'},{value:'"EllipsisCircleHFilled"'},{value:'"EllipsisH"'},{value:'"EllipsisHFilled"'},{value:'"EllipsisV"'},{value:'"EllipsisVFilled"'},{value:'"Email"'},{value:'"EmailFilled"'},{value:'"EmailOpened"'},{value:'"EmailOpenedFilled"'},{value:'"Employer"'},{value:'"EmployerFilled"'},{value:'"Error"'},{value:'"ErrorColored"'},{value:'"ErrorFilled"'},{value:'"Eu"'},{value:'"EuFilled"'},{value:'"Expand"'},{value:'"ExpandFilled"'},{value:'"ExternalLink"'},{value:'"ExternalLinkFilled"'},{value:'"Eye"'},{value:'"EyeFilled"'},{value:'"EyeScreened"'},{value:'"EyeScreenedFilled"'},{value:'"Facilitet"'},{value:'"FacilitetFilled"'},{value:'"Family"'},{value:'"FamilyFilled"'},{value:'"FeedingBottle"'},{value:'"FeedingBottleFilled"'},{value:'"Female"'},{value:'"FemaleFilled"'},{value:'"File"'},{value:'"FileContent"'},{value:'"FileContentFilled"'},{value:'"FileError"'},{value:'"FileErrorFilled"'},{value:'"FileFilled"'},{value:'"FileFolder"'},{value:'"FileFolderFilled"'},{value:'"FileProgress"'},{value:'"FileProgressFilled"'},{value:'"FileSuccess"'},{value:'"FileSuccessFilled"'},{value:'"FillForms"'},{value:'"FillFormsFilled"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Filter2Filled"'},{value:'"FilterFilled"'},{value:'"Findout"'},{value:'"FindoutFilled"'},{value:'"FlowerBladeFall"'},{value:'"FlowerBladeFallFilled"'},{value:'"Folder"'},{value:'"FolderFilled"'},{value:'"ForkSpoonKnife"'},{value:'"ForkSpoonKnifeFilled"'},{value:'"Forward"'},{value:'"ForwardFilled"'},{value:'"Freezer"'},{value:'"FreezerFilled"'},{value:'"FullscreenEnter"'},{value:'"FullscreenEnterFilled"'},{value:'"FullscreenExit"'},{value:'"FullscreenExitFilled"'},{value:'"Glass"'},{value:'"GlassFilled"'},{value:'"Glasses"'},{value:'"GlassesFilled"'},{value:'"Globe"'},{value:'"GlobeFilled"'},{value:'"GuideDog"'},{value:'"GuideDogFilled"'},{value:'"Hamburger"'},{value:'"HamburgerFilled"'},{value:'"HandBandage"'},{value:'"HandBandageFilled"'},{value:'"HandsHeart"'},{value:'"HandsHeartFilled"'},{value:'"Hanger"'},{value:'"HangerFilled"'},{value:'"HealthCase"'},{value:'"HealthCaseFilled"'},{value:'"Hearing"'},{value:'"HearingFilled"'},{value:'"HearingImpaired"'},{value:'"HearingImpairedFilled"'},{value:'"HearingImpairedTeleslynge"'},{value:'"HearingImpairedTeleslyngeFilled"'},{value:'"HearingImpairedWireless"'},{value:'"HearingImpairedWirelessFilled"'},{value:'"Heart"'},{value:'"HeartBroken"'},{value:'"HeartBrokenFilled"'},{value:'"HeartFilled"'},{value:'"Helmet"'},{value:'"HelmetFilled"'},{value:'"Helptext"'},{value:'"HelptextFilled"'},{value:'"Historic"'},{value:'"HistoricFilled"'},{value:'"Home"'},{value:'"HomeFilled"'},{value:'"Horse"'},{value:'"HorseFilled"'},{value:'"Hospital"'},{value:'"HospitalFilled"'},{value:'"Infants"'},{value:'"InfantsFilled"'},{value:'"Information"'},{value:'"InformationColored"'},{value:'"InformationFilled"'},{value:'"Laptop"'},{value:'"LaptopFilled"'},{value:'"Law"'},{value:'"LawFilled"'},{value:'"Left"'},{value:'"LeftFilled"'},{value:'"LightBulb"'},{value:'"LightBulbFilled"'},{value:'"Like"'},{value:'"LikeFilled"'},{value:'"Link"'},{value:'"LinkFilled"'},{value:'"List"'},{value:'"ListFilled"'},{value:'"Locked"'},{value:'"LockedFilled"'},{value:'"Login"'},{value:'"LoginFilled"'},{value:'"Logout"'},{value:'"LogoutFilled"'},{value:'"Male"'},{value:'"MaleFilled"'},{value:'"MeetingRoom"'},{value:'"MeetingRoomFilled"'},{value:'"Minus"'},{value:'"MinusCircle"'},{value:'"MinusCircleFilled"'},{value:'"MinusFilled"'},{value:'"Mobile"'},{value:'"MobileFilled"'},{value:'"Money"'},{value:'"MoneyFilled"'},{value:'"Monitor"'},{value:'"MonitorFilled"'},{value:'"Motorcycle"'},{value:'"MotorcycleFilled"'},{value:'"Mute"'},{value:'"MuteFilled"'},{value:'"Neutral"'},{value:'"NeutralFilled"'},{value:'"NewTab"'},{value:'"NewTabFilled"'},{value:'"Next"'},{value:'"NextFilled"'},{value:'"NoSmoking"'},{value:'"NoSmokingFilled"'},{value:'"NorwegianFlag"'},{value:'"NorwegianFlagFilled"'},{value:'"Notes"'},{value:'"NotesFilled"'},{value:'"Office1"'},{value:'"Office1Filled"'},{value:'"Office2"'},{value:'"Office2Filled"'},{value:'"Over18"'},{value:'"Over18Filled"'},{value:'"Parking"'},{value:'"ParkingFilled"'},{value:'"Passport"'},{value:'"PassportFilled"'},{value:'"PensionBag"'},{value:'"PensionBagFilled"'},{value:'"PensionFlower"'},{value:'"PensionFlowerFilled"'},{value:'"People"'},{value:'"PeopleDialogFilled"'},{value:'"PeopleDialogOutline"'},{value:'"PeopleFilled"'},{value:'"PeopleInCircle"'},{value:'"PeopleInCircleFilled"'},{value:'"Picture"'},{value:'"PictureFilled"'},{value:'"Place"'},{value:'"PlaceFilled"'},{value:'"Plane"'},{value:'"PlaneFilled"'},{value:'"Plant"'},{value:'"PlantFilled"'},{value:'"Pregnant"'},{value:'"PregnantFilled"'},{value:'"Print"'},{value:'"PrintFilled"'},{value:'"PrinterRoom"'},{value:'"PrinterRoomFilled"'},{value:'"Profile"'},{value:'"ProfileFilled"'},{value:'"Quiet"'},{value:'"QuietFilled"'},{value:'"Receipt"'},{value:'"ReceiptFilled"'},{value:'"Reception"'},{value:'"ReceptionFilled"'},{value:'"Recycle"'},{value:'"RecycleFilled"'},{value:'"Refresh"'},{value:'"RefreshFilled"'},{value:'"Refrigerator"'},{value:'"RefrigeratorFilled"'},{value:'"Right"'},{value:'"RightFilled"'},{value:'"RotateLeft"'},{value:'"RotateLeftFilled"'},{value:'"RotateRight"'},{value:'"RotateRightFilled"'},{value:'"Ruler"'},{value:'"RulerFilled"'},{value:'"Sandglass"'},{value:'"SandglassFilled"'},{value:'"SaveFile"'},{value:'"SaveFileFilled"'},{value:'"Saving"'},{value:'"SavingFilled"'},{value:'"Scale"'},{value:'"ScaleFilled"'},{value:'"SchoolBag"'},{value:'"SchoolBagFilled"'},{value:'"Scissors"'},{value:'"ScissorsFilled"'},{value:'"Search"'},{value:'"SearchFilled"'},{value:'"Selection"'},{value:'"SelectionFilled"'},{value:'"SelfService"'},{value:'"SelfServiceFilled"'},{value:'"SelfServiceMobile"'},{value:'"SelfServiceMobileFilled"'},{value:'"Send"'},{value:'"SendFilled"'},{value:'"Service"'},{value:'"ServiceFilled"'},{value:'"Settings"'},{value:'"SettingsFilled"'},{value:'"ShakeHands"'},{value:'"ShakeHandsFilled"'},{value:'"Share"'},{value:'"ShareFilled"'},{value:'"Shower"'},{value:'"ShowerFilled"'},{value:'"Shredding"'},{value:'"ShreddingFilled"'},{value:'"Sight"'},{value:'"SightFilled"'},{value:'"Sightless"'},{value:'"SightlessFilled"'},{value:'"SignLanguage"'},{value:'"SignLanguageFilled"'},{value:'"SignLanguageTwoHands"'},{value:'"SignLanguageTwoHandsFilled"'},{value:'"SingleParent"'},{value:'"SingleParentFilled"'},{value:'"SocialAid"'},{value:'"SocialAidFilled"'},{value:'"SpeechBubble"'},{value:'"SpeechBubbleFilled"'},{value:'"Stairs"'},{value:'"StairsFilled"'},{value:'"Star"'},{value:'"StarFilled"'},{value:'"Stethoscope"'},{value:'"StethoscopeFilled"'},{value:'"StopWatch"'},{value:'"StopWatchFilled"'},{value:'"Stroller"'},{value:'"StrollerFilled"'},{value:'"Success"'},{value:'"SuccessColored"'},{value:'"SuccessFilled"'},{value:'"SuccessStroke"'},{value:'"Sun"'},{value:'"SunFilled"'},{value:'"System"'},{value:'"SystemError"'},{value:'"SystemErrorFilled"'},{value:'"SystemFilled"'},{value:'"Table"'},{value:'"TalkingRoom"'},{value:'"TalkingRoomFilled"'},{value:'"Task"'},{value:'"TaskFilled"'},{value:'"Teddy"'},{value:'"TeddyFilled"'},{value:'"Telephone"'},{value:'"TelephoneFilled"'},{value:'"ThermometerFilled"'},{value:'"ThermometerStroke"'},{value:'"Tooth"'},{value:'"ToothFilled"'},{value:'"Traning"'},{value:'"TraningFilled"'},{value:'"Truck"'},{value:'"TruckFilled"'},{value:'"Umbrella"'},{value:'"UmbrellaFilled"'},{value:'"Unlocked"'},{value:'"UnlockedFilled"'},{value:'"Up"'},{value:'"UpDown"'},{value:'"UpDownFilled"'},{value:'"UpFilled"'},{value:'"Upload"'},{value:'"UploadFilled"'},{value:'"Vacation"'},{value:'"VacationFilled"'},{value:'"VideoRoom"'},{value:'"VideoRoomFilled"'},{value:'"VolumeDown"'},{value:'"VolumeDownFilled"'},{value:'"VolumeUp"'},{value:'"VolumeUpFilled"'},{value:'"WaitingRoom"'},{value:'"WaitingRoomFilled"'},{value:'"Wardrobe"'},{value:'"WardrobeFilled"'},{value:'"Warning"'},{value:'"WarningColored"'},{value:'"WarningFilled"'},{value:'"Washing"'},{value:'"WashingFilled"'},{value:'"WateringCan"'},{value:'"WateringCanFilled"'},{value:'"Wireless"'},{value:'"WirelessFilled"'},{value:'"Wrench"'},{value:'"WrenchFilled"'},{value:'"ZoomIn"'},{value:'"ZoomInFilled"'},{value:'"ZoomOut"'},{value:'"ZoomOutFilled"'}]}},svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:x.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(h){}},"./src/components/Table/Context.ts":(l,s,e)=>{"use strict";e.d(s,{$K:()=>f,$e:()=>o,Je:()=>r,Sh:()=>_,XS:()=>n,wv:()=>T});var t=e("./node_modules/react/index.js"),o;(function(P){P.Header="header",P.Body="body",P.Footer="footer"})(o||(o={}));var n=(0,t.createContext)(void 0),_=function(){var O=(0,t.useContext)(n);if(O===void 0)throw new Error("useTableContext must be used within a TableContext");return O},r=(0,t.createContext)(void 0),y=function(){var O=useContext(r);if(O===void 0)throw new Error("useTableContext must be used within a TableContext");return O},T=(0,t.createContext)({variantStandard:o.Body}),f=function(){var O=(0,t.useContext)(T);if(O===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return O}},"./src/components/Table/Table.tsx":(l,s,e)=>{"use strict";e.d(s,{i:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/Table/Table.module.css"),j=e.n(h),C=e("./src/components/Table/Context.ts"),m=e("./node_modules/react/jsx-runtime.js"),D=["children","selectRows","onChange","selectedValue","className"];function E(a,d){if(a==null)return{};var u=b(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function b(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var c=function(d){var u=d.children,p=d.selectRows,i=p===void 0?!1:p,v=d.onChange,S=d.selectedValue,M=d.className,k=E(d,D);return(0,m.jsx)("table",Object.assign({},k,{className:x()(j().Table,M),children:(0,m.jsx)(C.XS.Provider,{value:{selectRows:i,onChange:v,selectedValue:S},children:u})}))};c.displayName="Table";var g=null;try{c.displayName="Table",c.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:c.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(a){}},"./src/components/Table/TableBody.tsx":(l,s,e)=>{"use strict";e.d(s,{R:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/Table/TableBody.module.css"),j=e.n(h),C=e("./src/components/Table/Context.ts"),m=e("./node_modules/react/jsx-runtime.js"),D=["children","className"];function E(a,d){if(a==null)return{};var u=b(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function b(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var c=function(d){var u=d.children,p=d.className,i=E(d,D),v=C.$e.Body;return(0,m.jsx)(C.wv.Provider,{value:{variantStandard:v},children:(0,m.jsx)("tbody",Object.assign({},i,{className:x()(j().TableBody,p),children:u}))})};c.displayName="TableBody";var g=null;try{c.displayName="TableBody",c.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:c.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(a){}},"./src/components/Table/TableCell.tsx":(l,s,e)=>{"use strict";e.d(s,{Sr:()=>b,pj:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),r=e("./node_modules/react/index.js"),y=e("./node_modules/classnames/index.js"),T=e.n(y),f=e("./src/components/Table/TableCell.module.css"),P=e.n(f),O=e("./src/components/Table/Context.ts"),x;function h(){return h=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(a[p]=u[p])}return a},h.apply(this,arguments)}var j=function(d){return r.createElement("svg",h({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},d),x||(x=r.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},C=e("./node_modules/react/jsx-runtime.js"),m=["children","variant","onChange","sortDirecton","id","className"];function D(a,d){if(a==null)return{};var u=E(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function E(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var b;(function(a){a.Descending="desc",a.Ascending="asc",a.NotSortable="notSortable",a.NotActive="notActive"})(b||(b={}));var c=function(d){var u,p=d.children,i=d.variant,v=d.onChange,S=d.sortDirecton,M=S===void 0?b.NotSortable:S,k=d.id,G=d.className,W=D(d,m),se=(0,O.$K)(),K=se.variantStandard,ee=function(){v!=null&&k!=null&&M!=null&&v({idCell:k,previousSortDirection:M})};return(0,C.jsxs)(C.Fragment,{children:[(i==null?K===O.$e.Header:i==="header")&&(0,C.jsx)("th",Object.assign({},W,{className:T()(P()["header-table-cell"],G),children:(0,C.jsxs)("div",{className:M!=b.NotSortable?T()(P()["container-sortable"]):T()(P().container),onClick:function(){return ee()},onKeyUp:function(Z){(Z.key==="Enter"||Z.key===" ")&&ee()},role:M!=b.NotSortable?"button":void 0,tabIndex:M!=b.NotSortable?0:void 0,children:[(0,C.jsx)("div",{className:T()(P().input),children:p}),M!=b.NotSortable&&(0,C.jsx)(j,{className:T()(P().icon,(u={},u[P()["icon-asc"]]=M===b.Ascending,u[P()["icon-desc"]]=M===b.Descending,u))})]})})),(i==null?K===O.$e.Body:i==="body")&&(0,C.jsx)("td",Object.assign({},W,{className:T()(P()["body-table-cell"],G),children:(0,C.jsx)("div",{className:T()(P().input),children:p})})),K===O.$e.Footer&&(0,C.jsx)("td",Object.assign({},W,{className:T()(G),children:(0,C.jsx)("div",{className:T()(P().input),children:p})}))]})};const g=null;try{c.displayName="TableCell",c.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:c.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(a){}},"./src/components/Table/TableFooter.tsx":(l,s,e)=>{"use strict";e.d(s,{y:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/Table/TableFooter.module.css"),j=e.n(h),C=e("./src/components/Table/Context.ts"),m=e("./node_modules/react/jsx-runtime.js"),D=["children","className"];function E(a,d){if(a==null)return{};var u=b(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function b(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var c=function(d){var u=d.children,p=d.className,i=E(d,D),v=C.$e.Footer;return(0,m.jsx)(C.wv.Provider,{value:{variantStandard:v},children:(0,m.jsx)("tfoot",Object.assign({},i,{className:x()(j()["table-footer"],p),children:u}))})};c.displayName="TableFooter";var g=null;try{c.displayName="TableFooter",c.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:c.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(a){}},"./src/components/Table/TableHeader.tsx":(l,s,e)=>{"use strict";e.d(s,{x:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/Table/TableHeader.module.css"),j=e.n(h),C=e("./src/components/Table/Context.ts"),m=e("./node_modules/react/jsx-runtime.js"),D=["children","className"];function E(g,a){if(g==null)return{};var d=b(g,a),u,p;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(g);for(p=0;p<i.length;p++)u=i[p],!(a.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,u)||(d[u]=g[u]))}return d}function b(g,a){if(g==null)return{};var d={},u=Object.keys(g),p,i;for(i=0;i<u.length;i++)p=u[i],!(a.indexOf(p)>=0)&&(d[p]=g[p]);return d}var c=function(a){var d=a.children,u=a.className,p=E(a,D),i=C.$e.Header;return(0,m.jsx)(C.wv.Provider,{value:{variantStandard:i},children:(0,m.jsx)("thead",Object.assign({},p,{className:x()(j()["table-header"],u),children:d}))})};c.displayName="TableHeader";try{c.displayName="TableHeader",c.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:c.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(g){}},"./src/components/Table/TableRow.tsx":(l,s,e)=>{"use strict";e.d(s,{S:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/Table/TableRow.module.css"),j=e.n(h),C=e("./src/components/Table/Context.ts"),m=e("./node_modules/react/jsx-runtime.js"),D=["children","value","selectSort","className"];function E(a,d){if(a==null)return{};var u=b(a,d),p,i;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(a);for(i=0;i<v.length;i++)p=v[i],!(d.indexOf(p)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,p)||(u[p]=a[p]))}return u}function b(a,d){if(a==null)return{};var u={},p=Object.keys(a),i,v;for(v=0;v<p.length;v++)i=p[v],!(d.indexOf(i)>=0)&&(u[i]=a[i]);return u}var c=function(d){var u,p=d.children,i=d.value,v=i===void 0?"no":i,S=d.selectSort,M=S===void 0?"":S,k=d.className,G=E(d,D),W=(0,C.$K)(),se=W.variantStandard,K=(0,C.Sh)(),ee=K.onChange,re=K.selectedValue,Z=K.selectRows,X=function(){ee!=null&&Z&&se===C.$e.Body&&ee({selectedValue:v})},V=function(q){(q.key==="Enter"||q.key===" ")&&ee!=null&&ee({selectedValue:v})};return(0,m.jsx)(C.Je.Provider,{value:{selectSort:M},children:(0,m.jsx)("tr",Object.assign({},G,{className:x()(j().TableRow,(u={},u[j()["table-row--selected"]]=v===re,u[j()["table-row--body"]]=se===C.$e.Body&&Z&&v!==re,u),k),onClick:X,tabIndex:se===C.$e.Body&&Z?0:void 0,onKeyUp:function(q){return V(q)},children:p}))})};c.displayName="TableRow";var g=null;try{c.displayName="TableRow",c.__docgenInfo={description:"",displayName:"TableRow",props:{value:{defaultValue:{value:"no"},description:"",name:"value",required:!1,type:{name:"string"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:c.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(a){}},"./src/components/TextArea/TextArea.tsx":(l,s,e)=>{"use strict";e.d(s,{K:()=>c});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),_=e.n(n),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),y=e.n(r),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(T),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./src/components/_InputWrapper/index.ts"),j=e("./src/components/TextArea/TextArea.module.css"),C=e.n(j),m=e("./node_modules/react/jsx-runtime.js"),D=["isValid","disabled","readOnly","resize","label"];function E(g,a){if(g==null)return{};var d=b(g,a),u,p;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(g);for(p=0;p<i.length;p++)u=i[p],!(a.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(g,u)||(d[u]=g[u]))}return d}function b(g,a){if(g==null)return{};var d={},u=Object.keys(g),p,i;for(i=0;i<u.length;i++)p=u[i],!(a.indexOf(p)>=0)&&(d[p]=g[p]);return d}var c=function(a){var d=a.isValid,u=d===void 0?!0:d,p=a.disabled,i=p===void 0?!1:p,v=a.readOnly,S=v===void 0?!1:v,M=a.resize,k=M===void 0?"none":M,G=a.label,W=E(a,D);return(0,m.jsx)(h.SP,{isValid:u,disabled:i,readOnly:S,label:G,inputId:W.id,inputRenderer:function(K){var ee=K.className,re=K.inputId;return(0,m.jsx)("textarea",Object.assign({},W,{id:re,disabled:i,readOnly:Boolean(S),className:x()(ee,C().TextArea,C()["TextArea--resize-"+k])}))}})};c.displayName="TextArea";try{c.displayName="TextArea",c.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:c.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(g){}},"./src/components/TextField/TextField.tsx":(l,s,e)=>{"use strict";e.d(s,{n:()=>u});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),O=e("./node_modules/classnames/index.js"),x=e.n(O),h=e("./node_modules/react-number-format/dist/react-number-format.es.js"),j=function(i){return i.format!==void 0},C=function(i){return i.format===void 0},m=function(i,v){return v&&C(v)?numericFormatter(i,v):v&&j(v)?patternFormatter(i,v):i},D=e("./src/components/_InputWrapper/index.ts"),E=e("./node_modules/react/jsx-runtime.js"),b=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function c(p,i){if(p==null)return{};var v=g(p,i),S,M;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(p);for(M=0;M<k.length;M++)S=k[M],!(i.indexOf(S)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,S)||(v[S]=p[S]))}return v}function g(p,i){if(p==null)return{};var v={},S=Object.keys(p),M,k;for(k=0;k<S.length;k++)M=S[k],!(i.indexOf(M)>=0)&&(v[M]=p[M]);return v}var a=function(i){var v=i.values,S=i.sourceInfo;S.event.target.value=v.value.trim()},d=function(i,v,S){var M=i.target,k=i.key,G=M.selectionStart,W=M.selectionEnd,se=M.value,K=se===void 0?"":se;if(G!==null&&W!==null){var ee=K[0]==="-",re=(v==null?void 0:v.length)||0+(ee?1:0),Z=(S==null?void 0:S.length)||0;ee&&W<=re&&k==="Backspace"?M.setSelectionRange(1,1):M.setSelectionRange(Math.min(Math.max(G,re),K.length-Z),Math.max(Math.min(W,K.length-Z),re))}},u=function(i){var v=i.id,S=i.onChange,M=i.isValid,k=M===void 0?!0:M,G=i.disabled,W=G===void 0?!1:G,se=i.readOnly,K=se===void 0?!1:se,ee=i.required,re=ee===void 0?!1:ee,Z=i.formatting,X=i.label,V=c(i,b),U=function(F,w){w.source==="event"&&S&&(a({values:F,sourceInfo:w}),S(w.event))};return(0,E.jsx)(D.SP,{isValid:k,disabled:W,readOnly:K,label:X,inputId:v,inputRenderer:function(F){var w=F.className,N=F.variant,J={id:v,readOnly:Boolean(K),disabled:W,required:re,className:x()(w,V.className),style:Object.assign({textAlign:Z==null?void 0:Z.align},V.style)};return Z!=null&&Z.number&&C(Z.number)?(Z.number.prefix&&Z.number.prefix[0]==="-"&&(Z.number.prefix=" "+Z.number.prefix),(0,E.jsx)(h.h3,Object.assign({},J,Z.number,V,{"data-testid":v+"-formatted-number-"+N,onValueChange:U,valueIsNumericString:!0,onKeyDown:function(L){return d(L,Z.number.prefix,Z.number.suffix)}}))):Z!=null&&Z.number&&j(Z.number)?(0,E.jsx)(h.HH,Object.assign({},J,Z.number,V,{"data-testid":v+"-formatted-number-"+N,onValueChange:U,valueIsNumericString:!0})):(0,E.jsx)("input",Object.assign({},J,V,{"data-testid":v+"-"+N,onChange:S}))}})};u.displayName="TextField";try{u.displayName="TextField",u.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:u.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(p){}},"./src/components/ToggleButtonGroup/Context.ts":(l,s,e)=>{"use strict";e.d(s,{S:()=>o,z:()=>n});var t=e("./node_modules/react/index.js"),o=(0,t.createContext)(void 0),n=function(){var r=(0,t.useContext)(o);if(r===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return r}},"./src/components/ToggleButtonGroup/ToggleButton.tsx":(l,s,e)=>{"use strict";e.d(s,{C:()=>f});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),y=e.n(r),T=e("./node_modules/react/jsx-runtime.js"),f=function(O){var x,h=O.children,j=O.value,C=(0,_.z)(),m=C.onChange,D=C.selectedValue,E=function(){m({selectedValue:j})};return(0,T.jsx)("button",{"data-testid":"toggle-button",className:n()(y()["toggle-button"],(x={},x[y()["toggle-button--selected"]]=j===D,x)),onClick:E,type:"button","aria-pressed":j==D,children:h})};f.displayName="ToggleButton";try{f.displayName="ToggleButton",f.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:f.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(P){}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx":(l,s,e)=>{"use strict";e.d(s,{t:()=>f});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_=e("./src/components/ToggleButtonGroup/Context.ts"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),y=e.n(r),T=e("./node_modules/react/jsx-runtime.js"),f=function(O){var x=O.children,h=O.onChange,j=O.selectedValue,C=function(D){var E=D.selectedValue;h({selectedValue:E})};return(0,T.jsx)(_.S.Provider,{value:{onChange:C,selectedValue:j},children:(0,T.jsx)("div",{className:n()(y()["toggle-button-group"]),"data-testid":"toggle-button-group",children:x})})};f.displayName="ToggleButtonGroup";try{f.displayName="ToggleButtonGroup",f.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:f.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(P){}},"./src/components/_InputWrapper/index.ts":(l,s,e)=>{"use strict";e.d(s,{SP:()=>b,Hx:()=>r});var t=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),_;(function(c){c.Default="default",c.Error="error",c.Disabled="disabled",c.ReadOnlyInfo="readonly-info",c.ReadOnlyConfirm="readonly-confirm"})(_||(_={}));var r;(function(c){c.ReadOnlyInfo="readonly-info",c.ReadOnlyConfirm="readonly-confirm"})(r||(r={}));var y;(function(c){c.None="none",c.Error="error",c.Search="search"})(y||(y={}));var T=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=g.readOnly,d=a===void 0?!1:a,u=g.disabled,p=u===void 0?!1:u,i=g.isValid,v=i===void 0?!0:i,S=g.isSearch,M=S===void 0?!1:S,k=y.None;return M&&(k=y.Search),p?{variant:_.Disabled,iconVariant:k}:d===!0||d===r.ReadOnlyInfo?{variant:_.ReadOnlyInfo,iconVariant:k}:d===r.ReadOnlyConfirm?{variant:_.ReadOnlyConfirm,iconVariant:k}:v===!1?{variant:_.Error,iconVariant:y.Error}:{variant:_.Default,iconVariant:k}},f;function P(){return P=Object.assign?Object.assign.bind():function(c){for(var g=1;g<arguments.length;g++){var a=arguments[g];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d])}return c},P.apply(this,arguments)}var O=function(g){return t.createElement("svg",P({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},g),f||(f=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},x;function h(){return h=Object.assign?Object.assign.bind():function(c){for(var g=1;g<arguments.length;g++){var a=arguments[g];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d])}return c},h.apply(this,arguments)}var j=function(g){return t.createElement("svg",h({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g),x||(x=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},C=e("./src/components/_InputWrapper/InputWrapper.module.css"),m=e.n(C),D=e("./node_modules/react/jsx-runtime.js"),E=function(g){var a=g.variant,d=g.disabled,u=d===void 0?!1:d;if(a===y.Error)return(0,D.jsx)("div",{className:m().InputWrapper__icon,children:(0,D.jsx)(O,{"data-testid":"input-icon-error"})});if(a===y.Search){var p;return(0,D.jsx)("div",{className:n()(m().InputWrapper__icon,(p={},p[m()["InputWrapper__icon--disabled"]]=u,p)),children:(0,D.jsx)(j,{"data-testid":"input-icon-search"})})}return null};try{E.displayName="Icon",E.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:E.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(c){}var b=function(g){var a,d=g.isValid,u=d===void 0?!0:d,p=g.disabled,i=p===void 0?!1:p,v=g.readOnly,S=v===void 0?!1:v,M=g.isSearch,k=M===void 0?!1:M,G=g.label,W=g.inputId,se=g.inputRenderer,K=g.noFocusEffect,ee=g.noPadding,re=(0,t.useId)(),Z=W!=null?W:re,X=T({readOnly:S,disabled:i,isValid:u,isSearch:k}),V=X.variant,U=X.iconVariant;return(0,D.jsxs)(D.Fragment,{children:[G&&(0,D.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(m().InputWrapper__label),htmlFor:Z,children:G}),(0,D.jsxs)("div",{"data-testid":"InputWrapper",className:n()(m().InputWrapper,m()["InputWrapper--"+V],(a={},a[m()["InputWrapper--search"]]=k,a[m()["InputWrapper--with-focus-effect"]]=!K,a[m()["InputWrapper--with-padding"]]=!ee,a)),children:[(0,D.jsx)(E,{variant:U,disabled:i}),se({className:m().InputWrapper__field,inputId:Z,variant:V})]})]})};try{b.displayName="InputWrapper",b.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:b.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(c){}},"./src/components/index.ts":(l,s,e)=>{"use strict";e.d(s,{XZ:()=>G.X,Bc:()=>d.B,C3:()=>K.C});var t=e("./src/components/Panel/Panel.tsx"),o=e("./src/components/Panel/PopoverPanel.tsx"),n=e("./src/components/CircularProgress/CircularProgress.tsx"),_=e("./src/components/AppWrapper/AppWrapper.tsx"),r=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),y=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),T=e("./src/components/Accordion/Accordion.tsx"),f=e("./src/components/Accordion/AccordionHeader.tsx"),P=e("./src/components/Accordion/AccordionContent.tsx"),O=e("./src/components/Accordion/Context.ts"),x=e("./src/components/Accordion/AccordionIcon.tsx"),h=e("./src/components/Button/index.ts"),j=e("./src/components/Page/Page.tsx"),C=e("./src/components/Page/PageHeader.tsx"),m=e("./src/components/Page/PageContent.tsx"),D=e("./src/components/Page/Context.ts"),E=e("./src/components/List/List.tsx"),b=e("./src/components/List/ListItem.tsx"),c=e("./src/components/List/Context.ts"),g=e("./src/components/TextField/TextField.tsx"),a=e("./src/components/SearchField/SearchField.tsx"),d=e("./src/components/ErrorMessage/ErrorMessage.tsx"),u=e("./src/components/Map/Map.tsx"),p=e("./src/components/Table/Table.tsx"),i=e("./src/components/Table/TableHeader.tsx"),v=e("./src/components/Table/TableRow.tsx"),S=e("./src/components/Table/TableBody.tsx"),M=e("./src/components/Table/TableCell.tsx"),k=e("./src/components/Table/TableFooter.tsx"),G=e("./src/components/Checkbox/Checkbox.tsx"),W=e("./src/components/TextArea/TextArea.tsx"),se=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),K=e("./src/components/FieldSet/FieldSet.tsx"),ee=e("./src/components/Pagination/index.ts"),re=e("./src/components/Select/Select.tsx")},"./storybook-init-framework-entry.js":(l,s,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(l,s,e)=>{"use strict";e.d(s,{r:()=>y});var t=e("./node_modules/react/index.js"),o,n,_;function r(){return r=Object.assign?Object.assign.bind():function(T){for(var f=1;f<arguments.length;f++){var P=arguments[f];for(var O in P)Object.prototype.hasOwnProperty.call(P,O)&&(T[O]=P[O])}return T},r.apply(this,arguments)}var y=function(f){return t.createElement("svg",r({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},f),o||(o=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),_||(_=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),r.locals={accordion:"accordion---oQBwV"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),r.locals={container:"container---_OBRF"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.accordion-header---NEcyL {
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
`,""]),r.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),r.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([l.id,`html {
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
`,""]),r.locals={};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.button---AisLs {
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
`,""]),r.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.wrapper---WhgDa {
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
`,""]),r.locals={wrapper:"wrapper---WhgDa","wrapper--compact":"wrapper--compact---JU5AA","wrapper--error":"wrapper--error---mbmQZ","wrapper--checked":"wrapper--checked---SKWr8","wrapper--disabled":"wrapper--disabled---pTnwY","wrapper--read-only":"wrapper--read-only---blIvh","checkbox-wrapper":"checkbox-wrapper---CuQ4i",checkbox:"checkbox---sy8lK","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK","label-and-description":"label-and-description---x9fQn",label:"label---a2ABr",description:"description---U6Cn3"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.checkbox-group---Ws6hw {
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
`,""]),r.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group__list":"checkbox-group__list---WaB0C","checkbox-group__list--vertical":"checkbox-group__list--vertical---dNWTw","checkbox-group__list--horizontal":"checkbox-group__list--horizontal---Gv47i"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.svg---cRnN3 {
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
`,""]),r.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),r.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.field-set---WtvOy {
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
`,""]),r.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.list---Xw1lu {
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
`,""]),r.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),r.locals={container:"container---sf7W5"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.list-item---aLk6z {
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
`,""]),r.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"map---Z2PfI"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),r.locals={page:"page---LVMNK"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),r.locals={"page-content":"page-content---ZIuS7"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.page-header---bt29G {
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
`,""]),r.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.page-icon---mvZDR {
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
`,""]),r.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.pagination-icon---iNvyI {
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
`,""]),r.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`/* breakpoints-xs */
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
`,""]),r.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),r.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.multi-select-item---KQ3Ws {
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
`,""]),r.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.select---eatbZ {
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
`,""]),r.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`Table {
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
`,""]),r.locals={};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),r.locals={};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),r.locals={TableBody:"TableBody---cpO70"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.header-table-cell---zvgNX {
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
`,""]),r.locals={"header-table-cell":"header-table-cell---zvgNX","body-table-cell":"body-table-cell---cCxyS",image:"image---Jz7hI",input:"input---jn1Id","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-footer":"table-footer---fVxHQ"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),r.locals={"table-header":"table-header---DnjKf"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.TableRow---XoYrl {
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
`,""]),r.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.TextArea---kkLod {
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
`,""]),r.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`/* breakpoints-xs */
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
`,""]),r.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.toggle-button-group---xdsvq {
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
`,""]),r.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`/* breakpoints-xs */
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
`,""]),r.locals={container:"container---_zb20"};const y=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(l,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>y});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),n=e("./node_modules/css-loader/dist/runtime/api.js"),_=e.n(n),r=_()(o());r.push([l.id,`.InputWrapper---J_oif {
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
`,""]),r.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const y=r},"./src/components/Accordion/Accordion.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Button/Button.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/List/List.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Map/Map.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Page/Page.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Select/Select.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/Table.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(l,s,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[l.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var _=t(o,n);l.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(l,s,e)=>{var t={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(_){var r=n(_);return e(r)}function n(_){if(!e.o(t,_)){var r=new Error("Cannot find module '"+_+"'");throw r.code="MODULE_NOT_FOUND",r}return t[_]}o.keys=function(){return Object.keys(t)},o.resolve=n,l.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(l,s,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(_){var r=n(_);return e(r)}function n(_){if(!e.o(t,_)){var r=new Error("Cannot find module '"+_+"'");throw r.code="MODULE_NOT_FOUND",r}return t[_]}o.keys=function(){return Object.keys(t)},o.resolve=n,l.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(l,s,e)=>{"use strict";l=e.nmd(l);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],l,!1)}},l=>{var s=t=>l(l.s=t);l.O(0,[631],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=l.O()}]);
