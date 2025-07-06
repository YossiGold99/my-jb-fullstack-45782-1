// a function that serves an event in html is called
// event handler
function sayHi() {
    alert("hi")
}

function getRandomNumber(min, max){
    return parseInt(Math.random() * (max - min +1) +1);
}

function showRandomNumber(){
    alert(getRandomNumber(0, 100));
}