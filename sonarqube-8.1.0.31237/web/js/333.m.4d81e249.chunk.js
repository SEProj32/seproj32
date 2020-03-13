(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1792:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(324),s=n.n(a),o=n(348),i=n.n(o),l=n(5),c=n(565),u=n(332),m=n(319),d=n(314),p=n.n(d),h=n(310),f=n(336),b=n.n(f),g=n(329),E=n.n(g),C=n(663);class v extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSubmit=()=>this.state.metricKey?this.props.onSubmit({description:this.state.description,metricKey:this.state.metricKey,value:this.state.value}).then(this.props.onClose):Promise.reject(void 0),this.fetchCustomMetrics=()=>{this.setState({loading:!0}),Object(C.c)({isCustom:!0}).then(e=>{this.mounted&&this.setState({loading:!1,metrics:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleMetricSelect=e=>{let t=e.value;this.setState({metricKey:t})},this.handleDescriptionChange=e=>{this.setState({description:e.currentTarget.value})},this.handleValueChange=e=>{this.setState({value:e.currentTarget.value})},this.renderMetricSelect=e=>e.length||this.state.loading?r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-metric"},Object(l.translate)("custom_measures.metric"),r.createElement("em",{className:"mandatory"},"*")),this.state.loading?r.createElement("i",{className:"spinner"}):r.createElement(b.a,{autoFocus:!0,clearable:!1,id:"create-custom-measure-metric",onChange:this.handleMetricSelect,options:e,value:this.state.metricKey})):r.createElement(m.Alert,{variant:"warning"},Object(l.translate)("custom_measures.all_metrics_taken")),this.state={description:e.measure&&e.measure.description||"",loading:!1,metricKey:e.measure&&e.measure.metric.key,value:e.measure&&e.measure.value||""}}componentDidMount(){this.mounted=!0,this.props.measure||this.fetchCustomMetrics()}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.skipMetrics,t=void 0===e?[]:e,n=this.state.metrics,a=(void 0===n?[]:n).filter(e=>!t.includes(e.key)).map(e=>({label:e.name,value:e.key})),s=!this.props.measure&&!a.length;return r.createElement(E.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},e=>{let t=e.onCloseClick,n=e.onFormSubmit,o=e.submitting;return r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,this.props.header)),r.createElement("div",{className:"modal-body"},!this.props.measure&&this.renderMetricSelect(a),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-value"},Object(l.translate)("value"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:void 0!==this.props.measure,id:"create-custom-measure-value",maxLength:200,name:"value",onChange:this.handleValueChange,required:!0,type:"text",value:this.state.value})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-description"},Object(l.translate)("description")),r.createElement("textarea",{id:"create-custom-measure-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description}))),r.createElement("footer",{className:"modal-foot"},r.createElement(p.a,{className:"spacer-right",loading:o}),r.createElement(h.SubmitButton,{disabled:s||o,id:"create-custom-measure-submit"},this.props.confirmButtonText),r.createElement(h.ResetButtonLink,{disabled:o,id:"create-custom-measure-cancel",onClick:t},Object(l.translate)("cancel"))))})}}class y extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleClick=()=>{this.setState({modal:!0})},this.handleClose=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement(r.Fragment,null,r.createElement(h.Button,{id:"custom-measures-create",onClick:this.handleClick},Object(l.translate)("create")),this.state.modal&&r.createElement(v,{confirmButtonText:Object(l.translate)("create"),header:Object(l.translate)("custom_measures.create_custom_measure"),onClose:this.handleClose,onSubmit:this.props.onCreate,skipMetrics:this.props.skipMetrics}))}}function O(e){let t=e.loading,n=e.onCreate,a=e.skipMetrics;return r.createElement("header",{className:"page-header",id:"custom-measures-header"},r.createElement("h1",{className:"page-title"},Object(l.translate)("custom_measures.page")),r.createElement(p.a,{loading:t}),r.createElement("div",{className:"page-actions"},r.createElement(y,{onCreate:n,skipMetrics:a})),r.createElement("div",{className:"page-description"},r.createElement(m.Alert,{display:"inline",variant:"error"},Object(l.translate)("custom_measures.deprecated")),r.createElement("p",null,Object(l.translate)("custom_measures.page.description"))))}var j=n(325),_=n.n(j),S=n(373),N=n.n(S),k=n(315),w=n.n(k),D=n(317),M=n(331);function P(e){let t=e.measure,n=e.onClose,a=e.onSubmit;const s=Object(l.translate)("custom_measures.delete_custom_measure");return r.createElement(E.a,{header:s,onClose:n,onSubmit:a},e=>{let n=e.onCloseClick,a=e.onFormSubmit,o=e.submitting;return r.createElement("form",{onSubmit:a},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,s)),r.createElement("div",{className:"modal-body"},Object(l.translateWithParameters)("custom_measures.delete_custom_measure.confirmation",t.metric.name)),r.createElement("footer",{className:"modal-foot"},r.createElement(p.a,{className:"spacer-right",loading:o}),r.createElement(h.SubmitButton,{className:"button-red",disabled:o},Object(l.translate)("delete")),r.createElement(h.ResetButtonLink,{disabled:o,onClick:n},Object(l.translate)("cancel"))))})}var F=n(342);function x(e){let t=e.measure;return t.updatedAt?r.createElement(r.Fragment,null,Object(l.translate)("updated_on")," ",r.createElement("span",{className:"js-custom-measure-created-at"},r.createElement(F.a,{date:t.updatedAt}))):t.createdAt?r.createElement(r.Fragment,null,Object(l.translate)("created_on")," ",r.createElement("span",{className:"js-custom-measure-created-at"},r.createElement(F.a,{date:t.createdAt}))):r.createElement(r.Fragment,null,Object(l.translate)("created"))}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class A extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,editForm:!1},this.handleEditClick=()=>{this.setState({editForm:!0})},this.handleDeleteClick=()=>{this.setState({deleteForm:!0})},this.closeEditForm=()=>{this.mounted&&this.setState({editForm:!1})},this.closeDeleteForm=()=>{this.mounted&&this.setState({deleteForm:!1})},this.handleEditFormSubmit=e=>this.props.onEdit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){L(e,t,n[t])})}return e}({id:this.props.measure.id},e)),this.handleDeleteFormSubmit=()=>this.props.onDelete(this.props.measure.id)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.measure,t=e.user.name||e.user.login;return r.createElement("tr",{"data-metric":e.metric.key},r.createElement("td",{className:"nowrap"},r.createElement("div",null,r.createElement("span",{className:"js-custom-measure-metric-name"},e.metric.name),e.pending&&r.createElement(w.a,{overlay:Object(l.translate)("custom_measures.pending_tooltip")},r.createElement("span",{className:"js-custom-measure-pending badge badge-warning spacer-left"},Object(l.translate)("custom_measures.pending")))),r.createElement("span",{className:"js-custom-measure-domain note"},e.metric.domain)),r.createElement("td",{className:"nowrap"},r.createElement("strong",{className:"js-custom-measure-value"},Object(D.formatMeasure)(e.value,e.metric.type))),r.createElement("td",null,r.createElement("span",{className:"js-custom-measure-description"},e.description)),r.createElement("td",null,r.createElement(x,{measure:e})," ",Object(l.translate)("by_")," ",r.createElement("span",{className:"js-custom-measure-user"},Object(M.c)(e.user)?t:Object(l.translateWithParameters)("user.x_deleted",t))),r.createElement("td",{className:"thin nowrap"},r.createElement(N.a,null,r.createElement(S.ActionsDropdownItem,{className:"js-custom-measure-update",onClick:this.handleEditClick},Object(l.translate)("update_verb")),r.createElement(S.ActionsDropdownDivider,null),r.createElement(S.ActionsDropdownItem,{className:"js-custom-measure-delete",destructive:!0,onClick:this.handleDeleteClick},Object(l.translate)("delete")))),this.state.editForm&&r.createElement(v,{confirmButtonText:Object(l.translate)("update_verb"),header:Object(l.translate)("custom_measures.update_custom_measure"),measure:this.props.measure,onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}),this.state.deleteForm&&r.createElement(P,{measure:this.props.measure,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}))}}function T(e){let t=e.measures,n=e.onDelete,a=e.onEdit;return r.createElement("div",{className:"boxed-group boxed-group-inner",id:"custom-measures-list"},t.length>0?r.createElement("table",{className:"data zebra zebra-hover"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(l.translate)("custom_measures.metric")),r.createElement("th",null,Object(l.translate)("value")),r.createElement("th",null,Object(l.translate)("description")),r.createElement("th",null,Object(l.translate)("date")),r.createElement("th",null))),r.createElement("tbody",null,_()(t,e=>e.metric.name.toLowerCase()).map(e=>r.createElement(A,{key:e.id,measure:e,onDelete:n,onEdit:a})))):r.createElement("p",null,Object(l.translate)("no_results")))}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){z(e,t,n[t])})}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return W});const K=50;class W extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchMeasures=()=>{this.setState({loading:!0}),Object(c.c)({projectKey:this.props.component.key,ps:K}).then(e=>{let t=e.customMeasures,n=e.paging;this.mounted&&this.setState({loading:!1,measures:t,paging:n})},this.stopLoading)},this.fetchMore=()=>{const e=this.state.paging;e&&(this.setState({loading:!0}),Object(c.c)({projectKey:this.props.component.key,p:e.pageIndex+1,ps:K}).then(e=>{let t=e.customMeasures,n=e.paging;this.mounted&&this.setState(e=>{let r=e.measures;return{loading:!1,measures:[...void 0===r?[]:r,...t],paging:n}})},this.stopLoading))},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.handleCreate=e=>Object(c.a)(B({},e,{projectKey:this.props.component.key})).then(e=>{this.mounted&&this.setState(t=>{let n=t.measures,r=void 0===n?[]:n,a=t.paging;return{measures:[...r,e],paging:a&&B({},a,{total:a.total+1})}})}),this.handleEdit=e=>Object(c.g)(e).then(()=>{this.mounted&&this.setState(t=>{let n=t.measures;return{measures:(void 0===n?[]:n).map(t=>t.id===e.id?B({},t,e):t)}})}),this.handleDelete=e=>Object(c.b)({id:e}).then(()=>{this.mounted&&this.setState(t=>{let n=t.measures,r=void 0===n?[]:n,a=t.paging;return{measures:r.filter(t=>t.id!==e),paging:a&&B({},a,{total:a.total-1})}})})}componentDidMount(){this.mounted=!0,this.fetchMeasures()}componentWillUnmount(){this.mounted=!1}render(){const e=this.state,t=e.loading,n=e.measures,a=e.paging;return r.createElement(r.Fragment,null,r.createElement(u.a,{suggestions:"custom_measures"}),r.createElement(s.a,{title:Object(l.translate)("custom_measures.page")}),r.createElement("div",{className:"page page-limited"},r.createElement(O,{loading:t,onCreate:this.handleCreate,skipMetrics:n&&n.map(e=>e.metric.key)}),n&&r.createElement(T,{measures:n,onDelete:this.handleDelete,onEdit:this.handleEdit}),n&&a&&r.createElement(i.a,{count:n.length,loadMore:this.fetchMore,ready:!t,total:a.total})))}}},329:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(326),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,a=(e.onSubmit,o(e,["children","header","onClose","onSubmit"]));return i.createElement(l.default,s({contentLabel:n,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=c},332:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(2),a=n(350);function s(e){let t=e.suggestions;return r.createElement(a.a.Consumer,null,e=>{let n=e.addSuggestions,a=e.removeSuggestions;return r.createElement(o,{addSuggestions:n,removeSuggestions:a,suggestions:t})})}class o extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},342:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var r=n(2),a=n(304),s=n(29);const o={year:"numeric",month:"short",day:"2-digit"},i={year:"numeric",month:"long",day:"numeric"};function l(e){let t=e.children,n=e.date,l=e.long;return r.createElement(a.FormattedDate,Object.assign({value:Object(s.parseDate)(n)},l?i:o),t)}},348:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),s=n(2),o=n(5),i=n(317),l=n(314);t.default=function(e){var t,n=e.ready,c=void 0===n||n,u=r(e,["ready"]),m=u.total&&u.total>u.count,d=s.createElement("a",{className:"spacer-left","data-test":"show-more",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.loadMore&&u.loadMore()}},o.translate("show_more")),p=s.createElement("a",{className:"spacer-left","data-test":"reload",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.reload&&u.reload()}},o.translate("reload")),h=a("spacer-top note text-center",{"new-loading":!c},u.className);return u.needReload&&u.reload?t=p:m&&u.loadMore&&(t=d),s.createElement("footer",{className:h},o.translateWithParameters("x_of_y_shown",i.formatMeasure(u.count,"INT",null),i.formatMeasure(u.total,"INT",null)),t,u.loading&&s.createElement(l.default,{className:"text-bottom spacer-left position-absolute"}))}},371:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(5),l=n(8),c=n(319);t.lazyLoadComponent=function(e,t){var n=o.lazy(function(){return l.requestTryAndRepeatUntil(e,{max:2,slowThreshold:2},function(){return!0})});function r(e){return o.createElement(u,null,o.createElement(o.Suspense,{fallback:null},o.createElement(n,s({},e))))}return r.displayName=t,r};var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hasError:!1},t}return a(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.render=function(){return this.state.hasError?o.createElement(c.Alert,{variant:"error"},i.translate("default_error_message")):this.props.children},t}(o.Component);t.LazyErrorBoundary=u},373:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var s=n(309),o=n(2),i=n(28),l=n(334),c=n(374),u=n(310),m=n(330);t.default=function(e){return o.createElement(m.default,{className:e.className,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},e.children)},o.createElement(u.Button,{className:s("dropdown-toggle",e.toggleClassName,{"button-small":e.small})},o.createElement(c.default,{size:e.small?12:14}),o.createElement(l.default,{className:"little-spacer-left"})))};var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return a(t,e),t.prototype.render=function(){var e=s(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:e,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(i.Link,{className:e,id:this.props.id,to:this.props.to},this.props.children)):o.createElement("li",null,o.createElement("a",{className:e,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(o.PureComponent);t.ActionsDropdownItem=d,t.ActionsDropdownDivider=function(){return o.createElement("li",{className:"divider"})}},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(311);t.default=function(e){var t=e.className,n=e.fill,s=void 0===n?"currentColor":n,o=e.size,i=void 0===o?14:o;return r.createElement(a.default,{className:t,size:i,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:s}})))}}}]);
//# sourceMappingURL=333.m.4d81e249.chunk.js.map