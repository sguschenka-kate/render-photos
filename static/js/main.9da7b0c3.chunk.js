(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),s=n(8),i=n.n(s),u=n(1),o=n.n(u),l=n(3),p=n(7);function j(e){var t=e.card,n=e.handleDelete;return Object(r.jsx)("li",{className:"list-group-item",children:Object(r.jsxs)("div",{className:"card",style:{width:"17rem"},children:[Object(r.jsx)("img",{src:t.url,className:"card-img-top",alt:t.title}),Object(r.jsxs)("div",{className:"card-body d-flex flex-column justify-content-center",children:[Object(r.jsx)("h5",{className:"card-title",style:{minHeight:"100px"},children:t.title}),Object(r.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return n(t.id)},children:"Delete"})]})]})})}function d(){return Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("div",{className:"spinner-border m-5",role:"status",children:Object(r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}var f=n(4),h=n(6);function b(e){return e.reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(f.a)({},t.id,t))}),{})}function x(){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",b(n.slice(0,20)));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos/".concat(t),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(10),w=n(9);function g(e){var t=e.source,n=e.key;t[n];return Object(v.a)(t,[n].map(w.a))}n(17);function N(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(p.a)(s,2),u=i[0],f=i[1];function h(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,h();case 3:f(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:r=g({source:n,key:t}),a(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"App",children:[u&&Object(r.jsx)(d,{}),!u&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:"list-group gap-3 flex-row flex-wrap justify-content-center align-items-center",children:Object.values(n).map((function(e){return Object(r.jsx)(j,{card:e,handleDelete:y},e.id)}))})})]})}i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9da7b0c3.chunk.js.map