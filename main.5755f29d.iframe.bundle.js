(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,s,e)=>{var r={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(l){var t=n(l);return e(t)}function n(l){if(!e.o(r,l)){var t=new Error("Cannot find module '"+l+"'");throw t.code="MODULE_NOT_FOUND",t}return r[l]}o.keys=function(){return Object.keys(r)},o.resolve=n,a.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>j,__page:()=>c,default:()=>x});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(P),E=e("./node_modules/react/index.js"),y=e("./node_modules/@mdx-js/react/index.js"),h=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),S=["components"];function i(){return i=Object.assign?Object.assign.bind():function(O){for(var M=1;M<arguments.length;M++){var D=arguments[M];for(var R in D)Object.prototype.hasOwnProperty.call(D,R)&&(O[R]=D[R])}return O},i.apply(this,arguments)}function C(O,M){if(O==null)return{};var D=p(O,M),R,Y;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(O);for(Y=0;Y<K.length;Y++)R=K[Y],!(M.indexOf(R)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,R)||(D[R]=O[R]))}return D}function p(O,M){if(O==null)return{};var D={},R=Object.keys(O),Y,K;for(K=0;K<R.length;K++)Y=R[K],!(M.indexOf(Y)>=0)&&(D[Y]=O[Y]);return D}var v={},u="wrapper";function m(O){var M=O.components,D=C(O,S);return(0,y.mdx)(u,i({},v,D,{components:M,mdxType:"MDXLayout"}),(0,y.mdx)(h.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,y.mdx)("h1",{id:"altinn-design-system-v2"},"Altinn Design System (v2)"),(0,y.mdx)("h2",{id:"viktig-informasjon-om-komponentbiblioteket"},"Viktig informasjon om komponentbiblioteket"),(0,y.mdx)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,y.mdx)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,y.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,y.mdx)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,y.mdx)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,y.mdx)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,y.mdx)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,y.mdx)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,y.mdx)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,y.mdx)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,y.mdx)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,y.mdx)("h2",{id:"hvordan-bruke-storybook"},"Hvordan bruke Storybook"),(0,y.mdx)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,y.mdx)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,y.mdx)("inlineCode",{parentName:"p"},"Docs"),"."),(0,y.mdx)("ul",null,(0,y.mdx)("li",{parentName:"ul"},(0,y.mdx)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,y.mdx)("li",{parentName:"ul"},(0,y.mdx)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}m.displayName="MDXContent",m.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var g={title:"Introduksjon",includeStories:["__page"]},b={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,y.mdx)(h.aT,{mdxStoryNameToKey:b,mdxComponentAnnotations:g},(0,y.mdx)(m,null))}});const x=g;var j=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{__namedExportsOrder:()=>j,__page:()=>c,default:()=>x});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(P),E=e("./node_modules/react/index.js"),y=e("./node_modules/@mdx-js/react/index.js"),h=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),S=["components"];function i(){return i=Object.assign?Object.assign.bind():function(O){for(var M=1;M<arguments.length;M++){var D=arguments[M];for(var R in D)Object.prototype.hasOwnProperty.call(D,R)&&(O[R]=D[R])}return O},i.apply(this,arguments)}function C(O,M){if(O==null)return{};var D=p(O,M),R,Y;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(O);for(Y=0;Y<K.length;Y++)R=K[Y],!(M.indexOf(R)>=0)&&(!Object.prototype.propertyIsEnumerable.call(O,R)||(D[R]=O[R]))}return D}function p(O,M){if(O==null)return{};var D={},R=Object.keys(O),Y,K;for(K=0;K<R.length;K++)Y=R[K],!(M.indexOf(Y)>=0)&&(D[Y]=O[Y]);return D}var v={},u="wrapper";function m(O){var M=O.components,D=C(O,S);return(0,y.mdx)(u,i({},v,D,{components:M,mdxType:"MDXLayout"}),(0,y.mdx)(h.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,y.mdx)("h1",{id:"appwrapper"},"AppWrapper"),(0,y.mdx)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,y.mdx)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,y.mdx)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,y.mdx)("pre",null,(0,y.mdx)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}m.displayName="MDXContent",m.isMDXComponent=!0;var c=function(){throw new Error("Docs-only story")};c.parameters={docsOnly:!0};var g={title:"Components/AppWrapper",includeStories:["__page"]},b={};g.parameters=g.parameters||{},g.parameters.docs=Object.assign({},g.parameters.docs||{},{page:function(){return(0,y.mdx)(h.aT,{mdxStoryNameToKey:b,mdxComponentAnnotations:g},(0,y.mdx)(m,null))}});const x=g;var j=["__page"]},"./.storybook/StoryPage.tsx":(a,s,e)=>{"use strict";e.d(s,{Y:()=>P});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),T=e("./src/components/AppWrapper/AppWrapper.tsx"),_=e("./node_modules/react/jsx-runtime.js"),P=function(y){var h=y.description;return(0,_.jsxs)(T.O,{children:[(0,_.jsx)(d.Dx,{}),(0,_.jsx)(d.dk,{children:h}),(0,_.jsx)(d.fQ,{includePrimary:!0}),(0,_.jsx)(d.X6,{children:"Props"}),(0,_.jsx)(d.$4,{story:d.Uh})]})};P.displayName="StoryPage";var f=null;try{P.displayName="StoryPage",P.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:P.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(E){}},"./.storybook/preview.js-generated-config-entry.js":(a,s,e)=>{"use strict";var r={};e.r(r),e.d(r,{__namedExportsOrder:()=>i,parameters:()=>S});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),E=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),h=e("./node_modules/@storybook/theming/dist/esm/index.js"),S={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},h.np.dark),light:Object.assign({},h.np.normal)},backgrounds:{default:"default",values:[{name:"default",value:"#979797"},{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},i=["parameters"],C=e("./node_modules/console-browserify/index.js");function p(m,c){var g=Object.keys(m);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(m);c&&(b=b.filter(function(x){return Object.getOwnPropertyDescriptor(m,x).enumerable})),g.push.apply(g,b)}return g}function v(m){for(var c=1;c<arguments.length;c++){var g=arguments[c]!=null?arguments[c]:{};c%2?p(Object(g),!0).forEach(function(b){u(m,b,g[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(g)):p(Object(g)).forEach(function(b){Object.defineProperty(m,b,Object.getOwnPropertyDescriptor(g,b))})}return m}function u(m,c,g){return c in m?Object.defineProperty(m,c,{value:g,enumerable:!0,configurable:!0,writable:!0}):m[c]=g,m}Object.keys(r).forEach(function(m){var c=r[m];switch(m){case"args":return(0,E.uc)(c);case"argTypes":return(0,E.v9)(c);case"decorators":return c.forEach(function(b){return(0,E.$9)(b,!1)});case"loaders":return c.forEach(function(b){return(0,E.HZ)(b,!1)});case"parameters":return(0,E.h1)(v({},c),!1);case"argTypesEnhancers":return c.forEach(function(b){return(0,E.My)(b)});case"argsEnhancers":return c.forEach(function(b){return(0,E._C)(b)});case"render":return(0,E.$P)(c);case"globals":case"globalTypes":{var g={};return g[m]=c,(0,E.h1)(g,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return C.log(m+" was not supported :( !")}})},"./src/components/Accordion/Accordion.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>N,__namedExportsOrder:()=>V,default:()=>q});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e.n(j),M=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./node_modules/classnames/index.js"),K=e.n(Y),te=e("./.storybook/StoryPage.tsx"),z=e("./src/components/Button/index.ts"),ne=e("./src/components/Accordion/Accordion.tsx"),re=e("./src/components/Accordion/AccordionHeader.tsx"),J=e("./src/components/Accordion/AccordionContent.tsx"),X=e("./src/components/Accordion/Accordion.stories.module.css"),H=e.n(X),U=e("./src/components/Accordion/Context.ts"),ee=e("./node_modules/react/jsx-runtime.js");function W(G,$){return L(G)||Q(G,$)||w(G,$)||F()}function F(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(G,$){if(!!G){if(typeof G=="string")return Z(G,$);var oe=Object.prototype.toString.call(G).slice(8,-1);if(oe==="Object"&&G.constructor&&(oe=G.constructor.name),oe==="Map"||oe==="Set")return Array.from(G);if(oe==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe))return Z(G,$)}}function Z(G,$){($==null||$>G.length)&&($=G.length);for(var oe=0,le=new Array($);oe<$;oe++)le[oe]=G[oe];return le}function Q(G,$){var oe=G==null?null:typeof Symbol!="undefined"&&G[Symbol.iterator]||G["@@iterator"];if(oe!=null){var le=[],me=!0,ce=!1,ue,Ee;try{for(oe=oe.call(G);!(me=(ue=oe.next()).done)&&(le.push(ue.value),!($&&le.length===$));me=!0);}catch(se){ce=!0,Ee=se}finally{try{!me&&oe.return!=null&&oe.return()}finally{if(ce)throw Ee}}return le}}function L(G){if(Array.isArray(G))return G}var I=`import React, { useState } from 'react';
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
`,A={Example:{startLoc:{col:51,line:49},endLoc:{col:1,line:119},startBody:{col:51,line:49},endBody:{col:1,line:119}}},k="";const q={title:"Components/Accordion",component:ne.U,subcomponents:{AccordionHeader:re._,AccordionContent:J.v},parameters:{design:(0,D.vc)([{type:"figma",url:k},{type:"link",url:k}]),docs:{page:function(){return(0,ee.jsx)(te.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:U.Bt.Primary,useActions:!0,subtitle:"Subtitle"}};var B=function($){var oe=(0,M.useState)(!1),le=W(oe,2),me=le[0],ce=le[1],ue=(0,M.useState)(!1),Ee=W(ue,2),se=Ee[0],ae=Ee[1],de=function(){ce(!me)},pe=function(){ae(!se)},ge="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",Te=(0,R.D8)(),Oe=W(Te,1),Ce=Oe[0].useActions,he=(0,R.D8)(),De=W(he,1),Me=De[0].subtitle,be=Ce?(0,ee.jsxs)(ee.Fragment,{children:[(0,ee.jsx)("div",{children:"Example setup"}),(0,ee.jsx)(z.zx,{variant:z.Wu.Filled,color:z.rp.Primary,size:z.qE.Small,children:"Separat knapp 1"}),(0,ee.jsx)(z.zx,{variant:z.Wu.Outline,color:z.rp.Primary,size:z.qE.Small,children:"Separat knapp 2"})]}):void 0,ve=Me.length>0?Me:void 0;return(0,ee.jsxs)("div",{className:K()(H().container),children:[(0,ee.jsxs)(ne.U,{onClick:de,open:me,iconVariant:$.iconVariant,children:[(0,ee.jsx)(re._,{actions:be,subtitle:ve,children:"Accordion 1"}),(0,ee.jsx)(J.v,{children:ge})]}),(0,ee.jsxs)(ne.U,{onClick:pe,open:se,iconVariant:$.iconVariant,children:[(0,ee.jsx)(re._,{actions:be,subtitle:ve,children:"Accordion 2"}),(0,ee.jsx)(J.v,{children:ge})]})]})};B.displayName="Template";var N=B.bind({});N.args={iconVariant:U.Bt.Primary,open:!1},N.argTypes={open:{control:!1},onClick:{control:!1}},N.parameters={docs:{description:{story:""}}},N.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},N.parameters);var V=["Example"]},"./src/components/Button/Stories/FilledButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>m,Disabled:()=>j,FullWidth:()=>x,Primary:()=>p,Secondary:()=>v,SecondaryWithIconNoText:()=>b,Success:()=>u,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>c,__namedExportsOrder:()=>O,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),f=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,y={Primary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Secondary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Success:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Danger:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithCustomIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SecondaryWithIconNoText:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},FullWidth:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30098";const S={title:"Components/Button/Filled",component:_.zx,parameters:{design:(0,d.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,f.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Wu.Filled,onClick:function(D){alert(JSON.stringify(D.target.innerHTML)+" clicked!")}}};var i=function(D){return(0,f.jsx)(_.zx,Object.assign({},D))};i.displayName="Template";var C=function(D){return(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,f.jsx)(_.zx,Object.assign({},D))})};C.displayName="WithinContainerTemplate";var p=i.bind({});p.args={color:_.rp.Primary,children:"Primary button"},p.parameters={docs:{description:{story:""}}};var v=i.bind({});v.args={color:_.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var u=i.bind({});u.args={color:_.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var m=i.bind({});m.args={color:_.rp.Danger,children:"Danger button"},m.parameters={docs:{description:{story:""}}};var c=i.bind({});c.args={color:_.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var g=i.bind({});g.args={color:_.rp.Success,svgIconComponent:(0,f.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var b=i.bind({});b.args={color:_.rp.Secondary,iconName:"Close"},b.parameters={docs:{description:{story:""}}};var x=C.bind({});x.args={color:_.rp.Primary,iconName:"AddCircle",fullWidth:!0,children:"Secondary button"},x.parameters={docs:{description:{story:""}}};var j=i.bind({});j.args={children:"Disabled button",disabled:!0},j.parameters={docs:{description:{story:""}}},p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},x.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters);var O=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidth","Disabled"]},"./src/components/Button/Stories/OutlineButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>m,Disabled:()=>j,FullWidthAndDashedBorder:()=>x,Primary:()=>p,Secondary:()=>v,SecondaryWithIconNoText:()=>b,Success:()=>u,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>c,__namedExportsOrder:()=>O,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),f=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,y={Primary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Secondary:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Success:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},Danger:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SuccessWithIcon:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},SuccessWithCustomIcon:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},SecondaryWithIconNoText:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}},FullWidthAndDashedBorder:{startLoc:{col:63,line:45},endLoc:{col:1,line:58},startBody:{col:63,line:45},endBody:{col:1,line:58}},Disabled:{startLoc:{col:48,line:44},endLoc:{col:78,line:44},startBody:{col:48,line:44},endBody:{col:78,line:44}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A30487";const S={title:"Components/Button/Outline",component:_.zx,parameters:{design:(0,d.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,f.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Wu.Outline,onClick:function(D){alert(JSON.stringify(D.target.innerHTML)+" clicked!")}}};var i=function(D){return(0,f.jsx)(_.zx,Object.assign({},D))};i.displayName="Template";var C=function(D){return(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,f.jsx)(_.zx,Object.assign({},D))})};C.displayName="WithinContainerTemplate";var p=i.bind({});p.args={color:_.rp.Primary,children:"Primary button"},p.parameters={docs:{description:{story:""}}};var v=i.bind({});v.args={color:_.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var u=i.bind({});u.args={color:_.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var m=i.bind({});m.args={color:_.rp.Danger,children:"Danger button"},m.parameters={docs:{description:{story:""}}};var c=C.bind({});c.args={color:_.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var g=i.bind({});g.args={color:_.rp.Success,svgIconComponent:(0,f.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var b=i.bind({});b.args={color:_.rp.Secondary,iconName:"Close"},b.parameters={docs:{description:{story:""}}};var x=C.bind({});x.args={color:_.rp.Primary,iconName:"AddCircle",fullWidth:!0,dashedBorder:!0,children:"Secondary button"},x.parameters={docs:{description:{story:""}}};var j=i.bind({});j.args={children:"Disabled button",disabled:!0},j.parameters={docs:{description:{story:""}}},p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},x.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters);var O=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SecondaryWithIconNoText","FullWidthAndDashedBorder","Disabled"]},"./src/components/Button/Stories/QuietButton.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Danger:()=>m,Disabled:()=>j,FullWidth:()=>x,Primary:()=>p,Secondary:()=>v,Success:()=>u,SuccessWithCustomIcon:()=>g,SuccessWithIcon:()=>c,SuccessWithIconNoText:()=>b,__namedExportsOrder:()=>O,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Button/index.ts"),P=e("./src/components/Button/Stories/success.svg"),f=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,y={Primary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Secondary:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Success:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},Danger:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithCustomIcon:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},SuccessWithIconNoText:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}},FullWidth:{startLoc:{col:63,line:46},endLoc:{col:1,line:59},startBody:{col:63,line:46},endBody:{col:1,line:59}},Disabled:{startLoc:{col:48,line:45},endLoc:{col:78,line:45},startBody:{col:48,line:45},endBody:{col:78,line:45}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6691%3A31509";const S={title:"Components/Button/Quiet",component:_.zx,parameters:{design:(0,d.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,f.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{variant:_.Wu.Quiet,size:_.qE.Small,onClick:function(D){alert(JSON.stringify(D.target.innerHTML)+" clicked!")}}};var i=function(D){return(0,f.jsx)(_.zx,Object.assign({},D))};i.displayName="Template";var C=function(D){return(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"500px",height:"300px",border:"red solid 5px"},children:(0,f.jsx)(_.zx,Object.assign({},D))})};C.displayName="WithinContainerTemplate";var p=i.bind({});p.args={color:_.rp.Primary,children:"Primary button"},p.parameters={docs:{description:{story:""}}};var v=i.bind({});v.args={color:_.rp.Secondary,children:"Secondary button"},v.parameters={docs:{description:{story:""}}};var u=i.bind({});u.args={color:_.rp.Success,children:"Success button"},u.parameters={docs:{description:{story:""}}};var m=i.bind({});m.args={color:_.rp.Danger,children:"Danger button"},m.parameters={docs:{description:{story:""}}};var c=i.bind({});c.args={color:_.rp.Success,iconName:"Success",iconPlacement:"left",children:"Button"},c.parameters={docs:{description:{story:""}}};var g=i.bind({});g.args={color:_.rp.Success,svgIconComponent:(0,f.jsx)(P.r,{}),iconPlacement:"left",children:"Button"},g.parameters={docs:{description:{story:""}}};var b=i.bind({});b.args={color:_.rp.Success,iconName:"Success"},b.parameters={docs:{description:{story:""}}};var x=C.bind({});x.args={color:_.rp.Primary,iconName:"AddCircle",fullWidth:!0,children:"Secondary button"},x.parameters={docs:{description:{story:""}}};var j=i.bind({});j.args={children:"Disabled button",disabled:!0},j.parameters={docs:{description:{story:""}}},p.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},p.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},v.parameters),u.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},u.parameters),m.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},m.parameters),c.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},c.parameters),g.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},g.parameters),b.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
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
)`}},x.parameters),j.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},j.parameters);var O=["Primary","Secondary","Success","Danger","SuccessWithIcon","SuccessWithCustomIcon","SuccessWithIconNoText","FullWidth","Disabled"]},"./src/components/Checkbox/Checkbox.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Checked:()=>C,Compact:()=>v,Disabled:()=>u,Error:()=>p,LongText:()=>g,Normal:()=>i,ReadOnly:()=>m,WithDescription:()=>c,WithHiddenLabel:()=>b,__namedExportsOrder:()=>x,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Checkbox/Checkbox.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={Normal:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Checked:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Compact:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnly:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithDescription:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},LongText:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},WithHiddenLabel:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},y="https://www.figma.com/file/d1VzAmoVdredZkky139AIT/ADS-3---Komponenter?node-id=190%3A13783";const h={title:"Components/Checkbox",component:_.X,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Checkbox for boolean or multiple choice values in forms."})}}},args:{checked:!1,compact:!1,error:!1,label:"Tekst",readOnly:!1}};var S=function(O){return(0,P.jsx)(_.X,Object.assign({},O))};S.displayName="Template";var i=S.bind({});i.args={},i.parameters={docs:{description:{story:"This is the default checkbox."}}};var C=S.bind({});C.args={checked:!0},C.parameters={docs:{description:{story:"This is a checked checkbox."}}};var p=S.bind({});p.args={error:!0},p.parameters={docs:{description:{story:"This checkbox is supposed to be used when there is an user input error related to it."}}};var v=S.bind({});v.args={compact:!0},v.parameters={docs:{description:{story:"This is the compact checkbox."}}};var u=S.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is the disabled checkbox. Use this when the user is not supposed to change the value. Remember to make it clear for the user why it can not be changed."}}};var m=S.bind({});m.args={readOnly:!0},m.parameters={docs:{description:{story:"This is the read-only checkbox."}}};var c=S.bind({});c.args={description:"Lorem ipsum dolor sit amet."},c.parameters={docs:{description:{story:"This is a checkbox with description."}}};var g=S.bind({});g.args={label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus dolor, consectetur nec finibus quis, varius et risus. Nullam sodales enim viverra metus finibus, id pellentesque erat sagittis. Curabitur mattis eleifend nunc, eget fringilla odio viverra et. Nullam pretium vel tortor quis varius. Sed dui justo, placerat eu lorem vestibulum, condimentum fringilla ante. Curabitur egestas, ante a pharetra rhoncus, velit lorem luctus lectus, sit amet finibus est sem a ante. Mauris tristique aliquam libero ut commodo. Mauris vel justo et nulla rutrum commodo eu sit amet est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed aliquet egestas augue in placerat. Quisque malesuada elementum dolor, in ultricies est sodales varius.",description:"Nullam quis dui at leo varius consectetur dignissim sit amet urna. Integer suscipit maximus auctor. Vivamus non arcu sapien. Nullam tincidunt ut ex ultricies tempor. Maecenas vitae tempor enim. Nulla non faucibus mauris, id dapibus dolor. Etiam pellentesque, ex eget ornare luctus, libero nisl hendrerit dolor, sed consequat lorem sem ut sem. Etiam at magna a magna egestas blandit. Donec justo nibh, varius vel vehicula et, tincidunt ullamcorper nulla. Aliquam convallis sit amet est condimentum vehicula. Cras rutrum, odio nec dignissim consectetur, tortor sem euismod lectus, non maximus eros augue feugiat nibh. Curabitur id convallis ex. Ut id enim non nunc egestas hendrerit. Suspendisse sit amet metus lobortis, interdum urna vitae, aliquet diam. Mauris fermentum sapien nisi, eu pharetra tellus semper sed. Mauris varius ante turpis, in fringilla risus pulvinar quis. Curabitur auctor velit sit amet turpis volutpat viverra. Maecenas varius non eros et placerat. Duis consequat euismod euismod. Morbi tincidunt, velit sed commodo fermentum, mauris nisi rhoncus tellus, nec interdum velit ante ac elit. Pellentesque pellentesque lacus eu suscipit rhoncus."},g.parameters={docs:{description:{story:"This is how it looks with long texts."}}};var b=S.bind({});b.args={hideLabel:!0},b.parameters={docs:{description:{story:"This is a checkbox with the `hiddenLabel` property enabled. Use this in table views and other places where there is no need to have a specific, visible label for the checkbox. If the `label` property is set in this case, it will be made available for accessibility tools through the HTML component's `aria-label` attribute."}}},i.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},i.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},C.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},p.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},u.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},g.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <Checkbox {...args} />
)`}},b.parameters);var x=["Normal","Checked","Error","Compact","Disabled","ReadOnly","WithDescription","LongText","WithHiddenLabel"]},"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>p,Disabled:()=>u,Error:()=>v,Horizontal:()=>C,Vertical:()=>i,__namedExportsOrder:()=>m,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={Vertical:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Horizontal:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Compact:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Error:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}},Disabled:{startLoc:{col:55,line:56},endLoc:{col:1,line:58},startBody:{col:55,line:56},endBody:{col:1,line:58}}},y="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21455";const h={title:"Components/CheckboxGroup",component:_.c,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Group of checkboxes for use cases where the user should be able to choose multiple answers from a list of given values. Its `onChange` prop can be set to a function that will be called with a list of the selected checkboxes' names each time something changes."})}}},args:{compact:!1,description:"Velg \xE9n eller flere planeter fra listen.",disabled:!1,items:[{checked:!1,label:"Merkur",name:"planet1"},{checked:!1,label:"Venus",name:"planet2"},{checked:!1,label:"Jorden",name:"planet3"},{checked:!1,label:"Mars",name:"planet4"},{checked:!1,label:"Jupiter",name:"planet5"},{checked:!1,label:"Saturn",name:"planet6"},{checked:!1,label:"Uranus",name:"planet7"},{checked:!1,label:"Neptun",name:"planet8"}],legend:"Velg planeter",variant:_.T.Vertical}};var S=function(g){return(0,P.jsx)(_.c,Object.assign({},g))};S.displayName="Template";var i=S.bind({});i.args={variant:_.T.Vertical},i.parameters={docs:{description:{story:"This is the default setting."}}};var C=S.bind({});C.args={variant:_.T.Horizontal},C.parameters={docs:{description:{story:"Use this if there is sufficient horizontal space."}}};var p=S.bind({});p.args={compact:!0},p.parameters={docs:{description:{story:"Use this if there are space limitations or if the content is less important."}}};var v=S.bind({});v.args={error:"Du m\xE5 velge minst ett av alternativene over."},v.parameters={docs:{description:{story:"The checkbox group gets this state if the `error` property is set. Use it to tell the user that there is an input error related to this group."}}};var u=S.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"Use this if the user is not supposed to change the values. Remember to make it clear for the user why they can not be changed."}}},i.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},i.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},C.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},p.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <CheckboxGroup {...args} />
)`}},u.parameters);var m=["Vertical","Horizontal","Compact","Error","Disabled"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{SimpleExample:()=>i,__namedExportsOrder:()=>C,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/CircularProgress/CircularProgress.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},y="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const h={title:"Components/CircularProgress",component:_.D,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var S=function(v){return(0,P.jsx)(_.D,Object.assign({},v))};S.displayName="CircularTemplate";var i=S.bind({});i.args={width:100,value:60,label:"3/5",id:"progress"},i.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},i.parameters);var C=["SimpleExample"]},"./src/components/ErrorMessage/ErrorMessage.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>i,__namedExportsOrder:()=>C,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/ErrorMessage/ErrorMessage.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={Example:{startLoc:{col:54,line:41},endLoc:{col:1,line:43},startBody:{col:54,line:41},endBody:{col:1,line:43}}},y="https://www.figma.com/file/Pvti3aRcOwH0k5Z7DrLznk/Arbeidsomr%C3%A5de%3A-Altinn-Studio-APPS?node-id=2561%3A54396";const h={title:"Components/ErrorMessage",component:_.B,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Simple error-message suitable to be shown in table views"})}}},args:{id:"error-message-story"}};var S=function(v){return(0,P.jsx)(_.B,Object.assign({},v,{children:"This is an error message"}))};S.displayName="Template";var i=S.bind({});i.args={},i.parameters={docs:{description:{story:""}}},i.parameters=Object.assign({storySource:{source:`(args) => (
  <ErrorMessage {...args}>This is an error message</ErrorMessage>
)`}},i.parameters);var C=["Example"]},"./src/components/FieldSet/FieldSet.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Compact:()=>C,Disabled:()=>u,Error:()=>v,Normal:()=>i,WithDescription:()=>p,__namedExportsOrder:()=>m,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/FieldSet/FieldSet.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={Normal:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Compact:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},WithDescription:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Error:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}},Disabled:{startLoc:{col:50,line:40},endLoc:{col:1,line:42},startBody:{col:50,line:40},endBody:{col:1,line:42}}},y="";const h={title:"Components/FieldSet",component:_.C,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"Field set component to use as a wrapper for groups of form elements."})}}},args:{children:"Her er det noe innhold.",legend:"Lorem ipsum",size:_.w.Small}};var S=function(g){return(0,P.jsx)(_.C,Object.assign({},g,{children:g.children}))};S.displayName="Template";var i=S.bind({});i.args={},i.parameters={docs:{description:{story:"This is a normal field set."}}};var C=S.bind({});C.args={size:_.w.Xsmall},C.parameters={docs:{description:{story:"This is a compact field set."}}};var p=S.bind({});p.args={description:"Nulla quis enim at massa pretium accumsan eu sed magna. Sed vehicula."},p.parameters={docs:{description:{story:"This is a field set with a description."}}};var v=S.bind({});v.args={error:"Her er det en beskrivende feilmelding."},v.parameters={docs:{description:{story:"This is a field set with an error message related to the content."}}};var u=S.bind({});u.args={disabled:!0},u.parameters={docs:{description:{story:"This is a disabled field set. All input components inside become disabled."}}},i.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},i.parameters),C.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},C.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},p.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <FieldSet {...args}>{args.children}</FieldSet>
)`}},u.parameters);var m=["Normal","Compact","WithDescription","Error","Disabled"]},"./src/components/List/List.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Dashed:()=>m,Solid:()=>u,__namedExportsOrder:()=>c,default:()=>p});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/List/List.tsx"),P=e("./src/components/List/ListItem.tsx"),f=e("./src/components/List/Context.ts"),E=e("./src/components/List/List.stories.modules.css"),y=e.n(E),h=e("./node_modules/react/jsx-runtime.js"),S=`import React from 'react';
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
`,i={Solid:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}},Dashed:{startLoc:{col:46,line:41},endLoc:{col:1,line:51},startBody:{col:46,line:41},endBody:{col:1,line:51}}},C="";const p={title:"Components/List",component:_.a,parameters:{design:(0,d.vc)([{type:"figma",url:C},{type:"link",url:C}]),docs:{page:function(){return(0,h.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var v=function(b){return(0,h.jsx)("div",{className:y().container,children:(0,h.jsxs)(_.a,{borderStyle:b.borderStyle,children:[(0,h.jsx)(P.H,{children:"List Item 1"}),(0,h.jsx)(P.H,{children:"List Item 2"}),(0,h.jsx)(P.H,{children:"List Item 3"})]})})};v.displayName="Template";var u=v.bind({});u.args={borderStyle:f.N4.Solid},u.parameters={docs:{description:{story:""}}};var m=v.bind({});m.args={borderStyle:f.N4.Dashed},m.parameters={docs:{description:{story:""}}},u.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},u.parameters),m.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <div className={classes['container']}>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>
  );
}`}},m.parameters);var c=["Solid","Dashed"]},"./src/components/Map/Map.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>Z,GoogleMaps:()=>k,KartverketSea:()=>A,KartverketTerrain:()=>I,MapWithMarkerZoomAndCenter:()=>Q,OpenStreetMap:()=>L,__namedExportsOrder:()=>q,default:()=>F});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e.n(j),M=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/Map/Map.tsx"),K=e("./node_modules/react/jsx-runtime.js"),te=e("./node_modules/console-browserify/index.js");function z(B,N){return H(B)||X(B,N)||re(B,N)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(B,N){if(!!B){if(typeof B=="string")return J(B,N);var V=Object.prototype.toString.call(B).slice(8,-1);if(V==="Object"&&B.constructor&&(V=B.constructor.name),V==="Map"||V==="Set")return Array.from(B);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return J(B,N)}}function J(B,N){(N==null||N>B.length)&&(N=B.length);for(var V=0,G=new Array(N);V<N;V++)G[V]=B[V];return G}function X(B,N){var V=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(V!=null){var G=[],$=!0,oe=!1,le,me;try{for(V=V.call(B);!($=(le=V.next()).done)&&(G.push(le.value),!(N&&G.length===N));$=!0);}catch(ce){oe=!0,me=ce}finally{try{!$&&V.return!=null&&V.return()}finally{if(oe)throw me}}return G}}function H(B){if(Array.isArray(B))return B}var U=`import React, { useState } from 'react';
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
`,ee={Default:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},MapWithMarkerZoomAndCenter:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},OpenStreetMap:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketTerrain:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},KartverketSea:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}},GoogleMaps:{startLoc:{col:45,line:36},endLoc:{col:1,line:53},startBody:{col:45,line:36},endBody:{col:1,line:53}}},W="";const F={title:"Components/Map",component:Y.D,parameters:{layout:"fullscreen",design:(0,D.vc)([{type:"figma",url:W},{type:"link",url:W}]),docs:{page:function(){return(0,K.jsx)(R.Y,{description:"Map component"})}}},args:{}};var w=function(N){var V=(0,M.useState)(N.markerLocation),G=z(V,2),$=G[0],oe=G[1],le=function(ce){oe(ce),te.log("Map clicked at ["+ce.latitude+","+ce.longitude+"]")};return(0,K.jsx)(Y.D,Object.assign({},N,{markerLocation:$,onClick:le}))};w.displayName="Template";var Z=w.bind({});Z.args={},Z.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};var Q=w.bind({});Q.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},Q.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};var L=w.bind({});L.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},L.parameters={docs:{description:{story:"OpenStreetMap"}}};var I=w.bind({});I.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},I.parameters={docs:{description:{story:"Kartverket terrain map"}}};var A=w.bind({});A.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},A.parameters={docs:{description:{story:"Kartverket sea map"}}};var k=w.bind({});k.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},k.parameters={docs:{description:{story:"Google Maps"}}},Z.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Z.parameters),Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters);var q=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/Page/Page.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Primary:()=>m,Success:()=>c,__namedExportsOrder:()=>g,default:()=>v});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),t=e("./.storybook/StoryPage.tsx"),d=e("./src/components/Page/Context.ts"),T=e("./src/components/Page/PageContent.tsx"),_=e("./src/components/Page/PageHeader.tsx"),P=e("./src/components/Page/Page.tsx"),f,E;function y(){return y=Object.assign?Object.assign.bind():function(b){for(var x=1;x<arguments.length;x++){var j=arguments[x];for(var O in j)Object.prototype.hasOwnProperty.call(j,O)&&(b[O]=j[O])}return b},y.apply(this,arguments)}var h=function(x){return n.createElement("svg",y({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},x),f||(f=n.createElement("path",{d:"M10.286 36H0V0h10.286v36ZM2.57 33h5.143V3H2.571v30Zm20.572 3H12.857V0h10.286v36Zm-7.714-3h5.142V3H15.43v30ZM36 36H25.714V0H36v36Zm-7.714-3h5.143V3h-5.143v30Z"})),E||(E=n.createElement("path",{d:"M4.957 30.371C3.913 30.371 3 29.468 3 28.436c0-1.033.913-1.936 1.957-1.936 1.043 0 1.956.903 1.956 1.936 0 1.032-.913 1.935-1.956 1.935ZM18 30.5c-1.044 0-1.956-.903-1.956-1.936 0-1.032.912-1.935 1.956-1.935s1.956.903 1.956 1.935c0 1.033-.912 1.936-1.956 1.936Zm13.044 0c-1.044 0-1.957-.903-1.957-1.936 0-1.032.913-1.935 1.957-1.935 1.043 0 1.956.903 1.956 1.935 0 1.033-.913 1.936-1.956 1.936Z"})))},S=e("./node_modules/react/jsx-runtime.js"),i=`import React from 'react';
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
`,C={Primary:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}},Success:{startLoc:{col:46,line:42},endLoc:{col:1,line:49},startBody:{col:46,line:42},endBody:{col:1,line:49}}},p="";const v={title:"Components/Page",component:P.T,parameters:{design:(0,l.vc)([{type:"figma",url:p},{type:"link",url:p}]),docs:{page:function(){return(0,S.jsx)(t.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var u=function(x){return(0,S.jsxs)(P.T,{color:x.color,children:[(0,S.jsx)(_.m,{icon:(0,S.jsx)(h,{}),children:"PageHeader"}),(0,S.jsx)(T.J,{children:"PageContent"})]})};u.displayName="Template";var m=u.bind({});m.args={color:d.gL.Primary},m.parameters={docs:{description:{story:""}}};var c=u.bind({});c.args={color:d.gL.Success},c.parameters={docs:{description:{story:""}}},m.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => {
  return (
    <Page color={args.color}>
      <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
      <PageContent>PageContent</PageContent>
    </Page>
  );
}`}},c.parameters);var g=["Primary","Success"]},"./src/components/Pagination/Pagination.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Q,__namedExportsOrder:()=>L,default:()=>w});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),O=e.n(j),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),D=e.n(M),R=e("./node_modules/react/index.js"),Y=e("./node_modules/storybook-addon-designs/esm/index.js"),K=e("./.storybook/StoryPage.tsx"),te=e("./src/components/Pagination/Pagination.tsx"),z=e("./node_modules/react/jsx-runtime.js");function ne(I,A){return U(I)||H(I,A)||J(I,A)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(I,A){if(!!I){if(typeof I=="string")return X(I,A);var k=Object.prototype.toString.call(I).slice(8,-1);if(k==="Object"&&I.constructor&&(k=I.constructor.name),k==="Map"||k==="Set")return Array.from(I);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return X(I,A)}}function X(I,A){(A==null||A>I.length)&&(A=I.length);for(var k=0,q=new Array(A);k<A;k++)q[k]=I[k];return q}function H(I,A){var k=I==null?null:typeof Symbol!="undefined"&&I[Symbol.iterator]||I["@@iterator"];if(k!=null){var q=[],B=!0,N=!1,V,G;try{for(k=k.call(I);!(B=(V=k.next()).done)&&(q.push(V.value),!(A&&q.length===A));B=!0);}catch($){N=!0,G=$}finally{try{!B&&k.return!=null&&k.return()}finally{if(N)throw G}}return q}}function U(I){if(Array.isArray(I))return I}var ee=`import React, { useState } from 'react';
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
`,W={Example:{startLoc:{col:52,line:38},endLoc:{col:1,line:58},startBody:{col:52,line:38},endBody:{col:1,line:58}}},F="";const w={title:"Components/Pagination",component:te.t,parameters:{design:(0,Y.vc)([{type:"figma",url:F},{type:"link",url:F}]),docs:{page:function(){return(0,z.jsx)(K.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var Z=function(A){var k=(0,R.useState)(5),q=ne(k,2),B=q[0],N=q[1],V=(0,R.useState)(0),G=ne(V,2),$=G[0],oe=G[1],le=function(ce){N(parseInt(ce.target.value,10)),oe(0)};return(0,z.jsx)(te.t,Object.assign({},A,{rowsPerPage:B,currentPage:$,setCurrentPage:oe,onRowsPerPageChange:le}))};Z.displayName="Template";var Q=Z.bind({});Q.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20],rowsPerPageText:"Rader per side",pageDescriptionText:"av"},Q.parameters={docs:{description:{story:""}}},Q.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},Q.parameters);var L=["Example"]},"./src/components/Panel/Panel.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>v,Info:()=>C,Success:()=>i,Warning:()=>p,__namedExportsOrder:()=>u,default:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/Panel/Panel.tsx"),P=e("./node_modules/react/jsx-runtime.js"),f=`import React from 'react';
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
`,E={Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Error:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},y="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const h={title:"Components/Panel",component:_.s,parameters:{design:(0,d.vc)([{type:"figma",url:y},{type:"link",url:y}]),docs:{page:function(){return(0,P.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,P.jsx)("div",{children:"Her kommer litt informasjon"})}};var S=function(c){return(0,P.jsx)(_.s,Object.assign({},c))};S.displayName="Template";var i=S.bind({});i.args={variant:_.c.Success},i.parameters={docs:{description:{story:"Success beskrivelse"}}};var C=S.bind({});C.parameters={docs:{description:{story:"Info beskrivelse"}}};var p=S.bind({});p.args={variant:_.c.Warning},p.parameters={docs:{description:{story:"Warning beskrivelse"}}};var v=S.bind({});v.args={variant:_.c.Error},v.parameters={docs:{description:{story:"Error beskrivelse"}}},i.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},i.parameters),C.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},C.parameters),p.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},p.parameters),v.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},v.parameters);var u=["Success","Info","Warning","Error"]},"./src/components/Panel/PopoverPanel.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Error:()=>k,Info:()=>I,Success:()=>L,Warning:()=>A,__namedExportsOrder:()=>q,default:()=>Z});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e.n(j),M=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),K=e("./src/components/Button/index.ts"),te=e("./src/components/Panel/Panel.tsx"),z=e("./src/components/Panel/PopoverPanel.tsx"),ne=e("./node_modules/react/jsx-runtime.js");function re(B,N){return ee(B)||U(B,N)||X(B,N)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(B,N){if(!!B){if(typeof B=="string")return H(B,N);var V=Object.prototype.toString.call(B).slice(8,-1);if(V==="Object"&&B.constructor&&(V=B.constructor.name),V==="Map"||V==="Set")return Array.from(B);if(V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))return H(B,N)}}function H(B,N){(N==null||N>B.length)&&(N=B.length);for(var V=0,G=new Array(N);V<N;V++)G[V]=B[V];return G}function U(B,N){var V=B==null?null:typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"];if(V!=null){var G=[],$=!0,oe=!1,le,me;try{for(V=V.call(B);!($=(le=V.next()).done)&&(G.push(le.value),!(N&&G.length===N));$=!0);}catch(ce){oe=!0,me=ce}finally{try{!$&&V.return!=null&&V.return()}finally{if(oe)throw me}}return G}}function ee(B){if(Array.isArray(B))return B}var W=`import React from 'react';
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
`,F={Success:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Info:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Warning:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}},Error:{startLoc:{col:54,line:45},endLoc:{col:1,line:84},startBody:{col:54,line:45},endBody:{col:1,line:84}}},w="";const Z={title:"Components/Panel/PopoverPanel",component:z.H,parameters:{design:(0,D.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,ne.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Tittel",variant:te.c.Warning,trigger:(0,ne.jsx)("button",{children:"\xC5pne"}),side:"top"}};var Q=function(N){var V=(0,R.eJ)(!1),G=re(V,2),$=G[0],oe=G[1],le=function(){oe(!$)};return(0,ne.jsx)("div",{children:(0,ne.jsxs)(z.H,{variant:N.variant,side:N.side,title:N.title,open:$,trigger:(0,ne.jsx)(K.zx,{variant:K.Wu.Filled,color:K.rp.Primary,children:"\xC5pne"}),onOpenChange:oe,showPointer:N.showPointer,showIcon:N.showIcon,forceMobileLayout:N.forceMobileLayout,children:[(0,ne.jsx)("div",{children:"Her kommer litt informasjon"}),(0,ne.jsx)(K.zx,{variant:K.Wu.Filled,color:K.rp.Primary,size:K.qE.Small,onClick:le,children:"Lukk"})]})})};Q.displayName="Template";var L=Q.bind({});L.args={variant:te.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},L.argTypes={trigger:{control:!1}},L.parameters={docs:{description:{story:""}}};var I=Q.bind({});I.args={variant:te.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},I.argTypes={trigger:{control:!1}},I.parameters={docs:{description:{story:""}}};var A=Q.bind({});A.args={variant:te.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},A.argTypes={trigger:{control:!1}},A.parameters={docs:{description:{story:""}}};var k=Q.bind({});k.args={variant:te.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},k.argTypes={trigger:{control:!1}},k.parameters={docs:{description:{story:""}}},L.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},k.parameters);var q=["Success","Info","Warning","Error"]},"./src/components/SearchField/SearchField.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>Z,__namedExportsOrder:()=>Q,default:()=>F});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e.n(j),M=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./node_modules/@storybook/addons/dist/esm/hooks.js"),Y=e("./.storybook/StoryPage.tsx"),K=e("./src/components/SearchField/SearchField.tsx"),te=e("./node_modules/react/jsx-runtime.js");function z(L,I){return H(L)||X(L,I)||re(L,I)||ne()}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(L,I){if(!!L){if(typeof L=="string")return J(L,I);var A=Object.prototype.toString.call(L).slice(8,-1);if(A==="Object"&&L.constructor&&(A=L.constructor.name),A==="Map"||A==="Set")return Array.from(L);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return J(L,I)}}function J(L,I){(I==null||I>L.length)&&(I=L.length);for(var A=0,k=new Array(I);A<I;A++)k[A]=L[A];return k}function X(L,I){var A=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(A!=null){var k=[],q=!0,B=!1,N,V;try{for(A=A.call(L);!(q=(N=A.next()).done)&&(k.push(N.value),!(I&&k.length===I));q=!0);}catch(G){B=!0,V=G}finally{try{!q&&A.return!=null&&A.return()}finally{if(B)throw V}}return k}}function H(L){if(Array.isArray(L))return L}var U=`import React from 'react';
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
`,ee={Example:{startLoc:{col:53,line:45},endLoc:{col:1,line:53},startBody:{col:53,line:45},endBody:{col:1,line:53}}},W="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const F={title:"Components/SearchField",component:K.U,parameters:{design:(0,D.vc)([{type:"figma",url:W},{type:"link",url:W}]),docs:{page:function(){return(0,te.jsx)(Y.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}};var w=function(I){var A=(0,R.D8)(),k=z(A,1),q=k[0].disabled;return(0,te.jsx)(K.U,Object.assign({disabled:q},I))};w.displayName="Template";var Z=w.bind({});Z.args={},Z.parameters={docs:{description:{story:"Search field."}}},Z.parameters=Object.assign({storySource:{source:`(args) => {
  const [{ disabled }] = useArgs();
  return (
    <SearchField
      disabled={disabled}
      {...args}
    />
  );
}`}},Z.parameters);var Q=["Example"]},"./src/components/Select/Select.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Multiple:()=>x,MultipleDisabled:()=>j,MultipleError:()=>O,Single:()=>c,SingleDisabled:()=>g,SingleError:()=>b,__namedExportsOrder:()=>M,default:()=>u});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),d=e.n(t),T=e("./node_modules/react/index.js"),_=e("./node_modules/storybook-addon-designs/esm/index.js"),P=e("./.storybook/StoryPage.tsx"),f=e("./src/components/Select/Select.tsx"),E=e("./node_modules/react/jsx-runtime.js"),y=`import React from 'react';
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
`,h={Single:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},SingleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},Multiple:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleDisabled:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}},MultipleError:{startLoc:{col:48,line:74},endLoc:{col:1,line:78},startBody:{col:48,line:74},endBody:{col:1,line:78}}},S="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=7538%3A45627",i=[{label:"Agder",value:"Agder"},{label:"Innlandet",value:"Innlandet"},{label:"M\xF8re og Romsdal",value:"M\xF8re og Romsdal"},{label:"Nordland",value:"Nordland"},{label:"Oslo",value:"Oslo"},{label:"Rogaland",value:"Rogaland"},{label:"Vestfold og Telemark",value:"Vestfold og Telemark"},{label:"Troms og Finnmark",value:"Troms og Finnmark"},{label:"Tr\xF8ndelag",value:"Tr\xF8ndelag"},{label:"Vestland",value:"Vestland"},{label:"Viken",value:"Viken"}],C=i.map(function(D){return Object.assign({},D,{deleteButtonLabel:"Slett "+D.label})}),p={label:"Velg et fylke",multiple:!1,options:i},v={deleteButtonLabel:"Fjern alle",label:"Velg ett eller flere fylker",multiple:!0,options:C};const u={title:"Components/Select",component:f.P,parameters:{design:(0,_.vc)([{type:"figma",url:S},{type:"link",url:S}]),docs:{page:function(){return(0,E.jsx)(P.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:p};var m=function(R){return(0,E.jsx)("div",{style:{width:"440px"},children:(0,E.jsx)(f.P,Object.assign({},R))})};m.displayName="Template";var c=m.bind({});c.args={},c.parameters={docs:{description:{story:"This is the default select box. It only allows one option to be selected, like `<select>` in html. It has an `onChange` property hat accepts a function which will receive the selected value each time it is changed."}}};var g=m.bind({});g.args={disabled:!0},g.parameters={docs:{description:{story:"This is a disabled, single select box. Remember to make it clear for the user why it is disabled."}}};var b=m.bind({});b.args={error:!0},b.parameters={docs:{description:{story:"This is a single select box in the error state. Remember to use it together with an error message that explains why there is an error."}}};var x=m.bind({});x.args=v,x.parameters={docs:{description:{story:"This is a select box with the possibility to choose multiple values, like `<select multiple>` in html. It has an `onChange` property hat accepts a function which will receive a list of the selected values each time it is changed."}}};var j=m.bind({});j.args=Object.assign({},v,{disabled:!0}),j.parameters={docs:{description:{story:"This is a disabled, multiple select box. Remember to make it clear for the user why it is disabled."}}};var O=m.bind({});O.args=Object.assign({},v,{error:!0}),O.parameters={docs:{description:{story:"This is a multiple select box in the error state. Remember to use it together with an error message that explains why there is an error."}}},c.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},c.parameters),g.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},g.parameters),b.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},b.parameters),x.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},x.parameters),j.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},j.parameters),O.parameters=Object.assign({storySource:{source:`(args) => (
  <div style={{ width: '440px' }}>
    <Select {...args} />
  </div>
)`}},O.parameters);var M=["Single","SingleDisabled","SingleError","Multiple","MultipleDisabled","MultipleError"]},"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{IconFromNavIconLibrary:()=>v,ImportedCustomIcon:()=>u,__namedExportsOrder:()=>m,default:()=>C});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),n=e("./node_modules/react/index.js"),l=e("./node_modules/storybook-addon-designs/esm/index.js"),t=e("./.storybook/StoryPage.tsx"),d=e("./src/components/SvgIcon/index.ts"),T,_,P;function f(){return f=Object.assign?Object.assign.bind():function(c){for(var g=1;g<arguments.length;g++){var b=arguments[g];for(var x in b)Object.prototype.hasOwnProperty.call(b,x)&&(c[x]=b[x])}return c},f.apply(this,arguments)}var E=function(g){return n.createElement("svg",f({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},g),T||(T=n.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),_||(_=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),P||(P=n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},y=e("./node_modules/react/jsx-runtime.js"),h=`import React from 'react';
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
`,S={IconFromNavIconLibrary:{startLoc:{col:49,line:38},endLoc:{col:1,line:40},startBody:{col:49,line:38},endBody:{col:1,line:40}},ImportedCustomIcon:{startLoc:{col:49,line:38},endLoc:{col:1,line:40},startBody:{col:49,line:38},endBody:{col:1,line:40}}},i="";const C={title:"Components/SvgIcon",component:d.l,parameters:{design:(0,l.vc)([{type:"figma",url:i},{type:"link",url:i}]),docs:{page:function(){return(0,y.jsx)(t.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};var p=function(g){return(0,y.jsx)(d.l,Object.assign({},g))};p.displayName="Template";var v=p.bind({});v.args={iconName:"Success"},v.parameters={docs:{description:{story:"`<SvgIcon iconName='Success' />`"}}};var u=p.bind({});u.args={svgIconComponent:(0,y.jsx)(E,{height:"2rem",width:"2rem"})},u.parameters={docs:{description:{story:"Import a single SVG file as a react component and pass the component to the `svgIconComponent` prop.`import { ReactComponent as SuccessIcon } from './success.svg';`  `<SvgIcon svgIconComponent={<SuccessIcon height='2rem' width='2rem' />} />`"}}},v.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <SvgIcon {...args} />
)`}},u.parameters);var m=["IconFromNavIconLibrary","ImportedCustomIcon"]},"./src/components/Table/Table.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{BasicTable:()=>ce,SelectRows:()=>ue,__namedExportsOrder:()=>Ee,default:()=>$});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.parse-int.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),O=e.n(j),M=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),D=e.n(M),R=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),Y=e.n(R),K=e("./node_modules/react/index.js"),te=e("./node_modules/storybook-addon-designs/esm/index.js"),z=e("./node_modules/classnames/index.js"),ne=e.n(z),re=e("./.storybook/StoryPage.tsx"),J=e("./src/components/Pagination/index.ts"),X=e("./src/components/Table/Table.tsx"),H=e("./src/components/Table/TableHeader.tsx"),U=e("./src/components/Table/TableCell.tsx"),ee=e("./src/components/Table/TableRow.tsx"),W=e("./src/components/Table/TableBody.tsx"),F=e("./src/components/Table/Table.stories.module.css"),w=e.n(F),Z=e("./src/components/Table/TableFooter.tsx"),Q=e("./node_modules/react/jsx-runtime.js");function L(se,ae){return B(se)||q(se,ae)||A(se,ae)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(se,ae){if(!!se){if(typeof se=="string")return k(se,ae);var de=Object.prototype.toString.call(se).slice(8,-1);if(de==="Object"&&se.constructor&&(de=se.constructor.name),de==="Map"||de==="Set")return Array.from(se);if(de==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(de))return k(se,ae)}}function k(se,ae){(ae==null||ae>se.length)&&(ae=se.length);for(var de=0,pe=new Array(ae);de<ae;de++)pe[de]=se[de];return pe}function q(se,ae){var de=se==null?null:typeof Symbol!="undefined"&&se[Symbol.iterator]||se["@@iterator"];if(de!=null){var pe=[],ge=!0,Te=!1,Oe,Ce;try{for(de=de.call(se);!(ge=(Oe=de.next()).done)&&(pe.push(Oe.value),!(ae&&pe.length===ae));ge=!0);}catch(he){Te=!0,Ce=he}finally{try{!ge&&de.return!=null&&de.return()}finally{if(Te)throw Ce}}return pe}}function B(se){if(Array.isArray(se))return se}var N=`import React, { useState } from 'react';
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
`,V={BasicTable:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}},SelectRows:{startLoc:{col:47,line:122},endLoc:{col:1,line:237},startBody:{col:47,line:122},endBody:{col:1,line:237}}},G="";const $={title:"Components/Table",component:X.i,parameters:{design:(0,te.vc)([{type:"figma",url:G},{type:"link",url:G}]),docs:{page:function(){return(0,Q.jsx)(re.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{}};function oe(se,ae,de,pe,ge){return{applicationNr:se,product:ae,status:de,imageSrc:pe,imageAlt:ge}}var le=[oe("20220873","Embalasje for snacksprodukter","Under behandling","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png","chipspose"),oe("20220590","Apparat for rengj\xF8ring av sveises\xF8m","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg","apparat for rengj\xF8ring av sveises\xF8m"),oe("20220827","Logo","Besluttet gjeldene","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG","logo"),oe("20220582","Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe","Registrert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg","bilde av handikaprampe"),oe("20220408","Bil","Registert","https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg","Bil"),oe("200208507","Vippesykkel","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg","vippesykkel"),oe("200812696","SHELL","Besluttet gjeldende","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg","shell"),oe("201106591","DNB","Registrert","https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg","dnb")],me=function(ae){var de=(0,K.useState)(""),pe=L(de,2),ge=pe[0],Te=pe[1],Oe=(0,K.useState)({idCell:"",sortDirection:U.Sr.NotActive}),Ce=L(Oe,2),he=Ce[0],De=Ce[1],Me=(0,K.useState)(5),be=L(Me,2),ve=be[0],Ie=be[1],Be=(0,K.useState)(0),Re=L(Be,2),Ae=Re[0],Ke=Re[1],Ue=function(Pe){var Se=Pe.selectedValue;Te(Se)},ke=function(Pe){var Se=Pe.idCell,We=Pe.previousSortDirection;We===U.Sr.Ascending?De({idCell:Se,sortDirection:U.Sr.Descending}):We===U.Sr.Descending?De({idCell:Se,sortDirection:U.Sr.Ascending}):De({idCell:Se,sortDirection:U.Sr.Descending})},Fe=function(Pe){Ie(parseInt(Pe.target.value,10)),Ke(0)},we=function(Pe){Ke(Pe)};return(0,Q.jsxs)(X.i,{selectRows:ae.selectRows,onChange:Ue,selectedValue:ge,children:[(0,Q.jsx)(H.x,{children:(0,Q.jsxs)(ee.S,{children:[(0,Q.jsx)(U.pj,{onChange:ke,id:"S\xF8knadsnr.",sortDirecton:he.idCell==="S\xF8knadsnr."?he.sortDirection:U.Sr.NotActive,children:"S\xF8knadsnr."}),(0,Q.jsx)(U.pj,{id:"Produkt",onChange:ke,sortDirecton:he.idCell==="Produkt"?he.sortDirection:U.Sr.NotActive,children:"Produkt"}),(0,Q.jsx)(U.pj,{children:"Status"}),(0,Q.jsx)(U.pj,{children:"Bilde"})]})}),(0,Q.jsx)(W.R,{children:le.slice(Ae*ve,Ae*ve+ve).map(function(fe){return(0,Q.jsxs)(ee.S,{value:fe.applicationNr,children:[(0,Q.jsx)(U.pj,{children:fe.applicationNr}),(0,Q.jsx)(U.pj,{children:fe.product}),(0,Q.jsx)(U.pj,{children:fe.status}),(0,Q.jsx)(U.pj,{children:(0,Q.jsx)("img",{className:ne()(w().checkmark),src:fe.imageSrc,alt:fe.imageAlt})})]},fe.applicationNr)})}),(0,Q.jsx)(Z.y,{children:(0,Q.jsx)(ee.S,{children:(0,Q.jsx)(U.pj,{colSpan:4,children:(0,Q.jsx)(J.t,{numberOfRows:le.length,rowsPerPageOptions:[5,10,15,20],rowsPerPage:ve,onRowsPerPageChange:Fe,currentPage:Ae,setCurrentPage:we,rowsPerPageText:"Rader per side",pageDescriptionText:"av"})})})})]})};me.displayName="Template";var ce=me.bind({});ce.args={selectRows:!1},ce.parameters={docs:{description:{story:""}}};var ue=me.bind({});ue.args={selectRows:!0},ue.parameters={docs:{description:{story:""}}},ce.parameters=Object.assign({storySource:{source:`(args) => {
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
}`}},ue.parameters);var Ee=["BasicTable","SelectRows"]},"./src/components/TextArea/TextArea.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>C,Disabled:()=>m,Error:()=>p,ReadOnlyConfirm:()=>u,ReadOnlyInfo:()=>v,__namedExportsOrder:()=>c,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/TextArea/TextArea.tsx"),f=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,y={Default:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Error:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyInfo:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},ReadOnlyConfirm:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}},Disabled:{startLoc:{col:50,line:41},endLoc:{col:1,line:43},startBody:{col:50,line:41},endBody:{col:1,line:43}}},h="https://www.figma.com/file/vpM9dqqQPHqU6ogfKp5tlr/DDS---Core-Components?node-id=6632%3A21857";const S={title:"Components/TextArea",component:P.K,parameters:{design:(0,d.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,f.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label"}};var i=function(b){return(0,f.jsx)(P.K,Object.assign({},b))};i.displayName="Template";var C=i.bind({});C.args={},C.parameters={docs:{description:{story:"Regular textarea."}}};var p=i.bind({});p.args={isValid:!1},p.parameters={docs:{description:{story:"Textarea displaying error."}}};var v=i.bind({});v.args={readOnly:!0,value:"Some text"},v.parameters={docs:{description:{story:"Textarea as readonly-info."}}};var u=i.bind({});u.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},u.parameters={docs:{description:{story:"Textarea as readonly-confirm."}}};var m=i.bind({});m.args={disabled:!0,value:"Some text"},m.parameters={docs:{description:{story:"Textarea as disabled."}}},C.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},C.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},p.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},u.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <TextArea {...args} />
)`}},m.parameters);var c=["Default","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/TextField/TextField.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Default:()=>C,Disabled:()=>c,Error:()=>v,NumberInput:()=>p,ReadOnlyConfirm:()=>m,ReadOnlyInfo:()=>u,__namedExportsOrder:()=>g,default:()=>S});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/storybook-addon-designs/esm/index.js"),T=e("./.storybook/StoryPage.tsx"),_=e("./src/components/_InputWrapper/index.ts"),P=e("./src/components/TextField/TextField.tsx"),f=e("./node_modules/react/jsx-runtime.js"),E=`import React from 'react';
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
`,y={Default:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},NumberInput:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Error:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyInfo:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},ReadOnlyConfirm:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}},Disabled:{startLoc:{col:51,line:45},endLoc:{col:1,line:47},startBody:{col:51,line:45},endBody:{col:1,line:47}}},h="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2090%3A6723";const S={title:"Components/TextField",component:P.n,parameters:{design:(0,d.vc)([{type:"figma",url:h},{type:"link",url:h}]),docs:{page:function(){return(0,f.jsx)(T.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{label:"Label",id:"textfield-story",formatting:{align:"left"}}};var i=function(x){return(0,f.jsx)(P.n,Object.assign({},x))};i.displayName="Template";var C=i.bind({});C.args={},C.parameters={docs:{description:{story:"Regular input field."}}};var p=i.bind({});p.args={formatting:{number:{thousandSeparator:" ",prefix:"NOK "}}},p.parameters={docs:{description:{story:"Number input field."}}};var v=i.bind({});v.args={isValid:!1},v.parameters={docs:{description:{story:"Input field displaying error."}}};var u=i.bind({});u.args={readOnly:!0,value:"Some text"},u.parameters={docs:{description:{story:"Input field as readonly-info."}}};var m=i.bind({});m.args={readOnly:_.Hx.ReadOnlyConfirm,value:"Some text"},m.parameters={docs:{description:{story:"Input field as readonly-confirm."}}};var c=i.bind({});c.args={disabled:!0,value:"Some text"},c.parameters={docs:{description:{story:"Input field as disabled."}}},C.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},C.parameters),p.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},p.parameters),v.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},v.parameters),u.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},u.parameters),m.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},m.parameters),c.parameters=Object.assign({storySource:{source:`(args) => (
  <TextField {...args} />
)`}},c.parameters);var g=["Default","NumberInput","Error","ReadOnlyInfo","ReadOnlyConfirm","Disabled"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(a,s,e)=>{"use strict";e.r(s),e.d(s,{Example:()=>L,__namedExportsOrder:()=>I,default:()=>Z});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),_=e.n(T),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),f=e.n(P),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),y=e.n(E),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),S=e.n(h),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e.n(i),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),v=e.n(p),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),m=e.n(u),c=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),g=e.n(c),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),x=e.n(b),j=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),O=e.n(j),M=e("./node_modules/react/index.js"),D=e("./node_modules/storybook-addon-designs/esm/index.js"),R=e("./.storybook/StoryPage.tsx"),Y=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),K=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),te=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css"),z=e.n(te),ne=e("./node_modules/react/jsx-runtime.js");function re(A,k){return ee(A)||U(A,k)||X(A,k)||J()}function J(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(A,k){if(!!A){if(typeof A=="string")return H(A,k);var q=Object.prototype.toString.call(A).slice(8,-1);if(q==="Object"&&A.constructor&&(q=A.constructor.name),q==="Map"||q==="Set")return Array.from(A);if(q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q))return H(A,k)}}function H(A,k){(k==null||k>A.length)&&(k=A.length);for(var q=0,B=new Array(k);q<k;q++)B[q]=A[q];return B}function U(A,k){var q=A==null?null:typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"];if(q!=null){var B=[],N=!0,V=!1,G,$;try{for(q=q.call(A);!(N=(G=q.next()).done)&&(B.push(G.value),!(k&&B.length===k));N=!0);}catch(oe){V=!0,$=oe}finally{try{!N&&q.return!=null&&q.return()}finally{if(V)throw $}}return B}}function ee(A){if(Array.isArray(A))return A}var W=`import React, { useState } from 'react';
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
`,F={Example:{startLoc:{col:59,line:38},endLoc:{col:1,line:56},startBody:{col:59,line:38},endBody:{col:1,line:56}}},w="";const Z={title:"Components/Toggle button group",component:Y.t,parameters:{design:(0,D.vc)([{type:"figma",url:w},{type:"link",url:w}]),docs:{page:function(){return(0,ne.jsx)(R.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var Q=function(){var k=(0,M.useState)("left"),q=re(k,2),B=q[0],N=q[1],V=function($){var oe=$.selectedValue;N(oe)};return(0,ne.jsx)("div",{className:z().container,children:(0,ne.jsxs)(Y.t,{onChange:V,selectedValue:B,children:[(0,ne.jsx)(K.C,{value:"left",children:"Aktivt valg"}),(0,ne.jsx)(K.C,{value:"right",children:"Mulig valg"})]})})};Q.displayName="Template";var L=Q.bind({});L.args={},L.argTypes={onChange:{control:!1},selectedValue:{control:!1}},L.parameters={docs:{description:{}}},L.parameters=Object.assign({storySource:{source:`() => {
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
}`}},L.parameters);var I=["Example"]},"./src/DesignTokens/index.ts":(a,s,e)=>{"use strict";e.d(s,{T:()=>C});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),_=e.n(T),P=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),f=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),E=1.6,y=/(\d*\.?\d+)rem(?=\W|$)/gim,h=function(u){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,c=Math.pow(10,m);return Math.round((u+Number.EPSILON)*c)/c},S=function(u){return typeof u=="string"?u.replace(y,function(m,c){var g=h(c*E);return g+"rem"}):u},i={get:function(u,m){if(m in u){var c=u[m];return typeof c=="object"?new Proxy(c,i):S(c)}}},C=new Proxy(P,i),p=new Proxy(f,i)},"./src/components/Accordion/Accordion.tsx":(a,s,e)=>{"use strict";e.d(s,{U:()=>d});var r=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./src/components/Accordion/Accordion.module.css"),l=e.n(n),t=e("./node_modules/react/jsx-runtime.js"),d=function(P){var f=P.children,E=P.open,y=P.onClick,h=P.iconVariant,S=h===void 0?o.Bt.Primary:h,i=(0,r.useId)(),C=(0,r.useId)();return(0,t.jsx)("div",{className:l().accordion,children:(0,t.jsx)(o.SY.Provider,{value:{onClick:y,open:E,headerId:i,contentId:C,iconVariant:S},children:f})})};d.displayName="Accordion";var T=null;try{d.displayName="Accordion",d.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:d.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(_){}},"./src/components/Accordion/AccordionContent.tsx":(a,s,e)=>{"use strict";e.d(s,{v:()=>l});var r=e("./node_modules/react/index.js"),o=e("./src/components/Accordion/Context.ts"),n=e("./node_modules/react/jsx-runtime.js"),l=function(T){var _=T.children,P=(0,o.EF)(),f=P.open,E=P.contentId,y=P.headerId;return(0,n.jsx)("div",{children:f&&(0,n.jsx)("div",{"aria-expanded":f,id:E,"aria-labelledby":y,children:_})})};l.displayName="AccordionContent";var t=null;try{l.displayName="AccordionContent",l.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:l.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(d){}},"./src/components/Accordion/AccordionHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{_:()=>P});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Accordion/AccordionHeader.module.css"),t=e.n(l),d=e("./src/components/Accordion/Context.ts"),T=e("./src/components/Accordion/AccordionIcon.tsx"),_=e("./node_modules/react/jsx-runtime.js"),P=function(E){var y,h=E.children,S=E.actions,i=E.subtitle,C=(0,d.EF)(),p=C.onClick,v=C.open,u=C.headerId,m=C.contentId;return(0,_.jsxs)("div",{className:n()(t()["accordion-header"],(y={},y[t()["accordion-header--subtitle"]]=i,y)),children:[(0,_.jsx)(T.X,{}),(0,_.jsxs)("button",{className:n()(t()["accordion-header__title"]),"aria-expanded":v,type:"button",onClick:p,id:u,"aria-controls":m,children:[h,(i==null?void 0:i.length)&&(0,_.jsx)("div",{"data-testid":"accordion-header-subtitle",className:n()(t()["accordion-header__subtitle"]),children:i})]}),(0,_.jsx)("div",{className:n()(t()["accordion-header__actions"]),children:S})]})};P.displayName="AccordionHeader";try{P.displayName="AccordionHeader",P.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:P.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(f){}},"./src/components/Accordion/AccordionIcon.tsx":(a,s,e)=>{"use strict";e.d(s,{X:()=>i});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/react/index.js"),n=e("./node_modules/classnames/index.js"),l=e.n(n),t=e("./src/components/Accordion/AccordionIcon.module.css"),d=e.n(t),T=e("./src/components/Accordion/Context.ts"),_;function P(){return P=Object.assign?Object.assign.bind():function(p){for(var v=1;v<arguments.length;v++){var u=arguments[v];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(p[m]=u[m])}return p},P.apply(this,arguments)}var f=function(v){return o.createElement("svg",P({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),_||(_=o.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},E;function y(){return y=Object.assign?Object.assign.bind():function(p){for(var v=1;v<arguments.length;v++){var u=arguments[v];for(var m in u)Object.prototype.hasOwnProperty.call(u,m)&&(p[m]=u[m])}return p},y.apply(this,arguments)}var h=function(v){return o.createElement("svg",y({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),E||(E=o.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},S=e("./node_modules/react/jsx-runtime.js"),i=function(){var v,u,m=(0,T.EF)(),c=m.onClick,g=m.open,b=m.iconVariant,x=[d()["accordion-icon"],(v={},v[d()["accordion-icon--opened"]]=g,v)],j=(u={height:20,width:20,className:l()(x)},u["data-testid"]=b,u.onClick=c,u);switch(b){case T.Bt.Primary:return(0,S.jsx)(f,Object.assign({},j));case T.Bt.Secondary:return(0,S.jsx)(h,Object.assign({},j))}};const C=null},"./src/components/Accordion/Context.ts":(a,s,e)=>{"use strict";e.d(s,{Bt:()=>o,EF:()=>l,SY:()=>n});var r=e("./node_modules/react/index.js"),o;(function(t){t.Primary="primary",t.Secondary="secondary"})(o||(o={}));var n=(0,r.createContext)(void 0),l=function(){var d=(0,r.useContext)(n);if(d===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return d}},"./src/components/AppWrapper/AppWrapper.tsx":(a,s,e)=>{"use strict";e.d(s,{O:()=>T});var r=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),n=e.n(o),l=e("./src/components/AppWrapper/AppWrapper.module.css"),t=e.n(l),d=e("./node_modules/react/jsx-runtime.js"),T=function(P){var f=P.children;return(0,d.jsx)("div",{children:f})};T.displayName="AppWrapper";try{T.displayName="AppWrapper",T.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:T.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(_){}},"./src/components/Button/index.ts":(a,s,e)=>{"use strict";e.d(s,{zx:()=>m,rp:()=>C,qE:()=>i,Wu:()=>p});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),T=e.n(d),_=e("./src/components/SvgIcon/index.ts"),P=e("./src/components/Button/Button.module.css"),f=e.n(P),E=e("./node_modules/react/jsx-runtime.js"),y=["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","iconName","svgIconComponent","type"];function h(c,g){if(c==null)return{};var b=S(c,g),x,j;if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(c);for(j=0;j<O.length;j++)x=O[j],!(g.indexOf(x)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,x)||(b[x]=c[x]))}return b}function S(c,g){if(c==null)return{};var b={},x=Object.keys(c),j,O;for(O=0;O<x.length;O++)j=x[O],!(g.indexOf(j)>=0)&&(b[j]=c[j]);return b}var i;(function(c){c.Small="small",c.Medium="medium",c.Large="large"})(i||(i={}));var C;(function(c){c.Primary="primary",c.Secondary="secondary",c.Success="success",c.Danger="danger",c.Inverted="inverted"})(C||(C={}));var p;(function(c){c.Filled="filled",c.Outline="outline",c.Quiet="quiet"})(p||(p={}));var v=function(g,b){if(g&&!b)return(0,E.jsx)(_.l,{iconName:g,className:T()(f().icon)});if(!g&&b)return(0,E.jsx)(_.l,{svgIconComponent:b,className:T()(f().icon)})},u=function(g,b){var x,j,O,M=g.children,D=g.color,R=D===void 0?C.Primary:D,Y=g.variant,K=Y===void 0?p.Filled:Y,te=g.size,z=te===void 0?i.Small:te,ne=g.fullWidth,re=ne===void 0?!1:ne,J=g.dashedBorder,X=J===void 0?!1:J,H=g.iconPlacement,U=H===void 0?"left":H,ee=g.iconName,W=g.svgIconComponent,F=g.type,w=F===void 0?"button":F,Z=h(g,y);return(0,E.jsxs)("button",Object.assign({ref:b,className:T()(f().button,f()["button--"+z],f()["button--"+K],f()["button--"+R],f()["button--"+K+"--"+R],(x={},x[f()["button--full-width"]]=re,x),(j={},j[f()["button--dashed-border"]]=X,j),(O={},O[f()["button--only-icon"]]=!M&&ee,O)),type:w},Z,{children:[(U==="left"||!M)&&v(ee,W),M,U==="right"&&v(ee,W)]}))};u.displayName="Button";const m=(0,t.forwardRef)(u)},"./src/components/Checkbox/Checkbox.tsx":(a,s,e)=>{"use strict";e.d(s,{X:()=>h});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),d=e.n(t),T=e("./node_modules/react/index.js"),_=e("./node_modules/classnames/index.js"),P=e.n(_),f=e("./src/components/Checkbox/Checkbox.module.css"),E=e.n(f),y=e("./node_modules/react/jsx-runtime.js"),h=function(i){var C=i.checkboxId,p=i.checked,v=i.compact,u=i.description,m=i.disabled,c=i.error,g=i.hideLabel,b=i.label,x=i.name,j=i.onChange,O=i.readOnly,M=(0,T.useId)(),D=C||"checkbox-"+M,R=b?D+"-label":void 0,Y=u?D+"-description":void 0,K=b&&!g;return(0,y.jsxs)("label",{className:P()(E().wrapper,p&&E()["wrapper--checked"],c&&E()["wrapper--error"],m&&E()["wrapper--disabled"],v&&E()["wrapper--compact"],O&&E()["wrapper--read-only"]),htmlFor:D,children:[!O&&(0,y.jsxs)("span",{className:E()["checkbox-wrapper"],children:[(0,y.jsx)("input",{"aria-describedby":Y,"aria-label":K?void 0:b,"aria-labelledby":K?R:void 0,checked:p!=null?p:!1,className:E().checkbox,disabled:m,id:D,name:x,onChange:m?void 0:j,type:"checkbox"}),(0,y.jsx)("span",{className:E()["visible-box"],children:(0,y.jsx)("span",{className:E()["visible-box__checkmark"]})})]}),(K||u)&&(0,y.jsxs)("span",{className:E()["label-and-description"],children:[K&&(0,y.jsx)("span",{className:E().label,id:D+"-label",children:b}),u&&(0,y.jsx)("span",{className:E().description,id:D+"-description",children:u})]})]})};h.displayName="Checkbox";try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{checkboxId:{defaultValue:null,description:"",name:"checkboxId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:h.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch(S){}},"./src/components/CheckboxGroup/CheckboxGroup.tsx":(a,s,e)=>{"use strict";e.d(s,{c:()=>J,T:()=>z});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),v=e("./node_modules/react/index.js"),u=e("./node_modules/classnames/index.js"),m=e.n(u),c=e("./src/components/index.ts"),g=e("./src/components/FieldSet/FieldSet.tsx");function b(X,H){if(X===H)return!0;if(X===void 0||H===void 0||X.length!==H.length)return!1;for(var U in X)if(X[U]!==H[U])return!1;return!0}var x=e("./src/components/CheckboxGroup/CheckboxGroup.module.css"),j=e.n(x),O=e("./node_modules/react/jsx-runtime.js");function M(X,H){return te(X)||K(X,H)||R(X,H)||D()}function D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function R(X,H){if(!!X){if(typeof X=="string")return Y(X,H);var U=Object.prototype.toString.call(X).slice(8,-1);if(U==="Object"&&X.constructor&&(U=X.constructor.name),U==="Map"||U==="Set")return Array.from(X);if(U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U))return Y(X,H)}}function Y(X,H){(H==null||H>X.length)&&(H=X.length);for(var U=0,ee=new Array(H);U<H;U++)ee[U]=X[U];return ee}function K(X,H){var U=X==null?null:typeof Symbol!="undefined"&&X[Symbol.iterator]||X["@@iterator"];if(U!=null){var ee=[],W=!0,F=!1,w,Z;try{for(U=U.call(X);!(W=(w=U.next()).done)&&(ee.push(w.value),!(H&&ee.length===H));W=!0);}catch(Q){F=!0,Z=Q}finally{try{!W&&U.return!=null&&U.return()}finally{if(F)throw Z}}return ee}}function te(X){if(Array.isArray(X))return X}var z;(function(X){X.Vertical="vertical",X.Horizontal="horizontal"})(z||(z={}));var ne=function(H,U){switch(U.type){case"check":return H.concat([U.name]);case"uncheck":return H.filter(function(ee){return ee!==U.name});case"reset":return U.state}},re=function(H){return H.filter(function(U){var ee=U.checked;return ee}).map(function(U){var ee=U.name;return ee})},J=function(H){var U=H.compact,ee=H.description,W=H.disabled,F=H.error,w=H.items,Z=H.legend,Q=H.onChange,L=H.variant,I=L===void 0?z.Vertical:L,A=w.map(function($){return $.name});if(A.length!==new Set(A).size)throw Error("Each name in the checkbox group must be unique.");var k=(0,v.useReducer)(ne,re(w)),q=M(k,2),B=q[0],N=q[1];(0,v.useEffect)(function(){return N({type:"reset",state:re(w)})},[w]);var V=(0,v.useRef)(!0),G=(0,v.useRef)(B);return(0,v.useEffect)(function(){V.current?V.current=!1:Q&&!W&&!b(G.current,B)&&(Q(B),G.current=B)},[B,Q,W]),(0,O.jsx)(c.C3,{className:m()(j()["checkbox-group"],U&&j()["checkbox-group--compact"]),description:ee,disabled:W,error:F,legend:Z,size:U?g.w.Xsmall:g.w.Small,children:(0,O.jsx)("div",{className:m()(j()["checkbox-group__list"],j()["checkbox-group__list--"+I]),children:w.map(function($){return(0,O.jsx)(c.XZ,{checkboxId:$.checkboxId,checked:B.includes($.name),compact:U,description:$.description,disabled:W||$.disabled,error:!!F,label:$.label,name:$.name,onChange:function(le){N({type:le.target.checked?"check":"uncheck",name:$.name})}},$.name)})})})};J.displayName="CheckboxGroup";try{J.displayName="CheckboxGroup",J.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{compact:{defaultValue:null,description:"",name:"compact",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CheckboxItem[]"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((names: CheckedNames) => void)"}},variant:{defaultValue:{value:"CheckboxGroupVariant.Vertical"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"]={docgenInfo:J.__docgenInfo,name:"CheckboxGroup",path:"src/components/CheckboxGroup/CheckboxGroup.tsx#CheckboxGroup"})}catch(X){}},"./src/components/CircularProgress/CircularProgress.tsx":(a,s,e)=>{"use strict";e.d(s,{D:()=>_});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e.n(r),n=e("./node_modules/react/index.js"),l=e("./src/DesignTokens/index.ts"),t=e("./src/components/CircularProgress/CircularProgress.module.css"),d=e.n(t),T=e("./node_modules/react/jsx-runtime.js"),_=function(E){var y=E.value,h=E.width,S=h===void 0?70:h,i=E.strokeWidth,C=i===void 0?2.5:i,p=E.ariaLabel,v=E.label,u=E.id,m=u+"-label",c=!p&&v?m:void 0;return(0,T.jsxs)("div",{id:u,className:d().container,style:{width:S+"px"},role:"progressbar","aria-labelledby":c,"aria-label":p,children:[v&&(0,T.jsx)("div",{id:m,className:d().label,children:v}),(0,T.jsxs)("svg",{className:d().svg,viewBox:"0 0 35.8 35.8",children:[(0,T.jsx)(P,{stroke:l.T.ColorsBlue200,strokeWidth:C}),(0,T.jsx)(P,{strokeWidth:C,stroke:l.T.ColorsBlue900,strokeDashoffset:100-y,strokeDasharray:"100 100",className:d().circleTransition})]})]})};_.displayName="CircularProgress";var P=function(E){return(0,T.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},E))};P.displayName="Circle";try{_.displayName="CircularProgress",_.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:_.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(f){}},"./src/components/ErrorMessage/ErrorMessage.tsx":(a,s,e)=>{"use strict";e.d(s,{B:()=>T});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ErrorMessage/ErrorMessage.module.css"),t=e.n(l),d=e("./node_modules/react/jsx-runtime.js"),T=function(P){var f=P.id,E=P.children,y=P.ariaLabel;return(0,d.jsx)("div",{"data-testid":"ErrorMessage","aria-label":y,id:f,role:"alertdialog",className:n()(t()["error-message-wrapper"]),children:E})};T.displayName="ErrorMessage";try{T.displayName="ErrorMessage",T.__docgenInfo={description:"",displayName:"ErrorMessage",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:T.__docgenInfo,name:"ErrorMessage",path:"src/components/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(_){}},"./src/components/FieldSet/FieldSet.tsx":(a,s,e)=>{"use strict";e.d(s,{C:()=>h,w:()=>y});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),l=e.n(n),t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),T=e.n(d),_=e("./src/components/index.ts"),P=e("./src/components/FieldSet/FieldSet.module.css"),f=e.n(P),E=e("./node_modules/react/jsx-runtime.js"),y;(function(S){S.Xsmall="xsmall",S.Small="small"})(y||(y={}));var h=function(i){var C=i.children,p=i.className,v=i.description,u=i.disabled,m=i.error,c=i.legend,g=i.size,b=g===void 0?y.Small:g;return(0,E.jsxs)("fieldset",{className:T()(f()["field-set"],f()["field-set--"+b],p),disabled:u,children:[c&&(0,E.jsx)("legend",{className:f()["field-set__legend"],children:c}),v&&(0,E.jsx)("p",{className:f()["field-set__description"],children:v}),(0,E.jsx)("div",{className:f()["field-set__content"],children:C}),m&&(0,E.jsx)("div",{className:f()["field-set__error-message"],children:(0,E.jsx)(_.Bc,{children:m})})]})};h.displayName="FieldSet";try{h.displayName="FieldSet",h.__docgenInfo={description:"",displayName:"FieldSet",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ReactNode"}},legend:{defaultValue:null,description:"",name:"legend",required:!1,type:{name:"string"}},size:{defaultValue:{value:"FieldSetSize.Small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xsmall"'},{value:'"small"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/FieldSet/FieldSet.tsx#FieldSet"]={docgenInfo:h.__docgenInfo,name:"FieldSet",path:"src/components/FieldSet/FieldSet.tsx#FieldSet"})}catch(S){}},"./src/components/List/Context.ts":(a,s,e)=>{"use strict";e.d(s,{N4:()=>o,UU:()=>l,ZM:()=>n});var r=e("./node_modules/react/index.js"),o;(function(t){t.Solid="solid",t.Dashed="dashed"})(o||(o={}));var n=(0,r.createContext)({borderStyle:o.Solid}),l=function(){var d=(0,r.useContext)(n);if(d===void 0)throw new Error("useListContext must be used within a ListContext");return d}},"./src/components/List/List.tsx":(a,s,e)=>{"use strict";e.d(s,{a:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/List/List.module.css"),t=e.n(l),d=e("./src/components/List/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(f){var E=f.children,y=f.borderStyle,h=y===void 0?d.N4.Solid:y;return(0,T.jsx)("ul",{className:n()(t().list,t()["list--"+h]),children:(0,T.jsx)(d.ZM.Provider,{value:{borderStyle:h},children:E})})};_.displayName="List";try{_.displayName="List",_.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:_.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(P){}},"./src/components/List/ListItem.tsx":(a,s,e)=>{"use strict";e.d(s,{H:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/List/ListItem.module.css"),t=e.n(l),d=e("./src/components/List/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(f){var E=f.children,y=(0,d.UU)(),h=y.borderStyle;return(0,T.jsx)("li",{className:n()(t()["list-item"],t()["list-item--"+h]),children:E})};_.displayName="ListItem";try{_.displayName="ListItem",_.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:_.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(P){}},"./src/components/Map/Map.tsx":(a,s,e)=>{"use strict";e.d(s,{D:()=>g});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e.n(r),n=e("./node_modules/leaflet/dist/images/marker-icon.png"),l=e("./node_modules/leaflet/dist/images/marker-icon-2x.png"),t=e("./node_modules/leaflet/dist/images/marker-shadow.png"),d=e("./node_modules/leaflet/dist/leaflet-src.js"),T=e.n(d),_=e("./node_modules/react-leaflet/lib/MapContainer.js"),P=e("./node_modules/react-leaflet/lib/TileLayer.js"),f=e("./node_modules/react-leaflet/lib/AttributionControl.js"),E=e("./node_modules/react-leaflet/lib/Marker.js"),y=e("./node_modules/react-leaflet/lib/hooks.js"),h=e("./node_modules/react/index.js"),S=e("./src/components/Map/Map.module.css"),i=e.n(S),C=e("./node_modules/leaflet/dist/leaflet.css"),p=e.n(C),v=e("./node_modules/react/jsx-runtime.js"),u={latitude:64.888996,longitude:12.8186054},m=4,c=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],g=function(M){var D=M.readOnly,R=D===void 0?!1:D,Y=M.layers,K=Y===void 0?c:Y,te=M.centerLocation,z=te===void 0?u:te,ne=M.zoom,re=ne===void 0?m:ne,J=M.markerLocation,X=M.onClick;return(0,v.jsxs)(_.h,{className:i().map,center:x(z),zoom:re,zoomControl:!R,dragging:!R,touchZoom:!R,doubleClickZoom:!R,scrollWheelZoom:!R,attributionControl:!1,children:[K.map(function(H,U){return(0,v.jsx)(P.I,{url:H.url,attribution:H.attribution,subdomains:H.subdomains?H.subdomains:[],opacity:R?.5:1},U)}),(0,v.jsx)(f.z,{prefix:!1}),(0,v.jsx)(b,{markerLocation:J}),(0,v.jsx)(j,{readOnly:R,onClick:X})]})};g.displayName="Map";function b(O){var M=O.markerLocation,D=(0,d.icon)({iconUrl:n,iconRetinaUrl:l,shadowUrl:t,iconSize:[25,41],iconAnchor:[12,41]});return M?(0,v.jsx)(E.J,{position:x(M),icon:D}):null}function x(O){return[O.latitude,O.longitude]}var j=function(M){var D=M.onClick,R=M.readOnly;return(0,y.zV)({click:function(K){D&&!R&&D({latitude:K.latlng.lat,longitude:K.latlng.lng})}}),null};try{g.displayName="Map",g.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:g.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(O){}},"./src/components/Page/Context.ts":(a,s,e)=>{"use strict";e.d(s,{gL:()=>o,lO:()=>l,z1:()=>n});var r=e("./node_modules/react/index.js"),o;(function(t){t.Primary="primary",t.Success="success"})(o||(o={}));var n=(0,r.createContext)({color:o.Primary}),l=function(){var d=(0,r.useContext)(n);if(d===void 0)throw new Error("usePageContext must be used within a PageContext");return d}},"./src/components/Page/Page.tsx":(a,s,e)=>{"use strict";e.d(s,{T:()=>d});var r=e("./node_modules/react/index.js"),o=e("./src/components/Page/Context.ts"),n=e("./src/components/Page/Page.module.css"),l=e.n(n),t=e("./node_modules/react/jsx-runtime.js"),d=function(_){var P=_.children,f=_.color,E=f===void 0?o.gL.Primary:f;return(0,t.jsx)("div",{className:l().page,children:(0,t.jsx)(o.z1.Provider,{value:{color:E},children:P})})};d.displayName="Page";try{d.displayName="Page",d.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:d.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(T){}},"./src/components/Page/PageContent.tsx":(a,s,e)=>{"use strict";e.d(s,{J:()=>T});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Page/PageContent.module.css"),t=e.n(l),d=e("./node_modules/react/jsx-runtime.js"),T=function(P){var f=P.children;return(0,d.jsx)("div",{className:n()(t()["page-content"]),children:f})};T.displayName="PageContent";try{T.displayName="PageContent",T.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:T.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(_){}},"./src/components/Page/PageHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{m:()=>y});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Page/Context.ts"),t=e("./src/components/Page/PageHeader.module.css"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e("./src/components/Page/PageIcon.module.css"),P=e.n(_),f=e("./node_modules/react/jsx-runtime.js"),E=function(S){var i=S.icon,C={className:n()(P()["page-icon__element"])};return(0,f.jsx)("div",{className:P()["page-icon"],children:(0,r.cloneElement)(i,Object.assign({},C))})};E.displayName="PageIcon";try{E.displayName="PageIcon",E.__docgenInfo={description:"",displayName:"PageIcon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageIcon.tsx#PageIcon"]={docgenInfo:E.__docgenInfo,name:"PageIcon",path:"src/components/Page/PageIcon.tsx#PageIcon"})}catch(h){}var y=function(S){var i=S.children,C=S.icon,p=(0,l.lO)(),v=p.color;return(0,f.jsxs)("header",{className:n()(d()["page-header"],d()["page-header--"+v]),"data-testid":"page-header",children:[C&&(0,f.jsx)(E,{icon:C}),(0,f.jsx)("span",{children:i})]})};y.displayName="PageHeader";try{y.displayName="PageHeader",y.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:y.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(h){}},"./src/components/Pagination/Pagination.tsx":(a,s,e)=>{"use strict";e.d(s,{t:()=>ee});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),h=e("./node_modules/react/index.js"),S=e("./node_modules/classnames/index.js"),i=e.n(S),C=e("./src/components/Pagination/Pagination.module.css"),p=e.n(C),v,u;function m(){return m=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(W[Z]=w[Z])}return W},m.apply(this,arguments)}var c=function(F){return h.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},F),v||(v=h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=h.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},g,b;function x(){return x=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(W[Z]=w[Z])}return W},x.apply(this,arguments)}var j=function(F){return h.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},F),g||(g=h.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),b||(b=h.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},O;function M(){return M=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(W[Z]=w[Z])}return W},M.apply(this,arguments)}var D=function(F){return h.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},F),O||(O=h.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},R,Y;function K(){return K=Object.assign?Object.assign.bind():function(W){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var Z in w)Object.prototype.hasOwnProperty.call(w,Z)&&(W[Z]=w[Z])}return W},K.apply(this,arguments)}var te=function(F){return h.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},F),R||(R=h.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),Y||(Y=h.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},z=e("./node_modules/react/jsx-runtime.js");function ne(W,F){return U(W)||H(W,F)||J(W,F)||re()}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(W,F){if(!!W){if(typeof W=="string")return X(W,F);var w=Object.prototype.toString.call(W).slice(8,-1);if(w==="Object"&&W.constructor&&(w=W.constructor.name),w==="Map"||w==="Set")return Array.from(W);if(w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w))return X(W,F)}}function X(W,F){(F==null||F>W.length)&&(F=W.length);for(var w=0,Z=new Array(F);w<F;w++)Z[w]=W[w];return Z}function H(W,F){var w=W==null?null:typeof Symbol!="undefined"&&W[Symbol.iterator]||W["@@iterator"];if(w!=null){var Z=[],Q=!0,L=!1,I,A;try{for(w=w.call(W);!(Q=(I=w.next()).done)&&(Z.push(I.value),!(F&&Z.length===F));Q=!0);}catch(k){L=!0,A=k}finally{try{!Q&&w.return!=null&&w.return()}finally{if(L)throw A}}return Z}}function U(W){if(Array.isArray(W))return W}var ee=function(F){var w,Z,Q,L,I=F.numberOfRows,A=F.rowsPerPageOptions,k=F.rowsPerPage,q=F.onRowsPerPageChange,B=F.currentPage,N=F.setCurrentPage,V=F.rowsPerPageText,G=F.pageDescriptionText,$=(0,h.useState)(1),oe=ne($,2),le=oe[0],me=oe[1];(0,h.useEffect)(function(){I<k?me(1):me(Math.ceil(I/k))},[k,I]);var ce=function(){B<le-1&&N(B+1)},ue=function(){B>0&&N(B-1)},Ee=function(){var ae=1+B*k,de=k*(B+1)>I?I:k*(B+1);return(0,z.jsx)("span",{style:{marginRight:"64px"},"data-testid":"description-text",children:ae+"-"+de+" "+G+" "+I})};return(0,z.jsxs)("div",{className:i()(p()["pagination-wrapper"]),children:[(0,z.jsx)("span",{style:{marginRight:"26px"},children:V}),(0,z.jsx)("select",{style:{marginRight:"25px"},value:k,onChange:function(ae){return q(ae)},children:A.map(function(se){return(0,z.jsx)("option",{value:se,children:se},se)})}),Ee(),(0,z.jsx)(D,{tabIndex:B!==0?0:void 0,className:i()(p()["pagination-icon"],(w={},w[p()["pagination-icon--disabled"]]=B===0,w)),onClick:function(){return N(0)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&N(0)},"data-testid":"first-page-icon"}),(0,z.jsx)(j,{tabIndex:B!==0?0:void 0,className:i()(p()["pagination-icon"],(Z={},Z[p()["pagination-icon--disabled"]]=B===0,Z)),onClick:function(){return ue()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ue()}}),(0,z.jsx)(c,{tabIndex:B!==le-1?0:void 0,className:i()(p()["pagination-icon"],(Q={},Q[p()["pagination-icon--disabled"]]=B===le-1,Q)),onClick:function(){return ce()},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&ce()}}),(0,z.jsx)(te,{tabIndex:B!==le-1?0:void 0,className:i()(p()["pagination-icon"],(L={},L[p()["pagination-icon--disabled"]]=B===le-1,L)),onClick:function(){return N(le-1)},onKeyUp:function(ae){(ae.key==="Enter"||ae.key===" ")&&N(le-1)}})]})};ee.displayName="Pagination";try{ee.displayName="Pagination",ee.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},rowsPerPageText:{defaultValue:null,description:"",name:"rowsPerPageText",required:!0,type:{name:"string"}},pageDescriptionText:{defaultValue:null,description:"",name:"pageDescriptionText",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:ee.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(W){}},"./src/components/Pagination/index.ts":(a,s,e)=>{"use strict";e.d(s,{t:()=>r.t});var r=e("./src/components/Pagination/Pagination.tsx")},"./src/components/Panel/Panel.tsx":(a,s,e)=>{"use strict";e.d(s,{s:()=>b,c:()=>u});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),t=e("./src/DesignTokens/index.ts"),d,T,_;function P(){return P=Object.assign?Object.assign.bind():function(x){for(var j=1;j<arguments.length;j++){var O=arguments[j];for(var M in O)Object.prototype.hasOwnProperty.call(O,M)&&(x[M]=O[M])}return x},P.apply(this,arguments)}var f=function(j){return r.createElement("svg",P({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},j),d||(d=r.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),T||(T=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),_||(_=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},E,y,h;function S(){return S=Object.assign?Object.assign.bind():function(x){for(var j=1;j<arguments.length;j++){var O=arguments[j];for(var M in O)Object.prototype.hasOwnProperty.call(O,M)&&(x[M]=O[M])}return x},S.apply(this,arguments)}var i=function(j){return r.createElement("svg",S({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},j),E||(E=r.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),y||(y=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),h||(h=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},C=e("./src/components/Panel/Panel.module.css"),p=e.n(C),v=e("./node_modules/react/jsx-runtime.js"),u;(function(x){x.Success="success",x.Info="info",x.Warning="warning",x.Error="error"})(u||(u={}));var m=function(j){var O=j.size,M=j.variant;switch(M){case u.Info:case u.Error:case u.Warning:return(0,v.jsx)(f,{style:{width:O,height:O},"data-testid":"panel-icon-info"});case u.Success:return(0,v.jsx)(i,{style:{width:O,height:O},"data-testid":"panel-icon-success"})}},c=function(j){var O=j.forceMobileLayout,M=(0,l.a)("(max-width: "+t.T.BreakpointsSm+")");return O?!0:M},g=function(j){var O=j.children;return(0,v.jsx)("div",{className:n()(p()["panel__pointer-position"]),children:O})};g.displayName="defaultRenderArrow";var b=function(j){var O,M=j.renderIcon,D=M===void 0?m:M,R=j.title,Y=j.children,K=j.variant,te=K===void 0?u.Info:K,z=j.showPointer,ne=z===void 0?!1:z,re=j.showIcon,J=re===void 0?!0:re,X=j.forceMobileLayout,H=X===void 0?!1:X,U=j.renderArrow,ee=U===void 0?g:U,W=c({forceMobileLayout:H}),F=W?t.T.ComponentPanelSizeIconXs:t.T.ComponentPanelSizeIconMd;return(0,v.jsxs)("div",{className:n()(p().panel,(O={},O[p()["panel--mobile-layout"]]=W,O)),children:[ne&&ee({children:(0,v.jsx)("div",{"data-testid":"panel-pointer",className:n()(p().panel__pointer,p()["panel__pointer--"+te])})}),(0,v.jsxs)("div",{"data-testid":"panel-content-wrapper",className:n()(p()["panel__content-wrapper"],p()["panel__content-wrapper--"+te]),children:[J&&(0,v.jsx)("div",{"data-testid":"panel-icon-wrapper",className:p()["panel__icon-wrapper"],children:D({size:F,variant:te})}),(0,v.jsxs)("div",{className:p().panel__content,children:[R&&(0,v.jsx)("h2",{className:p().panel__header,children:R}),(0,v.jsx)("div",{className:p().panel__body,children:Y})]})]})]})};b.displayName="Panel";try{b.displayName="Panel",b.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:b.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(x){}},"./src/components/Panel/PopoverPanel.tsx":(a,s,e)=>{"use strict";e.d(s,{H:()=>f});var r=e("./node_modules/react/index.js"),o=e("./node_modules/@radix-ui/react-popover/dist/index.module.js"),n=e("./node_modules/classnames/index.js"),l=e.n(n),t=e("./src/components/Panel/Panel.tsx"),d=e("./src/components/Panel/PopoverPanel.module.css"),T=e.n(d),_=e("./node_modules/react/jsx-runtime.js"),P=function(h){var S=h.children;return(0,_.jsx)(o.Eh,{className:l()(T()["popover-panel__arrow"]),asChild:!0,children:S})};P.displayName="renderArrow";var f=function(h){var S=h.children,i=h.variant,C=i===void 0?t.c.Warning:i,p=h.trigger,v=h.side,u=v===void 0?"top":v,m=h.title,c=h.showIcon,g=h.forceMobileLayout,b=h.showPointer,x=b===void 0?!0:b,j=h.onOpenChange,O=h.open,M=O===void 0?!1:O;return(0,_.jsxs)(o.fC,{open:M,onOpenChange:j,children:[(0,_.jsx)(o.xz,{asChild:!0,role:"button",children:p}),(0,_.jsx)(o.VY,{side:u,className:T()["popover-panel"],children:(0,_.jsx)(t.s,{title:m,showIcon:c,forceMobileLayout:g,showPointer:x,variant:C,renderArrow:P,children:S})})]})};f.displayName="PopoverPanel";var E=null;try{f.displayName="PopoverPanel",f.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:f.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(y){}},"./src/components/SearchField/SearchField.tsx":(a,s,e)=>{"use strict";e.d(s,{U:()=>p});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(T),P=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),E=e.n(f),y=e("./src/components/_InputWrapper/index.ts"),h=e("./node_modules/react/jsx-runtime.js"),S=["id","onChange","disabled","label"];function i(v,u){if(v==null)return{};var m=C(v,u),c,g;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(v);for(g=0;g<b.length;g++)c=b[g],!(u.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(v,c)||(m[c]=v[c]))}return m}function C(v,u){if(v==null)return{};var m={},c=Object.keys(v),g,b;for(b=0;b<c.length;b++)g=c[b],!(u.indexOf(g)>=0)&&(m[g]=v[g]);return m}var p=function(u){var m=u.id,c=u.onChange,g=u.disabled,b=g===void 0?!1:g,x=u.label,j=i(u,S);return(0,h.jsx)(y.SP,{disabled:b,isSearch:!0,label:x,inputRenderer:function(M){var D=M.className,R=M.variant,Y={id:m,disabled:b,className:E()(D)};return(0,h.jsx)("input",Object.assign({},Y,j,{"data-testid":m+"-"+R,onChange:c}))}})};p.displayName="SearchField";try{p.displayName="SearchField",p.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:p.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(v){}},"./src/components/Select/Select.tsx":(a,s,e)=>{"use strict";e.d(s,{P:()=>Q});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.map.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.set.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find-index.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.find.js"),P=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.includes.js"),f=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.includes.js"),E=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.concat.js"),y=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),h=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.values.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),p=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),v=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),u=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),m=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),c=e("./node_modules/react/index.js"),g=e("./node_modules/classnames/index.js"),b=e.n(g),x=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),j=e("./src/components/_InputWrapper/index.ts"),O=e("./src/components/Select/MultiSelectItem.module.css"),M=e.n(O),D=e("./node_modules/react/jsx-runtime.js"),R=function(I){var A=I.deleteButtonLabel,k=I.disabled,q=I.onDeleteButtonClick,B=I.value;return(0,D.jsxs)("span",{className:M()["multi-select-item"],children:[(0,D.jsx)("span",{children:B}),(0,D.jsx)("button",{"aria-label":A,className:M()["multi-select-item__delete-button"],disabled:k,onClick:q,children:(0,D.jsx)("span",{className:M()["multi-select-item__delete-button__cross"]})})]})};R.displayName="MultiSelectItem";try{R.displayName="MultiSelectItem",R.__docgenInfo={description:"",displayName:"MultiSelectItem",props:{deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},onDeleteButtonClick:{defaultValue:null,description:"",name:"onDeleteButtonClick",required:!0,type:{name:"() => void"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/MultiSelectItem.tsx#MultiSelectItem"]={docgenInfo:R.__docgenInfo,name:"MultiSelectItem",path:"src/components/Select/MultiSelectItem.tsx#MultiSelectItem"})}catch(L){}function Y(L,I){(0,c.useEffect)(function(){var A=function(q){q.key===L&&I()};return document.addEventListener("keydown",A),function(){return document.removeEventListener("keydown",A)}},[L,I])}function K(L,I){(0,c.useEffect)(function(){return document.addEventListener(L,I),function(){return document.removeEventListener(L,I)}},[L,I])}var te=e("./src/components/Select/Select.module.css"),z=e.n(te);function ne(L){return X(L)||J(L)||ee(L)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J(L){if(typeof Symbol!="undefined"&&L[Symbol.iterator]!=null||L["@@iterator"]!=null)return Array.from(L)}function X(L){if(Array.isArray(L))return W(L)}function H(L,I){return w(L)||F(L,I)||ee(L,I)||U()}function U(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(L,I){if(!!L){if(typeof L=="string")return W(L,I);var A=Object.prototype.toString.call(L).slice(8,-1);if(A==="Object"&&L.constructor&&(A=L.constructor.name),A==="Map"||A==="Set")return Array.from(L);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return W(L,I)}}function W(L,I){(I==null||I>L.length)&&(I=L.length);for(var A=0,k=new Array(I);A<I;A++)k[A]=L[A];return k}function F(L,I){var A=L==null?null:typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(A!=null){var k=[],q=!0,B=!1,N,V;try{for(A=A.call(L);!(q=(N=A.next()).done)&&(k.push(N.value),!(I&&k.length===I));q=!0);}catch(G){B=!0,V=G}finally{try{!q&&A.return!=null&&A.return()}finally{if(B)throw V}}return k}}function w(L){if(Array.isArray(L))return L}var Z={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Q=function(I){var A=I.disabled,k=I.error,q=I.hideLabel,B=I.inputId,N=I.label,V=I.multiple,G=I.onChange,$=I.options,oe=I.value,le=$.map(function(ie){return ie.value});if(le.length!==new Set(le).size)throw Error("Each value in the option list must be unique.");var me=(0,c.useState)(V?oe!=null?oe:[]:[]),ce=H(me,2),ue=ce[0],Ee=ce[1],se=(0,c.useState)(V?void 0:oe),ae=H(se,2),de=ae[0],pe=ae[1],ge=$.findIndex(function(ie){return ie.value===de}),Te=(0,c.useState)(!1),Oe=H(Te,2),Ce=Oe[0],he=Oe[1];K("click",function(){return he(!1)}),K("keydown",function(){return he(!0)});var De=(0,c.useState)(!1),Me=H(De,2),be=Me[0],ve=Me[1],Ie=(0,c.useRef)(null),Be=(0,c.useRef)(null);(0,c.useEffect)(function(){var ie=Ie.current;if(ie){var _e=ie.offsetHeight,ye=ie.getElementsByTagName("li")[0].offsetHeight,Le=ie.scrollTop,je=Le+_e,xe=ge*ye,Ne=xe+ye,ze=xe>=Le&&Ne<=je;ze||(xe<Le?ie.scrollTop=xe:ie.scrollTop=Ne-_e)}},[ge]);var Re=function(_e){var ye;return(ye=$.find(function(Le){return Le.value===_e}))!==null&&ye!==void 0?ye:{label:"",value:""}},Ae=function(_e,ye){ue!=null&&ue.length||pe(ye),Ee(_e),G&&G(_e)},Ke=function(_e){pe(_e),ve(!1),G&&G(_e)},Ue=function(_e){V?ue.includes(_e)?ke(_e):Ae([].concat(ne(ue),[_e]),_e):Ke(_e)},ke=function(_e){Ae(ue.filter(function(ye){return ye!==_e}),_e)},Fe=function(){Ae([])},we=(0,c.useCallback)(function(){if(de===void 0)pe($[0].value);else{var ie=ge+1;ie>=0&&ie<$.length&&pe($[ie].value)}ve(!0)},[de,ge,pe,$]),fe=(0,c.useCallback)(function(){if(de===void 0)pe($[$.length-1].value);else{var ie=ge-1;ie>=0&&ie<$.length&&pe($[ie].value)}ve(!0)},[de,ge,pe,$]);Y(Z.ArrowDown,function(){return be&&we()}),Y(Z.ArrowUp,function(){return be&&fe()}),Y(Z.Enter,function(){return be&&V&&de&&Ue(de)});var Pe=function(_e){return de===_e},Se=function(_e){return V?ue.includes(_e):Pe(_e)},We=(0,c.useId)(),Ve=Be.current?"calc("+Be.current.offsetWidth+"px + 2 * "+x.component.input.border_width.default.value+")":void 0;return(0,D.jsxs)("div",{className:b()(z().select,z()["select--"+(V?"multiple":"single")],be&&z()["select--expanded"],A&&z()["select--disabled"],Ce&&z()["select--using-keyboard"]),"data-testid":"select-root",children:[(0,D.jsx)(j.SP,{disabled:A,inputId:B,inputRenderer:function(_e){var ye=_e.className,Le=_e.inputId;return(0,D.jsxs)("span",{className:b()(ye,z().select__field),ref:Be,children:[V&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("span",{className:z()["select--multiple__field__values"],children:ue.map(Re).map(function(je){return(0,D.jsx)(R,{deleteButtonLabel:je.deleteButtonLabel,disabled:A!=null?A:!1,onDeleteButtonClick:function(){return ke(je.value)},value:je.value},je.value)})}),(0,D.jsx)("button",{"aria-label":I.deleteButtonLabel,className:z()["select--multiple__field__delete-button"],disabled:!ue.length||A,onClick:function(){return Fe()},children:(0,D.jsx)("span",{className:z()["select--multiple__field__delete-button__cross"]})})]}),(0,D.jsxs)("button",{"aria-controls":We,"aria-expanded":be,"aria-label":N,className:z().select__field__button,disabled:A,id:Le,onBlur:function(){return ve(!1)},onClick:function(){return ve(!be)},onKeyDown:function(xe){Object.values(Z).includes(xe.key)&&(xe.preventDefault(),ve(!0))},role:"combobox",value:V?ue:de,children:[!V&&(0,D.jsx)("span",{className:z()["select--single__field__value"],children:Re(de).label}),(0,D.jsx)("span",{className:z()["select__field__arrow-wrapper"],children:(0,D.jsx)("span",{className:z()["select__field__arrow-wrapper__arrow"]})})]})]})},isSearch:!1,isValid:!k,label:N,noFocusEffect:V,noPadding:!0,readOnly:!1}),(0,D.jsx)("ul",{className:z()["select__option-list"],id:We,ref:Ie,role:"listbox",style:{width:Ve},children:$.map(function(ie){return(0,D.jsx)("li",{"aria-selected":Se(ie.value),className:b()(z()["select__option-list__option"],Se(ie.value)&&z()["select__option-list__option--selected"],V&&Pe(ie.value)&&z()["select--multiple__option-list__option--focused"]),onClick:function(){return Ue(ie.value)},onMouseDown:function(ye){return ye.preventDefault()},onKeyDown:function(ye){return ye.preventDefault()},role:"option",value:ie.value,children:ie.label},ie.value)})})]})};Q.displayName="Select";try{Q.displayName="Select",Q.__docgenInfo={description:"",displayName:"Select",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SingleOnChangeEvent | MultipleOnChangeEvent"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SingleSelectOption[] | MultiSelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | string[]"}},deleteButtonLabel:{defaultValue:null,description:"",name:"deleteButtonLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Q.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(L){}},"./src/components/SvgIcon/index.ts":(a,s,e)=>{"use strict";e.d(s,{l:()=>E});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),t=e("./node_modules/react/index.js"),d=e("./node_modules/@navikt/ds-icons/esm/index.js"),T=e("./node_modules/react/jsx-runtime.js"),_=["iconName","svgIconComponent"];function P(y,h){if(y==null)return{};var S=f(y,h),i,C;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(y);for(C=0;C<p.length;C++)i=p[C],!(h.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(y,i)||(S[i]=y[i]))}return S}function f(y,h){if(y==null)return{};var S={},i=Object.keys(y),C,p;for(p=0;p<i.length;p++)C=i[p],!(h.indexOf(C)>=0)&&(S[C]=y[C]);return S}var E=function(h){var S=h.iconName,i=h.svgIconComponent,C=P(h,_);if(S){var p=d[S];if(p)return(0,T.jsx)(p,Object.assign({},C))}else if(i)return(0,t.cloneElement)(i,Object.assign({},C));return null};try{E.displayName="SvgIcon",E.__docgenInfo={description:"",displayName:"SvgIcon",props:{iconName:{defaultValue:null,description:"",name:"iconName",required:!1,type:{name:"enum",value:[{value:'"Add"'},{value:'"AddCircle"'},{value:'"AddCircleFilled"'},{value:'"AddFilled"'},{value:'"AddPerson"'},{value:'"AddPersonFilled"'},{value:'"Applicant"'},{value:'"ApplicantFilled"'},{value:'"Attachment"'},{value:'"AttachmentFilled"'},{value:'"AutomaticSystem"'},{value:'"AutomaticSystemFilled"'},{value:'"BabyChangingRoom"'},{value:'"BabyChangingRoomFilled"'},{value:'"Back"'},{value:'"BackFilled"'},{value:'"Bag"'},{value:'"BagFilled"'},{value:'"Baggage"'},{value:'"BaggageFilled"'},{value:'"Bandage"'},{value:'"BandageFilled"'},{value:'"Bed"'},{value:'"BedFilled"'},{value:'"Bell"'},{value:'"BellFilled"'},{value:'"Bike"'},{value:'"BikeFilled"'},{value:'"Bookmark"'},{value:'"BookmarkFilled"'},{value:'"Bowl"'},{value:'"BowlFilled"'},{value:'"Braille"'},{value:'"BrailleFilled"'},{value:'"Calculator"'},{value:'"CalculatorFilled"'},{value:'"Calender"'},{value:'"CalenderFilled"'},{value:'"Camera"'},{value:'"CameraFilled"'},{value:'"Cancel"'},{value:'"CancelFilled"'},{value:'"Candle"'},{value:'"CandleFilled"'},{value:'"Cantine1"'},{value:'"Cantine1Filled"'},{value:'"Cantine2"'},{value:'"Cantine2Filled"'},{value:'"Car"'},{value:'"CarFilled"'},{value:'"Caseworker"'},{value:'"CaseworkerFilled"'},{value:'"Child"'},{value:'"ChildFilled"'},{value:'"Clock"'},{value:'"ClockFilled"'},{value:'"Close"'},{value:'"CloseFilled"'},{value:'"CoApplicant"'},{value:'"CoApplicantFilled"'},{value:'"Cognition"'},{value:'"CognitionFilled"'},{value:'"Collapse"'},{value:'"CollapseFilled"'},{value:'"Combifridge1"'},{value:'"Combifridge1Filled"'},{value:'"Combifridge2"'},{value:'"Combifridge2Filled"'},{value:'"Copy"'},{value:'"CopyFilled"'},{value:'"Coronavirus"'},{value:'"CoronavirusFilled"'},{value:'"Cup"'},{value:'"CupFilled"'},{value:'"Data"'},{value:'"DataFilled"'},{value:'"Decision"'},{value:'"DecisionCheck"'},{value:'"DecisionCheckFilled"'},{value:'"DecisionCross"'},{value:'"DecisionFilled"'},{value:'"Delete"'},{value:'"DeleteFilled"'},{value:'"Dialog"'},{value:'"DialogDots"'},{value:'"DialogDotsFilled"'},{value:'"DialogFilled"'},{value:'"DialogReport"'},{value:'"DialogReportFilled"'},{value:'"DialogSuccess"'},{value:'"DialogSuccessFilled"'},{value:'"DicisionCrossFilled"'},{value:'"DirectionSign"'},{value:'"DirectionSignFilled"'},{value:'"Disability"'},{value:'"DisabilityFilled"'},{value:'"Dish"'},{value:'"DishFilled"'},{value:'"Dishwasher"'},{value:'"DishwasherFilled"'},{value:'"Divide"'},{value:'"DivideFilled"'},{value:'"Down"'},{value:'"DownFilled"'},{value:'"Download"'},{value:'"DownloadFilled"'},{value:'"DrinkingWaterFilled"'},{value:'"DrinkingWaterStroke"'},{value:'"Edit"'},{value:'"EditFilled"'},{value:'"Elevator"'},{value:'"ElevatorFilled"'},{value:'"EllipsisCircleH"'},{value:'"EllipsisCircleHFilled"'},{value:'"EllipsisH"'},{value:'"EllipsisHFilled"'},{value:'"EllipsisV"'},{value:'"EllipsisVFilled"'},{value:'"Email"'},{value:'"EmailFilled"'},{value:'"EmailOpened"'},{value:'"EmailOpenedFilled"'},{value:'"Employer"'},{value:'"EmployerFilled"'},{value:'"Error"'},{value:'"ErrorColored"'},{value:'"ErrorFilled"'},{value:'"Eu"'},{value:'"EuFilled"'},{value:'"Expand"'},{value:'"ExpandFilled"'},{value:'"ExternalLink"'},{value:'"ExternalLinkFilled"'},{value:'"Eye"'},{value:'"EyeFilled"'},{value:'"EyeScreened"'},{value:'"EyeScreenedFilled"'},{value:'"Facilitet"'},{value:'"FacilitetFilled"'},{value:'"Family"'},{value:'"FamilyFilled"'},{value:'"FeedingBottle"'},{value:'"FeedingBottleFilled"'},{value:'"Female"'},{value:'"FemaleFilled"'},{value:'"File"'},{value:'"FileContent"'},{value:'"FileContentFilled"'},{value:'"FileError"'},{value:'"FileErrorFilled"'},{value:'"FileFilled"'},{value:'"FileFolder"'},{value:'"FileFolderFilled"'},{value:'"FileProgress"'},{value:'"FileProgressFilled"'},{value:'"FileSuccess"'},{value:'"FileSuccessFilled"'},{value:'"FillForms"'},{value:'"FillFormsFilled"'},{value:'"Filter"'},{value:'"Filter2"'},{value:'"Filter2Filled"'},{value:'"FilterFilled"'},{value:'"Findout"'},{value:'"FindoutFilled"'},{value:'"FlowerBladeFall"'},{value:'"FlowerBladeFallFilled"'},{value:'"Folder"'},{value:'"FolderFilled"'},{value:'"ForkSpoonKnife"'},{value:'"ForkSpoonKnifeFilled"'},{value:'"Forward"'},{value:'"ForwardFilled"'},{value:'"Freezer"'},{value:'"FreezerFilled"'},{value:'"FullscreenEnter"'},{value:'"FullscreenEnterFilled"'},{value:'"FullscreenExit"'},{value:'"FullscreenExitFilled"'},{value:'"Glass"'},{value:'"GlassFilled"'},{value:'"Glasses"'},{value:'"GlassesFilled"'},{value:'"Globe"'},{value:'"GlobeFilled"'},{value:'"GuideDog"'},{value:'"GuideDogFilled"'},{value:'"Hamburger"'},{value:'"HamburgerFilled"'},{value:'"HandBandage"'},{value:'"HandBandageFilled"'},{value:'"HandsHeart"'},{value:'"HandsHeartFilled"'},{value:'"Hanger"'},{value:'"HangerFilled"'},{value:'"HealthCase"'},{value:'"HealthCaseFilled"'},{value:'"Hearing"'},{value:'"HearingFilled"'},{value:'"HearingImpaired"'},{value:'"HearingImpairedFilled"'},{value:'"HearingImpairedTeleslynge"'},{value:'"HearingImpairedTeleslyngeFilled"'},{value:'"HearingImpairedWireless"'},{value:'"HearingImpairedWirelessFilled"'},{value:'"Heart"'},{value:'"HeartBroken"'},{value:'"HeartBrokenFilled"'},{value:'"HeartFilled"'},{value:'"Helmet"'},{value:'"HelmetFilled"'},{value:'"Helptext"'},{value:'"HelptextFilled"'},{value:'"Historic"'},{value:'"HistoricFilled"'},{value:'"Home"'},{value:'"HomeFilled"'},{value:'"Horse"'},{value:'"HorseFilled"'},{value:'"Hospital"'},{value:'"HospitalFilled"'},{value:'"Infants"'},{value:'"InfantsFilled"'},{value:'"Information"'},{value:'"InformationColored"'},{value:'"InformationFilled"'},{value:'"Laptop"'},{value:'"LaptopFilled"'},{value:'"Law"'},{value:'"LawFilled"'},{value:'"Left"'},{value:'"LeftFilled"'},{value:'"LightBulb"'},{value:'"LightBulbFilled"'},{value:'"Like"'},{value:'"LikeFilled"'},{value:'"Link"'},{value:'"LinkFilled"'},{value:'"List"'},{value:'"ListFilled"'},{value:'"Locked"'},{value:'"LockedFilled"'},{value:'"Login"'},{value:'"LoginFilled"'},{value:'"Logout"'},{value:'"LogoutFilled"'},{value:'"Male"'},{value:'"MaleFilled"'},{value:'"MeetingRoom"'},{value:'"MeetingRoomFilled"'},{value:'"Minus"'},{value:'"MinusCircle"'},{value:'"MinusCircleFilled"'},{value:'"MinusFilled"'},{value:'"Mobile"'},{value:'"MobileFilled"'},{value:'"Money"'},{value:'"MoneyFilled"'},{value:'"Monitor"'},{value:'"MonitorFilled"'},{value:'"Motorcycle"'},{value:'"MotorcycleFilled"'},{value:'"Mute"'},{value:'"MuteFilled"'},{value:'"Neutral"'},{value:'"NeutralFilled"'},{value:'"NewTab"'},{value:'"NewTabFilled"'},{value:'"Next"'},{value:'"NextFilled"'},{value:'"NoSmoking"'},{value:'"NoSmokingFilled"'},{value:'"NorwegianFlag"'},{value:'"NorwegianFlagFilled"'},{value:'"Notes"'},{value:'"NotesFilled"'},{value:'"Office1"'},{value:'"Office1Filled"'},{value:'"Office2"'},{value:'"Office2Filled"'},{value:'"Over18"'},{value:'"Over18Filled"'},{value:'"Parking"'},{value:'"ParkingFilled"'},{value:'"Passport"'},{value:'"PassportFilled"'},{value:'"PensionBag"'},{value:'"PensionBagFilled"'},{value:'"PensionFlower"'},{value:'"PensionFlowerFilled"'},{value:'"People"'},{value:'"PeopleDialogFilled"'},{value:'"PeopleDialogOutline"'},{value:'"PeopleFilled"'},{value:'"PeopleInCircle"'},{value:'"PeopleInCircleFilled"'},{value:'"Picture"'},{value:'"PictureFilled"'},{value:'"Place"'},{value:'"PlaceFilled"'},{value:'"Plane"'},{value:'"PlaneFilled"'},{value:'"Plant"'},{value:'"PlantFilled"'},{value:'"Pregnant"'},{value:'"PregnantFilled"'},{value:'"Print"'},{value:'"PrintFilled"'},{value:'"PrinterRoom"'},{value:'"PrinterRoomFilled"'},{value:'"Profile"'},{value:'"ProfileFilled"'},{value:'"Quiet"'},{value:'"QuietFilled"'},{value:'"Receipt"'},{value:'"ReceiptFilled"'},{value:'"Reception"'},{value:'"ReceptionFilled"'},{value:'"Recycle"'},{value:'"RecycleFilled"'},{value:'"Refresh"'},{value:'"RefreshFilled"'},{value:'"Refrigerator"'},{value:'"RefrigeratorFilled"'},{value:'"Right"'},{value:'"RightFilled"'},{value:'"RotateLeft"'},{value:'"RotateLeftFilled"'},{value:'"RotateRight"'},{value:'"RotateRightFilled"'},{value:'"Ruler"'},{value:'"RulerFilled"'},{value:'"Sandglass"'},{value:'"SandglassFilled"'},{value:'"SaveFile"'},{value:'"SaveFileFilled"'},{value:'"Saving"'},{value:'"SavingFilled"'},{value:'"Scale"'},{value:'"ScaleFilled"'},{value:'"SchoolBag"'},{value:'"SchoolBagFilled"'},{value:'"Scissors"'},{value:'"ScissorsFilled"'},{value:'"Search"'},{value:'"SearchFilled"'},{value:'"Selection"'},{value:'"SelectionFilled"'},{value:'"SelfService"'},{value:'"SelfServiceFilled"'},{value:'"SelfServiceMobile"'},{value:'"SelfServiceMobileFilled"'},{value:'"Send"'},{value:'"SendFilled"'},{value:'"Service"'},{value:'"ServiceFilled"'},{value:'"Settings"'},{value:'"SettingsFilled"'},{value:'"ShakeHands"'},{value:'"ShakeHandsFilled"'},{value:'"Share"'},{value:'"ShareFilled"'},{value:'"Shower"'},{value:'"ShowerFilled"'},{value:'"Shredding"'},{value:'"ShreddingFilled"'},{value:'"Sight"'},{value:'"SightFilled"'},{value:'"Sightless"'},{value:'"SightlessFilled"'},{value:'"SignLanguage"'},{value:'"SignLanguageFilled"'},{value:'"SignLanguageTwoHands"'},{value:'"SignLanguageTwoHandsFilled"'},{value:'"SingleParent"'},{value:'"SingleParentFilled"'},{value:'"SocialAid"'},{value:'"SocialAidFilled"'},{value:'"SpeechBubble"'},{value:'"SpeechBubbleFilled"'},{value:'"Stairs"'},{value:'"StairsFilled"'},{value:'"Star"'},{value:'"StarFilled"'},{value:'"Stethoscope"'},{value:'"StethoscopeFilled"'},{value:'"StopWatch"'},{value:'"StopWatchFilled"'},{value:'"Stroller"'},{value:'"StrollerFilled"'},{value:'"Success"'},{value:'"SuccessColored"'},{value:'"SuccessFilled"'},{value:'"SuccessStroke"'},{value:'"Sun"'},{value:'"SunFilled"'},{value:'"System"'},{value:'"SystemError"'},{value:'"SystemErrorFilled"'},{value:'"SystemFilled"'},{value:'"Table"'},{value:'"TalkingRoom"'},{value:'"TalkingRoomFilled"'},{value:'"Task"'},{value:'"TaskFilled"'},{value:'"Teddy"'},{value:'"TeddyFilled"'},{value:'"Telephone"'},{value:'"TelephoneFilled"'},{value:'"ThermometerFilled"'},{value:'"ThermometerStroke"'},{value:'"Tooth"'},{value:'"ToothFilled"'},{value:'"Traning"'},{value:'"TraningFilled"'},{value:'"Truck"'},{value:'"TruckFilled"'},{value:'"Umbrella"'},{value:'"UmbrellaFilled"'},{value:'"Unlocked"'},{value:'"UnlockedFilled"'},{value:'"Up"'},{value:'"UpDown"'},{value:'"UpDownFilled"'},{value:'"UpFilled"'},{value:'"Upload"'},{value:'"UploadFilled"'},{value:'"Vacation"'},{value:'"VacationFilled"'},{value:'"VideoRoom"'},{value:'"VideoRoomFilled"'},{value:'"VolumeDown"'},{value:'"VolumeDownFilled"'},{value:'"VolumeUp"'},{value:'"VolumeUpFilled"'},{value:'"WaitingRoom"'},{value:'"WaitingRoomFilled"'},{value:'"Wardrobe"'},{value:'"WardrobeFilled"'},{value:'"Warning"'},{value:'"WarningColored"'},{value:'"WarningFilled"'},{value:'"Washing"'},{value:'"WashingFilled"'},{value:'"WateringCan"'},{value:'"WateringCanFilled"'},{value:'"Wireless"'},{value:'"WirelessFilled"'},{value:'"Wrench"'},{value:'"WrenchFilled"'},{value:'"ZoomIn"'},{value:'"ZoomInFilled"'},{value:'"ZoomOut"'},{value:'"ZoomOutFilled"'}]}},svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!1,type:{name:"Element"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:E.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(y){}},"./src/components/Table/Context.ts":(a,s,e)=>{"use strict";e.d(s,{$K:()=>_,$e:()=>o,Je:()=>t,Sh:()=>l,XS:()=>n,wv:()=>T});var r=e("./node_modules/react/index.js"),o;(function(P){P.Header="header",P.Body="body",P.Footer="footer"})(o||(o={}));var n=(0,r.createContext)(void 0),l=function(){var f=(0,r.useContext)(n);if(f===void 0)throw new Error("useTableContext must be used within a TableContext");return f},t=(0,r.createContext)(void 0),d=function(){var f=useContext(t);if(f===void 0)throw new Error("useTableContext must be used within a TableContext");return f},T=(0,r.createContext)({variantStandard:o.Body}),_=function(){var f=(0,r.useContext)(T);if(f===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return f}},"./src/components/Table/Table.tsx":(a,s,e)=>{"use strict";e.d(s,{i:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/Table.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(E){var y=E.children,h=E.selectRows,S=h===void 0?!1:h,i=E.onChange,C=E.selectedValue;return(0,T.jsx)("table",{className:n()(t().Table),children:(0,T.jsx)(d.XS.Provider,{value:{selectRows:S,onChange:i,selectedValue:C},children:y})})};_.displayName="Table";var P=null;try{_.displayName="Table",_.__docgenInfo={description:"",displayName:"Table",props:{selectRows:{defaultValue:{value:"false"},description:"",name:"selectRows",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/Table.tsx#Table"]={docgenInfo:_.__docgenInfo,name:"Table",path:"src/components/Table/Table.tsx#Table"})}catch(f){}},"./src/components/Table/TableBody.tsx":(a,s,e)=>{"use strict";e.d(s,{R:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/TableBody.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(E){var y=E.children,h=d.$e.Body;return(0,T.jsx)(d.wv.Provider,{value:{variantStandard:h},children:(0,T.jsx)("tbody",{className:n()(t().TableBody),children:y})})};_.displayName="TableBody";var P=null;try{_.displayName="TableBody",_.__docgenInfo={description:"",displayName:"TableBody",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableBody.tsx#TableBody"]={docgenInfo:_.__docgenInfo,name:"TableBody",path:"src/components/Table/TableBody.tsx#TableBody"})}catch(f){}},"./src/components/Table/TableCell.tsx":(a,s,e)=>{"use strict";e.d(s,{Sr:()=>E,pj:()=>y});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/TableCell.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T;function _(){return _=Object.assign?Object.assign.bind():function(S){for(var i=1;i<arguments.length;i++){var C=arguments[i];for(var p in C)Object.prototype.hasOwnProperty.call(C,p)&&(S[p]=C[p])}return S},_.apply(this,arguments)}var P=function(i){return r.createElement("svg",_({width:10,height:5,xmlns:"http://www.w3.org/2000/svg"},i),T||(T=r.createElement("path",{d:"M9.308.23H.333L4.82 4.895 9.308.23Z"})))},f=e("./node_modules/react/jsx-runtime.js"),E;(function(S){S.Descending="desc",S.Ascending="asc",S.NotSortable="notSortable",S.NotActive="notActive"})(E||(E={}));var y=function(i){var C,p=i.children,v=i.colSpan,u=v===void 0?1:v,m=i.variant,c=i.onChange,g=i.sortDirecton,b=g===void 0?E.NotSortable:g,x=i.id,j=(0,d.$K)(),O=j.variantStandard,M=function(){c!=null&&x!=null&&b!=null&&c({idCell:x,previousSortDirection:b})};return(0,f.jsxs)(f.Fragment,{children:[(m==null?O===d.$e.Header:m==="header")&&(0,f.jsx)("th",{className:n()(t()["header-table-cell"]),colSpan:u,children:(0,f.jsxs)("div",{className:b!=E.NotSortable?n()(t()["container-sortable"]):n()(t().container),onClick:function(){return M()},onKeyUp:function(R){(R.key==="Enter"||R.key===" ")&&M()},role:b!=E.NotSortable?"button":void 0,tabIndex:b!=E.NotSortable?0:void 0,children:[(0,f.jsx)("div",{className:n()(t().input),children:p}),b!=E.NotSortable&&(0,f.jsx)(P,{className:n()(t().icon,(C={},C[t()["icon-asc"]]=b===E.Ascending,C[t()["icon-desc"]]=b===E.Descending,C))})]})}),(m==null?O===d.$e.Body:m==="body")&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("td",{className:n()(t()["body-table-cell"]),colSpan:u,children:(0,f.jsx)("div",{className:n()(t().input),children:p})})}),O===d.$e.Footer&&(0,f.jsx)("td",{colSpan:u,children:(0,f.jsx)("div",{className:n()(t().input),children:p})})]})};const h=null;try{y.displayName="TableCell",y.__docgenInfo={description:"",displayName:"TableCell",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"string"}},colSpan:{defaultValue:{value:"1"},description:"",name:"colSpan",required:!1,type:{name:"number"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},sortable:{defaultValue:null,description:"",name:"sortable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"SortHandler"}},sortDirecton:{defaultValue:{value:"SortDirection.NotSortable"},description:"",name:"sortDirecton",required:!1,type:{name:"enum",value:[{value:'"desc"'},{value:'"asc"'},{value:'"notSortable"'},{value:'"notActive"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableCell.tsx#TableCell"]={docgenInfo:y.__docgenInfo,name:"TableCell",path:"src/components/Table/TableCell.tsx#TableCell"})}catch(S){}},"./src/components/Table/TableFooter.tsx":(a,s,e)=>{"use strict";e.d(s,{y:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/TableFooter.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(E){var y=E.children,h=d.$e.Footer;return(0,T.jsx)(d.wv.Provider,{value:{variantStandard:h},children:(0,T.jsx)("tfoot",{className:n()(t()["table-footer"]),children:y})})};_.displayName="TableFooter";var P=null;try{_.displayName="TableFooter",_.__docgenInfo={description:"",displayName:"TableFooter",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableFooter.tsx#TableFooter"]={docgenInfo:_.__docgenInfo,name:"TableFooter",path:"src/components/Table/TableFooter.tsx#TableFooter"})}catch(f){}},"./src/components/Table/TableHeader.tsx":(a,s,e)=>{"use strict";e.d(s,{x:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/TableHeader.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(f){var E=f.children,y=d.$e.Header;return(0,T.jsx)(d.wv.Provider,{value:{variantStandard:y},children:(0,T.jsx)("thead",{className:n()(t()["table-header"]),children:E})})};_.displayName="TableHeader";try{_.displayName="TableHeader",_.__docgenInfo={description:"",displayName:"TableHeader",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableHeader.tsx#TableHeader"]={docgenInfo:_.__docgenInfo,name:"TableHeader",path:"src/components/Table/TableHeader.tsx#TableHeader"})}catch(P){}},"./src/components/Table/TableRow.tsx":(a,s,e)=>{"use strict";e.d(s,{S:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/Table/TableRow.module.css"),t=e.n(l),d=e("./src/components/Table/Context.ts"),T=e("./node_modules/react/jsx-runtime.js"),_=function(E){var y,h=E.children,S=E.value,i=S===void 0?"no":S,C=E.selectSort,p=C===void 0?"":C,v=(0,d.$K)(),u=v.variantStandard,m=(0,d.Sh)(),c=m.onChange,g=m.selectedValue,b=m.selectRows,x=function(){c!=null&&b&&u===d.$e.Body&&c({selectedValue:i})},j=function(M){(M.key==="Enter"||M.key===" ")&&c!=null&&c({selectedValue:i})};return(0,T.jsx)(d.Je.Provider,{value:{selectSort:p},children:(0,T.jsx)("tr",{className:n()(t().TableRow,(y={},y[t()["table-row--selected"]]=i===g,y[t()["table-row--body"]]=u===d.$e.Body&&b&&i!==g,y)),onClick:x,tabIndex:u===d.$e.Body&&b?0:void 0,onKeyUp:function(M){return j(M)},children:h})})};_.displayName="TableRow";var P=null;try{_.displayName="TableRow",_.__docgenInfo={description:"",displayName:"TableRow",props:{value:{defaultValue:{value:"no"},description:"",name:"value",required:!1,type:{name:"string"}},selectSort:{defaultValue:{value:""},description:"",name:"selectSort",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Table/TableRow.tsx#TableRow"]={docgenInfo:_.__docgenInfo,name:"TableRow",path:"src/components/Table/TableRow.tsx#TableRow"})}catch(f){}},"./src/components/TextArea/TextArea.tsx":(a,s,e)=>{"use strict";e.d(s,{K:()=>u});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(r),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),l=e.n(n),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),d=e.n(t),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),_=e.n(T),P=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),E=e.n(f),y=e("./src/components/_InputWrapper/index.ts"),h=e("./src/components/TextArea/TextArea.module.css"),S=e.n(h),i=e("./node_modules/react/jsx-runtime.js"),C=["isValid","disabled","readOnly","resize","label"];function p(m,c){if(m==null)return{};var g=v(m,c),b,x;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(m);for(x=0;x<j.length;x++)b=j[x],!(c.indexOf(b)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,b)||(g[b]=m[b]))}return g}function v(m,c){if(m==null)return{};var g={},b=Object.keys(m),x,j;for(j=0;j<b.length;j++)x=b[j],!(c.indexOf(x)>=0)&&(g[x]=m[x]);return g}var u=function(c){var g=c.isValid,b=g===void 0?!0:g,x=c.disabled,j=x===void 0?!1:x,O=c.readOnly,M=O===void 0?!1:O,D=c.resize,R=D===void 0?"none":D,Y=c.label,K=p(c,C);return(0,i.jsx)(y.SP,{isValid:b,disabled:j,readOnly:M,label:Y,inputId:K.id,inputRenderer:function(z){var ne=z.className,re=z.inputId;return(0,i.jsx)("textarea",Object.assign({},K,{id:re,disabled:j,readOnly:Boolean(M),className:E()(ne,S().TextArea,S()["TextArea--resize-"+R])}))}})};u.displayName="TextArea";try{u.displayName="TextArea",u.__docgenInfo={description:"",displayName:"TextArea",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},resize:{defaultValue:{value:"none"},description:"",name:"resize",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"both"'},{value:'"horizontal"'},{value:'"vertical"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextArea/TextArea.tsx#TextArea"]={docgenInfo:u.__docgenInfo,name:"TextArea",path:"src/components/TextArea/TextArea.tsx#TextArea"})}catch(m){}},"./src/components/TextField/TextField.tsx":(a,s,e)=>{"use strict";e.d(s,{n:()=>b});var r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),n=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),d=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.trim.js"),_=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),P=e("./node_modules/react/index.js"),f=e("./node_modules/classnames/index.js"),E=e.n(f),y=e("./node_modules/react-number-format/dist/react-number-format.es.js"),h=function(j){return j.format!==void 0},S=function(j){return j.format===void 0},i=function(j,O){return O&&S(O)?numericFormatter(j,O):O&&h(O)?patternFormatter(j,O):j},C=e("./src/components/_InputWrapper/index.ts"),p=e("./node_modules/react/jsx-runtime.js"),v=["id","onChange","isValid","disabled","readOnly","required","formatting","label"];function u(x,j){if(x==null)return{};var O=m(x,j),M,D;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(x);for(D=0;D<R.length;D++)M=R[D],!(j.indexOf(M)>=0)&&(!Object.prototype.propertyIsEnumerable.call(x,M)||(O[M]=x[M]))}return O}function m(x,j){if(x==null)return{};var O={},M=Object.keys(x),D,R;for(R=0;R<M.length;R++)D=M[R],!(j.indexOf(D)>=0)&&(O[D]=x[D]);return O}var c=function(j){var O=j.values,M=j.sourceInfo;M.event.target.value=O.value.trim()},g=function(j,O,M){var D=j.target,R=j.key,Y=D.selectionStart,K=D.selectionEnd,te=D.value,z=te===void 0?"":te;if(Y!==null&&K!==null){var ne=z[0]==="-",re=(O==null?void 0:O.length)||0+(ne?1:0),J=(M==null?void 0:M.length)||0;ne&&K<=re&&R==="Backspace"?D.setSelectionRange(1,1):D.setSelectionRange(Math.min(Math.max(Y,re),z.length-J),Math.max(Math.min(K,z.length-J),re))}},b=function(j){var O=j.id,M=j.onChange,D=j.isValid,R=D===void 0?!0:D,Y=j.disabled,K=Y===void 0?!1:Y,te=j.readOnly,z=te===void 0?!1:te,ne=j.required,re=ne===void 0?!1:ne,J=j.formatting,X=j.label,H=u(j,v),U=function(W,F){F.source==="event"&&M&&(c({values:W,sourceInfo:F}),M(F.event))};return(0,p.jsx)(C.SP,{isValid:R,disabled:K,readOnly:z,label:X,inputId:O,inputRenderer:function(W){var F=W.className,w=W.variant,Z={id:O,readOnly:Boolean(z),disabled:K,required:re,className:E()(F,H.className),style:Object.assign({textAlign:J==null?void 0:J.align},H.style)};return J!=null&&J.number&&S(J.number)?(J.number.prefix&&J.number.prefix[0]==="-"&&(J.number.prefix=" "+J.number.prefix),(0,p.jsx)(y.h3,Object.assign({},Z,J.number,H,{"data-testid":O+"-formatted-number-"+w,onValueChange:U,valueIsNumericString:!0,onKeyDown:function(L){return g(L,J.number.prefix,J.number.suffix)}}))):J!=null&&J.number&&h(J.number)?(0,p.jsx)(y.HH,Object.assign({},Z,J.number,H,{"data-testid":O+"-formatted-number-"+w,onValueChange:U,valueIsNumericString:!0})):(0,p.jsx)("input",Object.assign({},Z,H,{"data-testid":O+"-"+w,onChange:M}))}})};b.displayName="TextField";try{b.displayName="TextField",b.__docgenInfo={description:"",displayName:"TextField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},formatting:{defaultValue:null,description:"",name:"formatting",required:!1,type:{name:"TextFieldFormatting"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLInputElement>"}},onMouseUp:{defaultValue:null,description:"",name:"onMouseUp",required:!1,type:{name:"MouseEventHandler<HTMLInputElement>"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"tel"'},{value:'"password"'}]}},displayType:{defaultValue:null,description:"",name:"displayType",required:!1,type:{name:"enum",value:[{value:'"input"'},{value:'"text"'}]}},renderText:{defaultValue:null,description:"",name:"renderText",required:!1,type:{name:"((formattedValue: string, otherProps: Partial<NumberFormatBase>) => ReactNode)"}},getInputRef:{defaultValue:null,description:"",name:"getInputRef",required:!1,type:{name:"((el: HTMLInputElement) => void) | Ref<any>"}},valueIsNumericString:{defaultValue:null,description:"",name:"valueIsNumericString",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"OnValueChange"}},isAllowed:{defaultValue:null,description:"",name:"isAllowed",required:!1,type:{name:"((values: NumberFormatValues) => boolean)"}},customInput:{defaultValue:null,description:"",name:"customInput",required:!1,type:{name:"ComponentType<InputAttributes>"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:b.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(x){}},"./src/components/ToggleButtonGroup/Context.ts":(a,s,e)=>{"use strict";e.d(s,{S:()=>o,z:()=>n});var r=e("./node_modules/react/index.js"),o=(0,r.createContext)(void 0),n=function(){var t=(0,r.useContext)(o);if(t===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return t}},"./src/components/ToggleButtonGroup/ToggleButton.tsx":(a,s,e)=>{"use strict";e.d(s,{C:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ToggleButtonGroup/Context.ts"),t=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),d=e.n(t),T=e("./node_modules/react/jsx-runtime.js"),_=function(f){var E,y=f.children,h=f.value,S=(0,l.z)(),i=S.onChange,C=S.selectedValue,p=function(){i({selectedValue:h})};return(0,T.jsx)("button",{"data-testid":"toggle-button",className:n()(d()["toggle-button"],(E={},E[d()["toggle-button--selected"]]=h===C,E)),onClick:p,type:"button","aria-pressed":h==C,children:y})};_.displayName="ToggleButton";try{_.displayName="ToggleButton",_.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:_.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(P){}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx":(a,s,e)=>{"use strict";e.d(s,{t:()=>_});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l=e("./src/components/ToggleButtonGroup/Context.ts"),t=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),d=e.n(t),T=e("./node_modules/react/jsx-runtime.js"),_=function(f){var E=f.children,y=f.onChange,h=f.selectedValue,S=function(C){var p=C.selectedValue;y({selectedValue:p})};return(0,T.jsx)(l.S.Provider,{value:{onChange:S,selectedValue:h},children:(0,T.jsx)("div",{className:n()(d()["toggle-button-group"]),"data-testid":"toggle-button-group",children:E})})};_.displayName="ToggleButtonGroup";try{_.displayName="ToggleButtonGroup",_.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:_.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(P){}},"./src/components/_InputWrapper/index.ts":(a,s,e)=>{"use strict";e.d(s,{SP:()=>v,Hx:()=>t});var r=e("./node_modules/react/index.js"),o=e("./node_modules/classnames/index.js"),n=e.n(o),l;(function(u){u.Default="default",u.Error="error",u.Disabled="disabled",u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(l||(l={}));var t;(function(u){u.ReadOnlyInfo="readonly-info",u.ReadOnlyConfirm="readonly-confirm"})(t||(t={}));var d;(function(u){u.None="none",u.Error="error",u.Search="search"})(d||(d={}));var T=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=m.readOnly,g=c===void 0?!1:c,b=m.disabled,x=b===void 0?!1:b,j=m.isValid,O=j===void 0?!0:j,M=m.isSearch,D=M===void 0?!1:M,R=d.None;return D&&(R=d.Search),x?{variant:l.Disabled,iconVariant:R}:g===!0||g===t.ReadOnlyInfo?{variant:l.ReadOnlyInfo,iconVariant:R}:g===t.ReadOnlyConfirm?{variant:l.ReadOnlyConfirm,iconVariant:R}:O===!1?{variant:l.Error,iconVariant:d.Error}:{variant:l.Default,iconVariant:R}},_;function P(){return P=Object.assign?Object.assign.bind():function(u){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(u[g]=c[g])}return u},P.apply(this,arguments)}var f=function(m){return r.createElement("svg",P({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},m),_||(_=r.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},E;function y(){return y=Object.assign?Object.assign.bind():function(u){for(var m=1;m<arguments.length;m++){var c=arguments[m];for(var g in c)Object.prototype.hasOwnProperty.call(c,g)&&(u[g]=c[g])}return u},y.apply(this,arguments)}var h=function(m){return r.createElement("svg",y({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m),E||(E=r.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},S=e("./src/components/_InputWrapper/InputWrapper.module.css"),i=e.n(S),C=e("./node_modules/react/jsx-runtime.js"),p=function(m){var c=m.variant,g=m.disabled,b=g===void 0?!1:g;if(c===d.Error)return(0,C.jsx)("div",{className:i().InputWrapper__icon,children:(0,C.jsx)(f,{"data-testid":"input-icon-error"})});if(c===d.Search){var x;return(0,C.jsx)("div",{className:n()(i().InputWrapper__icon,(x={},x[i()["InputWrapper__icon--disabled"]]=b,x)),children:(0,C.jsx)(h,{"data-testid":"input-icon-search"})})}return null};try{p.displayName="Icon",p.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:p.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(u){}var v=function(m){var c,g=m.isValid,b=g===void 0?!0:g,x=m.disabled,j=x===void 0?!1:x,O=m.readOnly,M=O===void 0?!1:O,D=m.isSearch,R=D===void 0?!1:D,Y=m.label,K=m.inputId,te=m.inputRenderer,z=m.noFocusEffect,ne=m.noPadding,re=(0,r.useId)(),J=K!=null?K:re,X=T({readOnly:M,disabled:j,isValid:b,isSearch:R}),H=X.variant,U=X.iconVariant;return(0,C.jsxs)(C.Fragment,{children:[Y&&(0,C.jsx)("label",{"data-testid":"InputWrapper-label",className:n()(i().InputWrapper__label),htmlFor:J,children:Y}),(0,C.jsxs)("div",{"data-testid":"InputWrapper",className:n()(i().InputWrapper,i()["InputWrapper--"+H],(c={},c[i()["InputWrapper--search"]]=R,c[i()["InputWrapper--with-focus-effect"]]=!z,c[i()["InputWrapper--with-padding"]]=!ne,c)),children:[(0,C.jsx)(p,{variant:U,disabled:j}),te({className:i().InputWrapper__field,inputId:J,variant:H})]})]})};try{v.displayName="InputWrapper",v.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:v.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(u){}},"./src/components/index.ts":(a,s,e)=>{"use strict";e.d(s,{XZ:()=>Y.X,Bc:()=>g.B,C3:()=>z.C});var r=e("./src/components/Panel/Panel.tsx"),o=e("./src/components/Panel/PopoverPanel.tsx"),n=e("./src/components/CircularProgress/CircularProgress.tsx"),l=e("./src/components/AppWrapper/AppWrapper.tsx"),t=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.tsx"),d=e("./src/components/ToggleButtonGroup/ToggleButton.tsx"),T=e("./src/components/Accordion/Accordion.tsx"),_=e("./src/components/Accordion/AccordionHeader.tsx"),P=e("./src/components/Accordion/AccordionContent.tsx"),f=e("./src/components/Accordion/Context.ts"),E=e("./src/components/Accordion/AccordionIcon.tsx"),y=e("./src/components/Button/index.ts"),h=e("./src/components/Page/Page.tsx"),S=e("./src/components/Page/PageHeader.tsx"),i=e("./src/components/Page/PageContent.tsx"),C=e("./src/components/Page/Context.ts"),p=e("./src/components/List/List.tsx"),v=e("./src/components/List/ListItem.tsx"),u=e("./src/components/List/Context.ts"),m=e("./src/components/TextField/TextField.tsx"),c=e("./src/components/SearchField/SearchField.tsx"),g=e("./src/components/ErrorMessage/ErrorMessage.tsx"),b=e("./src/components/Map/Map.tsx"),x=e("./src/components/Table/Table.tsx"),j=e("./src/components/Table/TableHeader.tsx"),O=e("./src/components/Table/TableRow.tsx"),M=e("./src/components/Table/TableBody.tsx"),D=e("./src/components/Table/TableCell.tsx"),R=e("./src/components/Table/TableFooter.tsx"),Y=e("./src/components/Checkbox/Checkbox.tsx"),K=e("./src/components/TextArea/TextArea.tsx"),te=e("./src/components/CheckboxGroup/CheckboxGroup.tsx"),z=e("./src/components/FieldSet/FieldSet.tsx"),ne=e("./src/components/Pagination/index.ts"),re=e("./src/components/Select/Select.tsx")},"./storybook-init-framework-entry.js":(a,s,e)=>{"use strict";var r=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src/components/Button/Stories/success.svg":(a,s,e)=>{"use strict";e.d(s,{r:()=>d});var r=e("./node_modules/react/index.js"),o,n,l;function t(){return t=Object.assign?Object.assign.bind():function(T){for(var _=1;_<arguments.length;_++){var P=arguments[_];for(var f in P)Object.prototype.hasOwnProperty.call(P,f)&&(T[f]=P[f])}return T},t.apply(this,arguments)}var d=function(_){return r.createElement("svg",t({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),o||(o=r.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),n||(n=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),l||(l=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.accordion---oQBwV {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),t.locals={accordion:"accordion---oQBwV"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.container---_OBRF {
  width: 80vw;
}
`,""]),t.locals={container:"container---_OBRF"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.accordion-header---NEcyL {
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
`,""]),t.locals={"accordion-header":"accordion-header---NEcyL","accordion-header__subtitle":"accordion-header__subtitle---GFfGU","accordion-header--subtitle":"accordion-header--subtitle---tAtju","accordion-header__title":"accordion-header__title---BmsGI","accordion-header__actions":"accordion-header__actions---qbcYv"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.accordion-icon---Kg7Qy {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2.5rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.accordion-icon--opened---Qm26L {
  transform: rotate(90deg);
}
`,""]),t.locals={"accordion-icon":"accordion-icon---Kg7Qy","accordion-icon--opened":"accordion-icon--opened---Qm26L"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),t.push([a.id,`html {
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
`,""]),t.locals={};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.button---AisLs {
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
`,""]),t.locals={button:"button---AisLs",icon:"icon---eojMy","button--small":"button--small---WfL7y","button--medium":"button--medium---FMlU7","button--large":"button--large---ajmmm","button--full-width":"button--full-width---HGVii","button--dashed-border":"button--dashed-border---JV4fE","button--only-icon":"button--only-icon---tO03o","button--filled":"button--filled---o9MD5","button--outline":"button--outline---zP3gL","button--quiet":"button--quiet---OUUmK","button--filled--primary":"button--filled--primary---OcTdh","button--filled--secondary":"button--filled--secondary---YmpeA","button--filled--success":"button--filled--success---BK9MZ","button--filled--danger":"button--filled--danger---YsMfL","button--filled--inverted":"button--filled--inverted---r1nYK","button--outline--primary":"button--outline--primary---gS4I3","button--outline--secondary":"button--outline--secondary---AmzAA","button--outline--success":"button--outline--success---NWZPV","button--outline--danger":"button--outline--danger---Cq5Wl","button--outline--inverted":"button--outline--inverted---GRPEJ","button--quiet--primary":"button--quiet--primary---ySkfc","button--quiet--secondary":"button--quiet--secondary---bY9dk","button--quiet--success":"button--quiet--success---viNz9","button--quiet--danger":"button--quiet--danger---bNxIz","button--quiet--inverted":"button--quiet--inverted---qCJLy"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.wrapper---WhgDa {
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
`,""]),t.locals={wrapper:"wrapper---WhgDa","wrapper--compact":"wrapper--compact---JU5AA","wrapper--error":"wrapper--error---mbmQZ","wrapper--checked":"wrapper--checked---SKWr8","wrapper--disabled":"wrapper--disabled---pTnwY","wrapper--read-only":"wrapper--read-only---blIvh","checkbox-wrapper":"checkbox-wrapper---CuQ4i",checkbox:"checkbox---sy8lK","visible-box":"visible-box---_ibVj","visible-box__checkmark":"visible-box__checkmark---AB9zK","label-and-description":"label-and-description---x9fQn",label:"label---a2ABr",description:"description---U6Cn3"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.checkbox-group---Ws6hw {
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
`,""]),t.locals={"checkbox-group":"checkbox-group---Ws6hw","checkbox-group--compact":"checkbox-group--compact---yT3vB","checkbox-group__list":"checkbox-group__list---WaB0C","checkbox-group__list--vertical":"checkbox-group__list--vertical---dNWTw","checkbox-group__list--horizontal":"checkbox-group__list--horizontal---Gv47i"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.svg---cRnN3 {
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
`,""]),t.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.error-message-wrapper---pvYoX {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`,""]),t.locals={"error-message-wrapper":"error-message-wrapper---pvYoX"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.field-set---WtvOy {
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
`,""]),t.locals={"field-set":"field-set---WtvOy","field-set--xsmall":"field-set--xsmall---ApLMF","field-set__legend":"field-set__legend---rtmfi","field-set__description":"field-set__description---wR0Pc","field-set__content":"field-set__content---JLfVl","field-set__error-message":"field-set__error-message---RL5SI"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.list---Xw1lu {
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
`,""]),t.locals={list:"list---Xw1lu","list--solid":"list--solid---neKiv","list--dashed":"list--dashed---rXI_D"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.container---sf7W5 {
  width: 720px;
}

@media only screen and (max-width: 960px) {
  .container---sf7W5 {
    width: 300px;
  }
}
`,""]),t.locals={container:"container---sf7W5"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.list-item---aLk6z {
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
`,""]),t.locals={"list-item":"list-item---aLk6z","list-item--solid":"list-item--solid---Rnw0X","list-item--dashed":"list-item--dashed---EbBKz"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.map---Z2PfI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),t.locals={map:"map---Z2PfI"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.page---LVMNK {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),t.locals={page:"page---LVMNK"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.page-content---ZIuS7 {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),t.locals={"page-content":"page-content---ZIuS7"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.page-header---bt29G {
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
`,""]),t.locals={"page-header":"page-header---bt29G","page-header--primary":"page-header--primary---tMRjo","page-header--success":"page-header--success---ZUxkH"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.page-icon---mvZDR {
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
`,""]),t.locals={"page-icon":"page-icon---mvZDR","page-icon__element":"page-icon__element---CsGkI"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.pagination-icon---iNvyI {
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
`,""]),t.locals={"pagination-icon":"pagination-icon---iNvyI","pagination-icon--disabled":"pagination-icon--disabled---uO3Mm","pagination-wrapper":"pagination-wrapper---v7KJE"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`/* breakpoints-xs */
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
`,""]),t.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj",panel__pointer:"panel__pointer---bc7XJ","panel__pointer-position":"panel__pointer-position---WhWRF","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper--error":"panel__content-wrapper--error---dJU5t","panel__pointer--error":"panel__pointer--error---K6h4Z","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.popover-panel---cMdAz {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.popover-panel__arrow---qgDrF {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),t.locals={"popover-panel":"popover-panel---cMdAz","popover-panel__arrow":"popover-panel__arrow---qgDrF"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.multi-select-item---KQ3Ws {
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
`,""]),t.locals={"multi-select-item":"multi-select-item---KQ3Ws","multi-select-item__delete-button":"multi-select-item__delete-button---IfUL7","multi-select-item__delete-button__cross":"multi-select-item__delete-button__cross---q9XTV"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.select---eatbZ {
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
`,""]),t.locals={select:"select---eatbZ","select--disabled":"select--disabled---Q2nU6","select--expanded":"select--expanded---SqXv9","select__option-list":"select__option-list---cvauP","select--using-keyboard":"select--using-keyboard---p5TVL",select__field__button:"select__field__button---ZxHUH",select__field:"select__field---kkk9_","select--multiple":"select--multiple---S8dty","select--single":"select--single---dK6ee","select--single__field__value":"select--single__field__value---r8Had","select--multiple__field__values":"select--multiple__field__values---j3h_y","select__field__arrow-wrapper":"select__field__arrow-wrapper---Pb6zM","select__field__arrow-wrapper__arrow":"select__field__arrow-wrapper__arrow---GuFvQ","select--multiple__field__delete-button":"select--multiple__field__delete-button---fQeKk","select--multiple__field__delete-button__cross":"select--multiple__field__delete-button__cross---SgnN0","select__option-list__option":"select__option-list__option---poz8e","select__option-list__option--selected":"select__option-list__option--selected---cAaDa","select--multiple__option-list__option--focused":"select--multiple__option-list__option--focused---rgM72"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`Table {
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
`,""]),t.locals={};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),t.locals={};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.TableBody---cpO70 {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`,""]),t.locals={TableBody:"TableBody---cpO70"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.header-table-cell---zvgNX {
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
`,""]),t.locals={"header-table-cell":"header-table-cell---zvgNX","body-table-cell":"body-table-cell---cCxyS",image:"image---Jz7hI",input:"input---jn1Id","container-sortable":"container-sortable---vaStk",icon:"icon---vY3zZ","icon-desc":"icon-desc---YqUWK","icon-asc":"icon-asc---T8x5u"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.table-footer---fVxHQ {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),t.locals={"table-footer":"table-footer---fVxHQ"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.table-header---DnjKf {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`,""]),t.locals={"table-header":"table-header---DnjKf"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.TableRow---XoYrl {
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
`,""]),t.locals={TableRow:"TableRow---XoYrl","table-row--selected":"table-row--selected---jiOF3","table-row--body":"table-row--body---wY2LD"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.TextArea---kkLod {
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
`,""]),t.locals={TextArea:"TextArea---kkLod","TextArea--resize-none":"TextArea--resize-none---EQA3f","TextArea--resize-both":"TextArea--resize-both---cN8gI","TextArea--resize-horizontal":"TextArea--resize-horizontal---p__Ac","TextArea--resize-vertical":"TextArea--resize-vertical---xcxkK"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`/* breakpoints-xs */
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
`,""]),t.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.toggle-button-group---xdsvq {
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
`,""]),t.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`/* breakpoints-xs */
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
`,""]),t.locals={container:"container---_zb20"};const d=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css":(a,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var r=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(r),n=e("./node_modules/css-loader/dist/runtime/api.js"),l=e.n(n),t=l()(o());t.push([a.id,`.InputWrapper---J_oif {
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
`,""]),t.locals={InputWrapper:"InputWrapper---J_oif","InputWrapper--with-focus-effect":"InputWrapper--with-focus-effect---DMF5F","InputWrapper--default":"InputWrapper--default---IokYk","InputWrapper--error":"InputWrapper--error---iu8HJ","InputWrapper--disabled":"InputWrapper--disabled---V_5HB","InputWrapper--readonly-info":"InputWrapper--readonly-info---AizuC","InputWrapper--readonly-confirm":"InputWrapper--readonly-confirm---DBa44","InputWrapper--search":"InputWrapper--search---CvAH7","InputWrapper--with-padding":"InputWrapper--with-padding---AxmLR",InputWrapper__field:"InputWrapper__field---Asejt",InputWrapper__icon:"InputWrapper__icon---sQ_FI","InputWrapper__icon--disabled":"InputWrapper__icon--disabled---ES3Mt",InputWrapper__label:"InputWrapper__label---N628B"};const d=t},"./src/components/Accordion/Accordion.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Accordion/Accordion.stories.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/Accordion.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Accordion/AccordionHeader.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Accordion/AccordionIcon.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Accordion/AccordionIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/AppWrapper/AppWrapper.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Button/Button.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Checkbox/Checkbox.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Checkbox/Checkbox.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/CheckboxGroup/CheckboxGroup.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CheckboxGroup/CheckboxGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/ErrorMessage/ErrorMessage.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ErrorMessage/ErrorMessage.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/FieldSet/FieldSet.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/FieldSet/FieldSet.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/List/List.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/List/List.stories.modules.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/List.stories.modules.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/List/ListItem.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/List/ListItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Map/Map.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Map/Map.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Page/Page.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/Page.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Page/PageContent.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageContent.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Page/PageHeader.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Page/PageIcon.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Page/PageIcon.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Pagination/Pagination.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Pagination/Pagination.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Panel/PopoverPanel.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/PopoverPanel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Select/MultiSelectItem.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/MultiSelectItem.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Select/Select.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Select/Select.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/Table.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/Table.stories.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/Table.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/TableBody.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableBody.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/TableCell.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableCell.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/TableFooter.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableFooter.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/TableHeader.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableHeader.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/Table/TableRow.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Table/TableRow.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/TextArea/TextArea.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/TextArea/TextArea.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src/components/_InputWrapper/InputWrapper.module.css":(a,s,e)=>{var r=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/_InputWrapper/InputWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var n={};n.insert="head",n.singleton=!1;var l=r(o,n);a.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(a,s,e)=>{var r={"./components/Accordion/Accordion.stories.tsx":"./src/components/Accordion/Accordion.stories.tsx","./components/Button/Stories/FilledButton.stories.tsx":"./src/components/Button/Stories/FilledButton.stories.tsx","./components/Button/Stories/OutlineButton.stories.tsx":"./src/components/Button/Stories/OutlineButton.stories.tsx","./components/Button/Stories/QuietButton.stories.tsx":"./src/components/Button/Stories/QuietButton.stories.tsx","./components/Checkbox/Checkbox.stories.tsx":"./src/components/Checkbox/Checkbox.stories.tsx","./components/CheckboxGroup/CheckboxGroup.stories.tsx":"./src/components/CheckboxGroup/CheckboxGroup.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/ErrorMessage/ErrorMessage.stories.tsx":"./src/components/ErrorMessage/ErrorMessage.stories.tsx","./components/FieldSet/FieldSet.stories.tsx":"./src/components/FieldSet/FieldSet.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx","./components/Map/Map.stories.tsx":"./src/components/Map/Map.stories.tsx","./components/Page/Page.stories.tsx":"./src/components/Page/Page.stories.tsx","./components/Pagination/Pagination.stories.tsx":"./src/components/Pagination/Pagination.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/Panel/PopoverPanel.stories.tsx":"./src/components/Panel/PopoverPanel.stories.tsx","./components/SearchField/SearchField.stories.tsx":"./src/components/SearchField/SearchField.stories.tsx","./components/Select/Select.stories.tsx":"./src/components/Select/Select.stories.tsx","./components/SvgIcon/Stories/SvgIcon.stories.tsx":"./src/components/SvgIcon/Stories/SvgIcon.stories.tsx","./components/Table/Table.stories.tsx":"./src/components/Table/Table.stories.tsx","./components/TextArea/TextArea.stories.tsx":"./src/components/TextArea/TextArea.stories.tsx","./components/TextField/TextField.stories.tsx":"./src/components/TextField/TextField.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(l){var t=n(l);return e(t)}function n(l){if(!e.o(r,l)){var t=new Error("Cannot find module '"+l+"'");throw t.code="MODULE_NOT_FOUND",t}return r[l]}o.keys=function(){return Object.keys(r)},o.resolve=n,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,s,e)=>{var r={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(l){var t=n(l);return e(t)}function n(l){if(!e.o(r,l)){var t=new Error("Cannot find module '"+l+"'");throw t.code="MODULE_NOT_FOUND",t}return r[l]}o.keys=function(){return Object.keys(r)},o.resolve=n,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(a,s,e)=>{"use strict";a=e.nmd(a);var r=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,r.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],a,!1)}},a=>{var s=r=>a(a.s=r);a.O(0,[631],()=>(s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),s("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),s("./storybook-init-framework-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),s("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),s("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),s("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),s("./.storybook/preview.js-generated-config-entry.js"),s("./generated-stories-entry.cjs")));var e=a.O()}]);
