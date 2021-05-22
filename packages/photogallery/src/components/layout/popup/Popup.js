import React from 'react';
import { connect } from 'react-redux';
import { reportPhoto, closeReportPhoto } from '../../../redux/actions/restaurant';
import PropTypes from 'prop-types';
import './Popup.scss';

const Popup = ({ currentIndex, reportPhoto, closeReportPhoto, showPopup }) => {
  const reportBtnOptions = ['Unrelated to restaurant', 'Inappropriate content', "I don't like like this photo"];

  const handleReportPhotoClick = () => {
    reportPhoto(currentIndex);
    closeReportPhoto();
  };

  return (
    <div className={showPopup ? `report-photo-popup showPopup-${showPopup}` : 'report-photo-popup'}>
      <h4 className="report-photo-header">Report a photo problem</h4>

      {reportBtnOptions.map((option, idx) => (
        <button key={idx} className="popup-btn dark" placeholder={option} type="button" onClick={() => handleReportPhotoClick()}>
          {option}
        </button>
      ))}
      <button className="popup-btn light" onClick={() => closeReportPhoto()}>
        Cancel
      </button>
    </div>
  );
};

Popup.propTypes = {
  reportPhoto: PropTypes.func.isRequired,
  closeReportPhoto: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  currentIndex: state.restaurant.currentIndex
});

export default connect(mapStateToProps, {
  reportPhoto,
  closeReportPhoto
})(Popup);
