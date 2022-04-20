# The useState hook

Here are the most important hooks in React

![React Hooks System](./images/react-hooks-system.png "React Hooks System")


## setState in Class Components

![setState in Class Components](./images/setState-in-class-components_1.png "setState in Class Components")
<br>
<br>
![setState in Class Components](./images/setState-in-class-components_2.png "setState in Class Components")
<br>


## The useState hook in Functional Components

![useState hook](./images/useState-hook.png "useState hook")


## State management in Class vs Functional Components

![State management in Class vs Functional Components](./images/state-in-class-vs-functional-components_1.png "State management in Class vs Functional Components")


## For setting multiple items in the state

![State management in Class vs Functional Components](./images/state-in-class-vs-functional-components_2.png "State management in Class vs Functional Components")


## Secret behind the syntax of useState hook (array destructuring)

```js
const [activeIndex, setActiveIndex] = useState(null);
```

The `useState` hook always returns an array with exactly 2 elements.

Above syntax is a shorthand form of below code:

```js
const things = useState(null);
const activeIndex = things[0];
const setActiveIndex = things[1];
```
