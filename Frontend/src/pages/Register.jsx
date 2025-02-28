import React, { useState } from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setTimeout(() => setMessage(""), 3000);
      return;
    }
    setLoading(true);
    // Simulate a registration request
    setTimeout(() => {
      setMessage("Registration Successful!");
      setLoading(false);
      setTimeout(() => setMessage(""), 3000);
    }, 1000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 card-custom" style={{ width: "400px" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          {message && <Alert variant={message.includes("Successful") ? "success" : "danger"}>{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaUser className="me-2" />
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaEnvelope className="me-2" />
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <FaLock className="me-2" />
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control-custom"
                required
              />
            </Form.Group>
            <Button variant="primary-custom" type="submit" className="w-100 mb-3" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
            <div className="text-center">
              <p className="mb-1">Already have an account?</p>
              <Link to="/login" className="text-decoration-none">
                Login here
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;