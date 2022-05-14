# Object literal

You **should not** use the `prototype` property of methods in object literal.

> Why?

Since your code can be transpiled to different targets (either by you or by your consumer),
the `prototype` property can have different values.

You should not rely of this at all.
But this is worth mentioning as it remind us that that are limitations and nuances when we deal with backward compatibility.

```ts
// In ES2015
const obj = { f() { } }
obj.f.prototype // undefined

// In ES5, this is transpiled to
var obj = { f: function() { } }
obj.f.prototype // {constructor: f}
```
