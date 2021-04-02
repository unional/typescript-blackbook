# Code Organization

This section talks about how should we organize our code.

There are two purposes in code organization:

- make it easy for us to understand the code, and
- make it easy for us to find the code

We should strive to make the code easy to understand first, and then make it easy to find. Here is why:

To make the code easy to understand, the code must be cognitively coherent, and the flow of the code should follow our chain of thoughts.

As the saying goes, "reads like a well-written prose."

On the other hand, to make the code easy to find, all we need is to make it well organized.

As long as there is a clear direction on how to discover the code, we will able to find them.

And finding the code means several things:

- searchable by folder names, file names, class names, method names, variable names.
- locatable from the file and folder structure.
- can be referenced from usage to declaration, and vice versa.

Many projects I have seen follows the organization of the framework they use by copying the sample projects from those framework.

Keep in mind that the purpose of those sample project is do demonstrate the capabilities of the frameworks. So it is very natural that the organization of the code is based on the concepts of those frameworks.

We should not organize our applications and libraries using those structure. There is a conflict of interest.

While those structure helps us easily find our code, it does not help us to understand our code.

Of course, some frameworks provide tools to help you do code generation and they may impose certain folder structures on you.

By all means use them if you find them useful, and see if you can customize them to fit your needs. If they can't, see if you can file an issue or create a pull request to add that customization. Most of these tools are opened source or have channels for your to raise your need.

Also, you can still keep a large part of your code from the frameworks, which is always a great thing to do.

## Folder organization

- Instead of organizing your folder by the type of code they contain (e.g. `controllers`, `actions`, `views`), organize them as if they are components (e.g. `authentication`, `logging`, `search`, `application`).

  > Why? When you create a new project, it is common that you need to do multiple things and it was fine to have them all placed together.
  > But as your project matures, other people would like to use part of your code but not others.
  > If you organize your folders by their purpose, it is much more likely that they are less coupled to each other, and is easier to break it into their own project.
  > In essence, your code will be more conforming to the Common Closure Principle and Common Reuse Principle.

## Folder name casing

You **should** name your folder in param-case over camelCase or PascalCase.

> Why?

As you organize the code as components, they should be treated as components.
The convention for component naming is param-case.

---

You **should** place your public code at the top of the file.

In JavaScript, it was very common to place your private function at the top of the files, after imports, for example:

```js
const path = require('path')

function localFunction() { ... }

function publicFunction() {
  ...
  localFunction()
}

module.exports = publicFunction
```

There were several reasons for that:

- avoid hoisting confusion
- similar to Java class (private method first, public second)
- separate declaration from export

However, this hinder readability as we have to go to the bottom of the file to figure out what is public, and trace backward to understand the code.

It is just not the way our human brain works.

Instead, you should keep your local function at the bottom, and prefer function declaration over function expression.

```ts
import path from 'path'

export interface Foo {  }

// compromise for hoisting
const localVariable = { ... }

export function doSomething(): Foo {
  localFunction()
}

function localFunction() { ... }
```
