import {combineReducers} from 'redux';
import peopleReducer from "./peopleReducer";
import placesReducer from "./placesReducer";

const rootReducer = combineReducers({
    people: peopleReducer,
    places: placesReducer,
});

export default rootReducer;