## Arrow Functions

### Prefer over function expressions

- When you must use function expressions (as when passing an anonymous function), use arrow function notation.

  > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

  > Why not? If you have a fairly complicated function, you might move that logic out into its own function declaration.

  ```typescript
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```

### Omit braces for single expression

- If the function body consists of a single expression, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement.

  > Why? Syntactic sugar. It reads well when multiple functions are chained together.

  > Why not? If you plan on returning an object.

  ```typescript
  // bad
  [1, 2, 3].map(number => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });

  // good
  [1, 2, 3].map(number => `A string containing the ${number}.`);

  // good
  [1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
  });
  ```

### Use parentheses for multi-line single expression
- In case the expression spans over multiple lines, wrap it in parentheses for better readability.

  > Why? It shows clearly where the function starts and ends.

  ```typescript
  // bad
  [1, 2, 3].map(number => 'As time went by, the string containing the ' +
    `${number} became much longer. So we needed to break it over multiple ` +
    'lines.'
  );

  // good
  [1, 2, 3].map(number => (
    `As time went by, the string containing the ${number} became much ` +
    'longer. So we needed to break it over multiple lines.'
  ));
  ```

### Paraenthese for single argument

- Keep using paraenthese.

  > Why? In TypeScript, more often then not you will be specifying the argument type.
  > If you are used to omit the paraentheses that means you have to go back and wrap the argument in paraentheses in order to add the type.
  > I find it distrubs my chain of flow more than having to add the paraentheses everytime.

  ```ts
  // bad
  [1, 2, 3].map(x => x * x);

  // good
  [1, 2, 3].map((x) => x * x);
  
  // good
  [1, 2, 3].map((x: number} => x * x);
  ```

### Keep braces to avoid confusion with comparison operators `<` `>`
- Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`).

  ```typescript
  // bad
  const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

  // bad
  const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

  // good
  const itemHeight = item => { return item.height > 256 ? item.largeSize : item.smallSize; }
  ```
