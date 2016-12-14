var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather application using React. I have built this for The Complete React Web App Developer Course.</p>
			<p>Here are some of the tools that I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react/" target="_blank">React</a> - This was the JaveScript framework used.
				</li>
				<li>
					<a href="http://openweathermap.org/" target="_blank">Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name.
				</li>
				<li>
					<a href="http://foundation.zurb.com/" target="_blank">Foundation</a> - I used Foundation for responsive design.
				</li>
				<li>
					<a href="https://www.heroku.com/" target="_blank">Heroku</a> - I used Heroku for hosting.
				</li>
			</ul>
		</div>
	);
}

module.exports = About;
