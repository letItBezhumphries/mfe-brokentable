import React, { useState, useEffect, Fragment } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import CustomToggle from "../locationDropdownMenu/customToggle";
import Location from "../../../../../assets/SVG/map-pin.svg";
import ChevronRight from "../../../../../assets/SVG/chevron-small-right.svg";
import ChevronDown from "../../../../../assets/SVG/chevron-small-down.svg";
import "./locationSelector.css";

const LocationSelector = ({ metro, region, setMetroMenu, closeMenu, openMenu, showMenu, setRegion, menuIsShowing }) => {
  const [metroSelected, setMetroSelected] = useState("");
  const [regionSelected, setRegionSelected] = useState("");
  
  useEffect(() => {
    if (metro !== undefined && metro.length > 0) {
      setMetroSelected(metro)
    }
  }, [metro]);

  useEffect(() => {
    if (region !== undefined && region.length > 0) {
      setRegionSelected(region)
    }
  }, [region]);

  return (
    <Dropdown.Toggle 
      as={CustomToggle} 
      metro={metro} 
      selectedRegion={region} 
      onMetroMenuClick={setMetroMenu} 
      closeMenuClick={closeMenu}
      openMenu={openMenu} 
      showMenuClick={showMenu} 
      setRegionSelected={setRegion} 
      menuShowing={menuIsShowing}
      id="dropdown-custom-components">
      <div className="mid-bar-location-breadcrumbs">
        <div className="mid-bar-breadcrumb">
          <Location style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,.12)"}} />
        </div>
          { metroSelected.length > 0 && regionSelected.length > 0 ? (
            <Fragment>
              <div className="mid-bar-breadcrumb">{ metroSelected }</div>
              <div className="mid-bar-breadcrumb">
                <ChevronRight style={{ height: "18px", width: "18px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
              <div className="mid-bar-breadcrumb">{ regionSelected }</div>
              <div className="mid-bar-breadcrumb">
                <ChevronDown style={{ height: "18px", width: "18px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
            </Fragment>
          ) : metroSelected.length > 0 ? (
            <Fragment>
              <div className="mid-bar-breadcrumb">
                { metroSelected }
              </div>
              <div className="mid-bar-breadcrumb">
                <ChevronDown style={{ height: "21px", width: "21px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
            </Fragment>
          ) : null }
      </div>
    </Dropdown.Toggle>
  );
}

export default LocationSelector;