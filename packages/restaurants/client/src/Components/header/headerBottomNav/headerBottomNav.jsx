import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./headerBottomNav.css";


const HeaderBottomNav = ({ metroSelected, regionSelected, previousRegionSelected }) => {
  return (
    <Navbar className="bottom-bar">
      <div className="breadcrumbs">
        <Nav.Link href="/" className="bottom-bar-breadcrumb home">
          <span className="breadcrumb-text">Home</span>
        </Nav.Link>
        <Nav.Link href="/" className="bottom-bar-breadcrumb">
          <span className="breadcrumb-text">United States</span>
        </Nav.Link>
        { metroSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb">
          <span className="breadcrumb-text">{metroSelected}</span></Nav.Link> : null }
        { previousRegionSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb">
          <span className="breadcrumb-text">{previousRegionSelected}</span></Nav.Link> : null }
        { regionSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb active">
          <span className="breadcrumb-text">{regionSelected}</span></Nav.Link> : null }
      </div>
    </Navbar>
  )
}

export default HeaderBottomNav;