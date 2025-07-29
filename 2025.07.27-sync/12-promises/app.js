"use strict";

(() => {

    const getAsyncRandomNumber = (max, callback) => {
        // console.log(`getAsyncRandomNumber was invoked with max: ${max}`)
        setTimeout(() => {
            const random = Math.random() * max
            console.log(`got max ${max}`)
            if(random > max) errorCallback('internal server error')
            else successCaalback(randoom)
            callback(random)
        }, 1000)
    }


        const getAsyncRandomNumberPromise = (max) => {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
            const random = Math.random() * max
            console.log(`got max ${max}`)
            if(random > max) reject('internal server error')
            else resolve(randoom)

        }, 1000)
        })
       
    }



    // let max = 100;
    // for (let i = 1; i <= 10; i++) {
    //     getAsyncRandomNumber(max, result => {
    //         max = result
    //     })
    // }
})()