const firstName = prompt("enter firsr name");
const lastNane = prompt("enter last naem");

function printStyledledName (anyname){
    console.log(`${anyname[0].toUpperCase}${anyname.substring(1)}`);
}

// function printStyledFirstName() {
//     console.log(`${firstName[0].toUpperCase()} ${firstName.substring}`);
// }

// function printStyledlastName() {
//     console.log(`${lastNane[0].toUpperCase()} ${lastNaneName.substring}`);
// }

// printStyledFirstName
printStyledName(firstName);
// printStyledlastName
printStyledName(lastNane);