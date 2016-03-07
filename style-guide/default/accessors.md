## Accessors

There are several ways and style in accessing value within an object:

```ts
let car = new Car();
car.color;
car['color'];
car.getColor();
car.setColor('green');
car.color();
car.color('green');
```

### Accessor functions
- Accessor functions for properties are not required.

### Getters/Setters
- Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').

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

### Boolean property
- If the property is a `boolean`, use `isVal()` or `hasVal()`.

> Why? The property may be set with a value that evaluate as falsy.

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

### Get/Set function
- It's okay to create get() and set() functions, but be consistent.

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
