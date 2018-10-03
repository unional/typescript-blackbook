# Recursive types

To define a recursive type, use this trick:

  ```ts
  type JSONValue = string | number | boolean | JSONObject | JSONArray;

  interface JSONObject {
      [x: string]: JSONValue;
  }

  interface JSONArray extends Array<JSONValue> { }
  ```

The trick is to make the recursive back references within interface types.
This works because resolution of interface base types and interface members is deferred,
whereas resolution of type aliases is performed eagerly.
Ideally you'd be able to replace `JSONArray` with `JSONValue[]` in the definition of `JSONValue`,
but certainly this is a reasonable workaround for now.

- Reference: <https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540>
