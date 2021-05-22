import React from 'react';
import Price from "../assets/priceicon.png";

const PriceAverage = ({ fare, cost }) => {
  
  const getRandomPrice = () => {
    return Math.floor(Math.random() * (60 - 15) + 15);
  }

  const averagePriceText = `$${getRandomPrice()} and under`;

  const textStyles = {
    display: "flex",
    alignItems: "center",
    lineHeight: "20px",
    fontSize: "14px",
    fontWeight: "500",
    alignText: "center",
    marginLeft: "8px"
  };

  return (
    <div style={{ fontSize: "14px", display: "flex", paddingTop: "1px", alignItems: "center" }}>
        <img src={Price} height="20" width="25"  alt=''/>
      <div style={textStyles}>
        { averagePriceText }
      </div>   
    </div>
  )
}

export default PriceAverage;