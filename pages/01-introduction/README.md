# Introduction

Welcome to the TypeScript Guidelines.

This guidelines suppliment the official [TypeScript Handbook](http://www.typescriptlang.org/docs/handbook/basic-types.html) while focusing on *how to get the most out of TypeScript with minimal effort*.

It will cover anything and everything you need when writing TypeScript, from how to use the language, to coding style and any tool that may be useful.

## Table of Contents

- [What is TypeScript](/pages/01-introduction/what-is-typescript.md)
- [TypeScript Resources](/pages/01-introduction/typescript-resources.md)

## Design Philosophy

Adapting code to a specific style or guide lines is about balancing tradeoffs.
These tradeoff includes:

- Coding efficiency
- Readability
- Security
- Performance
- Codebase consistency
- Flexibility / Expressiveness
- Refactorability
- Mergability / Code stability
- Code quality
- Test coverage

Obviously, there is no one size fit all.
But there is one size fit most.
That's why it is still worth while to invest in creating one and adapting to one.

Since it is about tradeoffs,
it is important to understand what are they so that you can make an informed decision on whether to use this guidelines, or modify it to suite your need.

- Stay true to JavaScript

  > Why?
  > When TypeScript first started,
  > it brings over some syntax from C#.
  > However, since TypeScript transpile to JavaScript,
  > It cannot get away from the constriant and fundamentals of JavaScript.
  > TypeScript realizes this and have since shifts it focus to provide types on top of JavaScript,
  > and rely of the ECMAScript community to introduce new syntax to JavaScript.
  > This is one of the primary reasons contribute to the success of TypeScript.

- Use TypeScript as a gradual type system on top of JavaScript.

  > Why?
  > This is the most powerful aspect of TypeScript,
  > that you do not strictly required to declare every type.
  > The compiler and language server did a great job at inferring types.
  > Often time much more comprehenive and accurate then you try to define them yourselves.
  > Embrase and enjoy the benefit out of it

- Focus on code efficiency

  > Why?
  > Let's face it. We all enjoy the freedom of a dynamically typed language.
  > We can hack up some code easily in dynamically typed language while it is a pain to do so in statically typed language.
  > We would like to preserve this benefit when coding in TypeScript while getting the benefit of having a more expressive type system.
  > That's why I tend to not enforce fully type, soundness, or code style that is slower to write (while not impacting readability).

- Focus on tool compatibility
  - IDE / Editors
    - [Visual Studio Code](https://github.com/Microsoft/vscode)
    - [Atom](https://atom.io/)
    - [WebStorm](https://www.jetbrains.com/webstorm/)
  - Linter
    - [tslint](https://github.com/palantir/tslint)

  > Why?
  > If you are using NotePad to write code,
  > you will probably not getting much benefit from TypeScript.
  > The reason why TypeScript work so well is that it allow tools to leverage its power.
  > So it is reasonable to assume you will be using some tools, code editors, or IDEs to help you write code more efficiently.
  > Since everyone, every team have different preference in their favorite tool of choice,
  > I make certain decisions so that your code will work well with different tools and the tools will play nice with each other.

In short, I tend to use TypeScript as a tool rather than a language.

TypeScript serves a few values to me:

- Provide type information which allows me to access them easily during consumption.
- Quickly discover type errors during refactoring
- Provide basic type assurance at compile time so that I don't have to write additional tests to cover those cases (while accepting the risk of not catching those issues and crash if used directly in JavaScript and the consumer do not honor the typings provided).

## Stay Connected

If you have question, opinion, spot any error or outdated material, feel free to open issues at <https://github.com/unional/typescript-guidelines/issues>

I'll try to address them whenever possible.
