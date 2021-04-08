import React from 'react';
import SearchTermInput from "./SearchTermInput";
import Error from "./Error";
import Date from "./Date";
import WeatherCondition from "./WeatherCondition";
import {connect} from "react-redux";
import '../index.css'

const WeatherUi = ({data}) => {
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
const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, null)(WeatherUi);