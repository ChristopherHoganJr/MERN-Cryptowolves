import React from "react";

// bootstrap imports
import Container from "react-bootstrap/Container";

const FooterBar = () => {
  return (
    <footer class="border-top mt-3">
      <Container>
        <div class="row">
          <div class="col text-center my-4">
            <h4>&copy; Christopher Hogan Jr</h4>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterBar;
