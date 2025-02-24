import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { FaUser, FaDollarSign, FaCalendarAlt, FaList } from "react-icons/fa";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Salary");
  const [message, setMessage] = useState("");

  const incomeCategories = ["Salary", "Bonus", "Freelance", "Investment", "Other"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Income Added Successfully!");
    setTimeout(() => setMessage(""), 3000);
    setSource("");
    setAmount("");
    setDate("");
    setCategory("Salary");
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Add Income</h1>
      {message && <Alert variant="success">{message}</Alert>}
      <Card className="card-custom">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Source
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter source"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="form-control-custom"
                required
              />
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
                <FaList className="me-2" />
                Category
              </Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-control-custom"
                required
              >
                {incomeCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary-custom" type="submit" className="w-100">
              Add Income
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Income;