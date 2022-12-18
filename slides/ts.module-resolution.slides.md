---
customTheme: "_revealjs/style-basic"
transition: "fade"
logoImg: "_revealjs/uni.png"
enableMenu: false
enableTitleFooter: false
enableChalkboard: false
highlightTheme: vs2015
autoPlayMedia: true
---

## `module` and `moduleResolution`

```json
{
  "compilerOptions": {
    "module": ???,
    "moduleResolution": ???
  }
}
```

---

### What they do

- `module` specifies how TypeScript emits modules.
- `moduleResolution` specifies how TypeScript resolves modules.

---

### Possible values

`module`: `None`, `CommonJS`, `AMD`, `UMD`, `System`, `ES6`, `ES2015`, `ES2020`, `ES2022`, `ESNext`, `Node`, `Node16`, `NodeNext`

`moduleResolution`: `Classic`, `Node`, `Node16`, `NodeNext`

---

### `module`

- `None`, `AMD`, `UMD`, `System`: ignore them {.fragment .fade-left}
- `CommonJS` {.fragment .fade-left}
- `ES6`/`ES2015` {.fragment .fade-left}
- `ES2020`: dynamic `import()`, `import.meta` (NodeJS 14+, 10.4.0+) {.fragment .fade-left}
- `ES2022`: top-level `await` (NodeJS 14.8+) {.fragment .fade-left}
- `ESNext`: latest ECMAScript version {.fragment .fade-left}
- `Node16`: NodeJS native ESM Module support {.fragment .fade-left}
- `NodeNext`: latest Node.js version {.fragment .fade-left}

---

### `moduleResolution`

- `Classic`: ignore {.fragment .fade-left}
- `Node` {.fragment .fade-left}
- `Node16`: NodeJS native ESM Module support {.fragment .fade-left}
- `NodeNext`: latest Node.js version {.fragment .fade-left}

---

### `module`: `ES` or `Node`?

- How the package is consumed {.fragment .fade-left}
  - NodeJS version
  - Deno?
  - Bundler support
  - Your bundler
- Eventually `Node16` {.fragment .fade-left}

---

### `moduleResolution`: `Node` or `Node16`?

- Case by case {.fragment .fade-left}
  - Can you switch?
- Eventually `Node16` {.fragment .fade-left}
