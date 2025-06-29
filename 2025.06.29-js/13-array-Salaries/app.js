const salaries  = [100, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// console.log(Salaries);

let sum = 0;
let max = 0;
for (const salary of salaries) {
  console.log(salary);

  sum += salary;

  if (salary > max) max = salary;
}

console.log(`average salary is ${sum / salaries.length}`);
console.log(`maximum salary is ${max}`);