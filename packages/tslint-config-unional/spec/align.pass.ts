function foo(
  param1: number,
  param2: number,
  param3: number, param4: number): number {
  let a = 1;
  a += param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4 + param1 + param2 + param3 + param4
  + param1 + param2 + param3 + param4;
  return a;
}

foo(0,
  1,
  2,
  3);

{
  foo(1, 2, 3, 4);
  foo(1, 1, 1, 1);
}
