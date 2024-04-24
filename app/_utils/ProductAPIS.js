import axiosClient from "./axiosClient";

const getAllProducts = () => axiosClient.get("/courses?populate=*");

const getSingleProductByID = (id) =>
  axiosClient.get(`/courses/${id}?populate=*`);

const getAllCoursesByCategory = (category) =>
  axiosClient.get(`/courses?filters[category][$eq]=${category}&populate=*`);

export default {
  getAllProducts,
  getSingleProductByID,
  getAllCoursesByCategory,
};
