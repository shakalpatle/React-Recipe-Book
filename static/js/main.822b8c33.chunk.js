(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),i=c.n(r),s=(c(12),c(4)),o=c.n(s),j=c(6),l=c(2),u=(c(14),c(7)),h=c.n(u),b=c(0),p=function(e){var t=e.title,c=e.calories,n=e.im,a=e.ingredients;return Object(b.jsxs)("div",{className:h.a.recipe,children:[Object(b.jsx)("h1",{children:t}),console.log(a),Object(b.jsx)("ol",{children:a.map((function(e){return Object(b.jsx)("li",{children:e.text})}))}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("img",{src:n})]})};var d=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("h1",{className:"head",children:["Welcome to ",Object(b.jsx)("a",{href:"#",children:" Shakal's "}),"Kitchen"]})})};var f=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p1",{children:"Created by Shakal Patle"})})},O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),s=i[0],u=i[1],h=Object(n.useState)("chicken"),O=Object(l.a)(h,2),x=O[0],m=O[1];Object(n.useEffect)((function(){v()}),[x]);var v=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(x,"&app_id=").concat("42d7fe1a","&app_key=").concat("691ab86eadaabd5f25aa1c433c14a834"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(c),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(s),u("")},className:"search-form",children:[Object(b.jsx)("input",{className:"search-text",type:"text",value:s,onChange:function(e){u(e.target.value)},placeholder:"Enter the item whose recipe you want"}),Object(b.jsx)("button",{className:"search-button",type:"submit",children:"Search"})]}),Object(b.jsx)("div",{className:"recipes",children:c.map((function(e){return Object(b.jsx)(p,{title:e.recipe.label,calories:e.recipe.calories,im:e.recipe.image,ingredients:e.recipe.ingredients},e.recipe.label)}))}),Object(b.jsx)("div",{className:"foot",children:Object(b.jsx)(f,{})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()},7:function(e,t,c){e.exports={recipe:"Recipe_recipe__3Tan1",ss:"Recipe_ss__1uSqX"}}},[[16,1,2]]]);
//# sourceMappingURL=main.822b8c33.chunk.js.map