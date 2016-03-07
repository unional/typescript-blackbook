## Blocks

### Single-line blocks
- Avoid single-line for now

> Why? Currently tslint does not support it well (https://github.com/palantir/tslint/issues/822)

### Multi-line blocks
- Use braces with all multi-line blocks.

tslint: [`curly`](tslint.md#curly-native)

```typescript
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() { return false; }

// good
function bar() {
  return false;
}
```

### `else` clause placement
- If you're using multi-line blocks with `if` and `else`, put `else` on the next line after your `if` block's closing brace.

> Code folding works better in this case.

```typescript
// bad
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}
```

### Switch case
- Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

> Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

eslint rules: [`no-case-declarations`](http://eslint.org/docs/rules/no-case-declarations.html).

```typescript
// bad
switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}

// good
switch (foo) {
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  case 4:
    bar();
    break;
  default: {
    class C {}
  }
}
```
