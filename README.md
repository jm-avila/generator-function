## Generator Function

The function\* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

```
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// expected output: 10

console.log(gen.next().value);
// expected output: 20
```

### Description

Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield\*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from next().

A return statement in a generator, when executed, will make the generator finish (i.e. the done property of the object returned by it will be set to true). If a value is returned, it will be set as the value property of the object returned by the generator.

Much like a return statement, an error is thrown inside the generator will make the generator finished -- unless caught within the generator's body.

When a generator is finished, subsequent next() calls will not execute any of that generator's code, they will just return an object of this form: {value: undefined, done: true}.
