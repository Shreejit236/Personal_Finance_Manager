const Income = require("../models/Income");

// Add a new income
const addIncome = async (req, res) => {
  const { source, amount, date, category } = req.body;

  try {
    const income = await Income.create({
      user: req.user.id,
      source,
      amount,
      date,
      category,
    });

    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all incomes for a user
const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user.id });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addIncome, getIncomes };