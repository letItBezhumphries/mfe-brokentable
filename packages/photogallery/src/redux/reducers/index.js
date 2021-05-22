import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import restaurantReducer from './restaurantReducer';

const rootReducer = combineReducers({
  error: errorReducer,
  restaurant: restaurantReducer
});

export default rootReducer;
