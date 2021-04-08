import React from 'react';
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/clouds.png";
import {connect} from "react-redux";
import '../index.css'

const Container = ({data, children}) => {
    const conditions = ['Clear', 'Dust', 'Ash', 'Squall', 'Smoke', 'Tornado', 'Sand'];
    const weatherCondition = data.weather ? data.weather[0].main : null;
    return (
        <div className="ui-container"
             style={{background: `url(${conditions.includes(weatherCondition) ? sunny : cloudy}) center fixed`}}>
            {children}
        </div>
    );
};


const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, null)(Container)
