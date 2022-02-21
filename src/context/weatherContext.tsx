import React,{createContext,Dispatch,ReactNode,useContext,useEffect,useReducer} from 'react';

import { Action, ActionTypes, defaultLocationUrl, params } from './constants ';

import { reducer } from './weatherReducer';


export interface weatherContextState {
         location: string;
        defaultTemperatureMetric: string;
}

const initialState : weatherContextState = {
    location:"Vienna",
    defaultTemperatureMetric:"c"
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
    fetchData(defaultLocationUrl,params,ActionTypes.FETCH_DEFAULT_LOCATION)
  },[])


    const fetchData = async  (link:string,params:{},type:ActionTypes) =>{
            
  //    let loading = true;
  
      try {
          const res = await fetch(link, params);
  
           if (res.status >= 200 || res.status <= 299 ) {
               const data   = await res.json();
              console.log(data);
               dispatch({type:type,payload:data});            
           }
       } catch (error) {
               console.log(error)
              // dispatch({type:ActionTypes.ERROR, payload:error})
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