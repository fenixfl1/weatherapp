import React from 'react';
import PropTypes from 'prop-types';


const Location = ({ city }) => {
    return (
        <div className="card-header bg-white">
            <h3 className="text-center">{city}</h3>
        </div>
    )
};

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;