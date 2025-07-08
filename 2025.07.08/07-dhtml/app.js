function addFruit() {
    const input = document.getElementById("fruit");
    const fruitName = input.value.trim();
    const list = document.getElementById("list");

    if (fruitName.trim() !== "") {
        const list = document.getElementById("list");
        list.innerHTML += `<li>${fruitName}</li>`;
        input.value = "";
    }
}