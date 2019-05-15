import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => { //destucturing
	//const city = props.city;
	//const { city } = props; //destructuring ES6
	return (
		<div>
			<h1>{city}</h1>
		</div>
		);
};

Location.propTypes = {
	city: PropTypes.string.isRequired 
}

export default Location;