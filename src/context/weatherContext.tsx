import React,{createContext,Dispatch,ReactNode,useContext,useEffect,useReducer} from 'react';

import { Action, ActionTypes, defaultLocationData, parameters, params, SearchGeolocationType, searchIpUrl, Themes } from './constants ';

import { reducer } from './weatherReducer';


export interface weatherContextState {
         location: string;
        defaultTemperatureMetric: string;
        locationData:SearchGeolocationType |null ;
        url: string;
        isLoading:boolean;
        error:string;
        theme:string;
        isThemeBtnClicked:boolean;

}

const initialState : weatherContextState = {
    location:"Vienna",
    defaultTemperatureMetric:"c",
    locationData:null,
    url:"",
    isLoading:false,
    error:"",
    theme:Themes.DEFAULT,
    isThemeBtnClicked: false
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



    useEffect(()=>{
        fetchData(state.url, params,ActionTypes.FETCH_LOCATION);
    },[state.url])     
    


        
    useEffect(()=>{
        fetchData(searchIpUrl,parameters,ActionTypes.FETCH_INITIAL_USER_DATA)
    },[])


     const fetchData = async  ( url:string,params:{},type:ActionTypes) =>{
     
        try {
            const res = await fetch(url, params);
    
             if (res.status >= 200 || res.status <= 299 ) {
                 const data   = await res.json();
                dispatch({type:type,payload:data})
             }
         } catch (err) {
            //    return error = err;
         }
         
       
      }


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