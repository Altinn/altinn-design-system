"use strict";(()=>{var ne=Object.defineProperty,se=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var q=(i,n,e)=>n in i?ne(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,H=(i,n)=>{for(var e in n||(n={}))ee.call(n,e)&&q(i,e,n[e]);if(J)for(var e of J(n))oe.call(n,e)&&q(i,e,n[e]);return i},Q=(i,n)=>se(i,re(n));var G=(i,n)=>{var e={};for(var t in i)ee.call(i,t)&&n.indexOf(t)<0&&(e[t]=i[t]);if(i!=null&&J)for(var t of J(i))n.indexOf(t)<0&&oe.call(i,t)&&(e[t]=i[t]);return e};(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[895],{"./src/components/AppWrapper/AppWrapper.stories.tsx":(i,n,e)=>{var P,K,W;e.r(n),e.d(n,{App:()=>g,__namedExportsOrder:()=>l,default:()=>f});var t=e("./src/components/Panel/Panel.tsx"),d=e("./src/components/Panel/PopoverPanel.tsx"),r=e("./src/components/CircularProgress/CircularProgress.tsx"),a=e("./src/components/AppWrapper/AppWrapper.tsx"),o=e("./src/components/Accordion/Accordion.tsx"),s=e("./src/components/Accordion/AccordionHeader.tsx"),A=e("./src/components/Accordion/AccordionContent.tsx"),E=e("./src/components/Accordion/Context.ts"),h=e("./src/components/Accordion/AccordionIcon.tsx"),R=e("./src/components/Page/Page.tsx"),I=e("./src/components/Page/PageHeader.tsx"),T=e("./src/components/Page/PageContent.tsx"),x=e("./src/components/Page/Context.ts"),C=e("./src/components/List/List.tsx"),b=e("./src/components/List/ListItem.tsx"),c=e("./src/components/List/Context.ts"),p=e("./src/components/SearchField/SearchField.tsx"),O=e("./src/components/Map/Map.tsx"),u=e("./src/components/Table/Table.tsx"),y=e("./src/components/Table/TableHeader.tsx"),_=e("./src/components/Table/TableRow.tsx"),m=e("./src/components/Table/TableBody.tsx"),S=e("./src/components/Table/TableCell.tsx"),M=e("./src/components/Table/TableFooter.tsx"),k=e("./src/components/Table/Toolbox.ts"),D=e("./src/components/Table/ResponsiveTable.tsx"),B=e("./src/components/_InputWrapper/index.ts"),Z=e("./src/components/Pagination/index.ts"),L=e("./src/components/SvgIcon/index.ts");const f={component:a.O},g={args:{}};g.parameters=Q(H({},g.parameters),{docs:Q(H({},(P=g.parameters)==null?void 0:P.docs),{source:H({originalSource:`{
  args: {}
}`},(W=(K=g.parameters)==null?void 0:K.docs)==null?void 0:W.source)})});const l=["App"]},"./src/components/Accordion/Accordion.tsx":(i,n,e)=>{e.d(n,{U:()=>y});var t=e("./node_modules/react/index.js"),d=e("./src/components/Accordion/Context.ts"),r=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),o=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(o),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(A),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(h),I=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(I),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(x),b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css"),c={};c.styleTagTransform=C(),c.setAttributes=R(),c.insert=E().bind(null,"head"),c.domAPI=s(),c.insertStyleElement=T();var p=a()(b.Z,c);const O=b.Z&&b.Z.locals?b.Z.locals:void 0;var u=e("./node_modules/react/jsx-runtime.js");const y=({children:m,open:S,onClick:M,iconVariant:k=d.Bt.Primary})=>{const D=(0,t.useId)(),B=(0,t.useId)();return(0,u.jsx)("div",{className:O.accordion,children:(0,u.jsx)(d.SY.Provider,{value:{onClick:M,open:S,headerId:D,contentId:B,iconVariant:k},children:m})})};y.displayName="Accordion";const _=null;try{y.displayName="Accordion",y.__docgenInfo={description:"",displayName:"Accordion",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"ClickHandler"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},iconVariant:{defaultValue:{value:"AccordionIconVariant.Primary"},description:"",name:"iconVariant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:y.__docgenInfo,name:"Accordion",path:"src/components/Accordion/Accordion.tsx#Accordion"})}catch(m){}},"./src/components/Accordion/AccordionContent.tsx":(i,n,e)=>{e.d(n,{v:()=>a});var t=e("./node_modules/react/index.js"),d=e("./src/components/Accordion/Context.ts"),r=e("./node_modules/react/jsx-runtime.js");const a=({children:s})=>{const{open:A,contentId:E,headerId:h}=(0,d.EF)();return(0,r.jsx)("div",{children:A&&(0,r.jsx)("div",{"aria-expanded":A,id:E,"aria-labelledby":h,children:s})})};a.displayName="AccordionContent";var o=null;try{a.displayName="AccordionContent",a.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:a.__docgenInfo,name:"AccordionContent",path:"src/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch(s){}},"./src/components/Accordion/AccordionHeader.tsx":(i,n,e)=>{e.d(n,{_:()=>S});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css"),p={};p.styleTagTransform=b(),p.setAttributes=I(),p.insert=h().bind(null,"head"),p.domAPI=A(),p.insertStyleElement=x();var O=o()(c.Z,p);const u=c.Z&&c.Z.locals?c.Z.locals:void 0;var y=e("./src/components/Accordion/Context.ts"),_=e("./src/components/Accordion/AccordionIcon.tsx"),m=e("./node_modules/react/jsx-runtime.js");const S=({children:M,actions:k,subtitle:D})=>{const{onClick:B,open:Z,headerId:L,contentId:j}=(0,y.EF)();return(0,m.jsxs)("div",{className:r()(u["accordion-header"],{[u["accordion-header--subtitle"]]:D}),children:[(0,m.jsx)(_.X,{}),(0,m.jsxs)("button",{className:r()(u["accordion-header__title"]),"aria-expanded":Z,type:"button",onClick:B,id:L,"aria-controls":j,children:[M,(D==null?void 0:D.length)&&(0,m.jsx)("div",{"data-testid":"accordion-header-subtitle",className:r()(u["accordion-header__subtitle"]),children:D})]}),(0,m.jsx)("div",{className:r()(u["accordion-header__actions"]),children:k})]})};S.displayName="AccordionHeader";try{S.displayName="AccordionHeader",S.__docgenInfo={description:"",displayName:"AccordionHeader",props:{actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Accordion/AccordionHeader.tsx#AccordionHeader"]={docgenInfo:S.__docgenInfo,name:"AccordionHeader",path:"src/components/Accordion/AccordionHeader.tsx#AccordionHeader"})}catch(M){}},"./src/components/Accordion/AccordionIcon.tsx":(i,n,e)=>{e.d(n,{X:()=>Z});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css"),p={};p.styleTagTransform=b(),p.setAttributes=I(),p.insert=h().bind(null,"head"),p.domAPI=A(),p.insertStyleElement=x();var O=o()(c.Z,p);const u=c.Z&&c.Z.locals?c.Z.locals:void 0;var y=e("./src/components/Accordion/Context.ts"),_;function m(){return m=Object.assign?Object.assign.bind():function(j){for(var f=1;f<arguments.length;f++){var g=arguments[f];for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&(j[l]=g[l])}return j},m.apply(this,arguments)}var S=function(f){return t.createElement("svg",m({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),_||(_=t.createElement("path",{d:"M12.883 34 10 31.09 22.975 18 10 4.91 12.883 2l15.86 16-15.86 16Z",fill:"#000"})))},M;function k(){return k=Object.assign?Object.assign.bind():function(j){for(var f=1;f<arguments.length;f++){var g=arguments[f];for(var l in g)Object.prototype.hasOwnProperty.call(g,l)&&(j[l]=g[l])}return j},k.apply(this,arguments)}var D=function(f){return t.createElement("svg",k({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f),M||(M=t.createElement("path",{d:"M18 34c8.8 0 16-7.2 16-16S26.8 2 18 2 2 9.2 2 18s7.2 16 16 16Zm-3.644-22.844 1.688-1.778 8.178 8.178-8.178 8.177-1.688-1.777 6.488-6.4-6.488-6.4Z",fill:"#0062BA"})))},B=e("./node_modules/react/jsx-runtime.js");const Z=()=>{const{onClick:j,open:f,iconVariant:g}=(0,y.EF)(),l=[u["accordion-icon"],{[u["accordion-icon--opened"]]:f}],P={height:20,width:20,className:r()(l),["data-testid"]:g,onClick:j};switch(g){case y.Bt.Primary:return(0,B.jsx)(S,H({},P));case y.Bt.Secondary:return(0,B.jsx)(D,H({},P))}},L=null},"./src/components/Accordion/Context.ts":(i,n,e)=>{e.d(n,{Bt:()=>d,EF:()=>a,SY:()=>r});var t=e("./node_modules/react/index.js");let d=function(o){return o.Primary="primary",o.Secondary="secondary",o}({});const r=(0,t.createContext)(void 0),a=()=>{const o=(0,t.useContext)(r);if(o===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return o}},"./src/components/CircularProgress/CircularProgress.tsx":(i,n,e)=>{e.d(n,{D:()=>y});var t=e("./node_modules/react/index.js"),d=e("./src/DesignTokens/index.ts"),r=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),o=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(o),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(A),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(h),I=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(I),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(x),b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css"),c={};c.styleTagTransform=C(),c.setAttributes=R(),c.insert=E().bind(null,"head"),c.domAPI=s(),c.insertStyleElement=T();var p=a()(b.Z,c);const O=b.Z&&b.Z.locals?b.Z.locals:void 0;var u=e("./node_modules/react/jsx-runtime.js");const y=({value:m,width:S=70,strokeWidth:M=2.5,ariaLabel:k,label:D,id:B})=>{const Z=`${B}-label`,L=!k&&D?Z:void 0;return(0,u.jsxs)("div",{id:B,className:O.container,style:{width:`${S}px`},role:"progressbar","aria-labelledby":L,"aria-label":k,children:[D&&(0,u.jsx)("div",{id:Z,className:O.label,children:D}),(0,u.jsxs)("svg",{className:O.svg,viewBox:"0 0 35.8 35.8","aria-hidden":!0,children:[(0,u.jsx)(_,{stroke:d.T.B0w,strokeWidth:M}),(0,u.jsx)(_,{strokeWidth:M,stroke:d.T.CbY,strokeDashoffset:100-m,strokeDasharray:"100 100",className:O.circleTransition})]})]})};y.displayName="CircularProgress";const _=m=>(0,u.jsx)("circle",H({cx:"50%",cy:"50%",fill:"none",r:"15.9155"},m));_.displayName="Circle";try{y.displayName="CircularProgress",y.__docgenInfo={description:"",displayName:"CircularProgress",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},width:{defaultValue:{value:"70"},description:"",name:"width",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"2.5"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/CircularProgress/CircularProgress.tsx#CircularProgress"]={docgenInfo:y.__docgenInfo,name:"CircularProgress",path:"src/components/CircularProgress/CircularProgress.tsx#CircularProgress"})}catch(m){}},"./src/components/List/Context.ts":(i,n,e)=>{e.d(n,{N4:()=>d,UU:()=>a,ZM:()=>r});var t=e("./node_modules/react/index.js");let d=function(o){return o.Solid="solid",o.Dashed="dashed",o}({});const r=(0,t.createContext)({borderStyle:d.Solid}),a=()=>{const o=(0,t.useContext)(r);if(o===void 0)throw new Error("useListContext must be used within a ListContext");return o}},"./src/components/List/List.tsx":(i,n,e)=>{e.d(n,{a:()=>m});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css"),p={};p.styleTagTransform=b(),p.setAttributes=I(),p.insert=h().bind(null,"head"),p.domAPI=A(),p.insertStyleElement=x();var O=o()(c.Z,p);const u=c.Z&&c.Z.locals?c.Z.locals:void 0;var y=e("./src/components/List/Context.ts"),_=e("./node_modules/react/jsx-runtime.js");const m=({children:S,borderStyle:M=y.N4.Solid})=>(0,_.jsx)("ul",{className:r()(u.list,u[`list--${M}`]),children:(0,_.jsx)(y.ZM.Provider,{value:{borderStyle:M},children:S})});m.displayName="List";try{m.displayName="List",m.__docgenInfo={description:"",displayName:"List",props:{borderStyle:{defaultValue:{value:"BorderStyle.Solid"},description:"",name:"borderStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:m.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(S){}},"./src/components/List/ListItem.tsx":(i,n,e)=>{e.d(n,{H:()=>m});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css"),p={};p.styleTagTransform=b(),p.setAttributes=I(),p.insert=h().bind(null,"head"),p.domAPI=A(),p.insertStyleElement=x();var O=o()(c.Z,p);const u=c.Z&&c.Z.locals?c.Z.locals:void 0;var y=e("./src/components/List/Context.ts"),_=e("./node_modules/react/jsx-runtime.js");const m=({children:S})=>{const{borderStyle:M}=(0,y.UU)();return(0,_.jsx)("li",{className:r()(u["list-item"],u[`list-item--${M}`]),children:S})};m.displayName="ListItem";try{m.displayName="ListItem",m.__docgenInfo={description:"",displayName:"ListItem",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:m.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(S){}},"./src/components/Map/Map.tsx":(i,n,e)=>{e.d(n,{D:()=>j});var t=e("./node_modules/react-leaflet/lib/MapContainer.js"),d=e("./node_modules/react-leaflet/lib/TileLayer.js"),r=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),o=e("./node_modules/react-leaflet/lib/hooks.js"),s=e("./node_modules/react/index.js"),A=e("./node_modules/leaflet/dist/leaflet-src.js"),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),p=e.n(c),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),u=e.n(O),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),_={};_.styleTagTransform=u(),_.setAttributes=b(),_.insert=x().bind(null,"head"),_.domAPI=I(),_.insertStyleElement=p();var m=h()(y.Z,_);const S=y.Z&&y.Z.locals?y.Z.locals:void 0;var M=e("./node_modules/leaflet/dist/leaflet.css"),k=e("./node_modules/react/jsx-runtime.js");const D={latitude:64.888996,longitude:12.8186054},B=4,Z=16,L=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],j=({readOnly:l=!1,layers:P=L,centerLocation:K=D,zoom:W=B,flyToZoomLevel:U=Z,markerLocation:v,markerIcon:N,onClick:z})=>{const[w,X]=(0,s.useState)(null),V=(0,s.useMemo)(()=>{if(!(!(v!=null&&v.latitude)||!(v!=null&&v.longitude)))return v},[v]);return(0,s.useEffect)(()=>{w&&V&&U&&w.flyTo({lat:V.latitude,lng:V.longitude},U)},[w,V,U]),(0,k.jsxs)(t.h,{className:S.map,center:f(K),zoom:W,zoomControl:!l,dragging:!l,touchZoom:!l,doubleClickZoom:!l,scrollWheelZoom:!l,attributionControl:!1,ref:X,children:[P.map((F,Y)=>(0,k.jsx)(d.I,{url:F.url,attribution:F.attribution,subdomains:F.subdomains?F.subdomains:[],opacity:l?.5:1},Y)),(0,k.jsx)(r.z,{prefix:!1}),V?(0,k.jsx)(a.J,{position:f(V),icon:(0,A.icon)(N)}):null,(0,k.jsx)(g,{readOnly:l,onClick:z})]})};j.displayName="Map";function f(l){return[l.latitude,l.longitude]}const g=({onClick:l,readOnly:P})=>((0,o.zV)({click:K=>{if(l&&!P){const W=K.latlng.wrap();l({latitude:W.lat,longitude:W.lng})}}}),null);try{j.displayName="Map",j.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}',
    attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
  },
  {
    url: 'https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}',
    attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
  },
]`},description:"",name:"layers",required:!1,type:{name:"MapLayer[]"}},centerLocation:{defaultValue:{value:`{
  latitude: 64.888996,
  longitude: 12.8186054,
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},flyToZoomLevel:{defaultValue:{value:"16"},description:"",name:"flyToZoomLevel",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:j.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(l){}},"./src/components/Page/Context.ts":(i,n,e)=>{e.d(n,{gL:()=>d,lO:()=>o,th:()=>r,z1:()=>a});var t=e("./node_modules/react/index.js");let d=function(s){return s.Primary="primary",s.Success="success",s}({}),r=function(s){return s.Small="small",s.Medium="medium",s}({});const a=(0,t.createContext)({color:d.Primary,size:r.Medium}),o=()=>{const s=(0,t.useContext)(a);if(s===void 0)throw new Error("usePageContext must be used within a PageContext");return s}},"./src/components/Page/Page.tsx":(i,n,e)=>{e.d(n,{T:()=>y});var t=e("./node_modules/react/index.js"),d=e("./src/components/Page/Context.ts"),r=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(r),o=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),s=e.n(o),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),E=e.n(A),h=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),R=e.n(h),I=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=e.n(I),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(x),b=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css"),c={};c.styleTagTransform=C(),c.setAttributes=R(),c.insert=E().bind(null,"head"),c.domAPI=s(),c.insertStyleElement=T();var p=a()(b.Z,c);const O=b.Z&&b.Z.locals?b.Z.locals:void 0;var u=e("./node_modules/react/jsx-runtime.js");const y=({children:_,color:m=d.gL.Primary,size:S=d.th.Medium})=>(0,u.jsx)("div",{className:O.page,children:(0,u.jsx)(d.z1.Provider,{value:{color:m,size:S},children:_})});y.displayName="Page";try{y.displayName="Page",y.__docgenInfo={description:"",displayName:"Page",props:{color:{defaultValue:{value:"PageColor.Primary"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'}]}},size:{defaultValue:{value:"PageSize.Medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/Page.tsx#Page"]={docgenInfo:y.__docgenInfo,name:"Page",path:"src/components/Page/Page.tsx#Page"})}catch(_){}},"./src/components/Page/PageContent.tsx":(i,n,e)=>{e.d(n,{J:()=>_});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),o=e.n(a),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css"),p={};p.styleTagTransform=b(),p.setAttributes=I(),p.insert=h().bind(null,"head"),p.domAPI=A(),p.insertStyleElement=x();var O=o()(c.Z,p);const u=c.Z&&c.Z.locals?c.Z.locals:void 0;var y=e("./node_modules/react/jsx-runtime.js");const _=({children:m})=>(0,y.jsx)("div",{className:r()(u["page-content"]),children:m});_.displayName="PageContent";try{_.displayName="PageContent",_.__docgenInfo={description:"",displayName:"PageContent",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageContent.tsx#PageContent"]={docgenInfo:_.__docgenInfo,name:"PageContent",path:"src/components/Page/PageContent.tsx#PageContent"})}catch(m){}},"./src/components/Page/PageHeader.tsx":(i,n,e)=>{e.d(n,{m:()=>S});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./src/components/SvgIcon/index.ts"),o=e("./src/components/Page/Context.ts"),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=e.n(c),O=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css"),u={};u.styleTagTransform=p(),u.setAttributes=x(),u.insert=I().bind(null,"head"),u.domAPI=h(),u.insertStyleElement=b();var y=A()(O.Z,u);const _=O.Z&&O.Z.locals?O.Z.locals:void 0;var m=e("./node_modules/react/jsx-runtime.js");const S=({children:M,icon:k})=>{const{color:D,size:B}=(0,o.lO)(),Z=B===o.th.Small?28:40;return(0,m.jsxs)("header",{className:r()(_["page-header"],_[`page-header--${D}`],_[`page-header--${B}`]),children:[(0,m.jsx)(a.l,{"min-width":Z,"min-height":Z,svgIconComponent:k}),(0,m.jsx)("span",{children:M})]})};S.displayName="PageHeader";try{S.displayName="PageHeader",S.__docgenInfo={description:"",displayName:"PageHeader",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Page/PageHeader.tsx#PageHeader"]={docgenInfo:S.__docgenInfo,name:"PageHeader",path:"src/components/Page/PageHeader.tsx#PageHeader"})}catch(M){}},"./src/components/Panel/Panel.tsx":(i,n,e)=>{e.d(n,{s:()=>U,c:()=>l});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./src/DesignTokens/index.ts"),o=e("./src/hooks/useMediaQuery.ts"),s,A,E;function h(){return h=Object.assign?Object.assign.bind():function(v){for(var N=1;N<arguments.length;N++){var z=arguments[N];for(var w in z)Object.prototype.hasOwnProperty.call(z,w)&&(v[w]=z[w])}return v},h.apply(this,arguments)}var R=function(N){return t.createElement("svg",h({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},N),s||(s=t.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),A||(A=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),E||(E=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))},I,T,x;function C(){return C=Object.assign?Object.assign.bind():function(v){for(var N=1;N<arguments.length;N++){var z=arguments[N];for(var w in z)Object.prototype.hasOwnProperty.call(z,w)&&(v[w]=z[w])}return v},C.apply(this,arguments)}var b=function(N){return t.createElement("svg",C({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},N),I||(I=t.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),T||(T=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),x||(x=t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))},c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),p=e.n(c),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(O),y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),_=e.n(y),m=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),S=e.n(m),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=e.n(M),D=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),B=e.n(D),Z=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css"),L={};L.styleTagTransform=B(),L.setAttributes=S(),L.insert=_().bind(null,"head"),L.domAPI=u(),L.insertStyleElement=k();var j=p()(Z.Z,L);const f=Z.Z&&Z.Z.locals?Z.Z.locals:void 0;var g=e("./node_modules/react/jsx-runtime.js");let l=function(v){return v.Success="success",v.Info="info",v.Warning="warning",v.Error="error",v}({});const P=({size:v,variant:N})=>{switch(N){case l.Info:case l.Error:case l.Warning:return(0,g.jsx)(R,{style:{width:v,height:v},"data-testid":"panel-icon-info"});case l.Success:return(0,g.jsx)(b,{style:{width:v,height:v},"data-testid":"panel-icon-success"})}},K=({forceMobileLayout:v})=>{const N=(0,o.a)(`(max-width: ${a.T.cLy})`);return v?!0:N},W=({children:v})=>(0,g.jsx)("div",{className:r()(f["panel__pointer-position"]),children:v});W.displayName="defaultRenderArrow";const U=({renderIcon:v=P,title:N,children:z,variant:w=l.Info,showPointer:X=!1,showIcon:V=!0,forceMobileLayout:F=!1,renderArrow:Y=W})=>{const $=K({forceMobileLayout:F}),te=$?a.T.lxo:a.T.mgB;return(0,g.jsxs)("div",{className:r()(f.panel,{[f["panel--mobile-layout"]]:$}),children:[X&&Y({children:(0,g.jsx)("div",{"data-testid":"panel-pointer",className:r()(f.panel__pointer,f[`panel__pointer--${w}`])})}),(0,g.jsxs)("div",{"data-testid":"panel-content-wrapper",className:r()(f["panel__content-wrapper"],f[`panel__content-wrapper--${w}`]),children:[V&&(0,g.jsx)("div",{"data-testid":"panel-icon-wrapper",className:f["panel__icon-wrapper"],children:v({size:te,variant:w})}),(0,g.jsxs)("div",{className:f.panel__content,children:[N&&(0,g.jsx)("h2",{className:f.panel__header,children:N}),(0,g.jsx)("div",{className:f.panel__body,children:z})]})]})]})};U.displayName="Panel";try{U.displayName="Panel",U.__docgenInfo={description:"",displayName:"Panel",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:{value:`({ size, variant }: RenderIconProps) => {
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
}`},description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:{value:"false"},description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/Panel.tsx#Panel"]={docgenInfo:U.__docgenInfo,name:"Panel",path:"src/components/Panel/Panel.tsx#Panel"})}catch(v){}},"./src/components/Panel/PopoverPanel.tsx":(i,n,e)=>{e.d(n,{H:()=>M});var t=e("./node_modules/react/index.js"),d=e("./node_modules/@radix-ui/react-popover/dist/index.mjs"),r=e("./node_modules/classnames/index.js"),a=e.n(r),o=e("./src/components/Panel/Panel.tsx"),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),A=e.n(s),E=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),h=e.n(E),R=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n(R),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),x=e.n(T),C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),p=e.n(c),O=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css"),u={};u.styleTagTransform=p(),u.setAttributes=x(),u.insert=I().bind(null,"head"),u.domAPI=h(),u.insertStyleElement=b();var y=A()(O.Z,u);const _=O.Z&&O.Z.locals?O.Z.locals:void 0;var m=e("./node_modules/react/jsx-runtime.js");const S=({children:D})=>(0,m.jsx)(d.Eh,{className:a()(_["popover-panel__arrow"]),asChild:!0,children:D});S.displayName="renderArrow";const M=({children:D,variant:B=o.c.Warning,trigger:Z,side:L="top",title:j,showIcon:f,forceMobileLayout:g,showPointer:l=!0,onOpenChange:P,open:K=!1})=>(0,m.jsxs)(d.fC,{open:K,onOpenChange:P,children:[(0,m.jsx)(d.xz,{asChild:!0,role:"button",children:Z}),(0,m.jsx)(d.VY,{side:L,className:_["popover-panel"],children:(0,m.jsx)(o.s,{title:j,showIcon:f,forceMobileLayout:g,showPointer:l,variant:B,renderArrow:S,children:D})})]});M.displayName="PopoverPanel";const k=null;try{M.displayName="PopoverPanel",M.__docgenInfo={description:"",displayName:"PopoverPanel",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!0,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},renderIcon:{defaultValue:null,description:"",name:"renderIcon",required:!1,type:{name:"(({ size, variant }: RenderIconProps) => ReactNode)"}},variant:{defaultValue:{value:"PanelVariant.Warning"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},showPointer:{defaultValue:{value:"true"},description:"",name:"showPointer",required:!1,type:{name:"boolean"}},showIcon:{defaultValue:null,description:"",name:"showIcon",required:!1,type:{name:"boolean"}},renderArrow:{defaultValue:null,description:"",name:"renderArrow",required:!1,type:{name:"(({ children }: RenderArrowProps) => ReactNode)"}},forceMobileLayout:{defaultValue:null,description:"",name:"forceMobileLayout",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Panel/PopoverPanel.tsx#PopoverPanel"]={docgenInfo:M.__docgenInfo,name:"PopoverPanel",path:"src/components/Panel/PopoverPanel.tsx#PopoverPanel"})}catch(D){}},"./src/components/SearchField/SearchField.tsx":(i,n,e)=>{e.d(n,{U:()=>s});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d),a=e("./src/components/_InputWrapper/index.ts"),o=e("./node_modules/react/jsx-runtime.js");const s=T=>{var x=T,{id:A,onChange:E,disabled:h=!1,label:R}=x,I=G(x,["id","onChange","disabled","label"]);return(0,o.jsx)(a.SP,{disabled:h,isSearch:!0,label:R,inputRenderer:({className:C,variant:b})=>{const c={id:A,disabled:h,className:r()(C)};return(0,o.jsx)("input",Q(H(H({},c),I),{"data-testid":`${A}-${b}`,onChange:E}))}})};s.displayName="SearchField";try{s.displayName="SearchField",s.__docgenInfo={description:"",displayName:"SearchField",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SearchField/SearchField.tsx#SearchField"]={docgenInfo:s.__docgenInfo,name:"SearchField",path:"src/components/SearchField/SearchField.tsx#SearchField"})}catch(A){}},"./src/components/SvgIcon/index.ts":(i,n,e)=>{e.d(n,{l:()=>d});var t=e("./node_modules/react/index.js");const d=o=>{var s=o,{svgIconComponent:r}=s,a=G(s,["svgIconComponent"]);return(0,t.isValidElement)(r)?(0,t.cloneElement)(r,H({},a)):null};try{d.displayName="SvgIcon",d.__docgenInfo={description:"",displayName:"SvgIcon",props:{svgIconComponent:{defaultValue:null,description:"",name:"svgIconComponent",required:!0,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/SvgIcon/SvgIcon.tsx#SvgIcon"]={docgenInfo:d.__docgenInfo,name:"SvgIcon",path:"src/components/SvgIcon/SvgIcon.tsx#SvgIcon"})}catch(r){}},"./src/components/_InputWrapper/index.ts":(i,n,e)=>{e.d(n,{SP:()=>g});var t=e("./node_modules/react/index.js"),d=e("./node_modules/classnames/index.js"),r=e.n(d);let a=function(l){return l.Default="default",l.Error="error",l.Disabled="disabled",l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm",l}({}),o=function(l){return l.ReadOnlyInfo="readonly-info",l.ReadOnlyConfirm="readonly-confirm",l}({}),s=function(l){return l.None="none",l.Error="error",l.Search="search",l}({});const A=({readOnly:l=!1,disabled:P=!1,isValid:K=!0,isSearch:W=!1}={})=>{let U=s.None;return W&&(U=s.Search),P?{variant:a.Disabled,iconVariant:U}:l===!0||l===o.ReadOnlyInfo?{variant:a.ReadOnlyInfo,iconVariant:U}:l===o.ReadOnlyConfirm?{variant:a.ReadOnlyConfirm,iconVariant:U}:K===!1?{variant:a.Error,iconVariant:s.Error}:{variant:a.Default,iconVariant:U}};var E;function h(){return h=Object.assign?Object.assign.bind():function(l){for(var P=1;P<arguments.length;P++){var K=arguments[P];for(var W in K)Object.prototype.hasOwnProperty.call(K,W)&&(l[W]=K[W])}return l},h.apply(this,arguments)}var R=function(P){return t.createElement("svg",h({width:16,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},P),E||(E=t.createElement("path",{d:"M8 0C3.875 0 .5 3.375.5 7.5S3.875 15 8 15s7.5-3.375 7.5-7.5S12.125 0 8 0Zm.875 11.25H7.5V9.937h1.375v1.313ZM8.687 9h-1l-.312-4.875H9L8.687 9Z",fill:"#fff"})))},I;function T(){return T=Object.assign?Object.assign.bind():function(l){for(var P=1;P<arguments.length;P++){var K=arguments[P];for(var W in K)Object.prototype.hasOwnProperty.call(K,W)&&(l[W]=K[W])}return l},T.apply(this,arguments)}var x=function(P){return t.createElement("svg",T({width:15,height:15,viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P),I||(I=t.createElement("path",{d:"M34 31.576 23.929 21.394c1.624-2.101 2.437-4.525 2.437-7.273C26.366 7.495 20.843 2 14.183 2S2 7.495 2 14.121s5.523 12.121 12.183 12.121c2.761 0 5.36-.97 7.31-2.424L31.725 34 34 31.576ZM5.249 14.12c0-4.848 4.06-8.889 8.934-8.889 4.873 0 8.934 4.04 8.934 8.89 0 4.848-4.061 8.888-8.934 8.888-4.873 0-8.934-4.04-8.934-8.889Z",fill:"#000"})))},C=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=e.n(C),c=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),p=e.n(c),O=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),u=e.n(O),y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(y),m=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(m),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),k=e.n(M),D=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css"),B={};B.styleTagTransform=k(),B.setAttributes=_(),B.insert=u().bind(null,"head"),B.domAPI=p(),B.insertStyleElement=S();var Z=b()(D.Z,B);const L=D.Z&&D.Z.locals?D.Z.locals:void 0;var j=e("./node_modules/react/jsx-runtime.js");const f=({variant:l,disabled:P=!1})=>l===s.Error?(0,j.jsx)("div",{className:L.InputWrapper__icon,children:(0,j.jsx)(R,{"data-testid":"input-icon-error"})}):l===s.Search?(0,j.jsx)("div",{className:r()(L.InputWrapper__icon,{[L["InputWrapper__icon--disabled"]]:P}),children:(0,j.jsx)(x,{"data-testid":"input-icon-search"})}):null;try{f.displayName="Icon",f.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"error"'},{value:'"search"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/Icon.tsx#Icon"]={docgenInfo:f.__docgenInfo,name:"Icon",path:"src/components/_InputWrapper/Icon.tsx#Icon"})}catch(l){}const g=({isValid:l=!0,disabled:P=!1,readOnly:K=!1,isSearch:W=!1,label:U,inputId:v,inputRenderer:N,noFocusEffect:z,noPadding:w})=>{const X=(0,t.useId)(),V=v!=null?v:X,{variant:F,iconVariant:Y}=A({readOnly:K,disabled:P,isValid:l,isSearch:W});return(0,j.jsxs)(j.Fragment,{children:[U&&(0,j.jsx)("label",{"data-testid":"InputWrapper-label",className:r()(L.InputWrapper__label),htmlFor:V,children:U}),(0,j.jsxs)("div",{"data-testid":"InputWrapper",className:r()(L.InputWrapper,L[`InputWrapper--${F}`],{[L["InputWrapper--search"]]:W,[L["InputWrapper--with-focus-effect"]]:!z,[L["InputWrapper--with-padding"]]:!w}),children:[(0,j.jsx)(f,{variant:Y,disabled:P}),N({className:L.InputWrapper__field,inputId:V,variant:F})]})]})};try{g.displayName="InputWrapper",g.__docgenInfo={description:"",displayName:"InputWrapper",props:{isValid:{defaultValue:{value:"true"},description:"",name:"isValid",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean | ReadOnlyVariant"}},isSearch:{defaultValue:{value:"false"},description:"",name:"isSearch",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},noFocusEffect:{defaultValue:null,description:"",name:"noFocusEffect",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:null,description:"",name:"noPadding",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},inputRenderer:{defaultValue:null,description:"",name:"inputRenderer",required:!0,type:{name:"(props: InputRendererProps) => ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"]={docgenInfo:g.__docgenInfo,name:"InputWrapper",path:"src/components/_InputWrapper/InputWrapper.tsx#InputWrapper"})}catch(l){}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/Accordion.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.oQBwVfgxJLkfsi9a9XEn {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`,""]),o.locals={accordion:"oQBwVfgxJLkfsi9a9XEn"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionHeader.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.NEcyLNUwJnVMweQESHEG {
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
`,""]),o.locals={"accordion-header":"NEcyLNUwJnVMweQESHEG","accordion-header__subtitle":"GFfGUEjlr7GrLuCE0wwo","accordion-header--subtitle":"tAtjuFUsbRRwXoGrlxBR","accordion-header__title":"BmsGIJNh04bEnX0BIk5G","accordion-header__actions":"qbcYvduzjTWjJTcvCaZE"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Accordion/AccordionIcon.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.Kg7QyJA5SEy5eOcxFoTy {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.Qm26L9IEUvQVXYvte3Dk {
  transform: rotate(90deg);
}
`,""]),o.locals={"accordion-icon":"Kg7QyJA5SEy5eOcxFoTy","accordion-icon--opened":"Qm26L9IEUvQVXYvte3Dk"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/CircularProgress/CircularProgress.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.cRnN36N3CsNXU7PBwTWR {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.HmeNtbkKlQXt2xrFyP3a {
  transition: stroke-dashoffset 1s ease-in-out;
}

.Qm66BezH1JrYdCtHLmZk {
  position: relative;
}

.jSBSkVWF9D_J5vMSUPw5 {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`,""]),o.locals={svg:"cRnN36N3CsNXU7PBwTWR",circleTransition:"HmeNtbkKlQXt2xrFyP3a",container:"Qm66BezH1JrYdCtHLmZk",label:"jSBSkVWF9D_J5vMSUPw5"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/List.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.Xw1luME3E_z0gNb6MiBS {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.neKivfCii5v2knAzDyFs {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.rXI_DYDIj_lIcmHaNBhk {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`,""]),o.locals={list:"Xw1luME3E_z0gNb6MiBS","list--solid":"neKivfCii5v2knAzDyFs","list--dashed":"rXI_DYDIj_lIcmHaNBhk"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/List/ListItem.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.aLk6zwfzC_dKSkehj1Ml {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.Rnw0XoI5EmhcVs3wbMCK {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.EbBKzVBwOmOKRwcUQ4kN {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`,""]),o.locals={"list-item":"aLk6zwfzC_dKSkehj1Ml","list-item--solid":"Rnw0XoI5EmhcVs3wbMCK","list-item--dashed":"EbBKzVBwOmOKRwcUQ4kN"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.Z2PfI4E45hEVN5FbqgRs {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),o.locals={map:"Z2PfI4E45hEVN5FbqgRs"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/Page.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.LVMNKMKDM4GRI04jn4xz {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`,""]),o.locals={page:"LVMNKMKDM4GRI04jn4xz"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageContent.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.ZIuS7Frj5fR8Jbht4X3I {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`,""]),o.locals={"page-content":"ZIuS7Frj5fR8Jbht4X3I"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Page/PageHeader.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.bt29GAOYAI3b2Ds0cQFq {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.tMRjo_EWpV_cuiQuOzLl {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.ZUxkHGfD8NiPnDdMdbRq {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.cDICwqln9NawhJHJgCNW {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.wg1ER4ow4ionK5XKvgbw {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`,""]),o.locals={"page-header":"bt29GAOYAI3b2Ds0cQFq","page-header--primary":"tMRjo_EWpV_cuiQuOzLl","page-header--success":"ZUxkHGfD8NiPnDdMdbRq","page-header--small":"cDICwqln9NawhJHJgCNW","page-header--medium":"wg1ER4ow4ionK5XKvgbw"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/Panel.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`/* breakpoints-xs */
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
`,""]),o.locals={panel:"Cn6JIe0KTCbn5phMoUZR","panel--mobile-layout":"ERpxjgVQtHHLvhTY_hFT",panel__pointer:"bc7XJ8ixqA1y6aiscled","panel__pointer-position":"WhWRFmGdB89kBdaZDB2b","panel__content-wrapper--info":"r4V2MSspiqnXTrUea8T1","panel__pointer--info":"AmxSNhiUqy_y2wozsSh5","panel__content-wrapper--success":"rjkPtLYzH8ykC6itnGjl","panel__pointer--success":"elN2Ag2FOJOLm_UdgcD4","panel__content-wrapper--warning":"DvYFBpVJAKHzN5ZqonFq","panel__pointer--warning":"Y__Z1VtZZq7MCjbTSkXn","panel__content-wrapper--error":"dJU5t1iliDixb1wEJQTU","panel__pointer--error":"K6h4ZL0w7vXh7xtCBBpK","panel__content-wrapper":"SWZ1MBuuIQm66L683agJ","panel__icon-wrapper":"VF3VnIvqPmLbQNJ2CnCI",panel__content:"BfiKuOxLyXQDtXNvDKyB",panel__header:"kehDhu_3_rCtwZ9Xgq_f",panel__body:"NWoqKSj2k4epsQrCnjqY"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Panel/PopoverPanel.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.cMdAzgi06lOyezn_J68y {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.qgDrFZ7KD1UilVJX_4Ta {
  transform: scale(-1);
  margin-top: -1px;
}
`,""]),o.locals={"popover-panel":"cMdAzgi06lOyezn_J68y","popover-panel__arrow":"qgDrFZ7KD1UilVJX_4Ta"};const s=o},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/_InputWrapper/InputWrapper.module.css":(i,n,e)=>{e.d(n,{Z:()=>s});var t=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),d=e.n(t),r=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(r),o=a()(d());o.push([i.id,`.J_oifBE02kX6PoaOp4QA {
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
`,""]),o.locals={InputWrapper:"J_oifBE02kX6PoaOp4QA","InputWrapper--with-focus-effect":"DMF5FvQohU9gVZ3eJNfc","InputWrapper--default":"IokYkh5JAzht61EML_BQ","InputWrapper--error":"iu8HJLGYcrp6hn0YOsHH","InputWrapper--disabled":"V_5HBOKFHdzE3P1wtFt4","InputWrapper--readonly-info":"AizuCtsiP1u50HO7mbXH","InputWrapper--readonly-confirm":"DBa44CXClZRnrDaQH9UI","InputWrapper--search":"CvAH7S5R8iTfQsgWnY93","InputWrapper--with-padding":"AxmLRWLSugjObxQav3ms",InputWrapper__field:"Asejtdv1WuzLj_4QuG5g",InputWrapper__icon:"sQ_FIvk3IiwyDTpom9MP","InputWrapper__icon--disabled":"ES3MtBMPWAqYfrVVMb77",InputWrapper__label:"N628BMGkP8pTDMIUWv15"};const s=o}}]);})();
