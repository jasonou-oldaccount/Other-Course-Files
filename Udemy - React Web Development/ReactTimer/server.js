// Loading in modules
var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if(req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

// Tell server which folder to use
// @param (folder_name)
app.use(express.static('public'));

// Starts the server
// @param (port, action)
app.listen(PORT, function() {
	console.log('Express server is up on port ' + PORT);
});