# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nevets/lotide`

**Require it:**

`const _ = require('@nevets/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the first character of a string
* `tail(...)`: returns all but the first character of a string
* `middle(...)`: returns the middle character of a string, two middle characters if string has even amount of characters
* `countLetters(...)`: returns how many times a letter is used in a string
* `countOnly(allItems, ItemsToCount)`: returns how many instances of each string were found in the array of strings
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false based on a perfect match
* `findKey(object, callback)`: returns the first key for which the callback returns a truthy value
* `letterPositions(sentence)`: returns all the indices (zero-based positions) in the string where each character is found
* `map(array, callback)`: returns a new array based on the results of the callback function
* `takeUntil()`: returns a new array of elements from an existing array up until a condition is met
* `without(sourceArray, itemsToRemove)`: return a subset of a given array, removing unwanted elements