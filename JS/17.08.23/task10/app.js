// A: ehsen
let ed1 = +prompt("eded daxil edin");
let ed2 = +prompt("eded daxil edin");
let operator = prompt("operator daxil edin(+ ve ya -)");

// if(operator === "+"){
//     console.log(ed1+ed2);
// }
// else if(operator === "-"){
//     console.log(ed1-ed2);
// }
// else{
//     console.log("bele operator qeyd edilmeyib");
// }



switch (operator) {
  case "+":
    console.log(ed1 + ed2);
    break;
  case "-":
    console.log(ed1 - ed2);
    break;
  default:
    console.log("bele operator qeyd edilmeyib");
    break;
}
