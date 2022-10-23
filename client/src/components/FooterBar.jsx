import React from "react";

// bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterBar = () => {
  return (
    <footer className="border-top mt-3">
      <Container>
        <Row>
          <Col className="text-center my-4">
            <h4>&copy; Christopher Hogan Jr</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterBar;
