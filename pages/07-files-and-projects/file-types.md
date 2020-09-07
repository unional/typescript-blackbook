# Files

Out of the box, the TypeScript compiler can understand TypeScript files (`*.ts`) and TypeScript declaration files (aka typings files, `*.d.ts`).
Optionally, it can understand TypeScript React files (`*.tsx`) and JavaScript files (`*.js`)

But do you know that each of them can also be categorized as either a "script file" or a "module file"?

## TypeScript file

Doesn't need much explanation.
When you name your file with `.ts` extension, your IDE and compiler will treat it as TypeScript file.

## TypeScript declaration file

TypeScript declaration files are used to describe the "typings" of some JavaScript libraries.
They are the files created in [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/) or Repositories referenced in [`typings` registry](https://github.com/typings/registry).

They are "amibent" in nature, meaning it does not contain any actual implementation code.

The formal term for these files is "file with ambient module declaration".
You will see why in a moment.

## Script file

Script files are files that do not have any top level `import`/`export` declaration.
Sometimes they are also called as "global files" because they are global in nature.
For example, the following script file will create a global variable `window.Foo` in browser environment:

```ts
namespace Foo {
  export const SOMETHING = 1;
};
```

Thus TypeScript files or declaration files written in this form could be described as "script file" or "script file wtih ambient module declaration"

## Module file

Module files are files that has one or more top level `import`/`export` declaration.
Being a module file means its content is not global, and it is align with what a `module` means in ECMAScript.

Thus TypeScript files or declaration files written in this form could be described as "module file" or "module file wtih ambient module declaration"

## References

<https://github.com/Microsoft/TypeScript-Handbook/issues/242>
<https://github.com/Microsoft/TypeScript-Handbook/issues/180>
