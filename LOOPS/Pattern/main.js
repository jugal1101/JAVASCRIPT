//
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//   for (let h = i; h < 5; h++) {
//     document.writeln("-");
//   }
//   for (let j = 1; j <= i; j++) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }

//
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

// for (let i = 1; i<=5; i++) {
//   for(let h=i; h<5; h++){
//     document.writeln("-")
//   }
//   for (let j = i; j>= 1; j--) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }

//
//         5
//       4 5
//     3 4 5
//   2 3 4 5
// 1 2 3 4 5

// for (let i = 5; i >= 1; i--) {
//     for (let h = 1; h < i; h++) {
//       document.write("&nbsp; ");
//     }

//     for (let j = i; j <= 5; j++) {
//       document.write(j);
//     }

//     document.write("<br>");
//   }

//
//         5
//       5 4
//     5 4 3
//   5 4 3 2
// 5 4 3 2 1

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln(j)
//     }
//     document.writeln("<br>")
// }

//
//         1
//       2 2
//     3 3 3
//   4 4 4 4
// 5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
//       for (let h = i; h < 5; h++) {
//         document.writeln("-");
//       }
//       for (let j = 1; j <= i; j++) {
//         document.writeln(i);
//       }
//       document.writeln("<br>");
//     }

//
//         5
//       4 4
//     3 3 3
//   2 2 2 2
// 1 1 1 1 1

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln(i)
//     }
//     document.writeln("<br>")
// }

//
// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2
//         1

// for(let i=5; i>=1; i--){
//    for(let h=i; h<5; h++){
//     document.writeln("&nbsp;&nbsp;")
//    }
//     for(let j=1; j<=i; j++){
//         document.writeln(j);
//     }
//     document.writeln("<br>")
// }

//
// 1 2 3 4 5
//   2 3 4 5
//     3 4 5
//       4 5
//         5

// for(let i=1; i<=5; i++){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=i; j<=5; j++){
//        document.writeln(j);
//     }
//     document.writeln("<br>")
// }

//
// 5 4 3 2 1
//   5 4 3 2
//     5 4 3
//       5 4
//         5

// for(let i=1; i<=5; i++){
//   for(let h=1; h<i; h++){
//     document.writeln("&nbsp;&nbsp;")
//   }
//     for(let j=5; j>=i; j--){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

//
// 5 4 3 2 1
//   4 3 2 1
//     3 2 1
//       2 1
//         1

// for(let i=5; i>=1; i--){
//     for(let h=i; h<5; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=i; j>=1; j--){
//      document.writeln(j)
//     }
//     document.writeln("<br>")
// }

//
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// for(let i=5; i>=1; i--){
//         for(let h=i; h<5; h++){
//          document.writeln("&nbsp;&nbsp;")
//         }
//         for(let j=i; j>=1; j--){
//          document.writeln("*")
//         }
//         document.writeln("<br>")
//     }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln("*")
//     }
//     document.writeln("<br>")
// }

// for(let i = 1; i <=7; i++){
// for(let j = 1; j<=5; j++){
// if(i==1 || j==1 || i==3 || j==5){
// document.writeln("*")
// }else{
// document.writeln("&nbsp;&nbsp")
// }
// }
// document.writeln("<br>")
// }

// for(let i = 1; i <=7; i++){
//     for(let j = 1; j<=5; j++){
//     if(i==1||j==1 || i==7){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=5; j++){
//     if(i==1 || j==1 || i==4 || i==8){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=5; j++){
//     if(i==1 || j==1 || i==4){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=5; j++){
//     if( j==1 || i==4 || j==5){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=7; j++){
//     if(i==1 || j==4 || i==8){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=5; j++){
//     if(j==1|| i==8){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i = 1; i <=8; i++){
//     for(let j = 1; j<=7; j++){
//     if(i==1 || j==4){
//     document.writeln("*")
//     }else{
//     document.writeln("&nbsp;&nbsp")
//     }
//     }
//     document.writeln("<br>")
//     }

// for(let i =1; i<=5; i++){
//     for(let k =i; k<=5; k++){
//         document.writeln("-")
//             }
// for(let j = 1; j<=i; j++){
// if(j%2==0){
// document.writeln("0")
// }else{
//     document.writeln("1")
// }
// }
// document.writeln("<br>")
// }

// for(let i =1; i<=5; i++){
//     for(let k =i; k<=5; k++){
//         document.writeln("&nbsp;&nbsp")
//             }
// for(let j = 1; j<=i; j++){
// if(i%2==0){
// document.writeln("0")
// }else{
//     document.writeln("1")
// }
// }
// document.writeln("<br>")
// }



// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.writeln(j);
//   }
//   for (let l = i; l < 5; l++) {
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//   }
//   for (let k = i; k >= 1; k--) {
//     document.writeln(k);
//   }
//   document.writeln("<br>");
// }


// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= i; k++) {
//     document.writeln(k);
//   }
//   for (let l=5; l>i; l--) {
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//   }
//   for (let j = i; j >= 1; j--) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }



// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     document.writeln(j);
//   }
//   for (let l = i; l < 5; l++) {
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//   }
//   for (let k = i; k >= 1; k--) {
//     document.writeln(k);
//   }
//   document.writeln("<br>");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let k = 1; k <= i; k++) {
//     document.writeln(k);
//   }
//   for (let l=5; l>i; l--) {
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//     document.writeln("&nbsp");
//   }
//   for (let j = i; j >= 1; j--) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }


// 9. B

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j == 1) {
//       document.writeln("*");
//     } else if ((i == 1 && j == 2) || (i == 1 && j == 3)) {
//       document.writeln("*");
//     } else if ((i == 4 && j == 2) || (i == 4 && j == 3)) {
//       document.writeln("*");
//     } else if (i == 2 && j == 4) {
//       document.writeln("*");
//     } else if (i == 3 && j == 4) {
//       document.writeln("*");
//     } else if (i == 5 && j == 4) {
//       document.writeln("*");
//     } else if (i == 6 && j == 4) {
//       document.writeln("*");
//     }else if ((i == 7 && j == 2) || (i == 7 && j == 3)) {
//         document.writeln("*");}
//      else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 10. D

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= 6; j++) {
//     if (j == 1) {
//       document.writeln("*");
//     } else if ((i == 1 && j == 3) || (i == 7 && j == 3)) {
//       document.writeln("*");
//     } else if ((i == 2 && j == 4) || (i == 6 && j == 4)) {
//       document.writeln("*");
//     }else if((i==3 && j==5 || i==5 && j==5 || i==4 && j==6)){
//         document.writeln("*")
//      } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 11. G

// for(let i=1; i<=7; i++){
//     for(let j=1; j<=6; j++){
//        if(i==1 && j==2 || i==1 && j==3 || i==1 && j==4 || i==7 && j==2 || i==7 && j==3 || i==7 && j==4){
//         document.writeln("*");
//        }else if(i==2 && j==1 || i==3 && j==1 || i==4 && j==1 || i==5 && j==1 || i==5 && j==1 || i==6 && j==1 || j==5 && i==2){
//         document.writeln("*");
//        }else if(i==4 && j==3 || i==4 && j==4 || i==4 && j==5 || i==5 && j==5 || i==6 && j==5){
//         document.writeln("*");
//        }else{
//         document.writeln("&nbsp;&nbsp;");
//        }
//     }
//     document.writeln("<br>")
// }

// 12. W

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= 7; j++) {
//     if (j == 1) {
//       document.writeln("*");
//     } else if (j == 5) {
//       document.writeln("*");
//     } else if (j == 3 && i == 6) {
//       document.writeln("*");
//     } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 13. K

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= 7; j++) {
//     if (j == 1) {
//       document.writeln("*");
//     } else if (
//       (i == 4 && j == 2) ||
//       (i == 3 && j == 3) ||
//       (i == 2 && j == 4) ||
//       (i == 1 && j == 5)
//     ) {
//       document.writeln("*");
//     } else if (
//       (i == 5 && j == 3) ||
//       (i == 6 && j == 4) ||
//       (i == 7 && j == 5)
//     ) {
//       document.writeln("*");
//     } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 14. M

// for (let i = 1; i <= 7; i++) {
//   for (let j = 1; j <= 7; j++) {
//     if (j == 1) {
//       document.writeln("*");
//     } else if (j == 5) {
//       document.writeln("*");
//     } else if (j == 2 && i == 2 || j == 4 && i == 2 || j==3 && i==3) {
//       document.writeln("*");
//     } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 15. N

// for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= 8; j++) {
//       if (j == 1) {
//         document.writeln("*");
//       } else if (j == 8) {
//         document.writeln("*");
//       } else if (j == 2 && i == 2 || j == 3 && i == 3 || j==4 && i==4 || j==5 && i==5 || j==6 && i==6 ) {
//         document.writeln("*");
//       } else {
//         document.writeln("&nbsp;&nbsp;");
//       }
//     }
//     document.writeln("<br>");
//   }

// 16. O

// for (let i = 1; i <= 8; i++) {
//   for (let j = 1; j <= 8; j++) {
//     if (
//       (i == 1 && j == 2) ||
//       (i == 1 && j == 3) ||
//       (i == 1 && j == 4) ||
//       (i == 7 && j == 2) ||
//       (i == 7 && j == 3) ||
//       (i == 7 && j == 4)
//     ) {
//       document.writeln("*");
//     } else if (
//       (i == 2 && j == 1) ||
//       (i == 3 && j == 1) ||
//       (i == 4 && j == 1) ||
//       (i == 5 && j == 1) ||
//       (i == 5 && j == 1) ||
//       (i == 6 && j == 1) ||
//       (j == 5 && i == 2)
//     ) {
//       document.writeln("*");
//     } else if (
//       (i == 2 && j == 5) ||
//       (i == 3 && j == 5) ||
//       (i == 4 && j == 5) ||
//       (i == 5 && j == 5) ||
//       (i == 6 && j == 5)
//     ) {
//       document.writeln("*");
//     } else {
//       document.writeln("&nbsp;&nbsp;");
//     }
//   }
//   document.writeln("<br>");
// }

// 17. P 

// for(let i = 1; i <= 8; i++){
//     for(let j = 1; j <= 8; j++){
//         if((i == 1 && j == 2) ||
//         (i == 1 && j == 2) ||
//         (i == 1 && j == 3) ||
//         (i == 1 && j == 4) ||
//         (i == 1 && j == 5) ){
//             document.writeln("*");
//         }
//         else if((i == 4 && j == 2) ||
//         (i == 4 && j == 2) ||
//         (i == 4 && j == 3) ||
//         (i == 4 && j == 4) ||
//         (i == 4 && j == 5)){
//             document.writeln("*");
//         }
//         else if(j==1 || j==6 && i==2 || j==6 && i==3){
//             document.writeln("*");
//         }
//         else{
//             document.writeln("&nbsp;&nbsp;");
//         }
//     }
//     document.writeln("<br>");
// }