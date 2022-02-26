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

    switch (data) {
      case "Rain":
       return  displayWeatherIcon = rain;
      case "Cloudy":
       return  displayWeatherIcon = cloudy;
      case "Breezy":
       return    displayWeatherIcon = breezy;
      case "Thunderstorms":
       return    displayWeatherIcon = thunderstorms;
      case "Partly Cloudy":
       return  displayWeatherIcon = partlyCloudy;
      case "Mostly Cloudy":
       return   displayWeatherIcon = mostlyCloudy;
      case "Mostly Sunny":
       return    displayWeatherIcon = fogDay;
      case "Showers":
       return   displayWeatherIcon = showers;
    
      case "Scattered":
       return  displayWeatherIcon = scatteredShowers;
      case "Sunny":
       return   displayWeatherIcon = clear;
    
      default:
        return displayWeatherIcon =mostlyCloudy
    }
   
}