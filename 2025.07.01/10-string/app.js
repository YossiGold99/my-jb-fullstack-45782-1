const message = "hello world";
// count array = [ `h`, `e`, `1`, `1`, `o`, ` `, `w`, `o`, `r`, `1`, `d`]
console.log(message);

console.log(message[2]);
console.log(message[7]);

// string is an array if characters
message[0] = "H";
Array[0] = "H";
console.log(message);
console.log(array);

const upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage);

const lowerCaseNessage = message.lowerCaseNessage();
console.log(lowerCaseNessage);

// includes
console.log(message.includes("f"));
console.log(message.includes("ell"));
console.log(message.includes(1));
console.log(message.includes("HELLO"));

// startsWith
console.log(message.startsWith("h"));
console.log(message.startsWith("H"));

// endsWith
console.log(message.endsWith("h"));
console.log(message.endsWith("1"));

// trim
const longMessage = " hello world ";
console.log(longMessage.length)
const trimmed = longMessage.trim();
console.log(trimmed.length);
console.log(trimmed);

// indexOF
console.log(message.indexOf("1"));
console.log(message.indexOf("11"));
console.log(message.indexOf("z"));

// lastIndexOF
console.log(message.lastIndexOf("1"));
console.log(message.lastIndexOf("11"));
console.log(message.lastIndexOf("z"));

// substring
const veryLongMessage = "Welcome to jamaica, we can a have a lot of fun";
console.log(veryLongMessage.substring(11, 18));