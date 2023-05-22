const max_number = 500;
// let guesses = [];

const game = {
    number_to_guess: 0,
    guesses: 0,
    scores: [],
};

const generate_number = (max, min = 0) => {
    return Math.round(Math.random() * (max - min) + min);
};

const guess = (my_guess) => {
    game.guesses += 1;
    if (my_guess === game.number_to_guess) {
        console.log(
            `Bravo vous avez trouvé le nombre en ${game.guesses} coups.`
        );
        game.scores.push(game.guesses);
        display_scores();
        return start_game();
    } else if (my_guess < game.number_to_guess) {
        console.log(`C'est plus. Vous en etes au ${game.guesses}eme coups.`);
        return guess(parseInt(prompt("Veuillez entrer votre reponse ?")));
    } else if (my_guess > game.number_to_guess) {
        console.log(`C'est moins. Vous en etes au ${game.guesses}eme coups.`);
        return guess(parseInt(prompt("Veuillez entrer votre reponse ?")));
    } else if (my_guess === "exit") {
        return;
    } else if (my_guess === "replay") {
        return start_game();
    } else {
        return;
    }
};

const start_game = () => {
    game.number_to_guess = generate_number(max_number);
    console.log(game.number_to_guess);
    // guesses = [];
    game.guesses = 0;
    console.log("Nouvelle partie:");
    guess(parseInt(prompt("Veuillez entrer votre reponse ?")));
};

const display_scores = () => {
    game.scores.map( (score, index) => {console.log(`Partie ${index+1}: ${score} essais.`)})
}

start_game();
