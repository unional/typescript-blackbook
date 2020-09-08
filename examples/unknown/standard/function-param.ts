function castNumber(value: unknown) {
  return typeof value === 'number' ? value : -1
}

castNumber(1) // 1
castNumber({ a: 1 }) // -1
