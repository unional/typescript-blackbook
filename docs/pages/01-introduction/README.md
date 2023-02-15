# Introduction

Welcome to the TypeScript Guidebook.

This guidebook supplements the official [TypeScript Handbook](http://www.typescriptlang.org/docs/handbook/basic-types.html) while focusing on *how to get the most out of TypeScript with minimal effort*.

I will cover anything and everything you need when writing TypeScript.
From how to use the language, to coding style and any tool that may be useful.

## Table of Contents

- [What is TypeScript](what-is-typescript.md)

## Design Philosophy

Adapting to a specific style or guidelines is about balancing trade offs.
These trade offs include:

- Coding efficiency
- Readability
- Security
- Performance
- Codebase consistency
- Flexibility / Expressiveness
- Refactorability
- Mergability / Code stability
- Code quality
- Code coverage

Obviously, there is no one size fit all.
But there is one size fit most.
That's why it is still worth while to invest in creating one and adapting to one.

Since it is about tradeoffs,
it is important to understand what are they so that you can make an informed decision on whether to use these guidelines,
or modify them to suite your needs.

### Stay true to JavaScript

You **should** avoid syntax that is not native to JavaScript,
and practices that hinder the power of JavaScript.

When TypeScript first started,
it brings over some syntaxes from various languages such as C# and Java.

However, since TypeScript transpiles to JavaScript,
it cannot get away from the constraints and fundamentals of JavaScript.
TypeScript realizes this and have since shifts it focus to provide types on top of JavaScript,
and rely on the ECMAScript community to introduce new syntax to JavaScript.
This is one of the primary reasons contribute to the success of TypeScript.

### Focus on Coding Efficiency

We will attempt to get high coding efficiency by striking a balance:

- We like to write as few lines of code as possible, while it is still perfectly readable.
- We like to get the benefit of type checks from the compiler and IDE, while we can keep the code dynamic as needed.

Programming language is a tool to express your intent.
We like a tool that is powerful and easy to use at the same time.

### Focus on Tool Compatibility

If you are using Notepad to write code,
you will probably not get much benefit from TypeScript.

In short, TypeScript cannot do much without tools,
and you will not get much benefit out of TypeScript without tools.

These tools include: transpilers, editors and IDEs, linters, formatters, test runners, bundlers, etc.

We will go through them in detail in [`chapter 9`](/docs/pages/09-tooling/README.md).

## Stay Connected

If you have question, opinion, spot any error or outdated material, feel free to open [an issue](https://github.com/unional/typescript-guidebook/issues).

We will try to address them whenever possible.

## Other Chapters

- [JavaScript Syntax](/docs/pages/02-javascript-syntax/README.md)
- [JavaScript Features](/docs/pages/03-javascript-features/README.md)
- [TypeScript Syntax](/docs/pages/04-typescript-syntax/README.md)
- [TypeScript Features](/docs/pages/05-typescript-features/README.md)
