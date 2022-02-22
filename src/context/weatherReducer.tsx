
import { Action, ActionTypes } from "./constants ";
import { weatherContextState } from "./weatherContext";

type ReducerType = (state : weatherContextState ,action:Action) => weatherContextState;




export const reducer : ReducerType = (state,action) => {
switch (action.type) {
      case  ActionTypes.FETCH_DEFAULT_LOCATION:
         return ({...state,locationData:action.payload});
      case  ActionTypes.FETCH_NEW_LOCATION_INPUT_VALUE:
         return ({...state,location:action.payload});
    default:
        return state;
}
}