import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';

const TitleHeading = ({ name }) => {
  return (
    <Fragment>
      <Row>
        <h1 className="pl-4 mt-4 mb-4" 
            style={{ 
              fontSize: "48px", 
              color: "rgb(45, 51, 63)", 
              lineHeight: "56px", 
              fontWeight: "700", 
              textOverflow: "ellipsis" 
            }}
            id="overview"
        >
          {name}
        </h1>           
      </Row>
      <hr style={{ marginBottom: "16px", color: "rgb(216, 217, 219)" }} />
    </Fragment>
  )
}

export default TitleHeading;