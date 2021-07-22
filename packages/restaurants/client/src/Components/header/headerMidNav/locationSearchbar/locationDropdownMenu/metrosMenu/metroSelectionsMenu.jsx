import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import MetroSelector from "./metroSelector";
import "./metroSelectionsMenu.css";

const MetroSelectionsMenu = ({ setRegionsMenu, onMetroClick, menuShowing, region, openMenu, children }) => {
  const [activeMetro, setActiveMetro] = useState(children[0].props.label);

  const onMetroSelectionClick = (metro) => {
    setActiveMetro(metro.metroName);
    onMetroClick(metro);
    setRegionsMenu(metro);
  };

  return (
    <Col className="metro-list-container">
      <div className="metros-list">
        {children.map((child, idx) => {
          const { metro, label, eventkey } = child.props;
          return <MetroSelector 
                    activeMetro={activeMetro} 
                    key={idx} 
                    eventkey={eventkey} 
                    label={label} 
                    metro={metro} 
                    onClick={onMetroSelectionClick}  />;
        })}
        <div className="metro-regions">
          {children.map((child) => {
            if (child.props.label !== activeMetro) return undefined;
            return null;
          })}
        </div>
      </div>
      <div className="dropdown-menu-column-scrollbar">
        <div className="scrollbar-slider"></div>
      </div>
    </Col>
  );
};

export default MetroSelectionsMenu;
