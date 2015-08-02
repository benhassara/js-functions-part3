// add scripts

console.log("sanity check!");

function getUniqueValues(array) {
  var uniques = [];

  for (var i = 0; i < array.length; i++) {
    if(uniques.indexOf(array[i]) === -1)
      uniques.push(array[i]);
  }

  return uniques;
}

function testBooleanLogic(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === true)
      return true;
  }

  return false;
}

function captureTwins(array) {
  var chunked = [];
  var bools;

  if (array.length % 2 !== 0)
    return false;

  for (var i = 0; i < array.length-1; i+=2)
    chunked.push([array[i], array[i+1]]);

  bools = chunked.map(function(a){
    return a[0] === a[1];
  });

  for (var b = 0; b < bools.length; b++) {
    if (bools[b] === false)
      return false;
  }

  return true;
}

function getVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return  vowels.filter(function(a){return str.includes(a);});
}

function outputObject(obj) {
  var props = Object.getOwnPropertyNames(obj);
  var out = "";

  for (var i = 0; i < props.length; i++) {
    if (i === props.length - 1)
      out += 'and ' + props[i] + ' is ' + obj[props[i]];
    else
      out += props[i] + ' is ' + obj[props[i]] + ', ';
  }

  return out;
}

function removeCharacter(str, char) {
  var strCopy = str.slice(0);

  while (strCopy.indexOf(char) !== -1)
    strCopy = strCopy.replace(char, '');

  return strCopy;
}

function getNegativeIndex(arr, ind) {
  //ind should be neg value
  return arr[arr.length + ind];
}

function createObject(key, value) {
  var obj = {};
  obj[key] = value;
  return obj;
}

function getTotalLetters(strArr) {
  return strArr.reduce(function(total, current){
    return total += current.length;
  }, 0);
}

function getStudentName(obj) {
  return obj.name;
}
