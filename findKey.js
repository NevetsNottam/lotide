

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

module.exports = findKey;