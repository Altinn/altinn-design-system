"use strict";(()=>{var q=Object.defineProperty,oo=Object.defineProperties;var eo=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var no=Object.prototype.hasOwnProperty,to=Object.prototype.propertyIsEnumerable;var G=(r,n,o)=>n in r?q(r,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[n]=o,W=(r,n)=>{for(var o in n||(n={}))no.call(n,o)&&G(r,o,n[o]);if(Y)for(var o of Y(n))to.call(n,o)&&G(r,o,n[o]);return r},U=(r,n)=>oo(r,eo(n));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[313],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,n,o)=>{o.d(n,{$4:()=>t.$4,Dx:()=>t.Dx,Uh:()=>t.Uh,X6:()=>t.X6,dk:()=>t.dk,fQ:()=>t.fQ,h_:()=>t.h_});var a=o("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),t=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(r,n,o)=>{o.d(n,{Y:()=>i});var a=o("./node_modules/react/index.js"),t=o("./node_modules/@storybook/addon-docs/dist/index.mjs"),d=o("./src/components/AppWrapper/AppWrapper.tsx"),s=o("./node_modules/react/jsx-runtime.js");const e=({children:p})=>(0,s.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,s.jsxs)("p",{style:{margin:"0"},children:[(0,s.jsx)("strong",{children:"Deprecated:"})," ",p]})});e.displayName="DeprecationWarning";const c=null;try{e.displayName="DeprecationWarning",e.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:e.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(p){}const i=({description:p,deprecationWarning:j})=>(0,s.jsxs)(d.O,{children:[(0,s.jsx)(t.Dx,{}),j&&(0,s.jsx)(e,{children:j}),(0,s.jsx)(t.dk,{children:p}),(0,s.jsx)(t.fQ,{includePrimary:!0}),(0,s.jsx)(t.X6,{children:"Props"}),(0,s.jsx)(t.$4,{story:t.Uh})]});i.displayName="StoryPage";const S=null;try{i.displayName="StoryPage",i.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:i.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(p){}},"./src/components/Accordion/Accordion.stories.tsx":(r,n,o)=>{var g,x,L;o.r(n),o.d(n,{Example:()=>u,__namedExportsOrder:()=>f,default:()=>R});var a=o("./node_modules/react/index.js"),t=o("@storybook/client-api"),d=o("./node_modules/classnames/index.js"),s=o.n(d),e=o("./node_modules/@digdir/design-system-react/dist/esm/index.js"),c=o("./.storybook/StoryPage.tsx"),i=o("./src/components/Accordion/Accordion.tsx"),S=o("./src/components/Accordion/AccordionHeader.tsx"),p=o("./src/components/Accordion/AccordionContent.tsx"),j=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),O=o.n(j),C=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),P=o.n(C),I=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),v=o.n(I),l=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),y=o.n(l),k=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),E=o.n(k),_=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),T=o.n(_),A=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css"),b={};b.styleTagTransform=T(),b.setAttributes=y(),b.insert=v().bind(null,"head"),b.domAPI=P(),b.insertStyleElement=E();var B=O()(A.Z,b);const D=A.Z&&A.Z.locals?A.Z.locals:void 0;var h=o("./src/components/Accordion/Context.ts"),m=o("./node_modules/react/jsx-runtime.js");const R={component:i.U,subcomponents:{AccordionHeader:S._,AccordionContent:p.v},parameters:{docs:{page:()=>(0,m.jsx)(c.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Accordion from @digdir/design-system-react instead."})}},args:{variant:h.Bt.Primary,useActions:!0,subtitle:"Subtitle"}},M=K=>{const[N,z]=(0,a.useState)(!1),[Z,Q]=(0,a.useState)(!1),J=()=>{z(!N)},w=()=>{Q(!Z)},V="Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling",[{useActions:$}]=(0,t.useArgs)(),[{subtitle:X}]=(0,t.useArgs)(),H=$?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:"Example setup"}),(0,m.jsx)(e.zx,{variant:e.Wu.Filled,color:e.rp.Primary,size:e.qE.Small,children:"Separat knapp 1"}),(0,m.jsx)(e.zx,{variant:e.Wu.Outline,color:e.rp.Primary,size:e.qE.Small,children:"Separat knapp 2"})]}):void 0,F=X.length>0?X:void 0;return(0,m.jsxs)("div",{className:s()(D.container),children:[(0,m.jsxs)(i.U,{onClick:J,open:N,iconVariant:K.iconVariant,children:[(0,m.jsx)(S._,{actions:H,subtitle:F,children:"Accordion 1"}),(0,m.jsx)(p.v,{children:V})]}),(0,m.jsxs)(i.U,{onClick:w,open:Z,iconVariant:K.iconVariant,children:[(0,m.jsx)(S._,{actions:H,subtitle:F,children:"Accordion 2"}),(0,m.jsx)(p.v,{children:V})]})]})};M.displayName="Template";const u=M.bind({});u.args={iconVariant:h.Bt.Primary,open:!1},u.argTypes={open:{control:!1},onClick:{control:!1}},u.parameters={docs:{description:{story:""}}},u.parameters=U(W({},u.parameters),{docs:U(W({},(g=u.parameters)==null?void 0:g.docs),{source:W({originalSource:`args => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const AccordionExampleContent = 'Accordion-innhold uten css for \xE5 tilrettelegge for selvvalgt styling';
  const [{
    useActions
  }] = useArgs();
  const [{
    subtitle
  }] = useArgs();
  const ActionDiv = useActions ? <>
      <div>Example setup</div>
      <Button variant={ButtonVariant.Filled} color={ButtonColor.Primary} size={ButtonSize.Small}>
        Separat knapp 1
      </Button>
      <Button variant={ButtonVariant.Outline} color={ButtonColor.Primary} size={ButtonSize.Small}>
        Separat knapp 2
      </Button>
    </> : undefined;
  const SubtitleText = subtitle.length > 0 ? subtitle : undefined;
  return <div className={cn(classes['container'])}>
      <Accordion onClick={handleClick1} open={open1} iconVariant={args.iconVariant}>
        <AccordionHeader actions={ActionDiv} subtitle={SubtitleText}>
          Accordion 1
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
      <Accordion onClick={handleClick2} open={open2} iconVariant={args.iconVariant}>
        <AccordionHeader actions={ActionDiv} subtitle={SubtitleText}>
          Accordion 2
        </AccordionHeader>
        <AccordionContent>{AccordionExampleContent}</AccordionContent>
      </Accordion>
    </div>;
}`},(L=(x=u.parameters)==null?void 0:x.docs)==null?void 0:L.source)})});const f=["Example"]},"./src/components/Accordion/Accordion.tsx":(r,n,o)=>{o.d(n,{U:()=>_});var a=o("./node_modules/react/index.js"),t=o("./src/components/Accordion/Context.ts"),d=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(d),e=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=o.n(e),i=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=o.n(i),p=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=o.n(p),O=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=o.n(O),P=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=o.n(P),v=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),l={};l.styleTagTransform=I(),l.setAttributes=j(),l.insert=S().bind(null,"head"),l.domAPI=c(),l.insertStyleElement=C();var y=s()(v.Z,l);const k=v.Z&&v.Z.locals?v.Z.locals:void 0;var E=o("./node_modules/react/jsx-runtime.js");const _=({children:A,open:b,onClick:B,iconVariant:D=t.Bt.Primary})=>{const h=(0,a.useId)(),m=(0,a.useId)();return(0,E.jsx)("div",{className:k.accordion,children:(0,E.jsx)(t.SY.Provider,{value:{onClick:B,open:b,headerId:h,contentId:m,iconVariant:D},children:A})})};_.displayName="Accordion";const T=null;try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:_.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(A){}},"./src/components/Accordion/AccordionContent.tsx":(r,n,o)=>{o.d(n,{v:()=>s});var a=o("./node_modules/react/index.js"),t=o("./src/components/Accordion/Context.ts"),d=o("./node_modules/react/jsx-runtime.js");const s=({children:c})=>{const{open:i,contentId:S,headerId:p}=(0,t.EF)();return(0,d.jsx)("div",{children:i&&(0,d.jsx)("div",{"aria-expanded":i,id:S,"aria-labelledby":p,children:c})})};s.displayName="AccordionContent";var e=null;try{s.displayName="AccordionContent",s.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:s.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(c){}},"./src/components/Accordion/AccordionHeader.tsx":(r,n,o)=>{o.d(n,{_:()=>b});var a=o("./node_modules/react/index.js"),t=o("./node_modules/classnames/index.js"),d=o.n(t),s=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=o.n(s),c=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=o.n(c),S=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(S),j=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=o.n(j),C=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=o.n(C),I=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=o.n(I),l=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),y={};y.styleTagTransform=v(),y.setAttributes=O(),y.insert=p().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=P();var k=e()(l.Z,y);const E=l.Z&&l.Z.locals?l.Z.locals:void 0;var _=o("./src/components/Accordion/Context.ts"),T=o("./src/components/Accordion/AccordionIcon.tsx"),A=o("./node_modules/react/jsx-runtime.js");const b=({children:B,actions:D,subtitle:h})=>{const{onClick:m,open:R,headerId:M,contentId:u}=(0,_.EF)();return(0,A.jsxs)("div",{className:d()(E["accordion-header"],{[E["accordion-header--subtitle"]]:h}),children:[(0,A.jsx)(T.X,{}),(0,A.jsxs)("button",{className:d()(E["accordion-header__title"]),"aria-expanded":R,type:"button",onClick:m,id:M,"aria-controls":u,children:[B,(h==null?void 0:h.length)&&(0,A.jsx)("div",{"data-testid":"accordion-header-subtitle",className:d()(E["accordion-header__subtitle"]),children:h})]}),(0,A.jsx)("div",{className:d()(E["accordion-header__actions"]),children:D})]})};b.displayName="AccordionHeader";try{b.displayName="AccordionHeader",b.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:b.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(B){}},"./src/components/Accordion/AccordionIcon.tsx":(r,n,o)=>{o.d(n,{X:()=>R});var a=o("./node_modules/react/index.js"),t=o("./node_modules/classnames/index.js"),d=o.n(t),s=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),e=o.n(s),c=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=o.n(c),S=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(S),j=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),O=o.n(j),C=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),P=o.n(C),I=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),v=o.n(I),l=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),y={};y.styleTagTransform=v(),y.setAttributes=O(),y.insert=p().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=P();var k=e()(l.Z,y);const E=l.Z&&l.Z.locals?l.Z.locals:void 0;var _=o("./src/components/Accordion/Context.ts"),T;function A(){return A=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var g=arguments[f];for(var x in g)Object.prototype.hasOwnProperty.call(g,x)&&(u[x]=g[x])}return u},A.apply(this,arguments)}var b=function(f){return a.createElement("svg",A({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),T||(T=a.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},B;function D(){return D=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var g=arguments[f];for(var x in g)Object.prototype.hasOwnProperty.call(g,x)&&(u[x]=g[x])}return u},D.apply(this,arguments)}var h=function(f){return a.createElement("svg",D({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),B||(B=a.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},m=o("./node_modules/react/jsx-runtime.js");const R=()=>{const{onClick:u,open:f,iconVariant:g}=(0,_.EF)(),x=[E["accordion-icon"],{[E["accordion-icon--opened"]]:f}],L={height:20,width:20,className:d()(x),["data-testid"]:g,onClick:u};switch(g){case _.Bt.Primary:return(0,m.jsx)(b,W({},L));case _.Bt.Secondary:return(0,m.jsx)(h,W({},L))}},M=null},"./src/components/Accordion/Context.ts":(r,n,o)=>{o.d(n,{Bt:()=>t,EF:()=>s,SY:()=>d});var a=o("./node_modules/react/index.js");let t=function(e){return e.Primary="primary",e.Secondary="secondary",e}({});const d=(0,a.createContext)(void 0),s=()=>{const e=(0,a.useContext)(d);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e}},"./src/components/AppWrapper/AppWrapper.tsx":(r,n,o)=>{o.d(n,{O:()=>_});var a=o("./node_modules/react/index.js"),t=o("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),d=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=o.n(d),e=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),c=o.n(e),i=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),S=o.n(i),p=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),j=o.n(p),O=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),C=o.n(O),P=o("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=o.n(P),v=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),l={};l.styleTagTransform=I(),l.setAttributes=j(),l.insert=S().bind(null,"head"),l.domAPI=c(),l.insertStyleElement=C();var y=s()(v.Z,l);const k=v.Z&&v.Z.locals?v.Z.locals:void 0;var E=o("./node_modules/react/jsx-runtime.js");const _=({children:T})=>(0,E.jsx)("div",{children:T});_.displayName="AppWrapper";try{_.displayName="AppWrapper",_.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:_.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(T){}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(r,n,o)=>{o.d(n,{Z:()=>c});var a=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(a),d=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),e=s()(t());e.push([r.id,`.oQBwVfgxJLkfsi9a9XEn {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),e.locals={accordion:"oQBwVfgxJLkfsi9a9XEn"};const c=e},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.stories.module.css":(r,n,o)=>{o.d(n,{Z:()=>c});var a=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(a),d=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),e=s()(t());e.push([r.id,`._OBRFgXL2tN4nG5JOLe7 {
  width: 80vw;
}
`,""]),e.locals={container:"_OBRFgXL2tN4nG5JOLe7"};const c=e},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(r,n,o)=>{o.d(n,{Z:()=>c});var a=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(a),d=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),e=s()(t());e.push([r.id,`.NEcyLNUwJnVMweQESHEG {
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
  .GFfGUEjlr7GrLuCE0wwo {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .GFfGUEjlr7GrLuCE0wwo {
    opacity: 60%;
    font-size: 0.9rem;
    display: block;
  }
  .tAtjuFUsbRRwXoGrlxBR {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }
}

.BmsGIJNh04bEnX0BIk5G {
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
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

.qbcYvduzjTWjJTcvCaZE {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0 0.2rem;
}
`,""]),e.locals={"accordion-header":"NEcyLNUwJnVMweQESHEG","accordion-header__subtitle":"GFfGUEjlr7GrLuCE0wwo","accordion-header--subtitle":"tAtjuFUsbRRwXoGrlxBR","accordion-header__title":"BmsGIJNh04bEnX0BIk5G","accordion-header__actions":"qbcYvduzjTWjJTcvCaZE"};const c=e},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(r,n,o)=>{o.d(n,{Z:()=>c});var a=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(a),d=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),e=s()(t());e.push([r.id,`.Kg7QyJA5SEy5eOcxFoTy {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.Qm26L9IEUvQVXYvte3Dk {
  transform: rotate(90deg);
}
`,""]),e.locals={"accordion-icon":"Kg7QyJA5SEy5eOcxFoTy","accordion-icon--opened":"Qm26L9IEUvQVXYvte3Dk"};const c=e},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,n,o)=>{o.d(n,{Z:()=>c});var a=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(a),d=o("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),s=o.n(d),e=s()(t());e.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),e.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),e.locals={};const c=e}}]);})();
