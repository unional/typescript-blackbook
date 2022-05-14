# type alias

- Use `type` instead of `interface` to combine types.

  ```ts
  interface Fizz { fizz: string }
  interface Buzz { buzz: string }

  // bad
  interface FizzBuzz extends Fizz, Buzz { }

  // good
  type FizzBuzz = Fizz | Buzz
  ```
