import React, { useEffect, useState } from 'react';
import Radium from "radium";

const navlinkStyles = {
  marginRight: "20px",
  textAlign: "center",
  justifyContent: "center", 
  alignSelf: "stretch",
  display: "flex", 
  flexDirection: "column",
  borderBottom: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  ":hover": {
    borderBottom: "1.15px solid red",
    color: "red",
  },
}

const navlinkActiveStyles = {
  marginRight: "20px",
  textAlign: "center",
  justifyContent: "center", 
  alignSelf: "stretch",
  display: "flex", 
  flexDirection: "column",
  color: "red",
  textDecoration: "none",
  borderBottom: "1.15px solid",
  borderBottomColor: "red",
}

const Tab = ({ label, activeTab, onClick, href }) => {
  const [tabLinkStyles, setTabLinkStyles] = useState(navlinkStyles);

  const onTabClick = () => {
    onClick(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setTabLinkStyles(navlinkActiveStyles)
    } else {
      setTabLinkStyles(navlinkStyles)
    }
  }, [activeTab, label]);

  return (
    <>
      <a className="nav-link" href={href} style={tabLinkStyles} onClick={onTabClick}>
        {label}
      </a>
    </>
  );
};

export default Radium(Tab);
