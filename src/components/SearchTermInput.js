import React from 'react';
import {connect} from "react-redux";
import {fetchData, getInputValue} from "../actions";
import '../index.css'

const SearchTermInput = props => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.fetchData()
    }

    const handleChange = (e) => {
        props.getInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                placeholder="enter your city name"
                className="search-term-input text-center"
                onChange={handleChange}
                value={props.searchTerm} type="text"
                name="input"/>
        
            <button type="submit" className="submit-button">
                Submit  
            </button>

        </form>
    )

}
const mapStateToProps = ({searchTerm}) => {
    return {
        searchTerm
    }
}
export default connect(mapStateToProps, {
    fetchData,
    getInputValue
})(SearchTermInput);
