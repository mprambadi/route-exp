(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{297:function(e,a,r){"use strict";r.r(a);var t={};r.r(t),r.d(t,"registerAction",function(){return g}),r.d(t,"registerSuccess",function(){return w}),r.d(t,"onRegister",function(){return E}),r.d(t,"registerError",function(){return v});var n=r(28),i=r(29),l=r(31),o=r(30),s=r(32),d=r(1),u=r.n(d),c=r(8),m=r(15),p=r(9),b=r(160),f=r(120),h=r(21),g=function(e){var a=e.values,r=e.setFieldError,t=e.history;return function(e){e(E()),setTimeout(function(){if("coba@gmail.com"===a.email)return r("email","email has used"),void e(v());e(w()),t.push("/dashboard")},1e3)}},w=function(e){return{type:h.c,payload:e}},E=function(){return{type:h.a}},v=function(e){return{type:h.b,payload:e}},y=function(e){return e.register.loading},j=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.values,r=e.touched,t=e.errors,n=e.handleChange,i=e.handleBlur,l=e.isValid,o=e.handleSubmit,s=e.loading;return u.a.createElement(p.l,{className:"mt-5"},u.a.createElement(p.a,{sm:"12",md:{size:4,offset:4}},u.a.createElement("form",{onSubmit:o},u.a.createElement(p.e,null,u.a.createElement(p.g,{for:"exampleEmail"},"Email"),u.a.createElement(p.f,{type:"text",onChange:n,onBlur:i,value:a.email,name:"email",id:"exampleEmail",placeholder:"email",valid:!t.email&&r.email,invalid:t.email&&r.email}),u.a.createElement(p.d,null,t.email)),u.a.createElement(p.e,null,u.a.createElement(p.g,{for:"examplePassword"},"Password"),u.a.createElement(p.f,{type:"password",name:"password",onChange:n,onBlur:i,value:a.password,id:"examplePassword",placeholder:"password",valid:!t.password&&r.password,invalid:t.password&&r.password}),u.a.createElement(p.d,null,t.password)),u.a.createElement("button",{color:"primary",type:"submit",className:"btn btn-block btn-primary ld-ext-right ".concat(s&&"running"),disabled:!l||s},"Submit",u.a.createElement("div",{className:"ld ld-ring ld-spin"})))))}}]),a}(d.Component),O=f.object().shape({password:f.string().min(2,"Too Short!").max(70,"Too Long!").required("Required"),email:f.string().email("Invalid email").required("Required")}),x=Object(b.a)({mapPropsToValues:function(){return{email:"coba@gmail.com",password:"",loading:!1}},validationSchema:O,handleSubmit:function(e,a){var r=a.setFieldValue,t=a.setFieldError,n=a.props,i=n.history;(0,n.registerAction)({values:e,setFieldError:t,setFieldValue:r,history:i})}});a.default=Object(c.d)(Object(m.b)(function(e){return{loading:y(e)}},t),x)(j)}}]);
//# sourceMappingURL=4.2ca9ec0f.chunk.js.map