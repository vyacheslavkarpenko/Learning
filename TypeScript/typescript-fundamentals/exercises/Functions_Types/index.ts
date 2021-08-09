// Functions Types

/// Function have a type just like any other value
let login: (username: string, password: string) => User // A function type

login = (username, password) => { return new User()} // A function value

/// Using interfaces for define function types
interface ClickListener {
  (this: Window, e:MouseEvent): void
}
const myListener: ClickListener = e => {
  console.log('Mouse clicked!', e)
}

addEventListener('click', myListener)
