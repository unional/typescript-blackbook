# Object Destructuring

## Destructuring in Function Argument

Use object destructuring in function argument to pick to what you need.

  > Why?
  > When you have a function taking in an object,
  > the object may contain things that you don't need.
  >
  > Using object spread give the reader a clear statement that those are the only properties you are interested in.
  >
  > This is expecially valuable if the interface of the parameter is defined by other code.

  ```ts
  // bad
  function foo(someInstance) {
    return someInstance.a + someInstance.b
  }

  // good
  function foo({ a, b }) { return a + b }
  ```

  > Why not? If you do functional programming,
  > you are likely to use a `context` parameter as the first parameter,
  > and you need to pass the context down to other functions.
  >
  > In this case, you need all properties in the `context` variables,
  > not only those you use within your function.
