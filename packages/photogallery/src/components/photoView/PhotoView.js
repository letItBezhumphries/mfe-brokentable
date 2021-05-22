import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Popup from '../layout/popup/Popup';
import PhotoFooter from './photoFooter/PhotoFooter';
import './PhotoView.scss';

const PhotoView = ({ currentIndex, photos, viewReportPhoto }) => {
  const scrollerRow = photos.map((photo, idx) => (
    <div className="scroller-column" key={idx}>
      <img src={photo.imgSrc} className="current-photo" />
      <PhotoFooter photo={photo} />
    </div>
  ));

  return (
    <div className="scroller-wrapper">
      <div className="scroller-row">{currentIndex >= 0 && photos.length ? scrollerRow[currentIndex] : null}</div>
      {viewReportPhoto ? <Popup showPopup={true} /> : null}
    </div>
  );
};

PhotoView.propTypes = {
  photos: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  viewReportPhoto: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  currentIndex: state.restaurant.currentIndex,
  viewReportPhoto: state.restaurant.viewReportPhoto
});

export default connect(mapStateToProps)(PhotoView);
