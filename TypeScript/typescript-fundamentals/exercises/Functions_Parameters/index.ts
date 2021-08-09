// Functions Optional parameter
// let criticalUrl: URL | undefined | string // Union type
let criticalUrl: URL
let fallBackURL = new URL('http://placeholder/url')
const createTwitterPost = (
  body: string,
  username: string = 'Karpenko V', // default value
  imageUrl?: URL) => { // symbol '?' note optional parameter `(parameter) imageUrl: URL | undefined`
  criticalUrl = imageUrl || fallBackURL
  return `${body}, ${username}, ${criticalUrl}`
}

console.log(createTwitterPost('I ate a ham sandwich today.')) // imageUrl is optional parameter and not passed                    // I ate a ham sandwich today., Karpenko V, http://placeholder/url
console.log(createTwitterPost('I ate a 100 ham sandwiches today.', 'BigMouth')) // imageUrl is optional parameter and not passed  // I ate a 100 ham sandwiches today., BigMouth, http://placeholder/url

//Function Rest parameters
const shoppingList = (bread: string, potato: string, ...fruits: string[]) => {
  return `${bread}, ${potato}, ${fruits}`
}

console.log(shoppingList('Rye bread', 'Potato', 'Banana', 'Grape', 'Apple')) // Rye bread, Potato, Banana,Grape,Apple
console.log(shoppingList('Rye bread', 'Potato'))                             // Rye bread, Potato