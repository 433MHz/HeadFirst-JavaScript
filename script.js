var taxi = {
    make: "SieMoCorp",
    model: "taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341
};


function prequal(car){
    if(car.mileage > 10000){
        return false
    }else if(car.year > 1960){
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);

if(worthALook){
    console.log("Car " + taxi.make + " is a good car");
}else{
    console.log(taxi.make + " is a crap");
}