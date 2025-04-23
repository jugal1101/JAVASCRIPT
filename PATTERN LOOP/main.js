let x = 10;
let y = 10;
for(let i = 1; i<=19; i++){
  for(let j = 1; j<20; j++){
    if(j==x || j==y){
   document.writeln("*")
    }else{
  document.writeln("&nbsp&nbsp&nbsp")
    }
  }
  document.writeln("<br>")

  if(i<10){
   x--;    // i=1  x=9 y=11   i=9 
   y++;
  }else{
    x++;   // i=10
    y--;
  }
}


