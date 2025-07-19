
export default function Card({ faWind, FontAwesomeIcon }) {
    return (
        <div className="weatherCard">
            <div className="weatherCardMain">
                <i className="wi wi-day-sunny"></i>
                <h2>Sunny</h2>
                <h1>90°F</h1>
                <h3>Oshkosh, Wi, USA</h3>
            </div>
            <div className="weatherStats">
                <div className="weatherElement">
                    <i className="wi wi-windy"><span>20 MPH</span></i>
                </div>
                <div className='weatherElement'>
                    <i className="wi wi-direction-up-left"><span>NW</span></i>

                </div>
                <div className="weatherElement">
                    <i className="wi wi-barometer"><span>75°F</span></i>
                </div>
            </div>
        </div>
    )
}