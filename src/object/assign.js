const a = {
  l1: {
    l2: {
      l3v: "l3v",
      l3: {
        final: "hello"
      }
    }
  }
}

const res = Object.assign({}, a, null);

console.log(JSON.stringify(res));