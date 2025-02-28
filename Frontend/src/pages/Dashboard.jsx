import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Card, Container, Row, Col, Button, Table } from "react-bootstrap";
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
  const [view, setView] = useState("graph"); // Toggle between "graph" and "list"
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "income",
      date: "2023-10-01",
      category: "Salary",
      amount: 5000,
      description: "Monthly salary",
    },
    {
      id: 2,
      type: "expense",
      date: "2023-10-02",
      category: "Groceries",
      amount: 200,
      description: "Weekly groceries",
    },
    {
      id: 3,
      type: "expense",
      date: "2023-10-03",
      category: "Rent",
      amount: 1000,
      description: "Monthly rent",
    },
    {
      id: 4,
      type: "income",
      date: "2023-10-04",
      category: "Freelance",
      amount: 800,
      description: "Freelance project",
    },
  ]);

  // Calculate total income and expenses
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

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
    <Container className="mt-4">
      <h1 className="text-center mb-4">Dashboard</h1>
      <Row className="mb-3">
        <Col className="text-center">
          <Button
            variant={view === "graph" ? "primary-custom" : "outline-primary"}
            onClick={() => setView("graph")}
            className="me-2"
          >
            Graph View
          </Button>
          <Button
            variant={view === "list" ? "secondary-custom" : "outline-secondary"}
            onClick={() => setView("list")}
          >
            List View
          </Button>
        </Col>
      </Row>
      {view === "graph" ? (
        <Row>
          <Col md={6}>
            <Card className="mb-4 card-custom">
              <Card.Body>
                <Card.Title>Income vs Expense</Card.Title>
                <Bar data={barData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-custom">
              <Card.Body>
                <Card.Title>Income vs Expense (Pie Chart)</Card.Title>
                <Pie data={pieData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Card className="card-custom">
          <Card.Body>
            <Card.Title>Transaction List</Card.Title>
            <Table striped bordered hover className="table-custom">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id}>
                    <td>{t.date}</td>
                    <td>{t.category}</td>
                    <td>${t.amount}</td>
                    <td>{t.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Dashboard;