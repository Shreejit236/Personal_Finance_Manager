import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar-custom shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Finance Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="mx-2" key="dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/income" className="mx-2" key="income">
              Income
            </Nav.Link>
            <Nav.Link as={Link} to="/expense" className="mx-2" key="expense">
              Expense
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="mx-2" key="login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="mx-2" key="register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;