# Arrays

### Array creation
- Use the literal syntax for array creation.

  ```typescript
  // bad
  const items = new Array();

  // good
  const items = [];
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
- It's ok to omit the return if the function body consists of a single statement following [8.2](#8.2). eslint: [`array-callback-return`](http://eslint.org/docs/rules/array-callback-return)

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
