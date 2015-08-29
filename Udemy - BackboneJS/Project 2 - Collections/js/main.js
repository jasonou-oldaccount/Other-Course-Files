// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//===== Adding and Deleting items in a Collection =====
var Song = Backbone.Model.extend();

// Creates Collection
var Songs = Backbone.Collection.extend({
    model: Song
});
// Adds to Collection
var songs = new Songs([
    new Song({ title: "Song 1" }),
    new Song({ title: "Song 2" }),
    new Song({ title: "Song 3" })
]);
// Adds to Collection
songs.add(new Song({ title: "Song 4" }));
// Grabs the first item in the Collection
var firstSong = songs.at(0);
// Finds the Collection with cid c1
var songWithIdC1 = songs.get("c1");
// Deletes the first Collection
songs.remove(firstSong);


//==== Working with Collections =====
var songs2 = new Songs();
// Adding allows adding at an index
songs2.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0 });
// Push uses stack
songs2.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));
// Returns array
var jazzsongs = songs2.where({ genre: "Jazz" });
// Returns first instance
var firstJazzSong = songs2.findWhere({ genre: "Jazz" });

console.log("Jazz Songs", jazzsongs);
console.log("First Jazz Song", firstJazzSong);
// Filter does more than just equality checks, whereas where only does equality checks
var filteredSongs = songs2.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);
// Filters songs with more than 100 downloads
var topDownloads = songs2.filter(function(song) {
    return song.get("downloads") > 100;
});

console.log("Top Downloads", topDownloads);
// Indexes through each of the songs
songs2.each(function(song) {
    console.log(song);
});

//===== Connecting to the Server =====
//var ServerSongs = Backbone.Collection.extend({
//    model: Song,
//    
//    url: "/api/songs"
//});
//
//var serverSongs = new ServerSongs();
//serverSongs.fetch({
//    data: {
//        page: 2
//    },
//    success: function(){},
//    error: function(){}
//});

//===== Project 2 - Backbone Collections =====
var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});
// Adds three cars to the collection
var cars = new Vehicles([
    new Vehicle({ registrationNumber: "XLI887", colour: "Blue" }),
    new Vehicle({ registrationNumber: "ZNP123", colour: "Blue" }),
    new Vehicle({ registrationNumber: "XUV456", colour: "Gray" })
]);
// Finds all the blue cars
var blueCars = cars.where({ colour: "Blue" });
console.log("Blue Cars", blueCars);
// Finds all the cars with registration number XLI887
var XLI887Car = cars.where({ registrationNumber: "XLI887" });
console.log("XLI887 Car", XLI887Car);
// Removes the car with Registration Number XLI887 from the collection
cars.remove(XLI887Car);
console.log("Removed the car with Registration Number XLI887", cars);
// Converts the collection to JSON
console.log("Collections of Cars in as a JSON Onject", cars.toJSON());
// Iterates through the Collection
cars.each(function(car) {
    console.log(car);
});

