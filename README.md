# Typescript Guidelines

This guideline focus on how to write effective TypeScript with the minimal effort. It touches on coding style, linting, to recommendation on writing good typings and writing TypeScript code.

## Design Principles

- Get the best out of TypeScript
- Stay close to JavaScript as much as possible
- Embrace latest JavaScript syntax
- Cross-compatibility with tools. In my company, we embrace diversity and support team members to use their favorite IDEs. However it is really frustrating when the tools do not get along with each other!
  - IDE / Editors
    - [Visual Studio Code](https://github.com/Microsoft/vscode)
    - [Atom](https://atom.io/)
    - [WebStorm](https://www.jetbrains.com/webstorm/)
  - Linter
    - [tslint](https://github.com/palantir/tslint)

## Disclaimer

Recently I do most of my work in VS Code.
So if you find that some of the guidelines doesn't work well in your IDE,
let me know and we can see how to get it working on your IDE.

## Table of Contents

- [Introduction](pages/01-introduction/README.md)
  - [TypeScript](pages/01-introduction/01-typescript.md)
  - [Resources](pages/01-introductin/02-resources.md)
  - [Design Principles](pages/01-introduction/03-design-principles.md)
- [Files and Projects](pages/02-files-and-projects/README.md)
  - [Files](pages/02-files-and-projects/01-files.md)
  - [tsconfig.json](pages/02-files-and-projects/03-tsconfig.md)
- JavaScript features
  - [Default Function Parameters](pages/03-javascript-features/default-function-parameters.md)
- Language
  - [Accessors](pages/default/accessors.md)
  - [Arrays](pages/default/arrays.md)
  - [Arrow Functions](pages/default/arrow-functions.md)
  - [Classes](pages/default/classes.md)
  - [Decorator](pages/default/decorator.md)
  - [Interfaces](pages/default/interfaces.md)
  - [Namespaces and Modules](pages/default/namespaces-and-modules.md)
  - [Modules](pages/default/modules.md)
- Coding Practice
  - [Testing](pages/default/testing.md)
- Types
  - [Union type](pages/types/union-type.md)
- [Typings](pages/typings/README.md)
  - [Functions](pages/typings/functions.md)
  - [Overloading](pages/typings/overloading.md)
  - [Namespaces and Modules](pages/typings/namespaces-and-modules.md)
  - [Shape of typings](pages/typings/shape-of-typings.md)
  - [tslint configuration](pages/typings/tslint.md)
- Advance types
  - [Recursive Types](pages/advance-types/recursive-types.md)
- Tooling
  - [tslint.json](pages/default/tslint.md)
- **draft** [File structures](pages/default/draft/file-structures.md)
- **draft** [Types](pages/default/draft/types.md)
- **draft** [Objects](pages/default/draft/objects.md)
- **draft** [Destructuring](pages/default/draft/destructuring.md)
- **draft** [Strings](pages/default/draft/strings.md)
- **draft** [Functions](pages/default/draft/functions.md)
- **draft** [Control statements](pages/default/draft/control-statements.md)
- **draft** [Modules](pages/default/draft/modules.md)
- **draft** [Iterators and Generators](pages/default/draft/iterators-and-generators.md)
- **draft** [Properties](pages/default/draft/properties.md)
- **draft** [Variables](pages/default/draft/variables.md)
- **draft** [Hoisting](pages/default/draft/hoisting.md)
- **draft** [Comparison Operators & Equality](pages/default/draft/comparison-operators-and-equality.md)
- **draft** [Blocks](pages/default/draft/blocks.md)
- **draft** [Comments](pages/default/draft/comments.md)
- **draft** [Whitespaces](pages/default/draft/whitespaces.md)
- **draft** [Commas](pages/default/draft/commas.md)
- **draft** [Semicolons](pages/default/draft/semicolons.md)
- **draft** [Type Casting & Coercion](pages/default/draft/type-casting-and-coercion.md)
- **draft** [Naming Conventions](pages/default/draft/naming-conventions.md)
- **draft** [Events](pages/default/draft/events.md)
- **draft** [ECMAScript 6 Styles](pages/default/draft/es2015.md)

## Contributing

- Follow the [`markdown style guide`](pages/markdown.md)
- Each section heading should be neutral, e.g. "`var` keyword" instead of "avoid `var`"

  > Why? The heading would be used as link.
  > So if the style guide suggestion changes,
  > keeping the heading neutral would avoid broken links.
