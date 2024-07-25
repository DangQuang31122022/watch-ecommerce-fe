import { axiosInstance } from "../config/api";

const createOrder = async (order) => {
  try {
    const { data } = await axiosInstance.post("/orders", order);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const OrderAPI = {
  createOrder,
};
export default OrderAPI;
