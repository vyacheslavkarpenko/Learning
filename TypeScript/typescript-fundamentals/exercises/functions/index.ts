function stringToArray(argument: string): string[] {
  return Array.from(argument)
}

console.log('stringToArray', stringToArray('abc'))