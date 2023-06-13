(()=>{var q=Object.defineProperty,ee=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var U=(r,o,e)=>o in r?q(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,y=(r,o)=>{for(var e in o||(o={}))oe.call(o,e)&&U(r,e,o[e]);if(z)for(var e of z(o))se.call(o,e)&&U(r,e,o[e]);return r},x=(r,o)=>ee(r,ne(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[714],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,o,e)=>{"use strict";e.d(o,{$4:()=>t.$4,Dx:()=>t.Dx,Uh:()=>t.Uh,X6:()=>t.X6,dk:()=>t.dk,fQ:()=>t.fQ,h_:()=>t.h_});var d=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),t=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(r,o,e)=>{"use strict";e.d(o,{Y:()=>n});var d=e("./node_modules/react/index.js"),t=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),p=e("./src/components/AppWrapper/AppWrapper.tsx"),s=e("./node_modules/react/jsx-runtime.js");const a=({children:l})=>(0,s.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,s.jsxs)("p",{style:{margin:"0"},children:[(0,s.jsx)("strong",{children:"Deprecated:"})," ",l]})});a.displayName="DeprecationWarning";const c=null;try{a.displayName="DeprecationWarning",a.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:a.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(l){}const n=({description:l,deprecationWarning:m})=>(0,s.jsxs)(p.O,{children:[(0,s.jsx)(t.Dx,{}),m&&(0,s.jsx)(a,{children:m}),(0,s.jsx)(t.dk,{children:l}),(0,s.jsx)(t.fQ,{includePrimary:!0}),(0,s.jsx)(t.X6,{children:"Props"}),(0,s.jsx)(t.$4,{story:t.Uh})]});n.displayName="StoryPage";const u=null;try{n.displayName="StoryPage",n.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:n.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(l){}},"./src/components/Panel/Panel.stories.tsx":(r,o,e)=>{var j,A,P,S,v,C,M,D,g,T,W,B;"use strict";e.r(o),e.d(o,{Error:()=>m,Info:()=>u,Success:()=>n,Warning:()=>l,__namedExportsOrder:()=>O,default:()=>a});var d=e("./node_modules/react/index.js"),t=e("./.storybook/StoryPage.tsx"),p=e("./src/components/Panel/Panel.tsx"),s=e("./node_modules/react/jsx-runtime.js");const a={component:p.s,parameters:{docs:{page:()=>(0,s.jsx)(t.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{title:"Paneltittel",children:(0,s.jsx)("div",{children:"Her kommer litt informasjon"})}},c=w=>(0,s.jsx)(p.s,y({},w));c.displayName="Template";const n=c.bind({});n.args={variant:p.c.Success},n.parameters={docs:{description:{story:"Suksessbeskrivelse"}}};const u=c.bind({});u.parameters={docs:{description:{story:"Infobeskrivelse"}}};const l=c.bind({});l.args={variant:p.c.Warning},l.parameters={docs:{description:{story:"Advarselsbeskrivelse"}}};const m=c.bind({});m.args={variant:p.c.Error},m.parameters={docs:{description:{story:"Feilbeskrivelse"}}},n.parameters=x(y({},n.parameters),{docs:x(y({},(j=n.parameters)==null?void 0:j.docs),{source:y({originalSource:"args => <Panel {...args} />"},(P=(A=n.parameters)==null?void 0:A.docs)==null?void 0:P.source)})}),u.parameters=x(y({},u.parameters),{docs:x(y({},(S=u.parameters)==null?void 0:S.docs),{source:y({originalSource:"args => <Panel {...args} />"},(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source)})}),l.parameters=x(y({},l.parameters),{docs:x(y({},(M=l.parameters)==null?void 0:M.docs),{source:y({originalSource:"args => <Panel {...args} />"},(g=(D=l.parameters)==null?void 0:D.docs)==null?void 0:g.source)})}),m.parameters=x(y({},m.parameters),{docs:x(y({},(T=m.parameters)==null?void 0:T.docs),{source:y({originalSource:"args => <Panel {...args} />"},(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source)})});const O=["Success","Info","Warning","Error"]},"./src/DesignTokens/index.ts":(r,o,e)=>{"use strict";e.d(o,{T:()=>d});var d=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/AppWrapper/AppWrapper.tsx":(r,o,e)=>{"use strict";e.d(o,{O:()=>g});var d=e("./node_modules/react/index.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),p=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=e.n(p),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=e.n(a),n=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),u=e.n(n),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),m=e.n(l),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=e.n(O),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),P=e.n(A),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),v={};v.styleTagTransform=P(),v.setAttributes=m(),v.insert=u().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=j();var C=s()(S.Z,v);const M=S.Z&&S.Z.locals?S.Z.locals:void 0;var D=e("./node_modules/react/jsx-runtime.js");const g=({children:T})=>(0,D.jsx)("div",{children:T});g.displayName="AppWrapper";try{g.displayName="AppWrapper",g.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:g.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(T){}},"./src/components/Panel/Panel.tsx":(r,o,e)=>{"use strict";e.d(o,{s:()=>R,c:()=>I});var d=e("./node_modules/react/index.js"),t=e("./node_modules/classnames/index.js"),p=e.n(t),s=e("./src/DesignTokens/index.ts"),a=e("./src/hooks/useMediaQuery.ts"),c,n,u;function l(){return l=Object.assign?Object.assign.bind():function(i){for(var _=1;_<arguments.length;_++){var E=arguments[_];for(var h in E)Object.prototype.hasOwnProperty.call(E,h)&&(i[h]=E[h])}return i},l.apply(this,arguments)}var m=function(_){return d.createElement("svg",l({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),c||(c=d.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),n||(n=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),u||(u=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},O,j,A;function P(){return P=Object.assign?Object.assign.bind():function(i){for(var _=1;_<arguments.length;_++){var E=arguments[_];for(var h in E)Object.prototype.hasOwnProperty.call(E,h)&&(i[h]=E[h])}return i},P.apply(this,arguments)}var S=function(_){return d.createElement("svg",P({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},_),O||(O=d.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),j||(j=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),A||(A=d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),C=e.n(v),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),D=e.n(M),g=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(g),W=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),B=e.n(W),w=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(w),V=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),Q=e.n(V),L=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),k={};k.styleTagTransform=Q(),k.setAttributes=B(),k.insert=T().bind(null,"head"),k.domAPI=D(),k.insertStyleElement=N();var te=C()(L.Z,k);const f=L.Z&&L.Z.locals?L.Z.locals:void 0;var b=e("./node_modules/react/jsx-runtime.js");let I=function(i){return i.Success="success",i.Info="info",i.Warning="warning",i.Error="error",i}({});const J=({size:i,variant:_})=>{switch(_){case I.Info:case I.Error:case I.Warning:return(0,b.jsx)(m,{style:{width:i,height:i},"data-testid":"panel-icon-info"});case I.Success:return(0,b.jsx)(S,{style:{width:i,height:i},"data-testid":"panel-icon-success"})}},Y=({forceMobileLayout:i})=>{const _=(0,a.a)(`(max-width: ${s.T.cLy})`);return i?!0:_},K=({children:i})=>(0,b.jsx)("div",{className:p()(f["panel__pointer-position"]),children:i});K.displayName="defaultRenderArrow";const R=({renderIcon:i=J,title:_,children:E,variant:h=I.Info,showPointer:X=!1,showIcon:F=!0,forceMobileLayout:H=!1,renderArrow:$=K})=>{const Z=Y({forceMobileLayout:H}),G=Z?s.T.lxo:s.T.mgB;return(0,b.jsxs)("div",{className:p()(f.panel,{[f["panel--mobile-layout"]]:Z}),children:[X&&$({children:(0,b.jsx)("div",{"data-testid":"panel-pointer",className:p()(f.panel__pointer,f[`panel__pointer--${h}`])})}),(0,b.jsxs)("div",{"data-testid":"panel-content-wrapper",className:p()(f["panel__content-wrapper"],f[`panel__content-wrapper--${h}`]),children:[F&&(0,b.jsx)("div",{"data-testid":"panel-icon-wrapper",className:f["panel__icon-wrapper"],children:i({size:G,variant:h})}),(0,b.jsxs)("div",{className:f.panel__content,children:[_&&(0,b.jsx)("h2",{className:f.panel__header,children:_}),(0,b.jsx)("div",{className:f.panel__body,children:E})]})]})]})};R.displayName="Panel";try{R.displayName="Panel",R.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:R.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(i){}},"./src/hooks/useMediaQuery.ts":(r,o,e)=>{"use strict";e.d(o,{a:()=>t});var d=e("./node_modules/react/index.js");function t(p){const s=u=>{var l;return(l=window==null?void 0:window.matchMedia(u).matches)!=null?l:!1},[a,c]=(0,d.useState)(s(p)),n=()=>{c(s(p))};return(0,d.useEffect)(()=>{const u=window.matchMedia(p);return n(),u.addEventListener("change",n),()=>u.removeEventListener("change",n)},[p]),a}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,o,e)=>{"use strict";e.d(o,{Z:()=>c});var d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(d),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=e.n(p),a=s()(t());a.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),a.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),a.locals={};const c=a},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(r,o,e)=>{"use strict";e.d(o,{Z:()=>c});var d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(d),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=e.n(p),a=s()(t());a.push([r.id,`/* breakpoints-xs */
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
`,""]),a.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--mobile-layout":"ERpxjgVQtHHLvhTY_hFT",panel__pointer:"bc7XJ8ixqA1y6aiscled","panel__pointer-position":"WhWRFmGdB89kBdaZDB2b","panel__content-wrapper--info":"r4V2MSspiqnXTrUea8T1","panel__pointer--info":"AmxSNhiUqy_y2wozsSh5","panel__content-wrapper--success":"rjkPtLYzH8ykC6itnGjl","panel__pointer--success":"elN2Ag2FOJOLm_UdgcD4","panel__content-wrapper--warning":"DvYFBpVJAKHzN5ZqonFq","panel__pointer--warning":"Y__Z1VtZZq7MCjbTSkXn","panel__content-wrapper--error":"dJU5t1iliDixb1wEJQTU","panel__pointer--error":"K6h4ZL0w7vXh7xtCBBpK","panel__content-wrapper":"SWZ1MBuuIQm66L683agJ","panel__icon-wrapper":"VF3VnIvqPmLbQNJ2CnCI",panel__content:"BfiKuOxLyXQDtXNvDKyB",panel__header:"kehDhu_3_rCtwZ9Xgq_f",panel__body:"NWoqKSj2k4epsQrCnjqY"};const c=a},"./node_modules/classnames/index.js":(r,o)=>{var e,d;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var t={}.hasOwnProperty,p="[native code]";function s(){for(var a=[],c=0;c<arguments.length;c++){var n=arguments[c];if(n){var u=typeof n;if(u==="string"||u==="number")a.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&a.push(l)}}else if(u==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){a.push(n.toString());continue}for(var m in n)t.call(n,m)&&n[m]&&a.push(m)}}}return a.join(" ")}r.exports?(s.default=s,r.exports=s):(e=[],d=function(){return s}.apply(o,e),d!==void 0&&(r.exports=d))})()}}]);})();
