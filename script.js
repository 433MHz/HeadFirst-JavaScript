var zmiennaGlobalna = 1;


function funkcja(parametr1, parametr2){
    var zmiennaLokalna;
    zmiennaLokalna = parametr1 + parametr2;
    return zmiennaLokalna;
}

argument1 = 5;
argument2 = 10;

zmiennaGlobalna = funkcja(argument1, argument2);
console.log(zmiennaGlobalna);