(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{1760:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f}),n.d(t,"isUnread",function(){return p}),n.d(t,"Notification",function(){return E}),n.d(t,"Feature",function(){return b});var a=n(309),r=n(542),o=n(2),c=n(310),i=n(326),s=n.n(i),l=n(314),u=n.n(l),m=n(5),d=n(342);function f(e){const t=e.loading,n=e.loadingMore,a=e.news,r=e.notificationsLastReadDate,i=e.paging,l=Object(m.translate)("embed_docs.whats_new");return o.createElement(s.a,{contentLabel:l,onRequestClose:e.onClose},o.createElement("div",{className:"notifications-sidebar"},o.createElement("div",{className:"notifications-sidebar-top"},o.createElement("h3",null,l),o.createElement(c.ClearButton,{className:"button-tiny",iconProps:{size:12,thin:!0},onClick:e.onClose})),o.createElement("div",{className:"notifications-sidebar-content"},t?o.createElement("div",{className:"text-center"},o.createElement(u.a,{className:"big-spacer-top",timeout:200})):a.map((e,t)=>o.createElement(E,{key:e.publicationDate,notification:e,unread:p(t,e.publicationDate,r)}))),!t&&i&&i.total>a.length&&o.createElement("div",{className:"notifications-sidebar-footer"},o.createElement("div",{className:"spacer-top note text-center"},o.createElement("a",{className:"spacer-left",href:"#",onClick:e.fetchMoreFeatureNews},Object(m.translate)("show_more")),n&&o.createElement(u.a,{className:"text-bottom spacer-left position-absolute"})))))}function p(e,t,n){return n?r(t,n)>0:e<1}function E(e){let t=e.notification,n=e.unread;return o.createElement("div",{className:a("notifications-sidebar-slice",{unread:n})},o.createElement("h4",null,o.createElement(d.a,{date:t.publicationDate,long:!1})),t.features.map((e,t)=>o.createElement(b,{feature:e,key:t})))}function b(e){let t=e.feature;return o.createElement("div",{className:"feature"},o.createElement("ul",{className:"categories spacer-bottom"},t.categories.map(e=>o.createElement("li",{key:e.name,style:{backgroundColor:e.color}},e.name))),o.createElement("span",null,t.description),t.readMore&&o.createElement("a",{className:"learn-more",href:t.readMore,rel:"noopener noreferrer nofollow",target:"_blank"},Object(m.translate)("learn_more")))}},342:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return s});var a=n(2),r=n(304),o=n(29);const c={year:"numeric",month:"short",day:"2-digit"},i={year:"numeric",month:"long",day:"numeric"};function s(e){let t=e.children,n=e.date,s=e.long;return a.createElement(r.FormattedDate,Object.assign({value:Object(o.parseDate)(n)},s?i:c),t)}},396:function(e,t,n){var a=n(27);e.exports=function(e,t){var n=a(e),r=a(t);return n.getTime()-r.getTime()}},483:function(e,t,n){var a;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0===(a=function(){return o}.call(t,n,t,e))||(e.exports=a)}()},542:function(e,t,n){var a=n(396);e.exports=function(e,t){var n=a(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}}}]);
//# sourceMappingURL=352.m.0acbbc21.chunk.js.map