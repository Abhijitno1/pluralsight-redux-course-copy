import React from 'react';
import HeaderControl from './common/headerControl';
import HomePage from './home/homePage';
import AboutPage from './about/aboutPage';
import CoursesPage from './courses/coursesPage';

class App extends React.Component {
    render() {
        let CurrentChild;
        switch (this.props.route) {
            case 'home':
                CurrentChild = HomePage;
                break;
            case 'courses':
                CurrentChild = CoursesPage;
                break;
            case 'about':
                CurrentChild = AboutPage;
                break;
            default:
                CurrentChild = HomePage;
        }

        return (
            <div className="container-fluid">
                <HeaderControl />
                <CurrentChild />
            </div>
        );
    }
}

export default App;