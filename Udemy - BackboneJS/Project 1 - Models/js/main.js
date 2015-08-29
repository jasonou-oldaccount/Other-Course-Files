// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//===== Creating Models and working with Attributes =====
var Song = Backbone.Model.extend({
    // Initialized when web page/model is called
    initialize: function() {
        console.log("A new song has been created.");
    },
    
    // Default variables
    defaults: {
        genre: "Jazz"
    },
    
    // Validation, if invalid, must return a string
    validate: function(attrs) {
        if(!attrs.title)
            return "Title is required";
    }
});

// Calls on the BackboneJS Model
var song = new Song({
    title: "Blue in Green",
    artist: "Miles Davis",
    publishYear: 1959
});

// Invalid song for testing validation out
var invalidSong = new Song();
invalidSong.isValid();
var lastError = invalidSong.validationError;


//===== Inheritance =====
var Animal = Backbone.Model.extend({
    walk: function() {
        console.log("Animal is walking...");
    }
});

// Overriding
var Dog = Animal.extend({
    walk: function() {
        Animal.prototype.walk.apply(this);
        console.log("Dog walking...");
    }
});

var dog = new Dog();
dog.walk();

//===== Section 3 - Models Project =====
var Vehicle = Backbone.Model.extend({
    // Initialized when web page/model is called
    initialize: function() {
        console.log("A new vehicle has been created.");
    },
    
    // Server and ID
    idAttribute: "carId",
    
    urlRoot: "/api/songs",
    
    // Start Method
    start: function() {
        console.log("Vehicle has started");
    },
    
    // Validation, if invalid, must return a string
    validate: function(attrs) {
        if(!attrs.registrationNumber)
            return "Registration Number is required";
    }
});

// Car model that extends Vehicle and overrides start
var Car = Vehicle.extend({
    start: function() {
        console.log("Car with registration number " + this.get("registrationNumber") + " started.");
    }
});

// Initialised instance of car with attributes registrationNumber and color
var car = new Car({
    registrationNumber: "XLI887", 
    color: "Blue"
});
// Checks if car is valid then starts the car
if(car.isValid()) {
    car.start();
} else {
    console.log(car.validationError);
}

// deletes registrationNumber and prints out error
car.unset("registrationNumber");
if(!car.isValid()) 
    console.log(car.validationError);
// sets back registrationNumber and checks for error
car.set("registrationNumber", "XLI887");
if(car.isValid()) {
    car.start();
} else {
    console.log(car.validationError);
}