# Naming Conventions

## Single letter names

- Avoid single letter names. Be descriptive with your naming.

```typescript
// bad
function q() {
// ...stuff...
}

// good
function query() {
// ..stuff..
}
```

## Name casing

- Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase.html) jscs: [`requireCamelCaseOrUpperCaseIdentifiers`](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers)

```typescript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

- Use PascalCase when naming constructors or classes. eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap.html) jscs: [`requireCapitalizedConstructors`](http://jscs.info/rule/requireCapitalizedConstructors)

```typescript
// bad
function user(options) {
this.name = options.name;
}

const bad = new user({
name: 'nope',
});

// good
class User {
constructor(options) {
  this.name = options.name;
}
}

const good = new User({
name: 'yup',
});
```

- Use camelCase when you export-default a function. Your filename should be identical to your function's name.

```typescript
function makeStyleGuide() {
}

export default makeStyleGuide;
```

- Use PascalCase when you export a singleton / function library / bare object.

```typescript
const AirbnbStyleGuide = {
es6: {
}
};

export default AirbnbStyleGuide;
```

## Name prefixes

- Use a leading underscore `_` when naming private properties. eslint: [`no-underscore-dangle`](http://eslint.org/docs/rules/no-underscore-dangle.html) jscs: [`disallowDanglingUnderscores`](http://jscs.info/rule/disallowDanglingUnderscores)

```typescript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```

## `this` reference

- Don't save references to `this`. Use arrow functions or Function#bind. jscs: [`disallowNodeTypes`](http://jscs.info/rule/disallowNodeTypes)

```typescript
// bad
function foo() {
const self = this;
return function () {
  console.log(self);
};
}

// bad
function foo() {
const that = this;
return function () {
  console.log(that);
};
}

// good
function foo() {
return () => {
  console.log(this);
};
}
```

## File naming

- If your file exports a single class, your filename should be exactly the name of the class.

```typescript
// file contents
class CheckBox {
// ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from './checkBox';

// bad
import CheckBox from './check_box';

// good
import CheckBox from './CheckBox';
```
