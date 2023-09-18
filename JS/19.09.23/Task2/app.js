let cevreninUzunlugu = document.getElementById(`cevreninUzunlugu`);
let cevreninSahesi = document.getElementById(`cevreninSahesi`);

let divCircle = document.getElementById(`divCircle`);
let circle = document.getElementById(`circleNumber`);
let goster = document.getElementById(`goster`);
goster.onclick = () => {
  if (+circle.value > 10 && +circle.value <= 100) {
    // console.log(+circle.value);
    let r = +circle.value / 2;
    divCircle.style.border = `1px solid black`
    cevreninUzunlugu.innerHTML = 2 * r * 3;
    cevreninSahesi.innerHTML = 3 * r * r;
    divCircle.style.width = +circle.value + `px`;
    divCircle.style.height = +circle.value + `px`;
  } else {
    alert(`duzgun qeyd edin`);
  }
};

// cevrenin uzunlugu 2pr
// cevrenin sahesi 2rr
