const worker = {
  Name: "Israel",
  LastName: "Israeli",
  salary: 10000,
};
console.log(`the worker name is ${worker.Name} ${worker.LastName} and they earn ${worker.salary} nis`);

worker.address = prompt("Please enter your address")
delete worker.LastName

for (const prop in worker) {
  console.log(`${prop}: ${worker[prop]}`);
}
