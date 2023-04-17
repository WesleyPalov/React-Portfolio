import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <Navbar className="contact-background-image" variant="light">
      <Container>
        <Link className="text-nav" to="/about">
          Wesley Palov
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/about">
              {" "}
              About{" "}
            </Link>
            <Link className="nav-link" to="/blog">
              {" "}
              Projects{" "}
            </Link>
            <Link className="nav-link" to="/contact">
              {" "}
              Contact{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
