## Semicolons

  - [20.1](#20.1) <a name='20.1'></a> **Yup.** eslint: [`semi`](http://eslint.org/docs/rules/semi.html) jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

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

    // good (guards against the function becoming an argument when two files with IIFEs are concatenated)
    ;(() => {
      const name = 'Skywalker';
      return name;
    }());
    ```

    [Read more](http://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).
