import { expect } from 'chai'

import { isFunction } from './isFunction'

describe('isFunction', () => {
  it('should return true for function', () => {
    const result = isFunction(function () {})

    expect(result).to.be.true
  })

  it('should return true for arrow function', () => {
    const result = isFunction(() => {})

    expect(result).to.be.true
  })

  it('should return false for an object', () => {
    const result = isFunction({})

    expect(result).to.be.false
  })

  it('should return false for string', () => {
    const result = isFunction('string')

    expect(result).to.be.false
  })

  it('should return false for boolean', () => {
    const result = isFunction(false)

    expect(result).to.be.false
  })

  it('should return false for number', () => {
    const result = isFunction(2)

    expect(result).to.be.false
  })
})
