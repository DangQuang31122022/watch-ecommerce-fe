import axios from "axios";
import AuthAPI from "../api/AuthAPI";

const URL = "http://localhost:8080/watch-ecommerce-be/api/v1";

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      // remove header
      // delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    try {
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refresh_token = localStorage.getItem("token");
        const res = await AuthAPI.refreshToken(refresh_token);
        console.log("res", res);
        if (res.data.data.token) {
          localStorage.setItem("token", res.data.data.token);
          originalRequest.headers.Authorization = `Bearer ${res.data.data.token}`;
          return axiosInstance(originalRequest);
        }
      }
    } catch (refreshError) {
      console.error("Error refresh token", error);
      localStorage.removeItem("token");
      return Promise.reject(refreshError);
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let res = {};
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(res);
    return res;
  }
);

const axiosProduct = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosAuth = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosInstance, axiosProduct, axiosAuth };
