var taxi = {
    make: "SieMoCorp",
    model: "taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    isRunning: false,
    turnOn: function(){
        this.isRunning = true;
    },
    turnOff: function(){
        this.isRunning = false;
    },
    drive: function(){
        if(this.isRunning){
            alert("Wrruuum");
        }
        else{
            alert("First you need to turn on car");
        }
    }
};


taxi.turnOn();
taxi.drive();