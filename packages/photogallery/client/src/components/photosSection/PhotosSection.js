import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRestaurantPhotos, setPhotosFilter } from '../../redux/actions/restaurant';
import Spinner from '../layout/spinner/Spinner';
import Grid from '../layout/grid/Grid';
import Tabs from '../layout/tabs/Tabs';
import Modal from '../layout/modal/Modal';
import getTabFilterOptions from '../utils/getTabFilterOptions';
import './PhotosSection.scss';

const PhotosSection = ({ getRestaurantPhotos, setPhotosFilter, name, loading, photos, filterType, viewModal, currentIndex }) => {
  const { id } = useParams();
  const [filterLabels, setFilterLabels] = useState();

  useEffect(() => {
    getRestaurantPhotos(id);
  }, [id, getRestaurantPhotos]);

  useEffect(() => {
    if (photos.length) {
      setFilterLabels(getTabFilterOptions(photos));
    }
  }, [photos]);

  const handleFilterClick = (filterType) => {
    setPhotosFilter(filterType);
  };

  return loading && !name
    ? (
    <Spinner />
      )
    : (
    <Fragment>
      <div className="content">
        <div className="photo-gallery">
          <div className="photo-gallery-header">
            <h2 className="photo-gallery-header__text"> {!loading && photos.length ? photos.length : null} Photos</h2>
          </div>
          {filterLabels && (
            <Tabs onTabClick={handleFilterClick}>
              <div label="All">All</div>
              <div label="Interior">Interior</div>
              <div label="Exterior">Exterior</div>
              <div label="Food">Food</div>
              <div label="Drink">Drink</div>
            </Tabs>
          )}

          {!loading && photos.length ? <Grid /> : null}
        </div>
      </div>

      {viewModal ? <Modal /> : null}
    </Fragment>
      );
};

PhotosSection.propTypes = {
  setPhotosFilter: PropTypes.func.isRequired,
  getRestaurantPhotos: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  photos: PropTypes.array.isRequired,
  filterType: PropTypes.string.isRequired,
  viewModal: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number
};

const mapStateToProps = (state) => ({
  name: state.restaurant.name,
  loading: state.restaurant.loading,
  photos: state.restaurant.photos,
  filterType: state.restaurant.filterType,
  viewModal: state.restaurant.viewModal,
  currentIndex: state.restaurant.currentIndex
});

export default connect(mapStateToProps, {
  getRestaurantPhotos,
  setPhotosFilter
})(PhotosSection);
