import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drink", "id");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(`${searchURL}${id}`);
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
console.log("git testing");
