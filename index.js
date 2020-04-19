// 6 kyu
// unique in order - https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    return [...iterable].filter((item, index, arr) => item !== arr[index + 1]);
  };

  