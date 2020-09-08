# unknown

Introduced in: TypeScript 3.0

The `unknown` type is a top type in the TypeScript type system.

In essence, use it to describe values that you do not know the type (hence `unknown`).
It ensures you performing type checks before using the values.

## `unknown` on `catch` clauses

Introduced in TypeScript 4.0

Before TypeScript 4.0, the variable in the `catch` clause is always `any` and cannot be typed explicitly.
In TypeScript 4.0 it can now be typed as either `any` or `unknown`.

You **must** type the variable in the `catch` clause as `unknown`.

❌bad

```ts file=../../examples/unknown/standard/catch-clauses.bad.ts
try { throw new Error() }
catch (e) {
  // handle error
}

try { throw new Error() }
catch (e: any) {
  // handle error
}
```

✔️ good

```ts file=../../examples/unknown/standard/catch-clauses.good.ts
try { throw new Error() }
catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
```

✔️ good

```ts file=../../examples/unknown/standard/catch-clauses.type-plus.good.ts
import { checkUnknown } from 'type-plus'
class ErrorA extends Error { }
class ErrorB extends Error { }

try { throw new ErrorA() }
catch (e: unknown) {
  if (checkUnknown(e, ErrorA)) {
    // handle ErrorA
  } else if (checkUnknown(e, ErrorB)) {
    // handle ErrorB
  } else {
    // handle generic Error
  }
}
```

> Why?

The `unknown` type is a better type to use in the `catch` clause than `any`.

TypeScript only allows you to type the variable as `any` or `unknown` in the `catch` clause.
This is because the `try` clause can make function calls
and there is no way to control or know what kind of error (or non-error) those functions could throw.

That's why when handling error you should not assume the type would be `Error` or an explicit list that you expect.
And `unknown` is a better type than `any` to help enforcing this fact.

### Additional Readings

- <https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#unknown-on-catch>

## Additional Readings

- <https://github.com/Microsoft/TypeScript/pull/24439>
- <https://mariusschulz.com/blog/the-unknown-type-in-typescript>
- <https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/>
