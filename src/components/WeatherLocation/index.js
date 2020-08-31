import React from 'react';
import WeatherData from './WeatherData/index';
import transformsWeather from '../../servises/transformsWeather';
import Location from './Location';
import api_weather from '../../servises/weatherApi';
import CustomSpinner from '../CustomSpinner';


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
                        <div className="form-group m-auto col-md-6">
                            <select 
                                value={this.state.value} 
                                onChange={this.handleChange}
                                className="form-control"
                            >
                                <option value="la vega,do">La Vega</option>
                                <option value="jarabacoa,do">Jarabacoa</option>
                                <option value="moca,do">Moca</option>
                                <option value="puerto plata,do">Puerto Plata</option>
                                <option value="santiago de los caballeros,do">Santiago</option>
                                <option value="santo domingo,do">Santo Domingo</option>
                                <option value="Bonao,do">Bonao</option>
                                <option value="mao,do">Mao</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default WeatherLocation;