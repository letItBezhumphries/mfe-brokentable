import React from 'react';
import { connect } from 'react-redux';
import PhotoBox from '../photoBox/PhotoBox';
import PropTypes from 'prop-types';
import './PhotoColumn.scss';

const PhotoColumn = ({ className, columns, photos, loading, galleryPhotos, photoSize }) => {
  let columnContent;
  let columnClassName;
  const rightBoxCtrl = [
    ['right-photobox--topLeft', 'right-photobox--topRight', 'right-photobox--midRow', 'right-photobox--botLeft', 'right-photobox--botRight'],
    ['right-photobox--top', 'right-photobox--top', 'right-photobox--middle', 'right-photobox--middle', 'right-photobox--bottom', 'right-photobox--bottom']
  ];
  const centerBoxCtrl = [
    ['center-photobox--top', 'center-photobox--top', 'center-photobox--bottom', 'center-photobox--bottom'],
    ['center-photobox--topLeft', 'center-photobox--topRight', 'center-photobox--botLeft', 'center-photobox--botMid', 'center-photobox--botRight'],
    ['center-photobox--top', 'center-photobox--top', 'center-photobox--top', 'center-photobox--bottom', 'center-photobox--bottom', 'center-photobox--bottom']
  ];
  const rightBoxSizes = ['104x104', '104x104', '204x140', '104x104', '104x104'];
  const leftBoxCtrl = ['left-photobox--top', 'left-photobox--bottom'];

  // console.log("PhotoColumn className:", className);

  if (className === 'left-box') {
    if (photos.length < 2) {
      columnClassName = `${className} ${className}-columns-${columns}`;
      columnContent = <PhotoBox photo={photos[0]} className="left-photobox--photo" photoSize={photoSize} columns={columns} />;
    } else {
      columnClassName = `left-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={leftBoxCtrl[idx]} photoSize={photoSize} columns={columns} />
          ))}
        </>
      );
    }
  }

  if (className === 'center-box') {
    if (photos.length === 1) {
      columnClassName = `${className} ${className}-columns-${columns}-photos-${galleryPhotos.length}`;
      columnContent = <PhotoBox photo={photos[0]} className="center-photobox--photo" photoSize={photoSize} columns={columns} />;
    }

    if (photos.length === 4) {
      columnClassName = `center-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={centerBoxCtrl[0][idx]} photoSize={photoSize} columns={columns} />
          ))}
        </>
      );
    }

    if (photos.length === 5) {
      columnClassName = `center-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={centerBoxCtrl[1][idx]} photoSize={photoSize} columns={columns} />
          ))}
        </>
      );
    }

    if (photos.length === 6) {
      columnClassName = `center-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={centerBoxCtrl[2][idx]} photoSize={photoSize} columns={columns} />
          ))}
        </>
      );
    }
  }

  if (className === 'right-box') {
    if (photos.length === 1) {
      columnClassName = `${className} ${className}-columns-${columns}`;
      columnContent = <PhotoBox photo={photos[0]} className="right-photobox--photo" photoSize={photoSize} columns={columns} />;
    }

    if (photos.length === 5) {
      columnClassName = `right-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={rightBoxCtrl[0][idx]} photoSize={rightBoxSizes[idx]} columns={columns} />
          ))}
        </>
      );
    }
    if (photos.length === 6) {
      columnClassName = `right-box-grid-photos-${photos.length}`;
      columnContent = (
        <>
          {photos.map((photo, idx) => (
            <PhotoBox key={idx} photo={photo} className={rightBoxCtrl[1][idx]} photoSize={photoSize} columns={columns} />
          ))}
        </>
      );
    }
  }

  return <div className={columnClassName}>{!loading && galleryPhotos.length ? columnContent : null}</div>;
};

PhotoColumn.propTypes = {
  className: PropTypes.string.isRequired,
  columns: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  galleryPhotos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  photoSize: PropTypes.string
};

const mapStateToProps = (state) => ({
  loading: state.restaurant.loading,
  galleryPhotos: state.restaurant.galleryPhotos
});

export default connect(mapStateToProps)(PhotoColumn);
