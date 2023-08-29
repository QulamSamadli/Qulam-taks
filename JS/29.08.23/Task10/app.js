// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.
// A: done as 🐉
const TO_CHANGE_RUBL = (dollar, rubl) => {
  let dollarToRubl = dollar * 75;
  console.log(dollarToRubl + rubl);
};

TO_CHANGE_RUBL(20, 1200);
