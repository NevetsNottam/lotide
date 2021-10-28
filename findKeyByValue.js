

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🍎 🍎 🍎  Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, val) {
  let newArr = Object.keys(obj);
  for (let keys of newArr) {
    if (val === obj[keys]) {
      return keys;
    }
  }
}
// iterate over object 
// return the first key that contains the given value
// OTHERWISE:
// if no key matches the given value return undefined


  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  

