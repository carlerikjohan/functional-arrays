import { expect } from 'chai'

import { createArrayFunction } from './createArrayFunction'

describe('createArrayFunction', () => {
  it('should correctly be called or something', () => {
    const add = (a: string, b: string): number => {
      return Number.parseInt(a) + Number.parseInt(b)
    }
    const arrayFunctionAdd = createArrayFunction(add)

    const result = arrayFunctionAdd[3][5]

    expect(result).to.equal(8)
  })

  it('should not ask why am i even doing this', () => {
    expect(true).to.not.be.false
  })
})
