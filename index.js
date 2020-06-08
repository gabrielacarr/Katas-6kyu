// 6 kyu
// unique in order - https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    return [...iterable].filter((item, index, arr) => item !== arr[index + 1]);
  };

  function christmasTree(height) {
    //   let xmasT = '';
    //   for(let i = 0; i<height; i++) {
    //     for(let j = 0; j < (height -i -1); j++) {
    //       xmasT+= " ";
    //     }
    //     for(let k = 0; k < (2*i+1); k++) {
    //       xmasT+="*";
    //     }
    //     for(let r = 0; r < (height -i -1); r++) {
    //       xmasT+= " ";
    //     }
    //     if(i !== height-1) {
    //       xmasT += '\n';
    //     }
    //   }
    //   return xmasT;
    
    return [...new Array(height).keys()]
    .map((row, i) => row + i + 1)
    .reverse()
    .map((row, i) => " ".repeat(i) + "*".repeat(row) + " ".repeat(i))
    .reverse()
    .join("\n");
}

// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
var splitInteger = function (num, parts) {
  // solution one
  let additional = num % parts;
  return [
    ...new Array(parts - additional).fill(Math.floor(num / parts)),
    ...new Array(additional).fill(Math.ceil(num / parts)),
  ];

  // solution two:
  //   let base = Math.floor(num/parts);
  //   let answer = [];
  //   // let additional = num - (parts*base);
  //   let additional = num % parts;
  //   for(let i = 0; i < parts; i++) {
  //     answer[i]=base;
  //   }
  //   for(let i = 1; i <= additional; i++) {
  //     answer[parts-i]+=1;
  //   }
  //   return answer

  // solution three
  //   let answer = [];
  //   let numOne = Math.floor(num/parts);
  //   let amountOfTimeOne = parts-(num%numOne);
  //   let amountOfTimeTwo = parts-amountOfTimeOne;
  //   let numTwo = (num - (numOne*amountOfTimeOne)) / amountOfTimeTwo;
  //   while(answer.length < amountOfTimeOne) {
  //     answer.push(numOne);
  //   }
  //   while(answer.length < parts) {
  //     answer.push(numTwo);
  //   }
  //   return answer;

  // soltution four
  //   var array = [];
  //   for (var i = 0; i < parts; ++i)
  //     array[i] = Math.floor(num / parts) + (i < num % parts);
  //   return array;
};

// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
function letterCount(s) {
  //your code here
  //   let hash = {};
  //   for(let i = 0; i < s.length; i++) {
  //     if(hash[s[i]]) {
  //       hash[s[i]]++;
  //     } else {
  //       hash[s[i]] = 1;
  //     }
  //   }
  //   return hash;
  //   let obj = {};
  //   s.split('').forEach(el => {
  //     obj[el]? obj[el]++ : obj[el]=1;
  //   });
  //   return obj;
  return [...s].reduce(
    (acc, val) => (acc[val] ? acc[val]++ : (acc[val] = 1), acc),
    {}
  );
}
