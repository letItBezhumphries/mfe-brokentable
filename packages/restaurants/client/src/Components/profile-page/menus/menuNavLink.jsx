import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const MenuNavLink = ({ label, eventKey, activeMenu, onClick }) => {
  const [linkStyles, setLinkStyles] = useState(menuLinkStyles);

  const onMenuLinkClick = () => {
    onClick(label);
  };

  useEffect(() => {
    if (activeMenu === label) {
      setLinkStyles(menuActiveLinkStyles)
    } else {
      setLinkStyles(menuLinkStyles)
    }
  }, [activeMenu, label]);


  const menuActiveLinkStyles = {
    backgroundColor: "#fff",
    border: "1px solid rgb(218, 55, 67)",
    borderRadius: "2px",
    color: "rgb(45, 51, 63)",
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 16px",
    display: "inline-block"
  };
  
  const menuLinkStyles = {
    backgroundColor: "#fff",
    border: "1px solid rgb(216, 217, 219)",
    borderRadius: "2px",
    color: "rgb(45, 51, 63)",
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 16px",
    display: "inline-block"
  };
  
  return (
    <>
      <Nav.Link as={Button} eventKey={eventKey} style={linkStyles} onClick={onMenuLinkClick}>
        {label}
      </Nav.Link>
    </>
  )
}

export default MenuNavLink;