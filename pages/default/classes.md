# Classes

## Naming Convention

- Name class in pascal case

  tslint: [`class-name`](tslint.md#class-name-native)

  ```ts
  // bad
  class myClass { }

  // good
  class MyClass { }
  ```

## `class` keyword

- Always use `class`. Avoid manipulating `prototype` directly.

  > Why? `class` syntax is more concise and easier to reason about.

  ```ts
  // bad
  function Queue(contents = []) {
    this._queue = [...contents];
  }
  Queue.prototype.pop = function () {
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

## `extends` keyword

- Use `extends` for inheritance.

  > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

  ```ts
  // bad
  const inherits = require('inherits');
  function PeekableQueue(contents) {
    Queue.apply(this, contents);
  }
  inherits(PeekableQueue, Queue);
  PeekableQueue.prototype.peek = function () {
    return this._queue[0];
  }

  // good
  class PeekableQueue extends Queue {
    peek() {
      return this._queue[0];
    }
  }
  ```


## Overriding `toString()`

- It's okay to write a custom toString() method, just make sure it works successfully and causes no side effects.

  ```ts
  class Jedi {
    constructor(options = {}) {
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

## Constructor arguments with Dependency Injection

- If your class can be inherited, do not assume the arguments will not be undefined even if it is not optional. Provide default value or guard throwing.

  > Why? Currently sub-class does not require to create constructor. It errors at call site but if you use dependency injection there is no call site thus the error won't be seen. Therefore your class can be called without any argument.
  > Should guard against this case and throw meaningful error.

  ```ts
  // bad
  class Foo {
    constructor(options: { paramA: number }) {
      // Will throw Cannot read property 'paramA' of undefined for Boo.
      this.something = options.paramA + 1;
    }
  }
  class Boo extends Foo { }

  // good
  class Foo {
    constructor(options: { paramA: number }) {
      if (!options) {
        throw new Error('Foo requires constructor argument "options"');
      }
    }
  }
  class Boo extends Foo { }
  ```

  <https://github.com/Microsoft/TypeScript/issues/9523>

## Empty constructor

- Classes have a default constructor if one is not specified.
- Empty constructor function or one that just delegates to a parent class is unnecessary.

  ```typescript
  // bad
  class Jedi {
    constructor() {}

    getName() {
      return this.name;
    }
  }

  // bad
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
    }
  }

  // good
  class Rey extends Jedi {
    constructor(...args) {
      super(...args);
      this.name = 'Rey';
    }
  }
  ```

## member visibility

- Do not need to explicitly add `public` to members.

  tslint: [`member-access`](tslint.md#member-access-native)

### member ordering

- Place public members before private members.
- Place static members before instance members.
- Place properties before methods.

- Do not group properties and methods based on interface

  > Why? Able to find out what the class can do is more important than where those methods come from.

- Place properties and methods of mixins at the end.

  > Why? Currently mixin needs to declare dummy properties for it to work.
  > It doesn't make sense to spread it around.

  tslint: [`member-ordering`](tslint.md#member-ordering-native)
