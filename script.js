var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892,

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            alert(this.make + " " + this.model + " Robi: brum wrrrr!");
        }
        else{
            alert("Najpierw musisz uruchomić silnik");
        }
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

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            alert(this.make + " " + this.model + " Robi: brum wrrrrr!");
        }
        else{
            alert("Najpier musisz włączyć silnik");
        }
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

    started: false,

    start: function(){
        this.started = true;
    },

    stop: function(){
        this.started = false;
    },

    drive: function(){
        if(this.started){
            alert(this.make + " " + this.model + " robi: brum wrrrr!");
        }
        else{
            alert("Najpierw musisz włączyć silnik!");
        }
    }
};

for(var properties in chevy){
    console.log(chevy[properties]);
}

