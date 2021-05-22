import { SET_ERROR } from '../actions/types';

const initialState = {
  errorMessage: '',
  errorCode: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.payload.message,
        errorCode: action.payload.errorCode
      };
    default:
      return state;
  }
}
