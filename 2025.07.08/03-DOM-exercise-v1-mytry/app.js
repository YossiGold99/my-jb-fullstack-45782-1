function color() {
    const color = prompt("enter color");
    document.getElementById("container").style.backgroundColor = color;
}

function paintDiv() {
    const color = prompt("enter color");
    document.getElementById("container2").style.backgroundColor = color;
}

function color2() {
    const color = prompt("enter color");
    document.getElementById("container3").style.backgroundColor = color;
}


function changeInputsBackground() {
    const color = prompt("enter color");
    for (const element of document.querySelectorAll("form>input")) {
        element.style.backgroundColor = color;
    }
}