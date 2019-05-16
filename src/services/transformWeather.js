import { SUN } from '../constants/weathers';

const getWeatherState = () => {
	return SUN;
}

const transformWeather = (weather_data)=>{
	const {humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const weatherState = getWeatherState();

	const data = {
		humedad: humidity,
		temperature: temp,
		viento: `${speed} m/s`,
		weatherState
	}
	return data;
}

export default transformWeather;