(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{1008:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return m});var r=n(48),o=n(651);function a(e){return Object(r.getJSON)("/api/user_groups/search",e).catch(o.a)}function s(e){return Object(r.getJSON)("/api/user_groups/users",e).catch(o.a)}function i(e){return Object(r.post)("/api/user_groups/add_user",e).catch(o.a)}function c(e){return Object(r.post)("/api/user_groups/remove_user",e).catch(o.a)}function l(e){return Object(r.postJSON)("/api/user_groups/create",e).then(function(e){return e.group},o.a)}function u(e){return Object(r.post)("/api/user_groups/update",e).catch(o.a)}function m(e){return Object(r.post)("/api/user_groups/delete",e).catch(o.a)}},1958:function(e,t,n){"use strict";n.r(t),t.default="Add new members to this organization and manage their permissions. Note that users must have signed up on the service to be able to find and add them.\n\n---\n\nSee also: [Manage a Team](/organizations/manage-team/)\n"},2114:function(e,t,n){"use strict";n.r(t);var r,o=n(646),a=n(768),s=n(648),i=n(12),c=n(654),l=n.n(c),u=n(678),m=n.n(u),p=n(34),d=n(755),f=n(1008),h=n(673),g=n(662),b=n(656),v=n.n(b),y=n(703),O=n.n(y),_=n(647),E=n(724),j=n(1956),z=n.n(j),M=n(1119),S=n.n(M),k=n(766),C=n.n(k),N=n(640),P=n(659),w=n.n(P),x=n(644),L=n.n(x),G=n(789),F=n(639),A=n(685),D=n.n(A),U=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onCheck=function(e){var n=t.props.group;n.default||t.props.onCheck(n.name,e)},t.toggleCheck=function(){t.onCheck(!t.props.checked)},t}return U(t,e),t.prototype.render=function(){var e=this.props.group;return i.createElement("li",{className:F("capitalize list-item-checkable-link",{disabled:e.default}),onClick:this.toggleCheck},i.createElement(D.a,{checked:this.props.checked,onCheck:this.onCheck})," ",e.name)},t}(i.PureComponent),W=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(){return(B=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={},t.loadUserGroups=function(){t.setState({loading:!0}),Object(G.e)({login:t.props.member.login,organization:t.props.organization.key}).then(function(e){t.mounted&&t.setState({loading:!1,userGroups:C()(e.groups,"name")})},function(){t.mounted&&t.setState({loading:!1})})},t.isGroupSelected=function(e){if(t.state.userGroups){var n=t.state.userGroups[e]||{};return n.status?"add"===n.status:!0===n.selected}return!1},t.onCheck=function(e,n){t.setState(function(t){var r,o=t.userGroups,a=void 0===o?{}:o,s=a[e]||{},i="";return s.selected&&!n?i="remove":!s.selected&&n&&(i="add"),{userGroups:B(B({},a),(r={},r[e]=B(B({},s),{status:i}),r))}})},t.handleSubmit=function(){return t.props.updateMemberGroups(t.props.member,Object.keys(S()(t.state.userGroups,function(e){return"add"===e.status})),Object.keys(S()(t.state.userGroups,function(e){return"remove"===e.status}))).then(t.props.onClose)},t}return W(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadUserGroups()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=this.state,n=t.loading,r=t.userGroups,o=void 0===r?{}:r,a=Object(p.translate)("organization.members.manage_groups"),s=z()(o,function(e){return void 0!==e.status});return i.createElement(w.a,{header:a,onClose:this.props.onClose,onSubmit:this.handleSubmit},function(t){var r=t.onCloseClick,o=t.onFormSubmit,c=t.submitting;return i.createElement("form",{onSubmit:o},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,a)),i.createElement("div",{className:"modal-body modal-container"},i.createElement("p",null,i.createElement("strong",null,Object(p.translateWithParameters)("organization.members.members_groups",e.props.member.name))),n?i.createElement(L.a,{className:"spacer-top"}):i.createElement("ul",{className:"list-spaced"},e.props.organizationGroups.map(function(t){return i.createElement(R,{checked:e.isGroupSelected(t.name),group:t,key:t.id,onCheck:e.onCheck})}))),i.createElement("footer",{className:"modal-foot"},i.createElement(L.a,{className:"spacer-right",loading:c}),i.createElement(N.SubmitButton,{disabled:c||!s},Object(p.translate)("save")),i.createElement(N.ResetButtonLink,{disabled:c,onClick:r},Object(p.translate)("cancel"))))})},t}(i.PureComponent),T=n(655),I=n.n(T),J=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),K=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){e.preventDefault(),t.props.removeMember(t.props.member),t.props.onClose()},t}return J(t,e),t.prototype.render=function(){var e=Object(p.translate)("users.remove");return i.createElement(I.a,{contentLabel:e,key:"remove-member-modal",onRequestClose:this.props.onClose},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,e)),i.createElement("form",{onSubmit:this.handleSubmit},i.createElement("div",{className:"modal-body"},Object(p.translateWithParameters)("organization.members.remove_x",this.props.member.name,this.props.organization.name)),i.createElement("footer",{className:"modal-foot"},i.createElement("div",null,i.createElement(N.SubmitButton,{autoFocus:!0,className:"button-red"},Object(p.translate)("remove")),i.createElement(N.ResetButtonLink,{onClick:this.props.onClose},Object(p.translate)("cancel"))))))},t}(i.PureComponent),H=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={removeMemberForm:!1,manageGroupsForm:!1},t.handleManageGroupsClick=function(){t.setState({manageGroupsForm:!0})},t.closeManageGroupsForm=function(){t.mounted&&t.setState({manageGroupsForm:!1})},t.handleRemoveMemberClick=function(){t.setState({removeMemberForm:!0})},t.closeRemoveMemberForm=function(){t.mounted&&t.setState({removeMemberForm:!1})},t}return H(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.member,n=e.organization,r=e.removeMember,o=n.actions,a=void 0===o?{}:o;return i.createElement("tr",null,i.createElement("td",{className:"thin nowrap"},i.createElement(E.a,{hash:t.avatar,name:t.name,size:36})),i.createElement("td",{className:"nowrap text-middle"},i.createElement("strong",null,t.name),i.createElement("span",{className:"note little-spacer-left"},t.login)),a.admin&&i.createElement("td",{className:"text-right text-middle"},Object(p.translateWithParameters)("organization.members.x_groups",Object(_.formatMeasure)(t.groupCount||0,"INT"))),a.admin&&i.createElement(i.Fragment,null,i.createElement("td",{className:"nowrap text-middle text-right"},i.createElement(O.a,null,i.createElement(y.ActionsDropdownItem,{onClick:this.handleManageGroupsClick},Object(p.translate)("organization.members.manage_groups")),r&&i.createElement(i.Fragment,null,i.createElement(y.ActionsDropdownDivider,null),i.createElement(y.ActionsDropdownItem,{destructive:!0,onClick:this.handleRemoveMemberClick},Object(p.translate)("organization.members.remove"))))),this.state.manageGroupsForm&&i.createElement(q,{member:this.props.member,onClose:this.closeManageGroupsForm,organization:this.props.organization,organizationGroups:this.props.organizationGroups,updateMemberGroups:this.props.updateMemberGroups}),r&&this.state.removeMemberForm&&i.createElement(K,{member:this.props.member,onClose:this.closeRemoveMemberForm,organization:this.props.organization,removeMember:r})))},t}(i.PureComponent),$=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.currentUser,r=t.members;if(!r.length)return i.createElement("div",{className:"note"},Object(p.translate)("no_results"));var o=v()(r,function(e){return e.name},function(e){return e.login});return i.createElement("div",{className:"boxed-group boxed-group-inner"},i.createElement("table",{className:"data zebra"},i.createElement("tbody",null,o.map(function(t){return i.createElement(V,{key:t.login,member:t,organization:e.props.organization,organizationGroups:e.props.organizationGroups,removeMember:n.login!==t.login?e.props.removeMember:void 0,updateMemberGroups:e.props.updateMemberGroups})}))))},t}(i.PureComponent),X=n(652),Y=n.n(X),Z=n(687),ee=n.n(Z),te=n(688);function ne(e){var t=e.handleSearch,n=e.organization,r=e.total;return i.createElement("div",{className:"panel panel-vertical bordered-bottom spacer-bottom"},i.createElement(ee.a,{minLength:2,onChange:t,placeholder:Object(p.translate)("search.search_for_members")}),void 0!==r&&i.createElement("span",{className:"pull-right little-spacer-top"},i.createElement("strong",null,Object(_.formatMeasure)(r,"INT"))," ",Object(p.translate)("organization.members.members"),n.alm&&n.alm.membersSync&&i.createElement(Y.a,{className:"spacer-left",overlay:i.createElement("div",{className:"abs-width-300 markdown cut-margins"},i.createElement("p",null,Object(p.translate)("organization.members.auto_sync_total_help",Object(te.g)(n.alm.key))),i.createElement("hr",null),i.createElement("p",null,i.createElement("a",{href:Object(te.a)(n.alm.key,n.alm.url),rel:"noopener noreferrer",target:"_blank"},Object(p.translateWithParameters)("organization.members.see_all_members_on_x",Object(p.translate)(Object(te.g)(n.alm.key))))))})))}var re=n(634),oe=n(159),ae=n(649),se=n(669),ie=n(694),ce=n.n(ie),le=n(666),ue=n.n(le),me=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),pe=10,de=16,fe=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.filterSearchResult=function(e){return e.users.filter(function(e){return!n.props.excludedUsers.includes(e.login)}).slice(0,pe)},n.filterOptions=function(e){return e},n.handleSearch=function(e){n.props.searchUsers(e,Math.min(n.props.excludedUsers.length+pe,500)).then(n.filterSearchResult).then(function(e){n.mounted&&n.setState({isLoading:!1,searchResult:e})},function(){n.mounted&&n.setState({isLoading:!1,searchResult:[]})})},n.handleInputChange=function(e){null==e||1===e.length?n.setState({search:e}):(n.setState({isLoading:!0,search:e}),n.handleSearch(e))},n.handleSearch=ce()(n.handleSearch,250),n.state={searchResult:[],isLoading:!1,search:""},n}return me(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.handleSearch(this.state.search)},t.prototype.componentDidUpdate=function(e){this.props.excludedUsers!==e.excludedUsers&&this.handleSearch(this.state.search)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=1===this.state.search.length?Object(p.translateWithParameters)("select2.tooShort",2):Object(p.translate)("no_results");return i.createElement(ue.a,{autoFocus:this.props.autoFocus,className:"Select-big",clearable:!1,filterOptions:this.filterOptions,isLoading:this.state.isLoading,labelKey:"name",noResultsText:e,onChange:this.props.handleValueChange,onInputChange:this.handleInputChange,optionComponent:he,options:this.state.searchResult,placeholder:"",searchable:!0,value:this.props.selectedUser,valueComponent:ge,valueKey:"login"})},t}(i.PureComponent),he=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleMouseDown=function(e){e.preventDefault(),e.stopPropagation(),t.props.onSelect(t.props.option,e)},t.handleMouseEnter=function(e){t.props.onFocus(t.props.option,e)},t.handleMouseMove=function(e){t.props.isFocused||t.props.onFocus(t.props.option,e)},t}return me(t,e),t.prototype.render=function(){var e=this.props.option;return i.createElement("div",{className:this.props.className,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,role:"listitem",title:e.name},i.createElement(E.a,{hash:e.avatar,name:e.name,size:de}),i.createElement("strong",{className:"spacer-left"},this.props.children),i.createElement("span",{className:"note little-spacer-left"},e.login))},t}(i.PureComponent);function ge(e){var t=e.children,n=e.value;return i.createElement("div",{className:"Select-value",title:n?n.name:""},n&&n.login&&i.createElement("div",{className:"Select-value-label"},i.createElement(E.a,{hash:n.avatar,name:n.name,size:de}),i.createElement("strong",{className:"spacer-left"},t),i.createElement("span",{className:"note little-spacer-left"},n.login)))}var be=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ve=function(){return(ve=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ye=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={open:!1},t.openForm=function(){t.setState({open:!0})},t.closeForm=function(){t.setState({open:!1,selectedMember:void 0})},t.handleSearch=function(e,n){var r={organization:t.props.organization.key,ps:n,selected:"deselected"};return e?Object(d.i)(ve(ve({},r),{q:e})):Object(d.i)(r)},t.handleSubmit=function(e){e.preventDefault(),t.state.selectedMember&&(t.props.addMember(t.state.selectedMember),t.closeForm())},t.selectedMemberChange=function(e){t.setState({selectedMember:e})},t}return be(t,e),t.prototype.renderModal=function(){var e=Object(p.translate)("users.add");return i.createElement(I.a,{contentLabel:e,key:"add-member-modal",onRequestClose:this.closeForm},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,e)),i.createElement("form",{onSubmit:this.handleSubmit},i.createElement("div",{className:"modal-body"},i.createElement("div",{className:"modal-field"},i.createElement("label",null,Object(p.translate)("users.search_description")),i.createElement(fe,{autoFocus:!0,excludedUsers:this.props.memberLogins,handleValueChange:this.selectedMemberChange,searchUsers:this.handleSearch,selectedUser:this.state.selectedMember}))),i.createElement("footer",{className:"modal-foot"},i.createElement("div",null,i.createElement(N.SubmitButton,{disabled:!this.state.selectedMember},Object(p.translate)("organization.members.add_to_members")),i.createElement(N.ResetButtonLink,{onClick:this.closeForm},Object(p.translate)("cancel"))))))},t.prototype.render=function(){return i.createElement(i.Fragment,null,i.createElement(N.Button,{key:"add-member-button",onClick:this.openForm},Object(p.translate)("organization.members.add")),this.state.open&&this.renderModal())},t}(i.PureComponent),Oe=n(697),_e=n.n(Oe),Ee=n(771),je=n.n(Ee),ze=n(750),Me=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Se=function(e){function t(t){var n=e.call(this,t)||this;return n.handleConfirm=function(){var e=n.props.organization,t=n.state.membersSync;return Object(d.j)({organization:e.key,enabled:t}).then(function(){return n.props.fetchOrganization(e.key),t?n.handleMemberSync():Promise.resolve()})},n.handleManualClick=function(){n.setState({membersSync:!1})},n.handleAutoClick=function(){n.setState({membersSync:!0})},n.handleMemberSync=function(){return Object(d.k)(n.props.organization.key).then(n.props.refreshMembers)},n.renderModalDescription=function(){return i.createElement("p",{className:"spacer-top"},Object(p.translate)("organization.members.management.description"),i.createElement(oe.Link,{className:"spacer-left",target:"_blank",to:{pathname:"/documentation/organizations/manage-team/"}},Object(p.translate)("learn_more")))},n.renderModalBody=function(){var e=n.state.membersSync,t=n.props,r=t.hasOtherMembers,o=t.organization,a=o.alm&&Object(te.g)(o.alm.key),s=r&&o.alm&&!o.alm.membersSync;return i.createElement("div",{className:"display-flex-stretch big-spacer-top"},i.createElement(je.a,{onClick:n.handleManualClick,selected:!e,title:Object(p.translate)("organization.members.management.manual")},i.createElement("div",{className:"spacer-left"},i.createElement("ul",{className:"big-spacer-left note"},i.createElement("li",{className:"spacer-bottom"},Object(p.translate)("organization.members.management.manual.add_members_manually")),i.createElement("li",null,Object(p.translate)("organization.members.management.choose_members_permissions"))))),i.createElement(je.a,{onClick:n.handleAutoClick,selected:e,title:Object(p.translateWithParameters)("organization.members.management.automatic",Object(p.translate)(a||""))},i.createElement("div",{className:"spacer-left"},i.createElement("ul",{className:"big-spacer-left note"},a&&i.createElement(i.Fragment,null,i.createElement("li",{className:"spacer-bottom"},Object(p.translateWithParameters)("organization.members.management.automatic.synchronized_from_x",Object(p.translate)("organization",a))),i.createElement("li",{className:"spacer-bottom"},Object(p.translate)("organization.members.management.automatic.members_changes_reflected",a))),i.createElement("li",null,Object(p.translate)("organization.members.management.choose_members_permissions")))),a&&s&&i.createElement(ae.Alert,{className:"big-spacer-top",variant:"warning"},Object(p.translateWithParameters)("organization.members.management.automatic.warning_x",Object(p.translate)("organization",a)))))},n.state={membersSync:Boolean(t.organization.alm&&t.organization.alm.membersSync)},n}return Me(t,e),t.prototype.render=function(){var e=this,t=this.props.organization,n=Boolean(t.alm&&t.alm.membersSync);return i.createElement(_e.a,{cancelButtonText:Object(p.translate)("close"),confirmButtonText:Object(p.translate)("save"),confirmDisable:this.state.membersSync===n,modalBody:this.renderModalBody(),modalHeader:Object(p.translate)("organization.members.management.title"),modalHeaderDescription:this.renderModalDescription(),onConfirm:this.handleConfirm,size:"medium"},function(t){var n=t.onClick;return i.createElement(N.Button,{onClick:n},e.props.buttonText)})},t}(i.PureComponent),ke={fetchOrganization:ze.f},Ce=Object(o.connect)(null,ke)(Se);function Ne(e){var t=e.members,r=e.organization,o=e.refreshMembers,a=t?t.map(function(e){return e.login}):[],s=r.actions&&r.actions.admin,c=r.alm&&Object(te.g)(r.alm.key),l=r.alm&&r.alm.membersSync,u=s&&r.alm&&!l,m=c&&Object(te.e)(c)&&r.alm&&!r.alm.personal;return i.createElement("header",{className:"page-header"},i.createElement("h1",{className:"page-title"},Object(p.translate)("organization.members.page"),i.createElement(L.a,{className:"little-spacer-left",loading:e.loading})),s&&i.createElement("div",{className:"page-actions text-right"},m&&!u&&i.createElement(Ce,{buttonText:Object(p.translate)("organization.members.config_synchro"),hasOtherMembers:t&&t.length>1,organization:r,refreshMembers:o}),!l&&i.createElement("div",{className:"display-inline-block spacer-left spacer-bottom"},i.createElement(ye,{addMember:e.handleAddMember,memberLogins:a,organization:r}),i.createElement(se.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1958))}))),i.createElement("div",{className:"page-description"},i.createElement(re.FormattedMessage,{defaultMessage:Object(p.translate)("organization.members.page.description"),id:"organization.members.page.description",values:{link:i.createElement(oe.Link,{target:"_blank",to:"/documentation/organizations/manage-team/"},Object(p.translate)("organization.members.manage_a_team"))}}),c&&m&&u&&i.createElement(ae.Alert,{className:"spacer-top",display:"inline",variant:"info"},Object(p.translateWithParameters)("organization.members.auto_sync_members_from_org_x",Object(p.translate)("organization",c)),i.createElement("span",{className:"spacer-left"},i.createElement(Ce,{buttonText:Object(p.translate)("configure"),hasOtherMembers:t&&t.length>1,organization:r,refreshMembers:o})))))}var Pe=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),we=function(){return(we=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},xe=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r},Le=50,Ge=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={groups:[],loading:!0,query:""},t.stopLoading=function(){t.mounted&&t.setState({loading:!1})},t.fetchMembers=function(e){t.setState({loading:!0}),Object(d.i)({organization:t.props.organization.key,ps:Le,q:e}).then(function(e){var n=e.paging,r=e.users;t.mounted&&t.setState({loading:!1,members:r,paging:n})},t.stopLoading)},t.fetchGroups=function(){Object(f.f)({organization:t.props.organization.key}).then(function(e){var n=e.groups;t.mounted&&t.setState({groups:n})},function(){})},t.handleSearchMembers=function(e){t.setState({query:e}),t.fetchMembers(e||void 0)},t.handleLoadMoreMembers=function(){var e=t.state,n=e.paging,r=e.query;n&&(t.setState({loading:!0}),Object(d.i)({organization:t.props.organization.key,p:n.pageIndex+1,ps:Le,q:r||void 0}).then(function(e){var n=e.paging,r=e.users;t.mounted&&t.setState(function(e){var t=e.members;return{loading:!1,members:xe(void 0===t?[]:t,r),paging:n}})},t.stopLoading))},t.handleAddMember=function(e){var n=e.login;Object(d.a)({login:n,organization:t.props.organization.key}).then(function(e){t.mounted&&t.setState(function(t){var n=t.members,r=t.paging;return{members:n&&xe(n,[e]),paging:r&&we(we({},r),{total:r.total+1})}})},function(){})},t.handleRemoveMember=function(e){var n=e.login;Object(d.h)({login:n,organization:t.props.organization.key}).then(function(){t.mounted&&t.setState(function(e){var t=e.members,r=e.paging;return{members:t&&t.filter(function(e){return e.login!==n}),paging:r&&we(we({},r),{total:r.total-1})}})},function(){})},t.refreshMembers=function(){return Object(d.i)({organization:t.props.organization.key,ps:Le,q:t.state.query||void 0}).then(function(e){var n=e.paging,r=e.users;t.mounted&&t.setState({members:r,paging:n})})},t.updateGroup=function(e,n){t.setState(function(t){var r=t.members;return{members:r&&r.map(function(t){return t.login===e?n(t):t})}})},t.updateMemberGroups=function(e,n,r){var o=e.login,a=xe(n.map(function(e){return Object(f.a)({name:e,login:o,organization:t.props.organization.key})}),r.map(function(e){return Object(f.e)({name:e,login:o,organization:t.props.organization.key})}));return Promise.all(a).then(function(){t.mounted&&t.updateGroup(o,function(e){return we(we({},e),{groupCount:(e.groupCount||0)+n.length-r.length})})})},t}return Pe(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchMembers(),this.props.organization.actions&&this.props.organization.actions.admin&&this.fetchGroups()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.currentUser,n=e.organization,r=this.state,o=r.groups,a=r.loading,s=r.members,c=r.paging,u=n.alm&&n.alm.membersSync;return i.createElement("div",{className:"page page-limited"},i.createElement(l.a,{title:Object(p.translate)("organization.members.page")}),i.createElement(g.a,{suggestions:"organization_members"}),i.createElement(h.a,{anchor:"members_main"}),i.createElement(Ne,{handleAddMember:this.handleAddMember,loading:a,members:s,organization:n,refreshMembers:this.refreshMembers}),void 0!==s&&void 0!==c&&i.createElement(i.Fragment,null,i.createElement(ne,{handleSearch:this.handleSearchMembers,organization:n,total:c.total}),i.createElement(Q,{currentUser:t,members:s,organization:n,organizationGroups:o,removeMember:u?void 0:this.handleRemoveMember,updateMemberGroups:this.updateMemberGroups}),0!==c.total&&i.createElement(m.a,{count:s.length,loadMore:this.handleLoadMoreMembers,ready:!a,total:c.total})))},t}(i.PureComponent);t.default=Object(a.a)(Object(o.connect)(function(e,t){return{organization:Object(s.getOrganizationByKey)(e,t.params.organizationKey)}})(Ge))},662:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,o=n(12),a=n(680),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function i(e){var t=e.suggestions;return o.createElement(a.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return o.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(o.PureComponent)},669:function(e,t,n){"use strict";var r,o=n(12),a=n(652),s=n.n(a),i=n(657),c=n(695),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=Object(i.lazyLoad)(function(){return Promise.all([n.e(8),n.e(10),n.e(370)]).then(n.bind(null,808))}),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={open:!1},t.close=function(){t.mounted&&t.setState({open:!1})},t}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,this.props.doc.then(function(t){var n=t.default;e.mounted&&e.setState({content:n})},function(){}),document.addEventListener("scroll",this.close,!0)},t.prototype.componentWillUnmount=function(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)},t.prototype.render=function(){return this.state.content?o.createElement(s.a,{className:this.props.className,overlay:o.createElement("div",{className:"abs-width-300"},o.createElement(u,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},t}(o.PureComponent);t.a=m},673:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r,o=n(12),a=n(34),s=n(730),i=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e){return o.createElement(s.a.Consumer,null,function(t){var n=t.addA11ySkipLink,r=t.removeA11ySkipLink;return o.createElement(u,c({addA11ySkipLink:n,removeA11ySkipLink:r},e))})}var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.getLink=function(){var e=t.props,n=e.anchor,r=e.label;return{key:n,label:void 0===r?Object(a.translate)("skip_to_content"):r,weight:e.weight}},t}return i(t,e),t.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},t.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},t.prototype.render=function(){var e=this.props.anchor;return o.createElement("span",{id:"a11y_target__"+e})},t}(o.PureComponent)},688:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return u});var r=n(661);function o(e,t){return t.endsWith("/")||(t+="/"),c(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function a(e){return Object(r.b)(e)&&e.externalProvider?u(e.externalProvider):void 0}function s(e){return Object(r.b)(e)&&(i(e.externalProvider)||c(e.externalProvider))}function i(e){return!!e&&e.startsWith("bitbucket")}function c(e){return"github"===e}function l(e){return"microsoft"===e}function u(e){return i(e)?"bitbucket":e}},695:function(e,t,n){"use strict";function r(e){for(var t,n,r=0;r<e.length;r++){if("---"===e[r].trim()){if(void 0!==t){n=r;break}t=r}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function o(e){for(var t={},n=0;n<e.length;n++){var r=e[n].split(":").map(function(e){return e.trim()});2===r.length&&(t[r[0]]=r[1])}return t}function a(e,t){for(var n="\x3c!-- "+t+" --\x3e",r="\x3c!-- /"+t+" --\x3e",o=e,a=o.indexOf(n),s=o.indexOf(r);-1!==a&&-1!==s;)a=(o=o.substring(0,a)+o.substring(s+r.length)).indexOf(n),s=o.indexOf(r);return o}e.exports={getFrontMatter:function(e){var t=e.split("\n"),n=r(t);return n?o(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){var t=e.split("\n"),n=r(t);if(n){var a=o(t.slice(n.firstLine+1,n.lastLine)),s=t.slice(n.lastLine+1).join("\n");return{frontmatter:a,content:s}}return{frontmatter:{},content:e}},filterContent:function(e){var t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(118),o=r.isSonarCloud,s=r.getInstance,i=a(e.replace(/{instance}/gi,s()),"static");return(o()?a(i,"sonarqube"):a(i,"sonarcloud")).replace(new RegExp("^"+t+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+t,"g"),"")}}}}]);
//# sourceMappingURL=334.1576512032968.chunk.js.map