const productDOM = document.querySelector(".product");

const url = "https://course-api.com/javascript-store-single-product";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
    // console.log(window.location.search);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML = `<p class='error'>There was a problem loading the product. Please try again later</p>`;
  }
};

const displayProduct = (product) => {
  const { url: img } = product.fields.image[0];
  const { name: title, company, price, description } = product.fields;
  const { colors } = product.fields;

  const formatPrice = price / 100;

  // change page title dynamically

  document.title = title.toUpperCase();

  // colors
  const colorsList = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");

  productDOM.innerHTML = `<img src="${img}" alt="product image" class="img" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${formatPrice}</span>
          <div class="colors">
           ${colorsList}
            
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem id
            ratione sunt iusto tempore velit excepturi molestiae placeat. Rem,
            magnam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem id ratione sunt iusto tempore velit excepturi molestiae
            placeat. Rem, magnam!
          </p>
          <button class="btn">add to cart</button>
        </div>`;
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
