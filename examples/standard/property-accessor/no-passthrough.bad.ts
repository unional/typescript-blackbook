const meaninglessPassthrough = {
  _age: 10,
  get age1() { return this._age },
  set age2(newAge: number) { this._age = newAge }
}
