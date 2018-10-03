# Decorator

Decorator is a ES2015 feature.

<http://javascript.info/tutorial/decorators>
<https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.bziwbnnow>
<https://github.com/wycats/javascript-decorators>

## Be aware of hoisting

The following code doesn't work:

```ts
import { autoinject } from 'aurelia-dependency-injection'

@autoinject()
class Depender {
  constructor(private dep: Dependent) { }
}

class Dependent {
}
```

`dep` parameter will receive `undefined` because the variable of class `Dependent` is hoisted but not the initialization.

Therefore, when the `@autoinject()` is called on the class `Depender`, the `Dependent` variable is still undefined.
