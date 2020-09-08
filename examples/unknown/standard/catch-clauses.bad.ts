try { throw new Error() }
catch (e) {
  // handle error
}

try { throw new Error() }
catch (e: any) {
  // handle error
}
