# Testing

Writing test is always good.
There are a few questions need to be answered:

- Which testing frameworks to use?
- When should I write test?
- What kind of test should I write?
- What should I write test against?
- How extensive should the tests be?
- When should the test be run?

Depends on the team, management, product, and release cycle, the answer to these questions can be different.
Listed in this section are general guidelines you can consider when you formulate your own testing guidelines.

## Testing framework

- Anything that gives you the least resistant to write test!
- I personally use [`mocha`](https://www.npmjs.com/package/mocha) and [`tape`](https://www.npmjs.com/package/tape) ([`blue-tape`](https://www.npmjs.com/package/blue-tape) to be exact)

## Test naming convention

✔️ You **should** define a convention for organizing your tests.
Here is one example:

- `spec`: specification tests
- `unit`: unit tests
- `accept`: acceptance tests
- `perf`: performance tests
- `stress`: stress tests

Depends on the test framework, there are different ways to categorize tests.
But most of them support categorizing them by file name, for example:
`foo.spec.ts`, `foo.accept.ts`, etc.

> Why?

Tests are live documentation.
However, different kinds of tests requires different level of knowledge of the code.
For example, unit tests might have mocks that requires the knowledge of how the code is written,
and there are unit tests that test edge cases etc.

Having a good convention helps organize the tests and make them more useful as live documentation.

## Writing tests

- Feel free to write junk code for proof of concept. No need to write tests at this stage.

  > Why? Junk code for proof of concept is a great way to try out your thesis while allow you to work in high speed.
  > Just make sure you don't use your junk code directly in production.
  > They are meant to be thrown away.

- Follow Behavior Driven Development (BDD). Write unit test as the spec of your code.

  > Why? Writing test forces you to think as the consumer of your code.
  > You will formulate much better naming, signature, structure (decoupling), etc. when you write test first.

- Write unit tests as the spec of your small classes and pure functions.

  > Why? Small classes and pure functions are much less likely to change in their responsiblity (SRP).
  > This means less mutation and less waste of tests.

- Write unit tests and integration tests when a bug is found.

  > Why? Bugs, by nature, are mistakes in code that didn't get caught or oversight and corner cases that are missed originally.
  > They are either mis-written functionality, which you should write unit test against, or
  > mis-used functionality, which you should write integration test to record it.

- Write functional tests only if you need to.

  > Why? While it sounds great, unfortunately functional requirements of a product changes all the time, so your test code can easily be wasted.
  > If your team has QA, then yes. QA will/should write \*_automatable_ functional tests.

- Have at least 30% code coverage. Strive for 85%. 100% is a fantasy.

  > Why? It is not to say 100% code coverage as a goal is bad.
  > It just means that when closer to 100%, more test code will be thrown away.

- It is **OK** to strive for 100% code coverage on small classes and pure functions.

  > Why? Same reason as above: they are less likely to change meaning less waste.

- Write visual regression test on kitchen sink.

  > Why? Functional requirements changes all the time...

- Use stubs and mocks. But use them correctly.

  > Why? Your code should properly decoupled. If you found yourself to stubs and mocks a section of your dependencies, it's a code smell.

## Running tests

Rule of thumb: Run test as often as possible, without hindering development speed.

- Run these locally, always:
  - Unit tests
  - Visual Regression tests

- Organize code in small packages, so only a small set of unit test need to be run at a time.

- Run these locally, before check in / commit:
  - Integration tests

- Run these during build, by continuous integration (e.g. travis-CI):
  - Unit tests
  - Visual Regression tests
  - Integration tests
  - Functional tests (Randomize to only a subset if needed)
