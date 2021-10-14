const argumentsToArray = (args: IArguments): string[] => {
  return [].slice.call(args)
}

/** Returns a function and returns a curried function. */
export const curry = (fn: Function): Function => {
  const length = fn.length
  let args: unknown[] = []
  return function next(this: unknown) {
    args = args.concat(argumentsToArray(arguments))
    return args.length >= length ? fn.apply(this, args.splice(0)) : next
  }
}
