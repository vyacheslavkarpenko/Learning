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