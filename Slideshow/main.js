const img = document.getElementById("img");
const next = document.getElementById("Next");
const prev = document.getElementById("Previous");
const auto = document.getElementById("Autoplay");
const stop = document.getElementById("Stopauto");

let imgs = [
"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1687428554408-cab59bd09364?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
"https://plus.unsplash.com/premium_photo-1687428554400-3ebabab7de29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1730078556460-6699e417bc3f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1680324209533-bda873b09231?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1748350571921-91fcdf35145d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1687428554393-abae29906c75?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1724426159311-29178c27f698?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
"https://plus.unsplash.com/premium_photo-1724426106409-a5e6d3fa2b30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
];

let currIndex = 0;
let id;

function Images(index) {
  img.src = imgs[index];
}

Images(currIndex);

function NextImg() {
  if (currIndex < imgs.length - 1) {
    currIndex++;
    Images(currIndex);
  } else {
    currIndex = 0;
    Images(currIndex);
  }
}

next.addEventListener("click", () => {
  NextImg();
});

function PrevImg() {
  if (currIndex > 0) {
    // 4>4
    currIndex--;
    Images(currIndex);
  }
}

prev.addEventListener("click", () => {
  PrevImg();
});

function AutoPlay() {
 id= setInterval(() => {
    if (currIndex < imgs.length - 1) {
      currIndex++;
      Images(currIndex);
    } else {
      currIndex = 0;
      Images(currIndex);
    }
  },1000);
}

auto.addEventListener('click',()=>{
    AutoPlay()
})

function StopPlay(){
   clearInterval(id)
}

stop.addEventListener('click',()=>{
    StopPlay()
})