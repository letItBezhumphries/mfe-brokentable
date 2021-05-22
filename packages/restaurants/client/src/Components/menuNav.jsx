import React, { useState } from 'react';
import Radium from 'radium';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import MenuNavLinks from "./menuNavLinks.jsx";
import Menu from './menu.jsx';

const MenuNav = ({ menus }) => {
  const [activeKey] = useState("Dinner");

  const navStyles = {
    display: "block",
    width: "100%",
    padding: "0 0 16px 0",
    margin: "-16px 0 0 0",
    lineHeight: "18.4px",
    borderBottom: "1.1111px solid rgb(216, 217, 219)"
  };

  const menuContentStyles = {
    padding: "16px 8px 16px 8px",
    borderBottom: "1.1111px solid rgb(216, 217, 219)",
    width: "100%",
  }

  const viewMenuButtonStyle = {
    padding: "12px 52px",
    margin: "0 0 32px 0",
    border: "1.1111px solid rgb(216, 217, 219)",
    borderRadius: "2px",
    color: "rgb(0, 0, 0)",
    backgroundColor: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "16px",
    ":hover": {
      border: "1.1111px solid rgb(218, 55, 67)",
    }
  }

  const tabPaneStyles = {
    maxHeight: "400px",
    padding: "0px 0px 4px 0px",
  }

  const menuTypes = ["Dinner", "Lunch", "Appetizers", "Entrees", "Deserts"];
  const menuLinks = menuTypes.slice(0, menus.length - 1).map((menuType, idx) => {
    return <div label={menuType} key={idx}>{menuType}</div>
  });

  const menuSelection = menuTypes.slice(0, menus.length -1).map((menuType, idx) => {
    return <Tab.Pane eventKey={menuType} key={idx} style={tabPaneStyles}>
            <Menu menu={menus[idx]} title={menuType} />
          </Tab.Pane>
  });

  return (
    <Tab.Container defaultActiveKey={activeKey} fluid="true" style={{ width: "100%" }}>
      <Row style={navStyles} fluid="true">
        <MenuNavLinks>
          {menuLinks}
        </MenuNavLinks>
      </Row>
      <Container style={menuContentStyles} fluid="true">
        <Tab.Content>
          { menuSelection }
        </Tab.Content>
        <div style={{ width: "100%", textAlign: "center" }}>
          <button style={viewMenuButtonStyle} size="lg">View full menu</button>
        </div>
      </Container>
    </Tab.Container>
  )
}

export default Radium(MenuNav);