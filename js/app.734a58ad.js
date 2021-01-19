(function(e){function r(r){for(var o,i,n=r[0],m=r[1],l=r[2],d=0,f=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in m)Object.prototype.hasOwnProperty.call(m,o)&&(e[o]=m[o]);u&&u(r);while(f.length)f.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var e,r=0;r<s.length;r++){for(var t=s[r],o=!0,n=1;n<t.length;n++){var m=t[n];0!==a[m]&&(o=!1)}o&&(s.splice(r--,1),e=i(i.s=t[0]))}return e}var o={},a={app:0},s=[];function i(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)i.d(t,o,function(r){return e[r]}.bind(null,o));return t},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="/vueform/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],m=n.push.bind(n);n.push=r,n=n.slice();for(var l=0;l<n.length;l++)r(n[l]);var u=m;s.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),a=t("1dce"),s=t.n(a),i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container mt-4"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6 mx-auto"},[t("form",{on:{submit:function(r){return r.preventDefault(),e.registrationUser(r)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Имя")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.name,expression:"formReg.name"}],staticClass:"form-control",class:{"is-invalid":e.$v.formReg.name.$error},attrs:{type:"text",id:"name"},domProps:{value:e.formReg.name},on:{blur:function(r){return e.$v.formReg.name.$touch()},input:function(r){r.target.composing||e.$set(e.formReg,"name",r.target.value)}}}),e.$v.formReg.name.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"surname"}},[e._v("Фамилия")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.surname,expression:"formReg.surname"}],staticClass:"form-control",attrs:{type:"text",id:"surname"},domProps:{value:e.formReg.surname},on:{input:function(r){r.target.composing||e.$set(e.formReg,"surname",r.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.email,expression:"formReg.email"}],staticClass:"form-control",class:{"is-invalid":e.$v.formReg.email.$error},attrs:{type:"email",id:"email"},domProps:{value:e.formReg.email},on:{blur:function(r){return e.$v.formReg.email.$touch()},input:function(r){r.target.composing||e.$set(e.formReg,"email",r.target.value)}}}),e.$v.formReg.email.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),e.$v.formReg.email.email?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" Поле должно быть email адресом ")])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"password"}},[e._v("Пароль")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.password,expression:"formReg.password"}],staticClass:"form-control",class:{"is-invalid":e.$v.formReg.password.$error},attrs:{type:"password",id:"password","aria-describedby":"check"},domProps:{value:e.formReg.password},on:{blur:function(r){return e.$v.formReg.password.$touch()},input:function(r){r.target.composing||e.$set(e.formReg,"password",r.target.value)}}}),e.$v.formReg.password.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),e.$v.formReg.password.minLength?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" Пароль должен содержать не менее 6 символов ")])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"passwordConfirm"}},[e._v("Повторите пароль")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.passwordConfirm,expression:"formReg.passwordConfirm"}],staticClass:"form-control",class:{"is-invalid":e.$v.formReg.passwordConfirm.$error},attrs:{type:"password",id:"passwordConfirm"},domProps:{value:e.formReg.passwordConfirm},on:{blur:function(r){return e.$v.formReg.passwordConfirm.$touch()},input:function(r){r.target.composing||e.$set(e.formReg,"passwordConfirm",r.target.value)}}}),e.$v.formReg.passwordConfirm.required?e._e():t("div",{staticClass:"invalid-feedback"},[e._v(" "+e._s(e.reqText)+" ")]),!e.$v.formReg.passwordConfirm.sameAsPassword&&e.$v.formReg.passwordConfirm.required?t("div",{staticClass:"invalid-feedback"},[e._v(" Пароли не совпадают ")]):e._e()]),t("button",{staticClass:"btn btn-primary",attrs:{disabled:e.disabledButtonSubmit,type:"submit"}},[e._v("Зарегистрироваться")])])])])])},n=[],m=(t("b0c0"),t("b5ae")),l={data:function(){return{reqText:"Поле обязательно для заполнения",formReg:{name:"",surname:"",email:"",password:"",passwordConfirm:""}}},computed:{disabledButtonSubmit:function(){return this.$v.formReg.name.$invalid||this.$v.formReg.email.$invalid||this.$v.formReg.password.$invalid||this.$v.formReg.passwordConfirm.$invalid}},methods:{registrationUser:function(){for(var e in console.log("Регистрация прошла успешно!"),this.formReg)this.formReg[e]="",this.$v.$reset()}},validations:{formReg:{name:{required:m["required"]},email:{required:m["required"],email:m["email"]},password:{required:m["required"],minLength:Object(m["minLength"])(6)},passwordConfirm:{required:m["required"],sameAsPassword:Object(m["sameAs"])("password")}}}},u=l,d=t("2877"),f=Object(d["a"])(u,i,n,!1,null,null,null),c=f.exports;o["a"].config.productionTip=!1,o["a"].use(s.a),new o["a"]({render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.734a58ad.js.map