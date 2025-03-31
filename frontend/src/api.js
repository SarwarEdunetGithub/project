import axios from "axios";

const API_URL = "project-phi-one-82.vercel.app";

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/auth/login`, userData);
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/user/profile`, {
    headers: { Authorization: token },
  });
};

export const updateProfile = async (token, formData) => {
  return await axios.put(`${API_URL}/user/profile`, formData, {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  });
};
