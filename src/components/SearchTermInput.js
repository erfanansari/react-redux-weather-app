import React from 'react';
import {connect} from "react-redux";
import {fetchData, getInputValue} from "../actions";
import '../index.css'
class SearchTermInput extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchData()
    }

    handleChange = (e) => {
        this.props.getInputValue(e.target.value)
    }

    render() {
        return (
            <form className="" onSubmit={this.handleSubmit}>
                <input
                    placeholder="enter your city name"
                    className="search-term-input text-center"
                    onChange={this.handleChange}
                    value={this.props.searchTerm} type="text"
                    name="input"/>
            </form>
        )
    };

}

const mapStateToProps = ({data, searchTerm}) => {
    return {
        data,
        searchTerm
    }
}
export default connect(mapStateToProps, {
    fetchData,
    getInputValue
})(SearchTermInput);
