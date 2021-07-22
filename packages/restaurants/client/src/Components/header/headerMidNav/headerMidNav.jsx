import React from 'react';
import LocationSearchbar from "./locationSearchbar/locationSearchbar";
import Searchbar from "./searchbar/searchbar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../assets/logo.png";
import "./headerMidNav.css";

const HeaderMidNav = ({ showSearch, closeSearch, show, metro, setMetroMenu, closeMenu, openMenu, showMenu, setRegion, region, menuIsShowing }) => {
    
  return (
    <Navbar expand="lg" className="mid-bar-header">
      <Navbar.Brand href="#home" className="logo-box">
        <img src={Logo} width="250" alt="" />
      </Navbar.Brand>
      <Nav className="mid-bar-searchbar">
        <LocationSearchbar 
          metroSelected={metro} 
          setMetroMenu={setMetroMenu} 
          closeDropdown={closeMenu} 
          showDropdown={showMenu}
          openMenu={openMenu} 
          setRegionSelected={setRegion} 
          regionSelected={region} 
          menuShowing={menuIsShowing} />
        <Searchbar showSearch={showSearch} closeSearch={closeSearch} show={show} />
      </Nav>
    </Navbar>
  )
}

export default HeaderMidNav;
