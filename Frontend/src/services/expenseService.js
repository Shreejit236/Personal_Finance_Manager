import axios from "axios";

const API_URL = "http://localhost:5000/api/expenses"; // Backend URL

// Add a new expense
const addExpense = async (expenseData) => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found. Please log in.");
    return;
  }
  try {
    const response = await axios.post(API_URL, expenseData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include token
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error.response.data.message);
    throw error;
  }
};

// Get all expenses
const getExpenses = async () => {
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
    console.error("Error fetching expenses:", error.response.data.message);
    throw error;
  }
};

export default { addExpense, getExpenses };