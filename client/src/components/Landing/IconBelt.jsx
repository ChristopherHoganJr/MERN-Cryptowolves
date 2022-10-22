import React from "react";

// images
import BitcoinIcon from "../../imgs/bitcoinIcon.png";
import BscIcon from "../../imgs/bscIcon.png";
import EthIcon from "../../imgs/ethIcon.png";
import GmrIcon from "../../imgs/gmrIcon.png";
import SolIcon from "../../imgs/solIcon.png";
import XrpIcon from "../../imgs/xrpIcon.png";
import AdaIcon from "../../imgs/adaIcon.png";

const IconBelt = () => {
  return (
    <div class="my-5">
      <div className="d-flex justify-content-center gap-2 justify-content-md-between">
        <img src={BitcoinIcon} alt="" />
        <img src={BscIcon} alt="" />
        <img src={EthIcon} alt="" />
        <img src={GmrIcon} alt="" />
        <img src={SolIcon} alt="" />
        <img src={XrpIcon} alt="" />
        <img src={AdaIcon} alt="" />
      </div>
    </div>
  );
};

export default IconBelt;
