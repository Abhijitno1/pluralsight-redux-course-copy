import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import CourseForm from './courseForm';
import { authorsFormattedForDropdown } from '../../selectors/selectors';
import * as CourseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {},
            isSaving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course: Object.assign({}, this.props.course)});
        }
    }

    updateCourseState(evt) {        
        let fieldName = evt.target.name, fieldValue = evt.target.value;
        let courseCopy = Object.assign({}, this.state.course);
        courseCopy[fieldName] = fieldValue;
        return this.setState({course: courseCopy});
    }

    cancelEdit(evt) {
        event.preventDefault();
        this.context.router.push('/courses');
    }

    isCourseFormValid() {
        let isValid = true, errors ={};

        if (this.state.course.title.length < 5) {
            isValid = false;
            errors.title = 'Title is mandatory and must be at least 5 characters long';
        }
        if (!this.state.course.authorId) {
            isValid = false;
            errors.authorId = 'Author is mandatory';
        }

        if (isValid === false) this.setState({errors});
        return isValid;
    }

    saveCourse(evt) {        
        evt.preventDefault();
        if (!this.isCourseFormValid()) return;

        this.setState({isSaving: true});
        this.props.saveCourse(this.state.course)
        .then(()=> {
            this.setState({isSaving: false});
            toastr.success('Course saved successfully');
            this.context.router.push('/courses');
        })
        .catch((error)=> {
            this.setState({isSaving: false});
            toastr.error(error);
        });
    }

    render() {
        return (
            <CourseForm course={this.state.course}
                allAuthors={this.props.authors}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onCancel={this.cancelEdit}
                onSave={this.saveCourse}
                isSaving={this.state.isSaving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    saveCourse: PropTypes.func.isRequired
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

function mapDispatchToProps(dispatch) {
    return {
        saveCourse: (course) => dispatch(CourseActions.saveCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);