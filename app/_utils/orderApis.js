import axiosClient from "./axiosClient";

const createOrder = (data) => axiosClient.post(`/orders`, data);
const getOrder = (email) =>
  axiosClient.get(
    `/orders?populate[courses][populate]=image&filters[email][$eq]=${email}`
  );
export default {
  createOrder,
  getOrder,
};
