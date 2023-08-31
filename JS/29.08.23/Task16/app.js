// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// A: done as 🐉
const isValidNumber = (eded) => {
  if (eded[0] === `+` && eded[1]===`7`&& eded.length==11) {
    console.log(true);
  }
  else{
    console.log(false);
  }
};
isValidNumber(`+7123456789`)
console.log(isValidNumber(eded.length));
