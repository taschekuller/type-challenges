type TupleToObject<T extends readonly any[]> = {
  [Key in T[any]]:Key
}