# tsconfig.json

`tsconfig.json` contains compiler option for your TypeScript project.

`tsc` will automatically look for `tsconfig.json` in the current and parent folders.

You can also specify a different file by `tsc -p <config file path>`.

## Schema

<http://json.schemastore.org/tsconfig>

- If you found error or properties missing, give it some love at <https://github.com/schemastore/schemastore/> by opening PRs

## Json Completion for custom config files in VSCode

Add this to your `.vscode/settings.json`:

```json
// .vscode/settings.json
{
  "json.schemas": [
    {
      "fileMatch": [
        // or your custom config file
        "tsconfig.build.json"
      ],
      "url": "http://json.schemastore.org/tsconfig"
    }
  ]
}
```

## Guidelines

### Build config

- Use `tsconfig.build.json` for build purpose, and `tsconfig.json` for IDE.
- In `tsconfig.json`, use `exclude`.
- In `tsconfig.build.json`, use `files`.

  > Why? You typically would write test files but don't want to bundle them in your package.
  > `tsconfig.build.json` uses the `files` property allows you to have fine grain control on what to include in your package,
  > while `tsconfig.json` uses the `exclude` property so IDE can includes your test files in the project thus providing better completion support.

  For example:

  ```json
  // tsconfig.json
  {
    "compilerOptions": {
      // ...
    },
    "exclude": [
      "coverage",
      "dist",
      "node_modules"
    ]
  }
  ```

  ```json
  // tsconfig.build.json
  {
    "conpilerOptions": {
      // ...
    },
    "files": [
      "src/index.ts",
      "typings/index.d.ts"
    ]
  }
  ```

- use the same `compilerOptions` on both `tsconfig.json` and `tsconfig.build.json`

  > Why? While some options does not apply for IDE,
  > keeping them the same avoid confusion on whether something was missing or wrong when they are different.

## References

<http://www.typescriptlang.org/docs/handbook/tsconfig-json.html>
<http://json.schemastore.org/tsconfig>
