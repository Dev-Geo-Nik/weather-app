import React from 'react';
import styled from 'styled-components';
import { useWeatherContext } from '../context/weatherContext';
import {background, background2, partlyCloudy, rain, weatherConditionIcon} from "./weatherIconsHelper";
import WeatherForecast from './WeatherForecast';
import WeatherSearch from './WeatherSearch';






const  WeatherAppContainer :React.FC = () => {
 

  const {state:{locationData,isLoading,isThemeBtnClicked,theme} } = useWeatherContext(); 
    console.log(theme)
  
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
        
        
      
   
    
               
      displayInfos =  <div className= {isThemeBtnClicked ? "infos-container-dark":"infos-container"}>
                            <img src={weatherConditionIcon(text)} alt="background-image"  className="background-image" />
                            <h1 className="city-title text-header">{city}</h1>
                            <h5 className="country-title text-header">{country}</h5>
                            <p className="temperature text-header">{temperature }<span className="celsius-symbol">&deg;</span> </p>
                            <p className="temperature-text text-header">{text}</p>
                            <WeatherForecast/>           
                     </div>

    }
    let displayBackgroundImage = isThemeBtnClicked?   background2: background;

  return (
    <WeatherAppContainerElement >   
       <div className="main-container main-container-dark">
            <img src={displayBackgroundImage} alt="background-image"  className={isThemeBtnClicked ? "background-image-container background-image-container-dark":"background-image-container"} />
            <div className={isThemeBtnClicked ?"search-container-dark" :"search-container"}>
                  <WeatherSearch/>
                  {displayInfos}
                
            </div>
       </div>
    </WeatherAppContainerElement >
);
};

export default WeatherAppContainer;


const WeatherAppContainerElement = styled.div`
      
      /* border: 2px solid #ce1111; */
   
    

       .main-container{
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
        background:rgba(135, 141, 151, 0.8);
        
      } 
      
      .search-container{
        background:rgba(7, 7, 7, 0.8);
        position: absolute;
        margin: 8rem auto;
        border-radius:10px;
       

      }

      .search-container-dark{
        background:rgba(7, 7, 7, 0.8);
        position: absolute;
        margin: 8rem auto;
        border-radius:10px;
        
      }

      .background-image{
        width:4rem;
        display:block;
        margin:  0 auto;
    
       }


       .background-image-container{
         width: 100%; 
         height: 100vh; 
       
       }
       .background-image-container-dark{
        opacity: 0.2
       }

       .background-test{
         width: 100%;
       }

      .infos-container{
        /* border: 1px solid #16b6df;  */
        padding:1rem;  
        border-radius: 10px;
        color:#fff;
       
       
       
        }

        .infos-container-dark{
          padding:1rem;  
          border-radius: 10px;
          color:#ececec;
          
        }

        .header-container{
        
        }
        /* List container single */
        .city-title{
          font-size:1.8rem;
        }

        .country-title{

        }

        .temperature{
            font-size:2rem;
        }

        .celsius-symbol{

        }
        .text-header{
          text-align: center;
          margin: 0 0 0.1rem 0;
     
        }
       
      
        .toggleBtn{
          font-size:2rem;
          color:rgba(7, 7, 7, 1);
          align-self: flex-end;
          margin-right: 2rem;
          
        }

    

       


`