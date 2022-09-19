import React from "react";
import '../App.css';
const Search = (probs) => {
	const {weatherdata: data} = probs;
	

	function kToC(k){
		return (k - 273.15).toFixed(2);
	}
let showOnPage;

if (data == null){
	showOnPage = (
	<>


             <div className="card2 col-lg-4 col-md-5">
<br />
                <div className="row px-3"> 
          			<label htmlFor="">Get Co-ordinate</label>
          			<button className="btn fa fa-crosshairs" onClick={probs.getLocation}></button> 
          			<div>
                    <input type="number" onChange={probs.change} value={probs.lat} name="lat"  placeholder="Litute" className="mb-5 cordinate"/>
                    <input type="number" onChange={probs.change}  value={probs.lan} name="lan" placeholder="longtitud" className="mb-5 cordinate"/>
                    </div>
                    <input type="text"  value={probs.city} onChange={probs.change} name="city" placeholder="City Name" className="mb-5"/>
                    <button type="button" onClick={probs.search} className="fa fa-search mb-5 mr-0 text-center"></button>
                </div>
                <div className="mr-5">
                    <div className="line my-5"></div>
                    <p>Weather Details</p>
                    <div className="row px-3">
                        <p className="light-text">Cloudy</p>
                        <p className="ml-auto">%</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Humidity</p>
                        <p className="ml-auto">%</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Wind</p>
                        <p className="ml-auto">1km/h</p>
                    </div>
                    <div className="line mt-3"></div>
                </div>
            </div>
</>
);
}else {
	
	showOnPage = 
	(
<>	


             <div className="card2 col-lg-4 col-md-5">
				<br />
                <div className="row px-3"> 
          			<label htmlFor="">Get Co-ordinate</label>
          			<button className="btn fa fa-crosshairs" onClick={probs.getLocation}></button>
          			<div>
                    <input type="number" onChange={probs.change} value={probs.lat} name="lat" placeholder="Litute" className="mb-5 cordinate"/>
                    <input type="number" onChange={probs.change}  value={probs.lan} name="lan" placeholder="longtitud" className="mb-5 cordinate"/>
                    </div>
                    <input type="text"  value={probs.city} onChange={probs.change} name="city" placeholder="City Name" className="mb-5"/>
                    <button onClick={probs.search} className="fa fa-search mb-5 mr-0 text-center"></button>
                </div>
                <div className="mr-5">
     
                    <p>Weather Details</p>
                    <div className="row px-3">
                        <p className="light-text">Cloudy</p>
                        <p className="ml-auto">{data.clouds.all}%</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Humidity</p>
                        <p className="ml-auto">{data.main.humidity}%</p>
                    </div>
                    <div className="row px-3">
                        <p className="light-text">Wind</p>
                        <p className="ml-auto">{data.wind.speed} m/s</p>
                    </div>
                    <div className="line mt-3"></div>
                    
                </div>
            </div>
</>
);
}

	return <> {showOnPage} </>;
            

		

}
export default Search;