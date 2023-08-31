// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

function isLucky(eded) {
  // A: variable-lari let ile yarat z.o
  sonuncuEded = eded % 10;
  besinciEded = Math.floor(eded / 10) % 10;
  dorduncuiEded = Math.floor(eded / 100) % 10;
  ucuncuEded = Math.floor(eded / 1000) % 10;
  ikinciEded = Math.floor(eded / 10000) % 10;
  birinciEded = Math.floor(eded / 100000) % 10;
  let sol = birinciEded+ikinciEded+ucuncuEded;
  let sag = sonuncuEded+besinciEded+dorduncuiEded;

//   console.log(sonuncuEded);
//   console.log(besinciEded);
//   console.log(dorduncuiEded);
//   console.log(ucuncuEded);
//   console.log(ikinciEded);
//   console.log(birinciEded);

  if(sol===sag){
    console.log(`${eded} is lucky`);
  }
  else{
    console.log(`${eded} is not lucky`);
  }
}
isLucky(673423);
