"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _polytheneSelectionControlSelectionControl=require("polythene/selection-control/selection-control");var _polytheneSelectionControlSelectionControl2=_interopRequireDefault(_polytheneSelectionControlSelectionControl);var _polytheneShadowShadow=require("polythene/shadow/shadow");var _polytheneShadowShadow2=_interopRequireDefault(_polytheneShadowShadow);require("polythene/switch/theme/theme");var CSS_CLASSES={block:"pe-control--switch",track:"pe-control--switch__track",thumb:"pe-control--switch__thumb",knob:"pe-control--switch__knob",hitarea:"pe-control--switch__hitarea",hitareaTransparent:"pe-control--switch__hitarea--transparent"};var selectionView=function selectionView(checked,opts){var zOff=opts.zOff!==undefined?opts.zOff:1;var zOn=opts.zOn!==undefined?opts.zOn:2;var z=checked?zOn:zOff;var wash=opts.wash!==undefined?opts.wash:true;var raised=opts.disabled?false:opts.raised!==undefined?opts.raised:true;return[(0,_mithril2["default"])("div",{"class":CSS_CLASSES.track}),(0,_mithril2["default"])("div",{"class":CSS_CLASSES.thumb},[(0,_mithril2["default"])("div",{"class":CSS_CLASSES.knob},raised?_mithril2["default"].component(_polytheneShadowShadow2["default"],{z:z,animated:true}):null),!opts.disabled?(0,_mithril2["default"])("div",{"class":[CSS_CLASSES.hitarea,!wash||!_polythenePolythenePolythene2["default"].isTouch?CSS_CLASSES.hitareaTransparent:null].join(" ")}):null])]};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];opts.defaultClass=CSS_CLASSES.block;opts.type="checkbox";opts.selectionView=selectionView;return _mithril2["default"].component(_polytheneSelectionControlSelectionControl2["default"],opts)};var component={view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];