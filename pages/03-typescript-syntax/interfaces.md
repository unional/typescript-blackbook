# Interface

## interface vs type alias

You **should** prefer type alias over interface.

> Why?

Interface syntax is carried over from other Object Oriented langauages such as Java and C#.

The difference between `type` and `interface` is become very small.
`type` can do most of `interface` can do except merging definitions.

On the other hand, `type` can do quite a lot more compare to `interface`,
and the syntax is more concise and straight forward.

### Reference

- <https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c>
- <https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types>

## Naming

- Name interface in PascalCase.
- Do not prefix interface with `I`.

```ts
// bad
interface myInterface { }
interface IDisposable { }

// good
interface MyInterface { }
interface Disposable { }
```

> Why?

The concept of an interface in TypeScript is much more broad than in C# or Java,
the `IFoo` naming convention is not broadly useful.

[Microsoft Coding Guideline](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)

[Why?](https://github.com/Microsoft/TypeScript-Handbook/blob/4439d3101283adb38dabb2a4c39726986d6bbcb2/pages/Writing%20Definition%20Files.md#naming-conventions)
