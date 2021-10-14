import { expect } from 'chai'
import { curry } from './curry'

describe('curry', () => {
  it('should have be correctly called', () => {
    const addStringsFn = (a: string, b: string, c: string) => {
      return a + b + c
    }

    const curryAddFn = curry(addStringsFn)
    const first = curryAddFn('Hello ')
    const second = first('world')
    const third = second('!')

    expect(third).to.equal('Hello world!')
  })
})
