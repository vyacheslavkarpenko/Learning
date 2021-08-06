// Enhanced object literals

/// literals
const literals = {
  name: 'Mike',
  age: 34,
  toString: function() {
    return `${this.name} - ${this.age}`
  }
}
console.log('literals', literals)

/// enhanced literals
const company = 'Neat'
const enhancedLiterals = {
  __proto__: Object.prototype,
  name: 'Viacheslav',
  age: 37,
  company,
  [`${company}Title`]: 'Developer',
  toString() {
    return `${super.toString()} + ${this.name} - ${this.age}`
  }
}
console.log('enhancedLiterals', enhancedLiterals)
console.log(enhancedLiterals.toString())
console.log(Object.keys(enhancedLiterals))