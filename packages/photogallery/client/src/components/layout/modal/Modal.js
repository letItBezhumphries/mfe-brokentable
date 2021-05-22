import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PhotosScroller from '../../photosScroller/PhotosScroller';
import { closeModal } from '../../../redux/actions/restaurant';
import CloseIcon from '../../../assets/SVG/close.svg';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ viewModal, currentIndex, closeModal, photos, ...props }) => {
  useEffect(() => {
    if (viewModal) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, .9)';
    }
  }, [viewModal]);

  const handleClose = () => {
    closeModal();
    document.body.style.backgroundColor = '#fff';
  };

  return ReactDOM.createPortal(
    <div className={viewModal ? `modalShowing-${viewModal}` : 'modal-background'}>
      <div className="modal-scroller">
        <div className="modal-content-container">
          {viewModal && currentIndex >= 0 ? <PhotosScroller /> : null}
          <button className="modal-btn-close" type="button" onClick={() => handleClose()}>
            <CloseIcon className="modal-btn-close-icon" />
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

Modal.propTypes = {
  photos: PropTypes.array.isRequired,
  viewModal: PropTypes.bool.isRequired,
  currentIndex: PropTypes.number,
  closeModal: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  photos: state.restaurant.photos,
  viewModal: state.restaurant.viewModal,
  currentIndex: state.restaurant.currentIndex
});

export default connect(mapStateToProps, { closeModal })(Modal);
