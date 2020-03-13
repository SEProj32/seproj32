(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1810:function(e,t,r){"use strict";r.r(t);var s=r(354),n=r.n(s),o=r(2),i=r(324),a=r.n(i),l=r(5),c=r(480),p=r(332),u=(r(740),r(316)),d=r(348),m=r.n(d),h=r(318),g=r(787),f=r(742),b=r(407);var v=Object(u.connect)(e=>({appState:Object(h.getAppState)(e)}))(class extends o.PureComponent{constructor(){super(...arguments),this.handleToggleUser=(e,t)=>e.permissions.includes(t)?this.props.revokePermissionFromUser(e.login,t):this.props.grantPermissionToUser(e.login,t),this.handleToggleGroup=(e,t)=>e.permissions.includes(t)?this.props.revokePermissionFromGroup(e.name,t):this.props.grantPermissionToGroup(e.name,t)}render(){const e=this.props,t=e.filter,r=e.groups,s=e.groupsPaging,n=e.users,i=e.usersPaging,a=this.props.organization?"organizations_permissions":"global_permissions",l=this.props.appState.qualifiers.includes("VW"),c=Object(b.e)(l?b.d:b.c,a);let p=0,u=0;return"users"!==t&&(p+=r.length,u+=s?s.total:r.length),"groups"!==t&&(p+=n.length,u+=i?i.total:n.length),o.createElement(o.Fragment,null,o.createElement(g.a,{filter:this.props.filter,groups:this.props.groups,loading:this.props.loading,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:c,query:this.props.query,users:this.props.users},o.createElement(f.a,{filter:this.props.filter,onFilter:this.props.onFilter,onSearch:this.props.onSearch,query:this.props.query})),o.createElement(m.a,{count:p,loadMore:this.props.onLoadMore,total:u}))}});class y extends o.PureComponent{render(){const e=this.props.organization?Object(l.translate)("permissions.page"):Object(l.translate)("global_permissions.page"),t=this.props.organization?Object(l.translate)("organization_permissions.page.description"):Object(l.translate)("global_permissions.page.description");return o.createElement("header",{className:"page-header"},o.createElement("h1",{className:"page-title"},e),this.props.loading&&o.createElement("i",{className:"spinner"}),o.createElement("div",{className:"page-description"},t))}}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){C(e,t,r[t])})}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],s=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(s=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);s=!0);}catch(e){n=!0,o=e}finally{try{s||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"default",function(){return E});class E extends o.PureComponent{constructor(e){super(e),this.mounted=!1,this.loadUsersAndGroups=(e,t)=>{const r=this.props.organization,s=this.state,n=s.filter,o=s.query,i="groups"!==n?c.i({q:o||void 0,organization:r&&r.key,p:e}):Promise.resolve({paging:void 0,users:[]}),a="users"!==n?c.h({q:o||void 0,organization:r&&r.key,p:t}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([i,a])},this.loadHolders=()=>(this.setState({loading:!0}),this.loadUsersAndGroups().then(e=>{let t=P(e,2),r=t[0],s=t[1];this.mounted&&this.setState({groups:s.groups,groupsPaging:s.paging,loading:!1,users:r.users,usersPaging:r.paging})},this.stopLoading)),this.onLoadMore=()=>{const e=this.state,t=e.usersPaging,r=e.groupsPaging;return this.setState({loading:!0}),this.loadUsersAndGroups(t?t.pageIndex+1:1,r?r.pageIndex+1:1).then(e=>{let t=P(e,2),r=t[0],s=t[1];this.mounted&&this.setState(e=>{let t=e.groups,n=e.users;return{groups:[...t,...s.groups],groupsPaging:s.paging,loading:!1,users:[...n,...r.users],usersPaging:r.paging}})},this.stopLoading)},this.onFilter=e=>{this.setState({filter:e},this.loadHolders)},this.onSearch=e=>{this.setState({query:e},this.loadHolders)},this.addPermissionToGroup=(e,t,r)=>e.map(e=>e.name===t?k({},e,{permissions:[...e.permissions,r]}):e),this.addPermissionToUser=(e,t,r)=>e.map(e=>e.login===t?k({},e,{permissions:[...e.permissions,r]}):e),this.removePermissionFromGroup=(e,t,r)=>e.map(e=>e.name===t?k({},e,{permissions:n()(e.permissions,r)}):e),this.removePermissionFromUser=(e,t,r)=>e.map(e=>e.login===t?k({},e,{permissions:n()(e.permissions,r)}):e),this.grantPermissionToGroup=(e,t)=>this.mounted?(this.setState(r=>{let s=r.groups;return{groups:this.addPermissionToGroup(s,e,t)}}),c.o({groupName:e,permission:t,organization:this.props.organization&&this.props.organization.key}).then(()=>{},()=>{this.mounted&&this.setState(r=>{let s=r.groups;return{groups:this.removePermissionFromGroup(s,e,t)}})})):Promise.resolve(),this.grantPermissionToUser=(e,t)=>this.mounted?(this.setState(r=>{let s=r.users;return{users:this.addPermissionToUser(s,e,t)}}),c.p({login:e,permission:t,organization:this.props.organization&&this.props.organization.key}).then(()=>{},()=>{this.mounted&&this.setState(r=>{let s=r.users;return{users:this.removePermissionFromUser(s,e,t)}})})):Promise.resolve(),this.revokePermissionFromGroup=(e,t)=>this.mounted?(this.setState(r=>{let s=r.groups;return{groups:this.removePermissionFromGroup(s,e,t)}}),c.t({groupName:e,permission:t,organization:this.props.organization&&this.props.organization.key}).then(()=>{},()=>{this.mounted&&this.setState(r=>{let s=r.groups;return{groups:this.addPermissionToGroup(s,e,t)}})})):Promise.resolve(),this.revokePermissionFromUser=(e,t)=>this.mounted?(this.setState(r=>{let s=r.users;return{users:this.removePermissionFromUser(s,e,t)}}),c.u({login:e,permission:t,organization:this.props.organization&&this.props.organization.key}).then(()=>{},()=>{this.mounted&&this.setState(r=>{let s=r.users;return{users:this.addPermissionToUser(s,e,t)}})})):Promise.resolve(),this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.state={filter:"all",groups:[],loading:!0,query:"",users:[]}}componentDidMount(){this.mounted=!0,this.loadHolders()}componentWillUnmount(){this.mounted=!1}render(){return o.createElement("div",{className:"page page-limited"},o.createElement(p.a,{suggestions:"global_permissions"}),o.createElement(a.a,{title:Object(l.translate)("global_permissions.permission")}),o.createElement(y,{loading:this.state.loading,organization:this.props.organization}),o.createElement(v,{filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,loadHolders:this.loadHolders,loading:this.state.loading,onFilter:this.onFilter,onLoadMore:this.onLoadMore,onSearch:this.onSearch,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,users:this.state.users,usersPaging:this.state.usersPaging}))}}},322:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(309),n=r(2),o=r(364),i=r(335);r(337);var a=r(315);t.default=function(e){var t=e.tagName,r=void 0===t?"div":t;return n.createElement(r,{className:s("help-tooltip",e.className)},n.createElement(a.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},n.createElement("span",{className:"display-inline-flex-center"},e.children||n.createElement(i.ThemeConsumer,null,function(e){return n.createElement(o.default,{fill:e.colors.gray71,size:12})}))))}},332:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var s=r(2),n=r(350);function o(e){let t=e.suggestions;return s.createElement(n.a.Consumer,null,e=>{let r=e.addSuggestions,n=e.removeSuggestions;return s.createElement(i,{addSuggestions:r,removeSuggestions:n,suggestions:t})})}class i extends s.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},337:function(e,t,r){var s=r(338);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(313)(s,n);s.locals&&(e.exports=s.locals)},338:function(e,t,r){(e.exports=r(312)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},348:function(e,t,r){"use strict";var s=this&&this.__rest||function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var n=r(309),o=r(2),i=r(5),a=r(317),l=r(314);t.default=function(e){var t,r=e.ready,c=void 0===r||r,p=s(e,["ready"]),u=p.total&&p.total>p.count,d=o.createElement("a",{className:"spacer-left","data-test":"show-more",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),p.loadMore&&p.loadMore()}},i.translate("show_more")),m=o.createElement("a",{className:"spacer-left","data-test":"reload",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),p.reload&&p.reload()}},i.translate("reload")),h=n("spacer-top note text-center",{"new-loading":!c},p.className);return p.needReload&&p.reload?t=m:u&&p.loadMore&&(t=d),o.createElement("footer",{className:h},i.translateWithParameters("x_of_y_shown",a.formatMeasure(p.count,"INT",null),a.formatMeasure(p.total,"INT",null)),t,p.loading&&o.createElement(l.default,{className:"text-bottom spacer-left position-absolute"}))}},352:function(e,t,r){"use strict";var s,n=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(309),i=r(2),a=r(314);r(387);var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,r=e.children,s=e.disabled,n=e.id,l=e.loading,c=e.right,p=e.thirdState,u=e.title,d=o("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":p,"icon-checkbox-disabled":s});return r?i.createElement("a",{"aria-checked":t,className:o("link-checkbox",this.props.className,{note:s,disabled:s}),href:"#",id:n,onClick:this.handleClick,role:"checkbox",title:u},c&&r,i.createElement(a.default,{loading:Boolean(l)},i.createElement("i",{className:d})),!c&&r):l?i.createElement(a.default,null):i.createElement("a",{"aria-checked":t,className:o(d,this.props.className),href:"#",id:n,onClick:this.handleClick,role:"checkbox",title:u})},t.defaultProps={thirdState:!1},t}(i.PureComponent);t.default=l},387:function(e,t,r){var s=r(388);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(313)(s,n);s.locals&&(e.exports=s.locals)},388:function(e,t,r){(e.exports=r(312)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#777;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""])},407:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"c",function(){return i}),r.d(t,"d",function(){return a}),r.d(t,"a",function(){return c}),r.d(t,"e",function(){return u}),r.d(t,"f",function(){return d});var s=r(5),n=r(22);const o=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"],i=["admin",{category:"administer",permissions:["gateadmin","profileadmin"]},"scan",{category:"creator",permissions:["provisioning"]}],a=["admin",{category:"administer",permissions:["gateadmin","profileadmin"]},"scan",{category:"creator",permissions:["provisioning","applicationcreator","portfoliocreator"]}],l=["user","admin"],c={TRK:o,VW:l,SVW:l,APP:l,DEV:["user","admin"]};function p(e,t){const r=e=>{const t="".concat(e,".sonarcloud");return Object(n.isSonarCloud)()&&Object(s.hasMessage)(t)?Object(s.translate)(t):Object(s.translate)(e)};return{key:e,name:r("".concat(t,".").concat(e)),description:r("".concat(t,".").concat(e,".desc"))}}function u(e,t){return e.map(e=>"object"==typeof e?{category:e.category,permissions:e.permissions.map(e=>p(e,t))}:p(e,t))}function d(e){return Boolean(e&&e.category)}},447:function(e,t,r){"use strict";var s,n=this&&this.__extends||(s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});Object.defineProperty(t,"__esModule",{value:!0});var o=r(309),i=r(2);r(484);var a=r(315),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){var r=e.currentTarget.value;t.props.onCheck(r)},t.renderOption=function(e){var r=e.value===t.props.value,s=t.props.name+"__"+e.value;return i.createElement("li",{key:e.value},i.createElement("input",{checked:r,disabled:e.disabled,id:s,name:t.props.name,onChange:t.handleChange,type:"radio",value:e.value}),i.createElement(a.default,{overlay:e.tooltip||void 0},i.createElement("label",{htmlFor:s},e.label)))},t}return n(t,e),t.prototype.render=function(){return i.createElement("ul",{className:o("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(i.PureComponent);t.default=l},449:function(e,t,r){var s=r(400)(function(e,t,r){e[r?0:1].push(t)},function(){return[[],[]]});e.exports=s},480:function(e,t,r){"use strict";r.d(t,"p",function(){return i}),r.d(t,"u",function(){return a}),r.d(t,"o",function(){return l}),r.d(t,"t",function(){return c}),r.d(t,"l",function(){return p}),r.d(t,"f",function(){return u}),r.d(t,"y",function(){return d}),r.d(t,"g",function(){return m}),r.d(t,"x",function(){return h}),r.d(t,"b",function(){return g}),r.d(t,"c",function(){return f}),r.d(t,"r",function(){return b}),r.d(t,"w",function(){return v}),r.d(t,"q",function(){return y}),r.d(t,"v",function(){return k}),r.d(t,"a",function(){return C}),r.d(t,"s",function(){return P}),r.d(t,"n",function(){return E}),r.d(t,"m",function(){return x}),r.d(t,"i",function(){return O}),r.d(t,"h",function(){return _}),r.d(t,"k",function(){return j}),r.d(t,"j",function(){return S}),r.d(t,"e",function(){return w}),r.d(t,"d",function(){return N});var s=r(8),n=r(321);const o=100;function i(e){return Object(s.post)("/api/permissions/add_user",e).catch(n.a)}function a(e){return Object(s.post)("/api/permissions/remove_user",e).catch(n.a)}function l(e){return Object(s.post)("/api/permissions/add_group",e).catch(n.a)}function c(e){return Object(s.post)("/api/permissions/remove_group",e).catch(n.a)}function p(e){const t="/api/permissions/search_templates";return e?Object(s.getJSON)(t,{organization:e}):Object(s.getJSON)(t)}function u(e){return Object(s.postJSON)("/api/permissions/create_template",e)}function d(e){return Object(s.post)("/api/permissions/update_template",e)}function m(e){return Object(s.post)("/api/permissions/delete_template",e).catch(n.a)}function h(e,t){return Object(s.post)("/api/permissions/set_default_template",{templateId:e,qualifier:t})}function g(e){return Object(s.post)("/api/permissions/apply_template",e).catch(n.a)}function f(e){return Object(s.post)("/api/permissions/bulk_apply_template",e)}function b(e){return Object(s.post)("/api/permissions/add_user_to_template",e)}function v(e){return Object(s.post)("/api/permissions/remove_user_from_template",e)}function y(e){return Object(s.post)("/api/permissions/add_group_to_template",e)}function k(e){return Object(s.post)("/api/permissions/remove_group_from_template",e)}function C(e,t){return Object(s.post)("/api/permissions/add_project_creator_to_template",{templateId:e,permission:t})}function P(e,t){return Object(s.post)("/api/permissions/remove_project_creator_from_template",{templateId:e,permission:t})}function E(e){return e.ps||(e.ps=o),Object(s.getJSON)("/api/permissions/users",e).catch(n.a)}function x(e){return e.ps||(e.ps=o),Object(s.getJSON)("/api/permissions/groups",e).catch(n.a)}function O(e){return e.ps||(e.ps=o),Object(s.getJSON)("/api/permissions/users",e)}function _(e){return e.ps||(e.ps=o),Object(s.getJSON)("/api/permissions/groups",e)}function j(e,t,r,n){const i={templateId:e,ps:o};return t&&(i.q=t),r&&(i.permission=r),n&&Object.assign(i,{organization:n}),Object(s.getJSON)("/api/permissions/template_users",i).then(e=>e.users)}function S(e,t,r,n){const i={templateId:e,ps:o};return t&&(i.q=t),r&&(i.permission=r),n&&Object.assign(i,{organization:n}),Object(s.getJSON)("/api/permissions/template_groups",i).then(e=>e.groups)}function w(e,t){return Object(s.post)("/api/projects/update_visibility",{project:e,visibility:t}).catch(n.a)}function N(e,t){return Object(s.post)("/api/projects/update_default_visibility",{organization:e,projectVisibility:t}).catch(n.a)}},484:function(e,t,r){var s=r(485);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(313)(s,n);s.locals&&(e.exports=s.locals)},485:function(e,t,r){(e.exports=r(312)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff;font-weight:600}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""])},611:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),n=r(311);t.default=function(e){var t=e.className,r=e.fill,o=e.size,i=void 0===o?36:o;return s.createElement(n.ThemedIcon,{className:t,size:i,viewBox:"0 0 36 36"},function(e){var t=e.theme;return s.createElement("g",{transform:"matrix(0.0625,0,0,0.0625,3,4)"},s.createElement("path",{d:"M148.25,224C121.25,224.833 99.167,235.5 82,256L48.5,256C34.833,256 23.333,252.625 14,245.875C4.667,239.125 0,229.25 0,216.25C0,157.417 10.333,128 31,128C32,128 35.625,129.75 41.875,133.25C48.125,136.75 56.25,140.292 66.25,143.875C76.25,147.458 86.167,149.25 96,149.25C107.167,149.25 118.25,147.333 129.25,143.5C128.417,149.667 128,155.167 128,160C128,183.167 134.75,204.5 148.25,224ZM416,383.25C416,403.25 409.917,419.042 397.75,430.625C385.583,442.208 369.417,448 349.25,448L130.75,448C110.583,448 94.417,442.208 82.25,430.625C70.083,419.042 64,403.25 64,383.25C64,374.417 64.292,365.792 64.875,357.375C65.458,348.958 66.625,339.875 68.375,330.125C70.125,320.375 72.333,311.333 75,303C77.667,294.667 81.25,286.542 85.75,278.625C90.25,270.708 95.417,263.958 101.25,258.375C107.083,252.792 114.208,248.333 122.625,245C131.042,241.667 140.333,240 150.5,240C152.167,240 155.75,241.792 161.25,245.375C166.75,248.958 172.833,252.958 179.5,257.375C186.167,261.792 195.083,265.792 206.25,269.375C217.417,272.958 228.667,274.75 240,274.75C251.333,274.75 262.583,272.958 273.75,269.375C284.917,265.792 293.833,261.792 300.5,257.375C307.167,252.958 313.25,248.958 318.75,245.375C324.25,241.792 327.833,240 329.5,240C339.667,240 348.958,241.667 357.375,245C365.792,248.333 372.917,252.792 378.75,258.375C384.583,263.958 389.75,270.708 394.25,278.625C398.75,286.542 402.333,294.667 405,303C407.667,311.333 409.875,320.375 411.625,330.125C413.375,339.875 414.542,348.958 415.125,357.375C415.708,365.792 416,374.417 416,383.25ZM160,64C160,81.667 153.75,96.75 141.25,109.25C128.75,121.75 113.667,128 96,128C78.333,128 63.25,121.75 50.75,109.25C38.25,96.75 32,81.667 32,64C32,46.333 38.25,31.25 50.75,18.75C63.25,6.25 78.333,0 96,0C113.667,0 128.75,6.25 141.25,18.75C153.75,31.25 160,46.333 160,64ZM336,160C336,186.5 326.625,209.125 307.875,227.875C289.125,246.625 266.5,256 240,256C213.5,256 190.875,246.625 172.125,227.875C153.375,209.125 144,186.5 144,160C144,133.5 153.375,110.875 172.125,92.125C190.875,73.375 213.5,64 240,64C266.5,64 289.125,73.375 307.875,92.125C326.625,110.875 336,133.5 336,160ZM480,216.25C480,229.25 475.333,239.125 466,245.875C456.667,252.625 445.167,256 431.5,256L398,256C380.833,235.5 358.75,224.833 331.75,224C345.25,204.5 352,183.167 352,160C352,155.167 351.583,149.667 350.75,143.5C361.75,147.333 372.833,149.25 384,149.25C393.833,149.25 403.75,147.458 413.75,143.875C423.75,140.292 431.875,136.75 438.125,133.25C444.375,129.75 448,128 449,128C469.667,128 480,157.417 480,216.25ZM448,64C448,81.667 441.75,96.75 429.25,109.25C416.75,121.75 401.667,128 384,128C366.333,128 351.25,121.75 338.75,109.25C326.25,96.75 320,81.667 320,64C320,46.333 326.25,31.25 338.75,18.75C351.25,6.25 366.333,0 384,0C401.667,0 416.75,6.25 429.25,18.75C441.75,31.25 448,46.333 448,64Z",style:{fill:r||t.colors.gray67}}))})}},740:function(e,t,r){var s=r(741);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(313)(s,n);s.locals&&(e.exports=s.locals)},741:function(e,t,r){(e.exports=r(312)(!1)).push([e.i,'.permissions-table .permission-column.selected{background-color:#d9edf7}.permissions-table .permission-column-inner{display:inline-block;width:100px}.permissions-table .divider{background:#fff;padding:16px 0}.permissions-table .divider:after{display:block;content:"";background:#e6e6e6;height:1px;width:100%}',""])},742:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var s=r(2),n=r(447),o=r.n(n),i=r(357),a=r.n(i),l=r(5);function c(e){const t=[{value:"all",label:Object(l.translate)("all")},{value:"users",label:Object(l.translate)("users.page")},{value:"groups",label:Object(l.translate)("user_groups.page")}];return s.createElement("div",{className:"display-flex-row"},s.createElement(o.a,{name:"users-or-groups",onCheck:e.onFilter,options:t,value:e.filter}),s.createElement("div",{className:"flex-1 spacer-left"},s.createElement(a.a,{minLength:3,onChange:e.onSearch,placeholder:Object(l.translate)("search.search_for_users_or_groups"),value:e.query})))}},787:function(e,t,r){"use strict";var s=r(325),n=r.n(s),o=r(449),i=r.n(o),a=r(2),l=r(5),c=r(407),p=r(354),u=r.n(p),d=r(611),m=r.n(d),h=r(309),g=r(352),f=r.n(g);class b extends a.PureComponent{render(){const e=this.props,t=e.loading,r=e.onCheck,s=e.permission,n=e.permissionItem,o=e.selectedPermission;return Object(c.f)(s)?a.createElement("td",{className:"text-middle"},s.permissions.map(e=>a.createElement("div",{key:e.key},a.createElement(f.a,{checked:n.permissions.includes(e.key),disabled:t.includes(e.key),id:e.key,onCheck:r},a.createElement("span",{className:"little-spacer-left"},e.name))))):a.createElement("td",{className:h("permission-column text-center text-middle",{selected:s.key===o})},a.createElement(f.a,{checked:n.permissions.includes(s.key),disabled:t.includes(s.key),id:s.key,onCheck:r}))}}class v extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:u()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.group,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.group;return a.createElement("tr",null,a.createElement("td",{className:"nowrap text-middle"},a.createElement("div",{className:"display-inline-block text-middle big-spacer-right"},a.createElement(m.a,null)),a.createElement("div",{className:"display-inline-block text-middle"},a.createElement("div",null,a.createElement("strong",null,e.name)),a.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},e.description))),this.props.permissions.map(t=>a.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission})))}}var y=r(322),k=r.n(y),C=r(315),P=r.n(C),E=r(319),x=r(383);class O extends a.PureComponent{constructor(){super(...arguments),this.handlePermissionClick=e=>{e.preventDefault(),e.currentTarget.blur();const t=this.props.permission;this.props.onSelectPermission&&!Object(c.f)(t)&&this.props.onSelectPermission(t.key)},this.getTooltipOverlay=()=>{const e=this.props.permission;return Object(c.f)(e)?e.permissions.map(e=>a.createElement(a.Fragment,{key:e.key},a.createElement("b",{className:"little-spacer-right"},e.name,":"),a.createElement(x.a,{key:e.key,message:e.description}),a.createElement("br",null))):this.props.showPublicProjectsWarning&&["user","codeviewer"].includes(e.key)?a.createElement("div",null,a.createElement(x.a,{message:e.description}),a.createElement(E.Alert,{className:"spacer-top",variant:"warning"},Object(l.translate)("projects_role.public_projects_warning"))):a.createElement(x.a,{message:e.description})}}render(){const e=this.props,t=e.onSelectPermission,r=e.permission;let s;return s=Object(c.f)(r)?Object(l.translate)("global_permissions",r.category):t?a.createElement(P.a,{overlay:Object(l.translateWithParameters)("global_permissions.filter_by_x_permission",r.name)},a.createElement("a",{href:"#",onClick:this.handlePermissionClick},r.name)):r.name,a.createElement("th",{className:h("permission-column text-center text-middle",{selected:!Object(c.f)(r)&&r.key===this.props.selectedPermission})},a.createElement("div",{className:"permission-column-inner"},s,a.createElement(k.a,{className:"spacer-left",overlay:this.getTooltipOverlay()})))}}var _=r(392),j=r(22);class S extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:u()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.user,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.user,t=this.props.permissions.map(t=>a.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission}));return"<creator>"===e.login?a.createElement("tr",null,a.createElement("td",{className:"nowrap text-middle"},a.createElement("div",{className:"display-inline-block text-middle"},a.createElement("div",null,a.createElement("strong",null,e.name)),a.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},Object(l.translate)(Object(j.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")))),t):a.createElement("tr",null,a.createElement("td",{className:"nowrap text-middle"},a.createElement(_.a,{className:"text-middle big-spacer-right",hash:e.avatar,name:e.name,size:36}),a.createElement("div",{className:"display-inline-block text-middle"},Object(j.isSonarCloud)()?a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("strong",null,e.name)),a.createElement("div",{className:"note little-spacer-top"},e.login)):a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement("strong",null,e.name),a.createElement("span",{className:"note spacer-left"},e.login)),a.createElement("div",{className:"little-spacer-top"},e.email)))),t)}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],s=!0,n=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(s=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);s=!0);}catch(e){n=!0,o=e}finally{try{s||null==a.return||a.return()}finally{if(n)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){T(e,t,r[t])})}return e}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",function(){return z});class z extends a.PureComponent{constructor(){super(...arguments),this.state={initialPermissionsCount:{}},this.handleGroupToggle=(e,t)=>{const r=e.id||e.name;return void 0===this.state.initialPermissionsCount[r]&&this.setState(t=>({initialPermissionsCount:N({},t.initialPermissionsCount,{[r]:e.permissions.length})})),this.props.onToggleGroup(e,t)},this.handleUserToggle=(e,t)=>(void 0===this.state.initialPermissionsCount[e.login]&&this.setState(t=>({initialPermissionsCount:N({},t.initialPermissionsCount,{[e.login]:e.permissions.length})})),this.props.onToggleUser(e,t)),this.getItemInitialPermissionsCount=e=>{const t=this.isPermissionUser(e)?e.login:e.id||e.name;return void 0!==this.state.initialPermissionsCount[t]?this.state.initialPermissionsCount[t]:e.permissions.length}}componentDidUpdate(e){this.props.filter===e.filter&&this.props.query===e.query||this.setState({initialPermissionsCount:{}})}isPermissionUser(e){return void 0!==e.login}renderEmpty(){const e=this.props.permissions.length+1;return a.createElement("tr",null,a.createElement("td",{colSpan:e},Object(l.translate)("no_results_search")))}renderItem(e,t){return this.isPermissionUser(e)?a.createElement(S,{key:"user-".concat(e.login),onToggle:this.handleUserToggle,permissions:t,selectedPermission:this.props.selectedPermission,user:e}):a.createElement(v,{group:e,key:"group-".concat(e.id||e.name),onToggle:this.handleGroupToggle,permissions:t,selectedPermission:this.props.selectedPermission})}render(){const e=this.props.permissions,t=n()([...this.props.users,...this.props.groups],e=>this.isPermissionUser(e)&&"<creator>"===e.login?0:e.name),r=w(i()(t,e=>this.getItemInitialPermissionsCount(e)),2),s=r[0],o=r[1];return a.createElement("div",{className:"boxed-group boxed-group-inner"},a.createElement("table",{className:"data zebra permissions-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("td",{className:"nowrap bordered-bottom"},this.props.children),e.map(e=>a.createElement(O,{key:Object(c.f)(e)?e.category:e.key,onSelectPermission:this.props.onSelectPermission,permission:e,selectedPermission:this.props.selectedPermission,showPublicProjectsWarning:this.props.showPublicProjectsWarning})))),a.createElement("tbody",null,0===t.length&&!this.props.loading&&this.renderEmpty(),s.map(t=>this.renderItem(t,e)),s.length>0&&o.length>0&&a.createElement(a.Fragment,null,a.createElement("tr",null,a.createElement("td",{className:"divider",colSpan:20})),a.createElement("tr",null)),o.map(t=>this.renderItem(t,e)))))}}}}]);
//# sourceMappingURL=10.m.773748d2.chunk.js.map