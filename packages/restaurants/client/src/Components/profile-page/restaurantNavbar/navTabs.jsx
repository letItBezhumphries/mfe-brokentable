import React, { useState } from 'react';
import NavTab from './navTab';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const navbarStyle = { 
  position: "sticky",
  top: "40px",
  zIndex: "1003",
  height: "50px", 
  backgroundColor: "#fff",
  paddingBottom: "0px", 
  paddingTop: "0px",
};

const navStyle = { 
  height: "100%", 
  width: "100%", 
  display: "flex",
  justifyContent: "flex-start", 
  textAlign: "left", 
  lineHeight: "20px", 
  fontSize: "12px", 
  fontWeight: "500",
  borderBottom: "1.1111px solid rgb(216, 217, 219)",
};

const NavTabs = ({ onTabClick, children }) => {
  // const { children, onTabClick } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    console.log('this is the activeTab:', tab);
    setActiveTab(tab);
  };

  return (
    <Navbar style={navbarStyle}>
      <Nav style={navStyle} id="restaurant-page-nav">
        {children.map((child, idx) => {
          const { label, href, eventkey } = child.props;
          return <NavTab key={idx} activeTab={activeTab} eventkey={eventkey} label={label} href={href} onClick={onClickTabItem} />;
        })}
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return null;
          })}
        </div>
      </Nav>
    </Navbar>   
  );
};

export default NavTabs;
