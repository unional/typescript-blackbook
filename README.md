# Typescript Style Guide

A mostly reasonable approach to TypeScript. Based off of [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with some of [my touch](https://github.com/unional/javascript).

## Design Directions
* Get the best out of TypeScript
* Remain as close to JavaScript as possible
* Embrace latest syntax

## Table of Contents
* [Types](#types)
* [References](#references)
* [Objects](#objects)
* [Arrays](#arrays)
* [Destructuring](#destructuring)
* [Strings](#strings)
* [Functions](#functions)
* [Arrow Functions](#arrow-functions)
* [Constructors](#constructors)
* [Modules](#modules)
* [Iterators and Generators](#iterators-and-generators)
* [Properties](#properties)
* [Variables](#variables)
* [Hoisting](#hoisting)
* [Comparison Operators & Equality](#comparison-operators--equality)
* [Blocks](#blocks)
* [Comments](#comments)
* [Whitespace](#whitespace)
* [Commas](#commas)
* [Semicolons](#semicolons)
* [Type Casting & Coercion](#type-casting--coercion)
* [Naming Conventions](#naming-conventions)
* [Accessors](#accessors)
* [Events](#events)
* [ECMAScript 6 Styles](#ecmascript-6-styles)
* [Testing](#testing)
* [Complexity](#complexity)
* [Performance](#performance)
* [Resources](#resources)
* [In the Wild](#in-the-wild)
* [Translation](#translation)
* [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
* [Chat With Us About JavaScript](#chat-with-us-about-javascript)
* [Contributors](#contributors)
* [License](#license)

## Types
###### When you access a primitive type you work directly on its value.

+ `string`
+ `number`
+ `boolean`
+ `null`
+ `undefined`

```ts
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

##### When you access a complex type you work on a reference to its value.

+ `object`
+ `array`
+ `function`

```ts
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

**[⬆ back to top](#table-of-contents)**

## References

##### Use `const` for all of your references; avoid using `var`.

> Why? This ensures that you can't reassign your references (mutation), which can lead to bugs and difficult to comprehend code.

```ts
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

##### If you must mutate references, use `let` instead of `var`.

> Why? `let` is block-scoped rather than function-scoped like `var`.

```ts
// bad
var count = 1;
if (true) {

  count += 1;

}

// good, use the let.
let count = 1;
if (true) {

  count += 1;

}
```

##### Note that both `let` and `const` are block-scoped.

```ts
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

**[⬆ back to top](#table-of-contents)**

## Objects

##### Use the literal syntax for object creation.

```ts
// bad
const item = new Object();

// good
const item = {};
```

##### Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61).

    ```ts
    // bad
    const superman = {
      default: { clark: 'kent' },
      private: true,
    };

    // good
    const superman = {
      defaults: { clark: 'kent' },
      hidden: true,
    };
    ```

##### Use readable synonyms in place of reserved words.

    ```ts
    // bad
    const superman = {
      class: 'alien',
    };

    // bad
    const superman = {
      klass: 'alien',
    };

    // good
    const superman = {
      type: 'alien',
    };
    ```

  <a name="es6-computed-properties"></a>
##### Use computed property names when creating objects with dynamic property names.

  > Why? They allow you to define all the properties of an object in one place.

    ```ts

    const getKey = function(k) {

      return `a key named ${k}`;

    }

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
    ```

  <a name="es6-object-shorthand"></a>
##### Use arrow functions for object methods instead of shorthand properties or an anonymous function.

    ```ts
    // bad
    const atom = {
      value: 1,
      addValue: function (value) {
        return atom.value + value;
      },
    };

    // bad
    const atom = {
      value: 1,
      addValue(value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      value: 1,
      addValue: (value) => atom.value + value
    };
    ```

  <a name="es6-object-concise"></a>
##### Use property value shorthand.

  > Why? It is shorter to write and descriptive.

    ```ts
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
    };
    ```

##### Group your shorthand properties at the beginning of your object declaration.

  > Why? It's easier to tell which properties are using the shorthand.

    ```ts
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      episodeOne: 1,
      twoJedisWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJedisWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

**[⬆ back to top](#table-of-contents)**

## Arrays

##### Use the literal syntax for array creation.

    ```ts
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

##### Use Array#push instead of direct assignment to add items to an array.

    ```ts
    const someStack = [];


    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a>
##### Use array spreads `...` to copy arrays.

    ```ts
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];
    ```
##### To convert an array-like object to an array, use Array#from.

    ```ts
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
    ```

**[⬆ back to top](#table-of-contents)**

## Destructuring

##### Use object destructuring when accessing and using multiple properties of an object.

  > Why? Destructuring saves you from creating temporary references for those properties.

    ```ts
    // bad
    const getFullName = function(user) {

      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;

    }

    // good
    const getFullName = function(obj) {

      const { firstName, lastName } = obj;
      return `${firstName} ${lastName}`;

    }

    // best
    const getFullName = function({ firstName, lastName }) {

      return `${firstName} ${lastName}`;

    }
    ```

##### Use array destructuring.

    ```ts
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;
    ```

##### Use object destructuring for multiple return values, not array destructuring.

  > Why? You can add new properties over time or change the order of things without breaking call sites.

    ```ts
    // bad
    const processInput = function(input) {
      // then a miracle occurs
      return [left, right, top, bottom];

    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    const processInput = function(input) {
      // then a miracle occurs
      return { left, right, top, bottom };

    }

    // the caller selects only the data they need
    const { left, right } = processInput(input);
    ```


**[⬆ back to top](#table-of-contents)**

## Strings

##### Use single quotes `''` for strings.

    ```ts
    // bad
    const name = "Capt. Janeway";

    // good
    const name = 'Capt. Janeway';
    ```

##### Strings longer than 80 characters should be written across multiple lines using string concatenation.
##### Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

    ```ts
    // bad
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

  <a name="es6-template-literals"></a>
##### When programmatically building up strings, use template strings instead of concatenation.

  > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```ts
    // bad
    const sayHi = function(name) {

      return 'How are you, ' + name + '?';

    }

    // bad
    const sayHi = function(name) {

      return ['How are you, ', name, '?'].join();

    }

    // good
    const sayHi = function(name) {

      return `How are you, ${name}?`;

    }
    ```

**[⬆ back to top](#table-of-contents)**


## Functions

##### Use function expressions instead of function declarations.

  > Why? Badly placed Function Declarations are misleading and there are few (if any) situations where you can’t use a Function Expression assigned to a variable instead. See [function-declarations-vs-function-expressions](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/).

    ```ts
    // bad
    function foo() {
    }

    // good
    const foo = function() {
    };

    // good
    const foo = () => {
    };
    ```

##### Function expressions:

    ```ts
    // immediately-invoked function expression (IIFE)
    (() => {
      console.log('Welcome to the Internet. Please follow me.');
    })();
    ```

##### Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.
##### **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

    ```ts
    // bad
    if (currentUser) {

      const test = function() {

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

##### Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

    ```ts
    // bad
    const nope = function(name, options, arguments) {
      // ...stuff...
    }

    // good
    const yup = function(name, options, args) {
      // ...stuff...
    }
    ```

  <a name="es6-rest"></a>
##### Never use `arguments`, opt to use rest syntax `...` instead.

  > Why? `...` is explicit about which arguments you want pulled. Plus rest arguments are a real Array and not Array-like like `arguments`.

    ```ts
    // bad
    const concatenateAll = function() {

      const args = Array.prototype.slice.call(arguments);
      return args.join('');

    }

    // good
    const concatenateAll = function(...args) {

      return args.join('');

    }
    ```

  <a name="es6-default-parameters"></a>
##### Use default parameter syntax rather than mutating function arguments.

    ```ts
    // really bad
    const handleThings = function(opts) {
      // No! We shouldn't mutate function arguments.
      // Double bad: if opts is falsy it'll be set to an object which may
      // be what you want but it can introduce subtle bugs.
      opts = opts || {};
      // ...
    }

    // still bad
    const handleThings = function(opts) {

      if (opts === void 0) {

        opts = {};

      }
      // ...
    }

    // good
    const handleThings = function(opts = {}) {
      // ...
    }
    ```

##### Avoid side effects with default parameters

  > Why? They are confusing to reason about.

  ```ts
  var b = 1;
  // bad
  const count = function(a = b++) {

    console.log(a);

  }
  count();  // 1
  count();  // 2
  count(3); // 3
  count();  // 3
  ```


**[⬆ back to top](#table-of-contents)**

## Arrow Functions

##### When you must use function expressions (as when passing an anonymous function), use arrow function notation.

  > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

  > Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.

    ```ts
    // bad
    [1, 2, 3].map(function (x) {

      return x * x;

    });

    // good
    [1, 2, 3].map((x) => {

      return x * x;

    });

    // good
    [1, 2, 3].map((x) => x * x;);
    ```

##### If the function body fits on one line and there is only a single argument, feel free to omit the braces and parentheses, and use the implicit return. Otherwise, add the parentheses, braces, and use a `return` statement.

  > Why? Syntactic sugar. It reads well when multiple functions are chained together.

  > Why not? If you plan on returning an object.

    ```ts
    // good
    [1, 2, 3].map(x => x * x);

    // good
    [1, 2, 3].reduce((total, n) => {
      return total + n;
    }, 0);
    ```

**[⬆ back to top](#table-of-contents)**


## Constructors

##### Always use `class`. Avoid manipulating `prototype` directly.

  > Why? `class` syntax is more concise and easier to reason about.

    ```ts
    // bad
    function Queue(contents = []) {

      this._queue = [...contents];

    }
    Queue.prototype.pop = function() {

      const value = this._queue[0];
      this._queue.splice(0, 1);
      return value;

    }


    // good
    class Queue {

      constructor(contents = []) {

        this._queue = [...contents];

      }

      pop() {

        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;

      }

    }
    ```

##### Use `extends` for inheritance.

  > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

    ```ts
    // bad
    const inherits = require('inherits');
    function PeekableQueue(contents) {

      Queue.apply(this, contents);

    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function() {

      return this._queue[0];

    }

    // good
    class PeekableQueue extends Queue {

      peek() {

        return this._queue[0];

      }

    }
    ```

##### Methods can return `this` to help with method chaining.

    ```ts
    // bad
    Jedi.prototype.jump = function() {

      this.jumping = true;
      return true;

    };

    Jedi.prototype.setHeight = function(height) {

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


##### It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

    ```ts
    class Jedi {

      contructor(options = {}) {

        this.name = options.name || 'no name';

      }

      getName() {

        return this.name;

      }

      toString() {

        return `Jedi - ${this.getName()}`;

      }

    }
    ```

<a name="ts-classes"></a>
##### Typescript classes placeholder.

**[⬆ back to top](#table-of-contents)**


## Modules

##### Use modules (`import`/`export`) over a non-standard module system.

  > Why? Modules are the future, let's start using the future now.

    ```ts
    // bad
    const AirbnbStyleGuide = require('./AirbnbStyleGuide');
    module.exports = AirbnbStyleGuide.es6;

    // ok
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    export default AirbnbStyleGuide.es6;

    // best
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

#####And do not export directly from an import.

  > Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

    ```ts
    // bad
    // filename es6.js
    export { es6 as default } from './airbnbStyleGuide';

    // good
    // filename es6.js
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

#####Use TypeScript module import for non-ES6 libraries with type definitions. Check [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) for available type definition files.

  > Why? This provides type information from external modules when available

    ```ts
    // bad
    /// <reference path="lodash/lodash.d.ts" />
    var lodash = require('lodash')

    // good
    /// <reference path="lodash/lodash.d.ts" />
    import lodash = require('lodash')
    ```

#####Group module imports by type and then alphabetic by variable name. Follow these rules for ordering your module imports:
    + External libraries with type definitions
    + Internal typescript modules with wildcard imports
    + Internal typescript modules without wildcard imports
    + External libraries without type definitions


  > Why? This makes your import section consistent across all modules.

    ```ts
    // bad
    /// <reference path="../typings/tsd.d.ts" />
    import * as Api from './api';
    import _ = require('lodash');
    var Distillery = require('distillery-js');
    import Partner from './partner';
    import * as Util from './util';
    import Q = require('Q');
    var request = require('request');
    import Customer from './customer';

    // good
    /// <reference path="../typings/tsd.d.ts" />
    import _ = require('lodash');
    import Q = require('Q');
    import * as Api from './api';
    import * as Util from './util';
    import Customer from './customer';
    import Partner from './partner';
    var Distillery = require('distillery-js');
    var request = require('request');
    ```

**[⬆ back to top](#table-of-contents)**

## Iterators and Generators

##### Don't use iterators. Prefer JavaScript's higher-order functions like `map()` and `reduce()` instead of loops like `for-of`.

  > Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side-effects.

    ```ts
    const numbers = [1, 2, 3, 4, 5];

    // bad
    let sum = 0;
    for (let num of numbers) {

      sum += num;

    }

    sum === 15;

    // good
    let sum = 0;
    numbers.forEach((num) => sum += num);
    sum === 15;

    // best (use the functional force)
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
    ```

##### Don't use generators for now.

  > Why? They don't transpile well to ES5.

**[⬆ back to top](#table-of-contents)**


## Properties

##### Use dot notation when accessing properties.

    ```ts
    const luke = {
      jedi: true,
      age: 28,
    };

    // bad
    const isJedi = luke['jedi'];

    // good
    const isJedi = luke.jedi;
    ```

##### Use subscript notation `[]` when accessing properties with a variable.

    ```ts
    const luke = {
      jedi: true,
      age: 28,
    };

    const getProp = function(prop) {

      return luke[prop];

    }

    const isJedi = getProp('jedi');
    ```

**[⬆ back to top](#table-of-contents)**


## Variables

##### Always use `const` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

    ```ts
    // bad
    superPower = new SuperPower();

    // good
    const superPower = new SuperPower();
    ```

##### Use one `const` declaration per variable.

    > Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs.

    ```ts
    // bad
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // bad
    // (compare to above, and try to spot the mistake)
    const items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // good
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
    ```

##### Group all your `const`s and then group all your `let`s.

  > Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

    ```ts
    // bad
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // good
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

##### Assign variables where you need them, but place them in a reasonable place.

  > Why? `let` and `const` are block scoped and not function scoped.

    ```ts
    // good
    function() {

      test();
      console.log('doing stuff..');

      //..other stuff..

      const name = getName();

      if (name === 'test') {

        return false;

      }

      return name;

    }

    // bad - unnessary function call
    function(hasName) {

      const name = getName();

      if (!hasName) {

        return false;

      }

      this.setFirstName(name);

      return true;

    }

    // good
    function(hasName) {

      if (!hasName) {

        return false;

      }

      const name = getName();
      this.setFirstName(name);

      return true;

    }
    ```

**[⬆ back to top](#table-of-contents)**


## Hoisting

##### `var` declarations get hoisted to the top of their scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let). It's important to know why [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

    ```ts
    // we know this wouldn't work (assuming there
    // is no notDefined global variable)
    function example() {

      console.log(notDefined); // => throws a ReferenceError

    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example() {

      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;

    }

    // The interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example() {

      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;

    }

    // using const and let
    function example() {

      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;

    }
    ```

##### Anonymous function expressions hoist their variable name, but not the function assignment.

    ```ts
    function example() {

      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {

        console.log('anonymous function expression');

      };

    }
    ```

##### Named function expressions hoist the variable name, not the function name or the function body.

    ```ts
    function example() {

      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {

        console.log('Flying');

      };

    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {

      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {

        console.log('named');

      }

    }
    ```

##### Function declarations hoist their name and the function body.

    ```ts
    function example() {

      superPower(); // => Flying

      function superPower() {

        console.log('Flying');

      }

    }
    ```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](#table-of-contents)**


## Comparison Operators & Equality

##### Use `===` and `!==` over `==` and `!=`.
##### Conditional statements such as the `if` statement evaulate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

    + **Objects** evaluate to **true**
    + **Undefined** evaluates to **false**
    + **Null** evaluates to **false**
    + **Booleans** evaluate to **the value of the boolean**
    + **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    + **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

    ```ts
    if ([0]) {
      // true
      // An array is an object, objects evaluate to true
    }
    ```

##### Use shortcuts.

    ```ts
    // bad
    if (name !== '') {
      // ...stuff...
    }

    // good
    if (name) {
      // ...stuff...
    }

    // bad
    if (collection.length > 0) {
      // ...stuff...
    }

    // good
    if (collection.length) {
      // ...stuff...
    }
    ```

##### For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

**[⬆ back to top](#table-of-contents)**


## Blocks

##### Use braces with multi-line blocks or omit braces for two line blocks.

    ```ts
    // bad
    if (test) return false;

    // ok
    if (test)
      return false;

    // good
    if (test) {

      return false;

    }

    // bad
    function() { return false; }

    // good
    function() {

      return false;

    }
    ```

##### If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your
    `if` block's closing brace.

    ```ts
    // bad
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // good
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```

  ##### If you're using multi-line blocks with `if` and `else`, do not omit curly braces.

    > Why? Omitting curly braces in multi-line blocks can easily cause unexpected behavior.

      ```ts
      // bad
      if (test)
        thing1();
        thing2();
      else
        thing3();

      // good
      if (test) {
        thing1();
        thing2();
      } else {
        thing3();
      }
      ```


**[⬆ back to top](#table-of-contents)**


## Comments

##### Use `/** ... */` for multi-line comments. Include a description, specify types and values for all parameters and return values.

    ```ts
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    const make = function(tag) {

      // ...stuff...

      return element;

    }

    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param {String} tag
     * @return {Element} element
     */
    const make = function(tag) {

      // ...stuff...

      return element;

    }
    ```

##### Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.

    ```ts
    // bad
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    const getType = function() {

      console.log('fetching type...');
      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;

    }

    // good
    const getType = function() {

      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;

    }
    ```

##### Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME -- need to figure this out` or `TODO -- need to implement`.

##### Use `// FIXME:` to annotate problems.

    ```ts
    class Calculator {

      constructor() {
        // FIXME: shouldn't use a global here
        total = 0;
      }

    }
    ```

##### Use `// TODO:` to annotate solutions to problems.

    ```ts
    class Calculator {

      constructor() {
        // TODO: total should be configurable by an options param
        this.total = 0;
      }

    }
    ```

**[⬆ back to top](#table-of-contents)**


## Whitespace

##### Use soft tabs set to 2 spaces.

    ```ts
    // bad
    function() {

    ∙∙∙∙const name;

    }

    // bad
    function() {

    ∙const name;

    }

    // good
    function() {

    ∙∙const name;

    }
    ```

##### Place 1 space before the leading brace.

    ```ts
    // bad
    const test = function(){

      console.log('test');

    }

    // good
    const test = function() {

      console.log('test');

    }

    // bad
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });

    // good
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });
    ```

##### Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space before the argument list in function calls and declarations.

    ```ts
    // bad
    if(isJedi) {

      fight ();

    }

    // good
    if (isJedi) {

      fight();

    }

    // bad
    const fight = function () {

      console.log ('Swooosh!');

    }

    // good
    const fight = function() {

      console.log('Swooosh!');

    }
    ```

##### Set off operators with spaces.

    ```ts
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

##### End files with a single newline character.

    ```ts
    // bad
    (function(global) {
      // ...stuff...
    })(this);
    ```

    ```ts
    // bad
    (function(global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```ts
    // good
    (function(global) {
      // ...stuff...
    })(this);↵
    ```

##### Use indentation when making long method chains. Use a leading dot, which
    emphasizes that the line is a method call, not a new statement.

    ```ts
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // bad
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // good
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // bad
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // good
    const leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .classed('led', true)
        .attr('width', (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);
    ```

##### Leave a blank line after the opening of a block and before the closing of a block

  ```ts
  // bad
  if (foo) {
    return bar;
  }

  // good
  if (foo) {

    return bar;

  }

  // bad
  const baz = function(foo) {
    return bar;
  }

  // good
  const baz = function(foo) {

    return bar;

  }
  ```

##### Leave a blank line after blocks and before the next statement.

    ```ts
    // bad
    if (foo) {

      return bar;

    }
    return baz;

    // good
    if (foo) {

      return bar;

    }

    return baz;

    // bad
    const obj = {
      foo() {
      },
      bar() {
      },
    };
    return obj;

    // good
    const obj = {
      foo() {
      },

      bar() {
      },
    };

    return obj;
    ```


**[⬆ back to top](#table-of-contents)**

## Commas

##### Leading commas: **Nope.**

    ```ts
    // bad
    const story = [
        once
      , upon
      , aTime
    ];

    // good
    const story = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    const hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

##### Additional trailing comma: **Yup.**

  > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](es5/README.md#commas) in legacy browsers.

    ```ts
    // bad - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb graph', 'mordern nursing']
    }

    // good - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'mordern nursing'],
    }

    // bad
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes = [
      'Batman',
      'Superman'
    ];

    // good
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes = [
      'Batman',
      'Superman',
    ];
    ```

**[⬆ back to top](#table-of-contents)**


## Semicolons

##### **Yup.**

    ```ts
    // bad
    (function() {

      const name = 'Skywalker'
      return name

    })()

    // good
    (() => {

      const name = 'Skywalker';
      return name;

    })();

    // good (guards against the function becoming an argument when two files with IIFEs are concatenated)
    ;(() => {

      const name = 'Skywalker';
      return name;

    })();
    ```

    [Read more](http://stackoverflow.com/a/7365214/1712802).

**[⬆ back to top](#table-of-contents)**


## Type Casting & Coercion

##### Perform type coercion at the beginning of the statement.
##### Strings:

    ```ts
    //  => this.reviewScore = 9;

    // bad
    const totalScore = this.reviewScore + '';

    // good
    const totalScore = String(this.reviewScore);
    ```

##### Use `parseInt` for Numbers and always with a radix for type casting.

    ```ts
    const inputValue = '4';

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

##### If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](http://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

    ```ts
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

##### **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](http://es5.github.io/#x4.3.19), but Bitshift operations always return a 32-bit integer ([source](http://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

    ```ts
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

##### Booleans:

    ```ts
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // good
    const hasAge = !!age;
    ```

**[⬆ back to top](#table-of-contents)**


## Naming Conventions

##### Avoid single letter names. Be descriptive with your naming.

    ```ts
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```

##### Use camelCase when naming objects, functions, and instances.

    ```ts
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    const c = function() {}

    // good
    const thisIsMyObject = {};
    const thisIsMyFunction = function() {}
    ```

##### Use PascalCase when naming constructors, classes, modules, or interfaces.

    ```ts
    // bad
    function user(options) {

      this.name = options.name;

    }

    const bad = new user({
      name: 'nope',
    });

    // good
    module AperatureScience {

      class User {

        constructor(options) {

          this.name = options.name;

        }

      }

    }

    const good = new AperatureScience.User({
      name: 'yup',
    });
    ```

##### Use snake_case when naming object properties.

    ```ts
    // bad
    const panda = {
      firstName: 'Mr.',
      LastName: 'Panda'
    }

    // good
    const panda = {
      first_name: 'Mr.',
      Last_name: 'Panda'
    }
    ```

##### Use a leading underscore `_` when naming private properties.

    ```ts
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // good
    this._firstName = 'Panda';
    ```

##### Don't save references to `this`. Use arrow functions or Function#bind.

    ```ts
    // bad
    function foo() {

      const self = this;
      return function() {

        console.log(self);

      };

    }

    // bad
    function foo() {

      const that = this;
      return function() {

        console.log(that);

      };

    }

    // good
    function foo() {

      return () => {
        console.log(this);
      };

    }
    ```

##### If your file exports a single class, your filename should be exactly the name of the class.
    ```ts
    // file contents
    class CheckBox {
      // ...
    }
    export default CheckBox;

    // in some other file
    // bad
    import CheckBox from './checkBox';

    // bad
    import CheckBox from './check_box';

    // good
    import CheckBox from './CheckBox';
    ```

##### Use camelCase when you export-default a function. Your filename should be identical to your function's name.

    ```ts
    function makeStyleGuide() {
    }

    export default makeStyleGuide;
    ```

##### Use PascalCase when you export a singleton / function library / bare object.

    ```ts
    const AirbnbStyleGuide = {
      es6: {
      }
    };

    export default AirbnbStyleGuide;
    ```


**[⬆ back to top](#table-of-contents)**


## Accessors

##### Accessor functions for properties are not required.
##### If you do make accessor functions use getVal() and setVal('hello').

    ```ts
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

##### If the property is a boolean, use isVal() or hasVal().

    ```ts
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

##### It's okay to create get() and set() functions, but be consistent.

    ```ts
    class Jedi {

      constructor(options = {}) {

        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);

      }

      set(key, val) {

        this[key] = val;

      }

      get(key) {

        return this[key];

      }

    }
    ```

**[⬆ back to top](#table-of-contents)**


## Events

##### When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass a hash instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```ts
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // do something with listingId
    });
    ```

    prefer:

    ```ts
    // good
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // do something with data.listingId
    });
    ```

  **[⬆ back to top](#table-of-contents)**


## jQuery

##### Prefix jQuery object variables with a `$`.

    ```ts
    // bad
    const sidebar = $('.sidebar');

    // good
    const $sidebar = $('.sidebar');
    ```

##### Cache jQuery lookups.

    ```ts
    // bad
    function setSidebar() {

      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });

    }

    // good
    function setSidebar() {

      const $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });

    }
    ```

##### For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
##### Use `find` with scoped jQuery object queries.

    ```ts
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();
    ```

**[⬆ back to top](#table-of-contents)**


## Type Annotations

<a name="ts-type-annotations"></a>
##### Type annotations placeholder.

<a name="ts-generics"></a>
##### Use "T" for the type variable if only one is needed.

```ts
function identify<T>(arg: T): T {

    return arg;

}
```

##### If more than one type variable is required, start with letter "T" and name your variable in alphabetical sequence.

```ts
function find<T, U extends Findable>(needle: T, haystack: U): U {

  return haystack.find(needle)

}
```

##### When possible, allow the compiler to infer type of variables.

```ts
// bad
const output = identify<string>("myString");

// good
const output = identity("myString");
```

##### When creating factories using generics, be sure to include the constructor function in the type.

```ts
function create<t>(thing: {new(): T;}): T {

  return new thing();

}
```

**[⬆ back to top](#table-of-contents)**


## Interfaces

<a name="ts-interfaces"></a>
##### Interface placeholder.

**[⬆ back to top](#table-of-contents)**


## Organization

<a name="ts-modules"></a>
##### 1 file per logical component, and each file should be divided into logical divisions via modules.

  ```ts
  module Automobile {

    module Honda {

    }

  }
  ```

##### Export one main module per file so it can be required by other files.

  ```ts
  module Automobile {

    // hidden module, will not be accessible via "require"
    Honda {

    }

    // public module, will be accessible via "require"
    export Ford {

      export function vroom() {

        console.log('vroom!');

      }

    }

  }

  export default Automobile;
  ```

- [28.3](#28.3) <a name='28.3'></a> Order your code (alphabetically) in the following order within each module:
   - var
   - export var
   - let
   - export let
   - const
   - export const
   - interface
   - export interface
   - function
   - export function
   - class
   - export class
   - module
   - export module

**[⬆ back to top](#table-of-contents)**

## ECMAScript 6 Styles

##### This is a collection of links to the various es6 features.

1. [Arrow Functions](#arrow-functions)
1. [Classes](#constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

**[⬆ back to top](#table-of-contents)**

## Typescript 1.5 Styles

##### This is a collection of links to the various es6 features.

1. [Type Annotations](#ts-type-annotations)
1. [Interfaces](#ts-interfaces)
1. [Classes](#ts-classes)
1. [Modules](#ts-modules)
1. [Generics](#ts-generics)

**[⬆ back to top](#table-of-contents)**

## License

(The MIT License)

Copyright (c) 2014 Airbnb

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**
