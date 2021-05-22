import React from "react";
import Comment from "../assets/SVG/chat.svg";

const reviewsContainerStyles = {
  display: "flex",
  textDecorationColor: 'rgb(0, 0, 0)',
  textDecorationLine: "none",
  textDecorationStyle: "solid",
  textDecorationThickness: "auto",
  textOverflow: "ellipsis",
  lineHeight: "18.4px",
};

const iconStyles = {
  height: "24px",
  width: "24px",
  fill: "rgb(0,0,0)",
};

const textStyles = {
  display: "flex",
  lineHeight: "20px",
  fontSize: "14px",
  fontWeight: "500",
  alignText: "center",
  alignItems: "center",
  paddingLeft: "3px",
  paddingTop: "2px",
};


const ReviewsTotal = ({ revsText }) => {

  return ( 
    <div style={{ display: "block", marginRight: "4px"}}>
      <div style={reviewsContainerStyles}>
        <div style={{ marginLeft: "4px"}}>
          <Comment style={iconStyles}/>
        </div>
        <div style={textStyles}>
          <span>{revsText}</span>
        </div>
      </div>
    </div>
  );
}


export default ReviewsTotal;