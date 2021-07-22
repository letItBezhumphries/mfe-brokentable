import React from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import LocationSelector from "./locationSelector/locationSelector";
import "./locationSearchbar.css";

const LocationSearchbar = ({ metroSelected, setMetroMenu, closeDropdown, openMenu, showDropdown, setRegionSelected, regionSelected, menuShowing }) => {

  return (
    <div className="location-searchbar">
      <Dropdown className="location-dropdown-container">
        <LocationSelector 
          metro={metroSelected} 
          setMetroMenu={setMetroMenu} 
          closeMenu={closeDropdown} 
          showMenu={showDropdown} 
          openMenu={openMenu}
          setRegion={setRegionSelected} 
          region={regionSelected} 
          menuIsShowing={menuShowing}  />
      </Dropdown>
    </div> 
  );
}

export default LocationSearchbar;