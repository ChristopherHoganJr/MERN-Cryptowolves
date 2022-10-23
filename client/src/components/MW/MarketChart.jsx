import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./LineChart";

const MarketChart = ({ currentCoin }) => {
  const [chartData, setChartData] = useState({
    labels: [2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
      {
        label: "Bitcoin average price",
        data: [10, 15, 20, 15, 20, 25],
      },
    ],
  });

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${currentCoin}/market_chart?vs_currency=usd&days=14&interval=daily`
      )
      .then((res) => {
        let newLabels = [];
        let newMarketData = [];
        res.data.prices.map((marketData) => {
          newLabels.push(new Date(marketData[0]).toLocaleDateString("en-US"));
          newMarketData.push(marketData[1]);
        });

        setChartData({
          labels: newLabels,
          datasets: [
            {
              label: `${currentCoin} 14 Day Price`,
              data: newMarketData,
            },
          ],
        });
      });
  }, [currentCoin]);

  return (
    <div style={{}}>
      <LineChart chartData={chartData} />;
    </div>
  );
};

export default MarketChart;
