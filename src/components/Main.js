import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';

const Main = () => {

  const [weather,setWeather] = useState()
  const api_call = async (e) => {
    e.preventDefault();
    const API_KEY = '7e8b7c6f7ed3827a5d9d6646a7cb3b57';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${API_KEY}`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
  };
  weather && console.log(weather)

  return (
    <div className="main">
      <Header />
      <Content>
        <WeatherSearch api_call={api_call} />
        { weather && <WeatherData weather={weather}/>}
      </Content>
    </div>
  );
};

export default Main;
