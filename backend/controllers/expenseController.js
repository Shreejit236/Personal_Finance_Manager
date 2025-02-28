const Expense = require("../models/Expense");

// Add a new expense
const addExpense = async (req, res) => {
  const { category, amount, date, description } = req.body;

  try {
    const expense = await Expense.create({
      user: req.user.id,
      category,
      amount,
      date,
      description,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all expenses for a user
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addExpense, getExpenses };