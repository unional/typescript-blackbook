# Async await

## return await

Typically you should avoid using `await` in your return statement as it will cause the code to wait for the promise instead of propagating the promise to the caller.

  tslint: ['no-return-await'](../default/tslint.md#no-return-await)

However, notice there is a difference between the two.
In certain cases, you may want to ensure the promise is resolved before the call is returned.
