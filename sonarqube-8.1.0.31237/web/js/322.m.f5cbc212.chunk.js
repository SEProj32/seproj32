(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1359:function(e,t,a){var l=a(1360);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(313)(l,n);l.locals&&(e.exports=l.locals)},1360:function(e,t,a){(e.exports=a(312)(!1)).push([e.i,".about-page{font-size:14px}.about-page .boxed-group{border:none}.about-page .boxed-group h2{padding-left:0;padding-right:0;font-size:18px}.about-page .boxed-group>h2{padding-top:25px}.about-page .boxed-group h3{font-weight:400;font-size:16px;padding-bottom:12px}.about-page .boxed-group-inner{padding-left:0;padding-right:0;padding-bottom:25px}.about-page-entry{display:flex;justify-content:space-between;align-items:center;margin-bottom:45px;padding:65px 0;border-bottom:1px solid #e6e6e6}.about-page-intro{padding-right:65px;border-right:1px solid #e6e6e6}.about-page-intro>h1{line-height:40px;font-size:26px;font-weight:300}.about-page-intro>.button{height:32px;line-height:30px;padding-left:15px;padding-right:15px;border-radius:3px;font-size:13px;font-weight:400}.about-page-instance{display:flex;align-items:center}.about-page-projects{margin-left:65px;line-height:1.4;font-size:16px;text-align:center;min-width:128px}.about-page-projects-link{display:inline-block;line-height:1;margin-bottom:12px;font-size:32px}.about-page-issue-types{text-align:left}.about-page-issue-types tr+tr td{padding-top:12px}.about-page-issue-types svg{vertical-align:middle;transform:translateY(-1px)}.about-page-issue-type-number{padding-right:16px;text-align:right}.about-page-issue-type-link{font-size:16px;font-weight:700}.about-page-section{padding-top:20px;padding-bottom:10px}.about-page-text{line-height:1.4}.about-page-link-more{border:none}.about-page-link-more>span{border-bottom:1px solid #cae3f2}.about-page-languages{display:flex;justify-content:space-between;margin-top:10px}.about-page-languages>li{line-height:2}.about-quality-model .flex-column+.flex-column{margin-left:30px;padding-left:30px;border-left:1px solid #e6e6e6}.about-quality-model svg{transform:translateY(2px)}.about-page-analyzers{display:flex;justify-content:space-between;margin-top:15px}.about-page-analyzer-box{border:none}.about-page-group-boxes{display:flex;flex-direction:column}.about-page-group-boxes>.boxed-group{flex-grow:1}",""])},1783:function(e,t,a){"use strict";a.r(t);var l=a(442),n=a.n(l),r=a(2),s=a(316),o=a(28),c=a(5),i=a(345),u=a(355),m=a(369),p=a(343),d=a(614),g=a(318),b=a(619),h=a(796);a(1359);function E(e){let t=e.link;return r.createElement("div",{className:"big-spacer-top"},r.createElement("a",{className:"about-page-link-more",href:t,rel:"noopener noreferrer",target:"_blank"},r.createElement("span",null,Object(c.translate)("about_page.read_more"))))}const f="https://redirect.sonarsource.com/doc/issues.html";function x(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.clean_code")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.clean_code.text")),r.createElement(E,{link:f})))}const y=[{name:"Java",url:"https://redirect.sonarsource.com/plugins/java.html"},{name:"C/C++",url:"https://redirect.sonarsource.com/plugins/cpp.html"},{name:"C#",url:"https://redirect.sonarsource.com/plugins/csharp.html"},{name:"COBOL",url:"https://redirect.sonarsource.com/plugins/cobol.html"},{name:"ABAP",url:"https://redirect.sonarsource.com/plugins/abap.html"},{name:"HTML",url:"https://redirect.sonarsource.com/plugins/web.html"},{name:"RPG",url:"https://redirect.sonarsource.com/plugins/rpg.html"},{name:"JavaScript",url:"https://redirect.sonarsource.com/plugins/javascript.html"},{name:"TypeScript",url:"https://redirect.sonarsource.com/plugins/typescript.html"},{name:"Objective C",url:"https://redirect.sonarsource.com/plugins/objectivec.html"},{name:"XML",url:"https://redirect.sonarsource.com/plugins/xml.html"},{name:"VB.NET",url:"https://redirect.sonarsource.com/plugins/vbnet.html"},{name:"PL/SQL",url:"https://redirect.sonarsource.com/plugins/plsql.html"},{name:"T-SQL",url:"https://redirect.sonarsource.com/plugins/tsql.html"},{name:"Flex",url:"https://redirect.sonarsource.com/plugins/flex.html"},{name:"Python",url:"https://redirect.sonarsource.com/plugins/python.html"},{name:"Groovy",url:"https://redirect.sonarsource.com/plugins/groovy.html"},{name:"PHP",url:"https://redirect.sonarsource.com/plugins/php.html"},{name:"Swift",url:"https://redirect.sonarsource.com/plugins/swift.html"},{name:"Visual Basic",url:"https://redirect.sonarsource.com/plugins/vb.html"},{name:"PL/I",url:"https://redirect.sonarsource.com/plugins/pli.html"}],v=(y.length+1)/2;function N(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.languages")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.languages.text")),r.createElement("ul",{className:"about-page-languages"},y.slice(0,v).map((e,t)=>r.createElement("li",{key:t},r.createElement("a",{href:e.url},e.name),r.createElement("br",null),t+v<y.length&&r.createElement("a",{href:y[t+v].url},y[t+v].name))))))}const O="https://redirect.sonarsource.com/doc/fix-the-leak.html";function j(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.fix_the_leak")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.fix_the_leak_on_new_code.text")),r.createElement(E,{link:O})))}var _=a(317);function k(e){let t=e.count,a=e.loading;return r.createElement("div",{className:"about-page-projects"},a?r.createElement("i",{className:"spinner"}):r.createElement("div",null,r.createElement("div",null,r.createElement(o.Link,{className:"about-page-projects-link",to:"/projects"},Object(_.formatMeasure)(t,"INT"))),r.createElement("div",null,Object(c.translate)("about_page.projects_analyzed"))))}const L="https://redirect.sonarsource.com/doc/quality-gates.html";function T(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.quality_gates")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.quality_gates.text")),r.createElement(E,{link:L})))}var A=a(377),S=a.n(A),w=a(378),C=a.n(w),M=a(394),I=a.n(M),z=a(372),P=a.n(z);function H(){return r.createElement("div",{className:"boxed-group about-quality-model"},r.createElement("h2",null,Object(c.translate)("about_page.quality_model")),r.createElement("div",{className:"boxed-group-inner clearfix"},r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(c.translate)("metric_domain.Reliability")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(S.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(c.translate)("issue.type.BUG.plural"))," ",Object(c.translate)("about_page.quality_model.bugs"))),r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(c.translate)("metric_domain.Security")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(P.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(c.translate)("issue.type.VULNERABILITY.plural"))," ",Object(c.translate)("about_page.quality_model.vulnerabilities")),r.createElement("br",null),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(I.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(c.translate)("issue.type.SECURITY_HOTSPOT.plural"))," ",Object(c.translate)("about_page.quality_model.security_hotspots"))),r.createElement("div",{className:"flex-column flex-column-third"},r.createElement("h3",null,Object(c.translate)("metric_domain.Maintainability")),r.createElement("div",{className:"pull-left little-spacer-right"},r.createElement(C.a,null)),r.createElement("p",{className:"about-page-text overflow-hidden"},r.createElement("strong",null,Object(c.translate)("issue.type.CODE_SMELL.plural"))," ",Object(c.translate)("about_page.quality_model.code_smells"))))))}var R=a(323);const U=[{key:"sonarqube",link:"https://redirect.sonarsource.com/doc/install-configure-scanner.html"},{key:"msbuild",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-msbuild.html"},{key:"maven",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-maven.html"},{key:"gradle",link:"https://redirect.sonarsource.com/doc/gradle.html"},{key:"jenkins",link:"https://redirect.sonarsource.com/plugins/jenkins.html"},{key:"ant",link:"https://redirect.sonarsource.com/doc/install-configure-scanner-ant.html"}];function B(){return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.scanners")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.scanners.text")),r.createElement("div",{className:"about-page-analyzers"},U.map(e=>r.createElement("a",{className:"about-page-analyzer-box",href:e.link,key:e.key},r.createElement("img",{alt:Object(c.translate)("about_page.scanners",e.key),height:60,src:"".concat(Object(R.getBaseUrl)(),"/images/scanner-logos/").concat(e.key,".svg")}))))))}var V=a(405),q=a.n(V),D=a(320);const Y="https://redirect.sonarsource.com/doc/rules.html",G="owasp-a1,owasp-a2,owasp-a3,owasp-a4,owasp-a5,owasp-a6,owasp-a7,owasp-a8,owasp-a9,owasp-a10",W="sans-top25-porous,sans-top25-risky,sans-top25-insecure";function Z(e){let t=e.appState;const a=t.organizationsEnabled?t.defaultOrganization:void 0;return r.createElement("div",{className:"boxed-group"},r.createElement("h2",null,Object(c.translate)("about_page.standards")),r.createElement("div",{className:"boxed-group-inner"},r.createElement("p",{className:"about-page-text"},Object(c.translate)("about_page.standards.text")),r.createElement("div",{className:"spacer-top"},r.createElement("ul",{className:"list-inline"},r.createElement("li",null,r.createElement(o.Link,{className:"link-with-icon",to:Object(D.y)({tags:"misra"},a)},r.createElement(q.a,null),r.createElement("span",{className:"little-spacer-left"},"MISRA"))),r.createElement("li",null,r.createElement(o.Link,{className:"link-with-icon",to:Object(D.y)({tags:"cert"},a)},r.createElement(q.a,null),r.createElement("span",{className:"little-spacer-left"},"CERT"))),r.createElement("li",null,r.createElement(o.Link,{className:"link-with-icon",to:Object(D.y)({tags:"cwe"},a)},r.createElement(q.a,null),r.createElement("span",{className:"little-spacer-left"},"CWE"))),r.createElement("li",null,r.createElement(o.Link,{className:"link-with-icon",to:Object(D.y)({tags:G},a)},r.createElement(q.a,null),r.createElement("span",{className:"little-spacer-left"},"OWASP Top 10"))),r.createElement("li",null,r.createElement(o.Link,{className:"link-with-icon",to:Object(D.y)({tags:W},a)},r.createElement(q.a,null),r.createElement("span",{className:"little-spacer-left"},"SANS Top 25"))))),r.createElement(E,{link:Y})))}function J(e){let t=e.bugs,a=e.codeSmells,l=e.loading,n=e.securityHotspots,s=e.vulnerabilities;return r.createElement("div",{className:"about-page-projects"},l?r.createElement("i",{className:"spinner"}):r.createElement("table",{className:"about-page-issue-types"},r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(o.Link,{className:"about-page-issue-type-link",to:Object(D.l)({resolved:"false",types:"BUG",s:"CREATION_DATE"})},Object(_.formatMeasure)(t,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(S.a,null)),Object(c.translate)("issue.type.BUG.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(o.Link,{className:"about-page-issue-type-link",to:Object(D.l)({resolved:"false",types:"VULNERABILITY",s:"CREATION_DATE"})},Object(_.formatMeasure)(s,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(P.a,null)),Object(c.translate)("issue.type.VULNERABILITY.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(o.Link,{className:"about-page-issue-type-link",to:Object(D.l)({resolved:"false",types:"CODE_SMELL",s:"CREATION_DATE"})},Object(_.formatMeasure)(a,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(C.a,null)),Object(c.translate)("issue.type.CODE_SMELL.plural"))),r.createElement("tr",null,r.createElement("td",{className:"about-page-issue-type-number"},r.createElement(o.Link,{className:"about-page-issue-type-link",to:Object(D.l)({resolved:"false",types:"SECURITY_HOTSPOT",s:"CREATION_DATE"})},Object(_.formatMeasure)(n,"SHORT_INT"))),r.createElement("td",null,r.createElement("span",{className:"little-spacer-right"},r.createElement(I.a,null)),Object(c.translate)("issue.type.SECURITY_HOTSPOT.plural"))))))}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],l=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"AboutApp",function(){return F});class F extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,projectsCount:0}}componentDidMount(){this.mounted=!0,this.loadData(),Object(i.addWhitePageClass)()}componentWillUnmount(){this.mounted=!1,Object(i.removeWhitePageClass)()}loadProjects(){return Object(u.y)({ps:1}).then(e=>e.paging.total)}loadIssues(){return Object(m.e)({resolved:!1},"types")}loadCustomText(){return this.props.fetchAboutPageSettings()}loadData(){Promise.all([this.loadProjects(),this.loadIssues(),this.loadCustomText()]).then(e=>{if(this.mounted){const t=Q(e,2),a=t[0],l=t[1],r=n()(l.facet,"val");this.setState({projectsCount:a,issueTypes:r,loading:!1})}},()=>{this.mounted&&this.setState({loading:!1})})}render(){const e=this.props.customText,t=this.state,a=t.loading,l=t.issueTypes,n=t.projectsCount;let s,i,u,m;return!a&&l&&(s=l.BUG&&l.BUG.count,i=l.VULNERABILITY&&l.VULNERABILITY.count,u=l.CODE_SMELL&&l.CODE_SMELL.count,m=l.SECURITY_HOTSPOT&&l.SECURITY_HOTSPOT.count),r.createElement(d.a,{location:this.props.location},r.createElement("div",{className:"page page-limited about-page",id:"about-page"},r.createElement(p.a,{anchor:"about_main"}),r.createElement("div",{className:"about-page-entry"},r.createElement("div",{className:"about-page-intro"},r.createElement("h1",{className:"big-spacer-bottom"},Object(c.translate)("layout.sonar.slogan")),!this.props.currentUser.isLoggedIn&&r.createElement(o.Link,{className:"button button-active big-spacer-right",to:"/sessions/new"},Object(c.translate)("layout.login")),r.createElement(o.Link,{className:"button",to:"/documentation"},Object(c.translate)("about_page.read_documentation"))),r.createElement("div",{className:"about-page-instance"},r.createElement(k,{count:n,loading:a}),r.createElement(J,{bugs:s,codeSmells:u,loading:a,securityHotspots:m,vulnerabilities:i}))),e&&r.createElement("div",{className:"about-page-section",dangerouslySetInnerHTML:{__html:e}}),r.createElement(N,null),r.createElement(H,null),r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(x,null)),r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(j,null))),r.createElement("div",{className:"flex-columns"},r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(T,null)),r.createElement("div",{className:"flex-column flex-column-half about-page-group-boxes"},r.createElement(Z,{appState:this.props.appState}))),r.createElement(B,null)))}}const X={fetchAboutPageSettings:function(){return e=>Object(b.e)({keys:["sonar.lf.aboutText"].join()}).then(t=>{e(Object(h.c)(t))})}};t.default=Object(s.connect)(e=>{const t=Object(g.getGlobalSettingValue)(e,"sonar.lf.aboutText");return{appState:Object(g.getAppState)(e),currentUser:Object(g.getCurrentUser)(e),customText:t&&t.value}},X)(F)},343:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var l=a(2),n=a(5),r=a(401);function s(e){return l.createElement(r.a.Consumer,null,t=>{let a=t.addA11ySkipLink,n=t.removeA11ySkipLink;return l.createElement(o,Object.assign({addA11ySkipLink:a,removeA11ySkipLink:n},e))})}class o extends l.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const e=this.props,t=e.anchor,a=e.label;return{key:t,label:void 0===a?Object(n.translate)("skip_to_content"):a,weight:e.weight}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const e=this.props.anchor;return l.createElement("span",{id:"a11y_target__".concat(e)})}}},345:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l="sidebar-page",n="white-page";function r(e,t){document.body.classList.toggle(e,t),document.documentElement&&document.documentElement.classList.toggle(e,t)}t.addSideBarClass=function(){r(l,!0)},t.addWhitePageClass=function(){r(n,!0)},t.removeSideBarClass=function(){r(l,!1)},t.removeWhitePageClass=function(){r(n,!1)}},372:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=a(311);t.default=function(e){var t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.default,{className:t,size:s},l.createElement("path",{d:"M12,7.05H6V5a2,2,0,1,1,4,0,1,1,0,0,0,2,0A4,4,0,1,0,4,5V7.06A1.12,1.12,0,0,0,3,8.17V14a1.12,1.12,0,0,0,1.12,1.12H12A1.12,1.12,0,0,0,13.1,14V8.17A1.12,1.12,0,0,0,12,7.05ZM8,13a2,2,0,1,1,2-2A2,2,0,0,1,8,13Z",style:{fill:r}}))}},377:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=a(311);t.default=function(e){var t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.default,{className:t,size:s},l.createElement("path",{d:"M10.09,1.88A2.86,2.86,0,0,0,8,1a2.87,2.87,0,0,0-2.11.87A2.93,2.93,0,0,0,5,4h6A2.93,2.93,0,0,0,10.09,1.88Z",style:{fill:r}}),l.createElement("path",{d:"M14.54,9H13V5.6L14.3,4.42a.5.5,0,0,0,0-.71.49.49,0,0,0-.7,0L12.17,5H3.82L2.34,3.66a.5.5,0,0,0-.67.74L2.94,5.55V9H1.46a.5.5,0,0,0,0,1H3a5.2,5.2,0,0,0,1.05,2.32l-2,1.81a.5.5,0,1,0,.67.74l2-1.82A4.62,4.62,0,0,0,7,14.1V8A1,1,0,0,1,8,7a.94.94,0,0,1,1,.9v6.17A4.55,4.55,0,0,0,11.18,13l2,1.83a.51.51,0,0,0,.33.13.48.48,0,0,0,.37-.17.49.49,0,0,0,0-.7l-2-1.8a5.34,5.34,0,0,0,1-2.29h1.64a.5.5,0,0,0,0-1Z",style:{fill:r}}))}},378:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=a(311);t.default=function(e){var t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.default,{className:t,size:s},l.createElement("path",{d:"M8,15.1a7,7,0,1,0-7-7A7,7,0,0,0,8,15.1Zm.74-8.9,1.46-2.52a.29.29,0,0,1,.25-.14.3.3,0,0,1,.15,0,5.26,5.26,0,0,1,2.61,4.53.28.28,0,0,1-.29.29H10a.28.28,0,0,1-.29-.29,1.78,1.78,0,0,0-.88-1.51A.29.29,0,0,1,8.75,6.2Zm.11,3.44A.23.23,0,0,1,9,9.6a.29.29,0,0,1,.25.14l1.46,2.52a.18.18,0,0,1,0,.13.3.3,0,0,1-.15.27,5.3,5.3,0,0,1-5.23,0,.3.3,0,0,1-.1-.4L6.73,9.74A.29.29,0,0,1,7,9.6a.23.23,0,0,1,.14,0A1.79,1.79,0,0,0,8.86,9.64ZM5.33,3.59a.3.3,0,0,1,.41.1L7.2,6.21a.29.29,0,0,1-.1.4,1.79,1.79,0,0,0-.87,1.51.28.28,0,0,1-.29.29H3a.32.32,0,0,1-.32-.29A5.26,5.26,0,0,1,5.33,3.59Z",style:{fill:r}}))}},394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=a(311);t.default=function(e){var t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.default,{className:t,size:s},l.createElement("path",{d:"M14.08 3.23a1 1 0 00-.67-.77L8.16 1a1.06 1.06 0 00-.5 0L2.41 2.46a.94.94 0 00-.67.77c-.08.57-.74 5.63 1.14 8.31A9 9 0 007.68 15a.85.85 0 00.23 0 .78.78 0 00.22 0 8.93 8.93 0 004.81-3.46c1.85-2.68 1.21-7.74 1.14-8.31zM12.21 8a6.15 6.15 0 01-.86 2.42A7.92 7.92 0 018 13V8zM8 3v5H3.59a24.29 24.29 0 010-3.82z",style:{fill:r}}))}},405:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),n=a(311);t.default=function(e){var t=e.className,a=e.fill,r=void 0===a?"currentColor":a,s=e.size;return l.createElement(n.default,{className:t,size:s},l.createElement("path",{d:"M4.303 5.36a.94.94 0 0 0-.944-.945.94.94 0 0 0-.944.944c0 .524.42.944.944.944a.94.94 0 0 0 .944-.944zm7.866 4.246a.95.95 0 0 1-.273.663l-3.62 3.627a.95.95 0 0 1-1.334 0L1.671 8.618C1.295 8.249 1 7.534 1 7.01V3.944A.95.95 0 0 1 1.944 3H5.01c.523 0 1.238.295 1.614.67l5.271 5.265a.98.98 0 0 1 .273.67zm2.831 0a.95.95 0 0 1-.273.663l-3.62 3.627a.98.98 0 0 1-.67.273c-.384 0-.575-.177-.826-.435l3.465-3.465a.95.95 0 0 0 0-1.334L7.805 3.67C7.429 3.295 6.714 3 6.19 3h1.651c.524 0 1.239.295 1.615.67l5.271 5.265a.98.98 0 0 1 .273.67z",style:{fill:r}}))}}}]);
//# sourceMappingURL=322.m.f5cbc212.chunk.js.map