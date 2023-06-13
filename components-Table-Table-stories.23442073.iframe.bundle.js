"use strict";(()=>{var Te=Object.defineProperty,Se=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var le=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ie=(d,o,e)=>o in d?Te(d,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[o]=e,r=(d,o)=>{for(var e in o||(o={}))xe.call(o,e)&&ie(d,e,o[e]);if(le)for(var e of le(o))Ce.call(o,e)&&ie(d,e,o[e]);return d},m=(d,o)=>Se(d,ye(o));(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[89],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(d,o,e)=>{e.d(o,{$4:()=>a.$4,Dx:()=>a.Dx,Uh:()=>a.Uh,X6:()=>a.X6,dk:()=>a.dk,fQ:()=>a.fQ,h_:()=>a.h_});var l=e("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),a=e("./node_modules/@storybook/blocks/dist/index.mjs")},"./.storybook/StoryPage.tsx":(d,o,e)=>{e.d(o,{Y:()=>g});var l=e("./node_modules/react/index.js"),a=e("./node_modules/@storybook/addon-docs/dist/index.mjs"),T=e("./src/components/AppWrapper/AppWrapper.tsx"),i=e("./node_modules/react/jsx-runtime.js");const n=({children:S})=>(0,i.jsx)("div",{style:{backgroundColor:"#f8d7da",borderRadius:"0.25rem",color:"#721c24",marginBottom:"1rem",padding:"1rem"},children:(0,i.jsxs)("p",{style:{margin:"0"},children:[(0,i.jsx)("strong",{children:"Deprecated:"})," ",S]})});n.displayName="DeprecationWarning";const D=null;try{n.displayName="DeprecationWarning",n.__docgenInfo={description:"",displayName:"DeprecationWarning",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/DeprecationWarning.tsx#DeprecationWarning"]={docgenInfo:n.__docgenInfo,name:"DeprecationWarning",path:".storybook/DeprecationWarning.tsx#DeprecationWarning"})}catch(S){}const g=({description:S,deprecationWarning:y})=>(0,i.jsxs)(T.O,{children:[(0,i.jsx)(a.Dx,{}),y&&(0,i.jsx)(n,{children:y}),(0,i.jsx)(a.dk,{children:S}),(0,i.jsx)(a.fQ,{includePrimary:!0}),(0,i.jsx)(a.X6,{children:"Props"}),(0,i.jsx)(a.$4,{story:a.Uh})]});g.displayName="StoryPage";const c=null;try{g.displayName="StoryPage",g.__docgenInfo={description:"",displayName:"StoryPage",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},deprecationWarning:{defaultValue:null,description:"",name:"deprecationWarning",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES[".storybook/StoryPage.tsx#StoryPage"]={docgenInfo:g.__docgenInfo,name:"StoryPage",path:".storybook/StoryPage.tsx#StoryPage"})}catch(S){}},"./src/components/Pagination/Pagination.stories.tsx":(d,o,e)=>{var y,E,O,k,u,N,A,B;e.r(o),e.d(o,{Example:()=>c,__namedExportsOrder:()=>S,default:()=>D,descriptionTexts:()=>n});var l=e("./node_modules/react/index.js"),a=e("./.storybook/StoryPage.tsx"),T=e("./src/components/Pagination/Pagination.tsx"),i=e("./node_modules/react/jsx-runtime.js");const n={rowsPerPage:"Rader per side",of:"av",navigateFirstPage:"Naviger til f\xF8rste side i tabell",previousPage:"Forrige side i tabell",nextPage:"Neste side i tabell",navigateLastPage:"Naviger til siste side i tabell"},D={component:T.t,parameters:{docs:{page:()=>(0,i.jsx)(a.Y,{description:"TODO: Add a description (supports markdown)"})}},args:{}},g=M=>{const[K,V]=(0,l.useState)(5),[$,I]=(0,l.useState)(0),Y=H=>{V(parseInt(H.target.value,10)),I(0)};return(0,i.jsx)(T.t,m(r({},M),{rowsPerPage:K,currentPage:$,setCurrentPage:I,onRowsPerPageChange:Y,descriptionTexts:n}))};g.displayName="Template";const c=g.bind({});c.args={numberOfRows:200,rowsPerPageOptions:[5,10,15,20]},c.parameters={docs:{description:{story:""}}},n.parameters=m(r({},n.parameters),{docs:m(r({},(y=n.parameters)==null?void 0:y.docs),{source:r({originalSource:`{
  rowsPerPage: 'Rader per side',
  of: 'av',
  navigateFirstPage: 'Naviger til f\xF8rste side i tabell',
  previousPage: 'Forrige side i tabell',
  nextPage: 'Neste side i tabell',
  navigateLastPage: 'Naviger til siste side i tabell'
}`},(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source),description:r({story:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`},(u=(k=n.parameters)==null?void 0:k.docs)==null?void 0:u.description)})}),c.parameters=m(r({},c.parameters),{docs:m(r({},(N=c.parameters)==null?void 0:N.docs),{source:r({originalSource:`args => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return <Pagination {...args} rowsPerPage={rowsPerPage} currentPage={page} setCurrentPage={setPage} onRowsPerPageChange={handleChangeRowsPerPage} descriptionTexts={descriptionTexts} />;
}`},(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source)})});const S=["descriptionTexts","Example"];try{n.displayName="descriptionTexts",n.__docgenInfo={description:`Do not use these directly. They are exported here for re-use in Storyboard, but you should supply your own
when working with Pagination.`,displayName:"descriptionTexts",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.stories.tsx#descriptionTexts"]={docgenInfo:n.__docgenInfo,name:"descriptionTexts",path:"src/components/Pagination/Pagination.stories.tsx#descriptionTexts"})}catch(M){}},"./src/components/Table/Table.stories.tsx":(d,o,e)=>{var z,q,ee,te,se,oe,ne,ae,re;e.r(o),e.d(o,{BasicTable:()=>w,Responsive:()=>v,SelectRows:()=>R,__namedExportsOrder:()=>Pe,default:()=>pe});var l=e("./node_modules/react/index.js"),a=e("./node_modules/classnames/index.js"),T=e.n(a),i=e("./node_modules/@digdir/design-system-react/dist/esm/index.js"),n=e("./.storybook/StoryPage.tsx"),D=e("./src/components/Table/ResponsiveTable.tsx"),g=e("./src/components/Pagination/Pagination.stories.tsx"),c=e("./src/components/Table/Toolbox.ts");const S=[{caseNum:20220873,product:"Embalasje for snacksprodukter",status:"Under behandling",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/21/317574.png",alt:"chipspose"}},{caseNum:20220590,product:"Apparat for rengj\xF8ring av sveises\xF8m",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/30/313443.jpg",alt:"apparat for rengj\xF8ring av sveises\xF8m"}},{caseNum:20220827,product:"Logo",status:"Besluttet gjeldene",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/9/17/317418.JPG",alt:"logo"}},{caseNum:20220582,product:"Modul for handikaprampe, Bunnramme til modul for handikaprampe, Rekkverk til modul for handikaprampe",status:"Registrert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/6/20/313066.jpg",alt:"bilde av handikaprampe"}},{caseNum:20220408,product:"Bil",status:"Registert",image:{src:"https://search.patentstyret.no/onlinedb_files_ds/Pictures/2022/5/11/310547.jpg",alt:"Bil"}},{caseNum:20208507,product:"Vippesykkel",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200208/200208507.jpg",alt:"vippesykkel"}},{caseNum:20081269,product:"SHELL",status:"Besluttet gjeldende",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200431/200812696.jpg",alt:"shell"}},{caseNum:20110659,product:"DNB",status:"Registrert",image:{src:"https://search.patentstyret.no/Onlinedb_files_tm/Pictures/200448/201106591_5%20Figurmerker%20og%20bilder(cropped)%20-%201_200523766_0.jpg",alt:"dnb"}}];function y({page:x,rowsPerPage:P,sortColumn:p,sortDirection:f}){const b=[...S];return p&&(b.sort((C,h)=>C[p]===h[p]?0:C[p]>h[p]?1:-1),f===c.Sr.Descending&&b.reverse()),{totalNum:b.length,rows:b.slice(x*P,x*P+P)}}var E=e("./src/components/Pagination/index.ts"),O=e("./src/components/Table/Table.tsx"),k=e("./src/components/Table/TableHeader.tsx"),u=e("./src/components/Table/TableCell.tsx"),N=e("./src/components/Table/TableRow.tsx"),A=e("./src/components/Table/TableBody.tsx"),B=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),M=e.n(B),K=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),V=e.n(K),$=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),I=e.n($),Y=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),H=e.n(Y),de=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),ce=e.n(de),ue=e("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),me=e.n(ue),W=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css"),j={};j.styleTagTransform=me(),j.setAttributes=H(),j.insert=I().bind(null,"head"),j.domAPI=V(),j.insertStyleElement=ce();var he=M()(W.Z,j);const J=W.Z&&W.Z.locals?W.Z.locals:void 0;var ge=e("./src/components/Table/TableFooter.tsx"),s=e("./node_modules/react/jsx-runtime.js");const pe={component:O.i,parameters:{docs:{page:()=>(0,s.jsx)(n.Y,{description:"TODO: Add a description (supports markdown)",deprecationWarning:"Use Table from @digdir/design-system-react instead."})}},args:{}},X=x=>{const[P,p]=(0,l.useState)(void 0),[f,b]=(0,l.useState)(void 0),[C,h]=(0,l.useState)(c.Sr.NotActive),[L,U]=(0,l.useState)(5),[_,F]=(0,l.useState)(0),{rows:Q,totalNum:Z}=y({page:_,rowsPerPage:L,sortColumn:f,sortDirection:C});return(0,s.jsxs)(O.i,{selectRows:x.selectRows,onChange:({selectedValue:t})=>p(t),selectedValue:P,children:[(0,s.jsx)(k.x,{children:(0,s.jsxs)(N.S,{children:[x.selectRows&&(0,s.jsx)(u.p,{radiobutton:!0}),(0,s.jsx)(u.p,{onChange:({next:t})=>{b("caseNum"),h(t)},sortDirection:f==="caseNum"?C:c.Sr.NotActive,children:"S\xF8knadsnr."}),(0,s.jsx)(u.p,{onChange:({next:t})=>{b("product"),h(t)},sortDirection:f==="product"?C:c.Sr.NotActive,children:"Produkt"}),(0,s.jsx)(u.p,{children:"Status"}),(0,s.jsx)(u.p,{children:"Bilde"})]})}),(0,s.jsx)(A.R,{children:Q.map(t=>(0,s.jsxs)(N.S,{rowData:{caseNum:t.caseNum},children:[x.selectRows&&(0,s.jsx)(u.p,{radiobutton:!0,children:(0,s.jsx)(i.EU,{name:`${t.caseNum}`,onChange:()=>p(t),value:`${t.caseNum}`,checked:(P==null?void 0:P.caseNum)===t.caseNum,label:`${t.caseNum}`,hideLabel:!0})}),(0,s.jsx)(u.p,{children:t.caseNum}),(0,s.jsx)(u.p,{children:t.product}),(0,s.jsx)(u.p,{children:t.status}),(0,s.jsx)(u.p,{children:(0,s.jsx)("img",{className:T()(J.checkmark),src:t.image.src,alt:t.image.alt})})]},t.caseNum))}),(0,s.jsx)(ge.y,{children:(0,s.jsx)(N.S,{children:(0,s.jsx)(u.p,{colSpan:5,children:(0,s.jsx)(E.t,{numberOfRows:Z,rowsPerPageOptions:[5,10,15,20],rowsPerPage:L,onRowsPerPageChange:t=>{U(parseInt(t.target.value,10)),F(0)},currentPage:_,setCurrentPage:t=>F(t),descriptionTexts:g.descriptionTexts})})})})]})};X.displayName="Template";const G=()=>{const[x,P]=(0,l.useState)(void 0),[p,f]=(0,l.useState)(void 0),[b,C]=(0,l.useState)(c.Sr.NotActive),[h,L]=(0,l.useState)(5),[U,_]=(0,l.useState)(0),{rows:F,totalNum:Q}=y({rowsPerPage:h,page:U,sortColumn:p,sortDirection:b}),Z={rows:F,headers:{caseNum:"S\xF8knadsnr.",product:"Produkt",status:"Status",image:"Bilde"},showColumnsMobile:["product","caseNum","status"],columnSort:{onSortChange:({column:t,next:be})=>{f(t),C(be)},sortable:["caseNum","product"],currentlySortedColumn:p,currentDirection:b},renderCell:{image:t=>(0,s.jsx)("img",{className:T()(J.checkmark),src:t.src,alt:t.alt})},rowSelection:{onSelectionChange:t=>P(t),selectedValue:x},footer:(0,s.jsx)(E.t,{numberOfRows:Q,rowsPerPageOptions:[5,10,15,20],rowsPerPage:h,onRowsPerPageChange:t=>{L(parseInt(t.target.value,10)),_(0)},currentPage:U,setCurrentPage:t=>_(t),descriptionTexts:g.descriptionTexts})};return(0,s.jsx)(D.U,{config:Z})};G.displayName="ResponsiveTemplate";const w=X.bind({});w.args={selectRows:!1},w.parameters={docs:{description:{story:""}}};const R=X.bind({});R.args={selectRows:!0},R.parameters={docs:{description:{story:""}}};const v=G.bind({});v.args={},v.parameters={docs:{description:{story:""}}},w.parameters=m(r({},w.parameters),{docs:m(r({},(z=w.parameters)==null?void 0:z.docs),{source:r({originalSource:`args => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(undefined);
  const [sortColumn, setSortColumn] = useState<keyof MyExampleTableData | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.NotActive);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const {
    rows,
    totalNum
  } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection
  });
  return <Table selectRows={args.selectRows} onChange={({
    selectedValue
  }) => setSelected(selectedValue)} selectedValue={selected}>
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell onChange={({
          next
        }) => {
          setSortColumn('caseNum');
          setSortDirection(next);
        }} sortDirection={sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive}>
            S\xF8knadsnr.
          </TableCell>
          <TableCell onChange={({
          next
        }) => {
          setSortColumn('product');
          setSortDirection(next);
        }} sortDirection={sortColumn === 'product' ? sortDirection : SortDirection.NotActive}>
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(row => <TableRow key={row.caseNum} rowData={{
        caseNum: row.caseNum
      }}>
            {args.selectRows && <TableCell radiobutton={true}>
                <RadioButton name={\`\${row.caseNum}\`} onChange={() => setSelected(row)} value={\`\${row.caseNum}\`} checked={selected?.caseNum === row.caseNum} label={\`\${row.caseNum}\`} hideLabel={true}></RadioButton>
              </TableCell>}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img className={cn(classes['checkmark'])} src={row.image.src} alt={row.image.alt}></img>
            </TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination numberOfRows={totalNum} rowsPerPageOptions={[5, 10, 15, 20]} rowsPerPage={rowsPerPage} onRowsPerPageChange={event => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }} currentPage={page} setCurrentPage={newPage => setPage(newPage)} descriptionTexts={descriptionTexts} />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>;
}`},(ee=(q=w.parameters)==null?void 0:q.docs)==null?void 0:ee.source)})}),R.parameters=m(r({},R.parameters),{docs:m(r({},(te=R.parameters)==null?void 0:te.docs),{source:r({originalSource:`args => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(undefined);
  const [sortColumn, setSortColumn] = useState<keyof MyExampleTableData | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.NotActive);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const {
    rows,
    totalNum
  } = getExampleTableRows({
    page,
    rowsPerPage,
    sortColumn,
    sortDirection
  });
  return <Table selectRows={args.selectRows} onChange={({
    selectedValue
  }) => setSelected(selectedValue)} selectedValue={selected}>
      <TableHeader>
        <TableRow>
          {args.selectRows && <TableCell radiobutton={true}></TableCell>}
          <TableCell onChange={({
          next
        }) => {
          setSortColumn('caseNum');
          setSortDirection(next);
        }} sortDirection={sortColumn === 'caseNum' ? sortDirection : SortDirection.NotActive}>
            S\xF8knadsnr.
          </TableCell>
          <TableCell onChange={({
          next
        }) => {
          setSortColumn('product');
          setSortDirection(next);
        }} sortDirection={sortColumn === 'product' ? sortDirection : SortDirection.NotActive}>
            Produkt
          </TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Bilde</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(row => <TableRow key={row.caseNum} rowData={{
        caseNum: row.caseNum
      }}>
            {args.selectRows && <TableCell radiobutton={true}>
                <RadioButton name={\`\${row.caseNum}\`} onChange={() => setSelected(row)} value={\`\${row.caseNum}\`} checked={selected?.caseNum === row.caseNum} label={\`\${row.caseNum}\`} hideLabel={true}></RadioButton>
              </TableCell>}
            <TableCell>{row.caseNum}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <img className={cn(classes['checkmark'])} src={row.image.src} alt={row.image.alt}></img>
            </TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <Pagination numberOfRows={totalNum} rowsPerPageOptions={[5, 10, 15, 20]} rowsPerPage={rowsPerPage} onRowsPerPageChange={event => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }} currentPage={page} setCurrentPage={newPage => setPage(newPage)} descriptionTexts={descriptionTexts} />
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>;
}`},(oe=(se=R.parameters)==null?void 0:se.docs)==null?void 0:oe.source)})}),v.parameters=m(r({},v.parameters),{docs:m(r({},(ne=v.parameters)==null?void 0:ne.docs),{source:r({originalSource:`() => {
  const [selected, setSelected] = useState<MyExampleTableData | undefined>(undefined);
  const [sortColumn, setSortColumn] = useState<keyof MyExampleTableData | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<SortDirection>(SortDirection.NotActive);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const {
    rows,
    totalNum
  } = getExampleTableRows({
    rowsPerPage,
    page,
    sortColumn,
    sortDirection
  });
  const config: ResponsiveTableConfig<MyExampleTableData> = {
    rows,
    headers: {
      caseNum: 'S\xF8knadsnr.',
      product: 'Produkt',
      status: 'Status',
      image: 'Bilde'
    },
    showColumnsMobile: ['product', 'caseNum', 'status'],
    columnSort: {
      onSortChange: ({
        column,
        next
      }) => {
        setSortColumn(column);
        setSortDirection(next);
      },
      sortable: ['caseNum', 'product'],
      currentlySortedColumn: sortColumn,
      currentDirection: sortDirection
    },
    renderCell: {
      image: imageObj => <img className={cn(classes['checkmark'])} src={imageObj.src} alt={imageObj.alt} />
    },
    rowSelection: {
      onSelectionChange: row => setSelected(row),
      selectedValue: selected
    },
    footer: <Pagination numberOfRows={totalNum} rowsPerPageOptions={[5, 10, 15, 20]} rowsPerPage={rowsPerPage} onRowsPerPageChange={event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    }} currentPage={page} setCurrentPage={newPage => setPage(newPage)} descriptionTexts={descriptionTexts} />
  };
  return <ResponsiveTable config={config} />;
}`},(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source)})});const Pe=["BasicTable","SelectRows","Responsive"]},"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/Table/Table.stories.module.css":(d,o,e)=>{e.d(o,{Z:()=>D});var l=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=e.n(l),T=e("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),i=e.n(T),n=i()(a());n.push([d.id,`img {
  max-width: 45px;
  max-height: 45px;
}
`,""]),n.locals={};const D=n}}]);})();
