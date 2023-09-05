function ilkHerfiDeyis(soz, ilkHerf) {
  return soz.replace(soz[0], ilkHerf);
}
console.log(ilkHerfiDeyis(`salam`, `S`));
