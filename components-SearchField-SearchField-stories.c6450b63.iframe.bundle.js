(()=>{var ee=Object.defineProperty,re=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var V=(t,r,e)=>r in t?ee(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,P=(t,r)=>{for(var e in r||(r={}))Y.call(r,e)&&V(t,e,r[e]);if(C)for(var e of C(r))H.call(r,e)&&V(t,e,r[e]);return t},M=(t,r)=>re(t,ne(r));var Q=(t,r)=>{var e={};for(var s in t)Y.call(t,s)&&r.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&C)for(var s of C(t))r.indexOf(s)<0&&H.call(t,s)&&(e[s]=t[s]);return e};(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[446],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(t,r,e)=>{"use strict";e.d(r,{$4:()=>d.$4,Dx:()=>d.Dx,Uh:()=>d.Uh,X6:()=>d.X6,dk:()=>d.dk,fQ:()=>d.fQ,h_:()=>d.h_});var s=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),d=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(t,r,e)=>{"use strict";e.d(r,{Y:()=>l});var s=e("./node_modules/react/index.js"),d=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),u=e("./src/components/AppWrapper/AppWrapper.tsx"),o=e("./node_modules/react/jsx-runtime.js");const a=({children:p})=>(0,o.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,o.jsxs)("p",{style:{margin:"0"},children:[(0,o.jsx)("strong",{children:"Deprecated:"})," ",p]})});a.displayName="DeprecationWarning";const i=null;try{a.displayName="DeprecationWarning",a.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:a.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(p){}const l=({description:p,deprecationWarning:f})=>(0,o.jsxs)(u.O,{children:[(0,o.jsx)(d.Dx,{}),f&&(0,o.jsx)(a,{children:f}),(0,o.jsx)(d.dk,{children:p}),(0,o.jsx)(d.fQ,{includePrimary:!0}),(0,o.jsx)(d.X6,{children:"Props"}),(0,o.jsx)(d.$4,{story:d.Uh})]});l.displayName="StoryPage";const m=null;try{l.displayName="StoryPage",l.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:l.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(p){}},"./src/components/SearchField/SearchField.stories.tsx":(t,r,e)=>{var S,E,I;"use strict";e.r(r),e.d(r,{Example:()=>p,__namedExportsOrder:()=>f,default:()=>l});var s=e("./node_modules/react/index.js"),d=e("@storybook/client-api"),u=e.n(d),o=e("./.storybook/StoryPage.tsx"),a=e("./src/components/SearchField/SearchField.tsx"),i=e("./node_modules/react/jsx-runtime.js");const l={component:a.U,parameters:{docs:{page:()=>(0,i.jsx)(o.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{id:"searchfield-story",disabled:!1,label:"Label"},argTypes:{onChange:{action:"Value changed, perform search"}}},m=A=>{const[{disabled:y}]=(0,d.useArgs)();return(0,i.jsx)(a.U,P({disabled:y},A))};m.displayName="Template";const p=m.bind({});p.args={},p.parameters={docs:{description:{story:"Search field."}}},p.parameters=M(P({},p.parameters),{docs:M(P({},(S=p.parameters)==null?void 0:S.docs),{source:P({originalSource:`args => {
  const [{
    disabled
  }] = useArgs();
  return <SearchField disabled={disabled} {...args} />;
}`},(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source)})});const f=["Example"]},"./src/components/AppWrapper/AppWrapper.tsx":(t,r,e)=>{"use strict";e.d(r,{O:()=>j});var s=e("./node_modules/react/index.js"),d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),u=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(u),a=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(a),l=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(l),p=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(p),S=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=e.n(S),I=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(I),y=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),g={};g.styleTagTransform=A(),g.setAttributes=f(),g.insert=m().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=E();var K=o()(y.Z,g);const F=y.Z&&y.Z.locals?y.Z.locals:void 0;var B=e("./node_modules/react/jsx-runtime.js");const j=({children:b})=>(0,B.jsx)("div",{children:b});j.displayName="AppWrapper";try{j.displayName="AppWrapper",j.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:j.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(b){}},"./src/components/SearchField/SearchField.tsx":(t,r,e)=>{"use strict";e.d(r,{U:()=>i});var s=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),u=e.n(d),o=e("./src/components/_InputWrapper/index.ts"),a=e("./node_modules/react/jsx-runtime.js");const i=E=>{var I=E,{id:l,onChange:m,disabled:p=!1,label:f}=I,S=Q(I,["id","onChange","disabled","label"]);return(0,a.jsx)(o.SP,{disabled:p,isSearch:!0,label:f,inputRenderer:({className:A,variant:y})=>{const g={id:l,disabled:p,className:u()(A)};return(0,a.jsx)("input",M(P(P({},g),S),{"data-testid":`${l}-${y}`,onChange:m}))}})};i.displayName="SearchField";try{i.displayName="SearchField",i.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:i.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(l){}},"./src/components/_InputWrapper/index.ts":(t,r,e)=>{"use strict";e.d(r,{SP:()=>R});var s=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),u=e.n(d);let o=function(n){return n.Default="default",n.Error="error",n.Disabled="disabled",n.ReadOnlyInfo="readonly-info",n.ReadOnlyConfirm="readonly-confirm",n}({}),a=function(n){return n.ReadOnlyInfo="readonly-info",n.ReadOnlyConfirm="readonly-confirm",n}({}),i=function(n){return n.None="none",n.Error="error",n.Search="search",n}({});const l=({readOnly:n=!1,disabled:c=!1,isValid:v=!0,isSearch:_=!1}={})=>{let W=i.None;return _&&(W=i.Search),c?{variant:o.Disabled,iconVariant:W}:n===!0||n===a.ReadOnlyInfo?{variant:o.ReadOnlyInfo,iconVariant:W}:n===a.ReadOnlyConfirm?{variant:o.ReadOnlyConfirm,iconVariant:W}:v===!1?{variant:o.Error,iconVariant:i.Error}:{variant:o.Default,iconVariant:W}};var m;function p(){return p=Object.assign?Object.assign.bind():function(n){for(var c=1;c<arguments.length;c++){var v=arguments[c];for(var _ in v)Object.prototype.hasOwnProperty.call(v,_)&&(n[_]=v[_])}return n},p.apply(this,arguments)}var f=function(c){return s.createElement("svg",p({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),m||(m=s.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},S;function E(){return E=Object.assign?Object.assign.bind():function(n){for(var c=1;c<arguments.length;c++){var v=arguments[c];for(var _ in v)Object.prototype.hasOwnProperty.call(v,_)&&(n[_]=v[_])}return n},E.apply(this,arguments)}var I=function(c){return s.createElement("svg",E({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c),S||(S=s.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},A=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),y=e.n(A),g=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),K=e.n(g),F=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),B=e.n(F),j=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),b=e.n(j),Z=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),X=e.n(Z),z=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),J=e.n(z),T=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),x={};x.styleTagTransform=J(),x.setAttributes=b(),x.insert=B().bind(null,"head"),x.domAPI=K(),x.insertStyleElement=X();var te=y()(T.Z,x);const h=T.Z&&T.Z.locals?T.Z.locals:void 0;var O=e("./node_modules/react/jsx-runtime.js");const D=({variant:n,disabled:c=!1})=>n===i.Error?(0,O.jsx)("div",{className:h.InputWrapper__icon,children:(0,O.jsx)(f,{"data-testid":"input-icon-error"})}):n===i.Search?(0,O.jsx)("div",{className:u()(h.InputWrapper__icon,{[h["InputWrapper__icon--disabled"]]:c}),children:(0,O.jsx)(I,{"data-testid":"input-icon-search"})}):null;try{D.displayName="Icon",D.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:D.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(n){}const R=({isValid:n=!0,disabled:c=!1,readOnly:v=!1,isSearch:_=!1,label:W,inputId:L,inputRenderer:G,noFocusEffect:$,noPadding:k})=>{const w=(0,s.useId)(),U=L!=null?L:w,{variant:N,iconVariant:q}=l({readOnly:v,disabled:c,isValid:n,isSearch:_});return(0,O.jsxs)(O.Fragment,{children:[W&&(0,O.jsx)("label",{"data-testid":"InputWrapper-label",className:u()(h.InputWrapper__label),htmlFor:U,children:W}),(0,O.jsxs)("div",{"data-testid":"InputWrapper",className:u()(h.InputWrapper,h[`InputWrapper--${N}`],{[h["InputWrapper--search"]]:_,[h["InputWrapper--with-focus-effect"]]:!$,[h["InputWrapper--with-padding"]]:!k}),children:[(0,O.jsx)(D,{variant:q,disabled:c}),G({className:h.InputWrapper__field,inputId:U,variant:N})]})]})};try{R.displayName="InputWrapper",R.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:R.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(n){}},"./node_modules/classnames/index.js":(t,r)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var d={}.hasOwnProperty,u="[native code]";function o(){for(var a=[],i=0;i<arguments.length;i++){var l=arguments[i];if(l){var m=typeof l;if(m==="string"||m==="number")a.push(l);else if(Array.isArray(l)){if(l.length){var p=o.apply(null,l);p&&a.push(p)}}else if(m==="object"){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){a.push(l.toString());continue}for(var f in l)d.call(l,f)&&l[f]&&a.push(f)}}}return a.join(" ")}t.exports?(o.default=o,t.exports=o):(e=[],s=function(){return o}.apply(r,e),s!==void 0&&(t.exports=s))})()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(t,r,e)=>{"use strict";e.d(r,{Z:()=>i});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),u=e("./node_modules/css-loader/dist/runtime/api.js"),o=e.n(u),a=o()(d());a.push([t.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),a.push([t.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),a.locals={};const i=a},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(t,r,e)=>{"use strict";e.d(r,{Z:()=>i});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(s),u=e("./node_modules/css-loader/dist/runtime/api.js"),o=e.n(u),a=o()(d());a.push([t.id,`.J_oifBE02kX6PoaOp4QA {
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
`,""]),a.locals={InputWrapper:"J_oifBE02kX6PoaOp4QA","InputWrapper--with-focus-effect":"DMF5FvQohU9gVZ3eJNfc","InputWrapper--default":"IokYkh5JAzht61EML_BQ","InputWrapper--error":"iu8HJLGYcrp6hn0YOsHH","InputWrapper--disabled":"V_5HBOKFHdzE3P1wtFt4","InputWrapper--readonly-info":"AizuCtsiP1u50HO7mbXH","InputWrapper--readonly-confirm":"DBa44CXClZRnrDaQH9UI","InputWrapper--search":"CvAH7S5R8iTfQsgWnY93","InputWrapper--with-padding":"AxmLRWLSugjObxQav3ms",InputWrapper__field:"Asejtdv1WuzLj_4QuG5g",InputWrapper__icon:"sQ_FIvk3IiwyDTpom9MP","InputWrapper__icon--disabled":"ES3MtBMPWAqYfrVVMb77",InputWrapper__label:"N628BMGkP8pTDMIUWv15"};const i=a}}]);})();
