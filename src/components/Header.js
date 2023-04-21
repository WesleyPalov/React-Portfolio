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
            <Link className="nav-link text-menu" to="/about">
              {" "}
              About{" "}
            </Link>
            <Link className="nav-link text-menu" to="/blog">
              {" "}
              Projects{" "}
            </Link>
            <Link className="nav-link text-menu" to="/contact">
              {" "}
              Contact{" "}
            </Link>
            <a
              href="https://drive.google.com/file/d/1aWclCcQK8bgzeoSY83Rb_8TbRs-IfgzL/view?usp=sharing"
              download="Wesley resume"
              className="nav-link text-menu"
            >
             
                Download Resume
            
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
