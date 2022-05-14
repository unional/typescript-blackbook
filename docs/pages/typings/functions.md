# Functions

## Event Handlers

- Type the event handler, not the callback.

  > Why? Provides better code completion.
  > This can be removed when <https://github.com/Microsoft/TypeScript/issues/8134> lands.

  ```ts
  // Bad
  export interface MyEventCallback {
    (event: { ... }): void;
  }

  export interface ABC {
    onMyEvent(callback: MyEventCallback): Disposable;
  }

  // Good
  export interface MyEventHandler {
    (callback: (event: { ... }) => void): Disposable;
  }

  export interface ABC {
    onMyEvent: MyEventHandler;
  }
  ```
