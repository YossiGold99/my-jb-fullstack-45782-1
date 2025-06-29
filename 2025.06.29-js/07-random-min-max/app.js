const min =+prompt("enter a min")
const max =+prompt("enter a max")


const random = Math.random(); //0 - 0.9999
console.log(parseInt(random * (max - min +100)) + min);
// console.log(parseInt(random * 20));
// console.log(parseInt(random * 20) + 10); 