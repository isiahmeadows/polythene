# Button
<!--
<a class="btn-demo" href="http://arthurclemens.github.io/Polythene-examples/index.html#/button">Demo</a>
-->

Displays a text button with a [ripple](#ripple) effect.

See also: [Raised Button](#raised-button), [Icon Button](#icon-button) and [Floating Action Button](#fab)



## Usage

~~~javascript
import m from "mithril";
import { button } from "polythene-button";

const myButton = m(button, {
  label: "Button"
});
~~~

Add a URL:

~~~javascript
const myButton = m(button, {
  label: "Button",
  url: {
    href: "/index",
    oncreate: m.route.link
  }
});
~~~

Add an onclick event:

~~~javascript
const myButton = m(button, {
  label: "Button",
  events: {
    onclick: () => console.log("click")
  }
});
~~~



## Variations

* The hover effect can be hidden with `wash: false`.
* The ripple effect on click can be hidden with `ink: false`.
* Button contains no icon as this is not part of the Material Design guidelines; use [icon Button](#icon-button) instead



## Mobile and tap delay

To remove the tap delay on mobile devices it is advisable to use a library like [Fastclick](https://github.com/ftlabs/fastclick). But because Fastclick has an unresolved issue with tap events while scrolling on iOS, it is better to use the convenience wrapper provided in "polythene-fastclick". This temporarily removes the Fastclick event when an element is being scrolled.

~~~javascript
import "polythene-fastclick";
~~~



## Options

### Common component options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **element** | optional | String | "a" | HTML element tag; may also be "button" |
| **class** | optional | String |  | Extra CSS class appended to `pe-button` |
| **id** | optional | String | | HTML element id |
| **content** | use `label` or `content` | Mithril element | | Alternative content; replaces `vnode.children` and ignores `label` |
| **before** | optional | Mithril element | | Extra content before main content; note that this content is placed left of subsequent elements with a lower stacking depth |
| **after** | optional | Mithril element | | Extra content after main content; note that this content is placed right of preceding elements with a higher stacking depth |
| **events** | optional | Object | | Options object containing one or more standard events such as `onclick` |
| **tabindex** | optional | Integer | 0 | Tab index |

### Button specific options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **label** | use `label` or `content` | String | | The button label |
| **url** | optional | Object with `href`, optionally `oncreate` | | URL location; for in-app route linking set `oncreate : m.route.link` |
| **disabled** | optional | Boolean | false | Disables the button |
| **selected** | optional | Boolean | false | Set to true to show the button as selected |
| **formaction** | optional | String | | "The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner." [source:MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) |
| **animateOnTap** | optional | Boolean | true | Set to false to remove z-animation and subsequent redraw |
| **inactive** | optional | Boolean | | Set to `true` to disable button events and ripple/wash effects |
| **inactivate** | optional | Number | | The number of seconds after tap/click when the button is inactive; useful to prevent double clicks |

### Button appearance options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **wash** | optional | Boolean | true | Set to false to hide the effect on hover |
| **ink** | optional | Boolean | true | Set to false to disable the ripple effect on click/tap |
| **ripple** | optional (valid if `ink` is `true`) | Options object | | Pass [ripple](#ripple) options to define ripple behavior |
| **increase** | optional | Number | 1 | The z-index increment/decrement on tap; note that the maximum z value is 5 |
| **borders** | optional | Boolean | false | Set to `true` to add a border; by default the border has no color - set border color to class `pe-button__content` to see the border |



### Composition

Button is composed from:

* [Ripple](#ripple) (when option `ink` is not `false`)



## CSS classes

| **Element**    | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Component      | component   | `pe-button pe-button--text` |
| Content        | content     | `pe-button__content` |
| Label          | label       | `pe-button__label` |
| Wash element   | wash        | `pe-button__wash` |
| Focus element  | focus       | `pe-button__focus` |

| **State**      | **Key**     |  **Class** |
| -------------- | ----------- | --------------- |
| Selected       | selected    | `pe-button--selected` |
| Disabled       | disabled    | `pe-button--disabled` |
| Has borders    | borders     | `pe-button--borders` |
| Inactive       | inactive    | `pe-button--inactive` |
| Focus          | focused     | `pe-button--focus` |



## Future

* Option to wait for ripple to finish before url/event is followed