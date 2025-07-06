const password = prompt(`enter password`)

let isSixCharsLong = password.length >= 6;
let hasCapitalLetter = password.toLowerCase() !== password;
let haLowerCaseLetter = password.toUpperCase() !== password;
let hasDigit = false;
let hasSpecialChar = false;

for (const char of password) {
    if (`1234567890`.includes(chae)) hasDigit = true
    if (Number(char) !== NaN) hasDigit = true
}


if (hasCapitalLetter && hasLowerCaseLetter && hasDigit && hasSpecialChar && isSixCharsLong) {
    console.log(`great password`)
} else {
    //   if (isSixCharsLong === false) console.log("too short");
    if (!isSixCharsLong) console.log("too short");
    if (hasCapitalLetter === false) console.log("need capital letter");
    if (hasLowerCaseLetter === false) console.log("need lower case letter");
    if (hasDigit === false) console.log("need digit");
    if (hasSpecialChar === false) console.log("need special char");
}
