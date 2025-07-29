"use strict";

(() => {

    const numbers = [3, 8, 16, 5, 67, 88 ,99]

    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject('boom')
            resolve(num ** 2)
        }, 1 * 1000);
    })


  Promise.all(numbers.map(getSquareValuePromise))
        .then(console.log)
        .catch(console.error)

    // Promise.all([
    //     getSquareValuePromise(numbers[0]),
    //     getSquareValuePromise(numbers[1]),
    //     getSquareValuePromise(numbers[2]),
    // ])
    //     .then(console.log)
    //     .catch(console.error)


    // getSquareValuePromise(numbers[0])
    //     .then(result => {
    //         console.log(result)
    //         return getSquareValuePromise(numbers[1])
    //     })

    //     .then(result => {
    //         console.log(result)
    //         return getSquareValuePromise(numbers[2])
    //     })

    //     .then(result => {
    //         console.log(result)
    //     })
    //     .catch(console.error)

})()