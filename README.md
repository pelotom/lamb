Lambdex is a JavaScript microlibrary which provides a syntax for describing anonymous functions which can be more compact than [arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), using the power of [ES6 tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals).

Here's one way to sum up the squares of all the numbers in an array using an ES6 arrow function:
```javascript
[1,2,3,4].reduce((x, y) => x + y) // evaluates to 10
```

Using Lambdex, you could write this as:
```javascript
import λ from 'lambdex'

[1,2,3,4].reduce(λ`#0 + #1`)
```

Instead of defining a function by declaring names for all of its parameters and then showing how they are used in the functional expression, you just refer to the arguments by their index in the argument list. The lambdex expression `#0 + #1` therefore means "a function of 2 parameters, which adds the first argument to the second".

A lambdex expression doesn't close over the variables in its scope, but you can insert values from the outside world into a lambdex expression using `${...}` notation. For example,
```javascript
const field = 'x', n = 4
[{x: 8}, {x: 3}, {x: 9}].map(λ`#0[${field}]`)
// evaluates to [8, 3, 9]
```

You can use lambdex argument indices more than once or not at all.
