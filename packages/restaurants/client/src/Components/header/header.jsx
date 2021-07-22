import React, { useState, Fragment } from "react";
import Container from "react-bootstrap/Container";
import HeaderTopNav from "./headerTopNav/headerTopNav";
import HeaderMidNav from "./headerMidNav/headerMidNav";
import HeaderBottomNav from "./headerBottomNav/headerBottomNav";
import RestaurantSearchForm from "./headerMidNav/searchbar/restaurantSearchForm";


const Header = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [metroSelected, setMetroSelected] = useState("");
  const [regionSelected, setRegionSelected] = useState("");
  const [previousRegionSelected, setPreviousRegionSelected] = useState("");

  const handleShowFormClick = () => {
    setShowSearchForm(!showSearchForm);
  }

  const handleFormClose = () => {
    setShowSearchForm(false);
  }

  const toggleShowMenuClick = () => {
    setShowDropdownMenu(!showDropdownMenu);
  }

  const handleMenuOpen = () => {
    setShowDropdownMenu(true);
  }

  const handleMenuClose = () => {
    setShowDropdownMenu(false);
  }

  const handleMetroClick = (metro) => {
    setMetroSelected(metro.metroName);
  }

  const handleRegionClick = (region) => {
    setRegionSelected(region);
    handleMenuClose();
  }

  return (
    <Container fluid="true">
      <HeaderTopNav />
      { showSearchForm ? (
        <Fragment><RestaurantSearchForm closeSearch={handleFormClose} show={showSearchForm}/></Fragment>
      ) : (
        <Fragment>
          <HeaderMidNav  
            showSearch={handleShowFormClick} 
            closeSearch={handleFormClose} 
            show={showSearchForm}
            metro={metroSelected} 
            setMetroMenu={handleMetroClick} 
            closeMenu={handleMenuClose}
            openMenu={handleMenuOpen} 
            showMenu={toggleShowMenuClick} 
            setRegion={handleRegionClick} 
            region={regionSelected} 
            menuIsShowing={showDropdownMenu} />
          <HeaderBottomNav  metroSelected={metroSelected} regionSelected={regionSelected} previousRegionSelected={previousRegionSelected} />
        </Fragment>
      )}
    </Container>
  );
}

export default Header;
