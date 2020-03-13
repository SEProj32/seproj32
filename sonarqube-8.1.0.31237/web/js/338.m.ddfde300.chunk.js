(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{1749:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a(2),s=a(957);function c(e){return n.createElement(s.a,Object.assign({setup:!0},e))}},362:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(2),s=a(304),c=a(29);function r(e){let t=e.children,a=e.date;return n.createElement(s.FormattedRelative,{value:Object(c.parseDate)(a)},t)}},521:function(e,t,a){"use strict";a.d(t,"g",function(){return c}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"a",function(){return m}),a.d(t,"e",function(){return u}),a.d(t,"f",function(){return o}),a.d(t,"h",function(){return d});var n=a(8),s=a(321);function c(e){return Object(n.post)("/api/system/change_log_level",{level:e}).catch(s.a)}function r(){return Object(n.getJSON)("/api/system/info").catch(s.a)}function i(){return Object(n.getJSON)("/api/system/status")}function l(){return Object(n.getJSON)("/api/system/upgrades")}function m(){return Object(n.getJSON)("/api/system/db_migration_status")}function u(){return Object(n.postJSON)("/api/system/migrate_db")}function o(){return Object(n.post)("/api/system/restart").catch(s.a)}function d(){return Object(n.requestTryAndRepeatUntil)(i,{max:-1,slowThreshold:-15},e=>{return"UP"===e.status})}},580:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(2),s=a(304),c=a(29);const r={hour:"numeric",minute:"numeric"},i={hour:"numeric",minute:"numeric",second:"numeric"};function l(e){let t=e.children,a=e.date,l=e.long;return n.createElement(s.FormattedTime,Object.assign({value:Object(c.parseDate)(a)},l?i:r),t)}},957:function(e,t,a){"use strict";a.d(t,"a",function(){return E});var n=a(309),s=a(2),c=a(324),r=a.n(c),i=a(304),l=a(310),m=a(5),u=a(323),o=a(521),d=a(383),h=a(362),g=a(580),p=a(22);a(958);class E extends s.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={},this.fetchStatus=()=>{(this.props.setup?this.fetchMigrationState():this.fetchSystemStatus()).catch(()=>{this.mounted&&this.setState({message:void 0,startedAt:void 0,state:void 0,status:"OFFLINE"})})},this.fetchSystemStatus=()=>Object(o.c)().then(e=>{let t=e.status;this.mounted&&(this.setState({status:t}),"STARTING"===t?(this.setState({wasStarting:!0}),this.scheduleRefresh()):"UP"===t?this.state.wasStarting&&this.loadPreviousPage():this.scheduleRefresh())}),this.fetchMigrationState=()=>Object(o.a)().then(e=>{let t=e.message,a=e.startedAt,n=e.state;this.mounted&&(this.setState({message:t,startedAt:a,state:n}),"MIGRATION_SUCCEEDED"===n?this.loadPreviousPage():"NO_MIGRATION"!==n&&this.scheduleRefresh())}),this.scheduleRefresh=()=>{this.interval=window.setTimeout(this.fetchStatus,5e3)},this.loadPreviousPage=()=>{setInterval(()=>{window.location.href=Object(u.getReturnUrl)(this.props.location)},2500)},this.handleMigrateClick=()=>{Object(o.e)().then(e=>{let t=e.message,a=e.startedAt,n=e.state;this.mounted&&this.setState({message:t,startedAt:a,state:n})},()=>{})}}componentDidMount(){this.mounted=!0,this.fetchStatus()}componentWillUnmount(){this.mounted=!1,this.interval&&window.clearInterval(this.interval)}render(){const e=this.state,t=e.state,a=e.status;return s.createElement(s.Fragment,null,s.createElement(r.a,{defaultTitle:Object(m.translate)("maintenance.page")}),s.createElement("div",{className:"page-wrapper-simple",id:"bd"},s.createElement("div",{className:n("page-simple",{"panel-warning":"MIGRATION_REQUIRED"===t}),id:"nonav"},"OFFLINE"===a&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title text-danger"},s.createElement(d.a,{message:Object(m.translate)("maintenance.is_offline")})),!Object(p.isSonarCloud)()&&s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.sonarqube_is_offline.text")),s.createElement("p",{className:"maintenance-text text-center"},s.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(m.translate)("maintenance.try_again")))),"UP"===a&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},s.createElement(d.a,{message:Object(m.translate)("maintenance.is_up")})),s.createElement("p",{className:"maintenance-text text-center"},Object(m.translate)("maintenance.all_systems_opetational")),s.createElement("p",{className:"maintenance-text text-center"},s.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(m.translate)("layout.home")))),"STARTING"===a&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},s.createElement(d.a,{message:Object(m.translate)("maintenance.is_starting")})),s.createElement("p",{className:"maintenance-spinner"},s.createElement("i",{className:"spinner"}))),"DOWN"===a&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title text-danger"},s.createElement(d.a,{message:Object(m.translate)("maintenance.is_down")})),s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.sonarqube_is_down.text")),s.createElement("p",{className:"maintenance-text text-center"},s.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(m.translate)("maintenance.try_again")))),("DB_MIGRATION_NEEDED"===a||"DB_MIGRATION_RUNNING"===a)&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},s.createElement(d.a,{message:Object(m.translate)("maintenance.is_under_maintenance")})),!Object(p.isSonarCloud)()&&s.createElement(s.Fragment,null,s.createElement("p",{className:"maintenance-text"},s.createElement(i.FormattedMessage,{defaultMessage:Object(m.translate)("maintenance.sonarqube_is_under_maintenance.1"),id:"maintenance.sonarqube_is_under_maintenance.1",values:{link:s.createElement("a",{href:"https://redirect.sonarsource.com/doc/plugin-library.html"},Object(m.translate)("maintenance.sonarqube_is_under_maintenance_link.1"))}})),s.createElement("p",{className:"maintenance-text"},s.createElement(i.FormattedMessage,{defaultMessage:Object(m.translate)("maintenance.sonarqube_is_under_maintenance.2"),id:"maintenance.sonarqube_is_under_maintenance.2",values:{link:s.createElement("a",{href:"https://redirect.sonarsource.com/doc/upgrading.html"},Object(m.translate)("maintenance.sonarqube_is_under_maintenance_link.2"))}})))),"NO_MIGRATION"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},Object(m.translate)("maintenance.database_is_up_to_date")),s.createElement("p",{className:"maintenance-text text-center"},s.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(m.translate)("layout.home")))),"MIGRATION_REQUIRED"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},Object(m.translate)("maintenance.upgrade_database")),s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.upgrade_database.1")),s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.upgrade_database.2")),s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.upgrade_database.3")),s.createElement("div",{className:"maintenance-spinner"},s.createElement(l.Button,{id:"start-migration",onClick:this.handleMigrateClick},Object(m.translate)("maintenance.upgrade")))),"NOT_SUPPORTED"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title text-danger"},Object(m.translate)("maintenance.migration_not_supported")),s.createElement("p",null,Object(m.translate)("maintenance.migration_not_supported.text"))),"MIGRATION_RUNNING"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title"},Object(m.translate)("maintenance.database_migration")),this.state.message&&s.createElement("p",{className:"maintenance-text text-center"},this.state.message),this.state.startedAt&&s.createElement("p",{className:"maintenance-text text-center"},Object(m.translate)("background_tasks.table.started")," ",s.createElement(h.a,{date:this.state.startedAt}),s.createElement("br",null),s.createElement("small",{className:"text-muted"},s.createElement(g.a,{date:this.state.startedAt,long:!0}))),s.createElement("p",{className:"maintenance-spinner"},s.createElement("i",{className:"spinner"}))),"MIGRATION_SUCCEEDED"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title text-success"},Object(m.translate)("maintenance.database_is_up_to_date")),s.createElement("p",{className:"maintenance-text text-center"},s.createElement("a",{href:Object(u.getBaseUrl)()+"/"},Object(m.translate)("layout.home")))),"MIGRATION_FAILED"===t&&s.createElement(s.Fragment,null,s.createElement("h1",{className:"maintenance-title text-danger"},Object(m.translate)("maintenance.upgrade_failed")),s.createElement("p",{className:"maintenance-text"},Object(m.translate)("maintenance.upgrade_failed.text"))))))}}},958:function(e,t,a){var n=a(959);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(313)(n,s);n.locals&&(e.exports=n.locals)},959:function(e,t,a){(e.exports=a(312)(!1)).push([e.i,".maintenance-title{margin-bottom:40px;line-height:1.5;font-size:24px;font-weight:300;text-align:center}.maintenance-text{margin-bottom:16px;line-height:1.5;font-size:16px;font-weight:300}.maintenance-spinner{margin-top:40px;text-align:center}",""])}}]);
//# sourceMappingURL=338.m.ddfde300.chunk.js.map