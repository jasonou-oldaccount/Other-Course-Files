var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var {browserHistory} = require('react-router');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			// location: 'California',
			// temp: 50
			isLoading: false
		}
	},
	handleSearch: function(location) {
		// this.setState({
		// 	location: location,
		// 	temp: 23
		// });
		var that = this;

		this.setState({
			isLoading:true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			that.setState({
				isLoading:false,
				errorMessage: errorMessage.message
			});
		});
	},
	componentDidMount: function () {
		var location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			browserHistory.push('');
		}
	},
	componentWillReceiveProps(newProps) {
		var location = newProps.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location);
			browserHistory.push('');
		}
	},
	render: function() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center">Featching weather...</h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
			}
		}

		function renderError() {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
});

module.exports = Weather;
