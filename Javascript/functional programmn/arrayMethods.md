# ES6 Array Methods for Iterating

## Array Method Syntax

If there is only one thing you need to do in the iteration, the syntax is different and is a common gotcha when switching between the two.

```js
// Simple syntax for one expression each iteration
dummyArray.forEach((number) => console.log(number))

// More than 1 expression - needs {} and explicit return
dummyArray.forEach((number) => {
  doSomething()
  console.log(number)
  return
})
```

## Array.forEach()

- Use when you need to do something with every element.
- Any element changed will also mutate the original array.
- Cannot break from this loop, will ignore and finish regardless.

```js
// Prints numbers to screen
let dummyArray = [1, 3, 6, 2, 5]
dummyArray.forEach((number) => console.log(number))
```

## Array.map()

- Use when you want to alter each element in an array.
- Returns an array of the same size.
- The original array will remain unchanged.

```js
let dummyArray = [1, 3, 6, 2, 5]

// Returns [2,6,12,4,10] dummyArray unchanged
let doubled = dummyArray.map((number) => number * 2)

// Same as above with {} syntax because of extra code
let doubled2 = dummyArray.map((number) => {
  console.log(number)
  return number * 2
})
```

## Array.filter()

- Returns a new array with items filtered out based on condition
- Use it when you want to get items from an array that match an expression.

```js
let dummyArray = [1, 3, 5, 6, 8, 12]

// Returns [6, 8, 12]
let allEvenNumbers = dummyArray.filter((element) => element % 2 === 0)
```

## Array.reduce()

- Takes in a reducer function and returns single value
- Use when combining all elements from array into one value

```js
let dummyArray = [1, 3, 5, 6, 8, 12]
const startingValue = 0

// Returns 35
const sum = dummyArray.reduce((previousVal, currentVal) => previousVal + currentVal, startingValue)
```
