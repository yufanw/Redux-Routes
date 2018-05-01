import React from 'react';
import AddPlace from "../components/AddPlace";
import * as actions from '../actions/placeActions'

class AddPlaceContainer extends React.Component {

    constructor(props) {
        super(props);
    };

    render = () => {

        return (
            <AddPlace handleAddPlace={this.handleAddPlace}/>
        );
    };

    handleAddPlace = (placeName) => {
        const action = actions.addPlace(placeName);
        this.props.store.dispatch(action);
    };
}

export default AddPlaceContainer;