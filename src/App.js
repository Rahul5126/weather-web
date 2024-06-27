import './App.css';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Search from './components/Search'
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import formattedWeatherData from './services/WeatherServices';
import { useEffect, useState } from 'react';


function App() {
  const [query, setQuery] = useState({ q: "delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await formattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);


  return (
    <div className="main-container mx-auto my-2 py-3 px-5">
      <Search  setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;

