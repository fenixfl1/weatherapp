import PropTypes from 'prop-types';
import React from 'react';
import WeatherTemperature from './WeathrTemperature';
import WeatherExtrainfo from './WeatherExtrainfo';
import './style.css';

const WeatherData = ({ data }) => {

    const {temperature, weatherState, humidity, wind} = data

    return (
        <div className="m-0 d-flex justify-content-around">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} />
            <WeatherExtrainfo humidity={humidity} wind={wind} />
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default WeatherData;