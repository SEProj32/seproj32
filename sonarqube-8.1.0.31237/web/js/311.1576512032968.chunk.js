(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1466:function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(e,"__esModule",{value:!0});var a=r(n(1679)),i=r(n(1)),o=n(12),s=r(o),u=r(n(1680));function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(t,e){var n=e.decimal,r=e.decimals,i=e.duration,o=e.easingFn,s=e.end,u=e.formattingFn,l=e.prefix,c=e.separator,d=e.start,p=e.suffix,f=e.useEasing;return new a(t,d,s,r,i,{decimal:n,easingFn:o,formattingFn:u,separator:c,prefix:l,suffix:p,useEasing:f,useGrouping:!!c})},h=function(t){function e(){var t,n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=this,a=(t=d(e)).call.apply(t,[this].concat(o)),n=!a||"object"!=typeof a&&"function"!=typeof a?f(r):a,c(f(f(n)),"createInstance",function(){return"function"==typeof n.props.children&&u(n.containerRef.current&&n.containerRef.current instanceof HTMLElement,'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),g(n.containerRef.current,n.props)}),c(f(f(n)),"pauseResume",function(){var t=f(f(n)),e=t.reset,r=t.restart,a=t.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:e,start:r,update:a})}),c(f(f(n)),"reset",function(){var t=f(f(n)),e=t.pauseResume,r=t.restart,a=t.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:e,start:r,update:a})}),c(f(f(n)),"restart",function(){n.reset(),n.start()}),c(f(f(n)),"start",function(){var t=f(f(n)),e=t.pauseResume,r=t.reset,a=t.restart,i=t.update,o=n.props,s=o.delay,u=o.onEnd,l=o.onStart,c=function(){return n.instance.start(function(){return u({pauseResume:e,reset:r,start:a,update:i})})};s>0?n.timeoutId=setTimeout(c,1e3*s):c(),l({pauseResume:e,reset:r,update:i})}),c(f(f(n)),"update",function(t){var e=f(f(n)),r=e.pauseResume,a=e.reset,i=e.restart,o=n.props.onUpdate;n.instance.update(t),o({pauseResume:r,reset:a,start:i})}),c(f(f(n)),"containerRef",s.createRef()),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,o.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this.props,e=t.children,n=t.delay;this.instance=this.createInstance(),"function"==typeof e&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(t){return this.props.duration!==t.duration||this.props.end!==t.end||this.props.start!==t.start||this.props.redraw}},{key:"componentDidUpdate",value:function(t){this.props.duration===t.duration&&this.props.start===t.start||(this.instance=this.createInstance(),this.start()),this.props.end!==t.end&&(this.instance.reset(),this.instance.update(this.props.end))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,r=t.style,a=this.containerRef,i=this.pauseResume,o=this.reset,u=this.restart,l=this.update;return"function"==typeof e?e({countUpRef:a,pauseResume:i,reset:o,start:u,update:l}):s.createElement("span",{className:n,ref:a,style:r})}}])&&l(n.prototype,r),a&&l(n,a),e}();c(h,"propTypes",{decimal:i.string,decimals:i.number,delay:i.number,easingFn:i.func,end:i.number.isRequired,formattingFn:i.func,onEnd:i.func,onStart:i.func,prefix:i.string,redraw:i.bool,separator:i.string,start:i.number,suffix:i.string,style:i.object,useEasing:i.bool}),c(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,suffix:"",style:void 0,useEasing:!0});e.default=h,e.useCountUp=function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){c(t,e,n[e])})}return t}({},h.defaultProps,t),n=e.start,r=e.formattingFn,a=m(o.useState("function"==typeof r?r(n):n),2),i=a[0],s=a[1],u=o.useRef(null),l=function(){var t=u.current;if(null!==t)return t;var n=function(){var t=g(-1,e),n=t.options.formattingFn;return t.options.formattingFn=function(){var t=n.apply(void 0,arguments);s(t)},t}();return u.current=n,n},d=function(){var t=e.onReset;l().reset(),t({pauseResume:f,start:p,update:b})},p=function t(){var n=e.onStart,r=e.onEnd;l().reset(),l().start(function(){r({pauseResume:f,reset:d,start:t,update:b})}),n({pauseResume:f,reset:d,update:b})},f=function(){var t=e.onPauseResume;l().pauseResume(),t({reset:d,start:p,update:b})},b=function(t){var n=e.onUpdate;l().update(t),n({pauseResume:f,reset:d,start:p})};return o.useEffect(function(){var t=e.delay,n=e.onStart,r=e.onEnd,a=setTimeout(function(){n({pauseResume:f,reset:d,update:b}),l().start(function(){clearTimeout(a),r({pauseResume:f,reset:d,start:p,update:b})})},1e3*t);return d},[]),{countUp:i,start:p,pauseResume:f,reset:d,update:b}}},1679:function(t,e,n){var r,a;void 0===(a="function"==typeof(r=function(t,e,n){return function(t,e,n,r,a,i){function o(t){return"number"==typeof t&&!isNaN(t)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},formattingFn:function(t){var e,n,r,a,i,o,u=t<0;if(t=Math.abs(t).toFixed(s.decimals),e=(t+="").split("."),n=e[0],r=e.length>1?s.options.decimal+e[1]:"",s.options.useGrouping){for(a="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(a=s.options.separator+a),a=n[o-i-1]+a;n=a}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),r=r.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),(u?"-":"")+s.options.prefix+n+r+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var u in s.options)i.hasOwnProperty(u)&&null!==i[u]&&(s.options[u]=i[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var l=0,c=["webkit","moz","ms","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),r=Math.max(0,16-(n-l)),a=window.setTimeout(function(){t(n+r)},r);return l=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof t?document.getElementById(t):t,s.d?(s.startVal=Number(e),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,r||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(a)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+e+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(t){var e=s.options.formattingFn(t);"INPUT"===s.d.tagName?this.d.value=e:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=e:this.d.innerHTML=e},s.count=function(t){s.startTime||(s.startTime=t),s.timestamp=t;var e=t-s.startTime;s.remaining=s.duration-e,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(e,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(e,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(e/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(e/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),e<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(t){s.initialize()&&(s.callback=t,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(t){if(s.initialize()){if(!o(t=Number(t)))return void(s.error="[CountUp] update() - new endVal is not a number: "+t);s.error="",t!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=t,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?r.call(e,n,e,t):r)||(t.exports=a)},1680:function(t,e,n){"use strict";var r=function(){};t.exports=r},675:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="sidebar-page",a="white-page";function i(t,e){document.body.classList.toggle(t,e),document.documentElement&&document.documentElement.classList.toggle(t,e)}e.addSideBarClass=function(){i(r,!0)},e.addWhitePageClass=function(){i(a,!0)},e.removeSideBarClass=function(){i(r,!1)},e.removeWhitePageClass=function(){i(a,!1)}},701:function(t,e,n){"use strict";var r,a=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),s=n(34),u=n(48),l=n(649);e.lazyLoadComponent=function(t,e){var n=o.lazy(function(){return u.requestTryAndRepeatUntil(t,{max:2,slowThreshold:2},function(){return!0})});function r(t){return o.createElement(c,null,o.createElement(o.Suspense,{fallback:null},o.createElement(n,i({},t))))}return r.displayName=e,r};var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={hasError:!1},e}return a(e,t),e.getDerivedStateFromError=function(){return{hasError:!0}},e.prototype.render=function(){return this.state.hasError?o.createElement(l.Alert,{variant:"error"},s.translate("default_error_message")):this.props.children},e}(o.Component);e.LazyErrorBoundary=c},702:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),a=n(641);e.default=function(t){var e=t.className,n=t.fill,i=void 0===n?"currentColor":n,o=t.size;return r.createElement(a.default,{className:e,size:o},r.createElement("path",{d:"M12,7.05H6V5a2,2,0,1,1,4,0,1,1,0,0,0,2,0A4,4,0,1,0,4,5V7.06A1.12,1.12,0,0,0,3,8.17V14a1.12,1.12,0,0,0,1.12,1.12H12A1.12,1.12,0,0,0,13.1,14V8.17A1.12,1.12,0,0,0,12,7.05ZM8,13a2,2,0,1,1,2-2A2,2,0,0,1,8,13Z",style:{fill:i}}))}},706:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),a=n(641);e.default=function(t){var e=t.className,n=t.fill,i=void 0===n?"currentColor":n,o=t.size;return r.createElement(a.default,{className:e,size:o},r.createElement("path",{d:"M10.09,1.88A2.86,2.86,0,0,0,8,1a2.87,2.87,0,0,0-2.11.87A2.93,2.93,0,0,0,5,4h6A2.93,2.93,0,0,0,10.09,1.88Z",style:{fill:i}}),r.createElement("path",{d:"M14.54,9H13V5.6L14.3,4.42a.5.5,0,0,0,0-.71.49.49,0,0,0-.7,0L12.17,5H3.82L2.34,3.66a.5.5,0,0,0-.67.74L2.94,5.55V9H1.46a.5.5,0,0,0,0,1H3a5.2,5.2,0,0,0,1.05,2.32l-2,1.81a.5.5,0,1,0,.67.74l2-1.82A4.62,4.62,0,0,0,7,14.1V8A1,1,0,0,1,8,7a.94.94,0,0,1,1,.9v6.17A4.55,4.55,0,0,0,11.18,13l2,1.83a.51.51,0,0,0,.33.13.48.48,0,0,0,.37-.17.49.49,0,0,0,0-.7l-2-1.8a5.34,5.34,0,0,0,1-2.29h1.64a.5.5,0,0,0,0-1Z",style:{fill:i}}))}},707:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),a=n(641);e.default=function(t){var e=t.className,n=t.fill,i=void 0===n?"currentColor":n,o=t.size;return r.createElement(a.default,{className:e,size:o},r.createElement("path",{d:"M8,15.1a7,7,0,1,0-7-7A7,7,0,0,0,8,15.1Zm.74-8.9,1.46-2.52a.29.29,0,0,1,.25-.14.3.3,0,0,1,.15,0,5.26,5.26,0,0,1,2.61,4.53.28.28,0,0,1-.29.29H10a.28.28,0,0,1-.29-.29,1.78,1.78,0,0,0-.88-1.51A.29.29,0,0,1,8.75,6.2Zm.11,3.44A.23.23,0,0,1,9,9.6a.29.29,0,0,1,.25.14l1.46,2.52a.18.18,0,0,1,0,.13.3.3,0,0,1-.15.27,5.3,5.3,0,0,1-5.23,0,.3.3,0,0,1-.1-.4L6.73,9.74A.29.29,0,0,1,7,9.6a.23.23,0,0,1,.14,0A1.79,1.79,0,0,0,8.86,9.64ZM5.33,3.59a.3.3,0,0,1,.41.1L7.2,6.21a.29.29,0,0,1-.1.4,1.79,1.79,0,0,0-.87,1.51.28.28,0,0,1-.29.29H3a.32.32,0,0,1-.32-.29A5.26,5.26,0,0,1,5.33,3.59Z",style:{fill:i}}))}},715:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(639),a=n(12),i=n(34),o=n(647);n(814),e.default=function(t){var e=t.className,n=t.muted,s=void 0!==n&&n,u=t.small,l=void 0!==u&&u,c=t.value;if(void 0===c)return a.createElement("span",{"aria-label":i.translate("metric.no_rating")},"–");var d=o.formatMeasure(c,"RATING");return a.createElement("span",{"aria-label":i.translateWithParameters("metric.has_rating_X",d),className:r("rating","rating-"+d,{"rating-small":l,"rating-muted":s},e)},d)}},722:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(12),a=n(641);e.default=function(t){var e=t.className,n=t.fill,i=void 0===n?"currentColor":n,o=t.size;return r.createElement(a.default,{className:e,size:o},r.createElement("path",{d:"M14.08 3.23a1 1 0 00-.67-.77L8.16 1a1.06 1.06 0 00-.5 0L2.41 2.46a.94.94 0 00-.67.77c-.08.57-.74 5.63 1.14 8.31A9 9 0 007.68 15a.85.85 0 00.23 0 .78.78 0 00.22 0 8.93 8.93 0 004.81-3.46c1.85-2.68 1.21-7.74 1.14-8.31zM12.21 8a6.15 6.15 0 01-.86 2.42A7.92 7.92 0 018 13V8zM8 3v5H3.59a24.29 24.29 0 010-3.82z",style:{fill:i}}))}},814:function(t,e,n){var r=n(815);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(643)(r,a);r.locals&&(t.exports=r.locals)},815:function(t,e,n){(t.exports=n(642)(!1)).push([t.i,".rating{display:inline-block;width:24px;height:24px;line-height:24px;border-radius:24px;box-sizing:border-box;color:#fff;font-size:16px;font-weight:400;text-align:center;text-shadow:0 0 1px rgba(0,0,0,.35)}.rating-muted{background-color:#bdbdbd!important;color:#fff!important;text-shadow:0 0 1px rgba(0,0,0,.35)!important}a>.rating{margin-bottom:-1px;border-bottom:1px solid;transition:all .2s ease}a>.rating:hover{opacity:.8}.rating-A{line-height:23px;background-color:#0a0}a>.rating-A{border-bottom-color:#0a0}.rating-B{background-color:#b0d513}a .rating-B{border-bottom-color:#b0d513}.rating-C{background-color:#eabe06}a .rating-C{border-bottom-color:#eabe06}.rating-D{background-color:#ed7d20}a .rating-D{border-bottom-color:#ed7d20}.rating-E{background-color:#d4333f}a .rating-E{border-bottom-color:#d4333f}.rating-small{width:18px;height:18px;line-height:18px;margin-top:-1px;margin-bottom:-1px;font-size:12px}",""])},831:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(639),a=n(119),i=n(12);n(907),e.default=function(t){var e=t.muted,n=void 0!==e&&e,o=t.size,s=void 0===o?"normal":o,u=t.value,l=r("duplications-rating",{"duplications-rating-small":"small"===s,"duplications-rating-big":"big"===s,"duplications-rating-huge":"huge"===s,"duplications-rating-muted":n||null==u||isNaN(u),"duplications-rating-A":a.inRange(u||0,0,3),"duplications-rating-B":a.inRange(u||0,3,5),"duplications-rating-C":a.inRange(u||0,5,10),"duplications-rating-D":a.inRange(u||0,10,20),"duplications-rating-E":(u||0)>=20});return i.createElement("div",{className:l})}},852:function(t,e,n){var r=n(694),a=n(879),i="Expected a function";t.exports=function(t,e,n){var o=!0,s=!0;if("function"!=typeof t)throw new TypeError(i);return a(n)&&(o="leading"in n?!!n.leading:o,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:o,maxWait:e,trailing:s})}},907:function(t,e,n){var r=n(908);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(643)(r,a);r.locals&&(t.exports=r.locals)},908:function(t,e,n){(t.exports=n(642)(!1)).push([t.i,'.duplications-rating{position:relative;display:inline-flex;vertical-align:top;justify-content:center;align-items:center;width:24px;height:24px;border:3px solid #ed7d20;border-radius:24px;box-sizing:border-box}.duplications-rating-small{width:16px;height:16px;border-width:2px}.duplications-rating-big{width:40px;height:40px;border-width:3px}.duplications-rating-huge{width:60px;height:60px;border-width:4px;border-radius:30px}.duplications-rating-muted{border-color:#bdbdbd!important}.duplications-rating-muted:after{background-color:#bdbdbd!important}.duplications-rating:after{border-radius:24px;content:""}.duplications-rating-A{border-color:#0a0}.duplications-rating-A:after{display:none}.duplications-rating-B{border-color:#b0d513}.duplications-rating-B:after{width:6px;height:6px;background-color:#b0d513}.duplications-rating-small.duplications-rating-B:after{width:2px;height:2px}.duplications-rating-big.duplications-rating-B:after{width:12px;height:12px}.duplications-rating-huge.duplications-rating-B:after{width:18px;height:18px}.duplications-rating-C{border-color:#eabe06}.duplications-rating-C:after{width:8px;height:8px;background-color:#eabe06}.duplications-rating-small.duplications-rating-C:after{width:6px;height:6px}.duplications-rating-big.duplications-rating-C:after{width:16px;height:16px}.duplications-rating-huge.duplications-rating-C:after{width:24px;height:24px}.duplications-rating-D{border-color:#ed7d20}.duplications-rating-D:after{width:12px;height:12px;background-color:#ed7d20}.duplications-rating-small.duplications-rating-D:after{width:8px;height:8px}.duplications-rating-big.duplications-rating-D:after{width:24px;height:24px}.duplications-rating-huge.duplications-rating-D:after{width:36px;height:36px}.duplications-rating-E{border-color:#d4333f}.duplications-rating-E:after{width:14px;height:14px;background-color:#d4333f}.duplications-rating-small.duplications-rating-E:after{width:10px;height:10px}.duplications-rating-big.duplications-rating-E:after{width:28px;height:28px}.duplications-rating-huge.duplications-rating-E:after{width:42px;height:42px}',""])}}]);
//# sourceMappingURL=311.1576512032968.chunk.js.map