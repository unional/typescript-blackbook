# Async await

## Return await

- avoid `return await`.

tslint: ['no-return-await'](../default/tslint.md#no-return-await)

  > Why?
  > `return await` will cause your code to wait for the promise instead of propagating the promist to the caller.
  > This is a common mistake made by novice and most likely is a mistake.
  >
  > Why Not?
  > In very rare case, you might actually want this behavior.
  > In that case, supress the warning.

  ```ts
  // bad
  async function foo() {
    return await doSomethingAsync()
  }

  // good
  async function foo() {
    return doSomethingAsync()
  }
  ```
