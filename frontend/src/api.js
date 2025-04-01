import axios from "axios";

// const API_URL = "http://localhost:5000";
// const API_URL = "https://project-sigma-ochre.vercel.app"; //vercel
const API_URL = "https://project-l5p8.onrender.com"; // render

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/api/auth/login`, userData);
};

export const getProfile = async (token) => {
  return await axios.get(`${API_URL}/api/user/profile`, {
    headers: { Authorization: token },
  });
};

export const updateProfile = async (token, formData) => {
  return await axios.put(`${API_URL}/user/profile`, formData, {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  });
};
