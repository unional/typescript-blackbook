function foo(
  param1,
     param2,
        param3, param4) {
  let a = 1;
  a += param1 +
  param2
    + param3
      + param4;
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
