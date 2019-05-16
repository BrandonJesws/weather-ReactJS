import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const WeatherData = ({ data }) => {
	const {temperature, weatherState, humedad, viento} = data;
	return (
		<div className="weatherDataCont">
			<WeatherTemperature temperature={temperature} WeatherState={weatherState}/>
			<WeatherExtraInfo humedad={humedad} viento={viento}/>
		</div>
	);
};

WeatherData.propTypes = {
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humedad: PropTypes.number.isRequired,
		viento: PropTypes.string.isRequired
	})
}

export default WeatherData;