// Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin.
// Həmin funksiya geriyə funksiya göndərsin.
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın.

function checkGender(gender, ad) {
  if (gender === `K`) {
    console.log(`Cenab ${ad}`);
  } else {
    console.log(`Xanim ${ad}`);
  }
}
checkGender(`Q`, `Samire`);
checkGender(`K`, `Samir`);
