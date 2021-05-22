import { GET_RESTAURANT_PHOTOS, SET_FILTER, CLEAR_FILTER, SHOW_MODAL, CLOSE_MODAL, UPDATE_INDEX, REPORT_PROBLEM_PHOTO, SHOW_REPORT_PHOTO, CLOSE_REPORT_PHOTO } from '../actions/types';

const initialState = {
  loading: true,
  restaurantId: '',
  name: '',
  heroImage: '',
  photos: [],
  filterType: '',
  galleryPhotos: [],
  viewModal: false,
  currentIndex: null,
  viewReportPhoto: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RESTAURANT_PHOTOS:
      return {
        ...state,
        restaurantId: payload.restaurantId,
        name: payload.name,
        heroImage: payload.heroImage,
        photos: payload.photos,
        loading: false,
        filterType: 'All',
        galleryPhotos: payload.photos.slice(0, 9)
      };
    case SET_FILTER:
      return {
        ...state,
        loading: false,
        filterType: payload.filterType,
        galleryPhotos: state.photos.filter((photo) => photo.subjectType === payload.filterType).slice(0, 9)
      };
    case CLEAR_FILTER:
      return {
        ...state,
        loading: false,
        filterType: 'All',
        galleryPhotos: state.photos.slice(0, 9)
      };
    case SHOW_MODAL:
      return {
        ...state,
        loading: false,
        viewModal: true,
        currentIndex: payload - 1
      };
    case CLOSE_MODAL:
      return {
        ...state,
        loading: false,
        viewModal: false,
        currentIndex: null
      };
    case SHOW_REPORT_PHOTO:
      return {
        ...state,
        loading: false,
        viewReportPhoto: true
      };
    case CLOSE_REPORT_PHOTO:
      return {
        ...state,
        loading: false,
        viewReportPhoto: false
      };
    case UPDATE_INDEX:
      return {
        ...state,
        loading: false,
        currentIndex: payload
      };
    case REPORT_PROBLEM_PHOTO:
      return {
        ...state,
        photos: state.photos.map((photo, idx) => (idx === payload ? { ...photo, isFlagged: true } : photo)),
        loading: false
      };
    default:
      return state;
  }
}
