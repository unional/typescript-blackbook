# File and Folder Structures

## File line endings

- Keep line ending in `LF` if your team work on both windows and *nix.

  > Why? `CRLF` would cause grief on *nix system (double blank lines)


## File EOF (End of line)

- Except docs such as `.md`, all files should end with a newline.

```ts
// bad <<EOF

// good
<<EOF
```

## Max Line length

- Avoid having lines of code that are longer than 140 characters (including whitespace). tslint: [`max-line-length`](tslint.md#max-line-length-native)

  > Why? This ensures readability and maintainability.

- However, this is not enforce by tooling.

  > Why? Avoid unnecessary mental block when this rule conflicts with others.

```ts
// bad
const foo = 'Whatever national crop flips the window. The cartoon reverts within the screw. Whatever wizard constrains a helpful ally. The counterpart ascends!';

// bad
$.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
const foo = 'Whatever national crop flips the window. The cartoon reverts within the screw. ' +
  'Whatever wizard constrains a helpful ally. The counterpart ascends!';

// good
$.ajax({
  method: 'POST',
  url: 'https://airbnb.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
```
