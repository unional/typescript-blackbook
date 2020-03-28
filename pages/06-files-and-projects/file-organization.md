# File Organization

## Types and Interfaces

- Create a `types.ts` or `interfaces.ts` at the top for public interfaces and types.

  > Why?
  > Types are common culprit of coupling.
  > While TypeScript is structural typed,
  > defining and referencing types can easily leads to circular reference.

- Create a `typesInternal.ts` or `interfacesInternal.ts` for shared internal types.
