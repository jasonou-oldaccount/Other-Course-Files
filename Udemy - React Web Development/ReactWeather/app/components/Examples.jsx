var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Oakland'>Oakland, CA</Link>
				</li>
				<li>
					<Link to='/?location=sanmateo'>San Mateo, CA</Link>
				</li>
			</ol>
		</div>
	);
}

module.exports = Examples;
