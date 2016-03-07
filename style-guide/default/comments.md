## Comments

### Multi-line
- Use `/** ... */` for multi-line comments. Include a description, specify types and values for all parameters and return values.
- Conform to jsdoc. tslint: [`jsdoc-format`](tslint.md#jsdoc-format-native)

```typescript
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

  // ...stuff...

  return element;
}

// good
/**
  * make() returns a new element
  * based on the passed in tag name
  *
  * @param {String} tag
  * @return {Element} element
  */
function make(tag) {

  // ...stuff...

  return element;
}
```

### Single-line
- Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

```typescript
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}

// also good
function getType() {
  // set the default type to 'no type'
  const type = this._type || 'no type';

  return type;
}
```

- There should be a space after `//` to improve readability.
- You can start the comment in upper case or lower case.

tslint: [`comment-format`](tslint.md#comment-format-native)

```ts
//bad
// good

// okey
// Okey too
```


### Prefixings
- Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

### FIXME prefix
- Use `// FIXME:` to annotate problems.

```typescript
class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn't use a global here
    total = 0;
  }
}
```

### TODO prefix
- Use `// TODO:` to annotate solutions to problems.

```typescript
class Calculator extends Abacus {
  constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
```
