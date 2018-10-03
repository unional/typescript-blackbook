export const x = {
  _age: 10,
  get age() { return this._age },
  set age(newAge: number) { this._age = newAge }
}

// good
export const y = {
  age: 10
}
