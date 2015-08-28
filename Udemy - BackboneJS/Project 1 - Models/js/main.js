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
            return "Title is required!";
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

var Dog = Animal.extend({
    walk: function() {
        console.log("Dog walking...");
    }
});

var dog = new Dog();
dog.walk();