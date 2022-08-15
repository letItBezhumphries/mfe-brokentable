import axios from 'axios';
import { SET_ERROR, GET_RESTAURANT_PHOTOS, SET_FILTER, CLEAR_FILTER, SHOW_MODAL, CLOSE_MODAL, UPDATE_INDEX, SHOW_REPORT_PHOTO, CLOSE_REPORT_PHOTO, REPORT_PROBLEM_PHOTO } from './types';
import { getRestaurantURL } from '../service/endpoints';

// get photos for a restaurant
export const getRestaurantPhotos = (id) => async (dispatch) => {
  try {
    const apiURL = await getRestaurantURL(id);
    const res = await axios.get(apiURL, { crossOrigin: true });

    const payload = {
      restaurantId: res.data.restaurantId,
      name: res.data.restaurantName,
      heroImage: res.data.heroImgSrc,
      photos: res.data.photogallery
    };

    dispatch({
      type: GET_RESTAURANT_PHOTOS,
      payload: payload
    });
  } catch (error) {
    if (error.response) {
      const payload = {
        errorMessage: error.response.data.message || error.response.data.status_message,
        errorCode: error.response.status
      };
      dispatch({ type: SET_ERROR, payload: payload });
    }
  }
};

// get filtered list of photos for current restaurant page
export const setPhotosFilter = (subjectType) => (dispatch) => {
  try {
    if (subjectType === 'All') {
      dispatch({ type: CLEAR_FILTER });
    } else {
      dispatch({ type: SET_FILTER, payload: { filterType: subjectType } });
    }
  } catch (err) {
    if (err) {
      dispatch({ type: SET_ERROR });
    }
  }
};

// switch the showModal property to true and set the currentIndex for the Modal to display clicked photo
export const showModal = (index) => (dispatch) => {
  try {
    dispatch({ type: SHOW_MODAL, payload: index });
  } catch (err) {
    if (err) {
      dispatch({ type: SET_ERROR });
    }
  }
};

// switch the showModal property to false
export const closeModal = () => (dispatch) => {
  try {
    dispatch({ type: CLOSE_MODAL });
  } catch (err) {
    dispatch({ type: SET_ERROR });
  }
};

// update the currentIndex for the gallery photos scroller
export const updateCurrentIndex = (index) => (dispatch) => {
  try {
    dispatch({ type: UPDATE_INDEX, payload: index });
  } catch (err) {
    dispatch({ type: SET_ERROR });
  }
};

// update UI to show the report photo popup
export const showReportPhoto = () => (dispatch) => {
  try {
    dispatch({ type: SHOW_REPORT_PHOTO });
  } catch (err) {
    dispatch({ type: SET_ERROR });
  }
};

// update UI to close the report photo popup
export const closeReportPhoto = () => (dispatch) => {
  try {
    dispatch({ type: CLOSE_REPORT_PHOTO });
  } catch (err) {
    dispatch({ type: SET_ERROR });
  }
};

// update the photo to show it has been reported
export const reportPhoto = (index) => (dispatch) => {
  try {
    dispatch({ type: REPORT_PROBLEM_PHOTO, payload: index });
  } catch (err) {
    dispatch({ type: SET_ERROR });
  }
};
