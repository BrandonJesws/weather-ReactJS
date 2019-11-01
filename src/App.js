import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/WeatherLocation/LocationList';
import ForcastExtended from './components/ForcastExtended';
import { setCity } from './actions';
import './App.css';

const cities = [
	'Hidalgo,mx',
	'Bogotá,col',
	'Buenos Aires,ar',
	'Madrid,es'
];



class App extends Component{

	constructor(){
		super();
		this.state = { city: null };
	}

	handleSelectedLocation = city => {
		this.setState({ city });

		this.props.setCity(city);
	}

  render(){
  	const { city } = this.state;
  	return(
  		<MuiThemeProvider>
	    	<Grid>
	    		<Row>
	    			<Col xs={12}>
	    				<AppBar title="Weather App"/>
	    			</Col>
	    		</Row>
	    		<Row>
	    			<Col xs={12} md={6}>
	    		 		<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>
	    		 	</Col>
	    		 	<Col xs={12} md={6}>
	    		 		<Paper zDepth={4}>
	    		 			<div className="detail">
	    		 				{
	    		 					city && 
	    		 					<ForcastExtended city={city}></ForcastExtended>
	    		 				}
	    		 			</div>
	    		 		</Paper>
	    		 	</Col>
	    		</Row>
	    	</Grid>
    	</MuiThemeProvider>
 	 );

  }
  	

}

const mapDispatchToPropsActions = dispatch => ({
	setCity: value => dispatch(setCity(value))
});
const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;