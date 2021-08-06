// Rest and Spread properties
let data = { x: 4, y: 5, z: 17 }
let {x, ...others} = data
console.log('x', x)           //x 4
console.log('others', others) // others { y: 5, z: 17 }

let values = {...others, d: 3, v: 17}
console.log('values', values)  //values { y: 5, z: 17, d: 3, v: 17 }
