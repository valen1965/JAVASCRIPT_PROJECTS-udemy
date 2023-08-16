const toggleBtn = document.querySelector(".btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const articlesSet = document.querySelector(".articles");

const post = articles
  .map(({ title, date, length, snippet }) => {
    // const { title, date, length, snippet } = article;
    // format date
    const formatedDate = moment(date).format("MMMM Do, YYYY");

    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatedDate}</span>
          <span>${length}</span>
          <p>
            ${snippet}
          </p>
        </div>
      </article>`;
  })
  .join("");

articlesSet.innerHTML = post;
