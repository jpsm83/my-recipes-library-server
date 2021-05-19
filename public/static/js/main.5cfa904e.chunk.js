(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(32),s=n.n(i),c=(n(38),n(5)),o=n(6),l=n(8),u=n(10),d=n(9),h=n(2),j=n(3),p=n(17),m=n.n(p),b=n(21),x=n(18),O=n.n(x),f=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e){return t.instance.post("/auth/signup",e)},this.login=function(e){return t.instance.post("/auth/login",e)},this.logout=function(){return t.instance.post("/auth/logout")},this.isLoggedIn=function(){return t.instance.get("/auth/loggedin")},this.edit=function(e){return t.instance.put("/auth/edit-user",e)},this.instance=O.a.create({baseURL:"https://myrecipeslibrary.herokuapp.com/api",withCredentials:!0})},g=n(0),v=a.a.createContext(),y=v.Consumer,N=v.Provider,C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoggedIn:!1,isLoading:!0,user:null},e.authService=new f,e.signup=function(){var t=Object(b.a)(m.a.mark((function t(n){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.authService.signup(n);case 3:(r=t.sent)&&e.setState({isLoggedIn:!0,user:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({isLoggedIn:!1,user:null});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e.login=function(t){e.authService.login(t).then((function(t){return e.setState({isLoggedIn:!0,user:t.data})})).catch((function(){return e.setState({isLoggedIn:!1,user:null})}))},e.logout=function(){e.authService.logout().then((function(){return e.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.error(e)}))},e.edit=function(t){e.authService.edit(t).then((function(t){return e.setState(Object(j.a)(Object(j.a)({},e.state),{},{user:t.data}))})).catch((function(e){return console.error(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.authService.isLoggedIn();case 3:(t=e.sent)&&this.setState({isLoggedIn:!0,isLoading:!1,user:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isLoggedIn:!1,isLoading:!1,user:null});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,n=e.isLoading,r=e.user;return n?Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsx)(N,{value:{isLoading:n,isLoggedIn:t,user:r,signup:this.signup,login:this.login,logout:this.logout,edit:this.edit},children:this.props.children})}}]),n}(a.a.Component),w=function(e){return function(t){return Object(g.jsx)(y,{children:function(n){var r=n.isLoading,a=n.isLoggedIn,i=n.user,s=n.signup,c=n.login,o=n.logout,l=n.edit;return Object(g.jsx)(e,Object(j.a)({isLoggedIn:a,isLoading:r,user:i,signup:s,login:c,logout:o,edit:l},t))}})}};var k=w((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.exact,a=e.path,i=e.redirectPath,s=void 0===i?"/recipes":i,c=e.component;return n?Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsx)(h.b,{exact:r,path:a,render:function(e){return t?Object(g.jsx)(h.a,{to:s}):t?void 0:Object(g.jsx)(c,Object(j.a)({},e))}})}));var S=w((function(e){var t=e.isLoggedIn,n=e.isLoading,r=e.exact,a=e.path,i=e.component;return n?Object(g.jsx)("p",{children:"Loading..."}):Object(g.jsx)(h.b,{exact:r,path:a,render:function(e){return t?t?Object(g.jsx)(i,Object(j.a)({},e)):void 0:Object(g.jsx)(h.a,{to:"/"})}})})),T=function e(){var t=this;Object(o.a)(this,e),this.create=function(e){return t.instance.post("/recipes/",e)},this.get=function(){return t.instance.get("/recipes/")},this.getOne=function(e){return t.instance.get("/recipes/".concat(e))},this.deleteOne=function(e){return t.instance.delete("/recipes/".concat(e))},this.updateOne=function(e,n){return t.instance.put("/recipes/".concat(e),n)},this.instance=O.a.create({baseURL:"https://myrecipeslibrary.herokuapp.com/api",withCredentials:!0})},I=(n(67),{dishName:function(e){var t;return e?e.length<3&&(t="Invalid dish name"):t="Dish name is required",t},ingredients:function(e){var t;return e?e.length<3&&(t="Invalid ingredients"):t="Ingredients is required",t},preparation:function(e){var t;return e?e.length<3&&(t="Invalid preparation"):t="Preparation is required",t},prepTime:function(e){var t;return e||(t="Prep time is required"),t},howToCook:function(e){var t;return e?e.length<3&&(t="Invalid how to cook"):t="How to cook is required",t},cousine:function(){return console.log("validator not needed")},type:function(){return console.log("validator not needed")},image:function(){return console.log("validator not needed")}}),L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={fields:{dishName:"",cousine:"",type:"",image:"",ingredients:"",prepTime:"",preparation:"",howToCook:"",redirect:!1},errors:{dishName:null,cousine:null,type:null,image:null,ingredients:null,prepTime:null,preparation:null,howToCook:null}},r.recipeService=new T,r}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.isValid()&&this.recipeService.create(this.state.fields).then((function(){t.setState({fields:{dishName:"",cousine:"",type:"",image:"",ingredients:"",prepTime:"",preparation:"",howToCook:"",redirect:!0},errors:{dishName:null,cousine:null,type:null,image:null,ingredients:null,prepTime:null,preparation:null,howToCook:null}})})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState({fields:Object(j.a)(Object(j.a)({},this.state.fields),{},Object(c.a)({},n,r)),errors:Object(j.a)(Object(j.a)({},this.state.errors),{},Object(c.a)({},n,I[n](r)))})}},{key:"isValid",value:function(){var e=this.state.errors;return!Object.keys(e).some((function(t){return e[t]}))}},{key:"update",value:function(){var e=this;this.recipeService.updateOne(this.state.id,this.state.fields).then((function(){e.refreshState()})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fields,r=t.errors;return n.redirect?Object(g.jsx)(h.a,{to:"/recipes"}):Object(g.jsx)("div",{className:"field-box",children:Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"dishName",children:"Dish name: "}),Object(g.jsx)("input",{className:"".concat(r.dishName?"error-input":""),type:"text",name:"dishName",value:n.dishName,onChange:function(t){return e.handleChange(t)}}),r.dishName&&Object(g.jsx)("p",{style:{color:"red"},children:r.dishName})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"cousine",children:"Cousine: "}),Object(g.jsx)("input",{className:"".concat(r.cousine?"error-input":""),type:"text",name:"cousine",value:n.cousine,onChange:function(t){return e.handleChange(t)}}),r.cousine&&Object(g.jsx)("p",{style:{color:"red"},children:r.cousine})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"type",children:"Type: "}),Object(g.jsx)("input",{className:"".concat(r.type?"error-input":""),type:"text",name:"type",value:n.type,onChange:function(t){return e.handleChange(t)}}),r.type&&Object(g.jsx)("p",{style:{color:"red"},children:r.type})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"image",children:"Image: "}),Object(g.jsx)("input",{className:"".concat(r.image?"error-input":""),type:"text",name:"image",value:n.image,onChange:function(t){return e.handleChange(t)}}),r.image&&Object(g.jsx)("p",{style:{color:"red"},children:r.image})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"ingredients",children:"Ingredients: "}),Object(g.jsx)("input",{className:"".concat(r.ingredients?"error-input":""),type:"text",name:"ingredients",value:n.ingredients,onChange:function(t){return e.handleChange(t)}}),r.ingredients&&Object(g.jsx)("p",{style:{color:"red"},children:r.ingredients})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"prepTime",children:"Prep time: "}),Object(g.jsx)("input",{className:"".concat(r.prepTime?"error-input":""),type:"text",name:"prepTime",value:n.prepTime,onChange:function(t){return e.handleChange(t)}}),r.prepTime&&Object(g.jsx)("p",{style:{color:"red"},children:r.prepTime})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"preparation",children:"Preparation: "}),Object(g.jsx)("input",{className:"".concat(r.preparation?"error-input":""),type:"text",name:"preparation",value:n.preparation,onChange:function(t){return e.handleChange(t)}}),r.preparation&&Object(g.jsx)("p",{style:{color:"red"},children:r.preparation})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"howToCook",children:"How to cook: "}),Object(g.jsx)("input",{className:"".concat(r.howToCook?"error-input":""),type:"text",name:"howToCook",value:n.howToCook,onChange:function(t){return e.handleChange(t)}}),r.howToCook&&Object(g.jsx)("p",{style:{color:"red"},children:r.howToCook})]}),Object(g.jsx)("button",{className:"create-bt-frm",disabled:!this.isValid(),type:"submit",children:"Create"})]})})}}]),n}(r.Component),F=n(4);n(68);function P(){return Object(g.jsxs)("div",{className:"title-box",children:[Object(g.jsx)("h2",{className:"title-text",children:"CREATING A DISH"}),Object(g.jsx)(L,{}),Object(g.jsx)(F.b,{className:"home-bt",to:"/recipes",children:"Home"})]})}n(69);var q={dishName:function(e){var t;return e?e.length<3&&(t="Invalid dish name"):t="Dish name is required",t},ingredients:function(e){var t;return e?e.length<3&&(t="Invalid ingredients"):t="Ingredients is required",t},preparation:function(e){var t;return e?e.length<3&&(t="Invalid preparation"):t="Preparation is required",t},prepTime:function(e){var t;return e||(t="Prep time is required"),t},howToCook:function(e){var t;return e?e.length<3&&(t="Invalid how to cook"):t="How to cook is required",t},cousine:function(){return console.log("validator not needed")},type:function(){return console.log("validator not needed")},image:function(){return console.log("validator not needed")}},D=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={fields:{dishName:"",cousine:"",type:"",image:"",ingredients:"",prepTime:"",preparation:"",howToCook:""},errors:{dishName:null,cousine:null,type:null,image:null,ingredients:null,prepTime:null,preparation:null,howToCook:null}},r}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.props.match.params.id,n=this.state.fields;this.props.updateOne(t,n)}}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState({fields:Object(j.a)(Object(j.a)({},this.state.fields),{},Object(c.a)({},n,r)),errors:Object(j.a)(Object(j.a)({},this.state.errors),{},Object(c.a)({},n,q[n](r)))})}},{key:"isValid",value:function(){var e=this.state.errors;return!Object.keys(e).some((function(t){return e[t]}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fields,r=t.errors;return Object(g.jsxs)("div",{className:"title-box",children:[Object(g.jsx)("h2",{className:"title-text",children:"UPDATE MY DISH"}),Object(g.jsx)("div",{className:"field-box",children:Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"dishName",children:"Dish name: "}),Object(g.jsx)("input",{className:"".concat(r.dishName?"error-input":""),type:"text",name:"dishName",value:n.dishName,onChange:function(t){return e.handleChange(t)}}),r.dishName&&Object(g.jsx)("p",{style:{color:"red"},children:r.dishName})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"cousine",children:"Cousine: "}),Object(g.jsx)("input",{className:"".concat(r.cousine?"error-input":""),type:"text",name:"cousine",value:n.cousine,onChange:function(t){return e.handleChange(t)}}),r.cousine&&Object(g.jsx)("p",{style:{color:"red"},children:r.cousine})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"type",children:"Type: "}),Object(g.jsx)("input",{className:"".concat(r.type?"error-input":""),type:"text",name:"type",value:n.type,onChange:function(t){return e.handleChange(t)}}),r.type&&Object(g.jsx)("p",{style:{color:"red"},children:r.type})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"image",children:"Image: "}),Object(g.jsx)("input",{className:"".concat(r.image?"error-input":""),type:"text",name:"image",value:n.image,onChange:function(t){return e.handleChange(t)}}),r.image&&Object(g.jsx)("p",{style:{color:"red"},children:r.image})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"ingredients",children:"Ingredients: "}),Object(g.jsx)("input",{className:"".concat(r.ingredients?"error-input":""),type:"text",name:"ingredients",value:n.ingredients,onChange:function(t){return e.handleChange(t)}}),r.ingredients&&Object(g.jsx)("p",{style:{color:"red"},children:r.ingredients})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"prepTime",children:"Prep time: "}),Object(g.jsx)("input",{className:"".concat(r.prepTime?"error-input":""),type:"text",name:"prepTime",value:n.prepTime,onChange:function(t){return e.handleChange(t)}}),r.prepTime&&Object(g.jsx)("p",{style:{color:"red"},children:r.prepTime})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"preparation",children:"Preparation: "}),Object(g.jsx)("input",{className:"".concat(r.preparation?"error-input":""),type:"text",name:"preparation",value:n.preparation,onChange:function(t){return e.handleChange(t)}}),r.preparation&&Object(g.jsx)("p",{style:{color:"red"},children:r.preparation})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"howToCook",children:"How to cook: "}),Object(g.jsx)("input",{className:"".concat(r.howToCook?"error-input":""),type:"text",name:"howToCook",value:n.howToCook,onChange:function(t){return e.handleChange(t)}}),r.howToCook&&Object(g.jsx)("p",{style:{color:"red"},children:r.howToCook})]}),Object(g.jsx)("button",{className:"update-bt",disabled:!this.isValid(),type:"submit",children:"Update Recipe"})]})}),Object(g.jsx)(F.b,{className:"home-bt",to:"/recipes",children:"Home"})]})}}]),n}(r.Component),E=w(Object(h.g)(D)),U=(n(70),{username:function(e){var t;return e?e.length<5&&(t="Invalid username"):t="Username name is required",t},password:function(e){var t;return e?e.length<5&&(t="Invalid password"):t="Password is required",t},email:function(e){var t;return e?e.length<5&&(t="Invalid email"):t="email is required",t}}),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={fields:{username:"",password:"",email:""},errors:{username:null,password:null,email:null}},r}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){if(e.preventDefault(),this.isValid()){var t=this.props.match.params.id,n=this.state.fields;this.props.uploadOne(t,n)}}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState({fields:Object(j.a)(Object(j.a)({},this.state.fields),{},Object(c.a)({},n,r)),errors:Object(j.a)(Object(j.a)({},this.state.errors),{},Object(c.a)({},n,U[n](r)))})}},{key:"isValid",value:function(){var e=this.state.errors;return!Object.keys(e).some((function(t){return e[t]}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fields,r=t.errors;return Object(g.jsxs)("div",{className:"title-box",children:[Object(g.jsx)("h2",{className:"title-text",children:"CHEF PROFILE"}),Object(g.jsx)("div",{className:"field-box",children:Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)("input",{className:"".concat(r.username?"error-input":""),type:"text",name:"username",value:n.username,onChange:function(t){return e.handleChange(t)}}),r.username&&Object(g.jsx)("p",{style:{color:"red"},children:r.username})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(g.jsx)("input",{className:"".concat(r.email?"error-input":""),type:"text",name:"email",value:n.email,onChange:function(t){return e.handleChange(t)}}),r.email&&Object(g.jsx)("p",{style:{color:"red"},children:r.email})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(g.jsx)("input",{className:"".concat(r.password?"error-input":""),type:"text",name:"password",value:n.password,onChange:function(t){return e.handleChange(t)}}),r.password&&Object(g.jsx)("p",{style:{color:"red"},children:r.password})]}),Object(g.jsx)("button",{className:"update-bt",onClick:function(t){return e.props.edit(t)},disabled:!this.isValid(),type:"submit",children:"Update Chef"})]})}),Object(g.jsx)(F.b,{className:"home-bt",to:"/recipes",children:"Home"})]})}}]),n}(r.Component),R=w(Object(h.g)(V)),H=(n(71),{username:function(e){var t;return e||(t="Username is required"),t},password:function(e){var t;return e?e.length<5&&(t="Invalid password"):t="Password is required",t}}),z=w(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={fields:{username:"",password:""},errors:{username:null,password:null}},r}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.isValid()&&this.props.login(this.state.fields)}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState({fields:Object(j.a)(Object(j.a)({},this.state.fields),{},Object(c.a)({},n,r)),errors:Object(j.a)(Object(j.a)({},this.state.errors),{},Object(c.a)({},n,H[n](r)))})}},{key:"isValid",value:function(){var e=this.state.errors;return!Object.keys(e).some((function(t){return e[t]}))}},{key:"render",value:function(){var e=this,t=this.state.fields;return Object(g.jsxs)("div",{className:"home-box",children:[Object(g.jsxs)("form",{className:"form-box",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsx)("input",{className:"login-field",type:"text",name:"username",value:t.username,onChange:function(t){return e.handleChange(t)},placeholder:"Username:"}),Object(g.jsx)("input",{className:"login-field",type:"password",name:"password",value:t.password,onChange:function(t){return e.handleChange(t)},placeholder:"Password:"}),Object(g.jsx)("button",{className:"login-field",disabled:!this.isValid()||!t.username||!t.password,type:"submit",children:"Login"})]}),Object(g.jsx)(F.b,{to:"/signup",children:Object(g.jsx)("button",{className:"signup-bt",children:"Signup"})})]})}}]),n}(r.Component));n(72);var A=w((function(e){var t=e.id,n=e.dishName,r=e.cousine,a=e.type,i=e.image,s=e.ingredients,c=e.prepTime,o=e.preparation,l=e.howToCook,u=e.refreshState,d=new T;return Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("div",{className:"img-container",children:Object(g.jsx)(F.b,{to:"/recipes/".concat(t),children:Object(g.jsx)("img",{class:"img-to-fit",src:i,alt:n})})}),Object(g.jsx)("h3",{className:"card-title",children:n}),Object(g.jsxs)("div",{className:"card-text-container",children:[Object(g.jsx)("p",{className:"card-text",children:r}),Object(g.jsx)("p",{className:"card-text",children:a}),Object(g.jsx)("p",{className:"card-text",children:c})]}),Object(g.jsx)("p",{className:"card-text",children:s&&s}),Object(g.jsx)("p",{className:"card-text",children:o&&o}),Object(g.jsx)("p",{className:"card-text",children:l&&l}),Object(g.jsxs)("div",{className:"buttons-recipe-card",children:[Object(g.jsx)(F.b,{to:"/edit-recipe/".concat(t),children:Object(g.jsx)("button",{className:"corner-left",children:"Edit"})}),Object(g.jsx)("button",{className:"corner-right",onClick:function(){d.deleteOne(t).then((function(){u()})).catch((function(e){return console.error(e)}))},children:"Delete"})]})]})})),M=(n(73),w(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleLogout=function(){r.props.logout()},r.state={recipes:[]},r.recipesService=new T,r}return Object(l.a)(n,[{key:"refreshState",value:function(){var e=this;this.recipesService.get().then((function(t){e.setState({recipes:t.data})})).catch((function(e){return console.error(e)}))}},{key:"componentDidMount",value:function(){this.refreshState()}},{key:"displayRecipes",value:function(){var e=this;return this.state.recipes.map((function(t){return Object(g.jsx)(A,{id:t.id,dishName:t.dishName,cousine:t.cousine,type:t.type,image:t.image,prepTime:t.prepTime,refreshState:function(){return e.refreshState()}},t.id)}))}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"recipes-container",children:0===this.state.recipes.length?Object(g.jsx)("h2",{children:"Lets get dirt, start to cook and create your first Recipe"}):this.displayRecipes()})}}]),n}(a.a.Component)));n(74);function B(){return Object(g.jsxs)("div",{className:"main-recipes",children:[Object(g.jsx)(F.b,{to:"/create-recipe",children:Object(g.jsx)("button",{className:"new-recipe",children:"Create New Recipe"})}),Object(g.jsx)("div",{className:"cards-container",children:Object(g.jsx)(M,{})})]})}function W(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"COME WITH ME IF YOU WANT EAT"}),Object(g.jsx)(A,{}),Object(g.jsx)(F.b,{to:"/recipes",children:Object(g.jsx)("button",{children:"Back to my Creations"})}),Object(g.jsx)(F.b,{to:"/create-recipe",children:Object(g.jsx)("button",{children:"Create new Recipe"})})]})}n(75);var Y=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,G={username:function(e){var t;return e?e.length<3&&(t="Invalid username"):t="Username name is required",t},password:function(e){var t;return e?e.length<3&&(t="Invalid password"):t="Password is required",t},email:function(e){var t;return e?Y.test(e)||(t="Invalid email"):t="email is required",t}},J=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={fields:{username:"",password:"",email:"",redirect:!1},errors:{username:null,password:null,email:null}},r.authService=new f,r}return Object(l.a)(n,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.isValid()&&this.authService.signup(this.state.fields).then((function(){t.setState({fields:{username:"",password:"",email:"",redirect:!0},errors:{username:null,password:null,email:null}})})).catch((function(e){return console.error(e)}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,r=t.value;this.setState({fields:Object(j.a)(Object(j.a)({},this.state.fields),{},Object(c.a)({},n,r)),errors:Object(j.a)(Object(j.a)({},this.state.errors),{},Object(c.a)({},n,G[n](r)))})}},{key:"isValid",value:function(){var e=this.state.errors;return!Object.keys(e).some((function(t){return e[t]}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fields,r=t.errors;return n.redirect?Object(g.jsx)(h.a,{to:"/recipes"}):Object(g.jsx)("div",{className:"field-box",children:Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)("input",{className:"".concat(r.username?"error-input":""),type:"text",name:"username",value:n.username,onChange:function(t){return e.handleChange(t)}}),r.username&&Object(g.jsx)("p",{style:{color:"red"},children:r.username})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(g.jsx)("input",{className:"".concat(r.email?"error-input":""),type:"text",name:"email",value:n.email,onChange:function(t){return e.handleChange(t)}}),r.email&&Object(g.jsx)("p",{style:{color:"red"},children:r.email})]}),Object(g.jsxs)("div",{className:"form-item",children:[Object(g.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(g.jsx)("input",{className:"".concat(r.password?"error-input":""),type:"text",name:"password",value:n.password,onChange:function(t){return e.handleChange(t)}}),r.password&&Object(g.jsx)("p",{style:{color:"red"},children:r.password})]}),Object(g.jsx)("button",{className:"update-bt",disabled:!this.isValid(),type:"submit",children:"Create Chef"})]})})}}]),n}(r.Component);n(76);function $(){return Object(g.jsxs)("div",{className:"title-box",children:[Object(g.jsx)("h2",{className:"title-text",children:"CREATING A CHEF"}),Object(g.jsx)(J,{}),Object(g.jsx)(F.b,{className:"home-bt",to:"/",children:"Login"})]})}n(77);var _=w(function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={user:null},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({user:this.props.user})}},{key:"render",value:function(){var e,t,n=this;return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsxs)("nav",{className:"navbar",children:[Object(g.jsx)("h2",{className:"nav-title",children:"YOUR OWN RECIPES APP"}),this.props.user?Object(g.jsx)("button",{className:"nav-bt",onClick:function(){return n.props.logout()},children:Object(g.jsx)(F.c,{exact:!0,to:"/",children:"Logout"})}):null,this.props.user?Object(g.jsx)("button",{className:"nav-bt",children:Object(g.jsx)(F.c,{exact:!0,to:"/edit-user/:id",children:"Edit User"})}):null]}),Object(g.jsxs)(h.d,{children:[Object(g.jsx)(S,{path:"/create-recipe",component:P}),Object(g.jsx)(S,{exact:!0,path:"/edit-recipe/:id",component:E}),Object(g.jsx)(S,(e={exact:!0,path:"/edit-user/:id"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"component",R),e)),Object(g.jsx)(k,{exact:!0,path:"/",component:z}),Object(g.jsx)(S,{exact:!0,path:"/recipes",component:B}),Object(g.jsx)(S,{exact:!0,path:"/recipes/:id",component:W}),Object(g.jsx)(k,(t={exact:!0,path:"/signup"},Object(c.a)(t,"exact",!0),Object(c.a)(t,"component",$),t)),Object(g.jsx)(h.b,{path:"*",render:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("p2",{children:"404 NOT FOUND"}),Object(g.jsx)("img",{src:"./resources/img/broaken-plate.jpg",alt:"Broaken Plate"})]})}})]})]})}}]),n}(a.a.Component)),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(F.a,{children:Object(g.jsx)(C,{children:Object(g.jsx)(_,{})})})}),document.getElementById("root")),K()}},[[78,1,2]]]);
//# sourceMappingURL=main.5cfa904e.chunk.js.map