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
   - Run after every re-render **_if_** data has changed since last render

     ```js
     useEffect(() => {
       console.log('abc');
     }, [data]);
     ```
