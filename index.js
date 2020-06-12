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


// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string) {
  //...
  //   let a = 97;
  //   let z = 122;

  //   for(let i = a; i <= z; i++) {
  //     if(!string.toLowerCase().includes(String.fromCharCode(i))) return false;
  //   }
  //   return true;
  //   let regex = /[^a-z]+/gi;
  //   const worth = string.toLowerCase().replace(regex, '');
  //   const itsMatched = new Set(Array.from(worth)).size;
  //   return itsMatched === 26;
  return [..."abcdefghijklmnopqrstuvwxyz"].every(
    (char) => string.toLowerCase().indexOf(char) !== -1
  );
    
  // https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
function moreZeros(s) {
  let array = s.split("");
  let newArray = array.map((char) => {
    return char.charCodeAt(0).toString(2);
  });
  let solution = [];
  for (let i = 0; i < newArray.length; i++) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let j = 0; j < newArray[i].length; j++) {
      if (newArray[i][j] == 0) {
        zeroCount++;
      } else {
        oneCount++;
      }
    }
    if (oneCount < zeroCount) {
      solution.push(s[i]);
    }
  }
  return [...new Set(solution)];
}

    // Solution 2

// return [...new Set([...s].filter((letter) => {
//     let binary = letter.charCodeAt().toString(2);
//     let numberOfZeroes = binary.replace(/1/g,'').length;  //.filter(num => num*1 === 0).length;
//     let numberOfOnes = binary.replace(/0/g,'').length;  //.filter(num => num*1 === 1).length;
//     return numberOfZeroes > numberOfOnes;
//   }))]

// https://www.codewars.com/kata/59e61c577905df540000016b/train/javascript

function hungrySeven(arr) {
  //   let pos = arr.join('').indexOf('789');
  //   if(pos === -1) return arr;
  //   arr.splice(pos, 3, 8,9,7);
  //   return hungrySeven(arr);
  return ~arr.join("").indexOf("789")
    ? hungrySeven(arr.join("").replace("789", "897").split(""))
    : arr.map((x) => +x);
}
// Solution 2
//   arr = arr.join('');
//   while(/789/.test(arr)) {
//     arr = arr.replace(/789/g, '897');
//   }
//   return arr.split('').map(x => x*1);
// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
