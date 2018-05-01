import React from 'react';
import AddPerson from "../components/AddPerson";
import * as actions from "../actions/personActions";

class AddPersonContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <AddPerson handleAddPerson={this.handleAddNewPerson}/>
        );
    };

    handleAddNewPerson = (firstName, lastName, occupation) => {
        let action = actions.addPerson(firstName, lastName, occupation);
        this.props.store.dispatch(action);
    };
}

export default AddPersonContainer;