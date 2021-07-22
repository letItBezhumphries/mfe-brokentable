import React, { useEffect, useState } from 'react';
import "./navTab.css";

const NavTab = ({ label, eventkey, activeTab, onClick, href }) => {
  const [className, setClassName] = useState("navtab-link");

  const onTabClick = () => {
    onClick(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => (prev += " navtab-active"))
    } else {
      setClassName("navtab-link")
    }
  }, [activeTab, label]);

  return (
    <>
      <a className={className} href={href} onClick={onTabClick} eventkey={eventkey}>
        {label}
      </a>
    </>
  );
};

export default NavTab;
