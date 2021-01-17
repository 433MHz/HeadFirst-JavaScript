var taxi = {
    make: "SieMoCorp",
    model: "taxi",
    year: 1955,
    color: "żółty",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

console.log(taxi.color);

function prequal(car){
    car.color = "fioletowy";
}

prequal(taxi);


console.log(taxi.color);

