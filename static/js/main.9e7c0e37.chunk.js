(this["webpackJsonpintegrated-quest-app-fe"]=this["webpackJsonpintegrated-quest-app-fe"]||[]).push([[0],{160:function(e,n,t){e.exports={button:"Button_button__1Tx3a"}},161:function(e,n,t){e.exports={text:"Login_text__12Ijz"}},194:function(e,n){},196:function(e,n){},206:function(e,n){},208:function(e,n){},235:function(e,n){},236:function(e,n){},241:function(e,n){},243:function(e,n){},25:function(e,n,t){e.exports={headerContainer:"Screen_headerContainer__3aY5G",header:"Screen_header__3xIOM",contentContainer:"Screen_contentContainer__1OTd9",content:"Screen_content__2dtTO",footerContainer:"Screen_footerContainer__1oCNZ",footer:"Screen_footer__31-vm"}},250:function(e,n){},269:function(e,n){},308:function(e,n,t){},309:function(e,n,t){"use strict";t.r(n);var a,c=t(0),r=t.n(c),o=t(157),i=t.n(o),s=t(9),l=t(30),u=t(310),d=t(159),h=t(1),j=new u.a,f=function(e){var n=e.children;return Object(h.jsx)(l.a,{children:Object(h.jsx)(d.a,{client:j,children:n})})},b=t(15);!function(e){e.Home="/home",e.Login="/login",e.Signup="/signup"}(a||(a={}));var p,m=function(e){var n=e.children,t=e.to;return Object(h.jsx)(l.b,{to:t,children:n})},x=t(60),O=t.n(x),g=function(e){var n=e.title,t=e.icon;return Object(h.jsxs)("div",{className:O.a.titleContainer,children:[t&&Object(h.jsx)("div",{className:O.a.icon,children:t}),Object(h.jsx)("div",{className:O.a.title,children:n})]})},v=t(160),_=t.n(v),C=function(e){var n=e.title,t=e.onClick;return Object(h.jsx)("button",{className:_.a.button,onClick:t,children:n})},w=t(25),k=t.n(w),y=function(e){var n=e.children;return Object(h.jsx)("div",{className:k.a.screen,children:n})};function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function E(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function N(e,n){var t=e.title,a=e.titleId,r=E(e,["title","titleId"]);return c.createElement("svg",S({width:20,height:10,viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},r),t?c.createElement("title",{id:a},t):null,p||(p=c.createElement("path",{d:"M10.5416 3.33333C9.85831 1.39167 8.00831 0 5.83331 0C3.07498 0 0.833313 2.24167 0.833313 5C0.833313 7.75833 3.07498 10 5.83331 10C8.00831 10 9.85831 8.60833 10.5416 6.66667H14.1666V10H17.5V6.66667H19.1666V3.33333H10.5416ZM5.83331 6.66667C4.91665 6.66667 4.16665 5.91667 4.16665 5C4.16665 4.08333 4.91665 3.33333 5.83331 3.33333C6.74998 3.33333 7.49998 4.08333 7.49998 5C7.49998 5.91667 6.74998 6.66667 5.83331 6.66667Z",fill:"white"})))}y.Header=function(e){var n=e.children;return Object(h.jsx)("div",{className:k.a.headerContainer,children:Object(h.jsx)("div",{className:k.a.header,children:n})})},y.Content=function(e){var n=e.children;return Object(h.jsx)("div",{className:k.a.contentContainer,children:Object(h.jsx)("div",{className:k.a.content,children:n})})},y.Footer=function(e){var n=e.children;return Object(h.jsx)("div",{className:k.a.footerContainer,children:Object(h.jsx)("div",{className:k.a.footer,children:n})})};var I=c.forwardRef(N),P=(t.p,t(43)),T=t.n(P),A=t(311),H=t(92),L=t.n(H),V=t(93),R=t.n(V),W="token",B=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=R.a.AES.encrypt(e,W).toString();n?L.a.set(W,t,{expires:3}):window.sessionStorage.setItem(W,t)},F=function(){var e=L.a.get(W);return e||(e=window.sessionStorage.getItem(W)),e?R.a.AES.decrypt(e,W).toString():null},q=function(){var e=Object(s.g)(),n=Object(c.useState)([]),t=Object(b.a)(n,2),r=t[0],o=t[1],i=Object(A.a)(z,{onError:function(e){o([{field:"email",message:e.message}])}}),l=Object(A.a)(M,{onError:function(e){o([{field:"email",message:e.message}])}});return{login:function(n){o([]);var t=U(n);0===t.length?i.mutate(n,{onSuccess:function(n){B(n.accessToken),e.push(a.Home)}}):o(t)},signup:function(n){o([]);var t=U(n.credential);n.isPolicyChecked||t.push({field:"policy",message:"Read and agree with privacy policy before sign in"}),0===t.length?l.mutate(n.credential,{onSuccess:function(t){B(t.accessToken,n.isRememberChecked),e.push(a.Home)}}):o(t)},errors:r}},U=function(e){var n=[];return 0===e.email.length?n.push({field:"email",message:"Please enter email"}):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||n.push({field:"email",message:"Please enter a valid email address"}),e.password.length<8&&n.push({field:"password",message:"Password must contain at least 8 characters, including numbers, uppercase, and special characters"}),n},z=function(e){return T.a.get("/login",{headers:{Authorization:"Basic ".concat(btoa("".concat(e.email,":").concat(e.password)))}}).then((function(e){var n=e.data;return Z(n)})).catch((function(e){throw e.response.data}))},M=function(e){return T.a.get("/signup",{headers:{Authorization:"Basic ".concat(btoa("".concat(e.email,":").concat(e.password)))}}).then((function(e){var n=e.data;return Z(n)})).catch((function(e){throw e.response.data}))},Z=function(e){return{accessToken:e["access-token"],refreshToken:e["refresh-token"]}},G=t(40),J=t(51),Y=t.n(J),$=t(61),D=t.n($),Q=function(e){var n=e.type,t=void 0===n?"text":n,a=e.value,r=e.onChange,o=e.placeholder,i=e.label,s=e.name,l=e.isValid,u=void 0===l||l,d=e.additionalClasses,j=Object(c.useState)(!u),f=Object(b.a)(j,2),p=f[0],m=f[1];Object(c.useEffect)((function(){return m(!u)}),[u]);return Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsx)("label",{className:D.a.label,htmlFor:"id_".concat(s),children:i}),Object(h.jsx)("input",{className:Y()(D.a.textInput,d,Object(G.a)({},D.a.hasErrors,p)),value:a,onChange:function(e){r&&r(e),m(!1)},type:t,placeholder:o,id:"id_".concat(s)})]})},X=t(62),K=t.n(X),ee=function(e){var n=e.errors,t=e.email,a=e.onEmailChange,r=e.password,o=e.onPasswordChange,i=Object(c.useCallback)((function(e){a(e.target.value)}),[a]),s=Object(c.useCallback)((function(e){o(e.target.value)}),[o]);return Object(h.jsxs)(h.Fragment,{children:[n.length>0&&Object(h.jsx)("div",{className:K.a.errors,children:n.map((function(e,n){var t=e.message;return Object(h.jsx)("span",{children:t},n)}))}),Object(h.jsx)(Q,{value:t,onChange:i,label:"email",name:"email",isValid:!n.find((function(e){return"email"===e.field})),additionalClasses:K.a.input}),Object(h.jsx)(Q,{value:r,onChange:s,type:"password",label:"password",name:"password",isValid:!n.find((function(e){return"password"===e.field})),additionalClasses:K.a.input})]})},ne=t(161),te=t.n(ne),ae=function(){var e=Object(c.useState)(""),n=Object(b.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),s=i[0],l=i[1],u=q(),d=u.login,j=u.errors,f=Object(c.useCallback)((function(){d({email:t,password:s})}),[t,d,s]);return Object(h.jsxs)(y,{children:[Object(h.jsx)(y.Header,{children:Object(h.jsx)(g,{title:"Log In",icon:Object(h.jsx)(I,{})})}),Object(h.jsxs)(y.Content,{children:[Object(h.jsx)(ee,{errors:j,email:t,onEmailChange:function(e){return r(e)},password:s,onPasswordChange:function(e){return l(e)}}),Object(h.jsx)("p",{className:te.a.text,children:"If you forgot your password please contact admin@questmission.com"}),Object(h.jsx)(m,{to:a.Signup,children:"Don't have an account yet?"})]}),Object(h.jsx)(y.Footer,{children:Object(h.jsx)(C,{title:"Login",onClick:f})})]})},ce=t(44),re=t.n(ce),oe=function(e){var n=e.children,t=e.name,a=e.checked,r=e.onChange,o=e.isValid,i=void 0===o||o,s=e.additionalClasses,l=Object(c.useState)(!i),u=Object(b.a)(l,2),d=u[0],j=u[1];Object(c.useEffect)((function(){return j(!i)}),[i]);return Object(h.jsxs)("label",{className:Y()(re.a.checkboxContainer,s),htmlFor:"id_".concat(t),children:[Object(h.jsx)("input",{className:re.a.nativeCheckbox,type:"checkbox",id:"id_".concat(t),name:t,checked:a,onChange:function(e){r&&r(e),j(!1)}}),Object(h.jsx)("span",{className:Y()(re.a.checkbox,Object(G.a)({},re.a.hasErrors,d))}),Object(h.jsx)("span",{className:re.a.label,children:n})]})},ie=t(63),se=t.n(ie),le=function(){var e=Object(c.useState)(""),n=Object(b.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),i=Object(b.a)(o,2),s=i[0],l=i[1],u=Object(c.useState)(!1),d=Object(b.a)(u,2),j=d[0],f=d[1],p=Object(c.useState)(!1),x=Object(b.a)(p,2),O=x[0],v=x[1],_=q(),w=_.signup,k=_.errors,S=Object(c.useCallback)((function(){w({credential:{email:t,password:s},isPolicyChecked:j,isRememberChecked:O})}),[t,j,O,s,w]);return Object(h.jsxs)(y,{children:[Object(h.jsx)(y.Header,{children:Object(h.jsx)(g,{title:"Sign Up",icon:Object(h.jsx)(I,{})})}),Object(h.jsxs)(y.Content,{children:[Object(h.jsx)(ee,{errors:k,email:t,onEmailChange:function(e){return r(e)},password:s,onPasswordChange:function(e){return l(e)}}),Object(h.jsx)(m,{to:a.Login,children:"Already have an account?"}),Object(h.jsxs)("div",{className:se.a.additionalInfo,children:[Object(h.jsxs)(oe,{checked:j,onChange:function(e){return f(e.target.checked)},name:"policy",isValid:!k.find((function(e){return"policy"===e.field})),additionalClasses:se.a.info,children:["Agree with ",Object(h.jsx)("a",{href:"https://questmission.com/privacy-policy",children:"Privacy Policy"})]}),Object(h.jsx)(oe,{checked:O,onChange:function(e){return v(e.target.checked)},name:"remember",additionalClasses:se.a.info,children:"Remember me on this device"})]})]}),Object(h.jsx)(y.Footer,{children:Object(h.jsx)(C,{title:"Sign Up",onClick:S})})]})},ue=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Home"})})},de=t(162),he=function(e){return F()?Object(h.jsx)(s.b,Object(de.a)({},e)):Object(h.jsx)(s.a,{to:a.Login})},je=function(){return Object(h.jsx)(f,{children:Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{exact:!0,path:a.Login,component:ae}),Object(h.jsx)(s.b,{exact:!0,path:a.Signup,component:le}),Object(h.jsx)(he,{exact:!0,path:a.Home,component:ue}),Object(h.jsx)(he,{path:"*",component:ue})]})})},fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(308);T.a.defaults.baseURL="http://localhost:8000",T.a.interceptors.request.use((function(e){var n=F();return n&&(e.headers.authorization="Bearer ".concat(n)),e})),i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(je,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");fe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):be(n,e)}))}}()},44:function(e,n,t){e.exports={checkboxContainer:"Checkbox_checkboxContainer__1RtOQ",checkbox:"Checkbox_checkbox__1V-IG",nativeCheckbox:"Checkbox_nativeCheckbox__3RMl1",label:"Checkbox_label__2xkgf",hasErrors:"Checkbox_hasErrors__7ZBrT"}},60:function(e,n,t){e.exports={titleContainer:"Title_titleContainer__3UzAP",icon:"Title_icon__29s9c",title:"Title_title__IYizr"}},61:function(e,n,t){e.exports={textInput:"TextInput_textInput__xs-Pf",hasErrors:"TextInput_hasErrors__1jWxy",label:"TextInput_label__hqbmA"}},62:function(e,n,t){e.exports={input:"Auth_input__3c8jF",errors:"Auth_errors__TVASp"}},63:function(e,n,t){e.exports={additionalInfo:"Signup_additionalInfo__2qX2-",info:"Signup_info__3mu8E"}}},[[309,1,2]]]);
//# sourceMappingURL=main.9e7c0e37.chunk.js.map