function* cities() {
  const citiesList = [];
  citiesList.push(yield);
  citiesList.push(yield);
  citiesList.push(yield);
  citiesList.push(yield);
  yield;
  return citiesList;
}

const list = cities();
list.next();
list.next("Madrid");
list.next("Paris");
list.next("Munich");
list.next("London");
console.log(list.next().value);
