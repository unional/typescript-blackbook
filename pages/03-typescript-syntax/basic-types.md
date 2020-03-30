# Basic Types

Basic types in TypeScript are `number`, `boolean`, `string`, `object`, `symbol`, `null`, `undefined`, `Array`, `Tuple`, `enum`, `any`, `void`, `never`, and `unknown`.

## any

`any` describes the type of variables that we do not know when we are writing an application.

- Avoid `as any`.

  > Why?
  > `as any` is a very powerful statement telling the compiler to turn off type checking for that specific variable.
  >
  > Why not?
  > There are tiems that the compiler cannot infer the type correctly,
  > or the type is incorrect,
  > or the type is too complicate to create and does not worth the effort to fix.
  > For these cases, it is okey to use `as any`.
  > Make sure you make this decision consciously.

- Avoid `: any` in method parameters and callbacks.

  > Why?
  > `: any` in function parameters and callbacks has similar effect to `as any`.
  > The compiler might able to infer the type for you through inheritence or function type declaration.
  >
  > Marking the parameter with `: any` overrides that and you loose all benefits of using TypeScript.
  > This is a major reason why I turn off the compiler option `noImplicitAny`.

## References

- <https://www.typescriptlang.org/docs/handbook/basic-types.html>
