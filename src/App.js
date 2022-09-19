// import logo from './logo.svg';
import React, { Component } from "react";
import Home from './Components/Home';
import Search from './Components/Search';
import axios from "axios";

class App extends Component {
	constructor(props){
		super(props);
		
	this.state = {
		lat: "",
		lan: "",
		weatherdata: null,
		city: "",
	};	

	}
	//t
	changeHandler = (event) => {
		const name = event.target.name;
		if (name === "city"){
			this.setState({
				city: event.target.value,
			})
		}else if (name === "lat"){
			this.setState({
				lat: event.target.value,
			})
		}else if (name === "lan"){
			this.setState({
				lan: event.target.value,
			})
		}
	};

	//find location base get co-ordinate
	locationHandler = () => {
		this.setState({
		lat: "",
		lan: "",
		weatherdata: null,
		city: "",
		});
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(

			(res) => {
				setTimeout(
					() => {
						this.setState({
					lat: res.coords.latitude,
					lan: res.coords.longitude,
				});
				axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lan}&
				appid=91ef2a0081f68f5b1b385d59da2970bd`
				)
				.then((result) => {
					this.setState({
						city: result.data.name,
						weatherdata: result.data,
					})
				})
				.catch((error) => { 
					console.log(error);
				});		
				},500);
				
			},
			(error) => {
				console.log(error);
			}

	    	);
		}else{
			console.log('location is not suppoerted');
		}
	};

	//search base city and coordinate
	searchHanler = () => {
		if(this.state.city){
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&
				appid=91ef2a0081f68f5b1b385d59da2970bd`
				)
				.then((result) => {
					this.setState({
						city: result.data.name,
						weatherdata: result.data,
						lat: result.data.coord.lat,
						lan: result.data.coord.lon,
					
					})
				})
				.catch((error) => { 
					console.log(error);
				});		
		}else{
			axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lan}&
				appid=91ef2a0081f68f5b1b385d59da2970bd`
				)
				.then((result) => {
					this.setState({
						city: result.data.name,
						weatherdata: result.data,
					})
				})
				.catch((error) => { 
					console.log(error);
				});	
		}
	
	};
	render () {
		return (
    <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="row card0">

	        <Home 
	        weatherdata={this.state.weatherdata}	
	        />

	 		<Search 
	 		lat={this.state.lat}
	 		lan={this.state.lan}
	 		weatherdata={this.state.weatherdata}
	 		city={this.state.city} 
	 		change={this.changeHandler}
	 		getLocation={this.locationHandler}
	 		search={this.searchHanler}
	 		/>
	 		

       </div>
    </div>
</div>
  );
}
}
export default App;
