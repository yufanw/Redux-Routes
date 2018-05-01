import React from 'react';
import PropTypes from 'prop-types';
import PeopleContainer from './containers/PeopleContainer';
import PlacesContainer from './containers/PlacesContainer';
import Header from './components/Header';
import Home from './components/Home';
import {Route} from 'react-router-dom';


const App = (props) => {

    return (
        <div>
            <div align={'center'}>

                <Header/>
                <Route path={'/'} component={Home} exact={true}/>
                <Route path={'/people'} render={() => {
                    return <PeopleContainer store={props.store}/>
                }}/>
                <Route path={'/places'} render={() => {
                    return <PlacesContainer store={props.store}/>
                }}/>

            </div>
        </div>
    );
}


App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;




