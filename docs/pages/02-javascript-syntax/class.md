# Class

> The class declaration creates a new class with a given name using prototype-based inheritance.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class>

## When To Use

**Should not** use `class` unless there is a clear reason.

**Should** use function composition when possible.

**Should** utilize closure when possible.

> Why?

More than 95% of the time,
you do not need inheritance.

Inheritance is a strong coupling between two pieces of code: the parent and child class.

There are many alternative ways to get the same benefits that inheritance can provide, and more 😎.
There are also disadvantages in using `class` and using `private` and `protected` modifier.

---

**May** prefer `class` over create function in public API.

```ts
// bad
export type SqlConnection { ... }
export function createSqlConnection(...) { ... }

// good
export class SqlConnection { ... }
```

> Why?

If you need to expose some function for the user to create an object,
you **may** consider using `class` instead.

This is a exception to the suggestions above.
If you expect your users to pass the created object around,
that means they need to reference the type of the created object in their functions.

Using `class` in this case provides a clean interface to the user.

## Naming Convention

**Must** create class in pascal case.

```ts
// bad
class myClass { }

// good
class MyClass { }
```

## `class` keyword

**Should** prefer using `class` keyword over manipulating `prototype` directly.

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

> Why?

The `class` syntax is more concise and easier to reason about.

## Empty constructor

**Should** not delcare empty constructor.

```ts
// bad
class Jedi {
  constructor() {}
}

// bad
class Rey extends Jedi {
  constructor(...args) {
    super(...args);
  }
}

// good
class Rey extends Jedi {
  name: string
  constructor(...args) {
    super(...args);
    this.name = 'Rey';
  }
}
```

> Why?

Classes have a default constructor if one is not specified.
Empty constructor function or constructor that just calling the parent class is unnecessary.

## member visibility

**Must not** use the `public` modifier to member.

```ts
// bad
class Baby {
  public cry() { ... }
}

// good
class Baby {
  laugh() { ... }
}
```

> Why?

TypeScript borrow this from Java and C# which is completely unnecessary in JavaScript.

---

**Should** prefer JavaScript private field `#prop` over `private` modifier.

> Why?

The `private` modifier is TypeScript only feature.
The property is still fully accessible in JavaScript.

---

**Must not** use JavaScript private field if you are targing ES5 or lower.

> Why?

Private field `#prop` cannot be downleveled to ES5 or lower.

### References

- <https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#ecmascript-private-fields>

## member ordering

Static members **must** be placed before instance members.
Public members **must** be placed before private members.
Properties **should** be place before methods.

**Should not** group properties and methods based on interface.

> Why?

Able to find out what the class can do is more important than where those methods come from.
TypeScript is structural typed,
unlike C#, there is no interface casting.
So it does not matter which interface the class is implementing.

Properties and methods of mixins **should** be placed at the end.

> Why?

Currently mixin needs to declare dummy properties for it to work.
It doesn't make sense to spread it around.

But in general, you should avoid mixins.
