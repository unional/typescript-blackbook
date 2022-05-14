# Functions

## Function declarations

- Use function declarations instead of function expressions. jscs: [`requireFunctionDeclarations`](http://jscs.info/rule/requireFunctionDeclarations)

> Why? Function declarations are named, so they're easier to identify in call stacks. Also, the whole body of a function declaration is hoisted, whereas only the reference of a function expression is hoisted. This rule makes it possible to always use [Arrow Functions](#arrow-functions) in place of function expressions.

```typescript
// bad
const foo = function () {
};

// good
function foo() {
}
```

## IIFE

- Immediately invoked function expressions: eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife.html) jscs: [`requireParenthesesAroundIIFE`](http://jscs.info/rule/requireParenthesesAroundIIFE)

> Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

```typescript
// immediately-invoked function expression (IIFE)
;(function () {
console.log('Welcome to the Internet. Please follow me.');
}());
```

## Function location

- Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-loop-func`](http://eslint.org/docs/rules/no-loop-func.html)

- **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

```typescript
// bad
if (currentUser) {
function test() {
  console.log('Nope.');
}
}

// good
let test;
if (currentUser) {
test = () => {
  console.log('Yup.');
};
}
```

## Function parameters

- Do not align parameters

tslint: [`align`](tslint.md#align)

> Why? It doesn't work well across IDE yet

```ts
// bad
function nope(name: string, // other parameters
              options: any) {
  // ...stuff...
}

// good
function nope(name: string, // other parameters
options: any) {
  // ...stuff...
}
```

- Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```typescript
// bad
function nope(name, options, arguments) {
// ...stuff...
}

// good
function yup(name, options, args) {
// ...stuff...
}
```

<a name="es6-rest"></a>

- Never use `arguments`, opt to use rest syntax `...` instead. [`prefer-rest-params`](http://eslint.org/docs/rules/prefer-rest-params)

> Why? `...` is explicit about which arguments you want pulled. Plus rest arguments are a real Array and not Array-like like `arguments`.

```typescript
// bad
function concatenateAll() {
const args = Array.prototype.slice.call(arguments);
return args.join('');
}

// good
function concatenateAll(...args) {
return args.join('');
}
```

- Never mutate parameters. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```typescript
// bad
function f1(obj) {
obj.key = 1;
};

// good
function f2(obj) {
const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
};
```

- Never reassign parameters. eslint: [`no-param-reassign`](http://eslint.org/docs/rules/no-param-reassign.html)

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```typescript
// bad
function f1(a) {
a = 1;
}

function f2(a) {
if (!a) { a = 1; }
}

// good
function f3(a) {
const b = a || 1;
}

function f4(a = 1) {
}
```

## Default parameters

<a name="es6-default-parameters"></a>

- Use default parameter syntax rather than mutating function arguments.

```typescript
// really bad
function handleThings(opts) {
// No! We shouldn't mutate function arguments.
// Double bad: if opts is falsy it'll be set to an object which may
// be what you want but it can introduce subtle bugs.
opts = opts || {};
// ...
}

// still bad
function handleThings(opts) {
if (opts === void 0) {
  opts = {};
}
// ...
}

// good
function handleThings(opts = {}) {
// ...
}
```

- Avoid side effects with default parameters.

> Why? They are confusing to reason about.

```typescript
var b = 1;
// bad
function count(a = b++) {
console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

- Always put default parameters last.

```typescript
// bad
function handleThings(opts = {}, name) {
// ...
}

// good
function handleThings(name, opts = {}) {
// ...
}
```

## Function constructor

- Never use the Function constructor to create a new function.

> Why? Creating a function in this way evaluates a string similarly to eval(), which opens vulnerabilities.

```typescript
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```

- [7.11](#7.11) <a name="7.11"></a> Spacing in a function signature.

> Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

```typescript
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};
```

## Method chaining

- Methods can return `this` to help with method chaining.

```typescript
// bad
Jedi.prototype.jump = function () {
  this.jumping = true;
  return true;
};

Jedi.prototype.setHeight = function (height) {
  this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
```

## Function arguments

- Do not align arguments

tslint: [`align`](tslint.md#align)

> Why? It doesn't work well across IDE yet

```ts
// bad
someFunction(arg1,
             arg2,
             arg3,
             arg4);

// good
someFunction(arg1, arg2,
arg3, arg4);
```
