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


# The useRef Hook
