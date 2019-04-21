import React, {PropTypes} from 'react';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

const CourseForm = ({course, allAuthors, onChange, onSave, onCancel}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput name="title" label="Title" value={course.title} onChange={onChange} />
            <SelectInput name="authorId" label="Author" value={course.authorId}
                defaultOption="Select Author" options={allAuthors} onChange={onChange} />
            <TextInput name="category" label="Category" value={course.category} onChange={onChange} />
            <TextInput name="length" label="Length" value={course.length} onChange={onChange} />
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel} style={{marginLeft: "20px"}}>Cancel</button>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default CourseForm;