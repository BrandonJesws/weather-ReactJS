import { CLOUDY, SUN, RAIN,
		 SNOW, THUNDER, DRIZZLE } from '../constants/weathers';

const getWeatherState = weather => {
	const { id } = weather[0];
	if(id < 300){
		return THUNDER;
	}else if(id < 400){
		return DRIZZLE;
	}else if(id < 600){
		return RAIN;
	}else if(id < 700){
		return SNOW;
	}else if(id === 800){
		return SUN;
	}else{
		return CLOUDY;
	}
}

const transformWeather = (weather_data)=>{
	const { humidity, temp } = weather_data.main;
	const { speed } = weather_data.wind;
	const { weather } = weather_data;
	const weatherState = getWeatherState(weather);

	const data = {
		humedad: humidity,
		temperature: temp,
		viento: `${speed} m/s`,
		weatherState
	}
	return data;
}

export default transformWeather;