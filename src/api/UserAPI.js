import { axiosAuth, axiosInstance } from "../config/api";

const login = async (username, password) => {
  console.log("username", username);
  console.log("password", password);
  try {
    const { data } = await axiosAuth.post("/auth/login", {
      username,
      password,
    });

    if (data.data.token) {
      // localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem("token", data.data.token);
    }

    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getMe = async () => {
  try {
    const { data } = await axiosInstance.get("/users/me");
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const updateMe = async (user) => {
  try {
    const { data } = await axiosInstance.put("/users", user);
    return data.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
// const login = (email, password) => { return axiosInstance.post("/login", {
//     email,
//     password,
// }); }
export const UserAPI = {
  login,
  getMe,
  updateMe,
};
