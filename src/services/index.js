import axios from "axios";

export const getProducts = async () => {
  try {
    const limit = 6; // Change this value to the desired limit
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
    console.log(data.products);
    return data;
  } catch (error) {}
};

export const fetchProduct = async (id) => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
