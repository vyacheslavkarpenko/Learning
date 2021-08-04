// array in TS behave like in JS
let a = []
a.push(4)
a.push('hello')
console.log(a) // [ 4, 'hello' ]

// array of numbers
let b: number[] = [1, 3, 4]
console.log(b) // [ 1, 3, 4 ]

// array of strings
let c: string[] = ['a', 'b', 'c']
console.log(c) // [ 'a', 'b', 'c' ]

// default array type in class
class ShoppingCart {
  item: number[] = []
  constructor() {
    this.item.push(5)
  }
}

// define a specific number of array elements - tuples
let dependency: [string, number] // define type of two elelemets of array
dependency = ['books', 12]
console.log(dependency) // ['books', 12]

// Array of tuples
let dependencies: [string, number][] = []

console.log(dependencies.push(dependency)) // 1
console.log(dependencies.push(['solo', 33])) // 2
console.log(dependencies.push(['Victor', '44.5'])) // will get error coz '44.5' is string and must be number
