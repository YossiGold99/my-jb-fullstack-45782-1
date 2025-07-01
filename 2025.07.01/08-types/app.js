const number = 123;
console.log (typeof number);

const anotherNumber = 123;
console.log(typeof anotherNumber);

const isBingo = true;
console.log(typeof isBingo);

console.log(`isBingo is ${typeof isBingo === "boolean" ? "" : "not"} `);

const result = 4 + 4;
console.log(typeof result);

const result2 = "4" +"4";
console.log(typeof result2);

let something;
if(something === undefined) console.log("something is undefined");
if(typeof something === undefined)console.log("something is undefined")

something.log(typeof something);

const student = {
    name: "ido",
    city: "rosh haayin",
    grade: [80, 85, 90]
}

console.log(typeof student);
console.log(typeof student.grade);
console.log(typeof student.grade[0]);

const studentsJSON = `
    [
        {
            "name": "ido",
            "city": "tel aviv",
            "grades": [98,87,78],
            "age": 25
        }
    ]
`;
console.log(typeof studentsJSON);
console.log(typeof JSON.parse(studentsJSON))