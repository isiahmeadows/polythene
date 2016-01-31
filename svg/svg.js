"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}require("polythene/common/object.assign");var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("polythene/svg/theme/theme");var CSS_CLASSES={block:"pe-svg"};var globalCache={};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var content=undefined,svg=undefined;var tag=opts.tag||"div";var props=Object.assign({},{"class":[CSS_CLASSES.block,opts["class"]].join(" "),id:opts.id||"",config:opts.config},opts.events?opts.events:null);if(opts.content){content=opts.content}else{var path=opts.src;if(ctrl.path()!==path){svg=globalCache[path];if(svg){content=_mithril2["default"].trust(svg);preloadNext(ctrl,opts)}else{ctrl.path(path);loadSvg(path,ctrl,opts).then(_mithril2["default"].redraw)}}else{svg=ctrl.svg();svg=svg||"";content=_mithril2["default"].trust(svg);preloadNext(ctrl,opts)}}return(0,_mithril2["default"])(tag,props,[opts.before,content,opts.after])};var loadSvg=function loadSvg(path,ctrl,opts){var preloading=arguments.length<=3||arguments[3]===undefined?false:arguments[3];if(System&&System["import"]){var normalizedName=System.normalizeSync(path);return System["import"](normalizedName).then(function(data){if(preloading){globalCache[path]=data;ctrl.preloadingIndex++;preloadNext(ctrl,opts)}else{ctrl.svg(data)}})}else{if(console){console.log("polythene/svg: System not found.")}}};var preloadNext=function preloadNext(ctrl,opts){if(!ctrl.preloadingItems){return}if(ctrl.preloadingIndex>=ctrl.preloadingItems.length){return}var next=ctrl.preloadingItems[ctrl.preloadingIndex];if(!globalCache[next]){loadSvg(next,ctrl,opts,true)}else{ctrl.preloadingIndex++;preloadNext(ctrl,opts)}};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];return{path:_mithril2["default"].prop(""),svg:_mithril2["default"].prop(""),preloadingItems:opts.preload,preloadingIndex:0}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];