(()=>{var K=Object.defineProperty,U=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var x=(o,e,t)=>e in o?K(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,v=(o,e)=>{for(var t in e||(e={}))M.call(e,t)&&x(o,t,e[t]);if(T)for(var t of T(e))C.call(e,t)&&x(o,t,e[t]);return o},g=(o,e)=>U(o,N(e));var D=(o,e)=>{var t={};for(var l in o)M.call(o,l)&&e.indexOf(l)<0&&(t[l]=o[l]);if(o!=null&&T)for(var l of T(o))e.indexOf(l)<0&&C.call(o,l)&&(t[l]=o[l]);return t};(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[101],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(o,e,t)=>{"use strict";t.d(e,{$4:()=>r.$4,Dx:()=>r.Dx,Uh:()=>r.Uh,X6:()=>r.X6,dk:()=>r.dk,fQ:()=>r.fQ,h_:()=>r.h_});var l=t("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),r=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(o,e,t)=>{"use strict";t.d(e,{Y:()=>d});var l=t("./node_modules/react/index.js"),r=t("./node_modules/@storybook/addon-docs/dist/index.mjs"),c=t("./src/components/AppWrapper/AppWrapper.tsx"),n=t("./node_modules/react/jsx-runtime.js");const s=({children:i})=>(0,n.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,n.jsxs)("p",{style:{margin:"0"},children:[(0,n.jsx)("strong",{children:"Deprecated:"})," ",i]})});s.displayName="DeprecationWarning";const a=null;try{s.displayName="DeprecationWarning",s.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:s.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(i){}const d=({description:i,deprecationWarning:y})=>(0,n.jsxs)(c.O,{children:[(0,n.jsx)(r.Dx,{}),y&&(0,n.jsx)(s,{children:y}),(0,n.jsx)(r.dk,{children:i}),(0,n.jsx)(r.fQ,{includePrimary:!0}),(0,n.jsx)(r.X6,{children:"Props"}),(0,n.jsx)(r.$4,{story:r.Uh})]});d.displayName="StoryPage";const m=null;try{d.displayName="StoryPage",d.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:d.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(i){}},"./src/components/List/List.stories.tsx":(o,e,t)=>{var L,j,I,_,u,p;"use strict";t.r(e),t.d(e,{Dashed:()=>i,Solid:()=>m,__namedExportsOrder:()=>y,default:()=>a});var l=t("./node_modules/react/index.js"),r=t("./.storybook/StoryPage.tsx"),c=t("./src/components/List/List.tsx"),n=t("./src/components/List/ListItem.tsx"),s=t("./node_modules/react/jsx-runtime.js");const a={component:c.a,parameters:{docs:{page:()=>(0,s.jsx)(r.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use List from @digdir/design-system-react instead."})}},args:{}},d=S=>(0,s.jsx)("div",{children:(0,s.jsxs)(c.a,{borderStyle:S.borderStyle,children:[(0,s.jsx)(n.H,{children:"List Item 1"}),(0,s.jsx)(n.H,{children:"List Item 2"}),(0,s.jsx)(n.H,{children:"List Item 3"})]})});d.displayName="Template";const m=d.bind({});m.args={borderStyle:"solid"},m.parameters={docs:{description:{story:""}}};const i=d.bind({});i.args={borderStyle:"dashed"},i.parameters={docs:{description:{story:""}}},m.parameters=g(v({},m.parameters),{docs:g(v({},(L=m.parameters)==null?void 0:L.docs),{source:v({originalSource:`args => {
  return <div>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>;
}`},(I=(j=m.parameters)==null?void 0:j.docs)==null?void 0:I.source)})}),i.parameters=g(v({},i.parameters),{docs:g(v({},(_=i.parameters)==null?void 0:_.docs),{source:v({originalSource:`args => {
  return <div>
      <List borderStyle={args.borderStyle}>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </div>;
}`},(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source)})});const y=["Solid","Dashed"]},"./src/components/AppWrapper/AppWrapper.tsx":(o,e,t)=>{"use strict";t.d(e,{O:()=>A});var l=t("./node_modules/react/index.js"),r=t("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),c=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(c),s=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),a=t.n(s),d=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),m=t.n(d),i=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),y=t.n(i),L=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),j=t.n(L),I=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_=t.n(I),u=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),p={};p.styleTagTransform=_(),p.setAttributes=y(),p.insert=m().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=j();var S=n()(u.Z,p);const P=u.Z&&u.Z.locals?u.Z.locals:void 0;var E=t("./node_modules/react/jsx-runtime.js");const A=({children:f})=>(0,E.jsx)("div",{children:f});A.displayName="AppWrapper";try{A.displayName="AppWrapper",A.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:A.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(f){}},"./src/components/List/List.tsx":(o,e,t)=>{"use strict";t.d(e,{a:()=>f});var l=t("./node_modules/react/index.js"),r=t("./node_modules/classnames/index.js"),c=t.n(r),n=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=t.n(n),a=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),d=t.n(a),m=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),i=t.n(m),y=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),L=t.n(y),j=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),I=t.n(j),_=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=t.n(_),p=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),S={};S.styleTagTransform=u(),S.setAttributes=L(),S.insert=i().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=I();var P=s()(p.Z,S);const E=p.Z&&p.Z.locals?p.Z.locals:void 0;var A=t("./node_modules/react/jsx-runtime.js");const f=b=>{var W=b,{borderStyle:h="solid",children:O,className:R}=W,B=D(W,["borderStyle","children","className"]);return(0,A.jsx)("ul",g(v({},B),{className:c()([E.list,E[h],R]),children:O}))};f.displayName="List";try{f.displayName="List",f.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"solid"},description:"Select which border style between items",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:f.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(h){}},"./src/components/List/ListItem.tsx":(o,e,t)=>{"use strict";t.d(e,{H:()=>E});var l=t("./node_modules/react/index.js"),r=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(r),n=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=t.n(n),a=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),d=t.n(a),m=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),i=t.n(m),y=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),L=t.n(y),j=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),I=t.n(j),_=t("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),u={};u.styleTagTransform=I(),u.setAttributes=i(),u.insert=d().bind(null,"head"),u.domAPI=s(),u.insertStyleElement=L();var p=c()(_.Z,u);const S=_.Z&&_.Z.locals?_.Z.locals:void 0;var P=t("./node_modules/react/jsx-runtime.js");const E=h=>{var O=h,{children:A}=O,f=D(O,["children"]);return(0,P.jsx)("li",g(v({},f),{className:S.listItem,children:A}))};E.displayName="ListItem";try{E.displayName="ListItem",E.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:E.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(A){}},"./node_modules/classnames/index.js":(o,e)=>{var t,l;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var r={}.hasOwnProperty,c="[native code]";function n(){for(var s=[],a=0;a<arguments.length;a++){var d=arguments[a];if(d){var m=typeof d;if(m==="string"||m==="number")s.push(d);else if(Array.isArray(d)){if(d.length){var i=n.apply(null,d);i&&s.push(i)}}else if(m==="object"){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){s.push(d.toString());continue}for(var y in d)r.call(d,y)&&d[y]&&s.push(y)}}}return s.join(" ")}o.exports?(n.default=n,o.exports=n):(t=[],l=function(){return n}.apply(e,t),l!==void 0&&(o.exports=l))})()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(o,e,t)=>{"use strict";t.d(e,{Z:()=>a});var l=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(l),c=t("./node_modules/css-loader/dist/runtime/api.js"),n=t.n(c),s=n()(r());s.push([o.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),s.push([o.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),s.locals={};const a=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(o,e,t)=>{"use strict";t.d(e,{Z:()=>a});var l=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(l),c=t("./node_modules/css-loader/dist/runtime/api.js"),n=t.n(c),s=n()(r());s.push([o.id,`.Xw1luME3E_z0gNb6MiBS {
  --component-list-border_width: 1px;

  border-top-color: var(--component-list-border_color);
  border-top-style: var(--component-list-border_style);
  border-top-width: var(--component-list-border_width);
  list-style-type: none;
  padding-left: 0;
}

.Xw1luME3E_z0gNb6MiBS.pf2EsULmm162Z_6kyvcA {
  --component-list-border_color: #bcc7cc;
  --component-list-border_style: solid;
}

.Xw1luME3E_z0gNb6MiBS.FqPqCHtv344bRoIhKfQy {
  --component-list-border_color: #1eadf7;
  --component-list-border_style: dashed;
}
`,""]),s.locals={list:"Xw1luME3E_z0gNb6MiBS",solid:"pf2EsULmm162Z_6kyvcA",dashed:"FqPqCHtv344bRoIhKfQy"};const a=s},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(o,e,t)=>{"use strict";t.d(e,{Z:()=>a});var l=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(l),c=t("./node_modules/css-loader/dist/runtime/api.js"),n=t.n(c),s=n()(r());s.push([o.id,`.BNcQUpVEM2OdIz9W94UO {
  border-bottom-color: var(--component-list-border_color);
  border-bottom-style: var(--component-list-border_style);
  border-bottom-width: var(--component-list-border_width);
  display: block;
}
`,""]),s.locals={listItem:"BNcQUpVEM2OdIz9W94UO"};const a=s}}]);})();
