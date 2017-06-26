var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
}

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
}

var addElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
}

var destructivelyAddElementToEndOfArray = (arr, el) => {
  arr.push(el);
  return arr;
}

var accessElementInArray = (arr, index) => {
  return arr[index];
}

var destructivelyRemoveElementFromBeginningOfArray = (arr) => {
  arr.shift();
  return arr;
}

var removeElementFromBeginningOfArray = (arr) => {
  arr.shift();
  return arr;
}

var destructivelyRemoveElementFromEndOfArray = (arr) => {
  arr.pop();
  return arr;
}

var removeElementFromEndOfArray = (arr) => {
  arr.pop();
  return arr;
}
