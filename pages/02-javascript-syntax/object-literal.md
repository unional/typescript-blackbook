# Object literal

- Beware that when TypeScript transpile code to ES5, methods defined in an object do not have the `prototype` property.

  > Why?
  > You should not rely of this at all.
  > But this is worth mentioning as it remind us that that are limitations and nuances when we deal with backward compatibility.

  ```ts
  // In ES2015
  const obj = { f() { } }
  console.log(obj.f.prototype) // undefined

  // In ES5, this is transpiled to
  var obj = { f: function() { } }
  console.log(obj.f.prototype) // {}
  ```
