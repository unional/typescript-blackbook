# this

> A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this>

`this` is a messy topic, pun intented.

It is one of the main sources of confusion, frustration, and sleepless nights if you are new to JavaScript.

## When to use

You **should not** use `this`, except inside class.

```ts
// bad
function play() { this.energy-- }

// bad
const gamer = {
  energy: 100,
  play() { this.energy-- }
}

// good
class Gamer {
  energy = 100
  play() { this.energy-- }
}

// good
function createGamer() {
  let energy = 100
  return { play() { energy-- } }
}
```

> Why?

Except arrow function, which do not have its worn `this`,
the value of `this` is determined by how a function is called (runtime binding).

This mean everytime you use `this`,
you are making an assumption on how the user is going to use your code.

This assumption is communicated to the user is very implicit ways:

- should this function be used as a mixin? (first function)
- is this object a coherent instance? (second object)

That is why you **should not** use mixin and should not use `this` altogether.

For class, since it is a build in syntax,
it provides a sufficient clue to the user that you should not pick out the function and use it separately.

```ts
// this will almost guaranteed to fail
const instance = new SomeClass()
const fn = instance.doSomething
fn()
```

And since `this` is the only way in a class to access its own property,
it is ok to use it.
