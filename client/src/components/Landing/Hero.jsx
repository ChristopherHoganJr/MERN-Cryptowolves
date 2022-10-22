import React from "react";

// bootstrap imports

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// images
import HeroImg from "../../imgs/ethereum-hero.jpg";

const Hero = () => {
  return (
    <Row>
      <Col>
        <h2>Crypto Wolves</h2>
        <h3>Manage your decentralized pack</h3>
        <p>
          Crypto Wolves is the newest platform for crypto and NFT community
          building. Join the only Web3 wolf pack that aims to bring the power to
          blockchain builders. Give your pack a platform to come together, share
          thoughts, and foster the community it needs to grow.
        </p>
        <div className="d-flex gap-3">
          <Button>Learn More</Button>
          <Button>Join the pack</Button>
        </div>
      </Col>
      <Col>
        <img src={HeroImg} alt="" className="w-100" />
      </Col>
    </Row>
  );
};

export default Hero;
