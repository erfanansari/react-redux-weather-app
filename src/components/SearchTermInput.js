import React from 'react';
import {connect} from "react-redux";
import {fetchData, getInputValue,ChangeLoadingStatus} from "../actions";
import '../index.css'

const SearchTermInput = props => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.ChangeLoadingStatus(true);
        await props.fetchData()
        props.ChangeLoadingStatus(false);
    }

    const handleChange = (e) => {
        props.getInputValue(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="enter your city name"
                className="search-term-input text-center"
                onChange={handleChange}
                value={props.searchTerm} type="text"
                name="input"/>
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
    getInputValue,
    ChangeLoadingStatus
})(SearchTermInput);
