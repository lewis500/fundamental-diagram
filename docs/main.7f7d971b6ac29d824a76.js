(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),i=a(152),o=a(151),l=a(40),u=8e4/3600,s=(1+Math.sqrt(5))/2,m=1*s*2.5,f=1/(2.5*s),d=f/3,h=u*d;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach(function(t){g(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v,b=f,x=h/(f-d),k=d,w=Math.min,O=Math.max,S=function(e){return y(Array(e).keys())};!function(e){e.TRIANGLE="TRIANGLE",e.GREENSHIELDS="GREENSHIELDS",e.DRAKE="DRAKE"}(v||(v={}));var j,A=S(21).map(function(e,t){return(t+1)/21*b}),L={TRIANGLE:function(e){return O(w(22.22222222222222,x*(b/e-1)),0)},GREENSHIELDS:function(e){return O(0,22.22222222222222*(1-e/b))},DRAKE:function(e){return O(0,22.22222222222222*Math.exp(-Math.pow(e/k,2)/2))}},T=function(e){return A.map(function(t){return{k:t,s:1/t,v:L[e](t),cars:S(Math.round(140*t)).map(function(e){return e/t})}})},M={play:!1,lanes:T(v.TRIANGLE),vk:v.TRIANGLE};!function(e){e.TICK="TICK",e.SET_VK="SET_VK",e.SET_PLAY="SET_PLAY"}(j||(j={}));var N=function(e,t){switch(t.type){case j.TICK:var a=t.payload;return E({},e,{lanes:e.lanes.map(function(e){var t=e.cars.map(function(t){return t+a*e.v});return t[0]>e.s&&t.unshift(t[0]-e.s),t[t.length-1]>140&&t.pop(),E({},e,{cars:t})})});case j.SET_VK:return E({},e,{vk:t.payload,lanes:T(t.payload)});case j.SET_PLAY:return E({},e,{play:t.payload});default:return e}},I=n.a.createContext({state:M,dispatch:null}),R=a(14),P=a(149),D=a(27),C=a(150),K=a(154),_=a(21),G=a(34),z=a.n(G),W=(a(51),{fontSize:"12px"}),H=n.a.memo(function(e){var t=e.dx,a=e.dy,r=e.latexstring;return n.a.createElement("foreignObject",{width:"90",height:"75",transform:"translate(".concat(t,", ").concat(a,")")},n.a.createElement("span",{style:W},n.a.createElement(z.a,{math:r})))}),V=25,q=30,Y=20,F=90,J="translate(".concat(Y,",").concat(V,")"),B=Object(_.a)(function(e,t,a){var n=Object(R.a)().range([t,0]).domain([0,1.2*u]),c=Object(R.a)().range([t,0]).domain([0,137.5]),i=Object(R.a)().range([0,e]).domain([0,f+.008]),o=t-c(2.5),l=t-c(1),s=Object(r.createElement)("path",{className:a.road,strokeWidth:t-c(m),d:"M0,0L0,".concat(t)});return{vScale:n,xScale:c,kScale:i,carLength:o,carWidth:l,Road:s}}),U=function(e){var t=e.width,a=e.height,c=Object(r.useContext)(I).state,i=L[c.vk],o=Q({width:t+F+Y,height:a+V+q}),l=B(t,a,o),s=l.vScale,m=l.xScale,h=l.kScale,p=l.carLength,E=l.carWidth,g=l.Road,y=Object(r.useMemo)(function(){return Object(r.createElement)("path",{className:o.path,d:S(70).map(function(e,t,a){return e/(a.length-1)*f}).reduce(function(e,t){return e+h(t)+","+s(i(t))+" "},"M")})},[h,s,i]);return n.a.createElement("svg",{className:o.svg},n.a.createElement("g",{transform:J},n.a.createElement("mask",{id:"myMask"},n.a.createElement("rect",{width:t,height:a,fill:"white"})),n.a.createElement("g",{mask:"url(#myMask)"},c.lanes.map(function(e,t){return n.a.createElement("g",{key:e.k,transform:"translate(".concat(h(e.k),",0)")},g,e.cars.map(function(e,t){return n.a.createElement("rect",{key:t,className:o.car,y:m(e),x:-E/2,height:p,width:E})}))}),y),n.a.createElement("g",{id:"vaxis"},n.a.createElement("path",{d:"M0,0L0,".concat(a),fill:"none",stroke:"black",markerEnd:"url(#arrow)",markerStart:"url(#arrow)"}),n.a.createElement(H,{dx:-20,dy:s(u)-10,latexstring:"v_f"}),n.a.createElement(H,{dx:-10,dy:-25,latexstring:"v \\; \\text{(km/hr)}"})),n.a.createElement("g",{transform:"translate(0,".concat(a,")"),id:"kaxis"},n.a.createElement("path",{d:"M0,0L".concat(t,",0"),fill:"none",stroke:"black",markerEnd:"url(#arrow)"}),n.a.createElement(H,{dx:h(c.vk===v.GREENSHIELDS?f/2:d)-4,dy:0,latexstring:"k_0"}),n.a.createElement(H,{dx:h(f)-4,dy:0,latexstring:"k_j"}),n.a.createElement(H,{dx:t+10,dy:-10,latexstring:"k \\; \\text{(veh/km)}"}))))},Q=Object(K.a)({path:{strokeWidth:"4px",fill:"none",stroke:P.a.A700,opacity:.8},road:{stroke:D.a[300]},car:{fill:C.a.A200,rx:1,ry:1,stroke:"none"},svg:function(e){return{width:e.width,height:e.height,display:"block","& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}}},text:{textAlign:"center",fontSize:"10px"}});function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Z=function(e){return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}};var $={top:25,bottom:30,left:20,right:90},ee="translate(".concat($.left,",").concat($.top,")"),te=Object(r.memo)(function(e){var t=e.height,a=e.width,r=e.children;return n.a.createElement("g",{transform:"translate(0,".concat(t,")")},n.a.createElement("path",{d:"M0,0L".concat(a,",0"),fill:"none",stroke:"black",markerEnd:"url(#arrow)"}),r)}),ae=Object(r.memo)(function(e){var t=e.height,a=e.children;return n.a.createElement("g",null,n.a.createElement("path",{d:"M0,0L0,".concat(t),fill:"none",stroke:"black",markerEnd:"url(#arrow)",markerStart:"url(#arrow)"}),a)}),re=Object(_.a)(function(e,t){return console.log(e),{qScale:Object(R.a)().range([t,0]).domain([0,1.2*h]),kScale:Object(R.a)().range([0,e]).domain([0,f+.008])}});function ne(e){var t=e.width,a=e.height;return{width:Math.max(t-$.left-$.right,0),height:Math.max(a-$.top-$.bottom,0)}}var ce={},ie=function(){var e,t,a,c,i,o,l=Object(r.useContext)(I).state,u=Object(r.useRef)(),s=(e=u,t=ne,a=X(Object(r.useState)(Z(e?e.current:null)),2),c=a[0],i=a[1],o=Object(r.useCallback)(function(){return e.current&&i(Z(e.current))},[e]),Object(r.useLayoutEffect)(function(){if(e.current)return o(),window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[e.current]),t?t(c):c),m=s.width,p=s.height,E=L[l.vk],g=oe(ce),y=re(m,p),b=y.qScale,x=y.kScale,k=Object(r.useMemo)(function(){return S(70).map(function(e,t,a){return e/(a.length-1)*f}).reduce(function(e,t){return e+x(t)+","+b(t*E(t))+" "},"M")},[x,b,E]);return n.a.createElement("div",{ref:u,className:g.container},n.a.createElement("svg",{className:g.svg},n.a.createElement("g",{transform:ee},n.a.createElement("mask",{id:"myMask2"},n.a.createElement("rect",{width:m,height:p,fill:"white"})),n.a.createElement("path",{mask:"url(#myMask2)",className:g.path,d:k}),n.a.createElement(ae,{height:p},n.a.createElement(H,{dx:-20,dy:b(h)-10,latexstring:"q_0"}),n.a.createElement(H,{dx:-10,dy:-25,latexstring:"q \\; \\text{(veh/hr)}"})),n.a.createElement(te,{height:p,width:m},n.a.createElement(H,{dx:x(l.vk===v.GREENSHIELDS?f/2:d)-4,dy:0,latexstring:"k_0"}),n.a.createElement(H,{dx:x(f)-4,dy:0,latexstring:"k_j"}),n.a.createElement(H,{dx:m+10,dy:-10,latexstring:"k \\; \\text{(veh/km)}"})))))},oe=Object(K.a)({path:{strokeWidth:"4px",fill:"none",stroke:P.a.A700,opacity:.8},container:{position:"relative",width:"100%",height:"300px"},svg:{width:"100%",height:"100%","& text":{fontFamily:"Puritan, san-serif",fontSize:"11px"}},text:{textAlign:"center",fontSize:"10px"}}),le=a(28),ue=Object(K.a)({"@global":{body:{margin:"0 !important",padding:"0 !important",fontFamily:" 'Puritan', sans-serif"}},main:{maxWidth:"900px",color:D.a[800],margin:"0 auto",boxSizing:"border-box",display:"flex",flexDirection:"column"},red:{fill:le.a.A400},paper:{maxWidth:"500px",margin:"auto",display:"flex",padding:"20px",flexDirection:"row",alignItems:"center"},button:{margin:"5px"},visContainer:{margin:"0 auto"},sliderContainer:{width:"300px",padding:"20px",boxSizing:"border-box"}}),se=a(156),me=a(155),fe=a(157);function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var he=n.a.memo(function(e){var t=e.changeVK,a=e.vk;return n.a.createElement(fe.a,{row:!0,"aria-label":"Fundamental Diagram",name:"fd",value:a,onChange:t},n.a.createElement(se.a,{value:v.TRIANGLE,control:n.a.createElement(me.a,null),label:"Triangle"}),n.a.createElement(se.a,{value:v.GREENSHIELDS,control:n.a.createElement(me.a,null),label:"Greenshields"}),n.a.createElement(se.a,{value:v.DRAKE,control:n.a.createElement(me.a,null),label:"Drake"}))}),pe={},Ee=600/s,ge=function(){var e=Object(r.useContext)(I),t=e.state,a=e.dispatch,c=t.play,u=ue(pe);!function(e,t){var a=Object(r.useRef)(0);a.current=e,Object(r.useLayoutEffect)(function(){if(t){var e=0,r=Object(l.a)(function(t){var r=(t-e)/1e3;e=t,a.current&&a.current(r)});return function(){return r.stop()}}},[t])}(function(e){e/=.5,a({type:j.TICK,payload:Math.min(e,.05)})},c);var s=Object(r.useCallback)(function(e){var t=e.currentTarget.value;a({type:j.SET_VK,payload:t})},[]);return n.a.createElement("div",{className:u.main},n.a.createElement(o.a,{className:u.paper,elevation:2},n.a.createElement(i.a,{className:u.button,variant:"contained",color:"secondary",onClick:function(){return a({type:j.SET_PLAY,payload:!c})}},c?"PAUSE":"PLAY"),n.a.createElement(he,{changeVK:s,vk:t.vk})),n.a.createElement(U,{height:Ee,width:600}),n.a.createElement(ie,null))},ye=a(153),ve=a(39),be=a(37),xe=a.n(be),ke=a(38),we=a.n(ke),Oe=document.getElementById("root");if(!Oe)throw Error("no root container");var Se=Object(ve.a)({palette:{primary:{main:xe.a[500]},secondary:{main:we.a[500]}}});Object(c.render)(n.a.createElement(ye.a,{theme:Se},n.a.createElement(function(){var e=de(Object(r.useReducer)(N,M),2),t=e[0],a=e[1];return n.a.createElement(I.Provider,{value:{state:t,dispatch:a}},n.a.createElement(ge,null))},null)),Oe)}},[[127,1,2]]]);