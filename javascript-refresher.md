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

ES6 syntax

```js
class Human {
  gender = 'male';
  age = 28;

  printGender = () => {
    console.log(this.gender);
  }

  printAge = () => {
    console.log(this.age);
  }
}

class Person extends Human {
  name = 'John';
  age = 30;

  printName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();
person.printAge();
```

## Spread and Rest Operators

**Spread**

Used to split up array elements OR object properties

```js
const newArray = [...oldArray, 1, 2]
const newObject = [...oldObject, newProp: 5]
```

```js
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
```

Output

```
[1, 2, 3, 4]
```

If `...` is not used then

```
const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];

console.log(newNumbers);
```

Output

```
[[1, 2, 3], 4]
```

On object properties

```js
const person = {
  name: 'John'
};

const newPerson = {
  ...person,
  age: 30
}

console.log(newPerson);
```

Output

```
[object Object] {
  age: 30,
  name: "John"
}
```

**Rest**

Used to merge a list of function arguments into an array

```js
function sortArgs(...args) {
  return args.sort();
}
```

```js
const filterFunc = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filterFunc(1, 2, 3));
```

Output

```
[1]
```

## Destructuring

Easily extract array elements or object properties and store them in variables.

**Array Destructuring**

```js
[a, b] = ['Hello', 'World'];
console.log(a);  // Hello
console.log(b);  // World
```

```js
const numbers = [1, 2, 3];

[num1, num2] = numbers;
console.log(num1, num2);   // 1 2

[num1, , num3] = numbers;
console.log(num1, num3);   // 1 3
```

**Object Destructuring**

```js
{name} = {name: 'John', age: 30}
console.log(name);   // John
console.log(age);    // undefined
```

## Reference Types

Objects and Arrays are reference types.

```js
const person = {
  name: 'John'
};

const secondPerson = person;

person.name = 'Tom';

console.log(secondPerson);
```

Output

```
[object Object] {
   name: "Tom"
}
```

```js
const person = {
  name: 'John'
};

const secondPerson = {
  ...person    // make a new copy using Spread operator
};

person.name = 'Tom';

console.log(secondPerson);
```

Output

```
[object Object] {
   name: "John"
}
```
