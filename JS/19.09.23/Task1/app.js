// A: done as 🐉
const first = document.getElementById(`firstCircle`);
const second = document.getElementById(`secondCircle`);
const third = document.getElementById(`thirdCircle`);
const four = document.getElementById(`fourCircle`);

first.onclick = () => {

  document.body.style.backgroundColor = `blue`;
};
second.onclick = () => {
  document.body.style.backgroundColor = `red`;
};
third.onclick = () => {
  document.body.style.backgroundColor = `green`;
};
four.onclick = () => {
  document.body.style.backgroundColor = `yellow`;
};
