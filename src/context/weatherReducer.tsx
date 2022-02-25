
import { Action, ActionTypes } from "./constants ";
import { weatherContextState } from "./weatherContext";

type ReducerType = (state : weatherContextState ,action:Action) => weatherContextState;




export const reducer : ReducerType = (state,action) => {
   let url = "";
   switch (action.type) {
         
         case  ActionTypes.FETCH_LOCATION:
            return ({...state,locationData:action.payload});
         case  ActionTypes.FETCH_INITIAL_USER_DATA:
             const{city}  = action.payload
            url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`
         return ({...state,url:url});
         case  ActionTypes.FETCH_NEW_GEOLOCATION:
            const {lat,lng} = action.payload;
            url = `https://yahoo-weather5.p.rapidapi.com/weather?lat=${lat}&long=${lng}8&format=json&u=c`
            return ({...state,url:url});
         case  ActionTypes.FETCH_NEW_LOCATION:
            url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${action.payload}&format=json&u=c`
            return ({...state,url:url });
         case  ActionTypes.THEME_TOGGLE_ON:
            return ({...state,isThemeBtnClicked:action.payload});
         case  ActionTypes.THEME_TOGGLE_OFF:
            return ({...state,isThemeBtnClicked:action.payload});
      default:
         return state;
}
}