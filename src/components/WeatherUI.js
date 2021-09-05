import React from 'react';
import SearchTermInput from "./SearchTermInput";
import Error from "./Error";
import Date from "./Date";
import WeatherCondition from "./WeatherCondition";
import {connect} from "react-redux";
import '../index.css'

const WeatherUi = ({data,Loading}) => {
    if(Loading.IsInLoading){
        return (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
            >
              <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
              <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
              <p className="w-1/3 text-center text-white">
                This may take a few seconds, please don't close this page.
              </p>
            </div>
        );
    }
    
    return (
        <div className="sm:max-w-full space-y-4 text-center max-h-screen">
            <SearchTermInput/>
            <Error/>
            <h1 className="font-normal text-5xl my-2 text-white">{data.name || 'city'}</h1>
            <Date/>
            <h1 className="h1-temp font-bold text-white">{data.main ? `${Math.round(data.main.temp)}` : 'Temp'}°<span
                className="font-medium">c</span></h1>
            <WeatherCondition/>
            <h1 className="font-bold text-white">{data.main ? `${Math.floor(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c` : 'min / max'}</h1>
        </div>
    );
};
const mapStateToProps = ({data,Loading}) => {
    return {
        data,
        Loading
    }
}
export default connect(mapStateToProps, null)(WeatherUi);