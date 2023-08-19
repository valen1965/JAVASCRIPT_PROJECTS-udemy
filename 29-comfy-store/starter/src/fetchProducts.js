import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log());
  if (response) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
