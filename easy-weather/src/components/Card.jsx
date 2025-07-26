import { useState } from "react";
export default function Card({ faWind, FontAwesomeIcon, weatherData, darkMode }) {
    const [iconName, setIconName] = useState('');
    
    if (weatherData !== undefined) {
        fetch("./weatherIconMap.json")
            .then((response) => response.json())
            .then((data) => {
                let typeObj = data.find(type => type.code == weatherData.current.condition.code);
                setIconName(typeObj ? typeObj.myIconDay : "");
            })
            .catch((error) => {
                console.error("Error fetching icon map:", error);
                
            });
    }
    return (
        <div className={`${darkMode ? "weatherCardDark" : "weatherCard"}`}>
            <div className={`${darkMode ? "weatherCardMainDark" : "weatherCardMain"}`} >
                {iconName && <i className={`wi ${iconName}`}></i>}
                {weatherData && <h2>{weatherData.current.condition.text}</h2>}
                    {weatherData && <h1>{Math.floor(weatherData.current.temp_f)}°F</h1>}
                {weatherData && <h3>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h3>}
            </div>
            <div className="weatherStats">
                <div className="weatherElement">
                    {weatherData && <i className="wi wi-windy"><span>{weatherData.current.wind_mph}MPH</span></i>}
                </div>
                <div className='weatherElement'>
                    {weatherData && <i className="wi wi-direction-up-left"><span>{weatherData.current.wind_dir}</span></i>}

                </div>
                <div className="weatherElement">
                   {weatherData && <i className="wi wi-barometer"><span>{weatherData.current.pressure_in}"</span></i>}
                </div>
                <p>{weatherData && weatherData.location.localtime}</p>
            </div>
        </div>
    )
}