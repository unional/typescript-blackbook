function tail<T extends any[]>(arr: readonly [any, ...T]): T {
  const [_ignored, ...rest] = arr;
  return rest;
}

type Strings = [string, string];
type Numbers = [number, number];

// [string, string, number, number, boolean]
type StrStrNumNumBool = [...Strings, ...Numbers, boolean];
