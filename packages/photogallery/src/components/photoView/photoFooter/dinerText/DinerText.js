import React from 'react';
import formatDate from '../../../utils/formatDate';
import PropTypes from 'prop-types';
import './DinerText.scss';

const DinerText = ({ date }) => {
  return (
    <div className="photo-diner-text">
      <div className="diner-image-box">
        <svg height="50" width="50">
          <circle cx="25" cy="25" fill="#56D7D9" r="25"></circle>
          <text dy=".3em" fill="#fff" fontFamily="Arial" fontSize="15px" textAnchor="middle" x="50%" y="50%">
            OT
          </text>
        </svg>
      </div>
      <div className="diner-text-box">
        <div>
          <strong>OpenTable Diner</strong>
        </div>
        <div className="photo-dined-on-date">Dined on {formatDate(date.slice(0, 10))}</div>
      </div>
    </div>
  );
};

DinerText.propTypes = {
  date: PropTypes.string.isRequired
};

export default DinerText;
