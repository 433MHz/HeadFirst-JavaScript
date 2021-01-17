var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    fuel: 0,

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            if(this.fuel > 0){
                alert(this.make + " " + this.model + " Robi: brum wrrrr!");
            }
            else{
                alert("Brakuje paliwa");
            }
        }
        else{
            alert("Najpierw musisz uruchomić silnik");
        }
    },

    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    fuel : 0,

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            if(this.fuel > 0){
                alert(this.make + " " + this.model + " Robi: brum wrrrrr!");
            }
            else{
                alert("Brakuje paliwa");
            }
        }
        else{
            alert("Najpier musisz włączyć silnik");
        }
    },

    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};

var taxi = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    fuel: 0,

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            if(this.fuel > 0){
                alert(this.make + " " + this.model + " robi: brum wrrrr!");
            }
            else{
                alert("Brakuje paliwa");
            }
        }
        else{
            alert("Najpierw musisz włączyć silnik!");
        }
    },

    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};

cadi.addFuel(1);
chevy.addFuel(1);
taxi.addFuel(1);

cadi.start();
chevy.start();
taxi.start();

cadi.drive();
chevy.drive();
taxi.drive();

