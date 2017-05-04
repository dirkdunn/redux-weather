import axios from 'axios';

const API_KEY = '9f7fe3b0ceb0a7cf1e86812469152bc0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request: ',request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
