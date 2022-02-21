
import React from 'react';
import SearchByGeolocation from './components/SearchByGeolocation';
import SearchByInputValue from './components/SearchByInputValue';
  

const  App :React.FC = () => {
  
  return (
  <div>
    <SearchByInputValue/>
    <SearchByGeolocation/>
  </div>
);
};

export default App;