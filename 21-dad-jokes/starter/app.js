const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
// const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  fetchJoke();
});

const fetchJoke = async () => {
  result.textContent = "Loading ...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-agent": "Learning app",
      },
    });

    if (!response.ok) {
      throw new Error(`error`);
    }
    const data = await response.json();

    result.textContent = data.joke;
  } catch (error) {
    result.textContent = `There has been an error`;
  }
};

fetchJoke();
