"use strict";(()=>{var H=Object.defineProperty,q=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var G=(r,o,e)=>o in r?H(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,n=(r,o)=>{for(var e in o||(o={}))oe.call(o,e)&&G(r,e,o[e]);if(F)for(var e of F(o))te.call(o,e)&&G(r,e,o[e]);return r},i=(r,o)=>q(r,ee(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[435],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(r,o,e)=>{e.d(o,{$4:()=>t.$4,Dx:()=>t.Dx,Uh:()=>t.Uh,X6:()=>t.X6,dk:()=>t.dk,fQ:()=>t.fQ,h_:()=>t.h_});var v=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),t=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(r,o,e)=>{e.d(o,{Y:()=>m});var v=e("./node_modules/react/index.js"),t=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),g=e("./src/components/AppWrapper/AppWrapper.tsx"),a=e("./node_modules/react/jsx-runtime.js");const s=({children:k})=>(0,a.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,a.jsxs)("p",{style:{margin:"0"},children:[(0,a.jsx)("strong",{children:"Deprecated:"})," ",k]})});s.displayName="DeprecationWarning";const u=null;try{s.displayName="DeprecationWarning",s.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:s.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(k){}const m=({description:k,deprecationWarning:_})=>(0,a.jsxs)(g.O,{children:[(0,a.jsx)(t.Dx,{}),_&&(0,a.jsx)(s,{children:_}),(0,a.jsx)(t.dk,{children:k}),(0,a.jsx)(t.fQ,{includePrimary:!0}),(0,a.jsx)(t.X6,{children:"Props"}),(0,a.jsx)(t.$4,{story:t.Uh})]});m.displayName="StoryPage";const T=null;try{m.displayName="StoryPage",m.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:m.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(k){}},"./src/components/Map/Map.stories.tsx":(r,o,e)=>{var x,p,y,V,U,Y,j,K,B,z,Z,E,I,N,d,O,D,C;e.r(o),e.d(o,{Default:()=>S,GoogleMaps:()=>b,KartverketSea:()=>l,KartverketTerrain:()=>c,MapWithMarkerZoomAndCenter:()=>M,OpenStreetMap:()=>A,__namedExportsOrder:()=>L,default:()=>_});var v=e("./node_modules/react/index.js"),t=e("@storybook/client-api"),g=e("./node_modules/leaflet/dist/images/marker-icon.png");const a=e.p+"static/media/marker-icon-2x.680f69f3.png",s=e.p+"static/media/marker-shadow.a0c6cc14.png";var u=e("./.storybook/StoryPage.tsx"),m=e("./src/components/Map/Map.tsx"),T=e("./node_modules/react/jsx-runtime.js"),k=e("./node_modules/console-browserify/index.js");const _={component:m.D,parameters:{layout:"fullscreen",docs:{page:()=>(0,T.jsx)(u.Y,{description:"Map component"})}},args:{}},f=W=>{const[,h]=(0,t.useArgs)(),w=R=>{h(i(n({},W),{markerLocation:R})),k.log(`Map clicked at [${R.latitude},${R.longitude}]`)};return(0,T.jsx)(m.D,i(n({},W),{markerIcon:{iconUrl:g,iconRetinaUrl:a,shadowUrl:s,iconSize:[25,41],iconAnchor:[12,41]},onClick:w}))};f.displayName="Template";const S=f.bind({});S.args={},S.parameters={docs:{description:{story:'This is the default map you get if you do not specify any map layers. Kartverket with layers "europa_forenklet" and "norgeskart_bakgrunn2"'}}};const M=f.bind({});M.args={markerLocation:{latitude:59.2641592,longitude:10.4036248},zoom:16,centerLocation:{latitude:59.2641592,longitude:10.4036248}},M.parameters={docs:{description:{story:"Default map with marker location and center location set"}}};const A=f.bind({});A.args={layers:[{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",subdomains:["a","b","c"],attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}]},A.parameters={docs:{description:{story:"OpenStreetMap"}}};const c=f.bind({});c.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=terreng_norgeskart&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},c.parameters={docs:{description:{story:"Kartverket terrain map"}}};const l=f.bind({});l.args={layers:[{url:"https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=sjokartraster&zoom={z}&x={x}&y={y}",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}]},l.parameters={docs:{description:{story:"Kartverket sea map"}}};const b=f.bind({});b.args={layers:[{url:"https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",subdomains:["mt0","mt1","mt2","mt3"],attribution:"\xA9 Google Maps"}]},b.parameters={docs:{description:{story:"Google Maps"}}},S.parameters=i(n({},S.parameters),{docs:i(n({},(x=S.parameters)==null?void 0:x.docs),{source:n({originalSource:`args => {
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
}`},(y=(p=S.parameters)==null?void 0:p.docs)==null?void 0:y.source)})}),M.parameters=i(n({},M.parameters),{docs:i(n({},(V=M.parameters)==null?void 0:V.docs),{source:n({originalSource:`args => {
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
}`},(Y=(U=M.parameters)==null?void 0:U.docs)==null?void 0:Y.source)})}),A.parameters=i(n({},A.parameters),{docs:i(n({},(j=A.parameters)==null?void 0:j.docs),{source:n({originalSource:`args => {
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
}`},(B=(K=A.parameters)==null?void 0:K.docs)==null?void 0:B.source)})}),c.parameters=i(n({},c.parameters),{docs:i(n({},(z=c.parameters)==null?void 0:z.docs),{source:n({originalSource:`args => {
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
}`},(E=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:E.source)})}),l.parameters=i(n({},l.parameters),{docs:i(n({},(I=l.parameters)==null?void 0:I.docs),{source:n({originalSource:`args => {
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
}`},(d=(N=l.parameters)==null?void 0:N.docs)==null?void 0:d.source)})}),b.parameters=i(n({},b.parameters),{docs:i(n({},(O=b.parameters)==null?void 0:O.docs),{source:n({originalSource:`args => {
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
}`},(C=(D=b.parameters)==null?void 0:D.docs)==null?void 0:C.source)})});const L=["Default","MapWithMarkerZoomAndCenter","OpenStreetMap","KartverketTerrain","KartverketSea","GoogleMaps"]},"./src/components/AppWrapper/AppWrapper.tsx":(r,o,e)=>{e.d(o,{O:()=>p});var v=e("./node_modules/react/index.js"),t=e("./node_modules/@altinn/figma-design-tokens/dist/tokens.css"),g=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=e.n(g),s=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),u=e.n(s),m=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),T=e.n(m),k=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_=e.n(k),f=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=e.n(f),M=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),A=e.n(M),c=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css"),l={};l.styleTagTransform=A(),l.setAttributes=_(),l.insert=T().bind(null,"head"),l.domAPI=u(),l.insertStyleElement=S();var b=a()(c.Z,l);const L=c.Z&&c.Z.locals?c.Z.locals:void 0;var x=e("./node_modules/react/jsx-runtime.js");const p=({children:y})=>(0,x.jsx)("div",{children:y});p.displayName="AppWrapper";try{p.displayName="AppWrapper",p.__docgenInfo={description:"",displayName:"AppWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/AppWrapper/AppWrapper.tsx#AppWrapper"]={docgenInfo:p.__docgenInfo,name:"AppWrapper",path:"src/components/AppWrapper/AppWrapper.tsx#AppWrapper"})}catch(y){}},"./src/components/Map/Map.tsx":(r,o,e)=>{e.d(o,{D:()=>E});var v=e("./node_modules/react-leaflet/lib/MapContainer.js"),t=e("./node_modules/react-leaflet/lib/TileLayer.js"),g=e("./node_modules/react-leaflet/lib/AttributionControl.js"),a=e("./node_modules/react-leaflet/lib/Marker.js"),s=e("./node_modules/react-leaflet/lib/hooks.js"),u=e("./node_modules/react/index.js"),m=e("./node_modules/leaflet/dist/leaflet-src.js"),T=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),k=e.n(T),_=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=e.n(_),S=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),M=e.n(S),A=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),c=e.n(A),l=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),b=e.n(l),L=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),x=e.n(L),p=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css"),y={};y.styleTagTransform=x(),y.setAttributes=c(),y.insert=M().bind(null,"head"),y.domAPI=f(),y.insertStyleElement=b();var V=k()(p.Z,y);const U=p.Z&&p.Z.locals?p.Z.locals:void 0;var Y=e("./node_modules/leaflet/dist/leaflet.css"),j=e("./node_modules/react/jsx-runtime.js");const K={latitude:64.888996,longitude:12.8186054},B=4,z=16,Z=[{url:"https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png",attribution:'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>'}],E=({readOnly:d=!1,layers:O=Z,centerLocation:D=K,zoom:C=B,flyToZoomLevel:W=z,markerLocation:h,markerIcon:w,onClick:R})=>{const[X,Q]=(0,u.useState)(null),P=(0,u.useMemo)(()=>{if(!(!(h!=null&&h.latitude)||!(h!=null&&h.longitude)))return h},[h]);return(0,u.useEffect)(()=>{X&&P&&W&&X.flyTo({lat:P.latitude,lng:P.longitude},W)},[X,P,W]),(0,j.jsxs)(v.h,{className:U.map,center:I(D),zoom:C,zoomControl:!d,dragging:!d,touchZoom:!d,doubleClickZoom:!d,scrollWheelZoom:!d,attributionControl:!1,ref:Q,children:[O.map(($,J)=>(0,j.jsx)(t.I,{url:$.url,attribution:$.attribution,subdomains:$.subdomains?$.subdomains:[],opacity:d?.5:1},J)),(0,j.jsx)(g.z,{prefix:!1}),P?(0,j.jsx)(a.J,{position:I(P),icon:(0,m.icon)(w)}):null,(0,j.jsx)(N,{readOnly:d,onClick:R})]})};E.displayName="Map";function I(d){return[d.latitude,d.longitude]}const N=({onClick:d,readOnly:O})=>((0,s.zV)({click:D=>{if(d&&!O){const C=D.latlng.wrap();d({latitude:C.lat,longitude:C.lng})}}}),null);try{E.displayName="Map",E.__docgenInfo={description:"",displayName:"Map",props:{readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},layers:{defaultValue:{value:`[
  {
    url: 'https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png',
    attribution: 'Data \xA9 <a href="https://www.kartverket.no/">Kartverket</a>',
  },
]`},description:"",name:"layers",required:!1,type:{name:"MapLayer[]"}},centerLocation:{defaultValue:{value:`{
  latitude: 64.888996,
  longitude: 12.8186054,
}`},description:"",name:"centerLocation",required:!1,type:{name:"Location"}},zoom:{defaultValue:{value:"4"},description:"",name:"zoom",required:!1,type:{name:"number"}},flyToZoomLevel:{defaultValue:{value:"16"},description:"",name:"flyToZoomLevel",required:!1,type:{name:"number"}},markerLocation:{defaultValue:null,description:"",name:"markerLocation",required:!1,type:{name:"Location"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((location: Location) => void)"}},markerIcon:{defaultValue:null,description:"",name:"markerIcon",required:!0,type:{name:"MapIconOptions"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Map/Map.tsx#Map"]={docgenInfo:E.__docgenInfo,name:"Map",path:"src/components/Map/Map.tsx#Map"})}catch(d){}},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AppWrapper/AppWrapper.module.css":(r,o,e)=>{e.d(o,{Z:()=>u});var v=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(v),g=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),s=a()(t());s.push([r.id,"@import url(https://altinncdn.no/fonts/altinn-din/altinn-din.css);"]),s.push([r.id,`html {
  font-family: var(--font_family-default), sans-serif;
}
`,""]),s.locals={};const u=s},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Map/Map.module.css":(r,o,e)=>{e.d(o,{Z:()=>u});var v=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=e.n(v),g=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),a=e.n(g),s=a()(t());s.push([r.id,`.Z2PfI4E45hEVN5FbqgRs {
  position: relative;
  height: 50rem;
  width: 100%;
}
`,""]),s.locals={map:"Z2PfI4E45hEVN5FbqgRs"};const u=s}}]);})();
