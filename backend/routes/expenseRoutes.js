const express = require("express");
const { addExpense, getExpenses } = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a router
const router = express.Router();

// Add a new expense (protected route)
router.post("/", authMiddleware, addExpense);

// Get all expenses for a user (protected route)
router.get("/", authMiddleware, getExpenses);

// Export the router
module.exports = router;