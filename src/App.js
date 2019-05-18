import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/WeatherLocation/LocationList';
import './App.css';

const cities= [
	'Hidalgo,mx',
	'Bogotá,col',
	'Buenos Aires,ar',
	'Madrid,es'
];

class App extends Component{
  render(){
  	return(
  		<MuiThemeProvider>
	    	<div className="App">
	    		 <LocationList cities={cities}/>
	    	</div>
    	</MuiThemeProvider>
 	 );

  }
  	

}

export default App;
