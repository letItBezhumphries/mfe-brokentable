import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Menu = ({ menu, title }) => {
  const menuContentStyles = {
    display: "flex", 
    flexDirection: "column", 
  };

  const columnStyles = {
    breakInside: "avoid",
    lineHeight: "20px",
    fontSize: "14px",
    marginBottom: "16px"
  };

  const itemHeadingStyles = { 
    display: "flex", 
    justifyContent: "space-between",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "500"
  };

  const itemDescriptionStyles = {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px"
  }

  return (
    <Container style={menuContentStyles}>
      <div style={{ marginBottom: "16px" }}>
        <h4 style={{ fontSize: "16px", lineHeight: "24px", fontWeight: "600"}}>{title}</h4>
      </div>
      <Row>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Bean Chard with Arugula</div>
            <div>$15.00</div>
          </div>
          <p style={itemDescriptionStyles}>Crunchy biscuits made with millet and pumpkin seeds</p>
        </Col>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Horseradish and leek wontons</div>
            <div>$27.00</div>
          </div>
          <p style={itemDescriptionStyles}>Thin wonton cases stuffed with fresh horseradish and frizzled leek</p>
        </Col>
      </Row>
      <Row>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Plum sauce and john dory salad</div>
            <div>$17.00</div>
          </div>
          <p style={itemDescriptionStyles}>Plum sauce and john dory served on a bed of lettuce</p>
        </Col>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Monkfish and blueberry pie</div>
            <div>$23.00</div>
          </div>
          <p style={itemDescriptionStyles}>A shortcrust pasty case filled with monkfish and fresh blueberry</p>
        </Col>
      </Row>
      <Row>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Stilton and tuna soup</div>
            <div>$18.00</div>
          </div>
          <p style={itemDescriptionStyles}>Stilton and tuna combined into creamy soup</p>
        </Col>
        <Col style={columnStyles}>
          <div style={itemHeadingStyles}>
            <div>Karengo and cauliflower soup</div>
            <div>$17.00</div>
          </div>
          <p style={itemDescriptionStyles}>Karengo and fresh cauliflower combined into chunky soup</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu;