
import { Action, ActionTypes } from "./constants ";
import { weatherContextState } from "./weatherContext";

type ReducerType = (state : weatherContextState ,action:Action) => weatherContextState;




export const reducer : ReducerType = (state,action) => {
      
switch (action.type) {

      case  ActionTypes.FETCH_LOCATION:
         return ({...state,locationData:action.payload});
      case  ActionTypes.FETCH_INITIAL_USER_DATA:
         const {city,latitude,longitude} = action.payload
      return ({...state,location:city,latitude:latitude,longitude:longitude});
      case  ActionTypes.FETCH_NEW_LOCATION:
         return ({...state,locationData:action.payload});
      case  ActionTypes.FETCH_NEW_LOCATION_WITH_LAT_LNG:
         return ({...state,locationData:action.payload });
      // case  ActionTypes.FETCH_NEW_LOCATION:
      //    return ({...state,locationData:action.payload});
    default:
        return state;
}
}