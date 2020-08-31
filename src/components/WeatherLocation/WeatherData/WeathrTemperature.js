import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import {
    SUN,
    CLOUD,
    CLOUDY,
    SNOW,
    WINDY,
    RAIN
} from '../../../constants/weathers';


const stateToIconName = weatherState => {
    switch (weatherState) {

        case CLOUD:
            return "cloud";

        case SUN:
            return 'day-sunny';

        case CLOUDY:
            return 'cloudy';

        case SNOW:
            return 'snow';

        case RAIN:
            return 'rain';

        case WINDY:
            return 'widny';

        default:
            return 'day-sunny';
    }
};

const getWeatherIcon = weatherState => {
    return (
        <WeatherIcons 
            name={stateToIconName(weatherState)} 
            className="text-warning mr-3"
            size='3x'
        />
    );
};

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div className="col-md-6 row align-items-center">
            {getWeatherIcon(weatherState)}
            <span className="font-weight-bolder temperature">{temperature}</span>
            <span className="font-weight-light">C°</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;