// T extend [] necessary for checking empty array
type First<T extends any[]> = T extends [] ? never : T[0]
