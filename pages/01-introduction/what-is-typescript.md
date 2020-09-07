# What is TypeScript

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

It is very active and it is [gaining popularity at a rapid rate](https://www.google.com/trends/explore#q=TypeScript&cmpt=q&tz=Etc%2FGMT%2B7)

You can understand more about TypeScript directly from the [official website](http://www.typescriptlang.org) and the [TypeScript handbook](http://www.typescriptlang.org/docs/handbook/basic-types.html)

## Benefits

- Compatible syntax and semantics as JavaScript.
- Gradual Type system
- Better IDE support
- Support latest ESMCScript syntax

## Alternatives: Other Transpilers

TypeScript allows you to write ES2015+ syntax today by transpiling the code back to ES3/ES5 JavaScript.
There are other transpilers such as [`babel`](http://babeljs.io/) and [`traceur`](https://github.com/google/traceur-compiler) that allows you to do similar things.

`babel` is pretty much winning the transpiler race against `traceur` and support more new syntax compare to `traceur` and `TypeScript`.
In this front, `TypeScript` is trailing behind because on the added complexity of the type system and does not support plugins as `babel` does.
However, `TypeScript` has the benefit of type system and the ability to transpile to ES3 (`babel` and `traceur` only transpile to ES5).

## Alternatives: Type system

[`flow`](https://flowtype.org/) is a static type checker for JavaScript.
