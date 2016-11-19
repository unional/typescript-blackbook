# Distributing typings

You should avoid distributing the actual typings of your dependencies with your package.

> Why? Doing so might create conflict to the consumers if they have the same typings but different version.

It is better to rely on npm dependencies or `typings.json`.
