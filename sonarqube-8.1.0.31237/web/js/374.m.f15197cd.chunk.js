(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1823:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r(5),o=r(309),s=r(304),l=r(314),c=r.n(l);class i extends a.PureComponent{constructor(){super(...arguments),this.handleMoreClick=e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.blur();const t=e.currentTarget.dataset.qualifier;t&&this.props.onMoreClick(t)},this.handleMoreMouseEnter=e=>{const t=e.currentTarget.dataset.qualifier;t&&this.props.onSelect("qualifier###".concat(t))}}render(){const e=this.props,t=e.loadingMore,r=e.qualifier,l=e.selected;return a.createElement("li",{className:o("menu-footer",{active:l}),key:"more-".concat(r)},a.createElement(c.a,{className:"navbar-search-icon",loading:t===r},a.createElement("a",{className:o({"cursor-not-allowed":!this.props.allowMore}),"data-qualifier":r,href:"#",onClick:this.handleMoreClick,onMouseEnter:this.handleMoreMouseEnter},a.createElement("div",{className:"pull-right text-muted-2 menu-footer-note"},a.createElement(s.FormattedMessage,{defaultMessage:Object(n.translate)("search.show_more.hint"),id:"search.show_more.hint",values:{key:a.createElement("span",{className:"shortcut-button shortcut-button-small"},"Enter")}})),a.createElement("span",null,Object(n.translate)("show_more")))))}}var u=r(1134);function h(e){const t=Object.keys(e.results),r=[];return Object(u.a)(t).forEach(t=>{const o=e.results[t];o.length>0&&r.length>0&&r.push(a.createElement("li",{className:"divider",key:"divider-".concat(t)})),o.length>0&&r.push(a.createElement("li",{className:"menu-header",key:"header-".concat(t)},Object(n.translate)("qualifiers",t))),o.forEach(t=>r.push(e.renderResult(t)));const s=e.more[t];void 0!==s&&s>0&&r.push(a.createElement(i,{allowMore:e.allowMore,key:"more-".concat(t),loadingMore:e.loadingMore,onMoreClick:e.onMoreClick,onSelect:e.onSelect,qualifier:t,selected:e.selected==="qualifier###".concat(t)}))}),r.length>0?a.createElement("ul",{className:"menu"},r):e.renderNoResults()}r.d(t,"default",function(){return h})}}]);
//# sourceMappingURL=374.m.f15197cd.chunk.js.map