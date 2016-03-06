## Accessors

- [1](#1) <a name='1'></a> Accessor functions for properties are not required.
- [2](#2) <a name='2'></a> Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').

```typescript
// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);
```

- [3](#3) <a name='3'></a> If the property is a `boolean`, use `isVal()` or `hasVal()`.

```typescript
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```

- [4](#4) <a name='4'></a> It's okay to create get() and set() functions, but be consistent.

```typescript
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
