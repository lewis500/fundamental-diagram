(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(9),c=n(262),i=n(258),l=n(47),u=8e4/3600,s=(1+Math.sqrt(5))/2,m=1*s*2.5,f=1/(2.5*s),h=f/3,p=u*h/(f-h);console.log(1),console.log(m);function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){y(t,e,n[e])})}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g,b=f,v=p,w=Math.min,x=Math.max,O=function(t){return E(Array(t).keys())};!function(t){t.TRIANGLE="TRIANGLE",t.GREENSHIELDS="GREENSHIELDS",t.DRAKE="DRAKE"}(g||(g={}));var k,j=O(20).map(function(t,e){return(e+1)/20*b}),A={TRIANGLE:function(t){return x(w(22.22222222222222,v*(b/t-1)),0)},GREENSHIELDS:function(t){return x(0,22.22222222222222*(1-t/b))},DRAKE:function(t){return x(0,22.22222222222222*Math.exp(-t/b))}},S=function(t){return j.map(function(e){return{k:e,s:1/e,v:A[t](e),cars:O(Math.round(140*e)).map(function(t){return 0+t/e})}})},N={play:!1,lanes:S(g.TRIANGLE),vk:g.TRIANGLE};!function(t){t.TICK="TICK",t.SET_VK="SET_VK",t.SET_PLAY="SET_PLAY"}(k||(k={}));var T=function(t,e){switch(e.type){case k.TICK:var n=e.payload;return d({},t,{lanes:t.lanes.map(function(t){var e=t.cars.map(function(e){return e+n*t.v});return e[0]>t.s&&e.unshift(e[0]-t.s),e[e.length-1]>140&&e.pop(),d({},t,{cars:e})})});case k.SET_VK:return d({},t,{vk:e.payload,lanes:S(e.payload)});case k.SET_PLAY:return d({},t,{play:e.payload});default:return t}},I=a.a.createContext({state:N,dispatch:null}),L=n(30),C=n(16),M=n(140),P=n(32),R=n.n(P),K=(n(61),n(28));function D(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=Object(K.a)(function(t){return Object(L.a)().range([t,0]).domain([0,1.2*u])}),_=Object(K.a)(function(t){return Object(L.a)().range([t,0]).domain([0,137.5])}),z=Object(K.a)(function(t){return Object(L.a)().range([0,t]).domain([0,f+.008])}),Y=25,W=30,H=20,V=90,B="translate(".concat(H,",").concat(Y,")"),F=Object(r.memo)(function(t){var e=t.height,n=t.className,a=t.width;return Object(r.createElement)("path",{className:n,strokeWidth:a,d:"M0,0L0,".concat(e)})}),J=Object(r.memo)(function(t){var e=t.mathClass,n=t.height,r=t.width;return a.a.createElement("g",{transform:"translate(0,".concat(n,")")},a.a.createElement("path",{d:"M0,0L".concat(r,",0"),fill:"none",stroke:"black",markerEnd:"url(#arrow)"}),a.a.createElement("foreignObject",{width:"90",height:"75",transform:"translate(".concat(r+10,",-10)")},a.a.createElement("span",{className:e},a.a.createElement(R.a,{math:"k \\; \\text{(veh/km)}"}))))}),q=Object(r.memo)(function(t){var e=t.mathClass,n=t.height;return a.a.createElement("g",null,a.a.createElement("path",{d:"M0,0L0,".concat(n),fill:"none",stroke:"black",markerEnd:"url(#arrow)",markerStart:"url(#arrow)"}),a.a.createElement("foreignObject",{width:"90",height:"75",transform:"translate(-10,-25)"},a.a.createElement("span",{className:e},a.a.createElement(R.a,{math:"v \\; \\text{(km/hr)}"}))))}),U=function(t){var e=t.width,n=t.height,o=Object(r.useContext)(I).state,c=A[o.vk],i=G(n),l=z(e),u=_(n),s=D(Object(r.useMemo)(function(){return[n-u(m),n-u(2.5),n-u(1),a.a.createElement("mask",{id:"myMask"},a.a.createElement("rect",{width:e,height:n,fill:"white"}))]},[e,n]),4),h=s[0],p=s[1],d=s[2],y=s[3],E=Q({width:e+V+H,height:n+Y+W}),g=Object(r.useMemo)(function(){return O(70).map(function(t,e,n){return t/(n.length-1)*f}).reduce(function(t,e){return t+l(e)+","+i(c(e))+" "},"M")},[l,i]);return a.a.createElement("svg",{className:E.svg},a.a.createElement("g",{transform:B},a.a.createElement(q,{height:n,mathClass:E.math}),a.a.createElement(J,{height:n,width:e,mathClass:E.math}),y,a.a.createElement("g",{mask:"url(#myMask)"},o.lanes.map(function(t,e){return a.a.createElement("g",{key:t.k,transform:"translate(".concat(l(t.k),",0)")},a.a.createElement(F,{className:E.road,width:h,height:n}),t.cars.map(function(t,e){return a.a.createElement("rect",{key:e,className:E.car,y:u(t),x:-d/2,height:p,width:d})}))}),a.a.createElement("path",{className:E.path,d:g}))))},Q=Object(M.a)({math:{fontSize:"12px"},path:{strokeWidth:"4px",fill:"none",stroke:C.a.lightBlue.A700,opacity:.7},road:{stroke:C.a.grey[300]},car:{fill:C.a.purple.A200,rx:1,ry:1,stroke:"none"},svg:function(t){return{width:t.width,height:t.height,display:"block","& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}}},text:{textAlign:"center",fontSize:"10px"}}),X=n(257),Z=Object(X.a)({"@global":{body:{margin:"0 !important",padding:"0 !important",fontFamily:" 'Puritan', sans-serif"}},main:{maxWidth:"900px",color:C.a.grey[800],margin:"0 auto",boxSizing:"border-box",display:"flex",flexDirection:"column"},red:{fill:C.a.red.A400},paper:{maxWidth:"500px",margin:"auto",display:"flex",padding:"20px",flexDirection:"row",alignItems:"center"},button:{margin:"5px"},visContainer:{margin:"0 auto"},sliderContainer:{width:"300px",padding:"20px",boxSizing:"border-box"}});function $(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var tt={},et=600/s,nt=function(){var t=Object(r.useContext)(I),e=t.state,n=t.dispatch,o=e.play,u=Z(tt);return function(t,e){var n=Object(r.useRef)(0);n.current=t,Object(r.useLayoutEffect)(function(){if(e){var t=0,r=Object(l.a)(function(e){var r=(e-t)/1e3;t=e,n.current&&n.current(r)});return function(){return r.stop()}}},[e])}(function(t){t/=.5,n({type:k.TICK,payload:Math.min(t,.05)})},o),a.a.createElement("div",{className:u.main},a.a.createElement(i.a,{className:u.paper,elevation:2},a.a.createElement(c.a,{className:u.button,variant:"contained",color:"secondary",onClick:function(){return n({type:k.SET_PLAY,payload:!o})}},o?"PAUSE":"PLAY")),a.a.createElement(U,{height:et,width:600}))},rt=n(260),at=n(46),ot=n(44),ct=n.n(ot),it=n(45),lt=n.n(it),ut=document.getElementById("root");if(!ut)throw Error("no root container");var st=Object(at.a)({palette:{primary:{main:ct.a[500]},secondary:{main:lt.a[500]}}});Object(o.render)(a.a.createElement(rt.a,{theme:st},a.a.createElement(function(){var t=$(Object(r.useReducer)(T,N),2),e=t[0],n=t[1];return a.a.createElement(I.Provider,{value:{state:e,dispatch:n}},a.a.createElement(nt,null))},null)),ut)}},[[138,1,2]]]);