let randomBtn = document.getElementById(`button`);
let text = document.getElementById(`text`);
let url = `https://catfact.ninja/fact`;
randomBtn.addEventListener(`click`, random);

function random() {
  axios.get(url).then(({ data }) => {
   text.innerHTML=`<p>${data.fact}</p>`
  });
}
