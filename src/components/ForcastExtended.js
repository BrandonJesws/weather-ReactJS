import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Forecastitem from './Forecastitem';
import transformForecast from '../services/transformForecast';
import './styles.css';

const key_api = "66865048b0d988725d7376abe6c5c709";
const url = "http://api.openweathermap.org/data/2.5/forecast"; 

class ForcastExtended extends Component{
	constructor(){
		super();
		this.state = { forecastData: null }
	}
	//Solo se ejecuta 1 vez
	componentDidMount(){
		this.updateCity(this.props.city);
	}
	//Se ejecuta cada vez que hay un cambio en los componentes
	componentWillReceiveProps(nextProps){
		if(nextProps.city !== this.props.city){
			this.setState({forecastData: null});
			this.updateCity(nextProps.city);
		}
	}

	updateCity = city => {
		const url_forecast = `${url}?q=${city}&appid=${key_api}&units=metric`;

		fetch(url_forecast)
			.then(data => data.json())
			.then(weather_data => {
				console.log(weather_data);
				const forecastData = transformForecast(weather_data);
				console.log(forecastData);
				this.setState({ forecastData });
			});
	}

	renderForecastItemDays(forecastData){
		return forecastData.map( forecast => 
			<Forecastitem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}/>);
	}

	renderProgress = () => {
		return <h3>Cargando Pronostico extendido...</h3>;
	}

	render(){
		const { city } = this.props;
		const { forecastData } = this.state;
		return(
			<div>
				<h2 className="forecast-title">Pronostico Extendido para {city}</h2>
				{ forecastData ?  
					this.renderForecastItemDays(forecastData) : 
					this.renderProgress() }
			</div>);
	}
}

ForcastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

 export default ForcastExtended;
