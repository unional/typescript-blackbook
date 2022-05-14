# Compiler Options

In this section, I'll talk about the compiler options and which option I recommend and why.

You should configure most of these options in `tsconfig.json`.

For a full list of compiler options, please go to <https://www.typescriptlang.org/docs/handbook/compiler-options.html>.

## allowSyntheticDefaultImports

Allow default imports from modules with no default export. This does not affect code emit, just type checking.

This flag allows you to use the `import x from 'x'` syntax when importing commonjs modules.
This is introduced before the `esModuleInterop` flag.

You **must not** use this flag.
Use `esModuleInterop` instead.

> Why?

Since this flag does not affect code emit, it creates a discrepancy between the typings and the actual emitted code.
This causes a systematic issue at consumption rendering your package is not usable in certain ecosystem.
The only place that make sense to use this flag is at the application level.
But even that, you can just use `esModuleInterop` instead.
You can learn more about this in <https://github.com/Microsoft/TypeScript/issues/7398>

## emitDecoratorMetadata

You **must** enable this option if you are using decorators.

## esModuleInterop

Enable TypeScript emitted code to work with code emitted by the Babel ecosystem.

This flag is introduced in TypeScript 2.7.

Prior to 2.7, when importing commonjs module,
you have to do either `import x = require('x')` or `import * as x from 'x'`.

This seems to be a reasonable approach but it does not work when the primary object being exported is a primitive or a value with call/construct signatures.
ECMAScript stated the namespace record is a plain object (<https://github.com/Microsoft/TypeScript/issues/16093>).

That is why this flag is introduced.

You **must** enable this flag.

## experimentalDecorators

You **must** enable this option if you are using decorators.

## forceConsistentCasingInFileNames

You **should** enable this option.

## importHelpers

You **should** enable this option if your project is...

## isolatedModules

Makes sure your code can be transpiled with `babel`.

You **may** enable this option if you are also using `babel`.

Or you can keep it off and let `babel` reports the error.

To investigate: will it flag `namespace` usage?

- <https://devblogs.microsoft.com/typescript/typescript-and-babel-7/>

## keyofStringsOnly

You **should not** enable this flag.

## useDefineForClassFields

You **should** enable this flag.
But you need to test your code to catch any breaking changes.

- <https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#the-usedefineforclassfields-flag-and-the-declare-property-modifier>

## noErrorTruncation

Do not truncate error messages.

- Enable this flag.

> Why?

Most type errors are very deep,
and the most important piece of information is at the end of the message.

> Why not?

If you are in the process of converting your JavaScript project to TypeScript,
you can turn off this flag if you have many errors.
But remember the existence of this flag so that you can get the full error detail when you need them.

## noImplicitAny

Raise error on expressions and declarations with an implied `any` type.
This flag will be enabled if you use the `strict` flag.

If this flag is enabled, the control-flow analysis will able to perform additional tricks to make it work even better.

For example, `const x = []` will have type `any[]` instead of `never[]` when `noImplicitAny` is enabled.

You **must** enable this flag.
This is enabled by default with `strict` option.

> Why?

## noImplicitReturns

## noImplicitThis

## noStrictGenericChecks

## noUnusedLocals

## noUnusedParameters

## resolveJsonModule

## skipLibCheck

## strictNullCheck

- Enable this flag

## strict

- Enable this flag

> Help wanted
> Mostly due to `noImplicitAny`.
> Other strict check does not seem to be an issue.

## noUnusedParameters

- Prefer to turn off this flag

> Why?

There are valid cases to have uninterested parameters in the function signature.
For example, callbacks, polymorphic functions.
When you have this flag turned on,
You have to prefix them with `_`,
which could be problematic if you refactor down the road,
and also hinder readability if this is a public function.
I value readability of the code above other factors,
that's why I prefer to leave this flag off.

> Why not?

If you want to avoid accidental mistakes as much as possible,
fell free to turn on this flag,
and prefix uninterested parameters with `_`.

## types

You **should not** set this most of the time.

## typeRoots

You **should not** set this most of the time.

## References

- <https://github.com/Microsoft/TypeScript/issues/9458>
