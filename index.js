function* hello() {
  yield "Hello";
  yield "Hello";
  yield "Hello";
  return "Bye";
}

console.log(hello());
