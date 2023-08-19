let ceki = +prompt(`cekinizi qeyd edin`)
let boy = +prompt(`boyunuzu qeyd edin`)

let bmi = ceki / (Math.pow(boy,2));

if(bmi<18.5){
    console.log(`Sizin BMI: ${bmi},siz ariqsiniz `);
}
else if(18.5<bmi && bmi<25){
    console.log(`Sizin BMI: ${bmi},siz normal beden olcusune sahibsiniz `);
}
else if(25<bmi && bmi<30){
    console.log(`Sizin BMI: ${bmi},siz koksunuz `);
}
else{console.log(`Sizin BMI: ${bmi},siz obesesiniz `);}
console.log(Math.pow(2,2));