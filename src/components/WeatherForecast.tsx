import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import styled from 'styled-components';
import { useWeatherContext } from '../context/weatherContext';
import { weatherConditionIcon } from './weatherIconsHelper';

const  WeatherForecast :React.FC = () => {
  const {state:{locationData} } = useWeatherContext(); 

  let weeklyForecast = locationData?.forecasts.map((forecast,index)=>{
    // const {code,date,high,day,low,text} = forecast;
   
          let displayWeatherIcon =  weatherConditionIcon(forecast.text)

              if(index > 6){
                return
              }
             
            return( 
            <div className="list-container" key={forecast.date}>   
               <p className="day-text days-text">{index === 0 ? "Today":forecast.day}</p>
               <p className="icon-container icons-container"> <img src={displayWeatherIcon} alt="image" className = "display-weather-icon" /> </p>
               <p className="day-low days-low">{forecast.low}&deg;</p>
               <div className="color-bar color-bars"></div>
               <p className="day-high days-high">{forecast.high}&deg;</p>
             </div>
               ) 

           })


  return (
  <WeatherForecastElement >
      <div className="forecast-container">
            <div className="forecast-text-icon-container">                                      
                <BsCalendar3 className = "calendar-icon"/>
                <p className="forecast-title">7-DAY FORECAST </p>
            </div>
                {weeklyForecast}  
        </div>
  </WeatherForecastElement >
);
};

export default WeatherForecast;


const WeatherForecastElement = styled.div`

       .list-container{     
       display: flex;
       align-items: center;
       /* background: blue; */
       
      }


      .display-weather-icon{
          max-width: 2rem;
      }
      .days-text{
        width:2.6rem;
     
        font-size: 0.8rem;
        /* background: yellow; */
       
      }
  
      .icons-container{
        width:2.5rem;
        /* background:green; */
        text-align: center;
  
       
      }

      .weather-texts{
        width:10rem;
        font-size:0.8rem;
   
       
      }

      .days-low{
        width: 2rem;
        margin-left: 0.5rem;
        text-align: right;
    
      
     
      }
      .days-high{
        width: 2rem;
        /* background:red; */
    
       
       
      }

      .color-bars{
        width:2.5rem;
        margin: 0 0.5rem;
      }

      
      
      .forecast-container{
        margin-top: 1rem;
        /* padding:0.5rem; */
        /* border-radius: 4px; */
      }

      .forecast-text-icon-container{
        display: flex;
        align-items: center;
        justify-content: center;
   
      
      }
      .calendar-icon{
        font-size: 0.8rem;
        margin-right : 0.5rem;
      }
      
      .forecast-title{
        font-size: 0.8rem;
      
        /* display: none; */
  
      }
      
      .color-bar{
        width: 5rem;
        height:2px;
        background: #d3a423;
      }

      
      .calendar-icon{
            margin-right: 0.4rem;
            
        }

    
        
        .temperature-text{
          margin-bottom: 2rem;
      }

     
`