(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){"use strict";e.r(n);var o=e(3),c=e.n(o),r=e(4),i=e(1),s=(e(9),e(0)),a=function(t){var n=t.goods;return Object(s.jsx)("ul",{children:n.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},u=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],c=function(t){(function(t){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()})).then((function(n){switch(t){case"all":return n;case"firstFive":return n.slice().sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5);case"red":return n.filter((function(t){return"red"===t.color}));default:return[]}}))})(t).then((function(t){o(t)}))};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c("all")},children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return c("firstFive")},children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return c("red")},children:"Load red goods"}),Object(s.jsx)(a,{goods:e})]})};c.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(t,n,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.32b004c9.chunk.js.map