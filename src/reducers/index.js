import { combineReducers } from 'redux';
import peopleReducer from "./peopleReducer";
import placesReducer from "./placesReducer";
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  people: peopleReducer,
  places: placesReducer,
  router: routerReducer
});

export default rootReducer;