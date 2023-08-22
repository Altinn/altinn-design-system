"use strict";(()=>{var Li=Object.defineProperty,zi=Object.defineProperties;var ji=Object.getOwnPropertyDescriptors;var zr=Object.getOwnPropertySymbols;var ko=Object.prototype.hasOwnProperty,Eo=Object.prototype.propertyIsEnumerable;var wo=(le,ae,oe)=>ae in le?Li(le,ae,{enumerable:!0,configurable:!0,writable:!0,value:oe}):le[ae]=oe,te=(le,ae)=>{for(var oe in ae||(ae={}))ko.call(ae,oe)&&wo(le,oe,ae[oe]);if(zr)for(var oe of zr(ae))Eo.call(ae,oe)&&wo(le,oe,ae[oe]);return le},ue=(le,ae)=>zi(le,ji(ae));var jr=(le,ae)=>{var oe={};for(var c in le)ko.call(le,c)&&ae.indexOf(c)<0&&(oe[c]=le[c]);if(le!=null&&zr)for(var c of zr(le))ae.indexOf(c)<0&&Eo.call(le,c)&&(oe[c]=le[c]);return oe};var Pi=(le,ae)=>()=>(ae||le((ae={exports:{}}).exports,ae),ae.exports);var Be=(le,ae,oe)=>new Promise((c,fe)=>{var _r=we=>{try{qe(oe.next(we))}catch(er){fe(er)}},Pr=we=>{try{qe(oe.throw(we))}catch(er){fe(er)}},qe=we=>we.done?c(we.value):Promise.resolve(we.value).then(_r,Pr);qe((oe=oe.apply(le,ae)).next())});var Di=Pi(Bo=>{(self.webpackChunk_altinn_altinn_design_system=self.webpackChunk_altinn_altinn_design_system||[]).push([[451],{"./node_modules/@digdir/design-system-react/dist/esm/index.js":(le,ae,oe)=>{oe.d(ae,{zx:()=>Wn,rp:()=>Bn,qE:()=>En,Wu:()=>Sn});var c=oe("./node_modules/react/index.js"),fe=oe.t(c,2);let _r=0;function Pr(e){const[n,t]=(0,c.useState)(e),o=e||n;return(0,c.useEffect)(()=>{n==null&&(_r+=1,t(`aksel-icon-${_r}`))},[n]),o}const qe=c["useId"];function we(e){var n;if(qe!==void 0){const t=qe();return e!=null?e:t.replace(/(:)/g,"")}return(n=Pr(e))!==null&&n!==void 0?n:""}var er=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t};const So=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=er(e,["title","titleId"]);let d=we();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))});var Co=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t};const Ao=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=Co(e,["title","titleId"]);let d=we();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))});var An=oe("./node_modules/react-dom/index.js"),To=oe("./node_modules/console-browserify/index.js");function Dr(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t}var rr;(function(e){e.event="event",e.props="prop"})(rr||(rr={}));function Se(){}function Ve(e){return!!(e||"").match(/\d/)}function Fe(e){return e==null}function Io(e){return typeof e=="number"&&isNaN(e)}function Tn(e){return Fe(e)||Io(e)||typeof e=="number"&&!isFinite(e)}function In(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Ro(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function No(e,n,t){var o=Ro(t),i=e.search(/[1-9]/);return i=i===-1?e.length:i,e.substring(0,i)+e.substring(i,e.length).replace(o,"$1"+n)}function Oo(e){var n=(0,c.useRef)(e);n.current=e;var t=(0,c.useRef)(function(){for(var o=[],i=arguments.length;i--;)o[i]=arguments[i];return n.current.apply(n,o)});return t.current}function Vr(e,n){n===void 0&&(n=!0);var t=e[0]==="-",o=t&&n;e=e.replace("-","");var i=e.split("."),d=i[0],s=i[1]||"";return{beforeDecimal:d,afterDecimal:s,hasNegation:t,addNegation:o}}function Lo(e){if(!e)return e;var n=e[0]==="-";n&&(e=e.substring(1,e.length));var t=e.split("."),o=t[0].replace(/^0+/,"")||"0",i=t[1]||"";return(n?"-":"")+o+(i?"."+i:"")}function Rn(e,n,t){for(var o="",i=t?"0":"",d=0;d<=n-1;d++)o+=e[d]||i;return o}function Nn(e,n){return Array(n+1).join(e)}function On(e){var n=e+"",t=n[0]==="-"?"-":"";t&&(n=n.substring(1));var o=n.split(/[eE]/g),i=o[0],d=o[1];if(d=Number(d),!d)return t+i;i=i.replace(".","");var s=1+d,m=i.length;return s<0?i="0."+Nn("0",Math.abs(s))+i:s>=m?i=i+Nn("0",s-m):i=(i.substring(0,s)||"0")+"."+i.substring(s),t+i}function Ln(e,n,t){if(["","-"].indexOf(e)!==-1)return e;var o=(e.indexOf(".")!==-1||t)&&n,i=Vr(e),d=i.beforeDecimal,s=i.afterDecimal,m=i.hasNegation,_=parseFloat("0."+(s||"0")),f=s.length<=n?"0."+s:_.toFixed(n),p=f.split("."),g=d.split("").reverse().reduce(function(b,E,B){return b.length>B?(Number(b[0])+Number(E)).toString()+b.substring(1,b.length):E+b},p[0]),h=Rn(p[1]||"",n,t),w=m?"-":"",x=o?".":"";return""+w+g+x+h}function Ie(e,n){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",n),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(n,n),!0):(e.focus(),!1)}}function zn(e,n){for(var t=0,o=0,i=e.length,d=n.length;e[t]===n[t]&&t<i;)t++;for(;e[i-1-o]===n[d-1-o]&&d-o>t&&i-o>t;)o++;return{from:{start:t,end:i-o},to:{start:t,end:d-o}}}function zo(e,n,t){return Math.min(Math.max(e,n),t)}function Fr(e){return Math.max(e.selectionStart,e.selectionEnd)}function jo(){return typeof navigator!="undefined"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function jn(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Pn(e,n){return e===void 0&&(e=" "),typeof e=="string"?e:e[n]||" "}function Po(e,n,t,o,i,d){var s=zn(t,e),m=s.from,_=s.to;if(m.end-m.start===1&&m.end===_.end&&_.end===o)return o;var f=i.findIndex(function(L){return L}),p=e.slice(0,f);!n&&!t.startsWith(p)&&(t=p+t,o=o+p.length);for(var g=t.length,h=e.length,w={},x=new Array(g),b=0;b<g;b++){x[b]=-1;for(var E=0,B=h;E<B;E++)if(t[b]===e[E]&&w[E]!==!0){x[b]=E,w[E]=!0;break}}for(var S=o;S<g&&(x[S]===-1||!d(t[S]));)S++;var R=S===g||x[S]===-1?h:x[S];for(S=o-1;S>0&&x[S]===-1;)S--;var C=S===-1||x[S]===-1?0:x[S]+1;return C>R?R:o-C<R-o?C:R}function fr(e,n,t,o){var i=e.length;if(n=zo(n,0,i),o==="left"){for(;n>=0&&!t[n];)n--;n===-1&&(n=t.indexOf(!0))}else{for(;n<=i&&!t[n];)n++;n>i&&(n=t.lastIndexOf(!0))}return n===-1&&(n=i),n}function Do(e){for(var n=Array.from({length:e.length+1}).map(function(){return!0}),t=0,o=n.length;t<o;t++)n[t]=!!(Ve(e[t])||Ve(e[t-1]));return n}function Dn(e,n,t,o,i,d){d===void 0&&(d=Se);var s=Oo(function(x,b){var E,B;return Tn(x)?(B="",E=""):typeof x=="number"||b?(B=typeof x=="number"?On(x):x,E=o(B)):(B=i(x,void 0),E=o(B)),{formattedValue:E,numAsString:B}}),m=(0,c.useState)(function(){return s(Fe(e)?n:e,t)}),_=m[0],f=m[1],p=function(x,b){x.formattedValue!==_.formattedValue&&f({formattedValue:x.formattedValue,numAsString:x.value}),d(x,b)},g=e,h=t;Fe(e)&&(g=_.numAsString,h=!0);var w=s(g,h);return(0,c.useMemo)(function(){f(w)},[w.formattedValue]),[_,p]}function Vo(e){return e.replace(/[^0-9]/g,"")}function Fo(e){return e}function Vn(e){var n=e.type;n===void 0&&(n="text");var t=e.displayType;t===void 0&&(t="input");var o=e.customInput,i=e.renderText,d=e.getInputRef,s=e.format;s===void 0&&(s=Fo);var m=e.removeFormatting;m===void 0&&(m=Vo);var _=e.defaultValue,f=e.valueIsNumericString,p=e.onValueChange,g=e.isAllowed,h=e.onChange;h===void 0&&(h=Se);var w=e.onKeyDown;w===void 0&&(w=Se);var x=e.onMouseUp;x===void 0&&(x=Se);var b=e.onFocus;b===void 0&&(b=Se);var E=e.onBlur;E===void 0&&(E=Se);var B=e.value,S=e.getCaretBoundary;S===void 0&&(S=Do);var R=e.isValidInputCharacter;R===void 0&&(R=Ve);var C=Dr(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter"]),L=Dn(B,_,!!f,s,m,p),A=L[0],T=A.formattedValue,P=A.numAsString,K=L[1],F=(0,c.useRef)({formattedValue:T,numAsString:P}),O=function(I,N){F.current={formattedValue:I.formattedValue,numAsString:I.value},K(I,N)},M=(0,c.useState)(!1),Z=M[0],D=M[1],z=(0,c.useRef)(null),V=(0,c.useRef)({setCaretTimeout:null,focusTimeout:null});(0,c.useEffect)(function(){return D(!0),function(){clearTimeout(V.current.setCaretTimeout),clearTimeout(V.current.focusTimeout)}},[]);var G=s,H=function(I,N){var j=parseFloat(N);return{formattedValue:I,value:N,floatValue:isNaN(j)?void 0:j}},q=function(I,N,j){I.selectionStart===0&&I.selectionEnd===I.value.length||(Ie(I,N),V.current.setCaretTimeout=setTimeout(function(){I.value===j&&I.selectionStart!==I.selectionEnd&&Ie(I,N)},0))},X=function(I,N,j){return fr(I,N,S(I),j)},ne=function(I,N,j){var $=S(N),ee=Po(N,T,I,j,$,R);return ee=fr(N,ee,$),ee},Q=function(I){var N=I.formattedValue;N===void 0&&(N="");var j=I.input,$=I.setCaretPosition;$===void 0&&($=!0);var ee=I.source,ie=I.event,ce=I.numAsString,me=I.caretPos;if(j){if(me===void 0&&$){var mr=I.inputValue||j.value,Cn=Fr(j);j.value=N,me=ne(mr,N,Cn)}j.value=N,$&&me!==void 0&&q(j,me,N)}N!==T&&O(H(N,ce),{event:ie,source:ee})};(0,c.useEffect)(function(){var I=F.current,N=I.formattedValue,j=I.numAsString;T!==N&&(T!==P||N!==j)&&O(H(T,P),{event:void 0,source:rr.props})},[T,P]);var se=z.current?Fr(z.current):void 0,de=typeof window!="undefined"?c.useLayoutEffect:c.useEffect;de(function(){var I=z.current;if(T!==F.current.formattedValue&&I){var N=ne(F.current.formattedValue,T,se);I.value=T,q(I,N,T)}},[T]);var _e=function(I,N,j){var $=zn(T,I),ee=Object.assign(Object.assign({},$),{lastValue:T}),ie=m(I,ee),ce=G(ie);if(ie=m(ce,void 0),g&&!g(H(ce,ie))){var me=N.target,mr=Fr(me),Cn=ne(I,T,mr);return me.value=T,q(me,Cn,T),!1}return Q({formattedValue:ce,numAsString:ie,inputValue:I,event:N,source:j,setCaretPosition:!0,input:N.target}),!0},ke=function(I){var N=I.target,j=N.value,$=_e(j,I,rr.event);$&&h(I)},Ee=function(I){var N=I.target,j=I.key,$=N.selectionStart,ee=N.selectionEnd,ie=N.value;ie===void 0&&(ie="");var ce;if(j==="ArrowLeft"||j==="Backspace"?ce=Math.max($-1,0):j==="ArrowRight"?ce=Math.min($+1,ie.length):j==="Delete"&&(ce=$),ce===void 0||$!==ee){w(I);return}var me=ce;if(j==="ArrowLeft"||j==="ArrowRight"){var mr=j==="ArrowLeft"?"left":"right";me=X(ie,ce,mr),me!==ce&&I.preventDefault()}else j==="Delete"&&!R(ie[ce])?me=X(ie,ce,"right"):j==="Backspace"&&!R(ie[ce])&&(me=X(ie,ce,"left"));me!==ce&&q(N,me,ie),I.isUnitTestRun&&q(N,me,ie),w(I)},Pe=function(I){var N=I.target,j=N.selectionStart,$=N.selectionEnd,ee=N.value;if(ee===void 0&&(ee=""),j===$){var ie=X(ee,j);ie!==j&&q(N,ie,ee)}x(I)},Ge=function(I){I.persist&&I.persist();var N=I.target;z.current=N,V.current.focusTimeout=setTimeout(function(){var j=N.selectionStart,$=N.selectionEnd,ee=N.value;ee===void 0&&(ee="");var ie=X(ee,j);ie!==j&&!(j===0&&$===ee.length)&&q(N,ie,ee),b(I)},0)},De=function(I){z.current=null,clearTimeout(V.current.focusTimeout),clearTimeout(V.current.setCaretTimeout),E(I)},he=Z&&jo()?"numeric":void 0,W=Object.assign({inputMode:he},C,{type:n,value:T,onChange:ke,onKeyDown:Ee,onMouseUp:Pe,onFocus:Ge,onBlur:De});if(t==="text")return i?c.createElement(c.Fragment,null,i(T,C)||null):c.createElement("span",Object.assign({},C,{ref:d}),T);if(o){var U=o;return c.createElement(U,Object.assign({},W,{ref:d}))}return c.createElement("input",Object.assign({},W,{ref:d}))}function Fn(e,n){var t=n.decimalScale,o=n.fixedDecimalScale,i=n.prefix;i===void 0&&(i="");var d=n.suffix;d===void 0&&(d="");var s=n.allowNegative,m=n.thousandsGroupStyle;if(m===void 0&&(m="thousand"),e===""||e==="-")return e;var _=pr(n),f=_.thousandSeparator,p=_.decimalSeparator,g=t!==0&&e.indexOf(".")!==-1||t&&o,h=Vr(e,s),w=h.beforeDecimal,x=h.afterDecimal,b=h.addNegation;return t!==void 0&&(x=Rn(x,t,!!o)),f&&(w=No(w,f,m)),i&&(w=i+w),d&&(x=x+d),b&&(w="-"+w),e=w+(g&&p||"")+x,e}function pr(e){var n=e.decimalSeparator;n===void 0&&(n=".");var t=e.thousandSeparator,o=e.allowedDecimalSeparators;return t===!0&&(t=","),o||(o=[n,"."]),{decimalSeparator:n,thousandSeparator:t,allowedDecimalSeparators:o}}function Mo(e,n){e===void 0&&(e="");var t=new RegExp("(-)"),o=new RegExp("(-)(.)*(-)"),i=t.test(e),d=o.test(e);return e=e.replace(/-/g,""),i&&!d&&n&&(e="-"+e),e}function Ho(e,n){return new RegExp("(^-)|[0-9]|"+In(e),n?"g":void 0)}function Wo(e,n,t){return e===""?!0:!(n!=null&&n.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Zo(e,n,t){var o;n===void 0&&(n=jn(e));var i=t.allowNegative,d=t.prefix;d===void 0&&(d="");var s=t.suffix;s===void 0&&(s="");var m=t.decimalScale,_=n.from,f=n.to,p=f.start,g=f.end,h=pr(t),w=h.allowedDecimalSeparators,x=h.decimalSeparator,b=e[g]===x;if(Ve(e)&&(e===d||e===s)&&n.lastValue==="")return e;if(g-p===1&&w.indexOf(e[p])!==-1){var E=m===0?"":x;e=e.substring(0,p)+E+e.substring(p+1,e.length)}var B=function(G,H,q){var X=!1,ne=!1;d.startsWith("-")?X=!1:G.startsWith("--")?(X=!1,ne=!0):s.startsWith("-")&&G.length===s.length?X=!1:G[0]==="-"&&(X=!0);var Q=X?1:0;return ne&&(Q=2),Q&&(G=G.substring(Q),H-=Q,q-=Q),{value:G,start:H,end:q,hasNegation:X}},S=B(e,p,g),R=S.hasNegation;o=S,e=o.value,p=o.start,g=o.end;var C=B(n.lastValue,_.start,_.end),L=C.start,A=C.end,T=C.value,P=e.substring(p,g);e.length&&T.length&&(L>T.length-s.length||A<d.length)&&!(P&&s.startsWith(P))&&(e=T);var K=0;e.startsWith(d)?K+=d.length:p<d.length&&(K=p),e=e.substring(K),g-=K;var F=e.length,O=e.length-s.length;e.endsWith(s)?F=O:(g>O||g>e.length-s.length)&&(F=g),e=e.substring(0,F),e=Mo(R?"-"+e:e,i),e=(e.match(Ho(x,!0))||[]).join("");var M=e.indexOf(x);e=e.replace(new RegExp(In(x),"g"),function(G,H){return H===M?".":""});var Z=Vr(e,i),D=Z.beforeDecimal,z=Z.afterDecimal,V=Z.addNegation;return f.end-f.start<_.end-_.start&&D===""&&b&&!parseFloat(z)&&(e=V?"-":""),e}function Ko(e,n){var t=n.prefix;t===void 0&&(t="");var o=n.suffix;o===void 0&&(o="");var i=Array.from({length:e.length+1}).map(function(){return!0}),d=e[0]==="-";i.fill(!1,0,t.length+(d?1:0));var s=e.length;return i.fill(!1,s-o.length+1,s+1),i}function Go(e){var n=pr(e),t=n.thousandSeparator,o=n.decimalSeparator,i=e.prefix;i===void 0&&(i="");var d=e.allowNegative;if(d===void 0&&(d=!0),t===o)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+o+` (default value for decimalSeparator is .)
     `);return i.startsWith("-")&&d&&(To.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+i+`
      allowNegative: `+d+`
    `),d=!1),Object.assign(Object.assign({},e),{allowNegative:d})}function qo(e){e=Go(e);var n=e.decimalSeparator;n===void 0&&(n=".");var t=e.allowedDecimalSeparators,o=e.thousandsGroupStyle,i=e.suffix,d=e.allowNegative,s=e.allowLeadingZeros,m=e.onKeyDown;m===void 0&&(m=Se);var _=e.onBlur;_===void 0&&(_=Se);var f=e.thousandSeparator,p=e.decimalScale,g=e.fixedDecimalScale,h=e.prefix;h===void 0&&(h="");var w=e.defaultValue,x=e.value,b=e.valueIsNumericString,E=e.onValueChange,B=Dr(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),S=function(z){return Fn(z,e)},R=function(z,V){return Zo(z,V,e)},C=Fe(x)?w:x,L=b!=null?b:Wo(C,h,i);Fe(x)?Fe(w)||(L=b||typeof w=="number"):L=b||typeof x=="number";var A=function(z){return Tn(z)?z:(typeof z=="number"&&(z=On(z)),L&&typeof p=="number"?Ln(z,p,!!g):z)},T=Dn(A(x),A(w),!!L,S,R,E),P=T[0],K=P.numAsString,F=P.formattedValue,O=T[1],M=function(z){var V=z.target,G=z.key,H=V.selectionStart,q=V.selectionEnd,X=V.value;if(X===void 0&&(X=""),H!==q){m(z);return}G==="Backspace"&&X[0]==="-"&&H===h.length+1&&d&&Ie(V,1);var ne=pr(e),Q=ne.decimalSeparator,se=ne.allowedDecimalSeparators;G==="Backspace"&&X[H-1]===Q&&p&&g&&(Ie(V,H-1),z.preventDefault()),se!=null&&se.includes(G)&&X[H]===Q&&Ie(V,H+1);var de=f===!0?",":f;G==="Backspace"&&X[H-1]===de&&Ie(V,H-1),G==="Delete"&&X[H]===de&&Ie(V,H+1),m(z)},Z=function(z){var V=K;if(V.match(/\d/g)||(V=""),s||(V=Lo(V)),g&&p&&(V=Ln(V,p,g)),V!==K){var G=Fn(V,e);O({formattedValue:G,value:V,floatValue:parseFloat(V)},{event:z,source:rr.event})}_(z)},D=function(z){return z===n?!0:Ve(z)};return Object.assign(Object.assign({},B),{value:F,valueIsNumericString:!1,isValidInputCharacter:D,onValueChange:O,format:S,removeFormatting:R,getCaretBoundary:function(z){return Ko(z,e)},onKeyDown:M,onBlur:Z})}function Jo(e){var n=qo(e);return c.createElement(Vn,Object.assign({},n))}function Uo(e,n){var t=n.format,o=n.allowEmptyFormatting,i=n.mask,d=n.patternChar;if(d===void 0&&(d="#"),e===""&&!o)return"";for(var s=0,m=t.split(""),_=0,f=t.length;_<f;_++)t[_]===d&&(m[_]=e[s]||Pn(i,s),s+=1);return m.join("")}function Yo(e,n,t){n===void 0&&(n=jn(e));var o=t.format,i=t.patternChar;i===void 0&&(i="#");var d=n.from,s=n.to,m=n.lastValue;m===void 0&&(m="");var _=function(E){return o[E]===i},f=function(E,B){for(var S="",R=0;R<E.length;R++)_(B+R)&&Ve(E[R])&&(S+=E[R]);return S},p=function(E){return E.replace(/[^0-9]/g,"")};if(!o.match(/\d/))return p(e);if(m===""&&e.length===o.length){for(var g="",h=0;h<e.length;h++)if(_(h))Ve(e[h])&&(g+=e[h]);else if(e[h]!==o[h])return p(e);return g}var w=m.substring(0,d.start),x=e.substring(s.start,s.end),b=m.substring(d.end);return""+f(w,0)+p(x)+f(b,d.end)}function Xo(e,n){var t=n.format,o=n.mask,i=n.patternChar;i===void 0&&(i="#");var d=Array.from({length:e.length+1}).map(function(){return!0}),s=0,m=-1,_={};t.split("").forEach(function(h,w){var x=void 0;h===i&&(s++,x=Pn(o,s-1),m===-1&&e[w]===x&&(m=w)),_[w]=x});for(var f=function(h){return t[h]===i&&e[h]!==_[h]},p=0,g=d.length;p<g;p++)d[p]=p===m||f(p)||f(p-1);return d[t.indexOf(i)]=!0,d}function Qo(e){var n=e.mask;if(n){var t=n==="string"?n:n.toString();if(t.match(/\d/g))throw new Error("Mask "+n+" should not contain numeric character;")}}function $o(e,n){return e===""?!0:!(n!=null&&n.match(/\d/))&&typeof e=="string"&&(!!e.match(/^\d+$/)||e==="")}function ea(e){var n=e.mask,t=e.allowEmptyFormatting,o=e.format,i=e.inputMode;i===void 0&&(i="numeric");var d=e.onKeyDown;d===void 0&&(d=Se);var s=e.patternChar;s===void 0&&(s="#");var m=e.value,_=e.defaultValue,f=e.valueIsNumericString,p=Dr(e,["mask","allowEmptyFormatting","format","inputMode","onKeyDown","patternChar","value","defaultValue","valueIsNumericString"]);Qo(e);var g=function(E){return Xo(E,e)},h=function(E){var B=E.key,S=E.target,R=S.selectionStart,C=S.selectionEnd,L=S.value;if(R!==C){d(E);return}var A=R;if(B==="Backspace"||B==="Delete"){var T="right";if(B==="Backspace"){for(;A>0&&o[A-1]!==s;)A--;T="left"}else{for(var P=o.length;A<P&&o[A]!==s;)A++;T="right"}A=fr(L,A,g(L),T)}else o[A]!==s&&B!=="ArrowLeft"&&B!=="ArrowRight"&&(A=fr(L,A+1,g(L),"right"));A!==R&&Ie(S,A),d(E)},w=Fe(m)?_:m,x=f!=null?f:$o(w,o),b=Object.assign(Object.assign({},e),{valueIsNumericString:x});return Object.assign(Object.assign({},p),{value:m,defaultValue:_,valueIsNumericString:x,inputMode:i,format:function(E){return Uo(E,b)},removeFormatting:function(E,B){return Yo(E,B,b)},getCaretBoundary:g,onKeyDown:h})}function ra(e){var n=ea(e);return c.createElement(Vn,Object.assign({},n))}var Mn=oe("./node_modules/@altinn/figma-design-tokens/dist/tokens.esm.js"),Mr=oe("./node_modules/console-browserify/index.js");function re(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}var Hr,Hn={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Hr=Hn,function(){var e={}.hasOwnProperty;function n(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var d=typeof i;if(d==="string"||d==="number")t.push(i);else if(Array.isArray(i)){if(i.length){var s=n.apply(null,i);s&&t.push(s)}}else if(d==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var m in i)e.call(i,m)&&i[m]&&t.push(m)}}}return t.join(" ")}Hr.exports?(n.default=n,Hr.exports=n):window.classNames=n}();var J=Hn.exports;const Wr=e=>{var{svgIconComponent:n}=e,t=re(e,["svgIconComponent"]);return(0,c.isValidElement)(n)?(0,c.cloneElement)(n,Object.assign({},t)):null};function Y(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}Wr.displayName="SvgIcon";var Ce={button:"Button-module_button__2ZuB7 i__imported_focusable_0",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};Y(`:import("../../utils/utility.module.css") {
  i__imported_focusable_0: focusable;
}\r
\r
.Button-module_button__2ZuB7 {\r
  --border-radius: 3px;\r
  --button-size: var(--component-button-size-height-small);\r
  --button-vertical-padding: var(--component-button-space-padding-x-small);\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
  --icon-size: var(--component-button-size-icon-small);\r
  align-items: center;\r
  border-radius: var(--border-radius);\r
  border: var(--component-button-border_width-default) solid transparent;\r
  box-sizing: border-box;\r
  color: var(--font-and-icon-color);\r
  cursor: pointer;\r
  display: flex;\r
  fill: var(--font-and-icon-color);\r
  font-family: inherit;\r
  height: var(--button-size);\r
  justify-content: center;\r
  letter-spacing: var(--typography-default-letter-spacing);\r
  padding: 0 var(--button-vertical-padding);\r
  text-align: center;\r
}\r
\r
.Button-module_button__2ZuB7:disabled,\r
.Button-module_button__2ZuB7[aria-disabled='true'] {\r
  cursor: auto;\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Button-module_icon__-43u5 {\r
  display: inline-block;\r
  height: var(--icon-size);\r
  width: var(--icon-size);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_small__l39oh {\r
  --button-size: var(--component-button-size-height-small);\r
  --button-vertical-padding: var(--component-button-space-padding-x-small);\r
  --icon-size: var(--component-button-size-icon-small);\r
\r
  font-size: var(--font_size-300);\r
  gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
  --button-size: var(--component-button-size-height-medium);\r
  --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
  --icon-size: var(--component-button-size-icon-medium);\r
\r
  font-size: var(--font_size-400-breakpoint_md);\r
  gap: var(--component-button-space-gap-medium);\r
  min-width: var(--component-button-size-height-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
  --button-size: var(--component-button-size-height-large);\r
  --button-vertical-padding: var(--component-button-space-padding-x-large);\r
  --icon-size: var(--component-button-size-icon-large);\r
\r
  font-size: var(--font_size-600-breakpoint_md);\r
  gap: var(--component-button-space-gap-large);\r
  min-width: var(--component-button-size-height-large);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {\r
  width: 100%;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {\r
  border-style: dashed;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq- {\r
  background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {\r
  --border-radius: 50px;\r
\r
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
  background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
  padding: calc((var(--button-size) - var(--icon-size)) / 2 - var(--component-button-border_width-default));\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
  background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
  background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
  background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
  background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: rgb(255 255 255 / 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: rgb(255 255 255 / 0.1);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
  --font-and-icon-color: var(--component-button-outline-primary-color-text-default);\r
\r
  border-color: var(--component-button-outline-primary-color-border-default);\r
  background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-800);\r
\r
  background: var(--component-button-outline-primary-color-background-hover);\r
  border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);\r
\r
  background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-blue-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
  --font-and-icon-color: var(--colors-green-700);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-green-800);\r
\r
  background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
  --font-and-icon-color: var(--colors-red-500);\r
\r
  background: var(--colors-white);\r
  border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-red-700);\r
\r
  background: var(--colors-red-100);\r
  border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  border-color: var(--colors-white);\r
  background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  background: rgb(255 255 255 / 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
  --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-800);\r
\r
  background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
  --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):hover {\r
  background: var(--colors-grey-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
  --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-green-800);\r
\r
  background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
  --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-red-800);\r
\r
  background: var(--colors-red-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--component-button-filled-color-text-all);\r
\r
  background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
  --font-and-icon-color: var(--colors-white);\r
\r
  background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):hover {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: rgb(255 255 255 / 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not([aria-disabled='true'], :disabled):active {\r
  --font-and-icon-color: var(--colors-blue-900);\r
\r
  background: var(--colors-white);\r
}\r
`);const Wn=(0,c.forwardRef)((e,n)=>{var{children:t,color:o="primary",variant:i="filled",size:d="small",fullWidth:s=!1,dashedBorder:m=!1,iconPlacement:_="left",icon:f,type:p="button",className:g}=e,h=re(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return c.createElement("button",Object.assign({},h,{ref:n,className:J(Ce.button,Ce[d],Ce[i],Ce[o],{[Ce.fullWidth]:s},{[Ce.dashedBorder]:m},{[Ce.onlyIcon]:!t&&f},g),type:p}),f&&_==="left"&&c.createElement(Wr,{svgIconComponent:f,className:Ce.icon}),t,f&&_==="right"&&c.createElement(Wr,{svgIconComponent:f,className:Ce.icon}))});function gr(e,n,t){(0,c.useEffect)(()=>{const o=t!=null?t:document.body;return o.addEventListener(e,n),()=>o.removeEventListener(e,n)},[e,n,t])}function Zr(e,n,t){(0,c.useEffect)(()=>{if(!t)return;const o=i=>{i.key===e&&n()};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[e,n,t])}function nr(e){const n=(0,c.useRef)();return(0,c.useEffect)(()=>{n.current=e},[e]),n.current}Wn.displayName="Button";const Je=(e,n)=>{const t=(0,c.useRef)(!0);(0,c.useEffect)(()=>{if(!t.current)return e();t.current=!1},n)};function Zn(e,n){if(e===n)return!0;if(e===void 0||n===void 0||e.length!==n.length)return!1;for(const[t]of e.entries())if(e[t]!==n[t])return!1;return!0}function br(e){return e.length===new Set(e).size}var na="Tabs-module_tabs__QzIkz",ta="Tabs-module_tablist__WR6ag",oa="Tabs-module_tab__IdDYc",aa="Tabs-module_selected__TxfYv",la="Tabs-module_divider__-r5Cd",ia="Tabs-module_tabpanel__0vR1c";Y(`@import url('https://altinncdn.no/fonts/altinn-din/altinn-din.css');\r
\r
.Tabs-module_tabs__QzIkz {\r
  --divider-color: #c9c9c9;\r
  --divider-width: 1px;\r
  --tab-border_bottom_color-selected: var(--colors-blue-700);\r
  --tab-border_bottom_color: transparent;\r
  --tab-border_bottom_width: 4px;\r
  --tab-font_size: var(--font_size-component-size-sm);\r
  --tab-font_weight: 500;\r
  --tab-height: 32px;\r
  --tab-text_color-hover: var(--colors-black);\r
  --tab-text_color-selected: var(--colors-blue-700);\r
  --tab-text_color: #68707c;\r
  --tablist-gap: 1.5rem;\r
  --tablist-margin_horizontal: 20px;\r
  --tabpanel-margin_horizontal: 20px;\r
  --tabpanel-margin_vertical: 20px;\r
\r
  position: relative;\r
}\r
\r
.Tabs-module_tablist__WR6ag {\r
  display: flex;\r
  gap: var(--tablist-gap);\r
  margin: 0 var(--tablist-margin_horizontal);\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.Tabs-module_tab__IdDYc {\r
  background-color: transparent;\r
  border-bottom-color: var(--tab-border_bottom_color);\r
  border-bottom-style: solid;\r
  border-width: 0 0 var(--tab-border_bottom_width) 0;\r
  color: var(--tab-text_color);\r
  cursor: pointer;\r
  font-family: inherit;\r
  font-size: var(--tab-font_size);\r
  font-weight: var(--tab-font_weight);\r
  line-height: var(--tab-height);\r
  margin: 0;\r
  overflow: hidden;\r
  padding: 0;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {\r
  --tab-text_color: var(--tab-text_color-selected);\r
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\r
}\r
\r
.Tabs-module_tab__IdDYc:hover {\r
  --tab-text_color: var(--tab-text_color-hover);\r
}\r
\r
.Tabs-module_tab__IdDYc:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Tabs-module_divider__-r5Cd {\r
  border-color: var(--divider-color);\r
  border-style: solid;\r
  border-width: var(--divider-width) 0 0 0;\r
  height: var(--divider-width);\r
  margin: 0;\r
  position: absolute;\r
  top: var(--tab-height);\r
  width: 100%;\r
}\r
\r
.Tabs-module_tabpanel__0vR1c {\r
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\r
}\r
`);const Kn=e=>e.replace(/\s/,"_"),da=({activeTab:e,items:n,onChange:t})=>{const o=(0,c.useId)(),i=n.map(({name:b,content:E,value:B,tabId:S,panelId:R})=>{const C=B!=null?B:b;return{name:b,content:E,value:C,tabId:S!=null?S:o+Kn(C)+"-tab",panelId:R!=null?R:o+Kn(C)+"-panel"}});if(!br(i.map(({value:b})=>b)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(b=>b.value===e))throw Error("The given active tab value must exist in the list of items.");const d=b=>i.findIndex(E=>E.value===b),s=e!=null?e:i[0].value,[m,_]=(0,c.useState)(s),[f,p]=(0,c.useState)(d(s));(0,c.useEffect)(()=>_(s),[s]);const g=(0,c.useRef)(null),h=i.length-1;Je(()=>{var b;(b=g.current)===null||b===void 0||b.querySelectorAll('[role="tab"]')[f].focus()},[f]);const w=b=>{m!==b&&t&&t(b),_(b),p(d(b))},x=b=>E=>{switch(E.key){case"ArrowRight":f!==void 0&&p(f===h?0:f+1);break;case"ArrowLeft":f!==void 0&&p(f===0?h:f-1);break;case"Space":w(b)}};return c.createElement("div",{className:na},c.createElement("div",{className:ta,ref:g,role:"tablist"},i.map((b,E)=>{const B=b.value===m;return c.createElement("button",{"aria-controls":b.panelId,"aria-selected":B,className:J(oa,B&&aa),id:b.tabId,key:b.value,onClick:()=>w(b.value),onKeyDown:x(b.value),role:"tab",tabIndex:f===E?0:-1},b.name)})),c.createElement("hr",{className:la}),i.map(b=>c.createElement("div",{className:ia,"aria-labelledby":b.tabId,hidden:b.value!==m,id:b.panelId,key:b.panelId,role:"tabpanel"},b.content)))};da.displayName="Tabs";var Re={fieldSet:"FieldSet-module_fieldSet__GgktD",small:"FieldSet-module_small__eNG6Q",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};Y(`.FieldSet-module_fieldSet__GgktD {\r
  --color: var(--component-checkbox-color-text-default);\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-color: var(--component-field_description-color-text-default);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --help_text-gap: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
\r
  color: var(--color);\r
  border: 0;\r
  font-size: var(--font_size);\r
  line-height: var(--typography-default-line-height);\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_small__eNG6Q {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --help_text-gap: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
}\r
\r
.FieldSet-module_xsmall__y9foq {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --help_text-gap: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled {\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled * {\r
  opacity: 1;\r
}\r
\r
.FieldSet-module_legendAndHelpText__WDZ-j {\r
  display: flex;\r
  gap: var(--help_text-gap);\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV {\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legendContent__nOeHK {\r
  font-weight: bold;\r
}\r
\r
.FieldSet-module_description__XKHS- {\r
  color: var(--description-color);\r
  margin: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {\r
  margin-top: var(--description-margin_top);\r
}\r
\r
.FieldSet-module_content__aZp-0:not(:first-child) {\r
  margin-top: var(--content-margin_top);\r
}\r
\r
.FieldSet-module_errorMessage__nDaJ7 {\r
  margin-top: var(--error_message-margin_top);\r
}\r
`);const Kr=e=>{var{children:n,className:t,contentClassName:o,description:i,error:d,helpText:s,legend:m,size:_="small"}=e,f=re(e,["children","className","contentClassName","description","error","helpText","legend","size"]);return c.createElement("fieldset",Object.assign({},f,{className:J(Re.fieldSet,Re[_],t)}),m&&c.createElement("legend",{className:Re.legend},c.createElement("span",{className:Re.legendAndHelpText},c.createElement("span",{className:Re.legendContent},m),s&&c.createElement(fn,{size:_,title:typeof m=="string"?`Help text for ${m}`:""},s))),i&&c.createElement("p",{className:Re.description},i),c.createElement("div",{className:J(Re.content,o)},n),d&&c.createElement("div",{className:Re.errorMessage},c.createElement(Wt,{role:"alert"},d)))};function Ue(e){return e.split("-")[1]}function Gr(e){return e==="y"?"height":"width"}function Ne(e){return e.split("-")[0]}function Ye(e){return["top","bottom"].includes(Ne(e))?"x":"y"}function Gn(e,n,t){let{reference:o,floating:i}=e;const d=o.x+o.width/2-i.width/2,s=o.y+o.height/2-i.height/2,m=Ye(n),_=Gr(m),f=o[_]/2-i[_]/2,p=m==="x";let g;switch(Ne(n)){case"top":g={x:d,y:o.y-i.height};break;case"bottom":g={x:d,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:s};break;case"left":g={x:o.x-i.width,y:s};break;default:g={x:o.x,y:o.y}}switch(Ue(n)){case"start":g[m]-=f*(t&&p?-1:1);break;case"end":g[m]+=f*(t&&p?-1:1)}return g}Kr.displayName="FieldSet";function qn(e){return typeof e!="number"?function(n){return te({top:0,right:0,bottom:0,left:0},n)}(e):{top:e,right:e,bottom:e,left:e}}function vr(e){return ue(te({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}function qr(e,n){return Be(this,null,function*(){var t;n===void 0&&(n={});const{x:o,y:i,platform:d,rects:s,elements:m,strategy:_}=e,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:g="floating",altBoundary:h=!1,padding:w=0}=n,x=qn(w),b=m[h?g==="floating"?"reference":"floating":g],E=vr(yield d.getClippingRect({element:(t=yield d.isElement==null?void 0:d.isElement(b))==null||t?b:b.contextElement||(yield d.getDocumentElement==null?void 0:d.getDocumentElement(m.floating)),boundary:f,rootBoundary:p,strategy:_})),B=g==="floating"?ue(te({},s.floating),{x:o,y:i}):s.reference,S=yield d.getOffsetParent==null?void 0:d.getOffsetParent(m.floating),R=(yield d.isElement==null?void 0:d.isElement(S))&&(yield d.getScale==null?void 0:d.getScale(S))||{x:1,y:1},C=vr(d.convertOffsetParentRelativeRectToViewportRelativeRect?yield d.convertOffsetParentRelativeRectToViewportRelativeRect({rect:B,offsetParent:S,strategy:_}):B);return{top:(E.top-C.top+x.top)/R.y,bottom:(C.bottom-E.bottom+x.bottom)/R.y,left:(E.left-C.left+x.left)/R.x,right:(C.right-E.right+x.right)/R.x}})}const Jr=Math.min,Me=Math.max;function Ur(e,n,t){return Me(e,Jr(n,t))}const Jn=e=>({name:"arrow",options:e,fn(t){return Be(this,null,function*(){const{element:o,padding:i=0}=e||{},{x:d,y:s,placement:m,rects:_,platform:f,elements:p}=t;if(o==null)return{};const g=qn(i),h={x:d,y:s},w=Ye(m),x=Gr(w),b=yield f.getDimensions(o),E=w==="y",B=E?"top":"left",S=E?"bottom":"right",R=E?"clientHeight":"clientWidth",C=_.reference[x]+_.reference[w]-h[w]-_.floating[x],L=h[w]-_.reference[w],A=yield f.getOffsetParent==null?void 0:f.getOffsetParent(o);let T=A?A[R]:0;T&&(yield f.isElement==null?void 0:f.isElement(A))||(T=p.floating[R]||_.floating[x]);const P=C/2-L/2,K=g[B],F=T-b[x]-g[S],O=T/2-b[x]/2+P,M=Ur(K,O,F),Z=Ue(m)!=null&&O!=M&&_.reference[x]/2-(O<K?g[B]:g[S])-b[x]/2<0;return{[w]:h[w]-(Z?O<K?K-O:F-O:0),data:{[w]:M,centerOffset:O-M}}})}}),ca={left:"right",right:"left",bottom:"top",top:"bottom"};function hr(e){return e.replace(/left|right|bottom|top/g,n=>ca[n])}const sa={start:"end",end:"start"};function Yr(e){return e.replace(/start|end/g,n=>sa[n])}const Un=function(e){return e===void 0&&(e={}),{name:"flip",options:e,fn(t){return Be(this,null,function*(){var o;const{placement:i,middlewareData:d,rects:s,initialPlacement:m,platform:_,elements:f}=t,M=e,{mainAxis:p=!0,crossAxis:g=!0,fallbackPlacements:h,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:b=!0}=M,E=jr(M,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),B=Ne(i),S=Ne(m)===m,R=yield _.isRTL==null?void 0:_.isRTL(f.floating),C=h||(S||!b?[hr(m)]:function(Z){const D=hr(Z);return[Yr(Z),D,Yr(D)]}(m));h||x==="none"||C.push(...function(Z,D,z,V){const G=Ue(Z);let H=function(q,X,ne){const Q=["left","right"],se=["right","left"],de=["top","bottom"],_e=["bottom","top"];switch(q){case"top":case"bottom":return ne?X?se:Q:X?Q:se;case"left":case"right":return X?de:_e;default:return[]}}(Ne(Z),z==="start",V);return G&&(H=H.map(q=>q+"-"+G),D&&(H=H.concat(H.map(Yr)))),H}(m,b,x,R));const L=[m,...C],A=yield qr(t,E),T=[];let P=((o=d.flip)==null?void 0:o.overflows)||[];if(p&&T.push(A[B]),g){const{main:Z,cross:D}=function(z,V,G){G===void 0&&(G=!1);const H=Ue(z),q=Ye(z),X=Gr(q);let ne=q==="x"?H===(G?"end":"start")?"right":"left":H==="start"?"bottom":"top";return V.reference[X]>V.floating[X]&&(ne=hr(ne)),{main:ne,cross:hr(ne)}}(i,s,R);T.push(A[Z],A[D])}if(P=[...P,{placement:i,overflows:T}],!T.every(Z=>Z<=0)){var K,F;const Z=(((K=d.flip)==null?void 0:K.index)||0)+1,D=L[Z];if(D)return{data:{index:Z,overflows:P},reset:{placement:D}};let z=(F=P.filter(V=>V.overflows[0]<=0).sort((V,G)=>V.overflows[1]-G.overflows[1])[0])==null?void 0:F.placement;if(!z)switch(w){case"bestFit":{var O;const V=(O=P.map(G=>[G.placement,G.overflows.filter(H=>H>0).reduce((H,q)=>H+q,0)]).sort((G,H)=>G[1]-H[1])[0])==null?void 0:O[0];V&&(z=V);break}case"initialPlacement":z=m}if(i!==z)return{reset:{placement:z}}}return{}})}}},ua=function(e){return e===void 0&&(e=0),{name:"offset",options:e,fn(t){return Be(this,null,function*(){const{x:o,y:i}=t,d=yield function(s,m){return Be(this,null,function*(){const{placement:_,platform:f,elements:p}=s,g=yield f.isRTL==null?void 0:f.isRTL(p.floating),h=Ne(_),w=Ue(_),x=Ye(_)==="x",b=["left","top"].includes(h)?-1:1,E=g&&x?-1:1,B=typeof m=="function"?m(s):m;let{mainAxis:S,crossAxis:R,alignmentAxis:C}=typeof B=="number"?{mainAxis:B,crossAxis:0,alignmentAxis:null}:te({mainAxis:0,crossAxis:0,alignmentAxis:null},B);return w&&typeof C=="number"&&(R=w==="end"?-1*C:C),x?{x:R*E,y:S*b}:{x:S*b,y:R*E}})}(t,e);return{x:o+d.x,y:i+d.y,data:d}})}}},ma=function(e){return e===void 0&&(e={}),{name:"size",options:e,fn(t){return Be(this,null,function*(){const{placement:o,rects:i,platform:d,elements:s}=t,T=e,{apply:m=()=>{}}=T,_=jr(T,["apply"]),f=yield qr(t,_),p=Ne(o),g=Ue(o),h=Ye(o)==="x",{width:w,height:x}=i.floating;let b,E;p==="top"||p==="bottom"?(b=p,E=g===((yield d.isRTL==null?void 0:d.isRTL(s.floating))?"start":"end")?"left":"right"):(E=p,b=g==="end"?"top":"bottom");const B=x-f[b],S=w-f[E],R=!t.middlewareData.shift;let C=B,L=S;if(h){const P=w-f.left-f.right;L=g||R?Jr(S,P):P}else{const P=x-f.top-f.bottom;C=g||R?Jr(B,P):P}if(R&&!g){const P=Me(f.left,0),K=Me(f.right,0),F=Me(f.top,0),O=Me(f.bottom,0);h?L=w-2*(P!==0||K!==0?P+K:Me(f.left,f.right)):C=x-2*(F!==0||O!==0?F+O:Me(f.top,f.bottom))}yield m(ue(te({},t),{availableWidth:L,availableHeight:C}));const A=yield d.getDimensions(s.floating);return w!==A.width||x!==A.height?{reset:{rects:!0}}:{}})}}};function pe(e){var n;return((n=e.ownerDocument)==null?void 0:n.defaultView)||window}function ye(e){return pe(e).getComputedStyle(e)}function Yn(e){return e instanceof pe(e).Node}function Oe(e){return Yn(e)?(e.nodeName||"").toLowerCase():""}let yr;function Xn(){if(yr)return yr;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(yr=e.brands.map(n=>n.brand+"/"+n.version).join(" "),yr):navigator.userAgent}function xe(e){return e instanceof pe(e).HTMLElement}function ge(e){return e instanceof pe(e).Element}function Qn(e){return typeof ShadowRoot=="undefined"?!1:e instanceof pe(e).ShadowRoot||e instanceof ShadowRoot}function tr(e){const{overflow:n,overflowX:t,overflowY:o,display:i}=ye(e);return/auto|scroll|overlay|hidden|clip/.test(n+o+t)&&!["inline","contents"].includes(i)}function _a(e){return["table","td","th"].includes(Oe(e))}function Xr(e){const n=/firefox/i.test(Xn()),t=ye(e),o=t.backdropFilter||t.WebkitBackdropFilter;return t.transform!=="none"||t.perspective!=="none"||!!o&&o!=="none"||n&&t.willChange==="filter"||n&&!!t.filter&&t.filter!=="none"||["transform","perspective"].some(i=>t.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const d=t.contain;return d!=null&&d.includes(i)})}function Qr(){return/^((?!chrome|android).)*safari/i.test(Xn())}function xr(e){return["html","body","#document"].includes(Oe(e))}const $n=Math.min,or=Math.max,wr=Math.round;function et(e){const n=ye(e);let t=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=xe(e),d=i?e.offsetWidth:t,s=i?e.offsetHeight:o,m=wr(t)!==d||wr(o)!==s;return m&&(t=d,o=s),{width:t,height:o,fallback:m}}function rt(e){return ge(e)?e:e.contextElement}const nt={x:1,y:1};function Xe(e){const n=rt(e);if(!xe(n))return nt;const t=n.getBoundingClientRect(),{width:o,height:i,fallback:d}=et(n);let s=(d?wr(t.width):t.width)/o,m=(d?wr(t.height):t.height)/i;return s&&Number.isFinite(s)||(s=1),m&&Number.isFinite(m)||(m=1),{x:s,y:m}}function He(e,n,t,o){var i,d;n===void 0&&(n=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),m=rt(e);let _=nt;n&&(o?ge(o)&&(_=Xe(o)):_=Xe(e));const f=m?pe(m):window,p=Qr()&&t;let g=(s.left+(p&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/_.x,h=(s.top+(p&&((d=f.visualViewport)==null?void 0:d.offsetTop)||0))/_.y,w=s.width/_.x,x=s.height/_.y;if(m){const b=pe(m),E=o&&ge(o)?pe(o):o;let B=b.frameElement;for(;B&&o&&E!==b;){const S=Xe(B),R=B.getBoundingClientRect(),C=getComputedStyle(B);R.x+=(B.clientLeft+parseFloat(C.paddingLeft))*S.x,R.y+=(B.clientTop+parseFloat(C.paddingTop))*S.y,g*=S.x,h*=S.y,w*=S.x,x*=S.y,g+=R.x,h+=R.y,B=pe(B).frameElement}}return vr({width:w,height:x,x:g,y:h})}function Le(e){return((Yn(e)?e.ownerDocument:e.document)||window.document).documentElement}function kr(e){return ge(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function tt(e){return He(Le(e)).left+kr(e).scrollLeft}function Qe(e){if(Oe(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Qn(e)&&e.host||Le(e);return Qn(n)?n.host:n}function ot(e){const n=Qe(e);return xr(n)?n.ownerDocument.body:xe(n)&&tr(n)?n:ot(n)}function ze(e,n){var t;n===void 0&&(n=[]);const o=ot(e),i=o===((t=e.ownerDocument)==null?void 0:t.body),d=pe(o);return i?n.concat(d,d.visualViewport||[],tr(o)?o:[]):n.concat(o,ze(o))}function at(e,n,t){let o;if(n==="viewport")o=function(s,m){const _=pe(s),f=Le(s),p=_.visualViewport;let g=f.clientWidth,h=f.clientHeight,w=0,x=0;if(p){g=p.width,h=p.height;const b=Qr();(!b||b&&m==="fixed")&&(w=p.offsetLeft,x=p.offsetTop)}return{width:g,height:h,x:w,y:x}}(e,t);else if(n==="document")o=function(s){const m=Le(s),_=kr(s),f=s.ownerDocument.body,p=or(m.scrollWidth,m.clientWidth,f.scrollWidth,f.clientWidth),g=or(m.scrollHeight,m.clientHeight,f.scrollHeight,f.clientHeight);let h=-_.scrollLeft+tt(s);const w=-_.scrollTop;return ye(f).direction==="rtl"&&(h+=or(m.clientWidth,f.clientWidth)-p),{width:p,height:g,x:h,y:w}}(Le(e));else if(ge(n))o=function(s,m){const _=He(s,!0,m==="fixed"),f=_.top+s.clientTop,p=_.left+s.clientLeft,g=xe(s)?Xe(s):{x:1,y:1};return{width:s.clientWidth*g.x,height:s.clientHeight*g.y,x:p*g.x,y:f*g.y}}(n,t);else{const s=te({},n);if(Qr()){var i,d;const m=pe(e);s.x-=((i=m.visualViewport)==null?void 0:i.offsetLeft)||0,s.y-=((d=m.visualViewport)==null?void 0:d.offsetTop)||0}o=s}return vr(o)}function lt(e,n){const t=Qe(e);return!(t===n||!ge(t)||xr(t))&&(ye(t).position==="fixed"||lt(t,n))}function it(e,n){return xe(e)&&ye(e).position!=="fixed"?n?n(e):e.offsetParent:null}function dt(e,n){const t=pe(e);if(!xe(e))return t;let o=it(e,n);for(;o&&_a(o)&&ye(o).position==="static";)o=it(o,n);return o&&(Oe(o)==="html"||Oe(o)==="body"&&ye(o).position==="static"&&!Xr(o))?t:o||function(i){let d=Qe(i);for(;xe(d)&&!xr(d);){if(Xr(d))return d;d=Qe(d)}return null}(e)||t}function fa(e,n,t){const o=xe(n),i=Le(n),d=He(e,!0,t==="fixed",n);let s={scrollLeft:0,scrollTop:0};const m={x:0,y:0};if(o||!o&&t!=="fixed")if((Oe(n)!=="body"||tr(i))&&(s=kr(n)),xe(n)){const _=He(n,!0);m.x=_.x+n.clientLeft,m.y=_.y+n.clientTop}else i&&(m.x=tt(i));return{x:d.left+s.scrollLeft-m.x,y:d.top+s.scrollTop-m.y,width:d.width,height:d.height}}const pa={getClippingRect:function(e){let{element:n,boundary:t,rootBoundary:o,strategy:i}=e;const d=[...t==="clippingAncestors"?function(_,f){const p=f.get(_);if(p)return p;let g=ze(_).filter(b=>ge(b)&&Oe(b)!=="body"),h=null;const w=ye(_).position==="fixed";let x=w?Qe(_):_;for(;ge(x)&&!xr(x);){const b=ye(x),E=Xr(x);E||b.position!=="fixed"||(h=null),(w?!E&&!h:!E&&b.position==="static"&&h&&["absolute","fixed"].includes(h.position)||tr(x)&&!E&&lt(_,x))?g=g.filter(B=>B!==x):h=b,x=Qe(x)}return f.set(_,g),g}(n,this._c):[].concat(t),o],s=d[0],m=d.reduce((_,f)=>{const p=at(n,f,i);return _.top=or(p.top,_.top),_.right=$n(p.right,_.right),_.bottom=$n(p.bottom,_.bottom),_.left=or(p.left,_.left),_},at(n,s,i));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:n,offsetParent:t,strategy:o}=e;const i=xe(t),d=Le(t);if(t===d)return n;let s={scrollLeft:0,scrollTop:0},m={x:1,y:1};const _={x:0,y:0};if((i||!i&&o!=="fixed")&&((Oe(t)!=="body"||tr(d))&&(s=kr(t)),xe(t))){const f=He(t);m=Xe(t),_.x=f.x+t.clientLeft,_.y=f.y+t.clientTop}return{width:n.width*m.x,height:n.height*m.y,x:n.x*m.x-s.scrollLeft*m.x+_.x,y:n.y*m.y-s.scrollTop*m.y+_.y}},isElement:ge,getDimensions:function(e){return et(e)},getOffsetParent:dt,getDocumentElement:Le,getScale:Xe,getElementRects(e){return Be(this,null,function*(){let{reference:n,floating:t,strategy:o}=e;const i=this.getOffsetParent||dt,d=this.getDimensions;return{reference:fa(n,yield i(t),o),floating:te({x:0,y:0},yield d(t))}})},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>ye(e).direction==="rtl"};function ct(e,n,t,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:d=!0,elementResize:s=!0,animationFrame:m=!1}=o,_=i||d?[...ge(e)?ze(e):e.contextElement?ze(e.contextElement):[],...ze(n)]:[];_.forEach(h=>{const w=!ge(h)&&h.toString().includes("V");!i||m&&!w||h.addEventListener("scroll",t,{passive:!0}),d&&h.addEventListener("resize",t)});let f,p=null;s&&(p=new ResizeObserver(()=>{t()}),ge(e)&&!m&&p.observe(e),ge(e)||!e.contextElement||m||p.observe(e.contextElement),p.observe(n));let g=m?He(e):null;return m&&function h(){const w=He(e);!g||w.x===g.x&&w.y===g.y&&w.width===g.width&&w.height===g.height||t(),g=w,f=requestAnimationFrame(h)}(),t(),()=>{var h;_.forEach(w=>{i&&w.removeEventListener("scroll",t),d&&w.removeEventListener("resize",t)}),(h=p)==null||h.disconnect(),p=null,m&&cancelAnimationFrame(f)}}const ga=(e,n,t)=>{const o=new Map,i=te({platform:pa},t),d=ue(te({},i.platform),{_c:o});return((s,m,_)=>Be(Bo,null,function*(){const{placement:f="bottom",strategy:p="absolute",middleware:g=[],platform:h}=_,w=g.filter(Boolean),x=yield h.isRTL==null?void 0:h.isRTL(m);let b=yield h.getElementRects({reference:s,floating:m,strategy:p}),{x:E,y:B}=Gn(b,f,x),S=f,R={},C=0;for(let L=0;L<w.length;L++){const{name:A,fn:T}=w[L],{x:P,y:K,data:F,reset:O}=yield T({x:E,y:B,initialPlacement:f,placement:S,strategy:p,middlewareData:R,rects:b,platform:h,elements:{reference:s,floating:m}});E=P!=null?P:E,B=K!=null?K:B,R=ue(te({},R),{[A]:te(te({},R[A]),F)}),O&&C<=50&&(C++,typeof O=="object"&&(O.placement&&(S=O.placement),O.rects&&(b=O.rects===!0?yield h.getElementRects({reference:s,floating:m,strategy:p}):O.rects),{x:E,y:B}=Gn(b,S,x)),L=-1)}return{x:E,y:B,placement:S,strategy:p,middlewareData:R}}))(e,n,ue(te({},i),{platform:d}))},ba=e=>{const{element:n,padding:t}=e;return{name:"arrow",options:e,fn(o){return n&&(i=n,{}.hasOwnProperty.call(i,"current"))?n.current!=null?Jn({element:n.current,padding:t}).fn(o):{}:n?Jn({element:n,padding:t}).fn(o):{};var i}}};var Er=typeof document!="undefined"?c.useLayoutEffect:c.useEffect;function Br(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,o,i;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!=n.length)return!1;for(o=t;o--!=0;)if(!Br(e[o],n[o]))return!1;return!0}if(i=Object.keys(e),t=i.length,t!==Object.keys(n).length)return!1;for(o=t;o--!=0;)if(!{}.hasOwnProperty.call(n,i[o]))return!1;for(o=t;o--!=0;){const d=i[o];if((d!=="_owner"||!e.$$typeof)&&!Br(e[d],n[d]))return!1}return!0}return e!=e&&n!=n}function st(e){return typeof window=="undefined"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ut(e,n){const t=st(e);return Math.round(n*t)/t}function mt(e){const n=c.useRef(e);return Er(()=>{n.current=e}),n}/*!
* tabbable 6.1.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var $r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),_t=typeof Element=="undefined",ar=_t?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Sr=!_t&&Element.prototype.getRootNode?function(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}:function(e){return e==null?void 0:e.ownerDocument},Cr=function e(n,t){var o;t===void 0&&(t=!0);var i=n==null||(o=n.getAttribute)===null||o===void 0?void 0:o.call(n,"inert");return i===""||i==="true"||t&&n&&e(n.parentNode)},va=function e(n,t,o){for(var i=[],d=Array.from(n);d.length;){var s=d.shift();if(!Cr(s,!1))if(s.tagName==="SLOT"){var m=s.assignedElements(),_=e(m.length?m:s.children,!0,o);o.flatten?i.push.apply(i,_):i.push({scopeParent:s,candidates:_})}else{ar.call(s,$r)&&o.filter(s)&&(t||!n.includes(s))&&i.push(s);var f=s.shadowRoot||typeof o.getShadowRoot=="function"&&o.getShadowRoot(s),p=!Cr(f,!1)&&(!o.shadowRootFilter||o.shadowRootFilter(s));if(f&&p){var g=e(f===!0?s.children:f.children,!0,o);o.flatten?i.push.apply(i,g):i.push({scopeParent:s,candidates:g})}else d.unshift.apply(d,s.children)}}return i},ft=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(t){var o,i=t==null||(o=t.getAttribute)===null||o===void 0?void 0:o.call(t,"contenteditable");return i===""||i==="true"}(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},ha=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},pt=function(e){return e.tagName==="INPUT"},ya=function(e){return function(n){return pt(n)&&n.type==="radio"}(e)&&!function(n){if(!n.name)return!0;var t,o=n.form||Sr(n),i=function(s){return o.querySelectorAll('input[type="radio"][name="'+s+'"]')};if(typeof window!="undefined"&&window.CSS!==void 0&&typeof window.CSS.escape=="function")t=i(window.CSS.escape(n.name));else try{t=i(n.name)}catch(s){return Mr.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var d=function(s,m){for(var _=0;_<s.length;_++)if(s[_].checked&&s[_].form===m)return s[_]}(t,n.form);return!d||d===n}(e)},gt=function(e){var n=e.getBoundingClientRect(),t=n.width,o=n.height;return t===0&&o===0},xa=function(e,n){var t=n.displayCheck,o=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var i=ar.call(e,"details>summary:first-of-type")?e.parentElement:e;if(ar.call(i,"details:not([open]) *"))return!0;if(t&&t!=="full"&&t!=="legacy-full"){if(t==="non-zero-area")return gt(e)}else{if(typeof o=="function"){for(var d=e;e;){var s=e.parentElement,m=Sr(e);if(s&&!s.shadowRoot&&o(s)===!0)return gt(e);e=e.assignedSlot?e.assignedSlot:s||m===e.ownerDocument?s:m.host}e=d}if(function(_){var f,p,g,h,w=_&&Sr(_),x=(f=w)===null||f===void 0?void 0:f.host,b=!1;if(w&&w!==_)for(b=!!((p=x)!==null&&p!==void 0&&(g=p.ownerDocument)!==null&&g!==void 0&&g.contains(x)||_!=null&&(h=_.ownerDocument)!==null&&h!==void 0&&h.contains(_));!b&&x;){var E,B,S;b=!((B=x=(E=w=Sr(x))===null||E===void 0?void 0:E.host)===null||B===void 0||(S=B.ownerDocument)===null||S===void 0||!S.contains(x))}return b}(e))return!e.getClientRects().length;if(t!=="legacy-full")return!0}return!1},wa=function(e,n){return!(n.disabled||Cr(n)||function(t){return pt(t)&&t.type==="hidden"}(n)||xa(n,e)||function(t){return t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(o){return o.tagName==="SUMMARY"})}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var o=t.parentElement;o;){if(o.tagName==="FIELDSET"&&o.disabled){for(var i=0;i<o.children.length;i++){var d=o.children.item(i);if(d.tagName==="LEGEND")return!!ar.call(o,"fieldset[disabled] *")||!d.contains(t)}return!0}o=o.parentElement}return!1}(n))},bt=function(e,n){return!(ya(n)||ft(n)<0||!wa(e,n))},ka=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},Ea=function e(n){var t=[],o=[];return n.forEach(function(i,d){var s=!!i.scopeParent,m=s?i.scopeParent:i,_=ft(m,s),f=s?e(i.candidates):m;_===0?s?t.push.apply(t,f):t.push(m):o.push({documentOrder:d,tabIndex:_,item:i,isScope:s,content:f})}),o.sort(ha).reduce(function(i,d){return d.isScope?i.push.apply(i,d.content):i.push(d.content),i},[]).concat(t)},vt=function(e,n){var t;return t=(n=n||{}).getShadowRoot?va([e],n.includeContainer,{filter:bt.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:ka}):function(o,i,d){if(Cr(o))return[];var s=Array.prototype.slice.apply(o.querySelectorAll($r));return i&&ar.call(o,$r)&&s.unshift(o),s.filter(d)}(e,n.includeContainer,bt.bind(null,n)),Ea(t)};function en(){return en=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},en.apply(this,arguments)}var lr=typeof document!="undefined"?c.useLayoutEffect:c.useEffect;let rn=!1,Ba=0;const ht=()=>"floating-ui-"+Ba++,nn=fe["useId".toString()]||function(){const[e,n]=c.useState(()=>rn?ht():void 0);return lr(()=>{e==null&&n(ht())},[]),c.useEffect(()=>{rn||(rn=!0)},[]),e},Sa=c.createContext(null),Ca=c.createContext(null),yt=()=>c.useContext(Ca);function tn(e){return(e==null?void 0:e.ownerDocument)||document}function Ar(e){return tn(e).defaultView||window}function We(e){return!!e&&e instanceof Ar(e).Element}function on(e){return!!e&&e instanceof Ar(e).HTMLElement}function Aa(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const n=/Android/i;return(n.test(function(){const t=navigator.userAgentData;return t!=null&&t.platform?t.platform:navigator.platform}())||n.test(function(){const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(o=>{let{brand:i,version:d}=o;return i+"/"+d}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Ta(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function xt(e,n){const t=["mouse","pen"];return n||t.push("",void 0),t.includes(e)}function Ia(e,n){if(!e||!n)return!1;const t=n.getRootNode&&n.getRootNode();if(e.contains(n))return!0;if(t&&(o=t,typeof ShadowRoot!="undefined"&&(o instanceof Ar(o).ShadowRoot||o instanceof ShadowRoot))){let i=n;for(;i;){if(e===i)return!0;i=i.parentNode||i.host}}var o;return!1}function an(e,n){let t=e.filter(i=>{var d;return i.parentId===n&&((d=i.context)==null?void 0:d.open)}),o=t;for(;o.length;)o=e.filter(i=>{var d;return(d=o)==null?void 0:d.some(s=>{var m;return i.parentId===s.id&&((m=i.context)==null?void 0:m.open)})}),t=t.concat(o);return t}const wt=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function kt(e,n){const t=vt(e,wt());n==="prev"&&t.reverse();const o=t.indexOf(function(i){let d=i.activeElement;for(;((s=d)==null||(m=s.shadowRoot)==null?void 0:m.activeElement)!=null;){var s,m;d=d.shadowRoot.activeElement}return d}(tn(e)));return t.slice(o+1)[0]}function ln(e,n){const t=n||e.currentTarget,o=e.relatedTarget;return!o||!Ia(t,o)}function Ra(e){vt(e,wt()).forEach(n=>{n.dataset.tabindex=n.getAttribute("tabindex")||"",n.setAttribute("tabindex","-1")})}function Na(e){e.querySelectorAll("[data-tabindex]").forEach(n=>{const t=n.dataset.tabindex;delete n.dataset.tabindex,t?n.setAttribute("tabindex",t):n.removeAttribute("tabindex")})}const Et={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function Bt(e){e.key==="Tab"&&(e.target,clearTimeout(void 0))}const St=c.forwardRef(function(e,n){const[t,o]=c.useState();return lr(()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",Bt),()=>{document.removeEventListener("keydown",Bt)}),[]),c.createElement("span",en({},e,{ref:n,tabIndex:0,role:t,"aria-hidden":!t||void 0,"data-floating-ui-focus-guard":"",style:Et}))}),Ct=c.createContext(null);function Oa(e){let{children:n,id:t,root:o=null,preserveTabOrder:i=!0}=e;const d=function(w){let{id:x,root:b}=w===void 0?{}:w;const[E,B]=c.useState(null),S=nn(),R=La(),C=c.useMemo(()=>({id:x,root:b,portalContext:R,uniqueId:S}),[x,b,R,S]),L=c.useRef();return lr(()=>()=>{E==null||E.remove()},[E,C]),lr(()=>{if(L.current===C)return;L.current=C;const{id:A,root:T,portalContext:P,uniqueId:K}=C,F=A?document.getElementById(A):null,O="data-floating-ui-portal";if(F){const M=document.createElement("div");M.id=K,M.setAttribute(O,""),F.appendChild(M),B(M)}else{let M=(P==null?void 0:P.portalNode)||T||document.body,Z=null;A&&(Z=document.createElement("div"),Z.id=A,M.appendChild(Z));const D=document.createElement("div");D.id=K,D.setAttribute(O,""),M=Z||M,M.appendChild(D),B(D)}},[C]),E}({id:t,root:o}),[s,m]=c.useState(null),_=c.useRef(null),f=c.useRef(null),p=c.useRef(null),g=c.useRef(null),h=!!s&&!s.modal&&s.open&&i&&!(!o&&!d);return c.useEffect(()=>{if(d&&i&&(s==null||!s.modal))return d.addEventListener("focusin",w,!0),d.addEventListener("focusout",w,!0),()=>{d.removeEventListener("focusin",w,!0),d.removeEventListener("focusout",w,!0)};function w(x){d&&ln(x)&&(x.type==="focusin"?Na:Ra)(d)}},[d,i,s==null?void 0:s.modal]),c.createElement(Ct.Provider,{value:c.useMemo(()=>({preserveTabOrder:i,beforeOutsideRef:_,afterOutsideRef:f,beforeInsideRef:p,afterInsideRef:g,portalNode:d,setFocusManagerState:m}),[i,d])},h&&d&&c.createElement(St,{"data-type":"outside",ref:_,onFocus:w=>{if(ln(w,d)){var x;(x=p.current)==null||x.focus()}else{const b=kt(document.body,"prev")||(s==null?void 0:s.refs.domReference.current);b==null||b.focus()}}}),h&&d&&c.createElement("span",{"aria-owns":d.id,style:Et}),d&&(0,An.createPortal)(n,d),h&&d&&c.createElement(St,{"data-type":"outside",ref:f,onFocus:w=>{if(ln(w,d)){var x;(x=g.current)==null||x.focus()}else{const b=kt(document.body,"next")||(s==null?void 0:s.refs.domReference.current);b==null||b.focus(),s!=null&&s.closeOnFocusOut&&(s==null||s.onOpenChange(!1))}}}))}const La=()=>c.useContext(Ct);function At(e){return on(e.target)&&e.target.tagName==="BUTTON"}function Tt(e){return function(n){return on(n)&&n.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}const za=fe["useInsertionEffect".toString()]||(e=>e());function Tr(e){const n=c.useRef(()=>{});return za(()=>{n.current=e}),c.useCallback(function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return n.current==null?void 0:n.current(...o)},[])}function dn(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}const ja={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Pa={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"};function Da(e,n){n===void 0&&(n={});const{open:t,onOpenChange:o,events:i,nodeId:d,elements:{reference:s,domReference:m,floating:_},dataRef:f}=e,{enabled:p=!0,escapeKey:g=!0,outsidePress:h=!0,outsidePressEvent:w="pointerdown",referencePress:x=!1,referencePressEvent:b="pointerdown",ancestorScroll:E=!1,bubbles:B}=n,S=yt(),R=(((C=c.useContext(Sa))==null?void 0:C.id)||null)!=null;var C;const L=Tr(typeof h=="function"?h:()=>!1),A=typeof h=="function"?L:h,T=c.useRef(!1),{escapeKeyBubbles:P,outsidePressBubbles:K}=(M=>{var Z,D;return{escapeKeyBubbles:typeof M=="boolean"?M:(Z=M==null?void 0:M.escapeKey)!=null&&Z,outsidePressBubbles:typeof M=="boolean"?M:(D=M==null?void 0:M.outsidePress)==null||D}})(B),F=Tr(M=>{if(!t||!p||!g||M.key!=="Escape")return;const Z=S?an(S.nodesRef.current,d):[];if(!P&&(M.stopPropagation(),Z.length>0)){let D=!0;if(Z.forEach(z=>{var V;(V=z.context)==null||!V.open||z.context.dataRef.current.__escapeKeyBubbles||(D=!1)}),!D)return}i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),o(!1)}),O=Tr(M=>{const Z=T.current;if(T.current=!1,Z||typeof A=="function"&&!A(M))return;const D=function(G){return"composedPath"in G?G.composedPath()[0]:G.target}(M);if(on(D)&&_){const G=D.clientWidth>0&&D.scrollWidth>D.clientWidth,H=D.clientHeight>0&&D.scrollHeight>D.clientHeight;let q=H&&M.offsetX>D.clientWidth;if(H&&Ar(_).getComputedStyle(D).direction==="rtl"&&(q=M.offsetX<=D.offsetWidth-D.clientWidth),q||G&&M.offsetY>D.clientHeight)return}const z=S&&an(S.nodesRef.current,d).some(G=>{var H;return dn(M,(H=G.context)==null?void 0:H.elements.floating)});if(dn(M,_)||dn(M,m)||z)return;const V=S?an(S.nodesRef.current,d):[];if(V.length>0){let G=!0;if(V.forEach(H=>{var q;(q=H.context)==null||!q.open||H.context.dataRef.current.__outsidePressBubbles||(G=!1)}),!G)return}i.emit("dismiss",{type:"outsidePress",data:{returnFocus:R?{preventScroll:!0}:Aa(M)||Ta(M)}}),o(!1)});return c.useEffect(()=>{if(!t||!p)return;function M(){o(!1)}f.current.__escapeKeyBubbles=P,f.current.__outsidePressBubbles=K;const Z=tn(_);g&&Z.addEventListener("keydown",F),A&&Z.addEventListener(w,O);let D=[];return E&&(We(m)&&(D=ze(m)),We(_)&&(D=D.concat(ze(_))),!We(s)&&s&&s.contextElement&&(D=D.concat(ze(s.contextElement)))),D=D.filter(z=>{var V;return z!==((V=Z.defaultView)==null?void 0:V.visualViewport)}),D.forEach(z=>{z.addEventListener("scroll",M,{passive:!0})}),()=>{g&&Z.removeEventListener("keydown",F),A&&Z.removeEventListener(w,O),D.forEach(z=>{z.removeEventListener("scroll",M)})}},[f,_,m,s,g,A,w,t,o,E,p,P,K,F,O]),c.useEffect(()=>{T.current=!1},[A,w]),c.useMemo(()=>p?{reference:{onKeyDown:F,[ja[b]]:()=>{x&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),o(!1))}},floating:{onKeyDown:F,[Pa[w]]:()=>{T.current=!0}}}:{},[p,i,x,w,b,o,F])}function cn(e){return c.useMemo(()=>e.every(n=>n==null)?null:n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})},e)}function It(e){var n;e===void 0&&(e={});const{open:t=!1,onOpenChange:o,nodeId:i}=e,[d,s]=c.useState(null),m=((n=e.elements)==null?void 0:n.reference)||d,_=function(C){C===void 0&&(C={});const{placement:L="bottom",strategy:A="absolute",middleware:T=[],platform:P,elements:{reference:K,floating:F}={},transform:O=!0,whileElementsMounted:M,open:Z}=C,[D,z]=c.useState({x:0,y:0,strategy:A,placement:L,middlewareData:{},isPositioned:!1}),[V,G]=c.useState(T);Br(V,T)||G(T);const[H,q]=c.useState(null),[X,ne]=c.useState(null),Q=c.useCallback(j=>{j!=ke.current&&(ke.current=j,q(j))},[q]),se=c.useCallback(j=>{j!==Ee.current&&(Ee.current=j,ne(j))},[ne]),de=K||H,_e=F||X,ke=c.useRef(null),Ee=c.useRef(null),Pe=c.useRef(D),Ge=mt(M),De=mt(P),he=c.useCallback(()=>{if(!ke.current||!Ee.current)return;const j={placement:L,strategy:A,middleware:V};De.current&&(j.platform=De.current),ga(ke.current,Ee.current,j).then($=>{const ee=ue(te({},$),{isPositioned:!0});W.current&&!Br(Pe.current,ee)&&(Pe.current=ee,An.flushSync(()=>{z(ee)}))})},[V,L,A,De]);Er(()=>{Z===!1&&Pe.current.isPositioned&&(Pe.current.isPositioned=!1,z(j=>ue(te({},j),{isPositioned:!1})))},[Z]);const W=c.useRef(!1);Er(()=>(W.current=!0,()=>{W.current=!1}),[]),Er(()=>{if(de&&(ke.current=de),_e&&(Ee.current=_e),de&&_e){if(Ge.current)return Ge.current(de,_e,he);he()}},[de,_e,he,Ge]);const U=c.useMemo(()=>({reference:ke,floating:Ee,setReference:Q,setFloating:se}),[Q,se]),I=c.useMemo(()=>({reference:de,floating:_e}),[de,_e]),N=c.useMemo(()=>{const j={position:A,left:0,top:0};if(!I.floating)return j;const $=ut(I.floating,D.x),ee=ut(I.floating,D.y);return O?te(ue(te({},j),{transform:"translate("+$+"px, "+ee+"px)"}),st(I.floating)>=1.5&&{willChange:"transform"}):{position:A,left:$,top:ee}},[A,O,I.floating,D.x,D.y]);return c.useMemo(()=>ue(te({},D),{update:he,refs:U,elements:I,floatingStyles:N}),[D,he,U,I,N])}(e),f=yt(),p=Tr(o),g=c.useRef(null),h=c.useRef({}),w=c.useState(()=>function(){const C=new Map;return{emit(L,A){var T;(T=C.get(L))==null||T.forEach(P=>P(A))},on(L,A){C.set(L,[...C.get(L)||[],A])},off(L,A){var T;C.set(L,((T=C.get(L))==null?void 0:T.filter(P=>P!==A))||[])}}}())[0],x=nn(),b=c.useCallback(C=>{const L=We(C)?{getBoundingClientRect:()=>C.getBoundingClientRect(),contextElement:C}:C;_.refs.setReference(L)},[_.refs]),E=c.useCallback(C=>{(We(C)||C===null)&&(g.current=C,s(C)),(We(_.refs.reference.current)||_.refs.reference.current===null||C!==null&&!We(C))&&_.refs.setReference(C)},[_.refs]),B=c.useMemo(()=>ue(te({},_.refs),{setReference:E,setPositionReference:b,domReference:g}),[_.refs,E,b]),S=c.useMemo(()=>ue(te({},_.elements),{domReference:m}),[_.elements,m]),R=c.useMemo(()=>ue(te({},_),{refs:B,elements:S,dataRef:h,nodeId:i,floatingId:x,events:w,open:t,onOpenChange:p}),[_,i,x,w,t,p,B,S]);return lr(()=>{const C=f==null?void 0:f.nodesRef.current.find(L=>L.id===i);C&&(C.context=R)}),c.useMemo(()=>ue(te({},_),{context:R,refs:B,elements:S}),[_,B,S,R])}function sn(e,n,t){const o=new Map;return te(te(te({},t==="floating"&&{tabIndex:-1}),e),n.map(i=>i?i[t]:null).concat(e).reduce((i,d)=>(d&&Object.entries(d).forEach(s=>{let[m,_]=s;var f;m.indexOf("on")===0?(o.has(m)||o.set(m,[]),typeof _=="function"&&((f=o.get(m))==null||f.push(_),i[m]=function(){for(var p,g=arguments.length,h=new Array(g),w=0;w<g;w++)h[w]=arguments[w];return(p=o.get(m))==null?void 0:p.map(x=>x(...h)).find(x=>x!==void 0)})):i[m]=_}),i),{}))}var un={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function Va(e){var{variant:n="default",arrow:t,initialOpen:o,placement:i,offset:d,open:s,onOpenChange:m}=e,_=re(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,p]=(0,c.useState)(o),g=s!=null?s:f,h=m!=null?m:p,w=(0,c.useRef)(null),x=It({placement:i,open:g,onOpenChange:h,whileElementsMounted:ct,middleware:[ua(d!=null?d:t?12:4),Un({padding:5,fallbackPlacements:["bottom","top"]}),(b={padding:5},b===void 0&&(b={}),{name:"shift",options:b,fn(A){return Be(this,null,function*(){const{x:T,y:P,placement:K}=A,ne=b,{mainAxis:F=!0,crossAxis:O=!1,limiter:M={fn:Q=>{let{x:se,y:de}=Q;return{x:se,y:de}}}}=ne,Z=jr(ne,["mainAxis","crossAxis","limiter"]),D={x:T,y:P},z=yield qr(A,Z),V=Ye(Ne(K)),G=V==="x"?"y":"x";let H=D[V],q=D[G];if(F){const Q=V==="y"?"bottom":"right";H=Ur(H+z[V==="y"?"top":"left"],H,H-z[Q])}if(O){const Q=G==="y"?"bottom":"right";q=Ur(q+z[G==="y"?"top":"left"],q,q-z[Q])}const X=M.fn(ue(te({},A),{[V]:H,[G]:q}));return ue(te({},X),{data:{x:X.x-T,y:X.y-P}})})}}),ba({element:w,padding:8})]});var b;const E=x.context,B=function(A,T){T===void 0&&(T={});const{open:P,onOpenChange:K,dataRef:F,elements:{domReference:O}}=A,{enabled:M=!0,event:Z="click",toggle:D=!0,ignoreMouse:z=!1,keyboardHandlers:V=!0}=T,G=c.useRef(),H=c.useRef(!1);return c.useMemo(()=>M?{reference:{onPointerDown(q){G.current=q.pointerType},onMouseDown(q){q.button===0&&(xt(G.current,!0)&&z||Z!=="click"&&(P?!D||F.current.openEvent&&F.current.openEvent.type!=="mousedown"||K(!1):(q.preventDefault(),K(!0)),F.current.openEvent=q.nativeEvent))},onClick(q){Z==="mousedown"&&G.current?G.current=void 0:xt(G.current,!0)&&z||(P?!D||F.current.openEvent&&F.current.openEvent.type!=="click"||K(!1):K(!0),F.current.openEvent=q.nativeEvent)},onKeyDown(q){G.current=void 0,q.defaultPrevented||!V||At(q)||(q.key!==" "||Tt(O)||(q.preventDefault(),H.current=!0),q.key==="Enter"&&(P?D&&K(!1):K(!0)))},onKeyUp(q){q.defaultPrevented||!V||At(q)||Tt(O)||q.key===" "&&H.current&&(H.current=!1,P?D&&K(!1):K(!0))}}}:{},[M,F,Z,z,V,O,D,P,K])}(E,{enabled:s==null}),S=Da(E,{referencePress:!1}),R=function(A,T){T===void 0&&(T={});const{open:P,floatingId:K}=A,{enabled:F=!0,role:O="dialog"}=T,M=nn();return c.useMemo(()=>{const Z={id:K,role:O};return F?O==="tooltip"?{reference:{"aria-describedby":P?K:void 0},floating:Z}:{reference:te(te({"aria-expanded":P?"true":"false","aria-haspopup":O==="alertdialog"?"dialog":O,"aria-controls":P?K:void 0},O==="listbox"&&{role:"combobox"}),O==="menu"&&{id:M}),floating:te(te({},Z),O==="menu"&&{"aria-labelledby":M})}:{}},[F,O,P,K,M])}(E),C=function(A){A===void 0&&(A=[]);const T=A,P=c.useCallback(O=>sn(O,A,"reference"),T),K=c.useCallback(O=>sn(O,A,"floating"),T),F=c.useCallback(O=>sn(O,A,"item"),A.map(O=>O==null?void 0:O.item));return c.useMemo(()=>({getReferenceProps:P,getFloatingProps:K,getItemProps:F}),[P,K,F])}([B,S,R]);return(0,c.useMemo)(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:g,setOpen:h},C),x),_),{arrow:t,arrowRef:w,variant:n}),[g,h,C,x,_,t,w,n])}Y(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 2;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0 3px 6px 0 #0003;\r
}\r
\r
.Popover-module_popover__E9K9X:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Popover-module_popover__E9K9X:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {\r
  background-color: #fff;\r
  border-color: #68707c;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #e6eff8;\r
  border-color: #004c8f;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #fffbe6;\r
  border-color: #cc7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #f9d5db;\r
  border-color: #b3253a;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  box-sizing: content-box;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
\r
  /* Set border color separately in order to make inheritance work. */\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='top'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0 #0003;\r
  clip-path: inset(0 -10px -10px 0);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='bottom'] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0 0 -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='left'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0 #0003;\r
  clip-path: inset(-10px -10px 0 0);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^='right'] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0 #0003;\r
  clip-path: inset(0 0 -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`);const Rt=(0,c.createContext)(null),mn=()=>{const e=(0,c.useContext)(Rt);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function Nt(e){var{children:n,trigger:t,arrow:o=!0,initialOpen:i=!1}=e,d=re(e,["children","trigger","arrow","initialOpen"]);const s=Va(Object.assign({arrow:o,initialOpen:i},d));return c.createElement(Rt.Provider,{value:s},c.createElement(Fa,null,t),c.createElement(Ma,null,n,s.arrow&&c.createElement(Ha,null)))}Nt.displayName="Popover";const Fa=(0,c.forwardRef)(function(e,n){var{children:t}=e,o=re(e,["children"]);const i=mn(),d=(0,c.isValidElement)(t)?t:null,s=cn([i.refs.setReference,n]);if(d){const m=Object.assign(Object.assign(Object.assign(Object.assign({ref:s},o),d.props),i.getReferenceProps()),{"data-state":i.open?"open":"closed","aria-expanded":i.open});return(0,c.cloneElement)(d,m)}return null}),Ma=(0,c.forwardRef)(function(e,n){var t,o;const i=mn(),d=cn([i.refs.setFloating,n]);return i.open?c.createElement("div",Object.assign({ref:d,style:{position:i.strategy,top:(t=i.y)!==null&&t!==void 0?t:0,left:(o=i.x)!==null&&o!==void 0?o:0},"data-placement":i.placement,className:J(un.popover,un[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:i.role||"dialog"}),e.children):null}),Ha=(0,c.forwardRef)(function(e,n){var t,o;const i=mn(),d=cn([i.arrowRef,n]),s=(t=i.middlewareData.arrow)===null||t===void 0?void 0:t.x,m=(o=i.middlewareData.arrow)===null||o===void 0?void 0:o.y,_={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return c.createElement("div",Object.assign({ref:d,style:Object.assign(Object.assign(Object.assign({},s!=null?{left:s}:{}),m!=null?{top:m}:{}),_?{[_]:"-7px"}:{}),className:un.arrow},e))});var Ot="utility-module_visuallyHidden__R-C67",_n="utility-module_focusable__1fBKr";Y(`/**\r
 * Visually hide an element, but leave it available for screen readers\r
 */\r
.utility-module_visuallyHidden__R-C67 {\r
  border: 0;\r
  clip: rect(0 0 0 0);\r
  height: 1px;\r
  overflow: hidden;\r
  padding: 0;\r
  position: absolute;\r
  white-space: nowrap;\r
  width: 1px;\r
}\r
\r
/**\r
 * Apply a focus outline on an element when it is focused or one of its children is focused\r
 */\r
.utility-module_focusable__1fBKr:focus-within {\r
  --fds-inner-focus-border-color: #1e2b3c;\r
  --fds-outer-focus-border-color: #fadf4b;\r
  --fds-focus-border-width: 3px;\r
\r
  outline: var(--fds-focus-border-width) solid var(--fds-outer-focus-border-color);\r
  outline-offset: var(--fds-focus-border-width);\r
  box-shadow: 0 0 0 var(--fds-focus-border-width) var(--fds-inner-focus-border-color);\r
}\r
`);var Ze={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk i__imported_focusable_0",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};Y(`:import("../../utils/utility.module.css") {
  i__imported_focusable_0: focusable;
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk {\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
@media print {\r
  .HelpText-module_helpTextButton__Ir4Uk {\r
    display: none;\r
  }\r
}\r
\r
.HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: var(--help_text-icon-width);\r
  height: var(--help_text-icon-height);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus, [data-state^='open']) > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus, [data-state^='open']) > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
}\r
\r
.HelpText-module_helpTextContent__EDHac {\r
  font-size: var(--font_size-300);\r
  line-height: var(--typography-default-line-height);\r
  width: fit-content;\r
  max-width: 700px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_small__Y44D4 {\r
  --help_text-icon-width: 24px;\r
  --help_text-icon-height: 24px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_xsmall__peaFV {\r
  --help_text-icon-width: 18px;\r
  --help_text-icon-height: 18px;\r
}\r
`);const fn=e=>{var{className:n,children:t,title:o,placement:i="right",onClick:d,size:s="small"}=e,m=re(e,["className","children","title","placement","onClick","size"]);const[_,f]=(0,c.useState)(!1);return c.createElement(Nt,{variant:"info",placement:i,open:_,onOpenChange:f,className:Ze.helpTextContent,role:"tooltip",trigger:c.createElement("button",Object.assign({},m,{className:J(Ze.helpTextButton,n),onClick:p=>{f(g=>!g),d==null||d(p)}}),c.createElement(So,{className:J(Ze.helpTextIcon,Ze.helpTextIconFilled,Ze[s],n),"data-state":_?"open":"closed","aria-hidden":!0}),c.createElement(Ao,{className:J(Ze.helpTextIcon,Ze[s],n),"data-state":_?"open":"closed","aria-hidden":!0}),c.createElement("span",{className:Ot},o))},t)};fn.displayName="HelpText";var ve={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",hiddenLabel:"CheckboxRadioTemplate-module_hiddenLabel__iHKhU",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};Y(`.CheckboxRadioTemplate-module_template__CbnTf {\r
  --click-cursor: pointer;\r
  --description-color: var(--component-field_description-color-text-default);\r
  --label-color: var(--component-checkbox-color-text-default);\r
  --opacity: 1;\r
\r
  border-radius: var(--input_box-border_radius);\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-size: var(--font_size);\r
  gap: var(--gap);\r
  line-height: var(--typography-default-line-height);\r
  margin: -4px;\r
  opacity: var(--opacity);\r
  padding: 4px;\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
  --gap: var(--component-checkbox-space-gap-xsmall);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
  --gap: var(--component-checkbox-space-gap-small);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_hiddenLabel__iHKhU {\r
  --gap: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {\r
  --label-color: var(--component-checkbox-color-text-hover);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {\r
  --click-cursor: auto;\r
  --opacity: var(--opacity-disabled);\r
}\r
\r
.CheckboxRadioTemplate-module_clickable__iw4S2 {\r
  cursor: var(--click-cursor);\r
}\r
\r
.CheckboxRadioTemplate-module_inputWrapper__K4Urn {\r
  display: inline-block;\r
  height: var(--input_box-size);\r
  position: relative;\r
}\r
\r
.CheckboxRadioTemplate-module_input__O2CzZ {\r
  height: 0;\r
  opacity: 0;\r
  position: absolute;\r
  width: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_visibleBox__mj4RB {\r
  display: inline-block;\r
  flex: 0 0 var(--input_box-size);\r
  height: var(--input_box-size);\r
  position: relative;\r
  width: var(--input_box-size);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndDescription__NcntT {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: var(--description-margin_top);\r
\r
  /* Center-align input box with the first line in the label */\r
  margin-top: calc((var(--input_box-size) - (var(--typography-default-line-height) * var(--font_size))) / 2);\r
}\r
\r
.CheckboxRadioTemplate-module_label__hsc7R {\r
  color: var(--label-color);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ {\r
  display: inline-flex;\r
  flex-direction: row;\r
  gap: var(--gap);\r
  align-items: center;\r
}\r
\r
.CheckboxRadioTemplate-module_description__FX9dz {\r
  color: var(--description-color);\r
}\r
`);const Lt=({checked:e,children:n,className:t,description:o,disabled:i,helpText:d,hideInput:s,hideLabel:m,inputId:_,label:f,name:p,onChange:g,presentation:h,size:w="small",type:x,value:b})=>{const E=(0,c.useId)(),B=_!=null?_:"input-"+E,S=f?`${B}-label`:void 0,R=o?`${B}-description`:void 0,C=f&&!m,L=!h||typeof f!="object"&&typeof o!="object";return c.createElement(zt,{className:J(ve.template,ve[w],!C&&ve.hiddenLabel,i?ve.disabled:_n,t),htmlFor:B,isLabel:L},!s&&c.createElement(zt,{className:ve.inputWrapper,htmlFor:B,isLabel:!L},c.createElement("input",{"aria-describedby":R,"aria-labelledby":f?S:void 0,checked:e!=null&&e,className:ve.input,disabled:i,id:B,name:p,onChange:i?void 0:g,role:h?"presentation":void 0,type:x,value:b}),c.createElement("span",{className:ve.visibleBox},n)),(f||o)&&c.createElement("span",{className:ve.labelAndDescription},c.createElement("span",{className:ve.labelAndHelpText},f&&c.createElement("span",{className:ve.label,id:S,style:{display:C?"inline":"none"}},f),d&&c.createElement(fn,{size:w,title:typeof f=="string"?`Help text for ${f}`:""},d)),o&&c.createElement("span",{className:ve.description,id:R},o)))},zt=({children:e,className:n,htmlFor:t,isLabel:o})=>o?c.createElement("label",{className:n+" "+ve.clickable,htmlFor:t},e):c.createElement("span",{className:n},e);var Wa="Checkbox-module_checkbox__lSeQj",Za="Checkbox-module_compact__Cl41-",Ka="Checkbox-module_error__E-bmD",Ga="Checkbox-module_checked__3yAq6",qa="Checkbox-module_disabled__x7-eg",Ja="Checkbox-module_readOnly__FamUn",Ua="Checkbox-module_visibleBox__G7q8H",Ya="Checkbox-module_checkmark__ES9N8";Y(`.Checkbox-module_checkbox__lSeQj {\r
  /* Internal variables */\r
  --checkbox-background_color: var(--component-checkbox-color-background-default);\r
  --checkbox-border_color: var(--component-checkbox-color-border-default);\r
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);\r
  --checkbox-border_width: var(--component-checkbox-border_width-small);\r
  --checkbox-checkmark-visibility: hidden;\r
  --checkbox-height: var(--component-checkbox-size-height-small);\r
  --checkbox-width: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-size: var(--checkbox-height);\r
  --input_box-border_radius: var(--checkbox-border_radius);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {\r
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);\r
  --checkbox-height: var(--component-checkbox-size-height-xsmall);\r
  --checkbox-width: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {\r
  --checkbox-background_color: var(--component-checkbox-color-background-error);\r
  --checkbox-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {\r
  --checkbox-checkmark-visibility: visible;\r
  --checkbox-background_color: var(--component-checkbox-color-background-checked);\r
  --checkbox-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {\r
  --cursor: auto;\r
}\r
\r
.Checkbox-module_visibleBox__G7q8H {\r
  background-color: var(--checkbox-background_color);\r
  border-color: var(--checkbox-border_color);\r
  border-radius: var(--checkbox-border_radius);\r
  border-style: solid;\r
  border-width: var(--checkbox-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--checkbox-height);\r
  width: var(--checkbox-width);\r
}\r
\r
.Checkbox-module_checkmark__ES9N8 {\r
  background-color: white;\r
  clip-path: polygon(47.11% 56.51%, 30.37% 38.94%, 21.5% 48.09%, 47.11% 74.54%, 81.5% 39.16%, 72.63% 30%);\r
  display: inline-block;\r
  visibility: var(--checkbox-checkmark-visibility);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const jt=({checkboxId:e,checked:n=!1,compact:t=!1,description:o,disabled:i=!1,error:d=!1,helpText:s,hideLabel:m,label:_,name:f,onChange:p,presentation:g=!1,readOnly:h=!1})=>c.createElement(Lt,{checked:n,className:J(Wa,n&&Ga,d&&Ka,i&&qa,t&&Za,h&&Ja),description:o,disabled:i,helpText:s,hideInput:h,hideLabel:m,inputId:e,label:_,name:f,onChange:p,presentation:g,size:t?"xsmall":"small",type:"checkbox"},c.createElement("span",{className:Ua},c.createElement("span",{className:Ya})));jt.displayName="Checkbox";const Xa=(e,n)=>{if(e.length!==1)throw new Error("Char must be a single character.");const t=[];for(let o=0;o<n.length;o++)n[o]===e&&t.push(o);return t},Pt=(e,n)=>{const t=e.toLowerCase(),o=n.toLowerCase(),i=new Set;for(let d=0;d<e.length;d++){const s=t[d];for(const m of Xa(s,o))if(!i.has(m)){i.add(m);break}}return i.size},Dt=(e,n)=>{const t=e.toLowerCase(),o=n.toLowerCase();let i=0;for(let d=0;d<o.length;d++)if(o[d]===t[i]&&(i++,i===t.length))return!0;return!1},Qa=e=>(n,t)=>{const o=(i=>(d,s)=>{const m=Dt(i,d),_=Dt(i,s);if(!m&&!_)return 0;if(m&&!_)return-1;if(!m&&_)return 1;let f=0;for(let p=0;p<i.length;p++){const g=d.substring(f).indexOf(i[p]),h=s.substring(f).indexOf(i[p]);if(g<h)return-1;if(g>h)return 1;f+=g+1}return 0})(e)(n,t);return o!==0?o:(i=>(d,s)=>{const m=Pt(i,d);return Pt(i,s)-m})(e)(n,t)},Vt=e=>e.format!==void 0,Ft=e=>e.format===void 0,Mi=(e,n)=>n&&Ft(n)?v(e,n):n&&Vt(n)?y(e,n):e,Mt=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(const i of t)if(e[i]!==n[i])return!1;return!0};var pn={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};Y(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {\r
  flex-direction: column;\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {\r
  flex-direction: row;\r
}\r
`);const $a=(e,n)=>{switch(n.type){case"check":return e.concat([n.name]);case"uncheck":return e.filter(t=>t!==n.name);case"reset":return n.state}},Ht=e=>e.filter(({checked:n})=>n).map(({name:n})=>n),el=({compact:e,description:n,disabled:t,error:o,helpText:i,items:d,legend:s,onChange:m,presentation:_,variant:f="vertical",fieldSetProps:p})=>{if(!br(d.map(b=>b.name)))throw Error("Each name in the checkbox group must be unique.");const[g,h]=(0,c.useReducer)($a,Ht(d)),w=nr([...d]);Je(()=>{(d.length!==(w==null?void 0:w.length)||d.some((b,E)=>!Mt(b,w[E])))&&h({type:"reset",state:Ht(d)})});const x=nr(g);return Je(()=>{m&&!t&&!Zn(x,g)&&m(g)},[g,m,t]),c.createElement(Kr,Object.assign({contentClassName:J(pn.checkboxGroup,pn[f],e&&pn.compact),description:n,disabled:t,error:o,helpText:i,legend:s,size:e?"xsmall":"small"},p),d.map(b=>c.createElement(jt,{checkboxId:b.checkboxId,checked:g.includes(b.name),compact:e,description:b.description,disabled:t||b.disabled,error:!!o,helpText:b.helpText,key:b.name,hideLabel:b.hideLabel,label:b.label,name:b.name,onChange:E=>{h({type:E.target.checked?"check":"uncheck",name:b.name})},presentation:_})))};el.displayName="CheckboxGroup";var Ke={radio:"RadioButton-module_radio__-lcP-",small:"RadioButton-module_small__bDKxm",xsmall:"RadioButton-module_xsmall__i7xp0",error:"RadioButton-module_error__WeFrR",checked:"RadioButton-module_checked__Uc9Re",disabled:"RadioButton-module_disabled__thDlK",visibleButton:"RadioButton-module_visibleButton__QmmNn",checkmark:"RadioButton-module_checkmark__fHNs0"};Y(`.RadioButton-module_radio__-lcP- {\r
  /* Internal variables */\r
  --radio-background_color: var(--component-checkbox-color-background-default);\r
  --radio-border_color: var(--component-checkbox-color-border-default);\r
  --radio-border_width: var(--component-checkbox-border_width-small);\r
  --radio-checkmark-color: var(--colors-blue-700);\r
  --radio-checkmark-display: none;\r
  --radio-size: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-border_radius: calc(var(--radio-size) / 2);\r
  --input_box-size: var(--radio-size);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {\r
  --radio-size: var(--component-checkbox-size-width-small);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {\r
  --radio-size: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {\r
  --radio-background_color: var(--component-checkbox-color-background-error);\r
  --radio-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {\r
  --radio-checkmark-display: inline-block;\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_error__WeFrR) {\r
  --radio-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.RadioButton-module_visibleButton__QmmNn {\r
  background-color: var(--radio-background_color);\r
  border-radius: 50%;\r
  outline-color: var(--radio-border_color);\r
  outline-style: solid;\r
  outline-offset: calc(-1 * var(--radio-border_width));\r
  outline-width: var(--radio-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--radio-size);\r
  width: var(--radio-size);\r
}\r
\r
.RadioButton-module_checkmark__fHNs0 {\r
  box-shadow: 0 0 0 calc(2 * var(--radio-border_width)) var(--radio-background_color) inset, 0 0 0 var(--radio-size) var(--radio-checkmark-color) inset;\r
  border-radius: 50%;\r
  display: var(--radio-checkmark-display);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const Ir=({checked:e,description:n,disabled:t,error:o,helpText:i,hideLabel:d,label:s,name:m,onChange:_,presentation:f,radioId:p,size:g="small",value:h})=>c.createElement(Lt,{checked:e,className:J(Ke.radio,Ke[g],e&&Ke.checked,o&&Ke.error,t&&Ke.disabled),description:n,disabled:t,helpText:i,hideLabel:d,inputId:p,label:s,name:m,onChange:_,presentation:f,size:g,type:"radio",value:h},c.createElement("span",{className:Ke.visibleButton},c.createElement("span",{className:Ke.checkmark})));Ir.displayName="RadioButton";var gn={radioGroup:"RadioGroup-module_radioGroup__pO2pz",xsmall:"RadioGroup-module_xsmall__wwC4P",small:"RadioGroup-module_small__j8rVm",vertical:"RadioGroup-module_vertical__VIcHp",horizontal:"RadioGroup-module_horizontal__vsHUV"};Y(`.RadioGroup-module_radioGroup__pO2pz {\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {\r
  flex-direction: column;\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {\r
  flex-direction: row;\r
}\r
`);const rl=({description:e,disabled:n,error:t,helpText:o,items:i,legend:d,name:s,onChange:m,presentation:_,size:f="small",value:p,variant:g="vertical",fieldSetProps:h})=>{if(!br(i.map(E=>E.value)))throw Error("Each value in the radio group must be unique.");const[w,x]=(0,c.useState)(p);(0,c.useEffect)(()=>{x(p)},[p]);const b=nr(w);return Je(()=>{m&&!n&&b!==w&&m(w)},[w,n,m]),c.createElement(Kr,Object.assign({description:e,disabled:n,error:t,helpText:o,legend:d,size:f},h),c.createElement("div",{className:[gn.radioGroup,gn[g],gn[f]].join(" "),role:_?void 0:"radiogroup"},i.map(E=>{return c.createElement(Ir,Object.assign({},E,{checked:E.value===w,disabled:n||E.disabled,error:!!t,helpText:E.helpText,key:E.value,name:s,onChange:(B=E.value,S=>S.target.checked&&x(B)),presentation:_,size:f}));var B})))};rl.displayName="RadioGroup";var Rr={paragraph:"Paragraph-module_paragraph__Q65gR",spacing:"Paragraph-module_spacing__NqukG",large:"Paragraph-module_large__a1-p4",short:"Paragraph-module_short__2YxWV",medium:"Paragraph-module_medium__LYuYD",small:"Paragraph-module_small__nw9qP",xsmall:"Paragraph-module_xsmall__sCdyx"};Y(`.Paragraph-module_paragraph__Q65gR {\r
  --fdsc-typography-font-family: inherit;\r
\r
  color: var(--fds-semantic-text-neutral-default);\r
  margin: 0;\r
}\r
\r
.Paragraph-module_spacing__NqukG {\r
  margin-bottom: var(--fds-spacing-4);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4 {\r
  font: var(--fds-typography-paragraph-large);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_large__a1-p4.Paragraph-module_short__2YxWV {\r
  font: var(--fds-typography-paragraph-short-large);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD {\r
  font: var(--fds-typography-paragraph-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_medium__LYuYD.Paragraph-module_short__2YxWV {\r
  font: var(--fds-typography-paragraph-short-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP {\r
  font: var(--fds-typography-paragraph-small);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_small__nw9qP.Paragraph-module_short__2YxWV {\r
  font: var(--fds-typography-paragraph-short-small);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx {\r
  font: var(--fds-typography-paragraph-xsmall);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Paragraph-module_paragraph__Q65gR.Paragraph-module_xsmall__sCdyx.Paragraph-module_short__2YxWV {\r
  font: var(--fds-typography-paragraph-short-xsmall);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
`);const ir=(0,c.forwardRef)((e,n)=>{var{className:t,size:o="medium",spacing:i,as:d="p",short:s}=e,m=re(e,["className","size","spacing","as","short"]);return c.createElement(d,Object.assign({},m,{ref:n,className:J(Rr.paragraph,Rr[o],{[Rr.spacing]:!!i,[Rr.short]:s},t)}))});var bn={heading:"Heading-module_heading__oGM7x",spacing:"Heading-module_spacing__F-DQ2",xlarge:"Heading-module_xlarge__Aq3TF",large:"Heading-module_large__kEdDZ",medium:"Heading-module_medium__VfBrh",small:"Heading-module_small__SY2lJ",xsmall:"Heading-module_xsmall__hYzb1",xxsmall:"Heading-module_xxsmall__TrWhu"};Y(`.Heading-module_heading__oGM7x {\r
  --fdsc-typography-font-family: inherit;\r
\r
  margin: 0;\r
  color: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Heading-module_spacing__F-DQ2 {\r
  margin-bottom: var(--fds-spacing-5);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_xlarge__Aq3TF {\r
  font: var(--fds-typography-heading-xlarge);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_large__kEdDZ {\r
  font: var(--fds-typography-heading-large);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_medium__VfBrh {\r
  font: var(--fds-typography-heading-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_small__SY2lJ {\r
  font: var(--fds-typography-heading-small);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_xsmall__hYzb1 {\r
  font: var(--fds-typography-heading-xsmall);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Heading-module_heading__oGM7x.Heading-module_xxsmall__TrWhu {\r
  font: var(--fds-typography-heading-xxsmall);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
`);const nl=(0,c.forwardRef)((e,n)=>{var{level:t=1,size:o="xlarge",spacing:i=!1,className:d,as:s}=e,m=re(e,["level","size","spacing","className","as"]);const _=s!=null?s:`h${t!=null?t:1}`;return c.createElement(_,Object.assign({},m,{ref:n,className:J(bn.heading,bn[o],{[bn.spacing]:i},d)}))});var vn={ingress:"Ingress-module_ingress__QiPXj",spacing:"Ingress-module_spacing__C2m1n",medium:"Ingress-module_medium__r-UCu"};Y(`.Ingress-module_ingress__QiPXj {\r
  --fdsc-typography-font-family: inherit;\r
\r
  margin: 0;\r
  color: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Ingress-module_spacing__C2m1n {\r
  margin-bottom: var(--fds-spacing-5);\r
}\r
\r
.Ingress-module_ingress__QiPXj.Ingress-module_medium__r-UCu {\r
  font: var(--fds-typography-ingress-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
`);const Hi=(0,c.forwardRef)((e,n)=>{var{className:t,size:o="medium",spacing:i,as:d="p"}=e,s=re(e,["className","size","spacing","as"]);return c.createElement(d,Object.assign({},s,{ref:n,className:J(vn.ingress,vn[o],{[vn.spacing]:!!i},t)}))});var hn={label:"Label-module_label__vyjHz",spacing:"Label-module_spacing__8PZyR",large:"Label-module_large__Y2DhY",medium:"Label-module_medium__mDhxE",small:"Label-module_small__5UUDo",xsmall:"Label-module_xsmall__TwPQx"};Y(`.Label-module_label__vyjHz {\r
  --fdsc-typography-font-family: inherit;\r
\r
  display: inline-block;\r
  margin: 0;\r
  color: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Label-module_spacing__8PZyR {\r
  margin-bottom: var(--fds-spacing-5);\r
}\r
\r
.Label-module_label__vyjHz.Label-module_large__Y2DhY {\r
  font: var(--fds-typography-label-large);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Label-module_label__vyjHz.Label-module_medium__mDhxE {\r
  font: var(--fds-typography-label-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Label-module_label__vyjHz.Label-module_small__5UUDo {\r
  font: var(--fds-typography-label-small);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.Label-module_label__vyjHz.Label-module_xsmall__TwPQx {\r
  font: var(--fds-typography-label-xsmall);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
`);const Wi=(0,c.forwardRef)((e,n)=>{var{className:t,size:o="medium",spacing:i,as:d="label"}=e,s=re(e,["className","size","spacing","as"]);return c.createElement(d,Object.assign({},s,{ref:n,className:J(hn.label,hn[o],{[hn.spacing]:!!i},t)}))});var yn={errorMessage:"ErrorMessage-module_errorMessage__Mn3zg",spacing:"ErrorMessage-module_spacing__cDjeN",medium:"ErrorMessage-module_medium__ZOE1G",small:"ErrorMessage-module_small__mUspd"};Y(`.ErrorMessage-module_errorMessage__Mn3zg {\r
  --fdsc-typography-font-family: inherit;\r
\r
  margin: 0;\r
  color: var(--fds-semantic-text-danger-default);\r
}\r
\r
.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_spacing__cDjeN {\r
  margin-bottom: var(--fds-spacing-5);\r
}\r
\r
.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_medium__ZOE1G {\r
  font: var(--fds-typography-error_message-medium);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
\r
.ErrorMessage-module_errorMessage__Mn3zg.ErrorMessage-module_small__mUspd {\r
  font: var(--fds-typography-error_message-small);\r
  font-family: var(--fdsc-typography-font-family);\r
}\r
`);const Wt=(0,c.forwardRef)((e,n)=>{var{className:t,size:o="medium",spacing:i,as:d="p"}=e,s=re(e,["className","size","spacing","as"]);return c.createElement(d,Object.assign({},s,{ref:n,className:J(yn.errorMessage,yn[o],{[yn.spacing]:!!i},t)}))}),tl=()=>c.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),ol=()=>c.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var Zt="Icon-module_icon__3YqoF",al="Icon-module_disabled__e4-Yg";Y(`.Icon-module_icon__3YqoF {\r
  align-items: center;\r
  background: var(--icon-background);\r
  border-bottom-left-radius: var(--border-radius);\r
  border-top-left-radius: var(--border-radius);\r
  display: flex;\r
  height: 100%;\r
  justify-content: center;\r
  position: absolute;\r
  width: var(--icon-width);\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
  opacity: 0.6;\r
}\r
`);const ll=({variant:e,disabled:n=!1})=>{switch(e){case"error":return c.createElement("span",{className:Zt,"data-testid":"input-icon-error"},c.createElement(tl,null));case"search":return c.createElement("span",{className:J(Zt,n&&al),"data-testid":"input-icon-search"},c.createElement(ol,null));default:return null}};var Ae={inputAndLabel:"InputWrapper-module_inputAndLabel__t1-Vi",inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",withIcon:"InputWrapper-module_withIcon__x0I81",label:"InputWrapper-module_label__x0-XH",characterLimitLabel:"InputWrapper-module_characterLimitLabel__x9Z9p"};Y(`.InputWrapper-module_inputAndLabel__t1-Vi {\r
  align-items: stretch;\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: 8px;\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-radius: var(--interactive_components-border_radius-normal);\r
  --icon-background: transparent;\r
  --icon-width: 22px;\r
  --outline-color: var(--component-input-color-border-default);\r
  --outline-width: 1px;\r
  --paddingX: 0;\r
  --paddingY: 0;\r
\r
  align-items: stretch;\r
  background: var(--background);\r
  border-radius: var(--border-radius);\r
  box-sizing: border-box;\r
  display: inline-flex;\r
  min-height: var(--component-input-size-min_height-default);\r
  position: relative;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {\r
  --outline-color: var(--component-input-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {\r
  --icon-background: var(--component-input-error-color-border-default);\r
  --outline-color: var(--component-input-error-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {\r
  --background: repeating-linear-gradient(135deg, #efefef, #efefef 2px, #fff 3px, #fff 5px);\r
\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {\r
  --background: var(--component-input-read_only_info-color-background-default);\r
  --outline-color: var(--component-input-read_only_info-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {\r
  --background: var(--component-input-read_only_confirm-color-background-default);\r
  --outline-color: var(--component-input-read_only_confirm-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {\r
  flex-direction: row-reverse;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {\r
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */\r
  --paddingY: calc(var(--component-input-space-padding-y) - var(--component-input-border_width-default));\r
  --paddingX: var(--component-input-space-padding-x);\r
}\r
\r
.InputWrapper-module_field__UA-RS {\r
  background: var(--background);\r
  border-radius: var(--border-radius);\r
  border-width: 0;\r
  box-sizing: border-box;\r
  font-family: inherit;\r
  font-size: var(--component-input-font_size-sm);\r
  outline: var(--outline-width) solid var(--outline-color);\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_inputAndLabel__t1-Vi.InputWrapper-module_withIcon__x0I81 .InputWrapper-module_field__UA-RS {\r
  padding-left: calc(var(--paddingX) + var(--icon-width));\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb:not(.InputWrapper-module_disabled__8mIxc) .InputWrapper-module_field__UA-RS:hover {\r
  --outline-width: 2px;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
\r
.InputWrapper-module_characterLimitLabel__x9Z9p {\r
  display: inline-block;\r
  margin-top: 4px;\r
}\r
`);const Nr=({className:e="",disabled:n=!1,id:t,inputId:o,inputRenderer:i,isSearch:d=!1,isValid:s=!0,label:m,noFocusEffect:_,noPadding:f,readOnly:p=!1,characterLimit:g,value:h,ariaDescribedBy:w})=>{const x=(0,c.useId)(),b=o!=null?o:x,E=(0,c.useId)(),B=g?E:void 0,S=h?h.toString():"",{variant:R,iconVariant:C}=(({readOnly:T=!1,disabled:P=!1,isValid:K=!0,isSearch:F=!1}={})=>T===!0||T==="readonlyInfo"?{variant:"readonlyInfo",iconVariant:"none"}:T==="readonlyConfirm"?{variant:"readonlyConfirm",iconVariant:"none"}:K===!1?{variant:"error",iconVariant:"error"}:{variant:P?"disabled":"default",iconVariant:F?"search":"none"})({disabled:n,isSearch:d,isValid:g?S.length<=g.maxCount&&s:s,readOnly:p}),L=C!=="none";return c.createElement("span",{id:t,className:e},c.createElement("span",{className:J(Ae.inputAndLabel,L&&Ae.withIcon)},m&&c.createElement("label",{className:Ae.label,htmlFor:b},m),c.createElement("span",{"data-testid":"InputWrapper",className:J(Ae.inputWrapper,Ae[R],{[Ae.search]:d,[Ae.withPadding]:!f})},c.createElement(ll,{variant:C,disabled:n}),i({className:J(Ae.field,!_&&_n),hasIcon:L,inputId:b,variant:R,describedBy:(A=[w,B],A.filter(Boolean).join(" ")||void 0)}))),g&&B&&c.createElement(il,Object.assign({},g,{value:S,ariaDescribedById:B})));var A},il=({label:e,srLabel:n,maxCount:t,value:o,ariaDescribedById:i})=>{const d=t-o.length,s=o.length>t;return c.createElement(c.Fragment,null,c.createElement("span",{className:Ot,id:i},n),c.createElement("span",{className:Ae.characterLimitLabel},s?c.createElement(Wt,{as:"span","aria-live":"polite",size:"small"},e(d)):c.createElement(ir,{as:"span",size:"small"},e(d))))};var dl="MultiSelectItem-module_multiSelectItem__GMBKc",cl="MultiSelectItem-module_deleteButton__1imxW i__imported_focusable_0",sl="MultiSelectItem-module_deleteButtonCross__SI-Vd";Y(`:import("../../../utils/utility.module.css") {
  i__imported_focusable_0: focusable;
}\r
\r
.MultiSelectItem-module_multiSelectItem__GMBKc {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
\r
  align-items: center;\r
  background-color: var(--multiselect_item-background_color);\r
  border-radius: var(--border-radius);\r
  color: var(--multiselect_item-text_color);\r
  display: inline-flex;\r
  font-size: var(--font_size);\r
  gap: var(--multiselect_item-space_between);\r
  height: var(--multiselect_item-height);\r
  padding-left: var(--multiselect_item-space_left);\r
}\r
\r
.MultiSelectItem-module_deleteButton__1imxW {\r
  background-color: transparent;\r
  border-bottom-right-radius: inherit;\r
  border-top-right-radius: inherit;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  padding: calc((var(--multiselect_item-height) - var(--delete_cross-size)) / 2);\r
  width: var(--multiselect_item-height);\r
}\r
\r
.MultiSelectItem-module_deleteButton__1imxW:focus {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButton__1imxW:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__SI-Vd {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const Kt=({deleteButtonLabel:e,disabled:n,onDeleteButtonClick:t,label:o})=>c.createElement("span",{className:dl},c.createElement("span",null,o),c.createElement("button",{"aria-label":e,className:cl,disabled:n,onClick:t,type:"button"},c.createElement("span",{className:sl})));Kt.displayName="MultiSelectItem";var be={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",single:"Select-module_single__i2zPs",hasIcon:"Select-module_hasIcon__Jgj-c",textInput:"Select-module_textInput__QOpiN",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",expanded:"Select-module_expanded__QPHZ6"};Y(`.Select-module_select__cjdcr {\r
  --delete_cross_box-border_radius: var(--interactive_components-border_radius-normal);\r
  --delete_cross_box-color-hover: var(--colors-red-500);\r
  --delete_cross_box-size: 25px;\r
  --delete_cross-clip_path: polygon(\r
    14.29% 0%,\r
    50% 35.71%,\r
    85.71% 0%,\r
    100% 14.29%,\r
    64.29% 50%,\r
    100% 85.71%,\r
    85.71% 100%,\r
    50% 64.29%,\r
    14.29% 100%,\r
    0% 85.71%,\r
    35.71% 50%,\r
    0% 14.29%\r
  );\r
  --delete_cross-color: var(--colors-blue-900);\r
  --delete_cross-color-active: var(--colors-blue-700);\r
  --delete_cross-color-disabled: #022f5180;\r
  --delete_cross-color-hover: white;\r
  --delete_cross-size: 12px;\r
  --arrow-border_left: 1px solid #022f5180;\r
  --arrow-color: var(--colors-blue-900);\r
  --arrow-height_to_width_fraction: calc(8 / 14);\r
  --arrow-horizontal_padding: 6px;\r
  --arrow-size: 14px;\r
  --arrow_wrapper-margin: 4px;\r
  --field-height-inside: calc(var(--field-height) - var(--component-input-border_width-default) * 2);\r
  --field-height: var(--component-input-size-min_height-default);\r
  --font_size: 1rem;\r
  --interactive_element-cursor: pointer;\r
  --line-height: 1.5;\r
  --multiselect_item-background_color: var(--colors-blue-900);\r
  --multiselect_item-height: 24px;\r
  --multiselect_item-space_between: 6px;\r
  --multiselect_item-space_left: 16px;\r
  --multiselect_item-text_color: white;\r
  --multiselect_item_delete_cross-color: white;\r
  --multiselect_items-gap: 4px;\r
  --multiselect_items-padding: calc((var(--field-height-inside) - var(--multiselect_item-height)) / 2);\r
  --singleselect_field-padding_left: 12px;\r
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto var(--semantic-tab_focus-outline-color);\r
\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_disabled__8YgjS {\r
  --interactive_element-cursor: auto;\r
\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Select-module_fieldButton__uKwX8 {\r
  background: transparent;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.Select-module_field__h-wBy {\r
  display: inline-flex;\r
  align-items: center;\r
  flex-direction: row;\r
  font-family: inherit;\r
  font-size: var(--font_size);\r
  min-height: var(--field-height);\r
  width: 100%;\r
}\r
\r
.Select-module_inputArea__jBTNl {\r
  align-items: center;\r
  display: flex;\r
  flex: 1;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_inputArea__jBTNl {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_field__h-wBy.Select-module_hasIcon__Jgj-c .Select-module_inputArea__jBTNl {\r
  padding-left: var(--icon-width);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_field__h-wBy.Select-module_hasIcon__Jgj-c .Select-module_inputArea__jBTNl {\r
  padding-left: calc(var(--multiselect_items-padding) + var(--icon-width));\r
}\r
\r
.Select-module_textInput__QOpiN {\r
  background: transparent;\r
  border: 0;\r
  box-sizing: border-box;\r
  font-family: inherit;\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  min-height: var(--field-height-inside);\r
  outline: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_textInput__QOpiN {\r
  cursor: var(--interactive_element-cursor);\r
  padding: 0 0 0 var(--singleselect_field-padding_left);\r
  position: absolute;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_textInput__QOpiN {\r
  flex: 1;\r
  min-height: 0;\r
  min-width: 3rem;\r
  padding: 0;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_arrowWrapper__meDQz {\r
  --arrow-height: calc(var(--arrow-size) * var(--arrow-height_to_width_fraction));\r
  --arrow-vertical_padding: calc((var(--field-height-inside) - var(--arrow-height)) / 2 - var(--arrow_wrapper-margin));\r
\r
  align-items: center;\r
  border-left: var(--arrow-border_left);\r
  box-sizing: border-box;\r
  display: flex;\r
  height: calc(100% - var(--arrow-vertical_padding));\r
  margin-bottom: var(--arrow_wrapper-margin);\r
  margin-left: var(--arrow_wrapper-margin);\r
  margin-top: var(--arrow_wrapper-margin);\r
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);\r
}\r
\r
.Select-module_arrow__w35wW {\r
  background-color: var(--arrow-color);\r
  clip-path: polygon(11.72% 9.93%, 50% 67.28%, 88.28% 9.93%, 97.43% 29.13%, 50% 96.79%, 2.57% 29.13%);\r
  display: inline-block;\r
  height: var(--arrow-height);\r
  width: var(--arrow-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {\r
  background: none;\r
  border-radius: var(--delete_cross_box-border_radius);\r
  border: none;\r
  cursor: var(--interactive_element-cursor);\r
  height: var(--delete_cross_box-size);\r
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);\r
  width: var(--delete_cross_box-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  --delete_cross-color: var(--delete_cross-color-disabled);\r
\r
  cursor: auto;\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {\r
  background-color: var(--delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
`);const ul=(e,n)=>((t,o)=>[...t.entries()].map(([i,d])=>({key:i,keywords:(d!=null&&d.length?d:[i]).sort(o)})).sort((i,d)=>{const s=Math.min(i.keywords.length,d.keywords.length);for(let m=0;m<s;m++){const _=o(i.keywords[m],d.keywords[m]);if(_!==0)return _}return 0}).map(({key:i})=>i))(new Map(e.map(({label:t,value:o,keywords:i})=>[o,i?[t,...i]:[t]])),Qa(n)).map(t=>e.find(o=>o.value===t));var ml="OptionList-module_wrapper__VWxy0",_l="OptionList-module_expanded__zQMFT",fl="OptionList-module_optionList__Ij1Ct",pl="OptionList-module_option__pIUbJ",gl="OptionList-module_selected__mCVJf",bl="OptionList-module_usingKeyboard__vHoYA",vl="OptionList-module_focused__-bi1s";Y(`.OptionList-module_wrapper__VWxy0 {\r
  --font_size: 1rem;\r
  --line-height: 1.5;\r
  --option-background_color-default: transparent;\r
  --option-background_color-hover: var(--colors-blue-100);\r
  --option-background_color-selected-hover: var(--colors-blue-500);\r
  --option-background_color-selected: var(--colors-blue-200);\r
  --option-border_color: #022f5180;\r
  --option-border_width: 1px;\r
  --option-height: 36px;\r
  --option-padding_horizontal: 12px;\r
  --option_list-background_color: white;\r
  --option_list-border: 1px solid #68707c;\r
  --option_list-border_radius: var(--interactive_components-border_radius-normal);\r
  --option_list-max_height: calc(var(--option-height) * var(--option_list-number_of_visible_options));\r
  --option_list-number_of_visible_options: 7;\r
  --option_list-shadow: 1px 1px 3px #00000040;\r
  --option_list-z_index: 2;\r
\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  margin: 0;\r
  overflow-y: auto;\r
  padding: 0;\r
  position: absolute;\r
  z-index: var(--option_list-z_index);\r
}\r
\r
.OptionList-module_wrapper__VWxy0:not(.OptionList-module_expanded__zQMFT) {\r
  display: none;\r
}\r
\r
.OptionList-module_optionList__Ij1Ct {\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
}\r
\r
.OptionList-module_option__pIUbJ {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  display: inline-block;\r
  font-size: var(--font_size);\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc((var(--option-height) - (var(--font_size) * var(--line-height))) / 2);\r
  text-align: left;\r
  text-overflow: ellipsis;\r
}\r
\r
.OptionList-module_option__pIUbJ:hover {\r
  background-color: var(--option-background_color-hover);\r
}\r
\r
.OptionList-module_option__pIUbJ.OptionList-module_selected__mCVJf {\r
  background-color: var(--option-background_color-selected);\r
}\r
\r
.OptionList-module_option__pIUbJ.OptionList-module_selected__mCVJf:hover {\r
  background-color: var(--option-background_color-selected-hover);\r
}\r
\r
.OptionList-module_wrapper__VWxy0.OptionList-module_usingKeyboard__vHoYA .OptionList-module_option__pIUbJ.OptionList-module_focused__-bi1s {\r
  outline: var(--semantic-tab_focus-outline-width) auto var(--semantic-tab_focus-outline-color);\r
}\r
`);const Gt=({active:e,id:n,multiple:t,onClick:o,option:i,selected:d})=>{var s;return c.createElement("button",{"aria-label":i.label,"aria-selected":d,className:J(pl,d&&gl,t&&e&&vl),id:n,key:i.value,onClick:()=>o(i.value),onMouseDown:m=>m.preventDefault(),onKeyDown:m=>m.preventDefault(),role:"option",type:"button",value:i.value},(s=i.formattedLabel)!==null&&s!==void 0?s:i.label)};Gt.displayName="Option";const qt=({activeValue:e,expanded:n,listboxId:t,multiple:o,onOptionClick:i,optionId:d,options:s,selectedValues:m,setFloating:_,x:f,y:p})=>{const g=(0,c.useId)(),[h,w]=(0,c.useState)(!1);gr("click",()=>w(!1)),gr("keydown",()=>w(!0));const x=b=>e===b;return c.createElement(Oa,{id:`fds-select-${g}`},c.createElement("span",{className:J(ml,n&&_l,h&&bl),ref:_,style:{left:f,top:p,zIndex:1500}},c.createElement("span",{"aria-expanded":n,className:fl,id:t,role:"listbox"},s.map(b=>{return c.createElement(Gt,{active:x(b.value),id:d(b.value),key:b.value,multiple:o,onClick:i,option:b,selected:(E=b.value,o?m.includes(E):x(E))});var E}))))};qt.displayName="OptionList";const dr={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},hl=e=>{var n,t;const{disabled:o,error:i,hideLabel:d,inputId:s,label:m,multiple:_,onBlur:f,onChange:p,onFocus:g,options:h,searchLabel:w,value:x}=e,b=h.map(W=>W.value);if(b.length!==new Set(b).size)throw Error("Each value in the option list must be unique.");const E=(0,c.useCallback)(W=>{var U;return(U=h.find(I=>I.value===W))!==null&&U!==void 0?U:{label:"",value:""}},[h]),[B,S]=(0,c.useState)(_&&x!=null?x:[]),[R,C]=(0,c.useState)(_?"":(t=(n=E(x))===null||n===void 0?void 0:n.label)!==null&&t!==void 0?t:""),[L,A]=(0,c.useState)(h),T=nr([...h]),P=nr(x);Je(()=>{var W,U;let I=!1;(h.length!==(T==null?void 0:T.length)||h.some((N,j)=>!Mt(N,T[j])))&&(A(h),I=!0),(!_&&x!==P||_&&(typeof P=="string"||!Zn(x,P))||I)&&(_?S(x!=null?x:[]):(O(x),C((U=(W=E(x))===null||W===void 0?void 0:W.label)!==null&&U!==void 0?U:"")))});const K=h.length,[F,O]=(0,c.useState)(_?void 0:x),M=L.findIndex(W=>W.value===F),Z=(0,c.useCallback)(W=>C(!_&&W||""),[C,_]),{x:D,y:z,elements:V,refs:G}=It({placement:"bottom",whileElementsMounted:ct,middleware:[Un(),ma({apply:({availableHeight:W,elements:U,rects:I})=>{Object.assign(U.floating.style,{maxHeight:`min(${W}px, var(--option_list-max_height))`,width:`${I.reference.width}px`})}})]}),H=V.floating,q=V.reference,X=function(W){const[U,I]=(0,c.useState)(!1),N=()=>{var j;const{activeElement:$}=document;I((j=W==null?void 0:W.contains($))!==null&&j!==void 0&&j)};return gr("focusin",N,W),gr("focusout",N,W),U}(q);Je(()=>{var W,U;_||X||C((U=(W=E(F))===null||W===void 0?void 0:W.label)!==null&&U!==void 0?U:""),X&&g?g(_?B:F||""):!X&&f&&f(_?B:F||"")},[X]);const[ne,Q]=(0,c.useState)(!1);(0,c.useEffect)(()=>{if(H){const W=H.offsetHeight,U=H.querySelectorAll("button");if(!U.length)return;const I=H.scrollTop,N=I+W,j=U[M];if(j){const $=j.offsetTop,ee=$+j.offsetHeight;$>=I&&ee<=N||(H.scrollTop=$<I?$:ee-W)}}},[M,H]);const se=(W,U)=>{B!=null&&B.length||O(U),S(W),p&&p(W),Z()},de=W=>{var U;_?B.includes(W)?_e(W):se([...B,W],W):(O(U=W),Z(E(U).label),Q(!1),p&&p(U))},_e=W=>{se(B.filter(U=>U!==W),W)},ke=(0,c.useCallback)(()=>{let W=null;if(F===void 0)W=L[0];else{const U=M+1;U>=0&&U<K&&(W=L[U])}W&&(O(W.value),Z(W.label)),Q(!0)},[F,M,Z,O,L,K]),Ee=(0,c.useCallback)(()=>{let W=null;if(F===void 0)W=L[K-1];else{const U=M-1;U>=0&&U<K&&(W=L[U])}W&&(O(W.value),Z(W.label)),Q(!0)},[F,M,Z,O,L,K]);Zr(dr.ArrowDown,()=>ne?ke():Q(!0),q),Zr(dr.ArrowUp,()=>ne?Ee():Q(!0),q),Zr(dr.Enter,()=>{ne&&(F?de(F):Q(!1))},q);const Pe=W=>{var U,I;const N=W.target.value;if(N){const j=ul(h,N);A(j);const $=(U=L[0])===null||U===void 0?void 0:U.value,ee=(I=j[0])===null||I===void 0?void 0:I.value;j&&$!=ee&&O(ee),!ne&&Q(!0)}C(N)},Ge=(0,c.useId)(),De=s!=null?s:Ge,he=(0,c.useId)();return c.createElement("span",{className:J(be.select,be[_?"multiple":"single"],ne&&be.expanded,o&&be.disabled),"data-testid":"select-root"},c.createElement(Nr,{disabled:o,inputId:De,inputRenderer:({className:W,inputId:U,hasIcon:I})=>c.createElement("span",{className:J(W,be.field,I&&be.hasIcon),ref:G.setReference},c.createElement("span",{className:be.inputArea},_&&c.createElement(c.Fragment,null,B.map(E).map(N=>c.createElement(Kt,{deleteButtonLabel:N.deleteButtonLabel,disabled:o!=null&&o,key:N.value,label:N.label,onDeleteButtonClick:()=>_e(N.value)}))),c.createElement("input",{"aria-activedescendant":F?`${U}-${F}`:void 0,"aria-autocomplete":"list","aria-controls":he,"aria-expanded":ne,"aria-haspopup":"listbox","aria-label":w!=null?w:m,"aria-owns":he,autoComplete:"off",className:be.textInput,disabled:o,id:U,onBlur:()=>Q(!1),onClick:()=>Q(!0),onChange:Pe,onFocus:()=>Q(!0),onKeyDown:N=>{Object.values(dr).includes(N.key)&&N.preventDefault()},role:"combobox",type:"text",value:R})),_&&c.createElement("button",{"aria-label":e.deleteButtonLabel,className:be.deleteButton+" "+_n,disabled:!B.length||o,onClick:()=>{se([])},type:"button"},c.createElement("span",{className:be.deleteButtonCross})),c.createElement("button",{"aria-controls":he,"aria-expanded":ne,"aria-haspopup":"listbox","aria-label":m,className:be.fieldButton,disabled:o,onBlur:()=>Q(!1),onClick:()=>Q(!ne),onKeyDown:N=>{Object.values(dr).includes(N.key)&&(N.preventDefault(),Q(!0))},tabIndex:-1,type:"button",value:_?B:F},c.createElement("span",{className:be.arrowWrapper},c.createElement("span",{className:be.arrow})))),isSearch:!1,isValid:!i,label:d?void 0:m,noFocusEffect:_,noPadding:!0,readOnly:!1}),c.createElement(qt,{activeValue:F,expanded:ne,listboxId:he,multiple:!!_,onOptionClick:de,optionId:W=>`${De}-${W}`,options:L,selectedValues:B,setFloating:G.setFloating,x:D,y:z}))};hl.displayName="Select";var yl="Spinner-module_spinner__GpFZS",xl="Spinner-module_spinnerCircle__DRFwJ",wl="Spinner-module_defaultForeground__Ay0Sq",kl="Spinner-module_interactionForeground__8aY93",El="Spinner-module_invertedForeground__DF2fs",Bl="Spinner-module_defaultBackground__7A7zq",Sl="Spinner-module_interactionBackground__jBIwt",Cl="Spinner-module_invertedBackground__nQ8Oa";Y(`.Spinner-module_spinner__GpFZS {\r
  animation: Spinner-module_rotate-animation__PTh4z 2s linear infinite;\r
}\r
\r
.Spinner-module_spinnerCircle__DRFwJ {\r
  animation: Spinner-module_stroke-animation__bulMB 1.5s ease-in-out infinite;\r
}\r
\r
.Spinner-module_defaultForeground__Ay0Sq {\r
  stroke: var(--colors-grey-500);\r
}\r
\r
.Spinner-module_interactionForeground__8aY93 {\r
  stroke: var(--semantic-border-action-default);\r
}\r
\r
.Spinner-module_invertedForeground__DF2fs {\r
  stroke: var(--colors-white);\r
}\r
\r
.Spinner-module_defaultBackground__7A7zq,\r
.Spinner-module_interactionBackground__jBIwt,\r
.Spinner-module_invertedBackground__nQ8Oa {\r
  stroke: var(--colors-grey-200);\r
}\r
\r
@keyframes Spinner-module_rotate-animation__PTh4z {\r
  100% {\r
    transform: rotate(360deg);\r
  }\r
}\r
\r
@keyframes Spinner-module_stroke-animation__bulMB {\r
  0% {\r
    stroke-dasharray: 1, 150;\r
    stroke-dashoffset: 0;\r
  }\r
\r
  50% {\r
    stroke-dasharray: 90, 150;\r
    stroke-dashoffset: -62;\r
  }\r
\r
  100% {\r
    stroke-dasharray: 90, 150;\r
    stroke-dashoffset: -124;\r
  }\r
}\r
`);const Jt={xSmall:13,small:20,medium:27,large:40,"1xLarge":44,"2xLarge":56,"3xLarge":79},Ut={default:{foreground:wl,background:Bl},interaction:{foreground:kl,background:Sl},inverted:{foreground:El,background:Cl}},Zi=e=>{var{title:n,size:t="medium",variant:o="default",className:i=""}=e,d=re(e,["title","size","variant","className"]);return r.createElement("svg",Object.assign({className:`${yl} ${i}`,style:{width:Jt[t],height:Jt[t]},viewBox:"0 0 50 50"},d),r.createElement("title",null,n),r.createElement("circle",{className:Ut[o].background,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}),r.createElement("circle",{className:`${xl} ${Ut[o].foreground}`,cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"}))};var Yt={textArea:"TextArea-module_textArea__Fp7-I","resize-none":"TextArea-module_resize-none__LLMFm","resize-both":"TextArea-module_resize-both__LTKmK","resize-horizontal":"TextArea-module_resize-horizontal__SIRxw","resize-vertical":"TextArea-module_resize-vertical__oRHAF"};Y(`.TextArea-module_textArea__Fp7-I {\r
  font-family: inherit;\r
  font-size: var(--component-textarea-font_size-sm);\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {\r
  resize: none;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {\r
  resize: both;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {\r
  resize: horizontal;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {\r
  resize: vertical;\r
}\r
`);const Ki=(0,c.forwardRef)((e,n)=>{var t,{isValid:o=!0,disabled:i=!1,readOnly:d=!1,resize:s="none",label:m,characterLimit:_,value:f,onChange:p,"aria-describedby":g}=e,h=re(e,["isValid","disabled","readOnly","resize","label","characterLimit","value","onChange","aria-describedby"]);const[w,x]=(0,c.useState)(f?f.toString():""),b=(0,c.useId)(),E=(t=h.id)!==null&&t!==void 0?t:b,B=S=>{x(S.target.value),p&&p(S)};return c.createElement(Nr,{value:w,disabled:i,inputId:E,characterLimit:_,ariaDescribedBy:g,inputRenderer:({className:S,inputId:R,describedBy:C})=>c.createElement("textarea",Object.assign({},h,{ref:n,value:f,onChange:B,id:R,"aria-describedby":C,disabled:i,readOnly:!!d,className:[S,Yt.textArea,Yt[`resize-${s}`]].join(" ")})),isValid:o,label:m,readOnly:d})}),Gi=(0,c.forwardRef)((e,n)=>{var{id:t,onChange:o,isValid:i=!0,disabled:d=!1,readOnly:s=!1,required:m=!1,formatting:_,label:f,value:p,characterLimit:g,"aria-describedby":h}=e,w=re(e,["id","onChange","isValid","disabled","readOnly","required","formatting","label","value","characterLimit","aria-describedby"]);const[x,b]=(0,c.useState)(p?p.toString():""),E=(S,R)=>{if(R.source==="event"&&o){const C=(({values:L,sourceInfo:A})=>{const T=Object.assign({},A.event);return Object.assign(Object.assign({},T),{target:Object.assign(Object.assign({},T.target),{value:L.value.trim()})})})({values:S,sourceInfo:R});b(C.target.value),o(C)}},B=S=>{o&&o(S),b(S.target.value||"")};return c.createElement(Nr,{value:x,isValid:i,disabled:d,readOnly:s,label:f,inputId:t,characterLimit:g,ariaDescribedBy:h,inputRenderer:({className:S,variant:R,inputId:C,describedBy:L})=>{const A={id:C,readOnly:!!s,disabled:d,required:m,className:J(S,w.className),style:Object.assign({textAlign:_==null?void 0:_.align},w.style)};return _!=null&&_.number&&Ft(_.number)?(_.number.prefix&&_.number.prefix[0]==="-"&&(_.number.prefix=` ${_.number.prefix}`),c.createElement(Jo,Object.assign({},A,_.number,w,{value:p,"data-testid":`${C}-formatted-number-${R}`,onValueChange:E,valueIsNumericString:!0,"aria-describedby":L,getInputRef:n}))):_!=null&&_.number&&Vt(_.number)?c.createElement(ra,Object.assign({},A,_.number,w,{value:p,"data-testid":`${C}-formatted-number-${R}`,onValueChange:E,valueIsNumericString:!0,"aria-describedby":L,getInputRef:n})):c.createElement("input",Object.assign({},A,w,{value:p,"data-testid":`${C}-${R}`,onChange:B,"aria-describedby":L,ref:n}))}})}),Xt=(0,c.createContext)(void 0),xn=()=>{const e=(0,c.useContext)(Xt);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var Al="LegacyAccordion-module_legacyAccordion__eadKx";Y(`.LegacyAccordion-module_legacyAccordion__eadKx {\r
  --component-LegacyAccordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
\r
  background-color: var(--component-LegacyAccordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const Tl=({children:e,open:n,onClick:t,iconVariant:o="primary"})=>{const i=(0,c.useId)(),d=(0,c.useId)();return c.createElement("div",{className:Al},c.createElement(Xt.Provider,{value:{onClick:t,open:n,headerId:i,contentId:d,iconVariant:o}},e))};Tl.displayName="LegacyAccordion";const Il=({children:e})=>{const{open:n,contentId:t,headerId:o}=xn();return c.createElement("div",null,n&&c.createElement("div",{"aria-expanded":n,id:t,"aria-labelledby":o},e))};Il.displayName="LegacyAccordionContent";var Rl="LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a",Nl="LegacyAccordionHeader-module_subtitle__4zhgP",Ol="LegacyAccordionHeader-module_withSubtitle__6ISS5",Ll="LegacyAccordionHeader-module_title__m0-FG",zl="LegacyAccordionHeader-module_actions__L11E1";Y(`.LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a {\r
  --component-LegacyAccordion_header-border_top_color: var(--colors-grey-200);\r
  --component-LegacyAccordion_header-border_top_style: solid;\r
  --component-LegacyAccordion_header-border_top_width: var(--border_width-thin);\r
  --component-LegacyAccordion_header-color-background: var(--colors-white);\r
\r
  align-items: center;\r
  background-color: var(--component-LegacyAccordion_header-color-background);\r
  border-top-color: var(--component-LegacyAccordion_header-border_top_color);\r
  border-top-style: var(--component-LegacyAccordion_header-border_top_style);\r
  border-top-width: var(--component-LegacyAccordion_header-border_top_width);\r
  display: flex;\r
}\r
\r
/* breakpoints-xs */\r
@media only screen and (min-width: 0) {\r
  .LegacyAccordionHeader-module_subtitle__4zhgP {\r
    display: none;\r
  }\r
}\r
\r
/* breakpoints-sm */\r
@media only screen and (min-width: 540px) {\r
  .LegacyAccordionHeader-module_legacyAccordionHeader__2Vu0a.LegacyAccordionHeader-module_withSubtitle__6ISS5 {\r
    padding-bottom: 0.2rem;\r
    padding-right: 0.2rem;\r
    padding-top: 0.2rem;\r
  }\r
\r
  .LegacyAccordionHeader-module_subtitle__4zhgP {\r
    display: inline-block;\r
    font-size: 0.9rem;\r
    opacity: 0.6;\r
  }\r
}\r
\r
.LegacyAccordionHeader-module_title__m0-FG {\r
  --component-LegacyAccordion_header_title-border_bottom_style: none;\r
  --component-LegacyAccordion_header_title-border_left_style: none;\r
  --component-LegacyAccordion_header_title-border_right_style: none;\r
  --component-LegacyAccordion_header_title-border_top_style: none;\r
  --component-LegacyAccordion_header_title-color-background: none;\r
  --component-LegacyAccordion_header_title-font_size: var(--font_size-300);\r
  --component-LegacyAccordion_header_title-font_weight: var(--component-panel-font_weight-heading);\r
  --component-LegacyAccordion_header_title-spacing-margin_left: 1.6rem;\r
\r
  background-color: var(--component-LegacyAccordion_header_title-color-background);\r
  border-bottom-style: var(--component-LegacyAccordion_header_title-border_bottom_style);\r
  border-left-style: var(--component-LegacyAccordion_header_title-border_left_style);\r
  border-right-style: var(--component-LegacyAccordion_header_title-border_right_style);\r
  border-top-style: var(--component-LegacyAccordion_header_title-border_top_style);\r
  cursor: pointer;\r
  display: inline-flex;\r
  flex: 1 1 auto;\r
  flex-direction: column;\r
  font-family: inherit;\r
  font-size: var(--component-LegacyAccordion_header_title-font_size);\r
  font-weight: var(--component-LegacyAccordion_header_title-font_weight);\r
  line-height: 16px;\r
  margin-left: var(--component-LegacyAccordion_header_title-spacing-margin_left);\r
  text-align: left;\r
  word-break: break-word;\r
}\r
\r
.LegacyAccordionHeader-module_actions__L11E1 {\r
  align-items: center;\r
  column-gap: 0.3rem;\r
  display: grid;\r
  grid-auto-flow: column;\r
  padding: 0 0.2rem;\r
}\r
\r
.LegacyAccordionHeader-module_subtitle__4zhgP {\r
  word-break: break-word;\r
}\r
`);var jl="LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ",Pl="LegacyAccordionIcon-module_opened__Zoiav";Y(`.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ {\r
  --size: 20px;\r
\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  height: var(--size);\r
  margin-bottom: 0.6rem;\r
  margin-left: 0.6rem;\r
  margin-top: 0.6rem;\r
  width: var(--size);\r
}\r
\r
.LegacyAccordionIcon-module_legacyAccordionIcon__-LNuQ.LegacyAccordionIcon-module_opened__Zoiav {\r
  transform: rotate(90deg);\r
}\r
`);const Dl=e=>c.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:Mn.Cwc})),Vl=e=>c.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{d:`\r
        M 18   34\r
        C 26.8 34    34   26.8 34 18\r
        C 34    9.2  26.8  2   18  2\r
        C  9.2  2     2    9.2  2 18\r
        C  2   26.8   9.2 34   18 34\r
        Z\r
        M 14.3556 11.1556\r
        L 16.0444 9.37778\r
        L 24.2222 17.5556\r
        L 16.0444 25.7333\r
        L 14.3556 23.9556\r
        L 20.8444 17.5556\r
        L 14.3556 11.1556\r
        Z\r
      `,fill:Mn.NBx})),Qt=()=>{const{onClick:e,open:n,iconVariant:t}=xn(),o={className:J(jl,n&&Pl),onClick:e};switch(t){case"primary":return c.createElement(Dl,Object.assign({},o));case"secondary":return c.createElement(Vl,Object.assign({},o))}};Qt.displayName="LegacyAccordionIcon";const Fl=({children:e,actions:n,subtitle:t})=>{const{onClick:o,open:i,headerId:d,contentId:s}=xn();return c.createElement("div",{className:J(Rl,{[Ol]:t})},c.createElement(Qt,null),c.createElement("button",{className:Ll,"aria-expanded":i,type:"button",onClick:o,id:d,"aria-controls":s},e,(t==null?void 0:t.length)&&c.createElement("span",{"data-testid":"LegacyAccordion-header-subtitle",className:Nl},t)),c.createElement("div",{className:zl},n))};Fl.displayName="LegacyAccordionHeader";var $t={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};Y(`.List-module_list__9aWGq {\r
  --component-list-border_width: 1px;\r
\r
  border-top-color: var(--component-list-border_color);\r
  border-top-style: var(--component-list-border_style);\r
  border-top-width: var(--component-list-border_width);\r
  list-style-type: none;\r
  padding-left: 0;\r
}\r
\r
.List-module_list__9aWGq.List-module_solid__g5log {\r
  --component-list-border_color: #bcc7cc;\r
  --component-list-border_style: solid;\r
}\r
\r
.List-module_list__9aWGq.List-module_dashed__sq10j {\r
  --component-list-border_color: #1eadf7;\r
  --component-list-border_style: dashed;\r
}\r
`);const qi=e=>{var{borderStyle:n="solid",children:t,className:o}=e,i=re(e,["borderStyle","children","className"]);return r.createElement("ul",Object.assign({},i,{className:J([$t.list,$t[n],o])}),t)};var Ml="ListItem-module_listItem__AJQMK";Y(`.ListItem-module_listItem__AJQMK {\r
  border-bottom-color: var(--component-list-border_color);\r
  border-bottom-style: var(--component-list-border_style);\r
  border-bottom-width: var(--component-list-border_width);\r
  display: block;\r
}\r
`);const Ji=e=>{var{children:n}=e,t=re(e,["children"]);return r.createElement("li",Object.assign({},t,{className:Ml}),n)};var Hl="Table-module_table__Dkosn";Y(`.Table-module_table__Dkosn {\r
  align-self: stretch;\r
  background-color: #fff;\r
  border-collapse: collapse;\r
  border-spacing: 0;\r
  box-shadow: 0 1px 1px rgb(0 0 0 / 0.12), 0 2px 2px rgb(0 0 0 / 0.12);\r
  flex-grow: 0;\r
  order: 3;\r
  width: 100%;\r
}\r
`);const eo=(0,c.createContext)(void 0),Or=(0,c.createContext)({variantStandard:"body"}),ro=()=>{const e=u(Or);if(e===void 0)throw new Error("useTableContext must be used within a TableTypeContext");return e};function no(e){var{children:n,selectRows:t=!1,onChange:o,selectedValue:i,className:d}=e,s=re(e,["children","selectRows","onChange","selectedValue","className"]);const m={selectRows:t,onChange:o,selectedValue:i};return r.createElement("table",Object.assign({},s,{className:J(Hl,d)}),r.createElement(eo.Provider,{value:m},n))}var Wl="TableHeader-module_tableHeader__-Unp7";Y(`.TableHeader-module_tableHeader__-Unp7 {\r
  align-self: stretch;\r
  background: #f5f5f5;\r
  flex-grow: 0;\r
  order: 1;\r
}\r
`);const Zl=e=>{var{children:n,className:t}=e,o=re(e,["children","className"]);return r.createElement(Or.Provider,{value:{variantStandard:"header"}},r.createElement("thead",Object.assign({},o,{className:J(Wl,t)}),n))};var Kl="TableRow-module_tableRow__lREy-",Gl="TableRow-module_selected__0FWjw",ql="TableRow-module_body__CUiHu";function cr(e){var{children:n,rowData:t,className:o}=e,i=re(e,["children","rowData","className"]);const{variantStandard:d}=ro(),{onChange:s,selectedValue:m,selectRows:_}=function(){const p=u(eo);if(p===void 0)throw new Error("useTableContext must be used within a TableContext");return p}(),f=_&&t!==void 0&&JSON.stringify(t)===JSON.stringify(m);return r.createElement("tr",Object.assign({},i,{className:J(Kl,{[Gl]:f,[ql]:d==="body"&&_&&!f},o),onClick:()=>{s!=null&&_&&d==="body"&&t&&s({selectedValue:t})}}),n)}Y(`.TableRow-module_tableRow__lREy- {\r
  height: 60px;\r
  width: 1056px;\r
}\r
\r
.TableRow-module_tableRow__lREy-.TableRow-module_selected__0FWjw {\r
  background-color: #e0daf7;\r
  border-bottom: 1px solid #dde3e5;\r
  border-left: 2px solid #011728;\r
  border-top: 1px solid #dde3e5;\r
}\r
\r
.TableRow-module_tableRow__lREy-.TableRow-module_body__CUiHu:hover {\r
  background-color: #e3f7ff;\r
  cursor: pointer;\r
}\r
`);var Jl="TableCell-module_headerTableCell__1Riow",Ul="TableCell-module_headerTableCellRadiobutton__aHo20",Yl="TableCell-module_bodyTableCell__MTK68",Xl="TableCell-module_bodyTableCellRadiobutton__zztqA",wn="TableCell-module_input__cyAaE",Ql="TableCell-module_radioButton__kN3Cg",$l="TableCell-module_containerSortable__8hKI3",ei="TableCell-module_icon__ADG4G",ri="TableCell-module_iconDesc__bD3-5",ni="TableCell-module_iconAsc__bGb1O",ti="TableCell-module_header__HuaKn",oi="TableCell-module_property__k74rm";Y(`.TableCell-module_headerTableCell__1Riow {\r
  background: #f5f5f5;\r
  margin: 20px 0;\r
  text-align: left;\r
  user-select: none;\r
}\r
\r
.TableCell-module_headerTableCellRadiobutton__aHo20 {\r
  background: #f5f5f5;\r
  margin: 10px 0;\r
  padding: 8px;\r
  text-align: left;\r
  user-select: none;\r
}\r
\r
.TableCell-module_bodyTableCell__MTK68 {\r
  border-bottom: 1px solid #dde3e5;\r
  border-top: 1px solid #dde3e5;\r
  margin: 20px 0;\r
  max-width: 300px;\r
  text-align: left;\r
}\r
\r
.TableCell-module_bodyTableCellRadiobutton__zztqA {\r
  border-bottom: 1px solid #dde3e5;\r
  border-top: 1px solid #dde3e5;\r
  text-align: left;\r
}\r
\r
.TableCell-module_image__vWvwd {\r
  max-height: 45px;\r
  max-width: 45px;\r
}\r
\r
.TableCell-module_input__cyAaE {\r
  margin: 0 15px;\r
}\r
\r
.TableCell-module_radioButton__kN3Cg {\r
  margin: 0 0 0 15px;\r
}\r
\r
.TableCell-module_containerSortable__8hKI3 {\r
  align-items: center;\r
  cursor: pointer;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: flex-start;\r
}\r
\r
.TableCell-module_icon__ADG4G {\r
  fill: rgb(0 0 0 / 0.4);\r
  margin-left: -5px;\r
}\r
\r
.TableCell-module_iconDesc__bD3-5 {\r
  fill: rgb(0 0 0);\r
  margin-left: -5px;\r
}\r
\r
.TableCell-module_iconAsc__bGb1O {\r
  fill: rgb(0 0 0);\r
  margin-left: -5px;\r
  transform: rotate(180deg);\r
}\r
\r
.TableCell-module_header__HuaKn {\r
  color: #4b5563;\r
  font-weight: 600;\r
  margin: 10px 10px 10px 0;\r
}\r
\r
.TableCell-module_property__k74rm {\r
  margin: 10px 10px 10px 0;\r
}\r
`);const ai=e=>r.createElement("svg",Object.assign({width:"10",height:"5",viewBox:"0 0 10 5",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M9.30758 0.229492H1.12508H0.333221L4.8204 4.89616L9.30758 0.229492Z",fill:"black"}));function je(e){var{children:n,variant:t,onChange:o,sortDirection:i="notSortable",className:d,radiobutton:s=!1}=e,m=re(e,["children","variant","onChange","sortDirection","className","radiobutton"]);const{variantStandard:_}=ro(),f=g=>t===void 0?_===g:t===g,p=()=>{o!=null&&i!=null&&i!="notSortable"&&o({next:i==="desc"?"asc":"desc",previous:i})};return r.createElement(r.Fragment,null,f("header")&&r.createElement(li,Object.assign({useTd:!n},m,{className:J(s?Ul:Jl,d),"aria-sort":i==="asc"?"ascending":i==="desc"?"descending":void 0}),r.createElement("div",{className:J(i!="notSortable"&&$l),onClick:()=>p(),onKeyUp:g=>{g.key!=="Enter"&&g.key!==" "||p()},role:i!="notSortable"?"button":void 0,tabIndex:i!="notSortable"?0:void 0},r.createElement("div",{className:wn},n),i!="notSortable"&&r.createElement(ai,{"aria-label":"Sortering","data-testid":"sort-icon",className:i=="notActive"?ei:i=="asc"?ni:ri}))),f("body")&&r.createElement("td",Object.assign({},m,{className:J(s?Xl:Yl,d)}),r.createElement("div",{className:s?Ql:wn},n)),f("footer")&&r.createElement("td",Object.assign({},m,{className:d}),r.createElement("div",{className:wn},n)))}function li(e){var{useTd:n=!1,children:t}=e,o=re(e,["useTd","children"]);return n?r.createElement("td",Object.assign({},o),t):r.createElement("th",Object.assign({},o),t)}var ii="TableBody-module_tableBody__fKFbY";Y(`.TableBody-module_tableBody__fKFbY {\r
  align-self: stretch;\r
  background-color: #ffff;\r
  flex-grow: 0;\r
  order: 2;\r
}\r
`);const to=e=>{var{children:n,className:t}=e,o=re(e,["children","className"]);return r.createElement(Or.Provider,{value:{variantStandard:"body"}},r.createElement("tbody",Object.assign({},o,{className:J(ii,t)}),n))};var di="TableFooter-module_tableFooter__MJ37D";Y(`.TableFooter-module_tableFooter__MJ37D {\r
  align-self: stretch;\r
  background: #f5f5f5;\r
  flex-grow: 0;\r
  order: 1;\r
}\r
`);const oo=e=>{var{children:n,className:t}=e,o=re(e,["children","className"]);return r.createElement(Or.Provider,{value:{variantStandard:"footer"}},r.createElement("tfoot",Object.assign({},o,{className:J(di,t)}),n))};function Ui({config:e}){return function(t){const o=m=>{var _;return(_=window==null?void 0:window.matchMedia(m).matches)!==null&&_!==void 0&&_},[i,d]=l(o(t)),s=()=>{d(o(t))};return a(()=>{const m=window.matchMedia(t);return s(),m.addEventListener("change",s),()=>m.removeEventListener("change",s)},[t]),i}(`(max-width: ${k.BreakpointsSm})`)?r.createElement(ci,{config:e}):r.createElement(si,{config:e})}function ci({config:e}){const{rows:n,headers:t,showColumnsMobile:o,renderCell:i,rowSelection:d,footer:s}=e,m=JSON.stringify((d==null?void 0:d.selectedValue)||null),_=Object.keys(t),f=d?2:1;return r.createElement(no,{selectRows:!!d,onChange:({selectedValue:p})=>d==null?void 0:d.onSelectionChange(p),selectedValue:d==null?void 0:d.selectedValue},r.createElement(to,null,n.map(p=>{const g=JSON.stringify(p);return r.createElement(cr,{key:g,rowData:p},d&&r.createElement(je,{radiobutton:!0},r.createElement(Ir,{name:g,onChange:()=>d.onSelectionChange(p),value:g,checked:g===m,label:g,hideLabel:!0})),r.createElement(je,{key:`${g}-data`,style:{padding:"0px"}},_.map(h=>{if(o&&!o.includes(h))return;const w=i&&i[h],x=w?w(p[h]):p[h];return r.createElement(r.Fragment,null,r.createElement("div",{className:ti},t[h]),r.createElement("div",{className:oi},x))})))})),s&&r.createElement(oo,null,r.createElement(cr,null,r.createElement(je,{colSpan:f},s))))}function si({config:e}){const{rows:n,headers:t,renderCell:o,columnSort:i,rowSelection:d,footer:s}=e,m=JSON.stringify((d==null?void 0:d.selectedValue)||null),_=Object.keys(t),f=d?Object.keys(t).length+1:Object.keys(t).length;return r.createElement(no,{selectRows:!!d,onChange:({selectedValue:p})=>d==null?void 0:d.onSelectionChange(p),selectedValue:d==null?void 0:d.selectedValue},r.createElement(Zl,null,r.createElement(cr,null,d&&r.createElement(je,{radiobutton:!0}),_.map(p=>r.createElement(je,{key:p,onChange:({next:g,previous:h})=>{i&&i.onSortChange({column:p,next:g,previous:h})},sortDirection:i?i.currentlySortedColumn===p?i.currentDirection:i.sortable.includes(p)?"notActive":"notSortable":"notSortable"},t[p])))),r.createElement(to,null,n.map(p=>{const g=JSON.stringify(p);return r.createElement(cr,{key:g,rowData:p},d&&r.createElement(je,{radiobutton:!0},r.createElement(Ir,{name:g,onChange:()=>d.onSelectionChange(p),value:g,checked:g===m,label:g,hideLabel:!0})),_.map(h=>{const w=o&&o[h];return r.createElement(je,{key:`${g}-${h}`},w?w(p[h]):p[h])}))})),s&&r.createElement(oo,null,r.createElement(cr,null,r.createElement(je,{colSpan:f},s))))}var ui="ToggleButtonGroup-module_toggleButtonGroup__Q-2j7",mi="ToggleButtonGroup-module_toggleButton__RA-MW",_i="ToggleButtonGroup-module_pressed__aAphL";Y(`.ToggleButtonGroup-module_toggleButtonGroup__Q-2j7 {\r
  align-items: stretch;\r
  border-color: var(--component-toggle_button-color-border-inactive);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: 2px;\r
  box-sizing: border-box;\r
  display: inline-flex;\r
  height: var(--component-button-size-height-small);\r
  width: 100%;\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW {\r
  background-color: var(--component-toggle_button-color-background-inactive);\r
  border-radius: 0;\r
  border: none;\r
  color: var(--component-toggle_button-color-text-inactive);\r
  cursor: pointer;\r
  flex: 1;\r
  font-family: inherit;\r
  font-size: var(--component-toggle_button-font_size-sm);\r
  padding-left: var(--component-toggle_button-space-padding-x);\r
  padding-right: var(--component-toggle_button-space-padding-x);\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW.ToggleButtonGroup-module_pressed__aAphL {\r
  background-color: var(--component-toggle_button-color-background-active);\r
  color: var(--component-toggle_button-color-text-active);\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW:focus-visible {\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\r
  z-index: 1;\r
}\r
\r
.ToggleButtonGroup-module_toggleButton__RA-MW:not(.ToggleButtonGroup-module_pressed__aAphL):hover {\r
  background-color: #cff0ff;\r
}\r
`);const Yi=({onChange:e,items:n,selectedValue:t})=>{const o=t!=null?t:n[0].value,[i,d]=l(o);if(a(()=>{d(o)},[o]),!br(n.map(({value:s})=>s)))throw Error("Each value must be unique.");if(t!==void 0&&!n.some(s=>s.value===t))throw Error("The given selected item value must exist in the list of items.");return r.createElement("span",{className:ui},n.map(s=>r.createElement("button",{"aria-pressed":s.value===i,className:J(mi,s.value===i&&_i),key:s.value,onClick:()=>{return m=s.value,d(m),void(e&&e(m));var m},type:"button"},s.label)))};var Te={accordion:"Accordion-module_accordion__LVhhv",border:"Accordion-module_border__33ZCr",expandIcon:"Accordion-module_expandIcon__VoOG-",content:"Accordion-module_content__PEM9t",item:"Accordion-module_item__7ryVk",contentWrapper:"Accordion-module_contentWrapper__sODdD",header:"Accordion-module_header__WaTdJ",button:"Accordion-module_button__DIKcm",neutral:"Accordion-module_neutral__qNam6",subtle:"Accordion-module_subtle__Mo-a1",primary:"Accordion-module_primary__62zA0",secondary:"Accordion-module_secondary__D7Kj1",tertiary:"Accordion-module_tertiary__jJX6T",open:"Accordion-module_open__98jLY",filled:"Accordion-module_filled__lWoG4"};Y(`.Accordion-module_accordion__LVhhv {\r
  --fdsc-accordion-border: var(--fds-semantic-border-neutral-subtle);\r
  --fdsc-accordion-border-radius: 3px;\r
  --fdsc-accordion-header-padding-top: var(--fds-spacing-4);\r
  --fdsc-accordion-header-padding-right: var(--fds-spacing-5);\r
  --fdsc-accordion-header-padding-bottom: var(--fds-spacing-4);\r
  --fdsc-accordion-header-padding-left: var(--fds-spacing-5);\r
  --fdsc-accordion-header-bg-neutral: var(--fds-semantic-surface-neutral-default);\r
  --fdsc-accordion-header-bg-neutral-active: var(--fds-semantic-surface-action-no_fill-hover);\r
  --fdsc-accordion-header-bg-brand-active: var(--fds-semantic-surface-neutral-subtle-hover);\r
  --fdsc-accordion-header-bg-subtle: var(--fds-semantic-surface-neutral-subtle);\r
  --fdsc-accordion-header-bg-subtle-hover: var(--fds-semantic-surface-neutral-subtle-hover);\r
  --fdsc-accordion-header-bg-primary: var(--fds-semantic-surface-primary-light);\r
  --fdsc-accordion-header-bg-primary-hover: var(--fds-semantic-surface-primary-light-hover);\r
  --fdsc-accordion-header-bg-secondary: var(--fds-semantic-surface-secondary-light);\r
  --fdsc-accordion-header-bg-secondary-hover: var(--fds-semantic-surface-secondary-light-hover);\r
  --fdsc-accordion-header-bg-tertiary: var(--fds-semantic-surface-tertiary-light);\r
  --fdsc-accordion-header-bg-tertiary-hover: var(--fds-semantic-surface-tertiary-light-hover);\r
  --fdsc-accordion-header-border: var(--fds-semantic-border-neutral-subtle);\r
  --fdsc-accordion-header-border-inverted: var(--fds-semantic-border-on_inverted-default);\r
  --fdsc-accordion-header-shadow-focus: 2px 2px 3px var(--fds-semantic-border-neutral-subtle);\r
  --fdsc-accordion-header-color-hover: var(--fds-semantic-text-action-default);\r
  --fdsc-accordion-content-border: var(--fds-semantic-border-neutral-subtle);\r
  --fdsc-accordion-content-border-open: var(--fds-semantic-border-neutral-strong);\r
}\r
\r
.Accordion-module_border__33ZCr {\r
  border: 1px solid var(--fdsc-accordion-border);\r
  border-radius: var(--fdsc-accordion-border-radius);\r
}\r
\r
.Accordion-module_expandIcon__VoOG- {\r
  font-size: 1.5rem;\r
  height: 1.75rem;\r
  flex-shrink: 0;\r
}\r
\r
.Accordion-module_content__PEM9t {\r
  padding: var(--fds-spacing-5, 1rem);\r
  background-color: #ffffff50;\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
}\r
\r
.Accordion-module_item__7ryVk:last-child .Accordion-module_contentWrapper__sODdD {\r
  border-bottom: 1px solid var(--fdsc-accordion-content-border);\r
}\r
\r
.Accordion-module_header__WaTdJ {\r
  margin: 0;\r
}\r
\r
.Accordion-module_header__WaTdJ > button {\r
  width: 100%;\r
  display: flex;\r
  justify-content: flex-start;\r
  align-items: center;\r
  font-size: var(--fds-sizing-4);\r
  gap: var(--fds-spacing-4);\r
  margin: 0;\r
  text-align: left;\r
  cursor: pointer;\r
  border: none;\r
  border-top: 1px solid var(--fdsc-accordion-header-border);\r
  padding-top: var(--fdsc-accordion-header-padding-top);\r
  padding-right: var(--fdsc-accordion-header-padding-right);\r
  padding-bottom: var(--fdsc-accordion-header-padding-bottom);\r
  padding-left: var(--fdsc-accordion-header-padding-left);\r
}\r
\r
.Accordion-module_header__WaTdJ > button:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Accordion-module_header__WaTdJ > .Accordion-module_button__DIKcm:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
@media (hover: hover) and (pointer: fine) {\r
  .Accordion-module_header__WaTdJ > button:hover {\r
    color: var(--fdsc-accordion-header-color-hover);\r
  }\r
}\r
\r
.Accordion-module_item__7ryVk:focus-within {\r
  position: relative;\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6,\r
.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {\r
  background: var(--fdsc-accordion-header-bg-neutral);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1,\r
.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {\r
  background: var(--fdsc-accordion-header-bg-subtle);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0,\r
.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {\r
  background: var(--fdsc-accordion-header-bg-primary);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1,\r
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {\r
  background: var(--fdsc-accordion-header-bg-secondary);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T,\r
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button {\r
  background: var(--fdsc-accordion-header-bg-tertiary);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_border__33ZCr > .Accordion-module_item__7ryVk:first-child > .Accordion-module_header__WaTdJ > button {\r
  border-top: 0;\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button,\r
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button,\r
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk:not(:first-child) > .Accordion-module_header__WaTdJ > button {\r
  border-top: 1px solid var(--fdsc-accordion-header-border-inverted);\r
}\r
\r
@media (hover: hover) and (pointer: fine) {\r
  .Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {\r
    background: var(--fdsc-accordion-header-bg-subtle-hover);\r
  }\r
\r
  .Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {\r
    background: var(--fdsc-accordion-header-bg-primary-hover);\r
  }\r
\r
  .Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {\r
    background: var(--fdsc-accordion-header-bg-secondary-hover);\r
  }\r
\r
  .Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk > .Accordion-module_header__WaTdJ > button:hover {\r
    background: var(--fdsc-accordion-header-bg-tertiary-hover);\r
  }\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_neutral__qNam6 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,\r
.Accordion-module_accordion__LVhhv.Accordion-module_subtle__Mo-a1 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button {\r
  background-color: var(--fdsc-accordion-header-bg-neutral-active);\r
}\r
\r
.Accordion-module_accordion__LVhhv.Accordion-module_primary__62zA0 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,\r
.Accordion-module_accordion__LVhhv.Accordion-module_secondary__D7Kj1 > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button,\r
.Accordion-module_accordion__LVhhv.Accordion-module_tertiary__jJX6T > .Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button {\r
  background-color: var(--fdsc-accordion-header-bg-brand-active);\r
}\r
\r
.Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button:hover + * .Accordion-module_content__PEM9t {\r
  border-color: var(--fdsc-accordion-content-border-open);\r
}\r
\r
.Accordion-module_item__7ryVk.Accordion-module_open__98jLY > .Accordion-module_header__WaTdJ > button .Accordion-module_expandIcon__VoOG- {\r
  transform: rotateZ(180deg);\r
}\r
\r
.Accordion-module_header__WaTdJ > button:hover > .Accordion-module_accordion__LVhhv.Accordion-module_expandIcon__VoOG-.Accordion-module_filled__lWoG4 {\r
  display: inherit;\r
}\r
`);const fi=(0,c.forwardRef)((e,n)=>{var{border:t=!1,color:o="neutral",className:i}=e,d=re(e,["border","color","className"]);return c.createElement("div",Object.assign({},d,{className:J(Te.accordion,Te[o],{[Te.border]:t},i),ref:n}))}),kn=(0,c.createContext)(null),pi=(0,c.forwardRef)((e,n)=>{var{children:t,className:o,open:i,defaultOpen:d=!1}=e,s=re(e,["children","className","open","defaultOpen"]);const[m,_]=(0,c.useState)(d),f=(0,c.useId)();return c.createElement("div",Object.assign({className:J(Te.item,o,{[Te.open]:i!=null?i:m}),ref:n},s),c.createElement(kn.Provider,{value:{open:i!=null?i:m,toggleOpen:()=>{i===void 0&&_(p=>!p)},contentId:f}},t))});var gi="AnimateHeight-module_root__TaZE6",bi="AnimateHeight-module_content__BMgZ8",vi="AnimateHeight-module_open__rRJ--",hi="AnimateHeight-module_closed__dc-rb";Y(`.AnimateHeight-module_root__TaZE6 {\r
  --fds-animated_height-transition_duration: 0.25s;\r
\r
  transition: height var(--fds-animated_height-transition_duration) ease-in-out;\r
  overflow: hidden;\r
}\r
\r
@media (prefers-reduced-motion) {\r
  .AnimateHeight-module_root__TaZE6 {\r
    --fds-animated_height-transition_duration: 0;\r
  }\r
}\r
\r
.AnimateHeight-module_content__BMgZ8.AnimateHeight-module_open__rRJ-- {\r
  height: auto;\r
}\r
\r
.AnimateHeight-module_content__BMgZ8.AnimateHeight-module_closed__dc-rb {\r
  height: 0;\r
}\r
`);const yi=e=>{var{children:n,className:t,open:o,style:i}=e,d=re(e,["children","className","open","style"]);const[s,m]=(0,c.useState)(0),_=(0,c.useCallback)(p=>{m(p&&o?p.getBoundingClientRect().height:0)},[o]),f=o?vi:hi;return c.createElement("div",Object.assign({},d,{className:J(gi,t),style:Object.assign({height:s},i)}),c.createElement("div",{ref:_,className:bi+" "+f},n))},xi=(0,c.forwardRef)((e,n)=>{var{children:t,className:o}=e,i=re(e,["children","className"]);const d=(0,c.useContext)(kn);return d===null?(Mr.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):c.createElement(yi,{id:d.contentId,open:d.open,className:Te.contentWrapper},c.createElement(ir,Object.assign({},i,{as:"div",size:"small",ref:n,className:J(Te.content,o)}),t))});let ao=0;const lo=c.useId;function sr(e){var n;if(lo!==void 0){const t=lo();return e!=null?e:t.replace(/(:)/g,"")}return(n=function(t){const[o,i]=(0,c.useState)(t),d=t||o;return(0,c.useEffect)(()=>{o==null&&(ao+=1,i(`aksel-icon-${ao}`))},[o]),d}(e))!==null&&n!==void 0?n:""}var wi=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},ki=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=wi(e,["title","titleId"]);let d=sr();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Zm4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.812.812 0 0 0 1.195-.05l5.959-7.042Z",fill:"currentColor"}))}),Ei=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},Bi=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=Ei(e,["title","titleId"]);let d=sr();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),Si=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},Ci=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=Si(e,["title","titleId"]);let d=sr();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"}))}),Ai=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},Ti=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=Ai(e,["title","titleId"]);let d=sr();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4ZM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75Z",fill:"currentColor"}))}),Ii=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t},Ri=(0,c.forwardRef)((e,n)=>{var{title:t,titleId:o}=e,i=Ii(e,["title","titleId"]);let d=sr();return d=t?o||"title-"+d:void 0,c.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:n,"aria-labelledby":d},i),t?c.createElement("title",{id:d},t):null,c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53L7.742 2.47Zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94 9.03 7.97Z",fill:"currentColor"}))});const Ni=(0,c.forwardRef)((e,n)=>{var{level:t=1,children:o,className:i,onHeaderClick:d}=e,s=re(e,["level","children","className","onHeaderClick"]);const m=(0,c.useContext)(kn);return m===null?(Mr.error("<Accordion.Header> has to be used within an <Accordion.Item>"),null):c.createElement(nl,Object.assign({},s,{ref:n,size:"xsmall",level:t,className:J(Te.header,i)}),c.createElement("button",{type:"button",onClick:_=>{m.toggleOpen(),d&&d(_)},"aria-expanded":m.open,"aria-controls":m.contentId},c.createElement(Bi,{"aria-hidden":!0,className:Te.expandIcon}),c.createElement(ir,{as:"span",size:"small"},o)))}),$e=fi;$e.Header=Ni,$e.Content=xi,$e.Item=pi,$e.Header.displayName="Accordion.Header",$e.Content.displayName="Accordion.Content",$e.Item.displayName="Accordion.Item";const Xi=(0,c.forwardRef)((e,n)=>{var{children:t,disabled:o=!1,id:i,isValid:d=!0,label:s}=e,m=re(e,["children","disabled","id","isValid","label"]);return c.createElement(Nr,{disabled:o,inputId:i,isValid:d,inputRenderer:({className:_,inputId:f})=>c.createElement("select",Object.assign({disabled:o,id:f,ref:n},m,{className:J(_,m.className)}),t),label:s})});var ur={alert:"Alert-module_alert__7cYyI",icon:"Alert-module_icon__Zg6SB",content:"Alert-module_content__UXnmZ",info:"Alert-module_info__9r3r1",warning:"Alert-module_warning__q-j1Q",success:"Alert-module_success__1bzoB",danger:"Alert-module_danger__CiZkW",elevated:"Alert-module_elevated__v1G7u"};Y(`.Alert-module_alert__7cYyI {\r
  --fdsc-alert-border: var(--fds-semantic-border-info-default);\r
  --fdsc-alert-icon-color: var(--fdsc-alert-border);\r
  --fdsc-alert-background: var(--fds-semantic-surface-info-subtle);\r
  --fdsc-alert-color: var(--fds-semantic-text-neutral-default);\r
\r
  box-shadow: 8px 0 0 0 var(--fdsc-alert-border) inset;\r
  background: var(--fdsc-alert-background);\r
  color: var(--fdsc-alert-color);\r
  padding: var(--fds-spacing-4);\r
  display: grid;\r
  grid-auto-flow: column;\r
  grid-auto-columns: min-content auto;\r
  gap: var(--fds-spacing-2);\r
}\r
\r
.Alert-module_icon__Zg6SB {\r
  --icon-size: calc((4 * 6 / 16) * var(--fds-font-size-f0)); /** Fluid sizing-6 */\r
\r
  height: var(--icon-size);\r
  width: var(--icon-size);\r
  color: var(--fdsc-alert-icon-color);\r
}\r
\r
.Alert-module_content__UXnmZ {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.Alert-module_info__9r3r1 {\r
  --fdsc-alert-border: var(--fds-semantic-border-info-default);\r
  --fdsc-alert-background: var(--fds-semantic-surface-info-subtle);\r
}\r
\r
.Alert-module_warning__q-j1Q {\r
  --fdsc-alert-border: var(--fds-semantic-border-warning-default);\r
  --fdsc-alert-background: var(--fds-semantic-surface-warning-subtle);\r
}\r
\r
.Alert-module_success__1bzoB {\r
  --fdsc-alert-border: var(--fds-semantic-border-success-default);\r
  --fdsc-alert-background: var(--fds-semantic-surface-success-subtle);\r
}\r
\r
.Alert-module_danger__CiZkW {\r
  --fdsc-alert-border: var(--fds-semantic-border-danger-default);\r
  --fdsc-alert-background: var(--fds-semantic-surface-danger-subtle);\r
}\r
\r
.Alert-module_elevated__v1G7u {\r
  box-shadow: var(--fds-shadow-small);\r
}\r
`);const Oi={info:{Icon:Ti,title:"Informasjon"},warning:{Icon:Ci,title:"Advarsel"},success:{Icon:ki,title:"Suksess"},danger:{Icon:Ri,title:"Feil"}},Qi=(0,c.forwardRef)((e,n)=>{var{severity:t="info",elevated:o,iconTitle:i,children:d}=e,s=re(e,["severity","elevated","iconTitle","children"]);const{Icon:m,title:_}=Oi[t];return c.createElement("div",Object.assign({},s,{ref:n,className:J(ur.alert,ur[t],o&&ur.elevated,s.className)}),c.createElement(c.Fragment,null,c.createElement(m,{title:i||_,className:ur.icon}),c.createElement(ir,{as:"span",className:ur.content},d)))});var Lr={tag:"Tag-module_tag__16VPH",xsmall:"Tag-module_xsmall__o2-04",small:"Tag-module_small__L9OpP",medium:"Tag-module_medium__HMrbM",outlined:"Tag-module_outlined__D4nTw",neutral:"Tag-module_neutral__jAd-x",info:"Tag-module_info__hmHE-",success:"Tag-module_success__56lz4",warning:"Tag-module_warning__UK7SC",danger:"Tag-module_danger__kJ-yx",primary:"Tag-module_primary__AXKlN",secondary:"Tag-module_secondary__sbk0t",tertiary:"Tag-module_tertiary__Zlx2W",filled:"Tag-module_filled__rnL-M"};Y(`.Tag-module_tag__16VPH {\r
  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
  --fdsc-tag-padding: var(--fds-spacing-2);\r
  --fdsc-tag-min-height: var(--fds-sizing-7);\r
\r
  color: var(--fdsc-tag-text);\r
  padding: 0 var(--fdsc-tag-padding);\r
  border: var(--fds-border_width-default) solid var(--fdsc-tag-border);\r
  background-color: var(--fdsc-tag-background);\r
  min-height: var(--fdsc-tag-min-height);\r
  display: flex;\r
  align-items: center;\r
  box-sizing: border-box;\r
  word-break: break-word;\r
  border-radius: 2px;\r
  width: max-content;\r
}\r
\r
.Tag-module_xsmall__o2-04 {\r
  --fdsc-tag-padding: var(--fds-spacing-1);\r
  --fdsc-tag-min-height: var(--fds-sizing-5);\r
}\r
\r
.Tag-module_small__L9OpP {\r
  --fdsc-tag-padding: var(--fds-spacing-1);\r
  --fdsc-tag-min-height: var(--fds-sizing-6);\r
}\r
\r
.Tag-module_medium__HMrbM {\r
  --fdsc-tag-padding: var(--fds-spacing-2);\r
  --fdsc-tag-min-height: var(--fds-sizing-7);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_neutral__jAd-x {\r
  --fdsc-tag-border: var(--fds-semantic-border-neutral-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-neutral-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_info__hmHE- {\r
  --fdsc-tag-border: var(--fds-semantic-border-info-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_success__56lz4 {\r
  --fdsc-tag-border: var(--fds-semantic-border-success-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-success-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-success-on_success_subtle);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_warning__UK7SC {\r
  --fdsc-tag-border: var(--fds-semantic-border-warning-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-warning-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_danger__kJ-yx {\r
  --fdsc-tag-border: var(--fds-semantic-border-danger-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-danger-subtle);\r
  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger_subtle);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_primary__AXKlN {\r
  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-primary-light);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_secondary__sbk0t {\r
  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-secondary-light);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_outlined__D4nTw.Tag-module_tertiary__Zlx2W {\r
  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-light);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_neutral__jAd-x {\r
  --fdsc-tag-border: var(--fds-semantic-surface-neutral-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-neutral-dark);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_info__hmHE- {\r
  --fdsc-tag-border: var(--fds-semantic-surface-info-subtle-hover);\r
  --fdsc-tag-background: var(--fds-semantic-surface-info-subtle-hover);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_success__56lz4 {\r
  --fdsc-tag-border: var(--fds-semantic-surface-success-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-success-default);\r
  --fdsc-tag-text: var(--fds-semantic-text-success-on_success);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_warning__UK7SC {\r
  --fdsc-tag-border: var(--fds-semantic-surface-warning-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-warning-default);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-default);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_danger__kJ-yx {\r
  --fdsc-tag-border: var(--fds-semantic-surface-danger-default);\r
  --fdsc-tag-background: var(--fds-semantic-surface-danger-default);\r
  --fdsc-tag-text: var(--fds-semantic-text-danger-on_danger);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_primary__AXKlN {\r
  --fdsc-tag-border: var(--fds-semantic-surface-primary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-primary-dark);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_secondary__sbk0t {\r
  --fdsc-tag-border: var(--fds-semantic-surface-secondary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-secondary-dark);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\r
}\r
\r
.Tag-module_filled__rnL-M.Tag-module_tertiary__Zlx2W {\r
  --fdsc-tag-border: var(--fds-semantic-surface-tertiary-dark);\r
  --fdsc-tag-background: var(--fds-semantic-surface-tertiary-dark);\r
  --fdsc-tag-text: var(--fds-semantic-text-neutral-on_inverted);\r
}\r
`);const $i=(0,c.forwardRef)((e,n)=>{var{children:t,color:o="neutral",size:i="medium",variant:d="filled",className:s}=e,m=re(e,["children","color","size","variant","className"]);return c.createElement(ir,Object.assign({as:"span",size:i},m,{className:J(Lr.tag,Lr[o],Lr[i],Lr[d],s),ref:n}),t)});var io,co,so,uo,mo,En,Bn,Sn,_o,fo,po,go,bo,vo,ho,yo,xo;(function(e){e.Xsmall="xsmall",e.Small="small"})(io||(io={})),function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(co||(co={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(so||(so={})),function(e){e.None="none",e.Error="error",e.Search="search"}(uo||(uo={})),function(e){e.Primary="primary",e.Secondary="secondary"}(mo||(mo={})),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(En||(En={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(Bn||(Bn={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(Sn||(Sn={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(_o||(_o={})),function(e){e.Xsmall="xsmall",e.Small="small"}(fo||(fo={})),function(e){e.Xsmall="xsmall",e.Small="small"}(po||(po={})),function(e){e.Xsmall="xsmall",e.Small="small"}(go||(go={})),function(e){e.Xsmall="xsmall",e.Small="small"}(bo||(bo={})),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(vo||(vo={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ho||(ho={})),function(e){e.XLarge="xlarge",e.Large="large",e.Medium="medium",e.Small="small",e.XSmall="xsmall"}(yo||(yo={})),function(e){e[e.H1=1]="H1",e[e.H2=2]="H2",e[e.H3=3]="H3",e[e.H4=4]="H4",e[e.H5=5]="H5",e[e.H6=6]="H6"}(xo||(xo={}))},"./node_modules/@storybook/addon-docs/dist/index.mjs":(le,ae,oe)=>{oe.d(ae,{$4:()=>fe.$4,Dx:()=>fe.Dx,Uh:()=>fe.Uh,X6:()=>fe.X6,dk:()=>fe.dk,fQ:()=>fe.fQ,h_:()=>fe.h_});var c=oe("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),fe=oe("./node_modules/@storybook/blocks/dist/index.mjs")}}])});Di();})();
