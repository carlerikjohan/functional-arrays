/** Type guard for function, makes it all pretty. */
export const isFunction = (fn: unknown): fn is Function => {
  return typeof fn === 'function'
}
