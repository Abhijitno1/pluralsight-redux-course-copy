import React, { PropTypes } from 'react';
import CourseListRow from './courseListRow';

const CourseList = ({courses, deleteCourse}) => {
    return (
        <table className="table">
            <thead>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
                <th>&nbsp;</th>
            </thead>
            <tbody>
                {courses.map(course => <CourseListRow key={course.id} course={course} deleteCourse={deleteCourse} /> )}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func
};

export default CourseList;
