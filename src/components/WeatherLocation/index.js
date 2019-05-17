import React, { Component } from 'react';
import Location from './Location';
import WeatherData from '../WeatherData/index';
import transformWeather from '../../services/transformWeather';
import './styles.css';

const location = "Hidalgo,mx";
const key_api = "66865048b0d988725d7376abe6c5c709";
const url_api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key_api}&units=metric`;

class WeatherLocation extends Component { 

	constructor(){
		super();
		this.state = {
			city: 'Hidalgo',
			data: null
		};

		console.log("Constructor");
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

	componentWillMount(){
		console.log("WillMount");
		this.handleUpdateClick();
	}

	render() {
		const {	city, data } = this.state; 
		return (<div className="weatherLocationCont">
					<Location city={city}/>
					{ data ? <WeatherData data={data}/> : 'Cargando...' }
					<button onClick={this.handleUpdateClick}>Actualizar</button>
				</div>);
	}
}
export default WeatherLocation;