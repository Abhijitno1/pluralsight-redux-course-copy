import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as CourseActions from '../../actions/courseActions';

const CourseListRow = ({course, deleteCourse}) => {
    function deleteCourseLocal(e) {
        deleteCourse(course.id);
    }
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td>
                <a href="#" onClick={deleteCourseLocal}>
                    <span className="glyphicon glyphicon-remove" title="Remove course"></span>
                </a>
            </td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    deleteCourse: PropTypes.func
};

export default CourseListRow;
