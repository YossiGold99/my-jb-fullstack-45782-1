const min = +prompt('enter number')
const max = +prompt('enter number')

if (min > max ) {
    let helper = min;
    min = max
    max = helper

}

for(let count = -100; count <= 100; count += 2) {
    document.write(`${count}<br>`)
}