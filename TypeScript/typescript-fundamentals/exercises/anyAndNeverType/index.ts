// Any

let age = 33
let myAge = age as any
myAge = '37'

function sum(a: number, b: number): number {
  return a + b
}
console.log('sum', sum(1, 2)) // 3

function sum1(a: any, b: any ): number {
  return a + b
}
console.log('sum1', sum1('1', 2)) // 3

// Never

let x: any = 'hello'
x = {a: 'a'}
console.log('x', x) // {a: 'a'}

let y: never = 'never print'
console.log('y', y) // is not assignable to type 'never'