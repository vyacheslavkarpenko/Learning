// Iterables

//// Symbol
// Symbol is primitive data type like to boolean or string data type
// which used for unique identifiers creation.
// It is like to function which always returns unique id.
// In our case id is a symbol.

/// define symbol
const symbol = Symbol()

/// Description for symbol
const symbol = Symbol('Viacheslav Karpenko')
typeof symbo  // "symbol"

/// Symbol is unique.
/// So two symbols with same description are not equal.
Symbol('Viacheslav Karpenko') === Symbol('Viacheslav Karpenko') // -> false

/// We can not define symbol using 'new'
const symbol = new Symbol()             // -> TypeError: Symbol is not a constructor

/// Global symbols are define using 'Symbol.for'
const viacheslavKarpenko = Symbol.for('Viacheslav Karpenko')
Symbol.for('Viacheslav Karpenko') == viacheslavKarpenko // -> true

/// Practice symbol usage.
var foo = Symbol('foo')
var myObj = {}

myObj['foo'] = 'bar'
myObj[foo] = 'baz'

myObj.foo                                 // -> ['bar']
Oblect.keys(myObj)                        // -> ['foo']
Object.getOwnPropertyNames(myObj)         // -> ['foo']

for (var key in myObj) {
  console.log(`${key} = ${myObj[key]}`)
}                                         // -> foo = bar - symbol 'foo' with value 'baz' absent in myObj

/// more info https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
/// create array
let arr = ['zero', 'one', 'two']

console.log(arr.length)            // 3
console.log(arr['length'])         // 3

/// prop another object - iterator
let prop = Symbol.iterator
console.log(arr[prop])                // [Function: values]

console.log(arr[Symbol.iterator])     // [Function: values]

let it = arr[Symbol.iterator]()
console.log(it)                       // Object [Array Iterator] {}
console.log(it.next())                // { value: 'zero', done: false }


/// Generators
//// define generator
function* mySequence() {
  let power = 1
  while(power < 3) {
      console.log('before yield')
      yield Math.pow(2, power)
      console.log('after yield')
      power + 1
  }
}

//// Passed mySequence() to loop
for (let v of mySequence()) {
  console.log('v = ', v)
}
//// result of loop
/*
before yield
v = 1
after yield
before yield
v = 2
after yield
before yield
v = 4
after yield
before yield
v = 8
after yield
before yield
v = 16
after yield
*/

//// define generator
function* mySequence2() {
  yield 'Ford'
  yield 'DMC'
  yield 'Tesla'
  console.log('The end ;)')
  return 'Stop'
  yield 'Will not printed!'
}

//// passed  mySequence2() to loop
for ( const v of mySequence2()) {
  console.log('yield is', v)
}
//// result of loop
/*
yield is Ford
yield is DMC
yield is Tesla
The end ;)
undefined
*/

//// define generator
function* fib() {
  let lastLast = 1
  let last = 0
    while(last < 20) {
      let val = lastLast + last
      yield val
      lastLast = last
      last = val
    }
  }
//// passed  fib() to loop
  for (let v of fib()) {
    console.log('v is ', v)
  }
//// result of loop
/*
v is 1
v is 1
v is 2
v is 3
v is 5
v is 8
v is 13
v is 21
*/

/// Iterators
function* sequence() {
  let lastResult = 0
  while(true) {
    lastResult = yield lastResult + 5
    console.log(`lastResult = ${lastResult}`)
  }
}

let seq = sequence()
console.log(seq.next().value)
/// undefined
console.log(seq.next(35).value)
/// lastResult = 35
/// 40
console.log(seq.next(100).value)
/// lastResult = 100
/// 105
console.log(seq.next(200).value)
/// lastResult = 200
/// 205
