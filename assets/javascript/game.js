var word_list = ["eleven", "demogorgon", "hopper", "hawkins", "experiment", "laboratory","russian", "gate", "demodogs", "rats", "eggo"];
var rand_index = Math.floor(Math.random()*word_list.length);
var win_word = word_list[rand_index];
var win_word_count = win_word.length;
var blank = "_ ";
var word_disp = "";
var letter_array = [];
var disp_array = [];
var num_guss = 10;
var letter_guss = [];
var g_over = true;
var wins = 0;
var word_id = document.getElementById("win_word_disp");
var guess_id = document.getElementById("num_guess");
var let_gus_id = document.getElementById("letters_used");
var wins_id = document.getElementById("wins");

startup();
// guess_id.textContent = "Number of Guesses Left: " + num_guss;
// word_id.textContent = word_disp;
// word_disp = "";

function startup() {
    rand_index = Math.floor(Math.random()*word_list.length);
    win_word = word_list[rand_index];
    win_word_count = win_word.length;
    word_disp = ""
    letter_array = [];
    disp_array = [];
    letter_guss = [];
    g_over = true;
    create_disp();
    disp_conv();
    console.log(win_word);
    console.log(word_disp);
    guess_id.textContent = "Number of Guesses Left: " + num_guss;
    word_id.textContent = word_disp;
    word_disp = "";
};


// console.log(win_word);
// console.log(word_disp);
function create_disp () {
    for (var j=0;j<((win_word_count-1)*2)+1;j=j+2){
        disp_array[j]="_";
        disp_array[j+1]=" ";
    }
}

create_disp();

function disp_conv() {
    for (var k=0;k<disp_array.length;k++){
        word_disp = word_disp + disp_array[k];
    }
}

disp_conv();

// console.log(word_disp)

document.onkeyup = function(event) {
    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = event.key.toLowerCase();
    word_disp = "";

    if (num_guss == 0) {
        guess_id.textContent = "You used up all your tries, refresh page or click new word to play again."
    } 
    else if (g_over) {
            if (letter_guss.includes(letter)){
                // do something
            }
            else{
                if(event.keyCode > 64 && event.keyCode < 91){
                    letter_guss.push(letter);
                    if(win_word.includes(letter)){
                        for (var i = 0; i < win_word_count; i++) {
                            if (letter === win_word.charAt(i)) {
                                disp_array[i*2] = letter;
                            }
                        }
                        disp_conv()
                        word_id.textContent = word_disp;
                        let_gus_id.append(letter + " ");

                        if(word_id.innerText.includes("_")) {
                            // do something
                        }
                        else {
                            guess_id.innerText = "You Win!! - Please refresh page or click new word to play again.";
                            g_over =false;
                            wins++;
                            wins_id.innerText = "Number of Wins: " + wins;
                            startup();
                        }
                    }
                    else {
                        num_guss--;
                        guess_id.textContent = "Number of Guesses Left: " + num_guss;
                        let_gus_id.append(letter + " ");
                    }
                }
                else {
                    // do something
                }
            }
        }
        
}
