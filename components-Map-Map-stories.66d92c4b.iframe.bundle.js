"use strict";(()=>{var w=Object.defineProperty,q=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var Q=(s,t,e)=>t in s?w(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,n=(s,t)=>{for(var e in t||(t={}))te.call(t,e)&&Q(s,e,t[e]);if(G)for(var e of G(t))oe.call(t,e)&&Q(s,e,t[e]);return s},i=(s,t)=>q(s,ee(t));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[435],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(s,t,e)=>{e.d(t,{$4:()=>o.$4,Dx:()=>o.Dx,Uh:()=>o.Uh,X6:()=>o.X6,dk:()=>o.dk,fQ:()=>o.fQ,h_:()=>o.h_});var j=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),o=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(s,t,e)=>{e.d(t,{Y:()=>u});var j=e("./node_modules/react/index.js"),o=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),y=e("./src/components/AppWrapper/AppWrapper.tsx"),a=e("./node_modules/react/jsx-runtime.js");const r=({children:f})=>(0,a.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,a.jsxs)("p",{style:{margin:"0"},children:[(0,a.jsx)("strong",{children:"Deprecated:"})," ",f]})});r.displayName="DeprecationWarning";const m=null;try{r.displayName="DeprecationWarning",r.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:r.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(f){}const u=({description:f,deprecationWarning:E})=>(0,a.jsxs)(y.O,{children:[(0,a.jsx)(o.Dx,{}),E&&(0,a.jsx)(r,{children:E}),(0,a.jsx)(o.dk,{children:f}),(0,a.jsx)(o.fQ,{includePrimary:!0}),(0,a.jsx)(o.X6,{children:"Props"}),(0,a.jsx)(o.$4,{story:o.Uh})]});u.displayName="StoryPage";const C=null;try{u.displayName="StoryPage",u.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:u.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(f){}},"./src/components/Map/Map.stories.tsx":(s,t,e)=>{var D,p,g,V,K,Y,x,z,B,Z,b,T,L,N,l,W,P,O;e.r(t),e.d(t,{Default:()=>A,GoogleMaps:()=>k,KartverketSea:()=>d,KartverketTerrain:()=>c,MapWithMarkerZoomAndCenter:()=>M,OpenStreetMap:()=>h,__namedExportsOrder:()=>U,default:()=>E});var j=e("./node_modules/react/index.js"),o=e("@storybook/client-api"),y=e("./node_modules/leaflet/dist/images/marker-icon.png");const a=e.p+"static/media/marker-icon-2x.680f69f3.png",r=e.p+"static/media/marker-shadow.a0c6cc14.png";var m=e("./.storybook/StoryPage.tsx"),u=e("./src/components/Map/Map.tsx"),C=e("./node_modules/react/jsx-runtime.js"),f=e("./node_modules/console-browserify/index.js");const E={component:u.D,parameters:{layout:"fullscreen",docs:{page:()=>(0,C.jsx)(m.Y,{description:"Map component"})}},args:{}},S=I=>{const[,v]=(0,o.useArgs)(),X=_=>{v(i(n({},I),{markerLocation:_})),f.log(`Map clicked at [${_.latitude},${_.longitude}]`)};return(0,C.jsx)(u.D,i(n({},I),{markerIcon:{iconUrl:y,iconRetinaUrl:a,shadowUrl:r,iconSize:[25,41],iconAnchor:[12,41]},onClick:X}))};S.displayName="Template";const A=S.bind({});A.args={},A.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};const M=S.bind({});M.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},M.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};const h=S.bind({});h.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},h.parameters={docs:{description:{story:"OpenStreetMap"}}};const c=S.bind({});c.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},c.parameters={docs:{description:{story:"Kartverket terrain map"}}};const d=S.bind({});d.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},d.parameters={docs:{description:{story:"Kartverket sea map"}}};const k=S.bind({});k.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},k.parameters={docs:{description:{story:"Google Maps"}}},A.parameters=i(n({},A.parameters),{docs:i(n({},(D=A.parameters)==null?void 0:D.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(g=(p=A.parameters)==null?void 0:p.docs)==null?void 0:g.source)})}),M.parameters=i(n({},M.parameters),{docs:i(n({},(V=M.parameters)==null?void 0:V.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(Y=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Y.source)})}),h.parameters=i(n({},h.parameters),{docs:i(n({},(x=h.parameters)==null?void 0:x.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source)})}),c.parameters=i(n({},c.parameters),{docs:i(n({},(Z=c.parameters)==null?void 0:Z.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(T=(b=c.parameters)==null?void 0:b.docs)==null?void 0:T.source)})}),d.parameters=i(n({},d.parameters),{docs:i(n({},(L=d.parameters)==null?void 0:L.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(l=(N=d.parameters)==null?void 0:N.docs)==null?void 0:l.source)})}),k.parameters=i(n({},k.parameters),{docs:i(n({},(W=k.parameters)==null?void 0:W.docs),{source:n({originalSource:`args => {
  const [, updateArgs] = useArgs();
  const mapClicked = (location: Location) => {
    updateArgs({
      ...args,
      markerLocation: location
    });
    console.log(\`Map clicked at [\${location.latitude},\${location.longitude}]\`);
  };
  return <Map {...args} markerIcon={{
    iconUrl: Marker,
    iconRetinaUrl: RetinaMarker,
    shadowUrl: MarkerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  }} onClick={mapClicked} />;
}`},(O=(P=k.parameters)==null?void 0:P.docs)==null?void 0:O.source)})});const U=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/AppWrapper/AppWrapper.tsx":(s,t,e)=>{e.d(t,{O:()=>p});var j=e("./node_modules/react/index.js"),o=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),y=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(y),r=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),m=e.n(r),u=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),C=e.n(u),f=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),E=e.n(f),S=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),A=e.n(S),M=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),h=e.n(M),c=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),d={};d.styleTagTransform=h(),d.setAttributes=E(),d.insert=C().bind(null,"head"),d.domAPI=m(),d.insertStyleElement=A();var k=a()(c.Z,d);const U=c.Z&&c.Z.locals?c.Z.locals:void 0;var D=e("./node_modules/react/jsx-runtime.js");const p=({children:g})=>(0,D.jsx)("div",{children:g});p.displayName="AppWrapper";try{p.displayName="AppWrapper",p.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:p.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(g){}},"./src/components/Map/Map.tsx":(s,t,e)=>{e.d(t,{D:()=>T});var j=e("./node_modules/react-leaflet/lib/MapContainer.js"),o=e("./node_modules/react-leaflet/lib/TileLayer.js"),y=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),r=e("./node_modules/react-leaflet/lib/hooks.js"),m=e("./node_modules/react/index.js"),u=e("./node_modules/leaflet/dist/leaflet-src.js"),C=e("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),f=e.n(C),E=e("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),S=e.n(E),A=e("./node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(A),h=e("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(h),d=e("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=e.n(d),U=e("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),D=e.n(U),p=e("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),g={};g.styleTagTransform=D(),g.setAttributes=c(),g.insert=M().bind(null,"head"),g.domAPI=S(),g.insertStyleElement=k();var V=f()(p.Z,g);const K=p.Z&&p.Z.locals?p.Z.locals:void 0;var Y=e("./node_modules/leaflet/dist/leaflet.css"),x=e("./node_modules/react/jsx-runtime.js");const z={latitude:64.888996,longitude:12.8186054},B=4,Z=16,b=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],T=({readOnly:l=!1,layers:W=b,centerLocation:P=z,zoom:O=B,flyToZoomLevel:I=Z,markerLocation:v,markerIcon:X,onClick:_})=>{const[F,J]=(0,m.useState)(null),R=(0,m.useMemo)(()=>{if(!(!(v!=null&&v.latitude)||!(v!=null&&v.longitude)))return v},[v]);return(0,m.useEffect)(()=>{F&&R&&I&&F.flyTo({lat:R.latitude,lng:R.longitude},I)},[F,R,I]),(0,x.jsxs)(j.h,{className:K.map,center:L(P),zoom:O,zoomControl:!l,dragging:!l,touchZoom:!l,doubleClickZoom:!l,scrollWheelZoom:!l,attributionControl:!1,ref:J,children:[W.map(($,H)=>(0,x.jsx)(o.I,{url:$.url,attribution:$.attribution,subdomains:$.subdomains?$.subdomains:[],opacity:l?.5:1},H)),(0,x.jsx)(y.z,{prefix:!1}),R?(0,x.jsx)(a.J,{position:L(R),icon:(0,u.icon)(X)}):null,(0,x.jsx)(N,{readOnly:l,onClick:_})]})};T.displayName="Map";function L(l){return[l.latitude,l.longitude]}const N=({onClick:l,readOnly:W})=>((0,r.zV)({click:P=>{if(l&&!W){const O=P.latlng.wrap();l({latitude:O.lat,longitude:O.lng})}}}),null);try{T.displayName="Map",T.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},flyToZoomLevel:{defaultValue:{value:"16"},description:"",name:"flyToZoomLevel",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:T.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(l){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(s,t,e)=>{e.d(t,{Z:()=>m});var j=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(j),y=e("./node_modules/css-loader/dist/runtime/api.js"),a=e.n(y),r=a()(o());r.push([s.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([s.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),r.locals={};const m=r},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(s,t,e)=>{e.d(t,{Z:()=>m});var j=e("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=e.n(j),y=e("./node_modules/css-loader/dist/runtime/api.js"),a=e.n(y),r=a()(o());r.push([s.id,`.Z2PfI4E45hEVN5FbqgRs {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"Z2PfI4E45hEVN5FbqgRs"};const m=r}}]);})();
