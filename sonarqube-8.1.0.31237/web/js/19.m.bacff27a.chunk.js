(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1701:function(t,e,n){"use strict";n.r(e),n.d(e,"PageTracker",function(){return m});var a=n(2),c=n(324),s=n.n(c),o=n(316),r=n(347),i=n(1702),u=n(384),l=n(14),d=n(22),p=n(318);class m extends a.Component{constructor(){super(...arguments),this.state={},this.trackPage=()=>{const t=this.props,e=t.location,n=t.trackingIdGTM,a=this.state.lastLocation,c=window.dataLayer,s=e.pathname!==a,o=Object(l.b)();o&&s?(this.setState({lastLocation:e.pathname}),setTimeout(()=>o(e.pathname),500)):c&&c.push&&n&&"/"!==e.pathname&&(this.setState({lastLocation:e.pathname}),setTimeout(()=>c.push({event:"render-end"}),500))}}componentDidMount(){const t=this.props,e=t.trackingIdGTM,n=t.webAnalytics;n&&!Object(l.b)()&&Object(u.b)(n,"head"),e&&Object(i.gtm)(e)}render(){const t=this.props,e=t.trackingIdGTM,n=t.webAnalytics;return a.createElement(s.a,{defaultTitle:Object(d.getInstance)(),onChangeClientState:e||n?this.trackPage:void 0},this.props.children)}}e.default=Object(r.a)(Object(o.connect)(t=>{const e=Object(p.getGlobalSettingValue)(t,"sonar.analytics.gtm.trackingId");return{trackingIdGTM:e&&e.value,webAnalytics:Object(p.getAppState)(t).webAnalyticsJsPath}})(m))},1702:function(t,e,n){"use strict";t.exports={gtm:t=>(function(t,e,n,a,c){t[a]=t[a]||[],t[a].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});const s=e.getElementsByTagName(n)[0],o=e.createElement(n);o.async=!0,o.src="https://www.googletagmanager.com/gtm.js?id="+c,s.parentNode.insertBefore(o,s)})(window,document,"script","dataLayer",t)}},384:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var a=n(323),c=n(14);let s=!1;function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body";return new Promise(n=>{const c=document.createElement("script");c.src="".concat(Object(a.getBaseUrl)()).concat(t),c.onload=n,document.getElementsByTagName(e)[0].appendChild(c)})}async function r(t){const e=Object(c.a)(t);if(e)return Promise.resolve(e);if(!s){(0,(await Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(279)]).then(n.bind(null,509))).default)(),s=!0}await o("/static/".concat(t,".js"));const a=Object(c.a)(t);return a||Promise.reject()}}}]);
//# sourceMappingURL=19.m.bacff27a.chunk.js.map