export enum ActionTypes {
    FETCH_INITIAL_USER_DATA = "FETCH_INITIAL_USER_DATA",
    FETCH_LOCATION = "FETCH_LOCATION",
    FETCH_NEW_GEOLOCATION = "FETCH_NEW_GEOLOCATION",
    FETCH_NEW_LOCATION  = "FETCH_NEW_LOCATION",
    FETCH_NEW_LOCATION_WITH_LAT_LNG = "FETCH_NEW_LOCATION_WITH_LAT_LNG",
}


// export enum PayloadTypes{}

export type Action = {
    type: ActionTypes;
    payload: any;
}






export type SearchGeolocationType = {

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


export type IpLocationOfVisitorType = {
    continent:string,
    country:string,
    zipCode: string,
    accuracyRadius: number,
    flag: string,
    city: string,
    timezone: string,
    latitude:number,
    countryGeoNameId: number,
    gmt:string,
    network: string,
    currencyName: string,
    countryNativeName: string,
    stateGeoNameId: number,
    phoneCode: string,
    state: string,
    continentCode: string,
    longitude:number, 
    currencyNamePlural: string,
    cityGeoNameId: number,
    languages:string,
    numOfCities: number,
    org: string,
    ip: string, 
    currencySymbol: string,
    currencySymbolNative: string,
    isEU: string,
    countryTLD: string,
    countryCapital: string,
    metroCode:null,
    continentGeoNameId: number,
    stateCode: string,
    countryISO2: string,
    numOfStates: number,
    countryISO3: string,
    currencyCode: string,
    asNo: number,
    status: number
} 

export const params = {
    method: "GET",
    headers: {
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
        "x-rapidapi-key": "ebb163ffcdmsh8e13aa2f4cf52fap1a017ajsnc76ba1428ae5"
    }
}