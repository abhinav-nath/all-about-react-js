# Event Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

Let’s say we have 3 nested elements `FORM > DIV > P` with a handler on each of them:

```html
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```

A click on the inner <p> first runs onclick:

1. On that `<p>`
2. Then on the outer `<div>`
3. Then on the outer `<form>`
4. And so on upwards till the `document` object

So if we click on `<p>`, then we’ll see 3 alerts: `p` → `div` → `form`

The process is called "bubbling", because events "bubble" from the inner element up through parents like a bubble in the water.

More details here - https://javascript.info/bubbling-and-capturing


# The Problem

An event from the child element will bubble up to its parents - this is traditional "event bubbling".

But what if the child elements wants to listen to an event from its parent?

Use case:

Suppose we have to build a simple drop-down.

This drop-down should open when clicked and closed once an option is chosen.

This drop-down should also close when user clicks anywhere outside the dropdown.

So basically there could be this kind of element hierarchy - `body` > `div` > `dropdown`

Any click outside the dropdown must also be known to the `dropdown` and hence it should be able to close itself based on the event from the parent elements.

This is really hard because the `dropdown` can only set up event handlers easily (using JSX props) on the elements it creates.


# Solution

The Dropdown can set up a **manual event listener (without React)** on the `body` element.

A click on __any element__ will bubble up to the `body`.

In the Dropdown component we can create a manual event listener like so:

```js
document.body.addEventListener("click", () => console.log("CLICK!!")), { capture: true });
```
