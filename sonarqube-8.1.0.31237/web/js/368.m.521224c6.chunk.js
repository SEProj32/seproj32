(window.webpackJsonp=window.webpackJsonp||[]).push([[368,367],{1077:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=n(311);t.default=function(e){var t=e.className,n=e.fill,l=e.size;return a.createElement(s.ThemedIcon,{className:t,size:l},function(e){var t=e.theme;return a.createElement("path",{d:"M9 12.242v-1.484c0-.14-.11-.258-.25-.258h-1.5c-.14 0-.25.117-.25.258v1.484c0 .14.11.258.25.258h1.5c.14 0 .25-.117.25-.258zM8.984 9.32l.141-3.586a.189.189 0 0 0-.078-.148C9 5.546 8.93 5.5 8.859 5.5H7.141c-.07 0-.141.047-.188.086-.055.039-.078.117-.078.164l.133 3.57c0 .102.117.18.265.18H8.72c.14 0 .258-.078.265-.18zm-.109-7.297l6 11A1 1 0 0 1 14 14.5H2a1 1 0 0 1-.875-1.477l6-11a.994.994 0 0 1 1.75 0z",style:{fill:n||t.colors.warningIconColor}})})}},1710:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(2),s=n(310),l=n(326),r=n.n(l),i=n(1077),o=n.n(i),c=n(314),d=n.n(c),m=n(5),h=n(572);class u extends a.PureComponent{constructor(e){super(e),this.mounted=!1,this.keepLineBreaks=e=>{if(e.includes("\n")){const t=e.split("\n");return a.createElement(a.Fragment,null,t.map((e,n)=>a.createElement(a.Fragment,{key:n},e,n<t.length-1&&a.createElement("br",null))))}return e},this.state={loading:!e.warnings,warnings:e.warnings||[]}}componentDidMount(){this.mounted=!0,!this.props.warnings&&this.props.taskId&&this.loadWarnings(this.props.taskId)}componentDidUpdate(e){const t=this.props,n=t.taskId,a=t.warnings;!a&&n&&e.taskId!==n?this.loadWarnings(n):a&&e.warnings!==a&&this.setState({warnings:a})}componentWillUnmount(){this.mounted=!1}loadWarnings(e){this.setState({loading:!0}),Object(h.f)(e,["warnings"]).then(e=>{let t=e.warnings,n=void 0===t?[]:t;this.mounted&&this.setState({loading:!1,warnings:n})},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=Object(m.translate)("warnings");return a.createElement(r.a,{contentLabel:e,onRequestClose:this.props.onClose},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("div",{className:"modal-body modal-container js-analysis-warnings"},a.createElement(d.a,{loading:this.state.loading},this.state.warnings.map((e,t)=>a.createElement("div",{className:"panel panel-vertical",key:t},a.createElement(o.a,{className:"pull-left spacer-right"}),a.createElement("div",{className:"overflow-hidden markdown"},this.keepLineBreaks(e)))))),a.createElement("footer",{className:"modal-foot"},a.createElement(s.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(m.translate)("close"))))}}}}]);
//# sourceMappingURL=368.m.521224c6.chunk.js.map