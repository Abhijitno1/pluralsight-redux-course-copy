import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import toastr from 'toastr';
import * as courseActions from '../../actions/courseActions';
import CourseList from './courseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.removeCourse = this.removeCourse.bind(this);
    }

    redirectToAddCoursePage(evt) {
        browserHistory.push('/course');
    }

    removeCourse(courseId) {
        this.props.deleteCourse(courseId).then(()=>
            toastr.success('Course deleted successfully')
        );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>                
                <button className="btn btn-primary" onClick={this.redirectToAddCoursePage}>Add Course</button>                
                <p></p>
                <CourseList courses={this.props.courses} deleteCourse={this.removeCourse} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {courses: state.courses};
}

function mapDispatchToProps(dispatch) {
    return {
        deleteCourse: (courseId) => dispatch(courseActions.deleteCourse(courseId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);