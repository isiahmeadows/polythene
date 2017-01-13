import m from "mithril";
import { button as component } from "polythene-button";

component.theme(".tests-button-themed-button", {
  color_light_background: "#2196F3",
  color_dark_background: "#2196F3",
  color_light_text: "#fff"
});

component.theme(".blue-on-dark-button", {
  color_dark_text: "#1976D2"
});

component.theme(".tests-button-bordered-button", {
  color_light_text: "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text: "yellow",
  color_dark_border: "yellow"
});

export const tests = [
  {
    name: "Child node",
    component,
    attrs: {},
    children: ["Child"]
  },
  {
    name: "Option: label",
    component,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: m("div", "Content")
    }
  },
  {
    name: "Themed button: (option: borders)",
    component,
    attrs: {
      label: "Borders",
      class: "tests-button-bordered-button",
      borders: true
    }
  },
  {
    name: "Themed button",
    component,
    attrs: {
      label: "Themed button",
      class: "tests-button-themed-button"
    }
  },
  {
    name: "Option: wash (false)",
    interactive: true,
    component,
    attrs: {
      label: "No wash",
      wash: false
    }
  },
  {
    name: "Option: ink (false)",
    interactive: true,
    component,
    attrs: {
      label: "No ink",
      ink: false
    }
  },
  {
    name: "Option: disabled (true)",
    interactive: true,
    component,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  },
  {
    name: "Option: disabled (false)",
    interactive: true,
    component,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  },
  {
    name: "Option: selected",
    component,
    attrs: {
      label: "Selected",
      selected: true
    }
  },
  {
    name: "Option: formaction",
    component,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
    }
  },
  {
    name: "Option: url (with oncreate)",
    interactive: true,
    component,
    attrs: {
      label: "Go to /#/shadow",
      url: {
        href: "/shadow",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: url (without oncreate)",
    interactive: true,
    component,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow"
      }
    }
  },
  {
    name: "onbeforeupdate",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.updated = 0,
      view: vnode => [
        m("div", `Updated: ${vnode.state.updated}`),
        m(component, {
          label: "Button",
          onbeforeupdate: () => vnode.state.updated++
        })
      ]
    }
  },
  {
    name: "Option: events (onclick)",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.clicked = 0,
      view: vnode => [
        m("div", `onclick called: ${vnode.state.clicked}`),
        m(component, {
          label: "Button",
          events: {
            onclick: () => vnode.state.clicked++
          }
        })
      ]
    }
  },
  {
    name: "Key down (after having focus) results in click",
    interactive: true,
    component: {
      oninit: vnode =>
        vnode.state.clickCount = 0,
      view: vnode => [
        m("div", `onclick called: ${vnode.state.clickCount}`),
        m(component, {
          label: "Button",
          events: {
            onclick: () => vnode.state.clickCount++
          }
        })
      ]
    }
  },
  {
    name: "Option: inactive (false)",
    interactive: true,
    component,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  },
  {
    name: "Option: inactive (true)",
    interactive: true,
    component,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  },
  {
    name: "Option: inactivate (2)",
    interactive: true,
    component,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },

  // Common
  {
    name: "No options",
    component,
    attrs: null
  },
  {
    name: "Option: id",
    component,
    attrs: {
      id: "id-x"
    }
  },
  {
    name: "Option: class",
    component,
    attrs: {
      class: "class-x"
    }
  },
  {
    name: "Option: element (button)",
    component,
    attrs: {
      label: "button element",
      element: "button"
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      label: "Button",
      before: m("span", "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      label: "Button",
      after: m("span", "After")
    }
  },

  // Dark theme
  
  {
    name: "Option: label -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Themed button -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      label: "Themed button",
      class: "tests-button-themed-button"
    }
  },
  {
    name: "Themed button blue on dark -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      label: "Blue on dark button",
      class: "blue-on-dark-button"
    }
  },
  {
    name: "Themed button: (option: borders) -- dark theme",
    class: "pe-dark-theme",
    component,
    attrs: {
      label: "Borders dark theme",
      class: "tests-button-bordered-button",
      borders: true
    }
  }
];