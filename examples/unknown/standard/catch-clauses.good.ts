try { throw new Error() }
catch (e: unknown) {
  if (e instanceof Error) {
    console.error(e.message)
  }
}
