// Generics
/// Generics allow us to reuse code across many types, interfaces and functions
/// We still get complete-time type safety
function gimmieFive<T>(x: T): T[] {
  return[x, x, x, x, x]
}

let three: number[] = gimmieFive(3)
let eggs: string[] = gimmieFive('egg')
console.log(three)  // [ 3, 3, 3, 3, 3 ]
console.log(eggs)   // [ 'egg', 'egg', 'egg', 'egg', 'egg' ]

/// Arrays can be expressed this way
export enum Suit {
  Clubs, Diamonds, Hearts, Speads
}

export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

let cards = Array<[Suit, CardNumber]>(52)

/// So can Promise
let data: Promise<Response> = fetch('http://example.com')

/// React components
interface MyProps { title: string }
interface MyState { isClicked: boolean }
class MyComponent extends Component<MyProps, MyState> {}

/// We can specify constraints on generic types
function midpoint<T extends Point2D>(p1: T, p2: T): T {}

/// Generic can be used with interfaces as well
interface IFileReader<T extends File> {
  readFile(file: T): Blob
}

// Generic by https://www.youtube.com/watch?v=ysQb60CQB8U
/// Example of using 'any'
const getter = (data: any): any => data
getter(10)      // 10
getter('test')  // 'test'

/// Using of generic type
//// ES6 syntax
const getter = <T>(data: T): T => data
//// ES5 syntax
function getter<T>(data: T) {
  return data
}

//// Defifing issue immediately
const getter = <T>(data: T): T => data
getter(10).length      // Property 'length' does not exist on type '10'.
getter('test').length  // 4

//// Generic behavior explanation
//// For a number
const getter = (data: number): T => data
getter(10).length      // Property 'length' does not exist on type '10'.
const getter = (data: string): T => data
getter(10).length      // 4.

//// Define type in function calling
const getter = <T>(data: T): T => data
getter<number>(10).length        // Property 'length' does not exist on type 
getter<string>('test').length    // 4

//// Array generic type example
const list: Array<number> = [1, 2, 3]

//// Simple class example
class User {
  constructor(
    public name: string, public age: number
  ) {}
  public getPass() {
    return `${this.name}, ${this.age}`
  }
}

//// Generic class
class User2<T> {
  constructor(
    public name: T, public age: T
  ) {}
  public getPass() {
    return `${this.name}, ${this.age}`
  }
}

const userTwo = new User2('Viaceslav', '37')
const maxTwo = new User2(123, 123)

userTwo.getPass()   // 'Viacheslav37
maxTwo.getPass()    // '123123'


//// Multiple generic type
//// Generic class
class User3<T, K> {
  constructor(
    public name: T, public age: K
  ) {}
  public getPass() {
    return `${this.name}, ${this.age}`
  }
}

const userThree = new User3('Viaceslav', '37')  // string, string
const maxThree = new User3(123, 123)            // number, number
const slavaThree= new User3('Viacheslav', 123) // string, number

userThree.getPass()    // 'Viacheslav37
maxThree.getPass()     // '123123
slavaThree.getPass()   // 'Viacheslav123

//// Specify generic type 'K' with key-word 'extends'
class User5<T, K extends number> {
  constructor(
    public name: T, public age: K
  ) {}
  public getPass(): string {
    return `${this.name}, ${this.age}`
  }
  public getSecret(): number {
    return this.age**2
  }
}

const user5 = new User5('Viaceslav', 37)  // string, string
const max5 = new User5(123, 123)            // number, number
const slava5 = new User5('Slava', '123') // Argument of type 'string' is not assignable to parameter of type 'number'.
