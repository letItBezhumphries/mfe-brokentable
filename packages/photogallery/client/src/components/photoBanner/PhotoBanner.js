import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getRestaurantPhotos } from '../../redux/actions/restaurant';
import Spinner from '../layout/spinner/Spinner';
import BookmarkIcon from '../../assets/SVG/bookmark.svg';
import BookmarkOutlineIcon from '../../assets/SVG/bookmark_outline.svg';
import './PhotoBanner.scss';

const PhotoBanner = ({ heroImage, loading, getRestaurantPhotos }) => {
  const [buttonText, setButtonText] = useState('Save this restaurant');
  const [buttonIconClassName, setButtonIconClassName] = useState('btn-icon');
  const { id } = useParams();

  useEffect(() => {
    getRestaurantPhotos(id);
  }, [id, getRestaurantPhotos]);

  const handleRestaurantSaveClick = (className) => {
    if (className === 'btn-icon-saved') {
      setButtonIconClassName('btn-icon');
      setButtonText('Save this restaurant');
    } else if (className === 'btn-icon') {
      setButtonIconClassName('btn-icon-saved');
      setButtonText('Restaurant saved!');
    }
  };

  console.log('photos:', heroImage, 'loading:', loading);
  return loading && !heroImage
    ? (
    <Spinner />
      )
    : (
    <Fragment>
      <div className="banner-container">
        <div className="banner-background img-fluid">
          <img src={heroImage} />
        </div>
        <div className="banner-btn-box" onClick={() => handleRestaurantSaveClick(buttonIconClassName)}>
          <button className="save-favorite-btn">
            <span>
              <div className="btn-inner">
                {buttonIconClassName === 'btn-icon' ? <BookmarkOutlineIcon className={buttonIconClassName} /> : <BookmarkIcon className={buttonIconClassName} />}
                <div className="btn-text">{buttonText}</div>
              </div>
            </span>
          </button>
        </div>
      </div>
    </Fragment>
      );
};

PhotoBanner.propTypes = {
  heroImage: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getRestaurantPhotos: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  heroImage: state.restaurant.heroImage,
  loading: state.restaurant.loading
});

export default connect(mapStateToProps, {
  getRestaurantPhotos
})(PhotoBanner);
