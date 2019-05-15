import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import { SNOW } from '../../constants/weathers';
import './style.css';

const WeatherData = () => (
	<div className="weatherDataCont">
		<WeatherTemperature temperature={30} WeatherState={SNOW}/>
		<WeatherExtraInfo humedad={80} viento={'10 m/s'}/>
	</div>
);

export default WeatherData;