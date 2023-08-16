const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");
const container = document.querySelector(".products-container");

const fetchProducts = async () => {
  productsDOM.innerHTML = `<div class='loading'></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = `<p class='error'>There has been an error</p>`;
    console.log(`There has been an error`);
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      return `<a class="single-product " href="product.html?id=${id}">
            <img src="${img}" alt="title" class="single-product-img img" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.classList.add("products-container");
  productsDOM.innerHTML = productList;
};

const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
