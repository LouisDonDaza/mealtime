(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,a,t){e.exports=t(338)},338:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(53),l=t.n(c),i=t(25),s=t(38),o=t(157),u=t(179),m=t(29),p={available:!1,success:!1,activePage:0},d={submitted:!1,ingrParams:"",dietParams:"",healthParams:[],calories:500},h=Object(s.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH":return Object(m.a)({},e,{Recipe:a.payload});case"SUBMIT_SEARCH":return Object(m.a)({},e,{Recipes:a.payload,success:!0,activePage:1});case"SEARCH_GIVEN":return Object(m.a)({},e,{available:a.payload,success:!0,activePage:1});case"SUBMIT_PARAMS":return Object(m.a)({},e,{Recipes:a.payload,success:!0,activePage:1});case"HANDLE_PAGE":return Object(m.a)({},e,{activePage:a.payload});case"SUBMIT_FAIL":return Object(m.a)({},e,{success:!1});default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"INGREDIENTS":return Object(m.a)({},e,{ingrParams:a.payload});case"DIET":return Object(m.a)({},e,{dietParams:a.payload});case"HEALTH":return Object(m.a)({},e,{healthParams:a.payload});case"CALORIES":return Object(m.a)({},e,{calories:a.payload});case"SUBMIT_FORM":return Object(m.a)({},e,{submitted:a.payload});default:return e}},bookmark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"BOOKMARK":return[].concat(Object(u.a)(e),[a.payload]);case"EXISTS":return console.log("payload",a.payload),e.filter(function(e){return e.recipe.label!==a.payload});default:return e}}}),f=t(22),b=t(23),v=t(26),y=t(24),E=t(27),g=t(357),k=t(356),N=t(351),x=t(45),O=t.n(x),j=t(79),P=t(158),S=t.n(P)()(),F="eb17d189",w=function(e){return{type:"SEARCH",payload:e}},I=function(e){return{type:"SEARCH_GIVEN",payload:Boolean(e)}},T=function(e){return function(){var a=Object(j.a)(O.a.mark(function a(t){var r,n;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat(F,"&app_key=").concat("a3068a044c623318afaa747afbf29331"));case 2:return r=a.sent,a.next=5,r.json();case 5:n=a.sent,t({type:"SUBMIT_SEARCH",payload:n}),S.push("/search");case 8:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},C=function(e){return{type:"SUBMIT_FORM",payload:e}},R=function(){return function(){var e=Object(j.a)(O.a.mark(function e(a,t){var r,n,c,l,i,s,o,u,m,p,d;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="",n=t().search.Recipes.q,(c=t().search.activePage)&&(r+="&from=".concat((l=10*c)-10,"&to=").concat(l)),i=t().params,s=i.ingrParams,o=i.dietParams,u=i.healthParams,m=i.calories,r=r+"&q="+n,s&&(r=r+"&ingr="+s),o&&(r=r+"&diet="+o),u[0]&&u.forEach(function(e){r=r+"&health="+e}),m&&(r=r+"&calories="+m+"%2B"),console.log(r),e.prev=11,e.next=14,fetch("https://api.edamam.com/search?app_id=".concat(F,"&app_key=").concat("a3068a044c623318afaa747afbf29331")+r);case 14:return p=e.sent,e.next=17,p.json();case 17:d=e.sent,a({type:"SUBMIT_PARAMS",payload:d}),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),a({type:"SUBMIT_FAIL"});case 24:case"end":return e.stop()}},e,this,[[11,21]])}));return function(a,t){return e.apply(this,arguments)}}()},A=function(e){return function(){var a=Object(j.a)(O.a.mark(function a(t,r){return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r().bookmark.length){a.next=5;break}if(!r().bookmark.filter(function(a){return a.recipe.label===e.recipe.label}).length){a.next=5;break}return t({type:"EXISTS",payload:e.recipe.label}),a.abrupt("return");case 5:t({type:"BOOKMARK",payload:e});case 6:case"end":return a.stop()}},a,this)}));return function(e,t){return a.apply(this,arguments)}}()},L=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"ui transparent icon input"},n.a.createElement("input",{type:"text",placeholder:"Search...",onChange:function(a){return e.props.searchRecipe(a.target.value)},onKeyDown:function(a){13===a.keyCode&&(e.props.submitSearch(e.props.searchTerm.Recipe),e.props.searchTermGiven(e.props.searchTerm.Recipe),e.props.submitForm(!1))},style:{color:"snow"}}),n.a.createElement("i",{onClick:function(a){e.props.submitSearch(e.props.searchTerm.Recipe),e.props.searchTermGiven(e.props.searchTerm.Recipe),e.props.submitForm(!1)},className:"inverted search link icon"})))}}]),a}(n.a.Component),_=Object(i.b)(function(e){return{searchTerm:e.search}},{searchRecipe:w,submitSearch:T,searchTermGiven:I,submitForm:C})(L),M=function(){return n.a.createElement("div",null,n.a.createElement("h2",{className:"ui center aligned icon header"},n.a.createElement("i",{className:"circular icon utensils"}),"How To Meal"),n.a.createElement("div",{className:"ui three column grid fluid stackable"},n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"ui segment"},n.a.createElement("img",{src:"https://images.pexels.com/photos/396133/pexels-photo-396133.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"Yoga",className:"ui fluid image"}),n.a.createElement("h2",{className:"ui center aligned header"},"Find a balanced diet fit for you"))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"ui segment"},n.a.createElement("img",{src:"https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"Bowl",className:"ui fluid image"}),n.a.createElement("h2",{className:"ui center aligned header"},"Find delicious healthy meals"))),n.a.createElement("div",{className:"column"},n.a.createElement("div",{className:"ui segment"},n.a.createElement("img",{src:"https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",alt:"Toast",className:"ui fluid image"}),n.a.createElement("h2",{className:"ui center aligned header"},"Find a meal for any occasion")))),n.a.createElement("h2",{className:"ui center aligned header"},"Customize your meals"),n.a.createElement("h3",{className:"ui center aligned header"},"Filter by:"),n.a.createElement(N.a,{to:"/search"},n.a.createElement("div",{className:"ui four cards stackable"},n.a.createElement("div",{className:"green card"},n.a.createElement("h2",{className:"ui center aligned icon header",style:{padding:"40px 0"}},n.a.createElement("i",{className:"icon lemon outline"}),"No.of ingredients")),n.a.createElement("div",{className:"teal card"},n.a.createElement("h2",{className:"ui center aligned icon header",style:{padding:"40px 0"}},n.a.createElement("i",{className:"icon weight"}),"Diet Options")),n.a.createElement("div",{className:"blue card"},n.a.createElement("h2",{className:"ui center aligned icon header",style:{padding:"40px 0"}},n.a.createElement("i",{className:"icon heartbeat"}),"Health Options")),n.a.createElement("div",{className:"violet card"},n.a.createElement("h2",{className:"ui center aligned icon header",style:{padding:"40px 0"}},n.a.createElement("i",{className:"icon cubes"}),"Calories")))),n.a.createElement("h2",{className:"ui center aligned icon header"},n.a.createElement("i",{className:"circular icon search"}),"Get Started"),n.a.createElement("h3",{className:"ui center aligned icon header"},"Enter a recipe below"),n.a.createElement("div",{className:"ui inverted segment",style:{textAlign:"center"}},n.a.createElement(_,null)),n.a.createElement("h2",{className:"ui center aligned header"},"Special Thanks To"),n.a.createElement("div",{className:"ui stackable grid"},n.a.createElement("div",{className:"eight wide column"},n.a.createElement("img",{class:"ui fluid image",src:"https://ceoclub.bg/angels/wp-content/uploads/2015/06/edamam-1140x512.jpg",alt:"Edamam"}),n.a.createElement("h2",{className:"ui center aligned header"},"Edamam"),n.a.createElement("h3",{className:"ui center aligned header"},"For the very intuitive API, that provides data to this application.")),n.a.createElement("div",{className:"eight wide column"},n.a.createElement("img",{class:"ui fluid image",src:"https://blog.templatetoaster.com/wp-content/uploads/2016/09/semantic-UI.png",alt:"Semantic"}),n.a.createElement("h2",{className:"ui center aligned header"},"Semantic UI"),n.a.createElement("h3",{className:"ui center aligned header"},"For the user interface of this website"))))},H=t(353),B=t(350),D=t(349),G=t(355),U=[{key:"None",value:null,text:"None"},{key:"AF",value:"alcohol-free",text:"Alcohol Free"},{key:"CLF",value:"celery-free",text:"Celery Free"},{key:"CRF",value:"crustacean-free",text:"Crustacean Free"},{key:"DAIRY",value:"dairy-free",text:"Dairy Free"},{key:"Eggs",value:"egg-free",text:"Eggs Free"},{key:"Fish",value:"fish-free",text:"Fish Free"},{key:"Gluten",value:"gluten-free",text:"Gluten Free"},{key:"Kidney-friendly",value:"kidney-friendly",text:"Kidney friendly"},{key:"Kosher",value:"kosher",text:"Kosher"},{key:"Low-potassium",value:"low-potassium",text:"Low potassium"},{key:"Lupine-free",value:"lupine-free",text:"Lupine Free"},{key:"Mustard-free",value:"mustard-free",text:"Mustard Free"},{key:"No-oil-added",value:"No-oil-added",text:"No oil added"},{key:"No-sugar",value:"low-sugar",text:"No-sugar"},{key:"Paleo",value:"paleo",text:"Paleo"},{key:"Peanuts",value:"peanut-free",text:"Peanuts Free"},{key:"Pescatarian",value:"pescatarian",text:"Pescatarian"},{key:"Pork-free",value:"pork-free",text:"Pork Free"},{key:"Red-meat-free",value:"red-meat-free",text:"Red Meat Free"},{key:"Shellfish",value:"shellfish-free",text:"Shellfish Free"},{key:"Soy",value:"soy-free",text:"Soy Free"},{key:"Sugar-conscious",value:"sugar-conscious",text:"Sugar Conscious"},{key:"Tree-nuts",value:"tree-nut-free",text:"Tree Nuts Free"},{key:"Vegan",value:"vegan",text:"Vegan"},{key:"Vegatarian",value:"vegetarian",text:"Vegatarian"},{key:"Wheat-free",value:"wheat-free",text:"Wheat Free"}],K=[{key:"none",value:"",text:"None"},{key:"BA",value:"balanced",text:"Balanced"},{key:"HF",value:"high-fiber",text:"High-Fiber"},{key:"HP",value:"high-protein",text:"High-Protein"},{key:"LC",value:"low-carb",text:"Low-Carb"},{key:"LF",value:"low-fat",text:"Low-Fat"},{key:"LS",value:"low-sodium",text:"Low-Sodium"}],V=[{key:0,value:null,text:"none"},{key:1,value:1,text:"1"},{key:2,value:2,text:"2"},{key:3,value:3,text:"3"},{key:4,value:4,text:"4"},{key:5,value:5,text:"5"},{key:6,value:6,text:"6"},{key:7,value:7,text:"7"},{key:8,value:8,text:"8"},{key:9,value:9,text:"9"},{key:10,value:10,text:"10"},{key:11,value:11,text:"11"},{key:12,value:12,text:"12"},{key:13,value:13,text:"13"},{key:14,value:14,text:"14"},{key:15,value:15,text:"15"}],q=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(v.a)(this,Object(y.a)(a).call(this,e))).renderSearchError=function(){return t.props.params.submitted&&!t.props.searchTerm.available?n.a.createElement("div",{className:"ui fluid red message"},n.a.createElement("p",null,"Pls enter a food to search before filtering")):t.props.params.submitted&&t.props.searchTerm.available&&!t.props.searchTerm.success?n.a.createElement("div",{className:"ui fluid red message"},n.a.createElement("p",null,"No results found for such filter")):null},t.handleSubmit=function(e,a){t.props.submitForm(!0),t.props.searchTerm.available&&t.props.submitParams()},t.dummyRef=n.a.createRef(),t}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleIngrParam,t=e.handleDietParam,r=e.handleHealthParam,c=e.params,l=e.handleCalories;return n.a.createElement("div",null,n.a.createElement(B.a,{ref:this.dummyRef,onSubmit:this.handleSubmit},n.a.createElement(B.a.Input,{control:D.a,options:V,fluid:!0,label:{children:"Max no. of Ingredients",htmlFor:"form-select-control-ingredients"},placeholder:"Max no. of ingredients",search:!0,searchInput:{id:"form-select-control-ingredients"},onChange:a}),n.a.createElement(B.a.Input,{control:D.a,options:K,fluid:!0,selection:!0,label:{children:"Diet",htmlFor:"form-select-control-diet"},placeholder:"Diet Options",search:!0,searchInput:{id:"form-select-control-diet"},onChange:t}),n.a.createElement(B.a.Input,{control:D.a,options:U,fluid:!0,multiple:!0,selection:!0,label:{children:"Health",htmlFor:"form-select-control-health"},placeholder:"Health Options",search:!0,searchInput:{id:"form-select-control-health"},onChange:r}),n.a.createElement(B.a.Input,{label:"Calories: ".concat(c.calories,"cal "),min:100,max:2e3,name:"calories",onChange:l,step:100,type:"range",value:c.calories}),n.a.createElement(B.a.Field,{id:"form-button-control-public",control:G.a,content:"Filter",label:"Filter Results"})),this.renderSearchError())}}]),a}(n.a.Component),X=Object(i.b)(function(e){return{searchTerm:e.search,params:e.params}},{handleIngrParam:function(e,a){return{type:"INGREDIENTS",payload:a.value}},handleDietParam:function(e,a){return{type:"DIET",payload:a.value}},handleHealthParam:function(e,a){return{type:"HEALTH",payload:a.value}},searchTermGiven:I,submitForm:C,submitParams:R,handleCalories:function(e,a){return{type:"CALORIES",payload:a.value}}})(q),J=t(352),W=[{menuItem:"Ingredients",render:function(e){return n.a.createElement(J.a.Pane,{attached:!1},n.a.createElement("div",{className:"ui items"},n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:e.info.recipe.image,alt:"Food"})),n.a.createElement("div",{className:"content"},n.a.createElement("a",{href:e.info.recipe.url,className:"header",target:"_blank",rel:"noopener noreferrer"},e.info.recipe.label),n.a.createElement("div",{className:"meta"},n.a.createElement("button",{class:"ui instagram button",style:{margin:"5px 0"},onClick:function(){return e.bookmark(e.info)}},n.a.createElement("i",{class:"bookmark icon"}),"Bookmark"),n.a.createElement("span",null,e.info.recipe.ingredientLines.map(function(e){return n.a.createElement("p",null,e)})))))))}},{menuItem:"Nutrients",render:function(e){return n.a.createElement(J.a.Pane,{attached:!1},n.a.createElement("div",{className:"ui items"},n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:e.info.recipe.image,alt:"Food"})),n.a.createElement("div",{className:"content"},n.a.createElement("a",{href:e.info.recipe.url,className:"header",target:"_blank",rel:"noopener noreferrer"},e.info.recipe.label),n.a.createElement("div",{className:"meta"},n.a.createElement("span",null,Object.keys(e.info.recipe.totalNutrients).map(function(a){return n.a.createElement("p",null,"".concat(e.info.recipe.totalNutrients[a].label,": ").concat(Math.round(e.info.recipe.totalNutrients[a].quantity)," ").concat(e.info.recipe.totalNutrients[a].unit))})))))))}}],Y=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.info,t=e.bookmark;return n.a.createElement(J.a,{menu:{secondary:!0,pointing:!0},panes:W,info:a,key:a.recipe.label,bookmark:t})}}]),a}(n.a.Component),z=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"renderCount",value:function(){var e=this;if(!this.props.recipes)return null;var a=this.props.recipes.count;return n.a.createElement("div",null,n.a.createElement("p",null,a," recipes found"),n.a.createElement(H.a,{defaultActivePage:1,totalPages:Math.round(a/10),onPageChange:function(a,t){e.props.handlePage(t.activePage),e.props.submitParams()}}))}},{key:"renderList",value:function(){var e=this;return this.props.recipes?this.props.recipes.hits.map(function(a){return n.a.createElement(Y,{info:a,key:a.recipe.label,bookmark:e.props.bookmark})}):n.a.createElement("div",{className:"ui blue message"},n.a.createElement("p",null,"Enter food name to look up recipes"))}},{key:"render",value:function(){return n.a.createElement("div",{className:"ui container"},n.a.createElement("div",{className:"ui stackable grid"},n.a.createElement("div",{className:"four wide column"},n.a.createElement(X,null)),n.a.createElement("div",{className:"twelve wide column"},this.renderCount(),this.renderList())))}}]),a}(n.a.Component),Q=Object(i.b)(function(e){return{recipes:e.search.Recipes}},{handlePage:function(e){return{type:"HANDLE_PAGE",payload:e}},submitParams:R,bookmark:A})(z),Z=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui inverted menu"},n.a.createElement(N.a,{to:"/mealtime",className:"active red item"},n.a.createElement("i",{class:"home icon"})),n.a.createElement(N.a,{to:"/search",className:"active green item"},n.a.createElement("i",{class:"utensils icon"})),n.a.createElement(N.a,{to:"/bookmarks",className:"active blue item"},n.a.createElement("i",{class:"bookmark icon"})),n.a.createElement(_,null))}}]),a}(n.a.Component),$=Object(i.b)(function(e){return{searchTerm:e.search}},{searchRecipe:w,submitSearch:T,searchTermGiven:I,submitForm:C})(Z),ee=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"renderList",value:function(){var e=this;return this.props.bookmarks.length?this.props.bookmarks.map(function(a){return n.a.createElement(Y,{info:a,bookmark:e.props.bookmark,key:a.recipe.label})}):n.a.createElement("h2",{class:"ui center aligned icon header"},n.a.createElement("i",{class:"bookmark outline icon"}),n.a.createElement("div",{class:"content"},"Bookmarks",n.a.createElement("div",{class:"sub header"},"Look up recipes and come back here when you have some bookmarked.")))}},{key:"render",value:function(){return n.a.createElement("div",null,this.renderList())}}]),a}(n.a.Component),ae=Object(i.b)(function(e){return{bookmarks:e.bookmark}},{bookmark:A})(ee),te=function(e){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(y.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui container"},n.a.createElement(g.a,{history:S},n.a.createElement("div",null,n.a.createElement($,null),n.a.createElement(k.a,{path:"/mealtime",exact:!0,component:M}),n.a.createElement(k.a,{path:"/search",exact:!0,component:Q}),n.a.createElement(k.a,{path:"/bookmarks",exact:!0,component:ae}))))}}]),a}(n.a.Component),re=Object(i.b)(function(e){return{recipes:e.search.Recipes}},{})(te),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,ce=Object(s.e)(h,ne(Object(s.a)(o.a)));l.a.render(n.a.createElement(i.a,{store:ce},n.a.createElement(re,null)),document.querySelector("#root"))}},[[190,2,1]]]);
//# sourceMappingURL=main.ef397df7.chunk.js.map