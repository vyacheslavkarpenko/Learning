class Car {
  make: string
  model: string
  year: number
  constructor(
    make: string,
    model: string,
    year: number) {
      this.make = make
      this.model = model
      this.year = year
    }
  startEngine() {
    return 'VROOOOOOOOOOM!!!!!'
  }
}

let myCar = new Car('AZLK', 'Moskvich', 1986)
console.log('myCar', myCar)