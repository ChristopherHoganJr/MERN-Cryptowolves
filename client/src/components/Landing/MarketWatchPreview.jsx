import React from "react";

// bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// img imports
import WolfDiscussionPreview from "../../imgs/wolfDiscuss.png";

const MarketWatchPreview = () => {
  return (
    <>
      <h2 id="marketWatch" className="text-center">
        MARKET WATCH WOLF DISCUSSION
      </h2>
      <Row className="d-flex gap-3">
        <Col className="h-auto d-flex justify-content-center">
          <img className="landing-market" src={WolfDiscussionPreview} alt="" />
        </Col>
        <Col className="pb-5">
          <h3 className="text-center">Let's make some money $$</h3>
          <p>
            Everyone knows making money is hard alone. With out platform, we
            only work with legitimate investor groups. If we find out that a
            pump-and-dump scheme is using our platform, we will cut ties
            immediately. Use a platform where you know, you will have a higher
            chance of success!
          </p>
        </Col>
      </Row>
    </>
  );
};

export default MarketWatchPreview;
