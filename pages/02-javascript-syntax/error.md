# Error

> `Error` objects are thrown when runtime errors occur.
> The `Error` object can also be used as a base object for user-defined exceptions.

## Naming convention

You **should** name your error as describing an invalid condition,
without adding `Error` suffix at the end.

> Why?

Having a PascalCased name signifies it is a class.
Making it describes an invalid condition is sufficient to tell that we are dealing with an error.

```ts
// ok
class FileNotFoundError extends Error { ... }

// better
class FileNotFound extends Error { ... }
class PluginDuplicated extends Error { ... }
```

---

You **should not** name your error as `InvalidSomthing`.

> Why?

The word `invalid` does not provide any information and is the same as `error`.
Provide a more specific name to describe the condition.

## Base Class

You **should** inherit your error from the one of the error packages:

- [`iso-error`](https://www.npmjs.com/package/iso-error)
- [`make-error`](https://www.npmjs.com/package/make-error)
- [`make-error-cause`](https://www.npmjs.com/package/make-error-cause)

> Why?

The standard `Error` class does not work with `instanceof`.
All of the packages above works correctly.

## References

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error>
