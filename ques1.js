

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let func1 = function (array, callback) {
  let response = callback(array);
  return response;
}

let func2 = function (arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = arr[i] * 2;
  }
  return newarr;
}

console.log(func1(arr1, func2));

