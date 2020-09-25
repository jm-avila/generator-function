function* count(x) {
  yield x++;
  yield x++;
  yield x++;
  yield x++;
  yield x++;
  return x;
}

const x = count(10);
let xCount = x.next();

while (!xCount.done) {
  xCount = x.next();
}

console.log(xCount);
