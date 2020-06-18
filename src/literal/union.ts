interface Parent {
  type: any;
  payload?: any;
}

class ChildA implements Parent {
  readonly type = 'A';
  aSide: number
}

class ChildB implements Parent {
  readonly type = 'B';
  bSide: string
}

class ChildC implements Parent {
  readonly type = 'C'
}

class ChildN {
  nSide: number
}

class Other {
  // readonly type = 'Other';
  nSide: number;
}

type Union = ChildA | ChildB | ChildC | ChildN;

function test(a: Union): any {
  return a
}

let testB: Union = new ChildB();

let other = new Other();

test(testB);

test(other);