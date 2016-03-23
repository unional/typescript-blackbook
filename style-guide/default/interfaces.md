# Interface

### Naming
- Name interface in PascalCase.
- Do not prefix interface with `I`.

  > Why? The concept of an interface in TypeScript is much more broad than in C# or Java, the `IFoo` naming convention is not broadly useful.

  tslint: [`interface-name`](tslint.md#interface-name-native)

  [Microsoft Coding Guideline](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)

  [Why?](https://github.com/Microsoft/TypeScript-Handbook/blob/4439d3101283adb38dabb2a4c39726986d6bbcb2/pages/Writing%20Definition%20Files.md#naming-conventions)

  ```ts
  // bad
  interface myInterface { }
  interface IDisposable { }

  // good
  interface MyInterface { }
  interface Disposable { }
  ```
