import React, { useState } from 'react';
import { BsToggle2Off, BsToggle2On, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { FaSearchLocation } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { ActionTypes,Themes } from '../context/constants ';
import { useWeatherContext } from '../context/weatherContext';

const  WeatherSearch :React.FC = () => {
    
    const {state:{locationData,location,isThemeBtnClicked},dispatch } = useWeatherContext(); 
    const [inputValue , setInputValue] = useState("");


    const  onClickBtnHandler = () => {
        if (inputValue.trim() === "") {
            return;
        }
        dispatch({type:ActionTypes.FETCH_NEW_LOCATION ,payload:inputValue});
     }
  
    const  onClickHandler = () => {
      navigator.geolocation.getCurrentPosition((PositionCallback) => {
      const {latitude, longitude} = PositionCallback.coords;
          dispatch({type: ActionTypes.FETCH_NEW_GEOLOCATION,payload:{lat:latitude,lng:longitude}})   
     })    
  }


    const onClickBtnOn = () =>{
        dispatch({type:ActionTypes.THEME_TOGGLE_ON,payload:{isToggleOn:true,theme:Themes.DARK}})
    }

    const onClickBtnOff = () =>{
        dispatch({type:ActionTypes.THEME_TOGGLE_OFF,payload:{isToggleOn:false,theme:Themes.DEFAULT}})
    }


    let displaySearch:(JSX.Element|null)   =  null

    if (locationData) {
        displaySearch = <div className="search-input-container">
                            <IoLocationSharp className="icon-location icons" onClick={onClickHandler}/>
                            <div className="box-search">
                                <input type="text" value={inputValue} className="input"  onChange={(e)=>setInputValue(e.target.value)}/>
                                {/* <button className="button" >  </button> */}
                                <FaSearchLocation className="icon-search icons" onClick={onClickBtnHandler} />
                            </div>   
                            {isThemeBtnClicked ? <BsToggle2On className = "toggleBtn-on icons" onClick={onClickBtnOff}/>:<BsToggle2Off className = "toggleBtn-off icons" onClick={onClickBtnOn}/> }
                        </div>
    }


  return (
    <WeatherSearchElement >
           {displaySearch}     
    </WeatherSearchElement >
);
};

export default WeatherSearch;


const WeatherSearchElement = styled.div`

        .search-input-container{
            padding-top: 1rem;
            display: flex;
            justify-content:space-around;
            align-items:center;
        
        }

        .box-search{

            position:relative;
        }

        .input{
            padding: 0.4rem 0.3rem 0.4rem 1.6rem ;
            border-radius: 5px;
            /* margin: 0 0.4rem; */
            
        }

        .icon-search{
            position: absolute;
            left: 2%;
            bottom: 10%;
       
        
        }

        .icon-search:hover{
            color:#14ad14;
            transform: scale(1.1);
        }
        .icon-location{
            /* margin-left: 0.4rem; */
        }

        .icon-location:hover{
            color:#14ad14;
            transform: scale(1.1);
        }


        .icons{
            font-size:1.5rem;
            color: #4361e7;
            transition: var(--transition);
        }

      
        .toggleBtn-on{
            font-size:1.8rem;
        }

        .toggleBtn-off{
            font-size:1.8rem;
        }


       
        .toggleBtn-off:hover{
            
            color:#14ad14;
            
          
        }
        .toggleBtn-on:hover{
            
            color:#14ad14;
            
          
        }

    
`