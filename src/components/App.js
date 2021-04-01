import React from "react";
import {connect} from "react-redux";
import {fetchData, getInputValue} from "../actions";

// import reducers from '../reducers'
class App extends React.Component {

    componentDidMount() {
        console.log(this.props.data.data)
        console.log(this.props.inputValue)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchData()
    }

    handleChange = (e) => {
        this.props.getInputValue(e.target.value)
    }

    renderContent() {
        const {data} = this.props;
        return (
            <div key={data.id}>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <label htmlFor="input"><h2>Enter City: </h2></label>
                    <br/>
                    <input onChange={this.handleChange}
                           value={this.props.city} type="text"
                           name="input"/>
                </form>
                <h1>City: {data.name}</h1>
                <h1>Country: {data.sys ? data.sys.country : ''}</h1>
                <h1>Timezone: {data.timezone}</h1>
                <h1>Temp: {data.main ? data.main.temp : ''}</h1>
                <h1>Maximum temp: {data.main ? data.main.temp_min : ''}</h1>
                <h1>Maximum temp: {data.main ? data.main.temp_max : ''}</h1>
                <h1>weather: {data.weather ? `${data.weather[0].main}  ${data.weather[0].description}` : ''}</h1>
            </div>
        )
    }

    render() {
        return (
            <>
                {this.renderContent()}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        city: state.city.searchTerm
    }
}
export default connect(mapStateToProps, {
    fetchData,
    getInputValue
})(App)
