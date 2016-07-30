# Overloading Function Signatures

## Overloading Order

- The most specific overload must be listed first.

  > Why? The compiler will go through the overload from top to bottom and the first one will win.

  ```ts
  // bad
  function foo(something: any): void
  function foo(specific: string, option?: Option): void

  // good
  function foo(specific: string, option?: Option): void
  function foo(somthing: any): void
  ```

