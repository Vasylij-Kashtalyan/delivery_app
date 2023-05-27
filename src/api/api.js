import axios from "axios";

const BASE_URL = "https://delivery-app-back-1ry2.onrender.com";

async function fetchProduct() {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
}

export { fetchProduct };
