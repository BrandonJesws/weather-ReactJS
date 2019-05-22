import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherData/index';

const Forecastitem = ({ weekDay, hour, data }) => (
	<div>
		<h2>{ weekDay } - {hour} hs</h2>
		<WeatherData data={data}></WeatherData>
	</div>
);

Forecastitem.propTypes = {
	weekDay: PropTypes.string.isRequired,
	hour: PropTypes.number.isRequired
}

export default Forecastitem;