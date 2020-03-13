(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(311);t.default=function(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,i=e.size;return a.createElement(r.default,{className:t,size:i},a.createElement("path",{d:"M5.273 7.182v1.636a.818.818 0 0 1-.818.818H2.818A.818.818 0 0 1 2 8.818V7.182c0-.452.366-.818.818-.818h1.637c.451 0 .818.366.818.818zm4.363 0v1.636a.818.818 0 0 1-.818.818H7.182a.818.818 0 0 1-.818-.818V7.182c0-.452.366-.818.818-.818h1.636c.452 0 .818.366.818.818zm4.364 0v1.636a.818.818 0 0 1-.818.818h-1.637a.818.818 0 0 1-.818-.818V7.182c0-.452.367-.818.818-.818h1.637c.452 0 .818.366.818.818z",style:{fill:l}}))}},1623:function(e,t,n){var a=n(1624);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(313)(a,r);a.locals&&(e.exports=a.locals)},1624:function(e,t,n){(e.exports=n(312)(!1)).push([e.i,".marketplace-editions{display:flex;flex-direction:row;margin-left:-8px;margin-right:-8px}.marketplace-edition{position:relative;flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:8px;margin-right:8px;max-width:50%}.marketplace-edition .markdown img{width:16px}.marketplace-edition .markdown h3{font-size:14px;margin-top:0}.marketplace-edition-badge{position:absolute;right:-1px;top:16px;padding:4px 8px;border-radius:2px 0 0 2px;height:inherit;line-height:inherit}.marketplace-edition-action{display:flex;align-items:baseline;justify-content:space-between}.marketplace-plugin-table{table-layout:fixed;width:100%}.marketplace-plugin-license{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""])},1771:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(316),l=n(704),i=n(318),s=n(547),o=n.n(s),c=n(325),u=n.n(c),p=n(324),d=n.n(p),m=n(5),g=n(627),h=n(332),f=n(347),b=n(573),v=n(800),E="### ![SonarSource logo](/images/sonarsource-icon.png) Data Center Edition\n\nSupport for High-Availability. Allow every node of SonarQube to be redundant, in order to keep the service up at all times without worrying about downtime or interruption.\n",k="### ![SonarSource logo](/images/sonarsource-icon.png) Developer Edition\n\n* Branch and Pull Requests analysis\n* Analysis of additional languages: C/C++, Objective-C, PL/SQL, ABAP , TSQL , Swift\n* Detection of security vulnerabilities\n* SonarLint notifications\n\n",y="### ![SonarSource logo](/images/sonarsource-icon.png) Enterprise Edition\n\n* Portfolio management\n* Executive reporting\n* Analysis of additional languages: Apex, COBOL, PL/I, RPG & VB6\n* Parallel processing of analysis reports\n* Project transfer\n",O=n(327);const x=Object(O.lazyLoad)(()=>Promise.all([n.e(7),n.e(359)]).then(n.bind(null,438)));function j(e){let t=e.edition,n=e.ncloc,r=e.serverId,l=e.currentEdition;return a.createElement("div",{className:"boxed-group boxed-group-inner marketplace-edition"},"datacenter"===t.key&&a.createElement(x,{content:E}),"developer"===t.key&&a.createElement(x,{content:k}),"enterprise"===t.key&&a.createElement(x,{content:y}),a.createElement("div",{className:"marketplace-edition-action spacer-top"},a.createElement("a",{href:Object(v.e)(t,{ncloc:n,serverId:r,sourceEdition:l}),rel:"noopener noreferrer",target:"_blank"},Object(m.translate)("marketplace.ask_for_information"))))}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class N extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchData=()=>{Object(b.b)().then(e=>{this.mounted&&this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){P(e,t,n[t])})}return e}({},e))},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchData()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.currentEdition,t=this.state,n=t.serverId,r=t.ncloc,l=Object(v.a)(e);return l.length<=0?null:a.createElement("div",{className:"spacer-bottom marketplace-editions"},l.map(t=>a.createElement(j,{currentEdition:e,edition:t,key:t.key,ncloc:r,serverId:n})))}}function _(e){let t=e.total;return a.createElement("footer",{className:"spacer-top note text-center"},Object(m.translateWithParameters)("x_show",t))}function w(e){let t=e.currentEdition;return a.createElement("header",{className:"page-header",id:"marketplace-header"},a.createElement("h1",{className:"page-title"},Object(m.translate)("marketplace.page")),t&&a.createElement("h3",{className:"page-description"},Object(m.translate)("marketplace.page.you_are_running",t)),a.createElement("p",{className:"page-description"},"datacenter"===t?Object(m.translate)("marketplace.page.description_best_edition"):Object(m.translate)("marketplace.page.description")))}var C=n(310),S=n(330),A=n.n(S),U=n(1622),z=n.n(U),M=n(315),D=n.n(M),L=n(342);function T(e){let t=e.release,n=e.update;return a.createElement("li",{className:"big-spacer-bottom"},a.createElement("div",{className:"little-spacer-bottom"},"COMPATIBLE"!==n.status&&n.status?a.createElement(D.a,{overlay:Object(m.translate)("marketplace.update_status",n.status)},a.createElement("span",{className:"js-plugin-changelog-version badge badge-warning spacer-right"},t.version)):a.createElement("span",{className:"js-plugin-changelog-version badge badge-success spacer-right"},t.version),a.createElement("span",{className:"js-plugin-changelog-date note spacer-right"},a.createElement(L.a,{date:t.date})),t.changeLogUrl&&a.createElement("a",{className:"js-plugin-changelog-link",href:t.changeLogUrl,target:"_blank"},Object(m.translate)("marketplace.release_notes"))),a.createElement("div",{className:"js-plugin-changelog-description"},t.description))}function B(e){let t=e.release,n=e.update;return a.createElement("div",{className:"abs-width-300"},a.createElement("h6",null,Object(m.translate)("changelog")),a.createElement("ul",{className:"js-plugin-changelog-list"},n.previousUpdates&&n.previousUpdates.map(e=>e.release?a.createElement(T,{key:e.release.version,release:e.release,update:e}):null),a.createElement(T,{release:t,update:n})))}function I(e){let t=e.release,n=e.update;return a.createElement(A.a,{className:"display-inline-block little-spacer-left",overlay:a.createElement(B,{release:t,update:n})},a.createElement(C.ButtonLink,{className:"js-changelog"},a.createElement(z.a,null)))}var q=e=>a.createElement("td",{className:"text-top width-25 big-spacer-right"},a.createElement("div",null,a.createElement("strong",{className:"js-plugin-name"},e.plugin.name),e.plugin.category&&a.createElement("span",{className:"js-plugin-category badge spacer-left"},e.plugin.category)),a.createElement("div",{className:"js-plugin-description little-spacer-top"},e.plugin.description)),Q=n(304);function J(e){let t=e.license;return t?a.createElement(D.a,{overlay:t},a.createElement("li",{className:"little-spacer-bottom marketplace-plugin-license"},a.createElement(Q.FormattedMessage,{defaultMessage:Object(m.translate)("marketplace.licensed_under_x"),id:"marketplace.licensed_under_x",values:{license:a.createElement("span",{className:"js-plugin-license"},t)}}))):null}function R(e){let t=e.plugin;return t.organizationName?a.createElement("li",{className:"little-spacer-bottom"},a.createElement(Q.FormattedMessage,{defaultMessage:Object(m.translate)("marketplace.developed_by_x"),id:"marketplace.developed_by_x",values:{organization:t.organizationUrl?a.createElement("a",{className:"js-plugin-organization",href:t.organizationUrl,target:"_blank"},t.organizationName):a.createElement("span",{className:"js-plugin-organization"},t.organizationName)}})):null}var F=n(352),W=n.n(F),V=n(470),G=n.n(V),H=n(393),Y=n.n(H),K=n(413);const X=["license"];function Z(e){return void 0!==e.release}function $(e){return function(e){return void 0!==e.version}(e)&&void 0!==e.updatedAt}const ee=Y()(e=>({filter:Object(K.parseAsString)(e.filter)||"all",search:Object(K.parseAsString)(e.search)})),te=Y()(e=>Object(K.cleanQuery)({filter:"all"===e.filter?void 0:Object(K.serializeString)(e.filter),search:e.search?Object(K.serializeString)(e.search):void 0}));class ne extends a.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.onClick(this.props.update)}}render(){const e=this.props,t=e.disabled,n=e.update;return"COMPATIBLE"===n.status&&n.release?a.createElement(C.Button,{className:"js-update little-spacer-bottom",disabled:t,onClick:this.handleClick},Object(m.translateWithParameters)("marketplace.update_to_x",n.release.version)):null}}class ae extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={acceptTerms:!1,loading:!1},this.doPluginAction=e=>{this.setState({loading:!0}),e({key:this.props.plugin.key}).then(()=>{this.props.refreshPending(),this.mounted&&this.setState({loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleInstall=()=>this.doPluginAction(g.g),this.handleUpdate=()=>this.doPluginAction(g.i),this.handleUninstall=()=>this.doPluginAction(g.h),this.handleTermsCheck=e=>this.setState({acceptTerms:e})}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}renderBundled(){const e=this.props.plugin;return a.createElement("div",{className:"js-actions"},Z(e)&&a.createElement("div",null,a.createElement("p",{className:"little-spacer-bottom"},Object(m.translate)("marketplace.available_under_commercial_license")),a.createElement("a",{href:e.homepageUrl,target:"_blank"},Object(m.translate)("marketplace.learn_more"))),$(e)&&a.createElement("p",null,a.createElement(G.a,{className:"little-spacer-right"}),Object(m.translate)("marketplace.installed")),$(e)&&e.updates&&e.updates.length>0&&a.createElement("div",{className:"spacer-top"},e.updates.map((e,t)=>a.createElement(ne,{disabled:this.state.loading,key:t,onClick:this.handleUpdate,update:e}))))}render(){const e=this.props.plugin;if(e.editionBundled)return this.renderBundled();const t=this.state.loading;return a.createElement("div",{className:"js-actions"},Z(e)&&e.termsAndConditionsUrl&&a.createElement("p",{className:"little-spacer-bottom"},a.createElement(W.a,{checked:this.state.acceptTerms,className:"js-terms",id:"plugin-terms-"+e.key,onCheck:this.handleTermsCheck},a.createElement("label",{className:"little-spacer-left",htmlFor:"plugin-terms-"+e.key},Object(m.translate)("marketplace.i_accept_the"))),a.createElement("a",{className:"js-plugin-terms nowrap little-spacer-left",href:e.termsAndConditionsUrl,target:"_blank"},Object(m.translate)("marketplace.terms_and_conditions"))),t&&a.createElement("i",{className:"spinner spacer-right little-spacer-top little-spacer-bottom"}),$(e)&&a.createElement("div",{className:"display-inlin-block"},e.updates&&e.updates.map((e,n)=>a.createElement(ne,{disabled:t,key:n,onClick:this.handleUpdate,update:e})),a.createElement(C.Button,{className:"js-uninstall button-red little-spacer-left",disabled:t,onClick:this.handleUninstall},Object(m.translate)("marketplace.uninstall"))),Z(e)&&a.createElement(C.Button,{className:"js-install",disabled:t||null!=e.termsAndConditionsUrl&&!this.state.acceptTerms,onClick:this.handleInstall},Object(m.translate)("marketplace.install")))}}function re(e){let t=e.plugin,n=e.refreshPending,r=e.status;return a.createElement("td",{className:"text-top text-right width-20 little-spacer-left"},"installing"===r&&a.createElement("p",{className:"text-success"},Object(m.translate)("marketplace.install_pending")),"updating"===r&&a.createElement("p",{className:"text-success"},Object(m.translate)("marketplace.update_pending")),"removing"===r&&a.createElement("p",{className:"text-danger"},Object(m.translate)("marketplace.uninstall_pending")),null==r&&a.createElement(ae,{plugin:t,refreshPending:n}))}function le(e){let t=e.plugin;return t.homepageUrl||t.issueTrackerUrl?a.createElement("li",{className:"little-spacer-bottom"},a.createElement("ul",{className:"list-inline"},t.homepageUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-homepage",href:t.homepageUrl,target:"_blank"},Object(m.translate)("marketplace.homepage"))),t.issueTrackerUrl&&a.createElement("li",null,a.createElement("a",{className:"js-plugin-issues",href:t.issueTrackerUrl,target:"_blank"},Object(m.translate)("marketplace.issue_tracker"))))):null}function ie(e){let t=e.plugin,n=e.readOnly,r=e.refreshPending,l=e.status;return a.createElement("tr",null,a.createElement(q,{plugin:t}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"display-flex-row little-spacer-bottom"},a.createElement("div",{className:"pull-left spacer-right"},a.createElement("span",{className:"badge badge-success"},t.release.version)),a.createElement("div",null,t.release.description,a.createElement(I,{release:t.release,update:t.update}),t.update.requires.length>0&&a.createElement("p",{className:"little-spacer-top"},a.createElement("strong",null,Object(m.translateWithParameters)("marketplace.installing_this_plugin_will_also_install_x",t.update.requires.map(e=>e.name).join(", ")))))))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(le,{plugin:t}),a.createElement(J,{license:t.license}),a.createElement(R,{plugin:t}))),!n&&a.createElement(re,{plugin:t,refreshPending:r,status:l}))}class se extends a.PureComponent{constructor(){super(...arguments),this.state={changelogOpen:!1},this.handleChangelogClick=e=>{e.preventDefault(),e.stopPropagation(),this.toggleChangelog()},this.toggleChangelog=e=>{void 0!==e?this.setState({changelogOpen:e}):this.setState(e=>({changelogOpen:!e.changelogOpen}))}}render(){const e=this.props,t=e.release,n=e.update;return a.createElement("li",{className:"display-flex-row little-spacer-bottom",key:t.version},a.createElement("div",{className:"pull-left spacer-right"},"COMPATIBLE"===n.status?a.createElement("span",{className:"js-update-version badge badge-success"},t.version):a.createElement(D.a,{overlay:Object(m.translate)("marketplace.update_status",n.status)},a.createElement("span",{className:"js-update-version badge badge-warning"},t.version))),a.createElement("div",null,t.description,a.createElement(I,{release:t,update:n})))}}function oe(e){let t=e.updates;return!t||t.length<=0?null:a.createElement("li",{className:"spacer-top"},a.createElement("strong",null,Object(m.translate)("marketplace.updates"),":"),a.createElement("ul",{className:"little-spacer-top"},t.map(e=>e.release?a.createElement(se,{key:e.release.version,release:e.release,update:e}):null)))}function ce(e){let t=e.plugin,n=e.readOnly,r=e.refreshPending,l=e.status;return a.createElement("tr",null,a.createElement(q,{plugin:t}),a.createElement("td",{className:"text-top big-spacer-right"},a.createElement("ul",null,a.createElement("li",{className:"little-spacer-bottom"},a.createElement("strong",{className:"js-plugin-installed-version little-spacer-right"},t.version),Object(m.translate)("marketplace._installed")),a.createElement(oe,{updates:t.updates}))),a.createElement("td",{className:"text-top width-20"},a.createElement("ul",null,a.createElement(le,{plugin:t}),a.createElement(J,{license:t.license}),a.createElement(R,{plugin:t}))),!n&&a.createElement(re,{plugin:t,refreshPending:r,status:l}))}class ue extends a.PureComponent{constructor(){super(...arguments),this.getPluginStatus=e=>{const t=this.props.pending,n=t.installing,a=t.updating,r=t.removing;return n.find(t=>t.key===e.key)?"installing":a.find(t=>t.key===e.key)?"updating":r.find(t=>t.key===e.key)?"removing":void 0},this.renderPlugin=e=>{const t=this.getPluginStatus(e);return $(e)?a.createElement(ce,{plugin:e,readOnly:this.props.readOnly,refreshPending:this.props.refreshPending,status:t}):Z(e)?a.createElement(ie,{plugin:e,readOnly:this.props.readOnly,refreshPending:this.props.refreshPending,status:t}):null}}render(){return a.createElement("div",{className:"boxed-group boxed-group-inner",id:"marketplace-plugins"},a.createElement("ul",null,this.props.plugins.map(e=>a.createElement("li",{className:"panel panel-vertical",key:e.key},a.createElement("table",{className:"marketplace-plugin-table"},a.createElement("tbody",null,this.renderPlugin(e)))))))}}var pe=n(447),de=n.n(pe),me=n(357),ge=n.n(me);class he extends a.PureComponent{constructor(){super(...arguments),this.handleSearch=e=>{this.props.updateQuery({search:e})},this.handleFilterChange=e=>this.props.updateQuery({filter:e})}render(){const e=this.props,t=e.query,n=e.updateCenterActive,r=[{label:Object(m.translate)("marketplace.all"),value:"all"},{label:Object(m.translate)("marketplace.installed"),value:"installed"},{disabled:!n,label:Object(m.translate)("marketplace.updates_only"),tooltip:n?void 0:Object(m.translate)("marketplace.not_activated"),value:"updates"}];return a.createElement("div",{className:"big-spacer-bottom",id:"marketplace-search"},a.createElement("div",{className:"display-inline-block text-top nowrap abs-width-240 spacer-right"},a.createElement(de.a,{name:"marketplace-filter",onCheck:this.handleFilterChange,options:r,value:t.filter})),a.createElement(ge.a,{onChange:this.handleSearch,placeholder:Object(m.translate)("marketplace.search"),value:t.search}))}}n(1623);function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ve=Object(f.a)(class extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loadingPlugins:!0,plugins:[]},this.fetchQueryPlugins=()=>{const e=ee(this.props.location.query);let t=this.fetchAllPlugins;"updates"===e.filter?t=g.f:"installed"===e.filter&&(t=g.c),this.setState({loadingPlugins:!0}),t().then(e=>{this.mounted&&this.setState({loadingPlugins:!1,plugins:u()(e,"name")})},this.stopLoadingPlugins)},this.fetchAllPlugins=()=>Promise.all([Object(g.d)(),Object(g.b)()]).then(e=>{let t=be(e,2),n=t[0],a=t[1];return o()([...n,...a.plugins],"key")},this.stopLoadingPlugins),this.updateQuery=e=>{const t=te(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){fe(e,t,n[t])})}return e}({},ee(this.props.location.query),e));this.props.router.push({pathname:this.props.location.pathname,query:t})},this.stopLoadingPlugins=()=>{this.mounted&&this.setState({loadingPlugins:!1})}}componentDidMount(){this.mounted=!0,this.fetchQueryPlugins()}componentDidUpdate(e){e.location.query.filter!==this.props.location.query.filter&&this.fetchQueryPlugins()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.currentEdition,n=e.standaloneMode,r=e.pendingPlugins,l=this.state,i=l.loadingPlugins,s=l.plugins,o=ee(this.props.location.query),c=function(e,t){if(!t)return e.filter(e=>!X.includes(e.key));const n=t.toLowerCase();return e.filter(e=>!X.includes(e.key)&&(e.name.toLowerCase().includes(n)||(e.description||"").toLowerCase().includes(n)||(e.category||"").toLowerCase().includes(n)))}(s,o.search);return a.createElement("div",{className:"page page-limited",id:"marketplace-page"},a.createElement(h.a,{suggestions:"marketplace"}),a.createElement(d.a,{title:Object(m.translate)("marketplace.page")}),a.createElement(w,{currentEdition:t}),a.createElement(N,{currentEdition:t}),a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(m.translate)("marketplace.page.open_source_plugins"))),a.createElement(he,{query:o,updateCenterActive:this.props.updateCenterActive,updateQuery:this.updateQuery}),i&&a.createElement("i",{className:"spinner"}),!i&&a.createElement(ue,{pending:r,plugins:c,readOnly:!n,refreshPending:this.props.fetchPendingPlugins}),!i&&a.createElement(_,{total:c.length}))}});t.default=Object(r.connect)(e=>{const t=Object(i.getGlobalSettingValue)(e,"sonar.updatecenter.activate");return{currentEdition:Object(i.getAppState)(e).edition,standaloneMode:Object(i.getAppState)(e).standalone,updateCenterActive:Boolean(t&&"true"===t.value)}})(e=>a.createElement(l.a.Consumer,null,t=>{let n=t.fetchPendingPlugins,r=t.pendingPlugins;return a.createElement(ve,Object.assign({fetchPendingPlugins:n,pendingPlugins:r},e))}))},332:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(2),r=n(350);function l(e){let t=e.suggestions;return a.createElement(r.a.Consumer,null,e=>{let n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(i,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}class i extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},342:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o});var a=n(2),r=n(304),l=n(29);const i={year:"numeric",month:"short",day:"2-digit"},s={year:"numeric",month:"long",day:"numeric"};function o(e){let t=e.children,n=e.date,o=e.long;return a.createElement(r.FormattedDate,Object.assign({value:Object(l.parseDate)(n)},o?s:i),t)}},351:function(e,t,n){var a=n(424),r=1/0,l=1.7976931348623157e308;e.exports=function(e){return e?(e=a(e))===r||e===-r?(e<0?-1:1)*l:e==e?e:0:0===e?e:0}},352:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(309),i=n(2),s=n(314);n(387);var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.disabled||t.props.onCheck(!t.props.checked,t.props.id)},t}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.checked,n=e.children,a=e.disabled,r=e.id,o=e.loading,c=e.right,u=e.thirdState,p=e.title,d=l("icon-checkbox",{"icon-checkbox-checked":t,"icon-checkbox-single":u,"icon-checkbox-disabled":a});return n?i.createElement("a",{"aria-checked":t,className:l("link-checkbox",this.props.className,{note:a,disabled:a}),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p},c&&n,i.createElement(s.default,{loading:Boolean(o)},i.createElement("i",{className:d})),!c&&n):o?i.createElement(s.default,null):i.createElement("a",{"aria-checked":t,className:l(d,this.props.className),href:"#",id:r,onClick:this.handleClick,role:"checkbox",title:p})},t.defaultProps={thirdState:!1},t}(i.PureComponent);t.default=o},385:function(e,t,n){var a=n(351);e.exports=function(e){var t=a(e),n=t%1;return t==t?n?t-n:t:0}},387:function(e,t,n){var a=n(388);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(313)(a,r);a.locals&&(e.exports=a.locals)},388:function(e,t,n){(e.exports=n(312)(!1)).push([e.i,".icon-checkbox{display:inline-block;line-height:1;vertical-align:top;padding:1px 2px;box-sizing:border-box}a.icon-checkbox{border-bottom:none}.icon-checkbox:focus{outline:none}.icon-checkbox:before{content:\" \";display:inline-block;width:10px;height:10px;border:1px solid #236a97;border-radius:2px;transition:border-color .2s ease,background-color .2s ease,background-image .2s ease,box-shadow .4s ease}.icon-checkbox:not(.icon-checkbox-disabled):focus:before,.link-checkbox:not(.disabled):focus:focus .icon-checkbox:before{box-shadow:0 0 0 3px rgba(35,106,151,.25)}.icon-checkbox-checked:before{background-color:#4b9fd5;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M12 4.665c0 .172-.06.318-.18.438l-5.55 5.55c-.12.12-.266.18-.438.18s-.318-.06-.438-.18L2.18 7.438C2.06 7.317 2 7.17 2 7s.06-.318.18-.44l.878-.876c.12-.12.267-.18.44-.18.17 0 .317.06.437.18l1.897 1.903 4.233-4.24c.12-.12.266-.18.438-.18s.32.06.44.18l.876.88c.12.12.18.265.18.438z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E\");border-color:#4b9fd5}.icon-checkbox-checked.icon-checkbox-single:before{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='1.414'%3E%3Cpath d='M10 4.698A.697.697 0 0 0 9.302 4H4.698A.697.697 0 0 0 4 4.698v4.604c0 .386.312.698.698.698h4.604A.697.697 0 0 0 10 9.302V4.698z' fill='%23fff'/%3E%3C/svg%3E\")}.icon-checkbox-disabled:before{border:1px solid #bbb;cursor:not-allowed}.icon-checkbox-disabled.icon-checkbox-checked:before{background-color:#bbb}.icon-checkbox-invisible{visibility:hidden}.link-checkbox{color:inherit;border-bottom:none}.link-checkbox.disabled,.link-checkbox.disabled:hover,.link-checkbox.disabled label{color:#777;cursor:not-allowed}.link-checkbox:active,.link-checkbox:focus,.link-checkbox:hover{color:inherit}",""])},393:function(e,t,n){var a=n(408),r="Expected a function";function l(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(r);var n=function(){var a=arguments,r=t?t.apply(this,a):a[0],l=n.cache;if(l.has(r))return l.get(r);var i=e.apply(this,a);return n.cache=l.set(r,i)||l,i};return n.cache=new(l.Cache||a),n}l.Cache=a,e.exports=l},408:function(e,t,n){var a=n(510),r=n(511),l=n(512),i=n(513),s=n(514);function o(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}o.prototype.clear=a,o.prototype.delete=r,o.prototype.get=l,o.prototype.has=i,o.prototype.set=s,e.exports=o},417:function(e,t){e.exports=function(e,t,n,a){for(var r=e.length,l=n+(a?1:-1);a?l--:++l<r;)if(t(e[l],l,e))return l;return-1}},447:function(e,t,n){"use strict";var a,r=this&&this.__extends||(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var l=n(309),i=n(2);n(484);var s=n(315),o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){var n=e.currentTarget.value;t.props.onCheck(n)},t.renderOption=function(e){var n=e.value===t.props.value,a=t.props.name+"__"+e.value;return i.createElement("li",{key:e.value},i.createElement("input",{checked:n,disabled:e.disabled,id:a,name:t.props.name,onChange:t.handleChange,type:"radio",value:e.value}),i.createElement(s.default,{overlay:e.tooltip||void 0},i.createElement("label",{htmlFor:a},e.label)))},t}return r(t,e),t.prototype.render=function(){return i.createElement("ul",{className:l("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(i.PureComponent);t.default=o},470:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(311);t.default=function(e){var t=e.className,n=e.fill,l=void 0===n?"currentColor":n,i=e.size;return a.createElement(r.default,{className:t,size:i},a.createElement("path",{d:"M14.92 4.804q0 0.357-0.25 0.607l-7.679 7.679q-0.25 0.25-0.607 0.25t-0.607-0.25l-4.446-4.446q-0.25-0.25-0.25-0.607t0.25-0.607l1.214-1.214q0.25-0.25 0.607-0.25t0.607 0.25l2.625 2.634 5.857-5.866q0.25-0.25 0.607-0.25t0.607 0.25l1.214 1.214q0.25 0.25 0.25 0.607z",style:{fill:l}}))}},484:function(e,t,n){var a=n(485);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(313)(a,r);a.locals&&(e.exports=a.locals)},485:function(e,t,n){(e.exports=n(312)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff;font-weight:600}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""])},573:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s});var a=n(8),r=n(321);function l(e){return Object(a.getJSON)("/api/navigation/component",e).catch(r.a)}function i(){return Object(a.getJSON)("/api/navigation/marketplace").catch(r.a)}function s(){return Object(a.getJSON)("/api/navigation/settings").catch(r.a)}},627:function(e,t,n){"use strict";n.d(t,"b",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return f}),n.d(t,"f",function(){return b}),n.d(t,"g",function(){return v}),n.d(t,"h",function(){return E}),n.d(t,"i",function(){return k}),n.d(t,"a",function(){return y});var a=n(628),r=n.n(a),l=n(8),i=n(445),s=n(321);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return Object(l.getJSON)("/api/plugins/available").catch(s.a)}function d(){return Object(l.getJSON)("/api/plugins/pending").catch(s.a)}function m(e){if(!e)return[];return["COMPATIBLE","REQUIRES_SYSTEM_UPGRADE","DEPS_REQUIRE_SYSTEM_UPGRADE"].map(t=>{const n=r()(e,e=>e.status===t);return n>-1?e[n]:void 0}).filter(i.isDefined)}function g(e,t){if(!t)return e;const n=t.indexOf(e);return c({},e,{previousUpdates:n>0?t.slice(0,n):[]})}function h(){return Object(l.getJSON)("/api/plugins/installed",{f:"category"}).then(e=>{return e.plugins},s.a)}function f(){return Promise.all([Object(l.getJSON)("/api/plugins/installed",{f:"category"}),Object(l.getJSON)("/api/plugins/updates")]).then(e=>{let t=o(e,2),n=t[0],a=t[1];return n.plugins.map(e=>{const t=a.plugins.find(t=>t.key===e.key);return t?c({},t,e,{updates:m(t.updates).map(e=>g(e,t.updates))}):e})}).catch(s.a)}function b(){return Promise.all([Object(l.getJSON)("/api/plugins/updates"),Object(l.getJSON)("/api/plugins/installed")]).then(e=>{let t=o(e,2),n=t[0],a=t[1];return n.plugins.map(e=>{const t=m(e.updates).map(t=>g(t,e.updates)),n=a.plugins.find(t=>t.key===e.key);return n?c({},n,e,{updates:t}):c({},e,{updates:t})})}).catch(s.a)}function v(e){return Object(l.post)("/api/plugins/install",e).catch(s.a)}function E(e){return Object(l.post)("/api/plugins/uninstall",e).catch(s.a)}function k(e){return Object(l.post)("/api/plugins/update",e).catch(s.a)}function y(){return Object(l.post)("/api/plugins/cancel_all").catch(s.a)}},628:function(e,t,n){var a=n(417),r=n(341),l=n(385),i=Math.max,s=Math.min;e.exports=function(e,t,n){var o=null==e?0:e.length;if(!o)return-1;var c=o-1;return void 0!==n&&(c=l(n),c=n<0?i(o+c,0):s(c,o-1)),a(e,r(t,3),c,!0)}},704:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return l});var a=n(2);const r={installing:[],removing:[],updating:[]},l="UP",i=a.createContext({fetchSystemStatus:()=>{},fetchPendingPlugins:()=>{},pendingPlugins:r,systemStatus:l});t.a=i}}]);
//# sourceMappingURL=296.m.e3c7695d.chunk.js.map