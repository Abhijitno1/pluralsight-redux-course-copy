import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <h3>{this.props.id}</h3>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.params.id
    };
}

export default connect(mapStateToProps)(ManageCoursePage);