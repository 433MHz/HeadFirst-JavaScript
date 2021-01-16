

var scores = [60,50,60,58,54,54,58,50,52,54,48,69,34,55,51,52,44,51,69,64,66,55,52,61,46,31,57,52,44,18,41,53,55,61,51,44];
var costs =  [25,27,25,25,25,25,33,31,25,29,27,22,31,25,25,33,21,25,25,25,28,25,24,22,20,25,30,25,24,25,25,25,27,25,26,29]

function printAndGetHighScores(scores){
    var output;
    var highScore = 0;
    for(var i = 0; i < scores.length; i++){
        output = "Płyn do baniek numer: " + i + " wynik: " + scores[i];
        console.log(output);

        if(scores[i] > highScore){
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore){
    var bestSolutions = [];
    for(var i = 0; i< scores.length; i++){

        if(highScore == scores[i]){
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function getMostCostEfective(bestSolutions, costs){
    var preBest = 100;
    var index = 0;
    for(var i = 0; i < bestSolutions.length; i++){
        var best = costs[bestSolutions[i]];
        
        if(preBest > best){
            preBest = best;
            index = bestSolutions[i];
        }
    }
    return index;
}

var highScore = printAndGetHighScores(scores);
var bestSolutions = getBestResults(scores, highScore);
var mostEfective = getMostCostEfective(bestSolutions, costs);

console.log("Liczba prób: " + scores.length);
console.log("Największa ilość baniek: " + bestSolutions);
console.log("Najtańszy: " + mostEfective);