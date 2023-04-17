import { Col, Row } from "react-bootstrap";

import { Github, Linkedin, Envelope } from "react-bootstrap-icons";

function Footer() {
  return (
    <Row 
      className="mx-auto w-100 border text-center d-flex justify-content-center fixed-bottom bg-dark text-light py-3"
      gap={3}
    >
      <Col xs={3} className="d-flex justify-content-evenly">
       
          <a href="https://github.com/WesleyPalov">
            <Github />{""}
          </a>
          <a>
            <Linkedin />{" "}
          </a>
          <a>
            <Envelope />{" "}
          </a>
    
      </Col>
    </Row>
  );
}

export default Footer;
