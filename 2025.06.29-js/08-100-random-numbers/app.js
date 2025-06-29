const min =+prompt("enter a min")
const max =+prompt("enter a max")

for (let i = 1; i <= 100; i++) {
    const random = Math.random(); //0 - 0.9999
    console.log(parseInt(random * (max - min + 1)) + min);;
}