# The `useCallback` hook

`useCallback` lets you cache a function definition between re-renders.

```js
const cachedFn = useCallback(fn, dependencies)
```

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

Returns a memoized callback.

Pass an inline callback and an array of dependencies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed.

