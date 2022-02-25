//@ts-ignore
import rain  from "../assets/rain.svg";
//@ts-ignore
import partlyCloudy  from "../assets/partly-cloudy-day.svg";
//@ts-ignore
import mostlyCloudy  from "../assets/overcast.svg";
//@ts-ignore
import clear  from "../assets/clear-day.svg";
//@ts-ignore
import fogDay  from "../assets/fog-day.svg";
//@ts-ignore
import scatteredShowers  from "../assets/thunderstorms-rain.svg";
//@ts-ignore
import showers  from "../assets/thunderstorms-day-rain.svg";
//@ts-ignore
import cloudy  from "../assets/cloudy.svg";
//@ts-ignore
import breezy  from "../assets/wind.svg";
//@ts-ignore
import thunderstorms  from "../assets/thunderstorms.svg";
//@ts-ignore
import background  from "../assets/background.jpg";
//@ts-ignore
import background2  from "../assets/background2.jpg";



export {rain,partlyCloudy,mostlyCloudy,clear,fogDay,scatteredShowers,showers,cloudy,breezy,thunderstorms,background,background2} ;



export  const  weatherConditionIcon =  (data: string) =>{
    let displayWeatherIcon = "";
    
    if(data.includes("Rain")){
        displayWeatherIcon = rain;
      
     }
   

     if(data.includes("Cloudy")){
       displayWeatherIcon = cloudy;
     }
     if(data.includes("Breezy")){
       displayWeatherIcon = breezy;
     }

     if(data.includes("Thunderstorms")){
       displayWeatherIcon = thunderstorms;
     }

     if(data.includes("Partly Cloudy")){
       displayWeatherIcon = partlyCloudy;
           
     }
     if(data.includes("Mostly Cloudy")){
       displayWeatherIcon = mostlyCloudy;
       
     }
     
     
     if(data.includes("Mostly Sunny")){
       displayWeatherIcon = fogDay;
     
     }
     if(data.includes("Showers")){
       displayWeatherIcon = showers;
       
     }

     if(data.includes("Scattered")){
       displayWeatherIcon = scatteredShowers;
   
     }

  
     if(data.includes("Sunny")){
       displayWeatherIcon = clear;
     }

     return displayWeatherIcon;
}