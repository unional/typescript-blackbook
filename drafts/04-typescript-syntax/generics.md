# generics

## Using generics

You **should** rely on type inference for generic types.

❌ bad

```ts
[1, 2, 3].reduce<string>((p, v) => p += v, '')
```
