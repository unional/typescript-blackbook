# Parameter

## Parameter alignment

There are several factors to consider:

- Easy to read
- Can easily formatted by hand
- Can be auto-formated by all IDE
- Work well during merge

  ```ts
  // bad
  // not easy to format by hand
  // cannot be auto-formatted by all IDE
  // does not work well against merge
  function dontDoLikeThis(firstParam,
                          secondParam)
  // not easy to read
  // not easy to format automatically by all IDE
  function dontDoLikeThis(
    firstParam, secondParam
  )

  // good
  function doThis(firstParam, secondParam)
  function doThis(
    firstParam,
    secondParam
  )
  ```

## Reference

- <https://www.youtube.com/watch?v=ZsHMHukIlJY>
