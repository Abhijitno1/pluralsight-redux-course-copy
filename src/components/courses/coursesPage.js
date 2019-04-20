import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage(evt) {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>                
                <button className="btn btn-primary" onClick={this.redirectToAddCoursePage}>Add Course</button>                
                <p></p>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {courses: state.courses};
}

export default connect(mapStateToProps)(CoursesPage);