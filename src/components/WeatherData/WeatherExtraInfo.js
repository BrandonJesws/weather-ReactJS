import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const WeatherExtraInfo = ({ humedad, viento }) => (
	<div className="weatherExtraInfoCont">
		<span className="extraInfoText">{`Humedad: ${humedad} % `}</span>
		<span className="extraInfoText">{`${viento} viento`}</span>
	</div>
);

WeatherExtraInfo.propTypes = {
	humedad: PropTypes.number.isRequired,
	viento: PropTypes.string.isRequired
}

export default WeatherExtraInfo;
