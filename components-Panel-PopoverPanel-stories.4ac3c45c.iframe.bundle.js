"use strict";(()=>{var ee=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var Y=(r,n,e)=>n in r?ee(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,E=(r,n)=>{for(var e in n||(n={}))te.call(n,e)&&Y(r,e,n[e]);if(X)for(var e of X(n))se.call(n,e)&&Y(r,e,n[e]);return r},R=(r,n)=>ne(r,oe(n));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[27],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,n,e)=>{e.d(n,{$4:()=>t.$4,Dx:()=>t.Dx,Uh:()=>t.Uh,X6:()=>t.X6,dk:()=>t.dk,fQ:()=>t.fQ,h_:()=>t.h_});var l=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),t=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(r,n,e)=>{e.d(n,{Y:()=>c});var l=e("./node_modules/react/index.js"),t=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),d=e("./src/components/AppWrapper/AppWrapper.tsx"),o=e("./node_modules/react/jsx-runtime.js");const s=({children:u})=>(0,o.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,o.jsxs)("p",{style:{margin:"0"},children:[(0,o.jsx)("strong",{children:"Deprecated:"})," ",u]})});s.displayName="DeprecationWarning";const i=null;try{s.displayName="DeprecationWarning",s.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:s.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(u){}const c=({description:u,deprecationWarning:f})=>(0,o.jsxs)(d.O,{children:[(0,o.jsx)(t.Dx,{}),f&&(0,o.jsx)(s,{children:f}),(0,o.jsx)(t.dk,{children:u}),(0,o.jsx)(t.fQ,{includePrimary:!0}),(0,o.jsx)(t.X6,{children:"Props"}),(0,o.jsx)(t.$4,{story:t.Uh})]});c.displayName="StoryPage";const p=null;try{c.displayName="StoryPage",c.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:c.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(u){}},"./src/components/Panel/PopoverPanel.stories.tsx":(r,n,e)=>{var P,L,C,b,O,I,M,w,B,z,D,K;e.r(n),e.d(n,{Error:()=>_,Info:()=>v,Success:()=>y,Warning:()=>g,__namedExportsOrder:()=>A,default:()=>u});var l=e("./node_modules/react/index.js"),t=e("@storybook/addons"),d=e.n(t),o=e("./node_modules/@digdir/design-system-react/dist/esm/index.js"),s=e("./.storybook/StoryPage.tsx"),i=e("./src/components/Panel/Panel.tsx"),c=e("./src/components/Panel/PopoverPanel.tsx"),p=e("./node_modules/react/jsx-runtime.js");const u={component:c.H,parameters:{docs:{page:()=>(0,p.jsx)(s.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{title:"Tittel",variant:i.c.Warning,trigger:(0,p.jsx)("button",{children:"\xC5pne"}),side:"top"}},f=S=>{const[j,U]=(0,t.useState)(!1),h=()=>{U(!j)};return(0,p.jsx)("div",{children:(0,p.jsxs)(c.H,{variant:S.variant,side:S.side,title:S.title,open:j,trigger:(0,p.jsx)(o.zx,{variant:o.Wu.Filled,color:o.rp.Primary,children:"\xC5pne"}),onOpenChange:U,showPointer:S.showPointer,showIcon:S.showIcon,forceMobileLayout:S.forceMobileLayout,children:[(0,p.jsx)("div",{children:"Her kommer litt informasjon"}),(0,p.jsx)(o.zx,{variant:o.Wu.Filled,color:o.rp.Primary,size:o.qE.Small,onClick:h,children:"Lukk"})]})})};f.displayName="Template";const y=f.bind({});y.args={variant:i.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},y.argTypes={trigger:{control:!1}},y.parameters={docs:{description:{story:""}}};const v=f.bind({});v.args={variant:i.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},v.argTypes={trigger:{control:!1}},v.parameters={docs:{description:{story:""}}};const g=f.bind({});g.args={variant:i.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},g.argTypes={trigger:{control:!1}},g.parameters={docs:{description:{story:""}}};const _=f.bind({});_.args={variant:i.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},_.argTypes={trigger:{control:!1}},_.parameters={docs:{description:{story:""}}},y.parameters=R(E({},y.parameters),{docs:R(E({},(P=y.parameters)==null?void 0:P.docs),{source:E({originalSource:`args => {
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
}`},(C=(L=y.parameters)==null?void 0:L.docs)==null?void 0:C.source)})}),v.parameters=R(E({},v.parameters),{docs:R(E({},(b=v.parameters)==null?void 0:b.docs),{source:E({originalSource:`args => {
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
}`},(I=(O=v.parameters)==null?void 0:O.docs)==null?void 0:I.source)})}),g.parameters=R(E({},g.parameters),{docs:R(E({},(M=g.parameters)==null?void 0:M.docs),{source:E({originalSource:`args => {
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
}`},(B=(w=g.parameters)==null?void 0:w.docs)==null?void 0:B.source)})}),_.parameters=R(E({},_.parameters),{docs:R(E({},(z=_.parameters)==null?void 0:z.docs),{source:E({originalSource:`args => {
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
}`},(K=(D=_.parameters)==null?void 0:D.docs)==null?void 0:K.source)})});const A=["Success","Info","Warning","Error"]},"./src/DesignTokens/index.ts":(r,n,e)=>{e.d(n,{T:()=>l});var l=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.json")},"./src/components/AppWrapper/AppWrapper.tsx":(r,n,e)=>{e.d(n,{O:()=>O});var l=e("./node_modules/react/index.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),d=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(d),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=e.n(s),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=e.n(c),u=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),f=e.n(u),y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=e.n(y),g=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),_=e.n(g),A=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),P={};P.styleTagTransform=_(),P.setAttributes=f(),P.insert=p().bind(null,"head"),P.domAPI=i(),P.insertStyleElement=v();var L=o()(A.Z,P);const C=A.Z&&A.Z.locals?A.Z.locals:void 0;var b=e("./node_modules/react/jsx-runtime.js");const O=({children:I})=>(0,b.jsx)("div",{children:I});O.displayName="AppWrapper";try{O.displayName="AppWrapper",O.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:O.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(I){}},"./src/components/Panel/Panel.tsx":(r,n,e)=>{e.d(n,{s:()=>Z,c:()=>W});var l=e("./node_modules/react/index.js"),t=e("./node_modules/classnames/index.js"),d=e.n(t),o=e("./src/DesignTokens/index.ts"),s=e("./src/hooks/useMediaQuery.ts"),i,c,p;function u(){return u=Object.assign?Object.assign.bind():function(a){for(var m=1;m<arguments.length;m++){var k=arguments[m];for(var T in k)Object.prototype.hasOwnProperty.call(k,T)&&(a[T]=k[T])}return a},u.apply(this,arguments)}var f=function(m){return l.createElement("svg",u({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},m),i||(i=l.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),c||(c=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),p||(p=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},y,v,g;function _(){return _=Object.assign?Object.assign.bind():function(a){for(var m=1;m<arguments.length;m++){var k=arguments[m];for(var T in k)Object.prototype.hasOwnProperty.call(k,T)&&(a[T]=k[T])}return a},_.apply(this,arguments)}var A=function(m){return l.createElement("svg",_({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},m),y||(y=l.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),v||(v=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),g||(g=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},P=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),L=e.n(P),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),b=e.n(C),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(O),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),w=e.n(M),B=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),z=e.n(B),D=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),K=e.n(D),S=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),j={};j.styleTagTransform=K(),j.setAttributes=w(),j.insert=I().bind(null,"head"),j.domAPI=b(),j.insertStyleElement=z();var U=L()(S.Z,j);const h=S.Z&&S.Z.locals?S.Z.locals:void 0;var x=e("./node_modules/react/jsx-runtime.js");let W=function(a){return a.Success="success",a.Info="info",a.Warning="warning",a.Error="error",a}({});const N=({size:a,variant:m})=>{switch(m){case W.Info:case W.Error:case W.Warning:return(0,x.jsx)(f,{style:{width:a,height:a},"data-testid":"panel-icon-info"});case W.Success:return(0,x.jsx)(A,{style:{width:a,height:a},"data-testid":"panel-icon-success"})}},V=({forceMobileLayout:a})=>{const m=(0,s.a)(`(max-width: ${o.T.cLy})`);return a?!0:m},F=({children:a})=>(0,x.jsx)("div",{className:d()(h["panel__pointer-position"]),children:a});F.displayName="defaultRenderArrow";const Z=({renderIcon:a=N,title:m,children:k,variant:T=W.Info,showPointer:Q=!1,showIcon:H=!0,forceMobileLayout:$=!1,renderArrow:G=F})=>{const J=V({forceMobileLayout:$}),q=J?o.T.lxo:o.T.mgB;return(0,x.jsxs)("div",{className:d()(h.panel,{[h["panel--mobile-layout"]]:J}),children:[Q&&G({children:(0,x.jsx)("div",{"data-testid":"panel-pointer",className:d()(h.panel__pointer,h[`panel__pointer--${T}`])})}),(0,x.jsxs)("div",{"data-testid":"panel-content-wrapper",className:d()(h["panel__content-wrapper"],h[`panel__content-wrapper--${T}`]),children:[H&&(0,x.jsx)("div",{"data-testid":"panel-icon-wrapper",className:h["panel__icon-wrapper"],children:a({size:q,variant:T})}),(0,x.jsxs)("div",{className:h.panel__content,children:[m&&(0,x.jsx)("h2",{className:h.panel__header,children:m}),(0,x.jsx)("div",{className:h.panel__body,children:k})]})]})]})};Z.displayName="Panel";try{Z.displayName="Panel",Z.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:Z.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(a){}},"./src/components/Panel/PopoverPanel.tsx":(r,n,e)=>{e.d(n,{H:()=>B});var l=e("./node_modules/react/index.js"),t=e("./node_modules/@radix-ui/react-popover/dist/index.mjs"),d=e("./node_modules/classnames/index.js"),o=e.n(d),s=e("./src/components/Panel/Panel.tsx"),i=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=e.n(i),p=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(p),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),y=e.n(f),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),g=e.n(v),_=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(_),P=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),L=e.n(P),C=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),b={};b.styleTagTransform=L(),b.setAttributes=g(),b.insert=y().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=A();var O=c()(C.Z,b);const I=C.Z&&C.Z.locals?C.Z.locals:void 0;var M=e("./node_modules/react/jsx-runtime.js");const w=({children:D})=>(0,M.jsx)(t.Eh,{className:o()(I["popover-panel__arrow"]),asChild:!0,children:D});w.displayName="renderArrow";const B=({children:D,variant:K=s.c.Warning,trigger:S,side:j="top",title:U,showIcon:h,forceMobileLayout:x,showPointer:W=!0,onOpenChange:N,open:V=!1})=>(0,M.jsxs)(t.fC,{open:V,onOpenChange:N,children:[(0,M.jsx)(t.xz,{asChild:!0,role:"button",children:S}),(0,M.jsx)(t.VY,{side:j,className:I["popover-panel"],children:(0,M.jsx)(s.s,{title:U,showIcon:h,forceMobileLayout:x,showPointer:W,variant:K,renderArrow:w,children:D})})]});B.displayName="PopoverPanel";const z=null;try{B.displayName="PopoverPanel",B.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:B.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(D){}},"./src/hooks/useMediaQuery.ts":(r,n,e)=>{e.d(n,{a:()=>t});var l=e("./node_modules/react/index.js");function t(d){const o=p=>{var u;return(u=window==null?void 0:window.matchMedia(p).matches)!=null?u:!1},[s,i]=(0,l.useState)(o(d)),c=()=>{i(o(d))};return(0,l.useEffect)(()=>{const p=window.matchMedia(d);return c(),p.addEventListener("change",c),()=>p.removeEventListener("change",c)},[d]),s}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,n,e)=>{e.d(n,{Z:()=>i});var l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),s=o()(t());s.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),s.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),s.locals={};const i=s},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(r,n,e)=>{e.d(n,{Z:()=>i});var l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),s=o()(t());s.push([r.id,`/* breakpoints-xs */
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
`,""]),s.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--mobile-layout":"ERpxjgVQtHHLvhTY_hFT",panel__pointer:"bc7XJ8ixqA1y6aiscled","panel__pointer-position":"WhWRFmGdB89kBdaZDB2b","panel__content-wrapper--info":"r4V2MSspiqnXTrUea8T1","panel__pointer--info":"AmxSNhiUqy_y2wozsSh5","panel__content-wrapper--success":"rjkPtLYzH8ykC6itnGjl","panel__pointer--success":"elN2Ag2FOJOLm_UdgcD4","panel__content-wrapper--warning":"DvYFBpVJAKHzN5ZqonFq","panel__pointer--warning":"Y__Z1VtZZq7MCjbTSkXn","panel__content-wrapper--error":"dJU5t1iliDixb1wEJQTU","panel__pointer--error":"K6h4ZL0w7vXh7xtCBBpK","panel__content-wrapper":"SWZ1MBuuIQm66L683agJ","panel__icon-wrapper":"VF3VnIvqPmLbQNJ2CnCI",panel__content:"BfiKuOxLyXQDtXNvDKyB",panel__header:"kehDhu_3_rCtwZ9Xgq_f",panel__body:"NWoqKSj2k4epsQrCnjqY"};const i=s},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(r,n,e)=>{e.d(n,{Z:()=>i});var l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(l),d=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),o=e.n(d),s=o()(t());s.push([r.id,`.cMdAzgi06lOyezn_J68y {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.qgDrFZ7KD1UilVJX_4Ta {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),s.locals={"popover-panel":"cMdAzgi06lOyezn_J68y","popover-panel__arrow":"qgDrFZ7KD1UilVJX_4Ta"};const i=s}}]);})();
