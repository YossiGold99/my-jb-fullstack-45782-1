const numbers = [12, 45, 7, 89, 23];
const age = [5, 92, 17, 38, 61];

function maxNumber(array){
    let max = 0;
    for (let i = 1; i < array.length; i++){
        if (array[i] > max){
            max = array[i]
        }
    }
    return max;
}

console.log("max of number;", maxNumber(numbers));
console.log("max of ages;", maxNumber(age));


// פתרון של הכיתה 
// const grades = [90, 80, 78];
// const ages = [12, 24, 55, 66, 34, 21, 33];

// function printMaxItemOfArray(array, label) {
//   let max = 0;
//   for (const item of array) {
//     if (item > max) max = item;
//   }
//   console.log(`max ${label} is ${max}`);
// }

// printMaxItemOfArray(grades, "grade");

// printMaxItemOfArray(ages, "age", "age");

// printMaxItemOfArray(ages);