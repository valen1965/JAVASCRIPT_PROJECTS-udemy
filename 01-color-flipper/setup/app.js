const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  if (color.textContent === colors[randomNumber]) {
    let newRandomNumber = "";
    if (randomNumber < colors.length || randomNumber === 0) {
      newRandomNumber = randomNumber + 1;
    } else {
      newRandomNumber = randomNumber - 1;
    }
    // console.log(`this is new random number ${newRandomNumber}`);
    document.body.style.backgroundColor = colors[newRandomNumber];
    color.textContent = colors[newRandomNumber];
  } else {
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    // console.log(`This is originated random number ${randomNumber}`);
  }
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
