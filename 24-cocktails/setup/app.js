const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
import presentDrinks from "./src/presentDrinks.js";
import "./src/searchForm.js";
import { showLoading } from "./src/toggleLoading.js";
import getLocalStorage from "./src/displaySingleDrink.js";

window.addEventListener("load", () => {
  presentDrinks(url);
});
