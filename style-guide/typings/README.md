# Typescript Style Guide for writing typings
([typings](https://github.com/typings/typings)) is the successor of tsd/DefinitelyTyped. Typings provides typed definitions to JavaScript libraries so that they can be used in TypeScript.

## Design Directions
* Enable typing author to stay true to the shape of the library as much as possible.
* Use latest TypeScript best practices in writing typings
* Cross-compatible with tools. It's frustrating when your tools does not get along with each other!
  * IDE / Editors
    * [Visual Studio Code](https://github.com/Microsoft/vscode)
    * [Atom](https://atom.io/)
    * [WebStorm](https://www.jetbrains.com/webstorm/)
  * Linter
    * [tslint](https://github.com/palantir/tslint)

## Table of Contents
* [tslint.json](tslint.md)

## Contributing
* 3rd level Sub headings (`###`) for each section (except in [tslint.md](tslint.md))
* Each section heading should be neutral, e.g. "`var` keyword" instead of "avoid `var`"
  * The heading would be used as link. So if the style guide suggestion changes, keeping the heading neutral would avoid broken links.
