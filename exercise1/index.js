const MAX = 7

let a = "", b = "";
let y=MAX;
let x=MAX;

function printAsterik(){
    a = "", b = "";
  for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
      if(i >= j ){
        a = a.concat("*");
      } else if(j >= i){
        b = b.concat("*")
      }
    }
    a = a.concat("\n")
    b = b.concat("\n")
  }
  console.log(a);
  console.log(b);
}
setInterval(printAsterik, 1000)
