import React, { PropTypes } from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './loadingDots';

const HeaderControl = ({isLoading}) => {
    return (
        <nav>
            <IndexLink to="" activeClassName="active">Home</IndexLink>
            &nbsp;| <Link to="courses" activeClassName="active">Courses</Link>
            &nbsp;| <Link to="about" activeClassName="active">About</Link>
            &nbsp;| <Link to="xml2html" activeClassName="active">XML To HTML</Link>
            {isLoading && <LoadingDots interval={300} dots={5} />}
        </nav>
    );
};

HeaderControl.propTypes = {
    isLoading: PropTypes.bool
};

export default HeaderControl;