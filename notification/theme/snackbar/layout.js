"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.defineProperty(exports,"__esModule",{value:!0});var _config=require("polythene/config/config"),_config2=_interopRequireDefault(_config),_mixin=require("polythene/common/mixin"),_mixin2=_interopRequireDefault(_mixin),tabletStyle=function(config){return{"min-width":config.tablet_min_width+"px","max-width":config.tablet_max_width+"px","border-bottom-left-radius":0,"border-bottom-right-radius":0,"border-top-left-radius":_config2["default"].unit_block_border_radius+"px","border-top-right-radius":_config2["default"].unit_block_border_radius+"px","&.pe-notification--horizontal":{" .pe-notification__title":{"padding-right":"30px"}}}},createStyles=function(config){return[_defineProperty({},"@media (min-width: "+_config2["default"].breakpoint_small_handset_landscape+"px)",{".pe-notification--snackbar":tabletStyle(config)})]};exports["default"]=function(config){return _mixin2["default"].createStyles(config,createStyles)},module.exports=exports["default"];
//# sourceMappingURL=layout.js.map