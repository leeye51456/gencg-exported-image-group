(this["webpackJsonpgencg-exported-image-group"]=this["webpackJsonpgencg-exported-image-group"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(11),s=n.n(c),i=n(10),u=n(1),o=n.n(u),l=n(4),h=n(3),p=n(12),d=n(8),j=n(13);function b(e){var t=new j.a;return t.load(e),t.getImageData()}function g(){return(g=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name.lastIndexOf("."),e.t0=parseInt(t.name.substring(a-5),10),e.next=4,f(t,n);case 4:return e.t1=e.sent,e.abrupt("return",{pageNumber:e.t0,imageData:e.t1});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(t).then((function(e){return w(e,n)})).then((function(e){return y(e,n)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n=new FileReader;n.onload=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,b(new Uint8Array(n.target.result));case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.readAsArrayBuffer(t)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){var n=document.createElement("canvas");n.width=e.width,n.height=e.height;var a=n.getContext("2d");return a.fillStyle=t.backgroundColor,a.fillRect(-10,-10,e.width+20,e.height+20),a.putImageData(e,0,0),n}function y(e,t){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(o.a.mark((function e(t,n){var a,r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.canvasToFile(t,"image/png");case 2:return a=e.sent,e.next=5,Object(d.a)(a,{maxWidthOrHeight:Math.max(n.width,n.height)});case 5:return r=e.sent,e.t0=Uint8Array,e.next=9,r.arrayBuffer();case 9:return e.t1=e.sent,c=new e.t0(e.t1),e.next=13,Object(d.a)(a,{maxWidthOrHeight:Math.max(n.width,n.height),initialQuality:.9,fileType:"image/jpeg"});case 13:return s=e.sent,e.t2=Uint8Array,e.next=17,s.arrayBuffer();case 17:if(e.t3=e.sent,i=new e.t2(e.t3),!(c.length<=1.1*i.length)){e.next=23;break}return e.abrupt("return",c);case 23:return e.abrupt("return",i);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e,t){return g.apply(this,arguments)};function N(){return(N=Object(l.a)(o.a.mark((function e(t,n){var a,r,c,s,i,u,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=S(n),(a=new p.a({orientation:n.width>=n.height?"landscape":"portrait",unit:"pt",format:[n.width,n.height]})).deletePage(1),r=Math.min(n.width,n.height),c=t.length,s=0;case 6:if(!(s<c)){e.next=18;break}return e.next=9,k(t[s],n);case 9:i=e.sent,u=i.pageNumber,l=i.imageData,a.addPage().setFillColor(n.backgroundColor).rect(-10,-10,n.width+20,n.height+20,"F").addImage(l,0,0,n.width,n.height),n.displayPageNumbers&&a.setFont("Helvetica","","Bold").setFontSize(.09375*r).setLineWidth(.015625*r).setDrawColor("#ffffff").setTextColor("#000000").text(String(u||s+1),.9375*n.width,.0625*n.height,{align:"right",baseline:"top",renderingMode:"stroke"}).text(String(u||s+1),.9375*n.width,.0625*n.height,{align:"right",baseline:"top",renderingMode:"fill"}),n.updateProgressState({task:"\uc774\ubbf8\uc9c0 \ubcc0\ud658 \ubc0f PDF \ud398\uc774\uc9c0 \uc0dd\uc131",progress:(s+1)/c});case 15:s+=1,e.next=6;break;case 18:a.save("".concat(n.filename,".pdf"));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t={};return t.updateProgressState="function"===typeof e.updateProgressState?e.updateProgressState:function(){},t.displayPageNumbers="boolean"===typeof e.displayPageNumbers&&e.displayPageNumbers,t.filename="string"===typeof e.filename?e.filename:"generated",t.backgroundColor="string"===typeof e.backgroundColor?e.backgroundColor:"#5e5e5e",t.width=e.width>0&&e.width!==1/0?Math.floor(e.width):960,t.height=e.height>0&&e.height!==1/0?Math.floor(e.height):540,t}var P=function(e,t){return N.apply(this,arguments)},C=(n(20),n(0)),D=function(e,t){return e.name<t.name?-1:1};var F=function(){var e,t=Object(a.useState)(""),n=Object(h.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(0),u=Object(h.a)(s,2),p=u[0],d=u[1],j=Object(a.useState)(0),b=Object(h.a)(j,2),g=b[0],f=b[1],m=Object(a.useState)(0),x=Object(h.a)(m,2),O=x[0],w=x[1],y=Object(a.useState)(!1),v=Object(h.a)(y,2),k=v[0],N=v[1],S=Object(a.useState)([]),F=Object(h.a)(S,2),M=F[0],T=F[1],A=Object(a.useState)(960),B=Object(h.a)(A,2),I=B[0],H=B[1],W=Object(a.useState)(540),U=Object(h.a)(W,2),E=U[0],G=U[1],J=Object(a.useState)("#5e5e5e"),R=Object(h.a)(J,2),z=R[0],L=R[1],Q=Object(a.useState)(!0),q=Object(h.a)(Q,2),K=q[0],V=q[1],X=Object(a.useState)("generated"),Y=Object(h.a)(X,2),Z=Y[0],$=Y[1],_=function(e){var t=e.task,n=e.progress;"string"===typeof t&&c(t),d(n),w((new Date).getTime())},ee=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),f((new Date).getTime()),_("\uc791\uc5c5 \uc2dc\uc791"),P(M,{updateProgressState:_,displayPageNumbers:K,filename:Z,width:I,height:E,backgroundColor:z}),N(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(e){return function(t){return e(t.target.value)}},ae=ne(H),re=ne(G),ce=ne(L),se=ne($),ie=(e=V,function(t){return e(t.target.checked)});return Object(C.jsxs)("div",{className:"App",onDragOver:function(e){e.preventDefault()},onDrop:function(e){if(e.preventDefault(),e.dataTransfer.items){var t=Object(i.a)(e.dataTransfer.items).reduce((function(e,t){if("file"!==t.kind)return e;var n=t.getAsFile();return(/image\/targa/i.test(n.type)||n.name.endsWith(".tga"))&&e.push(n),e}),[]).sort(D);t.length&&T(t)}},children:[Object(C.jsx)("h1",{children:"GenCG HD\uc5d0\uc11c \ucd94\ucd9c\ud55c \uc774\ubbf8\uc9c0 PDF\ub85c \ubb36\uae30"}),Object(C.jsx)("h2",{children:"1. \uc774\ubbf8\uc9c0 \ud30c\uc77c \uc120\ud0dd"}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{type:"file",accept:"image/x-targa,image/x-tga,.tga",multiple:!0,disabled:k,onChange:function(e){T(Object(i.a)(e.target.files).sort(D))}})}),Object(C.jsxs)("h3",{style:{marginBottom:"0.25rem"},children:["* \ud30c\uc77c ",M.length,"\uac1c \uc120\ud0dd\ub428"]}),Object(C.jsx)("ol",{className:"file-list",style:{marginTop:"0.25rem"},children:M.map((function(e){return Object(C.jsx)("li",{children:e.name},e.name)}))}),Object(C.jsx)("hr",{}),Object(C.jsx)("h2",{children:"2. \ucd9c\ub825 \uc124\uc815"}),Object(C.jsxs)("ul",{className:"rows",children:[Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{className:"col2",children:"\ud30c\uc77c\uba85"}),Object(C.jsxs)("span",{className:"colgroup",children:[Object(C.jsx)("input",{className:"col2",type:"text",value:Z,onChange:se}),Object(C.jsx)("small",{children:".pdf"})]})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{className:"col2",children:"PDF \ud06c\uae30"}),Object(C.jsxs)("span",{className:"colgroup",children:[Object(C.jsx)("input",{className:"col2",type:"number",value:I,onChange:ae}),Object(C.jsx)("span",{className:"gap",children:"x"}),Object(C.jsx)("input",{className:"col2",type:"number",value:E,onChange:re})]})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{className:"col2",children:"\ubc30\uacbd\uc0c9"}),Object(C.jsx)("input",{className:"col2",type:"color",value:z,onChange:ce}),Object(C.jsx)("small",{className:"col2",children:z})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)("span",{className:"col2",children:"\ud398\uc774\uc9c0 \ubc88\ud638 \ud45c\uc2dc"}),Object(C.jsx)("label",{className:"col4",children:Object(C.jsx)("input",{type:"checkbox",checked:K,onChange:ie})})]})]}),Object(C.jsx)("hr",{}),Object(C.jsx)("h2",{children:"3. PDF \uc0dd\uc131"}),Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:"\uc544\uc9c1 \uba54\ubaa8\ub9ac \ucd5c\uc801\ud654\uac00 \uc548 \ub418\uc5b4\uc11c \uba54\ubaa8\ub9ac\ub97c \ub9ce\uc774 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. PDF \uc0dd\uc131 \uc644\ub8cc \ud6c4\uc5d0\ub294 \ucf8c\uc801\ud55c \uae30\uae30 \uc0ac\uc6a9\uc744 \uc704\ud574 \ud0ed\uc744 \ub2eb\ub294 \uac83\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4."}),Object(C.jsx)("li",{children:"\ubc30\ud130\ub9ac\ub97c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0 \ubc30\ud130\ub9ac \uc18c\ubaa8\uac00 \ub9ce\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),Object(C.jsx)("ul",{className:"rows",children:Object(C.jsxs)("li",{children:[Object(C.jsx)("button",{className:"col2",type:"button",disabled:k||0===M.length,onClick:te,children:"PDF \uc0dd\uc131"}),""!==r&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("progress",{className:"col2",value:p,max:1,children:[Math.floor(100*p),"%"]}),Object(C.jsxs)("small",{className:"col2",children:[(100*p).toFixed(2),"%\uae4c\uc9c0 ",((O-g)/1e3).toFixed(1),"\ucd08 \uacbd\uacfc"]})]})]})})]})};n(22);s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root"))}},[[23,1,3]]]);
//# sourceMappingURL=main.88567ad3.chunk.js.map