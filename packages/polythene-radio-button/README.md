# Radio button

Form control to select a single option from a set. Generates a styled radio button input element.



## Usage

To create an radio button group:

~~~javascript
import m from "mithril";
import radioButton from "polythene-radio-button";

const radioGroup = {
  view: () => [
    m(radioButton, {
      name: "setting",
      label: "Label"
    }),
    m(radioButton, {
      name: "setting",
      label: "Label",
      checked: true
    })
  ]
};

m(radioGroup);
~~~


### Dynamic values

To read the checked state use `getState`:

~~~javascript
m(radioButton, {
  name: "setting",
  getState: state => vnode.state.value = state.value
})
~~~

To set the checked state, use `checked` as a function:

~~~javascript
m(radioButton, {
  name: "setting",
  value: "first",
  checked: () => vnode.state.value === "first"
})
~~~

Of course you can also use `events` with an `onclick` event:

~~~javascript
m(radioButton, {
  name: "setting",
  value: "first",
  events: {
    onclick: () => vnode.state.value = "first"
  }
})
~~~



## Appearance

### Styling

Below are examples how to change the radio button appearance, either with a theme or with CSS.

You can find more information about theming in [Theme](../polythene-theme).

#### Themed component

Radio button is composed from Selection control, and it uses its style variables.

~~~javascript
radioButton.theme(".blue-radio", {
  color_light_on:    "#2196F3",
  color_light_off:   "#2196F3",
  color_light_label: "#2196F3"
});

m(radioButton, {
  class: "blue-radio",
  label: "Label"
});
~~~


#### CSS

Change CSS using the CSS Classes at the bottom of this page.

#### Colors

The icon color can be set using `style`.

~~~javascript
m(radioButton, {
  style: { color: "#2196F3" }
});
~~~


### Icons

To use alternative icons, use options `iconOn` and `iconOff` (see also "msvg" at [icon](../polythene-icon)):

~~~javascript
import iconStar from "mmsvg/google/msvg/toggle/star";
import iconStarOutline from "mmsvg/google/msvg/toggle/star-border";

const radioGroup = {
  view: () => [
    m(radioButton, {
      name: "setting",
      iconOn: { msvg: iconStar },
      iconOff: { msvg: iconStarOutline }
    }),
    m(radioButton, {
      name: "setting",
      iconOn: { msvg: iconStar },
      iconOff: { msvg: iconStarOutline }
    })
  ]
};

m(radioGroup);
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element**   | optional       | String   | "div"       | HTML element tag for the radio button container |
| **class**     | optional       | String   |             | Extra CSS class appended to "pe-radio-control" |
| **id**        | optional       | String   |             | HTML element id for the radio button container |
| **before**    | optional       | Mithril element |      | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after**     | optional       | Mithril element |      | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events**    | optional       | Object   |             | Options object containing one or more standard events such as `onclick` |
| **tabindex**  | optional       | Integer  |             | Tab index |

### Radio button specific

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **name**      | optional | String | | Input element name |
| **label**     | optional | String | | Text label |
| **checked**   | optional | Boolean or Function | false | Checked state; use as function to set the value from outside |
| **value**     | optional | String | "1" | Input element value |
| **disabled**  | optional | Boolean |  | Set to true to disable the radio button |

### Appearance

| **Parameter**  |  **Mandatory** | **Type** | **Default** | **Description** |
| -------------- | -------------- | -------- | ----------- | --------------- |
| **iconOn**     | optional | Options object for [icon](../polythene-icon) | | Assigns a different icon for the on state |
| **iconOff**    | optional | Options object for [icon](../polythene-icon) | | Assigns a different icon for the off state |
| **iconButton** | optional | Options object for the icon button | | Add attributes like `wash` and `ink` |
| **size**       | optional | String | "regular" | Equivalent to [icon's type](../polythene-icon) option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px) |

### Dynamic values

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **getState**  | optional | Function(state {Object}) | | Callback function that accepts the field state (Object with properties `checked` {Boolean}, `value` {String}, `el` {HTMLElement}) |
| **selectable** | optional | Function(checked {Boolean}) | | Use to set the active state based on the radio button state; function that accepts the field checked value (Boolean) |



### Composition

Radio button is composed from:

* [Selection control](../polythene-selection-control)
  * [Icon button](../polythene-icon-button)
  * [Icon](../polythene-icon)



## CSS classes

See also: [Selection control classes](../polythene-selection-control) 

### Control

| **Element** | **Key**     |  **Class** |
| ----------- | ----------- | --------------- |
| Component   | component   | `pe-radio-control` |


