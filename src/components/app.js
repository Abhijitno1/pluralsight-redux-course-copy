import React, { PropTypes } from 'react';
import HeaderControl from './common/headerControl';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderControl isLoading={this.props.isLoading}/>
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    isLoading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    return {
        isLoading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);
