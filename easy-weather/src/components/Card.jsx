
export default function Card({ faWind, FontAwesomeIcon, weatherData }) {
    return (
        <div className="weatherCard">
            <div className="weatherCardMain">
                <i className="wi wi-day-sunny"></i>
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
            </div>
        </div>
    )
}