import React from "react";
import '../App.css';

const Person = (probs) => {
	const {weatherdata: data} = probs;
 
	function kToC(k){
		return (k - 273.15).toFixed(2);
	}

function getTheTime(timezone){
		const date = new Date(timezone * 1000);
		return date.toLocaleTimeString();
	}
    function getTheDate(){
        const date = new Date();
        return date.toLocaleDateString();
    }

let showOnPage;

if (data == null){
	showOnPage = (
	<>
        <div className="card1 col-lg-8 col-md-7"> <small>the.weather</small>
             <div className="text-center"> 
                <img className="image mt-5" src={`https://i.imgur.com/M8VyA2h.png`} /> 
             </div>
                <div className="row px-3 mt-3 mb-3">
                    <h1 className="large-font mr-3">&#176;</h1>
                        <div className="d-flex flex-column mr-3">
                            <h2 className="mt-3 mb-0"></h2> <small>{ getTheTime() } </small>
                        </div>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fa fa-sun-o mt-4"></h3> <small>Sunny</small>
                    </div>
            </div>
         </div>
    </>
);
}else {
	showOnPage = 
	(
<>	
    <div className="card1 col-lg-8 col-md-7"> <small>the.weather</small>
        <div className="text-center"> 
        <img className="image mt-5" src={`https://i.imgur.com/M8VyA2h.png`} /> 
        </div>
             <div className="row px-3 mt-3 mb-3">
                 <h1 className="large-font mr-3">{kToC(data.main.temp)}&#176;</h1>
                    <div className="d-flex flex-column mr-3">
                        <h2 className="mt-3 mb-0">{data.name}</h2><small> {getTheDate() } { getTheTime(data.timezone) } </small>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                        <small>{data.weather[0].description}</small>
                    </div>
            </div>
    </div>
</>
);
}

	return <> {showOnPage} </>;		

}

export default Person;
