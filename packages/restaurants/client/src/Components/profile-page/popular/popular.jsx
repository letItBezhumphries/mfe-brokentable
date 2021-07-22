import React, { Fragment } from 'react';
import Radium from 'radium';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Popular = () => {
  const sectionStyles = {
    paddingBottom: "16px",
    marginBottom: "16px",
    borderBottom: "1.1111px solid rgb(216, 217, 219)",
  }

  const sectionHeadingStyles = {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "700",
    color: "#2d333f",
  }

  const popularStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "64px",
  };

  const cardStyles = {
    borderRadius: "4px",
    border: "1px solid #d8d9db",
    flexShrink: "0",
    maxWidth: "200px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: ".2s",
    ":hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 2px 4px rgba(45, 51, 63, .2)",
    }
  }

  const cardHeaderStyles = {
    backgroundColor: "rgb(255, 255, 255)",
    fontSize: "16px",
    fontWeight: "500",
    minHeight: "48px",
  }

  const cardTextStyles = {
    color: "rgb(111, 115, 123)",
    fontSize: "14px",
    "marginBlockStart": "4px",
    "marginBlockEnd": "0px",
    fontWeight: "400",
    lineHeight: "20px",
    maxHeight: "40px",
    overflowX: "hidden",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    lineClamp: "2"
  }

  const cardFooterStyles = {
    marginTop: "12px",
    lineHeight: "18.4px",
    fontSize: "14px",
    fontWeight: "500",
    maxHeight: "20px"
  }

  const popularData = [
  {
    title: "Sugar Dates & Beets",
    description: "Sweet cooked beets marinated in tartar and honey lime extraction",
    reviewsNum: 3
  },
  {
    title: "Salmon Stigmata",
    description: "Salmon with poached Leeks in garlic butter emulsion",
    reviewsNum: 16
  },
  {
    title: "Cuban Sandwich",
    description: "Grilled chicken breast or organic tofu with slightly greasy vinagrette",
    reviewsNum: 5
  }
];

  return (
    <Container style={{ marginTop: "1.6rem" }}>
      <Row style={sectionStyles}>
        <h2 id="popular" style={sectionHeadingStyles}>Popular dishes</h2>
      </Row>

      <Row style={popularStyles}>
        { popularData.map((dish, id) => {
          return <div key={id} style={cardStyles}>
            <h1 style={cardHeaderStyles}>{dish.title}</h1>
            <p style={cardTextStyles}>
              {dish.description}
            </p>
            <div style={cardFooterStyles}>
              <p>
                <span>{dish.reviewsNum} reviews</span>
              </p>
            </div>
          </div>
        })}
      </Row>
    </Container>
  )
}

export default Radium(Popular);
