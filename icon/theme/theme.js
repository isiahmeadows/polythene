"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneIconThemeConfig=require("polythene/icon/theme/config");var _polytheneIconThemeConfig2=_interopRequireDefault(_polytheneIconThemeConfig);var _polytheneConfigCustom=require("polythene/config/custom");var _polytheneIconThemeLayout=require("polythene/icon/theme/layout");var _polytheneIconThemeLayout2=_interopRequireDefault(_polytheneIconThemeLayout);var _polytheneCommonStyler=require("polythene/common/styler");var _polytheneCommonStyler2=_interopRequireDefault(_polytheneCommonStyler);var config=_polytheneConfigCustom.headerPanel?(0,_polytheneConfigCustom.headerPanel)(_polytheneIconThemeConfig2["default"]):_polytheneIconThemeConfig2["default"];_polytheneCommonStyler2["default"].add("pe-icon",(0,_polytheneIconThemeLayout2["default"])(config));