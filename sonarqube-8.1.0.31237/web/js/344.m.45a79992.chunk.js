(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1820:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(324),i=n.n(r),a=n(5),c=n(310),s=n(367),l=n.n(s),u=n(355),p=n(446),d=n(347);var m=Object(d.a)(class extends o.PureComponent{constructor(){super(...arguments),this.handleDelete=()=>{const t=this.props.component,e="TRK"===t.qualifier,n=e?u.e:u.d,o=e?"/":"/portfolios";return n(t.key).then(()=>{Object(p.a)(Object(a.translateWithParameters)("project_deletion.resource_deleted",t.name)),this.props.router.replace(o)})}}render(){const t=this.props.component;return o.createElement(l.a,{confirmButtonText:Object(a.translate)("delete"),isDestructive:!0,modalBody:Object(a.translateWithParameters)("project_deletion.delete_resource_confirmation",t.name),modalHeader:Object(a.translate)("qualifier.delete",t.qualifier),onConfirm:this.handleDelete},t=>{let e=t.onClick;return o.createElement(c.Button,{className:"button-red",id:"delete-project",onClick:e},Object(a.translate)("delete"))})}});function f(t){const e=t.component.qualifier;let n;return n=["VW","SVW"].includes(e)?Object(a.translate)("portfolio_deletion.page.description"):"APP"===e?Object(a.translate)("application_deletion.page.description"):Object(a.translate)("project_deletion.page.description"),o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},Object(a.translate)("deletion.page")),o.createElement("div",{className:"page-description"},n))}function h(t){return o.createElement("div",{className:"page page-limited"},o.createElement(i.a,{title:Object(a.translate)("deletion.page")}),o.createElement(f,{component:t.component}),o.createElement(m,{component:t.component}))}n.d(e,"default",function(){return h})},329:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(2),s=n(326),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={submitting:!1},e.stopSubmitting=function(){e.mounted&&e.setState({submitting:!1})},e.handleCloseClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.props.onClose()},e.handleFormSubmit=function(t){t.preventDefault(),e.submit()},e.handleSubmitClick=function(t){t&&(t.preventDefault(),t.currentTarget.blur()),e.submit()},e.submit=function(){var t=e.props.onSubmit();t&&(e.setState({submitting:!0}),t.then(e.stopSubmitting,e.stopSubmitting))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.header,o=t.onClose,r=(t.onSubmit,a(t,["children","header","onClose","onSubmit"]));return c.createElement(s.default,i({contentLabel:n,onRequestClose:o},r),e({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},e}(c.Component);e.default=l},340:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),c=n(5),s=n(314),l=n(310),u=n(329),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.handleSubmit=function(){var t=e.props.onConfirm(e.props.confirmData);return t?t.then(e.props.onClose,function(){}):void e.props.onClose()},e.renderModalContent=function(t){var n=t.onCloseClick,o=t.onFormSubmit,r=t.submitting,i=e.props,u=i.children,p=i.confirmButtonText,d=i.confirmDisable,m=i.header,f=i.headerDescription,h=i.isDestructive,b=i.cancelButtonText,y=void 0===b?c.translate("cancel"):b;return a.createElement("form",{onSubmit:o},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,m),f),a.createElement("div",{className:"modal-body"},u),a.createElement("footer",{className:"modal-foot"},a.createElement(s.default,{className:"spacer-right",loading:r}),a.createElement(l.SubmitButton,{autoFocus:!0,className:h?"button-red":void 0,disabled:r||d},p),a.createElement(l.ResetButtonLink,{disabled:r,onClick:n},y)))},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){var t=this.props,e={header:t.header,onClose:t.onClose,noBackdrop:t.noBackdrop,size:t.size};return a.createElement(u.default,i({onSubmit:this.handleSubmit},e),this.renderModalContent)},e}(a.PureComponent);e.default=p},361:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={modal:!1},e.handleButtonClick=function(){e.setState({modal:!0})},e.handleFormSubmit=function(t){t&&t.preventDefault(),e.setState({modal:!0})},e.handleCloseModal=function(){e.mounted&&e.setState({modal:!1})},e}return r(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return i.createElement(i.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},e}(i.PureComponent);e.default=a},367:function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=this&&this.__rest||function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var c=n(2),s=n(340),l=n(361),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderConfirmModal=function(t){var n=t.onClose,o=e.props,r=(o.children,o.modalBody),l=o.modalHeader,u=o.modalHeaderDescription,p=a(o,["children","modalBody","modalHeader","modalHeaderDescription"]);return c.createElement(s.default,i({header:l,headerDescription:u,onClose:n},p),r)},e}return r(e,t),e.prototype.render=function(){return c.createElement(l.default,{modal:this.renderConfirmModal},this.props.children)},e}(c.PureComponent);e.default=u},446:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n(382),r=n(391);function i(t){Object(r.default)().dispatch(o.b(t))}}}]);
//# sourceMappingURL=344.m.45a79992.chunk.js.map