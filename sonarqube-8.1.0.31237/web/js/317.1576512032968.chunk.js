(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1127:function(e,t,n){"use strict";var r,o=n(958),a=n(12),s=n(645),i=n.n(s),c=n(34),l=n(690),u=n(674),p=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),m=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e,t=this.props,n=t.children,r=t.date;return r?o(Date.now(),r)<1&&(e=Object(c.translate)("less_than_1_hour_ago")):e=Object(c.translate)("never"),e?n?n(e):e:a.createElement(i.a,{overlay:a.createElement(u.a,{date:r})},a.createElement("span",null,a.createElement(l.a,{date:r},n)))},t}(a.PureComponent);t.a=m},1410:function(e,t,n){"use strict";var r,o=n(12),a=n(640),s=n(644),i=n.n(s),c=n(34),l=n(909),u=n(634),p=n(697),m=n.n(p),d=n(645),f=n.n(d),h=n(731),b=n(672),y=n(1127),v=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,showConfirmation:!1},t.handleClick=function(){t.state.showConfirmation?t.handleRevoke().then(function(){t.mounted&&t.setState({showConfirmation:!1})}):t.setState({showConfirmation:!0})},t.handleRevoke=function(){return t.setState({loading:!0}),Object(l.c)({login:t.props.login,name:t.props.token.name}).then(function(){return t.props.onRevokeToken(t.props.token)},function(){t.mounted&&t.setState({loading:!1})})},t}return v(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.deleteConfirmation,n=e.token,r=this.state,s=r.loading,l=r.showConfirmation;return o.createElement("tr",null,o.createElement("td",null,o.createElement(f.a,{overlay:n.name},o.createElement("span",null,Object(h.limitComponentName)(n.name)))),o.createElement("td",{className:"nowrap"},o.createElement(y.a,{date:n.lastConnectionDate})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(b.a,{date:n.createdAt,long:!0})),o.createElement("td",{className:"thin nowrap text-right"},o.createElement(i.a,{loading:s},o.createElement("i",{className:"deferred-spinner-placeholder"})),"modal"===t?o.createElement(m.a,{confirmButtonText:Object(c.translate)("users.tokens.revoke_token"),isDestructive:!0,modalBody:o.createElement(u.FormattedMessage,{defaultMessage:Object(c.translate)("users.tokens.sure_X"),id:"users.tokens.sure_X",values:{token:o.createElement("strong",null,n.name)}}),modalHeader:Object(c.translate)("users.tokens.revoke_token"),onConfirm:this.handleRevoke},function(e){var t=e.onClick;return o.createElement(a.Button,{className:"spacer-left button-red input-small",disabled:s,onClick:t,title:Object(c.translate)("users.tokens.revoke_token")},Object(c.translate)("users.tokens.revoke"))}):o.createElement(a.Button,{className:"button-red input-small spacer-left",disabled:s,onClick:this.handleClick},l?Object(c.translate)("users.tokens.sure"):Object(c.translate)("users.tokens.revoke"))))},t}(o.PureComponent),g=n(833),O=n(649);function k(e){var t=e.token;return o.createElement("div",{className:"panel panel-white big-spacer-top"},o.createElement(O.Alert,{variant:"warning"},Object(c.translateWithParameters)("users.tokens.new_token_created",t.name)),o.createElement(g.ClipboardButton,{copyValue:t.token}),o.createElement("code",{className:"big-spacer-left text-success"},t.token))}var E=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r},j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={generating:!1,loading:!0,newTokenName:"",tokens:[]},t.fetchTokens=function(){t.setState({loading:!0}),Object(l.b)(t.props.login).then(function(e){t.mounted&&t.setState({loading:!1,tokens:e})},function(){t.mounted&&t.setState({loading:!1})})},t.updateTokensCount=function(){t.props.updateTokensCount&&t.props.updateTokensCount(t.props.login,t.state.tokens.length)},t.handleGenerateToken=function(e){e.preventDefault(),t.state.newTokenName.length>0&&(t.setState({generating:!0}),Object(l.a)({name:t.state.newTokenName,login:t.props.login}).then(function(e){t.mounted&&t.setState(function(t){var n=w(t.tokens,[{name:e.name,createdAt:e.createdAt}]);return{generating:!1,newToken:e,newTokenName:"",tokens:n}},t.updateTokensCount)},function(){t.mounted&&t.setState({generating:!1})}))},t.handleRevokeToken=function(e){t.setState(function(t){return{tokens:t.tokens.filter(function(t){return t.name!==e.name})}},t.updateTokensCount)},t.handleNewTokenChange=function(e){return t.setState({newTokenName:e.currentTarget.value})},t}return E(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchTokens()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.renderItems=function(){var e=this,t=this.state.tokens;return t.length<=0?o.createElement("tr",null,o.createElement("td",{className:"note",colSpan:3},Object(c.translate)("users.no_tokens"))):t.map(function(t){return o.createElement(_,{deleteConfirmation:e.props.deleteConfirmation,key:t.name,login:e.props.login,onRevokeToken:e.handleRevokeToken,token:t})})},t.prototype.render=function(){var e=this.state,t=e.generating,n=e.loading,r=e.newToken,s=e.newTokenName,l=e.tokens,u=o.createElement("tr",null,o.createElement("td",null,o.createElement("i",{className:"spinner"})));return o.createElement(o.Fragment,null,o.createElement("h3",{className:"spacer-bottom"},Object(c.translate)("users.generate_tokens")),o.createElement("form",{autoComplete:"off",className:"display-flex-center",id:"generate-token-form",onSubmit:this.handleGenerateToken},o.createElement("input",{className:"input-large spacer-right",maxLength:100,onChange:this.handleNewTokenChange,placeholder:Object(c.translate)("users.enter_token_name"),required:!0,type:"text",value:s}),o.createElement(a.SubmitButton,{className:"js-generate-token",disabled:t||s.length<=0},Object(c.translate)("users.generate"))),r&&o.createElement(k,{token:r}),o.createElement("table",{className:"data zebra big-spacer-top"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,Object(c.translate)("name")),o.createElement("th",null,Object(c.translate)("my_account.tokens_last_usage")),o.createElement("th",{className:"text-right"},Object(c.translate)("created")),o.createElement("th",null))),o.createElement("tbody",null,o.createElement(i.a,{customSpinner:u,loading:n&&l.length<=0},this.renderItems()))))},t}(o.PureComponent);t.a=j},2148:function(e,t,n){"use strict";n.r(t);var r,o=n(12),a=n(654),s=n.n(a),i=n(646),c=n(34),l=n(648),u=n(640),p=n(649),m=n(789),d=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={success:!1},t.handleSuccessfulChange=function(){t.oldPassword.value="",t.password.value="",t.passwordConfirmation.value="",t.setState({success:!0,errors:void 0})},t.setErrors=function(e){t.setState({success:!1,errors:e})},t.handleChangePassword=function(e){e.preventDefault();var n=t.props.user,r=t.oldPassword.value,o=t.password.value;o!==t.passwordConfirmation.value?(t.password.focus(),t.setErrors([Object(c.translate)("user.password_doesnt_match_confirmation")])):Object(m.a)({login:n.login,password:o,previousPassword:r}).then(t.handleSuccessfulChange,function(){})},t}return d(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.success,r=t.errors;return o.createElement("section",{className:"boxed-group"},o.createElement("h2",{className:"spacer-bottom"},Object(c.translate)("my_profile.password.title")),o.createElement("form",{className:"boxed-group-inner",onSubmit:this.handleChangePassword},n&&o.createElement(p.Alert,{variant:"success"},Object(c.translate)("my_profile.password.changed")),r&&r.map(function(e,t){return o.createElement(p.Alert,{key:t,variant:"error"},e)}),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"old_password"},Object(c.translate)("my_profile.password.old"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"old_password",name:"old_password",ref:function(t){return e.oldPassword=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"password"},Object(c.translate)("my_profile.password.new"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"password",name:"password",ref:function(t){return e.password=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement("label",{htmlFor:"password_confirmation"},Object(c.translate)("my_profile.password.confirm"),o.createElement("em",{className:"mandatory"},"*")),o.createElement("input",{autoComplete:"off",id:"password_confirmation",name:"password_confirmation",ref:function(t){return e.passwordConfirmation=t},required:!0,type:"password"})),o.createElement("div",{className:"form-field"},o.createElement(u.SubmitButton,{id:"change-password"},Object(c.translate)("my_profile.password.submit")))))},t}(o.Component),h=n(721),b=n(1410);function y(e){var t=e.login;return o.createElement("div",{className:"boxed-group"},o.createElement("h2",null,Object(c.translate)("users.tokens")),o.createElement("div",{className:"boxed-group-inner"},o.createElement("div",{className:"big-spacer-bottom big-spacer-right markdown"},o.createElement(h.a,{message:Object(c.translate)("my_account.tokens_description")})),o.createElement(b.a,{deleteConfirmation:"modal",login:t})))}t.default=Object(i.connect)(function(e){return{user:Object(l.getCurrentUser)(e)}})(function(e){var t=e.user;return o.createElement("div",{className:"account-body account-container"},o.createElement(s.a,{title:Object(c.translate)("my_account.security")}),o.createElement(y,{login:t.login}),t.local&&o.createElement(f,{user:t}))})},659:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),c=n(655),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,o=(e.onSubmit,s(e,["children","header","onClose","onSubmit"]));return i.createElement(c.default,a({contentLabel:n,onRequestClose:r},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=l},670:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(12),i=n(34),c=n(644),l=n(640),u=n(659),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,function(){}):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,r=e.onFormSubmit,o=e.submitting,a=t.props,u=a.children,p=a.confirmButtonText,m=a.confirmDisable,d=a.header,f=a.headerDescription,h=a.isDestructive,b=a.cancelButtonText,y=void 0===b?i.translate("cancel"):b;return s.createElement("form",{onSubmit:r},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,d),f),s.createElement("div",{className:"modal-body"},u),s.createElement("footer",{className:"modal-foot"},s.createElement(c.default,{className:"spacer-right",loading:o}),s.createElement(l.SubmitButton,{autoFocus:!0,className:h?"button-red":void 0,disabled:o||m},p),s.createElement(l.ResetButtonLink,{disabled:o,onClick:n},y)))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return s.createElement(u.default,a({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(s.PureComponent);t.default=p},672:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return l});var r=n(12),o=n(634),a=n(160),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i={year:"numeric",month:"short",day:"2-digit"},c={year:"numeric",month:"long",day:"numeric"};function l(e){var t=e.children,n=e.date,l=e.long;return r.createElement(o.FormattedDate,s({value:Object(a.parseDate)(n)},l?c:i),t)}},674:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});var r=n(12),o=n(634),a=n(160),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function c(e){var t=e.children,n=e.date;return r.createElement(o.FormattedDate,s({value:Object(a.parseDate)(n)},i),t)}},689:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(a.PureComponent);t.default=s},690:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(12),o=n(634),a=n(160);function s(e){var t=e.children,n=e.date;return r.createElement(o.FormattedRelative,{value:Object(a.parseDate)(n)},t)}},697:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),c=n(670),l=n(689),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,o=(r.children,r.modalBody),l=r.modalHeader,u=r.modalHeaderDescription,p=s(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return i.createElement(c.default,a({header:l,headerDescription:u,onClose:n},p),o)},t}return o(t,e),t.prototype.render=function(){return i.createElement(l.default,{modal:this.renderConfirmModal},this.props.children)},t}(i.PureComponent);t.default=u},725:function(e,t,n){var r=n(158);e.exports=function(e,t){var n=r(e),o=r(t);return n.getTime()-o.getTime()}},909:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s}),n.d(t,"c",function(){return i});var r=n(48),o=n(651);function a(e){return Object(r.getJSON)("/api/user_tokens/search",{login:e}).then(function(e){return e.userTokens},o.a)}function s(e){return Object(r.postJSON)("/api/user_tokens/generate",e).catch(o.a)}function i(e){return Object(r.post)("/api/user_tokens/revoke",e).catch(o.a)}},958:function(e,t,n){var r=n(725),o=36e5;e.exports=function(e,t){var n=r(e,t)/o;return n>0?Math.floor(n):Math.ceil(n)}}}]);
//# sourceMappingURL=317.1576512032968.chunk.js.map