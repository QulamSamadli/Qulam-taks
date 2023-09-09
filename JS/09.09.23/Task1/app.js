const multiple =(...arr)=>{
let m = 1
for(let values of arr){
  m=m*values
}
return m
}
console.log(multiple(5,6,3));
