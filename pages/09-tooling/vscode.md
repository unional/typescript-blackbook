# Visual Studio Code

## User snippets

TypeScript

```json
{
  "console.log": {
    "prefix": "log",
    "body": [
      "console.log($1)"
    ]
  },
  "istanbul ignore": {
    "prefix": "istanbul ignore next",
    "body": [
      "// istanbul ignore next"
    ]
  },
  "Import es6 module": {
    "prefix": "import from",
    "body": [
      "import $2 from '${1:module}'$0"
    ],
    "description": "Import es6 module."
  },
  "Import cjs module": {
    "prefix": "import require",
    "body": [
      "import $2 = require('${1:module}')$0"
    ],
    "description": "Import cjs module."
  },
  "action": {
    "prefix": "action",
    "body": [
      "export const ${1:Custom}ActionType = '${2:module/action}'",
      "export function create$1Action(${4:args}) {",
      "  return createAction($1ActionType$5)",
      "}",
      "export function is$1Action(action: any): action is FluxStandardAction<${6:any}, ${7:any}> {",
      "  return action.type === $1ActionType",
      "}"
    ]
  },
  "import ava": {
    "prefix": "import ava",
    "body": [
      "import { test } from 'ava'",
      "${0}"
    ]
  },
  "async ava test": {
    "prefix": "ava async",
    "body": [
      "test('${1:description}', async t => {",
      "  $0",
      "})"
    ]
  },
  "async jest test": {
    "prefix": "jest async",
    "body": [
      "test('${1:description}', async () => {",
      "  $0",
      "})"
    ]
  }
}
```
