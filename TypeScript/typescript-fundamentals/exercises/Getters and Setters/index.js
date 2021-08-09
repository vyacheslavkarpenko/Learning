// Getters and Setters
let name = {
  first: 'Viacheslav',
  last: 'Karpenko',
  get full() {
    return `${this.first} ${this.last}`
  },
  set full(newVal) {
    let [a, b] = newVal.split(' ')
    this.first = a
    this.last = b
  }
}

console.log('name.first', name.first)
console.log('name.last', name.last)
console.log('name.full', name.full)
name.full = 'John Silver'
console.log('name.first', name.first)
console.log('name.last', name.last)
console.log('name.full', name.full)
