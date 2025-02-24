import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { FaList, FaDollarSign, FaCalendarAlt, FaComment } from "react-icons/fa";

const Expense = () => {
  const [category, setCategory] = useState("Groceries");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const expenseCategories = [
    "Groceries",
    "Rent",
    "Utilities",
    "Transport",
    "Entertainment",
    "Health",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Expense Added Successfully!");
    setTimeout(() => setMessage(""), 3000);
    setCategory("Groceries");
    setAmount("");
    setDate("");
    setDescription("");
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Add Expense</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Card className="card-custom">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaList className="me-2" />
                Category
              </Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control-custom"
                required
              >
                {expenseCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaDollarSign className="me-2" />
                Amount
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaCalendarAlt className="me-2" />
                Date
              </Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaComment className="me-2" />
                Description
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control-custom"
              />
            </Form.Group>
            <Button variant="primary-custom" type="submit" className="w-100">
              Add Expense
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Expense;