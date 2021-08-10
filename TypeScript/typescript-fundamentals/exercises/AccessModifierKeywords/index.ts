// Access Modifier Keywords

class Account {
  protected email: string                // protected - self and subclasses cac access
  private password: string               // private - self can access
  public accountId: number               // public - anyone can access
  userId: number                         // by default access is public
  readonly country: string = "Ukraine"
  readonly firstName: string
  shortName: string
  constructor(
    email: string, password: string, accountId: number, userId: number, theName: string, shortName: string
  ) {
    this.email = email
    this.password = password
    this.accountId = accountId
    this.userId = userId
    this.firstName = theName
    this.shortName = shortName
  }

  printEmail() {
    return this.email
  }

  printPassword() {
    return this.password
  }

  printAccountId() {
    return this.accountId
  }

  printUserId() {
    return this.userId
  }

  printCountry() {
    return this.country
  }

  printFirstName() {
    return this.firstName
  }
  printShortName() {
    return this.shortName
  }
}

let simpleAccount = new Account('enail@domain.com', 'somepassword', 12345, 6789, 'thename', 'shortName')
console.log( simpleAccount.printEmail())               // enail@domain.com
console.log( simpleAccount.printPassword())            // somepassword
console.log( simpleAccount.printAccountId())           // 12345
console.log( simpleAccount.printUserId())              // 6789
console.log( simpleAccount.printCountry())             // Ukraine
console.log( simpleAccount.printFirstName())           // thename
simpleAccount.shortName = 'short name'
console.log( simpleAccount.printShortName())           // short name
//account.name = 'raise error for readonly name'       // Cannot assign to 'name' because it is a read-only property.





class SharedAccount extends Account {
  setEmail(newEmail: string) {
    this.email = newEmail
    return this.email
  }

  setPassword(newPassword: string) {
    this.password = newPassword       // Property 'password' is private and only accessible within class 'Account'.
  }
}
let shared = new SharedAccount('enail@domain.com', 'somepassword', 12345, 6789, 'thename', 'shortName')
shared.setEmail('email2@node.com')

console.log(shared.printEmail())  // email2@node.com