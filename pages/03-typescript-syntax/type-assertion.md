# Type Assertion

There are two ways to do type assertion.

```ts
let x = 1 as any
let y = <any>x
```

- Prefer type declaration over type assertion when possible.

  > Why?
  > Type assertion basically telling the compiler that
  > "hey, I know you thought `x` is `X`, but I know it is actually `Y`, so let's treat it as `Y`.
  > For Type declaration, it is like
  > "hey, I think `x` is `Y`, let me know if you think otherwise".
  >
  > Therefore, type assertion should be use sparsingly.
  > Only when you sure that the compiler is wrong or at location where you know you don't care (i.e. `as any`)

- Use the `as Y` syntax instead of `<Y>` syntax.

  > Why?
  > The `<Y>` spelling is also used in generic as well as in JSX.
  > It is better to use the `as` syntax to avoid confusion.

  ```ts
  // bad
  let x = <Partial<SomeType>>y

  // good
  let x = y as Partial<SomeType>
  ```

