let input = document.querySelector("#input");
let savebtn = document.querySelector("#save-btn");
let output = document.querySelector("#para");

let arrnote = [
];

savebtn.addEventListener("click", () => {
  const value = input.value;
  arrnote.push(input.value);
  displaynotes();
});

function displaynotes() {
  output.innerHTML = ""

  arrnote.forEach((note, index) => {
    let newdiv = document.createElement("div");
    let textarea = document.createElement("textarea");
    newdiv.className="mb-3"
    textarea.textContent = ":  " + note;
    textarea.className = "fs-3 w-100 border-0";
    textarea.rows = 2;

    const del = document.createElement("button");
    del.className = "btn btn-danger";
    del.textContent = "Delete";

    del.addEventListener("click",()=>{
        delbtn(index);
    })


    newdiv.appendChild(textarea);
    newdiv.appendChild(del);
    output.appendChild(newdiv);
    input.value = "";
  });
}

function delbtn(index){
    arrnote.splice(index,1)
    displaynotes()
}
