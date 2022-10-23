import React from "react";

// img imports
import BitcoinIcon from "../../imgs/bitcoinIcon.png";
import EthereumIcon from "../../imgs/ethIcon.png";
import AdaIcon from "../../imgs/adaIcon.png";

const CoinSelector = ({ changeCurrentCoin }) => {
  return (
    <div>
      <img
        src={BitcoinIcon}
        alt=""
        onClick={() => changeCurrentCoin("bitcoin")}
      />
      <img
        src={EthereumIcon}
        alt=""
        onClick={() => changeCurrentCoin("ethereum")}
      />
      <img src={AdaIcon} alt="" onClick={() => changeCurrentCoin("cardano")} />
    </div>
  );
};

export default CoinSelector;
