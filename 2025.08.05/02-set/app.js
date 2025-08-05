"use strict";

(async () => {

    const mySet = new Set()
    // set is a collection 
    // much like an array
    myGrades.add[90]
    myGrades.add[96]
    myGrades.add[72]
    // set can only hold UNIQUE values

    console.log(myGrades)

    // for performance considerations: set functions work with O(1)
    console.log[90, 96, 72]
    console.log(`the grade 96 is present in the set?${myGrades.has(96)}`)

    // here is an array
    const grades = [78, 82, 88, 90, 92, 92, 96, 96, 96, 96, 99]

    // create an array form grades with only uniques values
    // [78, 82, 88, 90, 92, 92, 96, 96, 96 ,96, 99]
    // [72, 82, 88, 90 ,92, 96, 99]

    console.log(
        grades.reduce((cumulative, current) => {
            const cum = [...cumulative]

            const isInArray = cum.includes(current)
            if (!isInArray) cum.push(current)
            return cum
        }, [])
    )

    // use set to do the same in a single command!
    // 2 clues
    // 1. a set can be initiated with a array e.g const mySet = new Set (myArray)
    // 2. ...

    const uniqueGrades = [...new Set(grades)] // the elegant way to unique an array in javascript 
    console.log(uniqueGrades)

})()