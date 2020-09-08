# any

You **should** avoid asserting type as `any`.

> Why?

`as any` is a very powerful statement telling the compiler to turn off type checking.

> Why not?

There are times that the compiler cannot infer the type correctly,
or the type is specified by other libraries and is incorrect,
or the type is too complicate to create and does not worth the effort to fix.

For these cases, it is okey to use `as any`.
Make sure you make this decision consciously.

---

You **should** avoid annotating method parameters and callbacks as `any`.

> Why?

Annotating function parameters and callbacks as `any` has similar effect as asserting them as `any`.

The compiler might able to infer the type for you through inheritence or function type declaration.
Annotating parameter as `any` overrides that and you loose all benefits of using TypeScript.
