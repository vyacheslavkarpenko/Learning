// Destructured Assignment
let person = {
  name: {
    first: 'Vischeslav',
    last: 'Karpenko' },
  languages: {
    backend: {
      ruby: {
        experience: '3 Years',
      },
    },
  },
}

let {
  name: { first },
  languages: { backend: serverSkils }
} = person

console.log('first', first)
console.log('serversSkils', serverSkils)
console.log(`${first} - ${Object.keys(serverSkils)}`)

// Destructured Assignment from https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var a, b, rest; 
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

({a, b, ...rest} = {a:1, b:2, c:3, d:4});
