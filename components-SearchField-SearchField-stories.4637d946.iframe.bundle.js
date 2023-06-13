(()=>{var ee=Object.defineProperty,re=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var N=(n,r,e)=>r in n?ee(n,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[r]=e,j=(n,r)=>{for(var e in r||(r={}))V.call(r,e)&&N(n,e,r[e]);if(C)for(var e of C(r))Y.call(r,e)&&N(n,e,r[e]);return n},M=(n,r)=>re(n,oe(r));var H=(n,r)=>{var e={};for(var a in n)V.call(n,a)&&r.indexOf(a)<0&&(e[a]=n[a]);if(n!=null&&C)for(var a of C(n))r.indexOf(a)<0&&Y.call(n,a)&&(e[a]=n[a]);return e};(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[446],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(n,r,e)=>{"use strict";e.d(r,{$4:()=>d.$4,Dx:()=>d.Dx,Uh:()=>d.Uh,X6:()=>d.X6,dk:()=>d.dk,fQ:()=>d.fQ,h_:()=>d.h_});var a=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),d=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(n,r,e)=>{"use strict";e.d(r,{Y:()=>l});var a=e("./node_modules/react/index.js"),d=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),c=e("./src/components/AppWrapper/AppWrapper.tsx"),t=e("./node_modules/react/jsx-runtime.js");const s=({children:p})=>(0,t.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,t.jsxs)("p",{style:{margin:"0"},children:[(0,t.jsx)("strong",{children:"Deprecated:"})," ",p]})});s.displayName="DeprecationWarning";const i=null;try{s.displayName="DeprecationWarning",s.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:s.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(p){}const l=({description:p,deprecationWarning:_})=>(0,t.jsxs)(c.O,{children:[(0,t.jsx)(d.Dx,{}),_&&(0,t.jsx)(s,{children:_}),(0,t.jsx)(d.dk,{children:p}),(0,t.jsx)(d.fQ,{includePrimary:!0}),(0,t.jsx)(d.X6,{children:"Props"}),(0,t.jsx)(d.$4,{story:d.Uh})]});l.displayName="StoryPage";const m=null;try{l.displayName="StoryPage",l.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:l.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(p){}},"./src/components/SearchField/SearchField.stories.tsx":(n,r,e)=>{var h,S,E;"use strict";e.r(r),e.d(r,{Example:()=>p,__namedExportsOrder:()=>_,default:()=>l});var a=e("./node_modules/react/index.js"),d=e("@storybook/client-api"),c=e.n(d),t=e("./.storybook/StoryPage.tsx"),s=e("./src/components/SearchField/SearchField.tsx"),i=e("./node_modules/react/jsx-runtime.js");const l={component:s.U,parameters:{docs:{page:()=>(0,i.jsx)(t.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}},m=W=>{const[{disabled:b}]=(0,d.useArgs)();return(0,i.jsx)(s.U,j({disabled:b},W))};m.displayName="Template";const p=m.bind({});p.args={},p.parameters={docs:{description:{story:"Search field."}}},p.parameters=M(j({},p.parameters),{docs:M(j({},(h=p.parameters)==null?void 0:h.docs),{source:j({originalSource:`args => {
  const [{
    disabled
  }] = useArgs();
  return <SearchField disabled={disabled} {...args} />;
}`},(E=(S=p.parameters)==null?void 0:S.docs)==null?void 0:E.source)})});const _=["Example"]},"./src/components/AppWrapper/AppWrapper.tsx":(n,r,e)=>{"use strict";e.d(r,{O:()=>A});var a=e("./node_modules/react/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),t=e.n(c),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(s),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(l),p=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(p),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(h),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),W=e.n(E),b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),v={};v.styleTagTransform=W(),v.setAttributes=_(),v.insert=m().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=S();var k=t()(b.Z,v);const K=b.Z&&b.Z.locals?b.Z.locals:void 0;var B=e("./node_modules/react/jsx-runtime.js");const A=({children:x})=>(0,B.jsx)("div",{children:x});A.displayName="AppWrapper";try{A.displayName="AppWrapper",A.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:A.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(x){}},"./src/components/SearchField/SearchField.tsx":(n,r,e)=>{"use strict";e.d(r,{U:()=>i});var a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),c=e.n(d),t=e("./src/components/_InputWrapper/index.ts"),s=e("./node_modules/react/jsx-runtime.js");const i=S=>{var E=S,{id:l,onChange:m,disabled:p=!1,label:_}=E,h=H(E,["id","onChange","disabled","label"]);return(0,s.jsx)(t.SP,{disabled:p,isSearch:!0,label:_,inputRenderer:({className:W,variant:b})=>{const v={id:l,disabled:p,className:c()(W)};return(0,s.jsx)("input",M(j(j({},v),h),{"data-testid":`${l}-${b}`,onChange:m}))}})};i.displayName="SearchField";try{i.displayName="SearchField",i.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:i.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(l){}},"./src/components/_InputWrapper/index.ts":(n,r,e)=>{"use strict";e.d(r,{SP:()=>R});var a=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),c=e.n(d);let t=function(o){return o.Default="default",o.Error="error",o.Disabled="disabled",o.ReadOnlyInfo="readonly-info",o.ReadOnlyConfirm="readonly-confirm",o}({}),s=function(o){return o.ReadOnlyInfo="readonly-info",o.ReadOnlyConfirm="readonly-confirm",o}({}),i=function(o){return o.None="none",o.Error="error",o.Search="search",o}({});const l=({readOnly:o=!1,disabled:u=!1,isValid:y=!0,isSearch:f=!1}={})=>{let O=i.None;return f&&(O=i.Search),u?{variant:t.Disabled,iconVariant:O}:o===!0||o===s.ReadOnlyInfo?{variant:t.ReadOnlyInfo,iconVariant:O}:o===s.ReadOnlyConfirm?{variant:t.ReadOnlyConfirm,iconVariant:O}:y===!1?{variant:t.Error,iconVariant:i.Error}:{variant:t.Default,iconVariant:O}};var m;function p(){return p=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var f in y)Object.prototype.hasOwnProperty.call(y,f)&&(o[f]=y[f])}return o},p.apply(this,arguments)}var _=function(u){return a.createElement("svg",p({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),m||(m=a.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},h;function S(){return S=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var f in y)Object.prototype.hasOwnProperty.call(y,f)&&(o[f]=y[f])}return o},S.apply(this,arguments)}var E=function(u){return a.createElement("svg",S({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u),h||(h=a.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},W=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(W),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),k=e.n(v),K=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(K),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(A),Q=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),Z=e.n(Q),X=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),w=e.n(X),T=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),P={};P.styleTagTransform=w(),P.setAttributes=x(),P.insert=B().bind(null,"head"),P.domAPI=k(),P.insertStyleElement=Z();var ne=b()(T.Z,P);const g=T.Z&&T.Z.locals?T.Z.locals:void 0;var I=e("./node_modules/react/jsx-runtime.js");const D=({variant:o,disabled:u=!1})=>o===i.Error?(0,I.jsx)("div",{className:g.InputWrapper__icon,children:(0,I.jsx)(_,{"data-testid":"input-icon-error"})}):o===i.Search?(0,I.jsx)("div",{className:c()(g.InputWrapper__icon,{[g["InputWrapper__icon--disabled"]]:u}),children:(0,I.jsx)(E,{"data-testid":"input-icon-search"})}):null;try{D.displayName="Icon",D.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:D.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(o){}const R=({isValid:o=!0,disabled:u=!1,readOnly:y=!1,isSearch:f=!1,label:O,inputId:L,inputRenderer:z,noFocusEffect:J,noPadding:G})=>{const $=(0,a.useId)(),F=L!=null?L:$,{variant:U,iconVariant:q}=l({readOnly:y,disabled:u,isValid:o,isSearch:f});return(0,I.jsxs)(I.Fragment,{children:[O&&(0,I.jsx)("label",{"data-testid":"InputWrapper-label",className:c()(g.InputWrapper__label),htmlFor:F,children:O}),(0,I.jsxs)("div",{"data-testid":"InputWrapper",className:c()(g.InputWrapper,g[`InputWrapper--${U}`],{[g["InputWrapper--search"]]:f,[g["InputWrapper--with-focus-effect"]]:!J,[g["InputWrapper--with-padding"]]:!G}),children:[(0,I.jsx)(D,{variant:q,disabled:u}),z({className:g.InputWrapper__field,inputId:F,variant:U})]})]})};try{R.displayName="InputWrapper",R.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:R.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(o){}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var a=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),t=e.n(c),s=t()(d());s.push([n.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),s.push([n.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),s.locals={};const i=s},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(n,r,e)=>{"use strict";e.d(r,{Z:()=>i});var a=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(a),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),t=e.n(c),s=t()(d());s.push([n.id,`.J_oifBE02kX6PoaOp4QA {
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

.DMF5FvQohU9gVZ3eJNfc:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.IokYkh5JAzht61EML_BQ:hover {
  --border-color: var(--component-input-color-border-hover);
}

.iu8HJLGYcrp6hn0YOsHH {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.iu8HJLGYcrp6hn0YOsHH:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.V_5HBOKFHdzE3P1wtFt4 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.AizuCtsiP1u50HO7mbXH {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.DBa44CXClZRnrDaQH9UI {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.CvAH7S5R8iTfQsgWnY93 {
  flex-direction: row-reverse;
}

.AxmLRWLSugjObxQav3ms {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.Asejtdv1WuzLj_4QuG5g {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.sQ_FIvk3IiwyDTpom9MP {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.ES3MtBMPWAqYfrVVMb77 {
  opacity: 60%;
}

.N628BMGkP8pTDMIUWv15 {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`,""]),s.locals={InputWrapper:"J_oifBE02kX6PoaOp4QA","InputWrapper--with-focus-effect":"DMF5FvQohU9gVZ3eJNfc","InputWrapper--default":"IokYkh5JAzht61EML_BQ","InputWrapper--error":"iu8HJLGYcrp6hn0YOsHH","InputWrapper--disabled":"V_5HBOKFHdzE3P1wtFt4","InputWrapper--readonly-info":"AizuCtsiP1u50HO7mbXH","InputWrapper--readonly-confirm":"DBa44CXClZRnrDaQH9UI","InputWrapper--search":"CvAH7S5R8iTfQsgWnY93","InputWrapper--with-padding":"AxmLRWLSugjObxQav3ms",InputWrapper__field:"Asejtdv1WuzLj_4QuG5g",InputWrapper__icon:"sQ_FIvk3IiwyDTpom9MP","InputWrapper__icon--disabled":"ES3MtBMPWAqYfrVVMb77",InputWrapper__label:"N628BMGkP8pTDMIUWv15"};const i=s},"./node_modules/classnames/index.js":(n,r)=>{var e,a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,c="[native code]";function t(){for(var s=[],i=0;i<arguments.length;i++){var l=arguments[i];if(l){var m=typeof l;if(m==="string"||m==="number")s.push(l);else if(Array.isArray(l)){if(l.length){var p=t.apply(null,l);p&&s.push(p)}}else if(m==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){s.push(l.toString());continue}for(var _ in l)d.call(l,_)&&l[_]&&s.push(_)}}}return s.join(" ")}n.exports?(t.default=t,n.exports=t):(e=[],a=function(){return t}.apply(r,e),a!==void 0&&(n.exports=a))})()}}]);})();
