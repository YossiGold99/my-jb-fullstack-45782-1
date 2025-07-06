const { use } = require("react");

const user = {
  id:223,
  name: "dan",
}

// non persistent cookie
// document.cookie = JSON.stringify(user);

// sessionStorage.setItem("userData", JSON.stringify(user));
// console.log(sessionStorage.getItem("userData"));

let numberOfVisits = localStorage.getItem("numberOfVisits") || 0;
numberOfVisits++;
localStorage.setItem("numberOfVisits", numberOfVisits);
console.log(numberOfVisits);

localStorage.setItem("user", JSON.stringify(user));
const userFromLocalStorange = JSON.parse(localStorage.getItem("user"));
console.log(userFromLocalStorange.name);