const obj = { a: 1 }

// [1, 2, { a: 1 }]
const tupleConst = [1, 2, obj] as const
