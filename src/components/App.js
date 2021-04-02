import React from "react";
import {connect} from "react-redux";
import {fetchData, getInputValue} from "../actions";
import '../index.css'

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

    renderDate() {
        const now = new Date();
        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            weekday: 'long'
        };
        return new Intl.DateTimeFormat('en-US', options).format(now);
    }

    renderContent() {
        const {data} = this.props;
        return (
            <div className="sm:max-w-full space-y-4 text-center"
                 key={data.id}>
                <form className="" onSubmit={this.handleSubmit}>
                    <input
                        className="border-b-2 border-gray-500 text-center mt-16 bg-transparent mb-9 p-2 outline-none font-medium text-xl"
                        onChange={this.handleChange}
                        value={this.props.city} type="text"
                        name="input"/>
                </form>
                <h1 className="font-normal text-5xl my-2 text-white">{data.name || 'city'}</h1>
                <h1 className="tracking-wider text-gray-200 font-medium py-0.5">{this.renderDate()}</h1>
                <h1 className="font-bold text-white text-7xl border-b-2 border-white border-dashed inline-block pb-6">{data.main ? `${Math.round(data.main.temp)}` : '' || 'Temp'}°<span
                    className="font-medium">c</span></h1>
                <div className="flex items-center justify-center">
                    <div>
                        <h1 className="font-bold text-2xl text-white">{data.weather ? `${data.weather[0].main}` : '' || 'weather'}</h1>
                        <h1 className="font-medium text-gray-100">{data.weather ? `${data.weather[0].description}` : '' || 'description'}</h1>
                    </div>
                    {/*{data.weather ? console.log('yes') : console.log('no')}*/}
                    {data.weather ? <img
                        src={`http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : ''}@2x.png`}
                        alt="icon"/> : ''}
                </div>
                <h1 className="font-bold text-white">{data.main ? `${Math.floor(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c` : '' || 'min / max'}</h1>
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
