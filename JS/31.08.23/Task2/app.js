// #task2.
// propertyTaker adinda funksiya yaradin. Argument kimi obyekt (obj)
// ve string (proprtyName) alsin.
// Hemin obyektin verdiyim propertyni cixarsin. Mes:

// propertyTaker({  continent: 'Asia',country: 'Japan'}, 'continent')// 'Asia'
// propertyTaker({  country: 'Sweden',continent: 'Europe'}, 'country')// 'Sweden'
// propertyTaker({name:'ali', age:12}, 'name')  // 'ali'
const propertyTaker = (obj, propertyName) => {
  for (let key in obj) {
    if (key === propertyName) {
      console.log(obj[key]);
    }
  }
};
propertyTaker({ continent: "Asia", country: "Japan" }, "continent");
propertyTaker({ country: "Sweden", continent: "Europe" }, "country");
propertyTaker({ name: "ali", age: 12 }, "name");
