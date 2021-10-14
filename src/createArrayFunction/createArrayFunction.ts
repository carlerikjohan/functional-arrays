import { curry } from '../curry'
import { isFunction } from '../isFunction'

export type AcceptableFunction<T> = (...args: string[]) => T

/** Returns an array function for the given function. */
export function createArrayFunction<T>(fn: AcceptableFunction<T>): any {
  const curried = curry(fn)
  return new Proxy(
    {},
    {
      get: (_, prop) => {
        const resultOrFn: AcceptableFunction<T> | T = curried(prop)
        return isFunction(resultOrFn)
          ? createArrayFunction<T>(resultOrFn)
          : resultOrFn
      },
    },
  )
}
