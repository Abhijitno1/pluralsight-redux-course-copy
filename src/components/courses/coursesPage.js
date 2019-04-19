import React from 'react';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            course: {
                title: ''
            },
            courses: [
                {
                    id: "react-flux-building-applications",
                    title: "Building Applications in React and Flux"
                  },
                  {
                    id: "clean-code",
                    title: "Clean Code: Writing Code for Humans"
                  }
            ]
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
    }

    onTitleChange(event) {
        let course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onSaveClick(event) {
        let newCourses = [
            ...this.state.courses,
            Object.assign({id: this.state.courses.length+ 1}, this.state.course)
        ];
        this.setState({courses: newCourses});
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.state.courses.map((course, idx, ary) => <div key={course.id}>{course.title}</div>)}
                <h2>Add Course</h2>
                <input type="text" value={this.state.course.title} onChange={this.onTitleChange} />
                &nbsp; <button onClick={this.onSaveClick}>Save</button>                
            </div>
        );
    }
}

export default CoursesPage;