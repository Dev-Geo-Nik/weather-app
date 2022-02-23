import React from 'react';
import styled from 'styled-components';
import { useWeatherContext } from '../context/weatherContext';
import { WiCloudy } from "react-icons/wi";

import SearchLocationMethods from './SearchLocationMethods';

const  WeatherAppContainer :React.FC = () => {

    const {state:{locationData,location,defaultTemperatureMetric} } = useWeatherContext(); 
    console.log(location)
    let displayInfos: (JSX.Element|null) = null;

 

    if (locationData) {

        const {
          location:{city,country,lat,long,region,timezone_id,woeid},
          current_observation:{
            wind: {chill,direction,speed},
            atmosphere:{humidity,pressure,rising,visibility},
            astronomy:{sunrise,sunset},
            condition:{code,temperature,text},
            pubDate
          },
          forecasts
        } = locationData;
        
        // console.log(direction)

      let arrayData = forecasts.map((forecast,index)=>{
        // const {code,date,high,day,low,text} = forecast;
        
        
                  if(index > 5){
                    return
                  }

                return( 
                <div className="list-container" key={forecast.date}>
                   <p className="day-text">{index === 0 ? "Today":forecast.day}</p>
                   <p className="icon-container"> {<WiCloudy className="icon"/>}</p>
                   <p className="weather-text">{forecast.text}</p>
                   <p className="day-low">{forecast.low}&deg;</p>
                   <div className="color-bar"></div>
                   <p className="day-high">{forecast.high}&deg;</p>
                  
                   {/* <p className="day-value">{new Date(forecast.date).getDay()}/{new Date(forecast.date).getDate()}</p> */}
                   {/* <p className="month-value">{new Date(forecast.date).getDay()}</p>
                   <p className="month-value">{new Date(forecast.date).getMonth()}</p> */}
                   {/* <p className="day-month">{}</p> */}
                 </div>
                   ) 

               })
      displayInfos =  <div className="container">
                             
                            <h1 className="city-title">{city}</h1>
                            <h5 className="country-title">{country}</h5>
                            <p className="temperature">{temperature }<span className="celsius-text">&deg;</span> </p>
                            <p className="temperature-text">{text}</p>
                            <div className="forecast-container">
                                   <div className="forecast-text-icon-container">
                                       
                                       <p className="forecast-title">11-DAY FORECAST </p>

                                   </div>
                                  
                                  {arrayData}
                            </div>
                            
                     </div>

    }




  return (
    <WeatherAppContainerElement >
       <SearchLocationMethods/>
        {displayInfos}
     
    </WeatherAppContainerElement >
);
};

export default WeatherAppContainer;


const WeatherAppContainerElement = styled.div`

      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .container{
        border: 1px solid #ebb8b8;
        

        }

      

      /*Array styles  */
      
      .list-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
      }

      .color-bar{
        width: 5rem;
        height:1px;
        background: #d3a423;
      }
  

`