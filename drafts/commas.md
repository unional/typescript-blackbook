# Commas

## Leading commas

- **Nope.**

```typescript
// bad
const story = [
  once
, upon
, aTime
];

// good
const story = [
once,
upon,
aTime,
];

// bad
const hero = {
  firstName: 'Ada'
, lastName: 'Lovelace'
, birthYear: 1815
, superPower: 'computers'
};

// good
const hero = {
firstName: 'Ada',
lastName: 'Lovelace',
birthYear: 1815,
superPower: 'computers',
};
```

## Trailing commas

- **Yup.**

tslint:

```js
"trailing-comma": [
  true,
  {
    "singleline": false,
    "multiline": true
  }
]
```

> Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don't have to worry about the [trailing comma problem](es5/README.md#commas) in legacy browsers.

```typescript
// bad - git diff without trailing comma
const hero = {
    firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb graph', 'modern nursing']
};

// good - git diff with trailing comma
const hero = {
    firstName: 'Florence',
    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};

// bad
const hero = {
firstName: 'Dana',
lastName: 'Scully'
};

const heroes = [
'Batman',
'Superman'
];

// good
const hero = {
firstName: 'Dana',
lastName: 'Scully',
};

const heroes = [
'Batman',
'Superman',
];
```
