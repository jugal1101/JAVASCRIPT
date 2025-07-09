let btn = document.querySelector(".btn")
let img = document.getElementById("img")

function dogapi(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data)=>{
     img.src = data.message
    });
}
   

btn.addEventListener('click',()=>{
    dogapi();
})
dogapi();

