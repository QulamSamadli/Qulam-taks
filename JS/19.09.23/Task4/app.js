const users = [
  {
    id: 1,
    username: "Ali",
    img: "ali",
    job: "developer",
  },
  {
    id: 2,
    username: "bedbext_developer",
    img: "bedbext_developer",
    job: "test2",
  },
  {
    id: 3,
    username: "duman",
    img: "duman",
    job: "test3",
  },
  {
    id: 4,
    username: "js_oyrenen_shexs",
    img: "js_oyrenen_shexs",
    job: "test4",
  },
  {
    id: 5,
    username: "qarli_daglar",
    img: "qarli_daglar",
    job: "test5",
  },
  {
    id: 6,
    username: "qoca_cinar",
    img: "qoca_cinar",
    job: "test6",
  },
  {
    id: 7,
    username: "visselka",
    img: "visselka",
    job: "test7",
  },
  {
    id: 8,
    username: "novxani",
    img: "novxani",
    job: "test8",
  },
];
const root = document.getElementById("root");
//   your code goes here
// root.className = `salam`;
// root.innerHTML = `<div><img src:"${users[4].img}.jpg"></div>`;
// root.innerHTML += `<h2>SAlam</h2>`;

for (let i = 0; i < users.length; i++) {
  root.className = `salam`;
  root.innerHTML += `<div class="circle"><img src="./img/${users[i].img}.jpg"><h1>${users[i].username}</><p>${users[i].job}</p></div>`;


}

// Bele bir sehife hazirlamalisiniz. Contenti js ile yaratmalisiniz. html faylinda sadece #root elementi olmalidir. (ozum hazirlamisam novbeti .rar faylinda verilib)

// sekiller de verilib.

// app.js -> users arrayi yaratmisam sizin ucun. Size sadece contenti yaratmaq qalir js ile. Dizayni da css ile verin. Classname ile elave edin. Hover effekti de verin, 1ci elemente baxsaniz gorersiniz ki, hover-de box-shadow verilib. Siz de edin eyni formada. Layout qurmaqda istediyiniz css propertysinden istifade ede bilersiniz. Amma, calisaq flex-den istifade edek :)

// ugurlar....
