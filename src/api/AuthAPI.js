import { axiosAuth } from "../config/api";

const refreshToken = async (token) => {
  try {
    const response = await axiosAuth.post("/auth/refresh-token", {
      token: token,
    });
    console.log("response", response);
    if (response.data.code === 1000) {
      return response.data;
    }
    return response;
  } catch (error) {
    console.error("Unable to refresh token", error);
  }
};
export const AuthAPI = { refreshToken };
export default AuthAPI;
