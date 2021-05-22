import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './Tabs.scss';

const Tabs = ({ onTabClick, children }) => {
  // const { children, onTabClick } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
    onTabClick(tab);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return null;
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.restaurant.loading
});

export default connect(mapStateToProps)(Tabs);
