import React from 'react';
import WeatherData from './WeatherData/index';
import transformsWeather from '../../servises/transformsWeather';
import Location from './Location';
import api_weather from '../../servises/weatherApi';
import CustomSpinner from '../CustomSpinner';
import CustomSelect from '../CustomSelect'


class WeatherLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "puerto plata,do",
            city: 'Puerto Plata',
            data: null,
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {

        const value = event.target.value;
        const api = api_weather(value);

        fetch(api).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformsWeather(weather_data);
            const city = weather_data.name;
            this.setState({
                data, 
                city,
                value,
            });
        });

    };
    
    componentWillMount() {
        const api = api_weather('puerto plata,do');
        fetch(api).then( data => {
            return data.json();
        }).then(weather_data => {
            const data = transformsWeather(weather_data);
            const city = weather_data.name;
            this.setState({
                data, 
                city,
            });
        });
    }
    
    render = () => {
        const { city, data} = this.state

        return (
        
            <div className="row" style={{height: '100vh'}}>
                <div className="card col-md-5 m-auto border shadow">
                    <Location city={ city } />
                    <div className="card-body bg-dark-gray">
                        { data ? <WeatherData data={ data } /> : <CustomSpinner />}
                    </div>

                    <div className="card-footer bg-white">
                        <CustomSelect 
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    };
};

export default WeatherLocation;