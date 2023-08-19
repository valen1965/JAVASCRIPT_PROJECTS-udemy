import { formatPrice, getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  // setup filter

  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.ceil(Math.max(...maxPrice) / 100);

  priceInput.max = maxPrice;
  priceInput.value = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value: $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value: $${value}`;

    let newStore = store.filter((product) => product.price / 100 <= value);

    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      const element = getElement(".products-container");
      element.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
      return;
    }
  });
};

export default setupPrice;
