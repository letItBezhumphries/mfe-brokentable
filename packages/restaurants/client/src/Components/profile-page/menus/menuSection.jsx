import React, { Fragment } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Provided from "../../../assets/provided_by.png";
import MenuNav from "./menuNav";

const MenuSection = (props) => {

  const filterMenus = (propsObj) => {
    let menus = [];
    for (var key in propsObj) {
      menus.push(propsObj[key]);
    }
    return menus.filter((menu) => menu.length > 0);
  };

  const filteredMenus = filterMenus(props);

  const sectionHeadingStyles = {
    width: "100%",
    display: "flex",
    padding: "0 0 16px 0",
    marginBottom: "16px",
    borderBottom: "1.1111px solid rgb(216, 217, 219)",
  };

  const headingStyles = {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: "700",
  }

  const menuFooterStyles = { 
    width: "100%", 
    display: "flex", 
    justifyContent: "space-between", 
    padding: "0px 0px 16px 0px", 
    margin: "16px 0px" 
  };

  const menuSectionStyles = {
    width: "100%",
    padding: "0 0",
    margin: "0 0",
    // backgroundColor: "lavender"
  }


  return (
    <Container fluid="true" style={menuSectionStyles} id="menu">
      <Container style={sectionHeadingStyles}>
        <h2 style={headingStyles}>Menu</h2>
      </Container>
      <Container style={{ width: "100%", paddingTop: "8px" }} fluid="true">
        <MenuNav menus={filteredMenus} />
        <Container style={menuFooterStyles} fluid="true">
          <Col sm={8}>
            <p>Last updated:</p>
          </Col>
          <Col sm={4}>
            <img src={Provided} width="200" alt="" />
          </Col>
        </Container>
      </Container>
    </Container>
  );
}

export default MenuSection;
