const sentence = prompt("enter a sentence")

const firstWord = sentence.substring(0, sentence.indexOf(" "))
console.log(firstWord);

// if we want to substring until the end of String, we can omit the 2nd argument
const lastWord = sentence.substring(sentence.lastIndexOf(" ") + 1, sentence.length);
console.log(lastWord);