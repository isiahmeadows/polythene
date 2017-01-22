!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,n,a){"use strict";o="default"in o?o.default:o;var r={transition:"box-shadow "+a.vars.animation_duration+" ease-out","shadow-top-z-1":"none","shadow-bottom-z-1":"0 1px 4px 0 rgba(0, 0, 0, 0.37)","shadow-top-z-2":"0 2px 2px 0 rgba(0, 0, 0, 0.2)","shadow-bottom-z-2":"0 6px 10px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-3":"0 11px 7px 0 rgba(0, 0, 0, 0.19)","shadow-bottom-z-3":"0 13px 25px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-4":"0 14px 12px 0 rgba(0, 0, 0, 0.17)","shadow-bottom-z-4":"0 20px 40px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-5":"0 17px 17px 0 rgba(0, 0, 0, 0.15)","shadow-bottom-z-5":"0 27px 55px 0 rgba(0, 0, 0, 0.3)","shadow-down-z-1":"inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)","shadow-down-z-2":"inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"},p=function(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e},s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=function(e){return{boxShadow:e}},d=function(e,o){return[p({},e,[n.mixin.fit(),{borderRadius:"inherit",pointerEvents:"none"," .pe-shadow__bottom, .pe-shadow__top":[n.mixin.fit(),{borderRadius:"inherit"}],".pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":{transition:o.transition}}},[1,2,3,4,5].map(function(e){var t;return t={},p(t," .pe-shadow__top.pe-shadow--z-"+e,i(o["shadow-top-z-"+e])),p(t," .pe-shadow__bottom.pe-shadow--z-"+e,i(o["shadow-bottom-z-"+e])),t})])]},h=[d],w=".pe-shadow",l=function(e,o){return n.styler.generateStyles([e,w],s({},r,o),h)};n.styler.generateStyles([w],r,h);var b={component:"pe-shadow",topShadow:"pe-shadow__top",bottomShadow:"pe-shadow__bottom",animated:"pe-shadow--animated",depth_n:"pe-shadow--z-"},u=function(e){var n=e.attrs,a=""+b.depth_n+Math.min(5,void 0!==n.z?n.z:1),r=n.element||"div",p=s({},t.filterSupportedAttributes(n),{class:[b.component,n.animated&&b.animated,n.class].join(" ")}),i=n.content?n.content:n.children||e.children,d=[i,o("div",{class:[b.bottomShadow,a].join(" ")}),o("div",{class:[b.topShadow,a].join(" ")})];return o(r,p,[n.before,d,n.after])},c={theme:l,view:u};e.shadow=c,e.classes=b,e.vars=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-shadow.js.map
