let x = document.getElementById("submit")
x.addEventListener("click", ()=> {
let color = Math.random()*16777216
  let random = Math.floor(color)
  let str = '#'+random.toString(16)
  x.textContent = str
   document.body.style.backgroundColor = str
})

let y = document.getElementById("copy")
y.addEventListener("click",()=>{
    let copy = x.textContent;
    navigator.clipboard.writeText(copy)
    alert("Copied")
})


