export enum ActionTypes {
    FETCH_DEFAULT_LOCATION = "FETCH_DEFAULT_LOCATION",
    FETCH_NEW_LOCATION_INPUT_VALUE = "FETCH_NEW_LOCATION_INPUT_VALUE",
}


// export enum PayloadTypes{}

export interface Action {
    type: ActionTypes;
    payload?:any;
}


export type SearchByGeolocationType = {

    location: {
        city: string;
        region: string;
        woeid: number;
        country: string;
        lat: number;
        long: number;
        timezone_id: string
    },
    current_observation: {
        wind: {
            chill: number;
            direction: number,
            speed: number;

        },
        atmosphere: {
            humidity: number;
            visibility: number;
            pressure: number;
            rising: number;
        },
        astronomy: {
            sunrise: string;
            sunset: string;
        },
        condition: {
            code: number;
            text: string;
            temperature: string;
        },

        pubDate: number;
    },

    forecasts: [
        {
            day: string,
            date: number,
            low: string;
            high: number;
            text: string;
            code: number;
        }
    ]
}

export const defaultLocationUrl = "https://yahoo-weather5.p.rapidapi.com/weather?location=vienna&format=json&u=c";

export const params = {
    method: "GET",
    headers: {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": "ebb163ffcdmsh8e13aa2f4cf52fap1a017ajsnc76ba1428ae5"
    }
}