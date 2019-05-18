import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './index';

const strToComponent = cities => (
	cities.map((city, index) => (<WeatherLocation key={index} city={city}/>))
);

const LocationList = ({ cities })=>(
	<div>
		{strToComponent(cities)}
	</div>
);

LocationList.propTypes = {
	cities: PropTypes.array.isRequired
}

export default LocationList;