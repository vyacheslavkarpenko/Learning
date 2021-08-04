// Enum Mike explanation
enum AccType {
  Checking,
  Savings,
  MoneyMaker
}

type Acct = [number, AccType]

let account: Acct = [9142.14, AccType.Checking] // account [ 9142.14, 0 ]
console.log('account', account)
let account2: Acct = [9142.14, AccType.Savings] // account2 [ 9142.14, 1 ]
console.log('account2', account2)

// Enum  https://www.youtube.com/watch?v=FltLrtKWMak explanation
enum Directions {
  Up,
  Down,
  Left,
  Right
}

// get keys by name
Directions.Up    // 0
Directions.Down  // 1
Directions.Left  // 2
Directions.Right // 3

// get values by keys - revese enum
Directions[0] // 'Up'
Directions[1] // 'Down'
Directions[2] // 'Left'
Directions[3] // 'Right'

// Custom index for enum elements
enum Directions2 {
  Up = 2,
  Down = 4,
  Left = 6,
  Right = 8
}

Directions2.Up   // 2
Directions2.Down // 4
Directions2[6]   // 'Left'
Directions2[8]   // 'Right'

// Custom name for keys
enum links {
  youtube = 'https://www.youtube.com/watch?v=FltLrtKWMak',
  vocabulary = 'http://vocab.ddns.net/not_learned',
  googleTranslate = 'https://translate.google.com.ua/'
}

/// Using
links.youtube          // 'https://www.youtube.com/watch?v=FltLrtKWMak'
links.vocabulary       // 'http://vocab.ddns.net/not_learned'
links. googleTranslate // 'https://translate.google.com.ua/'

// const enum (without using) - Object js will not created
const enum links1 {
  youtube = 'https://www.youtube.com/watch?v=FltLrtKWMak',
  vocabulary = 'http://vocab.ddns.net/not_learned',
  googleTranslate = 'https://translate.google.com.ua/'
}

// const enum (with using) - Object js will created when we try to use it
const enum links2 {
  youtube = 'https://www.youtube.com/watch?v=FltLrtKWMak',
  vocabulary = 'http://vocab.ddns.net/not_learned',
  googleTranslate = 'https://translate.google.com.ua/'
}

const arr = [links2.youtube, links2.vocabulary] // ['https://www.youtube.com/watch?v=FltLrtKWMak', 'http://vocab.ddns.net/not_learned']
console.log('arr', arr)
