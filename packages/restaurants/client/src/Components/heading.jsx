import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.png";
import Icon from "../assets/search.jpg";
import Location from "../assets/SVG/map-pin.svg";

const Heading = () => {
  return (
    <Container fluid="true">
      <Nav
        className="justify-content-end"
        activeKey="/home"
        onSelect={(selectedKey) =>
          alert(`For ${selectedKey},
          please contact us at Hack Reactor`)
        }
      >
        <Nav.Item>
          <Nav.Link href="/home">For Restaurateurs</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Mobile</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>iOS App</Dropdown.Item>
            <Dropdown.Item>Android App</Dropdown.Item>
            <Dropdown.Item>Windows Phone App</Dropdown.Item>
            <Dropdown.Item>Windows 8 App</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link eventKey="help">Help</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>EN</Dropdown.Toggle>
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" style={{ borderRightStyle: "solid", borderRightColor: "rgb(216, 217, 219)", borderRightWidth: "1.1111px", paddingRight: "8px" }}>
          <img src={Logo} width="250" alt="" />
        </Navbar.Brand>
        <div style={{ height: "1fr", width: "1fr", }}>
          <Location style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,.12)"}} />
        </div>
        <NavDropdown title="Title Placeholder" id="basic-nav-dropdown" className="mr-auto p-2">
          <NavDropdown.Item>Metro</NavDropdown.Item>
          <NavDropdown.Item href="/">Atlanta / Georgia</NavDropdown.Item>
          <NavDropdown.Item href="/">Baltimore Area</NavDropdown.Item>
          <NavDropdown.Item href="/">Boston / New England</NavDropdown.Item>
          <NavDropdown.Item href="/">Chicago / Illinois</NavDropdown.Item>
          <NavDropdown.Item href="/">Dallas</NavDropdown.Item>
          <NavDropdown.Item href="/">Denver / Colorado</NavDropdown.Item>
          <NavDropdown.Item href="/">Detroit / Eastern Michigan</NavDropdown.Item>
          <NavDropdown.Item href="/">Houston</NavDropdown.Item>
          <NavDropdown.Item href="/">Las Vegas</NavDropdown.Item>
          <NavDropdown.Item href="/">Los Angeles</NavDropdown.Item>
          <NavDropdown.Item href="/">Miami / Southeast Florida</NavDropdown.Item>
          <NavDropdown.Item href="/">Minneapolis</NavDropdown.Item>
          <NavDropdown.Item href="/">New Orleans / Louisiana</NavDropdown.Item>
          <NavDropdown.Item href="/">New York Area</NavDropdown.Item>
          <NavDropdown.Item href="/">Orange County</NavDropdown.Item>
          <NavDropdown.Item href="/">Philadelphia Area</NavDropdown.Item>
          <NavDropdown.Item href="/">Phoenix</NavDropdown.Item>
          <NavDropdown.Item href="/">San Diego</NavDropdown.Item>
          <NavDropdown.Item href="/">San Francisco Bay Area</NavDropdown.Item>
          <NavDropdown.Item href="/">Seattle Area</NavDropdown.Item>
          <NavDropdown.Item href="/">Tucson</NavDropdown.Item>
          <NavDropdown.Item href="/">Washington, DC</NavDropdown.Item>
        </NavDropdown>
        <ButtonToolbar className="p-2">
          <Button variant="info" href="/" width="92" height="43">
            Sign up
          </Button>
          <Button variant="light" href="/" width="92" height="43">
            Sign in
          </Button>
        </ButtonToolbar>
        <img src={Icon} href="/" height="30" width="30" className="p-2" alt="" />
      </Navbar>
      <hr></hr>
      <Navbar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">United States</Nav.Link>
        <Nav.Link href="/">Metro Placeholder</Nav.Link>
        <Nav.Link href="/">Region Placeholder</Nav.Link>
        <Nav.Link href="/">Region</Nav.Link>
      </Navbar>
    </Container>
  );
}

export default Heading;
