import React from 'react';
import styled from 'styled-components';

const  SearchByGeolocation :React.FC = () => {
    
  navigator.geolocation.getCurrentPosition((PositionCallback) => {
    const {latitude, longitude} = PositionCallback.coords;
      console.log(latitude,longitude);
   })    


   

  return (
<SearchByGeolocationElement >

</SearchByGeolocationElement >
);
};

export default SearchByGeolocation;


const SearchByGeolocationElement = styled.div``