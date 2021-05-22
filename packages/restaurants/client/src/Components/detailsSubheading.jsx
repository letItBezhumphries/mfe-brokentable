import React from "react";
import Row from "react-bootstrap/Row";
import Utensils from "../assets/SVG/forkandknife.svg";
import StarRating from "./starRating.jsx";
import ReviewsTotal from './reviewsTotal.jsx';
import PriceAverage from './priceAverage.jsx';


const detailsRowStyles = {
  margin: "auto 0",
  padding: "0 4px",
  // backgroundColor: "orange", 
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
  // marginLeft: "8px"
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

// get rid of this ?
const textStyles = {
  display: "flex", 
  alignItems: "center",
  fontSize: "14px", 
  fontWeight: "500",
  alignText: "center",
  paddingLeft: "3px",
  marginLeft: "6px",
}

function DetailsSub({ rev, starz, fare, cuisine }) {

  return (
      <Row style={detailsRowStyles}>
        <div style={firstColumnStyles}>
          <StarRating starz={starz} />
          <div style={textStyles}>
            <ReviewsTotal revsText={rev} />
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
