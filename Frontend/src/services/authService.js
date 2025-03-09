import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend URL

// Register a new user
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response.data.message);
    throw error;
  }
};

// Login user
const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token); // Store token in localStorage
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response.data.message);
    throw error;
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem("token"); // Remove token from localStorage
};

export default { register, login, logout };