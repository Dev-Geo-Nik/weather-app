export enum ActionTypes {
    FETCH_INITIAL_USER_DATA = "FETCH_INITIAL_USER_DATA",
    FETCH_LOCATION = "FETCH_LOCATION",
    FETCH_NEW_GEOLOCATION = "FETCH_NEW_GEOLOCATION",
    FETCH_NEW_LOCATION  = "FETCH_NEW_LOCATION",
    FETCH_NEW_LOCATION_WITH_LAT_LNG = "FETCH_NEW_LOCATION_WITH_LAT_LNG",
    THEME_TOGGLE_ON = "THEME_TOGGLE_ON",
    THEME_TOGGLE_OFF = "THEME_TOGGLE_OFF",
}


// export enum PayloadTypes{}

export type Action = {
    type: ActionTypes;
    payload: any;
}



export enum Themes{
    DEFAULT = "DEFAULT",
    DARK = "DARK",
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

export const defaultLocationData  = {

    

        location: {
            city:"Vienna",
            region: "Vienna",
            woeid: 551801,
            country: "Austria",
            lat: 48.202541,
            long: 16.368799,
            timezone_id: "Europe/Vienna"
        },
        current_observation: {
            wind: {
                chill: -2,
                direction: 295,
                speed:  17.6
    
            },
            atmosphere: {
                humidity: 70,
                visibility: 16.01,
                pressure: 1001,
                rising: 0
            },
            astronomy: {
                sunrise: "6:41 am",
                sunset: "5:35 pm"
            },
            condition: {
                code: 30,
                text: "Partly Cloudy",
                temperature: "3"
            },
    
            pubDate: 1645860600
        },
    
        forecasts: [
            {
                code: 39,
                date: 1645844400,
                day: "Sat",
                high: 7,
                low: 1,
                text: "Scattered Showers",
               
            },
            {
                code: 32,
                date: 1646103600,
                day: "Tue",
                high: 6,
                low: -3,
                text: "Sunny"
            },
            {
                code: 32,
                date: 1646103600,
                day: "Tue",
                high: 6,
                low: -3,
                text: "Sunny"
            },
            {
                code: 32,
                date: 1646103600,
                day: "Tue",
                high: 6,
                low: -3,
                text: "Sunny"
            },
            {
                code: 30,
                date: 1646362800,
                day: "Fri",
                high: 6,
                low: 0,
                text: "Partly Cloudy"
            },
            {
            code: 30,
            date: 1646449200,
            day: "Sat",
            high: 6,
            low: -1,
            text: "Partly Cloudy"
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
        "x-rapidapi-key": "e10973666fmsh8401609c340d96bp1f21b9jsn0ce5c8991ab2"
    }
}



export const searchIpUrl = "https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8";


export const parameters = {
 "method": "GET",
 "headers": {
     "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
     "x-rapidapi-key": "ebb163ffcdmsh8e13aa2f4cf52fap1a017ajsnc76ba1428ae5"
 }
 }