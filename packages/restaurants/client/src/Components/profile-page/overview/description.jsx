import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Description = ({ description }) => {
  return (
    <Row>
      <Col style={{
        padding: "0px 30px",
        fontSize: "14px"
        }}
      >
        <p className="text-justify">{description}</p>
      </Col>
    </Row>
  );
}

export default Description;