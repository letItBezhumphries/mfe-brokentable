import React, { useState, useEffect } from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import SearchIcon from "../../../../assets/search.jpg";
import "./searchbar.css";


const Searchbar = ({ showSearch }) => {

  return (
    <div className="mid-bar-search-navbar-right">
      <ButtonToolbar className="mid-bar-login-buttonbox">
        <Button variant="info" href="/" size="lg" className="mid-bar-button">
          Sign up
        </Button>
        <Button variant="light" href="/" size="lg" className="mid-bar-button">
          Sign in
        </Button>
      </ButtonToolbar>
      <div className="mid-bar-search-buttonbox" onClick={showSearch}>
        <img src={SearchIcon} href="/" height="25" width="25" className="p-2" alt="" style={{ marginLeft: "1rem" }} />
      </div> 
    </div>
  )
}

export default Searchbar;