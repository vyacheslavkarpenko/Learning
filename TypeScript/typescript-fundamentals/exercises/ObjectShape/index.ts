// Shape
let myPlane: { make: string, fuel: string, year: number }

// if use only shape attributes
myPlane = {
  make: 'Made from kit',
  fuel: 'A95',
  year: 2005
}

console.log('myPlane', myPlane)

// if i must add another attribute

myPlane = {
  make: 'Made from kit',
  fuel: 'A95',
  year: 2005,
  consumption: 20
} as { make: string, fuel: string, year: number }

console.log('myPlane', myPlane)