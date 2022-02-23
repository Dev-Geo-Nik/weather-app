import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp, IoLocationOutline} from "react-icons/io5";
import { ActionTypes,  params } from '../context/constants ';
import { useWeatherContext } from '../context/weatherContext';





const  SearchLocationMethods :React.FC = () => {
    
    const {state:{locationData,latitude,longitude,location},dispatch } = useWeatherContext();
    const [inputValue , setInputValue] = useState("");
    // console.log(location)

    let url = "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8";
    const parameters = {
     "method": "GET",
     "headers": {
         "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
         "x-rapidapi-key": "ebb163ffcdmsh8e13aa2f4cf52fap1a017ajsnc76ba1428ae5"
     }
     }

    useEffect(()=>{
        fetchData(url,parameters,ActionTypes.FETCH_INITIAL_USER_DATA)
    },[])
    



    let urlWithText = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`
    useEffect(()=>{
        fetchData(urlWithText, params,ActionTypes.FETCH_LOCATION);
    },[location])


    
    


    const fetchData = async  ( url:string,params:{},type:ActionTypes) =>{
        // let fetchData= null;
        // let error = null;
    //    let loading = true;
    
        try {
            const res = await fetch(url, params);
    
             if (res.status >= 200 || res.status <= 299 ) {
                 const data   = await res.json();
                dispatch({type:type,payload:data})
             }
         } catch (err) {
                 console.log(err)
            //    return error = err;
         }
         
       
      }



 
    const  onClickHandler = () => {

            navigator.geolocation.getCurrentPosition((PositionCallback) => {
            const {latitude, longitude} = PositionCallback.coords;
                // dispatch({type: ActionTypes.FETCH_NEW_GEOLOCATION,payload:{lat:latitude,lng:longitude}})
                const url = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${latitude}&long=${longitude}&format=json&u=c`
                fetchData(url,params,ActionTypes.FETCH_NEW_LOCATION_WITH_LAT_LNG)
           })    
    }
    const  onClickBtnHandler = () => {
        if (inputValue.trim() === "") {
            return;
        }
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${inputValue}&format=json&u=c`
        fetchData(url,params,ActionTypes.FETCH_NEW_LOCATION)
    }
        

  return (
<SearchLocationMethodsElement >
    
    <div className="search-container">
        <div className="search-input-container">
            <FaSearchLocation className="icon-search"/>
                <input type="text" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}/>
                <button className="btn" onClick={onClickBtnHandler}>GO</button>
        </div>
        <IoLocationSharp className="icon-location" onClick={onClickHandler}/>
    </div>
</SearchLocationMethodsElement >
);
};

export default SearchLocationMethods;


const SearchLocationMethodsElement = styled.div`
        /* Search  */
      .search-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
      }
`


