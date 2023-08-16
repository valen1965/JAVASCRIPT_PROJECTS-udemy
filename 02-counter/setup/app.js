// set initial count
let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    count < 0 ? (value.style.color = "red") : (value.style.color = "green");
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
