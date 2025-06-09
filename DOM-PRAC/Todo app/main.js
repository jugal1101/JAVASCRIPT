const inputbox = document.getElementById("input-box");
const input = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("output-box");

let todos = [];
function dissplayTodos() {
    output.innerHTML = ""; 

    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const delButton = document.createElement("button");

        div.className = "d-flex justify-content-between my-3";
        delButton.className = "btn btn-danger";

        p.textContent = todo;
        delButton.textContent = "Delete";

        div.appendChild(p);
        div.appendChild(delButton);
        output.appendChild(div);
    });
}
button.addEventListener('click', () => {
    const value = input.value;
    todos.push(value); 
    dissplayTodos();  
});