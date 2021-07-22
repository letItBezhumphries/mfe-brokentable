import React from "react";
import Row from "react-bootstrap/Row";
import Utensils from "../../../assets/SVG/forkandknife.svg";
import StarRating from "./starRating";
import ReviewsTotal from './reviewsTotal';
import PriceAverage from './priceAverage';

const detailsRowStyles = {
  margin: "auto 0",
  padding: "0 4px",
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "16px",
  height: '24px',
  alignItems: "center",
};

const firstColumnStyles = {
  display: "flex", 
  marginRight: "4px", 
  lineHeight: "18.4px", 
  fontSize: "14px",
  flexBasis: "1fr",
  paddingRight: "0px",
  alignItems: "center",
};

const secondColumnStyles = {
  display: "flex", 
  marginRight: "4px", 
  lineHeight: "18.4px", 
  fontSize: "14px",
  flexBasis: "1fr",
  paddingLeft: "0px",
  alignItems: "center",
}

const textStyles = {
  display: "flex", 
  alignItems: "center",
  fontSize: "14px", 
  fontWeight: "500",
  alignText: "center",
  paddingLeft: "3px",
  marginLeft: "6px",
}

const DetailsSub = ({ rev, starz, fare, cuisine }) => {
  return (
    <Row style={detailsRowStyles}>
      <div style={firstColumnStyles}>
        { starz > 0 ? <StarRating starz={starz} /> : null }
        <div style={textStyles}>
          <ReviewsTotal total={rev} />
        </div>
      </div>
      <div style={secondColumnStyles}>
        <PriceAverage fare={fare} />
        <div style={textStyles}>
          <Utensils style={{ height: "16px", width: "16px", fill: "black" }} />
          <div style={{ textAlign: "center", display: "flex", alignItems: "center"}}>
            <div style={{ marginLeft: "6px", alignSelf: "center", paddingTop: "2px"}}>
              { cuisine }
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default DetailsSub;
