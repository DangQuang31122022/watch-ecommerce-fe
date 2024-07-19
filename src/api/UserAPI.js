import axiosInstance from "../config/api";
// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

const login = async (username, password) => {
  console.log("username", username);
  console.log("password", password);
  try {
    const { data } = await axiosInstance.post("/login", {
      username,
      password,
    });

    if (data.data.token) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
    }

    return data;
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
};
