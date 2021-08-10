// Function Overloading

function add(x: number, y: number): number                 // function head
function add(x: number, y: string, radix: number): number  // function head

function add(                                              // function implementation
  x: number|string,
  y: number|string,
  radix: number = 10
  ): number | undefined {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y + radix
  } else if (typeof x === 'number' && typeof y === 'string') {
    return x + radix + parseInt(y)
  } else {
    return undefined
  }
}

console.log(add(12, 40))       // 62
console.log(add(56, '15', 80)) // 151
