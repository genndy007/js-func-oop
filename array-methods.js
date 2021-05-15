// 2 examples for each method listed down there
// forEach method
let arrA = [1, 'lo', true];

arrA.forEach(item =>
    console.log('Selected item is ' + item + ' ' + typeof item)
);

arrA.forEach((item, idx, arrA) => {
    arrA[idx] = item + 'hi';
});

// filter method
let arrB = arrA.filter(item => item.endsWith('hi'));
console.log(arrB);
let arrC = arrA.filter(item => item.startsWith('lo'));
console.log(arrC);

// map method
let arrBLower = arrB.map(item => item.toLowerCase());
console.log(arrBLower);
let arrBUpper = arrB.map(item => item.toUpperCase());
console.log(arrBUpper);

// every, some method
let flagEveryNumber = arrA.every(item => typeof item === 'number');
let flagSomeEqualTo3 = arrA.some(item => item === 3);
console.log(flagEveryNumber);
console.log(flagSomeEqualTo3);

// reduce method
let summary = [1, 4, 5, 6, 2].reduce((agr, cur) => agr + cur);
console.log(summary);
let numbersProduct = [7, 5, 3, 8, 2].reduce((agr, cur) => agr * cur);
console.log(numbersProduct);
