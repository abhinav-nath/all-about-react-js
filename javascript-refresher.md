# JavaScript Refresher

## let & const

`let` and `const` are different ways of creating variables.

`var` creates a variable in JavaScript.
Some variables never really change. They are so called **constants**.

With **ES6**, two different keywords were introduced - `let` and `const`.

`var` still works but you are highly encouraged to used `let` and `const`.

`let` is the new `var`, used for _variable_ values.

Use `const` to create _constants_.

```js
let username = 'John';
console.log(username);

username = 'Tom';
console.log(username);
```

is same as

```js
var username = 'John';
console.log(username);

username = 'Tom';
console.log(username);
```

Output
```
"John"
"Tom"
```

```js
const username = 'John';
console.log(username);

username = 'Tom';
console.log(username);
```

Output
```
"John"
"error"
"TypeError: Assignment to constant variable.
    at woyefiroxe.js:4:10
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.8.min.js:1:10866"
```

## Arrow Functions

Normal JS function

```js
function myFunc() {
  ...
}
```

Arrow function

```js
const myFunc = () => {
  ...
}
```

Normal function

```js
function printName(name) {
  console.log(name);
}

printName('John');
```

Arrow function

```js
const printName = (name) => {
  console.log(name);
}

printName('John');
```

No need of braces in case of a single argument

```js
const printName = name => {
  console.log(name);
}

printName('John');
```

Braces are required for zero or more than one arguments

```js
const printName = (name, age) => {
  console.log(name, age);
}

printName('John', 30);
```

Another example

```js
const multiply = (number) => {
  return number * 2;
}

console.log(multiply(50));
```

If the function just returns something then we can make it more concise

```js
const multiply = (number) => number * 2;

console.log(multiply(50));
```

## Exports & Imports (Modules)

person.js

```js
const person = {
  name: 'John'
}

export default person
```

utility.js

```js
export const clean = () => { ... }

export const baseData = 10;
```

app.js

```js
import person from './person.js'
import prs from './person.js'

import { baseData } from './utility.js'
import { clean } from './utility.js'
import { baseData, clean } from './utility.js'
```

## Classes

```js
class Person {
  name = 'John'           // property
  call = () => { ... }    // method
}
```

Usage

```js
const person = new Person();
person.call()
console.log(person.name)
```

Inheritance

```js
class Person extends Master
```

```js
class Human {
  constructor() {
    this.gender = 'male'
    this.age = 28
  }

  printGender() {
    console.log(this.gender);
  }

  printAge() {
    console.log(this.age);
  }
}

class Person extends Human {
  constructor() {
    super();   // mandatory
    this.name = 'John';
    this.age = 30;
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();
person.printAge();
```

Output

```
"John"
"male"
30
```
