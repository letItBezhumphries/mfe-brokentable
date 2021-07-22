import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import CustomMenu from "./customMenu";
import MetroSelectionsMenu from "./metrosMenu/metroSelectionsMenu";
import RegionsMenu from "./regionsMenu/regionsMenu";
import metroList from "./metroList";
import "./locationDropdownMenu.css";

const LocationDropdownMenu = ({ selectedMetro, metroClick, region, closeMenu, openMenu, regionClick, menuIsShowing }) => {
  const defaultRegions = metroList[0].regions;
  const [regionsSelected, setRegionsSelected] = useState(defaultRegions);

  const setRegionsOnMetroClick = (metroSelectionObj) => {
    setRegionsSelected(metroSelectionObj.regions);
  }

  return (
    <Dropdown.Menu as={CustomMenu} onSelect={openMenu} close={closeMenu} show={menuIsShowing} className="location-dropdown-menu">
      <Container className="menu-container">
        <Dropdown.Header className="menu-dropdown-header">
          <Col className="menu-header-column-metro">Metro</Col>
          <Col className="menu-header-column-region">Region</Col>
        </Dropdown.Header>
        <Dropdown.Divider></Dropdown.Divider>
        <Row className="menu-content">
          <MetroSelectionsMenu setRegionsMenu={setRegionsOnMetroClick} onMetroClick={metroClick} openMenu={openMenu} menuShowing={menuIsShowing} selectedMetro={selectedMetro} region={region}>
            { metroList.map((metro, idx) => {
             return <div key={idx} label={metro.metroName} metro={metro} eventKey={metro.eventKey} />
            })}
          </MetroSelectionsMenu>
          <Col className="region-list-column">
            <RegionsMenu regions={regionsSelected} regionSelection={region} closeMenuClick={closeMenu} onRegionClick={regionClick} menuShowing={menuIsShowing} />
          </Col>
        </Row>
        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.Header className="metro-dropdown-footer">
          <NavLink className="metrolist-all-link" href="#metrolist-all">Full List of Metros</NavLink>
        </Dropdown.Header>
      </Container>
    </Dropdown.Menu>
  )
}

export default LocationDropdownMenu;