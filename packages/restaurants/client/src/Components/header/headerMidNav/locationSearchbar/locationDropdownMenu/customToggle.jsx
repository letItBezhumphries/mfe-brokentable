import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import LocationDropdownMenu from "./locationDropdownMenu";

const CustomToggle = React.forwardRef(({ children, onClick, metro, onMetroMenuClick, selectedRegion, closeMenuClick, openMenu, showMenuClick, menuShowing, setRegionSelected }, ref) => (
  <OverlayTrigger 
    trigger="click" 
    placement="bottom"
    onToggle={showMenuClick}
    onHide={closeMenuClick}
    show={menuShowing} 
    overlay={
      <Popover id="dropdown-popover">
        <Popover.Content>
          <LocationDropdownMenu 
            selectedMetro={metro} 
            metroClick={onMetroMenuClick} 
            region={selectedRegion} 
            closeMenu={closeMenuClick}
            openMenu={openMenu} 
            showMenuClick={showMenuClick} 
            regionClick={setRegionSelected} 
            menuIsShowing={menuShowing}  
            />
        </Popover.Content>
      </Popover>}>
    <a 
      href=""
      ref={ref}
      className="mid-bar-breadcrumb-link"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
        {children}
      </a>
  </OverlayTrigger>
));

export default CustomToggle;