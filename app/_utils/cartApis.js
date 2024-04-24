import axiosClient from "./axiosClient";

const addToCart = (payload) => axiosClient.post("/carts", payload);
const getCartItemsByEmail = (email) =>
  axiosClient.get(
    `/carts?populate[courses][populate]=image&filters[email][$eq]=${email}`
  );

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);
export default { addToCart, deleteCartItem, getCartItemsByEmail };
