const students = [
    {
        name: "Ido",
        gender: "male",
        age: 20,
        city: "rosh haayin",
        grades: [98, 67, 80]
    },
    {
        name: "Lior",
        gender: "male",
        age: 24,
        city: "arsuf ilit",
        grades: [91, 55, 77]
    },
    {
        name: "Itay",
        gender: "male",
        age: 30,
        city: "Haifa",
        grades: [15, 61, 91]
    }
]
let max = 0;
let min = 100;
let maxStudent, minStudent;

for (let student of students) {
    for (let grade of student.grades) {
        if (grade > max) {
            max = grade;
            maxStudent = student.name
        }
        if (grade < min) {
            min = grade;
            minStudent = student.name
        }
    }
}

console.log(`max is ${max} by ${maxStudent},min is ${min} by ${minStudent}`)
