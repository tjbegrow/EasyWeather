import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faWind, faGears } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [search, setSearch] = useState("");
  //const [currentLocation, setCurrentLocation] =useState({});
  const [weatherData, setWeatherData] = useState();
  
  const [darkMode, setDarkMode] = useState(() => {
      const darkModeStorage = localStorage.getItem('darkMode');
      console.log("darkModeStorage:", darkModeStorage);
      return darkModeStorage == "true" ? Boolean(darkModeStorage) : false;
  });

  const [autoUpdate, setAutoUpdate] = useState(() => {
      const autoUpdateStorage = localStorage.getItem('autoUpdate');
      console.log("autoUpdateStorage:", autoUpdateStorage);
      return autoUpdateStorage == "true" ? Boolean(autoUpdateStorage) : false;
  });

  //const [intervalId, setIntervalId] = useState(null);
  
  useEffect(() => {
        localStorage.setItem('autoUpdateStorage', autoUpdate.toString());
        let intervalId;
        if (autoUpdate) {
          intervalId = setInterval(() => {
            getCurrentWeather(null, true, search);
          }, 5000);
          
        } else {
          if(intervalId){
            
            clearInterval(intervalId);
          }
        }
        return () => {
          clearInterval(intervalId);
      };
  }, [autoUpdate]);

  useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const darkModeToggle = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
    //console.log(!darkMode);
  }
  
   const getCurrentWeather = async (e, timer, location) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    try {
      let response;
      if (e == null && timer == null) {
        response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9e6fca22ab6846aa9d033544251907&q=${location.latitude}, ${location.longitude}&aqi=yes`, requestOptions)
      } else {
        response = await fetch(`http://api.weatherapi.com/v1/current.json?key=9e6fca22ab6846aa9d033544251907&q=${search}&aqi=yes`, requestOptions)
      }
      
      const data = await response.json();
      setWeatherData(data);
      console.log(weatherData)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  //let currentLocation = {};
  const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    console.log(pos.coords)
    getCurrentWeather(null, pos.coords);
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, locationOptions);
  },[]);

  const handleSubmit= (e) => {
    e.preventDefault();
    getCurrentWeather(e, false, null);
  }

  return (
    <div className={`${darkMode ? "appDark" : "app"}`}>
      <Header FontAwesomeIcon={FontAwesomeIcon} faGears={faGears} darkModeToggle={darkModeToggle} darkMode={darkMode} autoUpdate={autoUpdate} setAutoUpdate={setAutoUpdate}/>
      <div className='searchArea'>
        <form onSubmit={handleSubmit}>
          <div className='searchField'>
            <label className='searchLabel' htmlFor="search">Search:</label>
            <input
              className='searchText' 
              type="text"
              id="search"
              name="search"
              placeholder="Search Anywhere"
              value={search}
              onChange={(e) => setSearch(e.target.value) }
            />
            <FontAwesomeIcon id="mag" icon={faMagnifyingGlass} />
           </div>
        </form>
      </div>
      <Card faWind={faWind} FontAwesomeIcon={FontAwesomeIcon} weatherData={weatherData} darkModeToggle={darkModeToggle} darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  )
}

export default App
