(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),i=c(18),s=c.n(i),j=(c(54),c(55),c(6)),o=c(110),l=c(114),b=c(113),d=c(109),h=c(111),u=c(112),O=c(12),p=c(13),x=c.n(p),m=c(106),g=c(108),v=c(115),f=c(83),w={paper:{width:"60rem",padding:"1rem",margin:"auto"},table:{minWidth:650}},C=Object(m.a)({paper:{width:"50rem",padding:"1rem",margin:"auto"},card:{width:"40rem",padding:"3rem",margin:"auto"},pics:{width:"10rem"}}),k=function(){var e=C(),t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(!1),p=Object(j.a)(s,2),m=p[0],k=p[1];Object(n.useEffect)((function(){x.a.get("http://localhost:8000/api/pirates").then((function(e){i(e.data),k(!0)})).catch((function(e){return console.log(e)}))}));var y=function(e){x.a.delete("http://localhost:8000/api/pirates/"+e).then((function(t){!function(e){i(r.filter((function(t){return t._id!==e})))}(e)}))},P=r.sort((function(e,t){return e.name.localeCompare(t.name)}));return Object(a.jsxs)(g.a,{children:[Object(a.jsxs)("div",{className:"topBar",children:[Object(a.jsx)("h1",{children:"Pirate Crew"}),Object(a.jsx)(v.a,{onClick:function(){return Object(O.b)("/pirates/new")},variant:"contained",color:"primary",children:"Add Pirate"})]}),Object(a.jsx)(f.a,{elevation:3,children:m?Object(a.jsx)(d.a,{component:f.a,children:Object(a.jsxs)(o.a,{style:w.table,size:"small","aria-label":"a dense table",children:[Object(a.jsx)(h.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a,{children:"Pirate Selfie "}),Object(a.jsx)(b.a,{children:"Pirate Name "}),Object(a.jsx)(b.a,{align:"right",children:"Actions"})]})}),Object(a.jsx)(l.a,{children:P.map((function(t){return Object(a.jsxs)(u.a,{children:[Object(a.jsx)(b.a,{component:"th",scope:"row",children:Object(a.jsx)("img",{className:e.pics,src:t.imageUrl})}),Object(a.jsx)(b.a,{component:"th",scope:"row",children:t.name}),Object(a.jsxs)(b.a,{component:"th",scope:"row",children:[Object(a.jsx)(v.a,{onClick:function(e){Object(O.b)("/pirates/".concat(t._id))},variant:"contained",color:"primary",children:" View Pirate"}),Object(a.jsx)(v.a,{onClick:function(e){y(t._id)},variant:"contained",color:"secondary",children:" Walk the Plank!"})]})]},t.name)}))})]})}):""})]})},y=(c(118),c(117),c(116),Object(m.a)({paper:{width:"60rem",padding:"1rem",margin:"auto"},input:{marginBottom:"1rem"},button:{width:"100%",display:"block"},dropdown:{margin:"1rem"}}),Object(m.a)({paper:{width:"60rem",padding:"1rem",margin:"auto"},input:{marginBottom:"1rem"},button:{width:"100%",display:"block"},dropdown:{margin:"1rem"}})),P=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(j.a)(i,2),o=s[0],l=s[1],b=Object(n.useState)(),d=Object(j.a)(b,2),h=d[0],u=d[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),g=m[0],v=m[1],f=Object(n.useState)(""),w=Object(j.a)(f,2),C=w[0],k=w[1],P=Object(n.useState)([]),S=Object(j.a)(P,2),N=S[0],L=S[1],B=Object(n.useState)(!1),A=Object(j.a)(B,2),H=A[0],U=A[1],F=Object(n.useState)(!1),M=Object(j.a)(F,2),E=M[0],I=M[1],q=Object(n.useState)(!1),R=Object(j.a)(q,2),T=R[0],Y=R[1],_=(y(),Object(n.useState)("")),D=Object(j.a)(_,2),J=D[0],W=D[1],z=Object(n.useState)(""),V=Object(j.a)(z,2),G=V[0],K=V[1],Q=Object(n.useState)(""),X=Object(j.a)(Q,2),Z=X[0],$=X[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:c,position:o,chests:h,imageUrl:C,catchphrase:g,pegLeg:H,eyePatch:E,hookHand:T};x.a.post("http://localhost:8000/api/pirates/new",t).then((function(e){Object(O.b)("/pirates")})).catch((function(e){for(var t=e.response.data.errors,c=[],a=0,n=Object.keys(t);a<n.length;a++){var r=n[a];c.push(t[r].message)}L(c)}))},children:[N?N.map((function(e,t){return Object(a.jsx)("p",{children:e},t)})):"",J?Object(a.jsx)("p",{children:J}):"",Object(a.jsx)("label",{children:"Pirate Name: "}),Object(a.jsx)("input",{type:"text",name:"name",value:c,onChange:function(e){r(e.target.value),e.target.value.length<1?W("Name is required"):e.target.value.length<3?W("Name must be at least 3 characters"):e.target.value.length>2&&W("")}}),Object(a.jsx)("br",{}),G?Object(a.jsx)("p",{children:G}):"",Object(a.jsx)("label",{children:"Image URL: "}),Object(a.jsx)("input",{type:"text",name:"imageUrl",value:C,onChange:function(e){k(e.target.value),e.target.value.length<1?K("URL is required"):e.target.value.length<6?K("Image URL must be at least 6 characters"):e.target.value.length>5&&K("")}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Number of Chests:"}),Object(a.jsxs)("select",{name:"chests",onChange:function(e){return u(e.target.value)},children:[Object(a.jsx)("option",{selected:"true",disabled:"disabled",children:"Choose A Position"}),Object(a.jsx)("option",{value:"0",children:"0"}),Object(a.jsx)("option",{value:"1",children:"1"}),Object(a.jsx)("option",{value:"2",children:"2"}),Object(a.jsx)("option",{value:"3",children:"3"}),Object(a.jsx)("option",{value:"4",children:"4"}),Object(a.jsx)("option",{value:"5",children:"5"}),Object(a.jsx)("option",{value:"6",children:"6"})]}),Object(a.jsx)("br",{}),Z?Object(a.jsx)("p",{children:Z}):"",Object(a.jsx)("label",{children:"Pirate Catchphrase: "}),Object(a.jsx)("input",{type:"text",name:"catchphrase",value:g,onChange:function(e){v(e.target.value),e.target.value.length<1?$("Catchphrase is required"):e.target.value.length<3?$("Catchphrase must be at least 3 characters"):e.target.value.length>2&&$("")}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Crew Position:"}),Object(a.jsxs)("select",{name:"position",onChange:function(e){return l(e.target.value)},children:[Object(a.jsx)("option",{selected:"true",disabled:"disabled",children:"Choose A Position"}),Object(a.jsx)("option",{value:"Captain",children:"Captain"}),Object(a.jsx)("option",{value:"First Mate",children:"First Mate"}),Object(a.jsx)("option",{value:"Boatswain",children:"Boatswain"}),Object(a.jsx)("option",{value:"Powder Monkey",children:"Powder Monkey"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Peg Leg"}),Object(a.jsx)("input",{type:"checkbox",id:"pegLeg",name:"pegLeg",value:"true",onClick:function(e){return U(!0)}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Eye Patch"}),Object(a.jsx)("input",{type:"checkbox",name:"eyePatch",value:!0,onClick:function(e){return I(!0)}}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Hook Hand"}),Object(a.jsx)("input",{type:"checkbox",name:"hookHand",onClick:function(e){return Y(!0)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit"})]})},S=Object(m.a)({paper:{width:"60rem",padding:"1rem",margin:"auto"},card:{width:"60rem",padding:"3rem",margin:"auto"},button:{margin:"1rem"}}),N=function(){var e=S();return Object(a.jsxs)(g.a,{children:[Object(a.jsxs)("div",{className:"topBar",children:[Object(a.jsx)("h1",{children:"Add Pirate"}),Object(a.jsx)(v.a,{className:e.button,onClick:function(){return Object(O.b)("/pirates")},variant:"contained",color:"primary",children:"Crew Board"})]}),Object(a.jsx)(f.a,{elevation:3,children:Object(a.jsx)(P,{})})]})},L=Object(m.a)({paper:{width:"50rem",padding:"1rem",margin:"auto"},card:{width:"40rem",padding:"3rem",margin:"auto"},pic:{width:"10rem"}}),B=function(e){var t=e.id,c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],s=r[1],o=L();return x.a.get("http://localhost:8000/api/pirates/"+t).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)})),Object(a.jsx)(g.a,{children:Object(a.jsx)("div",{className:"topBar",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:i.name}),Object(a.jsx)(v.a,{onClick:function(){return Object(O.b)("/pirates")},variant:"contained",color:"primary",children:"Crew Board"}),Object(a.jsxs)(f.a,{elevation:3,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{className:o.pic,src:i.imageUrl}),Object(a.jsx)("h3",{children:i.catchphrase})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"About: "}),Object(a.jsxs)("p",{children:["Position: ",i.position]}),Object(a.jsxs)("p",{children:["Treasures: ",i.chests]}),Object(a.jsxs)("p",{children:["Peg Leg: ",i.pegLeg,i.pegLeg?Object(a.jsx)("p",{children:"Yes"}):Object(a.jsx)("p",{children:"No"})]}),Object(a.jsxs)("p",{children:["Eye Patch:",i.eyePatch?Object(a.jsx)("p",{children:"Yes"}):Object(a.jsx)("p",{children:"No"})]}),Object(a.jsxs)("p",{children:["Hook Hand:",i.hookHand?Object(a.jsx)("p",{children:"Yes"}):Object(a.jsx)("p",{children:"No"})]})]})]})]})})})};var A=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(O.a,{children:[Object(a.jsx)(k,{path:"/pirates"}),Object(a.jsx)(N,{path:"/pirates/new"}),Object(a.jsx)(B,{path:"/pirates/:id"})]})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),H()}},[[82,1,2]]]);
//# sourceMappingURL=main.8da3dcf0.chunk.js.map