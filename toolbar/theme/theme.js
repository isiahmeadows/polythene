"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneToolbarThemeConfig=require("polythene/toolbar/theme/config");var _polytheneToolbarThemeConfig2=_interopRequireDefault(_polytheneToolbarThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneToolbarThemeLayout=require("polythene/toolbar/theme/layout");var _polytheneToolbarThemeLayout2=_interopRequireDefault(_polytheneToolbarThemeLayout);var _polytheneToolbarThemeColor=require("polythene/toolbar/theme/color");var _polytheneToolbarThemeColor2=_interopRequireDefault(_polytheneToolbarThemeColor);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.toolbar?(0,_polytheneConfigCustom.toolbar)(_polytheneToolbarThemeConfig2["default"]):_polytheneToolbarThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-toolbar",(0,_polytheneToolbarThemeLayout2["default"])(config),(0,_polytheneToolbarThemeColor2["default"])(config));