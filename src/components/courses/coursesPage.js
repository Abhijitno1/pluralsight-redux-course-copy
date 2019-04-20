import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ''
            }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    componentWillMount() {
        this.props.getCoursesList();
    }

    onTitleChange(event) {
        let course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onSaveClick(event) {
        this.props.createCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map((course, idx, ary) => <div key={course.id}>{course.title}</div>)}
                <h2>Add Course</h2>
                <input type="text" value={this.state.course.title} onChange={this.onTitleChange} />
                &nbsp; <button onClick={this.onSaveClick}>Save</button>                
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    getCoursesList: PropTypes.func.isRequired,
    createCourse: PropTypes.func.isRequired    
};

function mapStateToProps(state, ownProps) {
    return {courses: state.courses};
}

function mapDispatchToProps(dispatch) {
    return {
        getCoursesList: () => dispatch(courseActions.getCoursesList()),
        createCourse: (course) => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);