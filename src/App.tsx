
import React from 'react';
import SearchByGeolocation from './components/SearchByGeolocation';
import SearchByInputValue from './components/SearchByInputValue';
import WeatherCard from './components/WeatherCard';
  

const  App :React.FC = () => {
  
  return (
  <div>
    {/* <SearchByInputValue/> */}
    <SearchByGeolocation/>
    <WeatherCard/>
  </div>
);
};

export default App;