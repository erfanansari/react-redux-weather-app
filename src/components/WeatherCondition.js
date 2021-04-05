import React from 'react';
import {connect} from "react-redux";

import '../index.css'

const WeatherCondition = ({data}) => {
    return (
        <div className="flex-center">
            <div>
                <h1 className="font-bold text-2xl text-white">{data.weather ? `${data.weather[0].main}` : 'weather'}</h1>
                <h1 className="font-medium text-gray-100">{data.weather ? `${data.weather[0].description}` : 'description'}</h1>
            </div>
            {data.weather && <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="icon"/>}
        </div>
    );
};
const mapStateToProps = ({data, searchTerm}) => {
    return {
        data,
        searchTerm
    }
}
export default connect(mapStateToProps, null)(WeatherCondition);