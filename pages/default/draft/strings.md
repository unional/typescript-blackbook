## Strings

### Quotes
- Use single quotes `''` for strings. eslint: [`quotes`](http://eslint.org/docs/rules/quotes.html) jscs: [`validateQuoteMarks`](http://jscs.info/rule/validateQuoteMarks)

```typescript
// bad
const name = "Capt. Janeway";

// good
const name = 'Capt. Janeway';
```

### Long strings
- Strings that cause the line to go over 100 characters should be written across multiple lines using string concatenation.
- Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

```typescript
// bad
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// good
const errorMessage = 'This is a super long error that was thrown because ' +
'of Batman. When you stop to think about how Batman had anything to do ' +
'with this, you would get nowhere fast.';
```

### Template literals
<a name="es6-template-literals"></a>
- When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](http://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing) jscs: [`requireTemplateStrings`](http://jscs.info/rule/requireTemplateStrings)

> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```typescript
// bad
function sayHi(name) {
return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
return `How are you, ${name}?`;
}
```

### Eval()
- Never use `eval()` on a string, it opens too many vulnerabilities.
