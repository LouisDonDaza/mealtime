(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),i=a(3),o=a(1),l=a(19),u=a(13),p=Object(o.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH":return Object(u.a)({},e,{Recipe:t.payload});case"SUBMIT_SEARCH":return Object(u.a)({},e,{Recipes:t.payload.hits});default:return e}}}),m=a(5),d=a(6),h=a(8),f=a(7),b=a(9),E=a(12),v=a.n(E),j=a(20),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"ui menu"},c.a.createElement("div",{className:"ui category search item"},c.a.createElement("div",{className:"ui transparent icon input"},c.a.createElement("input",{className:"prompt",type:"text",placeholder:"Search food...",onChange:function(t){return e.props.searchRecipe(t.target.value)},onKeyDown:function(t){13===t.keyCode&&e.props.submitSearch(e.props.search)}}),c.a.createElement("i",{onClick:function(t){return e.props.submitSearch(e.props.search)},className:"search link icon"})),c.a.createElement("div",{className:"results"},"Testing")),console.log(this.props.search),";")}}]),t}(c.a.Component),O=Object(i.b)(function(e){return{search:Object.values(e.search)[0]}},{searchRecipe:function(e){return{type:"SEARCH",payload:e}},submitSearch:function(e){return function(){var t=Object(j.a)(v.a.mark(function t(a){var n,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("done"),t.next=3,fetch("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat("eb17d189","&app_key=").concat("a3068a044c623318afaa747afbf29331"));case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,a({type:"SUBMIT_SEARCH",payload:c});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(y),N=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"renderList",value:function(){var e=this.props.recipes;return console.log("test",e),this.props.recipes?e.map(function(e){return console.log(e),c.a.createElement("div",{className:"ui items"},c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:e.recipe.image,alt:"Food"})),c.a.createElement("div",{className:"content"},c.a.createElement("a",{href:e.recipe.url,className:"header"},e.recipe.label),c.a.createElement("div",{className:"meta"},c.a.createElement("span",null,e.recipe.ingredientLines.map(function(e){return c.a.createElement("p",null,e)}))),c.a.createElement("div",{className:"description"},c.a.createElement("p",null)),c.a.createElement("div",{className:"extra"},"Additional Details"))))}):c.a.createElement("div",{className:"ui blue message"},c.a.createElement("p",null,"Enter food name to look up recipes"))}},{key:"render",value:function(){return c.a.createElement("div",{className:"ui container"},c.a.createElement(O,null),this.renderList())}}]),t}(c.a.Component),g=Object(i.b)(function(e){return{recipes:e.search.Recipes}},{})(N),k=Object(o.d)(p,Object(o.a)(l.a));s.a.render(c.a.createElement(i.a,{store:k},c.a.createElement(g,null)),document.querySelector("#root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.ec462da8.chunk.js.map