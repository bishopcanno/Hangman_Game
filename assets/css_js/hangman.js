var wordsArray = ["horse", "cowboy", "posse", "range", "campfire", "saloon", "gunfight", "stampede", "wagon"];


// function letterCheck(a, b){
    
// }
document.getElementById("beginBtn").onclick = function(event){
    // var reset = true
    var guessCounter = 8;
    var blankWord = "";
    var compGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    for(i = 0; i < compGuess.length; i++){
       blankWord = blankWord + "*";
    }
    
    document.getElementById("wordDisplay").innerHTML = blankWord;
    document.getElementById("testDisplay").innerHTML = compGuess;
    document.getElementById("guessDisplay").innerHTML = "Guesses until execution: " + guessCounter;

    document.onkeypress = function(event) {
        var  userGuess = event.key.toLocaleLowerCase();
        // var reset = false;
        // var guessDisplayH2 = document.querySelector('#guessDisplay');
        if(compGuess.indexOf(userGuess) !== -1){
            
        
            
            for(x = 0; x < compGuess.length; x++){
                var compRunCheck = compGuess.indexOf(x);
                var checkTrue = compRunCheck.includes(userGuess);
                console.log(checkTrue);
                if(userGuess.match(compGuess.indexOf(x))){
                    
                    // blankWord.indexOf(x).push(compGuess.indexOf(x));
                    // document.getElementById("wordDisplay").innerHTML = blankWord;
                    // correctStorageString.push(String.fromCharCode(x));
                } 

                
                // var correctGuess = compGuess.indexOf(userGuess);
                // if(compGuess.indexOf(userGuess, correctGuess )){
    
                // }
    
            }
            
            // blankWord = correctStorageArrays;
            // document.getElementById("wordDisplay").innerHTML = blankWord;
           

            
            
        // } else {

        } else {
            guessCounter--;
            document.getElementById("guessDisplay").innerHTML = "Guesses until execution: " + guessCounter;
            if(guessCounter === 0){
                alert("You've been hung");
            }
        
        }
    }
};
