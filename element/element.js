"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0}),require("polythene/common/object.assign");var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril);require("polythene/element/theme/theme");var createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],tag=opts.tag||"div",props=Object.assign({},{"class":["element",opts["class"]].join(" "),id:opts.id||"",config:opts.config},opts.events?opts.events:null),content=[opts.content?opts.content:null];return(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])},component={view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=element.js.map