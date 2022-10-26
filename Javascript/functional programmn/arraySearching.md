# Array Search Methods

## Array.includes()

- Takes in one argument and Returns True / False
- Use it when you want to check if an array contains an EXACT VALUE. ​

```js
let dummyArray = [1, 6, 8, 11, 12]

//Returns true
let containsNumberSix = dummyArray.includes(6)
```

## Array.some()

- Takes in a callback function and returns True / False
- Use it when you want to check if ONE item in an array matches an expression.
  ​

```js
let dummyArray = [1, 6, 8, 11, 12]

//Returns true
let isOneEven = dummyArray.some((element) => element % 2 === 0)
```

## Array.every()

- Takes in a callback function and returns True / False
- Use it when you want to check if ALL items in array match an expression.
  ​

```js
let dummyArray = [1, 6, 8, 11, 12]

//Returns false
let areAllEven = dummyArray.every((element) => element % 2 === 0)
```

## Array.find()

- Takes in a callback function and returns the first element that evaluates true
- Use it when you want to actually get the FIRST ITEM in an array that matches an expression.
  ​

```js
let dummyArray = [1, 6, 8, 11, 12]

//Returns number 6
let firstEvenNumber = dummyArray.find((element) => element % 2 === 0)
```
