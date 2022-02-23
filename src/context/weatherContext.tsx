import React,{createContext,Dispatch,ReactNode,useContext,useEffect,useReducer} from 'react';

import { Action, ActionTypes, params, SearchGeolocationType } from './constants ';

import { reducer } from './weatherReducer';


export interface weatherContextState {
         location: string;
        defaultTemperatureMetric: string;
        locationData:SearchGeolocationType | null;
        latitude : number | null;
        longitude : number | null;
}

const initialState : weatherContextState = {
    location:"Vienna",
    defaultTemperatureMetric:"c",
    locationData:null,
    latitude:null,
    longitude:null
    
}



type ContextHook = () => { 
state:weatherContextState,
dispatch:(action:Action)=>void
}


export const weatherContext = createContext<{
state:weatherContextState;
dispatch:Dispatch<Action>;
}>({
state:initialState,
dispatch:()=>{}
})


//Provider name must start with capital letter
export const WeatherContextProvider = ({
    
    children,
    }:{
    children: ReactNode;
    }) => {
    const [state, dispatch] = useReducer (reducer,initialState);

    return(
    <weatherContext.Provider value = {{ state, dispatch }}>
    {children}
    </weatherContext.Provider>
)};



//Capitalize the first character after the word use
export const useWeatherContext : ContextHook = () => {
const {state,dispatch} = useContext(weatherContext);
return {state, dispatch};
};