# Converting JavaScript to TypeScript

TypeScript is JavaScript with type system.

One of the best feature TypeScript has is its gradual type system,
meaning you can incrementally add type declaration to your code.
It is not an all or nothing deal.

## Converting a single JavaScript file

It is pretty rare that your program only have one single JavaScript file.
If you do, then most likely it is some quick scripts, testing code, or you are not doing your code justise!

But converting a single JavaScript file serves as a good entry point so we will start here.

Most JavaScript files can be converted to TypeScript file with minimal changes.
In fact, often times the only thing you need to do is to change the file extension from `.js` to `.ts`.

Here are few common things that you may encounter:

### `never` array

TypeScript compiler will perform control flow analysis on your code to infer the type of the variables.
One side effect of that is when you have the following code:

```js
var someArray = []
someArray.push('a')
```

It will infer the type of `someArray` as `never[]` because it cannot determine what is the type of the array at declaration.

Therefore, you will see an error saying `Argument of type <something> is not assignable to parameter of type 'never'`

To fix that, you can do one of the following:

```ts
var someArray: string[] = []
// or
var someArray: any[] = []
// or
var someArray = [] as string[]
```

### `x` is not assignable to `y`

Besides the array case above, you may also see some `'x' is not assignable to 'y'` errors.

It is also cause by TypeScript trying to infer the type of the variables.

For these errors, it is best to go over them in detail before casting the variable to `any` to supress the error. There is a chance that they TypeScript compiler actually find some edge cases in your code that you didn't handle.

For example:

```ts
var person = { firstname: "John", lastname: "Doe" }

var customer = { firstName: 'Rick', lastName: 'Don' }

// Type '{ firstname: string; lastname: string; }' is not assignable to type '{ firstName: string; lastName: string; }'.
// Property 'firstName' is missing in type '{ firstname: string; lastname: string; }'
customer = person
```

Overall, these errors should not be hard to handle.

If you encounter complicated type issues and you do not have tests, then the best bet is to cast it as `any` and once you add tests in, you can fix the type issues.

## Converting a JavaScript Project

When converting a JavaScript Project to TypeScript,
most of the time you just need to configure TypeScript to transpile the code back to JavaScript by specifying a `tsconfig.json`

Below is a sample `tsconfig.json` that covers the key options.
Note that there are other things you would like to configure.
This config only serves as a starting point.

```js
{
  "compilerOptions": {
    // Use this if you want to only convert part of the project to TypeScript as a start.
    "allowJs": true,
    "module": "commonjs",
    "moduleResolution": "node",
    // Putting the transpiled files in another folder
    "outDir": "dist",
    // Or transpile to 'es6' or 'esnext' if you uses 'Babel' to do further processing.
    "target": "es5"
  }
}
```
