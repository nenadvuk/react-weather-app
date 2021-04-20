import React, { useState } from 'react';
import axios from 'axios';
import Context from '../Context';
import Header from './Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';
import Error from './Error';
import DateTime from './DateTime';
import Footer from './Footer';
import WeatherIcon from './WeatherIcon';

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [forecast, setForecast] = useState();


  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) {
      return setError('Please enter the city', setWeather(null));
    }
    // Current weather
    const API_KEY = '7e8b7c6f7ed3827a5d9d6646a7cb3b57';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    console.log(response);

    // 5 day forecast using filther method for forecast at 12:00 for 5 days
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`;
    const forecastRequest = axios.get(forecastUrl);
    const forecastResponse = await forecastRequest;
    let arr = forecastResponse.data.list
    let forecastFiveDays = arr.filter(item => item.dt_txt.includes("12:00")) 
    console.log(forecastFiveDays)

    // UseState
    setWeather(response.data.main);
    setCity(response.data.name);
    setForecast(forecastFiveDays)
    setError(null);
  };
  weather && console.log(weather,forecast);
  
  return (  
    <div className="main">
      <Header />
      <Content>
        <DateTime />
        <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
        <WeatherIcon />
        <Footer />
      </Content>
    </div>
  );
};

export default Main;

// Api key for google location AIzaSyAHBBsw_Et7zrfzkdMuTgUy99NJYsMFQ9s
