import React, { Component } from 'react';
import Location from './Location';
import WeatherData from '../WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';
import { SUN } from '../../constants/weathers';

const location = "Hidalgo,mx";
const key_api = "66865048b0d988725d7376abe6c5c709";
const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key_api}&units=metric`;

const data1 = {
	temperature: 20,
	weatherState: SUN,
	humedad: 10,
	viento: '10 m/s'
};

class WeatherLocation extends Component { 

	constructor(){
		super();
		this.state = {
			city: 'Hidalgo',
			data: data1
		};

		this.handleUpdateClick = this.handleUpdateClick.bind(this);
	}

	handleUpdateClick(){
		fetch(url_api)
			.then(data => data.json())
			.then(weather_data => {
				console.log(weather_data);
				const data = transformWeather(weather_data);
				this.setState({ data })
			});
	}

	render() {
		const {	city, data } = this.state; 
		return (<div className="weatherLocationCont">
					<Location city={city}/>
					<WeatherData data={data}/>
					<button onClick={this.handleUpdateClick}>Actualizar</button>
				</div>);
	}
}
export default WeatherLocation;