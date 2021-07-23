import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CustomMenu from "../customMenu";
import "./regionsMenu.css";

const RegionsMenu = ({ regions, closeMenuClick, onRegionClick }) => {

  const handleRegionItemClick = (region) => {
    onRegionClick(region);
    closeMenuClick();
  }


  return (
    <Dropdown.Menu as={CustomMenu} className="region-dropdown-menu">
      <div className="regions-list">
        { regions.map((region, idx) => {
        return (
          <Dropdown.Item key={idx} href="/" label={region} onClick={() => handleRegionItemClick(region)} className="region-selection">
            <Dropdown.ItemText className="region-selection-container">
              <span className="region-title">{region}</span>
              <span className="region-restaurantstotal-box">
                { Math.floor(Math.random() * (1300 - 1) + 1) }
              </span>
            </Dropdown.ItemText>
          </Dropdown.Item>
        )
        })}
      </div>
      <div className="dropdown-menu-column-scrollbar">
        <div className="scrollbar-slider"></div>
      </div>
    </Dropdown.Menu> 
  )
}

export default RegionsMenu;