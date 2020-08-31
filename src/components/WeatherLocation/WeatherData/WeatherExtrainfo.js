import React from 'react';
import PropTypes from 'prop-types';
import './style.css'; 

const WeatherExtrainfo = ({ humidity, wind }) => {

    return(
        <div className="col-md-6 align-items-baseline d-flex justify-content-end">
            <div>
                <p className="extrainfo-text my-0">{`Humedad ${humidity}%`}</p>
                <p className="extrainfo-text my-0">{`Vientos ${wind}`}</p>
            </div>
        </div>
    );
};

WeatherExtrainfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtrainfo;