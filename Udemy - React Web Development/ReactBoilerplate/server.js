// Loading in modules
var express = require('express');

// Create our app
var app = express();

// Tell server which folder to use
// @param (folder_name)
app.use(express.static('public'));

// Starts the server
// @param (port, action)
app.listen(3000, function() {
	console.log('Express server is up on port 3000');
});