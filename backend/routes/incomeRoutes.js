const express = require("express");
const { addIncome, getIncomes } = require("../controllers/incomeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, addIncome);
router.get("/", authMiddleware, getIncomes);

module.exports = router;