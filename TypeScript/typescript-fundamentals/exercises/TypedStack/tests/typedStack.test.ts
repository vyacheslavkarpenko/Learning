import { Stack } from '../src/stack'

let exp = expect as jest.Expect

test('Stack is avaiable as a named export from ./src/stack.ts', () => {
  exp(Stack).toBeDefined()
})

test('new stack has size of 0', () => {
  let l = new Stack()
  exp(l.length()).toBe(0)
})

test('pushing an item to the stack increases its size by 1', () => {
  let l = new Stack<string>()
  l.push('abc')
  exp(l.length()).toBe(1)
})

test('pushing a few items to the stack (one-by-one) increases its size appropriate', () => {
  let l = new Stack<string>()
  l.push('abc')
  l.push('cdi')
  l.push('wow')
  l.push('dec')
  exp(l.length()).toBe(4)
})

test('pushing a few items to the stack (at once) increases its size appropriate', () => {
  let l = new Stack<string>()
  l.push(['abc', 'dci', 'xyz', 'bsd'])
  exp(l.length()).toBe(4)
})

test('last items pushed on are the first to pop off', () => {
  let l = new Stack<string>()
  l.push(['abc', 'dci', 'xyz', 'bsd'])
  let last = l.pop()
  exp(l.length()).toBe(3)
  exp(last).toBe('bsd')
})
