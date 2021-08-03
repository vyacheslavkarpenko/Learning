// @ts-nocheck
// static method
class Person {
  constructor(name) {
    this.name = name
  }
  toString() {
    return `Person ${this.name}`
  }
  static createRandom() {
    return new Person(`${Math.random()}`)
  }
}

let stranger = Person.createRandom()
console.log(stranger.toString())

// static function in class explanation
// it works same as self.method_name in ruby
// getNumbers() cannot be called in instance of class
// getNumbers() can be called in class directly
class Human {
  static getNumbers() {return 2}
  learn() {
    console.log('I am learning')
  }
}

let h = new Human()
h.learn()
// if we call  h.getNumbers() than catch error
Human.getNumbers()

// Punblic and instance fields
class Person2 {
  static _counter = 0
  planet = 'Earth'

  constructor(name) {
    this.id = Person2._counter++
    this.name = name
  }
}

let mike = new Person2('Mike')
let stef = new Person2('Stefan')

console.log('mike', mike)
console.log('stef', stef)


// Alter prototype
function Person3(){}
Person3.prototype = {
  tags: []
}

var p1 = new Person3()
var p2 = new Person3()
p1.tags.push('foo')
console.log('p2.tags', p2.tags)


// Inheritance
class Person4 {
  constructor(name) {
    this.name = name
  }
  toJson() {
    return {
      name: this.name
    }
  }
}

const she = new Person4('Sam')
console.log('she', she.toJson())

class Employee extends Person4 {
  constructor(id, name) {
    super(name)
    this._employeeId = id
  }

  toJson() {
    return {
    ...super.toJson(),
    id: this._employeeId,
    }
  }
}

let emp = new Employee('1', 'Johnny')
console.log('emp', emp.toJson())


// Species
class MyArray extends Array {
  toString() {
    return '[PRIVATE]'
  }

  static get [Symbol.species]() {
    return Array
  }
}

let a = new MyArray(1, 2, 3)
console.log('a', `${a}`)
let filtered = a.filter(y => y <= 2)
console.log('filtered', `${filtered}`)

// Mixins
const AsJSON = x => class extends x {
  asJSON() {
    return JSON.stringify(this)
  }
}

class Person5 extends AsJSON(Object) {
  constructor(name){
    super()
    this.name = name
  }
}

let me = new Person5('Mike')
console.log('me', me.asJSON())