import React, { useState } from "react";

// bootstrap imports
import Container from "react-bootstrap/Container";

// components
import CoinSelector from "../components/MW/CoinSelector";
import MarketChart from "../components/MW/MarketChart";

const MarketWatch = () => {
  let [currentCoin, setCurrentCoin] = useState("bitcoin");

  let changeCurrentCoin = (coinName) => {
    setCurrentCoin(coinName);
  };

  return (
    <Container>
      <h1>Market Watch</h1>
      <CoinSelector changeCurrentCoin={changeCurrentCoin} />
      <MarketChart currentCoin={currentCoin} />
    </Container>
  );
};

export default MarketWatch;
