import React, { PropTypes } from 'react';
import HeaderControl from './common/headerControl';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <HeaderControl />
                { this.props.children }
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;