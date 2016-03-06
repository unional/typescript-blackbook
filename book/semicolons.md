## Semicolons

### Trailing semicolons
- **Yup.** eslint: [`semi`](http://eslint.org/docs/rules/semi.html) jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

```typescript
// bad
(function () {
  const name = 'Skywalker'
  return name
})()

// good
(() => {
  const name = 'Skywalker';
  return name;
}());
```

### Leading semicolons
- **yup** for IIFEs

> Why? guards against the function becoming an argument when two files with IIFEs are concatenated

```typescript
// good ()
;(() => {
  const name = 'Skywalker';
  return name;
}());
```

[Read more](http://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).
