import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from '../WeatherData/index';
import transformWeather from '../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import './styles.css';


const key_api = "66865048b0d988725d7376abe6c5c709";
const url = "http://api.openweathermap.org/data/2.5/weather"

class WeatherLocation extends Component { 

	constructor({ city }){
		super();
		this.state = {
			city,
			data: null
		};
	}

	componentWillMount(){
		const { city } = this.state;
		const url_api = `${url}?q=${city}&appid=${key_api}&units=metric`;
		fetch(url_api)
			.then(data => data.json())
			.then(weather_data => {
				console.log(weather_data);
				const data = transformWeather(weather_data);
				this.setState({ data })
			});
	} 

	render() {
		const { onWeatherLocationClick } = this.props;
		const {	city, data } = this.state; 
		return (
			<div className="weatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city={city}/>
				{ data ? <WeatherData data={data}/> : <CircularProgress size={60} thickness={7} /> }
			</div>);
	}
}

WeatherLocation.propTypes = {
	city: PropTypes.string,
	onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;