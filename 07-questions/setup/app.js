//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const item = e.currentTarget.parentElement.parentElement;
      questions.forEach((question) => {
        if (item !== question) {
          question.classList.remove("show-text");
        } else {
          question.classList.toggle("show-text");
        }
      });
    });
  });
});

// const questions = document.querySelectorAll(".question");

// questions.forEach((question) => {
//   const btn = question.querySelector(".question-btn");
//   btn.addEventListener("click", () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
