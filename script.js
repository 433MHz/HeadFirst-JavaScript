var taxi = {
    make: "SieMoCorp",
    model: "taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    show: function(){
        console.log("Car brand is " + this.make + " model is " + this.model + " color is " + this.color + " year is " + this.year);  
    }
};



taxi.show();
