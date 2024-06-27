import { DateTime } from "luxon";

const API_KEY = "0331a7a7cf224fc8422d580d7b24b414";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get Weather Data
const weatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
} 

// Destructuring Data
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        name,
        dt,
        visibility,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const { description, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, pressure, visibility, name, dt, country, sunrise, sunset, description, icon, speed };
}

const formattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await weatherData('weather', searchParams).then(formatCurrentWeather)

    return { ...formattedCurrentWeather };
}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default formattedWeatherData;

export {formatToLocalTime, iconUrlFromCode}

  
 