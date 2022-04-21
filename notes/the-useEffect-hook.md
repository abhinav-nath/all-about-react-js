# The useEffect hook

Allows function components to use something _like_ lifecycle methods.

We configure the hook to run some code automatically in one of the three scenarios:

1. When the component is rendered for the **_first time only_**

2. When the component is rendered for the **_first time and whenever it re-renders_**

3. When the component is rendered for the **_first time and whenever it re-renders and some piece of data has changed_**

## useEffect second argument

Code inside the useEffect will be executed automatically at some point of time.

When exactly this code will be executed is controlled by the **second argument** to the useEffect.

There are three ways to control it:

1. **Empty Array**

   - Run at the initial render of the component

     ```js
     useEffect(() => {
       console.log('abc');
     }, []);
     ```

2. **Nothing**

   - Run at the initial render of the component
   - Run after every re-render

     ```js
     useEffect(() => {
       console.log('abc');
       });
     ```

3. **An Array with some values**

   - Run at the initial render of the component
   - Run after every re-render **_if_** `data` has changed since last render

     ```js
     useEffect(() => {
       console.log('abc');
     }, [data]);
     ```

   We can pass multiple values to the array. useEffect will be triggered if any of them gets changed.

     ```js
     useEffect(() => {
       console.log('abc');
     }, [data1, data2]);
     ```

## useEffect's Clean-up function

There is only one possible value that we can return from the arrow function defined inside useEffect.

The only thing allowed is **an another arrow function**

```js
useEffect(() => {
  console.log('Initial render or the term was changed');

  return () => {
    console.log('CLEAN-UP');
  };
}, [term]);
```

- React keeps a handle on this `clean-up function` when the component is first rendered

- On the next render, the clean-up function from the last render is executed first

- And after that the whole arrow function inside the useEffect is executed

Console logs when the component is rendered for the first time:

```
Initial render or the term was changed
```

When `term` gets changed:

```
CLEAN-UP
Initial render or the term was changed
```
