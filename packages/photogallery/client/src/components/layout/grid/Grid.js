import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PhotoColumn from './photoColumn/PhotoColumn';
import PropTypes from 'prop-types';
import './Grid.scss';

const Grid = ({ galleryPhotos }) => {
  let galleryRow;
  const photogalleryClassName = `photogallery-grid grid-photos-${galleryPhotos.length}`;
  const classNames = ['left-box', 'center-box', 'right-box'];

  if (galleryPhotos.length >= 8) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 2)} className={classNames[0]} photoSize="152x152" columns={3} />
        <PhotoColumn photos={galleryPhotos.slice(2, 3)} className={classNames[1]} photoSize="303x303" columns={3} />
        <PhotoColumn photos={galleryPhotos.slice(3)} className={classNames[2]} photoSize="101x101" columns={3} />
      </div>
    );
  }

  if (galleryPhotos.length === 7) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="276x276" columns={2} />
        <PhotoColumn photos={galleryPhotos.slice(1)} className={classNames[1]} photoSize="109x109" columns={2} />
      </div>
    );
  }

  if (galleryPhotos.length === 6) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="276x276" columns={2} />
        <PhotoColumn photos={galleryPhotos.slice(1)} className={classNames[1]} photoSize="164x164" columns={2} />
      </div>
    );
  }

  if (galleryPhotos.length === 5) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="303x303" columns={2} />
        <PhotoColumn photos={galleryPhotos.slice(1)} className={classNames[1]} photoSize="151x151" columns={2} />
      </div>
    );
  }

  if (galleryPhotos.length === 4) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="151x151" columns={4} />
        <PhotoColumn photos={galleryPhotos.slice(1, 2)} className={classNames[1]} photoSize="151x151" columns={4} />
        <PhotoColumn photos={galleryPhotos.slice(2, 3)} className={classNames[1]} photoSize="151x151" columns={4} />
        <PhotoColumn photos={galleryPhotos.slice(3, 4)} className={classNames[2]} photoSize="151x151" columns={4} />
      </div>
    );
  }

  if (galleryPhotos.length === 3) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="202x202" columns={3} />
        <PhotoColumn photos={galleryPhotos.slice(1, 2)} className={classNames[1]} photoSize="202x202" columns={3} />
        <PhotoColumn photos={galleryPhotos.slice(2, 3)} className={classNames[2]} photoSize="202x202" columns={3} />
      </div>
    );
  }
  if (galleryPhotos.length === 2) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[0]} photoSize="303x303" columns={2} />
        <PhotoColumn photos={galleryPhotos.slice(1)} className={classNames[2]} photoSize="303x303" columns={2} />
      </div>
    );
  }
  if (galleryPhotos.length === 1) {
    galleryRow = (
      <div className={photogalleryClassName}>
        <PhotoColumn photos={galleryPhotos.slice(0, 1)} className={classNames[1]} photoSize="604x303" columns={1} />
      </div>
    );
  }
  return galleryPhotos.length && <Fragment>{galleryRow}</Fragment>;
};

Grid.propTypes = {
  galleryPhotos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  galleryPhotos: state.restaurant.galleryPhotos
});

export default connect(mapStateToProps)(Grid);
