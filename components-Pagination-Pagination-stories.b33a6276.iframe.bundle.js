(()=>{var re=Object.defineProperty,ie=Object.defineProperties;var de=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var G=(d,n,e)=>n in d?re(d,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[n]=e,S=(d,n)=>{for(var e in n||(n={}))le.call(n,e)&&G(d,e,n[e]);if($)for(var e of $(n))ce.call(n,e)&&G(d,e,n[e]);return d},W=(d,n)=>ie(d,de(n));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[234],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(d,n,e)=>{"use strict";e.d(n,{$4:()=>i.$4,Dx:()=>i.Dx,Uh:()=>i.Uh,X6:()=>i.X6,dk:()=>i.dk,fQ:()=>i.fQ,h_:()=>i.h_});var s=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),i=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(d,n,e)=>{"use strict";e.d(n,{Y:()=>r});var s=e("./node_modules/react/index.js"),i=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),a=e("./src/components/AppWrapper/AppWrapper.tsx"),o=e("./node_modules/react/jsx-runtime.js");const t=({children:g})=>(0,o.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,o.jsxs)("p",{style:{margin:"0"},children:[(0,o.jsx)("strong",{children:"Deprecated:"})," ",g]})});t.displayName="DeprecationWarning";const f=null;try{t.displayName="DeprecationWarning",t.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:t.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(g){}const r=({description:g,deprecationWarning:h})=>(0,o.jsxs)(a.O,{children:[(0,o.jsx)(i.Dx,{}),h&&(0,o.jsx)(t,{children:h}),(0,o.jsx)(i.dk,{children:g}),(0,o.jsx)(i.fQ,{includePrimary:!0}),(0,o.jsx)(i.X6,{children:"Props"}),(0,o.jsx)(i.$4,{story:i.Uh})]});r.displayName="StoryPage";const m=null;try{r.displayName="StoryPage",r.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:r.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(g){}},"./src/components/Pagination/Pagination.stories.tsx":(d,n,e)=>{var h,T,D,C,M,x,P,I;"use strict";e.r(n),e.d(n,{Example:()=>m,__namedExportsOrder:()=>g,default:()=>f,descriptionTexts:()=>t});var s=e("./node_modules/react/index.js"),i=e("./.storybook/StoryPage.tsx"),a=e("./src/components/Pagination/Pagination.tsx"),o=e("./node_modules/react/jsx-runtime.js");const t={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},f={component:a.t,parameters:{docs:{page:()=>(0,o.jsx)(i.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{}},r=j=>{const[E,O]=(0,s.useState)(5),[u,N]=(0,s.useState)(0),K=b=>{O(parseInt(b.target.value,10)),N(0)};return(0,o.jsx)(a.t,W(S({},j),{rowsPerPage:E,currentPage:u,setCurrentPage:N,onRowsPerPageChange:K,descriptionTexts:t}))};r.displayName="Template";const m=r.bind({});m.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},m.parameters={docs:{description:{story:""}}},t.parameters=W(S({},t.parameters),{docs:W(S({},(h=t.parameters)==null?void 0:h.docs),{source:S({originalSource:`{
  rowsPerPage: 'Rader per side',
  of: 'av',
  navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
  previousPage: 'Forrige side i tabell',
  nextPage: 'Neste side i tabell',
  navigateLastPage: 'Naviger til siste side i tabell'
}`},(D=(T=t.parameters)==null?void 0:T.docs)==null?void 0:D.source),description:S({story:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`},(M=(C=t.parameters)==null?void 0:C.docs)==null?void 0:M.description)})}),m.parameters=W(S({},m.parameters),{docs:W(S({},(x=m.parameters)==null?void 0:x.docs),{source:S({originalSource:`args => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return <Pagination {...args} rowsPerPage={rowsPerPage} currentPage={page} setCurrentPage={setPage} onRowsPerPageChange={handleChangeRowsPerPage} descriptionTexts={descriptionTexts} />;
}`},(I=(P=m.parameters)==null?void 0:P.docs)==null?void 0:I.source)})});const g=["descriptionTexts","Example"];try{t.displayName="descriptionTexts",t.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:t.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(j){}},"./src/DesignTokens/index.ts":(d,n,e)=>{"use strict";e.d(n,{T:()=>s});var s=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),i=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/AppWrapper/AppWrapper.tsx":(d,n,e)=>{"use strict";e.d(n,{O:()=>O});var s=e("./node_modules/react/index.js"),i=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),a=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),t=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(t),r=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(r),g=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),h=e.n(g),T=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),D=e.n(T),C=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(C),x=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),P={};P.styleTagTransform=M(),P.setAttributes=h(),P.insert=m().bind(null,"head"),P.domAPI=f(),P.insertStyleElement=D();var I=o()(x.Z,P);const j=x.Z&&x.Z.locals?x.Z.locals:void 0;var E=e("./node_modules/react/jsx-runtime.js");const O=({children:u})=>(0,E.jsx)("div",{children:u});O.displayName="AppWrapper";try{O.displayName="AppWrapper",O.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:O.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(u){}},"./src/components/Pagination/Pagination.tsx":(d,n,e)=>{"use strict";e.d(n,{t:()=>B});var s=e("./node_modules/react/index.js"),i=e("./node_modules/classnames/index.js"),a=e.n(i),o=e("./src/hooks/useMediaQuery.ts"),t=e("./src/DesignTokens/index.ts"),f=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),r=e.n(f),m=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),g=e.n(m),h=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(h),D=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),C=e.n(D),M=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(M),P=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=e.n(P),j=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css"),E={};E.styleTagTransform=I(),E.setAttributes=C(),E.insert=T().bind(null,"head"),E.domAPI=g(),E.insertStyleElement=x();var O=r()(j.Z,E);const u=j.Z&&j.Z.locals?j.Z.locals:void 0;var N,K;function b(){return b=Object.assign?Object.assign.bind():function(c){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(c[v]=p[v])}return c},b.apply(this,arguments)}var J=function(l){return s.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},l),N||(N=s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),K||(K=s.createElement("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})))},z,Y;function U(){return U=Object.assign?Object.assign.bind():function(c){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(c[v]=p[v])}return c},U.apply(this,arguments)}var k=function(l){return s.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},l),z||(z=s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Y||(Y=s.createElement("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"})))},V;function Z(){return Z=Object.assign?Object.assign.bind():function(c){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(c[v]=p[v])}return c},Z.apply(this,arguments)}var q=function(l){return s.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},l),V||(V=s.createElement("path",{d:"M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"})))},X,H;function F(){return F=Object.assign?Object.assign.bind():function(c){for(var l=1;l<arguments.length;l++){var p=arguments[l];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(c[v]=p[v])}return c},F.apply(this,arguments)}var ee=function(l){return s.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",height:24,width:24},l),X||(X=s.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),H||(H=s.createElement("path",{d:"M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"})))},_=e("./node_modules/react/jsx-runtime.js");const B=({numberOfRows:c,rowsPerPageOptions:l,rowsPerPage:p,onRowsPerPageChange:v,currentPage:y,setCurrentPage:w,descriptionTexts:L})=>{const te=(0,o.a)(`(max-width: ${t.T.cLy})`),[R,Q]=(0,s.useState)(1);(0,s.useEffect)(()=>{c<p?Q(1):Q(Math.ceil(c/p))},[p,c]);const ne=()=>{y<R-1&&w(y+1)},se=()=>{y>0&&w(y-1)},ae=()=>{const A=1+y*p,oe=p*(y+1)>c?c:p*(y+1);return(0,_.jsx)("span",{className:a()(u["description-text"]),"data-testid":"description-text",children:`${A}-${oe} ${L.of} ${c}`})};return(0,_.jsxs)("div",{className:a()(u["pagination-wrapper"]),children:[(0,_.jsxs)("div",{className:a()(u["pagination-wrapper-row"]),children:[(0,_.jsx)("span",{style:{marginRight:"26px"},id:"number-of-rows-select","aria-hidden":"true",children:!te&&L.rowsPerPage}),(0,_.jsx)("select",{className:a()(u["select-pagination"]),value:p,onChange:A=>v(A),"aria-labelledby":"number-of-rows-select",children:l.map(A=>(0,_.jsx)("option",{value:A,children:A},A))}),ae()]}),(0,_.jsxs)("div",{className:a()(u["pagination-wrapper-row"]),children:[(0,_.jsx)("button",{className:a()(u["icon-button"]),onClick:()=>w(0),disabled:y===0,"aria-label":L.navigateFirstPage,"data-testid":"first-page-icon",children:(0,_.jsx)(q,{className:a()(u["pagination-icon"],{[u["pagination-icon--disabled"]]:y===0})})}),(0,_.jsx)("button",{className:a()(u["icon-button"]),onClick:()=>se(),disabled:y===0,"aria-label":L.previousPage,"data-testid":"pagination-previous-icon",children:(0,_.jsx)(k,{className:a()(u["pagination-icon"],{[u["pagination-icon--disabled"]]:y===0})})}),(0,_.jsx)("button",{className:a()(u["icon-button"]),onClick:()=>ne(),disabled:y===R-1,"aria-label":L.nextPage,"data-testid":"pagination-next-icon",children:(0,_.jsx)(J,{className:a()(u["pagination-icon"],{[u["pagination-icon--disabled"]]:y===R-1})})}),(0,_.jsx)("button",{className:a()(u["icon-button"]),onClick:()=>w(R-1),disabled:y===R-1,"aria-label":L.navigateLastPage,children:(0,_.jsx)(ee,{className:a()(u["pagination-icon"],{[u["pagination-icon--disabled"]]:y===R-1})})})]})]})};B.displayName="Pagination";try{B.displayName="Pagination",B.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfRows:{defaultValue:null,description:"",name:"numberOfRows",required:!0,type:{name:"number"}},rowsPerPageOptions:{defaultValue:null,description:"",name:"rowsPerPageOptions",required:!0,type:{name:"number[]"}},rowsPerPage:{defaultValue:null,description:"",name:"rowsPerPage",required:!0,type:{name:"number"}},onRowsPerPageChange:{defaultValue:null,description:"",name:"onRowsPerPageChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"",name:"setCurrentPage",required:!0,type:{name:"(page: number) => void"}},descriptionTexts:{defaultValue:null,description:"",name:"descriptionTexts",required:!0,type:{name:"DescriptionText"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:B.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(c){}},"./src/hooks/useMediaQuery.ts":(d,n,e)=>{"use strict";e.d(n,{a:()=>i});var s=e("./node_modules/react/index.js");function i(a){const o=m=>{var g;return(g=window==null?void 0:window.matchMedia(m).matches)!=null?g:!1},[t,f]=(0,s.useState)(o(a)),r=()=>{f(o(a))};return(0,s.useEffect)(()=>{const m=window.matchMedia(a);return r(),m.addEventListener("change",r),()=>m.removeEventListener("change",r)},[a]),t}},"./node_modules/classnames/index.js":(d,n)=>{var e,s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty,a="[native code]";function o(){for(var t=[],f=0;f<arguments.length;f++){var r=arguments[f];if(r){var m=typeof r;if(m==="string"||m==="number")t.push(r);else if(Array.isArray(r)){if(r.length){var g=o.apply(null,r);g&&t.push(g)}}else if(m==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var h in r)i.call(r,h)&&r[h]&&t.push(h)}}}return t.join(" ")}d.exports?(o.default=o,d.exports=o):(e=[],s=function(){return o}.apply(n,e),s!==void 0&&(d.exports=s))})()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(d,n,e)=>{"use strict";e.d(n,{Z:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(i());t.push([d.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),t.push([d.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),t.locals={};const f=t},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Pagination/Pagination.module.css":(d,n,e)=>{"use strict";e.d(n,{Z:()=>f});var s=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),i=e.n(s),a=e("./node_modules/css-loader/dist/runtime/api.js"),o=e.n(a),t=o()(i());t.push([d.id,`.iNvyI9HjZcavsXF2LZEc {
  fill: rgb(0, 0, 0);
}

.iNvyI9HjZcavsXF2LZEc:not(:last-child) {
  margin-right: 20px;
}

.iNvyI9HjZcavsXF2LZEc:hover {
  cursor: pointer;
}

.uO3Mm0CgTGtlc3fI7ntm {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.v7KJE2UIrf5DvvBNwBuN {
  display: flex;
  align-items: center;
  justify-content: right;
}

.AiFnUaeILzAaVLcrDw7q {
  background-color: transparent;
  margin: 5px;
  border: none;
}

.ziZv_cgLDZkvYEKuqyvw {
  margin-right: 64px;
}

.ucKkCT0wxLeGmdVlSpTa {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .v7KJE2UIrf5DvvBNwBuN {
    display: flex;
    flex-direction: column;
  }
  .iD9lOT6tzjbnlNSNMe34 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .ziZv_cgLDZkvYEKuqyvw {
    margin-top: 10px;
    margin-right: 30px;
  }
  .ucKkCT0wxLeGmdVlSpTa {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`,""]),t.locals={"pagination-icon":"iNvyI9HjZcavsXF2LZEc","pagination-icon--disabled":"uO3Mm0CgTGtlc3fI7ntm","pagination-wrapper":"v7KJE2UIrf5DvvBNwBuN","icon-button":"AiFnUaeILzAaVLcrDw7q","description-text":"ziZv_cgLDZkvYEKuqyvw","select-pagination":"ucKkCT0wxLeGmdVlSpTa","pagination-wrapper-row":"iD9lOT6tzjbnlNSNMe34"};const f=t}}]);})();
