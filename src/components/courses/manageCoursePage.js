import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CourseForm from './courseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course)
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, this.props.course)});
        }
    }

    updateCourseState(evt) {
        let fieldName = evt.target.name, fieldValue = evt.target.value;
        let courseCopy = Object.assign({}, this.props.course);
        courseCopy[fieldName] = fieldValue;
        return this.setState({course: courseCopy});
    }

    cancelEdit(evt) {
        event.preventDefault();
        this.context.router.push('/courses');
    }

    saveCourse(evt) {
        evt.preventDefault();
        alert('aya ga maya');
    }

    render() {
        return (
            <CourseForm course={this.state.course}
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onCancel={this.cancelEdit}
                onSave={this.saveCourse}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function findCourseById(courses, id) {
    let foundCourses = courses.filter(course => course.id == id);
    return foundCourses.length > 0 ? foundCourses[0] : null;
}

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    let courseId = ownProps.params.id;

    if (state.courses.length>0 && courseId)
        course = findCourseById(state.courses, courseId);

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors)
    };
}

export default connect(mapStateToProps)(ManageCoursePage);