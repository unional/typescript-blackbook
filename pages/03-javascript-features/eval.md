# eval

`eval()` is evil.

You probably heard of this when you first learn JavaScript.
But how evil it is?

We will find out in this section.

```ts
const result = eval('this')
function foo() {
  const value = 'secret'
  eval('console.log(value)')
}
```
