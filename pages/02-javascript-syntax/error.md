# Error

## Naming convention

- Prefer to name your error as describing an invalid condition, without suffixing `Error` at the end.

  > Why?
  > Having a PascalCased name signifies it is a class.
  > Making it describes an invalid condition is sufficient to tell that we are dealing with an error.
  > This is a controversal topic thus this is only a preference.

  ```ts
  // fine
  class FileNotFoundError extends Error { ... }

  // prefer
  class FileNotFound extends Error { ... }
  class PluginDuplicated extends Error { ... }
  ```

- Avoid `InvalidXXX` error.

  > Why?
  > The word `invalid` does not provide any information and is the same as `error`.
  > Provide a more specific name to describe the condition.

- Inherit from `BaseError` from the `make-error` package instead of the default `Error` class.

  > Why?
  > I can't remember the exact reason, but there is a reason I do that.
  > Once I remember why, I'll update this.

