import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhotoView from '../photoView/PhotoView';
import LeftArrowIcon from '../../assets/SVG/chevron-left.svg';
import RightArrowIcon from '../../assets/SVG/chevron-right.svg';
import { updateCurrentIndex } from '../../redux/actions/restaurant';
import './PhotosScroller.scss';

const PhotosScroller = ({ currentIndex, photos, updateCurrentIndex }) => {
  const nextSlide = (idx) => {
    const lastIndex = photos.length - 1;
    if (idx === lastIndex) {
      updateCurrentIndex(0);
    } else if (idx < photos.length - 1) {
      updateCurrentIndex((idx += 1));
    }
  };

  const prevSlide = (idx) => {
    const lastIndex = photos.length - 1;
    if (idx === 0) {
      updateCurrentIndex(lastIndex);
    } else if (idx <= lastIndex) {
      updateCurrentIndex((idx -= 1));
    }
  };

  return (
    <div className="gallery-scroller">
      <button className="arrow-btn left" onClick={() => prevSlide(currentIndex)}>
        <LeftArrowIcon className="arrow-btn-icon" />
      </button>
      <div className="photo-scroller-container">{currentIndex >= 0 ? <PhotoView /> : null}</div>
      <button className="arrow-btn right" onClick={() => nextSlide(currentIndex)}>
        <RightArrowIcon className="arrow-btn-icon" />
      </button>
    </div>
  );
};

PhotosScroller.propTypes = {
  photos: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  updateCurrentIndex: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  currentIndex: state.restaurant.currentIndex
});

export default connect(mapStateToProps, { updateCurrentIndex })(PhotosScroller);
