var x;
// if (false) x = 2;

if (false) {
  x = 1;
}
else {
  x = 3;
}

try {
  x = 2;
}
catch(e) {
  x = 1;
}
finally {
  x = 4;
}
