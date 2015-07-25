var self = require('sdk/self');
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs')

var button = buttons.ActionButton({
    id: "Octo-Image",
    label: "Replace!",
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png",
    },
    onClick: handleClick
});

function handleClick(state) {
    tabs.activeTab.attach({
        contentScript: self.url("replace.js")
    });
}
