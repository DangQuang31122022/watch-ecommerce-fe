import { axiosProduct } from "../config/api";

const allProducts = async () => {
  try {
    const { data } = await axiosProduct.get("/products");
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getProductsFromTo = async (from, to) => {
  try {
    const { data } = await axiosProduct.get(`/products/from-to/${from}/${to}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getProductById = async (id) => {
  try {
    const { data } = await axiosProduct.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getProductByBrand = async (brand) => {
  try {
    const { data } = await axiosProduct.get(`/products/brand/${brand}`);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const ProductAPI = {
  allProducts,
  getProductsFromTo,
  getProductById,
};
