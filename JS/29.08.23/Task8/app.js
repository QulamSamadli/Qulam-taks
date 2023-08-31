// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın. Meselen, 50-ye hansi ucreqemli ededler bolunur?: 100, 150, 200, 250, ....
// A: u r best, milord 👑
let eded = +prompt(
  `eded daxil edin.Hansiki daxil etdiyiniz eded 3 reqemli ededlere bolunecek ve cemleyecek`
);

let sum = 0;

for (let i = 100; i < 1000; i++) {
  if (i % eded === 0) {
    console.log((sum += i));
  }
}
