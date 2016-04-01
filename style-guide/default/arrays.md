# Arrays

### Array creation
- Use the literal syntax for array creation.

  ```ts
  // bad
  const items = new Array<string>();

  // good
  const items = string[];
  const items = ['a', 'b', 'c'];
  ```

### Type declaration
- Use the literal syntax for type declaration. Unless the type is complex

  > Why? The `Array<>` syntax is visually clear that your type is an array.
  > It also provides better focus on the internal type.
  
  ```ts
  // bad
  const items: Array<string>;
  const items: { people: Person[] }[]
  
  // either is fine
  const items: (string | string[])[]
  const items: Array<string | string[]>;

  // good
  const items: string[];
  const items: Array<{ people: Person[] }>;
  ```

### Inserting
- Use `.push()` instead of direct assignment to add items to an array.

  ```typescript
  const someStack = [];

  // bad
  someStack[someStack.length] = 'abracadabra';

  // good
  someStack.push('abracadabra');
  ```

### Array spreads
- Use array spreads `...` to copy arrays.

  ```typescript
  // bad
  const len = items.length;
  const itemsCopy = [];
  let i;

  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
  }

  // good
  const itemsCopy = [...items];
  ```

### Converting to array
- To convert an array-like object to an array, use `.from()`.

  ```typescript
  const foo = document.querySelectorAll('.foo');
  const nodes = Array.from(foo);
  ```

### Array method callbacks
- Use return statements in array method callbacks.
- It's ok to omit the return if it is an arrow function and consists of a single expression.

  ```typescript
  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map(x => x + 1);

  // bad
  const flat = {};
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = memo.concat(item);
  });

  // good
  const flat = {};
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);
    flat[index] = flatten;
    return flatten;
  });

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }
    else {
      return;
    }
  });

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee';
    }

    return false;
  });
  ```
