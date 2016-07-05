# Functions

## Event Handlers

- Type the event handler, not the callback.

  > Why? Provides better code completion.

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
