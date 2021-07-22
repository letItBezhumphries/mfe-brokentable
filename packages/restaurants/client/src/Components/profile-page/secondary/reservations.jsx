import React, { useState } from 'react';
import Radium from 'radium';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UpwardIcon from "../../../assets/SVG/line-chart.svg";

const cardStyles = { 
  position: "sticky",
  top: "48px",
  zIndex: "1003",
  boxShadow: "0 2px 8px rgba(153, 153, 153, .4)",
  lineHeight: "18.4px",
  display: "block",
  // paddingBottom: "8px",
  width: "100%",
  height: "320px",
}

const cardHeaderStyles = {
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingLeft: "16px",
  paddingRight: "16px",
  textAlign: "center"
}

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
  // backgroundColor: "yellowgreen",
  display: "block",
  // margin: "0 0 0 16px",
  padding: "8px 16px 16px 16px",
  borderBottomLeftRadius: "2px",
  borderBottomRightRadius: "2px"
}

const reservationFormStyles = {
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}

const controlLabelStyles = {
  flex: "1 1 50%",
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16px",
  paddingBottom: "4px"
}

const controlSelectStylesA = {
  color: "rgb(0, 0, 0)",
  backgroundColor: "#fff",
  flex: "1 1 50%",
  borderColor: "rgb(0, 0, 0)",
  borderStyle: "none",
  borderWidth: "1.1111px",
  textDecoration: "none",
  boxShadow: "none",
  borderBottomColor: "rgb(216,217,219)",
  borderBottomStyle: "solid",
  borderBottomWidth: "1.1111px",
  boxSizing: "border-box",
  pointer: "cursor",
  height: "35px",
  display: "block",
  fontSize: "16px",
  lineHeight: "18.4px",
  outlineStyle: "none",
  position: "relative",
  ":hover": {
    borderBottomColor: "#DA3743",
    borderBottomStyle: "solid",
    borderBottomWidth: "1.1111px",
  }
}

const controlSelectStylesB = {
  color: "rgb(0, 0, 0)",
  backgroundColor: "#fff",
  borderStyle: "none",
  borderBottomColor: "rgb(216,217,219)",
  borderBottomStyle: "solid",
  borderBottomWidth: "1.1111px",
  boxSizing: "border-box",
  justifyContent: "flex-start",
  pointer: "cursor",
  textDecoration: "none",
  boxShadow: "none",
  display: "inline-block",
  height: "35px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "18.4px",
  textAlign: "center",
  marginLeft: "8px",
  // padding: "1px 6px 1px 0",
  outlineStyle: "none",
  position: "relative",
  ":hover": {
    borderBottomColor: "#DA3743",
    borderBottomStyle: "solid",
    borderBottomWidth: "1.1111px",
  }
}

const formRowStylesA = {
  clear: "both",
  display: "block",
  flexDirection: "column",
  margin: "0 0",
  padding: "8px 0 0 0",
  maxHeight: "130px",
  overflow: "hidden",
  // transition: maxHeight
}

const formRowStylesB = {
  display: "flex",
  flex: "1 1 100%",
  margin: "8px 0 0 0",
  padding: "0 0",
  lineHeight: "18.4px",
}

const formColumnStyles = {
  display: "block",
  flex: "1 1 50%",
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

const cardFooterStyles = {
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "12px",
  textAlign: "center",
  alignItems: "center",
  fontSize: "14px",
};



const Reservations = () => {
  const [formData, setFormData] = useState({
    partySize: "",
    date: "",
    timeSlot: ""
  });
  
  const {
    partySize,
    date,
    timeSlot
  } = formData;
  
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  

  const randomBookedTotalString = (num) => {
    const number = Math.floor(Math.random() * Math.floor(num));
    return `Booked ${number} times today`;
  };

  return (
    <Card style={cardStyles}>
      <div style={cardHeaderStyles}>
        <h3 style={titleStyles}>
          <span style={{ alignSelf: "center", paddingTop: "8px" }}>Make a reservation</span>
        </h3>
      </div>
      <Card.Body as="div" style={cardBodyStyles}>
        <div style={reservationFormStyles}>
          <Form.Group controlId="reservationForm.ControlSelectPartySize" style={formRowStylesA}>
            <Form.Label as="div" id="party-size-label" style={controlLabelStyles}>Party Size</Form.Label>
            <Button as="select" placeholder="For 2" name='partySize' value={partySize} onChange={e => onChange(e)} style={controlSelectStylesA} aria-labelledby="party-size-label" block>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Button>
          </Form.Group>

          <Form.Group controlId="reservationForm.ControlSelectDate" style={formRowStylesB}>
            <div style={formColumnStyles}>
              <Form.Label as="div" style={{ display: "block", fontSize: "14px", fontWeight: "500", lineHeight: "16px", paddingBottom: "4px" }}>Date</Form.Label>
              <Button as="select" placeholder="Today" style={controlSelectStylesA} name="date" value={date} onChange={e => onChange(e)} block>
                <option>Today</option>
              </Button>
            </div>   
            <div style={formColumnStyles}>
              <Form.Label as="div" style={controlLabelStyles}>Time</Form.Label>
              <Button as="select" placeholder="4:00 PM" name="timeSlot" value={timeSlot} onChange={e => onChange(e)} style={controlSelectStylesB} block>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </Button>
            </div>
          </Form.Group>
        </div>
        <div style={formBtnContainer}>
          <Button size="lg" style={buttonStyles} block>Find a table</Button>
        </div>
        <div style={cardFooterStyles}>
        <div style={{ alignSelf: "center", paddingTop: "8px", paddingLeft: "6px" }}>
          <UpwardIcon style={{ height: '24px', width: '24px', fill: 'rgb(0,0,0)' }}/>
        </div>
          <div style={{ marginLeft: "1px", alignSelf: "center" }}>{randomBookedTotalString(250)}</div>
        </div>
      </Card.Body>

    </Card>
  )
}


export default Radium(Reservations); 