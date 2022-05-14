# Decorator

> Decorators make it possible to annotate and modify classes and properties at design time.

## When To Use

You **may** use decorator with some reservation.

> Why?

The decorator proposal has been in stage 2 for many years.
While it is actively used as TypeScript and Babel supports it,
it may change in the future.

## Hoisting

When using decorator, you **must** beware of `hoisting`.

```ts
import { autoinject } from 'aurelia-dependency-injection'

@autoinject()
class Depender {
  constructor(private dep: Dependent) { }
}

class Dependent {
}
```

> Why?

Decorator executes at load time, at the point of declaration.
This means all references it uses must be defined prior to the call.

The following code doesn't work:

`dep` parameter will receive `undefined` because the variable of class `Dependent` is hoisted but not the initialization.

Therefore, when the `@autoinject()` is called on the class `Depender`, the `Dependent` variable is still undefined.

## References

- <https://github.com/wycats/javascript-decorators>
- <https://github.com/tc39/proposal-decorators>
- <http://javascript.info/tutorial/decorators>
- <https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.bziwbnnow>
