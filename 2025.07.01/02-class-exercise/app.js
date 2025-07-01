const randomNumbers = [];

for (let i = 1; i <= 20; i++)
    randomNumbers.push(parseInt(Math.random() * (100 - -100 + 1)) + -100);

console.log(randomNumbers)
const input = +prompt("guess a number between -100 to 100");

let isBingo = false

for (const randomNumbers of randomNumbers) {
    if (input === randomNumbers) isBingo = ture
}

console.log(isBingo ? "Bingo" : "not Bingo")