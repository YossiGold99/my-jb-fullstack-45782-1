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
let totalSum = 0;
let totalCount = 0;
for (let student of students) {
    for (let grade of student.grades) {
        totalSum += grade;
        totalCount++;
    }
}
const classAverage = totalSum / totalCount;
console.log("Class average is:", classAverage);