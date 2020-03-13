(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{2127:function(e,t,a){"use strict";a.r(t);var n=a(639),r=a(12),c=a(646),s=a(652),l=a.n(s),o=a(649),i=a(34),m=a(895),u=a(669),p=a(658),v=a(750),d=a(648),f=a(1533),b=(a(1517),a(796)),y=a(647),E=a(684);function h(e){var t=e.className,a=e.measures,c=e.type,s=b.c[c].afterMergeMetric,l=Object(E.findMeasure)(a,s);return l&&void 0!==l.value?r.createElement("div",{className:n(t,"display-flex-center")},r.createElement("span",{className:"huge"},Object(y.formatMeasure)(l.value,"PERCENT")),r.createElement("span",{className:"label flex-1"},Object(i.translate)("component_measures.facet_category.overall_category.estimated"))):null}var g=a(159),O=a(747),N=a(650),j=function(){return(j=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function w(e){var t,a=e.branchLike,c=e.className,s=e.component,l=e.docTooltip,o=e.measures,i=e.type,m=b.b[i],v=m.metric,d=m.iconClass,f=Object(E.findMeasure)(o,v);f&&(t=Object(O.b)(f));var h=j(j({},Object(p.d)(a)),{resolved:"false",types:i});return r.createElement(r.Fragment,null,void 0===t?r.createElement("span",{className:n(c,"measure-empty")},"—"):r.createElement(g.Link,{className:c,to:Object(N.h)(s.key,h)},Object(y.formatMeasure)(t,"SHORT_INT")),r.createElement(d,{className:"big-spacer-left little-spacer-right"}),Object(b.f)(v),l&&r.createElement(u.a,{className:"little-spacer-left",doc:l}))}var _=a(645),k=a.n(_),L=a(715),x=a.n(L),M=a(942);function T(e){var t=e.branchLike,a=e.component,n=e.measures,c=e.type,s=b.b[c].rating,l=Object(E.findMeasure)(n,s);if(!s||!l)return null;var o=Object(O.b)(l),i=o&&Object(O.c)(s,Number(o));return r.createElement(r.Fragment,null,r.createElement("span",{className:"big-spacer-right flex-1"},Object(b.g)(c)),r.createElement(k.a,{overlay:i},r.createElement("span",null,r.createElement(M.a,{branchLike:t,className:"link-no-underline",component:a.key,metric:s},r.createElement(x.a,{value:o})))))}var C=a(634),P=a(693),q=a.n(P),R=a(663),S=a(118);function B(e){var t,a=e.component,c=e.level,s="OK"===c;return t=Object(S.isSonarCloud)()?void 0===a.qualityGate?Object(N.v)(a.organization):Object(N.u)(a.qualityGate.key,a.organization):void 0===a.qualityGate?Object(N.v)():Object(N.u)(a.qualityGate.key),r.createElement("div",{className:n("quality-gate-badge-large small",{failed:!s,success:s})},r.createElement("div",{className:"display-flex-center"},r.createElement("span",null,Object(i.translate)("overview.on_new_code_long")),r.createElement(l.a,{className:"little-spacer-left",overlay:r.createElement(C.FormattedMessage,{defaultMessage:Object(i.translate)("overview.quality_gate.conditions_on_new_code"),id:"overview.quality_gate.conditions_on_new_code",values:{link:r.createElement(g.Link,{to:t},Object(i.translate)("overview.quality_gate"))}})},r.createElement(q.a,{fill:R.colors.transparentWhite,size:12}))),void 0!==c&&r.createElement("h4",{className:"huge-spacer-top huge"},Object(i.translate)("metric.level",c)))}var I,A=(I=function(e,t){return(I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}I(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLabelText=function(){var e=t.props,a=e.branchLike,n=e.component,c=e.measures,s=e.type,l=b.c[s],o=l.expandedLabelKey,m=l.linesMetric,u=l.labelKey,p=Object(E.findMeasure)(c,m);return p?r.createElement(C.FormattedMessage,{defaultMessage:Object(i.translate)(o),id:o,values:{count:r.createElement(M.a,{branchLike:a,component:n.key,metric:m},Object(y.formatMeasure)(Object(O.b)(p),"SHORT_INT"))}}):Object(i.translate)(u)},t}return A(t,e),t.prototype.render=function(){var e,t=this.props,a=t.branchLike,c=t.className,s=t.component,l=t.measures,o=t.type,i=b.c[o],m=i.iconClass,u=i.metric,p=Object(E.findMeasure)(l,u);return p&&(e=Object(O.b)(p)),r.createElement(r.Fragment,null,void 0===e?r.createElement("span",{className:n(c,"measure-empty")},"—"):r.createElement(r.Fragment,null,r.createElement("span",{className:"big-spacer-right"},r.createElement(m,{size:"big",value:Number(e)})),r.createElement(M.a,{branchLike:a,className:c,component:s.key,metric:u},Object(y.formatMeasure)(e,"PERCENT"))),r.createElement("span",{className:"big-spacer-left"},this.getLabelText()))},t}(r.Component);a.d(t,"ReviewApp",function(){return D});var G=function(){var e=function(t,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(t,a)};return function(t,a){function n(){this.constructor=t}e(t,a),t.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}}(),U=function(){return(U=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,measures:[]},t.fetchBranchData=function(){var e=t.props,a=e.branchLike,n=e.component;t.setState({loading:!0}),Promise.all([Object(m.d)(U({component:n.key,metricKeys:b.e.join()},Object(p.d)(a))),t.props.fetchBranchStatus(a,n.key)]).then(function(e){var a=e[0];t.mounted&&a&&t.setState({loading:!1,measures:a})},function(){t.mounted&&t.setState({loading:!1})})},t}return G(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchBranchData()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.branchLike,c=e.component,s=e.conditions,m=e.ignoredConditions,p=e.status,v=this.state,d=v.loading,b=v.measures;if(d||!s)return r.createElement("div",{className:"page page-limited"},r.createElement("i",{className:"spinner"}));var y=s.filter(function(e){return"ERROR"===e.level});return r.createElement("div",{className:"page page-limited"},r.createElement("div",{className:n("pr-overview",{"has-conditions":y.length>0})},m&&r.createElement(o.Alert,{className:"big-spacer-bottom",display:"inline",variant:"info"},r.createElement("span",{className:"text-middle"},Object(i.translate)("overview.quality_gate.ignored_conditions")),r.createElement(l.a,{className:"spacer-left",overlay:Object(i.translate)("overview.quality_gate.ignored_conditions.tooltip")})),r.createElement("div",{className:"display-flex-row"},r.createElement("div",{className:"pr-overview-quality-gate big-spacer-right"},r.createElement("h3",{className:"spacer-bottom small"},Object(i.translate)("overview.quality_gate"),r.createElement(u.a,{className:"spacer-left",doc:Promise.resolve().then(a.bind(null,1295))})),r.createElement(B,{component:c,level:p})),y.length>0&&r.createElement("div",{className:"pr-overview-failed-conditions big-spacer-right"},r.createElement("h3",{className:"spacer-bottom small"},Object(i.translate)("overview.failed_conditions")),r.createElement(f.a,{branchLike:t,collapsible:!0,component:c,conditions:y})),r.createElement("div",{className:"pr-overview-measurements flex-1"},r.createElement("h3",{className:"spacer-bottom small"},Object(i.translate)("overview.metrics")),["BUG","VULNERABILITY","CODE_SMELL"].map(function(e){return r.createElement("div",{className:"pr-overview-measurements-row display-flex-row",key:e},r.createElement("div",{className:"pr-overview-measurements-value flex-1 small display-flex-center"},r.createElement(w,{branchLike:t,className:"overview-domain-measure-value",component:c,measures:b,type:e})),"VULNERABILITY"===e&&r.createElement("div",{className:"pr-overview-measurements-value flex-1 small display-flex-center"},r.createElement(w,{branchLike:t,className:"overview-domain-measure-value",component:c,docTooltip:Promise.resolve().then(a.bind(null,1516)),measures:b,type:"SECURITY_HOTSPOT"})),r.createElement("div",{className:"pr-overview-measurements-rating display-flex-center"},r.createElement(T,{branchLike:t,component:c,measures:b,type:e})))}),["COVERAGE","DUPLICATION"].map(function(e){return r.createElement("div",{className:"pr-overview-measurements-row display-flex-row",key:e},r.createElement("div",{className:"pr-overview-measurements-value flex-1 small display-flex-center"},r.createElement(F,{branchLike:t,className:"overview-domain-measure-value",component:c,measures:b,type:e})),r.createElement(h,{className:"pr-overview-measurements-estimate",measures:b,type:e}))})))))},t}(r.PureComponent),z={fetchBranchStatus:v.c};t.default=Object(c.connect)(function(e,t){var a=t.branchLike,n=t.component,r=Object(d.getBranchStatusByBranchLike)(e,n.key,a);return{conditions:r.conditions,ignoredConditions:r.ignoredConditions,status:r.status}},z)(D)}}]);
//# sourceMappingURL=378.1576512032968.chunk.js.map