// A: live legend 🐱‍💻
let gmail = prompt(`mail adressinizi qeyd edin`)


if(gmail.length>14 && gmail.endsWith(`@gmail.com`)){
    console.log(gmail);
}
else{
    console.log(`Yanlis mail adreessi daxil etmisiniz`);
}
