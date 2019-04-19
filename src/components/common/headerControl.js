import React from 'react';
import { Link, IndexLink} from 'react-router';

const HeaderControl = () => {
    return (
        <nav>
            <IndexLink to="/">Home</IndexLink>
            &nbsp;| <Link to="/courses">Courses</Link>
            &nbsp;| <Link to="/about">About</Link>
        </nav>
    );
};

export default HeaderControl;