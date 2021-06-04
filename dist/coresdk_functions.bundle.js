(self.webpackChunkextension_template_kitchensink=self.webpackChunkextension_template_kitchensink||[]).push([["coresdk_functions"],{55393:(e,t,o)=>{"use strict";o.d(t,{I:()=>c});var n=o(18117),r=o(36632),c=(0,n.ZP)(r.X).withConfig({displayName:"ButtonOutline",componentId:"ncggc7-0"})(["background:",";border:1px solid ",";color:",";&:hover,&:focus,&.hover{background:",";color:",";}&[aria-expanded='true'],&:active,&.active{background:",";border-color:",";color:",";}&[disabled]{&:hover,&:active,&:focus{background-color:",";border-color:",";color:",";}}"],(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n,"Text")]}),(function(e){return e.theme.colors.ui2}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors[n]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n,"Subtle")]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n)]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n,"Accent")]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n,"Focus")]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors[n]}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors["".concat(n,"Text")]}),(function(e){return e.theme.colors.ui3}),(function(e){var t=e.theme,o=e.color,n=void 0===o?"key":o;return t.colors[n]}))},69993:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var n=o(92137),r=o(18446),c=o.n(r),a=o(67294),l=o(5977),i=o(8747),s=o(25108),u=o(55393),m=o(71272),d=o(38287),h=o(50048);const f=()=>{var[e,t]=(0,a.useState)(),o=(0,l.TH)(),[r,f]=(0,a.useState)({}),[v,k]=(0,a.useState)(""),y=(0,h.Wg)();(0,a.useEffect)((()=>{if(o.search||o.pathname.includes("?")){var e="".concat(o.pathname).concat(o.search);r.route===e&&c()(r.routeState,o.state)||(f({route:e,routeState:o.state}),g("location: ".concat(o.pathname).concat(o.search," ").concat(JSON.stringify(o.state))))}}),[o]);var g=(e,t)=>{k((o=>{var n=0===o.length?"":"\n",r=t?"".concat(e,"\n").concat(t):e;return"".concat(o).concat(n).concat(r)}))},p=function(){var e=(0,n.Z)((function*(){try{(yield y.ok(y.all_connections())).forEach((e=>{g(e.name||"")}))}catch(e){g("Error getting connections",e)}}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,n.Z)((function*(){try{var e=yield y.ok(y.all_looks("id"));if(e.length>0){var o=yield y.ok(y.run_look({look_id:e[0].id,result_format:"png"}));o instanceof Blob?t(URL.createObjectURL(o)):t(btoa("data:image/png;base64,".concat(o))),g("Got image")}else g("No looks to render")}catch(e){g("Error getting connections",e)}}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)((function*(){try{var e=yield y.ok(y.search_folders({parent_id:"1"}));g(JSON.stringify(e,null,2))}catch(e){g("Error invoking search folders",e)}}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=(0,n.Z)((function*(){try{var e=yield y.ok(y.run_inline_query({result_format:"json_detail",limit:10,body:{total:!0,model:"thelook",view:"users",fields:["last_name","gender"],sorts:["last_name desc"]}}));g(JSON.stringify(e,null,2))}catch(e){g("Error invoking inline query",e)}}));return function(){return e.apply(this,arguments)}}();return a.createElement(a.Fragment,null,a.createElement(i.X,{mt:"xlarge"},"Core SDK Functions"),a.createElement(d.p,null),a.createElement(s.x,{display:"flex",flexDirection:"row"},a.createElement(s.x,{display:"flex",flexDirection:"column",width:"50%",maxWidth:"40vw"},a.createElement(u.I,{mt:"small",onClick:p},"All connections (get method)"),a.createElement(u.I,{mt:"small",onClick:x},"Search folders (get method with parameters)"),a.createElement(u.I,{mt:"small",onClick:b},"Inline query (post method)"),a.createElement(u.I,{mt:"small",onClick:E},"Render Look image"),e&&a.createElement("img",{src:e}),a.createElement(u.I,{mt:"small",onClick:()=>{k(""),t(void 0)}},"Clear messages")),a.createElement(s.x,{width:"50%",p:"small",maxWidth:"40vw"},a.createElement(m.TextArea,{height:"60vh",readOnly:!0,value:v}))))}},38287:(e,t,o)=>{"use strict";o.d(t,{p:()=>c});var n=o(67294),r=o(36323),c=()=>{var[e,t]=(0,n.useState)("");return(0,n.useEffect)((()=>{try{var e;null===(e=window.parent.looker)||void 0===e||e.version,t("NOT")}catch(e){t("")}}),[]),n.createElement(r.n,{my:"medium"},"This extension is ",n.createElement("b",null,e)," sandboxed.")}}}]);
//# sourceMappingURL=coresdk_functions.bundle.js.map