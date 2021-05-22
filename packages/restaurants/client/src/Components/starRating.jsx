import React, { useState, useEffect, useRef, Fragment } from "react";

const StarRating = ({ starz }) => {
  const [numberOfStars, setNumberOfStars] = useState();
  const starAvgString = starz.toString().slice(0, 4);
  let totalStarz, percentage;
  if (starz.toString().length <= 2) {
    totalStarz = parseInt(starz.toString().slice(0, 1));
  }  
  if (starz.toString().length >= 3) {
    totalStarz = Math.floor(starz) + 1;
  }
  const ratingRef = useRef();

  useEffect(() => {
    const starsArray = [...Array(totalStarz).keys()].map((i) => i + 1);
    setNumberOfStars(starsArray);  
    percentage = (starz / totalStarz) * 100;
    const startPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = startPercentage;
  }, [starz]);

  const starTextStyles = {
    marginLeft: "4px",
    fontSize: "14px",
    fontWeight: "500",
    paddingBottom: "4px",
    textAlign: "center",
  }

  const backStars = {
    display: "flex",
    color: "#bdbdbd",
    position: "relative",
  }

  const frontStars = {
    display: "flex",
    color: "#DA3743",
    position: "absolute",
    overflow: "hidden",
    top: "0",
  }

  const starsRating = {
    height: "22px", 
    marginRight: "4px", 
    marginTop: '2px', 
    lineHeight: '18.4px', 
    flexBasis: "1fr",
    display: "flex",
  }


  return (
    <div style={{ boxSizing: "border-box", display: "block", height: "20px" }}>
      <div style={starsRating}>
        <div style={backStars}>
          { numberOfStars &&
            numberOfStars.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
          <div style={frontStars} ref={ratingRef}>
            { numberOfStars && numberOfStars.map((i) => (
                <Fragment key={i}>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </Fragment>
              ))}
          </div>
        </div>
        
        <div style={starTextStyles}>{starAvgString}</div>
          
      </div>
    </div>
  );
}

export default StarRating;