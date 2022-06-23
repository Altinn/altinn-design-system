(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[179],{"./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,n,e)=>{var t={"./intro.stories.mdx":"./docs/intro.stories.mdx"};function o(r){var l=s(r);return e(l)}function s(r){if(!e.o(t,r)){var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}return t[r]}o.keys=function(){return Object.keys(t)},o.resolve=s,a.exports=o,o.id="./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./docs/intro.stories.mdx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{__namedExportsOrder:()=>m,__page:()=>x,default:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),r=e.n(s),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),T=e.n(l),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),I=e.n(B),C=e("./node_modules/react/index.js"),i=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=["components"];function S(){return S=Object.assign||function(d){for(var f=1;f<arguments.length;f++){var _=arguments[f];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(d[y]=_[y])}return d},S.apply(this,arguments)}function N(d,f){if(d==null)return{};var _=w(d,f),y,p;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(d);for(p=0;p<v.length;p++)y=v[p],!(f.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,y)||(_[y]=d[y]))}return _}function w(d,f){if(d==null)return{};var _={},y=Object.keys(d),p,v;for(v=0;v<y.length;v++)p=y[v],!(f.indexOf(p)>=0)&&(_[p]=d[p]);return _}var U={},k="wrapper";function O(d){var f=d.components,_=N(d,W);return(0,i.kt)(k,S({},U,_,{components:f,mdxType:"MDXLayout"}),(0,i.kt)(b.h_,{title:"Introduksjon",mdxType:"Meta"}),(0,i.kt)("h1",null,"Altinn Design System (v2)"),(0,i.kt)("h2",null,"Viktig informasjon om komponentbiblioteket"),(0,i.kt)("p",null,`Dette komponentbiblioteket best\xE5r av flere React komponenter, og flere av de benytter seg av css variabler, som er design tokens definert i Figma.
Disse tar utgangspunkt i at `,(0,i.kt)("inlineCode",{parentName:"p"},"1rem = 16px"),". Vi har ogs\xE5 et eldre design system som tar utgangspunkt i at ",(0,i.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),`, som vi i mange tilfeller m\xE5 bruke sammen med det nye designsystemet.
Derfor gj\xF8r vi en transformasjon av Figma tokens som brukes i dette repoet, slik at `,(0,i.kt)("inlineCode",{parentName:"p"},"1rem = 10px"),"."),(0,i.kt)("p",null,"Det er derfor viktig at css variablene og design tokens som skal brukes i prosjektene lastes fra denne pakken ",(0,i.kt)("inlineCode",{parentName:"p"},"@altinn/altinn-design-system"),", og ikke rett fra figma tokens pakken ",(0,i.kt)("inlineCode",{parentName:"p"},"@altinn/figma-design-tokens"),"."),(0,i.kt)("p",null,"Den enkleste m\xE5ten \xE5 laste css variablene p\xE5 er \xE5 benytte ",(0,i.kt)("inlineCode",{parentName:"p"},"AppWrapper"),` komponenten. Den s\xF8rger for \xE5 laste inn de transformerte css variablene, samt setter noen andre globale styles vi benytter i design systemet.
For \xE5 benytte de transformerte tokenene i JavaScript, kan du importere de ogs\xE5 fra denne pakken: `,(0,i.kt)("inlineCode",{parentName:"p"},"import {tokens} from '@altinn/altinn-design-system"),"."),(0,i.kt)("p",null,"For mer informasjon om hvordan denne transformeringen gj\xF8res kan du se i Readme for dette repoet."),(0,i.kt)("h2",null,"Hvordan bruke Storybook"),(0,i.kt)("p",null,"P\xE5 de fleste komponentene ligger det en meny \xF8verst til venstre med valgene ",(0,i.kt)("inlineCode",{parentName:"p"},"Canvas")," og ",(0,i.kt)("inlineCode",{parentName:"p"},"Docs"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Canvas"),": Viser den spesifikke varianten av komponenten som er valgt."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Docs"),": Viser dokumentasjon generelt til komponenten og ulike m\xE5ter den kan brukes p\xE5.")))}O.displayName="MDXContent",O.isMDXComponent=!0;var x=function(){throw new Error("Docs-only story")};x.parameters={docsOnly:!0};var c={title:"Introduksjon",includeStories:["__page"]},u={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,i.kt)(b.aT,{mdxStoryNameToKey:u,mdxComponentAnnotations:c},(0,i.kt)(O,null))}});const g=c;var m=["__page"]},"./src/components/AppWrapper/AppWrapper.stories.mdx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{__namedExportsOrder:()=>m,__page:()=>x,default:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),o=e.n(t),s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),r=e.n(s),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),T=e.n(l),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),I=e.n(B),C=e("./node_modules/react/index.js"),i=e("./node_modules/@mdx-js/react/dist/esm.js"),b=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),W=["components"];function S(){return S=Object.assign||function(d){for(var f=1;f<arguments.length;f++){var _=arguments[f];for(var y in _)Object.prototype.hasOwnProperty.call(_,y)&&(d[y]=_[y])}return d},S.apply(this,arguments)}function N(d,f){if(d==null)return{};var _=w(d,f),y,p;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(d);for(p=0;p<v.length;p++)y=v[p],!(f.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(d,y)||(_[y]=d[y]))}return _}function w(d,f){if(d==null)return{};var _={},y=Object.keys(d),p,v;for(v=0;v<y.length;v++)p=y[v],!(f.indexOf(p)>=0)&&(_[p]=d[p]);return _}var U={},k="wrapper";function O(d){var f=d.components,_=N(d,W);return(0,i.kt)(k,S({},U,_,{components:f,mdxType:"MDXLayout"}),(0,i.kt)(b.h_,{title:"Components/AppWrapper",mdxType:"Meta"}),(0,i.kt)("h1",null,"AppWrapper"),(0,i.kt)("p",null,`AppWrapper s\xF8rger for \xE5 laste eksterne globale styles (f.eks css variabler som kommer fra Figma Tokens),
og setter noen globale styles (f.eks font-family).`),(0,i.kt)("p",null,"For \xE5 f\xE5 andre komponenter til \xE5 virke som de skal du derfor bruke AppWrapper."),(0,i.kt)("p",null,"Denne komponenten b\xF8r lastes kun \xE9n gang, og s\xE5 h\xF8yt opp i React treet som mulig."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},`import { AppWrapper } from '@altinn/altinn-design-system';

const App = () => {
  return (
    <AppWrapper>
      <div>
        <h1>Hello World</h1>
      </div>
    </AppWrapper>
  );
};
`)))}O.displayName="MDXContent",O.isMDXComponent=!0;var x=function(){throw new Error("Docs-only story")};x.parameters={docsOnly:!0};var c={title:"Components/AppWrapper",includeStories:["__page"]},u={};c.parameters=c.parameters||{},c.parameters.docs=Object.assign({},c.parameters.docs||{},{page:function(){return(0,i.kt)(b.aT,{mdxStoryNameToKey:u,mdxComponentAnnotations:c},(0,i.kt)(O,null))}});const g=c;var m=["__page"]},"./.storybook/StoryPage.tsx":(a,n,e)=>{"use strict";e.d(n,{Y:()=>C});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),s=e("./node_modules/react/index.js"),r=e("./node_modules/@storybook/addon-docs/dist/esm/index.js"),l=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),T=e("./src/components/AppWrapper/AppWrapper.module.css"),B=e("./node_modules/react/jsx-runtime.js"),I=function(W){var S=W.children;return(0,B.jsx)("div",{children:S})};I.displayName="AppWrapper";try{I.displayName="AppWrapper",I.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:I.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(b){}var C=function(W){var S=W.description;return(0,B.jsxs)(I,{children:[(0,B.jsx)(r.Dx,{}),(0,B.jsx)(r.dk,{children:S}),(0,B.jsx)(r.fQ,{includePrimary:!0}),(0,B.jsx)(r.X6,{children:"Props"}),(0,B.jsx)(r.$4,{story:r.Uh})]})};C.displayName="StoryPage";var i=null;try{C.displayName="StoryPage",C.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:C.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(b){}},"./.storybook/preview.js-generated-config-entry.js":(a,n,e)=>{"use strict";var t={};e.r(t),e.d(t,{__namedExportsOrder:()=>w,parameters:()=>N});var o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.filter.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.for-each.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.for-each.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-properties.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.define-property.js"),b=e("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),S=e("./node_modules/@storybook/theming/dist/esm/index.js"),N={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},layout:"centered",darkMode:{current:"light",dark:Object.assign({},S.np.dark),light:Object.assign({},S.np.normal)}},w=["parameters"],U=e("./node_modules/console-browserify/index.js");function k(c,u){var g=Object.keys(c);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(c);u&&(m=m.filter(function(d){return Object.getOwnPropertyDescriptor(c,d).enumerable})),g.push.apply(g,m)}return g}function O(c){for(var u=1;u<arguments.length;u++){var g=arguments[u]!=null?arguments[u]:{};u%2?k(Object(g),!0).forEach(function(m){x(c,m,g[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(g)):k(Object(g)).forEach(function(m){Object.defineProperty(c,m,Object.getOwnPropertyDescriptor(g,m))})}return c}function x(c,u,g){return u in c?Object.defineProperty(c,u,{value:g,enumerable:!0,configurable:!0,writable:!0}):c[u]=g,c}Object.keys(t).forEach(function(c){var u=t[c];switch(c){case"args":return(0,b.uc)(u);case"argTypes":return(0,b.v9)(u);case"decorators":return u.forEach(function(m){return(0,b.$9)(m,!1)});case"loaders":return u.forEach(function(m){return(0,b.HZ)(m,!1)});case"parameters":return(0,b.h1)(O({},u),!1);case"argTypesEnhancers":return u.forEach(function(m){return(0,b.My)(m)});case"argsEnhancers":return u.forEach(function(m){return(0,b._C)(m)});case"render":return(0,b.$P)(u);case"globals":case"globalTypes":{var g={};return g[c]=u,(0,b.h1)(g,!1)}case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return U.log(c+" was not supported :( !")}})},"./src/components/Button/Button.stories.tsx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{Primary:()=>d,Secondary:()=>_,Submit:()=>f,__namedExportsOrder:()=>y,default:()=>g});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),s=e("./node_modules/react/index.js"),r=e("./node_modules/storybook-addon-designs/esm/index.js"),l=e("./.storybook/StoryPage.tsx"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.keys.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.index-of.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),C=e("./node_modules/classnames/index.js"),i=e.n(C),b=e("./src/components/Button/Button.module.css"),W=e.n(b),S=e("./node_modules/react/jsx-runtime.js"),N=["children","variant","type"];function w(p,v){if(p==null)return{};var z=U(p,v),L,R;if(Object.getOwnPropertySymbols){var K=Object.getOwnPropertySymbols(p);for(R=0;R<K.length;R++)L=K[R],!(v.indexOf(L)>=0)&&(!Object.prototype.propertyIsEnumerable.call(p,L)||(z[L]=p[L]))}return z}function U(p,v){if(p==null)return{};var z={},L=Object.keys(p),R,K;for(K=0;K<L.length;K++)R=L[K],!(v.indexOf(R)>=0)&&(z[R]=p[R]);return z}var k;(function(p){p.Primary="primary",p.Secondary="secondary",p.Submit="submit"})(k||(k={}));var O=function(v){var z=v.children,L=v.variant,R=L===void 0?k.Primary:L,K=v.type,H=K===void 0?"button":K,Z=w(v,N);return(0,S.jsx)("button",Object.assign({"data-testid":R+"-button",className:i()(W().button,W()["button--"+R]),type:H},Z,{children:z}))};O.displayName="Button";try{O.displayName="Button",O.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"ButtonVariant.Primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"submit"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:O.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(p){}var x=`import React from 'react';
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
`,c={Primary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},Submit:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}},Secondary:{startLoc:{col:48,line:42},endLoc:{col:78,line:42},startBody:{col:48,line:42},endBody:{col:78,line:42}}},u="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=2064%3A496";const g={title:"Components/Button",component:O,parameters:{design:(0,r.vc)([{type:"figma",url:u},{type:"link",url:u}]),docs:{page:function(){return(0,S.jsx)(l.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{children:"I'm a button",onClick:function(v){alert(JSON.stringify(v.target.innerHTML)+" clicked!")}}};var m=function(v){return(0,S.jsx)(O,Object.assign({},v))};m.displayName="Template";var d=m.bind({});d.args={children:"Primary button"},d.parameters={docs:{description:{story:""}}};var f=m.bind({});f.args={children:"Submit button",variant:k.Submit},f.parameters={docs:{description:{story:""}}};var _=m.bind({});_.args={children:"Secondary button",variant:k.Secondary},_.parameters={docs:{description:{story:""}}},d.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},d.parameters),f.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},f.parameters),_.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},_.parameters);var y=["Primary","Submit","Secondary"]},"./src/components/CircularProgress/CircularProgress.stories.tsx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{SimpleExample:()=>k,__namedExportsOrder:()=>O,default:()=>w});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),s=e("./node_modules/react/index.js"),r=e("./node_modules/storybook-addon-designs/esm/index.js"),l=e("./.storybook/StoryPage.tsx"),T=e("./src/DesignTokens/index.ts"),B=e("./src/components/CircularProgress/CircularProgress.module.css"),I=e.n(B),C=e("./node_modules/react/jsx-runtime.js"),i=function(c){var u=c.value,g=c.width,m=g===void 0?70:g,d=c.strokeWidth,f=d===void 0?2.5:d,_=c.ariaLabel,y=c.label,p=c.id,v=p+"-label",z=!_&&y?v:void 0;return(0,C.jsxs)("div",{id:p,className:I().container,style:{width:m+"px"},"aria-valuenow":u,role:"progressbar","aria-labelledby":z,"aria-label":_,children:[y&&(0,C.jsx)("div",{id:v,className:I().label,children:y}),(0,C.jsxs)("svg",{className:I().svg,viewBox:"0 0 35.8 35.8",children:[(0,C.jsx)(b,{stroke:T.T.ColorsBlue200,strokeWidth:f}),(0,C.jsx)(b,{strokeWidth:f,stroke:T.T.ColorsBlue900,strokeDashoffset:100-u,strokeDasharray:"100 100",className:I().circleTransition})]})]})};i.displayName="CircularProgress";var b=function(c){return(0,C.jsx)("circle",Object.assign({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},c))};b.displayName="Circle";try{i.displayName="CircularProgress",i.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:i.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(x){}var W=`import React from 'react';
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
`,S={SimpleExample:{startLoc:{col:66,line:36},endLoc:{col:1,line:38},startBody:{col:66,line:36},endBody:{col:1,line:38}}},N="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=17152%3A33460";const w={title:"Components/CircularProgress",component:i,parameters:{design:(0,r.vc)([{type:"figma",url:N},{type:"link",url:N}]),docs:{page:function(){return(0,C.jsx)(l.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var U=function(c){return(0,C.jsx)(i,Object.assign({},c))};U.displayName="CircularTemplate";var k=U.bind({});k.args={width:100,value:60,label:"3/5",id:"progress"},k.parameters=Object.assign({storySource:{source:`(args) => (
  <CircularProgress {...args} />
)`}},k.parameters);var O=["SimpleExample"]},"./src/components/Panel/Panel.stories.tsx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{Info:()=>R,Success:()=>H,Warning:()=>K,__namedExportsOrder:()=>Z,default:()=>z});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),s=e("./node_modules/react/index.js"),r=e("./node_modules/storybook-addon-designs/esm/index.js"),l=e("./.storybook/StoryPage.tsx"),T=e("./node_modules/classnames/index.js"),B=e.n(T),I=e("./node_modules/@react-hookz/web/esm/useMediaQuery/useMediaQuery.js"),C=e("./src/DesignTokens/index.ts"),i,b,W;function S(){return S=Object.assign||function(A){for(var P=1;P<arguments.length;P++){var M=arguments[P];for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(A[D]=M[D])}return A},S.apply(this,arguments)}var N=function(P){return s.createElement("svg",S({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},P),i||(i=s.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),b||(b=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),W||(W=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},w,U,k;function O(){return O=Object.assign||function(A){for(var P=1;P<arguments.length;P++){var M=arguments[P];for(var D in M)Object.prototype.hasOwnProperty.call(M,D)&&(A[D]=M[D])}return A},O.apply(this,arguments)}var x=function(P){return s.createElement("svg",O({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},P),w||(w=s.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),U||(U=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),k||(k=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},c=e("./src/components/Panel/Panel.module.css"),u=e.n(c),g=e("./node_modules/react/jsx-runtime.js"),m;(function(A){A.Info="info",A.Warning="warning",A.Success="success"})(m||(m={}));var d=function(P){var M=P.size,D=P.variant;switch(D){case m.Info:case m.Warning:return(0,g.jsx)(N,{style:{width:M,height:M},"data-testid":"panel-icon-info"});case m.Success:return(0,g.jsx)(x,{style:{width:M,height:M},"data-testid":"panel-icon-success"})}},f=function(P){var M=P.forceMobileLayout,D=(0,I.a)("(max-width: "+C.T.BreakpointsSm+")");return M?!0:D},_=function(P){var M,D=P.renderIcon,Q=D===void 0?d:D,j=P.title,E=P.children,h=P.variant,V=h===void 0?m.Info:h,G=P.showPointer,F=G===void 0?!1:G,$=P.showIcon,X=$===void 0?!0:$,Y=P.forceMobileLayout,J=Y===void 0?!1:Y,q=f({forceMobileLayout:J}),ee=q?C.T.ComponentPanelSizeIconXs:C.T.ComponentPanelSizeIconMd;return(0,g.jsxs)("div",{className:B()(u().panel,(M={},M[u()["panel--has-pointer"]]=F,M[u()["panel--mobile-layout"]]=q,M)),children:[F&&(0,g.jsx)("div",{"data-testid":"panel-pointer",className:B()(u().panel__pointer,u()["panel__pointer--"+V])}),(0,g.jsxs)("div",{className:B()(u()["panel__content-wrapper"],u()["panel__content-wrapper--"+V]),children:[X&&(0,g.jsx)("div",{"data-testid":"panel-icon-wrapper",className:u()["panel__icon-wrapper"],children:Q({size:ee,variant:V})}),(0,g.jsxs)("div",{className:u().panel__content,children:[j&&(0,g.jsx)("h2",{className:u().panel__header,children:j}),(0,g.jsx)("div",{className:u().panel__body,children:E})]})]})]})};_.displayName="Panel";try{_.displayName="Panel",_.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
  switch (variant) {
    case PanelVariant.Info:
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
}`},description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Info"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},showPointer:{defaultValue:{value:"false"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:{value:"true"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:_.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(A){}var y=`import React from 'react';
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
`,p={Info:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Warning:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}},Success:{startLoc:{col:47,line:39},endLoc:{col:76,line:39},startBody:{col:47,line:39},endBody:{col:76,line:39}}},v="https://www.figma.com/file/wnBveAG2ikUspFsQwM3GNE/Altinn-Studio-Apps?node-id=15055%3A17514";const z={title:"Components/Panel",component:_,parameters:{design:(0,r.vc)([{type:"figma",url:v},{type:"link",url:v}]),docs:{page:function(){return(0,g.jsx)(l.Y,{description:"TODO: Add a description (supports markdown)"})}}},args:{title:"Panel tittel",children:(0,g.jsx)("div",{children:"Her kommer litt informasjon"})}};var L=function(P){return(0,g.jsx)(_,Object.assign({},P))};L.displayName="Template";var R=L.bind({});R.parameters={docs:{description:{story:"Info beskrivelse"}}};var K=L.bind({});K.args={variant:m.Warning},K.parameters={docs:{description:{story:"Warning beskrivelse"}}};var H=L.bind({});H.args={variant:m.Success},H.parameters={docs:{description:{story:"Success beskrivelse"}}},R.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},R.parameters),K.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},K.parameters),H.parameters=Object.assign({storySource:{source:"(args) => <Panel {...args} />"}},H.parameters);var Z=["Info","Warning","Success"]},"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":(a,n,e)=>{"use strict";e.r(n),e.d(n,{Example:()=>D,__namedExportsOrder:()=>Q,default:()=>P});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.bind.js"),o=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.assign.js"),s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.is-array.js"),r=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.js"),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.description.js"),T=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.object.to-string.js"),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.symbol.iterator.js"),I=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.iterator.js"),C=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.iterator.js"),i=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/web.dom-collections.iterator.js"),b=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.slice.js"),W=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.function.name.js"),S=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.array.from.js"),N=e("./node_modules/react/index.js"),w=e("./node_modules/storybook-addon-designs/esm/index.js"),U=e("./.storybook/StoryPage.tsx"),k=e("./node_modules/classnames/index.js"),O=e.n(k),x=(0,N.createContext)(void 0),c=function(){var E=(0,N.useContext)(x);if(E===void 0)throw new Error("useToggleButtonContext must be used within a ToggleButtonGroupContext");return E},u=e("./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css"),g=e.n(u),m=e("./node_modules/react/jsx-runtime.js"),d=function(E){var h=E.children,V=E.onChange,G=E.selectedValue,F=function(X){var Y=X.selectedValue;V({selectedValue:Y})};return(0,m.jsx)(x.Provider,{value:{onChange:F,selectedValue:G},children:(0,m.jsx)("div",{className:O()(g()["toggle-button-group"]),"data-testid":"toggle-button-group",children:h})})};d.displayName="ToggleButtonGroup";try{d.displayName="ToggleButtonGroup",d.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeHandler"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"]={docgenInfo:d.__docgenInfo,name:"ToggleButtonGroup",path:"src/components/ToggleButtonGroup/ToggleButtonGroup.tsx#ToggleButtonGroup"})}catch(j){}var f=e("./src/components/ToggleButtonGroup/ToggleButton.module.css"),_=e.n(f),y=function(E){var h,V=E.children,G=E.value,F=c(),$=F.onChange,X=F.selectedValue,Y=function(){$({selectedValue:G})};return(0,m.jsx)("button",{"data-testid":"toggle-button",className:O()(_()["toggle-button"],(h={},h[_()["toggle-button--selected"]]=G===X,h)),onClick:Y,type:"button","aria-pressed":G==X,children:V})};y.displayName="ToggleButton";try{y.displayName="ToggleButton",y.__docgenInfo={description:"",displayName:"ToggleButton",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"]={docgenInfo:y.__docgenInfo,name:"ToggleButton",path:"src/components/ToggleButtonGroup/ToggleButton.tsx#ToggleButton"})}catch(j){}function p(j,E){return K(j)||R(j,E)||z(j,E)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(j,E){if(!!j){if(typeof j=="string")return L(j,E);var h=Object.prototype.toString.call(j).slice(8,-1);if(h==="Object"&&j.constructor&&(h=j.constructor.name),h==="Map"||h==="Set")return Array.from(j);if(h==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h))return L(j,E)}}function L(j,E){(E==null||E>j.length)&&(E=j.length);for(var h=0,V=new Array(E);h<E;h++)V[h]=j[h];return V}function R(j,E){var h=j==null?null:typeof Symbol!="undefined"&&j[Symbol.iterator]||j["@@iterator"];if(h!=null){var V=[],G=!0,F=!1,$,X;try{for(h=h.call(j);!(G=($=h.next()).done)&&(V.push($.value),!(E&&V.length===E));G=!0);}catch(Y){F=!0,X=Y}finally{try{!G&&h.return!=null&&h.return()}finally{if(F)throw X}}return V}}function K(j){if(Array.isArray(j))return j}var H=`import React, { useState } from 'react';
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
`,Z={Example:{startLoc:{col:59,line:37},endLoc:{col:1,line:53},startBody:{col:59,line:37},endBody:{col:1,line:53}}},A="";const P={title:"Components/Toggle button group",component:d,parameters:{design:(0,w.vc)([{type:"figma",url:A},{type:"link",url:A}]),docs:{page:function(){return(0,m.jsx)(U.Y,{description:"TODO: Add a description (supports markdown)"})}}}};var M=function(){var E=(0,N.useState)("left"),h=p(E,2),V=h[0],G=h[1],F=function(X){var Y=X.selectedValue;G(Y)};return(0,m.jsxs)(d,{onChange:F,selectedValue:V,children:[(0,m.jsx)(y,{value:"left",children:"Venstre valg"}),(0,m.jsx)(y,{value:"right",children:"H\xF8yre valg"})]})};M.displayName="Template";var D=M.bind({});D.args={},D.parameters={docs:{description:{}}},D.parameters=Object.assign({storySource:{source:`() => {
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
}`}},D.parameters);var Q=["Example"]},"./src/DesignTokens/index.ts":(a,n,e)=>{"use strict";e.d(n,{T:()=>U});var t=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.epsilon.js"),o=e.n(t),s=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.number.constructor.js"),r=e.n(s),l=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.string.replace.js"),T=e.n(l),B=e("./node_modules/@storybook/core-common/node_modules/core-js/modules/es.regexp.exec.js"),I=e.n(B),C=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),i=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json"),b=1.6,W=/(\d*\.?\d+)rem(?=\W|$)/gim,S=function(x){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,u=Math.pow(10,c);return Math.round((x+Number.EPSILON)*u)/u},N=function(x){return typeof x=="string"?x.replace(W,function(c,u){var g=S(u*b);return g+"rem"}):x},w={get:function(x,c){if(c in x){var u=x[c];return typeof u=="object"?new Proxy(u,w):N(u)}}},U=new Proxy(C,w),k=new Proxy(i,w)},"./storybook-init-framework-entry.js":(a,n,e)=>{"use strict";var t=e("./node_modules/@storybook/react/dist/esm/client/index.js")},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),l.push([a.id,`html {
  font-family: var(--font-family-default), sans-serif;
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
`,""]),l.locals={};const T=l},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,`.button---AisLs {
  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: 0;
  font-size: var(--font-size-300);
  text-align: center;
  box-sizing: border-box;
  min-height: 3.6rem; /* Should really use this variable, but its incorrect var(--component-button-size-height) */
  min-width: var(--component-button-size-min-width);
  padding: var(--component-button-space-padding-top)
    var(--component-button-space-padding-x)
    var(--component-button-space-padding-bottom);
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
}

.button---AisLs:focus-visible {
  outline: var(--colors-neutral-900) solid var(--border-width-standard);
  outline-offset: calc(0px - var(--border-width-standard));
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
    var(--component-button-border-width-default);
  outline-offset: calc(var(--component-button-border-width-default) * -1);
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
`,""]),l.locals={button:"button---AisLs","button--primary":"button--primary---cv182","button--secondary":"button--secondary---UO8l7","button--submit":"button--submit---zwseS"};const T=l},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,`.svg---cRnN3 {
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
  font-size: var(--font-size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]),l.locals={svg:"svg---cRnN3",circleTransition:"circleTransition---HmeNt",container:"container---Qm66B",label:"label---jSBSk"};const T=l},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .panel---Cn6JI {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-padding-gap-horizontal-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font-size: var(--component-panel-font-size-body-xs);
    --panel-header-font-size: var(--component-panel-font-size-header-xs);
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .panel---Cn6JI:not(.panel--mobile-layout---ERpxj) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-padding-gap-horizontal-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font-size: var(--component-panel-font-size-body-lg);
    --panel-header-font-size: var(--component-panel-font-size-header-lg);
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
  gap: var(--component-panel-space-text-area-gap-vertical-xs);
}

.panel__header---kehDh {
  margin: 0;
  font-size: var(--panel-header-font-size);
  font-weight: var(--component-panel-weight-heading);
}

.panel__body---NWoqK {
  font-size: var(--panel-body-font-size);
}
`,""]),l.locals={panel:"panel---Cn6JI","panel--mobile-layout":"panel--mobile-layout---ERpxj","panel--has-pointer":"panel--has-pointer---MPH_N",panel__pointer:"panel__pointer---bc7XJ","panel__content-wrapper--info":"panel__content-wrapper--info---r4V2M","panel__pointer--info":"panel__pointer--info---AmxSN","panel__content-wrapper--success":"panel__content-wrapper--success---rjkPt","panel__pointer--success":"panel__pointer--success---elN2A","panel__content-wrapper--warning":"panel__content-wrapper--warning---DvYFB","panel__pointer--warning":"panel__pointer--warning---Y__Z1","panel__content-wrapper":"panel__content-wrapper---SWZ1M","panel__icon-wrapper":"panel__icon-wrapper---VF3Vn",panel__content:"panel__content---BfiKu",panel__header:"panel__header---kehDh",panel__body:"panel__body---NWoqK"};const T=l},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,`.toggle-button---VbrSe {
  border-radius: 0;
  border: none;
  min-width: var(--component-button-size-min-width);
  padding-top: var(--component-toggle-space-padding-top);
  padding-bottom: var(--component-toggle-space-padding-bottom);
  padding-left: var(--component-toggle-space-padding-x);
  padding-right: var(--component-toggle-space-padding-x);
  font-family: inherit;
  background-color: var(--colors-neutral-000);
  color: var(--colors-neutral-700);
  font-size: var(--font-size-300);
}

.toggle-button--selected---eDtcc {
  background-color: var(--component-toggle-active-color-background-default);
  color: var(--component-button-primary-color-text-default);
}

.toggle-button---VbrSe:not(.toggle-button--selected---eDtcc):hover {
  background-color: var(--colors-blue-300);
}
`,""]),l.locals={"toggle-button":"toggle-button---VbrSe","toggle-button--selected":"toggle-button--selected---eDtcc"};const T=l},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>T});var t=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(t),s=e("./node_modules/css-loader/dist/runtime/api.js"),r=e.n(s),l=r()(o());l.push([a.id,`.toggle-button-group---xdsvq {
  border-color: var(--component-button-secondary-color-border-default);
  border-width: var(--border-width-standard);
  border-style: solid;
}
`,""]),l.locals={"toggle-button-group":"toggle-button-group---xdsvq"};const T=l},"./src/components/AppWrapper/AppWrapper.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/AppWrapper/AppWrapper.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src/components/Button/Button.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Button/Button.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src/components/CircularProgress/CircularProgress.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/CircularProgress/CircularProgress.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src/components/Panel/Panel.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/Panel/Panel.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButton.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButton.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css":(a,n,e)=>{var t=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].use[2]!./src/components/ToggleButtonGroup/ToggleButtonGroup.module.css");o=o.__esModule?o.default:o,typeof o=="string"&&(o=[[a.id,o,""]]);var s={};s.insert="head",s.singleton=!1;var r=t(o,s);a.exports=o.locals||{}},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(a,n,e)=>{var t={"./components/Button/Button.stories.tsx":"./src/components/Button/Button.stories.tsx","./components/CircularProgress/CircularProgress.stories.tsx":"./src/components/CircularProgress/CircularProgress.stories.tsx","./components/Panel/Panel.stories.tsx":"./src/components/Panel/Panel.stories.tsx","./components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx":"./src/components/ToggleButtonGroup/ToggleButtonGroup.stories.tsx"};function o(r){var l=s(r);return e(l)}function s(r){if(!e.o(t,r)){var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}return t[r]}o.keys=function(){return Object.keys(t)},o.resolve=s,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(a,n,e)=>{var t={"./components/AppWrapper/AppWrapper.stories.mdx":"./src/components/AppWrapper/AppWrapper.stories.mdx"};function o(r){var l=s(r);return e(l)}function s(r){if(!e.o(t,r)){var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}return t[r]}o.keys=function(){return Object.keys(t)},o.resolve=s,a.exports=o,o.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(a,n,e)=>{"use strict";a=e.nmd(a);var t=e("./node_modules/@storybook/react/dist/esm/client/index.js");(0,t.configure)([e("./docs sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),e("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],a,!1)}},a=>{var n=t=>a(a.s=t);a.O(0,[596],()=>(n("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),n("./node_modules/@storybook/core-server/node_modules/@storybook/core-client/dist/esm/globals/globals.js"),n("./storybook-init-framework-entry.js"),n("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),n("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),n("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),n("./node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js"),n("./.storybook/preview.js-generated-config-entry.js"),n("./generated-stories-entry.cjs")));var e=a.O()}]);
