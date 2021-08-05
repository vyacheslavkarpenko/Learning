// Aliases
type Color = [number, number, number]
let red: Color = [255, 255, 0]

// Type Aliases from https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// coordainates without alias
const coordinatesLegaccy = (pt: { x: number, y: number, z: number }): string => {
  return `(${pt.x},${pt.y},${pt.z})`
}
console.log('Coordinates of point is', coordinatesLegaccy({x: 2, y: 1, z: 8}))

// coordinates built using alias
type Point = {
  x: number
  y: number
  z: number
}

const coordinates = (pt: Point): string => {
  return `(${pt.x},${pt.y},${pt.z})`
}
console.log('Coordinates of point is', coordinates({x: 22.1, y: 15, z: -6}))


