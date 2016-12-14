var React = require('react');

var WeatherMessage = ({temp,location}) => {
	return (
		<h3 className="text-center">It's <b>{temp}&#8457;</b> in <b>{location}</b>.</h3>
	);
}

module.exports = WeatherMessage;
