(this.webpackJsonprtasksmui=this.webpackJsonprtasksmui||[]).push([[0],{113:function(e,t,a){e.exports=a(135)},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(37),o=a(9),u=a(217),s=a(216),m=a(218),d=a(219),f=a(185),g=a(102),p=a(174),E=a(222),b=a(136),h=a(30),v=a(17),O=window.location.origin.match(/github\.io/gi)?"/rtasksmui":"",j={MAIN:{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",component:null,comment:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0430 \u043a\u043e\u0442\u0438\u043a\u0430\u0445 - 2. React (hooks) - CRA + Material UI-4x, chart.js, React-DnD, hookrouter",href:O+"/"},FIGURES:{title:"Figures",component:"AppFigures",comment:"React DnD",href:O+"/figures"},IT:{title:"IT-Chart",component:"AppIt",comment:'"\u0415\u0441\u0442\u044c \u043b\u0438 \u0436\u0438\u0437\u043d\u044c \u0432 \u0418\u0422?" - \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u043f\u043e \u0434\u0430\u043d\u043d\u044b\u043c \u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439/\u0440\u0435\u0437\u044e\u043c\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 "\u041c\u043e\u0439 \u043a\u0440\u0443\u0433" (\u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043d\u0438 \u043e\u0441\u0435\u043d\u0438 2019)',href:O+"/it"}},y=Object(v.a)(Object.keys(j).map((function(e){return j[e]}))),k=O+"/data/it.json",x=[5,10,15,50],S={date:"\u0434\u0430\u0442\u0430",total:"\u0432\u0441\u0435\u0433\u043e",remote:"\u0443\u0434\u0430\u043b\u0435\u043d\u043a\u0430",resume:"\u0440\u0435\u0437\u044e\u043c\u0435"},w=["date","total","remote","resume"],C={date:"\u0414\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u0438 \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439",total:'\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 "\u0412\u0441\u0435\u0433\u043e \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c >=0',remote:'\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 "\u0423\u0434\u0430\u043b\u0435\u043d\u043a\u0430" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c >=0',resume:'\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 "\u0420\u0435\u0437\u044e\u043c\u0435" \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c >=0'},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{color:"primary"},"IT-CHART"),r.a.createElement(g.a,{variant:"caption"},"IT-CHART - \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0438. \u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 json-\u0444\u0430\u0439\u043b\u0430. \u041a\u0440\u043e\u043c\u0435 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u043c \u0432 LocalStorage. \u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438 \u0443\u0434\u0430\u043b\u044f\u0442\u044c."),r.a.createElement(g.a,{variant:"caption"},"\u0427\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438. \u041f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0442\u043e\u0447\u043a\u0443 \u0433\u0440\u0430\u0444\u0438\u043a\u0430 - \u0432\u044b\u0432\u044b\u043e\u0434\u044f\u0442\u0441\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u043e \u0432\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0435."),r.a.createElement(p.a,null),r.a.createElement(g.a,{color:"primary"},"FIGURES"),r.a.createElement(g.a,{variant:"caption"},"FIGURES - \u043f\u0440\u043e\u0441\u0442\u043e \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u0441 drag-and-drop \u0438 MUI"))},I=a(179),z="square",D="rectangle",N=" FIGURE",R=[{xs:12,sm:4},{xs:12,sm:4},{xs:12,sm:4},{xs:6,sm:3},{xs:6,sm:3},{xs:6,sm:3},{xs:6,sm:3}],P=a(180),A=a(230),L=a(100),M=a(67),W=a(175),T=a(176),H=a(66),B="rgba(89, 105, 141, 1)",U=M.a[100],G=M.a[800],Y=Object(L.a)({palette:{primary:{main:B},secondary:{main:W.a[200]},error:{main:G},contrastThreshold:3,tonalOffset:.2},fontFamily:["-apple-system","BlinkMacSystemFont","Arial","sans-serif"].join(","),typography:{h1:{fontSize:24,color:B,fontWeight:"bold"},h2:{fontSize:20,color:B,fontWeight:"bold",padding:"0.5em"}}}),q=[W.a[200],T.a[100],W.a[500],T.a[200],B,H.a[100],H.a[200]],J=function(e){var t=e.width,a=void 0===t?70:t,n=e.height,l=void 0===n?70:n,c=e.color,u=void 0===c?"rgba(122, 144, 244, 0.2)":c,s=e.title,m=void 0===s?"\u041d\u043e\u0432\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442. \u041d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0442\u043a\u0443.":s,d=(e.isDragging,e.id),f=void 0===d?null:d,g=Object(i.c)({item:{type:N,id:f},collect:function(e){return{opacity:e.isDragging()?.2:1}}}),p=Object(o.a)(g,2)[1];return r.a.createElement(A.a,{title:m},r.a.createElement(b.a,{ref:p,className:"draggable",style:{width:70*a/l,height:70,backgroundColor:u,cursor:"pointer"}}))},V=function(e){var t=e.classes,a=void 0===t?{}:t,n=e.cell,l=e.fixed,c=e.addFixed,u=e.ind,s=Object(i.d)({accept:N,drop:function(e){l[u]||c(u,e.id)}}),m=Object(o.a)(s,2)[1];return r.a.createElement(I.a,{className:a.cell,item:!0,xs:n.xs,sm:n.sm,key:u,ref:m},r.a.createElement(b.a,{className:a.paper},l[u]?r.a.createElement(J,Object.assign({classes:a},l[u],{id:u,title:"\u0424\u0438\u0433\u0443\u0440\u0430 \u0438\u0437 \u044f\u0447\u0435\u0439\u043a\u0438 \u2116 ".concat(u+1,": ").concat(l[u].type||"")})):r.a.createElement(P.a,{height:70,variant:"rect"})))},_=a(92),$=Object(_.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(1),marginTop:e.spacing(2),backgroundColor:"rgba(242, 242, 242, 0.3)"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,display:"flex",justifyContent:"center",alignItems:"center"},cell:{alignItems:"stretch"}}})),K=function(e){var t=e.fixed,a=void 0===t?[]:t,n=e.addFixed,l=$();return r.a.createElement("div",{className:l.root},r.a.createElement(g.a,{variant:"h2"},"\u0421\u0435\u0442\u043a\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0444\u0438\u0433\u0443\u0440"),r.a.createElement(I.a,{container:!0,spacing:3},R.map((function(e,t){return r.a.createElement(V,{key:t,classes:l,cell:e,fixed:a,addFixed:n,ind:t})}))),r.a.createElement(g.a,{variant:"caption"},"\u0424\u0438\u0433\u0443\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c \u0432 \u043f\u0443\u0441\u0442\u044b\u0435 \u044f\u0447\u0435\u0439\u043a\u0438 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))},Q=a(182),X=a(137),Z=function(e){var t=e.onBoard,a=void 0!==t&&t,n="\u0421\u044e\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d "+(a?"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u043d\u044b\u0439":"\u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439")+" \u044d\u043b\u0435\u043c\u0435\u043d\u0442",l={style:{width:70,height:70,backgroundColor:"white"}};return r.a.createElement(A.a,{title:n||"?"},a?r.a.createElement("div",l):r.a.createElement(b.a,l))},ee=a(181),te=a(93),ae=a.n(te),ne=function(e){var t=e.classes,a=e.deleteFigure,n=e.deleteFixed,l=Object(i.d)({accept:N,drop:function(e){n(e.id)}}),c=Object(o.a)(l,2)[1];return r.a.createElement(A.a,{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442"},r.a.createElement(ee.a,{className:t.bin,onClick:a,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442",ref:c},r.a.createElement(ae.a,{fontSize:"large",color:"primary"})))},re=a(94),le=function(){return Array.isArray(q)&&q.length>0?Object(re.sample)(q):"rgba(122, 144, 244, 0.2)"},ce=function(e){var t=e.classes,a=void 0===t?{}:t,n=e.last,l=void 0===n?null:n,c=e.setLast,i=e.deleteFigure,o=e.deleteFixed;return r.a.createElement(b.a,{className:a.paper},r.a.createElement(Q.a,{className:a.btnGroup,variant:"contained",color:"primary","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0444\u0438\u0433\u0443\u0440"},r.a.createElement(X.a,{className:a.btn,onClick:function(){c({width:70,height:70,color:le(),type:z})},title:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043a\u0432\u0430\u0434\u0440\u0430\u0442 \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0432\u0430\u0434\u0440\u0430\u0442"),r.a.createElement(X.a,{className:a.btn,onClick:function(){c({width:140,height:70,color:le(),type:D})},title:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a \u0434\u043b\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a")),r.a.createElement("div",{className:a.wrapper},l?r.a.createElement(J,l):r.a.createElement(Z,null),r.a.createElement(ne,{classes:a,deleteFigure:i,deleteFixed:o})))},ie=Object(_.a)((function(e){return{app:{textAlign:"center",padding:e.spacing(2),display:"flex",flexDirection:"column",minHeight:"100vh"},paper:{padding:e.spacing(1),width:"auto"},paperMain:{width:"100%",flexGrow:1},btn:{margin:e.spacing(1)},bin:{marginLeft:e.spacing(3)},grid:{display:"flex",flexWrap:"wrap",padding:e.spacing(1),marginTop:e.spacing(2),minHeight:"".concat(70,"px"),border:"1px solid lightgrey"},wrapper:{minHeight:"".concat(70,"px"),display:"flex",justifyContent:"center",backgroundColor:"rgba(242, 242, 242, 0.3)",padding:e.spacing(2),marginBottom:e.spacing(2)},btnGroup:{margin:e.spacing(1)},firstButton:{marginLeft:"auto"},active:{textDecoration:"none",color:U},normal:{textDecoration:"none",color:"white"}}})),oe=function(){var e=ie(),t=Object(n.useState)(null),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(R.map((function(e){return null}))),u=Object(o.a)(i,2),s=u[0],m=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043e\u0432 \u0438 \u043f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432"),r.a.createElement(ce,{classes:e,last:l,setLast:c,deleteFigure:function(){c(null)},deleteFixed:function(e){"object"!==typeof e&&e?m(s.map((function(t,a){return a===e?null:t}))):!e&&l&&c(null)}}),r.a.createElement(K,{fixed:s,addFixed:function(e,t){if("object"!==typeof t){var a=Object.assign({},s[t],{id:e}),n=s.map((function(e,a){return a===t?null:e}));n[e]=Object.assign({},a),m(n)}else l&&(m(s.map((function(a,n){return n===e?Object.assign({},l,{id:t}):a}))),c(null))}}))},ue=a(220),se=a(215),me=a(229),de=a(97),fe=a.n(de),ge=a(95),pe=["rgba(109, 138, 224, 0.2)","rgba(63, 81, 181, 0.5)","rgba(58, 226, 103, 0.2)","rgba(217, 217, 194, 0.2)","rgba(89, 105, 141, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 99, 132, 0.2)","rgba(175, 38, 255, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],Ee="simpleChart",be=270,he=100,ve=function(e){var t=e.split("-");return 3===t.length?t[2]+"."+t[1]+"."+t[0]:""},Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:S;return t[e]?t[e]:e},je=function(e,t){var a=[];return t.forEach((function(t,n){a.push({label:Oe(t),data:e?e.map((function(e){return e[t]})):[],opacity:0===n?.5:1,backgroundColor:pe[n]?pe[n]:B})})),a},ye=function(e){return{maintainAspectRatio:!0,pointHoverRadius:10,scales:{yAxes:[{ticks:{min:e}}]}}},ke=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=je(e,t),r={labels:e?e.map((function(t){return e.length>5?"":[ve(t.date)+":",t.resume,"\u0440\u0435\u0437\u044e\u043c\u0435"]})):[],datasets:n};return{data:r,type:"line",options:ye(a)}},xe=new Intl.NumberFormat("ru-RU"),Se=function(e){var t=e.chart,a=e.setChart,l=e.data,c=void 0===l?[]:l,i=e.chartTitle,o=e.chartFooter,u=e.onLegendClick,s=e.minY,m=void 0===s?0:s,d=Object(n.useRef)(null);return Object(n.useEffect)((function(){!function(){if(!t){var e=d.current.getContext("2d");a(new ge.Chart(e,c))}}()}),[t,a,c]),Object(n.useEffect)((function(){t&&(t.data.labels=Object(v.a)(c.data.labels),t.data.datasets=Object(v.a)(c.data.datasets),t.options=ye(m),t.update())}),[t,c,m,a]),Object(n.useEffect)((function(){t&&!t.options.onClick&&(t.options.onClick=function(e,t){t&&t.length>=0&&t[0]&&u(parseInt(t[0]._index,10))})}),[u,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{variant:"h6"},i),r.a.createElement("canvas",{ref:d,id:Ee,width:be,height:he}),r.a.createElement(p.a,null),r.a.createElement(g.a,null,o))},we=a(225),Ce=a(96),Fe=a.n(Ce),Ie=a(183),ze=Object(_.a)((function(e){return{close:{padding:e.spacing(.5)},snack:{backgroundColor:Ie.a[700]}}})),De=function(e){var t=e.open,a=e.message,n=e.onSnackClose,l=ze();return r.a.createElement(we.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:7e3,onClose:n,ContentProps:{"aria-describedby":"message-id",className:l.snack},message:a,action:[r.a.createElement(ee.a,{key:"close","aria-label":"close",color:"inherit",className:l.close,onClick:n},r.a.createElement(Fe.a,null))]})},Ne=function(e){var t=e.data,a=e.columns,l=e.chartTitle,c=void 0===l?"\u0413\u0440\u0430\u0444\u0438\u043a":l,i=e.minY,u=void 0===i?0:i,s=Object(n.useState)(null),m=Object(o.a)(s,2),d=m[0],f=m[1],E=Object(n.useState)(null),b=Object(o.a)(E,2),h=b[0],v=b[1],O=Object(n.useState)(0),j=Object(o.a)(O,2),y=j[0],k=j[1],S=Object(n.useState)(5),w=Object(o.a)(S,2),C=w[0],F=w[1],I=Object(n.useState)(ke(t.slice(y*C,y*C+C),a,u)),z=Object(o.a)(I,2),D=z[0],N=z[1];Object(n.useEffect)((function(){N(ke(t.slice(y*C,y*C+C),a,u))}),[t,y,C,N,a,u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{chart:h,setChart:v,data:D,minY:u,chartTitle:c,chartFooter:"",onLegendClick:function(e){var a;f(t[e]?(a=t[e])?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,"\u041d\u0430 ",a.date," \u0431\u044b\u043b\u043e \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439: ",xe.format(a.total)),r.a.createElement(g.a,null,"\u0418\u0437 \u043d\u0438\u0445 \u0441 \u0432\u043e\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e: ",a.remote),r.a.createElement(p.a,null),r.a.createElement(g.a,null,"\u0418 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0436\u0443\u0442\u043a\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0437\u044e\u043c\u0435: ",xe.format(a.resume)),r.a.createElement(fe.a,null)):null:null)},hidden:!1}),r.a.createElement(De,{open:!!d,message:d,onSnackClose:function(e,t){t&&"clickaway"===t||f(null)}}),r.a.createElement(g.a,{variant:"caption"},"\u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0443\u0436\u043d\u043e \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043f\u043e \u043d\u0435\u0439 \u043c\u044b\u0448\u044c\u044e"),r.a.createElement(me.a,{size:"small",rowsPerPageOptions:x,labelRowsPerPage:"\u0422\u043e\u0447\u0435\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443:",component:"div",count:t.length,rowsPerPage:C,page:y,onChangePage:function(e,t){k(t)},onChangeRowsPerPage:function(e){F(+e.target.value),k(0)}}))},Re=a(206),Pe=a(207),Ae=a(208),Le=a(184),Me=a(209),We=function(e){var t=e.actions;return t?Object.keys(t).map((function(e){return r.a.createElement(Le.a,{key:"action-"+e})})):null},Te=a(188),He=a(189),Be=a(190),Ue=a(191),Ge=a(192),Ye=a(193),qe=a(194),Je=a(195),Ve=a(196),_e=a(197),$e=a(198),Ke=a(199),Qe=a(200),Xe=a(201),Ze=a(202),et=a(203),tt=a(204),at=a(205),nt=function(e){var t=e.icon,a=e.iconSize,n=void 0===a?"small":a;switch(t){case"Menu":return r.a.createElement(Te.a,{fontSize:n});case"Home":return r.a.createElement(He.a,{fontSize:n});case"Settings":return r.a.createElement(Be.a,{fontSize:n});case"Search":return r.a.createElement(Ue.a,{fontSize:n});case"Sky":return r.a.createElement(Ge.a,{fontSize:n});case"Info":return r.a.createElement(Ye.a,{fontSize:n});case"More":return r.a.createElement(qe.a,{fontSize:n});case"Help":return r.a.createElement(Je.a,{fontSize:n});case"On":return r.a.createElement(Ve.a,{fontSize:n});case"Off":return r.a.createElement(_e.a,{fontSize:n});case"Playlist":return r.a.createElement($e.a,{fontSize:n});case"PlaylistAdd":return r.a.createElement(Ke.a,{fontSize:n});case"List":return r.a.createElement(Qe.a,{fontSize:n});case"Close":return r.a.createElement(Xe.a,{fontSize:n});case"Paw":return r.a.createElement(Ze.a,{fontSize:n});case"SelectList":return r.a.createElement(et.a,{fontSize:n});case"Delete":return r.a.createElement(tt.a,{fontSize:n});case"Edit":return r.a.createElement(at.a,{fontSize:n})}return null},rt=function(e){var t=e.actions,a=e.rowInd;return t?Object.keys(t).map((function(e){return r.a.createElement(Le.a,{key:a+"-"+e,title:t[e].title},r.a.createElement(X.a,{onClick:function(){return function(e,t,a){e[t].onCallback&&e[t].onCallback(a)}(t,e,a)}},t[e].icon?r.a.createElement(nt,{icon:t[e].icon}):t[e].title||""))})):null},lt=function(e,t,a){return function(e){return"number"===typeof e}(n=e[t]||("id"===t?a+1:""))?xe.format(n):n;var n},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return e[t]?e[t]:"left"},it=function(e,t){return t&&e[t]?t+" : "+e[t]:""},ot=function(e){var t=e.data,a=e.columns,l=e.rowsLimit,c=void 0===l?10:l,i=e.size,u=void 0===i?"small":i,s=e.maxWidth,m=void 0===s?"100%":s,d=e.hoverField,f=void 0===d?null:d,g=e.actions,p=void 0===g?null:g,E=e.aligns,h=void 0===E?{}:E,O=Object(_.a)({root:{padding:Y.spacing(1),maxWidth:"100%"},tableWrapper:{maxHeight:"90vh",overflowY:"auto"}}),j=Object(n.useState)(0),y=Object(o.a)(j,2),k=y[0],S=y[1],w=Object(n.useState)(c),C=Object(o.a)(w,2),F=C[0],I=C[1];return r.a.createElement("div",{style:{maxWidth:m}},r.a.createElement(b.a,{className:O.root},r.a.createElement("div",{className:O.tableWrapper},r.a.createElement(Re.a,{stickyHeader:!0,"aria-label":"\u0442\u0430\u0431\u043b\u0438\u0446\u0430",size:u},r.a.createElement(Pe.a,null,r.a.createElement(Ae.a,null,a.map((function(e,t){return r.a.createElement(Le.a,{key:t,align:ct(h,e)},Oe(e))})),r.a.createElement(We,{actions:p}))),r.a.createElement(Me.a,null,t.slice(k*F,k*F+F).map((function(e,t){return r.a.createElement(Ae.a,{key:t,title:it(e,f)},a.map((function(a,n){return r.a.createElement(Le.a,{key:t+"_"+n,align:ct(h,a)},lt(e,a,t+F*k))})),r.a.createElement(rt,{actions:p,rowInd:t+F*k}))})))),r.a.createElement(me.a,{className:O.selectRoot,size:"small",rowsPerPageOptions:[].concat(Object(v.a)(x),[-1]),labelRowsPerPage:"\u0421\u0442\u0440\u043e\u043a \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443:",component:"div",count:t.length,rowsPerPage:F,page:k,onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){I(+e.target.value),S(0)}}))))},ut=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot,{data:t,columns:["date","total","remote","resume"],aligns:{total:"right",remote:"right",resume:"right"},rowsLimit:10,size:"small"}))},st=a(214),mt=a(226),dt=a(210),ft=a(211),gt=a(212),pt=a(213),Et=a(21),bt=a(78),ht=a(98),vt=a(223),Ot=function(){return(localStorage.getItem("rtasksmui")?JSON.parse(localStorage.getItem("rtasksmui")):[]).filter((function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;return t.every((function(t){return e[t]}))}(e)}))},jt=function(e){var t=null;try{localStorage.setItem("rtasksmui",JSON.stringify(e.filter((function(e){return e.fromLS}))))}catch(a){t=a.message}return t},yt=r.a.createContext([]),kt=function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()},xt=function(e,t,a){return function(e){return e&&Array.isArray(e)&&e.length>0}(e)&&function(e,t){return e>=0&&e<t.length}(t,e)&&e[t][a]||""},St=function(e,t){return!(!e||!e[t])},wt=function(e){var t=e.edited,a=void 0===t?null:t,l=e.onDialogClose,c=Object(ht.a)(),i=c.register,o=c.handleSubmit,u=c.errors,s=Object(n.useContext)(yt),m=s.lsData,d=s.setLsData;return r.a.createElement("form",{onSubmit:o((function(e){var t=a?function(e,t){var a=Object(v.a)(m);return a[t.index]=Object(bt.a)({},e,Object(Et.a)({},"fromLS",!0)),a}(e,a):function(e){return[].concat(Object(v.a)(m),[Object(bt.a)({},e,Object(Et.a)({},"fromLS",!0))])}(e);d(t),jt(t),l()}))},r.a.createElement(vt.a,{name:"date",inputRef:i({required:!0}),error:St(u,"date"),defaultValue:a?xt(m,a.index,"date"):kt(),margin:"dense",id:"date",type:"date",fullWidth:!0}),r.a.createElement(vt.a,{name:"total",inputRef:i({required:!0,min:0}),error:St(u,"total"),defaultValue:a?xt(m,a.index,"total"):"",autoFocus:!0,margin:"dense",id:"total",label:"\u0412\u0441\u0435\u0433\u043e \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439",type:"number",fullWidth:!0}),r.a.createElement(vt.a,{name:"remote",inputRef:i({required:!0,min:0}),error:St(u,"remote"),defaultValue:a?xt(m,a.index,"remote"):"",margin:"dense",id:"remote",label:"\u0423\u0434\u0430\u043b\u0435\u043d\u043a\u0430",type:"number",fullWidth:!0}),r.a.createElement(vt.a,{name:"resume",inputRef:i({required:!0,min:0}),error:St(u,"resume"),defaultValue:a?xt(m,a.index,"resume"):"",margin:"dense",id:"resume",label:"\u0420\u0435\u0437\u044e\u043c\u0435",type:"number",fullWidth:!0}),r.a.createElement(g.a,{variant:"caption",color:"error",style:{marginBottom:"10px"}},function(e){return Object.keys(e).map((function(e){return C[e]||""})).join(", ")}(u)),r.a.createElement(X.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,title:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044c"},"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))},Ct=function(e){var t=e.isFormOpen,a=void 0!==t&&t,n=e.setIsFormOpen,l=e.edited,c=void 0===l?null:l,i=e.setEdited,o=function(){n(!1),i(null)};return r.a.createElement(mt.a,{open:a,onClose:o,"aria-labelledby":"form-dialog-title"},r.a.createElement(dt.a,{id:"form-dialog-title"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438"),r.a.createElement(ft.a,null,r.a.createElement(gt.a,null,r.a.createElement(g.a,{variant:"caption"},"\u0412\u0441\u0435 \u043f\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b. \u0414\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435. \u0422\u043e\u0447\u043a\u0438 \u043f\u043e \u044d\u0442\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u043c \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0438 \u043a \u0433\u0440\u0430\u0444\u0438\u043a\u0430\u043c.")),r.a.createElement(p.a,null),r.a.createElement(wt,{edited:c,onDialogClose:o})),r.a.createElement(pt.a,null,r.a.createElement(X.a,{onClick:o,color:"primary",fullWidth:!0,title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b!"},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")))},Ft=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),u=i[0],s=i[1],m=Object(n.useContext)(yt),d=m.lsData,f=m.setLsData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),r.a.createElement(X.a,{onClick:function(){return l(!0)},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"},r.a.createElement(st.a,null)),r.a.createElement(ot,{data:d,columns:w,aligns:{total:"right",remote:"right",resume:"right"},rowsLimit:10,size:"small",actions:{delete:{title:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",icon:"Delete",onCallback:function(e){var t=d.filter((function(t,a){return a!==e}));f(t),jt(t)}},edit:{title:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c",icon:"Edit",onCallback:function(e){s({index:e}),l(!0)}}}}),r.a.createElement(Ct,{isFormOpen:a,setIsFormOpen:l,edited:u,setEdited:s}))},It=function(e){var t=e.index,a=e.data,n=e.lsData,l=3===t?Math.min.apply(Math,Object(v.a)(a.map((function(e){return e.resume})))):0;switch(t){case 0:return r.a.createElement(Ft,{data:n});case 1:return r.a.createElement(ut,{data:a});case 2:return r.a.createElement(Ne,{data:a,columns:["total","remote"],chartTitle:"\u0413\u0440\u0430\u0444\u0438\u043a \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439"});case 3:return r.a.createElement(Ne,{data:a,columns:["resume"],minY:l,chartTitle:"\u0413\u0440\u0430\u0444\u0438\u043a \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0440\u0435\u0437\u044e\u043c\u0435"})}return r.a.createElement(g.a,{color:"primary",variant:"caption"},"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")},zt=function(e){var t=e.data,a=e.lsData,l=Object(n.useState)(0),c=Object(o.a)(l,2),i=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{value:i,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){u(t)}},r.a.createElement(se.a,{label:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430"}),r.a.createElement(se.a,{label:"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),r.a.createElement(se.a,{label:"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438"}),r.a.createElement(se.a,{label:"\u0420\u0435\u0437\u044e\u043c\u0435"})),r.a.createElement(It,{index:i,data:[].concat(Object(v.a)(t),Object(v.a)(a)),lsData:a}))},Dt=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useContext)(yt).lsData,i=Object(n.useState)(null),u=Object(o.a)(i,2),s=u[0],m=u[1];return Object(n.useEffect)((function(){m(null),fetch(k).then((function(e){return e.json()})).then((function(e){l(Object(v.a)(e))})).catch((function(e){m("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"),l([])}))}),[l,m]),r.a.createElement(r.a.Fragment,null,r.a.createElement(zt,{data:a,lsData:c}),r.a.createElement("p",null,s))},Nt={"/":function(){return r.a.createElement(F,null)},"/it":function(){return r.a.createElement(Dt,null)},"/figures":function(){return r.a.createElement(oe,null)}},Rt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null,"\u041e\u0448\u0438\u0431\u043a\u0430 404. \u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430."))},Pt=function(){var e=Object(h.useRoutes)(Nt),t=function(e){var t=Object.entries(j).find((function(t){return O+t[1].href===e}));return Array.isArray(t)?t[0]:"MAIN"}(window.location.pathname);return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("small",null,j[t].comment)),e||r.a.createElement(Rt,null))},At=a(101),Lt=a(228),Mt=function(e){var t=e.submenuItems,a=void 0===t?[]:t,l=e.withNavLink,c=void 0===l||l,i=(e.onLight,e.callback),u=void 0===i?null:i,s=e.switchIcon,m=void 0===s?"More":s,d=(e.text,Object(n.useState)(null)),f=Object(o.a)(d,2),g=f[0],p=f[1],E=Object(h.usePath)(),b=ie(),v=a.map((function(e){return"object"===typeof e?e:{href:e,text:e,key:e}})),O=function(e){p(null),u&&e&&u(e)},j=function(e,t){return t?(a=e.href,p(null),void Object(h.navigate)(a)):O(e.key);var a};return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{color:"inherit","aria-controls":"submenu","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},disabled:0===a.length},r.a.createElement(nt,{icon:m})),r.a.createElement(At.a,{className:b.submenu,id:"submenu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:O},v.map((function(e,t){return r.a.createElement(Lt.a,{key:t,title:e.text,onClick:function(){return j(e,c)}},r.a.createElement(nt,{icon:e.icon}),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",{style:{color:E===e.href?G:"inherit"}},e.text))}))))},Wt=function(e){var t=e.classes,a=e.active,n=e.setActive;return r.a.createElement(r.a.Fragment,null,y.map((function(e,l){return r.a.createElement(h.A,{className:y[l].href===a?t.active:t.normal,href:y[l].href,key:l,title:y[l].comment},r.a.createElement(X.a,{color:"inherit",title:y[l].comment||"",onClick:function(){return n(y[l].href)}},y[l].title))})))},Tt=function(){var e=ie(),t=Object(n.useState)(window.location.pathname),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(Ot()),h=Object(o.a)(i,2),v=h[0],O=h[1],j=y.map((function(e,t){return{text:e.title,href:e.href,key:t}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null),r.a.createElement(yt.Provider,{value:{lsData:v,setLsData:O}},r.a.createElement(u.a,{theme:Y},r.a.createElement(m.a,{className:e.app},r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(Mt,{submenuItems:j,withNavLink:!0,switchIcon:"Menu"}),r.a.createElement(g.a,{variant:"h6",className:e.title},"Rtasks + MUI"),r.a.createElement(p.a,{className:e.firstButton}),r.a.createElement(E.a,{mdDown:!0},r.a.createElement(Wt,{classes:e,active:l,setActive:c})))),r.a.createElement(b.a,{className:e.paperMain},r.a.createElement("h3",null,"Rtasks c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Material-UI"),r.a.createElement(Pt,null)),r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null))))))},Ht=a(99);Object(h.setBasepath)(O),c.a.render(r.a.createElement(i.b,{backend:Ht.a},r.a.createElement(Tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[113,1,2]]]);
//# sourceMappingURL=main.fd0754fa.chunk.js.map