# jest

[`jest`](https://jestjs.io) is a test runner developed by Facebook.
It is arguably the best test runner out there right now.

One of the most powerful feature of `jest` is its watch mode.

In order to use `jest` with TypeScript, you can use `ts-jest`.

## ts-jest Compiler disgnostics

By default, `ts-jest` presets to enable compiler diagnostics.
This means if your project has TypeScript error, running `jest` will catch it.

- Do not enable compiler diagnostics for local tests.

  > Why? You run tests continuously during development.
  > Enabling compiler disgnostics forces you fix all your TypeScript errors before you can test the runtime errors.
  > This prohibit you from quickly commenting out code to test specific logics.

- Do enable compiler diagnostics for CI tests

  > Why? During CI, you want to minimize work by running `tsc` to build actual code and noter test code.
  > Enabling compiler diagnostics in CI ensure your tests are also free to TypeScript errors.

## jest-watch-suspend

- Use `jest-watch-suspend` to suspend/resume test during watch mode.

  > Why? There are many use cases that this is valuable.
  > For example, you are making some changes to your code and want to change the filtering at the same time.
  > For other scenarios, check out [`jest-watch-suspend`](https://github.com/unional/jest-watch-suspend) README.

## jest-watch-toggle-config

- Use `jest-watch-toggle-config` to add `verbose` and `coverage` functionality to watch mode.
