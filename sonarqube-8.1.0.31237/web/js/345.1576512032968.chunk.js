(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{2034:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(12),n=i(641);t.default=function(e){var t=e.className,i=e.fill,o=void 0===i?"currentColor":i,r=e.hasUnread,l=e.size;return a.createElement(n.ThemedIcon,{className:t,size:l},function(e){var t=e.theme;return r?a.createElement(a.Fragment,null,a.createElement("path",{d:"M8 1a.875.875 0 0 0-.875.875v.57c-2.009.418-3.498 2.118-3.498 4.242 0 2.798-.987 3.652-1.516 4.22a.856.856 0 0 0-.236.593.875.875 0 0 0 .877.875h10.496a.875.875 0 0 0 .877-.875.854.854 0 0 0-.236-.594c-.497-.534-1.388-1.342-1.494-3.76a2.814 2.814 0 0 1-.768.108A2.814 2.814 0 0 1 8.814 4.44a2.814 2.814 0 0 1 .665-1.818 4.543 4.543 0 0 0-.604-.178v-.57A.875.875 0 0 0 8 1zM6.25 13.25a1.75 1.75 0 0 0 3.5 0h-3.5z",style:{fill:o}}),a.createElement("circle",{cx:"11.627",cy:"4.441",r:"2",style:{fill:t.colors.blue}})):a.createElement("path",{d:"M8 15a1.75 1.75 0 0 0 1.75-1.75h-3.5c0 .967.784 1.75 1.75 1.75zm5.89-4.094c-.529-.567-1.517-1.421-1.517-4.218 0-2.125-1.49-3.826-3.499-4.243v-.57a.875.875 0 1 0-1.748 0v.57c-2.01.417-3.499 2.118-3.499 4.243 0 2.797-.988 3.65-1.517 4.218a.854.854 0 0 0-.235.594.876.876 0 0 0 .878.875h10.494a.876.876 0 0 0 .878-.875.853.853 0 0 0-.235-.594z",style:{fill:o}})})}},2035:function(e,t,i){var a=i(2036);"string"==typeof a&&(a=[[e.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(643)(a,n);a.locals&&(e.exports=a.locals)},2036:function(e,t,i){(e.exports=i(642)(!1)).push([e.i,".navbar-latest-notification{flex:0 1 240px;text-align:right;overflow:hidden}.navbar-latest-notification-wrapper{position:relative;display:inline-block;padding:8px 8px 8px 50px;height:28px;max-width:100%;box-sizing:border-box;overflow:hidden;vertical-align:middle;font-size:12px;text-overflow:ellipsis;white-space:nowrap;color:#8a8c8f;background-color:#000;border-radius:3px 0 0 3px;cursor:pointer}.navbar-latest-notification-wrapper:hover{color:#cfd3d7}.navbar-latest-notification-wrapper .badge-info{position:absolute;margin-right:8px;left:6px;top:6px}.navbar-latest-notification-wrapper .label{display:block;max-width:330px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.navbar-latest-notification-dismiss .navbar-icon{height:28px;background-color:#000;border-radius:0 3px 3px 0;padding:8px 7px!important;margin-left:1px;margin-right:8px;color:#8a8c8f!important}.navbar-latest-notification-dismiss .navbar-icon:hover{color:#cfd3d7!important}.notifications-sidebar{position:fixed;top:0;right:0;bottom:0;width:400px;display:flex;flex-direction:column;background:#f9f9fb}.notifications-sidebar-top{position:relative;display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid #e6e8ea;background-color:#fff}.notifications-sidebar-top h3{font-weight:400;font-size:16px}.notifications-sidebar-content{flex:1 1;overflow-y:auto}.notifications-sidebar-footer{padding-top:8px;border-top:1px solid #e6e8ea;flex:0 0 40px}.notifications-sidebar-slice h4{padding:16px 16px 4px;background-color:#f9f9fb;font-weight:400;font-size:12px;text-align:right;color:#8a8c8f}.notifications-sidebar-slice .feature:last-of-type{border-bottom:1px solid #e6e8ea}.notifications-sidebar-slice .feature{padding:16px;background-color:#fff;border-top:1px solid #e6e8ea;overflow:hidden}.notifications-sidebar-slice.unread .feature{background-color:#e6f6ff;border-color:#cee4f2}.notifications-sidebar-slice .learn-more{clear:both;float:right;margin-top:8px}.notifications-sidebar-slice .categories li{display:inline-block;padding:4px;margin-right:8px;font-size:9px;line-height:8px;text-transform:uppercase;font-weight:700;color:#fff;border-radius:3px}",""])},2091:function(e,t,i){"use strict";i.r(t);var a,n=i(872),o=i(12),r=i(1019),l=i.n(r),s=i(2034),c=i.n(s),p=i(160),f=i(34),d=(i(2035),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.checkHasUnread=function(){var e=t.props,i=e.notificationsLastReadDate,a=e.lastNews;return!i||n(Object(p.parseDate)(a.publicationDate),i)>0},t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick()},t.handleDismiss=function(e){e.preventDefault(),e.stopPropagation(),t.props.setCurrentUserSetting({key:"notifications.readDate",value:Date.now().toString()})},t}return d(t,e),t.prototype.render=function(){var e=this.props,t=e.notificationsOptOut,i=e.lastNews,a=this.checkHasUnread(),n=Boolean(!t&&i&&a);return o.createElement(o.Fragment,null,n&&o.createElement(o.Fragment,null,o.createElement("li",{className:"navbar-latest-notification",onClick:this.props.onClick},o.createElement("div",{className:"navbar-latest-notification-wrapper"},o.createElement("span",{className:"badge badge-info"},Object(f.translate)("new")),o.createElement("span",{className:"label"},i.notification))),o.createElement("li",{className:"navbar-latest-notification-dismiss"},o.createElement("a",{className:"navbar-icon",href:"#",onClick:this.handleDismiss},o.createElement(l.a,{size:12,thin:!0})))),o.createElement("li",null,o.createElement("a",{className:"navbar-icon",href:"#",onClick:this.handleClick},o.createElement(c.a,{hasUnread:a&&!t}))))},t}(o.PureComponent);t.default=u},725:function(e,t,i){var a=i(158);e.exports=function(e,t){var i=a(e),n=a(t);return i.getTime()-n.getTime()}},872:function(e,t,i){var a=i(725);e.exports=function(e,t){var i=a(e,t)/1e3;return i>0?Math.floor(i):Math.ceil(i)}}}]);
//# sourceMappingURL=345.1576512032968.chunk.js.map