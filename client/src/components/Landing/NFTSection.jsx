import React from "react";

// img imports
import NFT01 from "../../imgs/NFT_01.png";
import NFT02 from "../../imgs/NFT_02.png";
import NFT03 from "../../imgs/NFT_03.png";

const NFTSection = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
      <h2>CRYPTO WOLVES NFT COMING SOON!!!</h2>
      <h4>GET FEATURES NFT HOLDER ONLY FEATURES</h4>
      <div class="d-flex flex-column flex-md-row">
        <img src={NFT01} alt="" />
        <img src={NFT02} alt="" />
        <img src={NFT03} alt="" />
      </div>
    </div>
  );
};

export default NFTSection;
