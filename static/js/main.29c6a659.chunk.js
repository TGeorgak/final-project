(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a(19),s=a.n(i),r=a(122),l=a.n(r),c=(a(136),a(126)),o=a(33);a(137),a(138);var d=function(e){var t=e.sName;return Object(n.jsxs)("div",{id:"StatePage-container",children:[Object(n.jsx)("div",{className:"a-api_feed_title",children:"PUBLIC COMMENT"}),Object(n.jsx)("div",{className:"a-api_feed_container"}),Object(n.jsx)("div",{className:"a-state_name_container",children:Object(n.jsx)("h2",{children:t})}),Object(n.jsx)("div",{className:"a-state_info_container"})]})},u=(a(139),a(77)),v=a(95),h=a(124),j=a(127);a(141);var b=function(e){var t=Object(o.f)();return Object(i.useEffect)((function(){u.d(j.a);var a=u.b("chartdiv",v.b);a.geodata=h.a,a.projection=new v.d.AlbersUsa;var n=a.series.push(new v.c);n.heatRules.push({property:"fill",target:n.mapPolygons.template,min:a.colors.getIndex(8).brighten(3),max:a.colors.getIndex(8).brighten(-.3)}),n.useGeodata=!0,n.data=[{id:"US-AL",value:4447100},{id:"US-AK",value:626932},{id:"US-AZ",value:5130632},{id:"US-AR",value:2673400},{id:"US-CA",value:33871648},{id:"US-CO",value:4301261},{id:"US-CT",value:3405565},{id:"US-DE",value:783600},{id:"US-FL",value:15982378},{id:"US-GA",value:8186453},{id:"US-HI",value:1211537},{id:"US-ID",value:1293953},{id:"US-IL",value:12419293},{id:"US-IN",value:6080485},{id:"US-IA",value:2926324},{id:"US-KS",value:2688418},{id:"US-KY",value:4041769},{id:"US-LA",value:4468976},{id:"US-ME",value:1274923},{id:"US-MD",value:5296486},{id:"US-MA",value:6349097},{id:"US-MI",value:9938444},{id:"US-MN",value:4919479},{id:"US-MS",value:2844658},{id:"US-MO",value:5595211},{id:"US-MT",value:902195},{id:"US-NE",value:1711263},{id:"US-NV",value:1998257},{id:"US-NH",value:1235786},{id:"US-NJ",value:8414350},{id:"US-NM",value:1819046},{id:"US-NY",value:18976457},{id:"US-NC",value:8049313},{id:"US-ND",value:642200},{id:"US-OH",value:11353140},{id:"US-OK",value:3450654},{id:"US-OR",value:3421399},{id:"US-PA",value:12281054},{id:"US-RI",value:1048319},{id:"US-SC",value:4012012},{id:"US-SD",value:754844},{id:"US-TN",value:5689283},{id:"US-TX",value:20851820},{id:"US-UT",value:2233169},{id:"US-VT",value:608827},{id:"US-VA",value:7078515},{id:"US-WA",value:5894121},{id:"US-WV",value:1808344},{id:"US-WI",value:5363675},{id:"US-WY",value:493782}];var i=a.createChild(v.a);i.id="heatLegend",i.series=n,i.align="right",i.valign="bottom",i.width=u.c(35),i.marginRight=u.c(4),i.background.fill=u.a("#000"),i.background.fillOpacity=.05,i.padding(5,5,5,5),i.valueAxis.axisRanges.create().label.horizontalCenter="left",i.valueAxis.axisRanges.create().label.horizontalCenter="right",i.valueAxis.renderer.labels.template.adapter.add("text",(function(e){return""})),n.events.on("datavalidated",(function(e){var t=e.target.map.getKey("heatLegend"),a=t.series.dataItem.values.value.low,n=t.valueAxis.axisRanges.getIndex(0);n.value=a,n.label.text=""+t.numberFormatter.format(a);var i=t.series.dataItem.values.value.high,s=t.valueAxis.axisRanges.getIndex(1);s.value=i,s.label.text=""+t.numberFormatter.format(i)}));var s=n.mapPolygons.template;s.tooltipText="{name}: {value}",s.nonScalingStroke=!0,s.strokeWidth=.5,s.states.create("hover").properties.fill=u.a("#3c5bdc");s.events.on("hit",(function(a){var n;n=a.target.dataItem.dataContext.name,e.setSName(n),t.push("/state-page")}))}),[e,t]),Object(n.jsx)("div",{id:"chartdiv"})};var m=function(e){var t=e.setSName,a=e.chart;return Object(n.jsxs)("div",{id:"home-container",children:[Object(n.jsx)("div",{className:"b-label-title",children:"title"}),Object(n.jsx)("div",{className:"b-updated-lable",children:"update box"}),Object(n.jsx)("div",{className:"b-tweet-label",children:"tweet"}),Object(n.jsx)("div",{className:"b-info-updater",children:"info box"}),Object(n.jsx)("div",{className:"b-tweet-container",children:"tweet container"}),Object(n.jsx)("div",{className:"b-us-map",children:Object(n.jsx)(b,{map:a,setSName:t})})]})},g=(a(146),a(87));var p=function(e){return Object(n.jsxs)("div",{id:"nav-container",children:[Object(n.jsx)("div",{className:"sub-nav-title",children:"COVID APP"}),Object(n.jsx)("div",{className:"sub-nav-home-button",children:Object(n.jsx)(g.b,{to:"/",children:"HOME"})})]})},f=a(59),O=a(60),S=a(90),x=a(89);var U=function(e){var t=Object(n.jsxs)("div",{className:"nav-login-signup",children:[Object(n.jsx)("div",{className:"sub-nav-login-button",onClick:function(){return e.display_form("login")},children:"Login"}),Object(n.jsx)("div",{className:"sub-nav-signup-button",onClick:function(){return e.display_form("signup")},children:"Signup"})]}),a=Object(n.jsx)("ul",{children:Object(n.jsx)("li",{onClick:e.handle_logout,children:"logout"})});return Object(n.jsx)("div",{children:e.logged_in?a:t})},_=a(114),y=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(_.a)({},e);return t[a]=n,t}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("form",{onSubmit:function(t){return e.props.handle_login(t,e.state)},children:[Object(n.jsx)("h4",{children:"Log In"}),Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(n.jsx)("input",{type:"submit"})]})}}]),a}(s.a.Component),N=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={username:"",password:""},e.handle_change=function(t){var a=t.target.name,n=t.target.value;e.setState((function(e){var t=Object(_.a)({},e);return t[a]=n,t}))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this;return console.log("sign up form is called"),Object(n.jsxs)("form",{onSubmit:function(t){return e.props.handle_signup(t,e.state)},children:[Object(n.jsx)("h4",{children:"Sign Up"}),Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handle_change}),Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handle_change}),Object(n.jsx)("input",{type:"submit"})]})}}]),a}(s.a.Component),C="http://localhost:8000/",w=function(e){Object(S.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).handle_login=function(e,t){e.preventDefault(),fetch("".concat(C,"token-auth/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.user.username})}))},n.handle_signup=function(e,t){e.preventDefault(),fetch("".concat(C,"covid/users/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.token),n.setState({logged_in:!0,displayed_form:"",username:e.username})}))},n.handle_logout=function(){localStorage.removeItem("token"),n.setState({logged_in:!1,username:""})},n.display_form=function(e){n.setState({displayed_form:e})},n.state={displayed_form:"",logged_in:!!localStorage.getItem("token"),username:""},n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.logged_in&&fetch("".concat(C,"/covid/current_user/"),{headers:{Authorization:"JWT ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username})}))}},{key:"render",value:function(){var e;switch(this.state.displayed_form){case"login":e=Object(n.jsx)(y,{handle_login:this.handle_login});break;case"signup":e=Object(n.jsx)(N,{handle_signup:this.handle_signup});break;default:e=null}return Object(n.jsxs)("div",{children:[Object(n.jsx)(U,{logged_in:this.state.logged_in,display_form:this.display_form,handle_logout:this.handle_logout}),e,Object(n.jsx)("h3",{children:this.state.logged_in?"Hello, ".concat(this.state.username):""})]})}}]),a}(s.a.Component);var I=function(e){var t=Object(i.useState)(""),a=Object(c.a)(t,2),s=a[0],r=a[1];return Object(n.jsxs)("div",{id:"app-container",children:[Object(n.jsxs)("div",{className:"nav-bar",children:[Object(n.jsx)(w,{}),Object(n.jsx)(p,{})]}),Object(n.jsx)("div",{className:"body-container",children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(m,{setSName:r})}}),Object(n.jsx)(o.a,{exact:!0,path:"/state-page",render:function(e){return Object(n.jsx)(d,{sName:s})}})]})})]})},k=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,353)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),s(e),r(e)}))};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g.a,{basename:"/",children:Object(n.jsx)(I,{})})}),document.getElementById("root")),k()}},[[147,1,4]]]);
//# sourceMappingURL=main.29c6a659.chunk.js.map