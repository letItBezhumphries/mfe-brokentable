import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Radium from 'radium';

const cardStyles = { 
  position: "sticky",
  top: "375px",
  zIndex: "1003",
  boxShadow: "0 2px 8px rgba(153, 153, 153, .4)",
  lineHeight: "18.4px",
  display: "block",
  marginTop: "16px",
  width: "100%",
  height: "auto",
  marginBottom: "16px",
};

const cardHeaderStyles = {
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center",
  // positon: "relative",
};

const titleStyles = {
  display: "flex",
  flexDirection: "column",
  fontSize: "21px",
  fontWeight: "700",
  height: "48px",
  justifyContent: "center",
  lineHeight: "24px",
  minHeight: "48px",
  textAlign: "center",
  // paddingTop: "8px",
}

const cardBodyStyles = {
  borderRadius: "2px",
  // margin: "0 0 16px 0",
  padding: "8px 16px 16px 16px",
  marginBottom: "16px",
}

const formBtnContainer = {
  display: "flex",
  marginTop: "16px",
  overflow: "hidden",
  width: "100%",
}

const buttonStyles = {
  backgroundColor: "rgb(218, 55, 67)",
  alignItems: "flex-start",
  appearance: "none",
  borderRadius: "2px",
  borderStyle: "none",
  color: "rgb(255, 255, 255)",
  fontSize: "16px",
  padding: "12px 16px", 
  textAlign: "center",
  lineHeight: "24px"
};


const Orders = () => {
  return (
    <Card style={cardStyles}>
      <div style={cardHeaderStyles}>
        <h3 style={titleStyles}>
          <span style={{ alignSelf: "center", paddingTop: "8px" }}>Order delivery or takeout</span>
        </h3>
      </div>
      <div style={cardBodyStyles}>
        <div>
          <div style={{ padding: "4px 0" }}>
            <p style={{ color: "rgb(45,51,63)", fontSize: "16px", fontWeight: "500", lineHeight: "24px", marginInlineEnd: "8px", marginRight: "8px" }}>
              <span>
                <span>Takeout from OpenTable</span>
              </span>
              <span style={{ backgroundColor: "rgb(218, 55, 67)", borderRadius: "16px", color: "rgb(255, 255, 255)", fontSize: "12px", lineHeight: "12px", marginLeft: "8px", padding: "2px 6px", textAlign: "center"}}>
                <span>NEW</span>
              </span>
            </p>
            <p style={{ fontSize: "14px", lineHeight: "16px", marginBlockStart: "8px", margin: "8px 0 16px 0" }}>
              <span>Accepting orders for today at 12:00 PM</span>
            </p>
          </div>
          <div style={formBtnContainer}>
            <Button size="lg" style={buttonStyles} block>Start takeout order</Button>
          </div>
        </div>
      </div>  
    </Card>
  )
}

export default Orders;