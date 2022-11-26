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
const [color, setColor] = useState("green");
```

The `useState` hook always returns an array with exactly 2 elements.

Above syntax is a shorthand form of below code:

```js
const things = useState("green");
const color = things[0];
const setColor = things[1];
```

## Setter Functions

```js
const [activeIndex, setActiveIndex] = useState(null); // initialise to null

const onTitleClick = (index) => {
  setActiveIndex(index);
};
```

As soon as we call any setter function coming from the useState hook, our entire component is going to re-render.

When the component gets re-rendered, the default initialisation value will not be used anymore.

The value passed in the setter function will be used instead (just like traditional `for-loop`).
