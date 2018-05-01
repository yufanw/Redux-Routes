import * as TYPES from './actionTypes';

export function addPlace(placeName) {

    return {
        type: TYPES.ADD_PLACE,
        name: placeName
    }
}

export function deletePlace(placeName) {

    return {
        type: TYPES.DELETE_PLACE,
        name: placeName
    }
}

export function editPlace() {

    return {
        type: TYPES.EDIT_PLACE
    }
}

export function updatePlace() {

    return {
        type: TYPES.UPDATE_PLACE
    }
}