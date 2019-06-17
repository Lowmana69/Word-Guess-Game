/*===================================================================
======================= W O R D B A N K S ===========================
===================================================================*/


var taylorWords = ['HotDog', 'Western Digital', 'Quiet Time Clap'];
var villians = ['Hannibal Lecter', 'Darth Vader', 'Dr. Evil'];
var themeSongs = ['Harry Potter', 'James Bond', 'Haunted Mansion'];
var tvShowsThemeSongs = ['Samuel L. Jackson', 'Leonidas', 'Chewbecca'];
var celebrities = ['Beverly Hillbillies', 'Happy Days', 'Gilligan\'s Island'];

/*===================================================================
======================= V A R I A B L E S ===========================
===================================================================*/


var duplicates = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
];

var selection = '';

var lettersContainer = [];

var blanksHolder = 0;

var successesAndSpaces = [];

var wrongGuess = [];

/*===================================================================
---------------------- C O U N T E R S !! ---------------------------
===================================================================*/


var winCounter = 0;

var loseCounter = 0;

var guessesLeftCounter = 15;

var correctGuessCounter = 0;

/*===================================================================
======================= F U N C T I O N S ===========================
===================================================================*/


function playAgain() {
    selection = celebrities[Math.floor(Math.random) * celebrities.length];
    lettersContainer = selection.split('');
    blanksHolder = lettersContainer.length;

    usersGuess = 0;
    correctGuessCounter = 0;
    guessesLeftCounter = 15;
    wrongGuess = [];
    successesAndSpaces = [];
    duplicates = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'
    ];
    test = false;
    letsPlay();


}

function letsPlay() {
    selection = celebrities[Math.floor(Math.random) * celebrities.length];
    lettersContainer = selection.split('');
    blanksHolder = lettersContainer.length;

    usersGuess = 0;
    correctGuessCounter = 0;
    guessesLeftCounter = 15;
    wrongGuess = [];
    successesAndSpaces = [];
    duplicates = [
        'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'
    ];
    
    for(var i = 0; i < blanksHolder; i++) {
        blanksHolder.push('_');
        document.getElementById().innerHTML = blanksHolder;
    }

    document.getElementById("word-blanks").innerHTML = blanksHolder.join(' ');
    document.getElementById("wins").innerHTML = winCounter;
    document.getElementById("loses").innerHTML = loseCounter;
    document.getElementById("remaining").innerHTML = guessesLeftCounter;
    document.getElementById("guesses").innerHTML = wrongGuess;
}

function compareAndContrast(userKey) {
    if(selection.indexOf(userKey) > -1) {
        for(var i = 0; i <blanksHolder; i++) {
            if(lettersContainer[i] === userKey) {
                correctGuessCounter++;
                blanksHolder[i] = userKey;
                document.getElementById("word-blanks").innerHTML = blanksHolder.join{'_'};
            }
        }
    } else {
        wrongGuess.push(userKey);
        guessesLeftCounter--;

        document.getElementById("remaining").innerHTML = guessesLeftCounter;
        document.getElementById("guesses").innerHTML = wrongGuess;
    }
}

function results() {
    if(correctGuessCounter === blanksHolder) {
        winCounter++;
        document.getElementById("wins").innerHTML = winCounter;
        alert();
        playAgain();
    } else if(guessesLeftCounter === 1) {
        alert();
    } else if(guessesLeftCounter === 0) {
        loseCounter++;
        document.getElementById("loses").innerHTML = loseCounter;
        alert();
        playAgain();
    }
}

/*===================================================================
======================= M A I N - A C T I O N =======================
===================================================================*/


letsPlay();

document.onkeyup = function(event) {
    test = true;
    var usersGuess = event.key;
    for(var i = 0; i < duplicates.length; i++) {
        if(usersGuess === duplicates[1] && test === true) {
            var cutInHalf = duplicates.splice(i,1);
            compareAndContrast(usersGuess);
            results();
        }
    }
}