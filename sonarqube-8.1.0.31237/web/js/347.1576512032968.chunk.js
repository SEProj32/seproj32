(window.webpackJsonp=window.webpackJsonp||[]).push([[347,22,373],{2071:function(t,e,n){"use strict";n.r(e);var r=n(12),o=n(646),a=n(648),i=n(744),s=n(848);e.default=Object(o.connect)(function(t){return{adminPages:Object(a.getAppState)(t).adminPages}})(function(t){var e=t.params,n=e.extensionKey,o=e.pluginKey,a=(t.adminPages||[]).find(function(t){return t.key===o+"/"+n});return a?r.createElement(s.a,{extension:a}):r.createElement(i.default,{withContainer:!1})})},713:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return l});var r=n(653),o=n(88),a=function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,s)}c((r=r.apply(t,e||[])).next())})},i=function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},s=!1;function c(t,e){return void 0===e&&(e="body"),new Promise(function(n){var o=document.createElement("script");o.src=""+Object(r.getBaseUrl)()+t,o.onload=n,document.getElementsByTagName(e)[0].appendChild(o)})}function l(t){return a(this,void 0,void 0,function(){var e,r;return i(this,function(a){switch(a.label){case 0:return(e=Object(o.a)(t))?[2,Promise.resolve(e)]:s?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(281)]).then(n.bind(null,839))];case 1:(0,a.sent().default)(),s=!0,a.label=2;case 2:return[4,c("/static/"+t+".js")];case 3:return a.sent(),(r=Object(o.a)(t))?[2,r]:[2,Promise.reject()]}})})}},732:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(12),o=n(764),a=n.n(o),i=n(663),s=n(824);function c(t){var e=t.children;return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(a.a,{className:"navbar-global",height:i.rawSizes.globalNavHeightRaw}),e),r.createElement(s.a,null))}},744:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(12),o=n(654),a=n(159),i=n(34),s=n(732);function c(t){var e=t.withContainer,n=void 0===e||e?s.default:r.Fragment;return r.createElement(n,null,r.createElement(o.Helmet,{defaultTitle:Object(i.translate)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(i.translate)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(i.translate)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(a.Link,{to:"/"},Object(i.translate)("go_back_to_homepage"))))))}},848:function(t,e,n){"use strict";var r,o=n(12),a=n(654),i=n.n(a),s=n(634),c=n(646),l=n(34),u=n(677),p=n(713),f=n(711),d=n(648),m=n(663),h=n(720),b=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleStart=function(t){var n=Object(h.default)(),r=t(v({store:n,el:e.container,currentUser:e.props.currentUser,intl:e.props.intl,location:e.props.location,router:e.props.router,theme:m},e.props.options));o.isValidElement(r)?e.setState({extensionElement:r}):e.stop=r},e.handleFailure=function(){e.props.onFail(Object(l.translate)("page_extension_failed"))},e}return b(e,t),e.prototype.componentDidMount=function(){this.startExtension()},e.prototype.componentDidUpdate=function(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&this.startExtension()},e.prototype.componentWillUnmount=function(){this.stopExtension()},e.prototype.startExtension=function(){Object(p.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)},e.prototype.stopExtension=function(){this.stop?(this.stop(),this.stop=void 0):this.setState({extensionElement:void 0})},e.prototype.render=function(){var t=this;return o.createElement("div",null,o.createElement(i.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:function(e){return t.container=e}}))},e}(o.PureComponent),E={onFail:f.a};e.a=Object(s.injectIntl)(Object(u.a)(Object(c.connect)(function(t){return{currentUser:Object(d.getCurrentUser)(t)}},E)(y)))}}]);
//# sourceMappingURL=347.1576512032968.chunk.js.map