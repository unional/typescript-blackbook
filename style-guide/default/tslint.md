# tslint configuration
Rules in use:
* native: https://github.com/palantir/tslint#core-rules
* eslint: https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-eslint-website

#### align (native)
`"align": [true, "statements"]`

* [functions#function-parameters](functions.md#function-parameters)
* [functions#function-arguments](functions.md#function-arguments)

#### ban (native)
`"ban": false`

#### class-name (native)
`"class-name": true`

#### comment-format (native)
`"comment-format": [true, "check-space"]`

* [comments#single-line](comments.md#single-line)

### curly (native)
`"curly": true`

### eofline (native)
`"eofline": true`

### forin (native)
`"forin": false`

### indent (native)
`"indent": [true, "spaces"]`

* [whitespaces#soft-tabs](whitespaces.md#soft-tabs)

### interface-name (native)
`"interface-name": false`

would be something like: `"interface-name": [true, "never"]` in the future
* https://github.com/palantir/tslint/issues/512
* [interfaces#naming](interfaces.md#naming)

### jsdoc-format (native)
`"jsdoc-format": true`
* [comments#multi-line](comments.md#multi-line)

### label-position (native)
`"label-position": true`

### label-undefined (native)
`"label-undefined": true`

### max-line-length (native)
`"max-line-length": false`
* [file-structures#max-line-length](file-structures.md#max-line-length)

### member-access (native)
`"member-access": false`

* [classes#member-visibility](classes.md#member-visibility)

### member-ordering (native)
`"member-ordering": false`

* [classes#member-ordering](classes.md#member-ordering)

### no-any (native)
`"no-any": false`
* Too restrictive

### no-arg (native)
`"no-arg": true`
* TBD, should work smoothly without

## no-bitwise (native)
`"no-bitwise": false`
* Should know what I'm doing

## no-conditional-assignment (native)
`"no-conditional-assignment": true`
* Avoid clever trick that reduce maintainability

## no-consecutive-blank-lines (native)
`"no-consecutive-blank-lines": false`
* Want the ability to have 2 blank lines for better formatting

## no-console (native)
`"no-console": [
    true,
    "assert",
    "count",
    "log",
    "warn",
    "trace",
    "error",
    "debug"
]`
* TBD, better be preventive

## no-construct (native)
`"no-construct": true`

## no-constructor-vars (native)
