function count() {
  return 0;
}

let o  = {
  a: count
}

interface Test {
  a: string;
  b: number;
}


type Demo<T> = {
  [p in keyof T]: T[p];
}

type Wrap<T> = {
  abc: Demo<T>
}


let b: Demo<Test> = {
  b: 123,
  a: 'b'
}

declare function doSome<T>(p: Demo<T>): T
