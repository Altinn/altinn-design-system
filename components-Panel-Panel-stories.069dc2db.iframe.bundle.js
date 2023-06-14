(()=>{var q=Object.defineProperty,ee=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var w=(r,t,e)=>t in r?q(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,v=(r,t)=>{for(var e in t||(t={}))te.call(t,e)&&w(r,e,t[e]);if(N)for(var e of N(t))se.call(t,e)&&w(r,e,t[e]);return r},P=(r,t)=>ee(r,ne(t));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[714],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,t,e)=>{"use strict";e.d(t,{$4:()=>a.$4,Dx:()=>a.Dx,Uh:()=>a.Uh,X6:()=>a.X6,dk:()=>a.dk,fQ:()=>a.fQ,h_:()=>a.h_});var d=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),a=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(r,t,e)=>{"use strict";e.d(t,{Y:()=>n});var d=e("./node_modules/react/index.js"),a=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),p=e("./src/components/AppWrapper/AppWrapper.tsx"),s=e("./node_modules/react/jsx-runtime.js");const o=({children:l})=>(0,s.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,s.jsxs)("p",{style:{margin:"0"},children:[(0,s.jsx)("strong",{children:"Deprecated:"})," ",l]})});o.displayName="DeprecationWarning";const c=null;try{o.displayName="DeprecationWarning",o.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:o.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(l){}const n=({description:l,deprecationWarning:u})=>(0,s.jsxs)(p.O,{children:[(0,s.jsx)(a.Dx,{}),u&&(0,s.jsx)(o,{children:u}),(0,s.jsx)(a.dk,{children:l}),(0,s.jsx)(a.fQ,{includePrimary:!0}),(0,s.jsx)(a.X6,{children:"Props"}),(0,s.jsx)(a.$4,{story:a.Uh})]});n.displayName="StoryPage";const m=null;try{n.displayName="StoryPage",n.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:n.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(l){}},"./src/components/Panel/Panel.stories.tsx":(r,t,e)=>{var A,T,j,E,f,R,W,I,y,O,B,L;"use strict";e.r(t),e.d(t,{Error:()=>u,Info:()=>m,Success:()=>n,Warning:()=>l,__namedExportsOrder:()=>D,default:()=>o});var d=e("./node_modules/react/index.js"),a=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Panel/Panel.tsx"),s=e("./node_modules/react/jsx-runtime.js");const o={component:p.s,parameters:{docs:{page:()=>(0,s.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{title:"Paneltittel",children:(0,s.jsx)("div",{children:"Her kommer litt informasjon"})}},c=Z=>(0,s.jsx)(p.s,v({},Z));c.displayName="Template";const n=c.bind({});n.args={variant:p.c.Success},n.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};const m=c.bind({});m.parameters={docs:{description:{story:"Infobeskrivelse"}}};const l=c.bind({});l.args={variant:p.c.Warning},l.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};const u=c.bind({});u.args={variant:p.c.Error},u.parameters={docs:{description:{story:"Feilbeskrivelse"}}},n.parameters=P(v({},n.parameters),{docs:P(v({},(A=n.parameters)==null?void 0:A.docs),{source:v({originalSource:"args => <Panel {...args} />"},(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source)})}),m.parameters=P(v({},m.parameters),{docs:P(v({},(E=m.parameters)==null?void 0:E.docs),{source:v({originalSource:"args => <Panel {...args} />"},(R=(f=m.parameters)==null?void 0:f.docs)==null?void 0:R.source)})}),l.parameters=P(v({},l.parameters),{docs:P(v({},(W=l.parameters)==null?void 0:W.docs),{source:v({originalSource:"args => <Panel {...args} />"},(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source)})}),u.parameters=P(v({},u.parameters),{docs:P(v({},(O=u.parameters)==null?void 0:O.docs),{source:v({originalSource:"args => <Panel {...args} />"},(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source)})});const D=["Success","Info","Warning","Error"]},"./src/DesignTokens/index.ts":(r,t,e)=>{"use strict";e.d(t,{T:()=>d});var d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/AppWrapper/AppWrapper.tsx":(r,t,e)=>{"use strict";e.d(t,{O:()=>y});var d=e("./node_modules/react/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),p=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(p),o=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(o),n=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),m=e.n(n),l=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),u=e.n(l),D=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(D),T=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),j=e.n(T),E=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),f={};f.styleTagTransform=j(),f.setAttributes=u(),f.insert=m().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=A();var R=s()(E.Z,f);const W=E.Z&&E.Z.locals?E.Z.locals:void 0;var I=e("./node_modules/react/jsx-runtime.js");const y=({children:O})=>(0,I.jsx)("div",{children:O});y.displayName="AppWrapper";try{y.displayName="AppWrapper",y.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:y.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(O){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{"use strict";e.d(t,{s:()=>b,c:()=>M});var d=e("./node_modules/react/index.js"),a=e("./node_modules/classnames/index.js"),p=e.n(a),s=e("./src/DesignTokens/index.ts"),o=e("./src/hooks/useMediaQuery.ts"),c,n,m;function l(){return l=Object.assign?Object.assign.bind():function(i){for(var _=1;_<arguments.length;_++){var x=arguments[_];for(var g in x)Object.prototype.hasOwnProperty.call(x,g)&&(i[g]=x[g])}return i},l.apply(this,arguments)}var u=function(_){return d.createElement("svg",l({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),c||(c=d.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),n||(n=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),m||(m=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},D,A,T;function j(){return j=Object.assign?Object.assign.bind():function(i){for(var _=1;_<arguments.length;_++){var x=arguments[_];for(var g in x)Object.prototype.hasOwnProperty.call(x,g)&&(i[g]=x[g])}return i},j.apply(this,arguments)}var E=function(_){return d.createElement("svg",j({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),D||(D=d.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),A||(A=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),T||(T=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},f=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),R=e.n(f),W=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(W),y=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),O=e.n(y),B=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=e.n(B),Z=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),V=e.n(Z),Q=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(Q),K=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),C={};C.styleTagTransform=k(),C.setAttributes=L(),C.insert=O().bind(null,"head"),C.domAPI=I(),C.insertStyleElement=V();var ae=R()(K.Z,C);const h=K.Z&&K.Z.locals?K.Z.locals:void 0;var S=e("./node_modules/react/jsx-runtime.js");let M=function(i){return i.Success="success",i.Info="info",i.Warning="warning",i.Error="error",i}({});const J=({size:i,variant:_})=>{switch(_){case M.Info:case M.Error:case M.Warning:return(0,S.jsx)(u,{style:{width:i,height:i},"data-testid":"panel-icon-info"});case M.Success:return(0,S.jsx)(E,{style:{width:i,height:i},"data-testid":"panel-icon-success"})}},Y=({forceMobileLayout:i})=>{const _=(0,o.a)(`(max-width: ${s.T.cLy})`);return i?!0:_},z=({children:i})=>(0,S.jsx)("div",{className:p()(h["panel__pointer-position"]),children:i});z.displayName="defaultRenderArrow";const b=({renderIcon:i=J,title:_,children:x,variant:g=M.Info,showPointer:X=!1,showIcon:F=!0,forceMobileLayout:H=!1,renderArrow:$=z})=>{const U=Y({forceMobileLayout:H}),G=U?s.T.lxo:s.T.mgB;return(0,S.jsxs)("div",{className:p()(h.panel,{[h["panel--mobile-layout"]]:U}),children:[X&&$({children:(0,S.jsx)("div",{"data-testid":"panel-pointer",className:p()(h.panel__pointer,h[`panel__pointer--${g}`])})}),(0,S.jsxs)("div",{"data-testid":"panel-content-wrapper",className:p()(h["panel__content-wrapper"],h[`panel__content-wrapper--${g}`]),children:[F&&(0,S.jsx)("div",{"data-testid":"panel-icon-wrapper",className:h["panel__icon-wrapper"],children:i({size:G,variant:g})}),(0,S.jsxs)("div",{className:h.panel__content,children:[_&&(0,S.jsx)("h2",{className:h.panel__header,children:_}),(0,S.jsx)("div",{className:h.panel__body,children:x})]})]})]})};b.displayName="Panel";try{b.displayName="Panel",b.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:b.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(i){}},"./src/hooks/useMediaQuery.ts":(r,t,e)=>{"use strict";e.d(t,{a:()=>a});var d=e("./node_modules/react/index.js");function a(p){const s=m=>{var l;return(l=window==null?void 0:window.matchMedia(m).matches)!=null?l:!1},[o,c]=(0,d.useState)(s(p)),n=()=>{c(s(p))};return(0,d.useEffect)(()=>{const m=window.matchMedia(p);return n(),m.addEventListener("change",n),()=>m.removeEventListener("change",n)},[p]),o}},"./node_modules/classnames/index.js":(r,t)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var a={}.hasOwnProperty,p="[native code]";function s(){for(var o=[],c=0;c<arguments.length;c++){var n=arguments[c];if(n){var m=typeof n;if(m==="string"||m==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&o.push(l)}}else if(m==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var u in n)a.call(n,u)&&n[u]&&o.push(u)}}}return o.join(" ")}r.exports?(s.default=s,r.exports=s):(e=[],d=function(){return s}.apply(t,e),d!==void 0&&(r.exports=d))})()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{"use strict";e.d(t,{Z:()=>c});var d=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),p=e("./node_modules/css-loader/dist/runtime/api.js"),s=e.n(p),o=s()(a());o.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),o.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),o.locals={};const c=o},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(r,t,e)=>{"use strict";e.d(t,{Z:()=>c});var d=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(d),p=e("./node_modules/css-loader/dist/runtime/api.js"),s=e.n(p),o=s()(a());o.push([r.id,`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Cn6JIe0KTCbn5phMoUZR {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Cn6JIe0KTCbn5phMoUZR:not(.ERpxjgVQtHHLvhTY_hFT) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Cn6JIe0KTCbn5phMoUZR:not(.ERpxjgVQtHHLvhTY_hFT) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Cn6JIe0KTCbn5phMoUZR:not(.ERpxjgVQtHHLvhTY_hFT) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Cn6JIe0KTCbn5phMoUZR:not(.ERpxjgVQtHHLvhTY_hFT) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Cn6JIe0KTCbn5phMoUZR {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Cn6JIe0KTCbn5phMoUZR {
  width: 100%;
}

.bc7XJ8ixqA1y6aiscled {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.WhWRFmGdB89kBdaZDB2b {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.r4V2MSspiqnXTrUea8T1,
.AmxSNhiUqy_y2wozsSh5 {
  background-color: var(--component-panel-color-background-default);
}

.rjkPtLYzH8ykC6itnGjl,
.elN2Ag2FOJOLm_UdgcD4 {
  background-color: var(--component-panel-color-background-success);
}

.DvYFBpVJAKHzN5ZqonFq,
.Y__Z1VtZZq7MCjbTSkXn {
  background-color: var(--component-panel-color-background-warning);
}

.dJU5t1iliDixb1wEJQTU,
.K6h4ZL0w7vXh7xtCBBpK {
  background-color: var(--colors-red-200);
}

.SWZ1MBuuIQm66L683agJ {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.VF3VnIvqPmLbQNJ2CnCI {
  display: flex;
  flex: none;
}

.BfiKuOxLyXQDtXNvDKyB {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.kehDhu_3_rCtwZ9Xgq_f {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.NWoqKSj2k4epsQrCnjqY {
  font-size: var(--panel-body-font_size);
}
`,""]),o.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--mobile-layout":"ERpxjgVQtHHLvhTY_hFT",panel__pointer:"bc7XJ8ixqA1y6aiscled","panel__pointer-position":"WhWRFmGdB89kBdaZDB2b","panel__content-wrapper--info":"r4V2MSspiqnXTrUea8T1","panel__pointer--info":"AmxSNhiUqy_y2wozsSh5","panel__content-wrapper--success":"rjkPtLYzH8ykC6itnGjl","panel__pointer--success":"elN2Ag2FOJOLm_UdgcD4","panel__content-wrapper--warning":"DvYFBpVJAKHzN5ZqonFq","panel__pointer--warning":"Y__Z1VtZZq7MCjbTSkXn","panel__content-wrapper--error":"dJU5t1iliDixb1wEJQTU","panel__pointer--error":"K6h4ZL0w7vXh7xtCBBpK","panel__content-wrapper":"SWZ1MBuuIQm66L683agJ","panel__icon-wrapper":"VF3VnIvqPmLbQNJ2CnCI",panel__content:"BfiKuOxLyXQDtXNvDKyB",panel__header:"kehDhu_3_rCtwZ9Xgq_f",panel__body:"NWoqKSj2k4epsQrCnjqY"};const c=o}}]);})();
