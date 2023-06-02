import axios from "axios";

const BASE_URL = "https://delivery-app-back-1ry2.onrender.com";

async function fetchProduct() {
  const response = await axios.get(`${BASE_URL}/api/products`);
  return response.data;
}

async function fetchProductById(id) {
  const response = await axios.get(`${BASE_URL}/api/products/${id}`);
  return response.data;
}

export { fetchProduct, fetchProductById };
