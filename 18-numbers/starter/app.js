const numbers = [...document.querySelectorAll(".number")];
const btnStop = document.querySelector(".stop-btn");
const btnResume = document.querySelector(".resume-btn");

let resumeFlag = false;

// numbers.forEach((number) => {
//   console.log(number);
// });

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  if (!resumeFlag) {
    initialValue = 0;
  } else {
    initialValue = parseInt(el.textContent);
  }

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }
    el.textContent = `${initialValue}+`;
  }, 10);

  function stopCount() {
    el.textContent = `${initialValue}`;
    clearInterval(increaseCount);
    btnStop.textContent = " count stopped";
    btnStop.style.color = "red";
    console.log(parseInt(el.textContent));
    return;
  }

  btnStop.addEventListener("click", stopCount);

  btnResume.addEventListener("click", () => {
    resumeFlag = true;
    btnResume.textContent = "count resumed ";
    btnResume.style.color = "green";
    updateCount(el);
  });
  btnStop.textContent = " stop count";
  btnStop.style.color = "black";
  // btnResume.textContent = " resume count";
  // btnResume.style.color = "black";
};

numbers.forEach((item) => {
  updateCount(item);
});
