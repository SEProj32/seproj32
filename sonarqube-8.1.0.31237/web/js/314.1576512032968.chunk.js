(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{2012:function(e,t,n){var o=n(2013);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2013:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".login-page{padding-top:10vh}.login-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}",""])},2014:function(e,t,n){var o=n(2015);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2015:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".login-form{width:300px;margin-left:auto;margin-right:auto}.login-input{width:100%!important;height:auto!important;padding:5px 12px!important;font-size:20px;font-weight:300}.login-label{display:none;margin-bottom:8px;font-size:15px}",""])},2016:function(e,t,n){var o=n(2017);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2017:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".oauth-providers>ul{width:200px;margin-left:auto;margin-right:auto}.oauth-providers>ul>li{position:relative;margin-bottom:30px}.oauth-providers-help{position:absolute;top:15px;right:-24px}.oauth-providers+.login-form{padding-top:30px;border-top:1px solid #e6e6e6}",""])},2018:function(e,t,n){var o=n(2019);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},2019:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".sonarcloud-login-alert{margin:10vh auto 5vh;width:256px}.sonarcloud-login-page{margin-top:15vh;width:216px;margin-left:auto;margin-right:auto;padding:32px 20px}.sonarcloud-login-alert~.sonarcloud-login-page{margin-top:0}.sonarcloud-login-page-large{width:300px}.sonarcloud-login-title{line-height:1.5;font-size:16px;font-weight:300;width:135px;margin:8px auto 24px}.sonarcloud-oauth-providers.oauth-providers>ul{width:186px}.sonarcloud-oauth-providers.oauth-providers>ul>li{margin-bottom:8px}.sonarcloud-oauth-providers.oauth-providers .oauth-providers-help{right:-22px}.sonarcloud-login-cancel{text-align:center}",""])},2129:function(e,t,n){"use strict";n.r(t);var o,r=n(12),a=n(646),i=n(653),l=n(789),s=n(118),c=n(750),d=n(34),u=n(1178),p=(n(2012),n(640)),m=n(644),h=n.n(m),g=(n(2014),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.stopLoading=function(){n.setState({loading:!1})},n.handleSubmit=function(e){e.preventDefault(),n.setState({loading:!0}),n.props.onSubmit(n.state.login,n.state.password).then(n.stopLoading,n.stopLoading)},n.handleMoreOptionsClick=function(e){e.preventDefault(),n.setState({collapsed:!1})},n.handleLoginChange=function(e){return n.setState({login:e.currentTarget.value})},n.handlePwdChange=function(e){return n.setState({password:e.currentTarget.value})},n.state={collapsed:Boolean(t.collapsed),loading:!1,login:"",password:""},n}return g(t,e),t.prototype.render=function(){return this.state.collapsed?r.createElement("div",{className:"text-center"},r.createElement("a",{className:"small text-muted js-more-options",href:"#",onClick:this.handleMoreOptionsClick},Object(d.translate)("login.more_options"))):r.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"login"},Object(d.translate)("login")),r.createElement("input",{autoFocus:!0,className:"login-input",id:"login",maxLength:255,name:"login",onChange:this.handleLoginChange,placeholder:Object(d.translate)("login"),required:!0,type:"text",value:this.state.login})),r.createElement("div",{className:"big-spacer-bottom"},r.createElement("label",{className:"login-label",htmlFor:"password"},Object(d.translate)("password")),r.createElement("input",{className:"login-input",id:"password",name:"password",onChange:this.handlePwdChange,placeholder:Object(d.translate)("password"),required:!0,type:"password",value:this.state.password})),r.createElement("div",null,r.createElement("div",{className:"text-right overflow-hidden"},r.createElement(h.a,{className:"spacer-right",loading:this.state.loading}),r.createElement(p.SubmitButton,{disabled:this.state.loading},Object(d.translate)("sessions.log_in")),r.createElement("a",{className:"spacer-left",href:Object(i.getBaseUrl)()+"/"},Object(d.translate)("cancel")))))},t}(r.PureComponent),v=n(639),b=n(652),x=n.n(b),y=n(953),E=n.n(y);n(2016);function w(e){var t=e.formatLabel||O;return r.createElement("section",{className:v("oauth-providers",e.className)},r.createElement("ul",null,e.identityProviders.map(function(n){return r.createElement(_,{format:t,identityProvider:n,key:n.key,returnTo:e.returnTo})})))}function _(e){var t=e.format,n=e.identityProvider,o=e.returnTo;return r.createElement("li",null,r.createElement(E.a,{backgroundColor:n.backgroundColor,iconPath:n.iconPath,name:n.name,url:Object(i.getBaseUrl)()+"/sessions/init/"+n.key+"?return_to="+encodeURIComponent(o)},r.createElement("span",null,t(n.name))),n.helpMessage&&r.createElement(x.a,{className:"oauth-providers-help",overlay:n.helpMessage}))}function O(e){return Object(d.translateWithParameters)("login.login_with_x",e)}function k(e){var t=e.identityProviders,n=e.onSubmit,o=e.returnTo;return r.createElement("div",{className:"login-page",id:"login_form"},r.createElement("h1",{className:"login-title text-center"},Object(d.translate)("login.login_to_sonarqube")),r.createElement(u.a,null),t.length>0&&r.createElement(w,{identityProviders:t,returnTo:o}),r.createElement(f,{collapsed:t.length>0,onSubmit:n,returnTo:o}))}var N=n(649);n(2018);function j(e){return Object(d.translateWithParameters)("login.with_x",e)}var S=Object(a.connect)(function(e){return{authorizationError:e.appState.authorizationError,authenticationError:e.appState.authenticationError}})(function(e){var t=e.showForm,n=e.identityProviders,o=e.returnTo,a=e.onSubmit,l=e.authorizationError,s=e.authenticationError,c=t||n.length<=0,u=l||s;return r.createElement(r.Fragment,null,u&&r.createElement(N.Alert,{className:"sonarcloud-login-alert",display:"block",variant:"warning"},Object(d.translate)("login.unauthorized_access_alert")),r.createElement("div",{className:v("sonarcloud-login-page boxed-group boxed-group-inner",{"sonarcloud-login-page-large":c}),id:"login_form"},r.createElement("div",{className:"text-center"},r.createElement("img",{alt:"SonarCloud logo",height:36,src:Object(i.getBaseUrl)()+"/images/sonarcloud-square-logo.svg",width:36}),r.createElement("h1",{className:"sonarcloud-login-title"},Object(d.translate)("login.login_or_signup_to_sonarcloud"))),c?r.createElement(f,{onSubmit:a,returnTo:o}):r.createElement(w,{className:"sonarcloud-oauth-providers",formatLabel:j,identityProviders:n,returnTo:o}),u&&r.createElement("div",{className:"sonarcloud-login-cancel"},r.createElement("div",{className:"horizontal-pipe-separator"},r.createElement("div",{className:"horizontal-separator"}),r.createElement("span",{className:"note"},Object(d.translate)("or")),r.createElement("div",{className:"horizontal-separator"})),r.createElement("a",{href:Object(i.getBaseUrl)()+"/"},Object(d.translate)("go_back_to_homepage")))))}),P=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.handleSuccessfulLogin=function(){window.location.href=Object(i.getReturnUrl)(t.props.location)},t.handleSubmit=function(e,n){return t.props.doLogin(e,n).then(t.handleSuccessfulLogin,function(){})},t}return P(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,Object(l.d)().then(function(t){e.mounted&&e.setState({identityProviders:t.identityProviders})},function(){})},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.location,t=this.state.identityProviders;return t?Object(s.isSonarCloud)()?r.createElement(S,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(i.getReturnUrl)(e),showForm:void 0!==e.query.advanced}):r.createElement(k,{identityProviders:t,onSubmit:this.handleSubmit,returnTo:Object(i.getReturnUrl)(e)}):null},t}(r.PureComponent),T={doLogin:c.a};t.default=Object(a.connect)(null,T)(C)},652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(639),r=n(12),a=n(693),i=n(665);n(667);var l=n(645);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return r.createElement(n,{className:o("help-tooltip",e.className)},r.createElement(l.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(i.ThemeConsumer,null,function(e){return r.createElement(a.default,{fill:e.colors.gray71,size:12})}))))}},667:function(e,t,n){var o=n(668);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},668:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(639),r=n(12),a=n(927),i=n(653);n(954),t.default=function(e){var t=e.backgroundColor,n=e.children,l=e.className,s=e.iconPath,c=e.name,d=e.onClick,u=e.small,p=e.url,m=u?14:20;return r.createElement("a",{className:o("identity-provider-link",{"dark-text":!a.isDarkColor(t),small:u},l),href:p,onClick:d,style:{backgroundColor:t}},r.createElement("img",{alt:c,height:m,src:i.getBaseUrl()+s,width:m}),n)}},954:function(e,t,n){var o=n(955);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(643)(o,r);o.locals&&(e.exports=o.locals)},955:function(e,t,n){(e.exports=n(642)(!1)).push([e.i,'a.identity-provider-link{display:block;width:auto;line-height:22px;padding:8px 12px;border:1px solid rgba(0,0,0,.15);border-radius:2px;box-sizing:border-box;background-color:#236a97;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}a.identity-provider-link.small{line-height:14px;padding:4px 8px}a.identity-provider-link:focus,a.identity-provider-link:hover{box-shadow:inset 0 0 0 100px hsla(0,0%,100%,.1)}a.identity-provider-link.dark-text{color:#777}a.identity-provider-link.dark-text:focus,a.identity-provider-link.dark-text:hover{box-shadow:inset 0 0 0 100px rgba(0,0,0,.1)}a.identity-provider-link>img{padding-right:12px}a.identity-provider-link.small>img{padding-right:8px}a.identity-provider-link>span:before{content:"";opacity:.4;border-left:1px solid #b4b4b4;margin-right:12px}',""])}}]);
//# sourceMappingURL=314.1576512032968.chunk.js.map