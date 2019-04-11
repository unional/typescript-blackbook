## Variables

In TypeScript and ES2015, you have three choice for referencing a variable: `var`, `let`, and `const`.

`let` and `const` are block-scoped.

`var` is function-scoped.

```ts
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
  var c = 1
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // 1
```

### `const` keyword

- Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html)

> Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

```typescript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;

// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
```

- Use one `const` declaration per variable. eslint: [`one-var`](http://eslint.org/docs/rules/one-var.html) jscs: [`disallowMultipleVarDecl`](http://jscs.info/rule/disallowMultipleVarDecl)

> Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs.

```typescript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

- [13.3](#13.3) <a name='13.3'></a> Group all your `const`s and then group all your `let`s.

> Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```typescript
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

- [13.4](#13.4) <a name='13.4'></a> Assign variables where you need them, but place them in a reasonable place.

> Why? `let` and `const` are block scoped and not function scoped.

```typescript
// bad - unnecessary function call
function checkName(hasName) {
  const name = getName();

  if (hasName === 'test') {
    return false;
  }

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}

// good
function checkName(hasName) {
  if (hasName === 'test') {
    return false;
  }

  const name = getName();

  if (name === 'test') {
    this.setName('');
    return false;
  }

  return name;
}
```

### `let` keyword
- If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html) jscs: [`disallowVar`](http://jscs.info/rule/disallowVar)

> Why? `let` is block-scoped rather than function-scoped like `var`.

```typescript
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

### `var` keyword
Before ES2015, `var` is the only reference option.

- Avoid using `var` in later code because it would lead to unexpected results.
+ Use `var` if your application needs to be very sensitive on memory consumption. But most of the time this is not an issue
