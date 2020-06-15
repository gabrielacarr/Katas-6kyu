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
    
 function cakes(recipe, available) {
  let ans = Infinity;
  for (let key in recipe) {
    if (available[key]) {
      if (ans > available[key] / recipe[key]) {
        ans = Math.floor(available[key] / recipe[key]);
      }
    } else {
      ans = 0;
      break;
    }
  }
  return ans;

  //   return Math.min(...Object.keys(recipe).map(key => Math.floor(available[key]/recipe[key] || 0)))
}
// https://www.codewars.com/kata/5a959662373c2e761d000183/train/javascript

const ticker = (text, width, tick) => {
  text = [...text];
  const spaces = Array.from({ length: width }, (_) => " ");
  text = spaces.concat(text);
  for (let i = 0; i < tick; i++) {
    let ch = text.shift();
    text.push(ch);
  }
  return text.slice(0, width).join("");
};
// Solution 2
//   const space = ' '.repeat(width);
//   const setText = space + text + space;
//   tick = tick % (setText.length-width);
//   const result = setText.substring(tick, tick+width);
//   return result;

// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
var encryptThis = function (text) {
  //   console.log(text.split(' '))
  return text
    .split(" ")
    .map((v) => {
      let wordArr = [...v];
      if (v.length > 2) {
        [wordArr[1], wordArr[wordArr.length - 1]] = [
          wordArr[wordArr.length - 1],
          wordArr[1],
        ];
        //       let hv = wordArr[1];
        //       wordArr[1] = wordArr[wordArr.length-1];
        //       wordArr[wordArr.length-1] = hv;
      }
      wordArr[0] = wordArr[0].charCodeAt();
      return wordArr.join("");
    })
    .join(" ");
};
/** 
  let firstLetter = true;
    text = text.split('');
    let secondLetter = 0;
    let ls = 0;
    let secondLetterCheck = 1;
    for(let i = 0; i < text.length; i++) {
      if(firstLetter) {
        if(text[i+1] !== ' ') {
          secondLetter = i+1;
        }
        text[i] = text[i].charCodeAt();
        firstLetter = false;
        secondLetterCheck = i + 1;
      } else if(text[i] === ' ') {
          if(secondLetter === secondLetterCheck) {
            ls = text[i-1];
            text[i-1] = text[secondLetter];
            text[secondLetter] = ls;
          }
          firstLetter = true;
      } else if() { 
        ls = text[i];
        text[i] = text[secondLetter];
        text[secondLetter] = ls;
      }
    }
    return text.join('');
  */
//  https://www.codewars.com/kata/5946a0a64a2c5b596500019a
function splitAndAdd(arr, n) {
  //   if(n < 1) return arr;
  //   for(let i = 0; i < n  ; i++) {
  //     let halfWay = Math.floor(arr.length/2);
  //     let firstHalf = arr.slice(0, halfWay);
  //     let secondHalf = arr.slice(halfWay);
  //     if(firstHalf.length !== secondHalf.length) {
  //       firstHalf.unshift(0);
  //     }
  //     arr = firstHalf.map((e,i) => e+secondHalf[i]);
  //   }
  //   return arr;

  //   if(n < 1) return arr;
  //   let halfWay = Math.floor(arr.length/2);
  //   let firstHalf = arr.slice(0, halfWay);
  //   let secondHalf = arr.slice(halfWay);
  //   if(firstHalf.length !== secondHalf.length) {
  //     firstHalf.unshift(0);
  //   }
  //   arr = firstHalf.map((e,i) => e+secondHalf[i]);
  //   return splitAndAdd(arr, --n);
  return n < 1
    ? arr
    : splitAndAdd(
        (arr % 2 === 1 ? [0, ...arr] : arr)
          .splice(0, arr.length / 2)
          .reverse()
          .reduce((a, v, i) => ((a[i] += v), a), arr.reverse())
          .reverse(),
        --n
      );
}
// https://www.codewars.com/kata/55de9c184bb732a87f000055/train/javascript
function reverse(arr) {
  for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
    let t = arr[left];
    arr[left] = arr[right];
    arr[right] = t;
  }
}
// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54
function workOnStrings(a, b) {
  const counter = (s) =>
    [...s.toLowerCase()].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {});
  let switchCase = (s) =>
    s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
  let toSwitchA = Object.keys(counter(a)).filter(
    (letter) => counter(a)[letter] % 2 === 1
  );
  let toSwitchB = Object.keys(counter(b)).filter(
    (letter) => counter(b)[letter] % 2 === 1
  );
  let replacedA = [...a]
    .map((letter) =>
      toSwitchB.includes(letter.toLowerCase()) ? switchCase(letter) : letter
    )
    .join("");
  let replacedB = [...b]
    .map((letter) =>
      toSwitchA.includes(letter.toLowerCase()) ? switchCase(letter) : letter
    )
    .join("");
  return replacedA + replacedB;
}
// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
function iqTest(numbers) {
  //     let counterI = 0;
  //     let indexI = 0;
  //     let indexO = 0;
  //     numbers = numbers.split(' ');
  //     for(let i = 0; i < numbers.length; i++ ) {
  //       numbers[i] % 2 === 0 ? (counterI++, indexI=i) : indexO=i;
  //     }
  //     return counterI === 1 ? indexI+1 : indexO+1
  numbers = numbers.split(" ").map((num) => num % 2);
  return numbers.reduce((a, v) => a + v) === 1
    ? numbers.indexOf(1) + 1
    : numbers.indexOf(0) + 1;
}
// console.time('iqtest1')
// iqTest1('1 1 0 1');
// console.timeEnd('iqtest1')

// console.time('iqtest2')
// iqTest2('1 1 0 1');
// console.timeEnd('iqtest2')

// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

// Solution 1
// function findNb(m) {
//   while(m > 0) {
//     num++;
//     m -= Math.pow(num, 3);
//   }
//   return 0 === m ? num : -1;
// }

//  Solution 2
// function findNb(m, num = 1) {
//   return m > 0 ? findNb(m -= Math.pow(num, 3), ++num) : (m === 0 ? num-1 : -1);
// }

// Solution 3
function findNbRecursive(m, n) {
  if (m === 0) return n - 1;
  if (m < 0) return -1;
  return findNbRecursive(m - n ** 3, n + 1);
}

function findNb(m) {
  return findNbRecursive(m, 1);
}
