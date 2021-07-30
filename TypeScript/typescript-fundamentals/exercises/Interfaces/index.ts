// Interfaces
interface Gadget {
  model: string
  name: string
  screenSize: number
}

interface Gadget {
  color: string
}

let myPhone: Gadget = {
  model: 'A50',
  name: 'Samsung',
  screenSize: 6,
  color: 'blue'
}

let secondPhone: Gadget = {
  model: 'A72',
  name: 'Samsung',
  screenSize: 7.5,
  color: 'black'
}


function allPhones (phone1: Gadget, phone2: Gadget) {
  console.log('phone1', phone1)
  console.log('phone2', phone2) 
}

allPhones(myPhone, secondPhone)
