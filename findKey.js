

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  
  let newArr = Object.keys(obj);

  for (let keys of newArr) {
    //console.log(obj);
    //console.log(keys);
    //console.log(obj[keys]);
    //console.log(callback(newArr));
    if (callback(obj[keys])) {
      return keys;
    } 
  }
  return undefined;
}

// create function that takes two parameters: object and callback
// iterate through the object and return the first key for which the call back returns truthy
// if no key is found, return undefined

//tests
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill")); // => "noma"