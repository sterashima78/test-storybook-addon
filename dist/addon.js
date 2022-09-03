"use strict";

var _addons = require("@storybook/addons");

var _components = require("@storybook/components");

var ADDON_ID = 'myaddon';
var PANEL_ID = "".concat(ADDON_ID, "/panel");

var MyPanel = function MyPanel() {
  return /*#__PURE__*/React.createElement("div", null, "MyAddon");
};

_addons.addons.register(ADDON_ID, function () {
  _addons.addons.add(PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'My Addon',
    render: function render(_ref) {
      var active = _ref.active,
          key = _ref.key;
      return /*#__PURE__*/React.createElement(_components.AddonPanel, {
        active: !!active,
        key: key
      }, /*#__PURE__*/React.createElement(MyPanel, null));
    }
  });
});

console.log("install");