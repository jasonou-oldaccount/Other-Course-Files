function a() {
    console.log(this);
    this.newvariable = 'Hello';
}

var b = function() {
    console.log(this);
};

a();

console.log(newvariable);

b();

var c = {
    name: 'The C Object',
    log: function() {
        var self = this;
        
        self.name = 'Updated C Object';
        
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;
        }
        
        setname('Updated again! The C Object');
        console.log(self);
    }
};

c.log();