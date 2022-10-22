import React from "react";

// bootstrap imports
import Container from "react-bootstrap/Container";

// components
import Hero from "../components/Landing/Hero";
import IconBelt from "../components/Landing/IconBelt";
import NFTSection from "../components/Landing/NFTSection";
import MarketWatchPreview from "../components/Landing/MarketWatchPreview";

const Landing = () => {
  return (
    <Container>
      <Hero />
      <IconBelt />
      <NFTSection />
      <MarketWatchPreview />
    </Container>
  );
};

export default Landing;
