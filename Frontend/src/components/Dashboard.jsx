import React, { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import expenseService from "../services/expenseService";
import incomeService from "../services/incomeService";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [view, setView] = useState("graph");

  // Fetch incomes and expenses
  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomesResponse = await incomeService.getIncomes();
        const expensesResponse = await expenseService.getExpenses();
        setIncomes(incomesResponse);
        setExpenses(expensesResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate total income and expenses
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const savings = totalIncome - totalExpense;

  // Data for the bar chart
  const barData = {
    labels: ["Income", "Expense", "Savings"],
    datasets: [
      {
        label: "Amount",
        data: [totalIncome, totalExpense, savings],
        backgroundColor: ["#4a90e2", "#ff8c42", "#50c878"],
      },
    ],
  };

  // Data for the pie chart
  const pieData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ["#4a90e2", "#ff8c42"],
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setView("graph")}>Graph View</button>
      <button onClick={() => setView("list")}>List View</button>

      {view === "graph" ? (
        <div>
          <h2>Income vs Expense</h2>
          <Bar data={barData} />
          <h2>Income vs Expense (Pie Chart)</h2>
          <Pie data={pieData} />
        </div>
      ) : (
        <div>
          <h2>Incomes</h2>
          <ul>
            {incomes.map((income) => (
              <li key={income._id}>
                {income.source}: ${income.amount} ({income.date})
              </li>
            ))}
          </ul>
          <h2>Expenses</h2>
          <ul>
            {expenses.map((expense) => (
              <li key={expense._id}>
                {expense.category}: ${expense.amount} ({expense.date})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;