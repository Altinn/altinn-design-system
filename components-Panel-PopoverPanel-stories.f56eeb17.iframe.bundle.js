"use strict";(()=>{var ee=Object.defineProperty,ne=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var H=(r,t,e)=>t in r?ee(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,x=(r,t)=>{for(var e in t||(t={}))oe.call(t,e)&&H(r,e,t[e]);if(X)for(var e of X(t))ae.call(t,e)&&H(r,e,t[e]);return r},L=(r,t)=>ne(r,te(t));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[27],{"./.storybook/StoryPage.tsx":(r,t,e)=>{e.d(t,{Y:()=>c});var l=e("./node_modules/react/index.js"),a=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),i=e("./src/components/AppWrapper/AppWrapper.tsx"),n=e("./node_modules/react/jsx-runtime.js");const o=({children:u})=>(0,n.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,n.jsxs)("p",{style:{margin:"0"},children:[(0,n.jsx)("strong",{children:"Deprecated:"})," ",u]})});o.displayName="DeprecationWarning";const d=null;try{o.displayName="DeprecationWarning",o.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:o.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(u){}const c=({description:u,deprecationWarning:_})=>(0,n.jsxs)(i.O,{children:[(0,n.jsx)(a.Dx,{}),_&&(0,n.jsx)(o,{children:_}),(0,n.jsx)(a.dk,{children:u}),(0,n.jsx)(a.fQ,{includePrimary:!0}),(0,n.jsx)(a.X6,{children:"Props"}),(0,n.jsx)(a.$4,{story:a.Uh})]});c.displayName="StoryPage";const p=null;try{c.displayName="StoryPage",c.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:c.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(u){}},"./src/components/Panel/PopoverPanel.stories.tsx":(r,t,e)=>{var P,z,I,S,j,M,B,K,D,N,R,Z;e.r(t),e.d(t,{Error:()=>v,Info:()=>y,Success:()=>g,Warning:()=>f,__namedExportsOrder:()=>C,default:()=>u});var l=e("./node_modules/react/index.js"),a=e("@storybook/addons"),i=e.n(a),n=e("./node_modules/@digdir/design-system-react/dist/esm/index.js"),o=e("./.storybook/StoryPage.tsx"),d=e("./src/components/Panel/Panel.tsx"),c=e("./src/components/Panel/PopoverPanel.tsx"),p=e("./node_modules/react/jsx-runtime.js");const u={component:c.H,parameters:{docs:{page:()=>(0,p.jsx)(o.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{title:"Tittel",variant:d.c.Warning,trigger:(0,p.jsx)("button",{children:"\xC5pne"}),side:"top"}},_=E=>{const[T,U]=(0,a.useState)(!1),h=()=>{U(!T)};return(0,p.jsx)("div",{children:(0,p.jsxs)(c.H,{variant:E.variant,side:E.side,title:E.title,open:T,trigger:(0,p.jsx)(n.zx,{variant:n.Wu.Filled,color:n.rp.Primary,children:"\xC5pne"}),onOpenChange:U,showPointer:E.showPointer,showIcon:E.showIcon,forceMobileLayout:E.forceMobileLayout,children:[(0,p.jsx)("div",{children:"Her kommer litt informasjon"}),(0,p.jsx)(n.zx,{variant:n.Wu.Filled,color:n.rp.Primary,size:n.qE.Small,onClick:h,children:"Lukk"})]})})};_.displayName="Template";const g=_.bind({});g.args={variant:d.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},g.argTypes={trigger:{control:!1}},g.parameters={docs:{description:{story:""}}};const y=_.bind({});y.args={variant:d.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},y.argTypes={trigger:{control:!1}},y.parameters={docs:{description:{story:""}}};const f=_.bind({});f.args={variant:d.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},f.argTypes={trigger:{control:!1}},f.parameters={docs:{description:{story:""}}};const v=_.bind({});v.args={variant:d.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},v.argTypes={trigger:{control:!1}},v.parameters={docs:{description:{story:""}}},g.parameters=L(x({},g.parameters),{docs:L(x({},(P=g.parameters)==null?void 0:P.docs),{source:x({originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = () => {
    setOpen(!open);
  };
  return <div>
      <PopoverPanel variant={args.variant} side={args.side} title={args.title} open={open} trigger={<Button variant={ButtonVariant.Filled} color={ButtonColor.Primary}>
            \xC5pne
          </Button>} onOpenChange={setOpen} showPointer={args.showPointer} showIcon={args.showIcon} forceMobileLayout={args.forceMobileLayout}>
        <div>Her kommer litt informasjon</div>
        <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small} onClick={handleOnOpenChange}>
          Lukk
        </Button>
      </PopoverPanel>
    </div>;
}`},(I=(z=g.parameters)==null?void 0:z.docs)==null?void 0:I.source)})}),y.parameters=L(x({},y.parameters),{docs:L(x({},(S=y.parameters)==null?void 0:S.docs),{source:x({originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = () => {
    setOpen(!open);
  };
  return <div>
      <PopoverPanel variant={args.variant} side={args.side} title={args.title} open={open} trigger={<Button variant={ButtonVariant.Filled} color={ButtonColor.Primary}>
            \xC5pne
          </Button>} onOpenChange={setOpen} showPointer={args.showPointer} showIcon={args.showIcon} forceMobileLayout={args.forceMobileLayout}>
        <div>Her kommer litt informasjon</div>
        <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small} onClick={handleOnOpenChange}>
          Lukk
        </Button>
      </PopoverPanel>
    </div>;
}`},(M=(j=y.parameters)==null?void 0:j.docs)==null?void 0:M.source)})}),f.parameters=L(x({},f.parameters),{docs:L(x({},(B=f.parameters)==null?void 0:B.docs),{source:x({originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = () => {
    setOpen(!open);
  };
  return <div>
      <PopoverPanel variant={args.variant} side={args.side} title={args.title} open={open} trigger={<Button variant={ButtonVariant.Filled} color={ButtonColor.Primary}>
            \xC5pne
          </Button>} onOpenChange={setOpen} showPointer={args.showPointer} showIcon={args.showIcon} forceMobileLayout={args.forceMobileLayout}>
        <div>Her kommer litt informasjon</div>
        <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small} onClick={handleOnOpenChange}>
          Lukk
        </Button>
      </PopoverPanel>
    </div>;
}`},(D=(K=f.parameters)==null?void 0:K.docs)==null?void 0:D.source)})}),v.parameters=L(x({},v.parameters),{docs:L(x({},(N=v.parameters)==null?void 0:N.docs),{source:x({originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOnOpenChange = () => {
    setOpen(!open);
  };
  return <div>
      <PopoverPanel variant={args.variant} side={args.side} title={args.title} open={open} trigger={<Button variant={ButtonVariant.Filled} color={ButtonColor.Primary}>
            \xC5pne
          </Button>} onOpenChange={setOpen} showPointer={args.showPointer} showIcon={args.showIcon} forceMobileLayout={args.forceMobileLayout}>
        <div>Her kommer litt informasjon</div>
        <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small} onClick={handleOnOpenChange}>
          Lukk
        </Button>
      </PopoverPanel>
    </div>;
}`},(Z=(R=v.parameters)==null?void 0:R.docs)==null?void 0:Z.source)})});const C=["Success","Info","Warning","Error"]},"./src/DesignTokens/index.ts":(r,t,e)=>{e.d(t,{T:()=>l});var l=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/AppWrapper/AppWrapper.tsx":(r,t,e)=>{e.d(t,{O:()=>j});var l=e("./node_modules/react/index.js"),a=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),i=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=e.n(i),o=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=e.n(o),c=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),p=e.n(c),u=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(u),g=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=e.n(g),f=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=e.n(f),C=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),P={};P.styleTagTransform=v(),P.setAttributes=_(),P.insert=p().bind(null,"head"),P.domAPI=d(),P.insertStyleElement=y();var z=n()(C.Z,P);const I=C.Z&&C.Z.locals?C.Z.locals:void 0;var S=e("./node_modules/react/jsx-runtime.js");const j=({children:M})=>(0,S.jsx)("div",{children:M});j.displayName="AppWrapper";try{j.displayName="AppWrapper",j.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:j.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(M){}},"./src/components/Panel/Panel.tsx":(r,t,e)=>{e.d(t,{s:()=>V,c:()=>b});var l=e("./node_modules/react/index.js"),a=e("./node_modules/classnames/index.js"),i=e.n(a),n=e("./src/DesignTokens/index.ts"),o=e("./src/hooks/useMediaQuery.ts"),d,c,p;function u(){return u=Object.assign?Object.assign.bind():function(s){for(var m=1;m<arguments.length;m++){var W=arguments[m];for(var A in W)Object.prototype.hasOwnProperty.call(W,A)&&(s[A]=W[A])}return s},u.apply(this,arguments)}var _=function(m){return l.createElement("svg",u({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},m),d||(d=l.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),c||(c=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),p||(p=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},g,y,f;function v(){return v=Object.assign?Object.assign.bind():function(s){for(var m=1;m<arguments.length;m++){var W=arguments[m];for(var A in W)Object.prototype.hasOwnProperty.call(W,A)&&(s[A]=W[A])}return s},v.apply(this,arguments)}var C=function(m){return l.createElement("svg",v({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},m),g||(g=l.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),y||(y=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),f||(f=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},P=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),z=e.n(P),I=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(I),j=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(j),B=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),K=e.n(B),D=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),N=e.n(D),R=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),Z=e.n(R),E=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),T={};T.styleTagTransform=Z(),T.setAttributes=K(),T.insert=M().bind(null,"head"),T.domAPI=S(),T.insertStyleElement=N();var U=z()(E.Z,T);const h=E.Z&&E.Z.locals?E.Z.locals:void 0;var O=e("./node_modules/react/jsx-runtime.js");let b=function(s){return s.Success="success",s.Info="info",s.Warning="warning",s.Error="error",s}({});const w=({size:s,variant:m})=>{switch(m){case b.Info:case b.Error:case b.Warning:return(0,O.jsx)(_,{style:{width:s,height:s},"data-testid":"panel-icon-info"});case b.Success:return(0,O.jsx)(C,{style:{width:s,height:s},"data-testid":"panel-icon-success"})}},F=({forceMobileLayout:s})=>{const m=(0,o.a)(`(max-width: ${n.T.cLy})`);return s?!0:m},J=({children:s})=>(0,O.jsx)("div",{className:i()(h["panel__pointer-position"]),children:s});J.displayName="defaultRenderArrow";const V=({renderIcon:s=w,title:m,children:W,variant:A=b.Info,showPointer:Q=!1,showIcon:k=!0,forceMobileLayout:G=!1,renderArrow:$=J})=>{const Y=F({forceMobileLayout:G}),q=Y?n.T.lxo:n.T.mgB;return(0,O.jsxs)("div",{className:i()(h.panel,{[h["panel--mobile-layout"]]:Y}),children:[Q&&$({children:(0,O.jsx)("div",{"data-testid":"panel-pointer",className:i()(h.panel__pointer,h[`panel__pointer--${A}`])})}),(0,O.jsxs)("div",{"data-testid":"panel-content-wrapper",className:i()(h["panel__content-wrapper"],h[`panel__content-wrapper--${A}`]),children:[k&&(0,O.jsx)("div",{"data-testid":"panel-icon-wrapper",className:h["panel__icon-wrapper"],children:s({size:q,variant:A})}),(0,O.jsxs)("div",{className:h.panel__content,children:[m&&(0,O.jsx)("h2",{className:h.panel__header,children:m}),(0,O.jsx)("div",{className:h.panel__body,children:W})]})]})]})};V.displayName="Panel";try{V.displayName="Panel",V.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:V.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(s){}},"./src/components/Panel/PopoverPanel.tsx":(r,t,e)=>{e.d(t,{H:()=>D});var l=e("./node_modules/react/index.js"),a=e("./node_modules/@radix-ui/react-popover/dist/index.mjs"),i=e("./node_modules/classnames/index.js"),n=e.n(i),o=e("./src/components/Panel/Panel.tsx"),d=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(d),p=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(p),_=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),g=e.n(_),y=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(y),v=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=e.n(v),P=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=e.n(P),I=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),S={};S.styleTagTransform=z(),S.setAttributes=f(),S.insert=g().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=C();var j=c()(I.Z,S);const M=I.Z&&I.Z.locals?I.Z.locals:void 0;var B=e("./node_modules/react/jsx-runtime.js");const K=({children:R})=>(0,B.jsx)(a.Eh,{className:n()(M["popover-panel__arrow"]),asChild:!0,children:R});K.displayName="renderArrow";const D=({children:R,variant:Z=o.c.Warning,trigger:E,side:T="top",title:U,showIcon:h,forceMobileLayout:O,showPointer:b=!0,onOpenChange:w,open:F=!1})=>(0,B.jsxs)(a.fC,{open:F,onOpenChange:w,children:[(0,B.jsx)(a.xz,{asChild:!0,role:"button",children:E}),(0,B.jsx)(a.VY,{side:T,className:M["popover-panel"],children:(0,B.jsx)(o.s,{title:U,showIcon:h,forceMobileLayout:O,showPointer:b,variant:Z,renderArrow:K,children:R})})]});D.displayName="PopoverPanel";const N=null;try{D.displayName="PopoverPanel",D.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:D.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(R){}},"./src/hooks/useMediaQuery.ts":(r,t,e)=>{e.d(t,{a:()=>a});var l=e("./node_modules/react/index.js");function a(i){const n=p=>{var u;return(u=window==null?void 0:window.matchMedia(p).matches)!=null?u:!1},[o,d]=(0,l.useState)(n(i)),c=()=>{d(n(i))};return(0,l.useEffect)(()=>{const p=window.matchMedia(i);return c(),p.addEventListener("change",c),()=>p.removeEventListener("change",c)},[i]),o}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,t,e)=>{e.d(t,{Z:()=>d});var l=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),i=e("./node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),o=n()(a());o.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),o.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),o.locals={};const d=o},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(r,t,e)=>{e.d(t,{Z:()=>d});var l=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),i=e("./node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),o=n()(a());o.push([r.id,`/* breakpoints-xs */
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
`,""]),o.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--mobile-layout":"ERpxjgVQtHHLvhTY_hFT",panel__pointer:"bc7XJ8ixqA1y6aiscled","panel__pointer-position":"WhWRFmGdB89kBdaZDB2b","panel__content-wrapper--info":"r4V2MSspiqnXTrUea8T1","panel__pointer--info":"AmxSNhiUqy_y2wozsSh5","panel__content-wrapper--success":"rjkPtLYzH8ykC6itnGjl","panel__pointer--success":"elN2Ag2FOJOLm_UdgcD4","panel__content-wrapper--warning":"DvYFBpVJAKHzN5ZqonFq","panel__pointer--warning":"Y__Z1VtZZq7MCjbTSkXn","panel__content-wrapper--error":"dJU5t1iliDixb1wEJQTU","panel__pointer--error":"K6h4ZL0w7vXh7xtCBBpK","panel__content-wrapper":"SWZ1MBuuIQm66L683agJ","panel__icon-wrapper":"VF3VnIvqPmLbQNJ2CnCI",panel__content:"BfiKuOxLyXQDtXNvDKyB",panel__header:"kehDhu_3_rCtwZ9Xgq_f",panel__body:"NWoqKSj2k4epsQrCnjqY"};const d=o},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(r,t,e)=>{e.d(t,{Z:()=>d});var l=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),i=e("./node_modules/css-loader/dist/runtime/api.js"),n=e.n(i),o=n()(a());o.push([r.id,`.cMdAzgi06lOyezn_J68y {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.qgDrFZ7KD1UilVJX_4Ta {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),o.locals={"popover-panel":"cMdAzgi06lOyezn_J68y","popover-panel__arrow":"qgDrFZ7KD1UilVJX_4Ta"};const d=o}}]);})();
