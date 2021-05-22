import React from 'react';
import { connect } from 'react-redux';
import FlagIcon from '../../../assets/SVG/flag.svg';
import DinerText from './dinerText/DinerText';
import { showReportPhoto } from '../../../redux/actions/restaurant';
import PropTypes from 'prop-types';
import './PhotoFooter.scss';

const PhotoFooter = ({ photo, showReportPhoto }) => {
  return (
    <div className="photo-footer">
      {photo.dinedOnDate && photo.username ? <DinerText username={photo.username} date={photo.dinedOnDate} /> : null}
      <button className="report-photo-btn" onClick={() => showReportPhoto()}>
        <FlagIcon className="flag-photo-icon" />
      </button>
    </div>
  );
};

PhotoFooter.propTypes = {
  photo: PropTypes.object,
  showReportPhoto: PropTypes.func.isRequired
};

export default connect(null, { showReportPhoto })(PhotoFooter);
