import * as TYPES from '../actions/actionTypes';

function placesReducer(state = [], action) {

    switch (action.type) {

        case TYPES.DELETE_PLACE:

            return state.filter(place => place.name !== action.name);

        case TYPES.ADD_PLACE:

            const place = { name: action.name };

            return state.concat(place);

        default:
            return state;
    }

}

export default placesReducer;