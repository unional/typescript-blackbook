
## Destructuring

## Object destructuring
- Use object destructuring when accessing and using multiple properties of an object. jscs: [`requireObjectDestructuring`](http://jscs.info/rule/requireObjectDestructuring)

> Why? Destructuring saves you from creating temporary references for those properties.

```typescript
// bad
function getFullName(user) {
const firstName = user.firstName;
const lastName = user.lastName;

return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
const { firstName, lastName } = user;
return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
return `${firstName} ${lastName}`;
}
```

### Array destructuring
- Use array destructuring. jscs: [`requireArrayDestructuring`](http://jscs.info/rule/requireArrayDestructuring)

```typescript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### Multiple return values
- Use object destructuring for multiple return values, not array destructuring.

> Why? You can add new properties over time or change the order of things without breaking call sites.

```typescript
// bad
function processInput(input) {
// then a miracle occurs
return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
// then a miracle occurs
return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, right } = processInput(input);
```
