import React, {useEffect} from 'react'
import axios from 'axios'
import Header from '../components/Header';
import Content from './Content';
import WeatherSearch from './WeatherSearch';


const API_KEY = '7e8b7c6f7ed3827a5d9d6646a7cb3b57'


const Main = () => {

  const api_call = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Belgrade&appid=${API_KEY}`
    const request = axios.get(url);
    const response = await request;
    console.log(response)
  }
  useEffect(() => {
    api_call()
  },[])

  return (
    <div className="main">
      <Header/>
      <Content>
        <WeatherSearch/>
      </Content>
    </div>
  )
}

export default Main
