import React from 'react';
import Row from 'react-bootstrap/Row';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Radium from 'radium';

const TagsSubheading = ({ tagz }) => {
  
  const tagRowStyles = {
    marginTop: "16px",
    margin: "auto 0", 
    display: "flex", 
  }

  
  const buttonToolbarStyles = {
    marginLeft: "10px",
    flex: "1 1 70%",
    display: "flex",
    justifyContent: "space-evenly"
  }

  const buttonStyles = {
    borderWidth: "1.1111px",
    borderStyle: "solid",
    borderColor: "rgb(216, 217, 219)",
    borderRadius: "16px",
    fontSize: "14px",
    color: "rgb(111, 115, 123)",
    cursor: "pointer",
    display: "flex",
    fontWeight: "500",
    lineHeight: "20px",
    marginLeft: "8px",
    padding: "5px 16px",
    textTransform: "capitalize",
    alignItems: "center",
    ":hover": {
      borderColor: "#da3743",
      borderWidth: "2px",
      borderStyle: "solid",
      padding: "4px 15px"
    }
  }

  return (
    <Row style={tagRowStyles}>
      <p style={{ display: "block", fontSize: "18px", lineHeight: "24px", marginBlockStart: "2px", marginTop: "2px" }}>
        <span style={{ fontSize: "16px" }}>Top Tags:</span>
      </p>
      <ButtonToolbar style={buttonToolbarStyles}>
        { tagz.length ? (
          tagz.map((tag, idx) => (
            <div as={Button} key={idx} variant="outline-*" href="/" style={buttonStyles}>
              { tag }
            </div>
          )
        )) : null }
      </ButtonToolbar>
    </Row>
  );
}

export default Radium(TagsSubheading);