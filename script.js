// For each method
let arrA = [1, 'lo', true];

arrA.forEach(item => console.log(item));

arrA.forEach((item, idx, arrA) => {
    arrA[idx] = item + 'hi';
});

// filter method
let arrB = arrA.filter(item => item.length > 1);
console.log(arrB);
