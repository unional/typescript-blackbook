# Object Destructuring

## Destructuring in Function Argument

You **should** use object destructuring in function argument to pick out what you need.

```ts
// bad
function foo(prop) {
  return prop.a + prop.b
}

// good
function foo({ a, b }) { return a + b }
```

> Why?

When you have a function taking in an object,
the object may contain things that you don't need.

Using object spread give the reader a clear statement that those are the only properties you are interested in.

This is expecially valuable if the interface of the parameter is defined by other code.

> Why not?

If you do functional programming,
you are likely to use a `context` parameter as the first parameter,
and you need to pass the context down to other functions.

In this case, you need all properties in the `context` variables,
not only those you use within your function.

In that case, do object destructuring in the function body.

```ts
function foo(context) {
  const { io, record } = context
}
```

Of course, if the parameter is an instance of a class, or an object that aware of `this`,
then you cannot destructure.
