# Accessors

### Bracket notation
- Only use bracket notation if the object is of type `any` and the property is dynamic.
- 99% of the time you don't need to do this.

### Getters/Setters
- Write getters/setters only to enable cross-cutting concerns. They:
  - **must be pure**
  - cannot have any side effect.
  - cannot access dependencies.

  > Why? Getters/setters with side effect are hard to test and maintain.
  > It is even worse if it invokes dependencies.

  ```ts
  // bad
  {
    get age() {
      ajax('He asked for my age!');
      return this.realAge;
    }

    set age(value) {
      // I refuse to get old
      if (value <= 25) {
        this.realAge = value;
      }
    }
  }

  // good
  {
    get age() {
      return Math.round(this.bioAge);
    }
    set age(value) {
      this.bioAge = value;
    }
  }
  ```

### Boolean property
- Boolean property should be named as `isVal` or `hasVal`.

  > Why? Avoid confusion when `Val` itself can be evaluate as falsy.

  ```typescript
  // bad
  if (!dragon.age) {
    return false;
  }

  // good
  if (!dragon.hasAge) {
    return false;
  }
  ```
