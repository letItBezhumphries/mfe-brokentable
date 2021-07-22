import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ChevronRight from "../../../../../../assets/SVG/chevron-right.svg";
import "./metroSelector.css";

const MetroSelector = ({ label, metro, eventkey, activeMetro, onClick }) => {
  const [className, setClassName] = useState("metrolist-selection");

  const onMetroClick = () => {
    onClick(metro);
  }

  useEffect(() => {
    if (activeMetro === label) {
      setClassName((prev) => (prev += " metrolist-active"));
    } else {
      setClassName("metrolist-selection");
    }
  }, [activeMetro, label]);
  
  return (
    <Dropdown.ItemText className={className} onClick={onMetroClick} eventkey={eventkey}>
      <Dropdown.ItemText className="selection-container">
        <span className="metro-title">{label}</span>
        <span className="metro-icon-box">
          <ChevronRight style={{ height: "20px", width: "20px", fill: "rgba(0,0,0,.6)" }} />
        </span>
      </Dropdown.ItemText>
    </Dropdown.ItemText>
  )
}

export default MetroSelector;