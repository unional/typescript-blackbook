# Property Accessor

Property accessor is a JavaScript construct providing access to an object's properties.
There are two property accessor notations: dot notation and the bracket notation.

## Dot notation

Dot notation is the most common property accessor notation.
99% of the time you will use this notation.

## Bracket notation

Bracket notation is commonly used when the property name is not a valid identifier (e.g. containing dash `-`),
or the identifier is a `symbol`.

Bracket notation is also used when the identifier is computed in runtime.

## Getters/Setters

Getters and setters allows you to add additional logic when a property value is retrieved or assigned.

- Add getters and setters only when you need to.

  > Why?
  > Unlike statically typed language,
  > The consumer do not need to change when you convert your property to a getter and setter.
  > This mean no meaningless pass-through getters and setters.

  ```ts
  // bad
  export const x = {
    _age: 10,
    get age() { return this._age },
    set age(newAge: number) { this._age = newAge }
  }

  // good
  export const y = {
    age: 10
  }
  ```

- Avoid adding side effect to getters and setters

  > Why?
  > Getters/setters with side effect are hard to test and maintain.
  > Often times you do not have control or setting expectation on how often your property will be accessed.
  > This means your side effect can get out of hand very easily.
  >
  > Also, since your code will be transpiled,
  > there will be even less control on how often your property will be accessed.
  >
  > Why not?
  > You may want to have side effect for the purpose of measuring.
  > For example you want to use a setter to ensure the property is not being assigned with the same value multiple times,
  > in order to detect wasteful code and improve design and performance.

- getters and setters should not access static dependencies.

  > Why?
  > Same reasoning as above.
  >
  > It is ok to access dependencies if they are not static.
  > i.e. there are ways to stub out the dependencies during test.

### Naming boolean property

- Boolean property should be named as `isVal` or `hasVal`.

  > Why? Avoid confusion when `Val` itself can be evaluated as falsy.

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
