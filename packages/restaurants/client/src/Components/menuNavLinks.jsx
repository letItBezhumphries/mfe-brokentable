import React, { useState } from 'react';
import MenuNavLink from "./menuNavLink.jsx";
import Nav from 'react-bootstrap/Nav';

const MenuNavLinks = ({ children }) => {
  const [activeLink, setActiveLink] = useState(children[0].props.label);

  const onClickTabItem = (menu) => {
    setActiveLink(menu);
  };

  const menuNavBarStyles = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: '16px',
  }

  return (
    <Nav style={menuNavBarStyles} variant="pills" defaultActiveKey="Dinner">
      {children.map((child) => {
          const { label } = child.props;
          return (
            <Nav.Item key={label}>
              <MenuNavLink activeMenu={activeLink} eventKey={label} label={label} onClick={onClickTabItem} />
            </Nav.Item>
          );
        })}
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeLink) return undefined;
            return null;
          })}
        </div>
    </Nav>
  )
}

export default MenuNavLinks;