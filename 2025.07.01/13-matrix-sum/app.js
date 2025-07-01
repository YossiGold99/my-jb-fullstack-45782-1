const grades = [
    [80, 90, 100],
    [70, 80, 90],
    [60, 98, 78],
    [77, 60, 92],
]
let sum = 0;
for (const studentGrades of grades){
for (const grade of studentGrades) {
    sum += grade;
    }
}
console.log(sum);