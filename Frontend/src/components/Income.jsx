import React, { useState } from "react";
import incomeService from "../services/incomeService";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Salary");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const incomeData = { source, amount, date, category };
      const response = await incomeService.addIncome(incomeData);
      setMessage("Income added successfully!");
      console.log("Income added:", response);
      // Clear form
      setSource("");
      setAmount("");
      setDate("");
      setCategory("Salary");
    } catch (error) {
      setMessage("Failed to add income.");
      console.error("Error adding income:", error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Add Income</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
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
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Salary">Salary</option>
          <option value="Freelance">Freelance</option>
          <option value="Investment">Investment</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default Income;