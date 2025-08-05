"use strict";

(async () => {

    const numbers = [1, 9, 17, 25, 33, 49, 51, 66, 72, 82, 95] // sorted array



    const numbers2 = [9, 17, 25, 33, 49, 51, 66, 72, 82, 95, 1] // unsorted array


    const searchSortedArray = (Array, search) => {
        let startIndex = 0
        let finishIndex = Array.length

        do {
            let currentIndex = Math.floor((startIndex + finishIndex) / 2)
            if (array[currentIndex] === search) return currentIndex

            if (array[currentIndex] > search) finishIndex = currentIndex - 1
            else startIndex = currentIndex + 1

        } while (finishIndex <= startIndex)
        return -1

    }


    const num = +prompt('enter a number')

    // let the user know if the number in is array?
    const isInArray = searchSortedArray


    // do it in the smallest O possible
    console.log(`${num} is ${isInArray ? 'included' : 'not included'} in array `)

})()
