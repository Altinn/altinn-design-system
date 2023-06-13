"use strict";(()=>{var H=Object.defineProperty,q=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var G=(s,o,e)=>o in s?H(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,n=(s,o)=>{for(var e in o||(o={}))oe.call(o,e)&&G(s,e,o[e]);if(F)for(var e of F(o))te.call(o,e)&&G(s,e,o[e]);return s},i=(s,o)=>q(s,ee(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[435],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(s,o,e)=>{e.d(o,{$4:()=>t.$4,Dx:()=>t.Dx,Uh:()=>t.Uh,X6:()=>t.X6,dk:()=>t.dk,fQ:()=>t.fQ,h_:()=>t.h_});var _=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),t=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(s,o,e)=>{e.d(o,{Y:()=>m});var _=e("./node_modules/react/index.js"),t=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),y=e("./src/components/AppWrapper/AppWrapper.tsx"),a=e("./node_modules/react/jsx-runtime.js");const r=({children:k})=>(0,a.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,a.jsxs)("p",{style:{margin:"0"},children:[(0,a.jsx)("strong",{children:"Deprecated:"})," ",k]})});r.displayName="DeprecationWarning";const u=null;try{r.displayName="DeprecationWarning",r.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:r.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(k){}const m=({description:k,deprecationWarning:v})=>(0,a.jsxs)(y.O,{children:[(0,a.jsx)(t.Dx,{}),v&&(0,a.jsx)(r,{children:v}),(0,a.jsx)(t.dk,{children:k}),(0,a.jsx)(t.fQ,{includePrimary:!0}),(0,a.jsx)(t.X6,{children:"Props"}),(0,a.jsx)(t.$4,{story:t.Uh})]});m.displayName="StoryPage";const x=null;try{m.displayName="StoryPage",m.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:m.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(k){}},"./src/components/Map/Map.stories.tsx":(s,o,e)=>{var C,p,g,V,U,w,j,K,z,B,Z,E,I,N,l,O,D,T;e.r(o),e.d(o,{Default:()=>S,GoogleMaps:()=>h,KartverketSea:()=>d,KartverketTerrain:()=>c,MapWithMarkerZoomAndCenter:()=>A,OpenStreetMap:()=>M,__namedExportsOrder:()=>L,default:()=>v});var _=e("./node_modules/react/index.js"),t=e("@storybook/client-api"),y=e("./node_modules/leaflet/dist/images/marker-icon.png");const a=e.p+"static/media/marker-icon-2x.680f69f3.png",r=e.p+"static/media/marker-shadow.a0c6cc14.png";var u=e("./.storybook/StoryPage.tsx"),m=e("./src/components/Map/Map.tsx"),x=e("./node_modules/react/jsx-runtime.js"),k=e("./node_modules/console-browserify/index.js");const v={component:m.D,parameters:{layout:"fullscreen",docs:{page:()=>(0,x.jsx)(u.Y,{description:"Map component"})}},args:{}},f=W=>{const[,b]=(0,t.useArgs)(),Y=R=>{b(i(n({},W),{markerLocation:R})),k.log(`Map clicked at [${R.latitude},${R.longitude}]`)};return(0,x.jsx)(m.D,i(n({},W),{markerIcon:{iconUrl:y,iconRetinaUrl:a,shadowUrl:r,iconSize:[25,41],iconAnchor:[12,41]},onClick:Y}))};f.displayName="Template";const S=f.bind({});S.args={},S.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};const A=f.bind({});A.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},A.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};const M=f.bind({});M.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},M.parameters={docs:{description:{story:"OpenStreetMap"}}};const c=f.bind({});c.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},c.parameters={docs:{description:{story:"Kartverket terrain map"}}};const d=f.bind({});d.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},d.parameters={docs:{description:{story:"Kartverket sea map"}}};const h=f.bind({});h.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},h.parameters={docs:{description:{story:"Google Maps"}}},S.parameters=i(n({},S.parameters),{docs:i(n({},(C=S.parameters)==null?void 0:C.docs),{source:n({originalSource:`args => {
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
}`},(g=(p=S.parameters)==null?void 0:p.docs)==null?void 0:g.source)})}),A.parameters=i(n({},A.parameters),{docs:i(n({},(V=A.parameters)==null?void 0:V.docs),{source:n({originalSource:`args => {
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
}`},(w=(U=A.parameters)==null?void 0:U.docs)==null?void 0:w.source)})}),M.parameters=i(n({},M.parameters),{docs:i(n({},(j=M.parameters)==null?void 0:j.docs),{source:n({originalSource:`args => {
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
}`},(z=(K=M.parameters)==null?void 0:K.docs)==null?void 0:z.source)})}),c.parameters=i(n({},c.parameters),{docs:i(n({},(B=c.parameters)==null?void 0:B.docs),{source:n({originalSource:`args => {
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
}`},(E=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:E.source)})}),d.parameters=i(n({},d.parameters),{docs:i(n({},(I=d.parameters)==null?void 0:I.docs),{source:n({originalSource:`args => {
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
}`},(l=(N=d.parameters)==null?void 0:N.docs)==null?void 0:l.source)})}),h.parameters=i(n({},h.parameters),{docs:i(n({},(O=h.parameters)==null?void 0:O.docs),{source:n({originalSource:`args => {
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
}`},(T=(D=h.parameters)==null?void 0:D.docs)==null?void 0:T.source)})});const L=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/AppWrapper/AppWrapper.tsx":(s,o,e)=>{e.d(o,{O:()=>p});var _=e("./node_modules/react/index.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(y),r=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(r),m=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),x=e.n(m),k=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),v=e.n(k),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(f),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),M=e.n(A),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),d={};d.styleTagTransform=M(),d.setAttributes=v(),d.insert=x().bind(null,"head"),d.domAPI=u(),d.insertStyleElement=S();var h=a()(c.Z,d);const L=c.Z&&c.Z.locals?c.Z.locals:void 0;var C=e("./node_modules/react/jsx-runtime.js");const p=({children:g})=>(0,C.jsx)("div",{children:g});p.displayName="AppWrapper";try{p.displayName="AppWrapper",p.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:p.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(g){}},"./src/components/Map/Map.tsx":(s,o,e)=>{e.d(o,{D:()=>E});var _=e("./node_modules/react-leaflet/lib/MapContainer.js"),t=e("./node_modules/react-leaflet/lib/TileLayer.js"),y=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),r=e("./node_modules/react-leaflet/lib/hooks.js"),u=e("./node_modules/react/index.js"),m=e("./node_modules/leaflet/dist/leaflet-src.js"),x=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(x),v=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(v),S=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),A=e.n(S),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(M),d=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),h=e.n(d),L=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),C=e.n(L),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),g={};g.styleTagTransform=C(),g.setAttributes=c(),g.insert=A().bind(null,"head"),g.domAPI=f(),g.insertStyleElement=h();var V=k()(p.Z,g);const U=p.Z&&p.Z.locals?p.Z.locals:void 0;var w=e("./node_modules/leaflet/dist/leaflet.css"),j=e("./node_modules/react/jsx-runtime.js");const K={latitude:64.888996,longitude:12.8186054},z=4,B=16,Z=[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=europa_forenklet&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'},{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norgeskart_bakgrunn2&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],E=({readOnly:l=!1,layers:O=Z,centerLocation:D=K,zoom:T=z,flyToZoomLevel:W=B,markerLocation:b,markerIcon:Y,onClick:R})=>{const[X,Q]=(0,u.useState)(null),P=(0,u.useMemo)(()=>{if(!(!(b!=null&&b.latitude)||!(b!=null&&b.longitude)))return b},[b]);return(0,u.useEffect)(()=>{X&&P&&W&&X.flyTo({lat:P.latitude,lng:P.longitude},W)},[X,P,W]),(0,j.jsxs)(_.h,{className:U.map,center:I(D),zoom:T,zoomControl:!l,dragging:!l,touchZoom:!l,doubleClickZoom:!l,scrollWheelZoom:!l,attributionControl:!1,ref:Q,children:[O.map(($,J)=>(0,j.jsx)(t.I,{url:$.url,attribution:$.attribution,subdomains:$.subdomains?$.subdomains:[],opacity:l?.5:1},J)),(0,j.jsx)(y.z,{prefix:!1}),P?(0,j.jsx)(a.J,{position:I(P),icon:(0,m.icon)(Y)}):null,(0,j.jsx)(N,{readOnly:l,onClick:R})]})};E.displayName="Map";function I(l){return[l.latitude,l.longitude]}const N=({onClick:l,readOnly:O})=>((0,r.zV)({click:D=>{if(l&&!O){const T=D.latlng.wrap();l({latitude:T.lat,longitude:T.lng})}}}),null);try{E.displayName="Map",E.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
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
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},flyToZoomLevel:{defaultValue:{value:"16"},description:"",name:"flyToZoomLevel",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:E.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(l){}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(s,o,e)=>{e.d(o,{Z:()=>u});var _=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(_),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(y),r=a()(t());r.push([s.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),r.push([s.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),r.locals={};const u=r},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(s,o,e)=>{e.d(o,{Z:()=>u});var _=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(_),y=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(y),r=a()(t());r.push([s.id,`.Z2PfI4E45hEVN5FbqgRs {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),r.locals={map:"Z2PfI4E45hEVN5FbqgRs"};const u=r}}]);})();
