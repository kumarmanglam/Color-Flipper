const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=> {
  let hexNumber = "#";
  for(let i=0;i<6;i++){
    hexNumber+=hex[getRandomNumber()];
  }
  console.log(hexNumber);
  color.textContent = hexNumber;
  document.body.style.backgroundColor = hexNumber;
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

const reset = document.querySelector(".nav-right-box");

reset.addEventListener("click", ()=> {
  window.location.reload();
})