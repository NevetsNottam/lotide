const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
      else {
        result = true;
      }
    }
    return result;
  }
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ ✅ ✅  Assertion Passed: ${arr1} is exactly the same as ${arr2}`);
  }
  else {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${arr1} is not the same as ${arr2}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { //loop through array
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));

/*

another way of doing the solution using the delete keyword


const letterPositions = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    let arr = [];
    for (let i=0; i< sentence.length ; i++) {
      if (sentence[i] === letter) {
        arr.push(i);
      }
    }
    results[letter] = arr
  } 
  delete results[" "]
  return results;
};

console.log(letterPositions("hello all"));
// assertArraysEqual(letterPositions("hello").e, [1]);
*/