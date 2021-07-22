import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const TitleHeading = ({ name }) => {
  return (
    <Row style={{ paddingBottom: "2rem", borderBottom: "1px solid #d8d9db", marginBottom: "1.6rem" }}>
        <h1 
            style={{ 
              fontSize: "48px", 
              color: "rgb(45, 51, 63)", 
              lineHeight: "56px", 
              fontWeight: "700", 
              textOverflow: "ellipsis" 
            }}
        >
          {name}
        </h1>           
    </Row>
  );
}

export default TitleHeading;