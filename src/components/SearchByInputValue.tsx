import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionTypes, params } from '../context/constants ';
import { useWeatherContext } from '../context/weatherContext';


const  SearchByInputValue :React.FC = () => {
  const {dispatch} =  useWeatherContext();
  const [inputValue ,setInputValue] = useState<string>("")  
  
  // console.log(inputValue)

  const onChangeHandler = () => {
    console.log("click")

      dispatch({type:ActionTypes.FETCH_NEW_LOCATION_INPUT_VALUE,payload:inputValue})
      
  };
  


  return (
<SearchByInputValueElement >
    <input type="text"  value = {inputValue}  onChange={ e =>setInputValue(e.target.value)}/>
  { inputValue != "" ? <button className="btn" onClick={  onChangeHandler}>Go</button> : null}
</SearchByInputValueElement >
);
};

export default SearchByInputValue;


const SearchByInputValueElement = styled.div``