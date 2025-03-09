import React, { useState } from "react";
import expenseService from "../services/expenseService";

const Expense = () => {
  const [category, setCategory] = useState("Groceries");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expenseData = {
      category,
      amount: Number(amount), // Ensure amount is a number
      date: new Date(date).toISOString(), // Ensure date is in ISO format
      description,
    };
    try {
      const response = await expenseService.addExpense(expenseData);
      setMessage("Expense added successfully!");
      console.log("Expense added:", response);
      // Clear form
      setCategory("Groceries");
      setAmount("");
      setDate("");
      setDescription("");
    } catch (error) {
      setMessage("Failed to add expense.");
      console.error("Error adding expense:", error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Add Expense</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Groceries">Groceries</option>
          <option value="Rent">Rent</option>
          <option value="Utilities">Utilities</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Expense;