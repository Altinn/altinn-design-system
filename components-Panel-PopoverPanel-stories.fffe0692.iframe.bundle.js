"use strict";(()=>{var R=Object.defineProperty,K=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var k=(t,o,e)=>o in t?R(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,r=(t,o)=>{for(var e in o||(o={}))F.call(o,e)&&k(t,e,o[e]);if(W)for(var e of W(o))U.call(o,e)&&k(t,e,o[e]);return t},s=(t,o)=>K(t,z(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[27],{"./.storybook/StoryPage.tsx":(t,o,e)=>{e.d(o,{Y:()=>i});var b=e("./node_modules/react/index.js"),a=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),O=e("./src/components/AppWrapper/AppWrapper.tsx"),n=e("./node_modules/react/jsx-runtime.js");const m=({children:P})=>(0,n.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,n.jsxs)("p",{style:{margin:"0"},children:[(0,n.jsx)("strong",{children:"Deprecated:"})," ",P]})});m.displayName="DeprecationWarning";const y=null;try{m.displayName="DeprecationWarning",m.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:m.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(P){}const i=({description:P,deprecationWarning:d})=>(0,n.jsxs)(O.O,{children:[(0,n.jsx)(a.Dx,{}),d&&(0,n.jsx)(m,{children:d}),(0,n.jsx)(a.dk,{children:P}),(0,n.jsx)(a.fQ,{includePrimary:!0}),(0,n.jsx)(a.X6,{children:"Props"}),(0,n.jsx)(a.$4,{story:a.Uh})]});i.displayName="StoryPage";const l=null;try{i.displayName="StoryPage",i.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:i.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(P){}},"./src/components/Panel/PopoverPanel.stories.tsx":(t,o,e)=>{var v,f,_,C,S,B,x,E,j,I,L,D;e.r(o),e.d(o,{Error:()=>u,Info:()=>p,Success:()=>c,Warning:()=>g,__namedExportsOrder:()=>A,default:()=>P});var b=e("./node_modules/react/index.js"),a=e("@storybook/addons"),O=e.n(a),n=e("./node_modules/@digdir/design-system-react/dist/esm/index.js"),m=e("./.storybook/StoryPage.tsx"),y=e("./src/components/Panel/Panel.tsx"),i=e("./src/components/Panel/PopoverPanel.tsx"),l=e("./node_modules/react/jsx-runtime.js");const P={component:i.H,parameters:{docs:{page:()=>(0,l.jsx)(m.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{title:"Tittel",variant:y.c.Warning,trigger:(0,l.jsx)("button",{children:"\xC5pne"}),side:"top"}},d=h=>{const[M,T]=(0,a.useState)(!1),w=()=>{T(!M)};return(0,l.jsx)("div",{children:(0,l.jsxs)(i.H,{variant:h.variant,side:h.side,title:h.title,open:M,trigger:(0,l.jsx)(n.zx,{variant:n.Wu.Filled,color:n.rp.Primary,children:"\xC5pne"}),onOpenChange:T,showPointer:h.showPointer,showIcon:h.showIcon,forceMobileLayout:h.forceMobileLayout,children:[(0,l.jsx)("div",{children:"Her kommer litt informasjon"}),(0,l.jsx)(n.zx,{variant:n.Wu.Filled,color:n.rp.Primary,size:n.qE.Small,onClick:w,children:"Lukk"})]})})};d.displayName="Template";const c=d.bind({});c.args={variant:y.c.Success,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},c.argTypes={trigger:{control:!1}},c.parameters={docs:{description:{story:""}}};const p=d.bind({});p.args={variant:y.c.Info,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},p.argTypes={trigger:{control:!1}},p.parameters={docs:{description:{story:""}}};const g=d.bind({});g.args={variant:y.c.Warning,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},g.argTypes={trigger:{control:!1}},g.parameters={docs:{description:{story:""}}};const u=d.bind({});u.args={variant:y.c.Error,side:"top",showPointer:!1,showIcon:!1,forceMobileLayout:!1,title:"Tittel"},u.argTypes={trigger:{control:!1}},u.parameters={docs:{description:{story:""}}},c.parameters=s(r({},c.parameters),{docs:s(r({},(v=c.parameters)==null?void 0:v.docs),{source:r({originalSource:`args => {
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
}`},(_=(f=c.parameters)==null?void 0:f.docs)==null?void 0:_.source)})}),p.parameters=s(r({},p.parameters),{docs:s(r({},(C=p.parameters)==null?void 0:C.docs),{source:r({originalSource:`args => {
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
}`},(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source)})}),g.parameters=s(r({},g.parameters),{docs:s(r({},(x=g.parameters)==null?void 0:x.docs),{source:r({originalSource:`args => {
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
}`},(j=(E=g.parameters)==null?void 0:E.docs)==null?void 0:j.source)})}),u.parameters=s(r({},u.parameters),{docs:s(r({},(I=u.parameters)==null?void 0:I.docs),{source:r({originalSource:`args => {
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
}`},(D=(L=u.parameters)==null?void 0:L.docs)==null?void 0:D.source)})});const A=["Success","Info","Warning","Error"]}}]);})();
