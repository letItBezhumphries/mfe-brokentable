import React from "react";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Dropdown from "react-bootstrap/Dropdown";
import "./headerTopNav.css";

const HeaderTopNav = () => {
  return (
      <Nav
        className="top-bar-header"
        activeKey="/home"
        onSelect={(selectedKey) =>
          alert(`For ${selectedKey},
          please contact us at Hack Reactor`)
        }
      >
        <Nav.Item>
          <Nav.Link href="/home" className="top-bar-link">For Restaurateurs</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="top-bar-link">Mobile</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>iOS App</Dropdown.Item>
            <Dropdown.Item>Android App</Dropdown.Item>
            <Dropdown.Item>Windows Phone App</Dropdown.Item>
            <Dropdown.Item>Windows 8 App</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link eventKey="help" className="top-bar-link">Help</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="top-bar-language-link">EN</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Deutsch</Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Español</Dropdown.Item>
            <Dropdown.Item>Français</Dropdown.Item>
            <Dropdown.Item>Italiano</Dropdown.Item>
            <Dropdown.Item>Nederlands</Dropdown.Item>
            <Dropdown.Item>日本語</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
  )
}


export default HeaderTopNav;