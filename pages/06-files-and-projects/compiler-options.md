# Compiler Options

In this section, I'll talk about the compiler options and which option I recommend and why.

You should configure most of these options in `tsconfig.json`.

For a full list of compiler options, please go to <https://www.typescriptlang.org/docs/handbook/compiler-options.html>.

## allowSyntheticDefaultImports

Allow default imports from modules with no default export. This does not affect code emit, just typechecking.

This flag allows you to use the `import x from 'x'` syntax when importing commonjs modules.
This is introduced before the `esModuleInterop` flag.

- Do not use this flag. Use `esModuleInterop` instead.

  > Why?
  > Since this flag does not affect code emit, it creates a discrepency between the typings and the actual emitted code.
  > This causes a systematic issue at consumption rendering your package is not usable in certain ecosystem.
  > The only place that make sense to use this flag is at the application level.
  > But even that, you can just use `esModuleInterop` instead.
  >
  > You can learn more about this in <https://github.com/Microsoft/TypeScript/issues/7398>

## esModuleInterop

Enable TypeScript emitted code to work with code emitted by the Babel ecosystem.

This flag is introduced in TypeScript 2.7.

Prior to 2.7, when importing commonjs module,
you have to do either `import x = require('x')` or `import * as x from 'x'`.

This seems to be a reasonable approach but it does not work when the primary object being exported is a primitive or a value with call/construct signatures.
ECMAScript stated the namespace record is a plain object (<https://github.com/Microsoft/TypeScript/issues/16093>).

That is why this flag is introduced.

- Enable this flag

## noErrorTruncation

Do not truncate error messages.

- Enable this flag.

  > Why?
  > Most type errors are very deep,
  > and the most important piece of information is at the end of the message.
  >
  > Why not?
  > If you are in the process of converting your JavaScript project to TypeScript,
  > you can turn off this flag if you have many errors.
  > But remember the existence of this flag so that you can get the full error detail when you need them.

## noImplicitAny

Raise error on expressions and declarations with an implied `any` type.
This flag will be enabled if you use the `strict` flag.

If this flag is enabled, the control flow analysis will able to perform additional tricks to make it work even better.

For example, `const x = []` will have type `any[]` instead of `never[]` when `noImplicitAny` is enabled.

- Prefer to disable this flag

  > Why?
  > While enabling this flag has its benefit,
  > This flag requires either all function parameters must be typed or define as `any` explicitly.
  >
  > Requiring all parameters to be typed contradicts with my design principle of being efficient.
  >
  > For example, at the time of writing, `jest` plugin system does not provide the type of `jestHook` below:

  ```ts
  export class WatchSuspendPlugin {
    apply(jestHook) { // error: `jestHook` is implicitly any
      jestHooks.shouldRunTestSuite(() ={
        return !this.suspend
      })
    }
  }
  ```

  > To be comply with `noImplicitAny`,
  > I have to either define the type myself which requires work and is more complicated,
  > or I will just silent the error with `jestHook: any`,
  > which is a bad practice in general (see [basic-types](/pages/03-typescript-syntax/basic-types.md#any) for more information)
  >
  > I will have tests to cover all the use cases so I am not concerned about bugs due to the lack of types,
  > and I prefer to have the flexibilty to omit the type as I see fit,
  > or add the type when I find the type will be reused elsewhere and worth creating.

## strictNullCheck

- Enable this flag

## strict

- Enable this flag

  > Help wanted
  > Mostly due to `noImplicitAny`.
  > Other strict check does not seem to be an issue.

## noUnusedParameters

- Perfer to turn off this flag

  > Why?
  > There are valid cases to have uninterested parameters in the function signature.
  > For example, callbacks, polymorphic functions.
  > When you have this flag turned on,
  > You have to prefix them with `_`,
  > which could be problematic if you refactor down the road,
  > and also hinder readability if this is a public function.
  > I value readability of the code above other factors,
  > that's why I prefer to leave this flag off.
  >
  > Why not?
  > If you want to avoid accidental mistakes as much as possible,
  > fell free to turn on this flag,
  > and prefix uninterested parameters with `_`.

References:

- <https://github.com/Microsoft/TypeScript/issues/9458>
