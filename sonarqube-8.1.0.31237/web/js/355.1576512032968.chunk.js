(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{2152:function(t,e,n){"use strict";n.r(e);var o,r=n(12),a=n(654),i=n.n(a),u=n(159),c=n(34),s=n(683),l=n(1121),p=n(640),d=n(697),m=n.n(d),f=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleChange=function(t){var n=t.currentTarget.value;e.setState({newKey:n})},e.handleReset=function(){e.setState({newKey:void 0})},e}return f(e,t),e.prototype.render=function(){var t=this,e=this.props.component,n=this.state.newKey,o=null!=n?n:e.key,a=o!==e.key;return r.createElement(m.a,{confirmButtonText:Object(c.translate)("update_verb"),confirmData:n,modalBody:r.createElement(r.Fragment,null,Object(c.translateWithParameters)("update_key.are_you_sure_to_change_key",e.name),r.createElement("div",{className:"spacer-top"},Object(c.translate)("update_key.old_key"),": ",r.createElement("strong",null,e.key)),r.createElement("div",{className:"spacer-top"},Object(c.translate)("update_key.new_key"),": ",r.createElement("strong",null,n))),modalHeader:Object(c.translate)("update_key.page"),onConfirm:this.props.onKeyChange},function(e){var n=e.onFormSubmit;return r.createElement("form",{onSubmit:n},r.createElement("input",{className:"input-super-large",id:"update-key-new-key",onChange:t.handleChange,placeholder:Object(c.translate)("update_key.new_key"),required:!0,type:"text",value:o}),r.createElement("div",{className:"spacer-top"},r.createElement(p.SubmitButton,{disabled:!a,id:"update-key-submit"},Object(c.translate)("update_verb")),r.createElement(p.Button,{className:"spacer-left",disabled:!a,id:"update-key-reset",onClick:t.handleReset,type:"reset"},Object(c.translate)("reset_verb"))))})},e}(r.PureComponent);n.d(e,"Key",function(){return b});var y=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleChangeKey=function(t){return Object(s.b)({from:e.props.component.key,to:t}).then(function(){l.a.remove(e.props.component.key),e.props.router.replace({pathname:"/project/key",query:{id:t}})})},e}return y(e,t),e.prototype.render=function(){var t=this.props.component;return r.createElement("div",{className:"page page-limited",id:"project-key"},r.createElement(i.a,{title:Object(c.translate)("update_key.page")}),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(c.translate)("update_key.page")),r.createElement("div",{className:"page-description"},Object(c.translate)("update_key.page.description"))),r.createElement(h,{component:t,onKeyChange:this.handleChangeKey}))},e}(r.PureComponent);e.default=Object(u.withRouter)(b)},659:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var u=n(12),c=n(655),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={submitting:!1},e.stopSubmitting=function(){e.mounted&&e.setState({submitting:!1})},e.handleCloseClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.props.onClose()},e.handleFormSubmit=function(t){t.preventDefault(),e.submit()},e.handleSubmitClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.submit()},e.submit=function(){var t=e.props.onSubmit();t&&(e.setState({submitting:!0}),t.then(e.stopSubmitting,e.stopSubmitting))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.header,o=t.onClose,r=(t.onSubmit,i(t,["children","header","onClose","onSubmit"]));return u.createElement(c.default,a({contentLabel:n,onRequestClose:o},r),e({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},e}(u.Component);e.default=s},670:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),u=n(34),c=n(644),s=n(640),l=n(659),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.handleSubmit=function(){var t=e.props.onConfirm(e.props.confirmData);return t?t.then(e.props.onClose,function(){}):void e.props.onClose()},e.renderModalContent=function(t){var n=t.onCloseClick,o=t.onFormSubmit,r=t.submitting,a=e.props,l=a.children,p=a.confirmButtonText,d=a.confirmDisable,m=a.header,f=a.headerDescription,h=a.isDestructive,y=a.cancelButtonText,b=void 0===y?u.translate("cancel"):y;return i.createElement("form",{onSubmit:o},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,m),f),i.createElement("div",{className:"modal-body"},l),i.createElement("footer",{className:"modal-foot"},i.createElement(c.default,{className:"spacer-right",loading:r}),i.createElement(s.SubmitButton,{autoFocus:!0,className:h?"button-red":void 0,disabled:r||d},p),i.createElement(s.ResetButtonLink,{disabled:r,onClick:n},b)))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e={header:t.header,onClose:t.onClose,noBackdrop:t.noBackdrop,size:t.size};return i.createElement(l.default,a({onSubmit:this.handleSubmit},e),this.renderModalContent)},e}(i.PureComponent);e.default=p},689:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={modal:!1},e.handleButtonClick=function(){e.setState({modal:!0})},e.handleFormSubmit=function(t){t&&t.preventDefault(),e.setState({modal:!0})},e.handleCloseModal=function(){e.mounted&&e.setState({modal:!1})},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},e}(a.PureComponent);e.default=i},697:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var u=n(12),c=n(670),s=n(689),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderConfirmModal=function(t){var n=t.onClose,o=e.props,r=(o.children,o.modalBody),s=o.modalHeader,l=o.modalHeaderDescription,p=i(o,["children","modalBody","modalHeader","modalHeaderDescription"]);return u.createElement(c.default,a({header:s,headerDescription:l,onClose:n},p),r)},e}return r(e,t),e.prototype.render=function(){return u.createElement(s.default,{modal:this.renderConfirmModal},this.props.children)},e}(u.PureComponent);e.default=l}}]);
//# sourceMappingURL=355.1576512032968.chunk.js.map