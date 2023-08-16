let productsCopy = [...products];

const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");
const companyBtn = document.querySelector(".company-btn");

window.addEventListener("DOMContentLoaded", () => {
  getCompaniesList();
  displayProducts();
});

const displayProducts = () => {
  // if statement
  if (productsCopy.length < 1) {
    productsContainer.innerHTML = `<h3>Sorry, no products matched your search</h3>`;
    return; // ********return is IMPORTANT**********
  }

  productsContainer.innerHTML = productsCopy
    .map(({ id, title, company, image, price }) => {
      return `<article class="product" data-id="${id}">
          <img
            src=${image}
            alt=${image}
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  productsCopy = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  displayProducts();
});

// filter buttons

const companiesDOM = document.querySelector(".companies");

const getCompaniesList = () => {
  const companies = products.map((product) => product.company);
  const buttons = ["all", ...new Set(companies)];

  companiesDOM.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};

companiesDOM.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("company-btn")) {
    if (element.dataset.id === "all") {
      productsCopy = [...products];
    } else {
      productsCopy = products.filter((product) => {
        return product.company === element.dataset.id;
      });
    }
    searchInput.value = "";
    displayProducts();
  }
});
