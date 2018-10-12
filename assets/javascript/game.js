

        //array of letters the program will choose from
        var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

        // vars keeping track of the number of wins, losses and unused guesses
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;

        // array for letters already guessed by the user
        var guessedLetters = [ ];

        // function for keeping track of the various numbers
        function scorecard() {
            document.getElementById('wins').innerHTML = wins;
            document.getElementById('losses').innerHTML = losses;
            document.getElementById('guessesLeft').innerHTML = (" " + guessesLeft);
            document.getElementById('guessLog').innerHTML = (" " + guessedLetters);
        }

        var letter;
        var secretLetter;

        // function for resetting scores and clearing the guessedLetters array
        function reset () {
            guessesLeft = 9;
            guessedLetters = [];
            letter = alphabet[Math.floor(Math.random() * alphabet.length)]; // picking a letter from the array via a random index number
            secretLetter = letter;
            scorecard();
        }


        // ~~~~ actual game function begins here ~~~~ 
        
        function psychicGame () {

            // resets the game
            reset();
            
            // main game logic all triggered here by key-up
            document.onkeyup = function(event) {
            
                // var containting the letter on the key pressed
                var guess = event.key;

                console.log(secretLetter);


                for (g = 9; g > 0; g--) {
                    if (guess == secretLetter)
                    {
                        wins++;
                        reset();
                        break;
                    }
                    else if (guessesLeft == 0)
                    {
                        losses++;
                        reset();
                        break;
                    }
                    else 
                    {
                        guessesLeft--;
                        break;
                    }
                }

                guessedLetters.push(" " + guess);

                scorecard();

            }

        }

