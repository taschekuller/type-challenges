// P 'element1' | 'element2'
  // element1:???
  // element2:???
    //T[P]
    //readonly element1:string

type MyReadonly<T> = {
  readonly [P in keyof T]:T[P];
}