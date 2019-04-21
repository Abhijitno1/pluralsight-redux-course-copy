import React, { PropTypes } from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './loadingDots';

const HeaderControl = ({isLoading}) => {
    return (
        <nav>
            <IndexLink to="">Home</IndexLink>
            &nbsp;| <Link to="courses">Courses</Link>
            &nbsp;| <Link to="about">About</Link>
            {isLoading && <LoadingDots interval={300} dots={5} />}
        </nav>
    );
};

HeaderControl.propTypes = {
    isLoading: PropTypes.bool
};

export default HeaderControl;