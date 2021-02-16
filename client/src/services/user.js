import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const response = await api.post("/users/sign-up", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", response.data.token);
    const user = jwtDecode(response.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async (user) => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await api.get("/verify");
    return response.data;
  }
  return false;
};

// Not finished
export const changePassword = async (passwords, user) => {
  try {
    const response = await api.post("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};
