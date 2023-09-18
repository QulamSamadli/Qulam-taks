// A: excellent ✨
// #task3.
// existsAndTruthy adinda funksiya yaradin. Argument kimi obyekt(obj) ve string (propertyName)  alsin. Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes,

// existsAndTruthy({a:1,b:2,c:3},'b') // true
// existsAndTruthy({x:'a',y:null,z:'c'},'y')  // false (obyektde 'y' var amma falsy-di ona gore false)
// existsAndTruthy({x:'a',b:'b',z:undefined},'z')  // false  (obyektde 'z' yoxdu ona gore false)

const existsAndTruthy = (obj, propertyName) => {
  for (let key in obj) {
    if (key && key === propertyName) {
          console.log(Boolean(obj[key]));
        
    } 
   
    
  }
};
existsAndTruthy({a:1,b:2,c:3},`a`)
existsAndTruthy({x:'a',b:'b',z:undefined},'z') 
existsAndTruthy({ x: "a", y: null, z: "c" }, "y");
