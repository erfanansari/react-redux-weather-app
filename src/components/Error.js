import React from 'react';
import {connect} from "react-redux";
import '../index.css'

const Error = ({data}) => {
    return (
        <>
            {
                data.cod !== 200 && data.cod !== undefined ?
                    <h1 className="font-normal text-2xl text-red-500">{`Error${data.cod}: ${data.message}`}</h1> : ''
            }
        </>
    );
};

const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, null)(Error)


