"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneButtonThemeConfig=require("polythene/button/theme/config");var _polytheneButtonThemeConfig2=_interopRequireDefault(_polytheneButtonThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneButtonThemeLayout=require("polythene/button/theme/layout");var _polytheneButtonThemeLayout2=_interopRequireDefault(_polytheneButtonThemeLayout);var _polytheneButtonThemeColor=require("polythene/button/theme/color");var _polytheneButtonThemeColor2=_interopRequireDefault(_polytheneButtonThemeColor);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.button?(0,_polytheneConfigCustom.button)(_polytheneButtonThemeConfig2["default"]):_polytheneButtonThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-button-text",(0,_polytheneButtonThemeLayout2["default"])(config),(0,_polytheneButtonThemeColor2["default"])(config));