(function(e){function t(t){for(var i,o,n=t[0],c=t[1],l=t[2],d=0,m=[];d<n.length;d++)o=n[d],r[o]&&m.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,l||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],i=!0,n=1;n<s.length;n++){var c=s[n];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=i,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var i=s("64a9"),r=s.n(i);r.a},"2d7d":function(e,t,s){"use strict";var i=s("e34d"),r=s.n(i);r.a},3830:function(e,t,s){"use strict";var i=s("e959"),r=s.n(i);r.a},4678:function(e,t,s){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return s(t)}function a(e){var t=i[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"wrapper"},[s("header",{staticClass:"header-transparent header--sticky header--dark",staticStyle:{"min-height":"84px"},attrs:{id:"header"}},[s("nav",{staticClass:"header-nav",attrs:{id:"navigation"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row d-flex flex-md-row align-items-center"},[s("div",{staticClass:"nav-menu ml-auto"},[s("ul",{},[s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/"}},[e._v("Workouts")])],1),s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/workouts/new"}},[e._v("New Workout")])],1),s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/exercises/new"}},[e._v("New Exercise")])],1),s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/logout"}},[e._v("Logout")])],1),s("li",{staticClass:"nav-menu-item"},[s("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)])])])])])])]),e._m(0),s("div",{staticClass:"clearfix"},[s("router-view")],1),e._m(1)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"intro"}},[s("div",{staticClass:"flexslider fullscreen-carousel hero-slider-1 "},[s("ul",{staticClass:"slides"},[s("li",{attrs:{"data-slide":"dark-slide"}},[s("div",{staticClass:"slide-bg-image overlay-light parallax parallax-section1",attrs:{"data-background-img":"img/barbell.png"}},[s("div",{staticClass:"js-Slide-fullscreen-height container"},[s("div",{staticClass:"intro-content"},[s("div",{staticClass:"intro-content-inner"},[s("h2",{staticClass:"h2"},[e._v("Welcome to Rep Set Repeat")]),s("p",{staticClass:"lead"},[e._v("“There are no shortcuts—everything is reps, reps, reps.” - Arnold Schwarzenegger")])])])])])]),s("li",{attrs:{"data-slide":"light-slide"}},[s("div",{staticClass:"slide-bg-image overlay-dark dark-bg parallax parallax-section1",attrs:{"data-background-img":"img/dark-dumbbell.jpg"}},[s("div",{staticClass:"js-Slide-fullscreen-height container"},[s("div",{staticClass:"intro-content"},[s("div",{staticClass:"intro-content-inner"},[s("h2",{staticClass:"h2"},[e._v("“If I have to die tonight, if this weight is going to kill me tonight then so be it, I am dying where I wanna be.”")]),s("p",{staticClass:"lead"},[e._v("- Kai Greene")]),s("br")])])])])]),s("li",{attrs:{"data-slide":"dark-slide"}},[s("div",{staticClass:"slide-bg-image overlay-light parallax parallax-section1",attrs:{"data-background-img":"img/dark-equipment.jpg"}},[s("div",{staticClass:"js-Slide-fullscreen-height container"},[s("div",{staticClass:"intro-content"},[s("div",{staticClass:"intro-content-inner"},[s("h2",{staticClass:"h2"},[e._v("\"I always say to myself right before a tough set in the gym, Ain't nothin' to it, but to do it.\"")]),s("p",{staticClass:"lead"},[e._v("- Ronnie Coleman")]),s("br")])])])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("section",{staticClass:"copyright ptb-60"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row footer-info"},[s("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[s("div",{staticClass:"footer-block"},[s("h6",{staticClass:"link-title"},[e._v("Created By:")]),s("p",[e._v("Leo Gonzalez")]),s("ul",{staticClass:"link"},[s("li",[s("a",{attrs:{href:"https://www.linkedin.com/in/leogonz"}},[s("i"),e._v("My linkedin can be found here!")])]),s("li",[s("a",{attrs:{href:"https://github.com/lgonz053"}},[s("i"),e._v("My Github handle is: lgonz053!")])])])])])])])])])}],o=(s("034f"),s("2877")),n={},c=Object(o["a"])(n,r,a,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sign-up"},[s("div",{staticClass:"container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("h1",[e._v("Signup")]),s("ul",e._l(e.errors,function(t){return s("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Name:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password confirmation:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordConfirmation,expression:"passwordConfirmation"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.passwordConfirmation},on:{input:function(t){t.target.composing||(e.passwordConfirmation=t.target.value)}}})]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},m=[],p=(s("7f7f"),s("bc3a")),v=s.n(p),f={data:function(){return{name:"",email:"",password:"",passwordConfirmation:"",errors:[]}},methods:{submit:function(){var e=this,t={name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation};v.a.post("/api/users",t).then(function(t){e.$router.push("/login")}).catch(function(t){e.errors=t.response.data.errors})}}},h=f,g=Object(o["a"])(h,d,m,!1,null,null,null),w=g.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("h1",[e._v("Login")]),s("ul",e._l(e.errors,function(t){return s("li",{staticClass:"text-danger"},[e._v(e._s(t))])}),0),s("div",{staticClass:"form-group"},[s("label",[e._v("Email:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",[e._v("Password:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Submit"}})])])])},_=[],j={data:function(){return{email:"",password:"",errors:[]}},methods:{submit:function(){var e=this,t={email:this.email,password:this.password};v.a.post("/api/sessions",t).then(function(t){v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,localStorage.setItem("jwt",t.data.jwt),e.$router.push("/")}).catch(function(t){e.errors=["Invalid email or password."],e.email="",e.password=""})}}},k=j,x=Object(o["a"])(k,b,_,!1,null,null,null),C=x.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"})},E=[],P={created:function(){delete v.a.defaults.headers.common["Authorization"],localStorage.removeItem("jwt"),this.$router.push("/login")}},S=P,N=Object(o["a"])(S,y,E,!1,null,null,null),B=N.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"workouts-index"},[e._m(0),s("section",{staticClass:"ptb ptb-sm-80"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("ul",{staticClass:"col container-filter categories-filter"},[s("li",[s("a",{staticClass:"categories active",on:{click:function(t){return e.recentWorkouts()}}},[e._v("Recent Workouts")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.allWorkouts()}}},[e._v("All Workouts")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Legs")}}},[e._v("Legs")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Chest")}}},[e._v("Chest")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Back")}}},[e._v("Back")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Shoulders")}}},[e._v("Shoulders")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Biceps")}}},[e._v("Biceps")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Triceps")}}},[e._v("Triceps")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Abs")}}},[e._v("Abs")])]),s("li",[s("a",{staticClass:"categories",on:{click:function(t){return e.sortByBodyPart("Cardio")}}},[e._v("Cardio")])])])]),s("div",{staticClass:"row container-grid nf-col-3"},e._l(e.workouts,function(t){return s("div",{staticClass:"nf-item branding coffee spacing"},[s("div",{staticClass:"item-box"},[s("router-link",{attrs:{to:"/workouts/"+t.id}},[s("img",{staticClass:"item-container",attrs:{alt:"1",src:"img/plate.jpg"}}),s("div",{staticClass:"item-mask"},[s("div",{staticClass:"item-caption"},[s("h5",{staticClass:"white"},[e._v(e._s(t.muscle_group))]),s("p",{staticClass:"white"},[e._v("Date: "+e._s(e.moment(t.created_at).format("ll")))]),s("p",{staticClass:"white"},[e._v("Workout Length: "+e._s(t.formatted.time_limit))])])])])],1)])}),0)])])])},D=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"pt pt-sm-80",attrs:{id:"about"}},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"col-md-8 offset-md-2"}),s("h2",[s("span",{staticClass:"color"},[e._v("WorkOuts.")])])])])])])}],$=s("bc3a"),z=s("c1df"),W={data:function(){return{workouts:[]}},created:function(){var e=this;$.get("/api/workouts").then(function(t){var s;s=t.data.length<12?t.data.length:12;for(var i=0;i<s;i++)e.workouts.push(t.data[i])}).catch(function(t){e.$router.push("/login")})},methods:{moment:function(e){return z(e)},recentWorkouts:function(){var e=this;$.get("/api/workouts").then(function(t){var s,i=[];s=t.data.length<12?t.data.length:12;for(var r=0;r<s;r++){var a=t.data[r];i.push(a)}e.workouts=i})},allWorkouts:function(){var e=this;console.log("All Workouts"),$.get("/api/workouts").then(function(t){e.workouts=t.data})},sortByBodyPart:function(e){var t=this;$.get("/api/workouts").then(function(s){for(var i=[],r=0;r<s.data.length;r++){var a=s.data[r];a.muscle_group===e&&i.push(a),t.workouts=i}})}}},O=W,I=(s("2d7d"),Object(o["a"])(O,M,D,!1,null,null,null)),T=I.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"workouts-new"},[s("h1",[e._v("New Workout")]),s("ul",e._l(e.errors,function(t){return s("li",[e._v(e._s(t))])}),0),s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("div",[e._v("Muscle Groups To Choose From:")]),s("div",[e._v("Legs | Chest | Back | Shoulders | Biceps | Triceps | Abs | Cardio")]),s("br"),s("div",[e._v("\n      Muscle Group: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMuscleGroup,expression:"newMuscleGroup"}],domProps:{value:e.newMuscleGroup},on:{input:function(t){t.target.composing||(e.newMuscleGroup=t.target.value)}}})]),s("h3",[e._v("Time Limit")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedHour,expression:"selectedHour"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedHour=t.target.multiple?s:s[0]}}},e._l(e.hours,function(t){return s("option",{domProps:{value:t}},[e._v(e._s(t)+" Hours")])}),0),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedMinute,expression:"selectedMinute"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedMinute=t.target.multiple?s:s[0]},function(t){return e.hoursMinutes()}]}},[s("option",{domProps:{value:0}},[e._v("00 Minutes")]),s("option",{domProps:{value:.25}},[e._v("15 Minutes")]),s("option",{domProps:{value:.5}},[e._v("30 Minutes")]),s("option",{domProps:{value:.75}},[e._v("45 Minutes")])]),s("input",{attrs:{type:"submit",value:"Create New Workout"}})])])},A=[],G=s("59ad"),U=s.n(G),R=s("e814"),H=s.n(R),V=s("bc3a"),F={data:function(){return{newMuscleGroup:"",newHour:0,newMinute:0,newTimeLimit:0,hours:[0,1,2,3,4,5,6,7,8,9],minutes:[0,.15,.3,.45],selectedHour:0,selectedMinute:0,errors:[]}},created:function(){},methods:{submit:function(){var e=this;console.log(H()(this.selectedMinute));var t={muscle_group:this.newMuscleGroup,time_limit:U()(this.selectedHour)+U()(this.selectedMinute)};V.post("/api/workouts",t).then(function(t){console.log("Success",t.data),e.$router.push("/")}).catch(function(t){e.errors=t.response.data.errors})},hoursMinutes:function(){this.newHour=0,this.newMinute=0,this.newTimeLimit=0,this.newHour+=this.selectedHour,this.newMinute+=this.selectedMinute,this.newTimeLimit=this.selectedHour+this.selectedMinute}}},q=F,J=(s("3830"),Object(o["a"])(q,L,A,!1,null,null,null)),K=J.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"workouts-show"},[s("h1",[e._v("Current Workout")]),s("div",[e._v("\n    Exercise Name:\n\n    "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedExerciseId,expression:"selectedExerciseId"}],attrs:{id:"names"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedExerciseId=t.target.multiple?s:s[0]}}},e._l(e.exercises,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}),0),s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("div",[e._v("\n        Set: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newSet,expression:"newSet"}],domProps:{value:e.newSet},on:{input:function(t){t.target.composing||(e.newSet=t.target.value)}}})]),s("div",[e._v("\n        Reps: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newReps,expression:"newReps"}],domProps:{value:e.newReps},on:{input:function(t){t.target.composing||(e.newReps=t.target.value)}}})]),s("div",[e._v("\n        Weight: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newWeight,expression:"newWeight"}],domProps:{value:e.newWeight},on:{input:function(t){t.target.composing||(e.newWeight=t.target.value)}}})]),s("input",{attrs:{type:"submit",value:"Create Set"}})])]),s("button",{on:{click:function(t){return e.hideShowDelete()}}},[e._v("Edit Sets")]),e._l(e.workout.workout_sets,function(t){return s("div",[e.displayDeleteButton?s("span",[s("button",{attrs:{type:"click"},on:{click:function(s){return e.destroySet(t.id)}}},[e._v("Delete Set")])]):e._e(),e._v("\n    "+e._s(t.exercise.name)+" |\n    Set: "+e._s(t.groups)+" |\n    Reps: "+e._s(t.reps)+" |\n    Weight: "+e._s(t.weight)+" |\n    Volume: "+e._s(t.total_volume)+" |\n  ")])}),s("div",[s("button",{on:{click:function(t){return e.calculate()}}},[e._v("Calculate Total Volume")]),e._v("\n    Total Volume Today: "+e._s(e.volumePerDay)+"\n  ")]),s("div",[s("router-link",{attrs:{to:"/workouts/"+e.workout.id+"/edit"}},[s("button",[e._v("Edit Workout")])])],1)],2)},X=[],Y=s("bc3a"),Z={data:function(){return{workout:[{id:"",user_id:"",muscle_group:"",time_limit:"",created_at:"",workout_sets:[{id:"",workout_id:"",exercise_id:"",groups:"",reps:"",weight:"",total_volume:"",exercise:{id:"",name:"",description:"",video_url:""}}]}],selectedExerciseId:"",selectedWorkoutSetId:"",exercises:[],newSet:"",newReps:"",newWeight:"",total_volume:"",volumePerDay:0,displayDeleteButton:!1,titleFilter:"",errors:[]}},created:function(){var e=this;Y.get("/api/exercises").then(function(t){e.exercises=t.data}),Y.get("/api/workouts/"+this.$route.params.id).then(function(t){e.workout=t.data})},methods:{submit:function(){var e=this,t={workout_id:this.$route.params.id,exercise_id:this.selectedExerciseId,groups:this.newSet,reps:this.newReps,weight:this.newWeight};Y.post("/api/workout_sets",t).then(function(t){e.workout.workout_sets.push(t.data)}).catch(function(t){e.errors=t.response.data.errors})},calculate:function(){var e=this.workout.workout_sets;this.volumePerDay=0;for(var t=0;t<e.length;t++){var s=e[t];this.volumePerDay+=s["total_volume"]}},destroySet:function(e){var t=this;Y.delete("/api/workout_sets/"+e).then(function(e){console.log("Success",e.data),t.$router.go("/workouts/"+t.$route.params.id)})},hideShowDelete:function(){this.displayDeleteButton?this.displayDeleteButton=!1:this.displayDeleteButton=!0}}},ee=Z,te=Object(o["a"])(ee,Q,X,!1,null,null,null),se=te.exports,ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"workouts-edit"},[s("h1",[e._v("Edit Workout")]),s("ul",e._l(e.errors,function(t){return s("li",[e._v(e._s(t))])}),0),s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("div",[e._v("Muscle Groups To Choose From:")]),s("div",[e._v("Legs | Chest | Back | Shoulders | Biceps | Triceps | Abs | Cardio")]),s("br"),s("div",[e._v("\n        Muscle Group: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.workout.muscle_group,expression:"workout.muscle_group"}],domProps:{value:e.workout.muscle_group},on:{input:function(t){t.target.composing||e.$set(e.workout,"muscle_group",t.target.value)}}})]),s("div",[e._v("\n        Time Limit: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.workout.time_limit,expression:"workout.time_limit"}],domProps:{value:e.workout.time_limit},on:{input:function(t){t.target.composing||e.$set(e.workout,"time_limit",t.target.value)}}})]),s("input",{attrs:{type:"submit",value:"Update"}}),s("button",{attrs:{type:"submit",value:"Delete"},on:{click:function(t){return e.destroyWorkout(e.workout.id)}}},[e._v("Delete")])])])},re=[],ae=s("bc3a"),oe={data:function(){return{workout:{muscle_group:"",time_limit:""},errors:[]}},created:function(){var e=this;ae.get("/api/workouts/"+this.$route.params.id).then(function(t){console.log(t.data),e.workout=t.data})},methods:{submit:function(){var e=this,t={muscle_group:this.workout.muscle_group,time_limit:this.workout.time_limit};ae.patch("/api/workouts/"+this.workout.id,t).then(function(t){e.$router.push("/workouts/"+e.workout.id)}).catch(function(t){e.errors=t.response.data.errors})},destroyWorkout:function(e){var t=this;ae.delete("/api/workouts/"+e).then(function(e){console.log("Success",e.data),t.$router.push("/")})}}},ne=oe,ce=Object(o["a"])(ne,ie,re,!1,null,null,null),le=ce.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"exercises-new"},[s("h1",[e._v("Create a new exercise")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[s("div",[e._v("\n      Name: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newExerciseName,expression:"newExerciseName"}],domProps:{value:e.newExerciseName},on:{input:function(t){t.target.composing||(e.newExerciseName=t.target.value)}}})]),s("div",[e._v("\n      Description: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newExerciseDescription,expression:"newExerciseDescription"}],domProps:{value:e.newExerciseDescription},on:{input:function(t){t.target.composing||(e.newExerciseDescription=t.target.value)}}})]),s("div",[e._v("\n      Video Url (optional): "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.newExerciseUrl,expression:"newExerciseUrl"}],domProps:{value:e.newExerciseUrl},on:{input:function(t){t.target.composing||(e.newExerciseUrl=t.target.value)}}})]),s("input",{attrs:{type:"submit",value:"Create"}})]),s("div",[s("h2",[e._v("Edit Exercise:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedExerciseId,expression:"selectedExerciseId"}],on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedExerciseId=t.target.multiple?s:s[0]},function(t){return e.getExercise()}]}},e._l(e.exercises,function(t){return s("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}),0),s("form",{on:{submit:function(t){return t.preventDefault(),e.editExercise()}}},[e._v("\n      Name: "+e._s(e.exercise.name)),s("br"),e._v("\n      Description: "+e._s(e.exercise.description)),s("br"),e._v("\n      Video Url: "+e._s(e.exercise.video_url)+"\n      "),s("div",[e._v("\n        Name: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.exercise.name,expression:"exercise.name"}],domProps:{value:e.exercise.name},on:{input:function(t){t.target.composing||e.$set(e.exercise,"name",t.target.value)}}})]),s("div",[e._v("\n        Description: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.exercise.description,expression:"exercise.description"}],domProps:{value:e.exercise.description},on:{input:function(t){t.target.composing||e.$set(e.exercise,"description",t.target.value)}}})]),s("div",[e._v("\n        Video Url: "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.exercise.video_url,expression:"exercise.video_url"}],domProps:{value:e.exercise.video_url},on:{input:function(t){t.target.composing||e.$set(e.exercise,"video_url",t.target.value)}}})]),s("input",{attrs:{type:"submit",value:"Edit Exercise"}})])])])},de=[],me=s("bc3a"),pe={data:function(){return{newExerciseName:"",newExerciseDescription:"",newExerciseUrl:"",exercises:{id:"",name:"",description:"",video_url:""},selectedExerciseId:"",exercise:{id:"",name:"",description:"",video_url:""}}},created:function(){var e=this;me.get("/api/exercises").then(function(t){e.exercises=t.data})},methods:{submit:function(){var e=this,t={name:this.newExerciseName,description:this.newExerciseDescription,video_url:this.newExerciseUrl};me.post("/api/exercises",t).then(function(t){console.log("Success",t.data),e.$router.push("/")}).catch(function(t){e.errors=t.response.data.errors})},getExercise:function(){var e=this;me.get("/api/exercises/"+this.selectedExerciseId).then(function(t){e.exercise=t.data})},editExercise:function(){var e=this,t={name:this.exercise.name,description:this.exercise.description,video_url:this.exercise.video_url};me.patch("api/exercises/"+this.selectedExerciseId,t).then(function(t){e.$router.push("/")}).catch(function(t){e.errors=t.response.data.errors})}}},ve=pe,fe=Object(o["a"])(ve,ue,de,!1,null,null,null),he=fe.exports;i["a"].use(u["a"]);var ge=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"workouts-index",component:T},{path:"/signup",name:"sign-up",component:w},{path:"/login",name:"login",component:C},{path:"/logout",name:"logout",component:B},{path:"/workouts/new",name:"workouts-new",component:K},{path:"/workouts/:id",name:"workouts-show",component:se},{path:"/workouts/:id/edit",name:"workouts-edit",component:le},{path:"/exercises/new",name:"exercises-new",component:he}]});v.a.defaults.baseURL="/";var we=localStorage.getItem("jwt");we&&(v.a.defaults.headers.common["Authorization"]="Bearer "+we),i["a"].config.productionTip=!1,new i["a"]({router:ge,render:function(e){return e(l)}}).$mount("#app")},"64a9":function(e,t,s){},e34d:function(e,t,s){},e959:function(e,t,s){}});
//# sourceMappingURL=app.ea4b0be2.js.map