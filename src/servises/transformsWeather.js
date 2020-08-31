import conver from 'convert-units';
import { SUN } from '../constants/weathers';

const getTemp = (temp) => {
    return Number(conver(temp).from('K').to('C').toFixed(2));
};

const getWeatherState = (weather_data) => {
    return SUN
};

const transformsWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    };

    return data;
};

export default transformsWeather;