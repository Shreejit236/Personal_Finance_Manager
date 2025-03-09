import axios from "axios";

const API_URL = "http://localhost:5000/api/incomes"; // Backend URL

// Add a new income
const addIncome = async (incomeData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found. Please log in.");
    return;
  }
  try {
    const response = await axios.post(API_URL, incomeData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding income:", error.response.data.message);
    throw error;
  }
};

// Get all incomes
const getIncomes = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found. Please log in.");
    return;
  }
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching incomes:", error.response.data.message);
    throw error;
  }
};

export default { addIncome, getIncomes };