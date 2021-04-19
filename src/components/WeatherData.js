import React, { useContext } from 'react';
import Context from '../Context';

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const {temp,humidity,pressure} = weather;
  return (
    <div className="weather-data">
      <p className="weather__tagline">
        Weather informations for{' '}
        <span className="weather-data__city">{city}</span>
      </p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{Math.floor(temp)}°</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidity</p>
          <p className="weather-data__value">{humidity}%</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pressure</p>
          <p className="weather-data__value">{pressure} mbar</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
